import type { Priority } from "@/lib/jarvis-types";

type Phase1LeadInsert = {
  contact_id: string;
  name: string;
  phone: string | null;
  email: string | null;
  source: string;
  status: string;
  priority: "low" | "medium" | "high" | "urgent";
  job_type: string | null;
  colour_style: string | null;
  photos_received: boolean;
  ai_summary: string | null;
  ai_next_action: string | null;
  updated_at: string;
};

type Phase2LeadInsert = Omit<Phase1LeadInsert, "priority"> & {
  priority: Priority;
  colour_scheme: string | null;
  pricing_route: string;
  lead_temperature: string;
  install_interest_level: string;
};

export function toPhase1Priority(priority: Priority): Phase1LeadInsert["priority"] {
  return priority === "normal" ? "medium" : priority;
}

export function buildPhase2LeadInsert(input: {
  contactId: string;
  name: string;
  phone: string | null;
  email: string | null;
  source: string;
  status: string;
  priority: Priority;
  jobType: string | null;
  colourScheme: string | null;
  pricingRoute: string;
  leadTemperature: string;
  photosReceived: boolean;
  aiSummary: string | null;
  aiNextAction: string | null;
  updatedAt: string;
}): Phase2LeadInsert {
  return {
    contact_id: input.contactId,
    name: input.name,
    phone: input.phone,
    email: input.email,
    source: input.source,
    status: input.status,
    priority: input.priority,
    job_type: input.jobType,
    colour_style: input.colourScheme,
    colour_scheme: input.colourScheme,
    pricing_route: input.pricingRoute,
    lead_temperature: input.leadTemperature,
    install_interest_level: input.leadTemperature,
    photos_received: input.photosReceived,
    ai_summary: input.aiSummary,
    ai_next_action: input.aiNextAction,
    updated_at: input.updatedAt,
  };
}

export function buildPhase1LeadInsert(input: {
  contactId: string;
  name: string;
  phone: string | null;
  email: string | null;
  source: string;
  status: string;
  priority: Priority;
  jobType: string | null;
  colourScheme: string | null;
  photosReceived: boolean;
  aiSummary: string | null;
  aiNextAction: string | null;
  updatedAt: string;
}): Phase1LeadInsert {
  return {
    contact_id: input.contactId,
    name: input.name,
    phone: input.phone,
    email: input.email,
    source: input.source,
    status: input.status,
    priority: toPhase1Priority(input.priority),
    job_type: input.jobType,
    colour_style: input.colourScheme,
    photos_received: input.photosReceived,
    ai_summary: input.aiSummary,
    ai_next_action: input.aiNextAction,
    updated_at: input.updatedAt,
  };
}

export const JARVIS_PHASE_2_MIGRATION_WARNING =
  "Lead saved with basic fields only. Run supabase/migrations/005_jarvis_phase_2_leads.sql in Supabase SQL Editor to unlock full Phase 2 features (photos, follow-ups, pipeline fields).";
