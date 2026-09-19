import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping Coventry | Desks, Panels & Surfaces | WRPX",
  description:
    "Office interior vinyl wrapping in Coventry — reception desks, breakout kitchen surfaces, meeting room panels and built-in office furniture. WRPX covers Coventry city centre CV1, Friargate business district, Belgrade Quarter, Coventry Business Park CV3, Solihull B90 and all Coventry and Warwickshire office locations. Overnight and weekend installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping Coventry — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors in Coventry and Warwickshire. Reception desk fascias, breakout kitchen unit doors and drawer fronts, meeting room wall panels and furniture, built-in joinery and internal door faces. Coventry city centre CV1, Friargate CV1, Belgrade Quarter CV1, Coventry Business Park CV3, Binley Business Park CV3, Solihull B90 and all Coventry and Warwickshire office districts. Works around your schedule — evenings, weekends or phased installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Coventry Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install office vinyl wrapping in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Coventry from our South Yorkshire base. Coventry is approximately 1 hour 30 minutes via the M1 south to junction 21 (M6/M69 interchange at Leicester), then south on the M69 directly into Coventry — or via the M1 south to junction 19, then west on the M6 to junction 2 (Coventry East). We cover all Coventry office locations: Friargate CV1, Belgrade Quarter CV1, Coventry city centre CV1, Coventry Business Park CV3, Binley Business Park CV3, the M6 corridor business parks, Solihull B90 and the wider Warwickshire commercial market.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around our Coventry office schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — evening and weekend installation is standard for occupied Coventry offices. Reception desks and communal breakout areas are typically done out of hours. For phased programmes across multiple floors or zones — particularly in the Friargate development or Belgrade Quarter — we agree a full programme schedule with your Coventry facilities manager or fit-out project manager before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces in Coventry can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen unit doors and drawer fronts, meeting room furniture panels, wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Coventry programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Coventry fit-out contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is available for all Coventry office work. We attend under your fit-out company name, carry your paperwork, report to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Coventry programme.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Coventry office fit-outs spanning multiple floors or zones — as is common in the Friargate development — are scoped individually at survey and given a realistic programme timeline before any commitment.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function ArchitecturalWrapOfficesCoventryPage() {
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
            <Link href="/architectural-wrap-offices/" className="text-accent hover:underline">Office Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Coventry &amp; Warwickshire Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office interior vinyl wrapping in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office interiors across Coventry and Warwickshire — reception
            desks, breakout kitchen surfaces, meeting room panels and built-in furniture
            in commercial-grade architectural film. Friargate, Belgrade Quarter, Coventry
            Business Park and Solihull. Evening and weekend installation works around
            your office — no disruption to trading or occupancy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Office Survey →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry office context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s office market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry has one of the most actively developing commercial office
              markets in the Midlands. The most significant development is Friargate —
              the major mixed-use regeneration scheme immediately north of Coventry
              railway station on the former station car park land, delivering a sequence
              of Grade A office buildings to the city centre for the first time in
              decades. Friargate CV1 has already delivered significant occupier take-up
              from public-sector bodies, professional services and utilities, with
              further phases under development. These buildings have modern interior
              specifications — but reception desks, breakout kitchen units and meeting
              room furniture from earlier occupier fit-outs are already being refreshed
              as tenants renew or hand back space.
            </p>
            <p>
              The Belgrade Quarter — the established city-centre office cluster around
              Corporation Street CV1 and Greyfriars Road CV1 — holds a mix of 1980s
              and 1990s office buildings that have undergone successive occupier churn
              and partial refurbishment. These buildings typically have reception desks,
              breakout kitchen units and meeting room furniture from a previous fit-out
              cycle that no longer matches the current specification standard. Architectural
              vinyl wrapping is the most cost-effective route to a refreshed, coordinated
              interior specification without full joinery replacement.
            </p>
            <p>
              Coventry Business Park CV3 and Binley Business Park CV3 — the main
              out-of-town office and industrial/office cluster to the south-east of
              the city — hold substantial occupier stock from the mid-1990s through
              mid-2000s that is entering sustained refurbishment cycles as leases
              expire and post-pandemic occupier reconfiguration drives interior
              investment. Business park breakout kitchens, reception areas and
              meeting rooms represent the core of the architectural wrap workload
              in this zone.
            </p>
            <p>
              Coventry sits at the western end of the M6/M69 corridor from Leicester
              and the M45/A45 from the M1. For fit-out contractors managing programmes
              across the East and West Midlands, Coventry is a natural anchor — one
              visit can combine with Birmingham (20 miles west via M6), Leamington Spa
              (10 miles south via A46), Solihull (15 miles west via M6/M42) or Leicester
              (25 miles east via M69) without separate mobilisation per site.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Coventry office interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-visibility surface in any Coventry office. Wrapping a dated
                reception fascia in a new architectural film — stone-effect, brushed metal,
                matte black, warm oak — is a high-impact refresh completed typically in a
                half-day or evening session without any structural alteration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchens and staff areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Unit doors, drawer fronts and end panels in Coventry office breakout
                and staff areas. A standard 15–20 door unit wraps in a single day.
                Commonly specified as part of a broader Coventry office refurbishment
                or fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in meeting room furniture, wall panels, credenza doors and
                presentation wall fascias. A consistent film specification across
                multiple Coventry meeting rooms achieves a coordinated fit-out
                standard without bespoke joinery replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal office door faces wrapped to update an outdated finish or
                achieve consistency with a new specification — particularly useful
                where door replacement would require fire-door recertification or
                significant disruption to a live Coventry floor plate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Built-in joinery and shelving</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bespoke office joinery, shelving surrounds and partitioned storage panels.
                Where existing Coventry office joinery is structurally sound but visually
                mismatched with a new specification, wrapping delivers visual consistency
                at a fraction of replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and columns</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Architectural film on wall panels and exposed columns — woodgrain, stone,
                concrete-effect, solid brand colours — in Friargate, Belgrade Quarter and
                Coventry Business Park offices where film achieves a premium finish
                specification without costly cladding or replastering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Coventry offices */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Coventry offices — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is approximately 1 hour 30 minutes from our South Yorkshire base.
              The most efficient route is the M1 south to junction 21 (M6/M69 interchange),
              then south on the M69 directly to Coventry — arriving at the eastern edge
              of the city close to Binley Business Park and Coventry Business Park CV3.
              For Friargate and the city-centre CV1 offices, the M6 junction 2 approach
              from the east is the most direct — a clear route from the M1/M69 junction
              into the city centre in approximately 15 minutes.
            </p>
            <p>
              For occupied Coventry offices, evenings and weekends are our standard
              working pattern — particularly for reception desks and breakout communal
              areas where daytime access would affect staff or visitors. Larger Coventry
              programmes across multiple floors or zones in the Friargate development
              are phased in agreement with your facilities manager or fit-out project
              manager. We agree the full programme schedule before any work begins.
            </p>
            <p>
              Coventry sits at the junction of the M6, M69, M45 and A46 — at the centre
              of the Midlands motorway network. For fit-out contractors managing multi-site
              programmes across the region, one Coventry visit can efficiently combine
              with Birmingham (junction 2 M6 to city centre, 20 miles), Solihull (M42
              junction 6, 15 miles), Leamington Spa (A46 south, 10 miles) or Leicester
              (M69 north, 25 miles) on the same day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry office vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-offices/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all office interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Coventry office glass partitions and meeting rooms.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Coventry</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Coventry and Warwickshire.</p>
            </Link>
            <Link href="/architectural-wrap-offices-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Office interior wrapping across Birmingham and the West Midlands — Colmore Row, Brindleyplace, Jewellery Quarter and Solihull.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning an office fit-out or refurbishment in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office vinyl wrapping programmes across Coventry and
              Warwickshire. Tell us the space, surfaces and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and
              what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Coventry Office Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
