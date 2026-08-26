import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Nottingham | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Nottingham for offices, hotels, retail and student accommodation. Reduces heat and glare through existing glazing without replacing windows. WRPX covers NG1 city centre, Lace Market, Nottingham Business Park and all NG postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Nottingham — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Nottingham and Nottinghamshire. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, student accommodation, schools and healthcare. NG1 city centre offices, Lace Market, Canal Quarter, Nottingham Business Park, Boots campus Beeston NG9 and across the East Midlands."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/window-film/solar-control-film-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Nottingham offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Nottingham and Nottinghamshire offices. NG1 city centre buildings, Lace Market, Canal Quarter, Nottingham Business Park, the A60 corridor, Boots campus in Beeston NG9, and all business parks on the M1 and A52 corridors around Nottingham. Free survey and fixed price across the NG postcode zone.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Nottingham office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film (TSER rating of 40–60%) can reduce the solar heat entering through the glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Nottingham city centre offices. The exact reduction depends on the existing glass spec, orientation and the film selected.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film reduce heating costs in winter in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a low-emissivity solar control film also reduces heat loss through glazing in winter, meaning the same film that keeps summer heat out also helps retain warmth in winter. This dual-season benefit is a significant consideration for Nottingham office occupiers and FM managers looking to reduce overall energy consumption.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar control film be fitted without emptying the Nottingham office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Nottingham offices with no fumes, no dust and no building works. Most window film installations complete without any interruption to normal office operations.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar control film work on all Nottingham glazing types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar film is compatible with most standard single and double-glazed units. It is not recommended for some sealed unit types with specific Low-E coatings where additional solar film could cause thermal stress fracturing. We assess the glazing type at survey — we will only recommend film where it is safe to apply.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Nottingham offices?",
    a: "Yes — we install solar control film across Nottingham and Nottinghamshire offices. NG1 city centre buildings, Lace Market, Canal Quarter, Nottingham Business Park, the A60 corridor, Boots campus in Beeston NG9, and all business parks on the M1 and A52 corridors around Nottingham. Free survey and fixed price across the NG postcode zone.",
  },
  {
    q: "How much heat does solar film reduce in a Nottingham office?",
    a: "A quality solar control film (TSER rating of 40–60%) can reduce the solar heat entering through the glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Nottingham city centre offices. The exact reduction depends on the existing glass spec, orientation and the film selected.",
  },
  {
    q: "Does solar film reduce heating costs in winter in Nottingham?",
    a: "Yes — a low-emissivity solar control film also reduces heat loss through glazing in winter, meaning the same film that keeps summer heat out also helps retain warmth in winter. This dual-season benefit is a significant consideration for Nottingham office occupiers and FM managers looking to reduce overall energy consumption.",
  },
  {
    q: "Can solar control film be fitted without emptying the Nottingham office?",
    a: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Nottingham offices with no fumes, no dust and no building works. Most window film installations complete without any interruption to normal office operations.",
  },
  {
    q: "Does solar control film work on all Nottingham glazing types?",
    a: "Solar film is compatible with most standard single and double-glazed units. It is not recommended for some sealed unit types with specific Low-E coatings where additional solar film could cause thermal stress fracturing. We assess the glazing type at survey — we will only recommend film where it is safe to apply.",
  },
];

export default function SolarControlFilmNottinghamPage() {
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/solar-control-film/" className="text-accent hover:underline">Solar Control Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Nottingham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Nottingham offices,
            hotels, retail and student accommodation. Reduces heat gain and glare through existing
            glazing without replacement — a cost-effective upgrade for overheating Nottingham
            buildings. We cover the full NG postcode zone and wider East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nottingham specifically */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film in Nottingham — the problem and the fix
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham&apos;s office market includes a significant proportion of buildings with
              large glazed facades — particularly the newer Grade A developments in NG1 city
              centre, the Canal Quarter and Nottingham Business Park. South and west-facing
              elevations in these buildings overheat during spring and summer, increasing
              air-conditioning load, reducing occupant comfort and affecting productivity.
            </p>
            <p>
              The Lace Market and converted warehouse offices present a different problem:
              large original industrial windows with single glazing that admits significant
              solar gain in summer and loses heat rapidly in winter. Solar control film on
              these windows addresses both seasons — reducing summer overheating and improving
              winter heat retention through the same product.
            </p>
            <p>
              Nottingham&apos;s student accommodation stock — serving the University of Nottingham
              at University Park, Jubilee Campus and QMC, and Nottingham Trent across the
              city — regularly overheats in south-facing student bedrooms. Solar control film
              is the most cost-effective retrofit solution for PBSA operators and university
              estates teams managing TM59 overheating risk.
            </p>
            <p>
              Boots campus at Beeston NG9 — one of Nottingham&apos;s largest single-site office
              estates — contains a mix of building ages and glazing systems. Solar film is
              well suited to the older campus buildings where glazing upgrade is not practical
              on a building-by-building basis.
            </p>
          </div>
        </div>
      </section>

      {/* Film types and applications */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film types we install across Nottingham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Neutral solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-reflectivity film that reduces solar heat gain significantly without changing
                the external appearance of the glazing. The most common specification for Nottingham
                city centre offices and commercial buildings where facade aesthetics are a client
                consideration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reflective solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Higher-performance reflective film for south and west-facing glazing in Nottingham
                offices with severe overheating. Delivers greater heat rejection than neutral film
                at the cost of a more visible reflective external appearance. Best suited to
                commercial rather than residential applications.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dual-season low-emissivity film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ceramic or spectrally selective film that reduces solar heat gain in summer while
                also reducing heat loss through the glass in winter. Particularly relevant for
                Nottingham&apos;s Lace Market and older warehouse conversions with large single-glazed
                areas where a year-round energy saving is the target.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare-reduction film for south-facing Nottingham office workstations where direct
                or reflected sunlight causes screen glare and occupant discomfort. Can be combined
                with solar control properties or specified for glare reduction only where heat is
                not the primary complaint.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Combined solar and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirrored or tinted film that provides solar heat rejection alongside
                daytime privacy for ground-floor Nottingham offices and retail premises. Reduces
                heat, controls glare and prevents external visibility into the space during
                daylight hours in a single product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">UV-blocking solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Film specified primarily for UV rejection — protecting Nottingham office furniture,
                flooring and merchandise from UV-induced fading and degradation. Most solar control
                films block 99% of UV as standard; specifying for UV alone is most common in retail
                and hospitality settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Nottingham
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Nottingham offices — NG1 and city centre.</strong> South and west-facing glazed offices in NG1, Experian and Capital One campuses, professional services firms in the Lace Market and Canal Quarter, city-centre co-working spaces. Free survey and next-week installation capacity across NG1.
            </p>
            <p>
              <strong className="text-foreground">Nottingham hotels.</strong> Hotel bedroom solar control film — south-facing rooms overheating during summer, reducing guest comfort and air-conditioning efficiency. Frosted or tinted film for en-suite privacy alongside solar performance. Nottingham city centre and out-of-town hotel estates on the A52 and M1 corridors.
            </p>
            <p>
              <strong className="text-foreground">Student accommodation.</strong> University of Nottingham (University Park, Jubilee Campus) and Nottingham Trent student accommodation blocks where south-facing bedrooms overheat. PBSA operators and university estates teams — we schedule during vacations and summer voids to minimise resident disruption.
            </p>
            <p>
              <strong className="text-foreground">Nottingham retail.</strong> Retail solar control film for shopfronts and display areas in Victoria Shopping Centre, Broadmarsh area, Hockley, West Bridgford NG2 and all Nottingham retail. UV protection for merchandise, glare reduction for staff and customers, heat control in summer.
            </p>
            <p>
              <strong className="text-foreground">Nottingham schools and academies.</strong> Solar control film for south-facing classroom glazing. We work with Nottingham and Nottinghamshire academies, schools and MAT portfolio estate teams — scheduling during holidays and half-terms to avoid disruption to teaching.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Nottingham — common questions
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
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National page covering all solar control film types, specifications and applications.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar film for offices</h3>
              <p className="mt-2 text-sm text-muted">Solar control film for commercial office buildings — glazed facades, meeting rooms, open plan.</p>
            </Link>
            <Link href="/architectural-wrap-offices-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office architectural wrap Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Nottingham office surfaces — kitchen units, reception desks, joinery.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Solar control and privacy film for PBSA, university halls and student accommodation blocks.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating Nottingham building?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Nottingham and the East Midlands. We assess the glazing,
              specify the right film for your application and give you a fixed price. Commercial
              and residential — most Nottingham solar film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
