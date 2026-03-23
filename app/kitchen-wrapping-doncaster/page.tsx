import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { locationPageData } from "@/lib/location-pages";

const data = locationPageData.Doncaster;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Doncaster | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping in Doncaster — Bessacarr, Balby, Tickhill, Mexborough and across DN postcodes. Doors and worktops in 1–3 days. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-doncaster/" },
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
            Doncaster and the surrounding villages — from Bessacarr and Balby to Tickhill, Mexborough and Edlington — are part of our core South Yorkshire coverage. We&apos;ve completed jobs across DN postcodes. Whether your kitchen is dated melamine or solid wood that just needs a new look, we give you an honest assessment and a fixed process: survey, prep, wrap, reinstall.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For most homes, wrapping is chosen because it modernises the room
            fast while keeping disruption low. If cabinets are still structurally
            sound, you can get a strong visual transformation without the time
            and waste of a full rip-out. We set expectations clearly from day
            one and explain exactly what is and is not included.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Doncaster and the DN postcodes without a national franchise call-out. Same person from survey to finish — no handover to another crew. We&apos;re close enough to turn up when we say we will, and you get a named {siteConfig.guaranteeYears}-year guarantee and a direct contact if you need a follow-up. Our reputation is in the area; we don&apos;t disappear after the job.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Local context helps with planning too. Period terraces in Balby and
            larger family homes in Bessacarr often need different finish choices
            and edge details. We recommend styles based on light levels, traffic,
            and how heavily the kitchen is used day to day.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Doncaster
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services available in Doncaster
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Common Doncaster project types
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Landlord refreshes between tenancies</li>
            <li>Family kitchens upgraded before extending elsewhere in the home</li>
            <li>Older oak-style doors changed to modern matte finishes</li>
            <li>Worktops wrapped to remove busy patterns and darken the scheme</li>
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
            Recent work in Doncaster
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
              alt="Recent kitchen cabinet wrapping project in Doncaster"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Recent DN4 example: a customer wanted a cleaner modern look without
            replacing appliances. We wrapped cabinet fronts in a warm stone-grey
            finish, updated the kickboards, and wrapped the worktop to match.
            The kitchen looked fully new while keeping the original layout.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Doncaster customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="italic text-card-foreground">
              Connor came out, gave us a clear quote and no hard sell. Had the
              doors and worktops wrapped — you can&apos;t tell it&apos;s not new.
              Professional job, turned up when they said. Would recommend.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — James T., Doncaster
            </p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            We keep project recommendations practical. If any panel is damaged or
            swollen from moisture and likely to fail, we flag it before work
            starts so you can repair or replace that part first.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Doncaster and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Doncaster and the surrounding area. Postcode prefixes include {data.postcodes}. If you&apos;re just outside, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            {data.priceLine}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Areas we regularly serve around Doncaster
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We frequently work in Bessacarr, Balby, Tickhill, Armthorpe,
            Mexborough, Edlington and nearby villages. If your property is a
            little outside central Doncaster, send the postcode and we will
            confirm coverage before booking.
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
