import type { AnalyticsEventType } from "@/lib/analytics-types";

type TrackPayload = {
  event_type: AnalyticsEventType;
  page_url: string;
  referrer?: string | null;
  device?: "mobile" | "desktop" | "tablet" | "unknown";
};

function getDeviceType(): "mobile" | "desktop" | "tablet" | "unknown" {
  if (typeof window === "undefined") {
    return "unknown";
  }

  const width = window.innerWidth;
  if (width < 768) {
    return "mobile";
  }
  if (width < 1024) {
    return "tablet";
  }
  return "desktop";
}

export function trackEvent(payload: TrackPayload) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.location.pathname.startsWith("/dashboard")) {
    return;
  }

  const body = JSON.stringify({
    ...payload,
    referrer: payload.referrer ?? (document.referrer || null),
    device: payload.device ?? getDeviceType(),
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/track/", blob);
    return;
  }

  void fetch("/api/track/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}
