import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About WRPX | Kitchen Wrapping Specialist South Yorkshire",
  description:
    "Meet Connor — South Yorkshire kitchen wrapping specialist. Over 7 years in vinyl and sign wrapping. Honest advice, trade-level prep, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/about/" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            About WRPX — Kitchen Wrapping South Yorkshire
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            {siteConfig.yearsInBusiness}+ years in the vinyl and sign wrapping industry. We focus on kitchen wrapping — doors, worktops and frames — across South Yorkshire and surrounding areas.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-lg border border-border md:h-72 md:w-72">
              <Image
                src="/images/connor.JPG"
                alt="Connor — WRPX Kitchen Wrapping Specialist"
                fill
                className="object-cover"
                sizes="288px"
                priority
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold text-foreground">
                Connor — WRPX Kitchen Wrapping Specialist
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                I run WRPX and do the surveys and wrapping myself. No national franchise, no subcontractors — you get one point of contact from first call to final walkround. I&apos;ve been wrapping kitchens, furniture and commercial vinyl for {siteConfig.yearsInBusiness}+ years. If your kitchen is suitable for wrapping I&apos;ll tell you; if it isn&apos;t I&apos;ll say that too. Honest advice, trade-level prep and a {siteConfig.guaranteeYears}-year guarantee on every job.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield. Free survey, fixed quote, no obligation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
