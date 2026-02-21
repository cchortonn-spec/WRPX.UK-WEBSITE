import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Huddersfield | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Huddersfield. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-huddersfield/" },
};

export default function KitchenWrappingHuddersfieldPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Huddersfield — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Huddersfield is within our coverage area. We&apos;ve wrapped
            kitchens across the town and surrounding postcodes. You get the same
            process: free survey, honest suitability check, then prep and wrap
            with a named {siteConfig.guaranteeYears}-year guarantee. We&apos;re
            South Yorkshire based — no national franchise, no distant depot.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We work from South Yorkshire. Huddersfield is on our patch. Same
            team from start to finish — survey, prep, wrap, reinstall.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Huddersfield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Huddersfield postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Huddersfield and the surrounding area. Postcode prefixes
            include HD1–HD9 and nearby. Contact us with your postcode to confirm.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Huddersfield Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
