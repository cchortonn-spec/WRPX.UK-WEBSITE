import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Fleetwood — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Fleetwood and the FY7 zone for sign companies, print houses and fit-out contractors. WRPX covers Fleetwood town centre, the A585 north Fylde corridor, Freeport Fleetwood retail zone and the wider Wyre coast. Easily combined with Lytham St Annes, Kirkham or Blackpool on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-fleetwood/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Fleetwood — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Fleetwood and the FY7 zone. White-label available. WRPX covers Fleetwood town centre, the Freeport Fleetwood retail outlet zone, the A585 north Fylde coast corridor and the Wyre Dock regeneration area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Fleetwood", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-fleetwood/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Fleetwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fleetwood is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is the M62 west to the M6 north, then the M55 north-west to junction 3, the A585 north through Kirkham and Poulton-le-Fylde into Fleetwood — approximately 95 miles door to door. Fleetwood FY7 sits at the northern tip of the Fylde peninsula, 8 miles north of Blackpool FY1 and 12 miles north-west of Kirkham PR4.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Fleetwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Fleetwood and FY7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Fleetwood with Blackpool or Lytham St Annes on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to run north Fylde programmes. Fleetwood FY7 sits at the top of the Fylde peninsula with Blackpool FY1–FY4 8 miles south and Kirkham PR4 12 miles south-east. Lytham St Annes FY8 is 14 miles south. A single visit from South Yorkshire covers the full Fylde coast arc — Fleetwood, Blackpool and Lytham — without separate mobilisations. Preston PR1 is 12 miles east of Fleetwood via the A585.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Fleetwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Fleetwood's commercial core centres on Lord Street FY7 and the Freeport Fleetwood retail outlet centre on the Wyre Dock development zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Freeport Fleetwood retail outlet centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Freeport Fleetwood is the main retail destination on the Wyre Dock regeneration zone north of Fleetwood town centre and is well within our Fleetwood coverage area. The outlet centre's mix of branded retail units, hospitality spaces and event areas generates regular window graphics, internal graphics and wayfinding vinyl work — all suitable for subcontract installation support on the same programme as Fleetwood town centre and broader north Fylde coast clients.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Fleetwood?",
    a: "Fleetwood is approximately 1 hour 30 minutes from our South Yorkshire base. The most direct route is the M62 west to the M6 north, then the M55 north-west to junction 3, the A585 north through Kirkham and Poulton-le-Fylde into Fleetwood — approximately 95 miles door to door. Fleetwood FY7 sits at the northern tip of the Fylde peninsula, 8 miles north of Blackpool FY1 and 12 miles north-west of Kirkham PR4.",
  },
  {
    q: "Do you work white-label in Fleetwood?",
    a: "Yes — white-label is standard on all Fleetwood and FY7 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Fleetwood with Blackpool or Lytham St Annes on the same programme?",
    a: "Yes — and this is the most efficient way to run north Fylde programmes. Fleetwood FY7 sits at the top of the Fylde peninsula with Blackpool FY1–FY4 8 miles south and Kirkham PR4 12 miles south-east. Lytham St Annes FY8 is 14 miles south. A single visit from South Yorkshire covers the full Fylde coast arc — Fleetwood, Blackpool and Lytham — without separate mobilisations. Preston PR1 is 12 miles east of Fleetwood via the A585.",
  },
  {
    q: "What types of vinyl installation do you cover in Fleetwood?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Fleetwood's commercial core centres on Lord Street FY7 and the Freeport Fleetwood retail outlet centre on the Wyre Dock development zone.",
  },
  {
    q: "Do you cover the Freeport Fleetwood retail outlet centre?",
    a: "Yes — Freeport Fleetwood is the main retail destination on the Wyre Dock regeneration zone north of Fleetwood town centre and is well within our Fleetwood coverage area. The outlet centre's mix of branded retail units, hospitality spaces and event areas generates regular window graphics, internal graphics and wayfinding vinyl work — all suitable for subcontract installation support on the same programme as Fleetwood town centre and broader north Fylde coast clients.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-kirkham/", label: "Kirkham PR4", desc: "12 miles south-east via A585" },
  { href: "/subcontract-vinyl-installer-lytham-st-annes/", label: "Lytham St Annes FY8", desc: "14 miles south via A584" },
];

export default function SubcontractVinylInstallerFleetwoodPage() {
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
            <span className="text-foreground">Fleetwood</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Fleetwood FY7
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer in Fleetwood
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Fleetwood and the FY7 zone
            for sign companies, print houses and fit-out contractors. Window graphics, wall
            wraps, frosted film, retail graphics and commercial interior vinyls — white-label,
            fully documented, professional sign-off. Covering Fleetwood town centre, Freeport
            outlet and the north Fylde coast corridor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Fleetwood Installation Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Subcontract Installation Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Fleetwood context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Fleetwood and the north Fylde coast — the commercial geography
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Fleetwood FY7 sits at the northern tip of the Fylde peninsula, at the end of the
              A585 from junction 3 of the M55. The town is the commercial and retail centre for
              the Wyre coast — a catchment that includes Cleveleys FY5 to the south, the Wyre
              Dock regeneration zone to the north, and a belt of residential and light commercial
              development running down the coast towards Blackpool FY1.
            </p>
            <p>
              Freeport Fleetwood, the retail outlet centre on the Wyre Dock development zone,
              is the primary footfall generator for the Fleetwood area and produces consistent
              demand for retail graphics, window films, wayfinding vinyls and seasonal promotional
              installation across its branded retail units and food court spaces. For sign and
              print companies supplying the north Fylde retail and hospitality sector, Fleetwood
              is a regular stop on the Fylde coast programme.
            </p>
            <p>
              The wider FY7 and north Fylde commercial market extends along the A585 corridor
              to Poulton-le-Fylde FY6 and connects east to Preston PR1 via the A586. Cleveleys
              FY5, immediately south of Fleetwood on the coast road, is another active commercial
              centre with independent retail, hospitality units and the Morrisons Cleveleys
              anchored retail zone. All accessible on the same north Fylde visit.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Fleetwood and north Fylde
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, promotional
                seasonal graphics and decorative window vinyl across Fleetwood town centre and
                Freeport outlet units. You supply the printed material; we install to spec.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and internal graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall graphics, brand murals, wayfinding vinyls and feature wall wraps
                for retail, hospitality and commercial interiors across the Fleetwood and north
                Fylde coast area. Installation to flat, smooth and lightly textured wall surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Retail and outlet graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Freeport Fleetwood outlet unit graphics — seasonal changeovers, promotional
                campaigns, brand rollout installations and refurbishment graphics. Consistent
                standard across multiple units on the same programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics and vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor vinyl, directional floor graphics and promotional floor vinyls
                for retail and hospitality venues across Fleetwood and the Fylde coast. Applied
                to hard floor surfaces with appropriate anti-slip rated films for public areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fascia and shopfront vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Applied graphics on shopfront fascias, flat panel signs and building-mounted
                vinyl applications across Fleetwood town centre commercial properties on Lord
                Street and the Marine approach retail zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary hoarding graphics for development sites across the Wyre Dock
                regeneration zone and Fleetwood waterfront. Printed and cut hoarding panel
                wraps installed to site-safe specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract installation works with WRPX
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Installation only.</strong>{" "}
              You supply the printed or cut material. We arrive on site in Fleetwood, assess
              the surface condition, install to the agreed specification and provide photographic
              documentation before and after. No design, no print, no material supply — just
              clean, professional installation under your brand.
            </p>
            <p>
              <strong className="text-foreground">White-label throughout.</strong>{" "}
              We arrive in unbranded vehicles and carry all paperwork under your company name.
              The Fleetwood client sees your brand from first contact to sign-off. We provide
              before and after photography in whatever format your project management system requires.
            </p>
            <p>
              <strong className="text-foreground">Combinable with wider Fylde coast programmes.</strong>{" "}
              Fleetwood is most efficiently visited as part of a north Fylde day combining
              Fleetwood FY7, Cleveleys FY5, Blackpool FY1–FY4 and Kirkham PR4 on the same
              southbound run. We schedule multi-site Fylde coast programmes with a single mobilisation
              from South Yorkshire — reducing your per-site travel cost significantly.
            </p>
            <p>
              <strong className="text-foreground">Reliable, documented, repeatable.</strong>{" "}
              Every Fleetwood installation is completed to a consistent standard, documented
              with site photography and reported back to you on the day. The same approach at
              every site — suitable for brand rollout, seasonal campaigns and multi-site
              refurbishment programmes across the north Fylde coast.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Fleetwood subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby areas we cover on the same visit
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {nearbyPages.map(({ href, label, desc }) => (
              <Link key={href} href={href} className="card-float p-5 hover:border-accent/60 transition-colors">
                <h3 className="font-semibold text-foreground">{label}</h3>
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
              Sign company or print house with work in Fleetwood?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the job — surfaces, quantities, access and deadline — and we&apos;ll
              confirm availability and price. White-label, photographed, professionally done.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Fleetwood Installation Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
