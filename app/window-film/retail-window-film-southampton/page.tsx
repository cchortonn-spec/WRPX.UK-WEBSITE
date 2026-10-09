import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Southampton | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Southampton and Hampshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. WestQuay Shopping Centre, Bargate, West Quay Retail Park, Hedge End and all Southampton SO retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-southampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Southampton — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Southampton city and the wider Hampshire area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. WestQuay Shopping Centre SO15, Bargate SO14, West Quay Retail Park SO15, Hedge End Retail Park SO30, Eastleigh SO50 and all Southampton SO retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Southampton", item: "https://www.wrpx.co.uk/window-film/retail-window-film-southampton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Southampton retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Southampton city and Hampshire. Typical uses include fitting room and changing area glazing in clothing retailers at WestQuay SO15 and Bargate SO14 (full-height frosted for complete privacy or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on Above Bar Street SO14 and Hanover Buildings SO14 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail area around Bedford Place SO15 and the Shirley High Street SO15 are also well-suited to decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at WestQuay or Hedge End?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WestQuay Shopping Centre — Southampton&apos;s principal covered retail destination on Western Esplanade SO15, with over 100 retail and restaurant units and significant glazed atrium areas — has glazed frontages where solar gain can affect individual units. Hedge End Retail Park SO30 and West Quay Retail Park SO15 are exposed to south and west sun on large-format glazed retail buildings, where solar-control film reduces solar heat gain by 40 to 79% on glazed shop fronts. We work to centre management guidelines for access arrangements within covered retail developments at WestQuay. For Hedge End and West Quay Retail Park units, direct contact with the unit team or property management is standard pre-mobilisation procedure.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Southampton retail outside the city centre — Hedge End, Eastleigh, Chandler&apos;s Ford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Southampton and wider Hampshire retail postcodes, not just the SO14 city-centre core. Hedge End Retail Park SO30 — one of Hampshire&apos;s busiest out-of-town retail concentrations east of the city — has major national multiples with glazed frontages where solar-control film, DDA manifestation and frosted film are standard applications. Eastleigh Retail Park SO50 in the north, Chandler&apos;s Ford SO53 and the Solent Retail Park SO15 are all within our standard Southampton service area. Winchester SO22/SO23 to the north and the wider Hampshire coast — Fareham PO16/PO17, Gosport PO12 and Havant PO9 — also fall within our extended service footprint. WRPX is based in South Yorkshire, approximately 3 hours from Southampton via the M1 south, M25 and M3.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Southampton retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Southampton retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Above Bar Street and Hanover Buildings shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Southampton and Hampshire retailers — units across WestQuay, Hedge End, Eastleigh and Fareham — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Southampton retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Southampton retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in WestQuay, Bargate, Hedge End and across all stand-alone city-centre and high-street Southampton units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Southampton retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Southampton are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For WestQuay units where centre management requires out-of-hours installation, early-morning slots are available. A typical Southampton retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmSouthamptonPage() {
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
            <span className="text-foreground">Southampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Southampton &amp; Hampshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Southampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Southampton city and
            Hampshire. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl and
            DDA-compliant glass manifestation. WestQuay Shopping Centre, Bargate,
            West Quay Retail Park, Hedge End and all Southampton SO retail postcodes.
            Installation available during or outside trading hours. Approximately 3
            hours from our South Yorkshire base via the M1 south, M25 and M3.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Southampton Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Southampton retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Southampton is the largest city on the south coast of England and one
              of the UK&apos;s principal port and commercial centres, with a city-region
              population approaching 650,000 across the Southampton urban area and
              the wider Hampshire and Isle of Wight catchment. The city-centre retail
              core is anchored by WestQuay Shopping Centre — Southampton&apos;s principal
              covered retail destination on Western Esplanade SO15, with over 100
              retail and restaurant units including John Lewis, Marks &amp; Spencer and
              a significant food and leisure quarter.
            </p>
            <p>
              Above Bar Street SO14 forms Southampton&apos;s principal pedestrian retail
              high street, running north from the Bargate medieval gateway into the
              city-centre shopping core. The Bargate Shopping Centre SO14 and The
              Marlands Shopping Centre SO14 provide additional covered retail space
              adjacent to the Above Bar pedestrian zone. Hanover Buildings SO14 and
              the surrounding city-centre streets carry independent and national
              multiple retail with glazed frontages typical of Southampton&apos;s
              Victorian and Edwardian commercial stock.
            </p>
            <p>
              Southampton&apos;s out-of-town retail provision is concentrated at Hedge
              End Retail Park SO30 to the east — one of Hampshire&apos;s busiest non-city
              retail destinations — and at the West Quay Retail Park SO15 adjacent
              to the WestQuay Shopping Centre, and the Solent Retail Park SO15 on
              the western fringe. Eastleigh SO50 and Chandler&apos;s Ford SO53 in the
              north, and the coastal retail at Fareham PO16 and Gosport PO12 in the
              south, all fall within the Hampshire retail catchment.
            </p>
            <p>
              The Southampton area also includes the Gunwharf Quays outlet retail
              and leisure destination in Portsmouth PO1 — approximately 30 minutes
              south on the M275 — which is within our standard Hampshire service
              footprint for retail window film programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Southampton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Southampton retail units at WestQuay, Bargate and
                city-centre high-street units. Full-height or banded frosted
                film — clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                Hedge End, West Quay Retail Park and Southampton retail parks —
                keeping floor temperatures comfortable and protecting displayed
                merchandise from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Southampton retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site Hampshire installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors in Southampton retail units — frosted bands, etched-effect,
                dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Southampton retail glazing in
                high-footfall locations — Above Bar Street SO14, Bargate SO14
                and WestQuay SO15 — protecting glazing from surface scratching
                and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple Southampton and Hampshire
                locations, we supply and install consistent film specification
                across every site — the same product, finish and installation
                standard at WestQuay, Hedge End, Eastleigh and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Southampton retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">WestQuay Shopping Centre SO15</strong> —
              Southampton&apos;s principal city-centre covered shopping destination,
              with over 100 retail and restaurant units on Western Esplanade. The
              original WestQuay phase and the WestQuay South dining quarter — with
              its substantial glazed atrium and waterfront-facing glazed elevations
              — generate demand for frosted film, solar-control film and DDA
              manifestation. We work to WestQuay centre management access
              requirements for individual unit installations.
            </p>
            <p>
              <strong className="text-foreground">Above Bar Street &amp; Bargate SO14</strong> —
              Southampton&apos;s core pedestrian retail high street, running north from
              the medieval Bargate gateway through the city-centre shopping core.
              The Bargate Shopping Centre and Marlands Shopping Centre are adjacent
              on Civic Centre Road SO14. National multiples, department stores and
              independent retailers with glazed frontages across the full length
              of the pedestrianised zone.
            </p>
            <p>
              <strong className="text-foreground">Hedge End Retail Park SO30</strong> —
              One of Hampshire&apos;s busiest out-of-town retail concentrations, east
              of Southampton off junction 7 of the M27. Major national multiples
              across large-format and standard retail unit buildings with glazed
              frontages where solar-control film, DDA manifestation and frosted
              film are standard applications.
            </p>
            <p>
              <strong className="text-foreground">West Quay Retail Park &amp; Solent Retail Park SO15</strong> —
              The Southampton waterside retail zone on the western fringe of the
              city centre, adjacent to WestQuay Shopping Centre. Large-format retail
              units with significant south and west-facing glazed frontages where
              solar-control film is particularly effective on south-coast sites with
              extended summer sun exposure.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Southampton retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the film
              to do. We&apos;ll confirm a specification and price. We cover WestQuay,
              Bargate, Hedge End, all Southampton SO postcodes and the wider
              Hampshire area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Southampton Quote →
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
