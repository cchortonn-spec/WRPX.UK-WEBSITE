import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Garstang — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Garstang and the PR3 zone for sign companies, print houses and fit-out contractors. WRPX covers Garstang town centre, High Street PR3, Longridge PR3, Scorton PR3 and the A6 Lancaster corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-garstang/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Garstang — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Garstang and the PR3 zone. White-label available. WRPX covers Garstang town centre, High Street PR3, Longridge PR3, Scorton PR3, Bilsborrow PR3 and the A6 corridor between Preston and Lancaster."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Garstang", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-garstang/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Garstang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garstang is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is via the M1 north, the M621 west to the M62, north on the M6 to junction 33 or 32, and the A6 into Garstang. Garstang PR3 sits on the A6 midway between Preston (11 miles south at junction 32) and Lancaster (11 miles north at junction 34 on the M6). Longridge PR3 is 8 miles east on the B6243.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Garstang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Garstang and PR3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Garstang with Preston or Lancaster on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Garstang is the natural midpoint on the Preston–Lancaster A6 and M6 corridor. Preston PR1 is 11 miles south via the A6 and M6, Lancaster LA1 is 11 miles north via the A6 and M6. Clitheroe BB7 is approximately 18 miles east via the A59 through Longridge. For sign companies with work spread across central Lancashire and the Lancaster corridor, Garstang sits at the centre of that geography — combining Garstang with Preston and Lancaster avoids the need for two separate mobilisations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Garstang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Garstang commercial stock includes High Street independent retail and hospitality, Market Place PR3, Garstang Farmers Market, the rural business and tourism sector on the A6 corridor and the nearby industrial estates at Cabus and Hollowforth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Longridge and Scorton from the Garstang zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Longridge PR3 (8 miles east on the B6243, a small market town with independent retail and professional services) and Scorton PR3 (4 miles north on the A6, home to the Wyresdale business park and the Scorton retail village) are both within our Garstang coverage area. Bilsborrow PR3 (3 miles south on the A6) and the rural Wyre Valley villages are also covered. The A6 corridor generates consistent demand for commercial finishes from a mix of independent retail, professional services and rural hospitality.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Garstang?",
    a: "Garstang is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is via the M1 north, the M621 west to the M62, north on the M6 to junction 33 or 32, and the A6 into Garstang. Garstang PR3 sits on the A6 midway between Preston (11 miles south at junction 32) and Lancaster (11 miles north at junction 34 on the M6). Longridge PR3 is 8 miles east on the B6243.",
  },
  {
    q: "Do you work white-label in Garstang?",
    a: "Yes — white-label is standard on all Garstang and PR3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Garstang with Preston or Lancaster on the same programme?",
    a: "Yes — Garstang is the natural midpoint on the Preston–Lancaster A6 and M6 corridor. Preston PR1 is 11 miles south via the A6 and M6, Lancaster LA1 is 11 miles north via the A6 and M6. Clitheroe BB7 is approximately 18 miles east via the A59 through Longridge. For sign companies with work spread across central Lancashire and the Lancaster corridor, Garstang sits at the centre of that geography — combining Garstang with Preston and Lancaster avoids the need for two separate mobilisations.",
  },
  {
    q: "What types of vinyl installation do you cover in Garstang?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Garstang commercial stock includes High Street independent retail and hospitality, Market Place PR3, Garstang Farmers Market, the rural business and tourism sector on the A6 corridor and the nearby industrial estates at Cabus and Hollowforth.",
  },
  {
    q: "Do you cover Longridge and Scorton from the Garstang zone?",
    a: "Yes — Longridge PR3 (8 miles east on the B6243, a small market town with independent retail and professional services) and Scorton PR3 (4 miles north on the A6, home to the Wyresdale business park and the Scorton retail village) are both within our Garstang coverage area. Bilsborrow PR3 (3 miles south on the A6) and the rural Wyre Valley villages are also covered. The A6 corridor generates consistent demand for commercial finishes from a mix of independent retail, professional services and rural hospitality.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-preston/", city: "Preston", postcode: "PR1", desc: "Preston city centre, Fishergate — 11 miles south via M6 J31/32" },
  { href: "/subcontract-vinyl-installer-lancaster/", city: "Lancaster", postcode: "LA1", desc: "Lancaster city centre, Morecambe Bay corridor — 11 miles north via M6 J33/34" },
  { href: "/subcontract-vinyl-installer-clitheroe/", city: "Clitheroe", postcode: "BB7", desc: "Clitheroe town centre, Ribble Valley — 18 miles east via B6243/A59" },
];

export default function SubcontractVinylInstallerGarstangPage() {
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
            <span className="text-foreground">Subcontract Installer Garstang</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Garstang PR3
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Garstang and the PR3 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Garstang and the
            PR3 zone. We cover Garstang town centre and High Street, Longridge PR3, Scorton
            PR3 and Bilsborrow PR3 — all combinable with Preston or Lancaster work on the
            same A6/M6 corridor programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Garstang Installation →
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
            Garstang coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Garstang is a market town in the Wyre district of Lancashire, positioned on the
              A6 corridor midway between Preston to the south and Lancaster to the north.
              The PR3 postcode covers Garstang and extends across the rural Wyre Valley:
              Longridge to the east, Scorton to the north, and the A6 corridor villages of
              Bilsborrow, Barton and Broughton to the south.
            </p>
            <p>
              Garstang&apos;s commercial character centres on High Street and Market Place:
              independent retail, cafés, farm shops, professional services and hospitality
              businesses that serve both the local population and significant passing trade
              on the A6 — historically one of the main north–south routes in Lancashire before
              the M6. The town&apos;s independent retail and rural tourism character means
              specification standards for commercial finishes tend to be high relative to the
              population size, particularly for hospitality and lifestyle retail.
            </p>
            <p>
              From our South Yorkshire base, Garstang is approximately 1 hour 20 minutes via
              the M1 north and M62/M6 west, exiting at junction 33 or 32 onto the A6.
              Garstang&apos;s position on the A6 and M6 makes it the natural hub of any programme
              covering the Preston–Lancaster corridor: Preston PR1 is 11 miles south via the A6
              and M6, Lancaster LA1 is 11 miles north, and Clitheroe BB7 is reachable in around
              30 minutes via Longridge and the B6243/A59.
            </p>
            <p>
              For sign companies managing Lancashire corridor programmes, Garstang, Preston and
              Lancaster can typically be combined in a two-day visit — Garstang in the morning,
              Preston or Lancaster in the afternoon or evening — minimising travel overhead
              across the M6 zone.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Garstang and the PR3 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Garstang High Street, Market Place PR3 and the wider PR3 commercial
                area. Frosted film, decorative manifestation, promotional graphics and brand
                window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Garstang and the
                Wyre Valley. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Garstang offices, hospitality venues, independent retail and professional
                services. Quality finishes for the Wyre Valley&apos;s lifestyle and independent
                commercial sector.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Garstang office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural tourism and hospitality graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and wall vinyls for Garstang and Wyre Valley
                pubs, restaurants, farm shops, holiday parks and visitor attractions. The
                A6 and Wyre Valley rural tourism sector generates year-round demand for
                interior and window graphic work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project branding
                vinyls for Garstang and PR3 development sites. Installed and removed to
                project timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — your brand on site in Garstang
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Garstang and the PR3 zone. We arrive in unbranded vehicles, use your job
              sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on site,
              on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Preston, Lancaster or Blackpool with occasional
              Garstang and Wyre Valley work, the white-label model means you can accept and
              deliver PR3 jobs without maintaining a local installer relationship in the area.
              We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Garstang installation: before,
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
            Garstang subcontract installation — common questions
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
              Installation work in Garstang or the PR3 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Garstang and combine with any nearby Preston, Lancaster or Clitheroe
              work on the same programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Garstang Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
