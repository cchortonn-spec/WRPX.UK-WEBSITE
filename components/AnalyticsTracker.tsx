"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isInternalAnalyticsPath } from "@/lib/analytics-helpers";
import type { LeadEventType } from "@/lib/analytics-types";
import { trackEvent } from "@/lib/track-client";
import { placementOf, sendGaEvent } from "@/lib/ga";

function getFormEventType(
  pathname: string,
  form: HTMLFormElement
): LeadEventType | null {
  // Some forms report themselves once, when the enquiry has really been sent
  // (the kitchen quote wizard is multi-step: every "Next" press is a submit).
  if (form.classList.contains("qw-shell") || form.dataset.analyticsSelf === "true") {
    return null;
  }

  const explicitEvent = form.dataset.analyticsEvent;
  if (explicitEvent === "contact_form" || explicitEvent === "quote_form") {
    return explicitEvent;
  }

  if (pathname.includes("/kitchen-wrapping-quote")) {
    return "quote_form";
  }

  if (pathname.startsWith("/contact")) {
    return "contact_form";
  }

  if (form.classList.contains("quote-shell")) {
    return "quote_form";
  }

  return null;
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || isInternalAnalyticsPath(pathname)) {
      return;
    }

    if (lastTrackedPath.current === pathname) {
      return;
    }

    lastTrackedPath.current = pathname;

    trackEvent({
      event_type: "page_view",
      page_url: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const pageUrl = window.location.pathname;
      if (isInternalAnalyticsPath(pageUrl)) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");
      if (!link) {
        return;
      }

      const href = link.getAttribute("href") ?? "";

      const hrefLower = href.trim().toLowerCase();

      if (hrefLower.startsWith("tel:")) {
        trackEvent({
          event_type: "phone_click",
          page_url: pageUrl,
          link_location: placementOf(link),
        });
        sendGaEvent("phone_click", { link_location: placementOf(link) });
        return;
      }

      if (hrefLower.startsWith("mailto:")) {
        trackEvent({
          event_type: "email_click",
          page_url: pageUrl,
          link_location: placementOf(link),
        });
        sendGaEvent("email_click", { link_location: placementOf(link) });
        return;
      }

      if (hrefLower.includes("wa.me") || hrefLower.includes("whatsapp.com")) {
        trackEvent({
          event_type: "whatsapp_click",
          page_url: pageUrl,
          link_location: placementOf(link),
        });
        sendGaEvent("whatsapp_click", { link_location: placementOf(link) });
      }
    }

    function handleSubmit(event: SubmitEvent) {
      const pageUrl = window.location.pathname;
      if (isInternalAnalyticsPath(pageUrl)) {
        return;
      }

      const form = event.target;
      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      const eventType = getFormEventType(pageUrl, form);
      if (!eventType) {
        return;
      }

      trackEvent({
        event_type: eventType,
        page_url: pageUrl,
      });
      sendGaEvent(`${eventType}_submit`);
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
