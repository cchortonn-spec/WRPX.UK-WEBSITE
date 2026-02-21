import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Sheffield | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Sheffield. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-sheffield/" },
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
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re not a national chain sending a van from Birmingham or
            Manchester. We work from South Yorkshire. You get a team that knows
            the area, turns up when we say we will, and comes back if you need
            us — no call centres, no depot miles away.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why choose us over a national wrap company in Sheffield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            National franchises often sub-contract or send crews from other
            regions. You get a fixed process and a call centre. We&apos;re a
            local specialist: same team from survey to finish, honest advice
            (we&apos;ll say no if wrapping isn&apos;t right), and a named{" "}
            {siteConfig.guaranteeYears}-year guarantee. Our reputation is in
            Sheffield — we don&apos;t disappear after the job.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Sheffield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap — bedrooms, bathrooms, offices</li>
          </ul>
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
              alt="Kitchen wrap Sheffield — recent project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Sheffield customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            {/* TODO: add real Sheffield testimonial — no invented quotes */}
            <p className="italic text-card-foreground">
              Placeholder. Add a real review from a Sheffield customer when
              available.
            </p>
          </div>
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
