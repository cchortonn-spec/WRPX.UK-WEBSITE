import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Kirkham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Kirkham and the PR4 zone for sign companies, print houses and fit-out contractors. WRPX covers Kirkham town centre, the A583 Fylde corridor, Wesham retail zone and all Fylde coast market towns. Easily combined with Lytham St Annes, Preston or Blackpool on the same programme.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-kirkham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Kirkham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Kirkham and the PR4 zone. White-label available. WRPX covers Kirkham town centre, the A583 Fylde corridor, the Wesham business and retail zone, and the wider Fylde coast market town area."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Kirkham", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-kirkham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Kirkham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kirkham is approximately 1 hour 20 minutes from our South Yorkshire base via the M62 west and M55 north to junction 3, then the A585 into Kirkham — approximately 85 miles door to door. Kirkham PR4 sits on the A583 Fylde corridor between Preston (8 miles east) and Blackpool (8 miles north-west), with Lytham St Annes FY8 just 5 miles south-west.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Kirkham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Kirkham and PR4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Kirkham with Lytham St Annes or Blackpool on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the most efficient way to run Fylde coast programmes. Kirkham sits centrally on the A583 with Lytham St Annes FY8 just 5 miles south-west and Blackpool FY1–FY4 8 miles north-west. Preston PR1 is 8 miles east. A single day from South Yorkshire covers Kirkham, Lytham and Blackpool without separate mobilisations — three Fylde coast locations in one visit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Kirkham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Kirkham's commercial core centres on Poulton Street PR4, the Wesham retail zone on the A585 and the mixed commercial properties on the A583 Fylde road.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the surrounding Fylde area near Kirkham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Kirkham is the market town for the Fylde district and sits within a cluster of smaller Fylde towns and villages. Wesham PR4 (adjacent), Freckleton PR4 (5 miles south), Warton PR4 (4 miles south-west), Wrea Green PR4 (2 miles south) and the BAE Systems Warton Aerodrome complex are all within our Kirkham-day coverage zone. The Fylde coast running south to Lytham and north to Blackpool is all accessible on the same visit.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Kirkham?",
    a: "Kirkham is approximately 1 hour 20 minutes from our South Yorkshire base via the M62 west and M55 north to junction 3, then the A585 into Kirkham — approximately 85 miles door to door. Kirkham PR4 sits on the A583 Fylde corridor between Preston (8 miles east) and Blackpool (8 miles north-west), with Lytham St Annes FY8 just 5 miles south-west.",
  },
  {
    q: "Do you work white-label in Kirkham?",
    a: "Yes — white-label is standard on all Kirkham and PR4 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site, on vehicles or on any documentation.",
  },
  {
    q: "Can you combine Kirkham with Lytham St Annes or Blackpool on the same programme?",
    a: "Yes — and this is the most efficient way to run Fylde coast programmes. Kirkham sits centrally on the A583 with Lytham St Annes FY8 just 5 miles south-west and Blackpool FY1–FY4 8 miles north-west. Preston PR1 is 8 miles east. A single day from South Yorkshire covers Kirkham, Lytham and Blackpool without separate mobilisations — three Fylde coast locations in one visit.",
  },
  {
    q: "What types of vinyl installation do you cover in Kirkham?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Kirkham's commercial core centres on Poulton Street PR4, the Wesham retail zone on the A585 and the mixed commercial properties on the A583 Fylde road.",
  },
  {
    q: "Do you cover the surrounding Fylde area near Kirkham?",
    a: "Yes — Kirkham is the market town for the Fylde district and sits within a cluster of smaller Fylde towns and villages. Wesham PR4 (adjacent), Freckleton PR4 (5 miles south), Warton PR4 (4 miles south-west), Wrea Green PR4 (2 miles south) and the BAE Systems Warton Aerodrome complex are all within our Kirkham-day coverage zone. The Fylde coast running south to Lytham and north to Blackpool is all accessible on the same visit.",
  },
];

const nearbyPages = [
  { href: "/subcontract-vinyl-installer-lytham-st-annes/", label: "Lytham St Annes FY8", desc: "5 miles south-west via A584" },
  { href: "/subcontract-vinyl-installer-blackpool/", label: "Blackpool FY1–FY4", desc: "8 miles north-west via A583" },
  { href: "/subcontract-vinyl-installer-preston/", label: "Preston PR1", desc: "8 miles east via A583" },
  { href: "/subcontract-vinyl-installer-garstang/", label: "Garstang PR3", desc: "14 miles north via A6" },
];

export default function SubcontractVinylInstallerKirkhamPage() {
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
            <span className="text-foreground">Kirkham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Vinyl Installation · Kirkham PR4
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer — Kirkham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Kirkham and the PR4 zone for
            sign companies, print houses and fit-out contractors. White-label as standard.
            Kirkham sits on the Fylde corridor between Preston, Lytham St Annes and Blackpool
            — easily combined with any of these on the same programme. Call or email to
            discuss Kirkham and Fylde coast work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Kirkham Subcontract Work →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Kirkham context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kirkham — Fylde market town on the A583 corridor
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kirkham is the main market town for the Fylde district of Lancashire, sitting
              on the A583 between Preston to the east and Blackpool to the north-west. The
              town is easily reached from the M55 via junction 3 and the A585 — approximately
              85 miles from our South Yorkshire base. Kirkham PR4&apos;s central Fylde position
              means a single day from our base covers Kirkham, Lytham St Annes and Blackpool
              without separate mobilisation costs.
            </p>
            <p>
              Kirkham&apos;s commercial activity centres on Poulton Street and the town market area,
              with the adjacent settlement of Wesham providing a concentration of retail and
              trade premises along the A585. The BAE Systems complex at Warton Aerodrome —
              4 miles south-west — generates significant business services and commercial
              activity in the Kirkham area.
            </p>
            <p>
              For sign companies running Fylde coast programmes, Kirkham sits at the centre
              of the network. Preston to the east on the M55, Lytham St Annes and the Clifton
              Street shopping area to the south-west, and Blackpool with its concentration of
              hospitality and retail premises to the north — all reachable on a single day
              from our base without separate mobilisations.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Kirkham and the Fylde
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front window graphics, frosted and etched-effect privacy film, decorative
                window vinyl and manifestation for Kirkham retail, hospitality and commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall graphics, feature wall wraps, office interior vinyl and canteen graphics
                across Kirkham and Wesham commercial properties and the Fylde business zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front cut vinyl lettering, fascia graphics and promotional window graphics
                for Kirkham Poulton Street and Wesham retail premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wayfinding and directional vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal wayfinding vinyls, floor graphics, door identification vinyls and
                accessibility signage across Kirkham commercial and public buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and promotional graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Construction hoarding graphics, promotional vinyls and temporary vinyl
                installations for Kirkham and the wider Fylde development zones.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor graphics, promotional floor vinyl and directional floor graphics
                for Kirkham and Fylde coast retail, hospitality and commercial spaces.
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
            Kirkham subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got Kirkham or Fylde coast work coming up?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, surface, material size and access
              requirements. We&apos;ll confirm availability and provide a subcontract rate the
              same day. White-label as standard. No WRPX branding on site or on any
              documentation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Kirkham Subcontract Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
