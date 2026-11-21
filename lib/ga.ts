// Small helper for sending events to Google Analytics (GA4).
// The Google tag itself is loaded once in app/layout.tsx.

import { isOwnerBrowser } from "@/lib/track-client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Send a named event to Google Analytics.
 * Never put phone numbers, emails or names in params: only safe labels.
 * Does nothing if the Google tag has not loaded (e.g. an ad blocker).
 */
export function sendGaEvent(
  name: string,
  params: Record<string, string | number> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  // The owner's own browser (set when the dashboard is opened) is not counted.
  if (isOwnerBrowser()) {
    return;
  }

  window.gtag("event", name, {
    ...params,
    // Makes sure the event is still sent if the click opens WhatsApp or the dialler.
    transport_type: "beacon",
  });
}

/** Which button on the page was clicked: floating, sticky bar, header, footer or in the page. */
export function placementOf(link: Element): string {
  if (link.classList.contains("whatsapp-float")) return "floating";
  if (link.closest(".sticky-cta-bar")) return "sticky";
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "content";
}
