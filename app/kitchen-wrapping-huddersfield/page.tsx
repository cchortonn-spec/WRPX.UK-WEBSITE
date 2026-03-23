import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { locationPageData } from "@/lib/location-pages";
import { testimonials } from "@/lib/testimonials";

const data = locationPageData.Huddersfield;
const testimonial = testimonials.find((t) => t.area === "Huddersfield")!;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Huddersfield | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping in Huddersfield — Lindley, Milnsbridge, Golcar, HD1–HD9. Doors and worktops in 1–3 days. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-huddersfield/" },
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
            Huddersfield — from Lindley and Milnsbridge to Golcar, Meltham, Holmfirth and across HD postcodes — is within our coverage area. We&apos;ve wrapped kitchens across the town and surrounding areas. You get the same process: free survey, honest suitability check, then prep and wrap with a named {siteConfig.guaranteeYears}-year guarantee. South Yorkshire based — no national franchise, no distant depot.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your layout still works but the finish is dated, wrapping can give
            you a major visual update while avoiding full replacement disruption.
            We quote based on the real condition of doors and panels, then follow
            a structured process so there are no surprises once work starts.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re South Yorkshire based and regularly in the Huddersfield area. Same team from survey to finish: no subcontractors, no handover to another crew. You get one point of contact and a guarantee that&apos;s honoured locally. We turn up when we say we will and come back if you need us.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Local work patterns matter here, especially across hillside areas and
            older homes where kitchens can have unusual shapes. We assess
            practical details first, then recommend finishes that suit your
            lighting and how heavily the kitchen is used.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Huddersfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services available in Huddersfield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            What customers in Huddersfield ask for most
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Modern matte cabinet finishes in neutral tones</li>
            <li>Worktop wraps that reduce busy patterning</li>
            <li>Simple handle upgrades with wrapped door fronts</li>
            <li>Fast kitchen refreshes before listing or remortgaging</li>
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
            Recent work in Huddersfield
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
              alt="Kitchen wrapping example for a Huddersfield home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Example HD project: oak-toned cabinet fronts were wrapped to a clean
            soft-grey finish, then worktops were updated with a stone effect.
            Same layout, much more modern appearance, and no long renovation.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Huddersfield customer
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
            Every quote is based on the property and current kitchen condition,
            not a generic package. That helps protect finish quality and reduces
            the risk of callbacks.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Huddersfield and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Huddersfield and the surrounding area. Postcode prefixes include {data.postcodes}. If you&apos;re just outside, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            {data.priceLine}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Areas we cover around Huddersfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Common bookings come from Lindley, Milnsbridge, Golcar, Meltham,
            Holmfirth and surrounding villages. Send your postcode and we will
            confirm survey availability.
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
