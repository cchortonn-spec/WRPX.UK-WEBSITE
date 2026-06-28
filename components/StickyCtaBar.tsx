"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/** Mobile-only sticky bottom bar: WhatsApp, phone, and quote CTA */
export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border bg-background px-3 py-3 lg:hidden">
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
