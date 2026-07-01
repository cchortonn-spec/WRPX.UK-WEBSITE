import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { applyFollowUpAction } from "@/lib/jarvis-lead-update";
import { getLeadInsights } from "@/lib/jarvis-lead-insights";
import {
  FOLLOW_UP_STATUSES,
  JOB_TYPES,
  LEAD_SOURCES,
  LEAD_STAGE_IDS,
  LEAD_TEMPERATURES,
  PHOTO_TYPES,
  PRICING_ROUTES,
  PRIORITIES,
  type FollowUpAction,
  type FollowUpStatus,
  type JarvisLeadDetail,
  type JarvisLeadPhoto,
  type JobType,
  type LeadSource,
  type LeadStageId,
  type LeadTemperature,
  type PhotoType,
  type PricingRoute,
  type Priority,
} from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const { id } = await context.params;
    const supabase = getSupabaseAdmin();

    const { data: lead, error: leadError } = await supabase
      .from("jarvis_leads")
      .select("*")
      .eq("id", id)
      .single();

    if (leadError || !lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const [{ data: notes }, { data: tasks }, { data: photos }] = await Promise.all([
      supabase
        .from("jarvis_lead_notes")
        .select("*")
        .eq("lead_id", id)
        .order("created_at", { ascending: false }),
      supabase
        .from("jarvis_tasks")
        .select("*")
        .eq("related_lead_id", id)
        .order("due_at", { ascending: true, nullsFirst: false }),
      supabase
        .from("jarvis_lead_photos")
        .select("*")
        .eq("lead_id", id)
        .order("uploaded_at", { ascending: false }),
    ]);

    const typedLead = lead as JarvisLeadDetail;
    const detail: JarvisLeadDetail = {
      ...typedLead,
      notes: notes ?? [],
      tasks: tasks ?? [],
      photos: (photos ?? []) as JarvisLeadPhoto[],
      insights: getLeadInsights(typedLead),
    };

    return NextResponse.json({ lead: detail });
  } catch (error) {
    console.error("Jarvis lead GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const updates: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (typeof body.name === "string") updates.name = body.name.trim();
    if (typeof body.phone === "string") updates.phone = body.phone.trim() || null;
    if (typeof body.email === "string") updates.email = body.email.trim() || null;
    if (typeof body.source === "string" && LEAD_SOURCES.includes(body.source as LeadSource)) {
      updates.source = body.source;
    }
    if (typeof body.status === "string" && LEAD_STAGE_IDS.includes(body.status as LeadStageId)) {
      updates.status = body.status;
    }
    if (typeof body.priority === "string" && PRIORITIES.includes(body.priority as Priority)) {
      updates.priority = body.priority;
    }
    if (
      typeof body.job_type === "string" &&
      (JOB_TYPES.includes(body.job_type as JobType) || body.job_type === "")
    ) {
      updates.job_type = body.job_type || null;
    }
    if (typeof body.colour_scheme === "string") {
      updates.colour_scheme = body.colour_scheme.trim() || null;
      updates.colour_style = body.colour_scheme.trim() || null;
    }
    if (typeof body.colour_style === "string") {
      updates.colour_style = body.colour_style.trim() || null;
      updates.colour_scheme = body.colour_style.trim() || null;
    }
    if (typeof body.photos_received === "boolean") updates.photos_received = body.photos_received;
    if (typeof body.ai_summary === "string") updates.ai_summary = body.ai_summary.trim() || null;
    if (typeof body.ai_next_action === "string") {
      updates.ai_next_action = body.ai_next_action.trim() || null;
    }
    if (
      typeof body.pricing_route === "string" &&
      PRICING_ROUTES.includes(body.pricing_route as PricingRoute)
    ) {
      updates.pricing_route = body.pricing_route;
    }
    if (typeof body.follow_up_date === "string" || body.follow_up_date === null) {
      updates.follow_up_date = body.follow_up_date;
    }
    if (
      typeof body.follow_up_status === "string" &&
      FOLLOW_UP_STATUSES.includes(body.follow_up_status as FollowUpStatus)
    ) {
      updates.follow_up_status = body.follow_up_status;
    }
    if (typeof body.last_contacted_at === "string" || body.last_contacted_at === null) {
      updates.last_contacted_at = body.last_contacted_at;
    }
    if (typeof body.estimated_amount === "number" || body.estimated_amount === null) {
      updates.estimated_amount = body.estimated_amount;
    }
    if (typeof body.quoted_amount === "number" || body.quoted_amount === null) {
      updates.quoted_amount = body.quoted_amount;
    }
    if (typeof body.deposit_amount === "number" || body.deposit_amount === null) {
      updates.deposit_amount = body.deposit_amount;
    }
    if (typeof body.quote_sent_at === "string" || body.quote_sent_at === null) {
      updates.quote_sent_at = body.quote_sent_at;
    }
    if (typeof body.survey_date === "string" || body.survey_date === null) {
      updates.survey_date = body.survey_date;
    }
    if (typeof body.pricing_notes === "string") {
      updates.pricing_notes = body.pricing_notes.trim() || null;
    }
    if (
      typeof body.lead_temperature === "string" &&
      LEAD_TEMPERATURES.includes(body.lead_temperature as LeadTemperature)
    ) {
      updates.lead_temperature = body.lead_temperature;
    }
    if (
      typeof body.install_interest_level === "string" &&
      LEAD_TEMPERATURES.includes(body.install_interest_level as LeadTemperature)
    ) {
      updates.install_interest_level = body.install_interest_level;
    }

    if (
      typeof body.follow_up_action === "string" &&
      ["tomorrow", "3_days", "next_week", "mark_sent", "clear"].includes(
        body.follow_up_action
      )
    ) {
      Object.assign(updates, applyFollowUpAction(body.follow_up_action as FollowUpAction));
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_leads")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();

    if (error || !data) {
      console.error("Jarvis lead update error:", error);
      return NextResponse.json({ error: "Could not update lead" }, { status: 500 });
    }

    return NextResponse.json({ lead: data });
  } catch (error) {
    console.error("Jarvis lead PATCH error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
