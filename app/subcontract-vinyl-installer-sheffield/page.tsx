import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Sheffield — Trade Installation Partner | WRPX",
  description:
    "WRPX is a specialist subcontract vinyl installer serving Sheffield and South Yorkshire. Sign companies, print houses and agencies use us as a reliable white-label installation partner — you supply, we install.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installation — Sheffield and South Yorkshire",
  "Specialist subcontract and white-label vinyl installation for sign companies, print management firms, marketing agencies and commercial clients in Sheffield and South Yorkshire. WRPX installs window graphics, wall wraps, vehicle wraps and retail graphics under your brand."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you cover Sheffield for subcontract installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sheffield is our primary operating city — WRPX is South Yorkshire based and Sheffield is on our doorstep. Sign companies and print houses in Sheffield use us for regular overflow capacity and ongoing programmes across the city and surrounding region.",
      },
    },
    {
      "@type": "Question",
      name: "What do you install in Sheffield on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts and fascia vinyls, vehicle wraps and fleet livery, POS graphics and multi-site retail campaigns. Installation-only: you supply the printed or cut material, we install it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Sheffield sign companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. White-label is our default operating mode for trade partners. Unbranded vans, your paperwork on site — your end client in Sheffield doesn't need to know WRPX is involved.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle multi-site programmes from a Sheffield base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sheffield is well-positioned for M1 corridor rollouts — we cover Sheffield, Rotherham, Barnsley, Doncaster, Chesterfield and Nottingham within one operating area. Coordinated multi-site programmes with consolidated photo reporting are a standard part of what we do.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerSheffieldPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Trade partners · Sheffield
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Sheffield &amp; South Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation subcontractor based in South Yorkshire, with
            Sheffield as our primary operating city. Sign companies, print houses, marketing
            agencies and commercial clients across Sheffield use us as a reliable{" "}
            <strong className="text-foreground">
              white-label installation partner
            </strong>
            — you supply the printed or cut material, we install it under your brand.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Sheffield-based and Sheffield-focused</strong>{" "}
                — no long-distance travel time factored into your job
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your Sheffield
                clients don&apos;t need to know WRPX is involved
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                {siteConfig.yearsInBusiness}+ years of professional vinyl application — not a
                generalist with a squeegee
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per site, consolidated records for rollout programmes</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Talk to us about Sheffield subcontract work
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Sheffield context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why Sheffield sign companies use a local subcontract installer
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sheffield has a significant concentration of sign companies, print firms and
              commercial studios. Many have their own installation crews — until a programme
              overlaps a busy period, runs across multiple Sheffield sites simultaneously, or takes
              them further along the M1 than they can staff at once.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              That&apos;s the gap WRPX fills: a Sheffield-based installer who already understands
              material behaviour and surface preparation, available as overflow capacity or an
              ongoing subcontract partner. You retain the client, you manage the job — WRPX attends
              under your brand and installs to the standard your reputation requires.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From central Sheffield retail installations to out-of-town commercial parks and
              industrial unit signage, WRPX covers the full Sheffield and South Yorkshire footprint
              that most regional sign companies need to reach.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield subcontract installation — what we cover
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window graphics &amp; vinyl signage
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Frosted vinyl, full-colour window graphics, one-way vision film and promotional
                campaign vinyls for Sheffield retail, office and commercial frontages. Single site or
                multi-site programme across the city.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Wall wraps &amp; large-format graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Large-format wall graphics, branded murals, feature wall vinyls and commercial wall
                wraps across Sheffield offices, retail units, showrooms and hospitality venues.
                Surface assessment and preparation included.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor graphics installation</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Promotional floor graphics, wayfinding and branded floor wraps in Sheffield retail
                and commercial environments. Correct specification for the substrate and environment
                — flagged before install if the surface isn&apos;t right.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  Floor graphics detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Shop fronts, fascias &amp; POS
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyls and rebrand wraps on Sheffield shop fronts and fascias. POS and in-store
                graphics installed to planogram. Counter wraps, display unit wraps and bespoke
                commercial interior applications.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Vehicle wraps &amp; fleet livery
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full and partial vehicle wrap installation for Sheffield-based fleets, van livery
                programmes and commercial vehicle rebrands. We install the wrap you supply —
                photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                M1 corridor multi-site rollouts
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Sheffield is at the top of the M1 corridor — ideal base for rollouts reaching
                Rotherham, Barnsley, Doncaster, Chesterfield and Nottingham within a single
                coordinated programme. Consistent preparation, same reporting structure across every
                site.
              </p>
              <p className="mt-3 text-sm">
                <Link
                  href="/sheffield-nottingham-corridor-installation/"
                  className="text-accent hover:underline"
                >
                  Sheffield–Nottingham corridor detail →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label model */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — how it works in Sheffield
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              You retain the Sheffield client relationship. WRPX attends under your instructions —
              your paperwork, your company name referenced on site comms if required. Your
              client&apos;s experience in Sheffield is managed by you: WRPX is invisible unless you
              want us visible.
            </p>
            <p>
              After each Sheffield site, we provide a photo pack: before prep, during installation
              and completed sign-off. On multi-site programmes running across Sheffield and the
              wider region, we maintain consolidated records — so if a query comes back to you weeks
              later, you have clear timestamped evidence.
            </p>
            <p>
              NDAs and programme-specific confidentiality are discussed upfront. We operate quietly
              behind Sheffield sign companies and print firms — several ongoing subcontract
              relationships in the region run on exactly this model.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage links */}
      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Coverage from Sheffield</h2>
          <p className="mt-3 text-muted">
            WRPX covers Sheffield and the wider South Yorkshire–M1 corridor for subcontract
            installation:
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/commercial-installation-sheffield/"
              className="text-accent hover:underline"
            >
              Commercial installation Sheffield
            </Link>
            <Link
              href="/subcontract-vinyl-installer-doncaster/"
              className="text-accent hover:underline"
            >
              Subcontract installer Doncaster
            </Link>
            <Link
              href="/commercial-installation-rotherham/"
              className="text-accent hover:underline"
            >
              Commercial installation Rotherham
            </Link>
            <Link
              href="/commercial-installation-barnsley/"
              className="text-accent hover:underline"
            >
              Commercial installation Barnsley
            </Link>
            <Link
              href="/sheffield-nottingham-corridor-installation/"
              className="text-accent hover:underline"
            >
              Sheffield–Nottingham corridor
            </Link>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="text-accent hover:underline"
            >
              Yorkshire subcontract hub
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — Sheffield subcontract installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you cover Sheffield for subcontract installation?",
                a: "Yes. Sheffield is our primary city — South Yorkshire based, on our doorstep. Sign companies and print houses in Sheffield use us for overflow capacity and ongoing programmes.",
              },
              {
                q: "What do you install in Sheffield on a subcontract basis?",
                a: "Window graphics, wall wraps, floor graphics, shop fronts, vehicle wraps and fleet livery, POS graphics and multi-site retail campaigns. Installation-only: you supply, we install.",
              },
              {
                q: "Do you work white-label for Sheffield sign companies?",
                a: "Yes. White-label is our default for trade partners. Unbranded vans, your paperwork on site — your Sheffield client doesn't need to know WRPX is involved.",
              },
              {
                q: "Can you handle M1 corridor rollouts from a Sheffield base?",
                a: "Yes. Sheffield is at the top of the M1 corridor — from here we cover Rotherham, Barnsley, Doncaster, Chesterfield and Nottingham within a single coordinated programme.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-background p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sheffield subcontract installation enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Sheffield programme — what&apos;s installing, where, when. We&apos;ll
              confirm fit and give you a straight installation quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Contact WRPX
              </Link>
              <Link
                href="/subcontract-vinyl-installation-yorkshire/"
                className="text-accent hover:underline text-sm"
              >
                Yorkshire subcontract hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
