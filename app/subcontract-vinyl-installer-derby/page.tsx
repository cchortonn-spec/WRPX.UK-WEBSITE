import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Derby — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Derby and Derbyshire for sign companies, print management firms and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Derby — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Derby and Derbyshire. White-label available. WRPX installs what you supply — window graphics, wall wraps, shop fronts, floor graphics and vehicle wraps."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.wrpx.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Subcontract Vinyl Installation — Yorkshire",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Subcontract Vinyl Installer — Derby",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-derby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is Derby from your base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derby is approximately 50 minutes from our South Yorkshire base via the M1 (J29A to J25). We cover Derby and Derbyshire as part of our M1 corridor operating area alongside Nottingham, Chesterfield and Sheffield. Derby jobs are scheduled as part of our regular M1 south runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Derby sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is our default operating mode. We attend Derby sites under your instructions with unbranded vehicles. Your Derby client sees your business throughout the installation, not WRPX. Paperwork and photo documentation are provided in your format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl installation do you carry out in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and exhibition graphics installation. We are installation-only — you supply the printed or cut material, we assess surfaces and install to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Derby as part of a wider East Midlands or M1 corridor programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Derby sits at the southern end of our M1 operating corridor. If your programme covers Derby alongside Nottingham, Chesterfield, Sheffield or other cities on the M1, we can handle the full corridor under one subcontract arrangement — consistent standards, single point of contact, consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerDerbyPage() {
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
            Subcontract · Derby &amp; Derbyshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Derby &amp; Derbyshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Derby and Derbyshire. We install window graphics, wall wraps,
            vehicle wraps, shop fronts and floor graphics — on your instructions, under your brand,
            with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Derby covered as part of our M1 corridor operating area</strong>{" "}
                — city centre, Pride Park, Sinfin, Ascot Drive and Derby&apos;s industrial and retail estates
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before prep, during installation and completed sign-off</span>
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
              Discuss a Derby subcontract job
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

      {/* Derby on the M1 corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Derby as part of the Sheffield–Nottingham–Derby corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Derby is a significant commercial and industrial city at the southern end of our M1
              operating corridor. The city&apos;s commercial geography — Pride Park business district,
              the Sinfin industrial estates, Ascot Drive and Derby city centre — generates regular
              demand for window graphics, shop front vinyls, vehicle wraps and large-format interior
              brand graphics.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms with clients across the East Midlands and
              M1 corridor, having one installation partner who covers Derby alongside Nottingham,
              Chesterfield and Sheffield removes the overhead of briefing separate local teams for each
              city. We reach Derby via the M1 (approximately 50 minutes from our South Yorkshire base)
              and cover it alongside Nottingham, Mansfield and Chesterfield as part of regular
              M1 south runs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We assess the surface, install to specification and deliver a signed-off photo
              pack. Your client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Derby
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Derby city centre, Pride Park, Sinfin commercial and Ascot Drive
                industrial estates all covered.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Derby. Surface assessed before installation — substrate
                issues flagged, not papered over.
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
                Brand vinyls, promotional graphics and full rebrands on Derby shop fronts, fascias
                and external surfaces. Consistent finish whether it&apos;s one Derby site or part of
                a wider Midlands rollout.
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
                Promotional floor graphics, anti-slip film, wayfinding and branded floor wraps for
                Derby retail, hospitality and commercial environments. Applied to specification with
                substrate assessment before installation.
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
                Full and partial vehicle wrap installation for vans, cars and HGVs based in or
                visiting Derby. Fleet programmes from Derby and Derbyshire welcome. Photographic
                sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Exhibition graphics installation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shell scheme panel graphics, custom stand surface vinyl, floor graphics and large-format
                vinyl installation for exhibitions and trade events at Derby and East Midlands venues.
                Fast-turnaround, venue-aware installation on your brief.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/exhibition-graphics-installation/" className="text-accent hover:underline">
                  Exhibition graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who works with us */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who works with WRPX in Derby
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sign companies and print management firms in Derby, Chesterfield, Nottingham and
              Sheffield who win installation work in Derby but don&apos;t have an in-house install team
              for the area. Marketing agencies managing Derby retail or venue graphics. Large-format
              print houses who need a reliable East Midlands installation partner for overflow or
              regular Derby programmes.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We understand how subcontract relationships work from a trade partner&apos;s perspective.
              You&apos;ve briefed the client, you&apos;ve sold the job — the last thing you need is
              an installer who doesn&apos;t show up, doesn&apos;t read the brief or leaves your client
              asking questions you have to field. We attend Derby sites prepared, on time and with the
              right tools. Paperwork comes back to you in your format.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm text-muted">
              <div>
                <p className="font-medium text-foreground">Sign companies</p>
                <p className="mt-1">Derby and East Midlands install overflow, subcontract-only engagements</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Print management</p>
                <p className="mt-1">Large-format print firms who supply the material and need a reliable Derby install partner</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Agencies</p>
                <p className="mt-1">Marketing agencies running Derby retail campaigns who need white-label installation support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Derby &amp; Derbyshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Derby as part of our M1 south operating corridor. Locations within Derby
              reached as standard: Derby city centre, Pride Park, Sinfin industrial estate, Ascot Drive,
              Chaddesden, Chellaston and Derby&apos;s retail and out-of-town commercial parks. Outer
              Derbyshire — including Belper, Ripley and Ilkeston — covered when jobs fall on a
              scheduled Derby run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Derby · Nottingham · Mansfield · Chesterfield · Sheffield
              </strong>{" "}
              — covered as one M1 corridor programme where relevant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-chesterfield/" className="text-accent hover:underline">
                Chesterfield subcontract
              </Link>
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Derby
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is Derby from your base?",
                a: "Derby is approximately 50 minutes from our South Yorkshire base via the M1. We cover it alongside Nottingham, Mansfield and Chesterfield as part of our regular M1 south runs — no additional travel surcharge for Derby city and the main industrial estates.",
              },
              {
                q: "Do you work white-label with Derby clients?",
                a: "Yes — white-label by default. We attend Derby sites with unbranded vehicles, carrying your paperwork. Your Derby client sees your brand throughout. Photo documentation is returned to you in your agreed format.",
              },
              {
                q: "Can you handle Derby as part of an M1 corridor programme?",
                a: "Yes. If your programme covers Derby alongside Nottingham, Chesterfield and Sheffield, we can handle the full M1 corridor under one subcontract arrangement — one briefing process, consistent standards, consolidated records across all sites.",
              },
              {
                q: "What documentation do you provide after a Derby install?",
                a: "Photo pack per site: before surface prep, during installation and completed sign-off. For multi-site programmes including Derby, consolidated records across all locations in your agreed format — referencing site address, material used and installer sign-off.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-card p-6">
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
              Subcontract installation in Derby — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, the site and your timeline. We&apos;ll confirm availability and give
              you a straight installation quote.
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
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partner page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
