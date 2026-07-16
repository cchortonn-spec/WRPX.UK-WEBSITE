import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer York — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across York and North Yorkshire for sign companies, print management firms and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-york/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer York — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across York and North Yorkshire. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer York", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-york/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "York is within our extended operating area — approximately 55 minutes from our South Yorkshire base via the A64 and A1(M). We cover York city centre, the Monks Cross retail park, Clifton Moor, Foss Islands Road and York&apos;s commercial and retail estates as part of scheduled North Yorkshire runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for York jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your York client sees your brand throughout the installation process, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract in York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle York as part of a wider Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — York sits at the northern edge of our Yorkshire operating area. If your programme covers York alongside Sheffield, Leeds, Doncaster or other Yorkshire cities, we can handle the full Yorkshire portion under a single subcontract arrangement with consistent standards and consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerYorkPage() {
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
            Subcontract · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — York &amp; North Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across York and North Yorkshire. We install window graphics,
            wall wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under
            your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">York covered as part of our Yorkshire operating area</strong>{" "}
                — city centre, Monks Cross, Clifton Moor and surrounding commercial estates
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
              Discuss a York subcontract job
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

      {/* Why York */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              York as part of a Yorkshire-wide installation programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              York is a significant retail and commercial city — Monks Cross Retail Park, Clifton
              Moor, Foss Islands Road and the city centre all generate regular demand for window
              graphics, shop front vinyls and interior brand graphics. For sign companies and print
              management firms with clients across Yorkshire, having one installer who can cover York
              alongside Sheffield, Leeds and Doncaster removes the coordination overhead of briefing
              separate local teams for each site.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              York sits at the northern extent of our Yorkshire operating territory. We reach the
              city via the A64 and A1(M), covering it as part of scheduled North Yorkshire runs
              alongside Harrogate and Selby when programmes justify the route. If your work in
              York is a one-off job or part of a wider multi-site Yorkshire programme, we can handle
              it under the same subcontract arrangement.
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
            What we install on subcontract across York
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. York city centre, Monks Cross Retail Park, Clifton Moor and Foss
                Islands Road commercial units all covered.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across York. Surface assessed before installation — we flag
                substrate issues rather than paper over them.
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
                Brand vinyls, promotional graphics and full rebrands on York shop fronts, fascias
                and external surfaces. Consistent finish across all locations — whether it&apos;s one
                York site or a Yorkshire-wide rollout.
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
                Promotional floor graphics, anti-slip film, wayfinding and branded floor wraps
                for York retail, hospitality and commercial environments. Applied to spec — same
                standards as any Yorkshire location.
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
                Full and partial vehicle wrap installation for vans, cars and HGVs. York and North
                Yorkshire-based fleet programmes welcome. Photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Yorkshire rollouts from York</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                York as part of a wider Yorkshire programme — covering Sheffield, Leeds, Doncaster,
                York and surrounding cities in one coordinated campaign. One crew, consistent
                standards, consolidated records across all sites.
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
              York &amp; North Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              York sits at the northern edge of our Yorkshire operating area. We cover York city
              centre, Monks Cross Retail Park, Clifton Moor, Foss Islands Road and surrounding
              commercial and industrial estates. From York we also serve Harrogate and Selby as
              part of scheduled North Yorkshire runs.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                York · Sheffield · Leeds · Doncaster · Wakefield · Barnsley · Rotherham
              </strong>{" "}
              and the wider Yorkshire region.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
              </Link>
              <Link href="/commercial-installation-york/" className="text-accent hover:underline">
                Commercial installation York
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
            FAQ — subcontract installation in York
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to York?",
                a: "York is within our extended Yorkshire operating area — approximately 55 minutes from our South Yorkshire base. We cover the city centre, Monks Cross Retail Park, Clifton Moor and Foss Islands Road commercial estates as part of scheduled North Yorkshire runs.",
              },
              {
                q: "Do you work under our brand with York clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your York client sees your brand throughout.",
              },
              {
                q: "Can you handle York as part of a wider Yorkshire programme?",
                a: "Yes. York sits at the northern edge of our Yorkshire territory. We can cover York alongside Sheffield, Leeds, Doncaster and other Yorkshire cities under one subcontract arrangement — no need to brief separate installers for each city.",
              },
              {
                q: "How do you document York installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site Yorkshire programmes that include York, consolidated records across all locations in your agreed format.",
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
              Subcontract installation in York — let&apos;s talk
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
