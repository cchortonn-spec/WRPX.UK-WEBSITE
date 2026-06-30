import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
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
      .select("id")
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

    return NextResponse.json({ note }, { status: 201 });
  } catch (error) {
    console.error("Jarvis notes POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
