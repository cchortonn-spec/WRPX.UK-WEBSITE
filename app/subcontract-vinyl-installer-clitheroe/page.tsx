import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Clitheroe — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Clitheroe and the BB7 zone for sign companies, print houses and fit-out contractors. WRPX covers Clitheroe town centre, Castle Street BB7, Whalley BB7, Longridge PR3 and the A59 Ribble Valley corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-clitheroe/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Clitheroe — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Clitheroe and the BB7 zone. White-label available. WRPX covers Clitheroe town centre, Castle Street BB7, Whalley BB7, Great Harwood BB6, Longridge PR3 and the A59 Ribble Valley corridor between Skipton and Preston."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Clitheroe", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-clitheroe/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Clitheroe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clitheroe is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is via the M1 north to junction 45, then the M621 west to the M62, north on the M6 to junction 31, and the A59 east to Clitheroe BB7. Alternatively via the M1 to Barnoldswick BB18 (15 miles south on the A59) and then the A59 north through Gisburn to Clitheroe. Clitheroe BB7 sits at the heart of the Ribble Valley — Barnoldswick BB18 is 15 miles south-west on the A59, Skipton BD23 is 18 miles east on the A59, and Burnley BB11 is 8 miles south via the A671.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Clitheroe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Clitheroe and BB7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Clitheroe with Burnley or Barnoldswick on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Clitheroe is 8 miles north of Burnley BB11 via the A671, 15 miles north of Barnoldswick BB18 on the A59, and 9 miles from Accrington BB5 via the A680. Whalley BB7 is 4 miles south on the A59, and Longridge PR3 is 8 miles west via the B6243. For sign companies managing East Lancashire and Ribble Valley programmes, Clitheroe, Burnley, Barnoldswick and Accrington can typically be combined in a two-day visit, minimising travel cost on Lancashire corridor programmes.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Clitheroe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Clitheroe commercial stock includes Castle Street and Moor Lane independent retail and hospitality, the Enterprise Centre business units, the Ribblesdale business park and the hospitality and rural tourism sector across the Ribble Valley.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Whalley and the Ribble Valley villages from the Clitheroe zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Whalley BB7 (4 miles south on the A59, with significant independent retail and the Whalley Abbey visitor economy), Great Harwood BB6 (7 miles south on the A680), Longridge PR3 (8 miles west) and the rural Ribble Valley villages are all within our Clitheroe coverage area. The Ribble Valley generates consistent demand for high-specification commercial finishes — frosted film, window vinyl, interior graphics — from a mix of independent hospitality, professional services and rural business estates.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Clitheroe?",
    a: "Clitheroe is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is via the M1 north to junction 45, then the M621 west to the M62, north on the M6 to junction 31, and the A59 east to Clitheroe BB7. Alternatively via the M1 to Barnoldswick BB18 (15 miles south on the A59) and then the A59 north through Gisburn to Clitheroe. Clitheroe BB7 sits at the heart of the Ribble Valley — Barnoldswick BB18 is 15 miles south-west on the A59, Skipton BD23 is 18 miles east on the A59, and Burnley BB11 is 8 miles south via the A671.",
  },
  {
    q: "Do you work white-label in Clitheroe?",
    a: "Yes — white-label is standard on all Clitheroe and BB7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Clitheroe with Burnley or Barnoldswick on the same programme?",
    a: "Yes — Clitheroe is 8 miles north of Burnley BB11 via the A671, 15 miles north of Barnoldswick BB18 on the A59, and 9 miles from Accrington BB5 via the A680. Whalley BB7 is 4 miles south on the A59, and Longridge PR3 is 8 miles west via the B6243. For sign companies managing East Lancashire and Ribble Valley programmes, Clitheroe, Burnley, Barnoldswick and Accrington can typically be combined in a two-day visit, minimising travel cost on Lancashire corridor programmes.",
  },
  {
    q: "What types of vinyl installation do you cover in Clitheroe?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Clitheroe commercial stock includes Castle Street and Moor Lane independent retail and hospitality, the Enterprise Centre business units, the Ribblesdale business park and the hospitality and rural tourism sector across the Ribble Valley.",
  },
  {
    q: "Do you cover Whalley and the Ribble Valley villages from the Clitheroe zone?",
    a: "Yes — Whalley BB7 (4 miles south on the A59, with significant independent retail and the Whalley Abbey visitor economy), Great Harwood BB6 (7 miles south on the A680), Longridge PR3 (8 miles west) and the rural Ribble Valley villages are all within our Clitheroe coverage area. The Ribble Valley generates consistent demand for high-specification commercial finishes — frosted film, window vinyl, interior graphics — from a mix of independent hospitality, professional services and rural business estates.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-barnoldswick/", city: "Barnoldswick", postcode: "BB18", desc: "Barnoldswick town, Kelbrook, Earby — 15 miles south-west via A59" },
  { href: "/subcontract-vinyl-installer-burnley/", city: "Burnley", postcode: "BB11", desc: "Burnley town centre, Burnley Bridge Business Park — 8 miles south via A671" },
  { href: "/subcontract-vinyl-installer-accrington/", city: "Accrington", postcode: "BB5", desc: "Accrington town centre, Hyndburn — 9 miles south via A680" },
  { href: "/subcontract-vinyl-installer-skipton/", city: "Skipton", postcode: "BD23", desc: "Skipton town centre, Yorkshire Dales gateway — 18 miles east via A59" },
];

export default function SubcontractVinylInstallerClitheroePageComponent() {
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
            <span className="text-foreground">Subcontract Installer Clitheroe</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Clitheroe BB7
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Clitheroe and the BB7 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Clitheroe and
            the BB7 Ribble Valley zone. We cover Clitheroe town centre and Castle Street,
            Whalley BB7, Great Harwood BB6 and Longridge PR3 — all combinable with
            Barnoldswick, Burnley or Accrington work on the same programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Clitheroe Installation →
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
            Clitheroe coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Clitheroe is a market town in the Ribble Valley district of Lancashire,
              situated in the Forest of Bowland Area of Outstanding Natural Beauty.
              The BB7 postcode covers Clitheroe and extends into the wider Ribble Valley:
              Whalley to the south, Sawley and Gisburn to the north, and the rural Ribble
              Valley villages to the east and west.
            </p>
            <p>
              Clitheroe&apos;s commercial character centres on Castle Street and Moor Lane:
              independent retail, cafés, delicatessens, professional services and hospitality
              businesses that serve both the local population and the significant rural tourism
              and visitor economy from the Forest of Bowland. The Ribble Valley is one of the
              wealthier rural districts in Lancashire, which means specification standards for
              commercial and hospitality interiors tend to be high relative to the population size.
            </p>
            <p>
              From our South Yorkshire base, Clitheroe is approximately 1 hour 15 minutes
              via the M1 north and M62/M6 west, then the A59 east into Clitheroe. The A59
              is the main Lancashire–Yorkshire trans-Pennine arterial through the Ribble Valley:
              it runs west to Preston and east through Gisburn, Skipton and into North Yorkshire.
              This makes Clitheroe a natural midpoint on Lancashire–Yorkshire corridor programmes
              that need to cover both sides of the Pennines.
            </p>
            <p>
              Clitheroe&apos;s A59 position means it pairs naturally with Barnoldswick BB18
              (15 miles south-west), Skipton BD23 (18 miles east) and Burnley BB11 (8 miles south
              via the A671). Sign companies managing East Lancashire programmes can often combine
              Clitheroe with Burnley, Accrington and Nelson in a two-day run without significant
              additional travel overhead.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Clitheroe and the BB7 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Clitheroe town centre, Castle Street and BB7 commercial sites.
                Frosted film, decorative manifestation, promotional graphics and brand
                window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Clitheroe and
                the Ribble Valley. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Clitheroe offices, hospitality venues, independent retail and professional
                services. High-specification finishes for the Ribble Valley&apos;s quality-led
                commercial and hospitality market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Clitheroe office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and visitor economy graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and wall vinyls for Clitheroe and Ribble Valley
                pubs, restaurants, B&amp;Bs and visitor attractions. The Ribble Valley visitor
                economy generates year-round demand for interior and window graphic work in
                the hospitality sector.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project branding
                vinyls for Clitheroe and BB7 development sites. Installed and removed to
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
            White-label subcontract — your brand on site in Clitheroe
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Clitheroe and the BB7 zone. We arrive in unbranded vehicles, use your job
              sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on site,
              on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Preston, Burnley, Blackburn or further afield
              with occasional Clitheroe and Ribble Valley work, the white-label model means
              you can accept and deliver BB7 jobs without maintaining a local installer
              relationship in the town. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Clitheroe installation: before,
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
            Clitheroe subcontract installation — common questions
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
              Installation work in Clitheroe or the BB7 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Clitheroe and combine with any nearby Barnoldswick, Burnley or Skipton
              work on the same programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Clitheroe Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
