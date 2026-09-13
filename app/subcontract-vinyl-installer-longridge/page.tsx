import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Longridge — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Longridge and the PR3 zone for sign companies, print houses and fit-out contractors. WRPX covers Longridge town centre, Berry Lane PR3, Whittingham Road PR3 and the B6243 Preston corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-longridge/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Longridge — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Longridge and the PR3 zone. White-label available. WRPX covers Longridge town centre, Berry Lane PR3, Whittingham Road PR3, the B6243 corridor to Preston and Garstang, and the rural Ribble Valley east of Longridge."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Longridge", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-longridge/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Longridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Longridge is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is via the M1 north, the M621 and M62 west to the M6, north on the M6 to junction 31 or 31a, and then the B6243 north-east into Longridge. Longridge PR3 sits 8 miles north-east of Preston via the B6243, and 8 miles east of Garstang via the B6243 and A6.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Longridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Longridge and PR3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Longridge with Preston or Garstang on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Longridge is the natural eastern extension of a Preston or Garstang programme. Preston PR1 is 8 miles south-west via the B6243 and A6, Garstang PR3 is 8 miles west via the B6243 and A6. For sign companies with work spread across the Preston corridor and the eastern Ribble Valley, combining Longridge, Preston and Garstang in a single two-day visit is a practical arrangement that avoids separate mobilisations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Longridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Longridge commercial stock is centred on Berry Lane and Inglewhite Road: independent retail, professional services, restaurants, pubs and the rural lifestyle businesses that serve the Ribble Valley and Forest of Bowland.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the rural Ribble Valley villages from the Longridge zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Ribble Valley villages east of Longridge are within our PR3 coverage zone. Ribchester PR3 (4 miles east on the B6245), Chipping PR3 (5 miles north-east on the B6243) and the Forest of Bowland villages are all accessible from a Longridge base. The rural Ribble Valley generates consistent demand for commercial graphics from visitor attractions, rural hospitality, farm shops and rural professional services.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Longridge?",
    a: "Longridge is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is via the M1 north, the M621 and M62 west to the M6, north on the M6 to junction 31 or 31a, and then the B6243 north-east into Longridge. Longridge PR3 sits 8 miles north-east of Preston via the B6243, and 8 miles east of Garstang via the B6243 and A6.",
  },
  {
    q: "Do you work white-label in Longridge?",
    a: "Yes — white-label is standard on all Longridge and PR3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Longridge with Preston or Garstang on the same programme?",
    a: "Yes — Longridge is the natural eastern extension of a Preston or Garstang programme. Preston PR1 is 8 miles south-west via the B6243 and A6, Garstang PR3 is 8 miles west via the B6243 and A6. For sign companies with work spread across the Preston corridor and the eastern Ribble Valley, combining Longridge, Preston and Garstang in a single two-day visit is a practical arrangement that avoids separate mobilisations.",
  },
  {
    q: "What types of vinyl installation do you cover in Longridge?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Longridge commercial stock is centred on Berry Lane and Inglewhite Road: independent retail, professional services, restaurants, pubs and the rural lifestyle businesses that serve the Ribble Valley and Forest of Bowland.",
  },
  {
    q: "Do you cover the rural Ribble Valley villages from the Longridge zone?",
    a: "Yes — the Ribble Valley villages east of Longridge are within our PR3 coverage zone. Ribchester PR3 (4 miles east on the B6245), Chipping PR3 (5 miles north-east on the B6243) and the Forest of Bowland villages are all accessible from a Longridge base. The rural Ribble Valley generates consistent demand for commercial graphics from visitor attractions, rural hospitality, farm shops and rural professional services.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-preston/", city: "Preston", postcode: "PR1", desc: "Preston city centre, Fishergate — 8 miles south-west via B6243/A59/A6" },
  { href: "/subcontract-vinyl-installer-garstang/", city: "Garstang", postcode: "PR3", desc: "Garstang town centre, A6 corridor — 8 miles west via B6243 and A6" },
  { href: "/subcontract-vinyl-installer-clitheroe/", city: "Clitheroe", postcode: "BB7", desc: "Clitheroe town centre, Ribble Valley — 10 miles east via A59" },
];

export default function SubcontractVinylInstallerLongridgePage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/commercial-installation/" className="text-accent hover:underline">Commercial Installation</Link>
            <span className="mx-2">›</span>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">Yorkshire Subcontract Hub</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Subcontract Installer Longridge</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Longridge PR3
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Longridge and the PR3 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Longridge and the
            PR3 zone. We cover Longridge town centre, Berry Lane, Whittingham Road and the
            surrounding Ribble Valley villages — all combinable with Preston or Garstang
            work on the same B6243/A6 corridor programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Longridge Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Longridge coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Longridge is a market town of approximately 8,000 people in the Ribble Valley
              district of Lancashire, positioned on the B6243 corridor 8 miles north-east
              of Preston. The PR3 postcode covers Longridge and extends east across the
              rural Ribble Valley: Ribchester to the east, Chipping to the north-east, and
              the Forest of Bowland villages beyond. The Ribble Valley here is a designated
              Area of Outstanding Natural Beauty with a high concentration of rural tourism,
              farm shops, gastropubs and lifestyle businesses that generate consistent demand
              for commercial finishes.
            </p>
            <p>
              Longridge&apos;s commercial centre is concentrated on Berry Lane — the main
              shopping street — and Inglewhite Road: a mix of independent retail, cafés,
              restaurants, pubs, professional services and the usual service businesses that
              serve a mid-sized Lancashire market town. The town serves as a gateway to the
              Forest of Bowland from the Preston side, which means hospitality and
              visitor-economy businesses form a larger-than-average share of commercial
              premises relative to the town&apos;s population.
            </p>
            <p>
              From our South Yorkshire base, Longridge is approximately 1 hour 30 minutes
              via the M1 north and M6, exiting at junction 31 or 31a onto the B6243 north-east.
              Longridge&apos;s position on the B6243 makes it the natural eastern end of any
              programme covering the Preston–Garstang corridor: Preston PR1 is 8 miles
              south-west via the B6243, and Garstang PR3 is 8 miles west via the B6243
              and A6. The three towns form a neat triangle on the Lancashire corridor —
              combining all three in a two-day visit is a practical arrangement.
            </p>
            <p>
              Clitheroe BB7 is approximately 10 miles east of Longridge via the A59 through
              Whalley — a separate Ribble Valley market town with its own commercial centre.
              Sign companies with work across both the Longridge and Clitheroe ends of the
              Ribble Valley can plan a single East Lancashire visit that takes in both towns
              without duplication of travel.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Longridge and the PR3 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Longridge Berry Lane, Inglewhite Road and the wider PR3 zone.
                Frosted film, decorative manifestation, promotional graphics and brand
                window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Longridge and
                the Ribble Valley. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Longridge offices, hospitality venues, independent retail and professional
                services. Quality finishes for the Ribble Valley&apos;s independent and
                rural hospitality sector.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural hospitality and tourism graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and wall vinyls for Longridge and Ribble Valley
                pubs, restaurants, farm shops, holiday cottages and visitor attractions.
                The Forest of Bowland rural tourism sector generates year-round demand for
                interior and window graphic work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Longridge office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project branding
                vinyls for Longridge and Ribble Valley development sites. Installed and
                removed to project timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — your brand on site in Longridge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Longridge and the PR3 zone. We arrive in unbranded vehicles, use your job
              sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on site,
              on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Preston or Blackburn with occasional Longridge
              and Ribble Valley work, the white-label model means you can accept and
              deliver PR3 jobs without maintaining a local installer relationship in the
              area. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Longridge installation: before,
              during and completed shots uploaded on the day of installation in your agreed
              file format. Combined with our job sheet sign-off procedure, this gives you
              a complete installation record for your client file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Longridge subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby coverage areas
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, city, postcode, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{city} <span className="text-muted font-normal text-sm">({postcode})</span></h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Installation work in Longridge or the PR3 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Longridge and combine with any nearby Preston, Garstang or Clitheroe
              work on the same programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Longridge Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
