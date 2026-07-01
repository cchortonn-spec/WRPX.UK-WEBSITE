import { NextResponse } from "next/server";
import { getJarvisSession, jarvisUnauthorized } from "@/lib/jarvis-clerk-auth";
import { getLeadInsights } from "@/lib/jarvis-lead-insights";
import type { JarvisLead } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
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
