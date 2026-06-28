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

export type AnalyticsEvent = {
  id: string;
  event_type: AnalyticsEventType;
  page_url: string;
  referrer: string | null;
  device: AnalyticsDevice;
  country: string | null;
  city: string | null;
  created_at: string;
};

export type CountWithPercent = {
  count: number;
  percentage: number;
};

export type TopPageStat = {
  page_url: string;
  page_title: string;
  count: number;
  this_week: number;
  today: number;
  percentage: number;
  leads: number;
};

export type LeadByPageStat = {
  page_url: string;
  page_title: string;
  phone: number;
  email: number;
  whatsapp: number;
  quote_form: number;
  contact_form: number;
  total: number;
};

export type DashboardStats = {
  summary: {
    total_events: number;
    total_page_views: number;
    page_views_today: number;
    page_views_this_week: number;
    total_leads: number;
    leads_today: number;
    leads_this_week: number;
    uk_visitors: number;
    international_visitors: number;
  };
  totals: {
    allTime: Record<AnalyticsEventType, number>;
    thisWeek: Record<AnalyticsEventType, number>;
    today: Record<AnalyticsEventType, number>;
  };
  topPages: TopPageStat[];
  leadsByPage: LeadByPageStat[];
  topReferrers: Array<{ referrer: string; count: number; percentage: number }>;
  devices: Array<{ device: string; count: number; percentage: number }>;
  countries: Array<{
    country: string;
    country_name: string;
    count: number;
    percentage: number;
  }>;
  cities: Array<{ city: string; country: string | null; count: number }>;
  hourlyActivity: Array<{ hour: number; label: string; count: number }>;
  dailyActivity: Array<{
    date: string;
    count: number;
    page_views: number;
    leads: number;
  }>;
  recentEvents: AnalyticsEvent[];
  lastUpdated: string;
};
