"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const SCROLL_THRESHOLD = 120;

/** Mobile-only sticky bottom bar — appears after user scrolls */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sticky-cta-visible", visible);
    return () => document.body.classList.remove("sticky-cta-visible");
  }, [visible]);

  return (
    <div
      className={`sticky-cta-bar${visible ? " sticky-cta-bar--visible" : ""}`}
      aria-hidden={!visible}
    >
      <WhatsAppButton variant="compact" label="WhatsApp" className="min-w-0 flex-1" />
      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="btn-secondary shrink-0 px-3 py-2.5 text-sm font-semibold"
      >
        Call
      </a>
      <Link href="/contact/" className="btn-primary shrink-0 px-3 py-2.5 text-center text-sm">
        Enquire
      </Link>
    </div>
  );
}
