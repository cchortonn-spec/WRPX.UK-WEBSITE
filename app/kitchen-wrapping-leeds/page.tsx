import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { locationPageData } from "@/lib/location-pages";
import { testimonials } from "@/lib/testimonials";

const data = locationPageData.Leeds;
const testimonial = testimonials.find((t) => t.area === "Leeds")!;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Leeds | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping in Leeds — Headingley, Roundhay, Horsforth, Pudsey and LS1–LS29. Doors and worktops in 1–3 days. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-leeds/" },
};

export default function KitchenWrappingLeedsPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Leeds — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds — from Headingley and Roundhay to Horsforth, Pudsey, Morley and across LS postcodes — is on our South Yorkshire and surrounding areas patch. Same offer as everywhere: free survey, honest advice, trade-level prep and a named {siteConfig.guaranteeYears}-year guarantee. If your kitchen is suitable for wrapping, we&apos;ll give you a fixed quote and a clear process.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Wrapping is usually chosen when people want to keep a functional
            layout but replace a dated look. It can be a strong option for busy
            family homes and city properties where a full replacement would cause
            too much disruption. We focus on preparation and edge finish so the
            end result looks intentional and consistent.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            You get the same local service as in Sheffield or Doncaster: same team, same guarantee, no national franchise markup. We respond quickly and book surveys at times that suit you. Same person from survey to finish — our reputation is in the region and we don&apos;t disappear after the job.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds has a mix of converted flats, period terraces and newer open
            plan homes, so design choices vary a lot from project to project. We
            bring curated samples and review them in your kitchen lighting so you
            can choose a finish that works in real life, not just online.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Leeds
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services available in Leeds
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Typical Leeds outcomes
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Wood-tone kitchens moved to modern neutral matte colours</li>
            <li>Rental properties refreshed for quicker re-let presentation</li>
            <li>Worktops and cabinet fronts coordinated into one clean scheme</li>
            <li>Older style doors modernised without changing carcasses</li>
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
            Recent work in Leeds
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg"
              alt="Kitchen wrap installation in Leeds with updated cabinet finish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Example LS area project: the customer wanted a brighter look without
            changing appliances. We wrapped doors in a warm off-white matte and
            used a subtle stone-effect worktop finish to modernise the room while
            keeping costs controlled.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Leeds customer
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
            We match this feedback with practical recommendations at survey
            stage, including where wrapping is not suitable due to damage or
            moisture, so quality is protected long term.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Leeds and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Leeds and the surrounding area. Postcode prefixes include {data.postcodes}. If you&apos;re just outside, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            {data.priceLine}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Leeds areas we regularly visit
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Common enquiries come from Headingley, Roundhay, Horsforth, Pudsey,
            Morley and nearby areas. If your postcode is just outside our normal
            route, send it over and we will confirm availability.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Leeds Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
