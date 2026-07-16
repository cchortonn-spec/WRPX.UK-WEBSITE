import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Chesterfield — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Chesterfield and the Derbyshire corridor for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-chesterfield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Chesterfield — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Chesterfield and the South Yorkshire–Derbyshire corridor. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Chesterfield", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-chesterfield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to Chesterfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chesterfield is on the edge of our South Yorkshire operating patch — roughly 20 minutes from base via the A61. We cover Vicar Lane Shopping Centre, Ravenside Retail Park, Dunston Road and Robinson's Industrial Estate regularly as part of programmes that span Sheffield through to Derbyshire.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Chesterfield jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Chesterfield client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Chesterfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Chesterfield as part of a wider Sheffield–Derbyshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Chesterfield is a natural extension of our Sheffield operation. If your programme covers Sheffield, Chesterfield, Mansfield, Alfreton or Derby, we can handle the full corridor as a single subcontract crew without you coordinating multiple installers across the county boundary.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerChesterfieldPage() {
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
            Subcontract · Chesterfield &amp; Derbyshire Corridor
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Chesterfield &amp; South Yorkshire Corridor
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Chesterfield and the Sheffield–Derbyshire corridor. We install
            window graphics, wall wraps, vehicle wraps, shop fronts and floor graphics — on your
            instructions, under your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Chesterfield is 20 minutes from our South Yorkshire base</strong>{" "}
                — regular route, no location surcharge
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
              Discuss a Chesterfield subcontract job
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

      {/* Why Chesterfield */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              The Sheffield–Chesterfield corridor — covered under one arrangement
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Chesterfield is the natural southern anchor of WRPX&apos;s South Yorkshire territory. Sitting
              on the A61 and a short drive from Junction 29 of the M1, it&apos;s a town we pass through
              regularly on programmes that span Sheffield, Rotherham and the Derbyshire border. For sign
              companies managing campaigns across this corridor, having one subcontract installer who
              handles both sides of the county boundary removes the coordination overhead of briefing a
              separate team for Chesterfield sites.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Chesterfield&apos;s commercial mix — Vicar Lane Shopping Centre, Ravenside Retail Park,
              Dunston Road, Robinson&apos;s Industrial Estate, and a growing number of out-of-town retail
              units — generates steady demand for shop front vinyls, window graphics and brand
              installation. We cover all of it as part of our regular South Yorkshire operation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to
              apply. We prepare the surface, install to spec and deliver a signed-off photo pack. Your
              client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Chesterfield
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Chesterfield retail and commercial frontages — Vicar Lane, Ravenside
                and town centre shops — handled to the same standard as our Sheffield work.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Chesterfield. Surface assessed before installation —
                we flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Chesterfield shop fronts,
                fascias and external surfaces. Consistent finish whether it&apos;s one Chesterfield
                location or a multi-site programme spanning the Sheffield–Derbyshire corridor.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers.
                Chesterfield-based fleets and vehicles with registration addresses in Derbyshire
                all handled. Photographic sign-off per vehicle.
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
                Applied to spec for retail, hospitality and industrial environments — same process
                for Chesterfield as for our South Yorkshire sites.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sheffield–Chesterfield–Nottingham corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Chesterfield as part of a wider M1 corridor programme — Sheffield, Chesterfield,
                Mansfield, Alfreton, Nottingham in one coordinated campaign. One crew, consistent
                standards, consolidated records across the full route.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                  Sheffield–Nottingham corridor installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Chesterfield &amp; surrounding area coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Chesterfield town centre, Vicar Lane, Ravenside Retail Park, Dunston Road,
              Robinson&apos;s and surrounding commercial and industrial estates. From Chesterfield we also
              regularly work into Mansfield, Alfreton, Clay Cross and the wider Amber Valley corridor.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Nottingham · Mansfield
              </strong>{" "}
              and the wider M1 corridor from South Yorkshire to the East Midlands.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/commercial-installation-chesterfield/" className="text-accent hover:underline">
                Chesterfield commercial installation
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Chesterfield
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to Chesterfield?",
                a: "Chesterfield is approximately 20 minutes from our South Yorkshire base via the A61. We cover Vicar Lane, Ravenside, Dunston Road and the wider Chesterfield area regularly — it's a natural extension of our Sheffield operation.",
              },
              {
                q: "Do you work under our brand with Chesterfield clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Chesterfield client sees your brand throughout.",
              },
              {
                q: "Can you cover the Chesterfield element of a wider Sheffield–Derbyshire programme?",
                a: "Yes. We cover Sheffield, Chesterfield and the wider M1 corridor as part of the same programme — no need to brief a separate installer for Chesterfield sites. One subcontract crew, consistent standards across the county boundary.",
              },
              {
                q: "How do you document Chesterfield installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site programmes covering Chesterfield, Sheffield and surrounding areas, consolidated records across all locations.",
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
              Subcontract installation in Chesterfield — let&apos;s talk
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
