import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Pateley Bridge — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Pateley Bridge and the Nidderdale HG3 zone for sign companies, print houses and fit-out contractors. WRPX covers Pateley Bridge High Street, the B6265 corridor and the wider Nidderdale AONB market area. Naturally combined with Knaresborough (10 miles east) or Ripon (12 miles south) on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pateley-bridge/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Pateley Bridge — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Pateley Bridge and the Nidderdale HG3 zone. White-label available. WRPX covers Pateley Bridge High Street HG3, the B6265 corridor and the wider Nidderdale AONB visitor economy and rural hospitality area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Pateley Bridge", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-pateley-bridge/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Pateley Bridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pateley Bridge is approximately 1 hour 30 minutes from our South Yorkshire base. The typical route is A1(M) north to junction 47 at Wetherby or junction 48 at Bramham, then A658 and A59 west to Harrogate, then B6165 or B6265 west for approximately 14 miles to Pateley Bridge HG3. It sits naturally after Knaresborough (10 miles east) or Harrogate (14 miles east) on the same northbound routing — making it most efficient to combine Pateley Bridge with Knaresborough or Ripon on the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Pateley Bridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Pateley Bridge and Nidderdale HG3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Pateley Bridge with Knaresborough and Ripon on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to cover the Harrogate and Nidderdale corridor. Knaresborough HG5 is approximately 10 miles east of Pateley Bridge via the B6265, and Ripon HG4 is approximately 12 miles south-east via the B6265 and A61. A single day from South Yorkshire via the A1(M) can productively cover Knaresborough, Pateley Bridge and Ripon without unnecessary backtracking. Harrogate is also reachable on the same routing.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Pateley Bridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Pateley Bridge's commercial core centres on High Street HG3, with independent retail, food and drink, visitor economy businesses and professional services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Wath, Ramsgill and other Nidderdale villages near Pateley Bridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wath HG3, Ramsgill HG3 and Lofthouse HG3 to the north are all reachable within the same Pateley Bridge visit zone. Nidderdale is a well-developed visitor economy with country hotels, holiday accommodation, farm shops and rural hospitality businesses — a consistent source of graphics and branding work. The B6265 corridor also links to Grassington BD23 in the Yorkshire Dales, which may suit combined programmes for sign companies covering the Dales area.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Pateley Bridge?",
    a: "Pateley Bridge is approximately 1 hour 30 minutes from our South Yorkshire base. The typical route is A1(M) north to junction 47 at Wetherby or junction 48 at Bramham, then A658 and A59 west to Harrogate, then B6165 or B6265 west for approximately 14 miles to Pateley Bridge HG3. It sits naturally after Knaresborough (10 miles east) or Harrogate (14 miles east) on the same northbound routing — making it most efficient to combine Pateley Bridge with Knaresborough or Ripon on the same programme.",
  },
  {
    q: "Do you work white-label in Pateley Bridge?",
    a: "Yes — white-label is standard on all Pateley Bridge and Nidderdale HG3 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Pateley Bridge with Knaresborough and Ripon on the same day?",
    a: "Yes — and this is the most efficient way to cover the Harrogate and Nidderdale corridor. Knaresborough HG5 is approximately 10 miles east of Pateley Bridge via the B6265, and Ripon HG4 is approximately 12 miles south-east via the B6265 and A61. A single day from South Yorkshire via the A1(M) can productively cover Knaresborough, Pateley Bridge and Ripon without unnecessary backtracking. Harrogate is also reachable on the same routing.",
  },
  {
    q: "What types of vinyl installation do you cover in Pateley Bridge?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Pateley Bridge's commercial core centres on High Street HG3, with independent retail, food and drink, visitor economy businesses and professional services.",
  },
  {
    q: "Do you cover Wath, Ramsgill and other Nidderdale villages near Pateley Bridge?",
    a: "Yes — Wath HG3, Ramsgill HG3 and Lofthouse HG3 to the north are all reachable within the same Pateley Bridge visit zone. Nidderdale is a well-developed visitor economy with country hotels, holiday accommodation, farm shops and rural hospitality businesses — a consistent source of graphics and branding work. The B6265 corridor also links to Grassington BD23 in the Yorkshire Dales, which may suit combined programmes for sign companies covering the Dales area.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-knaresborough/", label: "Knaresborough HG5", desc: "10 miles east via B6265" },
  { href: "/subcontract-vinyl-installer-ripon/", label: "Ripon HG4", desc: "12 miles south-east via B6265 and A61" },
  { href: "/subcontract-vinyl-installer-harrogate/", label: "Harrogate HG1", desc: "14 miles east via B6165" },
  { href: "/subcontract-vinyl-installer-skipton/", label: "Skipton BD23", desc: "16 miles west via B6265 and A59" },
];

export default function SubcontractVinylInstallerPateleyBridgePage() {
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
            <span className="text-foreground">Pateley Bridge</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Pateley Bridge HG3
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Pateley Bridge
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Pateley Bridge and the Nidderdale
            HG3 zone for sign companies, print houses and fit-out contractors. White-label as
            standard. Pateley Bridge sits 10 miles west of Knaresborough via the B6265 —
            easily combined with Knaresborough or Ripon on the same day from South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Pateley Bridge Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Pateley Bridge context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Pateley Bridge — Nidderdale market town on the B6265
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Pateley Bridge is a North Yorkshire market town at the southern gateway to
              Nidderdale — a designated Area of Outstanding Natural Beauty stretching north
              through the Yorkshire Dales. The town sits on the River Nidd at the junction of
              the B6165 from Harrogate and the B6265 corridor connecting Knaresborough to the
              east and Grassington to the north-west. This position places it squarely within
              the Harrogate–Knaresborough–Ripon subcontract zone that WRPX already covers
              regularly from South Yorkshire.
            </p>
            <p>
              Pateley Bridge High Street HG3 is a compact commercial area of independent retail,
              food and drink businesses, visitor economy services and professional practices.
              The town serves as the main service centre for a large rural catchment — including
              the upper Nidderdale valley villages of Wath, Ramsgill, Lofthouse and Middlesmoor —
              generating consistent demand for shop front graphics, interior branding, window
              film, hospitality graphics and rural business signage across the HG3 zone.
            </p>
            <p>
              For sign companies covering the Harrogate district and the Yorkshire Dales fringe,
              Pateley Bridge is the natural western extension of the Knaresborough–Harrogate
              subcontract zone. The B6265 connects Pateley Bridge directly to Knaresborough HG5
              in approximately 10 miles — making a Knaresborough plus Pateley Bridge day
              straightforward from the A1(M), with Ripon HG4 reachable on the return leg.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Pateley Bridge
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Pateley Bridge High Street retail, hospitality
                and professional services premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, pub, restaurant and hospitality interior
                branding graphics and office interior vinyl across Pateley Bridge and the
                wider Nidderdale visitor economy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window
                graphics for Pateley Bridge High Street and surrounding commercial
                premises in the Nidderdale area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rural hospitality and visitor economy graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branding graphics, room identification vinyls, interior feature walls and
                promotional graphics for country hotels, holiday accommodation, farm shops,
                cafes and outdoor activity businesses across Nidderdale — a productive
                work type for this visitor-economy area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office and professional services graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior vinyls, frosted glass partition film, reception desk
                graphics and wayfinding vinyls for Pateley Bridge professional services,
                solicitors, estate agents and other commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, event and promotional graphics and temporary
                vinyl installations for Pateley Bridge and the surrounding Nidderdale
                market towns, agricultural show venues and event spaces.
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
            Pateley Bridge subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Pateley Bridge work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Pateley Bridge Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
