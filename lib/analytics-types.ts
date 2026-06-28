export const ANALYTICS_EVENT_TYPES = [
  "phone_click",
  "email_click",
  "quote_form",
  "contact_form",
  "page_view",
] as const;

export type AnalyticsEventType = (typeof ANALYTICS_EVENT_TYPES)[number];

export type AnalyticsDevice = "mobile" | "desktop" | "tablet" | "unknown";

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

export type DashboardStats = {
  totals: {
    allTime: Record<AnalyticsEventType, number>;
    thisWeek: Record<AnalyticsEventType, number>;
  };
  topPages: { page_url: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  devices: { device: string; count: number }[];
  countries: { country: string; count: number }[];
  dailyActivity: { date: string; count: number }[];
  recentEvents: AnalyticsEvent[];
  lastUpdated: string;
};
