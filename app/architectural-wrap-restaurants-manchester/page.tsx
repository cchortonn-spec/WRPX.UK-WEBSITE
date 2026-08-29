import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Manchester | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping across Manchester — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across Manchester M1–M16, Northern Quarter, Spinningfields, Ancoats, Didsbury and Greater Manchester hospitality. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Manchester — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Manchester and Greater Manchester. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Northern Quarter M4, Spinningfields M3, Ancoats M4, Didsbury M20, Chorlton M21, MediaCityUK Salford M50 and across Greater Manchester. Out-of-hours installation works around trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant and bar interiors across Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Manchester city centre and Greater Manchester. Northern Quarter M4, Spinningfields M3, Ancoats M4, Piccadilly M1, Didsbury M20, Chorlton M21, MediaCityUK Salford M50, and suburban town centres across Greater Manchester. Travel time from our South Yorkshire base is approximately 1 hour via the M1 and M60. Free survey and fixed price across Greater Manchester.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Manchester restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Out-of-hours and overnight installation is standard across Manchester restaurants and bars. Manchester&apos;s hospitality market trades late — overnight working after close of service means zero trading disruption. A counter fascia or bar front typically wraps in a single overnight session. Larger programmes are phased across successive overnight windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Manchester&apos;s restaurant and bar scene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester&apos;s hospitality market is one of the UK&apos;s most design-conscious. The Northern Quarter and Ancoats independent dining scene favours industrial materials: brushed metal-effect films, concrete-effect surfaces, matte black and dark woodgrain. Spinningfields and the city-centre corporate dining market leans towards polished stone-effect, brushed brass-effect and lighter contemporary woodgrains. Didsbury and Chorlton independent restaurants typically specify warmer woodgrain tones and natural finishes. We bring physical samples to every survey.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Manchester fit-out contractors and restaurant designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for Manchester-based hospitality fit-out contractors and restaurant designers. We attend under your company name, provide photographic sign-off in your format and coordinate with venue management overnight. Particularly useful for contractors managing multi-site Manchester programmes or pan-regional rollouts where consistent installation standard across Yorkshire and Greater Manchester is required.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant and bar interiors across Manchester?",
    a: "Yes — we cover Manchester city centre and Greater Manchester. Northern Quarter M4, Spinningfields M3, Ancoats M4, Piccadilly M1, Didsbury M20, Chorlton M21, MediaCityUK Salford M50, and suburban town centres across Greater Manchester. Travel time from our South Yorkshire base is approximately 1 hour via the M1 and M60. Free survey and fixed price across Greater Manchester.",
  },
  {
    q: "Can you install without closing the Manchester restaurant or bar?",
    a: "Yes. Out-of-hours and overnight installation is standard across Manchester restaurants and bars. Manchester's hospitality market trades late — overnight working after close of service means zero trading disruption. A counter fascia or bar front typically wraps in a single overnight session. Larger programmes are phased across successive overnight windows.",
  },
  {
    q: "Which Manchester restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "What film finishes suit Manchester's restaurant and bar scene?",
    a: "Manchester's hospitality market is one of the UK's most design-conscious. The Northern Quarter and Ancoats independent dining scene favours industrial materials: brushed metal-effect films, concrete-effect surfaces, matte black and dark woodgrain. Spinningfields and the city-centre corporate dining market leans towards polished stone-effect, brushed brass-effect and lighter contemporary woodgrains. Didsbury and Chorlton independent restaurants typically specify warmer woodgrain tones and natural finishes. We bring physical samples to every survey.",
  },
  {
    q: "Do you work with Manchester fit-out contractors and restaurant designers?",
    a: "Yes — we work white-label for Manchester-based hospitality fit-out contractors and restaurant designers. We attend under your company name, provide photographic sign-off in your format and coordinate with venue management overnight. Particularly useful for contractors managing multi-site Manchester programmes or pan-regional rollouts where consistent installation standard across Yorkshire and Greater Manchester is required.",
  },
];

export default function ArchitecturalWrapRestaurantsManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Manchester Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant, bar and caf&eacute; interiors across Manchester and Greater
            Manchester. Counter fascias, bar fronts, booth panels and fitted furniture wrapped
            overnight in commercial-grade architectural film — no closure, no trading
            disruption. Northern Quarter, Spinningfields, Ancoats, Didsbury, Chorlton
            and across Greater Manchester.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is one of the UK&apos;s most active restaurant and bar refurbishment
              markets. The Northern Quarter M4 — the city&apos;s creative and independent
              hospitality district — has driven significant fit-out investment since the
              mid-2010s. The built fabric here mixes Victorian mill conversions and
              mid-century commercial buildings with contemporary interventions. Finish
              preferences in this zone lean heavily industrial: brushed metal-effect films,
              concrete-effect surfaces, matte black and dark woodgrain are the most frequently
              specified for counter fascias, back-bar panels and booth dividers.
            </p>
            <p>
              Ancoats M4 — Manchester&apos;s most design-led residential and dining neighbourhood —
              has an equally strong independent restaurant scene. Ancoats operators
              typically carry a more refined specification: polished stone-effect films,
              warm woodgrain and natural material references are common, reflecting the
              neighbourhood&apos;s design-conscious demographic.
            </p>
            <p>
              Spinningfields M3 and the city-centre corporate hospitality zone carry
              a different brief: large-format bar and restaurant operators with multiple
              areas, corporate standards and rolling refurbishment budgets. Polished
              stone-effect, brushed brass-effect and lighter contemporary woodgrain
              specifications predominate here, and multi-area overnight programmes are
              the norm rather than the exception.
            </p>
            <p>
              Didsbury M20, Chorlton M21 and the south Manchester suburbs have a dense
              independent restaurant market where operators periodically refresh
              counter surfaces and bar fronts on a shorter cycle than branded chains.
              Warmer woodgrain tones and natural finishes align with the residential
              demographic across this zone.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Manchester restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and service pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most guest-visible surface in any Manchester bar or restaurant. A single
                overnight wrap transforms a dated counter front completely — without touching
                the counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The centrepiece of Manchester&apos;s bars and restaurant dining rooms. Industrial
                matte, brushed copper-effect, dark woodgrain — the highest-impact single
                change you can make to a tired Manchester bar interior, done overnight.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Booth dividers and seating surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth surrounds and back panels in Manchester restaurants — wrapping
                refreshes the booth area consistently without replacing built-in seating
                or causing any overnight closure beyond a single session.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Banquette seating panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in banquette end panels, wall-mounted headboards and feature back
                panels. Film specified for compatibility with food-service cleaning
                protocols across Manchester&apos;s high-footfall dining environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The first contact point for every Manchester restaurant guest. Wrapping
                a tired host station fascia in a fresh finish aligned to your interior
                takes hours, not days, done overnight before opening.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Manchester dining rooms wrapped in woodgrain,
                concrete-effect, brushed metal or solid colour film — refreshing a
                feature wall without replastering, new cladding or full redecoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight / out-of-hours */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No closure. Overnight installation across Manchester.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Manchester&apos;s hospitality market trades across extended hours — bars and
              restaurants in the Northern Quarter and city centre often close at 2am
              or later. We work overnight after close-of-service, completing installation
              before the morning opening. No trading disruption, no lost revenue.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter
              fascia, bar front or single-area refresh typically completes in one overnight
              session. Two installers working from close-of-service to pre-opening can
              achieve a meaningful scope without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For larger
              Manchester refreshes — multiple areas, full-room wrap, or multi-site
              Greater Manchester programmes — we phase across successive overnight windows
              so each area is affected for a maximum of one night.
            </p>
            <p>
              <strong className="text-foreground">Cross-region programmes.</strong> Manchester
              is approximately one hour from our South Yorkshire base. If your programme
              covers sites in both Manchester and Yorkshire, we can run both within the
              same mobilisation — no separate call-out cost for each region.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Manchester restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New counters mean procurement, delivery, strip-out and fit — typically weeks. Wrapping the same surface takes hours, done overnight in Manchester without touching the trading day.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. For Manchester&apos;s fast-refresh hospitality market, the saving across a bar or restaurant programme is material.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Industrial matte, brushed copper and brass-effect, dark woodgrain, polished stone-effect, solid brand colours. Physical samples provided for Manchester clients at survey — you choose before commitment.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Regional coverage</h3>
              <p className="text-sm text-muted leading-relaxed">Manchester, Sheffield, Leeds, Nottingham — one installer across the whole region. Particularly valuable for fit-out contractors managing multi-city programmes who need a single consistent installation partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester restaurant vinyl wrapping — common questions
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
              <p className="mt-2 text-sm text-muted">Frosted privacy film, solar control and decorative window vinyl for Manchester restaurant and bar glazing.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Manchester hotel corridors, reception areas and guest room furniture.</p>
            </Link>
            <Link href="/architectural-wrap-offices-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office interior wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Manchester office reception desks, breakout areas and fitted furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Manchester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Manchester and Greater
              Manchester. Tell us what surfaces you have — we&apos;ll advise on specification,
              film selection and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
