import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Sheffield | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Sheffield — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight and out-of-hours installation across Sheffield S1, Meadowhall, Crystal Peaks and South Yorkshire retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Sheffield — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Sheffield and South Yorkshire. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. Sheffield city centre S1, Meadowhall S9, Crystal Peaks S20, Hillsborough S6 and across South Yorkshire retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/architectural-wrap-retail-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Sheffield and Meadowhall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sheffield is our home base. We cover Sheffield S1 city centre (The Moor, Fargate, Division Street), Meadowhall S9, Crystal Peaks S20, Hillsborough S6 and all South Yorkshire retail. No travel surcharge within Sheffield. We work to shopping centre and retail park management schedules — overnight and pre-trading installations are standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Sheffield shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Sheffield shopping centre installations at Meadowhall, Crystal Peaks and The Moor. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or several Sheffield sites, we phase across successive overnight windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site Sheffield retail programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts are a specific strength. If you manage multiple retail sites across Sheffield (city centre, Meadowhall and Crystal Peaks on the same programme, for example), we provide a consistent film specification, installation standard and scheduling approach across all Sheffield sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to shopping centre management requirements at Meadowhall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are familiar with the operational requirements of major Sheffield shopping centre environments. Meadowhall requires overnight working, permits and mall management coordination for most retail fit-out activity. We work within these constraints as standard — mall management coordination, overnight permits, no-trace departure, and photographic documentation provided as part of every Meadowhall installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Sheffield and Meadowhall?",
    a: "Yes — Sheffield is our home base. We cover Sheffield S1 city centre (The Moor, Fargate, Division Street), Meadowhall S9, Crystal Peaks S20, Hillsborough S6 and all South Yorkshire retail. No travel surcharge within Sheffield. We work to shopping centre and retail park management schedules — overnight and pre-trading installations are standard.",
  },
  {
    q: "Can retail wrapping be done without closing the Sheffield shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Sheffield shopping centre installations at Meadowhall, Crystal Peaks and The Moor. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or several Sheffield sites, we phase across successive overnight windows.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Sheffield?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site Sheffield retail programmes?",
    a: "Yes — multi-site retail rollouts are a specific strength. If you manage multiple retail sites across Sheffield (city centre, Meadowhall and Crystal Peaks on the same programme, for example), we provide a consistent film specification, installation standard and scheduling approach across all Sheffield sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to shopping centre management requirements at Meadowhall?",
    a: "Yes — we are familiar with the operational requirements of major Sheffield shopping centre environments. Meadowhall requires overnight working, permits and mall management coordination for most retail fit-out activity. We work within these constraints as standard — mall management coordination, overnight permits, no-trace departure, and photographic documentation provided as part of every Meadowhall installation.",
  },
];

export default function ArchitecturalWrapRetailSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Sheffield Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Sheffield and South Yorkshire — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture surfaces
            in commercial-grade architectural film. Overnight and out-of-hours installation to
            shopping centre management schedules. Sheffield is our home base: no travel surcharge,
            fast survey response, and consistent availability across Meadowhall, Crystal Peaks
            and the Sheffield city centre retail estate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield&apos;s retail estate spans three distinct zones that generate different
              wrapping demand. Meadowhall S9 — one of the UK&apos;s largest regional shopping
              centres with over 270 stores — operates a rolling programme of brand refresh
              and fit-out activity. Major and minor retail tenants refresh counters, fixtures
              and in-store panel displays on a cycle aligned to seasonal trading periods
              and brand relaunch campaigns. Overnight working within Meadowhall&apos;s operational
              constraints is standard for all installation activity here.
            </p>
            <p>
              The Sheffield city centre retail core — The Moor S1, Fargate and High Street —
              has seen significant investment following the Moor Market redevelopment and
              the ongoing Heart of the City II programme. Independent and branded retailers
              in the S1 core refresh fixtures and counters more frequently than suburban retail,
              responding to the competitive city centre footfall dynamic and brand seasonal
              campaigns.
            </p>
            <p>
              Crystal Peaks S20 in the south-east of Sheffield and Hillsborough S6 to the
              north are the city&apos;s major suburban retail parks. Multi-unit branded retailers
              operating across these sites and Meadowhall simultaneously often require a
              consistent installation partner who can work across all Sheffield locations
              on the same programme without separate mobilisation costs for each site.
            </p>
            <p>
              We are also active in Sheffield&apos;s growing independent retail sector — the
              Antiques Quarter on Abbeydale Road, the Kelham Island boutique retail strip
              and the Division Street independents — where smaller operators periodically
              refresh counter surfaces and shop-front panels on a shorter cycle than branded chains.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Sheffield retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Sheffield retail premises.
                Wrapping a chipped or outdated counter front transforms the customer-facing
                surface in a single overnight session — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Sheffield shopfronts, internal bulkhead fascias and
                display header panels. Wrapping refreshes the visual without new joinery —
                critical for Meadowhall tenants working to tight overnight installation windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Sheffield retail stores.
                High visual impact per panel — wrapping delivers a brand-aligned finish
                update at a fraction of the cost of new display furniture.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels in
                Sheffield fashion and apparel retail. Film specified to handle the daily
                contact load of a high-footfall Sheffield retail environment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Sheffield retail interiors.
                Brand colours, woodgrain finishes and decorative film applied overnight
                as part of a seasonal brand refresh or relaunch campaign.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Sheffield fixtures
                for multi-unit retail rollouts with brand consistency requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site Sheffield retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Sheffield locations — Meadowhall,
              The Moor and Crystal Peaks simultaneously, for example — benefit from a single
              installation partner who can cover all three sites on the same refresh programme.
              We provide consistent film specification, consistent installation standard and
              consistent photographic documentation across every Sheffield site on your programme.
            </p>
            <p>
              For retail fit-out contractors managing Sheffield refurbishment programmes on
              behalf of brand clients, we work white-label as standard. We arrive under your
              company name, coordinate directly with your site contact and shopping centre
              management, and provide sign-off documentation in your required format. The
              retailer and centre management see your company throughout.
            </p>
            <p>
              Sheffield&apos;s proximity to our South Yorkshire base means we can respond to
              short-notice scheduling changes — a cancelled slot reinserted at 48 hours&apos;
              notice, or an additional phase added to a Meadowhall programme mid-campaign.
              No separate mobilisation cost for Sheffield as an add-on to a Yorkshire programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield retail vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Retail window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Sheffield retail premises.</p>
            </Link>
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-2 text-sm text-muted">Seasonal Christmas window graphics installation for Sheffield and South Yorkshire retail.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors across Sheffield and Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Sheffield?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Sheffield, Meadowhall and
              South Yorkshire. Tell us the surfaces, locations and scheduling constraints —
              we&apos;ll advise on film specification and overnight scheduling from our Sheffield base.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Sheffield Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
