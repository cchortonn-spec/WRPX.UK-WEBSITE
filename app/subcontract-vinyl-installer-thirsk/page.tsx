import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Thirsk — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Thirsk and the YO7 zone for sign companies, print houses and fit-out contractors. WRPX covers Thirsk town centre, the A61 and A168 corridors, Hambleton district retail and all North Yorkshire market towns in the Thirsk area. Easily combined with Northallerton, Ripon or Knaresborough on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-thirsk/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Thirsk — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Thirsk and the YO7 zone. White-label available. WRPX covers Thirsk town centre, the A61 corridor north of Ripon, the A168 Hambleton district, Thirsk racecourse zone and the wider North Yorkshire market town area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Thirsk", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-thirsk/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Thirsk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thirsk is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 49 at Dishforth, then the A61 north into Thirsk town centre — approximately 70 miles door to door. Thirsk YO7 sits between Ripon (12 miles south via A61) and Northallerton (12 miles north via A168), making it a natural intermediate stop on the A1(M) corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Thirsk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Thirsk and YO7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Thirsk with Ripon or Northallerton on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to run A1(M) corridor programmes. Thirsk sits on the A61 and A168 between Ripon HG4 (12 miles south) and Northallerton DL7 (12 miles north). A single northbound visit from South Yorkshire covers Ripon, Thirsk and Northallerton without separate mobilisations — three North Yorkshire market towns on one day. Knaresborough HG5 is a further 10 miles south of Ripon.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Thirsk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Thirsk's commercial core centres on Market Place YO7, the Thirsk Town Hall area and the A61 retail frontage on the town approaches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the surrounding North Yorkshire villages and business parks near Thirsk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Thirsk serves as the main market town for the Hambleton district and is surrounded by a cluster of business parks and light industrial estates. Sowerby gateway north of Thirsk, the A61 business zone south, and the Vale of York mixed-use developments between Thirsk and the A19 are all within our coverage zone on the same visit. Boroughbridge YO51 is 10 miles south-east via the A1(M).",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Thirsk?",
    a: "Thirsk is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is the A1(M) north to junction 49 at Dishforth, then the A61 north into Thirsk town centre — approximately 70 miles door to door. Thirsk YO7 sits between Ripon (12 miles south via A61) and Northallerton (12 miles north via A168), making it a natural intermediate stop on the A1(M) corridor.",
  },
  {
    q: "Do you work white-label in Thirsk?",
    a: "Yes — white-label is standard on all Thirsk and YO7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Thirsk with Ripon or Northallerton on the same programme?",
    a: "Yes — and this is the most efficient way to run A1(M) corridor programmes. Thirsk sits on the A61 and A168 between Ripon HG4 (12 miles south) and Northallerton DL7 (12 miles north). A single northbound visit from South Yorkshire covers Ripon, Thirsk and Northallerton without separate mobilisations — three North Yorkshire market towns on one day. Knaresborough HG5 is a further 10 miles south of Ripon.",
  },
  {
    q: "What types of vinyl installation do you cover in Thirsk?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Thirsk's commercial core centres on Market Place YO7, the Thirsk Town Hall area and the A61 retail frontage on the town approaches.",
  },
  {
    q: "Do you cover the surrounding North Yorkshire villages and business parks near Thirsk?",
    a: "Yes — Thirsk serves as the main market town for the Hambleton district and is surrounded by a cluster of business parks and light industrial estates. Sowerby gateway north of Thirsk, the A61 business zone south, and the Vale of York mixed-use developments between Thirsk and the A19 are all within our coverage zone on the same visit. Boroughbridge YO51 is 10 miles south-east via the A1(M).",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "12 miles south via A61" },
  { href: "/subcontract-vinyl-installer-northallerton/", label: "Northallerton DL7", desc: "12 miles north via A168" },
  { href: "/subcontract-vinyl-installer-knaresborough/", label: "Knaresborough HG5", desc: "22 miles south via A61 and A59" },
  { href: "/subcontract-vinyl-installer-harrogate/", label: "Harrogate HG1", desc: "18 miles south via A61" },
];

export default function SubcontractVinylInstallerThirskPage() {
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
            <span className="text-foreground">Thirsk</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Thirsk YO7
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Thirsk
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Thirsk and the YO7 zone for
            sign companies, print houses and fit-out contractors. White-label as standard.
            Thirsk sits on the A1(M) corridor between Ripon and Northallerton — easily
            combined with either on the same programme. Call or email to discuss Thirsk work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Thirsk Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Thirsk context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Thirsk — market town on the A1(M) corridor
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Thirsk is the main market town for the Hambleton district of North Yorkshire,
              sitting on the A61 between Ripon to the south and Northallerton to the north.
              The town is closely linked to the A1(M) via the Dishforth junction (J49),
              making it straightforward to reach from both South Yorkshire and the Teesside
              corridor. Thirsk racecourse draws significant commercial and hospitality activity
              on race days, creating periodic demand for temporary graphics and event signage
              installation.
            </p>
            <p>
              Thirsk&apos;s commercial zone centres on Market Place YO7 and the surrounding retail
              streets, with the Sowerby gateway retail park on the northern approach to the town
              providing a concentration of national retail and service brands. The A61 and A168
              approach roads into the town carry a mix of light industrial and trade counter
              properties.
            </p>
            <p>
              For sign companies running A1(M) corridor programmes, Thirsk is the natural
              intermediate stop between Ripon (12 miles south) and Northallerton (12 miles
              north). We can run Ripon, Thirsk and Northallerton on a single northbound day
              from South Yorkshire — three North Yorkshire market towns without three
              separate mobilisation costs.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Thirsk
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Thirsk retail and hospitality premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, canteen and common room graphics and
                office interior vinyl across Thirsk commercial and hospitality premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Thirsk Market Place and Sowerby retail premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and directional vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal wayfinding vinyls, floor graphics, door and room identification
                vinyls and accessibility signage across Thirsk commercial and public buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Thirsk town centre and Thirsk racecourse events.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor graphics, promotional floor vinyl, directional floor graphics
                and event floor graphics for Thirsk retail, hospitality and commercial spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby towns we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Thirsk subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Thirsk work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Thirsk Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
