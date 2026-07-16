import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Nottingham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Nottingham and the East Midlands for sign companies, print houses and agencies. WRPX covers the M1 corridor from South Yorkshire to Nottingham — white-label, reliable, fully documented.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Nottingham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Nottingham and the East Midlands. White-label available. WRPX covers the Sheffield–Nottingham M1 corridor."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Sheffield–Nottingham Corridor", item: "https://www.wrpx.co.uk/sheffield-nottingham-corridor-installation/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Nottingham", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you cover Nottingham for subcontract installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — WRPX covers Nottingham and the surrounding East Midlands area as part of the Sheffield–Nottingham M1 corridor. Nottingham city centre, the Lace Market creative quarter, Beeston, West Bridgford, Bulwell and the NG1–NG15 postcode band are all within our operating reach.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Nottingham clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Nottingham client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl installation do you subcontract in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Nottingham as part of a Sheffield–Nottingham corridor programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the M1 corridor from Sheffield to Nottingham is a core geographic focus for WRPX. If your programme covers sites in both cities (or at any point along the M1 between them), we can handle the full corridor as a single subcontract crew with consistent standards across all sites.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerNottinghamPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Nottingham &amp; East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Nottingham &amp; East Midlands
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work in Nottingham and across the East Midlands. We cover the M1 corridor
            from South Yorkshire down to Nottingham — so if your programme spans both regions, you have
            one installer for the whole run.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1 corridor coverage</strong> — Sheffield to Nottingham under one subcontract arrangement
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Nottingham subcontract job
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

      {/* Nottingham + M1 corridor rationale */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Nottingham — a city with serious sign and print demand
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Nottingham has one of the most active creative and retail sectors in the East Midlands —
              the Lace Market is home to a cluster of design agencies, print houses and branding studios.
              The city centre, Victoria Centre, Trinity Square and the NG1 and NG7 retail corridors
              generate consistent demand for window graphics, shop front vinyls and wall wrap installation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms based in Nottingham who need a reliable
              installation partner — or for Yorkshire-based companies with occasional Nottingham jobs
              they need covered — WRPX provides the same white-label, fully documented, installation-only
              service we offer across South Yorkshire, extended down the M1.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The practical advantage: if you manage a multi-site programme that spans Sheffield and
              Nottingham, you don&apos;t need to coordinate two different installers with different
              documentation formats and different levels of reliability. One crew, consistent
              standards, the full corridor covered.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Nottingham
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Nottingham city centre, retail parks and commercial premises.
                Single site or multi-site programme.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Nottingham. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Nottingham shop fronts,
                fascias and external surfaces. Consistent finish whether it&apos;s one Nottingham
                store or part of a multi-city M1 corridor rollout.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers.
                East Midlands fleet programmes welcome. Photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor graphics, anti-slip film, wayfinding and branded floor wraps.
                Applied to spec for the environment — retail, hospitality, industrial.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">M1 corridor multi-site rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nottingham as part of a Sheffield–Nottingham corridor programme — one crew,
                consistent standards, consolidated photo records across all sites. Ideal for
                agencies and print companies managing campaigns across both regions.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                  Sheffield–Nottingham corridor page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who uses WRPX for Nottingham subcontract installation?
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {[
                "Sign companies based in or around Nottingham who need a reliable installation partner for vinyl and graphics work",
                "Print management companies supplying printed media to Nottingham retailers, wanting installation handled by a specialist",
                "Yorkshire-based sign and print firms who occasionally win jobs in Nottingham and need coverage without appointing a second subcontractor",
                "Marketing agencies running M1 corridor retail campaigns across Sheffield and Nottingham",
                "Retail brand managers coordinating national rollouts with East Midlands sites — we handle the Nottingham portion with the same standards as the rest of the programme",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">
            Nottingham &amp; East Midlands coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Nottingham city centre, the Lace Market, Beeston, West Bridgford, Bulwell,
            Arnold, Long Eaton and surrounding commercial and retail areas. For South Yorkshire
            programmes that extend into Nottingham, we provide seamless corridor coverage.
          </p>
          <p className="mt-6 text-muted">
            <strong className="text-foreground">
              Sheffield · Barnsley · Rotherham · Doncaster · Leeds · Chesterfield · Nottingham
            </strong>{" "}
            and the M1 corridor.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
              Sheffield–Nottingham corridor page
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
              Yorkshire-wide subcontract hub
            </Link>
            <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
              Nottingham commercial installation
            </Link>
            <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
              Sign company partners
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Nottingham
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you cover Nottingham for subcontract installation?",
                a: "Yes — we cover Nottingham as part of the Sheffield–Nottingham M1 corridor. City centre, Lace Market, Beeston, West Bridgford, Bulwell and the wider NG postcode area.",
              },
              {
                q: "Do you work under our brand with Nottingham clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Nottingham client sees your brand.",
              },
              {
                q: "Can you handle Nottingham as part of a wider corridor programme?",
                a: "Yes. If your programme covers Sheffield, South Yorkshire and Nottingham, we handle the full M1 corridor under one subcontract arrangement — consistent standards and documentation across every site.",
              },
              {
                q: "How do you document Nottingham installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site corridor programmes, consolidated records across all locations.",
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
      <section className="px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Subcontract installation in Nottingham — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, the site and your timeline. We&apos;ll confirm availability and
              give you a straight installation quote.
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
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
