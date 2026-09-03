import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Coventry | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Coventry — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across CV1 city centre, Belgrade Quarter, Warwick Road, Earlsdon and all Coventry postcodes. No trading disruption. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Coventry — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Coventry and Warwickshire. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. CV1 city centre, Belgrade Quarter, Warwick Road, Earlsdon CV5, Spon End CV1 and across the Coventry and Warwickshire hospitality market. Out-of-hours installation works around trading hours — no closure required."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Coventry city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Coventry and all CV postcodes. CV1 city centre, Belgrade Quarter, West Orchards, Warwick Road, Earlsdon CV5, Spon End CV1, Canley CV4 and across Warwickshire. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6. Free survey across the CV zone, fixed price agreed before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Coventry restaurant or bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Out-of-hours and overnight installation is our standard operating model across Coventry restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Which Coventry restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes suit Coventry's restaurant and bar market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coventry's dining scene ranges from the student-heavy CV1 and CV4 zones with high footfall and cost-sensitive operators, through to the more aspirational independent restaurants along Warwick Road and Earlsdon CV5 where quality specification is expected. The Belgrade Quarter and city-centre bars lean towards dark woodgrain tones, matte black and brushed metal-effect finishes. Warwick Road and Earlsdon independents typically prefer warmer naturals — mid-tone oak, stone-effect and contemporary satin finishes. We bring physical samples to every Coventry survey.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Coventry fit-out contractors and restaurant designers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for Coventry-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Coventry and Warwickshire where consistent installation standard is essential.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant interiors in Coventry city centre?",
    a: "Yes — we cover Coventry and all CV postcodes. CV1 city centre, Belgrade Quarter, West Orchards, Warwick Road, Earlsdon CV5, Spon End CV1, Canley CV4 and across Warwickshire. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6. Free survey across the CV zone, fixed price agreed before any commitment.",
  },
  {
    q: "Can you install without closing the Coventry restaurant or bar?",
    a: "Yes. Out-of-hours and overnight installation is our standard operating model across Coventry restaurants and bars. A counter fascia or bar front typically wraps in a single overnight session. For larger programmes — booth surrounds, multiple areas, full-room refreshes — we phase across successive overnight windows so trading continues uninterrupted throughout.",
  },
  {
    q: "Which Coventry restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias and service pass-throughs, bar fronts and back-bar panels, booth dividers and seat surrounds, banquette seating panels, host station desks, internal door faces and feature wall panels. Surfaces must be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "What film finishes suit Coventry's restaurant and bar market?",
    a: "Coventry's dining scene ranges from the student-heavy CV1 and CV4 zones with high footfall and cost-sensitive operators, through to the more aspirational independent restaurants along Warwick Road and Earlsdon CV5 where quality specification is expected. The Belgrade Quarter and city-centre bars lean towards dark woodgrain tones, matte black and brushed metal-effect finishes. Warwick Road and Earlsdon independents typically prefer warmer naturals — mid-tone oak, stone-effect and contemporary satin finishes. We bring physical samples to every Coventry survey.",
  },
  {
    q: "Do you work with Coventry fit-out contractors and restaurant designers?",
    a: "Yes — we work white-label for Coventry-based hospitality fit-out contractors and restaurant designers. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The operator sees your brand throughout. Useful for contractors managing multi-site programmes across Coventry and Warwickshire where consistent installation standard is essential.",
  },
];

export default function ArchitecturalWrapRestaurantsCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Coventry Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps restaurant, bar and caf&eacute; interiors across Coventry and
            Warwickshire. Counter fascias, bar fronts, booth panels and fitted furniture
            wrapped overnight in commercial-grade architectural film — no closure, no trading
            disruption. We cover the full CV postcode range: city centre CV1, Belgrade Quarter,
            Warwick Road, Earlsdon CV5 and across Warwickshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry&apos;s hospitality market is shaped by two distinct forces: a large student
              population across Coventry University and the University of Warwick that generates
              consistent demand for high-volume, high-footfall operators; and a growing
              independent dining and bar culture centred on Warwick Road, Earlsdon CV5 and
              the Belgrade Quarter in the city centre. Both segments generate consistent
              demand for interior refreshes.
            </p>
            <p>
              The Belgrade Quarter — the regenerated area around Belgrade Plaza in CV1 — is
              Coventry&apos;s emerging premium hospitality zone. Bars and restaurants here draw on
              the arena, theatre and events trade from the Belgrade Theatre and Arena Coventry.
              Fit-out and refresh cycles are shorter here than in the traditional city centre,
              with operators responding to increased footfall by upgrading interiors to match
              customer expectations. Overnight installation is essential — these venues trade
              seven days a week with late-night hours.
            </p>
            <p>
              Warwick Road CV1 and the Earlsdon CV5 neighbourhood south-west of the city
              centre host Coventry&apos;s most established independent restaurant and café market.
              Earlsdon is a compact, high-street-style neighbourhood with a strong independent
              food and drink offer. Operators in this area typically serve an aspirational
              residential demographic and favour quality finish specifications over quick
              turnaround. Overnight access is not always required here — some Earlsdon
              operators have natural closure days — but we work to whatever access schedule
              the operator provides.
            </p>
            <p>
              Spon End CV1 and the student accommodation zones around Coventry University
              CV1 and University of Warwick CV4 generate a different segment of demand:
              student bars, campus restaurants, union outlets and catering facilities run
              on tight budgets where wrapping counters and surfaces is far more practical
              than replacement joinery. University catering fit-out contractors across both
              Coventry campuses form a regular part of our commercial programme.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Coventry restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and service pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most guest-visible surface in any Coventry restaurant or bar. A single
                overnight wrap of a counter front delivers a completely transformed look
                without removing or replacing the underlying counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The focal point of Coventry&apos;s Belgrade Quarter and Warwick Road bars. Dark
                woodgrain, brushed metal-effect and deep matte finishes are the highest-impact
                single change for a tired bar interior — done overnight.
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
                Film specified for compatibility with the cleaning standards of Coventry&apos;s
                food-service environments — particularly important in high-volume student
                and city-centre operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The first contact point for every Coventry restaurant guest. Wrapping a dated
                host station fascia overnight in a fresh finish aligned to your interior
                specification takes hours rather than days.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Coventry dining areas wrapped in woodgrain,
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
            No closure. Overnight installation across Coventry.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Coventry&apos;s Belgrade Quarter and city-centre restaurants and bars trade across
              extended hours — many seven days a week without a practical daytime closure
              window. We work overnight or early-morning as standard across Coventry,
              completing installation between close-of-trade and the morning opening.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter
              fascia, bar front or single-area refresh typically completes in one overnight
              session in Coventry. Two installers working from close-of-trade to morning
              opening can achieve a significant scope without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For a larger
              Coventry refresh — multiple areas, a full-room wrap, or refurbishment across
              several city or suburban sites — we phase across successive overnight windows
              so each area is affected for a maximum of one night.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Warwickshire programmes.</strong>{" "}
              If you operate across multiple restaurant sites in Coventry and Warwickshire,
              we provide consistent film specification, consistent installation standard
              and consistent scheduling across every location. We work white-label for
              Coventry hospitality operators and fit-out contractors as standard.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Coventry restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New counters mean procurement, delivery, strip-out and fit — typically weeks of disruption. Wrapping the same surface takes hours to days, completed overnight in Coventry.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. For a Coventry bar or counter refresh, the saving is significant — and the finish quality is indistinguishable from new.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Warm woodgrains, brushed metal-effect, stone-effect, industrial matte, solid brand colours. Physical samples provided for Coventry clients to sign off before any commitment is made.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">M1/M6 corridor coverage</h3>
              <p className="text-sm text-muted leading-relaxed">Coventry sits at the M1/M6 junction — one combined visit can cover Coventry, Leicester (30 miles north) and Birmingham (20 miles west). No separate mobilisation cost per city for multi-site programmes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry restaurant vinyl wrapping — common questions
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
              <p className="mt-2 text-sm text-muted">Frosted privacy film, solar control and decorative window vinyl for Coventry restaurant and bar glazing.</p>
            </Link>
            <Link href="/architectural-wrap-retail-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Coventry retail interiors — counter fascias, fixtures and display surfaces.</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and etched-effect film for Coventry restaurants, bars and commercial premises.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Coventry and
              Warwickshire. Tell us what surfaces you have — we&apos;ll advise on specification,
              film selection and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Coventry Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
