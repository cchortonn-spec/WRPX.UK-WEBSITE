import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Wetherby — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Wetherby and the LS22 zone for sign companies, print houses and fit-out contractors. WRPX covers Wetherby town centre, Market Place, Collingham LS22, Boston Spa LS23, Linton LS22 and the A1(M)/A58 corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wetherby/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Wetherby — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Wetherby and the LS22 zone. White-label available. WRPX covers Wetherby town centre, Market Place LS22, Collingham LS22, Boston Spa LS23, Linton LS22 and the A1(M)/A58 corridor between Leeds and Harrogate."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Wetherby", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wetherby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Wetherby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wetherby is approximately 55 minutes from our South Yorkshire base. The most direct route is via the M1 north and A1(M) north to J44, then the A58 west into Wetherby town centre. Wetherby LS22 sits precisely on the A1(M) corridor at J46, midway between Leeds (12 miles south-west via A58/A64) and Harrogate (8 miles north via A661). Otley LS21 is 7 miles north-west via the B6164, and Boston Spa LS23 is 3 miles south on the A659.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Wetherby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Wetherby and LS22 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Wetherby with Harrogate or Leeds on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wetherby&apos;s position on the A1(M) makes it the natural midpoint in a Leeds–Harrogate day plan. Leeds is 12 miles south-west, Harrogate is 8 miles north, Otley is 7 miles north-west, and Boston Spa LS23 is 3 miles south. For sign companies managing West Yorkshire and North Yorkshire programmes, Wetherby, Leeds and Harrogate can typically be combined in a single-day or two-day visit. Tadcaster LS24 is a further 8 miles south-east on the A659, extending the A1 corridor coverage east.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Wetherby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Wetherby commercial stock includes Market Place retail and hospitality, high street independents on North Street and Shambles, professional services offices, and the out-of-town commercial strip on Sandbeck Way and Caxton Road industrial zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the surrounding Wetherby villages and LS22 zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Collingham LS22, Linton LS22, Clifford LS23 and the wider A1(M)/A659 corridor between Wetherby and Boston Spa LS23 are all within our Wetherby coverage area. The Wetherby zone also extends south to Bramham LS23 and east to Tadcaster LS24 on the A64. Boston Spa&apos;s retail strip on High Street generates regular demand for window graphics, frosted film and retail interior work.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Wetherby?",
    a: "Wetherby is approximately 55 minutes from our South Yorkshire base. The most direct route is via the M1 north and A1(M) north to J44, then the A58 west into Wetherby town centre. Wetherby LS22 sits precisely on the A1(M) corridor at J46, midway between Leeds (12 miles south-west via A58/A64) and Harrogate (8 miles north via A661). Otley LS21 is 7 miles north-west via the B6164, and Boston Spa LS23 is 3 miles south on the A659.",
  },
  {
    q: "Do you work white-label in Wetherby?",
    a: "Yes — white-label is standard on all Wetherby and LS22 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Wetherby with Harrogate or Leeds on the same programme?",
    a: "Yes — Wetherby's position on the A1(M) makes it the natural midpoint in a Leeds–Harrogate day plan. Leeds is 12 miles south-west, Harrogate is 8 miles north, Otley is 7 miles north-west, and Boston Spa LS23 is 3 miles south. For sign companies managing West Yorkshire and North Yorkshire programmes, Wetherby, Leeds and Harrogate can typically be combined in a single-day or two-day visit. Tadcaster LS24 is a further 8 miles south-east on the A659, extending the A1 corridor coverage east.",
  },
  {
    q: "What types of vinyl installation do you cover in Wetherby?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Wetherby commercial stock includes Market Place retail and hospitality, high street independents on North Street and Shambles, professional services offices, and the out-of-town commercial strip on Sandbeck Way and Caxton Road industrial zone.",
  },
  {
    q: "Do you cover the surrounding Wetherby villages and LS22 zone?",
    a: "Yes — Collingham LS22, Linton LS22, Clifford LS23 and the wider A1(M)/A659 corridor between Wetherby and Boston Spa LS23 are all within our Wetherby coverage area. The Wetherby zone also extends south to Bramham LS23 and east to Tadcaster LS24 on the A64. Boston Spa's retail strip on High Street generates regular demand for window graphics, frosted film and retail interior work.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate spa town, Montpellier Quarter, Royal Baths — 8 miles north via A661" },
  { href: "/subcontract-vinyl-installer-leeds/", city: "Leeds", postcode: "LS1", desc: "Leeds city centre, Trinity Leeds, Granary Wharf — 12 miles south-west via A58/A64" },
  { href: "/subcontract-vinyl-installer-otley/", city: "Otley", postcode: "LS21", desc: "Otley Market Place, Wharfe Valley, Pool-in-Wharfedale — 7 miles north-west via B6164" },
  { href: "/subcontract-vinyl-installer-york/", city: "York", postcode: "YO1", desc: "York city centre, Shambles, Monk Bar — 15 miles east via A64" },
];

export default function SubcontractVinylInstallerWetherbyPage() {
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
            <span className="text-foreground">Subcontract Installer Wetherby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Wetherby LS22
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Wetherby and the LS22 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Wetherby and
            the LS22 zone. We cover Wetherby town centre and Market Place, Collingham LS22,
            Boston Spa LS23, Linton LS22 and the A1(M)/A58 corridor — all naturally
            combinable with Leeds or Harrogate work on the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Wetherby Installation →
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
            Wetherby coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wetherby is a historic market town in the metropolitan borough of Leeds,
              situated at the junction of the A1(M) and A58 at Junction 44/46 of the
              A1(M). The LS22 postcode covers Wetherby town centre and its surrounding
              villages — Collingham to the north, Linton to the north-east, and the
              A659 corridor west toward the Wharfe Valley.
            </p>
            <p>
              Wetherby&apos;s commercial character is centred on Market Place and the historic
              high street: a mix of professional services, independent retail, restaurants
              and cafes, estate agents and health and wellness businesses. The Sandbeck Way
              and Caxton Road industrial estate on the north edge of town provides a
              distinct commercial and trade counter zone. Boston Spa LS23, three miles
              south on the A659, adds a further retail and professional services strip
              along High Street.
            </p>
            <p>
              From our South Yorkshire base, Wetherby is approximately 55 minutes via
              the M1 north and A1(M) north to Junction 44, then the A58 west into
              Wetherby town centre. The A1(M) makes Wetherby one of the most accessible
              towns in West Yorkshire for contractors coming from the south — there are
              no motorway junctions or urban congestion zones to navigate before reaching
              the town.
            </p>
            <p>
              Wetherby&apos;s position midway between Leeds (12 miles south-west on the A58/A64)
              and Harrogate (8 miles north on the A661) makes it the natural pivot point
              for programmes covering both cities. Otley LS21 is 7 miles north-west via
              the B6164 and A659. York is 15 miles east on the A64. For sign companies
              managing programmes across the Leeds–Harrogate–York triangle, Wetherby is
              the geographic centre of the day.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Wetherby and the LS22 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Wetherby town centre, Market Place and LS22 commercial sites.
                Frosted film, decorative manifestation, promotional graphics and brand
                window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Wetherby and
                the LS22 zone. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Wetherby offices, professional services, retail and residential premises
                across LS22 and LS23. High-specification finishes for Wetherby&apos;s
                premium independent and professional market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film, branded reception wall vinyls, motivational
                and brand graphics for Wetherby office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, promotional floor graphics and wayfinding floor
                vinyls for Wetherby retail and commercial premises.
                Applied to smooth floor surfaces without surface damage on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics and temporary event graphics for Wetherby
                development sites and commercial renovation projects. Installed and removed
                to project timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — your brand on site in Wetherby
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Wetherby and the LS22 zone. We arrive in unbranded vehicles, use your
              job sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on
              site, on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Leeds, Harrogate, York or further afield
              with occasional Wetherby work, the white-label model means you can accept
              and deliver LS22 jobs without maintaining a local installer relationship
              in the town. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Wetherby installation:
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
            Wetherby subcontract installation — common questions
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
              Installation work in Wetherby or the LS22 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Wetherby and combine with any nearby Harrogate, Leeds or Otley work
              on the same day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Wetherby Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
