import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Newark — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Newark on Trent and Nottinghamshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photo sign-off, A1 corridor coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-newark/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Newark — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Newark on Trent and Nottinghamshire. White-label available. WRPX installs what you supply on the A1 corridor."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Sheffield–Nottingham Corridor", item: "https://www.wrpx.co.uk/sheffield-nottingham-corridor-installation/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Newark", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-newark/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Newark on Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newark on Trent is approximately 55–65 minutes from our South Yorkshire base via the A1(M). We cover Newark town centre, Beacon Hill, the Newark Retail Park area and surrounding business and industrial estates as part of scheduled M1/A1 corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand in Newark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Newark client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Newark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Newark as part of a wider Nottinghamshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Newark sits on the A1(M) corridor between Mansfield and Lincoln. If your programme covers multiple Nottinghamshire sites — Newark alongside Mansfield, Nottingham or Lincoln — we handle the full corridor portion under one subcontract arrangement with consistent standards and consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerNewarkPage() {
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
            Subcontract · Newark on Trent &amp; Nottinghamshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Newark on Trent
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Newark on Trent and Nottinghamshire. We install
            window graphics, wall wraps, vehicle wraps, shop fronts and floor graphics — on
            your instructions, under your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A1(M) corridor coverage</strong>{" "}
                — Newark sits between Mansfield and Lincoln; we service the full corridor as one coordinated run
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed sign-off</span>
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
              Discuss a Newark subcontract job
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

      {/* Why Newark */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newark as part of the Sheffield–Nottingham M1/A1 corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Newark on Trent sits on the A1(M) midway between Mansfield and Lincoln — a commercially
              active market town with a strong independent retail sector, regular shop front and
              fascia graphic demand, and manufacturing and logistics businesses in the surrounding
              industrial estates. The town&apos;s central retail streets and Newark Retail Park
              generate consistent window graphics and promotional vinyl work throughout the year.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms with clients spread across
              Nottinghamshire — Mansfield, Newark, Nottingham — or running corridor programmes
              from Sheffield south to Lincoln, having one installer who covers the full A1/M1
              stretch removes the overhead of coordinating multiple local contacts for each site.
              We service Newark as part of a coordinated East Midlands run, not as a one-off trip.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Newark client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Newark
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Newark town centre, the retail park and surrounding commercial
                units. Consistent finish whether it is one window or a full shopfront.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for Newark
                commercial, retail and industrial interiors. Surface assessed before installation
                — substrate issues flagged, not papered over.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Newark shop fronts,
                fascias and external surfaces. One site or a full multi-location Nottinghamshire
                rollout — consistent finish throughout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor vinyls, anti-slip film and wayfinding floor graphics for
                Newark retail, commercial and industrial sites. Anti-slip spec available
                where required.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars and fleet vehicles
                based in Newark and Nottinghamshire. Photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Nottinghamshire rollouts including Newark</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Newark as part of a wider Nottinghamshire programme — covering Mansfield, Newark,
                Nottingham and Lincoln in one coordinated campaign. One crew, consistent standards,
                consolidated records across all sites.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
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
              Newark &amp; Nottinghamshire corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Newark sits within our East Midlands operating area, covered via the A1(M) as part
              of scheduled Nottinghamshire corridor runs. We cover Newark town centre, Beacon Hill
              retail area, the Newark Retail Park and surrounding industrial and business estates.
              From Newark we also service Mansfield and Lincoln in the same corridor run where
              programmes justify it.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Newark · Mansfield · Nottingham · Lincoln · Chesterfield · Sheffield
              </strong>{" "}
              and the wider M1/A1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor page
              </Link>
              <Link href="/subcontract-vinyl-installer-mansfield/" className="text-accent hover:underline">
                Mansfield subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-lincoln/" className="text-accent hover:underline">
                Lincoln subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Newark
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Newark on Trent?",
                a: "Approximately 55–65 minutes from our South Yorkshire base via the A1(M). We cover Newark town centre, Beacon Hill, the retail park and surrounding business estates as part of scheduled Nottinghamshire corridor runs.",
              },
              {
                q: "Do you work under our brand with Newark clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Newark client sees your brand throughout.",
              },
              {
                q: "Can you handle Newark as part of a wider Nottinghamshire programme?",
                a: "Yes. Newark sits on the A1(M) between Mansfield and Lincoln. We can cover Newark alongside Mansfield, Nottingham and Lincoln under one subcontract arrangement — no need to brief separate installers for each Nottinghamshire site.",
              },
              {
                q: "Do you install in Newark as a one-off job?",
                a: "Yes. Single-site jobs are fine. We travel to Newark as part of scheduled corridor runs, so single-site subcontract work is commercially viable — no minimum-programme requirement. Tell us the job, the site and your timeline and we will confirm availability.",
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
              Subcontract installation in Newark — let&apos;s talk
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
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
