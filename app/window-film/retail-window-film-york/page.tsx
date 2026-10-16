import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film York | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across York and North Yorkshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Monks Cross Shopping Park, York Designer Outlet, Coney Street, Parliament Street and all York YO postcode retail environments. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-york/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film York — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across York and North Yorkshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Monks Cross Shopping Park YO32 (Vangarde York — Next, M&S, Waitrose, TK Maxx, Odeon, 30+ units), York Designer Outlet YO19 (McArthurGlen — 120+ outlet stores), Coney Street YO1, Parliament Street YO1, Goodramgate YO1 and all York YO postcode retail environments. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "York", item: "https://www.wrpx.co.uk/window-film/retail-window-film-york/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for York retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across York and North Yorkshire. Typical uses include fitting room and changing area glazing in clothing retailers at Monks Cross Shopping Park YO32 and York Designer Outlet YO19 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within York city-centre retail units on Coney Street and Parliament Street YO1, and glazed shopfront sections on Goodramgate, Gillygate and Stonegate YO1 where a frosted band improves the display arrangement. York&apos;s independent retail quarter — Fossgate, Gillygate and the Shambles area — is particularly suited to decorative frosted and etched-effect window film treatments that match the character of the historic retail environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Monks Cross Shopping Park or York retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Monks Cross Shopping Park — the Vangarde York retail destination in YO32, with over 30 retail and leisure units including Next, M&S, Waitrose, TK Maxx and an Odeon cinema — has large-format retail buildings on an open edge-of-town site with significant south and west-facing glazed elevations. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and UV fading of merchandise on exposed frontages. York Designer Outlet at McArthurGlen in Fulford YO19 — 120+ outlet stores in an open-air and covered village format — has individual unit glazed frontages where solar-control and privacy film are both applicable. York&apos;s position in the Vale of York means unobstructed sun exposure on south-facing retail frontages during long summer days.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do York shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across York retail units. Retailers at Monks Cross Shopping Park YO32 and York Designer Outlet YO19 frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations compliance with the retailer&apos;s visual identity. Where York&apos;s historic city-centre units involve listed building constraints, we advise on appropriate film specifications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with York retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for York and North Yorkshire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Monks Cross or York Designer Outlet landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all York retail programmes. Our South Yorkshire base puts York approximately 1 hour away via the A64, making same-day survey and efficient mobilisation straightforward for York and North Yorkshire retail assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at York shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for York retail units where trading disruption is not acceptable. Monks Cross Shopping Park and York Designer Outlet both operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For York city-centre units on Coney Street YO1 or Parliament Street YO1 with pedestrian-zone access restrictions, we agree logistics with the unit in advance to avoid disruption during peak trading.",
      },
    },
    {
      "@type": "Question",
      name: "Which York and North Yorkshire retail postcodes do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all York and North Yorkshire YO retail postcodes — YO1 (York city centre: Coney Street, Parliament Street, Davygate, Goodramgate, Stonegate, Gillygate, Micklegate and the Shambles — York&apos;s principal high-street retail core within the historic walls, with glazed shop fronts, glass doors and partitions across a range of period and modern retail premises), YO10 (Fulford, Heslington — south York residential and approach-road retail; the York Designer Outlet at McArthurGlen is on Bossington Lane YO19 in this south York corridor), YO24 (Acomb, Dringhouses — west York retail including the Acomb shopping area and retail parks on the Wetherby Road approaches), YO26 (Rawcliffe, Skelton — north-west York suburban retail), YO30 (Clifton, Skelton on Ure — north York retail including the Clifton Moor retail zone), YO31 (Heworth — north-east York residential retail), YO32 (Monks Cross Shopping Park — the Vangarde York major edge-of-town retail destination with 30+ units; also Strensall and Huntington suburban retail). North Yorkshire market towns including Harrogate HG1, Scarborough YO11, Selby YO8 and Malton YO17 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour from York via the A64.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmYorkPage() {
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
            <span className="text-foreground">York</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — York
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail units across York and North Yorkshire.
            Frosted privacy film for fitting rooms and staff areas, solar-control
            film for glazed shop fronts, branded decorative vinyl and glass
            manifestation. Monks Cross Shopping Park, York Designer Outlet,
            Coney Street and Parliament Street. Subcontract and white-label
            installation for fit-out contractors and print companies. Approximately
            1 hour from our South Yorkshire base via the A64.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a York Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* York retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York has one of the most distinctive retail environments in the UK,
              combining a UNESCO World Heritage historic city centre with major
              modern retail destinations. The city-centre retail core — Coney
              Street YO1, Parliament Street YO1, Goodramgate and Stonegate —
              carries a dense mix of national chains and independent retailers in
              period and refurbished premises within the medieval street pattern.
            </p>
            <p>
              Monks Cross Shopping Park in YO32 — marketed as Vangarde York —
              is the city&apos;s principal edge-of-town retail destination, with over
              30 units including Next, M&S, Waitrose, TK Maxx, Odeon Cinema and
              a range of fashion, home and leisure retailers on an open site
              with large glazed frontages suited to solar-control and manifestation
              film. The centre is approximately 3 miles north-east of the city
              centre via the A1237 York outer ring road.
            </p>
            <p>
              York Designer Outlet — the McArthurGlen outlet village at Fulford
              on the south edge of the city — houses 120+ outlet and brand stores
              in a purpose-built open-air and covered format. Individual unit
              glazed frontages create consistent frosted film, manifestation and
              solar-control requirements across the outlet footprint.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from York
              via the A64. York retail units benefit from a direct route without
              overnight travel for single-day installations, and we schedule
              longer York retail programmes to stay locally when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in York
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for fitting room and changing
                area glazing. Complete privacy while retaining natural light in
                the sales floor — relevant for clothing retailers at Monks Cross
                Shopping Park and York Designer Outlet.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — glazed frontages
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed shop fronts. Cuts UV fading of merchandise and interior
                furnishings. Relevant for Monks Cross Shopping Park buildings
                and south-facing York Designer Outlet unit frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                height on full-height glazed panels and glass doors — frosted
                bands, etched-effect, dot pattern or branded options across all
                York retail environments including Monks Cross and Designer Outlet.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl, frosted film with brand graphics or decorative film
                for York shop windows and entrance glazing. Independent retailers
                on Goodramgate, Gillygate, Fossgate and the Shambles area
                frequently use decorative film for distinctive shopfront identity.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and seasonal film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary promotional vinyl for sale campaigns, seasonal events
                and York store launches. Installed and removed cleanly without
                damage to glazing. Suitable for all York retail environments
                including managed centre units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal staff area partitions, back-office glazing and stockroom
                windows where privacy from the sales floor is needed. Applied to
                internal glazing within the unit rather than the external shopfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* York retail areas */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York retail areas we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Monks Cross Shopping Park YO32</strong> —
              York&apos;s principal modern edge-of-town retail destination, Vangarde
              York, with 30+ retail and leisure units including Next, M&S,
              Waitrose, TK Maxx and Odeon Cinema. Large-format retail buildings
              on an open site with significant south and west-facing glazed
              frontages. Standard applications include solar-control film, DDA
              manifestation and fitting-room frosted film. We follow Monks Cross
              centre management protocols for all installations.
            </p>
            <p>
              <strong className="text-foreground">York Designer Outlet YO19</strong> —
              McArthurGlen&apos;s outlet village on Bossington Lane, Fulford, south
              of the city. 120+ outlet stores in a purpose-built open-air and
              covered format. Individual unit glazed frontages create consistent
              frosted film, solar-control and manifestation requirements across
              the outlet footprint. Centre management access protocols apply.
            </p>
            <p>
              <strong className="text-foreground">York city centre YO1</strong> —
              Coney Street and Parliament Street are York&apos;s principal pedestrianised
              retail streets, with a mix of national chains in period and
              refurbished premises. Frosted film, manifestation and solar-control
              applications are all common. Goodramgate, Gillygate, Stonegate,
              Fossgate and the Shambles carry York&apos;s independent and boutique
              retail character, well suited to decorative and etched-effect film
              treatments appropriate to the historic environment.
            </p>
            <p>
              <strong className="text-foreground">Clifton Moor retail zone YO30</strong> —
              North York&apos;s main retail park zone, with supermarkets and national
              retailers on the Clifton Moor approach roads. Large glazed retail
              buildings on open sites where solar-control film specification is
              practical for south and west-facing elevations.
            </p>
            <p>
              <strong className="text-foreground">Acomb and west York YO24</strong> —
              York&apos;s west suburban retail area on and around Front Street Acomb,
              serving the substantial residential population of west York.
              Frosted film and manifestation are the primary applications across
              the Acomb and Dringhouses retail zone.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract retail window film — York and North Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For York-area retail fit-out contractors, shopfitters, print companies
              and sign companies managing window film programmes across multiple
              North Yorkshire retail sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              centre access protocols, complete each unit to specification and
              provide photographic sign-off ready to pass to your end client.
            </p>
            <p>
              RAMS documentation is available as standard. For national retailers
              or print companies managing York units as part of a wider UK window
              film campaign — seasonal graphics, frosted film rollout, manifestation
              programme — our South Yorkshire base allows us to schedule York
              alongside Leeds, Sheffield and Doncaster within a single mobilisation,
              keeping travel costs efficient.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related York and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service overview</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Retail film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Retail film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film York</p>
              <p className="mt-1 text-xs text-muted">Window film for York gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy and frosted film for retail fitting rooms</p>
            </Link>
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Installation</p>
              <p className="mt-1 text-xs text-muted">White-label window film for trade partners</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              York retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your York retail location, glazing areas and what you need
              the film to do — privacy, solar control, manifestation or a
              branded treatment. We&apos;ll confirm specification and price.
              Subcontract and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a York Retail Quote →
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
