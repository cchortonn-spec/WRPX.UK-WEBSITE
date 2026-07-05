import type { SupabaseClient } from "@supabase/supabase-js";
import { isMissingSchemaColumnError } from "@/lib/jarvis-db-errors";
import {
  buildPhase1LeadInsert,
  buildPhase2LeadInsert,
} from "@/lib/jarvis-lead-create";
import type { JarvisLead, LeadSource } from "@/lib/jarvis-types";
import { normalizeWhatsAppPhone } from "@/lib/whatsapp-cloud";

type EnsureLeadInput = {
  name: string;
  phone: string | null;
  email?: string | null;
  source: LeadSource;
  externalLeadId?: string | null;
  status?: string;
};

type EnsureLeadResult = {
  leadId: string;
  created: boolean;
};

export async function findLeadIdByPhone(
  supabase: SupabaseClient,
  phone: string
): Promise<string | null> {
  const normalized = normalizeWhatsAppPhone(phone);
  if (!normalized) return null;

  const { data: leads } = await supabase
    .from("jarvis_leads")
    .select("id, phone")
    .not("phone", "is", null);

  for (const lead of leads ?? []) {
    if (!lead.phone) continue;
    const leadNormalized = normalizeWhatsAppPhone(lead.phone);
    if (leadNormalized === normalized) {
      return lead.id;
    }
  }

  return null;
}

export async function findLeadByExternalId(
  supabase: SupabaseClient,
  externalLeadId: string
): Promise<string | null> {
  const { data } = await supabase
    .from("jarvis_leads")
    .select("id")
    .eq("external_lead_id", externalLeadId)
    .maybeSingle();

  return data?.id ?? null;
}

export async function ensureLeadFromChannel(
  supabase: SupabaseClient,
  input: EnsureLeadInput
): Promise<EnsureLeadResult> {
  if (input.externalLeadId) {
    const existingExternal = await findLeadByExternalId(
      supabase,
      input.externalLeadId
    );
    if (existingExternal) {
      return { leadId: existingExternal, created: false };
    }
  }

  if (input.phone) {
    const existingPhone = await findLeadIdByPhone(supabase, input.phone);
    if (existingPhone) {
      return { leadId: existingPhone, created: false };
    }
  }

  const now = new Date().toISOString();
  const phone = input.phone
    ? normalizeWhatsAppPhone(input.phone) ?? input.phone
    : null;

  const { data: contact, error: contactError } = await supabase
    .from("jarvis_contacts")
    .insert({
      name: input.name,
      phone,
      email: input.email ?? null,
      source: input.source,
      contact_type: "domestic",
      updated_at: now,
    })
    .select("id")
    .single();

  if (contactError || !contact) {
    throw new Error("Could not create contact for inbound lead");
  }

  const leadInput = {
    contactId: contact.id,
    name: input.name,
    phone,
    email: input.email ?? null,
    source: input.source,
    status: input.status ?? "new_lead",
    priority: "normal" as const,
    jobType: null,
    colourScheme: null,
    pricingRoute: "unknown",
    leadTemperature: "unknown",
    photosReceived: false,
    aiSummary: null,
    aiNextAction: null,
    updatedAt: now,
  };

  const phase2Insert = buildPhase2LeadInsert(leadInput);
  const insertPayload = input.externalLeadId
    ? { ...phase2Insert, external_lead_id: input.externalLeadId }
    : phase2Insert;

  let { data: lead, error: leadError } = await supabase
    .from("jarvis_leads")
    .insert(insertPayload)
    .select("*")
    .single();

  if (
    leadError &&
    input.externalLeadId &&
    isMissingSchemaColumnError(leadError)
  ) {
    ({ data: lead, error: leadError } = await supabase
      .from("jarvis_leads")
      .insert(buildPhase2LeadInsert(leadInput))
      .select("*")
      .single());
  }

  if (leadError && isMissingSchemaColumnError(leadError)) {
    ({ data: lead, error: leadError } = await supabase
      .from("jarvis_leads")
      .insert(buildPhase1LeadInsert(leadInput))
      .select("*")
      .single());
  }

  if (leadError || !lead) {
    throw new Error("Could not create lead from channel");
  }

  return { leadId: (lead as JarvisLead).id, created: true };
}

export async function linkConversationToLead(
  supabase: SupabaseClient,
  conversationId: string,
  leadId: string
) {
  await supabase
    .from("jarvis_conversations")
    .update({ lead_id: leadId, updated_at: new Date().toISOString() })
    .eq("id", conversationId)
    .is("lead_id", null);
}

export async function touchLeadFromInboundMessage(
  supabase: SupabaseClient,
  leadId: string,
  timestamp: string
) {
  await supabase
    .from("jarvis_leads")
    .update({
      last_customer_message_at: timestamp,
      last_contacted_at: timestamp,
      updated_at: timestamp,
    })
    .eq("id", leadId);
}

export async function touchLeadFromOutboundMessage(
  supabase: SupabaseClient,
  leadId: string,
  timestamp: string,
  status?: string
) {
  const updates: Record<string, string> = {
    last_contacted_at: timestamp,
    updated_at: timestamp,
  };
  if (status) {
    updates.status = status;
  }
  await supabase.from("jarvis_leads").update(updates).eq("id", leadId);
}
