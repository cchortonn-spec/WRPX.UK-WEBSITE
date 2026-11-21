import { NextResponse } from "next/server";
import { DASHBOARD_RANGES, type AnalyticsEvent, type DashboardRange } from "@/lib/analytics-types";
import { getDashboardAuthFromCookies } from "@/lib/dashboard-auth";
import { computeDashboard } from "@/lib/dashboard-stats";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

/** The database hands back at most 1,000 rows per request, so we read in pages. */
const PAGE_SIZE = 1000;
/** Safety limit so one request can never run away. */
const MAX_ROWS = 100_000;

const DAY_MS = 24 * 60 * 60 * 1000;

function parseRange(value: string | null): DashboardRange {
  return DASHBOARD_RANGES.includes(value as DashboardRange) ? (value as DashboardRange) : "7d";
}

/** How far back to read: the chosen period plus the one before it (for comparisons). */
function fetchFrom(range: DashboardRange, now: Date) {
  if (range === "all") return null;
  const days = range === "today" ? 1 : range === "7d" ? 7 : 30;
  // + 2 days of slack so UK day boundaries are never cut off.
  return new Date(now.getTime() - (days * 2 + 2) * DAY_MS).toISOString();
}

export async function GET(request: Request) {
  const isAuthenticated = await getDashboardAuthFromCookies();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const range = parseRange(new URL(request.url).searchParams.get("range"));
    const supabase = getSupabaseAdmin();
    const now = new Date();
    const from = fetchFrom(range, now);

    const events: AnalyticsEvent[] = [];
    for (let offset = 0; offset < MAX_ROWS; offset += PAGE_SIZE) {
      let query = supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1);
      if (from) query = query.gte("created_at", from);

      const { data, error } = await query;
      if (error) {
        console.error("Failed to load analytics:", error);
        return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
      }

      events.push(...((data ?? []) as AnalyticsEvent[]));
      if (!data || data.length < PAGE_SIZE) break;
    }

    const { count } = await supabase.from("events").select("*", { count: "exact", head: true });
    const { data: first } = await supabase
      .from("events")
      .select("created_at")
      .order("created_at", { ascending: true })
      .limit(1);

    const stats = computeDashboard(events, range, {
      trackingSince: first?.[0]?.created_at ?? null,
      totalEventsInDatabase: count ?? events.length,
    }, now);

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
