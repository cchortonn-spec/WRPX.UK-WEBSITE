import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import {
  JOB_TYPES,
  LEAD_SOURCES,
  LEAD_STAGE_IDS,
  PRIORITIES,
  type JarvisLeadDetail,
  type JobType,
  type LeadSource,
  type LeadStageId,
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

    const { data: notes } = await supabase
      .from("jarvis_lead_notes")
      .select("*")
      .eq("lead_id", id)
      .order("created_at", { ascending: false });

    const { data: tasks } = await supabase
      .from("jarvis_tasks")
      .select("*")
      .eq("related_lead_id", id)
      .order("due_at", { ascending: true, nullsFirst: false });

    const detail: JarvisLeadDetail = {
      ...(lead as JarvisLeadDetail),
      notes: notes ?? [],
      tasks: tasks ?? [],
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

    if (typeof body.name === "string") {
      updates.name = body.name.trim();
    }
    if (typeof body.phone === "string") {
      updates.phone = body.phone.trim() || null;
    }
    if (typeof body.email === "string") {
      updates.email = body.email.trim() || null;
    }
    if (
      typeof body.source === "string" &&
      LEAD_SOURCES.includes(body.source as LeadSource)
    ) {
      updates.source = body.source;
    }
    if (
      typeof body.status === "string" &&
      LEAD_STAGE_IDS.includes(body.status as LeadStageId)
    ) {
      updates.status = body.status;
    }
    if (
      typeof body.priority === "string" &&
      PRIORITIES.includes(body.priority as Priority)
    ) {
      updates.priority = body.priority;
    }
    if (
      typeof body.job_type === "string" &&
      (JOB_TYPES.includes(body.job_type as JobType) || body.job_type === "")
    ) {
      updates.job_type = body.job_type || null;
    }
    if (typeof body.colour_style === "string") {
      updates.colour_style = body.colour_style.trim() || null;
    }
    if (typeof body.photos_received === "boolean") {
      updates.photos_received = body.photos_received;
    }
    if (typeof body.ai_summary === "string") {
      updates.ai_summary = body.ai_summary.trim() || null;
    }
    if (typeof body.ai_next_action === "string") {
      updates.ai_next_action = body.ai_next_action.trim() || null;
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
