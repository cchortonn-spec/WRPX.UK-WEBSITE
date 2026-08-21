import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Hartlepool — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Hartlepool and the TS24–TS26 postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Hartlepool town centre, Wynyard Business Park, the Marina and the TS24–TS26 arc — white-label, photographic sign-off, A1(M) and A19 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hartlepool/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Hartlepool — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Hartlepool and the TS24–TS26 postcode zone. White-label available. WRPX covers Hartlepool town centre TS24, Hartlepool Marina TS24, Wynyard Business Park TS22, Billingham TS23, the TS25–TS26 residential and commercial arc, and links to Teesside — A19 and A1(M) corridor from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Hartlepool", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-hartlepool/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Hartlepool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hartlepool is approximately 2 hours from our South Yorkshire base via the A1(M) north to junction 60 (Rushyford/Newton Aycliffe), then the A689 east to Hartlepool. Alternatively via the A1(M) to Darlington then the A689 east — similar journey time. The A19 from Teesside connects Hartlepool to Middlesbrough (20 minutes) and Sunderland (35 minutes). For programmes combining Hartlepool with Middlesbrough, Stockton-on-Tees or Darlington, we plan them as a TS/DL corridor day from the same run north.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Hartlepool and TS postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Hartlepool and TS postcode work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Hartlepool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Hartlepool's commercial stock includes the Middleton Grange Shopping Centre, the Marina retail and leisure development, and a mix of Victorian commercial frontages on Church Street and Park Road.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Hartlepool and Middlesbrough on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Hartlepool and Middlesbrough are approximately 20 minutes apart via the A19. For sign companies running A19 corridor programmes covering the TS postcode zone, combining Hartlepool TS24–TS26 with Middlesbrough TS1–TS6 in the same day is efficient. Hartlepool town centre and Marina in the morning, A19 south to Middlesbrough in the afternoon — with Stockton-on-Tees (TS18, 15 minutes from Hartlepool) as a natural intermediate stop.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Wynyard Business Park from Hartlepool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wynyard Business Park (TS22) is approximately 12 minutes south-west of Hartlepool town centre. Wynyard is a substantial business park housing a mix of office, manufacturing and distribution occupiers — a common location for fleet livery, office graphics and building fascia work. For programmes covering both Hartlepool town centre and Wynyard, we plan the day in sequence — Wynyard first off the A689, then town centre. Billingham (TS23, adjacent to Wynyard) is a further 5 minutes and can be added to the same run.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Hartlepool?",
    a: "Hartlepool is approximately 2 hours from our South Yorkshire base via the A1(M) north to junction 60 (Rushyford/Newton Aycliffe), then the A689 east to Hartlepool. Alternatively via the A1(M) to Darlington then the A689 east — similar journey time. The A19 from Teesside connects Hartlepool to Middlesbrough (20 minutes) and Sunderland (35 minutes). For programmes combining Hartlepool with Middlesbrough, Stockton-on-Tees or Darlington, we plan them as a TS/DL corridor day from the same run north.",
  },
  {
    q: "Do you work white-label on Hartlepool and TS postcode jobs?",
    a: "Yes — white-label is standard on all Hartlepool and TS postcode work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
  },
  {
    q: "What types of vinyl installation do you cover in Hartlepool?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, hoarding graphics, office interior graphics and retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Hartlepool's commercial stock includes the Middleton Grange Shopping Centre, the Marina retail and leisure development, and a mix of Victorian commercial frontages on Church Street and Park Road.",
  },
  {
    q: "Can you cover Hartlepool and Middlesbrough on the same programme?",
    a: "Yes — Hartlepool and Middlesbrough are approximately 20 minutes apart via the A19. For sign companies running A19 corridor programmes covering the TS postcode zone, combining Hartlepool TS24–TS26 with Middlesbrough TS1–TS6 in the same day is efficient. Hartlepool town centre and Marina in the morning, A19 south to Middlesbrough in the afternoon — with Stockton-on-Tees (TS18, 15 minutes from Hartlepool) as a natural intermediate stop.",
  },
  {
    q: "Can you cover Wynyard Business Park from Hartlepool?",
    a: "Yes — Wynyard Business Park (TS22) is approximately 12 minutes south-west of Hartlepool town centre. Wynyard is a substantial business park housing a mix of office, manufacturing and distribution occupiers — a common location for fleet livery, office graphics and building fascia work. For programmes covering both Hartlepool town centre and Wynyard, we plan the day in sequence — Wynyard first off the A689, then town centre. Billingham (TS23, adjacent to Wynyard) is a further 5 minutes and can be added to the same run.",
  },
];

export default function SubcontractVinylInstallerHartlepoolPage() {
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

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Hartlepool &amp; the TS24–TS26 Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer Hartlepool
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label vinyl installation across Hartlepool and the TS24–TS26 postcode
            zone for sign companies, print houses and fit-out contractors. Hartlepool town centre, the
            Marina, Wynyard Business Park and the wider TS arc — A1(M) and A19 corridor from South
            Yorkshire. Unbranded vehicles, your paperwork, photographic sign-off standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Hartlepool Installation Quote →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Hartlepool and TS postcode coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hartlepool town centre (TS24)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Middleton Grange Shopping Centre, Church Street commercial zone, Whitby Street,
                York Road and the town centre retail and office core. Victorian and Edwardian
                commercial frontages alongside modern retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Hartlepool Marina (TS24)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The Marina retail, restaurant and leisure quarter. Modern commercial premises,
                hospitality venues and mixed-use development — a common location for interior
                graphics, window film and branding work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Wynyard Business Park (TS22)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Major business park 12 minutes south-west of Hartlepool — office, manufacturing
                and distribution occupiers. Fleet livery, building fascia graphics and office
                interior graphics are common here.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Billingham (TS23)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Adjacent to Wynyard, Billingham Forum and Billingham town centre commercial area.
                Combined efficiently with Wynyard on the same programme day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">TS25–TS26 residential and retail arc</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seaton Carew (TS25), Hartlepool West TS26 — coastal and residential commercial
                areas, neighbourhood retail, leisure venues and community buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">TS corridor links</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Middlesbrough (20 min via A19), Stockton-on-Tees (15 min via A689/A135),
                Darlington (25 min via A689) — all combinable in a single programme day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Hartlepool
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Window graphics, frosted and decorative window film</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Wall wraps and large-format wall graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Floor graphics and floor vinyl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Shop front and fascia vinyl graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Vehicle wraps and fleet livery</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Hoarding graphics (construction and temporary systems)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Wayfinding and directional vinyl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Office interior graphics and manifestation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Retail and hospitality interior graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Exhibition and event graphics installation</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-muted">
            Installation only — you supply the printed or cut material, we assess, prepare and
            install to spec. We do not carry inventory stock.
          </p>
        </div>
      </section>

      {/* Route */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to Hartlepool from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Hartlepool is approximately 2 hours via the A1(M) north —
              A1(M) to junction 60 (Rushyford), then A689 east to Hartlepool. Alternatively A1(M) to
              Darlington (junction 59), then A689 east, which passes through Billingham and Wynyard
              Business Park on the way in — useful for sequencing a Wynyard-first, town-centre-second day.
            </p>
            <p>
              The A19 connects Hartlepool directly to Middlesbrough (20 minutes south via A689/A19)
              and Sunderland (35 minutes north via A19). For sign companies running TS/DL corridor
              programmes — covering Darlington, Middlesbrough, Stockton and Hartlepool in one circuit
              — the A19 and A689 make Hartlepool a natural stop on that route rather than a standalone
              deviation.
            </p>
            <p>
              <strong className="text-foreground">Corridor efficiency.</strong> Hartlepool TS24–TS26 +
              Middlesbrough TS1–TS6 + Stockton TS18 in a single day works well for sign companies with
              multiple jobs in the TS zone. One crew, one set of travel costs, one day rate covering
              the whole TS postcode arc.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hartlepool installation questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby cities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby subcontract coverage
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Middlesbrough</h3>
              <p className="mt-2 text-sm text-muted">TS1–TS6 — 20 min via A19 from Hartlepool</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-darlington/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Darlington</h3>
              <p className="mt-2 text-sm text-muted">DL1–DL5 — 25 min via A689 from Hartlepool</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sunderland</h3>
              <p className="mt-2 text-sm text-muted">SR1–SR6 — 35 min via A19 from Hartlepool</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-gateshead/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Gateshead &amp; Newcastle</h3>
              <p className="mt-2 text-sm text-muted">NE1–NE10 — 55 min via A19 from Hartlepool</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-york/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">York</h3>
              <p className="mt-2 text-sm text-muted">YO1 — on the A1(M) corridor south</p>
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Yorkshire Subcontract Hub</h3>
              <p className="mt-2 text-sm text-muted">Full UK coverage map and all city pages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need vinyl installation in Hartlepool?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, material spec and access requirements — and we will
              come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Hartlepool Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
