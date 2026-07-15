import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Harrogate — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Harrogate and North Yorkshire for sign companies, print management firms and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-harrogate/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Harrogate — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Harrogate and North Yorkshire. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Harrogate", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-harrogate/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Harrogate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harrogate is approximately 60 minutes from our South Yorkshire base via the A1(M). We cover Harrogate town centre, the Stray retail area, the International Centre district and surrounding commercial and business park locations as part of scheduled North Yorkshire runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand in Harrogate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend with unbranded or re-branded vehicles under your instructions. Your Harrogate client sees your company throughout. We provide photo documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Harrogate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Harrogate as part of a wider Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Harrogate sits within our North Yorkshire operating area. If your programme covers Harrogate alongside York, Leeds, Sheffield or other Yorkshire cities, we handle the full Yorkshire portion under one subcontract arrangement with consistent standards and consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerHarrogatePage() {
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
            Subcontract · Harrogate &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Harrogate &amp; North Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Harrogate and North Yorkshire. We install window graphics,
            wall wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under
            your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Harrogate covered as part of our Yorkshire operating area</strong>{" "}
                — town centre, International Centre district, Stray retail area and surrounding business parks
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
              Discuss a Harrogate subcontract job
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

      {/* Why Harrogate */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Harrogate as part of a Yorkshire-wide installation programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Harrogate is a commercially active North Yorkshire town with a strong conference,
              hospitality and professional services economy. The International Centre drives a constant
              flow of event and exhibition graphics work — shell scheme panels, promotional floor vinyls,
              window graphics for pop-up venues. Meanwhile, the town&apos;s retail centre and surrounding
              business parks generate regular brand rollout and shop front installation demand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms with clients across Yorkshire, having
              one installer who can cover Harrogate alongside York, Leeds and Sheffield removes
              the overhead of briefing separate local teams for every North Yorkshire job. We reach
              Harrogate via the A1(M) as part of scheduled Yorkshire runs — treating it as part
              of a single, coordinated operating area rather than a one-off trip.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Harrogate
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Harrogate town centre, the Stray retail area and surrounding
                commercial units.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial,
                hospitality and retail interiors across Harrogate. Surface assessed before installation
                — substrate issues flagged, not papered over.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation Yorkshire
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Harrogate shop fronts,
                fascias and external surfaces. Consistent finish across all locations — one site or
                a full Yorkshire rollout.
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
                Harrogate retail, conference and hospitality venues. International Centre event
                work and town centre retail both covered.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation Yorkshire
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars and fleet vehicles based
                in Harrogate and North Yorkshire. Photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Yorkshire rollouts including Harrogate</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Harrogate as part of a wider Yorkshire programme — covering Sheffield, Leeds, York,
                Doncaster and Harrogate in one coordinated campaign. One crew, consistent standards,
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
              Harrogate &amp; North Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Harrogate sits within our North Yorkshire operating area, reached via the A1(M)
              as part of scheduled Yorkshire runs. We cover Harrogate town centre, the International
              Centre district, the Stray retail corridor, Bower Road and Harrogate&apos;s business
              parks. From Harrogate we also service York and Knaresborough as part of the same
              North Yorkshire run where programmes justify it.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Harrogate · York · Leeds · Wakefield · Bradford · Sheffield · Doncaster
              </strong>{" "}
              and the wider Yorkshire region.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/subcontract-vinyl-installer-york/" className="text-accent hover:underline">
                York subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
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
            FAQ — subcontract installation in Harrogate
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Harrogate?",
                a: "Approximately 60 minutes from our South Yorkshire base via the A1(M). We cover Harrogate town centre, the International Centre district, the Stray retail corridor and surrounding business parks as part of scheduled North Yorkshire runs.",
              },
              {
                q: "Do you work under our brand with Harrogate clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Harrogate client sees your brand throughout.",
              },
              {
                q: "Can you handle Harrogate as part of a wider Yorkshire programme?",
                a: "Yes. Harrogate sits within our Yorkshire territory. We can cover Harrogate alongside York, Leeds, Sheffield and other Yorkshire cities under one subcontract arrangement — no need to brief separate installers for each North Yorkshire location.",
              },
              {
                q: "Do you do conference and event graphics installation at Harrogate International Centre?",
                a: "Yes — exhibition and event graphics installation is part of our scope. Shell scheme panels, promotional floor vinyls, window graphics and branded surfaces for conferences and events. Supply us the material and we&apos;ll install to your spec and timeline.",
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
              Subcontract installation in Harrogate — let&apos;s talk
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
