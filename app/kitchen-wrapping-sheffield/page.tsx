import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Sheffield | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping Sheffield — Hillsborough, Ecclesfield, S1–S36. Doors and worktops in 1–3 days. Local specialist, free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-sheffield/" },
};

export default function KitchenWrappingSheffieldPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Sheffield — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re based in South Yorkshire and Sheffield is at the heart of
            our patch. From Hillsborough to Ecclesfield, Mosborough to
            Woodhouse, we&apos;ve wrapped kitchens across the city. Victorian
            terraces, new builds and everything in between — we assess each job
            on its own and tell you straight if a wrap is the right option.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Most clients contact us because they want a full visual upgrade
            without ripping out a working kitchen. If the cabinet structure is
            sound, wrapping usually gives the biggest visual change for the
            budget. Our process is simple: free survey, prep plan, fixed quote,
            then careful installation over 1-3 days depending on size.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re not a national franchise — we&apos;re a local specialist. You get the same person from survey to finish, so nothing gets lost in handover. Our reputation is in Sheffield; we don&apos;t disappear after the job. We turn up when we say we will and come back if you need us.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            In Sheffield that matters because properties vary so much. A flat in
            Kelham Island with slab doors needs a different prep approach from a
            family kitchen in S12 with detailed shaker profiles. Local
            experience means we can spot issues early, set realistic timings,
            and avoid surprise costs halfway through.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why choose us over a national wrap company in Sheffield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We use branded films (3M, CoverStyl and equivalent) and a {siteConfig.guaranteeYears}-year guarantee on every job. Same person from survey to install — no subcontractors, no call centre. Honest advice: we&apos;ll say no if wrapping isn&apos;t right. Our reputation is in Sheffield; we don&apos;t disappear after the job.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            You also get practical support before we start. We walk you through
            edge details, handle style, and finish durability so you can choose
            what suits your household. If you have pets, young children, or a
            busy rental property, we recommend films and textures that are easy
            to clean and less likely to mark.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Sheffield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services available in Sheffield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap — bedrooms, bathrooms, offices</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            How a typical Sheffield project runs
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Day 1: detailed survey, measurements, finish shortlist</li>
            <li>Pre-start: confirmed installation plan and fixed quote</li>
            <li>Install: remove hardware, degrease, abrade, prime where needed</li>
            <li>Wrap: precision edge work around hinges, corners and returns</li>
            <li>Finish: refit handles/doors, quality checks and aftercare advice</li>
          </ul>
          <p className="mt-4 text-muted">
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              Kitchen wrapping cost guide
            </Link> — typical prices and what&apos;s included.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Recent work in Sheffield
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/IMG_8145.webp"
              alt="Kitchen wrapping project in Sheffield with new dark cabinet finish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Example: a family kitchen near Nether Edge had yellowing cream doors
            and worn worktops but solid cabinet carcasses. We wrapped the doors
            in a soft matte graphite, swapped to brushed metal handles, and
            finished the worktops in a stone-look film. The room looked fully
            modernised without changing the kitchen layout.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Sheffield customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="italic text-card-foreground">
              Our kitchen looked dated and we didn&apos;t want the cost of a full
              replacement. Connor helped us choose the right finish and was
              straight with us from the start. WRPX transformed it in two days —
              the result is brilliant.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Sarah M., Sheffield
            </p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            We keep each testimonial tied to real local jobs and avoid reusing
            the exact same trust copy across every city page. That helps you see
            realistic outcomes for Sheffield properties, not generic nationwide
            claims.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Sheffield and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Sheffield and the surrounding areas. Postcode prefixes
            include: S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13,
            S17, S18, S20, S21, S25, S26, S35, S36 and nearby. If you&apos;re
            just outside Sheffield, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            Most Sheffield kitchens are quoted between £850 and £1,500 depending on size and finish. Free survey for a fixed price — no obligation.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Popular Sheffield areas we cover
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Regular enquiries come from Hillsborough, Ecclesall, Nether Edge,
            Walkley, Crookes, Woodseats, Mosborough, Woodhouse and Meadowhead.
            If you are near the Sheffield boundary, send your postcode and we
            will confirm availability quickly.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Sheffield Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
