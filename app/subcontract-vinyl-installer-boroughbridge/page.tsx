import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Boroughbridge — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Boroughbridge and the YO51 zone for sign companies, print houses and fit-out contractors. WRPX covers Boroughbridge town centre, the A1(M) J48 corridor, Roecliffe, Aldborough and the wider North Yorkshire A1(M) zone. Easily combined with Ripon, Thirsk or Wetherby on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-boroughbridge/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Boroughbridge — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Boroughbridge and the YO51 zone. White-label available. WRPX covers Boroughbridge town centre, the A1(M) J48 corridor, Roecliffe, Aldborough and the wider North Yorkshire market town belt between Wetherby and Thirsk."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Boroughbridge", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-boroughbridge/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Boroughbridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boroughbridge is approximately 1 hour from our South Yorkshire base. The route is straightforward: A1(M) north to junction 48 at Boroughbridge — approximately 60 miles door to door. Boroughbridge YO51 sits directly on the A1(M) between Wetherby (12 miles south, J44) and Ripon (8 miles north via the B6265). The A1(M) corridor makes Boroughbridge one of the most accessible North Yorkshire market towns for South Yorkshire-based installation teams.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Boroughbridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Boroughbridge and YO51 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Boroughbridge with Ripon or Thirsk on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to run A1(M) corridor programmes in North Yorkshire. Boroughbridge YO51 sits at A1(M) J48, directly between Wetherby (12 miles south, J44) and Ripon (8 miles north via B6265). Ripon is then 12 miles south of Thirsk. A single northbound day from South Yorkshire can efficiently cover Boroughbridge, Ripon and Thirsk — three North Yorkshire market towns without three separate mobilisation costs.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Boroughbridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Boroughbridge commercial activity centres on the High Street YO51, the Horsefair and the industrial and trade zones on the A1(M) approaches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover business parks and industrial zones near Boroughbridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Boroughbridge has a cluster of light industrial and trade units on the A1(M) approach roads, plus commercial properties at Roecliffe (2 miles south-east) and along the B6265 towards Ripon. The A1(M) J48 services zone itself also has commercial activity. All are within our Boroughbridge coverage zone on the same visit — no separate mobilisation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Boroughbridge?",
    a: "Boroughbridge is approximately 1 hour from our South Yorkshire base. The route is straightforward: A1(M) north to junction 48 at Boroughbridge — approximately 60 miles door to door. Boroughbridge YO51 sits directly on the A1(M) between Wetherby (12 miles south, J44) and Ripon (8 miles north via the B6265). The A1(M) corridor makes Boroughbridge one of the most accessible North Yorkshire market towns for South Yorkshire-based installation teams.",
  },
  {
    q: "Do you work white-label in Boroughbridge?",
    a: "Yes — white-label is standard on all Boroughbridge and YO51 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Boroughbridge with Ripon or Thirsk on the same programme?",
    a: "Yes — and this is the most efficient way to run A1(M) corridor programmes in North Yorkshire. Boroughbridge YO51 sits at A1(M) J48, directly between Wetherby (12 miles south, J44) and Ripon (8 miles north via B6265). Ripon is then 12 miles south of Thirsk. A single northbound day from South Yorkshire can efficiently cover Boroughbridge, Ripon and Thirsk — three North Yorkshire market towns without three separate mobilisation costs.",
  },
  {
    q: "What types of vinyl installation do you cover in Boroughbridge?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Boroughbridge commercial activity centres on the High Street YO51, the Horsefair and the industrial and trade zones on the A1(M) approaches.",
  },
  {
    q: "Do you cover business parks and industrial zones near Boroughbridge?",
    a: "Yes — Boroughbridge has a cluster of light industrial and trade units on the A1(M) approach roads, plus commercial properties at Roecliffe (2 miles south-east) and along the B6265 towards Ripon. The A1(M) J48 services zone itself also has commercial activity. All are within our Boroughbridge coverage zone on the same visit — no separate mobilisation.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "8 miles north via B6265" },
  { href: "/subcontract-vinyl-installer-wetherby/", label: "Wetherby LS22", desc: "12 miles south via A1(M) J44" },
  { href: "/subcontract-vinyl-installer-knaresborough/", label: "Knaresborough HG5", desc: "10 miles south-east via A59" },
  { href: "/subcontract-vinyl-installer-thirsk/", label: "Thirsk YO7", desc: "20 miles north via A1(M) and A61" },
];

export default function SubcontractVinylInstallerBoroughbridgePage() {
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
            <span className="text-foreground">Boroughbridge</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Boroughbridge YO51
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Boroughbridge
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Boroughbridge and the YO51
            zone for sign companies, print houses and fit-out contractors. White-label as
            standard. Boroughbridge sits directly on the A1(M) at junction 48 — the natural
            link between Wetherby and Ripon on the A1(M) north Yorkshire corridor. Call or
            email to discuss Boroughbridge work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Boroughbridge Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Boroughbridge context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Boroughbridge — A1(M) junction town between Wetherby and Ripon
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Boroughbridge is a North Yorkshire market town sitting directly at A1(M)
              junction 48 — the junction that connects the A1(M) north–south motorway to
              the B6265 west into Ripon and the local road network east into the Vale of
              York. Its position means virtually all South Yorkshire-based A1(M) northbound
              journeys to Ripon, Thirsk and Northallerton pass within minutes of the town.
            </p>
            <p>
              The town itself has a compact commercial core centred on the High Street YO51
              and the Horsefair, with a cluster of independent retailers, hospitality
              businesses and service premises. The A1(M) approach from the south brings a
              mix of light industrial and trade units, while Roecliffe — a village 2 miles
              south-east — has additional commercial and residential development. The wider
              YO51 postal zone covers a significant agricultural and rural hinterland between
              Boroughbridge, Aldborough and the River Ure valley.
            </p>
            <p>
              For sign companies managing A1(M) corridor programmes in North Yorkshire,
              Boroughbridge is the obvious stop between Wetherby (12 miles south at J44)
              and Ripon (8 miles north via B6265). We can cover all three towns on a single
              northbound day from South Yorkshire — no separate mobilisation for each location.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Boroughbridge
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Boroughbridge retail and hospitality premises
                on the High Street and Horsefair.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, canteen and common room graphics and
                office interior vinyl across Boroughbridge commercial, hospitality and
                light industrial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Boroughbridge High Street and Horsefair retail and service
                premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and directional vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal wayfinding vinyls, floor graphics, door and room identification
                vinyls and accessibility signage across Boroughbridge commercial and
                public buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Boroughbridge town centre and surrounding YO51 zone
                developments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor graphics, promotional floor vinyl, directional floor graphics
                and event floor graphics for Boroughbridge retail, hospitality and trade
                counter premises.
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
            Boroughbridge subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Boroughbridge work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Boroughbridge Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
