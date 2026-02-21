import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Doncaster | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Doncaster. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-doncaster/" },
};

export default function KitchenWrappingDoncasterPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Doncaster — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Doncaster and the surrounding villages are part of our core South
            Yorkshire coverage. We&apos;ve completed jobs across DN postcodes —
            from town centre to outlying areas. Whether your kitchen is
            dated melamine or solid wood that just needs a new look, we give
            you an honest assessment and a fixed process: survey, prep, wrap,
            reinstall.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re South Yorkshire based, not a national operator. You get
            a local team, a named {siteConfig.guaranteeYears}-year guarantee,
            and someone who&apos;s easy to get hold of if you need a follow-up.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Doncaster
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
            Recent work in Doncaster
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/81OfA32zNwL.jpg"
              alt="Kitchen wrap Doncaster — recent project"
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
            Testimonial from a Doncaster customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            {/* TODO: add real Doncaster testimonial */}
            <p className="italic text-card-foreground">
              Placeholder. Add a real Doncaster customer review when available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Doncaster postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Doncaster and the surrounding area. Postcode prefixes
            include DN1–DN12 and nearby. Get in touch with your postcode to
            confirm we cover you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Doncaster Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
