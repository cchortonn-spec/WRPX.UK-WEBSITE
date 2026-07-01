"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isInternalAnalyticsPath } from "@/lib/analytics-helpers";
import type { LeadEventType } from "@/lib/analytics-types";
import { trackEvent } from "@/lib/track-client";

function getFormEventType(
  pathname: string,
  form: HTMLFormElement
): LeadEventType | null {
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

      if (href.startsWith("tel:")) {
        trackEvent({
          event_type: "phone_click",
          page_url: pageUrl,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent({
          event_type: "email_click",
          page_url: pageUrl,
        });
        return;
      }

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackEvent({
          event_type: "whatsapp_click",
          page_url: pageUrl,
        });
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
