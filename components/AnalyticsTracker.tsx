"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/track-client";

function getFormEventType(pathname: string, form: HTMLFormElement) {
  if (pathname.includes("/kitchen-wrapping-quote")) {
    return "quote_form" as const;
  }

  if (pathname.startsWith("/contact")) {
    return "contact_form" as const;
  }

  if (form.classList.contains("quote-shell")) {
    return "quote_form" as const;
  }

  return "contact_form" as const;
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname.startsWith("/dashboard")) {
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
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");
      if (!link) {
        return;
      }

      const href = link.getAttribute("href") ?? "";
      const pageUrl = window.location.pathname;

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
      }
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      trackEvent({
        event_type: getFormEventType(window.location.pathname, form),
        page_url: window.location.pathname,
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
