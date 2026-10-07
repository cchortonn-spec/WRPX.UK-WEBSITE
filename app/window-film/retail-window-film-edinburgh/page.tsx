import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Edinburgh | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Edinburgh and the Lothians — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Princes Street, St James Quarter, Fort Kinnaird, Ocean Terminal and all Edinburgh EH retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-edinburgh/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Edinburgh — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Edinburgh city and the wider Lothians area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Princes Street EH2, St James Quarter EH1, Fort Kinnaird EH15, Ocean Terminal EH6, Waverley Mall EH1, Royal Mile EH1 and all Edinburgh EH retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Edinburgh", item: "https://www.wrpx.co.uk/window-film/retail-window-film-edinburgh/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Edinburgh retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Edinburgh city and the wider Lothians area. Typical uses are fitting room and changing area glazing in clothing retailers at Princes Street EH2, St James Quarter EH1 and Fort Kinnaird EH15 (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on Princes Street EH2, George Street EH2 and Hanover Street EH2 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail areas around the Grassmarket EH1, Victoria Street EH1 and Stockbridge EH4 also have substantial glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at St James Quarter or Fort Kinnaird?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St James Quarter EH1 — Edinburgh's major new city-centre retail and leisure development adjacent to Princes Street — has significant glazed frontages and an atrium structure where solar gain affects individual units during summer trading. Fort Kinnaird EH15 — the large out-of-town retail park in Portobello, one of Edinburgh's most significant retail concentrations outside the city centre — has glazed shop frontages on south and west-facing elevations. Solar-control film reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable and protecting displayed merchandise from UV fading. We work to centre management guidelines for access arrangements within covered retail developments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Edinburgh retail outside the city centre — Gyle, Straiton, Ocean Terminal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Edinburgh and Lothians retail postcodes, not just the EH1/EH2 city centre core. The Gyle Shopping Centre EH12 — the large west Edinburgh retail park near Edinburgh Park and the City Bypass — has national multiple units with glazed frontages where solar-control film, DDA manifestation and frosted film are standard applications. Ocean Terminal EH6 in Leith — the waterfront shopping and leisure complex — has significant glazed frontages facing the Firth of Forth. Straiton Retail Park EH20 in Midlothian, one of Edinburgh's primary out-of-town retail destinations on the City Bypass, and Cameron Toll EH16 to the south of the city are also within our service area. The wider Lothians retail network — Livingston Designer Outlet EH54, Bathgate retail parks EH48 and the East Lothian market towns — all fall within our service footprint. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes to 4 hours from Edinburgh via the A1(M) north.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Edinburgh retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Edinburgh retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Princes Street and George Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Edinburgh and Lothians retailers — units across St James Quarter, Fort Kinnaird, Gyle and Straiton — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Edinburgh retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and Technical Standard Section 4 for Scottish-built properties) for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Edinburgh retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in St James Quarter, Fort Kinnaird, Gyle Shopping Centre and across all stand-alone city-centre and high-street Edinburgh units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Edinburgh retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Edinburgh are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For St James Quarter units where centre management requires out-of-hours installation, early-morning slots are available. A typical Edinburgh retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmEdinburghPage() {
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
            <span className="text-foreground">Edinburgh</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Edinburgh &amp; the Lothians
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Edinburgh
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Edinburgh city and
            the Lothians. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl and
            DDA-compliant glass manifestation. Princes Street, St James Quarter,
            Fort Kinnaird, Ocean Terminal, Gyle and all Edinburgh EH retail postcodes.
            Installation available during or outside trading hours. Approximately
            3 hours 30 minutes to 4 hours from our South Yorkshire base via the
            A1(M) north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Edinburgh Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Edinburgh retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh is Scotland&apos;s capital and one of the UK&apos;s most significant
              retail and tourist destinations, drawing over 4 million overnight visitors
              annually. The city-centre retail core runs along Princes Street EH2 and
              George Street EH2 — the principal high street — connecting via the Waverley
              Mall EH1 and the new St James Quarter EH1 development at the east end.
              The Royal Mile EH1 provides a secondary tourist-retail corridor from
              Edinburgh Castle to the Scottish Parliament.
            </p>
            <p>
              St James Quarter, which opened in 2021, is the most significant retail
              development in central Edinburgh in recent decades — a 1.7 million
              sq ft mixed-use scheme incorporating over 80 retail units, restaurants,
              a Roomzzz hotel, an IMAX cinema and a W Hotel in the landmark &apos;Ribbon&apos;
              structure. Its glazed frontages and covered mall sections create both
              solar heat gain and DDA manifestation requirements across units at
              multiple levels.
            </p>
            <p>
              Fort Kinnaird EH15 in Portobello — one of Scotland&apos;s largest retail
              parks — anchors Edinburgh&apos;s out-of-town retail offering on the A1
              corridor, with major national multiples across a mix of large-format
              and standard-unit retail buildings. The Gyle Shopping Centre EH12 in
              the west of the city, Straiton Retail Park EH20 on the City Bypass
              and Cameron Toll EH16 to the south complete Edinburgh&apos;s ring of
              out-of-town retail concentrations.
            </p>
            <p>
              The Lothians extend Edinburgh&apos;s retail catchment significantly.
              Livingston Designer Outlet EH54 in West Lothian — one of Scotland&apos;s
              busiest retail outlets — and the Bathgate EH48 and Linlithgow EH49
              retail corridors all fall within an accessible service zone for
              Edinburgh-based retail window film programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Edinburgh
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Edinburgh retail units at St James Quarter, Fort Kinnaird,
                Gyle and Princes Street. Full-height or banded frosted film — clear
                above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                St James Quarter, Fort Kinnaird, Gyle and Edinburgh retail parks
                — keeping the floor temperature comfortable and protecting displayed
                merchandise from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Edinburgh retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site Lothians installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations and Technical Standard-compliant manifestation
                strips at 850mm and 1400mm height for full-height glazed panels
                and internal glass doors in Edinburgh retail units — frosted bands,
                etched-effect, dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Edinburgh retail glazing in
                high-footfall locations — Princes Street EH2, the Royal Mile EH1
                and the Grassmarket EH1 — protecting glazing from surface
                scratching and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple Edinburgh and Lothians
                locations, we supply and install consistent film specification
                across every site — the same product, finish and installation
                standard at St James Quarter, Fort Kinnaird, Gyle and Straiton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edinburgh retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St James Quarter EH1</strong> — Edinburgh&apos;s
              landmark new retail and leisure destination, opened 2021, adjacent to
              Princes Street at the east end of the city centre. Over 80 retail units
              across multiple levels in a mixed-use development with significant glazed
              frontages and atrium areas. We work to St James Quarter centre management
              access requirements for individual unit installations.
            </p>
            <p>
              <strong className="text-foreground">Princes Street EH2</strong> —
              Edinburgh&apos;s principal high street, running along the south face of the
              New Town above the Princes Street Gardens. National multiples, department
              stores and flagship retail units with glazed street frontages across the
              length of the pedestrianised zone. Waverley Mall EH1 at the east end
              adds covered retail capacity adjacent to Waverley Station.
            </p>
            <p>
              <strong className="text-foreground">Fort Kinnaird EH15</strong> —
              Edinburgh&apos;s largest out-of-town retail park, situated on the A1 in
              Portobello on the east side of the city. Major national multiples across
              a mix of large-format and standard-unit retail buildings with glazed
              frontages where solar-control film and DDA manifestation are standard
              applications. An adjoining retail and leisure expansion has added
              further unit capacity in recent years.
            </p>
            <p>
              <strong className="text-foreground">Gyle Shopping Centre EH12 and Ocean Terminal EH6</strong> —
              The Gyle in west Edinburgh, near Edinburgh Park business district and
              the City Bypass junction, serves the west Edinburgh residential catchment.
              Ocean Terminal in Leith EH6 is the waterfront shopping and leisure
              complex adjacent to the Royal Yacht Britannia, with significant glazed
              frontages facing the Firth of Forth. Both are within our standard
              Edinburgh service area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Edinburgh retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the
              film to do. We&apos;ll confirm a specification and price. We cover
              St James Quarter, Fort Kinnaird, Gyle, Princes Street, all
              Edinburgh EH postcodes and the wider Lothians area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Edinburgh Quote →
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
