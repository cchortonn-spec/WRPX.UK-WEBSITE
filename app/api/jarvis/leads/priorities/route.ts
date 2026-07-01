import { NextResponse } from "next/server";
import { getJarvisSession, jarvisUnauthorized } from "@/lib/jarvis-clerk-auth";
import { rankLeadPriorities } from "@/lib/jarvis-lead-insights";
import type { JarvisLead } from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET() {
  const session = await getJarvisSession();
  if (!session) {
    return jarvisUnauthorized();
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jarvis_leads")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: "Could not load lead priorities" },
        { status: 500 }
      );
    }

    const activeLeads = ((data ?? []) as JarvisLead[]).filter(
      (lead) => !["won", "lost", "not_suitable"].includes(lead.status)
    );

    const priorities = rankLeadPriorities(activeLeads).slice(0, 10);

    return NextResponse.json({ priorities });
  } catch (error) {
    console.error("Jarvis lead priorities error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
