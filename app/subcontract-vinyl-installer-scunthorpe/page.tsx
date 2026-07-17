import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Scunthorpe — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Scunthorpe and North Lincolnshire for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, Humber south bank coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-scunthorpe/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Scunthorpe — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Scunthorpe, North Lincolnshire and the south Humber bank. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Scunthorpe", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-scunthorpe/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Scunthorpe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scunthorpe is approximately 55–60 minutes from our South Yorkshire base via the M18 and A18. We cover Scunthorpe town centre, the Gallagher Retail Park, Queensway commercial strip and the Flixborough and Normandy Road industrial corridors as part of scheduled Humber south bank corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Scunthorpe jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Scunthorpe client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Scunthorpe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, safety and wayfinding vinyls for industrial environments, and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Scunthorpe alongside Grimsby and Hull in the same run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Scunthorpe, Grimsby and Hull all sit on or near the Humber and can be covered in a combined east Lincolnshire corridor run. If your programme includes sites on both banks of the Humber — Scunthorpe, Grimsby, Immingham, Hull, Hessle — we handle the full Humber corridor under a single subcontract arrangement with consolidated documentation.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerScunthorpePage() {
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
            Subcontract · Scunthorpe &amp; North Lincolnshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Scunthorpe &amp; North Lincolnshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Scunthorpe, North Lincolnshire and the south Humber bank. We
            install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics and industrial
            safety vinyls — on your instructions, under your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Humber south bank coverage</strong>{" "}
                — Scunthorpe reached via M18/A18 as part of scheduled Lincolnshire corridor runs
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
              Discuss a Scunthorpe subcontract job
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

      {/* Why Scunthorpe */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Scunthorpe — steel, logistics and the south Humber commercial corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Scunthorpe is the UK&apos;s largest integrated steelworks town, and the commercial
              activity connected to its industrial base shapes demand for vinyl installation work in
              ways that differ from most Yorkshire cities. Steel, heavy manufacturing and the logistics
              infrastructure surrounding the south Humber ports — Immingham and Grimsby are both within
              20 miles — generate substantial fleet livery and industrial safety graphics requirements.
              Vehicle wraps and cab livery for HGV fleets, directional and hazard vinyls for plant
              sites, branded vans for steel service centre operations: these are recurring requirements
              that sign companies and print houses serving this area encounter regularly.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The town&apos;s retail core — the Parishes shopping centre, Gallagher Retail Park,
              Queensway and the High Street commercial strip — generates the standard shop front,
              window graphics and promotional campaign install work. Smaller industrial and trade
              estates around Flixborough and Normandy Road extend the commercial footprint beyond
              the town boundary.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print management firms working across the Humber corridor —
              covering Scunthorpe alongside Grimsby, Immingham or Hull in the same programme —
              having one installation partner who handles all three sides of the estuary removes
              the overhead of sourcing and briefing separate local contacts. WRPX reaches Scunthorpe
              via the M18 and A18 as part of scheduled Lincolnshire corridor runs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Scunthorpe client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Scunthorpe
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs across Scunthorpe town centre, the Parishes shopping centre, Gallagher
                Retail Park, Queensway and North Lincolnshire commercial frontages.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps &amp; fleet livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap and livery installation for vans, cars, HGV cabs and
                fleet vehicles operating in the Scunthorpe steel, logistics and distribution sector.
                Photographic sign-off per vehicle. Fleet programmes handled as a single subcontract
                with consolidated records.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Scunthorpe shop fronts,
                fascias and external retail surfaces. Single site or a wider North Lincolnshire
                rollout — consistent installation standards across every location.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial,
                retail and industrial interiors across Scunthorpe and North Lincolnshire. Substrate
                assessed before installation — any issues flagged, not papered over.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; safety vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor vinyls, anti-slip film, wayfinding floor graphics and industrial
                safety vinyls for Scunthorpe retail, warehouse and manufacturing environments.
                Anti-slip specification available for plant and logistics sites where compliance
                is required.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Humber corridor multi-site rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scunthorpe as part of a wider Humber or Lincolnshire programme — combining south
                Humber sites with Grimsby, Immingham, Hull and Sheffield in a single coordinated
                installation run. One crew, consistent standards and consolidated records across
                the whole programme.
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
              Who uses WRPX as a Scunthorpe installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Scunthorpe clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format printed material to North Lincolnshire clients and needing a trusted trade installer for the site work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fleet operators and logistics companies in Scunthorpe&apos;s steel, distribution and Humber port hinterland needing vehicle livery installed on a subcontract basis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing industrial and commercial fit-outs in Scunthorpe who need a vinyl installation specialist slotted in at the right programme stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies running retail or industrial campaigns across Yorkshire and Lincolnshire — Scunthorpe often sits alongside Sheffield, Grimsby and Hull in the same multi-site brief</span>
              </li>
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
              Scunthorpe, North Lincolnshire &amp; Humber corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Scunthorpe is reached via the M18 and A18 as part of scheduled Lincolnshire corridor runs.
              We cover Scunthorpe town centre, Gallagher Retail Park, Queensway, Flixborough industrial
              estate and North Lincolnshire commercial and industrial areas. Where programmes justify it,
              we also combine Scunthorpe with Grimsby, Immingham, Hull or Sheffield in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Scunthorpe · Brigg · Barnetby · Flixborough · Immingham · Grimsby · Hull · Sheffield
              </strong>{" "}
              and the wider M18/A18 and Humber south bank corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-grimsby/" className="text-accent hover:underline">
                Grimsby subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-hull/" className="text-accent hover:underline">
                Hull subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-lincoln/" className="text-accent hover:underline">
                Lincoln subcontract
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
            FAQ — subcontract installation in Scunthorpe
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Scunthorpe?",
                a: "Scunthorpe is approximately 55–60 minutes from our South Yorkshire base via the M18 and A18. We cover Scunthorpe town centre, Gallagher Retail Park, Queensway and the Flixborough and Normandy Road industrial corridors as part of scheduled Lincolnshire south bank runs.",
              },
              {
                q: "Do you work under our brand with Scunthorpe clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Scunthorpe client sees your brand throughout.",
              },
              {
                q: "Can you handle Scunthorpe alongside Grimsby and Hull in the same run?",
                a: "Yes — Scunthorpe, Grimsby and Hull all sit on or near the Humber and can be covered in a combined Humber corridor run. If your programme includes south and north Humber bank sites — Scunthorpe, Grimsby, Immingham, Hull, Hessle — we handle the full Humber corridor under one subcontract arrangement.",
              },
              {
                q: "Do you install safety and industrial vinyls for Scunthorpe manufacturing and logistics sites?",
                a: "Yes — floor vinyls, anti-slip films, directional and safety vinyls for industrial, logistics and manufacturing environments are part of our scope. Scunthorpe's steel and port-adjacent industrial base generates regular requirements for this type of work and we cover it as a subcontract service alongside the more standard retail and commercial installs.",
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
              Subcontract installation in Scunthorpe — let&apos;s talk
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
