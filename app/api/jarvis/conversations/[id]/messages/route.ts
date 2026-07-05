import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { canEditLead } from "@/lib/jarvis-permissions";
import { touchLeadFromOutboundMessage } from "@/lib/jarvis-lead-from-channel";
import type { JarvisMessage } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  normalizeWhatsAppPhone,
  sendWhatsAppTextMessage,
} from "@/lib/whatsapp-cloud";
import {
  getWhatsAppTemplateById,
  sendWhatsAppTemplateMessage,
} from "@/lib/whatsapp-templates";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  if (!canEditLead(session.user)) {
    return jarvisForbidden();
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const messageBody = typeof body.body === "string" ? body.body.trim() : "";
    const templateId =
      typeof body.template_id === "string" ? body.template_id.trim() : "";
    const templateParams = Array.isArray(body.template_params)
      ? body.template_params.map((value: unknown) => String(value ?? "").trim())
      : [];
    const mediaUrl =
      typeof body.media_url === "string" ? body.media_url.trim() : null;
    const mediaType =
      typeof body.media_type === "string" ? body.media_type.trim() : null;

    if (!messageBody && !mediaUrl && !templateId) {
      return NextResponse.json(
        { error: "Message text, template, or media is required" },
        { status: 400 }
      );
    }

    const template = templateId ? getWhatsAppTemplateById(templateId) : null;
    if (templateId && !template) {
      return NextResponse.json(
        { error: "Unknown or unconfigured WhatsApp template" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: conversation } = await supabase
      .from("jarvis_conversations")
      .select("id, contact_name, contact_phone, channel, lead_id")
      .eq("id", id)
      .single();

    if (!conversation) {
      return NextResponse.json(
        { error: "Conversation not found" },
        { status: 404 }
      );
    }

    const now = new Date().toISOString();
    const preview = template
      ? `[Template: ${template.label}]`
      : messageBody || (mediaUrl ? "[Media]" : "");

    // Save the message first — always, regardless of delivery outcome
    const { data: message, error } = await supabase
      .from("jarvis_messages")
      .insert({
        conversation_id: id,
        direction: "outbound",
        body: template ? preview : messageBody || null,
        status: "pending",
        media_url: mediaUrl,
        media_type: mediaType,
        sent_by_user_id: session.user.id,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Jarvis message create error:", error);
      return NextResponse.json(
        { error: "Could not send message" },
        { status: 500 }
      );
    }

    await supabase
      .from("jarvis_conversations")
      .update({
        last_message_at: now,
        last_message_preview: preview,
        updated_at: now,
      })
      .eq("id", id);

    if (conversation.lead_id) {
      await touchLeadFromOutboundMessage(
        supabase,
        conversation.lead_id,
        now
      );
    }

    // ── WhatsApp delivery ────────────────────────────────────────────────────
    if (
      conversation.channel === "whatsapp" &&
      conversation.contact_phone
    ) {
      const normalised = normalizeWhatsAppPhone(conversation.contact_phone);

      if (normalised && template) {
        try {
          const params =
            templateParams.length > 0
              ? templateParams
              : [conversation.contact_name.trim().split(/\s+/)[0] || "there"];
          const { messageId } = await sendWhatsAppTemplateMessage(
            normalised,
            template.templateName,
            template.languageCode,
            params
          );
          await supabase
            .from("jarvis_messages")
            .update({ external_message_id: messageId, status: "sent" })
            .eq("id", message.id);
        } catch (sendError) {
          console.error("WhatsApp template send error:", sendError);
          await supabase
            .from("jarvis_messages")
            .update({ status: "failed" })
            .eq("id", message.id);
        }
      } else if (normalised && messageBody) {
        try {
          const { messageId } = await sendWhatsAppTextMessage(
            normalised,
            messageBody
          );
          await supabase
            .from("jarvis_messages")
            .update({ external_message_id: messageId, status: "sent" })
            .eq("id", message.id);
        } catch (sendError) {
          console.error("WhatsApp send error:", sendError);
          await supabase
            .from("jarvis_messages")
            .update({ status: "failed" })
            .eq("id", message.id);
        }
      } else if (!normalised) {
        console.warn(
          "WhatsApp send skipped — could not normalise phone:",
          conversation.contact_phone
        );
        await supabase
          .from("jarvis_messages")
          .update({ status: "failed" })
          .eq("id", message.id);
      }
    } else if (conversation.channel !== "whatsapp") {
      // Non-WhatsApp channels (manual/email/sms) — mark as sent immediately
      await supabase
        .from("jarvis_messages")
        .update({ status: "sent" })
        .eq("id", message.id);
    }

    await logJarvisAudit({
      actor: session.user,
      action: "message_sent",
      entityType: "conversation",
      entityId: id,
      summary: `Sent message to ${conversation.contact_name}`,
      metadata: {
        lead_id: conversation.lead_id,
        channel: conversation.channel,
        template_id: template?.id ?? null,
      },
    });

    // Re-fetch the message so the returned status is accurate
    const { data: updatedMessage } = await supabase
      .from("jarvis_messages")
      .select("*")
      .eq("id", message.id)
      .single();

    return NextResponse.json(
      { message: (updatedMessage ?? message) as JarvisMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Jarvis messages POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
