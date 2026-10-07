import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Glasgow | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Glasgow and the Greater Glasgow area — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Buchanan Galleries, St Enoch Centre, Braehead Shopping Centre, Silverburn, Glasgow Fort and all Glasgow G retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-glasgow/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Glasgow — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Glasgow city and the wider Greater Glasgow area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Buchanan Galleries G1, St Enoch Centre G1, Braehead Shopping Centre G51, Silverburn Shopping Centre G53, Glasgow Fort G69, Sauchiehall Street G2 and all Greater Glasgow G retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Glasgow", item: "https://www.wrpx.co.uk/window-film/retail-window-film-glasgow/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Glasgow retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Glasgow city and the wider Greater Glasgow area. Typical uses are fitting room and changing area glazing in clothing retailers at Buchanan Galleries G1, St Enoch Centre G1 and Braehead Shopping Centre G51 (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on Sauchiehall Street G2, Buchanan Street G1 and Argyle Street G2/G3 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail areas around the Merchant City G1, Byres Road G12 and Great Western Road G4/G12 also have substantial glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Buchanan Galleries or Braehead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Buchanan Galleries G1 — the large city-centre shopping centre connected to Buchanan Street and adjacent to the Royal Concert Hall — has glazed frontages and atrium areas where solar gain affects individual units during peak summer trading. Braehead Shopping Centre G51 in Renfrew, near Glasgow Airport, has a large glazed roof structure over the main mall and significant glazed shop frontages facing west and south. Solar-control film reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy summer trading periods and protecting displayed merchandise from UV fading. We work to centre management guidelines for both Buchanan Galleries and Braehead and confirm access arrangements before mobilisation for any unit within those developments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Glasgow retail outside the city centre — Silverburn, Glasgow Fort, East Kilbride?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Glasgow and Greater Glasgow retail postcodes, not just the G1 city centre core. Silverburn Shopping Centre G53 in Pollok, one of Glasgow's largest out-of-town retail parks anchored by major national multiples, is within our standard service area for solar control, frosted film and DDA manifestation. Glasgow Fort G69 in Baillieston — a large out-of-town retail and leisure park on the east side of Glasgow — has a significant cluster of national multiple units with glazed frontages. Parkhead Forge G31, St James Retail Park, Forge Shopping Centre G31 and the Parkhead area's retail corridor are covered. East Kilbride Shopping Centre G74 — one of the UK's first purpose-built covered shopping centres, with 170+ units — is within our extended service area as are Livingston Designer Outlet EH54 and Braehead Arena G51. The wider Greater Glasgow area — Paisley PA1/PA2, Hamilton ML3, Motherwell ML1 and Cumbernauld G67 — all fall within our service footprint. WRPX is based in South Yorkshire, approximately 3 hours to 3 hours 30 minutes from Glasgow via the M1 north, M62 west and M74 north.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Glasgow retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Glasgow retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Buchanan Street and Sauchiehall Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Greater Glasgow retailers — units across Buchanan Galleries, Braehead, Silverburn and East Kilbride — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Glasgow retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and its Scottish equivalent, Technical Standard Section 4 for Scottish-built properties) for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Glasgow retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Buchanan Galleries, St Enoch Centre, Braehead, Silverburn, Glasgow Fort and across all stand-alone city-centre and high-street Glasgow units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Glasgow retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Glasgow are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Buchanan Galleries and St Enoch Centre units where centre management requires out-of-hours installation, early-morning slots are available. A typical Glasgow retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmGlasgowPage() {
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
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Glasgow &amp; Greater Glasgow
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Glasgow city and the
            Greater Glasgow area. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl and
            DDA-compliant glass manifestation. Buchanan Galleries, St Enoch Centre,
            Braehead, Silverburn, Glasgow Fort and all Glasgow G retail postcodes.
            Installation available during or outside trading hours. Approximately
            3 hours to 3 hours 30 minutes from our South Yorkshire base via the M1
            north, M62 west and M74 north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Glasgow Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Glasgow retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is Scotland&apos;s largest retail centre and one of the UK&apos;s
              most significant shopping destinations outside London. The city centre
              retail core is anchored by Buchanan Street G1 — consistently ranked among
              the UK&apos;s most profitable shopping streets — connecting Argyle Street
              G2/G3 at the south end to the Royal Exchange Square G1 and Buchanan
              Galleries in the north. St Enoch Centre G1, adjacent to St Enoch Square
              and the Argyle Street pedestrian zone, adds further covered retail
              capacity in the city centre.
            </p>
            <p>
              Outside the city centre, Braehead Shopping Centre G51 in Renfrew — one
              of Scotland&apos;s largest covered shopping centres with over 100 units,
              an IKEA, a cinema and a watersports centre — draws significant retail
              traffic from across the west of Scotland. Its glazed roof structure and
              large south-facing frontage make solar-control film particularly relevant
              for units in direct sun during summer trading periods.
            </p>
            <p>
              The wider Glasgow retail network extends to Silverburn Shopping Centre G53
              in Pollok, Glasgow Fort G69 in Baillieston, Parkhead Forge G31 in the
              east end, and the large out-of-town retail parks at Glasgow Airport Retail
              Park PA3 and Clydebank Retail Park G81. The south-side independent
              retail strip along Shawlands G41/G43 and the west-end Byres Road G12
              corridor are well-established high-street zones with significant glazed
              frontage installations.
            </p>
            <p>
              East Kilbride Shopping Centre G74, one of the UK&apos;s earliest
              purpose-built covered shopping centres, sits approximately 9 miles
              south of Glasgow city centre and extends the Greater Glasgow retail
              catchment into South Lanarkshire. Hamilton ML3 and Motherwell ML1 add
              Lanarkshire retail capacity within the same service zone.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Glasgow
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Glasgow retail units at Buchanan Galleries, St Enoch
                Centre, Braehead and Silverburn. Full-height or banded frosted film
                — clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                Braehead, Buchanan Galleries, Silverburn and Glasgow retail parks —
                keeping the floor temperature comfortable and protecting displayed
                merchandise from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Glasgow retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site Greater Glasgow installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass doors
                in Glasgow retail units — frosted bands, etched-effect, dot pattern
                or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Glasgow retail glazing in
                high-footfall locations — Buchanan Street G1, Sauchiehall Street G2,
                Argyle Street G3 and the Merchant City G1 — protecting glazing
                from surface scratching and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple Greater Glasgow locations,
                we supply and install consistent film specification across every
                site — the same product, finish and installation standard at
                Buchanan Galleries, Braehead, Silverburn and East Kilbride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glasgow retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Buchanan Galleries G1</strong> — the
              major city-centre covered shopping centre at the top of Buchanan Street,
              connecting to Buchanan Bus Station and directly adjacent to the
              Buchanan Street Subway and Queen Street Station. We work to Buchanan
              Galleries centre management guidelines for access and installation
              scheduling.
            </p>
            <p>
              <strong className="text-foreground">St Enoch Centre G1</strong> —
              Glasgow&apos;s other city-centre covered shopping mall, set on St Enoch
              Square at the south end of Buchanan Street. The centre has a distinctive
              glazed roof structure that creates significant solar gain in ground-floor
              units — a primary solar control film application. We co-ordinate
              with St Enoch Centre management for access to individual units.
            </p>
            <p>
              <strong className="text-foreground">Braehead Shopping Centre G51</strong> —
              one of Scotland&apos;s largest covered retail and leisure destinations,
              situated in Renfrew near Glasgow Airport. Over 100 retail units across
              a glazed mall structure, with significant south and west-facing glazing
              creating solar load on units during summer. We work to Braehead centre
              management access protocols for out-of-hours installations where required.
            </p>
            <p>
              <strong className="text-foreground">Silverburn Shopping Centre G53</strong> —
              in the Pollok area of south Glasgow, with approximately 100 units and a
              large car park. National large-format multiples and fashion chains with
              glazed frontages where solar-control film and DDA manifestation are
              standard applications.
            </p>
            <p>
              <strong className="text-foreground">Glasgow Fort G69 and Sauchiehall Street G2</strong> —
              Glasgow Fort is the large east-Glasgow retail and leisure park in
              Baillieston, with national multiples and significant glazed frontages.
              Sauchiehall Street is Glasgow&apos;s secondary city-centre retail corridor,
              running west from Buchanan Street through Garnethill, with independent
              retailers and national multiples on a pedestrianised and open-street
              mix of glazed frontages.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Glasgow retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the
              film to do. We&apos;ll confirm a specification and price. We cover
              Buchanan Galleries, St Enoch Centre, Braehead, Silverburn, all
              Glasgow G postcodes and the wider Greater Glasgow area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Glasgow Quote →
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
