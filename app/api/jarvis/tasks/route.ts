import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { PRIORITIES, type JarvisTask, type Priority } from "@/lib/jarvis-types";
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
    const leadId = searchParams.get("lead_id");
    const status = searchParams.get("status");

    const supabase = getSupabaseAdmin();
    let query = supabase
      .from("jarvis_tasks")
      .select("*")
      .order("due_at", { ascending: true, nullsFirst: false });

    if (leadId) {
      query = query.eq("related_lead_id", leadId);
    }

    if (status === "open" || status === "completed" || status === "cancelled") {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Jarvis tasks list error:", error);
      return NextResponse.json({ error: "Could not load tasks" }, { status: 500 });
    }

    return NextResponse.json({ tasks: (data ?? []) as JarvisTask[] });
  } catch (error) {
    console.error("Jarvis tasks GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const description =
      typeof body.description === "string" ? body.description.trim() : null;
    const relatedLeadId =
      typeof body.related_lead_id === "string" ? body.related_lead_id : null;
    const priority =
      typeof body.priority === "string" &&
      PRIORITIES.includes(body.priority as Priority)
        ? (body.priority as Priority)
        : "medium";
    const dueAt = typeof body.due_at === "string" ? body.due_at : null;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_tasks")
      .insert({
        title,
        description,
        related_lead_id: relatedLeadId,
        priority,
        due_at: dueAt,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Jarvis task create error:", error);
      return NextResponse.json({ error: "Could not create task" }, { status: 500 });
    }

    return NextResponse.json({ task: data as JarvisTask }, { status: 201 });
  } catch (error) {
    console.error("Jarvis tasks POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
