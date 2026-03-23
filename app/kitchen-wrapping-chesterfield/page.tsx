import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { locationPageData } from "@/lib/location-pages";
import { testimonials } from "@/lib/testimonials";

const data = locationPageData.Chesterfield;
const testimonial = testimonials.find((t) => t.area === "Chesterfield")!;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Chesterfield | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping in Chesterfield — Brampton, Newbold, Staveley, S40–S45. Doors and worktops in 1–3 days. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-chesterfield/" },
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
            Chesterfield and the surrounding area — Brampton, Newbold, Staveley, Hasland, Brimington and across S40–S45 — are on our regular run from South Yorkshire. Good availability and the same standard: free survey, honest advice, trade-level prep, {siteConfig.guaranteeYears}-year guarantee. No national franchise — you deal with a specialist who turns up when we say we will.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Many customers here are looking for a practical middle ground:
            upgrade the look of an existing kitchen without committing to full
            replacement costs. Wrapping is often ideal when cabinetry is still
            sturdy and the main issue is finish style or wear on visible faces.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We have capacity and respond quickly — no national franchise delay. Same person from survey to finish; you get a direct contact and a fixed quote after a free survey. Same guarantee and same team as everywhere we cover. Our reputation is in the area — we don&apos;t disappear after the job.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Local knowledge improves planning. We regularly see a mix of older
            homes and newer developments around Chesterfield, each with different
            light levels and door profiles. We tailor finish recommendations to
            those conditions so results hold up in daily use.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Chesterfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services in Chesterfield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Typical Chesterfield kitchen wrap requests
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Replacing glossy cream looks with modern matte tones</li>
            <li>Updating wood-effect doors for a cleaner contemporary style</li>
            <li>Coordinating worktops and cabinet fronts into one palette</li>
            <li>Refreshing kitchens before moving house or refinancing</li>
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
            Recent work in Chesterfield
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/wrapped-kitchen-doors-worktop-south-yorkshire.jpg"
              alt="Kitchen wrap project completed in Chesterfield"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Recent S41 example: cabinet doors were wrapped to a charcoal matte
            finish with a lighter stone-look worktop wrap for contrast. The room
            felt completely refreshed without altering layout or appliances.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Chesterfield customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="italic text-card-foreground">
              {testimonial.quote}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — {testimonial.name}, {testimonial.area}
            </p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            We keep feedback grounded in real local projects and back it with a
            clear process so customers know what quality to expect before work
            begins.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Chesterfield and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Chesterfield and the surrounding area. Postcode prefixes include {data.postcodes}. If you&apos;re just outside, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            {data.priceLine}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Areas covered around Chesterfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We frequently cover Brampton, Newbold, Staveley, Hasland,
            Brimington and nearby communities. If you are outside S40-S45, send
            your postcode and we will confirm travel and availability.
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
