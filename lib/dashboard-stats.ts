import {
  decodeCity,
  formatHourLabel,
  getCountryName,
  getPageTitle,
  isInternalAnalyticsPath,
  normalizeReferrer,
  shiftDateKey,
  simplifySource,
  ukTime,
} from "@/lib/analytics-helpers";
import {
  LEAD_EVENT_TYPES,
  type AnalyticsEvent,
  type ClickLocationStat,
  type DashboardRange,
  type DashboardStats,
  type DeviceStat,
  type LeadCounts,
  type LeadEventType,
  type PageStat,
  type PlaceStat,
  type SeriesPoint,
  type SourceStat,
} from "@/lib/analytics-types";
import { buildInsights, buildPageAdvice } from "@/lib/dashboard-insights";

const LIVE_WINDOW_MS = 5 * 60 * 1000;
const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** An event plus the things we work out once, up front. */
type Ev = {
  raw: AnalyticsEvent;
  at: number;
  dateKey: string;
  hour: number;
  weekday: number;
  sessionKey: string;
  isLead: boolean;
};

/** One visit to the site. */
type Visit = {
  key: string;
  device: string;
  country: string | null;
  city: string | null;
  source: string;
  pageViews: string[];
  leadCount: number;
};

function emptyLeadCounts(): LeadCounts {
  return {
    phone_click: 0,
    email_click: 0,
    whatsapp_click: 0,
    quote_form: 0,
    contact_form: 0,
  };
}

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

function percent(part: number, whole: number) {
  return whole > 0 ? round1((part / whole) * 100) : 0;
}

function isLeadType(type: string): type is LeadEventType {
  return (LEAD_EVENT_TYPES as readonly string[]).includes(type);
}

function sourceOf(event: AnalyticsEvent) {
  if (event.source) return event.source.toLowerCase();
  if (event.referrer) return simplifySource(normalizeReferrer(event.referrer));
  return "direct";
}

function annotate(events: AnalyticsEvent[]): Ev[] {
  return events
    .filter((event) => !isInternalAnalyticsPath(event.page_url))
    .map((raw) => {
      const at = new Date(raw.created_at).getTime();
      const time = ukTime(new Date(at));
      return {
        raw,
        at,
        dateKey: time.dateKey,
        hour: time.hour,
        weekday: time.weekday,
        // Events saved before visits were tracked are grouped as one visitor per day, device and town.
        sessionKey:
          raw.session_id ??
          `legacy:${time.dateKey}:${raw.device}:${raw.country ?? ""}:${raw.city ?? ""}`,
        isLead: isLeadType(raw.event_type),
      };
    })
    .sort((a, b) => a.at - b.at);
}

function buildVisits(events: Ev[]) {
  const visits = new Map<string, Visit>();
  for (const event of events) {
    let visit = visits.get(event.sessionKey);
    if (!visit) {
      visit = {
        key: event.sessionKey,
        device: event.raw.device,
        country: event.raw.country,
        city: decodeCity(event.raw.city),
        source: sourceOf(event.raw),
        pageViews: [],
        leadCount: 0,
      };
      visits.set(event.sessionKey, visit);
    }
    if (event.raw.event_type === "page_view") visit.pageViews.push(event.raw.page_url);
    if (event.isLead) visit.leadCount += 1;
  }
  return visits;
}

function summarise(events: Ev[]) {
  const visits = buildVisits(events);
  const leadCounts = emptyLeadCounts();
  let views = 0;
  let leads = 0;

  for (const event of events) {
    if (event.raw.event_type === "page_view") views += 1;
    if (event.isLead) {
      leads += 1;
      leadCounts[event.raw.event_type as LeadEventType] += 1;
    }
  }

  let enquirers = 0;
  let engaged = 0;
  for (const visit of visits.values()) {
    if (visit.leadCount > 0) enquirers += 1;
    if (visit.pageViews.length >= 2) engaged += 1;
  }

  return {
    visits,
    visitors: visits.size,
    views,
    leads,
    leadCounts,
    enquirers,
    engaged,
    conversion: percent(enquirers, visits.size),
    pagesPerVisit: visits.size > 0 ? round1(views / visits.size) : 0,
  };
}

type Summary = ReturnType<typeof summarise>;

function ukDateLabel(dateKey: string, withWeekday: boolean) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (withWeekday) {
    const weekday = WEEKDAY_LABELS[(date.getUTCDay() + 6) % 7];
    return `${weekday} ${day}`;
  }
  return `${day} ${MONTH_LABELS[month - 1]}`;
}

function rangeWindow(range: DashboardRange, todayKey: string) {
  if (range === "all") {
    return { current: null, previous: null, days: null as number | null };
  }
  const days = range === "today" ? 1 : range === "7d" ? 7 : 30;
  const current = new Set<string>();
  const previous = new Set<string>();
  for (let i = 0; i < days; i += 1) {
    current.add(shiftDateKey(todayKey, -i));
    previous.add(shiftDateKey(todayKey, -(i + days)));
  }
  return { current, previous, days };
}

const RANGE_LABELS: Record<DashboardRange, { label: string; comparison: string | null }> = {
  today: { label: "Today", comparison: "vs yesterday" },
  "7d": { label: "Last 7 days", comparison: "vs previous 7 days" },
  "30d": { label: "Last 30 days", comparison: "vs previous 30 days" },
  all: { label: "Since tracking started", comparison: null },
};

function buildSeries(
  events: Ev[],
  range: DashboardRange,
  todayKey: string,
  earliestKey: string | null
): { series: SeriesPoint[]; granularity: "hour" | "day" } {
  const bucketSets = new Map<string, Set<string>>();
  const bucketViews = new Map<string, number>();
  const bucketLeads = new Map<string, number>();
  const hourly = range === "today";

  for (const event of events) {
    const key = hourly ? String(event.hour) : event.dateKey;
    if (!bucketSets.has(key)) bucketSets.set(key, new Set());
    bucketSets.get(key)!.add(event.sessionKey);
    if (event.raw.event_type === "page_view") {
      bucketViews.set(key, (bucketViews.get(key) ?? 0) + 1);
    }
    if (event.isLead) bucketLeads.set(key, (bucketLeads.get(key) ?? 0) + 1);
  }

  let keys: string[];
  if (hourly) {
    keys = Array.from({ length: 24 }, (_, hour) => String(hour));
  } else {
    const length = range === "7d" ? 7 : range === "30d" ? 30 : 90;
    keys = Array.from({ length }, (_, i) => shiftDateKey(todayKey, -(length - 1 - i)));
    if (range === "all" && earliestKey) {
      const firstUseful = keys.findIndex((key) => key >= earliestKey);
      keys = firstUseful > 0 ? keys.slice(firstUseful) : keys;
    }
  }

  const series = keys.map<SeriesPoint>((key) => ({
    key,
    label: hourly ? formatHourLabel(Number(key)) : ukDateLabel(key, range === "7d"),
    sessions: bucketSets.get(key)?.size ?? 0,
    views: bucketViews.get(key) ?? 0,
    leads: bucketLeads.get(key) ?? 0,
  }));

  return { series, granularity: hourly ? "hour" : "day" };
}

function topEntry(counts: Map<string, number>) {
  let best: string | null = null;
  let bestCount = 0;
  for (const [label, count] of counts) {
    if (count > bestCount) {
      best = label;
      bestCount = count;
    }
  }
  return best;
}

function buildPages(
  events: Ev[],
  current: Summary,
  previousViews: Map<string, number> | null
): PageStat[] {
  type Agg = {
    views: number;
    leads: number;
    leadBreakdown: LeadCounts;
    sessions: Set<string>;
    enquirers: Set<string>;
    entries: number;
    bounces: number;
  };
  const pages = new Map<string, Agg>();
  const get = (url: string) => {
    let agg = pages.get(url);
    if (!agg) {
      agg = {
        views: 0,
        leads: 0,
        leadBreakdown: emptyLeadCounts(),
        sessions: new Set(),
        enquirers: new Set(),
        entries: 0,
        bounces: 0,
      };
      pages.set(url, agg);
    }
    return agg;
  };

  for (const event of events) {
    const agg = get(event.raw.page_url);
    agg.sessions.add(event.sessionKey);
    if (event.raw.event_type === "page_view") agg.views += 1;
    if (event.isLead) {
      agg.leads += 1;
      agg.leadBreakdown[event.raw.event_type as LeadEventType] += 1;
      agg.enquirers.add(event.sessionKey);
    }
  }

  for (const visit of current.visits.values()) {
    const landing = visit.pageViews[0];
    if (!landing) continue;
    const agg = get(landing);
    agg.entries += 1;
    if (visit.pageViews.length === 1 && visit.leadCount === 0) agg.bounces += 1;
  }

  const results: PageStat[] = [];
  for (const [page_url, agg] of pages) {
    if (agg.views === 0 && agg.leads === 0) continue;

    const sessions = agg.sessions.size;
    let mobile = 0;
    const sourceCounts = new Map<string, number>();
    for (const key of agg.sessions) {
      const visit = current.visits.get(key);
      if (!visit) continue;
      if (visit.device === "mobile") mobile += 1;
      sourceCounts.set(visit.source, (sourceCounts.get(visit.source) ?? 0) + 1);
    }

    const viewsPrevious = previousViews ? (previousViews.get(page_url) ?? 0) : null;
    const trend =
      viewsPrevious !== null && viewsPrevious > 0
        ? Math.round(((agg.views - viewsPrevious) / viewsPrevious) * 100)
        : null;

    const base = {
      page_url,
      page_title: getPageTitle(page_url),
      views: agg.views,
      sessions,
      leads: agg.leads,
      lead_breakdown: agg.leadBreakdown,
      conversion: Math.min(100, percent(agg.enquirers.size, sessions)),
      entries: agg.entries,
      bounce_rate: agg.entries >= 3 ? Math.round(percent(agg.bounces, agg.entries)) : null,
      views_previous: viewsPrevious,
      trend,
      mobile_share: Math.round(percent(mobile, sessions)),
      top_source: topEntry(sourceCounts),
    };

    const advice = buildPageAdvice(base, current.conversion);
    results.push({ ...base, ...advice });
  }

  return results.sort((a, b) => b.sessions - a.sessions || b.leads - a.leads).slice(0, 30);
}

function buildSources(visits: Map<string, Visit>): SourceStat[] {
  const map = new Map<string, { sessions: number; enquirers: number }>();
  for (const visit of visits.values()) {
    const entry = map.get(visit.source) ?? { sessions: 0, enquirers: 0 };
    entry.sessions += 1;
    if (visit.leadCount > 0) entry.enquirers += 1;
    map.set(visit.source, entry);
  }
  return [...map.entries()]
    .map(([source, data]) => ({
      source,
      sessions: data.sessions,
      enquirers: data.enquirers,
      conversion: percent(data.enquirers, data.sessions),
    }))
    .sort((a, b) => b.sessions - a.sessions)
    .slice(0, 10);
}

function buildDevices(visits: Map<string, Visit>): DeviceStat[] {
  const map = new Map<string, { sessions: number; enquirers: number }>();
  for (const visit of visits.values()) {
    const entry = map.get(visit.device) ?? { sessions: 0, enquirers: 0 };
    entry.sessions += 1;
    if (visit.leadCount > 0) entry.enquirers += 1;
    map.set(visit.device, entry);
  }
  return [...map.entries()]
    .map(([device, data]) => ({
      device,
      sessions: data.sessions,
      enquirers: data.enquirers,
      conversion: percent(data.enquirers, data.sessions),
    }))
    .sort((a, b) => b.sessions - a.sessions);
}

function buildPlaces(visits: Map<string, Visit>, by: "city" | "country", limit: number): PlaceStat[] {
  const map = new Map<string, PlaceStat>();
  for (const visit of visits.values()) {
    const value = by === "city" ? visit.city : visit.country;
    if (!value) continue;
    const key = by === "city" ? `${value}|${visit.country ?? ""}` : value;
    const existing = map.get(key);
    if (existing) {
      existing.sessions += 1;
    } else {
      map.set(key, {
        label: by === "country" ? getCountryName(value) : value,
        country: visit.country,
        sessions: 1,
      });
    }
  }
  return [...map.values()].sort((a, b) => b.sessions - a.sessions).slice(0, limit);
}

function buildClickLocations(events: Ev[]): ClickLocationStat[] {
  const map = new Map<string, ClickLocationStat>();
  for (const event of events) {
    const type = event.raw.event_type;
    if (type !== "whatsapp_click" && type !== "phone_click" && type !== "email_click") continue;
    const location = event.raw.link_location;
    if (!location) continue;
    const entry = map.get(location) ?? { location, whatsapp: 0, phone: 0, email: 0, total: 0 };
    if (type === "whatsapp_click") entry.whatsapp += 1;
    if (type === "phone_click") entry.phone += 1;
    if (type === "email_click") entry.email += 1;
    entry.total += 1;
    map.set(location, entry);
  }
  return [...map.values()].sort((a, b) => b.total - a.total);
}

/**
 * Turns raw events into everything the dashboard shows.
 * `events` must include the previous period too (used for the "vs before" comparisons).
 */
export function computeDashboard(
  events: AnalyticsEvent[],
  range: DashboardRange,
  meta: { trackingSince: string | null; totalEventsInDatabase: number },
  now: Date = new Date()
): DashboardStats {
  const all = annotate(events);
  const todayKey = ukTime(now).dateKey;
  const span = rangeWindow(range, todayKey);

  const currentEvents = span.current ? all.filter((e) => span.current!.has(e.dateKey)) : all;
  const previousEvents = span.previous ? all.filter((e) => span.previous!.has(e.dateKey)) : null;

  const current = summarise(currentEvents);
  const previous = previousEvents ? summarise(previousEvents) : null;

  // Views per page in the previous period, for the page-by-page trend.
  let previousViews: Map<string, number> | null = null;
  if (previousEvents) {
    previousViews = new Map();
    for (const event of previousEvents) {
      if (event.raw.event_type !== "page_view") continue;
      previousViews.set(event.raw.page_url, (previousViews.get(event.raw.page_url) ?? 0) + 1);
    }
  }

  const pages = buildPages(currentEvents, current, previousViews);
  const sources = buildSources(current.visits);
  const devices = buildDevices(current.visits);
  const cities = buildPlaces(current.visits, "city", 10);
  const countries = buildPlaces(current.visits, "country", 8);
  const clickLocations = buildClickLocations(currentEvents);

  const ukVisits = [...current.visits.values()].filter((visit) => visit.country === "GB").length;
  const withCountry = [...current.visits.values()].filter((visit) => visit.country).length;

  // Busiest times (page views only).
  const hourlyViews = Array.from({ length: 24 }, () => 0);
  const weekdayViews = Array.from({ length: 7 }, () => 0);
  for (const event of currentEvents) {
    if (event.raw.event_type !== "page_view") continue;
    hourlyViews[event.hour] += 1;
    weekdayViews[event.weekday] += 1;
  }
  const hourly = hourlyViews.map((views, hour) => ({ hour, label: formatHourLabel(hour), views }));
  const weekdays = weekdayViews.map((views, day) => ({ day, label: WEEKDAY_LABELS[day], views }));

  const earliestKey = meta.trackingSince ? ukTime(new Date(meta.trackingSince)).dateKey : null;
  const { series, granularity } = buildSeries(currentEvents, range, todayKey, earliestKey);

  // Who is on the site right now.
  const liveSessions = new Set<string>();
  for (const event of all) {
    if (now.getTime() - event.at <= LIVE_WINDOW_MS) liveSessions.add(event.sessionKey);
  }

  const labels = RANGE_LABELS[range];
  const comparison = previous ? labels.comparison : null;

  const insights = buildInsights({
    visitors: current.visitors,
    enquirers: current.enquirers,
    conversion: current.conversion,
    views: current.views,
    leads: current.leads,
    leadCounts: current.leadCounts,
    previous: previous
      ? { visitors: previous.visitors, enquiries: previous.leads, conversion: previous.conversion }
      : null,
    comparisonLabel: comparison,
    sources,
    devices,
    cities,
    pages,
    clickLocations,
    hourly,
    trackingSince: meta.trackingSince,
  });

  const recentEvents = all
    .slice(-40)
    .reverse()
    .map((event) => ({ ...event.raw, city: decodeCity(event.raw.city) }));

  return {
    range,
    rangeLabel: labels.label,
    comparisonLabel: comparison,
    lastUpdated: now.toISOString(),
    trackingSince: meta.trackingSince,
    totalEventsInDatabase: meta.totalEventsInDatabase,
    liveNow: liveSessions.size,

    kpis: {
      enquiries: { value: current.leads, previous: previous ? previous.leads : null },
      visitors: { value: current.visitors, previous: previous ? previous.visitors : null },
      conversionRate: { value: current.conversion, previous: previous ? previous.conversion : null },
      pageViews: { value: current.views, previous: previous ? previous.views : null },
      pagesPerVisit: {
        value: current.pagesPerVisit,
        previous: previous ? previous.pagesPerVisit : null,
      },
    },

    leadCounts: current.leadCounts,
    leadCountsPrevious: previous ? previous.leadCounts : null,
    clickLocations,

    funnel: { visitors: current.visitors, engaged: current.engaged, enquired: current.enquirers },

    series,
    seriesGranularity: granularity,

    pages,
    sources,
    devices,
    cities,
    countries,
    ukShare: Math.round(percent(ukVisits, withCountry)),

    hourly,
    weekdays,

    insights,
    recentEvents,
  };
}
