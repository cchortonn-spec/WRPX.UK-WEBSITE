import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Rotherham | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Rotherham. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-rotherham/" },
};

export default function KitchenWrappingRotherhamPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Rotherham — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Rotherham and the surrounding areas are within our South Yorkshire
            coverage. We&apos;ve wrapped kitchens across Rotherham — from
            town centre to the outskirts. Same process everywhere: free
            survey, honest suitability check, then prep and wrap with a named{" "}
            {siteConfig.guaranteeYears}-year guarantee.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We cover S60–S66 and the wider Rotherham area. We&apos;ve built a strong track record of before-and-after results here — and we&apos;re easy to get hold of for follow-up or advice. No national call centre; you deal with the team that did the job.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Rotherham
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
            Recent work in Rotherham
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg"
              alt="Kitchen wrap Rotherham — recent project"
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
            Testimonial from a Rotherham customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="italic text-card-foreground">
              Really pleased with the result. Connor explained everything
              clearly and the kitchen still looks great a year on. No peeling,
              no fading. Definitely worth getting a quote.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Lisa K., Rotherham
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Rotherham postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Rotherham and the surrounding area. Postcode prefixes
            include S60, S61, S62, S63, S64, S65, S66 and nearby. Send us your
            postcode to check we cover you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Rotherham Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
