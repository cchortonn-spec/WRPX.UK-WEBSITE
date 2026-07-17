import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Hull — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Hull and the Humber for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, east Yorkshire and Humber coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hull/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Hull — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Hull, East Yorkshire and the Humber region. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Hull", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hull/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hull is approximately 90 minutes from our South Yorkshire base via the M62 and A63. We cover Hull city centre, Whitefriargate, the retail and commercial areas around St Stephen's, Hessle, Beverley Road commercial strip and the industrial and logistics estates near the docks as part of scheduled East Yorkshire corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Hull jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Hull client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Hull alongside Grimsby or other Humber area sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Hull and Grimsby both sit on the Humber and can be covered in the same East Yorkshire corridor run. If your programme includes both sides of the estuary — Hull, Hessle, Brough and Grimsby — we handle the full Humber portion under a single subcontract arrangement with consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerHullPage() {
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
            Subcontract · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Hull &amp; East Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Hull, Hessle and East Yorkshire. We install window graphics,
            wall wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under
            your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Humber coverage</strong>{" "}
                — Hull and East Yorkshire reached as part of scheduled M62/A63 corridor runs
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
              Discuss a Hull subcontract job
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

      {/* Why Hull */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Hull as part of the East Yorkshire and Humber installation corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hull is the UK&apos;s busiest port after Felixstowe, and the commercial activity that
              surrounds it generates a steady, varied demand for vinyl installation work. The city
              centre retail core — St Stephen&apos;s shopping centre, Whitefriargate, Prospect Street —
              produces regular shop front, window graphics and promotional campaign installs. The port
              and logistics sector generates consistent fleet livery work. Hessle, Beverley and the
              surrounding East Riding towns extend the commercial footprint significantly beyond the
              city boundary.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms running Yorkshire or Humber-wide programmes
              — covering West Yorkshire alongside Hull, or completing a programme that includes both
              sides of the Humber — having one installation partner who handles the full east Yorkshire
              leg removes the overhead of sourcing and briefing separate local contacts. WRPX reaches
              Hull via the M62 and A63 as part of scheduled East Yorkshire corridor runs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to
              apply. We prepare the surface, install to spec and deliver a signed-off photo pack. Your
              Hull client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Hull
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Hull city centre, St Stephen&apos;s, Whitefriargate,
                Hessle and surrounding East Yorkshire commercial frontages.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial,
                retail and logistics interiors across Hull and East Yorkshire. Substrate assessed
                before installation — any issues flagged, not papered over.
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
                Brand vinyls, promotional graphics and full rebrands on Hull shop fronts, fascias
                and external retail surfaces. Single site or a wider East Yorkshire rollout —
                consistent installation standards across every location.
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
                Full and partial vehicle wrap and livery installation for vans, cars, HGV cabs and
                fleet vehicles based in Hull and the Humber logistics corridor. Photographic sign-off
                per vehicle. Fleet programmes handled as a single subcontract with consolidated records.
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
                Promotional floor vinyls, anti-slip film and wayfinding floor graphics for Hull retail,
                warehouse and commercial environments. Anti-slip spec available for logistics and
                industrial environments where compliance is required.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Humber &amp; Yorkshire rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hull as part of a wider Yorkshire or Humber programme — combining East Yorkshire sites
                with Leeds, Sheffield and Grimsby in a single coordinated installation run. One crew,
                consistent standards and consolidated records across the whole programme.
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

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who uses WRPX as a Hull installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {[
                "Sign companies with Hull clients who need a reliable subcontract installer — they handle design and manufacture, WRPX handles installation under their brand",
                "Print management firms supplying large-format printed material to East Yorkshire clients and needing a trusted trade installer for the site work",
                "Marketing agencies running retail or fleet campaigns across Yorkshire — Hull often sits alongside Leeds and Sheffield in the same multi-site brief",
                "Large-format print houses offering print-and-install to clients but subcontracting the physical installation",
                "Fleet operators and logistics companies based near Hull docks needing vehicle livery installed on a subcontract basis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;Your client sees your brand. WRPX installs to your spec, under your name. You get the
              photo pack — they get the finished job.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Hull, East Yorkshire &amp; Humber coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hull is reached via the M62 and A63 as part of scheduled East Yorkshire runs. We cover
              Hull city centre, St Stephen&apos;s shopping centre, Hessle, Beverley, Brough and the
              port and logistics districts. Where programmes justify it, we also combine Hull with
              Grimsby, Leeds or Sheffield in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Hull · Hessle · Beverley · Brough · Grimsby · Leeds · Sheffield
              </strong>{" "}
              and the wider M62/A63 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/subcontract-vinyl-installer-grimsby/" className="text-accent hover:underline">
                Grimsby subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-scunthorpe/" className="text-accent hover:underline">
                Scunthorpe subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
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
            FAQ — subcontract installation in Hull
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Hull?",
                a: "Hull is approximately 90 minutes from our South Yorkshire base via the M62 and A63. We cover Hull city centre, St Stephen's, Whitefriargate, Hessle, Beverley Road and the port and logistics district as part of scheduled East Yorkshire corridor runs.",
              },
              {
                q: "Do you work under our brand with Hull clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Hull client sees your brand throughout.",
              },
              {
                q: "Can you handle Hull alongside Grimsby in the same run?",
                a: "Yes — Hull and Grimsby both sit on the Humber and can be covered in the same East Yorkshire corridor run. If your programme includes the north and south Humber bank — Hull, Hessle, Brough and Grimsby — we handle the full Humber portion under one subcontract arrangement.",
              },
              {
                q: "Do you install vehicle livery for Hull logistics and fleet operators?",
                a: "Yes — vehicle wrap and livery installation for fleet operators is part of our scope. Hull's dock and logistics sector generates regular fleet livery requirements and we cover it as a subcontract service. Full wraps, partial wraps, cab livery and lettering all handled with photo sign-off per vehicle.",
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
              Subcontract installation in Hull — let&apos;s talk
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
              <Link href="/subcontract-vinyl-installer-grimsby/" className="text-accent hover:underline">
                Grimsby subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
