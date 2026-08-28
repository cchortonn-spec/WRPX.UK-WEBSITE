import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping | Shop-Front Panels, Counters & Fixtures | WRPX",
  description:
    "Vinyl wrapping for retail interiors across South Yorkshire and the East Midlands — shop-front panel boards, counter fascias, display plinths, fitting room panels and branded fixture surfaces. Overnight and out-of-hours installation. No trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping — shop fronts, counters and branded fixtures",
  "Architectural vinyl wrapping for retail interiors across South Yorkshire and the East Midlands. Shop-front panel boards, counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces wrapped in commercial-grade film. Overnight and out-of-hours installation works around trading hours — no closure required."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can vinyl wrapping be done without closing the shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work overnight, early morning or during periods when the unit is closed as standard. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or multi-site rollouts, we phase work across successive overnight windows. We coordinate directly with store managers and centre management as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Which retail surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls, till desk fronts and back-bar areas in retail concessions. Surfaces need to be flat or near-flat and in sound condition — we assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match our brand colours exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide physical film samples from the full CoverStyl, Hexis and Avery Dennison range — solid colours, metallic effects, textured surfaces, woodgrains and stone finishes. We match to RAL or Pantone references and advise on the closest available film specification. Sample sign-off before installation is standard on all brand-sensitive retail projects.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple retail sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail programmes are a core part of what we do. We provide a consistent finish specification across every location, work white-label for retail fit-out contractors and brand managers, and deliver photo documentation for each site at handover. Same film specification, same application standard, same process at every site.",
      },
    },
    {
      "@type": "Question",
      name: "How long does retail vinyl wrapping last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter and shop-front surfaces in retail environments typically last 5–8 years with normal use. High-contact areas such as cash desk fascias may show edge wear sooner. We specify film durability by application at survey and advise on finishes appropriate for cleaning chemicals used in the retail environment.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can vinyl wrapping be done without closing the shop?",
    a: "Yes. We work overnight, early morning or during periods when the unit is closed as standard. A counter fascia or shop-front panel can typically be wrapped in a single overnight session. For larger programmes across multiple areas or multi-site rollouts, we phase work across successive overnight windows. We coordinate directly with store managers and centre management as needed.",
  },
  {
    q: "Which retail surfaces can be vinyl wrapped?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls, till desk fronts and back-bar areas in retail concessions. Surfaces need to be flat or near-flat and in sound condition — we assess at survey.",
  },
  {
    q: "Can you match our brand colours exactly?",
    a: "Yes. We provide physical film samples from the full CoverStyl, Hexis and Avery Dennison range — solid colours, metallic effects, textured surfaces, woodgrains and stone finishes. We match to RAL or Pantone references and advise on the closest available film specification. Sample sign-off before installation is standard on all brand-sensitive retail projects.",
  },
  {
    q: "Can you work across multiple retail sites?",
    a: "Yes — multi-site retail programmes are a core part of what we do. We provide a consistent finish specification across every location, work white-label for retail fit-out contractors and brand managers, and deliver photo documentation for each site at handover. Same film specification, same application standard, same process at every site.",
  },
  {
    q: "How long does retail vinyl wrapping last?",
    a: "Counter and shop-front surfaces in retail environments typically last 5–8 years with normal use. High-contact areas such as cash desk fascias may show edge wear sooner. We specify film durability by application at survey and advise on finishes appropriate for cleaning chemicals used in the retail environment.",
  },
];

export default function ArchitecturalWrapRetailPage() {
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
            <span className="text-foreground">Retail Interior Vinyl Wrapping</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Retail interior vinyl wrapping — shop fronts, counters, fixtures and branded surfaces
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Retail interiors accumulate surface wear faster than almost any other commercial environment. Wrapping shop-front panel boards, counter fascias, gondola ends, display plinths and branded fixture surfaces in commercial-grade architectural film refreshes the look at a fraction of the cost of a full refit — and we install overnight so the shop never closes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Retail Survey →
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
            What we wrap in retail environments
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bulkhead fascias, panel boards above and around the shop entrance, and soffit panels in covered shopping centres all take weathering and contact. Wrapping refreshes the branded presentation without removing or replacing the panel structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The counter is the highest-contact surface in any retail unit. Wrapping a tired or scratched counter fascia in a brand colour, marble effect or wood finish transforms the look in hours, not days, without replacement joinery or trading disruption.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola end-caps and display plinths are the silent brand touchpoints in the retail space. Wrapping them in a consistent finish or brand-colour film aligns the fixture to the store aesthetic without replacing the underlying unit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room doors, dividers and surround panels accumulate marks and scuffs from daily use. Wrapping restores a clean finish on the panel faces — consistent across all cubicles — without a joinery replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Built-in shelving back-panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back-panels and feature walls behind product displays are the backdrop to every customer view. Wrapping them in a textured, woodgrain or solid-colour film creates a premium product environment with no redecoration or repainting.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and branded surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand wall panels, tiling around service areas, cladded columns and flat feature walls can all be wrapped. Commercial-grade architectural film in woodgrain, concrete, stone or solid colour gives a premium finish that repainting or retiling cannot match for speed or reversibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight / multi-site */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No trading disruption. Overnight and multi-site capability.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Retail units cannot close for interior work without losing revenue. We schedule all retail wrapping to avoid trading disruption — overnight sessions, early morning, or pre-opening on a designated maintenance day.
            </p>
            <p>
              <strong className="text-foreground">Single-night turnaround.</strong> A counter fascia, shop-front panel or single-area refresh can typically be completed in one overnight session. Two installers working from close of trade to opening can achieve a significant scope of work across even a busy retail unit.
            </p>
            <p>
              <strong className="text-foreground">Multi-site retail programmes.</strong> If you operate or manage multiple retail sites — whether a branded chain, a retail park tenant or a property portfolio — we provide a consistent finish specification and scheduling approach across every location. Same film, same application standard, same handover process and photo documentation at each site. We work white-label for retail fit-out contractors, brand managers and property managers.
            </p>
            <p>
              <strong className="text-foreground">Shopping centre coordination.</strong> We are experienced working within shopping centre environments — coordinating with centre management for out-of-hours access, waste removal and any additional RAMS requirements. We handle this as part of the programme, not as an extra for you to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap retail */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why retailers choose vinyl wrapping over replacement
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-sm text-muted leading-relaxed">New joinery or replacement panels means lead times, delivery, strip-out and installation — often 2–4 weeks of disruption. Wrapping the same surface takes hours to a couple of nights.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost</h3>
              <p className="text-sm text-muted leading-relaxed">Film wrapping typically costs 20–40% of equivalent replacement joinery. On a multi-site programme, the saving per site compounds into a significant budget difference for the same visual result.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Brand consistency</h3>
              <p className="text-sm text-muted leading-relaxed">Film from the same specification batch produces identical colour and texture across every site. There is no batch variation between sites — the finish looks the same on site 1 and site 20.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Reversible</h3>
              <p className="text-sm text-muted leading-relaxed">Film can be removed cleanly at the next refit, leaving the substrate intact. For leased retail units, this avoids the dilapidations cost that comes with permanent surface changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with in retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Retail brand managers and area managers</h3>
              <p className="text-sm text-muted leading-relaxed">We survey, quote and programme directly for brands managing their own estates. White-label available if you prefer the work to be invisible from your client or franchisee&apos;s perspective.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Retail fit-out contractors</h3>
              <p className="text-sm text-muted leading-relaxed">We work as a subcontract wrapping partner within larger fit-out programmes. We integrate with the programme schedule, work within your RAMS and site induction process, and provide consolidated documentation per site.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Property managers and landlords</h3>
              <p className="text-sm text-muted leading-relaxed">Common areas, retail unit handover refreshes and tenant improvement programmes across managed retail parks and shopping centres. We coordinate with centre management and provide RAMS documentation as standard.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Print companies and sign companies</h3>
              <p className="text-sm text-muted leading-relaxed">If your client brief includes architectural wrapping alongside graphics or signage, we act as your subcontract installer for the vinyl wrapping element — branded, consistent and documented so your programme runs clean.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Retail vinyl wrapping — common questions
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

      {/* City pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Retail wrapping by city
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/architectural-wrap-retail-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Retail interior wrapping across Sheffield, Meadowhall and Crystal Peaks.</p>
            </Link>
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
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy, decorative and solar-control film for shop windows and glazed frontages.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts and booth panels for restaurant and bar environments.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors and brand rollouts.</p>
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
              Planning a retail refresh or multi-site programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across South Yorkshire and the East Midlands. Tell us what surfaces and how many sites — we&apos;ll advise on specification, scheduling and pricing.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
