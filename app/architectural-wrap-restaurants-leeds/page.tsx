import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping Leeds | Bar, Counter & Surface Wrap | WRPX",
  description:
    "Restaurant interior vinyl wrapping in Leeds — counter fascias, bar fronts, booth panels, kitchen pass surrounds and fitted furniture. Out-of-hours installation across Leeds LS1–LS2, Kirkgate, Granary Wharf, Headingley and West Yorkshire hospitality operators. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping Leeds — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across Leeds and West Yorkshire. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Leeds city centre LS1–LS2, Kirkgate Market area, Granary Wharf, Headingley LS6, Chapel Allerton LS7 and across West Yorkshire. Out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap restaurant interiors in Leeds city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leeds is approximately 40 minutes from our South Yorkshire base via the M1. We cover LS1 and LS2 city centre, the Kirkgate and Calls area, Granary Wharf, Headingley LS6, Chapel Allerton LS7, Meanwood LS6, and all West Yorkshire restaurant and bar operators. We can usually survey within the week and have overnight installation availability across Leeds.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without closing the Leeds restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overnight or early morning installation is standard for Leeds restaurants and bars. A counter fascia or bar front can be wrapped in a single overnight session from close-of-trade to morning opening. For larger programmes — booths, multiple areas, multi-site — we phase across successive overnight windows with no closure required.",
      },
    },
    {
      "@type": "Question",
      name: "What film finishes work for Leeds restaurant and bar interiors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leeds restaurant and bar specification varies by area: the Calls and Granary Wharf waterfront market leans toward warehouse-industrial finishes — dark woodgrain, matte black, brushed copper-effect. The LS1 city centre branded dining sector often specifies stone-effect or warm satin woodgrain. Headingley and Chapel Allerton independent operators tend toward natural-feel woodgrains and solid neutral colours. We bring physical samples to survey — you choose from the full range before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a white-label installer for Leeds fit-out contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for Leeds-based hospitality fit-out contractors, restaurant designers and interior refurbishment companies. We attend under your company name, carry your paperwork, provide photographic sign-off in your format and report back to your project manager. The operator sees your company throughout the Leeds programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Leeds with Sheffield or Bradford on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leeds is well-positioned for multi-city Yorkshire programmes. Sheffield is 40 minutes south via the M1. Bradford is 20 minutes west via the M62. Harrogate is 25 minutes north. For operators or fit-out contractors with restaurant programmes across multiple Yorkshire cities, we can manage the scheduling and provide consistent installation across all sites.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap restaurant interiors in Leeds city centre?",
    a: "Yes — Leeds is approximately 40 minutes from our South Yorkshire base via the M1. We cover LS1 and LS2 city centre, the Kirkgate and Calls area, Granary Wharf, Headingley LS6, Chapel Allerton LS7, Meanwood LS6, and all West Yorkshire restaurant and bar operators. We can usually survey within the week and have overnight installation availability across Leeds.",
  },
  {
    q: "Can you install without closing the Leeds restaurant?",
    a: "Yes. Overnight or early morning installation is standard for Leeds restaurants and bars. A counter fascia or bar front can be wrapped in a single overnight session from close-of-trade to morning opening. For larger programmes — booths, multiple areas, multi-site — we phase across successive overnight windows with no closure required.",
  },
  {
    q: "What film finishes work for Leeds restaurant and bar interiors?",
    a: "Leeds restaurant and bar specification varies by area: the Calls and Granary Wharf waterfront market leans toward warehouse-industrial finishes — dark woodgrain, matte black, brushed copper-effect. The LS1 city centre branded dining sector often specifies stone-effect or warm satin woodgrain. Headingley and Chapel Allerton independent operators tend toward natural-feel woodgrains and solid neutral colours. We bring physical samples to survey — you choose from the full range before any commitment.",
  },
  {
    q: "Can you work as a white-label installer for Leeds fit-out contractors?",
    a: "Yes — we work white-label for Leeds-based hospitality fit-out contractors, restaurant designers and interior refurbishment companies. We attend under your company name, carry your paperwork, provide photographic sign-off in your format and report back to your project manager. The operator sees your company throughout the Leeds programme.",
  },
  {
    q: "Can you combine Leeds with Sheffield or Bradford on the same programme?",
    a: "Yes — Leeds is well-positioned for multi-city Yorkshire programmes. Sheffield is 40 minutes south via the M1. Bradford is 20 minutes west via the M62. Harrogate is 25 minutes north. For operators or fit-out contractors with restaurant programmes across multiple Yorkshire cities, we can manage the scheduling and provide consistent installation across all sites.",
  },
];

export default function ArchitecturalWrapRestaurantsLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leeds Restaurants & Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant interior vinyl wrapping in Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX works with Leeds restaurant operators, hospitality fit-out contractors and
            bar refurbishment teams on interior vinyl wrapping programmes across West Yorkshire.
            Counter fascias, bar fronts, booth panels and fitted furniture wrapped overnight
            in commercial-grade film — no closure, no trading disruption. Leeds city centre,
            Granary Wharf, Headingley, Chapel Allerton and across the LS postcode zone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Restaurant Survey →
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="btn-secondary">
              Restaurant Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds restaurant and bar market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds has one of the most active hospitality markets outside London. The LS1
              city centre core — Trinity, Briggate, The Headrow and the southern city fringe —
              carries a high concentration of branded casual dining, premium casual and
              independent restaurant stock. Much of the city-centre dining estate was fitted
              out in the 2010–2020 wave; a growing volume of these properties is now at its
              first mid-cycle refresh, where wrapping is the most cost-effective route to
              updating the interior without full strip-out.
            </p>
            <p>
              Granary Wharf and the waterfront zone (LS1, near the station) has a strong
              warehouse-conversion aesthetic — exposed timber, brick and industrial steel.
              Dark woodgrain, matte black and brushed copper-effect architectural film align
              closely with the finish direction here and are regularly specified for bar fronts,
              back-bar panels and booth dividers in this zone.
            </p>
            <p>
              Headingley LS6 and Chapel Allerton LS7 are Leeds&apos; primary neighbourhood
              dining destinations. Independent and semi-independent operators dominate here —
              smaller premises where a single overnight visit can refresh the entire
              front-of-house. This zone generates consistent year-round work as operators
              refresh between brand cycles without the budget for full refit.
            </p>
            <p>
              The Calls and the LS2 waterfront area includes some of Leeds&apos; most characterful
              restaurant and bar spaces — converted mills and warehouses with significant
              heritage aesthetic. Wrapping in this context is particularly effective as it
              preserves the underlying fabric while refreshing the surface finish.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leeds restaurant and bar interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counter and kitchen pass-through fascias across Leeds restaurants —
                the highest-contact surface in any front-of-house. Wrapping a damaged or
                dated counter front transforms the guest-facing look in a single overnight
                shift without removing the structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Leeds bar and restaurant focal points. Dark woodgrain, brushed copper,
                deep matte or stone-effect film on bar fronts and back-bar panels —
                the highest-impact single change for a tired Leeds bar interior,
                installed overnight.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Booth dividers and seating surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth surrounds accumulate scuffs faster than they wear out
                structurally. Wrapping the flat panels refreshes the booth area across
                Leeds restaurant dining rooms without replacing the built-in seating.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Banquette seating panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in banquette frames, end panels and wall-mounted headboards across
                Leeds restaurants. Film specified to handle cleaning chemicals appropriate
                to food-service environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping a Leeds restaurant host station fascia in a fresh, aligned finish
                takes hours and can be done overnight. The first contact point for guests
                — the highest visible return on a small scope of work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat cladding panels in Leeds dining areas wrapped in woodgrain,
                concrete-effect or solid colour architectural film — refreshing a dated
                feature wall without replastering or cladding replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route and access */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Leeds — access and overnight scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is approximately 40 minutes from our South Yorkshire base via the M1 north
              to junction 41 (Wakefield), then the M621 or A61 into Leeds city centre. For
              Granary Wharf and the waterfront, the approach from junction 43 (A61 north)
              is most direct. For Headingley LS6, the A660 north from the inner ring road
              is the standard route.
            </p>
            <p>
              Leeds city centre has managed loading zones on most main streets. For restaurant
              work in the Calls, Granary Wharf and waterfront zones, rear yard or quayside
              loading access is available at most properties. The LS1 core has early-morning
              loading access before traffic management restrictions apply — we confirm logistics
              with venue management before every Leeds restaurant job.
            </p>
            <p>
              For overnight programmes, we coordinate directly with venue managers on key
              handover and overnight access. We operate a no-traces policy — the restaurant
              is clean and ready for morning opening when we leave. All waste, off-cuts and
              installation materials are removed from site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds restaurant vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-restaurants/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all restaurant interior wrapping, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior wrapping Leeds</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for Leeds hotel kitchens, bedroom furniture and reception areas.</p>
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and decorative window vinyl for restaurant and bar glazing across Yorkshire.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for restaurant and bar fit-out contractors across Leeds and Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant or bar refresh in Leeds?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across Leeds and West Yorkshire.
              Tell us what surfaces you have — we&apos;ll advise on specification, film selection
              and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leeds Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
