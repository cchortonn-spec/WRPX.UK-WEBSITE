import type { SupabaseClient } from "@supabase/supabase-js";
import {
  ensureLeadFromChannel,
  linkConversationToLead,
  touchLeadFromOutboundMessage,
} from "@/lib/jarvis-lead-from-channel";
import {
  fetchMetaLeadgenDetails,
  parseLeadgenWebhookValue,
  sendWelcomeTemplateIfConfigured,
  type MetaLeadgenPayload,
} from "@/lib/meta-leadgen";
import { normalizeWhatsAppPhone } from "@/lib/whatsapp-cloud";

export async function processMetaLeadgenEvent(
  supabase: SupabaseClient,
  value: Record<string, unknown>
): Promise<boolean> {
  const payload = parseLeadgenWebhookValue(value);
  if (!payload) return false;

  return processFacebookLeadAd(supabase, payload);
}

export async function processFacebookLeadAd(
  supabase: SupabaseClient,
  payload: MetaLeadgenPayload
): Promise<boolean> {
  const parsed = await fetchMetaLeadgenDetails(payload.leadgenId);
  const timestamp = new Date(payload.createdTime * 1000).toISOString();

  const { leadId, created } = await ensureLeadFromChannel(supabase, {
    name: parsed.name,
    phone: parsed.phone,
    email: parsed.email,
    source: "facebook",
    externalLeadId: payload.leadgenId,
    status: "new_lead",
  });

  let conversationId: string | null = null;
  const normalizedPhone = parsed.phone
    ? normalizeWhatsAppPhone(parsed.phone)
    : null;

  if (normalizedPhone) {
    const { data: existingConversation } = await supabase
      .from("jarvis_conversations")
      .select("id")
      .eq("channel", "whatsapp")
      .eq("external_thread_id", normalizedPhone)
      .maybeSingle();

    if (existingConversation) {
      conversationId = existingConversation.id;
    } else {
      const { data: newConversation, error } = await supabase
        .from("jarvis_conversations")
        .insert({
          channel: "whatsapp",
          external_thread_id: normalizedPhone,
          contact_name: parsed.name,
          contact_phone: normalizedPhone,
          contact_email: parsed.email,
          lead_id: leadId,
          updated_at: timestamp,
        })
        .select("id")
        .single();

      if (error || !newConversation) {
        console.error("Meta leadgen: could not create conversation", error);
      } else {
        conversationId = newConversation.id;
      }
    }

    if (conversationId) {
      await linkConversationToLead(supabase, conversationId, leadId);
    }
  }

  if (parsed.phone) {
    try {
      const welcome = await sendWelcomeTemplateIfConfigured(
        parsed.phone,
        parsed.name
      );

      if (welcome && conversationId) {
        const preview = `[Template: ${welcome.templateName}]`;
        await supabase.from("jarvis_messages").insert({
          conversation_id: conversationId,
          direction: "outbound",
          body: preview,
          status: "sent",
          external_message_id: welcome.messageId,
          created_at: timestamp,
        });

        await supabase
          .from("jarvis_conversations")
          .update({
            last_message_at: timestamp,
            last_message_preview: preview,
            updated_at: timestamp,
          })
          .eq("id", conversationId);

        await touchLeadFromOutboundMessage(supabase, leadId, timestamp);
      }
    } catch (error) {
      console.error("Meta leadgen: welcome template failed", error);
    }
  }

  console.info(
    `Meta leadgen: processed lead ${payload.leadgenId} → jarvis lead ${leadId}${created ? " (new)" : " (existing)"}`
  );

  return true;
}
