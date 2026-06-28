import { NextResponse } from "next/server";
import {
  ANALYTICS_EVENT_TYPES,
  type AnalyticsEvent,
  type AnalyticsEventType,
  type DashboardStats,
} from "@/lib/analytics-types";
import { getDashboardAuthFromCookies } from "@/lib/dashboard-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function emptyTotals(): Record<AnalyticsEventType, number> {
  return ANALYTICS_EVENT_TYPES.reduce(
    (acc, type) => {
      acc[type] = 0;
      return acc;
    },
    {} as Record<AnalyticsEventType, number>
  );
}

function countByType(events: AnalyticsEvent[]) {
  const totals = emptyTotals();
  for (const event of events) {
    totals[event.event_type] += 1;
  }
  return totals;
}

function topCounts(
  events: AnalyticsEvent[],
  key: "page_url" | "referrer" | "device" | "country",
  limit = 10
) {
  const counts = new Map<string, number>();

  for (const event of events) {
    const raw = event[key];
    if (!raw) {
      continue;
    }

    const value = key === "referrer" ? normalizeReferrer(raw) : raw;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, count]) => ({ [key]: label, count }))
  .sort((a, b) => b.count - a.count)
    .slice(0, limit) as Array<{ [K in typeof key]: string } & { count: number }>;
}

function normalizeReferrer(referrer: string) {
  try {
    const url = new URL(referrer);
    if (!url.hostname) {
      return "Direct / unknown";
    }
    return url.hostname.replace(/^www\./, "");
  } catch {
    return referrer || "Direct / unknown";
  }
}

function dailyActivity(events: AnalyticsEvent[]) {
  const counts = new Map<string, number>();

  for (const event of events) {
    const date = event.created_at.slice(0, 10);
    counts.set(date, (counts.get(date) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-30);
}

export async function GET() {
  const isAuthenticated = await getDashboardAuthFromCookies();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      console.error("Failed to load analytics:", error);
      return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
    }

    const events = (data ?? []) as AnalyticsEvent[];
    const thisWeekEvents = events.filter(
      (event) => new Date(event.created_at) >= weekAgo
    );

    const stats: DashboardStats = {
      totals: {
        allTime: countByType(events),
        thisWeek: countByType(thisWeekEvents),
      },
      topPages: topCounts(
        events.filter((event) => event.event_type === "page_view"),
        "page_url"
      ).map((item) => ({ page_url: item.page_url, count: item.count })),
      topReferrers: topCounts(events, "referrer").map((item) => ({
        referrer: item.referrer,
        count: item.count,
      })),
      devices: topCounts(events, "device").map((item) => ({
        device: item.device,
        count: item.count,
      })),
      countries: topCounts(events, "country").map((item) => ({
        country: item.country,
        count: item.count,
      })),
      dailyActivity: dailyActivity(events),
      recentEvents: events.slice(0, 25),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
