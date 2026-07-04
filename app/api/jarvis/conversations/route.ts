import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { canEditLead } from "@/lib/jarvis-permissions";
import {
  CONVERSATION_CHANNELS,
  type ConversationChannel,
  type JarvisConversation,
} from "@/lib/jarvis-types";
import { normalizeWhatsAppPhone } from "@/lib/whatsapp-cloud";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get("lead_id");
    const channel = searchParams.get("channel");
    const status = searchParams.get("status");

    const supabase = getSupabaseAdmin();
    let query = supabase
      .from("jarvis_conversations")
      .select("*")
      .order("last_message_at", { ascending: false, nullsFirst: false });

    if (leadId) {
      query = query.eq("lead_id", leadId);
    }

    if (
      channel &&
      CONVERSATION_CHANNELS.includes(channel as ConversationChannel)
    ) {
      query = query.eq("channel", channel);
    }

    if (status === "open" || status === "archived") {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Jarvis conversations list error:", error);
      return NextResponse.json(
        { error: "Could not load conversations" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      conversations: (data ?? []) as JarvisConversation[],
    });
  } catch (error) {
    console.error("Jarvis conversations GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canEditLead(session.user)) {
    return jarvisForbidden();
  }

  try {
    const body = await request.json();
    const contactName =
      typeof body.contact_name === "string" ? body.contact_name.trim() : "";
    const contactPhone =
      typeof body.contact_phone === "string" ? body.contact_phone.trim() : null;
    const contactEmail =
      typeof body.contact_email === "string" ? body.contact_email.trim() : null;
    const leadId = typeof body.lead_id === "string" ? body.lead_id : null;
    const channel =
      typeof body.channel === "string" &&
      CONVERSATION_CHANNELS.includes(body.channel as ConversationChannel)
        ? (body.channel as ConversationChannel)
        : "manual";
    const initialMessage =
      typeof body.initial_message === "string"
        ? body.initial_message.trim()
        : "";

    if (!contactName) {
      return NextResponse.json(
        { error: "Contact name is required" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const now = new Date().toISOString();

    if (leadId) {
      const { data: lead } = await supabase
        .from("jarvis_leads")
        .select("id")
        .eq("id", leadId)
        .single();

      if (!lead) {
        return NextResponse.json({ error: "Lead not found" }, { status: 404 });
      }
    }

    // For WhatsApp conversations, store the normalised phone as the thread ID
    // so inbound messages from that number are matched to this conversation.
    const externalThreadId =
      channel === "whatsapp" && contactPhone
        ? (normalizeWhatsAppPhone(contactPhone) ?? null)
        : null;

    const { data: conversation, error } = await supabase
      .from("jarvis_conversations")
      .insert({
        lead_id: leadId,
        contact_name: contactName,
        contact_phone: contactPhone,
        contact_email: contactEmail,
        channel,
        external_thread_id: externalThreadId,
        last_message_at: initialMessage ? now : null,
        last_message_preview: initialMessage || null,
        updated_at: now,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Jarvis conversation create error:", error);
      return NextResponse.json(
        { error: "Could not create conversation" },
        { status: 500 }
      );
    }

    if (initialMessage) {
      await supabase.from("jarvis_messages").insert({
        conversation_id: conversation.id,
        direction: "outbound",
        body: initialMessage,
        status: "sent",
        sent_by_user_id: session.user.id,
      });
    }

    await logJarvisAudit({
      actor: session.user,
      action: "conversation_created",
      entityType: "conversation",
      entityId: conversation.id,
      summary: `Created ${channel} conversation with ${contactName}`,
      metadata: { lead_id: leadId },
    });

    return NextResponse.json(
      { conversation: conversation as JarvisConversation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Jarvis conversations POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
