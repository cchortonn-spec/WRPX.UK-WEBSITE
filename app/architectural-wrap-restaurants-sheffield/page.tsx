import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Sheffield | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Sheffield — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across Sheffield S1–S11, Kelham Island, Ecclesall Road and South Yorkshire hospitality operators. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Sheffield — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Sheffield and South Yorkshire. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Sheffield city centre S1, Kelham Island, Ecclesall Road, Sharrow, Broomhill and across South Yorkshire. Out-of-hours installation works around trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Sheffield city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sheffield is our home base. We cover all Sheffield S postcodes: S1 city centre, Kelham Island S3, Ecclesall Road S11, Sharrow S7, Broomhill S10, Hillsborough S6, and all surrounding South Yorkshire areas. No travel surcharge applies within Sheffield. We can usually survey within a week and have current availability for overnight installation programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Sheffield restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or early morning as standard across Sheffield restaurants and bars. A counter fascia or bar front can be wrapped in a single overnight session. For larger programmes — booths, multiple areas, full-room refreshes — we phase across successive overnight windows. No closure, no trading disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Sheffield&apos;s restaurant and bar market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield&apos;s bar and restaurant market spans craft ale taprooms in Kelham Island favouring dark woodgrains and industrial matte finishes, through to Ecclesall Road and Division Street restaurants where brushed metal effects and stone-effect films are popular. We bring physical samples to survey — you choose from the full range before any commitment. Custom colour matching to RAL or Pantone reference is available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Sheffield fit-out contractors and restaurant designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for Sheffield-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site or multi-area Sheffield programmes where a consistent installation standard is needed.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant interiors in Sheffield city centre?",
    a: "Yes — Sheffield is our home base. We cover all Sheffield S postcodes: S1 city centre, Kelham Island S3, Ecclesall Road S11, Sharrow S7, Broomhill S10, Hillsborough S6, and all surrounding South Yorkshire areas. No travel surcharge applies within Sheffield. We can usually survey within a week and have current availability for overnight installation programmes.",
  },
  {
    q: "Can you install without closing the Sheffield restaurant or bar?",
    a: "Yes. We work overnight or early morning as standard across Sheffield restaurants and bars. A counter fascia or bar front can be wrapped in a single overnight session. For larger programmes — booths, multiple areas, full-room refreshes — we phase across successive overnight windows. No closure, no trading disruption.",
  },
  {
    q: "Which Sheffield restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "What film finishes suit Sheffield's restaurant and bar market?",
    a: "Sheffield's bar and restaurant market spans craft ale taprooms in Kelham Island favouring dark woodgrains and industrial matte finishes, through to Ecclesall Road and Division Street restaurants where brushed metal effects and stone-effect films are popular. We bring physical samples to survey — you choose from the full range before any commitment. Custom colour matching to RAL or Pantone reference is available.",
  },
  {
    q: "Do you work with Sheffield fit-out contractors and restaurant designers?",
    a: "Yes — we work white-label for Sheffield-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site or multi-area Sheffield programmes where a consistent installation standard is needed.",
  },
];

export default function ArchitecturalWrapRestaurantsSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Sheffield Restaurants & Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant, bar and café interiors across Sheffield and South Yorkshire.
            Counter fascias, bar fronts, booth panels and fitted furniture wrapped overnight
            in commercial-grade architectural film — no closure, no trading disruption.
            Sheffield is our home base: no travel surcharge, fast survey turnaround, and
            availability for both one-off refreshes and multi-site programmes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield&apos;s hospitality market is concentrated in several distinct zones, each with
              its own aesthetic and refurbishment pattern. Kelham Island S3 — the former industrial
              quarter now dominated by craft breweries, taprooms and independent restaurants — has
              seen significant fit-out investment in the last decade. The built fabric here leans
              industrial: exposed steel, reclaimed timber, brick and raw concrete. Dark woodgrain
              architectural film, matte black and brushed metal-effect finishes align closely with
              the Kelham aesthetic and are regularly specified for counter fascias, back-bar panels
              and booth dividers in this zone.
            </p>
            <p>
              Ecclesall Road S11 and Division Street S1 carry a higher concentration of branded
              and aspirational dining. Properties here tend to carry a more polished interior
              specification: stone-effect films, warm woodgrain finishes and satin solid colours
              are the most common requests in this zone. For mid-cycle refreshes — where the
              counter structure and booth seating are sound but the finish is dated — wrapping
              is the cost-effective route to bringing the interior back into specification
              without a full strip-out.
            </p>
            <p>
              The S1 city centre core — including the Devonshire Quarter, Leopold Square and
              West Street — includes a mix of branded chains and independents. For multi-unit
              operators with Sheffield sites requiring a consistent finish update across several
              locations, we provide a single-source installation service with uniform film
              specification and installation standard at each site.
            </p>
            <p>
              Sheffield also has a growing neighbourhood restaurant scene in Sharrow S7,
              Broomhill S10 and Hillsborough S6 — smaller operators where a single overnight
              visit can refresh the entire front-of-house in one session. We schedule around
              trading hours on request.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Sheffield restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and service pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most-touched surfaces in any Sheffield restaurant. Wrapping a chipped or
                dated counter front transforms the guest-facing look in a single overnight
                session — without removing or replacing the counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The focal point of Sheffield&apos;s taprooms, bars and restaurant dining spaces.
                Dark woodgrain, brushed copper-effect, deep matte — the highest-impact
                single change you can make to a tired Sheffield bar interior, done overnight.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Booth dividers and seating surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth surrounds and back panels accumulate scuffs far faster than they
                wear out structurally. Wrapping the flat panels refreshes the booth area
                consistently without replacing the built-in seating.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Banquette seating panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in banquette end panels, wall-mounted headboards and feature back panels.
                Film specified for cleaning compatibility with food-service environments —
                important for Sheffield&apos;s high-volume city centre dining operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The first contact point for every Sheffield restaurant guest. Wrapping a tired
                host station fascia in a fresh finish aligned to your interior takes hours,
                not days, and can be done overnight before opening.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Sheffield dining areas wrapped in woodgrain,
                concrete-effect or solid colour film — refreshing a dated feature wall
                without replastering, cladding replacement or painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight / out-of-hours */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No closure. Overnight installation across Sheffield.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Closing a Sheffield restaurant or bar during trading hours costs money. We specifically
              time restaurant wrapping work around trading — overnight sessions from close to open,
              early-morning pre-service sessions, or Monday daytime where the venue is closed.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter fascia,
              bar front or single-area refresh can typically be completed in one overnight session
              in Sheffield. Two installers working from close-of-trade to morning opening can achieve
              a significant scope without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For a larger Sheffield
              refresh — multiple areas, full-room wrap, or a refurbishment across several sites —
              we phase across successive overnight windows so each area is affected for a maximum
              of one night.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Sheffield programmes.</strong> If you
              operate or manage multiple restaurant sites across Sheffield, we provide a consistent
              film specification and scheduling approach across every location. We work white-label
              for Sheffield hospitality operators and their fit-out contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Sheffield restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New counters mean procurement, delivery, strip-out and fit — typically weeks of disruption. Wrapping the same surface takes hours to days, overnight in Sheffield.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. For a full Sheffield bar or counter refresh, the saving is material — and the finish quality is indistinguishable from new.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Dark woodgrains, brushed bronze and copper-effect, industrial matte, concrete-effect, solid brand colours. Physical samples provided for Sheffield clients to sign off before any commitment.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">No travel surcharge</h3>
              <p className="text-sm text-muted leading-relaxed">Sheffield is our home base. No extra travel cost compared to contractors based in Leeds or Manchester. Fast survey response and next-week installation availability across all S postcodes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield restaurant vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Restaurant window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and decorative window vinyl for Sheffield restaurant and bar glazing.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Sheffield hotel kitchens, furniture and reception areas.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for restaurant and bar fit-out contractors across Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Sheffield?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Sheffield and South Yorkshire.
              Tell us what surfaces you have — we&apos;ll advise on specification, film selection and
              overnight scheduling from our Sheffield base.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Sheffield Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
