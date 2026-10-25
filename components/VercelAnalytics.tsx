"use client";

import { useEffect } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isInternalAnalyticsPath } from "@/lib/analytics-helpers";
import { redactAnalyticsUrl } from "@/lib/vercel-analytics-url";

function redactEvent<T extends { url: string }>(event: T): T {
  return { ...event, url: redactAnalyticsUrl(event.url) };
}

function redactWebAnalyticsEvent(event: BeforeSendEvent): BeforeSendEvent {
  return redactEvent(event);
}

function placementOf(link: Element): string {
  if (link.classList.contains("whatsapp-float")) return "floating";
  if (link.closest(".sticky-cta-bar")) return "sticky";
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "content";
}

/** Visible label only when it cannot be a phone number or email address. */
function safeButtonLabel(link: HTMLAnchorElement): string | undefined {
  const text = (link.textContent ?? "").replace(/\s+/g, " ").trim();
  const aria = (link.getAttribute("aria-label") ?? "").replace(/\s+/g, " ").trim();
  const raw = text || aria;
  if (!raw || raw.length > 80) return undefined;
  if (raw.includes("@") || /\d/.test(raw)) return undefined;
  return raw;
}

function trackClick(name: "Phone Click" | "WhatsApp Click" | "Email Click", link: HTMLAnchorElement) {
  const properties: Record<string, string> = {
    path: window.location.pathname,
    placement: placementOf(link),
  };
  const button = safeButtonLabel(link);
  if (button) properties.button = button;
  track(name, properties);
}

function VercelLeadEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (isInternalAnalyticsPath(window.location.pathname)) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link) return;

      const href = (link.getAttribute("href") ?? "").trim().toLowerCase();
      if (href.startsWith("tel:")) {
        trackClick("Phone Click", link);
        return;
      }
      if (href.startsWith("mailto:")) {
        trackClick("Email Click", link);
        return;
      }
      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackClick("WhatsApp Click", link);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export function VercelAnalytics() {
  return (
    <>
      <Analytics beforeSend={redactWebAnalyticsEvent} />
      <SpeedInsights
        beforeSend={(event) => ({
          ...redactEvent(event),
          ...(event.route ? { route: redactAnalyticsUrl(event.route) } : {}),
        })}
      />
      <VercelLeadEvents />
    </>
  );
}
