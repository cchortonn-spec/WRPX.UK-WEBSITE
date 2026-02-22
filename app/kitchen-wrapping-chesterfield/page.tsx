import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Chesterfield | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Chesterfield. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-chesterfield/" },
};

export default function KitchenWrappingChesterfieldPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Chesterfield — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Chesterfield and the surrounding area. Good availability
            and the same standard: free survey, honest advice, trade-level
            prep, {siteConfig.guaranteeYears}-year guarantee. No national
            franchise — you deal with a South Yorkshire specialist who turns up
            when we say we will.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield is on our regular run from South Yorkshire. We have capacity and respond quickly — no national franchise delay. You get a direct contact and a fixed quote after a free survey. Same guarantee and same team as everywhere we cover.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services in Chesterfield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <p className="mt-4 text-muted">
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              Kitchen wrapping cost guide
            </Link> — typical prices and what&apos;s included.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Chesterfield postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Chesterfield and the surrounding area. Postcode prefixes
            include S40, S41, S42, S43, S44, S45 and nearby. Contact us to
            confirm we cover you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Chesterfield Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
