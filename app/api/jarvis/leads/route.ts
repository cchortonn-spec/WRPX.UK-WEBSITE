import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import {
  LEAD_SOURCES,
  LEAD_STAGE_IDS,
  PRIORITIES,
  type JarvisLead,
  type LeadSource,
  type LeadStageId,
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
        : "medium";
    const colourStyle =
      typeof body.colour_style === "string" ? body.colour_style.trim() : null;
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
        { error: "Could not create contact" },
        { status: 500 }
      );
    }

    const { data: lead, error: leadError } = await supabase
      .from("jarvis_leads")
      .insert({
        contact_id: contact.id,
        name,
        phone,
        email,
        source,
        status,
        priority,
        colour_style: colourStyle,
        photos_received: photosReceived,
        ai_summary: aiSummary,
        ai_next_action: aiNextAction,
        updated_at: now,
      })
      .select("*")
      .single();

    if (leadError) {
      console.error("Jarvis lead create error:", leadError);
      return NextResponse.json({ error: "Could not create lead" }, { status: 500 });
    }

    if (notes) {
      await supabase.from("jarvis_lead_notes").insert({
        lead_id: lead.id,
        body: notes,
      });
    }

    return NextResponse.json({ lead: lead as JarvisLead }, { status: 201 });
  } catch (error) {
    console.error("Jarvis leads POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
