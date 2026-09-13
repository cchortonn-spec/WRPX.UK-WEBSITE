import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Ilkley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Ilkley and the LS29 zone for sign companies, print houses and fit-out contractors. WRPX covers Ilkley town centre, The Grove, Ben Rhydding LS29, Burley-in-Wharfedale LS29, Menston LS29, Addingham LS29 and the A65 Wharfe Valley corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-ilkley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Ilkley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Ilkley and the LS29 zone. White-label available. WRPX covers Ilkley town centre, The Grove retail, Ben Rhydding LS29, Burley-in-Wharfedale LS29, Menston LS29, Addingham LS29 and the A65 Wharfe Valley corridor between Skipton and Leeds."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Ilkley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-ilkley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Ilkley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ilkley is approximately 1 hour from our South Yorkshire base. The most direct route is via the M1 north to the A1(M), then the A659 west to Otley and the A65 west to Ilkley. Alternatively via the M1 to Bradford on the M606/A650 and then the A650 north-west through Bingley to the A6034 and A65 into Ilkley. Ilkley LS29 sits between Otley LS21 (5 miles east on the A65), Keighley BD21 (6 miles north on the A6034) and Skipton BD23 (15 miles west on the A65).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Ilkley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Ilkley and LS29 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Ilkley with Skipton or Keighley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ilkley is 15 miles from Skipton BD23 and 6 miles from Keighley BD21 via the A6034, making it well-suited for combining with Aire Valley and Craven district programmes. Otley LS21 is 5 miles east, Harrogate HG1 is 12 miles north-east via the A59 and A61, and Bradford BD1 is around 10 miles south-east on the A650. For sign companies managing West Yorkshire Dales-edge programmes, Ilkley, Skipton, Keighley and Harrogate can typically be combined in a single-day or two-day visit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Ilkley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Ilkley commercial stock includes The Grove retail strip, the station precinct, independent retail and hospitality on Brook Street and Wells Road, professional services offices, and the residential and wellness sector across LS29.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the rural and residential parts of the LS29 zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ben Rhydding LS29, Burley-in-Wharfedale LS29, Menston LS29, Addingham LS29 and the wider Wharfe Valley corridor are all within our Ilkley coverage area. The Wharfe Valley has a high concentration of premium residential properties, wellness businesses, boutique retail and professional services — all of which generate regular demand for window film, interior graphics and surface wrapping.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Ilkley?",
    a: "Ilkley is approximately 1 hour from our South Yorkshire base. The most direct route is via the M1 north to the A1(M), then the A659 west to Otley and the A65 west to Ilkley. Alternatively via the M1 to Bradford on the M606/A650 and then the A650 north-west through Bingley to the A6034 and A65 into Ilkley. Ilkley LS29 sits between Otley LS21 (5 miles east on the A65), Keighley BD21 (6 miles north on the A6034) and Skipton BD23 (15 miles west on the A65).",
  },
  {
    q: "Do you work white-label in Ilkley?",
    a: "Yes — white-label is standard on all Ilkley and LS29 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Ilkley with Skipton or Keighley on the same programme?",
    a: "Yes — Ilkley is 15 miles from Skipton BD23 and 6 miles from Keighley BD21 via the A6034, making it well-suited for combining with Aire Valley and Craven district programmes. Otley LS21 is 5 miles east, Harrogate HG1 is 12 miles north-east via the A59 and A61, and Bradford BD1 is around 10 miles south-east on the A650. For sign companies managing West Yorkshire Dales-edge programmes, Ilkley, Skipton, Keighley and Harrogate can typically be combined in a single-day or two-day visit.",
  },
  {
    q: "What types of vinyl installation do you cover in Ilkley?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Ilkley commercial stock includes The Grove retail strip, the station precinct, independent retail and hospitality on Brook Street and Wells Road, professional services offices, and the residential and wellness sector across LS29.",
  },
  {
    q: "Do you cover the rural and residential parts of the LS29 zone?",
    a: "Yes — Ben Rhydding LS29, Burley-in-Wharfedale LS29, Menston LS29, Addingham LS29 and the wider Wharfe Valley corridor are all within our Ilkley coverage area. The Wharfe Valley has a high concentration of premium residential properties, wellness businesses, boutique retail and professional services — all of which generate regular demand for window film, interior graphics and surface wrapping.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-skipton/", city: "Skipton", postcode: "BD23", desc: "Skipton town centre, Canal Basin, Yorkshire Dales gateway — 15 miles west via A65" },
  { href: "/subcontract-vinyl-installer-keighley/", city: "Keighley", postcode: "BD21", desc: "Keighley town centre, Dalton Lane industrial, Airedale — 6 miles north via A6034" },
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate spa town, Montpellier Quarter, Royal Baths — 12 miles north-east via A59/A61" },
  { href: "/subcontract-vinyl-installer-bradford/", city: "Bradford", postcode: "BD1", desc: "Bradford city centre, Manningham, Little Germany — 10 miles south-east via A650" },
];

export default function SubcontractVinylInstallerIlkleyPage() {
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
            <span className="text-foreground">Subcontract Installer Ilkley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Ilkley LS29
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Ilkley and the LS29 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Ilkley and
            the LS29 zone. We cover Ilkley town centre and The Grove, Ben Rhydding LS29,
            Burley-in-Wharfedale LS29, Menston LS29, Addingham LS29 and the A65 Wharfe
            Valley corridor — all combinable with Skipton, Keighley or Harrogate work
            on the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss an Ilkley Installation →
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
            Ilkley coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ilkley is a Victorian spa town in the Wharfe Valley, situated in the Bradford
              Metropolitan District of West Yorkshire. The LS29 postcode covers the town
              itself and its surrounding Wharfe Valley villages — Ben Rhydding to the
              south-east, Burley-in-Wharfedale to the east, Menston to the east, and
              Addingham to the west toward the Skipton corridor.
            </p>
            <p>
              Ilkley&apos;s commercial character is dominated by high-end independent retail
              and hospitality concentrated on The Grove and Brook Street: boutique fashion,
              homeware, wellness, artisan food and drink, and professional services. The town
              attracts a premium demographic, which means specification standards for
              commercial interior finishes — frosted film, window vinyl, surface wrapping —
              tend to be higher than in comparable-sized market towns.
            </p>
            <p>
              From our South Yorkshire base, Ilkley is approximately 1 hour via the M1
              north to the A1(M), then the A659 west to Otley and the A65 west to Ilkley.
              The A65 is the main commercial arterial through the Wharfe Valley — running
              west from Leeds through Otley, Ilkley, and on to Skipton and the A59 corridor.
              The A6034 connects Ilkley north to Keighley and the wider Aire Valley.
            </p>
            <p>
              Ilkley&apos;s position at the midpoint of the A65 makes it the natural link
              between two other zones we cover: Skipton BD23 is 15 miles west, Otley LS21
              is 5 miles east, Keighley BD21 is 6 miles north on the A6034, and Harrogate
              HG1 is 12 miles north-east via the A59 and A61. A programme covering Ilkley,
              Skipton and Keighley in the same day is straightforward from a routing
              perspective.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Ilkley and the LS29 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Ilkley town centre, The Grove and LS29 commercial sites. Frosted film,
                decorative manifestation, promotional graphics and brand window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Ilkley and
                the LS29 zone. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Ilkley offices, wellness studios, boutique retail, professional services
                and residential properties across LS29. High-specification finishes for
                Ilkley&apos;s premium commercial and residential market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Ilkley office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, promotional floor graphics and wayfinding floor
                vinyls for Ilkley retail, hospitality and commercial premises.
                Applied to smooth floor surfaces without surface damage on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project
                branding vinyls for Ilkley and LS29 development sites. Installed
                and removed to project timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — your brand on site in Ilkley
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Ilkley and the LS29 zone. We arrive in unbranded vehicles, use your
              job sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on
              site, on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Bradford, Leeds, Keighley or further afield
              with occasional Ilkley work, the white-label model means you can accept
              and deliver LS29 jobs without maintaining a local installer relationship
              in the town. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Ilkley installation:
              before, during and completed shots uploaded on the day of installation
              in your agreed file format. Combined with our job sheet sign-off procedure,
              this gives you a complete installation record for your client file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ilkley subcontract installation — common questions
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
              Installation work in Ilkley or the LS29 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Ilkley and combine with any nearby Skipton, Keighley or Harrogate work
              on the same day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss an Ilkley Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
