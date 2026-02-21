"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Mobile-only sticky bottom bar: phone + quote CTA */
export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 border-t border-border bg-background px-4 py-3 lg:hidden">
      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="font-semibold text-accent"
      >
        {siteConfig.phone}
      </a>
      <Link href="/contact/" className="btn-primary text-center text-sm">
        Get a Free Quote
      </Link>
    </div>
  );
}
