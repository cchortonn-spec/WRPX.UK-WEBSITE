import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Leeds | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Leeds — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight and out-of-hours installation across Leeds LS1–LS7, Trinity Leeds, Victoria Gate, White Rose and West Yorkshire retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Leeds — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Leeds and West Yorkshire. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. Leeds city centre LS1, Trinity Leeds, Victoria Gate, White Rose Shopping Centre and across West Yorkshire retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/architectural-wrap-retail-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Leeds and Trinity Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Leeds city centre and all West Yorkshire retail. Leeds LS1 city centre (Briggate, The Headrow, Bond Street), Trinity Leeds, Victoria Gate, the Merrion Centre, White Rose Shopping Centre LS11, Kirkstall Bridge LS5 retail park and across West Yorkshire. We work to shopping centre management schedules — overnight and pre-trading installations are standard at Trinity Leeds and Victoria Gate.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Leeds shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Leeds shopping centre installations at Trinity Leeds, Victoria Gate and the Merrion Centre. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or several Leeds sites, we phase across successive overnight windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site Leeds retail programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts across West Yorkshire are a specific strength. If you manage multiple retail sites across Leeds (city centre, Trinity Leeds and White Rose on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to shopping centre management requirements at Trinity Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are familiar with the operational requirements of major Leeds shopping centre environments. Trinity Leeds and Victoria Gate require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security briefing where required, and photographic documentation provided as part of every Leeds shopping centre installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Leeds and Trinity Leeds?",
    a: "Yes — we cover Leeds city centre and all West Yorkshire retail. Leeds LS1 city centre (Briggate, The Headrow, Bond Street), Trinity Leeds, Victoria Gate, the Merrion Centre, White Rose Shopping Centre LS11, Kirkstall Bridge LS5 retail park and across West Yorkshire. We work to shopping centre management schedules — overnight and pre-trading installations are standard at Trinity Leeds and Victoria Gate.",
  },
  {
    q: "Can retail wrapping be done without closing the Leeds shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Leeds shopping centre installations at Trinity Leeds, Victoria Gate and the Merrion Centre. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or several Leeds sites, we phase across successive overnight windows.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Leeds?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site Leeds retail programmes?",
    a: "Yes — multi-site retail rollouts across West Yorkshire are a specific strength. If you manage multiple retail sites across Leeds (city centre, Trinity Leeds and White Rose on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to shopping centre management requirements at Trinity Leeds?",
    a: "Yes — we are familiar with the operational requirements of major Leeds shopping centre environments. Trinity Leeds and Victoria Gate require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security briefing where required, and photographic documentation provided as part of every Leeds shopping centre installation.",
  },
];

export default function ArchitecturalWrapRetailLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leeds Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Leeds and West Yorkshire — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture
            surfaces in commercial-grade architectural film. Overnight and out-of-hours
            installation to shopping centre management schedules. Leeds city centre LS1,
            Trinity Leeds, Victoria Gate, White Rose and across West Yorkshire retail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds&apos; retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is the UK&apos;s largest city outside London by population and its retail
              estate reflects that scale. Trinity Leeds — the 1.1 million sq ft city-centre
              shopping centre opened in 2013 — operates a rolling programme of brand refresh
              and fit-out activity across its 120+ tenants. Overnight working within Trinity
              Leeds&apos;s operational requirements is standard for all installation activity:
              permits, security coordination and no-trace departure protocols are part
              of every visit.
            </p>
            <p>
              Victoria Gate — the premium retail quarter anchored by John Lewis — carries
              a different brief: luxury and aspirational retail tenants with higher
              specification requirements and a polished brand aesthetic. Counter fascias,
              boutique fixture surfaces and fitting room panels in this zone are typically
              specified in stone-effect film, brushed metal-effect or premium woodgrain —
              overnight installation is the norm.
            </p>
            <p>
              The Leeds city centre core — Briggate LS1, The Headrow and Vicar Lane —
              has both branded and independent retail. Bond Street Shopping Centre,
              the Merrion Centre and the expanding Kirkgate Market area generate
              regular wrapping demand from mid-market branded operators refreshing
              seasonal campaign graphics and counter finishes.
            </p>
            <p>
              White Rose Shopping Centre LS11 in south Leeds is the city&apos;s major
              out-of-town retail destination. Multi-unit branded retailers operating
              across White Rose, Trinity Leeds and the city centre simultaneously
              typically require a single installation partner who can cover all Leeds
              locations on the same programme without separate mobilisation costs.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leeds retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Leeds retail premises.
                A single overnight wrap of a chipped or outdated counter front transforms
                the customer-facing surface — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Leeds shopfronts, internal bulkhead fascias and
                display header panels. Critical for Trinity Leeds and Victoria Gate
                tenants working within tight overnight installation windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Leeds retail stores.
                Wrapping delivers a brand-aligned finish update at a fraction of the cost
                of new display furniture — done overnight in Leeds.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels
                in Leeds fashion and apparel retail. Film specified to handle the daily
                contact load of high-footfall Leeds shopping centre environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Leeds retail interiors.
                Brand colours, stone-effect, woodgrain and decorative film applied overnight
                as part of a seasonal brand refresh or store relaunch.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Leeds fixtures
                for multi-unit brand rollouts with consistency requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site Leeds retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Leeds locations — Trinity Leeds,
              Victoria Gate and White Rose simultaneously — benefit from a single installation
              partner covering all three sites on the same programme. We provide consistent
              film specification, consistent installation standard and consistent photographic
              documentation across every Leeds site.
            </p>
            <p>
              For retail fit-out contractors managing Leeds refurbishment programmes on behalf
              of brand clients, we work white-label as standard. We arrive under your company
              name, coordinate directly with your site contact and shopping centre management,
              and provide sign-off documentation in your required format. The retailer and
              centre management see your company throughout.
            </p>
            <p>
              Leeds sits at the heart of our Yorkshire coverage area — Sheffield is 30 minutes
              to the south, Bradford 15 minutes to the west, Harrogate 15 minutes to the north.
              Multi-city Yorkshire retail programmes are covered without separate mobilisation
              costs for each location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds retail vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Retail window film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Leeds retail premises.</p>
            </Link>
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics Leeds</h3>
              <p className="mt-2 text-sm text-muted">Seasonal Christmas window graphics installation for Trinity Leeds, Victoria Gate and West Yorkshire retail.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors across Leeds and Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Leeds?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Leeds, Trinity Leeds
              and West Yorkshire. Tell us the surfaces, locations and scheduling
              constraints — we&apos;ll advise on film specification and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leeds Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
