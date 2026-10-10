import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Exeter | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Exeter and Devon — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Princesshay Shopping Centre, Guildhall Shopping Centre, Exeter Retail Park and all Exeter EX retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-exeter/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Exeter — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Exeter city and the wider Devon area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Princesshay Shopping Centre EX1, Guildhall Shopping Centre EX4, Exeter High Street EX4, Exeter Retail Park and all Exeter EX retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Exeter", item: "https://www.wrpx.co.uk/window-film/retail-window-film-exeter/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Exeter retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Exeter city and the wider Devon area. Typical uses include fitting room and changing area glazing in clothing retailers at Princesshay EX1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on the High Street EX4 and Sidwell Street EX4 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail quarter around Gandy Street EX4 — Exeter&apos;s boutique shopping lane — is also well-suited to decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Princesshay or Exeter Retail Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Princesshay Shopping Centre — Exeter&apos;s principal open-air and covered retail destination in the city-centre EX1 zone, with over 60 retail and restaurant units — has individual unit glazed frontages where solar gain can affect temperature and merchandise presentation in south-facing positions. Exeter Retail Park on Western Way and the out-of-town retail park provision on the edge of the city have large-format glazed retail buildings where solar-control film reduces solar heat gain by 40 to 79% on exposed south and west-facing glazed frontages. Exeter&apos;s south-westerly position means higher annual sun hours than many UK cities, making solar-control film particularly cost-effective on retail glazing in Devon.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Exeter retail outside the city centre — Newton Abbot, Exmouth, Taunton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Exeter and wider Devon retail postcodes, not just the EX1/EX4 city-centre core. Newton Abbot TQ12 — a significant Devon market town retail centre approximately 20 minutes south of Exeter on the A380 — and Exmouth EX8 to the east are within our standard Exeter-day service area. Taunton TA1 in Somerset to the north-east and Plymouth PL in the far south-west fall within our extended South West service footprint on a project basis. Sidmouth EX10, Honiton EX14 and Axminster EX13 in east Devon are all reachable within a standard Exeter programme day. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Exeter via the M1 south and M5 south to junction 31.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Exeter retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Exeter retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for High Street EX4 and Gandy Street boutique shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Devon retailers — units across Princesshay, Newton Abbot, Exmouth and Taunton — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Exeter retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Exeter retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Princesshay, the Guildhall Shopping Centre, across the High Street and in stand-alone city-centre and edge-of-town Exeter units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Exeter retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Exeter are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Princesshay units where centre management has specific access requirements, early-morning slots are available. A typical Exeter retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmExeterPage() {
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
            <Link href="/window-film/retail-window-film/" className="text-accent hover:underline">Retail Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Exeter</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Exeter &amp; Devon
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Exeter
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Exeter city and
            Devon. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl and
            DDA-compliant glass manifestation. Princesshay Shopping Centre, Guildhall
            Shopping Centre, High Street EX4 and all Exeter EX retail postcodes.
            Installation available during or outside trading hours. Approximately
            3 hours 30 minutes from our South Yorkshire base via the M1 south and M5.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Exeter Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Exeter retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Exeter is Devon&apos;s county city and the commercial, cultural and
              administrative hub of the South West peninsula. With a city population
              approaching 135,000 and a much larger Devon and East Cornwall
              catchment of approximately 600,000, Exeter supports a retail market
              significantly larger than its city population alone suggests. The
              University of Exeter — a Russell Group institution with approximately
              26,000 students — adds a substantial year-round consumer population
              concentrated in the Streatham LS campus zone and the St David&apos;s EX4
              and St James EX4 residential areas.
            </p>
            <p>
              The city-centre retail core is anchored by Princesshay Shopping Centre
              EX1 — Exeter&apos;s principal covered and open-air retail destination,
              rebuilt in 2007 on the site of the original Princesshay pedestrian
              precinct. Princesshay&apos;s mix of national multiples, independent
              boutiques and restaurant units across a cathedral-adjacent open-air
              and covered layout generates consistent demand for frosted privacy
              film, solar-control film and DDA glass manifestation across its
              retail and leisure units.
            </p>
            <p>
              Exeter High Street EX4 runs north from Princesshay, carrying a
              strong mix of national chains, department stores and independent
              retailers with glazed frontages typical of Exeter&apos;s Georgian and
              Victorian commercial building stock. The Guildhall Shopping Centre
              EX4 — a well-established covered mall in the city core — and the
              independent boutique quarter around Gandy Street EX4 provide
              additional retail frontage across a walkable city-centre geography.
            </p>
            <p>
              Exeter&apos;s out-of-town retail is concentrated along the Western Way
              and Honiton Road corridors east of the city centre, with large-format
              retail park buildings carrying significant glazed frontages where
              solar-control film is particularly effective given Exeter&apos;s above-average
              south-westerly sun exposure. Newton Abbot TQ12, Exmouth EX8 and
              Taunton TA1 are all within reach of a standard Exeter programme day.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Exeter
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Exeter retail units at Princesshay, the Guildhall and
                city-centre high-street units. Full-height or banded frosted film —
                clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                Exeter Retail Park and south and west-facing city-centre units —
                keeping floor temperatures comfortable and protecting displayed
                merchandise from UV fading in Devon&apos;s higher-sunshine environment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Exeter retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site Devon installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors in Exeter retail units — frosted bands, etched-effect,
                dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Exeter retail glazing in
                high-footfall locations — the High Street EX4, Princesshay EX1
                and Sidwell Street EX4 — protecting glazing from surface
                scratching and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across Exeter and Devon — Princesshay,
                Newton Abbot, Exmouth and beyond — we supply and install a
                consistent film specification across every site, same product,
                finish and installation standard across the Devon portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exeter retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Princesshay Shopping Centre EX1</strong> —
              Exeter&apos;s principal retail destination, with over 60 units in a
              cathedral-adjacent open-air and covered layout. Glazed frontages
              facing the pedestrian streets and internal covered sections generate
              demand for frosted film, solar-control film and DDA manifestation.
              We work to Princesshay centre management access requirements for
              individual unit installations.
            </p>
            <p>
              <strong className="text-foreground">Exeter High Street &amp; Guildhall EX4</strong> —
              The High Street runs north from Princesshay into the city core,
              carrying department stores, national multiples and independent
              retailers in Georgian and Victorian commercial buildings with a
              variety of glazed frontage types. The Guildhall Shopping Centre —
              Exeter&apos;s older covered mall — carries additional retail units with
              changing-area and frontage glazing requirements.
            </p>
            <p>
              <strong className="text-foreground">Gandy Street &amp; independent quarter EX4</strong> —
              Exeter&apos;s celebrated independent boutique shopping lane, running parallel
              to the High Street. Independent fashion, lifestyle and specialist
              retailers in this area frequently use decorative frosted film and
              etched-effect vinyl treatments on their shop-front glazing.
            </p>
            <p>
              <strong className="text-foreground">Exeter Retail Parks and out-of-town</strong> —
              Large-format retail and DIY stores along the Western Way and Honiton
              Road retail corridors, including Ikea, national DIY and homewares
              retailers in large-glazed buildings where solar-control film on south
              and west-facing glazed frontages is particularly effective. Newton
              Abbot TQ12 to the south is an additional Devon market-town retail
              centre within our standard Exeter programme day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Retail film across Bristol and the South West</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for fitting rooms and retail glazing</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for retail units</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Commercial Window Film</p>
              <p className="mt-1 text-xs text-muted">Full commercial window film service overview</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-exeter/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Exeter</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrap for Exeter PBSA</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Exeter retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the film
              to do. We&apos;ll confirm a specification and price. We cover Princesshay,
              the High Street, Exeter Retail Park, all EX postcodes and the wider
              Devon area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Exeter Quote →
              </Link>
              <Link href="/window-film/retail-window-film/" className="btn-secondary">
                Retail Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
