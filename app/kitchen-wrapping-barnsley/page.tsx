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
            Barnsley is on our regular South Yorkshire run — we&apos;re in the area often. Quick to book a survey and straight-talking advice: we&apos;ll tell you if wrapping is right for your kitchen and give you a fixed quote, no sales pitch.
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
            <p className="italic text-card-foreground">
              We were quoted a fortune for a new kitchen. WRPX wrapped our doors
              and worktops instead — half the cost and it looks like new. Connor
              was professional and left everything spotless. Very happy.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Mike P., Barnsley
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
