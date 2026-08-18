import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Interior Vinyl Wrapping | Bar, Counter & Furniture Wrap | WRPX",
  description:
    "Vinyl wrapping for restaurant, bar and café interiors across South Yorkshire and the East Midlands — counter fascias, bar fronts, booth panels, kitchen pass-through and fitted furniture. Out-of-hours installation, no trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-restaurants/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant interior vinyl wrapping — counters, bars and fitted surfaces",
  "Architectural vinyl wrapping for restaurant, bar and café interiors across South Yorkshire and the East Midlands. Counter fascias, bar fronts, booth dividers, kitchen pass-through panels and fitted furniture wrapped in commercial-grade film. Out-of-hours installation works around trading hours — no closure required."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Restaurant Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-restaurants/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you install without closing the restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or early morning as standard for operational restaurants. A typical counter fascia or bar front can be wrapped in a single overnight session. For larger programmes — booths, multiple areas, full room refreshes — we work in phases across several overnight windows to avoid any closure.",
      },
    },
    {
      "@type": "Question",
      name: "What restaurant and bar surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter fascias, bar fronts and back-bar panels, booth dividers and seat back surrounds, kitchen pass-through panels, built-in banquette seating surrounds, host station desks, internal door faces, and feature wall panels. Surfaces need to be flat or near-flat and in sound condition — we assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Will the film cope with a restaurant kitchen environment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial-grade architectural film is suitable for front-of-house restaurant surfaces. For kitchen-side pass-through panels and areas with significant heat, steam or grease exposure, we specify high-temperature rated film and assess the specific location at survey. Film is not a substitute for commercial kitchen-spec surfaces on direct food-contact or high-heat areas.",
      },
    },
    {
      "@type": "Question",
      name: "How long does restaurant vinyl wrapping last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Front-of-house surfaces in restaurant environments typically last 5–8 years depending on traffic levels and cleaning regimes. Bar fronts and counter fascias with high daily contact may show wear at edges sooner. We specify film durability by application at survey and advise on cleaning-compatible finishes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match a specific brand colour or fit-out spec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide physical film samples across the full range — solid colours, woodgrains, stone effects, brushed metals, satins and mattes. We can match to RAL references and advise on the closest Pantone-equivalent film available. Sample sign-off before installation is standard practice.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can you install without closing the restaurant?",
    a: "Yes. We work overnight or early morning as standard for operational restaurants. A typical counter fascia or bar front can be wrapped in a single overnight session. For larger programmes — booths, multiple areas, full room refreshes — we work in phases across several overnight windows to avoid any closure.",
  },
  {
    q: "What restaurant and bar surfaces can be vinyl wrapped?",
    a: "Counter fascias, bar fronts and back-bar panels, booth dividers and seat back surrounds, kitchen pass-through panels, built-in banquette seating surrounds, host station desks, internal door faces, and feature wall panels. Surfaces need to be flat or near-flat and in sound condition — we assess at survey.",
  },
  {
    q: "Will the film cope with a restaurant kitchen environment?",
    a: "Commercial-grade architectural film is suitable for front-of-house restaurant surfaces. For kitchen-side pass-through panels and areas with significant heat, steam or grease exposure, we specify high-temperature rated film and assess the specific location at survey. Film is not a substitute for commercial kitchen-spec surfaces on direct food-contact or high-heat areas.",
  },
  {
    q: "How long does restaurant vinyl wrapping last?",
    a: "Front-of-house surfaces in restaurant environments typically last 5–8 years depending on traffic levels and cleaning regimes. Bar fronts and counter fascias with high daily contact may show wear at edges sooner. We specify film durability by application at survey and advise on cleaning-compatible finishes.",
  },
  {
    q: "Can you match a specific brand colour or fit-out spec?",
    a: "Yes. We provide physical film samples across the full range — solid colours, woodgrains, stone effects, brushed metals, satins and mattes. We can match to RAL references and advise on the closest Pantone-equivalent film available. Sample sign-off before installation is standard practice.",
  },
];

export default function ArchitecturalWrapRestaurantsPage() {
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
            <span className="text-foreground">Restaurant Interior Vinyl Wrapping</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Restaurant interior vinyl wrapping — counters, bars, booths and fitted surfaces
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Restaurant and bar interiors take the kind of daily contact that makes surfaces look tired far faster than they wear out structurally. Wrapping existing counter fascias, bar fronts, booth panels and built-in furniture in commercial-grade architectural film refreshes the look without a full refit. We work overnight and out-of-hours across South Yorkshire and the East Midlands — no closure, no trading disruption.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Restaurant Survey →
            </Link>
            <Link href="/architectural-vinyl-film/" className="btn-secondary">
              Architectural Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in restaurant and bar environments
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter fascias and pass-throughs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counter and kitchen pass-through fascias are the most-touched surfaces in a restaurant. Wrapping a damaged or outdated counter front transforms the guest-facing look in a single overnight shift, without removing or replacing the counter structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar fronts and back-bar panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The bar is the focal point of most restaurant and pub dining spaces. Wrapping the bar front and back-bar panels in a new finish — dark woodgrain, brushed copper-effect, deep matte — is the highest-impact single change you can make to a tired bar interior.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Booth dividers and seating surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fixed booth seating surrounds, back panels and dividers accumulate scuffs and wear faster than furniture you can replace. Wrapping the flat panels refreshes the whole booth area consistently without replacing the built-in seating structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Banquette seating panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in banquette seating frames and end panels, wall-mounted headboards and feature back panels can all be wrapped. We specify film that handles cleaning chemicals appropriate to food-service environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Host and reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The host station is the guest&apos;s first point of contact. Wrapping a tired or dated host desk fascia in a fresh finish aligned to your interior takes hours, not days, and can be done overnight before opening.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature wall panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Flat wall cladding panels in dining areas can be wrapped in woodgrain, concrete-effect or solid colour film to refresh a dated feature wall without replastering, cladding replacement or painting. Effective for a single feature wall in a refurbishment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-of-hours */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No closure. Overnight and out-of-hours installation.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Closing a restaurant or bar during trading hours for a refurbishment is expensive. We specifically time restaurant wrapping work to avoid trading disruption — overnight sessions, early morning, or across a Monday when many venues are closed.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter fascia, bar front, or single-area refresh can typically be completed in one overnight session. Two installers working from close-of-trade to opening the following morning can achieve a significant scope of work without any trading impact.
            </p>
            <p>
              <strong className="text-foreground">Phased programmes.</strong> For a larger refresh — multiple areas, full-room wrap programme, or a refurbishment across several sites — we phase the work across successive overnight windows so each area of the restaurant is affected for a maximum of one night.
            </p>
            <p>
              <strong className="text-foreground">Multi-site restaurant groups.</strong> If you operate or manage multiple restaurant sites, we provide a consistent finish specification and scheduling approach across every location. Same film, same application standard, same handover process at each site. We work white-label for restaurant group operators and their fit-out contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why restaurant operators choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">Replacement joinery or new counters means lead time, delivery, strip-out and installation — typically 2–4 weeks of disruption. Wrapping the same surface takes hours to days.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement. For a full bar or counter refresh, the saving is material — and the finish quality from well-specified architectural film is indistinguishable from new.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Finish range</h3>
              <p className="text-sm text-muted leading-relaxed">Dark woodgrains, brushed bronze and copper effects, deep mattes, industrial concrete, solid brand colours. Hundreds of finishes available — physical samples provided for sign-off before any commitment.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Reversible</h3>
              <p className="text-sm text-muted leading-relaxed">Film can be removed cleanly at a future refit, leaving the substrate intact. For leased sites, this removes the restoration cost that comes with permanent surface changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Restaurant vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Kitchen, bedroom furniture and reception desk wrapping for hotel refurbishments.</p>
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and decorative window vinyl for restaurant and bar glazing.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for restaurant and bar fit-out contractors.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a restaurant refresh?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope restaurant wrapping programmes across South Yorkshire and the East Midlands. Tell us what surfaces you have — we&apos;ll advise on specification and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Restaurant Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
