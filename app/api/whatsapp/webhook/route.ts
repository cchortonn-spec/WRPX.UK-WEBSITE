import { createHmac } from "crypto";
import { NextResponse } from "next/server";
import { normalizeWhatsAppPhone } from "@/lib/whatsapp-cloud";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

// ─── GET — Meta webhook verification ────────────────────────────────────────
// When you register the webhook URL in Meta's dashboard, Meta sends a GET
// with hub.verify_token. We confirm it matches our env var and echo back
// hub.challenge — Meta then marks the webhook as verified.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token === process.env.WHATSAPP_VERIFY_TOKEN &&
    challenge
  ) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

// ─── POST — inbound messages and delivery status updates ────────────────────
// Meta sends all events here. We must always return 200 quickly —
// if we don't, Meta will retry the same event repeatedly.

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();

    // Validate the HMAC signature from Meta to prevent spoofed payloads.
    const appSecret = process.env.META_APP_SECRET;
    if (appSecret) {
      const signature = request.headers.get("x-hub-signature-256");
      if (!signature) {
        console.warn("WhatsApp webhook: missing signature header");
        return new Response("Forbidden", { status: 403 });
      }
      const expected =
        "sha256=" +
        createHmac("sha256", appSecret).update(rawBody).digest("hex");
      if (signature !== expected) {
        console.warn("WhatsApp webhook: invalid signature");
        return new Response("Forbidden", { status: 403 });
      }
    } else {
      console.warn(
        "WhatsApp webhook: META_APP_SECRET not set, skipping signature check"
      );
    }

    const payload = JSON.parse(rawBody);
    const supabase = getSupabaseAdmin();

    // Meta wraps everything in entry[].changes[]
    const entries = payload?.entry ?? [];

    for (const entry of entries) {
      const changes = entry?.changes ?? [];

      for (const change of changes) {
        if (change?.field !== "messages") continue;

        const value = change?.value;
        if (!value) continue;

        // ── Inbound text/media messages ──────────────────────────────────
        const messages: WebhookMessage[] = value?.messages ?? [];
        for (const msg of messages) {
          await handleInboundMessage(supabase, msg, value);
        }

        // ── Delivery / read status receipts ──────────────────────────────
        const statuses: WebhookStatus[] = value?.statuses ?? [];
        for (const statusUpdate of statuses) {
          await handleStatusUpdate(supabase, statusUpdate);
        }
      }
    }
  } catch (error) {
    // Log but always return 200 so Meta doesn't retry endlessly
    console.error("WhatsApp webhook processing error:", error);
  }

  return new Response("OK", { status: 200 });
}

// ─── Types ───────────────────────────────────────────────────────────────────

type WebhookMessage = {
  from: string;
  id: string;
  timestamp: string;
  type: string;
  text?: { body: string };
  image?: { id: string; mime_type: string; caption?: string };
  document?: { id: string; mime_type: string; filename?: string };
};

type WebhookStatus = {
  id: string;
  status: "sent" | "delivered" | "read" | "failed";
  timestamp: string;
  recipient_id: string;
};

type SupabaseClient = ReturnType<typeof getSupabaseAdmin>;

// ─── Inbound message handler ─────────────────────────────────────────────────

async function handleInboundMessage(
  supabase: SupabaseClient,
  msg: WebhookMessage,
  value: Record<string, unknown>
) {
  const fromPhone = msg.from; // already in international format e.g. 447398395417
  const externalId = msg.id;
  const timestamp = new Date(Number(msg.timestamp) * 1000).toISOString();

  // Extract message body / media
  let body: string | null = null;
  let mediaUrl: string | null = null;
  let mediaType: string | null = null;

  if (msg.type === "text" && msg.text?.body) {
    body = msg.text.body;
  } else if (msg.type === "image" && msg.image) {
    mediaType = msg.image.mime_type;
    body = msg.image.caption ?? null;
    // Media download URL requires a separate API call — store the ID as a placeholder
    mediaUrl = `whatsapp-media:${msg.image.id}`;
  } else if (msg.type === "document" && msg.document) {
    mediaType = msg.document.mime_type;
    body = msg.document.filename ?? null;
    mediaUrl = `whatsapp-media:${msg.document.id}`;
  }

  // Deduplicate — skip if we already have this message
  const { data: existing } = await supabase
    .from("jarvis_messages")
    .select("id")
    .eq("external_message_id", externalId)
    .maybeSingle();

  if (existing) return;

  // Find conversation by sender phone number
  let { data: conversation } = await supabase
    .from("jarvis_conversations")
    .select("id, unread_count")
    .eq("channel", "whatsapp")
    .eq("external_thread_id", fromPhone)
    .maybeSingle();

  // Auto-create a conversation if this is the first message from this number
  if (!conversation) {
    const contactName = extractContactName(value, fromPhone);

    const { data: newConv, error: createError } = await supabase
      .from("jarvis_conversations")
      .insert({
        channel: "whatsapp",
        external_thread_id: fromPhone,
        contact_name: contactName,
        contact_phone: fromPhone,
        last_message_at: timestamp,
        last_message_preview: body ?? "[Media]",
        unread_count: 1,
        updated_at: timestamp,
      })
      .select("id, unread_count")
      .single();

    if (createError || !newConv) {
      console.error(
        "WhatsApp webhook: could not create conversation",
        createError
      );
      return;
    }

    conversation = newConv;
  } else {
    // Update conversation preview and unread count
    await supabase
      .from("jarvis_conversations")
      .update({
        last_message_at: timestamp,
        last_message_preview: body ?? "[Media]",
        unread_count: (conversation.unread_count ?? 0) + 1,
        updated_at: timestamp,
      })
      .eq("id", conversation.id);
  }

  // Save the inbound message
  await supabase.from("jarvis_messages").insert({
    conversation_id: conversation.id,
    direction: "inbound",
    body,
    status: "delivered",
    media_url: mediaUrl,
    media_type: mediaType,
    external_message_id: externalId,
    created_at: timestamp,
  });
}

// ─── Status update handler ───────────────────────────────────────────────────

async function handleStatusUpdate(
  supabase: SupabaseClient,
  statusUpdate: WebhookStatus
) {
  const { id: externalId, status } = statusUpdate;
  if (!["sent", "delivered", "read", "failed"].includes(status)) return;

  await supabase
    .from("jarvis_messages")
    .update({ status })
    .eq("external_message_id", externalId);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractContactName(
  value: Record<string, unknown>,
  fallbackPhone: string
): string {
  try {
    const contacts = value?.contacts as
      | Array<{ profile?: { name?: string } }>
      | undefined;
    const name = contacts?.[0]?.profile?.name;
    if (name && name.trim()) return name.trim();
  } catch {
    // fall through
  }
  return fallbackPhone;
}
