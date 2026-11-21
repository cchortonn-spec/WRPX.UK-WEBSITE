export const ANALYTICS_EVENT_TYPES = [
  "phone_click",
  "email_click",
  "whatsapp_click",
  "quote_form",
  "contact_form",
  "page_view",
] as const;

export type AnalyticsEventType = (typeof ANALYTICS_EVENT_TYPES)[number];

export type AnalyticsDevice = "mobile" | "desktop" | "tablet" | "unknown";

export const LEAD_EVENT_TYPES = [
  "phone_click",
  "email_click",
  "whatsapp_click",
  "quote_form",
  "contact_form",
] as const;

export type LeadEventType = (typeof LEAD_EVENT_TYPES)[number];

/** One row in the Supabase `events` table. */
export type AnalyticsEvent = {
  id: string;
  event_type: AnalyticsEventType;
  page_url: string;
  referrer: string | null;
  device: AnalyticsDevice;
  country: string | null;
  city: string | null;
  created_at: string;
  /** One visit to the site (a random id kept for the browser session). */
  session_id?: string | null;
  /** Where the visit came from, e.g. "google", "facebook", "direct". */
  source?: string | null;
  /** For clicks: which button was used (floating, sticky, header, footer, content). */
  link_location?: string | null;
};

// ---------- Dashboard ----------

export type DashboardRange = "today" | "7d" | "30d" | "all";

export const DASHBOARD_RANGES: readonly DashboardRange[] = ["today", "7d", "30d", "all"];

/** A headline number plus the same number for the previous period (null = no comparison). */
export type Kpi = {
  value: number;
  previous: number | null;
};

export type LeadCounts = Record<LeadEventType, number>;

export type SeriesPoint = {
  key: string;
  label: string;
  sessions: number;
  views: number;
  leads: number;
};

export type SourceStat = {
  source: string;
  sessions: number;
  enquirers: number;
  /** Percent of this source's visitors who made an enquiry. */
  conversion: number;
};

export type DeviceStat = {
  device: string;
  sessions: number;
  enquirers: number;
  conversion: number;
};

export type PlaceStat = {
  label: string;
  country: string | null;
  sessions: number;
};

export type ClickLocationStat = {
  location: string;
  whatsapp: number;
  phone: number;
  email: number;
  total: number;
};

export type Priority = "high" | "medium" | "low";

export type PageRecommendation = {
  priority: Priority;
  title: string;
  detail: string;
};

export type PageStatus = "converting" | "attention" | "growing" | "low_data" | "ok";

export type PageStat = {
  page_url: string;
  page_title: string;
  views: number;
  sessions: number;
  leads: number;
  lead_breakdown: LeadCounts;
  /** Percent of this page's visitors who enquired on it. */
  conversion: number;
  /** Visits that started on this page. */
  entries: number;
  /** Percent of entries that left without a second page or an enquiry. null = not enough data. */
  bounce_rate: number | null;
  views_previous: number | null;
  /** Percent change in views vs the previous period. null = no comparison. */
  trend: number | null;
  mobile_share: number;
  top_source: string | null;
  status: PageStatus;
  recommendations: PageRecommendation[];
};

export type InsightKind = "win" | "warning" | "opportunity" | "info";

export type Insight = {
  id: string;
  kind: InsightKind;
  priority: Priority;
  title: string;
  /** The numbers behind the insight. */
  evidence: string;
  /** What to do about it. */
  action: string;
  page_url?: string;
  page_title?: string;
};

export type DashboardStats = {
  range: DashboardRange;
  rangeLabel: string;
  comparisonLabel: string | null;
  lastUpdated: string;
  /** When the first event in the database was recorded. */
  trackingSince: string | null;
  totalEventsInDatabase: number;
  /** Visitors with activity in the last 5 minutes. */
  liveNow: number;

  kpis: {
    enquiries: Kpi;
    visitors: Kpi;
    conversionRate: Kpi;
    pageViews: Kpi;
    pagesPerVisit: Kpi;
  };

  leadCounts: LeadCounts;
  leadCountsPrevious: LeadCounts | null;
  clickLocations: ClickLocationStat[];

  funnel: { visitors: number; engaged: number; enquired: number };

  series: SeriesPoint[];
  seriesGranularity: "hour" | "day";

  pages: PageStat[];
  sources: SourceStat[];
  devices: DeviceStat[];
  cities: PlaceStat[];
  countries: PlaceStat[];
  ukShare: number;

  hourly: Array<{ hour: number; label: string; views: number }>;
  weekdays: Array<{ day: number; label: string; views: number }>;

  insights: Insight[];
  recentEvents: AnalyticsEvent[];
};
