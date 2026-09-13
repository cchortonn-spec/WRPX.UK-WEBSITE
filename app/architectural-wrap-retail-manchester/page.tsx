import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Manchester | Shop Counters, Fixtures & Panels | WRPX",
  description:
    "Retail interior vinyl wrapping across Manchester — counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces. Overnight installation across the Arndale, Trafford Centre, NOMA, Spinningfields, Northern Quarter, Market Street and Greater Manchester retail. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Manchester — counters, fixtures and branded surfaces",
  "Architectural vinyl wrapping for retail interiors across Manchester and Greater Manchester. Counter fascias, gondola end-panels, display plinths, fitting room panels, shop-front panel boards and branded fixture surfaces wrapped in commercial-grade film. Manchester Arndale, Trafford Centre, NOMA M4, Spinningfields M3, Northern Quarter, Market Street M1, Piccadilly Gardens and across Greater Manchester retail. Overnight and out-of-hours installation, no trading disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/architectural-wrap-retail-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors across Manchester and the Trafford Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Manchester city centre and Greater Manchester retail. Manchester Arndale M4, Trafford Centre M17, NOMA M4, Spinningfields M3, Northern Quarter M1, Market Street, Piccadilly Gardens, Salford Quays and across Greater Manchester. We work to shopping centre management schedules — overnight and pre-trading installations are standard at the Arndale and Trafford Centre.",
      },
    },
    {
      "@type": "Question",
      name: "Can retail wrapping be done without closing the Manchester shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Manchester shopping centre installations at the Arndale and Trafford Centre. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple Manchester areas or several sites, we phase across successive overnight windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on multi-site Manchester retail programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts across Greater Manchester are a core capability. If you manage multiple sites across Manchester (Arndale city centre and Trafford Centre on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can WRPX work to Trafford Centre management requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are experienced working within major Manchester shopping centre environments. The Trafford Centre and Manchester Arndale require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security coordination and photographic documentation provided as part of every Manchester shopping centre installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors across Manchester and the Trafford Centre?",
    a: "Yes — we cover Manchester city centre and Greater Manchester retail. Manchester Arndale M4, Trafford Centre M17, NOMA M4, Spinningfields M3, Northern Quarter M1, Market Street, Piccadilly Gardens, Salford Quays and across Greater Manchester. We work to shopping centre management schedules — overnight and pre-trading installations are standard at the Arndale and Trafford Centre.",
  },
  {
    q: "Can retail wrapping be done without closing the Manchester shop?",
    a: "Yes. We work overnight or during early-morning pre-trading windows — standard practice for Manchester shopping centre installations at the Arndale and Trafford Centre. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple Manchester areas or several sites, we phase across successive overnight windows.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped in Manchester?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room door faces and partition panels, built-in shelving back-panels, branded feature walls and till desk fronts. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work on multi-site Manchester retail programmes?",
    a: "Yes — multi-site retail rollouts across Greater Manchester are a core capability. If you manage multiple sites across Manchester (Arndale city centre and Trafford Centre on the same programme, for example), we provide consistent film specification, installation standard and scheduling across all sites. We work white-label for retail fit-out contractors and brand rollout teams as standard.",
  },
  {
    q: "Can WRPX work to Trafford Centre management requirements?",
    a: "Yes — we are experienced working within major Manchester shopping centre environments. The Trafford Centre and Manchester Arndale require overnight working and contractor coordination for most retail fit-out activity. We work within these constraints as standard: overnight permits, no-trace departure, security coordination and photographic documentation provided as part of every Manchester shopping centre installation.",
  },
];

export default function ArchitecturalWrapRetailManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Manchester Retail
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Manchester and Greater Manchester — counter fascias,
            gondola end-panels, display plinths, fitting room panels and branded fixture
            surfaces in commercial-grade architectural film. Overnight installation to shopping
            centre management schedules. Manchester Arndale, Trafford Centre, NOMA, Spinningfields,
            Northern Quarter, Market Street and across Greater Manchester retail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s retail market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester Arndale — the city&apos;s 1.4 million sq ft anchor shopping centre on
              Market Street M4 — is one of the UK&apos;s busiest retail destinations. With over
              200 stores operating across two levels, the Arndale operates a rolling programme
              of tenant refits, brand refreshes and counter replacements. All installation
              activity is overnight: the Arndale&apos;s management requirements include
              contractor induction, overnight access permits and clean-site departure by
              opening. WRPX is experienced in managing all of this as part of every
              Manchester Arndale installation.
            </p>
            <p>
              Trafford Centre M17 — the largest enclosed shopping centre in the UK outside
              London — carries a premium retail and leisure brief. Its ornate interior design
              sets a high specification bar for any surface treatment visible to customers.
              Counter fascias and fixture wrapping in the Trafford Centre typically requires
              film in wood-effect, stone-effect or premium solid colour, with clean edges and
              a high-quality finish that blends with the centre&apos;s aesthetic.
            </p>
            <p>
              NOMA M4 — the 20-acre mixed-use development north of the Arndale, anchored by
              the Co-op headquarters — is producing a growing stock of modern commercial
              retail units where brand-led interior finishes are the standard. Spinningfields
              M3 brings financial and legal district retail, with a professional and corporate
              brief that typically runs to brushed metallic and premium neutral finishes.
            </p>
            <p>
              Northern Quarter M1 and M4 generates the highest concentration of independent
              and boutique retail in the city: café and bar fronts, studio-retail crossovers,
              record shops, independent fashion and food. Wrapping here tends to be more
              design-led — bold colour, exposed-brick complements and custom decorative
              film — installed overnight or during quieter weekday periods.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Manchester retail interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Service counters and point-of-sale desks across Manchester retail premises.
                A single overnight wrap of a chipped or outdated counter front transforms
                the customer-facing surface — no structural works, no trading loss.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards and bulkheads</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Panel boards on Manchester shopfronts, internal bulkhead fascias and
                display header panels. Critical for Arndale and Trafford Centre tenants
                working within tight overnight installation windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and free-standing display plinths in Manchester retail stores.
                Wrapping delivers a brand-aligned finish update at a fraction of the cost
                of new display furniture — done overnight in Manchester.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels and surrounds</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door faces, partition panels and interior surround panels
                in Manchester fashion and apparel retail. Film specified to handle the
                daily contact load of high-footfall shopping centre environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall panels and back-wall display areas in Manchester retail interiors.
                Brand colours, stone-effect, woodgrain and decorative film applied overnight
                as part of a seasonal brand refresh or store relaunch.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fixture fascias and shelving panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in shelving back-panels, retail fixture fascias and branded display
                unit surfaces. Consistent film specification across all Manchester fixtures
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
            Multi-site Manchester retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Branded retailers operating across multiple Manchester locations — Arndale,
              Trafford Centre and Salford Quays simultaneously — benefit from a single
              installation partner covering all sites on the same programme. We provide
              consistent film specification, consistent installation standard and consistent
              photographic documentation across every Manchester site.
            </p>
            <p>
              For retail fit-out contractors managing Manchester refurbishment programmes on
              behalf of brand clients, we work white-label as standard. We arrive under your
              company name, coordinate directly with your site contact and shopping centre
              management, and provide sign-off documentation in your required format. The
              retailer and centre management see your company throughout.
            </p>
            <p>
              Manchester sits at the western edge of our Northern England coverage area —
              Leeds is 45 minutes east on the M62, Sheffield is 1 hour south-east, Liverpool
              is 35 minutes west. Multi-city Northern England retail programmes covering
              Manchester, Leeds and Sheffield are managed without separate mobilisation
              for each city.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester retail vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Retail window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and decorative window film for Manchester retail premises.</p>
            </Link>
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics Manchester</h3>
              <p className="mt-2 text-sm text-muted">Seasonal Christmas window graphics installation for the Arndale, Trafford Centre and Greater Manchester retail.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors across Manchester and Greater Manchester.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh in Manchester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Manchester, the Trafford
              Centre and Greater Manchester. Tell us the surfaces, locations and scheduling
              constraints — we&apos;ll advise on film specification and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
