import { NextResponse } from "next/server";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import { getLeadInsights } from "@/lib/jarvis-lead-insights";
import type { JarvisLead } from "@/lib/jarvis-types";
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
    const { data: lead, error } = await supabase
      .from("jarvis_leads")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ insights: getLeadInsights(lead as JarvisLead) });
  } catch (error) {
    console.error("Jarvis lead insights error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
