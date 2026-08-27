import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Skipton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Skipton and the BD23 zone for sign companies, print houses and fit-out contractors. WRPX covers Skipton town centre, the Yorkshire Dales gateway corridor, Grassington BD23, Settle BD24, Ilkley LS29 and the A65/A629 corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-skipton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Skipton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Skipton and the BD23 zone. White-label available. WRPX covers Skipton town centre, Craven district commercial premises, the Yorkshire Dales gateway hotel and hospitality corridor, Grassington BD23, Settle BD24, Ilkley LS29, Keighley BD21 and the A65/A629 corridor from Bradford to the Dales."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Skipton", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-skipton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Skipton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skipton is approximately 1 hour 10–20 minutes from our South Yorkshire base via the M1 north to junction 41 (Wakefield), then the A650/A629 north through Bradford and Keighley to Skipton. Alternatively via the M62 west to junction 26, then the A638/A650 north through Bradford. Skipton BD23 is at the head of the Aire Valley, 10 miles north of Keighley and 15 miles north-west of Bradford.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Skipton jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Skipton and BD23 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Skipton with Keighley or the Yorkshire Dales on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Skipton is the natural hub for the A65 Yorkshire Dales gateway corridor. Keighley BD21 is 10 miles south-east via the A629. Grassington BD23 is 9 miles north via the B6265 Wharfedale road. Settle BD24 is 16 miles north-west via the A65 to Long Preston and Settle. For sign companies with Craven district or Wharfedale programmes, combining Skipton, Keighley, Grassington and Settle in the same trip is practical.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Skipton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Skipton commercial stock includes the High Street and Sheep Street retail zone, Coach Street commercial area, the Jerry Croft and Canal Basin leisure and hospitality cluster, the Craven district council buildings and the Yorkshire Dales gateway hotel and pub strip on the A65 north and south of town.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Yorkshire Dales hospitality and tourism market from Skipton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of the specific reasons Skipton is worth covering as a separate zone. The A65 corridor north and north-west of Skipton carries a concentration of hotels, inns, country houses and visitor attractions serving the Yorkshire Dales National Park. Grassington, Settle, Ribble Valley, Ilkley and the Bolton Abbey estate are all reachable from Skipton on the same day. Hospitality and tourism operators here regularly need graphics and vinyl installation as part of seasonal refresh and brand rollout programmes.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Skipton?",
    a: "Skipton is approximately 1 hour 10–20 minutes from our South Yorkshire base via the M1 north to junction 41 (Wakefield), then the A650/A629 north through Bradford and Keighley to Skipton. Alternatively via the M62 west to junction 26, then the A638/A650 north through Bradford. Skipton BD23 is at the head of the Aire Valley, 10 miles north of Keighley and 15 miles north-west of Bradford.",
  },
  {
    q: "Do you work white-label on Skipton jobs?",
    a: "Yes — white-label is standard on all Skipton and BD23 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
  },
  {
    q: "Can you combine Skipton with Keighley or the Yorkshire Dales on the same programme?",
    a: "Yes — Skipton is the natural hub for the A65 Yorkshire Dales gateway corridor. Keighley BD21 is 10 miles south-east via the A629. Grassington BD23 is 9 miles north via the B6265 Wharfedale road. Settle BD24 is 16 miles north-west via the A65 to Long Preston and Settle. For sign companies with Craven district or Wharfedale programmes, combining Skipton, Keighley, Grassington and Settle in the same trip is practical.",
  },
  {
    q: "What types of vinyl installation do you cover in Skipton?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Skipton commercial stock includes the High Street and Sheep Street retail zone, Coach Street commercial area, the Jerry Croft and Canal Basin leisure and hospitality cluster, the Craven district council buildings and the Yorkshire Dales gateway hotel and pub strip on the A65 north and south of town.",
  },
  {
    q: "Do you cover the Yorkshire Dales hospitality and tourism market from Skipton?",
    a: "Yes — this is one of the specific reasons Skipton is worth covering as a separate zone. The A65 corridor north and north-west of Skipton carries a concentration of hotels, inns, country houses and visitor attractions serving the Yorkshire Dales National Park. Grassington, Settle, Ribble Valley, Ilkley and the Bolton Abbey estate are all reachable from Skipton on the same day. Hospitality and tourism operators here regularly need graphics and vinyl installation as part of seasonal refresh and brand rollout programmes.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-bradford/", city: "Bradford", postcode: "BD1–BD5", desc: "Bradford city centre, Little Germany, Broadway" },
  { href: "/subcontract-vinyl-installer-colne/", city: "Colne", postcode: "BB8", desc: "Colne town centre, Boundary Mill, M65 terminus — 25 miles west" },
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1–HG3", desc: "Harrogate spa town, Stray, Knaresborough" },
  { href: "/subcontract-vinyl-installer-nelson/", city: "Nelson", postcode: "BB9", desc: "Nelson town centre, A65 East Lancashire" },
];

export default function SubcontractVinylInstallerSkiptonPage() {
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
            <span className="text-foreground">Subcontract Installer Skipton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Skipton BD23
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Skipton and the Craven district
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies, print
            management firms and fit-out contractors with work in Skipton and the wider Craven
            and Wharfedale area. We cover Skipton town centre BD23, the A65 Yorkshire Dales
            gateway corridor, Grassington, Settle and the surrounding BD23/LS29 zone — all
            on the same day from our South Yorkshire base.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Skipton Installation →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Skipton coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Skipton is the market town and commercial hub of the Craven district of North
              Yorkshire. The BD23 postcode covers Skipton town and extends north into the
              Wharfedale and Ribblesdale valleys — a significant tourism, hospitality and
              agriculture zone where commercial premises are dispersed but installation
              demand is consistent: hotels, inns, visitor centres, estate offices,
              agricultural merchants and rural retail operators all generate periodic
              signage and graphics installation requirements.
            </p>
            <p>
              From our South Yorkshire base, Skipton is approximately 1 hour 10–20 minutes
              via the M1 north and A629/A650 through Bradford and Keighley. The route is
              straightforward and well-served with commercial vehicle parking in Skipton
              town centre. The Coach Street area and the Canal Basin zone have good loading
              access. For A65 corridor work north and north-west of Skipton — hotels, inns
              and visitor attractions on the Dales gateway road — we add minimal time to
              the Skipton day plan.
            </p>
            <p>
              We can combine Skipton with Bradford (BD1–BD5, 15 miles south), Keighley
              (BD21, 10 miles south-east), Ilkley (LS29, 12 miles east via the A65/A6034)
              and Colne (BB8, 25 miles south-west via the A56 and A6068) on the same programme.
              For sign companies managing Craven, Bradford and Wharfedale jobs in the same
              period, we are a consistent installation partner who can work across all these
              zones without a separate mobilisation cost per site.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Skipton and the Craven district
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl, printed window graphics, frosted and decorative film for Skipton
                retail, café and hospitality premises on High Street, Sheep Street and the
                Canal Basin area. Tourism and Dales gateway operators use seasonal graphics
                heavily — we install year-round.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shopfront and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fascia vinyl, tray sign inserts and external vinyl application for Skipton
                town centre retail and commercial premises. Also covers the growing number
                of independent businesses in the Jerry Croft and Cavendish Street area. We
                install to your supplied cut or printed material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, graphic panels, motivational and branding vinyls for offices,
                hotels and visitor centres across the Skipton and Craven area. Architectural
                film application on desk fascias, reception counters and hospitality interiors
                in the Dales gateway hotel and inn market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and building graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal and external wayfinding vinyl for Craven district council buildings,
                schools, health centres and visitor facilities across the BD23 zone. Multi-surface
                application — walls, doors, floors and glazing — to your supplied wayfinding
                artwork and specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hospitality and tourism graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Yorkshire Dales hotels, country inns, farm shops, visitor centres and tourism
                attractions on the A65 and B6265 corridors around Skipton. Seasonal campaign
                graphics, brand rollouts and periodic refresh installations. We work around
                trading hours on request.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fleet and vehicle livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vehicle livery application for Craven district commercial operators, delivery
                fleets and agricultural businesses. We install at your client&apos;s premises or at
                an agreed location in Skipton — no need to transport vehicles to a workshop
                outside the BD23 zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation in Skipton
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Most sign companies and print management firms serving the Skipton and Craven
              market do not have a local installation crew in North Yorkshire — this area
              sits on the edge of Bradford or Harrogate territory for most regional installers.
              Using WRPX as your white-label installation partner gives you consistent,
              professional installation in this zone without having to turn down or
              over-travel for Craven district work.
            </p>
            <p>
              White-label means we arrive in unbranded vehicles, introduce ourselves under
              your company name and carry out every installation under your brand. Photographic
              documentation — before, progress and completed — is provided in your agreed
              format on the day. No WRPX branding appears on any surface or documentation.
              The client sees your company throughout.
            </p>
            <p>
              For multi-site programmes combining Skipton with Bradford, Keighley, Ilkley
              or the wider Yorkshire Dales corridor, we provide a single point of contact,
              a consistent crew and a consistent reporting format across all sites. Useful
              if your client has premises in multiple Craven and Wharfedale locations and
              expects a unified installation experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Skipton subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby cities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby cities and zones
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, city, postcode, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{city} <span className="text-sm font-normal text-muted">({postcode})</span></h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
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
              Need vinyl installation in Skipton?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, location and access requirements. We confirm availability,
              turn up on time, install to spec and hand back with full photographic documentation.
              White-label as standard — your brand on site throughout.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Skipton Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
