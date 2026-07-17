import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Grimsby — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Grimsby and Lincolnshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photo sign-off, east Lincolnshire and Humber coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-grimsby/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Grimsby — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Grimsby, North East Lincolnshire and the Humber region. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Sheffield–Nottingham Corridor", item: "https://www.wrpx.co.uk/sheffield-nottingham-corridor-installation/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Grimsby", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-grimsby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Grimsby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grimsby is approximately 90 minutes from our South Yorkshire base via the M180/A180. We cover Grimsby town centre, the Freshney Place retail area, the Grimsby docks and business park districts, and surrounding North East Lincolnshire commercial locations as part of scheduled Lincolnshire corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand in Grimsby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Grimsby client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Grimsby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Grimsby alongside Lincoln or other Lincolnshire sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Grimsby is the easternmost point of our Lincolnshire operating area. If your programme covers multiple Lincolnshire locations — Lincoln, Newark and Grimsby in the same corridor run — we handle the full Lincolnshire portion under one subcontract arrangement with consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerGrimsbyPage() {
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
            Subcontract · Grimsby &amp; North East Lincolnshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Grimsby &amp; North East Lincolnshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Grimsby, Cleethorpes and North East Lincolnshire. We
            install window graphics, wall wraps, vehicle wraps, shop fronts and floor graphics —
            on your instructions, under your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">East Lincolnshire coverage</strong>{" "}
                — Grimsby and Cleethorpes reached as part of scheduled Lincolnshire corridor runs
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
              Discuss a Grimsby subcontract job
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

      {/* Why Grimsby */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Grimsby as part of the Lincolnshire installation corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Grimsby is a commercially active port town with a significant food manufacturing,
              logistics and retail sector. The docks and associated industrial estates generate
              consistent vehicle livery and building graphics work from fleet operators and logistics
              companies. Freshney Place and the town centre retail core produce regular shop front,
              window graphics and fascia demand. Further east, Cleethorpes adds a seasonal retail
              and hospitality graphic requirement.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms running Lincolnshire or Humber programmes
              — covering Lincoln alongside Grimsby, or completing a regional rollout that includes
              North East Lincolnshire — having one installation partner who covers the full corridor
              east of the M1 removes the overhead of coordinating separate local contacts.
              We reach Grimsby via the M180/A180 as part of scheduled Lincolnshire runs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Grimsby client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Grimsby
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Grimsby town centre, Freshney Place, Cleethorpes and
                surrounding commercial units.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for Grimsby
                commercial, industrial and retail interiors. Surface assessed before installation
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
                Brand vinyls, promotional graphics and full rebrands on Grimsby shop fronts,
                fascias and external surfaces. One site or a full North East Lincolnshire
                rollout — consistent finish across all locations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps &amp; fleet livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap and livery installation for vans, cars, HGV cabs
                and fleet vehicles based in Grimsby and North East Lincolnshire. Photographic
                sign-off per vehicle. Fleet programmes coordinated as a single subcontract.
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
                Promotional floor vinyls, anti-slip film and wayfinding floor graphics for
                Grimsby retail, logistics and commercial environments. Anti-slip spec
                available where food-safe or industrial compliance is required.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Lincolnshire rollouts including Grimsby</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Grimsby as part of a wider Lincolnshire programme — covering Lincoln, Newark,
                Grimsby and Cleethorpes in one coordinated campaign. One crew, consistent standards,
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
              Grimsby, Cleethorpes &amp; North East Lincolnshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Grimsby is reached via the M180/A180 as part of scheduled Lincolnshire corridor runs.
              We cover Grimsby town centre, Freshney Place, the docks and business park districts,
              Cleethorpes seafront retail and surrounding North East Lincolnshire commercial
              locations. Where programmes justify it, we also service Lincoln and Newark in the
              same Lincolnshire run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Grimsby · Cleethorpes · Lincoln · Newark · Mansfield · Sheffield
              </strong>{" "}
              and the wider M1/A1/M180 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor page
              </Link>
              <Link href="/subcontract-vinyl-installer-lincoln/" className="text-accent hover:underline">
                Lincoln subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-newark/" className="text-accent hover:underline">
                Newark subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-scunthorpe/" className="text-accent hover:underline">
                Scunthorpe subcontract
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
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
            FAQ — subcontract installation in Grimsby
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Grimsby?",
                a: "Approximately 90 minutes from our South Yorkshire base via the M180/A180. We cover Grimsby town centre, Freshney Place, the docks, Cleethorpes and surrounding North East Lincolnshire commercial locations as part of scheduled Lincolnshire corridor runs.",
              },
              {
                q: "Do you work under our brand with Grimsby clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Grimsby client sees your brand throughout.",
              },
              {
                q: "Can you handle Grimsby alongside Lincoln or Newark in the same run?",
                a: "Yes. Grimsby, Lincoln and Newark all sit within our Lincolnshire operating area. We can cover the full east Lincolnshire corridor in a single scheduled run — no need to brief separate installers for each location.",
              },
              {
                q: "Do you install vehicle livery for Grimsby logistics and fleet operators?",
                a: "Yes — vehicle wrap and livery installation for fleet operators is part of our scope. We cover full wraps, partial wraps, cab livery and lettering for vans and HGVs. Fleet programmes are coordinated as a single subcontract with consistent documentation across every vehicle.",
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
              Subcontract installation in Grimsby — let&apos;s talk
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
              <Link href="/subcontract-vinyl-installer-lincoln/" className="text-accent hover:underline">
                Lincoln subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
