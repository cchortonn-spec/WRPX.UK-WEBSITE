import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
          <p className="mt-4 text-muted leading-relaxed">
            WRPX is a specialist vinyl application business built on preparation,
            precision and long-term finish quality. The goal is simple: deliver
            replacement-level visual results without unnecessary full rip-outs
            where existing structures are still sound.
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

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Experience and standards
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>{siteConfig.yearsInBusiness}+ years practical vinyl installation experience</li>
              <li>Domestic and commercial surface wrapping knowledge</li>
              <li>Preparation-first process before any film is applied</li>
              <li>{siteConfig.guaranteeYears}-year named guarantee on eligible jobs</li>
              <li>Direct accountability: same installer from survey to sign-off</li>
            </ul>
            <p className="mt-5 text-muted leading-relaxed">
              We use proven film systems and select finish types based on
              substrate condition, room use and expected wear. If a surface is
              likely to fail, we advise against wrapping it rather than taking a
              short-term job that will not hold up.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What customers can expect
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Clear suitability check before quoting</li>
              <li>Fixed quote after survey, no pressure selling</li>
              <li>Detailed prep and careful edge finishing</li>
              <li>Aftercare guidance for cleaning and maintenance</li>
              <li>Follow-up support if needed</li>
            </ul>
          </div>
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Areas and service focus
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Our core areas are Sheffield, Doncaster, Barnsley, Rotherham,
              Leeds, Huddersfield and Chesterfield. Core services include{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                kitchen wrapping
              </Link>
              ,{" "}
              <Link href="/furniture-wrapping/" className="text-accent hover:underline">
                furniture wrapping
              </Link>
              ,{" "}
              <Link href="/window-film/" className="text-accent hover:underline">
                window film
              </Link>{" "}
              and{" "}
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                commercial installation
              </Link>
              .
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              See practical examples in our{" "}
              <Link href="/gallery/" className="text-accent hover:underline">
                gallery
              </Link>{" "}
              or request a survey through the{" "}
              <Link href="/contact/" className="text-accent hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
