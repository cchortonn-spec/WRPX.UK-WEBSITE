import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Birmingham | Fixtures, Counters & Surfaces | WRPX",
  description:
    "Retail interior vinyl wrapping in Birmingham — counter fascias, display fixtures, shelving surrounds, cash desk panels and fitted retail furniture. WRPX covers Bullring B5, Grand Central B5, Selfridges, the Mailbox B1, Jewellery Quarter B1 and all Birmingham retail districts. Overnight installation, no trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Birmingham — counters, fixtures and fitted surfaces",
  "Architectural vinyl wrapping for retail interiors across Birmingham and the West Midlands. Counter fascias, display fixture panels, cash desk surrounds, shelving ends, changing room doors and fitted furniture in commercial-grade architectural film. Bullring B5, Grand Central B5, Selfridges B5, the Mailbox B1, Jewellery Quarter B1, Jewellery Quarter independent retail, Brindleyplace B1, Solihull B91 and all Birmingham retail districts. Overnight and out-of-hours installation — no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/architectural-wrap-retail-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Birmingham and all B postcodes. Bullring B5, Grand Central B5, Selfridges B5, the Mailbox B1, Jewellery Quarter B1, Brindleyplace B1, Solihull B91, Merry Hill DY5 and across the West Midlands retail market. Birmingham is approximately 1 hour 30 minutes from our South Yorkshire base via the M1 and M6 Toll.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install overnight without closing the Birmingham store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight installation is standard across Birmingham retail. A counter fascia or display fixture typically wraps in a single overnight session. For larger programmes — multiple zones, full-unit refreshes, multi-store Birmingham rollouts — we phase across successive overnight windows so each area is affected for one night only.",
      },
    },
    {
      "@type": "Question",
      name: "What retail surfaces in Birmingham can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and cash desk panels, display fixture panels and shelving end caps, gondola end panels, changing room door faces, built-in feature wall panelling, service desk surrounds and fitted storage unit doors. Surfaces must be flat or near-flat and in sound condition — we assess suitability at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Birmingham retail fit-out contractors and brand teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label available for all Birmingham retail fit-out work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. Useful for fit-out contractors and brand rollout managers with Birmingham and West Midlands multi-site programmes requiring consistent installation standard across all locations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Bullring, Grand Central and the Mailbox on the same visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — all three are within central Birmingham and can be combined on a single visit or phased overnight programme. The Bullring and Grand Central B5 are adjacent. The Mailbox B1 is a short distance west via the canal. For multi-unit Birmingham programmes across different retail destinations, phased overnight scheduling covers multiple sites efficiently.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors in Birmingham?",
    a: "Yes — we cover Birmingham and all B postcodes. Bullring B5, Grand Central B5, Selfridges B5, the Mailbox B1, Jewellery Quarter B1, Brindleyplace B1, Solihull B91, Merry Hill DY5 and across the West Midlands retail market. Birmingham is approximately 1 hour 30 minutes from our South Yorkshire base via the M1 and M6 Toll.",
  },
  {
    q: "Can you install overnight without closing the Birmingham store?",
    a: "Yes — overnight installation is standard across Birmingham retail. A counter fascia or display fixture typically wraps in a single overnight session. For larger programmes — multiple zones, full-unit refreshes, multi-store Birmingham rollouts — we phase across successive overnight windows so each area is affected for one night only.",
  },
  {
    q: "What retail surfaces in Birmingham can be vinyl wrapped?",
    a: "Counter fascias and cash desk panels, display fixture panels and shelving end caps, gondola end panels, changing room door faces, built-in feature wall panelling, service desk surrounds and fitted storage unit doors. Surfaces must be flat or near-flat and in sound condition — we assess suitability at survey.",
  },
  {
    q: "Do you work with Birmingham retail fit-out contractors and brand teams?",
    a: "Yes — white-label available for all Birmingham retail fit-out work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. Useful for fit-out contractors and brand rollout managers with Birmingham and West Midlands multi-site programmes requiring consistent installation standard across all locations.",
  },
  {
    q: "Can you cover Bullring, Grand Central and the Mailbox on the same visit?",
    a: "Yes — all three are within central Birmingham and can be combined on a single visit or phased overnight programme. The Bullring and Grand Central B5 are adjacent. The Mailbox B1 is a short distance west via the canal. For multi-unit Birmingham programmes across different retail destinations, phased overnight scheduling covers multiple sites efficiently.",
  },
];

export default function ArchitecturalWrapRetailBirminghamPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-retail/" className="text-accent hover:underline">Retail Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Birmingham Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Birmingham and the West Midlands — counter
            fascias, display fixtures, shelving surrounds and fitted retail furniture in
            commercial-grade architectural film. Bullring, Grand Central, Selfridges,
            the Mailbox, Jewellery Quarter and Solihull. Overnight installation keeps
            your Birmingham store trading throughout.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the largest retail market in England outside London. The city
              centre market is anchored by the Bullring B5 and Grand Central B5 — two of
              the highest-footfall retail destinations in the country — with Selfridges B5
              as the flagship department store at the Bullring&apos;s anchor. The Mailbox B1
              to the west offers an upmarket, brand-led retail format with fashion and
              lifestyle occupiers in a canal-side setting distinct from the main Bullring
              zone. Together these destinations account for a significant proportion of
              the brand refresh and fit-out activity WRPX serves in Birmingham.
            </p>
            <p>
              The Jewellery Quarter B1 is Birmingham&apos;s specialist independent and
              lifestyle retail zone. Its Victorian streetscape of converted workshop and
              showroom buildings creates a distinctive retail environment — independent
              jewellers, fashion boutiques, design retailers and artisan businesses whose
              interior specification reflects the Jewellery Quarter&apos;s design-conscious
              customer base. Refurbishment here tends to favour artisan and heritage-aligned
              finishes: warm woodgrain, dark matte, brushed metal-effect.
            </p>
            <p>
              The Solihull B91 and Touchwood Shopping Centre market provides a different
              retail profile: a high-density, managed-centre environment with fashion, homewares
              and casual dining occupiers whose brand refresh programmes are often centrally
              managed from head office and delivered by national fit-out contractors.
              Merry Hill DY5 in Dudley — approximately 10 miles west of Birmingham city
              centre — is one of the largest out-of-town retail parks in the West Midlands
              and generates regular fit-out and refresh activity across its 200-plus units.
            </p>
            <p>
              Across all Birmingham retail formats, the key driver for vinyl wrapping
              is speed and minimal trading disruption: brand refresh programmes are
              delivered overnight, store closures are avoided, and the wrapped result
              is visually indistinguishable from new joinery at a fraction of replacement cost.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Birmingham retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and cash desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary customer-facing surface in any Birmingham retail unit. Wrapping
                a dated counter fascia or cash desk surround overnight delivers a fully
                refreshed look aligned to current brand specification — no structural work,
                no procurement lead time.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Display fixture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixture panel faces, gondola end panels and shelving unit end caps across
                Birmingham retail floors. Film-wrapped fixture panels deliver brand colour
                and finish consistency faster than replacement or repainting, with no
                disruption to merchandise display during the Birmingham programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Changing room doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Changing room door faces wrapped to update an outdated finish or achieve
                consistency with a refreshed Birmingham shopfit. A set of changing room
                doors typically wraps in a single overnight session — no disruption to
                daytime trading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels and feature wall sections in Birmingham retail interiors
                wrapped in woodgrain, stone, concrete-effect or solid brand colour. High-impact
                visual refresh without replastering, recladding or repainting.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Service desks and kiosks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Customer service desk fascias and kiosk panels in Birmingham retail and
                leisure environments. A service desk wrap can be completed in a single
                overnight or early-morning session before trading begins.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Storage and back-of-house units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in storage units, staff area joinery and fitted back-of-house
                furniture. Where existing Birmingham retail back-of-house joinery is
                sound but dated, wrapping achieves an acceptable specification at
                minimal cost and disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No-closure / overnight */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No closure. Overnight installation across Birmingham retail.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Birmingham&apos;s managed retail centres operate late daily and require a
              closure-free approach for any fit-out or refresh work. We work overnight
              or early-morning as standard across Birmingham — completing installation
              between close of trading and the morning opening. The Bullring and Grand
              Central have established contractor access procedures for overnight
              installation teams; we are experienced working within managed-centre
              access regimes.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter
              fascia, fixture panel refresh or changing room door set typically completes
              in one overnight session in Birmingham. Two installers working from
              close-of-trade to centre opening can achieve a meaningful scope without
              any trading impact on the Birmingham unit.
            </p>
            <p>
              <strong className="text-foreground">Phased multi-unit programmes.</strong> For
              a larger Birmingham brand refresh — multiple units across the Bullring zone,
              or a combined Bullring, Mailbox and Touchwood programme — we phase across
              successive overnight windows. Each unit is affected for a maximum of one
              night; the programme can run over a week or more without any store closure.
            </p>
            <p>
              <strong className="text-foreground">West Midlands multi-site coverage.</strong>{" "}
              Birmingham sits at the centre of the West Midlands motorway network. A single
              mobilisation visit can combine Birmingham with Coventry (20 miles east via M6),
              Wolverhampton (12 miles west via M6), Solihull B91 (8 miles south-east) or Merry
              Hill DY5 (10 miles west) without separate mobilisation costs per site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham retail vinyl wrapping — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-retail/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all retail interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy, decorative and solar-control film for Birmingham shopfronts and glazed retail interiors.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Birmingham</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Birmingham.</p>
            </Link>
            <Link href="/architectural-wrap-retail-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Retail interior vinyl wrapping across Coventry — 20 miles east of Birmingham.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh or brand rollout in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Birmingham and the
              West Midlands. Tell us what surfaces you have and your access window —
              we&apos;ll give you a realistic overnight programme and fixed price.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Birmingham Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
