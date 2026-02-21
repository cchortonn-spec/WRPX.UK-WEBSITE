import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Barnsley | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Barnsley. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-barnsley/" },
};

export default function KitchenWrappingBarnsleyPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Barnsley — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Barnsley is on our regular South Yorkshire run. We cover the town
            and the surrounding districts — no long-distance call-out, no
            franchise middleman. You get a direct quote, trade-level prep and
            a {siteConfig.guaranteeYears}-year guarantee. If your cabinets are
            suitable for wrapping, we&apos;ll say so; if not, we&apos;ll tell
            you that too.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We work from South Yorkshire. Barnsley jobs are handled by the same
            team that does survey, prep and install — no subcontractors, no
            depot in another region.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Barnsley
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
            Recent work in Barnsley
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/Y923a9kw8pCgp9gZUeYFaH.jpg"
              alt="Kitchen wrap Barnsley — recent project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Barnsley customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            {/* TODO: add real Barnsley testimonial */}
            <p className="italic text-card-foreground">
              Placeholder. Add a real Barnsley customer review when available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Barnsley postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Barnsley and the surrounding area. Postcode prefixes
            include S70, S71, S72, S73, S74, S75 and nearby. Contact us with
            your postcode to confirm coverage.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Barnsley Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
