import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Otley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Otley and the LS21 zone for sign companies, print houses and fit-out contractors. WRPX covers Otley town centre, Market Place LS21, Pool-in-Wharfedale LS21, Burley-in-Wharfedale LS21, Guiseley LS20 and the A65 Wharfe Valley corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-otley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Otley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Otley and the LS21 zone. White-label available. WRPX covers Otley town centre, Market Place LS21, Pool-in-Wharfedale LS21, Burley-in-Wharfedale LS21, Guiseley LS20 and the A65 Wharfe Valley corridor between Ilkley and Leeds."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Otley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-otley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Otley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otley is approximately 55–60 minutes from our South Yorkshire base. The most direct route is via the M1 north to the A1(M), then the A659 west from Tadcaster through Collingham and Pool to Otley LS21. Alternatively via the M1 to Leeds and the A660 north-west through Headingley and Bramhope to Otley. Otley LS21 sits between Harrogate HG1 (10 miles north-east on the A59) and Ilkley LS29 (5 miles west on the A65). Guiseley LS20 is 3 miles south, and Leeds city centre is 10 miles south on the A660.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Otley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Otley and LS21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Otley with Ilkley or Harrogate on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Otley is 5 miles east of Ilkley LS29 on the A65, and 10 miles south of Harrogate HG1 via the A59. It is also 3 miles north of Guiseley LS20 and 7 miles from Bradford BD1 via the A6038. For sign companies managing Wharfe Valley or West Yorkshire Dales-edge programmes, Otley, Ilkley and Harrogate can comfortably be combined in a single-day or two-day visit, with Guiseley and Yeadon LS19 added on the return leg toward Leeds.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Otley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Otley commercial stock includes Market Place and Boroughgate independent retail and hospitality, the Cattle Market area commercial units, professional services offices and the growing number of independent businesses along Kirkgate and Westgate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Pool-in-Wharfedale and Burley-in-Wharfedale from the Otley zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Pool-in-Wharfedale LS21 (3 miles east on the A659, home to print and logistics businesses), Burley-in-Wharfedale LS21 (2 miles west toward Ilkley) and Guiseley LS20 (3 miles south on the A6038) are all within our Otley coverage area. The A659 corridor through Pool connects Otley east to the A1(M) and Wetherby LS22, making Otley a useful staging point for Wharfe Valley programmes that need to reach both Ilkley and the east Leeds corridor.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Otley?",
    a: "Otley is approximately 55–60 minutes from our South Yorkshire base. The most direct route is via the M1 north to the A1(M), then the A659 west from Tadcaster through Collingham and Pool to Otley LS21. Alternatively via the M1 to Leeds and the A660 north-west through Headingley and Bramhope to Otley. Otley LS21 sits between Harrogate HG1 (10 miles north-east on the A59) and Ilkley LS29 (5 miles west on the A65). Guiseley LS20 is 3 miles south, and Leeds city centre is 10 miles south on the A660.",
  },
  {
    q: "Do you work white-label in Otley?",
    a: "Yes — white-label is standard on all Otley and LS21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Otley with Ilkley or Harrogate on the same programme?",
    a: "Yes — Otley is 5 miles east of Ilkley LS29 on the A65, and 10 miles south of Harrogate HG1 via the A59. It is also 3 miles north of Guiseley LS20 and 7 miles from Bradford BD1 via the A6038. For sign companies managing Wharfe Valley or West Yorkshire Dales-edge programmes, Otley, Ilkley and Harrogate can comfortably be combined in a single-day or two-day visit, with Guiseley and Yeadon LS19 added on the return leg toward Leeds.",
  },
  {
    q: "What types of vinyl installation do you cover in Otley?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Otley commercial stock includes Market Place and Boroughgate independent retail and hospitality, the Cattle Market area commercial units, professional services offices and the growing number of independent businesses along Kirkgate and Westgate.",
  },
  {
    q: "Do you cover Pool-in-Wharfedale and Burley-in-Wharfedale from the Otley zone?",
    a: "Yes — Pool-in-Wharfedale LS21 (3 miles east on the A659, home to print and logistics businesses), Burley-in-Wharfedale LS21 (2 miles west toward Ilkley) and Guiseley LS20 (3 miles south on the A6038) are all within our Otley coverage area. The A659 corridor through Pool connects Otley east to the A1(M) and Wetherby LS22, making Otley a useful staging point for Wharfe Valley programmes that need to reach both Ilkley and the east Leeds corridor.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-ilkley/", city: "Ilkley", postcode: "LS29", desc: "Ilkley spa town, The Grove, Ben Rhydding — 5 miles west via A65" },
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate spa town, Montpellier Quarter, Royal Baths — 10 miles north-east via A59" },
  { href: "/subcontract-vinyl-installer-bradford/", city: "Bradford", postcode: "BD1", desc: "Bradford city centre, Little Germany, Manningham — 7 miles south via A6038" },
  { href: "/subcontract-vinyl-installer-leeds/", city: "Leeds", postcode: "LS1", desc: "Leeds city centre, Trinity Leeds, Victoria Gate — 10 miles south via A660" },
];

export default function SubcontractVinylInstallerOtleyPage() {
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
            <span className="text-foreground">Subcontract Installer Otley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Otley LS21
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Otley and the LS21 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Otley and the
            LS21 zone. We cover Otley town centre and Market Place, Pool-in-Wharfedale
            LS21, Burley-in-Wharfedale LS21 and Guiseley LS20 — all combinable with
            Ilkley, Harrogate or Leeds work on the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss an Otley Installation →
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
            Otley coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Otley is a historic market town in the Wharfe Valley, situated in the City
              of Leeds Metropolitan District of West Yorkshire. The LS21 postcode covers
              Otley itself and the surrounding Wharfe Valley villages — Pool-in-Wharfedale
              to the east on the A659, Burley-in-Wharfedale to the west toward Ilkley,
              and the rural areas north toward Harrogate.
            </p>
            <p>
              Otley&apos;s commercial character centres on Market Place and Boroughgate:
              independent retail, cafés, hospitality and professional services clustered
              in the historic market town core. The Cattle Market site and Otley Bridge
              business cluster add commercial and light industrial capacity to the town&apos;s
              base. The independent retail concentration in Otley generates regular demand
              for shop front vinyls, window film and interior graphics.
            </p>
            <p>
              From our South Yorkshire base, Otley is approximately 55–60 minutes via the
              M1 north to the A1(M) and then the A659 west through Pool-in-Wharfedale. The
              A65 is the main Wharfe Valley arterial — running west through Burley-in-Wharfedale,
              Ilkley and on to Skipton. The A659 connects Otley east to the A1(M) and Wetherby,
              and the A660 connects it south to Leeds via Bramhope and Headingley.
            </p>
            <p>
              Otley&apos;s position at the A659/A65 junction makes it a practical midpoint on
              Wharfe Valley programmes: Ilkley LS29 is 5 miles west, Guiseley LS20 is 3 miles
              south on the A6038, Harrogate HG1 is 10 miles north-east via the A59, and Leeds
              is 10 miles south on the A660. A programme covering Otley and Ilkley in the same
              day is straightforward from a routing perspective.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Otley and the LS21 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Otley town centre, Market Place and LS21 commercial sites. Frosted
                film, decorative manifestation, promotional graphics and brand window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and hospitality premises across Otley and the
                LS21 zone. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Otley offices, independent retail, hospitality venues and professional
                services. High-specification finishes for the Wharfe Valley&apos;s quality-conscious
                commercial and residential market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Otley office and professional services
                refurbishments. Installation only — client or print company supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, promotional floor graphics and wayfinding floor
                vinyls for Otley retail, hospitality and commercial premises.
                Applied to smooth floor surfaces without surface damage on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project
                branding vinyls for Otley and LS21 development sites. Installed
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
            White-label subcontract — your brand on site in Otley
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Otley and the LS21 zone. We arrive in unbranded vehicles, use your job sheets
              and paperwork, and sign off each installation with photographic documentation
              in your agreed format. WRPX branding does not appear on site, on vehicles or
              on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Leeds, Bradford or Harrogate with occasional Otley
              work, the white-label model means you can accept and deliver LS21 jobs without
              maintaining a local installer relationship in the town. We report back to you,
              not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Otley installation: before, during
              and completed shots uploaded on the day of installation in your agreed file format.
              Combined with our job sheet sign-off procedure, this gives you a complete
              installation record for your client file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Otley subcontract installation — common questions
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
              Installation work in Otley or the LS21 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Otley and combine with any nearby Ilkley, Harrogate or Leeds work
              on the same day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss an Otley Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
