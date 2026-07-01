import { NextResponse } from "next/server";
import {
  formatHourLabel,
  getCountryName,
  getPageTitle,
  isInternalAnalyticsPath,
  normalizeReferrer,
} from "@/lib/analytics-helpers";
import {
  ANALYTICS_EVENT_TYPES,
  LEAD_EVENT_TYPES,
  type AnalyticsEvent,
  type AnalyticsEventType,
  type DashboardStats,
  type LeadByPageStat,
  type TopPageStat,
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

function countPublicLeadTotals(events: AnalyticsEvent[]) {
  const totals = emptyTotals();
  for (const event of events) {
    if (!isPublicLeadEvent(event)) {
      continue;
    }
    totals[event.event_type] += 1;
  }
  return totals;
}

function withPublicLeadTotals(
  totals: Record<AnalyticsEventType, number>,
  events: AnalyticsEvent[]
) {
  const publicLeadTotals = countPublicLeadTotals(events);
  for (const type of LEAD_EVENT_TYPES) {
    totals[type] = publicLeadTotals[type];
  }
  return totals;
}

function isLeadEvent(event: AnalyticsEvent) {
  return LEAD_EVENT_TYPES.includes(
    event.event_type as (typeof LEAD_EVENT_TYPES)[number]
  );
}

function isPublicLeadEvent(event: AnalyticsEvent) {
  return isLeadEvent(event) && !isInternalAnalyticsPath(event.page_url);
}

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function startOfWeek() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}

function withPercentage<T extends { count: number }>(
  items: T[],
  total: number
): Array<T & { percentage: number }> {
  return items.map((item) => ({
    ...item,
    percentage: total === 0 ? 0 : Math.round((item.count / total) * 100),
  }));
}

function topCounts(
  events: AnalyticsEvent[],
  key: "referrer" | "device" | "country" | "city",
  limit = 10
) {
  const counts = new Map<string, { count: number; country?: string | null }>();

  for (const event of events) {
    const raw = event[key];
    if (!raw) {
      continue;
    }

    const value =
      key === "referrer"
        ? normalizeReferrer(raw)
        : key === "city"
          ? raw
          : raw;

    const existing = counts.get(value);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(value, {
        count: 1,
        country: key === "city" ? event.country : null,
      });
    }
  }

  return [...counts.entries()]
    .map(([label, data]) => ({
      label,
      count: data.count,
      country: data.country ?? null,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function buildTopPages(events: AnalyticsEvent[]): TopPageStat[] {
  const pageViews = events.filter((event) => event.event_type === "page_view");
  const totalViews = pageViews.length;
  const todayStart = startOfToday();
  const weekStart = startOfWeek();

  const pageMap = new Map<
    string,
    { count: number; today: number; thisWeek: number; leads: number }
  >();

  for (const event of pageViews) {
    const current = pageMap.get(event.page_url) ?? {
      count: 0,
      today: 0,
      thisWeek: 0,
      leads: 0,
    };
    current.count += 1;

    const createdAt = new Date(event.created_at);
    if (createdAt >= todayStart) {
      current.today += 1;
    }
    if (createdAt >= weekStart) {
      current.thisWeek += 1;
    }

    pageMap.set(event.page_url, current);
  }

  for (const event of events) {
    if (!isPublicLeadEvent(event)) {
      continue;
    }

    const current = pageMap.get(event.page_url) ?? {
      count: 0,
      today: 0,
      thisWeek: 0,
      leads: 0,
    };
    current.leads += 1;
    pageMap.set(event.page_url, current);
  }

  return [...pageMap.entries()]
    .map(([page_url, data]) => ({
      page_url,
      page_title: getPageTitle(page_url),
      count: data.count,
      today: data.today,
      this_week: data.thisWeek,
      percentage:
        totalViews === 0 ? 0 : Math.round((data.count / totalViews) * 100),
      leads: data.leads,
    }))
    .sort((a, b) => b.count - a.count || b.leads - a.leads)
    .slice(0, 20);
}

function buildLeadsByPage(events: AnalyticsEvent[]): LeadByPageStat[] {
  const map = new Map<
    string,
    {
      phone: number;
      email: number;
      whatsapp: number;
      quote_form: number;
      contact_form: number;
    }
  >();

  for (const event of events) {
    if (!isPublicLeadEvent(event)) {
      continue;
    }

    const current = map.get(event.page_url) ?? {
      phone: 0,
      email: 0,
      whatsapp: 0,
      quote_form: 0,
      contact_form: 0,
    };

    if (event.event_type === "phone_click") current.phone += 1;
    if (event.event_type === "email_click") current.email += 1;
    if (event.event_type === "whatsapp_click") current.whatsapp += 1;
    if (event.event_type === "quote_form") current.quote_form += 1;
    if (event.event_type === "contact_form") current.contact_form += 1;

    map.set(event.page_url, current);
  }

  return [...map.entries()]
    .map(([page_url, data]) => ({
      page_url,
      page_title: getPageTitle(page_url),
      ...data,
      total:
        data.phone +
        data.email +
        data.whatsapp +
        data.quote_form +
        data.contact_form,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 15);
}

function dailyActivity(events: AnalyticsEvent[]) {
  const counts = new Map<string, { count: number; page_views: number; leads: number }>();

  for (const event of events) {
    const date = event.created_at.slice(0, 10);
    const current = counts.get(date) ?? { count: 0, page_views: 0, leads: 0 };
    current.count += 1;
    if (event.event_type === "page_view") current.page_views += 1;
    if (isPublicLeadEvent(event)) current.leads += 1;
    counts.set(date, current);
  }

  return [...counts.entries()]
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-30);
}

function hourlyActivity(events: AnalyticsEvent[]) {
  const counts = new Map<number, number>();

  for (const event of events) {
    const hour = new Date(event.created_at).getHours();
    counts.set(hour, (counts.get(hour) ?? 0) + 1);
  }

  return Array.from({ length: 24 }, (_, hour) => ({
    hour,
    label: formatHourLabel(hour),
    count: counts.get(hour) ?? 0,
  }));
}

export async function GET() {
  const isAuthenticated = await getDashboardAuthFromCookies();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const weekStart = startOfWeek();
    const todayStart = startOfToday();

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10000);

    if (error) {
      console.error("Failed to load analytics:", error);
      return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
    }

    const events = (data ?? []) as AnalyticsEvent[];
    const thisWeekEvents = events.filter(
      (event) => new Date(event.created_at) >= weekStart
    );
    const todayEvents = events.filter(
      (event) => new Date(event.created_at) >= todayStart
    );

    const allTimeTotals = withPublicLeadTotals(countByType(events), events);
    const thisWeekTotals = withPublicLeadTotals(countByType(thisWeekEvents), thisWeekEvents);
    const todayTotals = withPublicLeadTotals(countByType(todayEvents), todayEvents);

    const publicLeadEvents = events.filter(isPublicLeadEvent);
    const publicLeadEventsThisWeek = thisWeekEvents.filter(isPublicLeadEvent);
    const publicLeadEventsToday = todayEvents.filter(isPublicLeadEvent);

    const totalLeads = publicLeadEvents.length;
    const leadsToday = publicLeadEventsToday.length;
    const leadsThisWeek = publicLeadEventsThisWeek.length;

    const ukVisitors = events.filter((event) => event.country === "GB").length;
    const internationalVisitors = events.filter(
      (event) => event.country && event.country !== "GB"
    ).length;

    const referrerItems = topCounts(events, "referrer", 12).map((item) => ({
      referrer: item.label,
      count: item.count,
    }));
    const deviceItems = topCounts(events, "device", 6).map((item) => ({
      device: item.label,
      count: item.count,
    }));
    const countryItems = topCounts(events, "country", 12).map((item) => ({
      country: item.label,
      country_name: getCountryName(item.label),
      count: item.count,
    }));
    const cityItems = topCounts(events, "city", 12).map((item) => ({
      city: item.label,
      country: item.country,
      count: item.count,
    }));

    const stats: DashboardStats = {
      summary: {
        total_events: events.length,
        total_page_views: allTimeTotals.page_view,
        page_views_today: todayTotals.page_view,
        page_views_this_week: thisWeekTotals.page_view,
        total_leads: totalLeads,
        leads_today: leadsToday,
        leads_this_week: leadsThisWeek,
        uk_visitors: ukVisitors,
        international_visitors: internationalVisitors,
      },
      totals: {
        allTime: allTimeTotals,
        thisWeek: thisWeekTotals,
        today: todayTotals,
      },
      topPages: buildTopPages(events),
      leadsByPage: buildLeadsByPage(events),
      topReferrers: withPercentage(referrerItems, events.length),
      devices: withPercentage(deviceItems, events.length),
      countries: withPercentage(countryItems, events.length),
      cities: cityItems,
      hourlyActivity: hourlyActivity(events),
      dailyActivity: dailyActivity(events),
      recentEvents: events.slice(0, 50),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
