import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Ripon — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Ripon and the HG4 zone for sign companies, print houses and fit-out contractors. WRPX covers Ripon city centre, Skelgate HG4, Boroughbridge Road HG4, the A61 corridor and the wider North Yorkshire market — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-ripon/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Ripon — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Ripon and the HG4 zone. White-label available. WRPX covers Ripon city centre, Skelgate HG4, Boroughbridge Road HG4, the A61 corridor north and south, and the rural North Yorkshire market east and west of Ripon."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Ripon", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-ripon/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Ripon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ripon is approximately 1 hour from our South Yorkshire base. The most direct route is the A1(M) north to junction 50, then the A61 north into Ripon city centre. Ripon HG4 sits 12 miles north of Harrogate on the A61, and 11 miles south of Thirsk on the same road. The A1(M) at junction 49 (Boroughbridge) is approximately 4 miles from Ripon centre.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Ripon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Ripon and HG4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Ripon with Harrogate or Thirsk on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ripon sits on the A61 between Harrogate and Thirsk, making it the natural midpoint of a North Yorkshire A61 corridor programme. Harrogate HG1 is 12 miles south via the A61. Thirsk YO7 is 11 miles north via the A61. For sign companies with work across the Harrogate-to-Thirsk corridor, a single visit can cover all three without separate mobilisations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Ripon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Ripon's commercial core is centred on the Market Place HG4 and Kirkgate: independent retail, professional services, restaurants, cafés, pubs and tourism businesses serving the North Yorkshire Dales and Yorkshire Moors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the rural North Yorkshire market from Ripon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the rural North Yorkshire market east and west of Ripon is within our HG4 coverage zone. Masham HG4 (10 miles west via B6267), Pateley Bridge HG3 (12 miles west via B6265), Boroughbridge YO51 (4 miles south-east via A61/A168) and the villages of Nidderdale AONB are accessible from a Ripon base. The North Yorkshire rural economy generates consistent demand from visitor attractions, farm shops, rural hospitality and estate businesses.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Ripon?",
    a: "Ripon is approximately 1 hour from our South Yorkshire base. The most direct route is the A1(M) north to junction 50, then the A61 north into Ripon city centre. Ripon HG4 sits 12 miles north of Harrogate on the A61, and 11 miles south of Thirsk on the same road. The A1(M) at junction 49 (Boroughbridge) is approximately 4 miles from Ripon centre.",
  },
  {
    q: "Do you work white-label in Ripon?",
    a: "Yes — white-label is standard on all Ripon and HG4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Ripon with Harrogate or Thirsk on the same programme?",
    a: "Yes — Ripon sits on the A61 between Harrogate and Thirsk, making it the natural midpoint of a North Yorkshire A61 corridor programme. Harrogate HG1 is 12 miles south via the A61. Thirsk YO7 is 11 miles north via the A61. For sign companies with work across the Harrogate-to-Thirsk corridor, a single visit can cover all three without separate mobilisations.",
  },
  {
    q: "What types of vinyl installation do you cover in Ripon?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Ripon's commercial core is centred on the Market Place HG4 and Kirkgate: independent retail, professional services, restaurants, cafés, pubs and tourism businesses serving the North Yorkshire Dales and Yorkshire Moors.",
  },
  {
    q: "Do you cover the rural North Yorkshire market from Ripon?",
    a: "Yes — the rural North Yorkshire market east and west of Ripon is within our HG4 coverage zone. Masham HG4 (10 miles west via B6267), Pateley Bridge HG3 (12 miles west via B6265), Boroughbridge YO51 (4 miles south-east via A61/A168) and the villages of Nidderdale AONB are accessible from a Ripon base. The North Yorkshire rural economy generates consistent demand from visitor attractions, farm shops, rural hospitality and estate businesses.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate town centre and Stray — 12 miles south via A61" },
  { href: "/subcontract-vinyl-installer-wetherby/", city: "Wetherby", postcode: "LS22", desc: "Wetherby town centre, A1(M) corridor — 15 miles south via A661/A1(M)" },
  { href: "/subcontract-vinyl-installer-york/", city: "York", postcode: "YO1", desc: "York city centre — 24 miles south-east via A59 and A1237" },
];

export default function SubcontractVinylInstallerRiponPage() {
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
            <span className="text-foreground">Subcontract Installer Ripon</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Ripon HG4
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Ripon and the HG4 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Ripon and the
            HG4 zone. We cover Ripon city centre, the Market Place, Skelgate and the
            surrounding North Yorkshire market — all combinable with Harrogate or Thirsk
            work on the same A61 corridor programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Ripon Installation →
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
            Ripon coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ripon is one of England&apos;s smallest cathedral cities — a compact North Yorkshire
              market town of approximately 17,000 people built around its medieval Market
              Place and the Ripon Cathedral. The HG4 postcode covers Ripon and extends
              south-west to Pateley Bridge HG3 and Nidderdale AONB, east to Boroughbridge
              YO51 and south to the A1(M) junction at junction 49. The Ripon zone borders
              the Harrogate HG1 and HG3 postcodes to the south, and reaches into the North
              Yorkshire countryside east and west of the A61.
            </p>
            <p>
              Ripon&apos;s commercial centre is concentrated on the Market Place HG4 — one of
              the largest market squares in England, used for weekly markets and with a mix
              of independent retail, cafés, restaurants, pubs, professional services and
              tourist businesses. Skelgate, Kirkgate and North Street are the secondary
              retail and commercial streets. The city also has a significant visitor-economy
              sector: Ripon&apos;s cathedral, the Ripon Racecourse, Studley Royal Park and
              Fountain Abbey (a UNESCO World Heritage Site nearby) generate substantial
              hospitality and attractions demand.
            </p>
            <p>
              From our South Yorkshire base, Ripon is approximately 1 hour via the A1(M)
              north to junction 50 or 49, then the A61 north or A168 west. The A1(M) makes
              Ripon straightforward to reach — it is the fastest route from South Yorkshire
              to the North Yorkshire market and sits at the centre of the A61 corridor
              connecting Harrogate to Thirsk. Combining Ripon with Harrogate (12 miles south)
              and Knaresborough HG5 (13 miles south on the A61/A59) on a single North
              Yorkshire visit is a practical arrangement.
            </p>
            <p>
              Masham HG4 — approximately 10 miles west of Ripon via the B6267 — is a small
              North Yorkshire market town notable for the Black Sheep and Theakston breweries.
              The Masham hospitality and food sector generates graphics and film work from
              its pub, restaurant and visitor attraction businesses, and is accessible from
              a Ripon base without requiring a separate mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Ripon and the HG4 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Ripon Market Place, Kirkgate, Skelgate and North Street. Frosted film,
                decorative manifestation, promotional graphics and brand window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for Ripon offices, retail and hospitality premises. Visitor attractions,
                hotels and heritage tourism businesses around Ripon and the Dales.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Ripon offices, professional services, hospitality venues and independent
                retail. Quality finishes for the North Yorkshire heritage and tourism sector.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Heritage and tourism graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and wall vinyls for Ripon&apos;s visitor attractions,
                cathedral visitor centre, racecourse facilities, rural hotels and the
                heritage tourism businesses in the Nidderdale AONB and Dales corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Ripon office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project branding
                vinyls for Ripon and North Yorkshire development sites. Installed and removed
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
            White-label subcontract — your brand on site in Ripon
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across Ripon
              and the HG4 zone. We arrive in unbranded vehicles, use your job sheets and
              paperwork, and sign off each installation with photographic documentation in
              your agreed format. WRPX branding does not appear on site, on vehicles or
              on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Harrogate, York or Leeds with occasional Ripon
              and North Yorkshire work, the white-label model means you can accept and
              deliver HG4 jobs without maintaining a local installer relationship in the
              area. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Ripon installation: before,
              during and completed shots uploaded on the day of installation in your
              agreed file format. Combined with our job sheet sign-off procedure, this
              gives you a complete installation record for your client file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ripon subcontract installation — common questions
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
              Installation work in Ripon or the HG4 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Ripon and combine with any nearby Harrogate, Wetherby or York work
              on the same programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Ripon Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
