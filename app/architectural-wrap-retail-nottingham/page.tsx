import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Nottingham | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Nottingham — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight installation across NG1 city centre, Victoria Centre, Intu Broadmarsh, Cornerhouse, Castle Quarter and Nottinghamshire retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Nottingham — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Nottingham and Nottinghamshire. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. NG1 city centre, Victoria Centre, Intu Broadmarsh, Cornerhouse NG1, Castle Quarter, Hockley, Lace Market, Beeston NG9, West Bridgford NG2 and across Nottinghamshire retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/architectural-wrap-retail-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Nottingham and the Victoria Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Nottingham city centre and all Nottinghamshire retail. NG1 city centre (Clumber Street, Upper Parliament Street, Market Square), Victoria Centre, Intu Broadmarsh, Cornerhouse NG1, Castle Quarter, Hockley, Lace Market and across Nottinghamshire. We work to shopping centre management schedules — overnight and pre-trading installations are standard at Victoria Centre and Broadmarsh.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Nottingham shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Nottingham shopping centre installations at the Victoria Centre and Intu Broadmarsh. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple Nottingham areas or several sites, we phase across successive overnight windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site Nottingham retail programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts across Nottinghamshire are a core capability. If you manage multiple sites across Nottingham (Victoria Centre, Broadmarsh and Beeston on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to shopping centre requirements at Nottingham Victoria Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are experienced in the operational requirements of major Nottingham shopping centre environments. Victoria Centre and Intu Broadmarsh require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security coordination and photographic documentation provided as part of every Nottingham shopping centre installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Nottingham and the Victoria Centre?",
    a: "Yes — we cover Nottingham city centre and all Nottinghamshire retail. NG1 city centre (Clumber Street, Upper Parliament Street, Market Square), Victoria Centre, Intu Broadmarsh, Cornerhouse NG1, Castle Quarter, Hockley, Lace Market and across Nottinghamshire. We work to shopping centre management schedules — overnight and pre-trading installations are standard at Victoria Centre and Broadmarsh.",
  },
  {
    q: "Can retail wrapping be done without closing the Nottingham shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Nottingham shopping centre installations at the Victoria Centre and Intu Broadmarsh. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple Nottingham areas or several sites, we phase across successive overnight windows.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Nottingham?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site Nottingham retail programmes?",
    a: "Yes — multi-site retail rollouts across Nottinghamshire are a core capability. If you manage multiple sites across Nottingham (Victoria Centre, Broadmarsh and Beeston on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to shopping centre requirements at Nottingham Victoria Centre?",
    a: "Yes — we are experienced in the operational requirements of major Nottingham shopping centre environments. Victoria Centre and Intu Broadmarsh require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security coordination and photographic documentation provided as part of every Nottingham shopping centre installation.",
  },
];

export default function ArchitecturalWrapRetailNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Nottingham Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Nottingham and Nottinghamshire — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture
            surfaces in commercial-grade architectural film. Overnight installation to shopping
            centre management schedules. NG1 city centre, Victoria Centre, Intu Broadmarsh,
            Cornerhouse, Castle Quarter, Hockley, Lace Market, Beeston NG9 and West Bridgford NG2.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is one of the East Midlands&apos; primary retail destinations, with
              Victoria Centre sitting at the heart of the city — a two-level shopping centre
              with over 100 retailers operating under its roof on Upper Parliament Street NG1.
              Victoria Centre operates a continuous programme of tenant refits and brand
              refreshes. Overnight working is required for all installation activity within
              the centre&apos;s operational hours.
            </p>
            <p>
              Intu Broadmarsh, undergoing a phased return following redevelopment, is adding
              new retail and leisure units to the south side of the city centre. New-fit and
              first-fit installations in Broadmarsh require tight programme management and
              coordination with site management. WRPX is experienced in first-fit wrapping
              within active construction and handover programmes.
            </p>
            <p>
              Cornerhouse NG1 — the leisure and retail complex at the junction of Burton
              Street and Forman Street — covers a different type of brief: food, drink and
              entertainment-adjacent retail with a younger, brand-conscious demographic.
              Counter fascias, branded surface panels and decorative interior wrapping in
              this zone are typically specified in bold colour or high-contrast textured film.
            </p>
            <p>
              Hockley and the Lace Market area generate independent retail and creative-sector
              demand: boutique shopfronts, café and restaurant frontages, and studio-to-retail
              conversion spaces where the finish specification is often more design-led than
              the mainstream shopping centre brief. We cover all NG postcodes and the wider
              Nottinghamshire area.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Nottingham retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Nottingham retail premises.
                A single overnight wrap of a chipped or outdated counter front transforms
                the customer-facing surface — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Nottingham shopfronts, internal bulkhead fascias and
                display header panels. Critical for Victoria Centre and Broadmarsh
                tenants working within overnight installation windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Nottingham retail stores.
                Wrapping delivers a brand-aligned finish update at a fraction of the cost
                of new display furniture — done overnight in Nottingham.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels
                in Nottingham fashion and apparel retail. Film specified to handle the
                daily contact load of high-footfall shopping centre environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Nottingham retail interiors.
                Brand colours, stone-effect, woodgrain and decorative film applied overnight
                as part of a seasonal brand refresh or store relaunch.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Nottingham fixtures
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
            Multi-site Nottingham retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Nottingham locations — Victoria Centre,
              Broadmarsh and Beeston NG9 simultaneously — benefit from a single installation
              partner covering all three sites on the same programme. We provide consistent
              film specification, consistent installation standard and consistent photographic
              documentation across every Nottingham site.
            </p>
            <p>
              For retail fit-out contractors managing Nottingham refurbishment programmes on
              behalf of brand clients, we work white-label as standard. We arrive under your
              company name, coordinate directly with your site contact and shopping centre
              management, and provide sign-off documentation in your required format. The
              retailer and centre management see your company throughout.
            </p>
            <p>
              Nottingham sits at the heart of our East Midlands coverage area — Sheffield is
              45 minutes north on the M1, Derby is 15 minutes west on the A52, Leicester is
              25 minutes south. Multi-city East Midlands retail programmes are covered without
              separate mobilisation costs for each location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham retail vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Retail window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Nottingham retail premises.</p>
            </Link>
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Seasonal Christmas window graphics installation for Victoria Centre, Broadmarsh and Nottinghamshire retail.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors across Nottingham and the East Midlands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Nottingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Nottingham, Victoria Centre
              and Nottinghamshire. Tell us the surfaces, locations and scheduling
              constraints — we&apos;ll advise on film specification and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
