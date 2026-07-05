import { createHmac } from "crypto";
import { processMetaLeadgenEvent } from "@/lib/jarvis-meta-leadgen-process";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

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

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const appSecret = process.env.META_APP_SECRET;

    if (appSecret) {
      const signature = request.headers.get("x-hub-signature-256");
      if (!signature) {
        console.warn("Meta leadgen webhook: missing signature header");
        return new Response("Forbidden", { status: 403 });
      }
      const expected =
        "sha256=" +
        createHmac("sha256", appSecret).update(rawBody).digest("hex");
      if (signature !== expected) {
        console.warn("Meta leadgen webhook: invalid signature");
        return new Response("Forbidden", { status: 403 });
      }
    }

    const payload = JSON.parse(rawBody);
    const supabase = getSupabaseAdmin();
    const entries = payload?.entry ?? [];
    let processed = 0;

    for (const entry of entries) {
      const changes = entry?.changes ?? [];
      for (const change of changes) {
        if (change?.field !== "leadgen") continue;
        const value = change?.value;
        if (!value || typeof value !== "object") continue;

        const ok = await processMetaLeadgenEvent(
          supabase,
          value as Record<string, unknown>
        );
        if (ok) processed += 1;
      }
    }

    if (processed > 0) {
      console.info(`Meta leadgen webhook: processed ${processed} lead(s)`);
    }
  } catch (error) {
    console.error("Meta leadgen webhook processing error:", error);
  }

  return new Response("OK", { status: 200 });
}
