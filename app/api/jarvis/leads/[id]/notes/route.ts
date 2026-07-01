import { NextResponse } from "next/server";
import { logJarvisAudit } from "@/lib/jarvis-audit";
import {
  getJarvisSession,
  jarvisForbidden,
  jarvisUnauthorized,
} from "@/lib/jarvis-clerk-auth";
import { canEditLead } from "@/lib/jarvis-permissions";
import { getSupabaseAdmin } from "@/lib/supabase";

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
    const noteBody = typeof body.body === "string" ? body.body.trim() : "";

    if (!noteBody) {
      return NextResponse.json({ error: "Note text is required" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { data: lead } = await supabase
      .from("jarvis_leads")
      .select("id, name")
      .eq("id", id)
      .single();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const { data: note, error } = await supabase
      .from("jarvis_lead_notes")
      .insert({ lead_id: id, body: noteBody })
      .select("*")
      .single();

    if (error) {
      console.error("Jarvis note create error:", error);
      return NextResponse.json({ error: "Could not add note" }, { status: 500 });
    }

    await supabase
      .from("jarvis_leads")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", id);

    await logJarvisAudit({
      actor: session.user,
      action: "note_added",
      entityType: "lead",
      entityId: id,
      summary: `Added note to ${lead.name}`,
    });

    return NextResponse.json({ note }, { status: 201 });
  } catch (error) {
    console.error("Jarvis notes POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
