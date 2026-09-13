import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Interior Vinyl Wrapping Coventry | Shop-Front Panels, Counters & Fixtures | WRPX",
  description:
    "Retail interior vinyl wrapping in Coventry — shop-front panel boards, counter fascias, gondola end-panels, display plinths and branded fixture surfaces. Overnight, no trading disruption. We cover CV1 city centre, West Orchards, Belgrade Plaza, Warwick Road and all Coventry retail zones. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-retail-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail interior vinyl wrapping Coventry — shop-front panels, counters and branded fixtures",
  "Architectural vinyl wrapping for retail interiors across Coventry and Warwickshire. Shop-front panel boards, counter fascias, gondola end-panels, display plinths, fitting room panels and branded fixture surfaces wrapped in commercial-grade film. CV1 city centre, West Orchards Shopping Centre, Coventry Building Society Arena zone, Belgrade Plaza, Warwick Road retail and Solihull-corridor sites. Overnight and out-of-hours installation — no closure required."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-retail/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/architectural-wrap-retail-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap retail interiors in Coventry city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Coventry and all CV postcodes. CV1 city centre, West Orchards Shopping Centre, Belgrade Plaza, the Upper Precinct and Lower Precinct, Warwick Road retail, Arena Retail Park near the CBS Arena CV6, and across Warwickshire and the West Midlands corridor. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6. Free survey across the CV postcode area, fixed price agreed before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Can vinyl wrapping be done without closing the Coventry shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overnight and out-of-hours installation is our standard operating model across Coventry retail. A counter fascia or shop-front panel board typically wraps in a single overnight session. For larger programmes across multiple areas or multi-site Coventry rollouts, we phase across successive overnight windows so trading continues throughout — coordinating directly with store managers and shopping centre management as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Which Coventry retail surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls, till desk fronts and concession back-bar areas. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Coventry retail fit-out contractors and brand rollout teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for retail fit-out contractors and brand rollout managers with Coventry programmes. We attend under your brand, use your job documentation and provide photographic sign-off in your agreed format. For multi-site retail brands with Coventry and wider West Midlands locations, we provide consistent film specification and installation standard across every site on the programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Coventry with other West Midlands retail sites on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Coventry sits at the junction of the M1/M6/M45 corridors, making it a natural hub for multi-site West Midlands programmes. Coventry CV1 is approximately 20 miles from Birmingham city centre and 25 miles from Leicester LE1 via the M69. For brand rollout programmes covering Coventry, Birmingham and Leicester simultaneously, we can schedule all sites across a single mobilisation, reducing travel overhead significantly.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap retail interiors in Coventry city centre?",
    a: "Yes — we cover Coventry and all CV postcodes. CV1 city centre, West Orchards Shopping Centre, Belgrade Plaza, the Upper Precinct and Lower Precinct, Warwick Road retail, Arena Retail Park near the CBS Arena CV6, and across Warwickshire and the West Midlands corridor. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6. Free survey across the CV postcode area, fixed price agreed before any commitment.",
  },
  {
    q: "Can vinyl wrapping be done without closing the Coventry shop?",
    a: "Yes. Overnight and out-of-hours installation is our standard operating model across Coventry retail. A counter fascia or shop-front panel board typically wraps in a single overnight session. For larger programmes across multiple areas or multi-site Coventry rollouts, we phase across successive overnight windows so trading continues throughout — coordinating directly with store managers and shopping centre management as needed.",
  },
  {
    q: "Which Coventry retail surfaces can be vinyl wrapped?",
    a: "Shop-front panel boards and bulkhead fascias, counter and cash desk fascias, gondola end-panels and display plinths, fitting room panel surrounds, built-in shelving back-panels, branded feature walls, till desk fronts and concession back-bar areas. Surfaces need to be flat or near-flat and in sound condition — we assess at survey before any commitment.",
  },
  {
    q: "Do you work with Coventry retail fit-out contractors and brand rollout teams?",
    a: "Yes — we work white-label for retail fit-out contractors and brand rollout managers with Coventry programmes. We attend under your brand, use your job documentation and provide photographic sign-off in your agreed format. For multi-site retail brands with Coventry and wider West Midlands locations, we provide consistent film specification and installation standard across every site on the programme.",
  },
  {
    q: "Can you combine Coventry with other West Midlands retail sites on the same programme?",
    a: "Yes — Coventry sits at the junction of the M1/M6/M45 corridors, making it a natural hub for multi-site West Midlands programmes. Coventry CV1 is approximately 20 miles from Birmingham city centre and 25 miles from Leicester LE1 via the M69. For brand rollout programmes covering Coventry, Birmingham and Leicester simultaneously, we can schedule all sites across a single mobilisation, reducing travel overhead significantly.",
  },
];

export default function ArchitecturalWrapRetailCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Coventry Retail Interiors
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail interior vinyl wrapping in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps retail interiors across Coventry and Warwickshire. Shop-front panel
            boards, counter fascias, gondola end-panels, display plinths and branded fixture
            surfaces — wrapped overnight in commercial-grade architectural film. No closure, no
            trading disruption. We cover CV1 city centre, West Orchards, Belgrade Plaza, Warwick
            Road and the wider Coventry and West Midlands retail zone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Retail Survey →
            </Link>
            <Link href="/architectural-wrap-retail/" className="btn-secondary">
              Retail Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s retail market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry&apos;s retail scene is anchored by West Orchards Shopping Centre CV1 — a
              two-level covered centre in the city core housing a mix of national multiples and
              independents. The adjacent Upper Precinct and Lower Precinct pedestrian zones
              extend the city centre retail offer, and the Belgrade Plaza development nearby
              adds a further cluster of food-and-beverage and retail units. Surface refresh
              work in these environments typically involves counter fascias, display plinths and
              gondola end-panels in multi-unit overnight programmes.
            </p>
            <p>
              Warwick Road running south-east from the city centre is Coventry&apos;s main arterial
              retail strip, hosting a combination of neighbourhood retail, food-service operators
              and professional services with frontages and counters that are regular candidates
              for vinyl wrapping. Further east, the Arena Retail Park CV6 near the CBS Arena
              (formerly Ricoh Arena) is a modern out-of-town retail park with a mix of big-box
              and mid-size tenants — the kind of fixture-heavy units where counter and gondola
              wrapping significantly reduces refurbishment costs compared to joinery replacement.
            </p>
            <p>
              For retail brands on multi-site rollout programmes, Coventry&apos;s position at the
              M1/M6/M45 junction makes it one of the most efficient Midlands staging points.
              Coventry is approximately 20 miles from Birmingham city centre on the A45 and M6,
              25 miles from Leicester LE1 via the M69, and 40 miles from Northampton on the M1.
              A single mobilisation from South Yorkshire can cover Coventry, Leicester and
              Birmingham retail sites within a two- or three-day programme without repositioning
              overnight.
            </p>
            <p>
              Coventry University — the city&apos;s largest employer with a substantial campus
              across CV1 — also generates recurring demand for retail-adjacent surfaces: the
              Students&apos; Union commercial units, campus café and food-service counters, and
              retail concessions embedded in campus buildings. These are often programmed
              during term breaks when trading disruption risk is lower.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail surfaces we wrap in Coventry
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front panel boards</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The board panels behind glazed shop-fronts and the bulkhead fascia panels
                above the glazed zone are the highest-impact surfaces for a Coventry retail
                unit. A single overnight wrap transforms the unit frontage without any
                structural change.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and cash desk fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter front panels and cash desk fascias in Coventry retail and food-service
                units. Wrapped overnight in commercial-grade film — same finish quality as new
                joinery at a fraction of the cost and without the lead time.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panels and display plinths</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gondola ends and freestanding display plinths in Coventry retail units.
                For multi-unit retail brands, wrapping end-panels in a refreshed brand finish
                is significantly faster and cheaper than fixture replacement — and delivers
                identical visual results.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting room door and panel surrounds in Coventry fashion retail — the surfaces
                that show wear and graffiti fastest. Wrapping replaces the worn finish
                overnight without removing and re-installing the fitting room structure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand-colour and texture feature walls in Coventry retail units — wrapped in
                solid colour, wood-effect or stone-effect film as specified by the brand
                standard. For multi-site brands, we match to the same film specification
                across every Coventry and wider West Midlands location.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Concession back-bar and service areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back-bar panels, service area cabinetry fronts and fitted display unit fascias
                in Coventry food-and-beverage concessions and retail cafés. Overnight
                installation while the unit is closed — ready for trading the next morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site / rollout */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site retail rollouts through Coventry
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Coventry is a natural staging point for retail brand rollout programmes covering
              the Midlands. Its position at the M1/M6/M45 junction means that Coventry,
              Leicester, Birmingham and Northampton sites can be covered in a single two- or
              three-day programme without repositioning between nights.
            </p>
            <p>
              <strong className="text-foreground">Film consistency across sites.</strong> For
              brand rollout programmes, exact film specification consistency is critical — the
              same colour, texture and finish across every Coventry and Midlands site on the
              programme. We confirm material batch matching before any multi-site programme
              begins.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We work white-label for retail fit-out contractors and brand rollout managers
              across Coventry and the West Midlands. We arrive under your brand, carry your
              paperwork and sign off each site with photographic documentation in your format.
              The retailer and centre management see your brand throughout.
            </p>
            <p>
              <strong className="text-foreground">Shopping centre management.</strong> We have
              experience working within shopping centre permit and contractor management systems.
              For Coventry retail programmes within West Orchards or similar managed environments,
              we handle RAMS, insurances and centre management liaison as part of the programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry retail vinyl wrapping — common questions
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
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and decorative film for Coventry retail and office glazing.</p>
            </Link>
            <Link href="/architectural-wrap-retail-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Retail wrapping across Highcross, Fosse Park and Leicester city centre — pairs naturally with Coventry programmes.</p>
            </Link>
            <Link href="/retail-fitout-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail fit-out graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for retail fit-out contractors and brand rollouts across the Midlands.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a retail refresh or multi-site programme in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail wrapping programmes across Coventry and the West Midlands.
              Tell us what surfaces and how many sites — we&apos;ll advise on specification,
              scheduling and overnight logistics.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Coventry Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
