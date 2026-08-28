import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Keighley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Keighley and the BD21 zone for sign companies, print houses and fit-out contractors. WRPX covers Keighley town centre, the Worth Valley corridor, Bingley BD16, Silsden BD20, Steeton BD20 and the A629 corridor between Bradford and Skipton — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-keighley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Keighley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Keighley and the BD21 zone. White-label available. WRPX covers Keighley town centre, the Worth Valley and Bradford-Skipton A629 corridor, Bingley BD16, Silsden BD20, Steeton BD20, Haworth BD22 and cross-Pennine Airedale commercial premises."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Keighley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-keighley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Keighley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keighley is approximately 1 hour from our South Yorkshire base via the M1 north to junction 41 (Wakefield), then the A650 north through Bradford to Keighley. Alternatively via the M62 west to junction 26, then the A638/A650 north through Bradford. Keighley BD21 sits 10 miles north of Bradford city centre on the A629 and 10 miles south of Skipton at the southern entrance to the Yorkshire Dales.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Keighley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Keighley and BD21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Keighley with Bradford or Skipton on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Keighley sits centrally on the A629 between Bradford and Skipton, making it ideal for combining. Bradford BD1 is 10 miles south via the A650. Skipton BD23 is 10 miles north via the A629. Bingley BD16 is 3 miles south. Ilkley LS29 is 8 miles east via the A6034. For sign companies running Airedale and Wharfedale programmes, Keighley, Bradford, Bingley, Skipton and Ilkley can typically be combined in a single-day or two-day visit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Keighley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Keighley commercial stock includes the Low Street and High Street town centre retail zones, the Airedale Shopping Centre, Bradford Road commercial area, industrial units on the Dalton Lane estate and the Haworth tourism and hospitality corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Keighley industrial and commercial estate market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Keighley&apos;s industrial and commercial estate market is an active one for graphics and vinyl installation. The Dalton Lane industrial estate, the North Dean Business Park, Victoria Industrial Park and the wider Airedale business corridor generate regular window graphics, wall graphics and wayfinding installation demand. We cover these sites on the same day as Keighley town centre work.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Keighley?",
    a: "Keighley is approximately 1 hour from our South Yorkshire base via the M1 north to junction 41 (Wakefield), then the A650 north through Bradford to Keighley. Alternatively via the M62 west to junction 26, then the A638/A650 north through Bradford. Keighley BD21 sits 10 miles north of Bradford city centre on the A629 and 10 miles south of Skipton at the southern entrance to the Yorkshire Dales.",
  },
  {
    q: "Do you work white-label in Keighley?",
    a: "Yes — white-label is standard on all Keighley and BD21 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Keighley with Bradford or Skipton on the same programme?",
    a: "Yes — Keighley sits centrally on the A629 between Bradford and Skipton, making it ideal for combining. Bradford BD1 is 10 miles south via the A650. Skipton BD23 is 10 miles north via the A629. Bingley BD16 is 3 miles south. Ilkley LS29 is 8 miles east via the A6034. For sign companies running Airedale and Wharfedale programmes, Keighley, Bradford, Bingley, Skipton and Ilkley can typically be combined in a single-day or two-day visit.",
  },
  {
    q: "What types of vinyl installation do you cover in Keighley?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Keighley commercial stock includes the Low Street and High Street town centre retail zones, the Airedale Shopping Centre, Bradford Road commercial area, industrial units on the Dalton Lane estate and the Haworth tourism and hospitality corridor.",
  },
  {
    q: "Do you cover the Keighley industrial and commercial estate market?",
    a: "Yes — Keighley's industrial and commercial estate market is an active one for graphics and vinyl installation. The Dalton Lane industrial estate, the North Dean Business Park, Victoria Industrial Park and the wider Airedale business corridor generate regular window graphics, wall graphics and wayfinding installation demand. We cover these sites on the same day as Keighley town centre work.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-bradford/", city: "Bradford", postcode: "BD1–BD5", desc: "Bradford city centre, Little Germany, Forster Square — 10 miles south via A650" },
  { href: "/subcontract-vinyl-installer-skipton/", city: "Skipton", postcode: "BD23", desc: "Skipton town centre, Canal Basin, Yorkshire Dales gateway — 10 miles north via A629" },
  { href: "/subcontract-vinyl-installer-leeds/", city: "Leeds", postcode: "LS1–LS2", desc: "Leeds city centre, Granary Wharf, Wellington Place — 15 miles east via A6037/M621" },
  { href: "/subcontract-vinyl-installer-harrogate/", city: "Harrogate", postcode: "HG1–HG3", desc: "Harrogate spa town, Stray, Knaresborough — 20 miles east via A6068 and A59" },
];

export default function SubcontractVinylInstallerKeighleyPage() {
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
            <span className="text-foreground">Subcontract Installer Keighley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Keighley BD21
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Keighley and the Airedale corridor
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies, print
            management firms and fit-out contractors with work in Keighley and the BD21 zone.
            We cover Keighley town centre, the Bradford&ndash;Skipton A629 corridor, Bingley BD16,
            Silsden BD20, Steeton BD20 and Haworth BD22 — all on the same day from our
            South Yorkshire base.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Keighley Installation →
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
            Keighley coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Keighley is the principal commercial centre of the Airedale valley — the market
              town and largest settlement on the A629 corridor between Bradford and Skipton.
              BD21 covers Keighley town and extends into the surrounding Worth Valley,
              serving a mix of town centre retail and commercial premises, light industrial
              estates on the eastern edge of town, and the significant tourism and hospitality
              corridor running south through Haworth BD22 and the Bront&euml; Country visitor
              attractions.
            </p>
            <p>
              From our South Yorkshire base, Keighley is approximately 1 hour via the M1
              north to junction 41, then the A650 north through Bradford and Shipley to
              Keighley. The A650 is the main commercial arterial route between Bradford
              and Keighley — most industrial estates and the town centre are directly
              accessible from this road. Commercial vehicle loading in Keighley town
              centre is straightforward with good access on Bradford Road, Cavendish Street
              and the retail park zones.
            </p>
            <p>
              Keighley&apos;s position on the A629 makes it the natural staging point for
              combining Bradford (10 miles south), Bingley BD16 (3 miles south), Skipton BD23
              (10 miles north), Silsden BD20 (5 miles north-west) and Ilkley LS29 (8 miles
              east via the A6034). For sign companies managing Airedale and Wharfedale
              programmes, Keighley is the most efficient base from which to cover the
              full Bradford&ndash;Skipton corridor in a single visit.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Keighley and the BD21 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl, printed window graphics, frosted and decorative film for
                Keighley retail, office and hospitality premises. High Street, Low Street,
                the Airedale Shopping Centre and the Bradford Road commercial zone are
                all active for periodic window graphic refresh.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shopfront and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fascia vinyl, tray sign inserts and external vinyl application for Keighley
                town centre retail and commercial premises. We install to your supplied
                cut or printed material — no printing, just professional installation
                in the BD21 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and interior vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, motivational and branding vinyls for Keighley offices, schools,
                leisure centres and commercial premises. Architectural film application
                on reception counters, desk fascias and hospitality interiors in the
                Haworth tourism corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and building graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal and external wayfinding vinyl for Keighley schools, health
                centres, council buildings and visitor facilities across the BD21 zone.
                Multi-surface application on walls, doors, floors and glazing to your
                supplied artwork and specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding graphics on construction site boarding, temporary fencing and
                scaffolding enclosures for Keighley and Airedale development sites.
                Full-colour print-and-install programmes — you supply the artwork,
                we supply and install the material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Industrial and trade counter graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, safety and wayfinding vinyls for Keighley&apos;s light industrial
                and trade counter premises — Dalton Lane, Victoria Industrial Park, North
                Dean Business Park and the A629 commercial strip. We cover industrial
                units on the same day as town centre work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label installation in Keighley
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sign companies and print management firms based in Bradford, Leeds or Skipton
              often cover Keighley and the BD21 zone but do not maintain a local crew
              specifically for this area. Using WRPX as your white-label installation
              partner gives you professional, consistent installation in Keighley without
              the overhead of crew and vehicles permanently stationed in the Airedale valley.
            </p>
            <p>
              White-label means we arrive in unbranded vehicles, introduce ourselves under
              your company name and carry out every installation under your brand. Photographic
              documentation — before, progress and completed — is provided in your agreed
              format on the day of installation. No WRPX branding appears on any surface,
              vehicle or documentation. The client sees your company throughout.
            </p>
            <p>
              For multi-site programmes combining Keighley with Bradford, Skipton, Bingley,
              Ilkley or the wider Airedale corridor, we provide a single point of contact,
              a consistent crew and a consistent reporting format across all sites. Useful
              for sign companies where the client has premises across multiple Airedale and
              Wharfedale locations and expects a unified installation experience throughout.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Keighley subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby */}
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
              Need vinyl installation in Keighley?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, location and access requirements. We confirm availability,
              turn up on time, install to spec and hand back with full photographic documentation.
              White-label as standard — your brand on site throughout.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Keighley Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
