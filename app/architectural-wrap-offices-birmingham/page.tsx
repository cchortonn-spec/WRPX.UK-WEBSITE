import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping Birmingham | Desks, Panels & Surfaces | WRPX",
  description:
    "Office interior vinyl wrapping in Birmingham — reception desks, breakout kitchen surfaces, meeting room panels and built-in office furniture. WRPX covers Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, Mailbox B1, Digbeth B5, Solihull B90 and all Birmingham office districts. Overnight and weekend installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping Birmingham — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors in Birmingham and the West Midlands. Reception desk fascias, breakout kitchen unit doors and drawer fronts, meeting room wall panels and furniture, built-in joinery and internal door faces. Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, Mailbox B1, Digbeth B5, Snow Hill B4, Solihull B90 and all Birmingham office districts. Works around your schedule — evenings, weekends or phased installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Birmingham Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install office vinyl wrapping in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Birmingham from our South Yorkshire base. Birmingham is approximately 1 hour 30 minutes via the M1 south to the M6 Toll or M6 junction 6. We cover all Birmingham office districts: Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, the Mailbox B1, Snow Hill B4, Digbeth B5, Solihull B90 M42 corridor and all West Midlands business parks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around our Birmingham office schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — evening and weekend installation is standard for occupied Birmingham offices. Reception desks and communal breakout areas are typically done out of hours. For phased programmes across multiple floors or zones, we agree a daytime or out-of-hours schedule with your Birmingham facilities manager or fit-out project manager before any programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces in Birmingham can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen unit doors and drawer fronts, meeting room furniture panels, wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Birmingham programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Birmingham fit-out contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is available for all Birmingham office work. We attend under your fit-out company name, carry your paperwork, report to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Birmingham programme.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Birmingham office fit-outs spanning multiple floors or zones are scoped individually — we survey the space and give you a realistic programme timeline before any commitment.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install office vinyl wrapping in Birmingham?",
    a: "Yes — we travel to Birmingham from our South Yorkshire base. Birmingham is approximately 1 hour 30 minutes via the M1 south to the M6 Toll or M6 junction 6. We cover all Birmingham office districts: Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, the Mailbox B1, Snow Hill B4, Digbeth B5, Solihull B90 M42 corridor and all West Midlands business parks.",
  },
  {
    q: "Can you work around our Birmingham office schedule?",
    a: "Yes — evening and weekend installation is standard for occupied Birmingham offices. Reception desks and communal breakout areas are typically done out of hours. For phased programmes across multiple floors or zones, we agree a daytime or out-of-hours schedule with your Birmingham facilities manager or fit-out project manager before any programme begins.",
  },
  {
    q: "What office surfaces in Birmingham can be vinyl wrapped?",
    a: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen unit doors and drawer fronts, meeting room furniture panels, wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Birmingham programme begins.",
  },
  {
    q: "Do you work white-label for Birmingham fit-out contractors?",
    a: "Yes — white-label is available for all Birmingham office work. We attend under your fit-out company name, carry your paperwork, report to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Birmingham programme.",
  },
  {
    q: "How long does office vinyl wrapping take in Birmingham?",
    a: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Birmingham office fit-outs spanning multiple floors or zones are scoped individually — we survey the space and give you a realistic programme timeline before any commitment.",
  },
];

export default function ArchitecturalWrapOfficesBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Birmingham Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office interior vinyl wrapping in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office interiors across Birmingham and the West Midlands — reception
            desks, breakout kitchen surfaces, meeting room panels and built-in furniture in
            commercial-grade architectural film. Colmore Row, Brindleyplace, Jewellery Quarter,
            Mailbox and Solihull. Evening and weekend installation works around your office —
            no trading disruption.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Office Survey →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham office context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s office market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the largest commercial office market outside London. The core
              of the market is anchored on two distinct zones: the Colmore Business District
              (CBD) — centred on Colmore Row B3, Newhall Street B3 and Snow Hill B4 —
              where the major professional services, financial, legal and public-sector
              occupiers concentrate; and Brindleyplace B1, the canalside mixed-use
              development that houses some of Birmingham&apos;s best-known corporate office
              occupiers in a purpose-built environment. Both zones have undergone sustained
              occupier churn and refurbishment activity through the 2020s.
            </p>
            <p>
              The Colmore Row and Snow Hill cluster contains Birmingham&apos;s highest density
              of Grade A refurbished office space. Much of this stock dates to the 1980s
              and 1990s original build, with successive refurbishment cycles bringing
              interiors to modern specification — but often leaving fitted joinery, breakout
              kitchen units, reception desk fascias and meeting room furniture from a
              previous refurbishment that no longer matches the current finish standard.
              Architectural vinyl wrapping is the fastest and most cost-effective route to
              a consistent, refreshed commercial specification without full joinery replacement.
            </p>
            <p>
              The Jewellery Quarter B1 has developed a strong secondary office market
              alongside its hospitality and creative sectors. Its converted Victorian
              industrial buildings suit a design-led finish specification — brushed metal-effect,
              dark woodgrain, concrete-effect — that architectural film delivers without the
              cost of bespoke joinery. Digbeth B5 to the south-east is an emerging office
              location particularly associated with creative, technology and media occupiers,
              where interior fit-out standards reflect that occupier demographic.
            </p>
            <p>
              The M42 corridor — Solihull B90, Birmingham Business Park B37, Longbridge B31
              and the wider West Midlands business park market — represents a significant
              secondary layer of Birmingham office work. Out-of-town business parks in this
              zone hold occupier stock from the mid-1990s through mid-2000s that is entering
              sustained refurbishment cycles as lease events and post-pandemic occupier
              reconfiguration drive interior investment.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Birmingham office interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-visibility surface in any Birmingham office. Wrapping a dated
                reception fascia in a new architectural film — stone-effect, brushed metal,
                matte black, warm oak — is a high-impact refresh completed typically in a
                half-day or evening session without any structural alteration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchens and staff areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Unit doors, drawer fronts and end panels in Birmingham office breakout
                and staff areas. A standard 15–20 door unit wraps in a single day.
                Commonly specified as part of a broader Birmingham office refurbishment
                or fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in meeting room furniture, wall panels, credenza doors and presentation
                wall fascias. A consistent film specification across multiple Birmingham
                meeting rooms achieves a coordinated fit-out standard without bespoke
                joinery replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal office door faces wrapped to update an outdated finish or achieve
                consistency with a new specification — particularly useful where door
                replacement would require fire-door recertification or significant disruption
                to a live Birmingham floor plate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Built-in joinery and shelving</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bespoke office joinery, shelving surrounds and partitioned storage panels.
                Where existing Birmingham office joinery is structurally sound but
                visually mismatched with a new specification, wrapping delivers visual
                consistency at a fraction of replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and columns</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Architectural film on wall panels and exposed columns — woodgrain, stone,
                concrete-effect, solid brand colours — in Colmore Row, Brindleyplace and
                Jewellery Quarter offices where film achieves a premium finish specification
                without costly cladding or replastering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Birmingham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Birmingham offices — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is approximately 1 hour 30 minutes from our South Yorkshire base
              via the M1 south to junction 19 (M6 Toll) or junction 21a (M6), then the M6
              into the city centre. For Colmore Row, Snow Hill and Brindleyplace, the A38(M)
              Aston Expressway approach is most direct from the M6. For the Jewellery Quarter
              B1, the B4 approach from Hockley works well. For the M42 corridor business
              parks — Solihull B90, Birmingham Business Park B37 — the M42 junctions 4 and 6
              are the standard approach.
            </p>
            <p>
              For occupied Birmingham offices, evenings and weekends are our standard
              working pattern — particularly for reception desks and breakout communal
              areas where daytime access would affect staff or clients. Larger Birmingham
              programmes across multiple floors or zones are phased in agreement with your
              facilities manager or fit-out project manager. We agree the full programme
              schedule before any work begins.
            </p>
            <p>
              Birmingham sits at the centre of the West Midlands motorway network. For
              fit-out contractors managing multi-site programmes across the region, one
              Birmingham visit can combine with Coventry (20 miles east via M6), Wolverhampton
              (12 miles west via M6), Leicester (40 miles north-east via M42/A46) or
              Solihull and the M42 corridor without separate mobilisation per site.
              Consistent crew, consistent reporting format, same sign-off standard across
              all West Midlands sites.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham office vinyl wrapping — common questions
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
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Birmingham office glass partitions and meeting rooms.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Birmingham</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Birmingham.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for restaurant and bar interiors across Birmingham — overnight installation.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning an office fit-out or refurbishment in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office vinyl wrapping programmes across Birmingham and
              the West Midlands. Tell us the space, surfaces and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and what
              it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Birmingham Office Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
