import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Settle — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Settle and the BD24 zone for sign companies, print houses and fit-out contractors. WRPX covers Settle town centre, Market Place, Giggleswick BD24, Langcliffe BD24, Hellifield BD23 and the A65 Ribble Valley corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-settle/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Settle — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Settle and the BD24 zone. White-label available. WRPX covers Settle town centre, Market Place BD24, Giggleswick BD24, Langcliffe BD24, Hellifield BD23 and the A65 Ribble Valley corridor between Skipton and Ingleton."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Settle", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-settle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Settle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Settle is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is via the M1 north and A1(M) to Wetherby, then the A65 west through Skipton to Settle. Alternatively via the M62 and M621 through Leeds, then the A65 north-west. Settle BD24 sits on the A65 between Skipton BD23 (15 miles east) and Ingleton LA6 (9 miles north-west at the Lancashire/Yorkshire Dales boundary). Clitheroe BB7 is 18 miles south-west via the A682 and B6478 over the Pennines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Settle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Settle and BD24 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Settle with Skipton or Clitheroe on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Settle is 15 miles west of Skipton BD23 on the A65 and 18 miles from Clitheroe BB7 via the A682/B6478 over the Pennine watershed. For sign companies managing Craven District or Ribble Valley programmes, Settle and Skipton can be combined comfortably in a single day. Barnoldswick BB18 is also reachable by going south on the A682 to Barnoldswick, making a Settle–Skipton–Barnoldswick arc feasible from a routing perspective.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Settle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Settle commercial stock includes Market Place and Constitution Hill independent retail, the Shambles shopping arcade, hospitality and tourism businesses along the A65 through the town, Giggleswick School (independent boarding school), and professional services and healthcare facilities serving the Craven district.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Giggleswick and the wider BD24 zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Giggleswick BD24 (directly adjacent to Settle across the River Ribble and A65), Langcliffe BD24 (one mile north up Ribblesdale), Hellifield BD23 (6 miles east on the A65 toward Skipton) and the wider Ribble Valley corridor through the Yorkshire Dales National Park are all within our Settle coverage area. Tourism, hospitality and rural commercial properties across this corridor generate regular demand for window film, interior graphics and surface wrapping.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Settle?",
    a: "Settle is approximately 1 hour 20 minutes from our South Yorkshire base. The most direct route is via the M1 north and A1(M) to Wetherby, then the A65 west through Skipton to Settle. Alternatively via the M62 and M621 through Leeds, then the A65 north-west. Settle BD24 sits on the A65 between Skipton BD23 (15 miles east) and Ingleton LA6 (9 miles north-west at the Lancashire/Yorkshire Dales boundary). Clitheroe BB7 is 18 miles south-west via the A682 and B6478 over the Pennines.",
  },
  {
    q: "Do you work white-label in Settle?",
    a: "Yes — white-label is standard on all Settle and BD24 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Settle with Skipton or Clitheroe on the same programme?",
    a: "Yes — Settle is 15 miles west of Skipton BD23 on the A65 and 18 miles from Clitheroe BB7 via the A682/B6478 over the Pennine watershed. For sign companies managing Craven District or Ribble Valley programmes, Settle and Skipton can be combined comfortably in a single day. Barnoldswick BB18 is also reachable by going south on the A682 to Barnoldswick, making a Settle–Skipton–Barnoldswick arc feasible from a routing perspective.",
  },
  {
    q: "What types of vinyl installation do you cover in Settle?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Settle commercial stock includes Market Place and Constitution Hill independent retail, the Shambles shopping arcade, hospitality and tourism businesses along the A65 through the town, Giggleswick School (independent boarding school), and professional services and healthcare facilities serving the Craven district.",
  },
  {
    q: "Do you cover Giggleswick and the wider BD24 zone?",
    a: "Yes — Giggleswick BD24 (directly adjacent to Settle across the River Ribble and A65), Langcliffe BD24 (one mile north up Ribblesdale), Hellifield BD23 (6 miles east on the A65 toward Skipton) and the wider Ribble Valley corridor through the Yorkshire Dales National Park are all within our Settle coverage area. Tourism, hospitality and rural commercial properties across this corridor generate regular demand for window film, interior graphics and surface wrapping.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-skipton/", city: "Skipton", postcode: "BD23", desc: "Skipton town centre, Canal Basin, Craven District — 15 miles east via A65" },
  { href: "/subcontract-vinyl-installer-clitheroe/", city: "Clitheroe", postcode: "BB7", desc: "Clitheroe Castle Street, Ribble Valley, A59 corridor — 18 miles south-west via A682/B6478" },
  { href: "/subcontract-vinyl-installer-barnoldswick/", city: "Barnoldswick", postcode: "BB18", desc: "Barnoldswick Rolls-Royce corridor, Earby — south on A682 from Settle/Skipton" },
  { href: "/subcontract-vinyl-installer-ilkley/", city: "Ilkley", postcode: "LS29", desc: "Ilkley Grove, Wharfe Valley, Ben Rhydding — east of Skipton on A65" },
];

export default function SubcontractVinylInstallerSettlePage() {
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
            <span className="text-foreground">Subcontract Installer Settle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Settle BD24
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Settle and the BD24 zone
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label subcontract vinyl installation for sign companies,
            print management firms and fit-out contractors with work in Settle and
            the BD24 zone. We cover Settle town centre and Market Place, Giggleswick BD24,
            Langcliffe BD24, Hellifield BD23 and the A65 Ribble Valley corridor through
            the Yorkshire Dales — all combinable with Skipton or Clitheroe on the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Settle Installation →
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
            Settle coverage area and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Settle is a limestone market town in the Craven district of North Yorkshire,
              situated in the Ribble Valley on the A65 at the southern gateway to the
              Yorkshire Dales National Park. The BD24 postcode covers Settle and its
              neighbouring village of Giggleswick across the River Ribble. Langcliffe BD24
              lies a mile north up Ribblesdale. Hellifield BD23, six miles east on the
              A65 toward Skipton, sits where the A65 and A682 junction — the crossroads
              of the Ribble Valley and the Pendle corridor.
            </p>
            <p>
              Settle&apos;s commercial character centres on Market Place — one of the finest
              Georgian market squares in the North — and Constitution Hill above it. The
              town has a high concentration of independent retail, artisan food and drink,
              outdoor and countryside equipment, professional services and tourism-facing
              businesses. Giggleswick School — the independent boarding school immediately
              across the river — is the single largest employer and institution in the zone
              and regularly commissions specialist interior and window graphics work.
            </p>
            <p>
              From our South Yorkshire base, Settle is approximately 1 hour 20 minutes
              via the M1 north, A1(M) to Wetherby J44, A659 west to Skipton and the A65
              west to Settle. The route is clean motorway and A-road throughout — no urban
              congestion zones after leaving the M1. A programme starting with Skipton work
              in the morning and moving west to Settle in the afternoon is the most efficient
              routing for this zone.
            </p>
            <p>
              Settle&apos;s position at the western end of the Craven district creates a natural
              link between the Yorkshire Dales and the Ribble Valley/East Lancashire corridor.
              Clitheroe BB7 is 18 miles south-west over the Pennine watershed via the A682
              and B6478 — a route that passes through Slaidburn and the Forest of Bowland
              AONB. For sign companies managing both Yorkshire Dales and Ribble Valley
              accounts, Settle is the logical staging point between the two corridors.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Settle and the BD24 zone
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl window graphics for retail, hospitality and commercial
                premises across Settle town centre and the BD24 zone. Frosted film,
                decorative manifestation, promotional graphics and brand window vinyls.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, etched-effect decorative film and Part M manifestation
                for Settle offices, professional services, independent retail and residential
                premises across BD24 and the Ribble Valley corridor. High-specification
                finishes for Settle&apos;s premium independent market.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall graphics and wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format printed wall graphics, brand wall vinyls and decorative wall
                wraps for hospitality, retail and commercial premises across Settle and
                the surrounding Dales towns. Applied without adhesive residue on removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School and education graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior and window graphics for Giggleswick School and educational
                premises in the Settle zone. DBS-checked installation, term-time and
                holiday scheduling coordination. All education installation carried out
                with safeguarding compliance as standard.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Tourism and hospitality graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window vinyls, wall graphics and interior surface wrapping for hotels,
                guest houses, pubs and tourism businesses across Settle and the
                Yorkshire Dales National Park. Seasonal promotional graphics for
                businesses with peak summer and autumn visitor periods.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics and temporary site branding for Settle
                development and renovation projects. Installed and removed to project
                timeline with no permanent fixings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — your brand on site in Settle
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work white-label for sign companies and print management firms across
              Settle and the BD24 zone. We arrive in unbranded vehicles, use your
              job sheets and paperwork, and sign off each installation with photographic
              documentation in your agreed format. WRPX branding does not appear on
              site, on vehicles or on any customer-facing documentation.
            </p>
            <p>
              For sign companies based in Skipton, Leeds or further afield with occasional
              Settle work, the white-label model means you can accept and deliver BD24 zone
              jobs without maintaining a specialist installer relationship in this part of
              the Dales. We report back to you, not to the end client.
            </p>
            <p>
              Photographic sign-off is provided for every Settle installation:
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
            Settle subcontract installation — common questions
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
              Installation work in Settle or the BD24 zone?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface type, material specification
              and access requirements. We&apos;ll confirm availability and pricing for
              Settle and combine with any nearby Skipton or Clitheroe work on the same day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Settle Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
