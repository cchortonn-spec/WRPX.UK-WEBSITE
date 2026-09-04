import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Birmingham | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Birmingham — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Overnight installation across the Jewellery Quarter B1, Digbeth, Brindleyplace, Broad Street and all Birmingham postcodes. No trading disruption. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Birmingham — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Birmingham and the West Midlands. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Jewellery Quarter B1, Digbeth B5, Brindleyplace B1, Broad Street B1, the Mailbox B1, Bullring B5, Bournville B30 and across the Birmingham and West Midlands hospitality market. Overnight installation works around trading hours — no closure required."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Birmingham and all B postcodes. Jewellery Quarter B1, Digbeth B5, Brindleyplace B1, Broad Street B1, the Mailbox B1, Bullring and Grand Central B5, Solihull B90 and across the West Midlands. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6 Toll. Free survey across the Birmingham zone, fixed price agreed before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Birmingham restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overnight and out-of-hours installation is our standard model across Birmingham restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted.",
      },
    },
    {
      "@type": "Question",
      name: "Which Birmingham restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Birmingham's restaurant and bar market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birmingham's hospitality market is one of the most diverse in England. The Jewellery Quarter and Digbeth lean towards industrial and heritage-inspired finishes — dark woodgrain, brushed metal-effect, weathered brick-effect vinyls and matte black. Brindleyplace and Broad Street operators serving the corporate and events market prefer cleaner premium finishes — polished stone-effect, warm oak, marble-effect. The Mailbox and the upmarket Edgbaston B15 dining scene demand aspirational finish specifications. We bring physical samples to every Birmingham survey.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Birmingham fit-out contractors and restaurant designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label available for all Birmingham hospitality fit-out work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Birmingham and the West Midlands where consistent installation standard is essential.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant interiors in Birmingham?",
    a: "Yes — we cover Birmingham and all B postcodes. Jewellery Quarter B1, Digbeth B5, Brindleyplace B1, Broad Street B1, the Mailbox B1, Bullring and Grand Central B5, Solihull B90 and across the West Midlands. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6 Toll. Free survey across the Birmingham zone, fixed price agreed before any commitment.",
  },
  {
    q: "Can you install without closing the Birmingham restaurant or bar?",
    a: "Yes. Overnight and out-of-hours installation is our standard model across Birmingham restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted.",
  },
  {
    q: "Which Birmingham restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "What film finishes suit Birmingham's restaurant and bar market?",
    a: "Birmingham's hospitality market is one of the most diverse in England. The Jewellery Quarter and Digbeth lean towards industrial and heritage-inspired finishes — dark woodgrain, brushed metal-effect, weathered brick-effect vinyls and matte black. Brindleyplace and Broad Street operators serving the corporate and events market prefer cleaner premium finishes — polished stone-effect, warm oak, marble-effect. The Mailbox and the upmarket Edgbaston B15 dining scene demand aspirational finish specifications. We bring physical samples to every Birmingham survey.",
  },
  {
    q: "Do you work with Birmingham fit-out contractors and restaurant designers?",
    a: "Yes — white-label available for all Birmingham hospitality fit-out work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Birmingham and the West Midlands where consistent installation standard is essential.",
  },
];

export default function ArchitecturalWrapRestaurantsBirminghamPage() {
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
            <Link href="/architectural-wrap-restaurants/" className="text-accent hover:underline">Restaurant Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Birmingham Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant, bar and caf&eacute; interiors across Birmingham and the
            West Midlands. Counter fascias, bar fronts, booth panels and fitted furniture
            wrapped overnight in commercial-grade architectural film — no closure, no trading
            disruption. We cover the full B postcode range: Jewellery Quarter B1, Digbeth B5,
            Brindleyplace B1, the Mailbox, Broad Street and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the largest hospitality market in England outside London. The city
              has undergone a sustained F&amp;B investment cycle since the mid-2010s — the
              Mailbox B1 redevelopment, the Grand Central B5 opening, the growth of Digbeth B5
              as an independent food and drink quarter, and the ongoing densification of the
              Jewellery Quarter B1 as a late-night and restaurant destination. This volume of
              activity generates a constant pipeline of fit-out, refresh and refurbishment
              programmes across the B postcode range.
            </p>
            <p>
              The Jewellery Quarter — Birmingham&apos;s most distinctive hospitality neighbourhood
              — is dominated by independent operators and independent-feel group venues set
              within converted Victorian industrial buildings. The exposed-brick, dark-steel
              and heritage-timber aesthetic that defines this area creates specific wrapping
              demand: counter fascias and bar fronts in dark woodgrain, weathered-effect and
              industrial matte finishes that complement existing brickwork and metalwork.
              Overnight installation is standard here — almost all Jewellery Quarter operators
              trade seven days a week.
            </p>
            <p>
              Digbeth is Birmingham&apos;s emerging creative and independent hospitality quarter.
              A significant share of its venues are in converted warehouse and industrial
              spaces — the custard factory, Digbeth Dining Club area, the Custard Factory
              complex and the railway arches south of the city centre. Operators here refresh
              at high frequency, responding to a design-literate customer base that notices
              tired interiors quickly.
            </p>
            <p>
              Brindleyplace B1 and Broad Street B1 serve a different segment: corporate,
              events and casual dining for the office and hotel market. These venues run
              higher-capacity formats — large bar fronts, extended counter runs, substantial
              booth areas — and their refurbishment cycles are driven by brand refresh
              programmes and franchise requirements rather than organic occupier demand.
              Fit-out contractors on multi-site Birmingham programmes are a key part of
              our commercial client base here.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Birmingham restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and service pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most guest-visible surface in any Birmingham restaurant or bar. A single
                overnight wrap delivers a completely transformed look without removing or
                replacing the underlying counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The focal point of Birmingham&apos;s Jewellery Quarter and Digbeth bars. Industrial
                woodgrain, brushed metal-effect and deep matte finishes are the highest-impact
                single change for a tired bar interior — completed overnight.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Booth dividers and seating surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth surrounds and back panels accumulate wear far faster than the
                underlying structure ages. Wrapping the panels refreshes the booth area
                consistently and quickly — no replacement of built-in seating required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Banquette seating panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in banquette end panels, wall-mounted headboards and feature back panels.
                Film specified for compatibility with the cleaning standards of Birmingham&apos;s
                high-volume city-centre food-service environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The first contact point for every Birmingham restaurant guest. Wrapping a dated
                host station fascia overnight in a fresh finish aligned to your interior
                specification takes hours rather than days.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Birmingham dining areas wrapped in woodgrain,
                concrete-effect or solid colour film — refreshing a dated feature wall without
                replastering, cladding replacement or repainting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight / out-of-hours */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No closure. Overnight installation across Birmingham.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Birmingham&apos;s city centre restaurants and bars trade across extended hours —
              many seven days a week with late-night licences and no practical daytime
              closure window. We work overnight or early-morning as standard across
              Birmingham, completing installation between close-of-trade and the morning opening.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter
              fascia, bar front or single-area refresh typically completes in one overnight
              session in Birmingham. Two installers working from close-of-trade to morning
              opening can achieve a significant scope without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For a larger
              Birmingham refresh — multiple areas, a full-room wrap, or refurbishment across
              several city or suburban sites — we phase across successive overnight windows
              so each area is affected for a maximum of one night.
            </p>
            <p>
              <strong className="text-foreground">Multi-site West Midlands programmes.</strong>{" "}
              Birmingham sits at the centre of the West Midlands motorway network — Coventry
              is 20 miles east via the M6, Wolverhampton is 12 miles west via the M6, and
              Solihull B90 is 8 miles south-east. One combined visit can cover Birmingham,
              Coventry or Wolverhampton with no separate mobilisation cost. We work
              white-label for Birmingham hospitality operators and fit-out contractors
              managing multi-site programmes as standard.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Birmingham restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New counters mean procurement, delivery, strip-out and fit — typically weeks of disruption. Wrapping the same surface takes hours to days, completed overnight in Birmingham.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. For a Birmingham bar or counter refresh, the saving is significant — and the finish quality is indistinguishable from new.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Industrial woodgrain, brushed metal-effect, stone-effect, heritage matte, solid brand colours. Physical samples provided for Birmingham clients to sign off before any commitment is made.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">West Midlands corridor coverage</h3>
              <p className="text-sm text-muted leading-relaxed">Birmingham is the hub of the West Midlands motorway network. One visit can combine Birmingham with Coventry (20 miles east), Wolverhampton (12 miles west), or Leicester (40 miles north-east). No separate mobilisation per city for multi-site programmes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham restaurant vinyl wrapping — common questions
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
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-restaurants/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all restaurant interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film, solar control and decorative window vinyl for Birmingham restaurant and bar glazing.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Birmingham</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Birmingham.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for restaurant and bar interiors across Coventry — 20 miles from Birmingham.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Birmingham and the
              West Midlands. Tell us what surfaces you have — we&apos;ll advise on specification,
              film selection and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Birmingham Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
