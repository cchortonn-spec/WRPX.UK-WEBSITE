import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import {
  formatJarvisDbError,
  isMissingSchemaColumnError,
} from "@/lib/jarvis-db-errors";
import {
  buildPhase1LeadInsert,
  buildPhase2LeadInsert,
  JARVIS_PHASE_2_MIGRATION_WARNING,
} from "@/lib/jarvis-lead-create";
import {
  JOB_TYPES,
  LEAD_SOURCES,
  LEAD_STAGE_IDS,
  LEAD_TEMPERATURES,
  PRICING_ROUTES,
  PRIORITIES,
  type JarvisLead,
  type JobType,
  type LeadSource,
  type LeadStageId,
  type LeadTemperature,
  type PricingRoute,
  type Priority,
} from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: Request) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const source = searchParams.get("source");

    const supabase = getSupabaseAdmin();
    let query = supabase
      .from("jarvis_leads")
      .select("*")
      .order("updated_at", { ascending: false });

    if (status && LEAD_STAGE_IDS.includes(status as LeadStageId)) {
      query = query.eq("status", status);
    }

    if (source && LEAD_SOURCES.includes(source as LeadSource)) {
      query = query.eq("source", source);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Jarvis leads list error:", error);
      return NextResponse.json({ error: "Could not load leads" }, { status: 500 });
    }

    return NextResponse.json({ leads: (data ?? []) as JarvisLead[] });
  } catch (error) {
    console.error("Jarvis leads GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : null;
    const email = typeof body.email === "string" ? body.email.trim() : null;
    const source =
      typeof body.source === "string" &&
      LEAD_SOURCES.includes(body.source as LeadSource)
        ? (body.source as LeadSource)
        : "manual";
    const status =
      typeof body.status === "string" &&
      LEAD_STAGE_IDS.includes(body.status as LeadStageId)
        ? (body.status as LeadStageId)
        : "new_lead";
    const priority =
      typeof body.priority === "string" &&
      PRIORITIES.includes(body.priority as Priority)
        ? (body.priority as Priority)
        : "normal";
    const colourScheme =
      typeof body.colour_scheme === "string"
        ? body.colour_scheme.trim()
        : typeof body.colour_style === "string"
          ? body.colour_style.trim()
          : null;
    const jobType =
      typeof body.job_type === "string" &&
      JOB_TYPES.includes(body.job_type as JobType)
        ? (body.job_type as JobType)
        : null;
    const pricingRoute =
      typeof body.pricing_route === "string" &&
      PRICING_ROUTES.includes(body.pricing_route as PricingRoute)
        ? (body.pricing_route as PricingRoute)
        : "unknown";
    const leadTemperature =
      typeof body.lead_temperature === "string" &&
      LEAD_TEMPERATURES.includes(body.lead_temperature as LeadTemperature)
        ? (body.lead_temperature as LeadTemperature)
        : "unknown";
    const aiSummary =
      typeof body.ai_summary === "string" ? body.ai_summary.trim() : null;
    const aiNextAction =
      typeof body.ai_next_action === "string" ? body.ai_next_action.trim() : null;
    const photosReceived = Boolean(body.photos_received);
    const notes = typeof body.notes === "string" ? body.notes.trim() : "";

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const now = new Date().toISOString();

    const { data: contact, error: contactError } = await supabase
      .from("jarvis_contacts")
      .insert({
        name,
        phone,
        email,
        source,
        contact_type: "domestic",
        updated_at: now,
      })
      .select("id")
      .single();

    if (contactError) {
      console.error("Jarvis contact create error:", contactError);
      return NextResponse.json(
        {
          error: formatJarvisDbError(contactError, "Could not create contact"),
        },
        { status: 500 }
      );
    }

    const leadInput = {
      contactId: contact.id,
      name,
      phone,
      email,
      source,
      status,
      priority,
      jobType,
      colourScheme,
      pricingRoute,
      leadTemperature,
      photosReceived,
      aiSummary,
      aiNextAction,
      updatedAt: now,
    };

    let migrationWarning: string | undefined;
    let lead: JarvisLead | null = null;

    const phase2Result = await supabase
      .from("jarvis_leads")
      .insert(buildPhase2LeadInsert(leadInput))
      .select("*")
      .single();

    if (phase2Result.error && isMissingSchemaColumnError(phase2Result.error)) {
      console.warn(
        "Jarvis lead create: Phase 2 schema missing, using Phase 1 fallback.",
        phase2Result.error.message
      );
      migrationWarning = JARVIS_PHASE_2_MIGRATION_WARNING;

      const phase1Result = await supabase
        .from("jarvis_leads")
        .insert(buildPhase1LeadInsert(leadInput))
        .select("*")
        .single();

      if (phase1Result.error) {
        console.error("Jarvis lead create error:", phase1Result.error);
        return NextResponse.json(
          {
            error: formatJarvisDbError(
              phase1Result.error,
              "Could not create lead"
            ),
          },
          { status: 500 }
        );
      }

      lead = phase1Result.data as JarvisLead;
    } else if (phase2Result.error) {
      console.error("Jarvis lead create error:", phase2Result.error);
      return NextResponse.json(
        {
          error: formatJarvisDbError(phase2Result.error, "Could not create lead"),
        },
        { status: 500 }
      );
    } else {
      lead = phase2Result.data as JarvisLead;
    }

    if (!lead) {
      return NextResponse.json({ error: "Could not create lead" }, { status: 500 });
    }

    if (notes) {
      await supabase.from("jarvis_lead_notes").insert({
        lead_id: lead.id,
        body: notes,
      });
    }

    return NextResponse.json(
      {
        lead: lead as JarvisLead,
        ...(migrationWarning ? { warning: migrationWarning } : {}),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Jarvis leads POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
