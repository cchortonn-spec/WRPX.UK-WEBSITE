import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Barnoldswick — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Barnoldswick and the BB18 zone for sign companies, print houses and fit-out contractors. WRPX covers Barnoldswick town centre, the Rolls-Royce corridor, Earby BB18, Kelbrook BB18, Salterforth and the A56 between Colne and Clitheroe — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-barnoldswick/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Barnoldswick — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Barnoldswick and the BB18 zone. White-label available. WRPX covers Barnoldswick town centre, Earby BB18, Kelbrook BB18, Salterforth, Rolls-Royce aerospace facility corridor, and the A56 between Colne and Clitheroe."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Barnoldswick", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-barnoldswick/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Barnoldswick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Barnoldswick is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is via the M1 north to the M62 west, then the A6068 towards Burnley, and the A56 north to Barnoldswick. Alternatively via the M1 to the A629 through Keighley and Skipton, then south on the A59 and A56 corridor. Barnoldswick BB18 sits between Colne BB8 (15 minutes south-east via A56) and Clitheroe BB7 (15 minutes north-west via A59/A671).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Barnoldswick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Barnoldswick and BB18 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Barnoldswick with Colne or Nelson on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Barnoldswick is 15 minutes from Colne BB8 and 20 minutes from Nelson BB9, making it ideal for combining with Pendle Valley programmes. Skipton BD23 is 15 minutes east via the A56 and A629. Clitheroe BB7 is 15 minutes north-west. Burnley BB11 is 20 minutes south. For sign companies managing East Lancashire and Craven programmes, Barnoldswick, Colne, Nelson, Skipton and Clitheroe can typically be combined in a single-day or two-day visit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Barnoldswick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Barnoldswick commercial stock includes the town centre retail on Newgate, the Rolls-Royce aerospace facility and supply-chain industrial units, and the rural commercial premises across BB18.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Barnoldswick industrial estate and Rolls-Royce corridor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Barnoldswick is home to one of Rolls-Royce&apos;s major aerospace engine manufacturing facilities, alongside a network of supply-chain and precision engineering businesses in the BB18 zone. These industrial and commercial premises generate regular demand for graphics, wayfinding vinyl and office interior installation. We cover these sites on the same day as Barnoldswick town centre work.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Barnoldswick?",
    a: "Barnoldswick is approximately 1 hour 15 minutes from our South Yorkshire base. The most direct route is via the M1 north to the M62 west, then the A6068 towards Burnley, and the A56 north to Barnoldswick. Alternatively via the M1 to the A629 through Keighley and Skipton, then south on the A59 and A56 corridor. Barnoldswick BB18 sits between Colne BB8 (15 minutes south-east via A56) and Clitheroe BB7 (15 minutes north-west via A59/A671).",
  },
  {
    q: "Do you work white-label in Barnoldswick?",
    a: "Yes — white-label is standard on all Barnoldswick and BB18 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Barnoldswick with Colne or Nelson on the same programme?",
    a: "Yes — Barnoldswick is 15 minutes from Colne BB8 and 20 minutes from Nelson BB9, making it ideal for combining with Pendle Valley programmes. Skipton BD23 is 15 minutes east via the A56 and A629. Clitheroe BB7 is 15 minutes north-west. Burnley BB11 is 20 minutes south. For sign companies managing East Lancashire and Craven programmes, Barnoldswick, Colne, Nelson, Skipton and Clitheroe can typically be combined in a single-day or two-day visit.",
  },
  {
    q: "What types of vinyl installation do you cover in Barnoldswick?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Barnoldswick commercial stock includes the town centre retail on Newgate, the Rolls-Royce aerospace facility and supply-chain industrial units, and the rural commercial premises across BB18.",
  },
  {
    q: "Do you cover the Barnoldswick industrial estate and Rolls-Royce corridor?",
    a: "Yes — Barnoldswick is home to one of Rolls-Royce's major aerospace engine manufacturing facilities, alongside a network of supply-chain and precision engineering businesses in the BB18 zone. These industrial and commercial premises generate regular demand for graphics, wayfinding vinyl and office interior installation. We cover these sites on the same day as Barnoldswick town centre work.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-colne/", city: "Colne", postcode: "BB8", desc: "Colne town centre, the A56 commercial strip, Pendle Heritage area — 15 minutes south-east" },
  { href: "/subcontract-vinyl-installer-nelson/", city: "Nelson", postcode: "BB9", desc: "Nelson town centre, Lomeshaye Industrial Estate, Pendle corridor — 20 minutes south" },
  { href: "/subcontract-vinyl-installer-skipton/", city: "Skipton", postcode: "BD23", desc: "Skipton town centre, Canal Basin, Yorkshire Dales gateway — 15 minutes east via A629" },
  { href: "/subcontract-vinyl-installer-burnley/", city: "Burnley", postcode: "BB11", desc: "Burnley town centre, Weavers Triangle, Manchester Road commercial — 20 minutes south" },
];

export default function SubcontractVinylInstallerBarnoldswickPage() {
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
            <span className="text-foreground">Subcontract Installer Barnoldswick</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Barnoldswick BB18
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Barnoldswick and the BB18 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Barnoldswick and
            the BB18 zone. We cover Barnoldswick town centre, Earby BB18, Kelbrook BB18,
            Salterforth and the A56 corridor between Colne and Clitheroe — all on the same
            day alongside Colne, Nelson or Skipton work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Barnoldswick Installation →
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
            Barnoldswick coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Barnoldswick is a mill town in the Ribble Valley district of Lancashire,
              situated in the Gill Beck valley at the northern edge of the Pendle Hill
              massif. BB18 covers the town and its surrounding rural hinterland —
              Earby BB18 to the east, Kelbrook BB18 to the south-east on the A56,
              and Salterforth on the Leeds&ndash;Liverpool Canal to the south.
            </p>
            <p>
              The town is most notable commercially for its Rolls-Royce aerospace engine
              manufacturing facility — one of the largest aerospace engineering sites in
              the North West — alongside a network of precision engineering, aerospace
              supply-chain and industrial businesses across the BB18 zone. These industrial
              and commercial premises generate consistent demand for graphics installation:
              wayfinding vinyls, office interior graphics, window film and safety graphics
              are recurring requirements across Barnoldswick&apos;s manufacturing sector.
            </p>
            <p>
              From our South Yorkshire base, Barnoldswick is approximately 1 hour 15 minutes
              via the M1 north to the M62 west, then the A6068 to Burnley and the A56
              north to Barnoldswick. The A56 is the main commercial route through Barnoldswick
              — connecting Colne BB8 to the south-east with Earby BB18 and Kelbrook BB18
              to the north of town, and continuing to Skipton BD23 further east via the A59
              and A629.
            </p>
            <p>
              Barnoldswick&apos;s position between Colne BB8 (15 minutes) and Skipton BD23
              (15 minutes east) makes it the natural mid-point for combining Pendle Valley
              and Craven district work in the same day. Nelson BB9, Burnley BB11 and
              Clitheroe BB7 are all within 20 minutes — a single-day programme covering
              all five is achievable from a Barnoldswick start.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Barnoldswick and the BB18 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail and commercial premises
                across Barnoldswick town centre and BB18 industrial sites. Frosted film,
                decorative manifestation, promotional graphics and brand window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for offices, retail and industrial premises across Barnoldswick and
                the BB18 zone. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and safety vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding signage vinyls, floor safety graphics and directional vinyls
                for Barnoldswick industrial and commercial premises — particularly relevant
                for the manufacturing and aerospace supply-chain sector in BB18.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Office interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partition frosted film and privacy film, branded reception wall vinyls,
                motivational and brand graphics for Barnoldswick office refurbishments.
                Installation only — client or print company supplies the material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, promotional floor graphics and wayfinding floor
                vinyls for Barnoldswick retail, hospitality and industrial premises.
                Applied to smooth floor surfaces without surface damage on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, temporary event graphics and project
                branding vinyls for Barnoldswick and BB18 development sites. Installed
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
            White-label subcontract — your brand on site in Barnoldswick
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Barnoldswick and the BB18 zone. We arrive in unbranded vehicles, use your
              job sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on
              site, on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Burnley, Colne, Nelson, Bradford or further
              afield with occasional Barnoldswick work, the white-label model means you
              can accept and deliver BB18 jobs without maintaining a local installer
              relationship in the town. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Barnoldswick installation:
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
            Barnoldswick subcontract installation — common questions
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
              Installation work in Barnoldswick or the BB18 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Barnoldswick and combine with any nearby Colne, Nelson or Skipton work
              on the same day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Barnoldswick Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
