import { NextResponse } from "next/server";
import {
  formatHourLabel,
  getPageTitle,
  normalizeReferrer,
} from "@/lib/analytics-helpers";
import {
  LEAD_EVENT_TYPES,
  type AnalyticsEvent,
} from "@/lib/analytics-types";
import { getJarvisAuthFromCookies } from "@/lib/jarvis-auth";
import type {
  InsightPriority,
  JarvisAnalyticsInsight,
  JarvisAnalyticsInsightsResponse,
} from "@/lib/jarvis-types";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function startOfWeek() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}

function isLeadEvent(event: AnalyticsEvent) {
  return LEAD_EVENT_TYPES.includes(
    event.event_type as (typeof LEAD_EVENT_TYPES)[number]
  );
}

function makeInsight(
  partial: Omit<JarvisAnalyticsInsight, "id"> & { id?: string }
): JarvisAnalyticsInsight {
  return {
    id: partial.id ?? crypto.randomUUID(),
    insight_type: partial.insight_type,
    title: partial.title,
    summary: partial.summary,
    recommendation: partial.recommendation,
    priority: partial.priority,
    related_page: partial.related_page,
    related_page_title: partial.related_page_title,
  };
}

function buildPageStats(events: AnalyticsEvent[]) {
  const pageMap = new Map<
    string,
    { views: number; leads: number; title: string }
  >();

  for (const event of events) {
    const current = pageMap.get(event.page_url) ?? {
      views: 0,
      leads: 0,
      title: getPageTitle(event.page_url),
    };

    if (event.event_type === "page_view") {
      current.views += 1;
    }
    if (isLeadEvent(event)) {
      current.leads += 1;
    }

    pageMap.set(event.page_url, current);
  }

  return [...pageMap.entries()].map(([page_url, data]) => ({
    page_url,
    page_title: data.title,
    views: data.views,
    leads: data.leads,
  }));
}

function buildHighTrafficNoLeadInsights(
  pageStats: ReturnType<typeof buildPageStats>
): JarvisAnalyticsInsight[] {
  return pageStats
    .filter((page) => page.views >= 3 && page.leads === 0)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3)
    .map((page) =>
      makeInsight({
        insight_type: "seo",
        title: `${page.page_title} is getting traffic but no leads`,
        summary: `${page.page_title} had ${page.views} view${page.views === 1 ? "" : "s"} this week but has not generated any leads.`,
        recommendation:
          "Add a stronger WhatsApp CTA near the top and include pricing examples or a short enquiry section.",
        priority: page.views >= 7 ? "high" : "medium",
        related_page: page.page_url,
        related_page_title: page.page_title,
      })
    );
}

function buildLeadPageWinnerInsight(
  pageStats: ReturnType<typeof buildPageStats>
): JarvisAnalyticsInsight | null {
  const leadPages = pageStats
    .filter((page) => page.leads > 0)
    .sort((a, b) => b.leads - a.leads || b.views - a.views);

  if (leadPages.length === 0) {
    return null;
  }

  const top = leadPages[0];
  return makeInsight({
    insight_type: "lead",
    title: `${top.page_title} is your top lead page this week`,
    summary: `${top.page_title} generated ${top.leads} lead event${top.leads === 1 ? "" : "s"} from ${top.views} page view${top.views === 1 ? "" : "s"} this week.`,
    recommendation:
      "Keep tracking this page and consider adding similar CTAs to other service pages.",
    priority: "medium",
    related_page: top.page_url,
    related_page_title: top.page_title,
  });
}

function buildMobileInsight(events: AnalyticsEvent[]): JarvisAnalyticsInsight | null {
  const deviceCounts = new Map<string, number>();

  for (const event of events) {
    deviceCounts.set(event.device, (deviceCounts.get(event.device) ?? 0) + 1);
  }

  const total = events.length;
  if (total === 0) {
    return null;
  }

  const mobile = deviceCounts.get("mobile") ?? 0;
  const mobilePercent = Math.round((mobile / total) * 100);

  if (mobilePercent < 40) {
    return null;
  }

  return makeInsight({
    insight_type: "seo",
    title: "Mobile traffic is significant",
    summary: `${mobilePercent}% of website activity this week is from mobile devices.`,
    recommendation:
      "Make sure WhatsApp and enquiry buttons are visible without scrolling on mobile.",
    priority: mobilePercent >= 60 ? "high" : "medium",
  });
}

function buildTrafficSourceInsight(
  events: AnalyticsEvent[]
): JarvisAnalyticsInsight | null {
  const sourceCounts = new Map<string, number>();

  for (const event of events) {
    const source = event.referrer
      ? normalizeReferrer(event.referrer)
      : "Direct / unknown";
    sourceCounts.set(source, (sourceCounts.get(source) ?? 0) + 1);
  }

  const sorted = [...sourceCounts.entries()].sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) {
    return null;
  }

  const [topSource, topCount] = sorted[0];
  const total = events.length;
  const percent = total === 0 ? 0 : Math.round((topCount / total) * 100);

  return makeInsight({
    insight_type: "seo",
    title: `${topSource} is driving the most traffic`,
    summary: `${topSource} accounts for ${percent}% of website activity this week (${topCount} events).`,
    recommendation:
      topSource.includes("google")
        ? "Google is sending strong traffic. Keep SEO momentum and check which landing pages convert best."
        : "Track whether this traffic source is also generating WhatsApp or form enquiries.",
    priority: "low",
  });
}

function buildBusyTimeInsight(events: AnalyticsEvent[]): JarvisAnalyticsInsight | null {
  const hourCounts = new Map<number, number>();

  for (const event of events) {
    const hour = new Date(event.created_at).getHours();
    hourCounts.set(hour, (hourCounts.get(hour) ?? 0) + 1);
  }

  if (hourCounts.size === 0) {
    return null;
  }

  const busiestHour = [...hourCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  if (!busiestHour || busiestHour[1] < 2) {
    return null;
  }

  const [hour, count] = busiestHour;
  const label = formatHourLabel(hour);

  return makeInsight({
    insight_type: "operations",
    title: "Busiest time of day identified",
    summary: `Website activity peaks around ${label} this week (${count} events in that hour).`,
    recommendation:
      "Consider posting on social media or launching ads shortly before this window.",
    priority: "low",
  });
}

function buildLocationPageInsights(
  pageStats: ReturnType<typeof buildPageStats>
): JarvisAnalyticsInsight[] {
  return pageStats
    .filter(
      (page) =>
        page.views >= 1 &&
        (page.page_url.includes("/locations/") ||
          page.page_url.includes("kitchen-wrapping-") ||
          page.page_url.includes("commercial-installation-") ||
          page.page_url.includes("window-film-"))
    )
    .sort((a, b) => b.views - a.views)
    .slice(0, 2)
    .map((page) =>
      makeInsight({
        insight_type: "seo",
        title: `${page.page_title} is gaining traction`,
        summary: `${page.page_title} received ${page.views} visit${page.views === 1 ? "" : "s"} this week.`,
        recommendation:
          "Strengthen this page with more local project photos and a clearer enquiry section.",
        priority: page.leads > 0 ? "medium" : "low",
        related_page: page.page_url,
        related_page_title: page.page_title,
      })
    );
}

function buildCommercialOpportunityInsight(
  pageStats: ReturnType<typeof buildPageStats>
): JarvisAnalyticsInsight | null {
  const commercialPages = pageStats.filter(
    (page) =>
      page.views >= 1 &&
      (page.page_url.includes("furniture-wrapping") ||
        page.page_url.includes("architectural-vinyl") ||
        page.page_url.includes("commercial") ||
        page.page_url.includes("window-film"))
  );

  if (commercialPages.length === 0) {
    return null;
  }

  const top = commercialPages.sort((a, b) => b.views - a.views)[0];

  return makeInsight({
    insight_type: "sales",
    title: "Commercial page opportunity",
    summary: `${top.page_title} received ${top.views} visit${top.views === 1 ? "" : "s"} this week.`,
    recommendation:
      "If WRPX is moving towards commercial architectural wraps, develop this page further with case studies and a direct enquiry CTA.",
    priority: "medium",
    related_page: top.page_url,
    related_page_title: top.page_title,
  });
}

export async function GET() {
  if (!(await getJarvisAuthFromCookies())) {
    return unauthorized();
  }

  try {
    const supabase = getSupabaseAdmin();
    const weekStart = startOfWeek();

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .gte("created_at", weekStart.toISOString())
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      console.error("Jarvis analytics insights error:", error);
      return NextResponse.json(
        { error: "Could not load analytics" },
        { status: 500 }
      );
    }

    const events = (data ?? []) as AnalyticsEvent[];
    const pageStats = buildPageStats(events);

    const insights: JarvisAnalyticsInsight[] = [
      ...buildHighTrafficNoLeadInsights(pageStats),
      buildLeadPageWinnerInsight(pageStats),
      buildMobileInsight(events),
      buildTrafficSourceInsight(events),
      buildBusyTimeInsight(events),
      ...buildLocationPageInsights(pageStats),
      buildCommercialOpportunityInsight(pageStats),
    ].filter((insight): insight is JarvisAnalyticsInsight => insight !== null);

    if (insights.length === 0) {
      insights.push(
        makeInsight({
          insight_type: "operations",
          title: "Not enough website data yet",
          summary:
            "Jarvis needs more website activity this week before SEO insights can be generated.",
          recommendation:
            "Keep the site live and check back once more page views and clicks are recorded.",
          priority: "low",
        })
      );
    }

    const priorityOrder: Record<InsightPriority, number> = {
      high: 0,
      medium: 1,
      low: 2,
    };

    insights.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    const response: JarvisAnalyticsInsightsResponse = {
      insights,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Jarvis analytics insights GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
