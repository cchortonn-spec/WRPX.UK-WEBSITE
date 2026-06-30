import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { PRIORITIES, type Priority } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const updates: Record<string, unknown> = {};

    if (typeof body.title === "string") {
      updates.title = body.title.trim();
    }
    if (typeof body.description === "string") {
      updates.description = body.description.trim() || null;
    }
    if (
      typeof body.priority === "string" &&
      PRIORITIES.includes(body.priority as Priority)
    ) {
      updates.priority = body.priority;
    }
    if (
      body.status === "open" ||
      body.status === "completed" ||
      body.status === "cancelled"
    ) {
      updates.status = body.status;
      if (body.status === "completed") {
        updates.completed_at = new Date().toISOString();
      } else {
        updates.completed_at = null;
      }
    }
    if (typeof body.due_at === "string" || body.due_at === null) {
      updates.due_at = body.due_at;
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_tasks")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();

    if (error || !data) {
      console.error("Jarvis task update error:", error);
      return NextResponse.json({ error: "Could not update task" }, { status: 500 });
    }

    return NextResponse.json({ task: data });
  } catch (error) {
    console.error("Jarvis task PATCH error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
