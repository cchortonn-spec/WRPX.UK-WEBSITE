import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Cardiff | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Cardiff and South Wales — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. St David's Dewi Sant, Capitol Shopping Centre, Cardiff Bay, Culverhouse Cross and all Cardiff CF retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-cardiff/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Cardiff — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Cardiff city and the wider South Wales area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. St David's Dewi Sant CF10, Capitol Shopping Centre CF24, Cardiff Bay Retail Park CF10, Culverhouse Cross CF5, Pontprennau CF23 and all Cardiff CF retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Cardiff", item: "https://www.wrpx.co.uk/window-film/retail-window-film-cardiff/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Cardiff retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Cardiff city and the wider South Wales area. Typical uses are fitting room and changing area glazing in clothing retailers at St David's Dewi Sant CF10 and Capitol Shopping Centre CF24 (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on Queen Street CF10, St Mary Street CF10 and The Hayes CF10 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail areas around Royal Arcade CF10, Morgan Arcade CF10 and the Cardiff Market are well-suited to decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at St David's Dewi Sant or Cardiff Bay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St David's Dewi Sant — Cardiff's major city-centre covered shopping centre on St David's Way CF10, with over 180 retail units across two phases — has glazed frontages and atrium areas where solar gain can affect individual units. Cardiff Bay Retail Park CF10 and the Mermaid Quay leisure and retail waterfront are exposed to south and west sun, where solar-control film reduces solar heat gain by 40 to 79% on glazed shop fronts. We work to centre management guidelines for access arrangements within covered retail developments at St David's. For Cardiff Bay units, direct contact with the unit team or property management is standard pre-mobilisation procedure.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Cardiff retail outside the city centre — Culverhouse Cross, Llanishen, Pontprennau?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Cardiff and wider South Wales retail postcodes, not just the CF10 city-centre core. Culverhouse Cross Retail Park CF5 — one of Cardiff's busiest out-of-town retail concentrations in the west of the city — has major national multiples with glazed frontages where solar-control film, DDA manifestation and frosted film are standard applications. Llanishen Retail Park CF14 in north Cardiff and the Pontprennau Retail Park CF23 in the north-east are both within our standard Cardiff service area. The Vale of Glamorgan — Barry CF62/CF63 and Penarth CF64 — and the Valleys corridor (Pontypridd CF37, Merthyr Tydfil CF47) also fall within our extended South Wales service footprint. WRPX is based in South Yorkshire, approximately 2 hours 45 minutes to 3 hours 30 minutes from Cardiff via the M1 south and M4 west.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Cardiff retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Cardiff retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Queen Street and St Mary Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Cardiff and South Wales retailers — units across St David's Dewi Sant, Culverhouse Cross, Llanishen and Newport Retail Park — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Cardiff retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Cardiff retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in St David's Dewi Sant, Capitol Shopping Centre, Culverhouse Cross and across all stand-alone city-centre and high-street Cardiff units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Cardiff retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Cardiff are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For St David's Dewi Sant units where centre management requires out-of-hours installation, early-morning slots are available. A typical Cardiff retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Cardiff city and
            South Wales. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl and
            DDA-compliant glass manifestation. St David&apos;s Dewi Sant, Capitol
            Shopping Centre, Cardiff Bay, Culverhouse Cross and all Cardiff CF
            retail postcodes. Installation available during or outside trading hours.
            Approximately 2 hours 45 minutes to 3 hours 30 minutes from our South
            Yorkshire base via the M1 south and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Cardiff Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Cardiff retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is the capital city of Wales and its largest retail centre,
              with a city-region population approaching one million across Cardiff,
              the Vale of Glamorgan, Caerphilly and the wider South Wales catchment.
              The city-centre retail core is anchored by St David&apos;s Dewi Sant —
              Cardiff&apos;s principal covered shopping centre — which spans two phases
              across St David&apos;s Way CF10, connecting the existing centre with the
              newer St David&apos;s 2 development that incorporates John Lewis, Primark
              and over 180 retail and catering units.
            </p>
            <p>
              Queen Street CF10 and St Mary Street CF10 form Cardiff&apos;s principal
              pedestrian retail high street, connecting the St David&apos;s complex at
              the east end to the St Mary Street leisure and restaurant strip in the
              south. The Hayes CF10 — a covered and partly open retail and leisure
              street linking St David&apos;s to Cardiff Central station — has become one
              of Cardiff&apos;s busiest retail corridors, incorporating independent and
              national multiple retailers with glazed frontages. The historic Victorian
              arcades — Royal Arcade, Morgan Arcade, Castle Arcade and Royal Opera
              House Arcade — provide a distinct layer of independent and boutique
              retail, also well-suited to frosted film and decorative window vinyl
              applications.
            </p>
            <p>
              Capitol Shopping Centre CF24 at Queen Street and the top of The Hayes
              provides additional covered retail space adjacent to the main city
              core. Cardiff&apos;s out-of-town retail provision is concentrated at
              Culverhouse Cross Retail Park CF5 in the west — one of Cardiff&apos;s
              busiest non-city retail destinations — and at Llanishen Retail Park
              CF14 in the north, Pontprennau Retail Park CF23 in the north-east,
              and the Cardiff Bay Retail Park and Mermaid Quay leisure zone CF10
              on the waterfront.
            </p>
            <p>
              The South Wales catchment extends Cardiff&apos;s effective retail market
              significantly. Newport NP retail parks and the Cwmbran CF44 town
              centre, the Pontypridd CF37 town core, and the Barry CF62/Penarth CF64
              coastal retail and high-street zones all fall within the service area
              for Cardiff retail window film programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Cardiff
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Cardiff retail units at St David&apos;s, Culverhouse Cross
                and city-centre high-street units. Full-height or banded frosted
                film — clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                Cardiff Bay, Culverhouse Cross and Cardiff retail parks — keeping
                floor temperatures comfortable and protecting displayed merchandise
                from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Cardiff retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site South Wales installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors in Cardiff retail units — frosted bands, etched-effect,
                dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Cardiff retail glazing in
                high-footfall locations — Queen Street CF10, St Mary Street CF10
                and The Hayes CF10 — protecting glazing from surface scratching
                and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple Cardiff and South Wales
                locations, we supply and install consistent film specification
                across every site — the same product, finish and installation
                standard at St David&apos;s, Culverhouse Cross, Llanishen and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiff retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St David&apos;s Dewi Sant CF10</strong> —
              Cardiff&apos;s principal city-centre shopping centre, with over 180 retail
              and catering units across two phases. Phase 1 — the original St David&apos;s
              centre — and the newer St David&apos;s 2 development are connected internally
              and share the St David&apos;s Way pedestrian axis. Significant glazed
              frontages and atrium areas across both phases. We work to St David&apos;s
              centre management access requirements for individual unit installations.
            </p>
            <p>
              <strong className="text-foreground">Queen Street, St Mary Street &amp; The Hayes CF10</strong> —
              Cardiff&apos;s core pedestrian retail high street, running from the St David&apos;s
              complex north through Queen Street and south along St Mary Street to
              Cardiff Central station. The Hayes provides the covered east-west
              connector. National multiples, department stores and independent retailers
              with glazed frontages across the length of the pedestrianised zone. The
              Victorian arcades — Royal Arcade, Morgan Arcade, Castle Arcade — are also
              within this core zone.
            </p>
            <p>
              <strong className="text-foreground">Culverhouse Cross Retail Park CF5</strong> —
              One of Cardiff&apos;s busiest out-of-town retail concentrations, in the west
              of the city on the A48(M)/M4 corridor. Major national multiples across
              large-format and standard-unit retail buildings with glazed frontages
              where solar-control film, DDA manifestation and frosted film are
              standard applications.
            </p>
            <p>
              <strong className="text-foreground">Cardiff Bay Retail Park &amp; Mermaid Quay CF10</strong> —
              The Cardiff Bay waterfront retail and leisure zone on the south side of
              the city, adjacent to Roald Dahl Plass and the Senedd. Retail units and
              restaurant frontages with significant south and west-facing glazed
              elevations where solar-control film is particularly effective. Mermaid
              Quay&apos;s leisure-retail mix also generates demand for frosted film and
              branded vinyl on internal glazed partitions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Cardiff retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the film
              to do. We&apos;ll confirm a specification and price. We cover St David&apos;s
              Dewi Sant, Culverhouse Cross, Cardiff Bay, all Cardiff CF postcodes
              and the wider South Wales area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Cardiff Quote →
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
