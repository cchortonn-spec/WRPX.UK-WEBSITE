import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Knaresborough — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Knaresborough and the HG5 zone for sign companies, print houses and fit-out contractors. WRPX covers Knaresborough town centre, the Market Place HG5, Stonebridge Gate and the A59 corridor — white-label, photographic sign-off. Easily combined with Harrogate, Ripon or York on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-knaresborough/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Knaresborough — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Knaresborough and the HG5 zone. White-label available. WRPX covers Knaresborough town centre, the Market Place HG5, Stonebridge Gate, the A59 Harrogate to York corridor, and the North Yorkshire market east of Harrogate."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Knaresborough", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-knaresborough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Knaresborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Knaresborough is approximately 1 hour from our South Yorkshire base. The most direct route is the A1(M) north to junction 47, then the A59 west into Knaresborough — or junction 46 and the A61 north to Harrogate, then the A59 east to Knaresborough. Knaresborough HG5 sits 3 miles east of Harrogate on the A59, and approximately 16 miles west of York.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Knaresborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Knaresborough and HG5 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Knaresborough with Harrogate or York on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Knaresborough sits on the A59 directly between Harrogate and York, making it the natural midpoint of an A59 corridor programme. Harrogate HG1 is 3 miles west via the A59. York YO1 is approximately 16 miles east via the A59 and A64. For sign companies with work across the Harrogate-to-York corridor, a single visit covers all three without separate mobilisations.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Knaresborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Knaresborough's commercial core centres on the Market Place HG5, Castle Ings, High Street and the riverside tourism and hospitality zone.",
      },
    },
    {
      "@type": "Question",
      name: "Can you also combine Knaresborough with Ripon on the same visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ripon HG4 is approximately 13 miles north of Knaresborough via the B6165 and A61. For sign companies with work spanning Knaresborough, Harrogate and Ripon in the same programme, we can combine all three North Yorkshire locations on a single extended day or overnight visit — particularly efficient for weekly or monthly servicing clients in the area.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Knaresborough?",
    a: "Knaresborough is approximately 1 hour from our South Yorkshire base. The most direct route is the A1(M) north to junction 47, then the A59 west into Knaresborough — or junction 46 and the A61 north to Harrogate, then the A59 east to Knaresborough. Knaresborough HG5 sits 3 miles east of Harrogate on the A59, and approximately 16 miles west of York.",
  },
  {
    q: "Do you work white-label in Knaresborough?",
    a: "Yes — white-label is standard on all Knaresborough and HG5 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Knaresborough with Harrogate or York on the same programme?",
    a: "Yes — Knaresborough sits on the A59 directly between Harrogate and York, making it the natural midpoint of an A59 corridor programme. Harrogate HG1 is 3 miles west via the A59. York YO1 is approximately 16 miles east via the A59 and A64. For sign companies with work across the Harrogate-to-York corridor, a single visit covers all three without separate mobilisations.",
  },
  {
    q: "What types of vinyl installation do you cover in Knaresborough?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Knaresborough's commercial core centres on the Market Place HG5, Castle Ings, High Street and the riverside tourism and hospitality zone.",
  },
  {
    q: "Can you also combine Knaresborough with Ripon on the same visit?",
    a: "Yes — Ripon HG4 is approximately 13 miles north of Knaresborough via the B6165 and A61. For sign companies with work spanning Knaresborough, Harrogate and Ripon in the same programme, we can combine all three North Yorkshire locations on a single extended day or overnight visit — particularly efficient for weekly or monthly servicing clients in the area.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1", desc: "Harrogate town centre and Stray — 3 miles west via A59" },
  { href: "/subcontract-vinyl-installer-ripon/", city: "Ripon", postcode: "HG4", desc: "Ripon city centre — 13 miles north via B6165 and A61" },
  { href: "/subcontract-vinyl-installer-york/", city: "York", postcode: "YO1", desc: "York city centre — 16 miles east via A59 and A64" },
  { href: "/subcontract-vinyl-installer-wetherby/", city: "Wetherby", postcode: "LS22", desc: "Wetherby — 7 miles south via A661" },
];

export default function SubcontractVinylInstallerKnaresboroughPage() {
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
            <span className="text-foreground">Subcontract Installer Knaresborough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Knaresborough HG5
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Knaresborough and the HG5 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Knaresborough and
            the HG5 zone. We cover Knaresborough town centre, the Market Place HG5,
            Castle Ings and the A59 corridor — easily combined with Harrogate or York
            on the same programme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Knaresborough Installation →
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
            Knaresborough coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Knaresborough is a historic North Yorkshire market town of approximately
              15,000 people, built dramatically above the River Nidd gorge. The HG5
              postcode covers Knaresborough town and extends east towards the A1(M)
              corridor at Allerton Park, south to the Wetherby LS22 border along the A661,
              and north-east towards Boroughbridge YO51. Knaresborough is 3 miles east
              of Harrogate on the A59 — functionally part of the same economic area,
              sharing many professional services and commercial clients.
            </p>
            <p>
              The commercial core of Knaresborough centres on the Market Place HG5 — a
              traditional Yorkshire market square used for twice-weekly markets — and
              the High Street running south from it. Castle Ings and Gracious Street
              provide secondary retail and commercial frontage. The town supports a
              mixture of independent retail, professional services, cafés, restaurants
              and tourism businesses drawn by the Nidd gorge setting, the castle ruins
              and the Knaresborough viaduct.
            </p>
            <p>
              The A59 — the main road running west to Harrogate and east through
              Knaresborough towards York — is the practical axis of this subcontract
              zone. From our South Yorkshire base, Knaresborough is approximately 1 hour
              via the A1(M) north to junction 47, then the A59 west. The A1(M) junction 47
              is approximately 4 miles east of Knaresborough — making it well placed as a
              combined visit with the A59 corridor east towards York. Harrogate HG1 is
              3 miles west on the same road; Wetherby LS22 is 7 miles south via the A661.
            </p>
            <p>
              For sign companies based in Leeds or Harrogate serving the North Yorkshire
              market, Knaresborough is often a standalone job or a second stop on a
              Harrogate-then-Knaresborough run. For companies with York-area work, a
              Knaresborough and York combined day — following the A59 east — is a natural
              pairing that eliminates a separate Knaresborough mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Knaresborough and the HG5 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Knaresborough Market Place, High Street and Castle Ings.
                Frosted film, decorative manifestation, promotional graphics and brand
                window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for Knaresborough offices, retail and hospitality premises. Tourism
                venues, hotels and heritage businesses across the HG5 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Knaresborough offices, professional services, hospitality venues and
                independent retail. Detailed finish quality for the North Yorkshire
                tourism and heritage market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Tourism and heritage graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and wall vinyls for Knaresborough&apos;s
                visitor attractions, castle visitor centre, riverside hospitality businesses
                and the heritage tourism operators in the Nidd gorge and wider North
                Yorkshire market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Knaresborough office and professional
                services refurbishments. Installation only — client or print company
                supplies material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project branding
                vinyls for Knaresborough and North Yorkshire development sites. Installed
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
            White-label subcontract — your brand on site in Knaresborough
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Knaresborough and the HG5 zone. We arrive in unbranded vehicles, use your
              job sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on site,
              on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Harrogate, Leeds or York with occasional
              Knaresborough work, the white-label model means you can accept and deliver
              HG5 jobs without maintaining a local installer in the area. We report back
              to you — not to the end client — and the customer relationship stays yours
              throughout the Knaresborough programme.
            </p>
            <p>
              Photographic sign-off is provided for every Knaresborough installation:
              before, during and completed shots uploaded on the day of installation in
              your agreed file format. Combined with our job sheet sign-off procedure,
              this gives you a complete installation record for your client file.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Knaresborough subcontract installation — common questions
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
              Installation work in Knaresborough or the HG5 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Knaresborough and combine with any nearby Harrogate, York or Ripon work
              on the same programme.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Knaresborough Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
