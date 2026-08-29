import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Nottingham | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Nottingham — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across Nottingham NG1–NG7, Lace Market, Hockley, Castlegate and across Nottinghamshire hospitality. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Nottingham — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Nottingham and Nottinghamshire. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Nottingham city centre NG1, Lace Market NG1, Hockley NG1, Castlegate, West Bridgford NG2 and across Nottinghamshire. Out-of-hours installation works around trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Nottingham city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Nottingham and all NG postcodes. Nottingham city centre NG1, Lace Market, Hockley, Castlegate, West Bridgford NG2, Beeston NG9, Long Eaton NG10 and across Nottinghamshire. Travel time from our South Yorkshire base is approximately 1 hour via the M1. Free survey across Nottinghamshire, fixed price agreed before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Nottingham restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Out-of-hours and overnight installation is our standard operating model across Nottingham restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Nottingham&apos;s restaurant and bar market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nottingham&apos;s hospitality market is diverse. The Lace Market and Hockley independent dining scene typically favours warm woodgrain tones, exposed brick-effect films and darker textured finishes. West Bridgford and suburban Nottingham restaurants lean towards cleaner stone-effect, satin white and contemporary woodgrain specifications. We bring physical samples to survey — you choose from the full range before any commitment. RAL and Pantone colour matching is available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Nottingham fit-out contractors and restaurant designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for Nottingham-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Nottinghamshire where consistent installation standard is essential.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant interiors in Nottingham city centre?",
    a: "Yes — we cover Nottingham and all NG postcodes. Nottingham city centre NG1, Lace Market, Hockley, Castlegate, West Bridgford NG2, Beeston NG9, Long Eaton NG10 and across Nottinghamshire. Travel time from our South Yorkshire base is approximately 1 hour via the M1. Free survey across Nottinghamshire, fixed price agreed before any commitment.",
  },
  {
    q: "Can you install without closing the Nottingham restaurant or bar?",
    a: "Yes. Out-of-hours and overnight installation is our standard operating model across Nottingham restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted throughout.",
  },
  {
    q: "Which Nottingham restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "What film finishes suit Nottingham's restaurant and bar market?",
    a: "Nottingham's hospitality market is diverse. The Lace Market and Hockley independent dining scene typically favours warm woodgrain tones, exposed brick-effect films and darker textured finishes. West Bridgford and suburban Nottingham restaurants lean towards cleaner stone-effect, satin white and contemporary woodgrain specifications. We bring physical samples to survey — you choose from the full range before any commitment. RAL and Pantone colour matching is available.",
  },
  {
    q: "Do you work with Nottingham fit-out contractors and restaurant designers?",
    a: "Yes — we work white-label for Nottingham-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Nottinghamshire where consistent installation standard is essential.",
  },
];

export default function ArchitecturalWrapRestaurantsNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Nottingham Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant, bar and caf&eacute; interiors across Nottingham and
            Nottinghamshire. Counter fascias, bar fronts, booth panels and fitted furniture
            wrapped overnight in commercial-grade architectural film — no closure, no trading
            disruption. We cover the full NG postcode range: city centre NG1, Lace Market,
            Hockley, West Bridgford NG2, Beeston NG9 and across Nottinghamshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham&apos;s hospitality market has a strong independent dining identity
              anchored in the Lace Market and Hockley districts of NG1. The Lace Market —
              the city&apos;s former textile manufacturing quarter, now a conservation area of
              converted Victorian warehouses — hosts a concentration of independent restaurants
              and bars where interior specification tends towards warm woodgrain films,
              exposed stone-effect finishes and darker textured vinyls that complement the
              period fabric of converted Victorian interiors.
            </p>
            <p>
              Hockley NG1 carries a similar independent ethos: craft bars, independent
              restaurants and creative operators where interior refresh cycles are driven
              by the owner rather than a brand standard. For these operators, wrapping
              is often the first serious refurbishment option — it delivers the
              transformation they want without the disruption and cost of a full strip-out.
            </p>
            <p>
              The Nottingham city centre core — Market Square NG1, Bridlesmith Gate and
              the Victoria Centre perimeter — includes both branded operators and
              independents. For branded multi-unit operators with Nottingham sites on a
              refresh programme, we provide consistent film specification and overnight
              installation across all city centre locations simultaneously.
            </p>
            <p>
              West Bridgford NG2, immediately south of the city, and Beeston NG9 to the west
              are Nottingham&apos;s most active suburban dining destinations. Operators here
              typically prefer cleaner, lighter film finishes — stone-effect, satin
              white and contemporary woodgrain — to match the aspirational residential
              demographic. Overnight installation is equally important: most West Bridgford
              and Beeston restaurants trade seven days a week without a natural closure window.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Nottingham restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and service pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most guest-visible surface in any Nottingham restaurant or bar. A single
                overnight wrap of a counter front delivers a completely transformed look
                — without removing or replacing the underlying counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The focal point of Nottingham&apos;s bars and restaurant dining spaces. Dark
                woodgrain, brushed metal-effect and deep matte finishes are the highest-impact
                single change for a tired Nottingham bar interior — done overnight.
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
                Film specified for compatibility with the cleaning standards of Nottingham&apos;s
                food-service environments — particularly important for city centre high-volume
                operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The first contact point for every Nottingham restaurant guest. Wrapping a dated
                host station fascia overnight in a fresh finish aligned to your interior
                specification takes hours rather than days.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Nottingham dining areas wrapped in woodgrain,
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
            No closure. Overnight installation across Nottingham.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Nottingham&apos;s city centre restaurants and bars trade across extended hours —
              many seven days a week without a practical daytime closure window. We work
              overnight or early-morning as standard across Nottingham, completing
              installation between close-of-trade and the morning opening.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter
              fascia, bar front or single-area refresh typically completes in one overnight
              session in Nottingham. Two installers working from close-of-trade to morning
              opening can achieve a significant scope without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For a larger
              Nottingham refresh — multiple areas, a full-room wrap, or refurbishment across
              several city or suburban sites — we phase across successive overnight windows
              so each area is affected for a maximum of one night.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Nottinghamshire programmes.</strong>
              If you operate across multiple restaurant sites in Nottinghamshire, we provide
              consistent film specification, consistent installation standard and consistent
              scheduling across every location. We work white-label for Nottingham hospitality
              operators and fit-out contractors as standard.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Nottingham restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New counters mean procurement, delivery, strip-out and fit — typically weeks of disruption. Wrapping the same surface takes hours to days, completed overnight in Nottingham.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. For a Nottingham bar or counter refresh, the saving is significant — and the finish quality is indistinguishable from new.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Warm woodgrains, brushed metal-effect, stone-effect, industrial matte, solid brand colours. Physical samples provided for Nottingham clients to sign off before any commitment is made.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">M1 corridor coverage</h3>
              <p className="text-sm text-muted leading-relaxed">Nottingham is on the Sheffield–Nottingham M1 corridor we cover regularly. No separate mobilisation cost for Nottingham added to a Yorkshire programme — one installer covering both regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham restaurant vinyl wrapping — common questions
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
              <p className="mt-2 text-sm text-muted">Frosted privacy film, solar control and decorative window vinyl for Nottingham restaurant and bar glazing.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Nottingham hotel corridors, reception areas and fitted furniture.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for restaurant and bar fit-out contractors across the East Midlands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Nottingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Nottingham and
              Nottinghamshire. Tell us what surfaces you have — we&apos;ll advise on specification,
              film selection and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
