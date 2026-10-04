import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Liverpool | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Liverpool — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Liverpool ONE, Metquarter, St John's Shopping Centre, Edge Lane Retail Park, Aintree Retail Park and all Liverpool L retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-liverpool/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Liverpool — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Liverpool and Merseyside. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Liverpool ONE L1, Metquarter L1, St John's Shopping Centre L1, Edge Lane Retail Park L7, Aintree Retail Park L9 and all Liverpool L retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Liverpool", item: "https://www.wrpx.co.uk/window-film/retail-window-film-liverpool/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Liverpool retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Liverpool. Typical uses are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Liverpool city-centre retail — Liverpool ONE L1, Metquarter L1, Church Street L1, Bold Street L1 and the Cavern Quarter L1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Liverpool ONE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Liverpool ONE L1 is an open-air shopping and leisure destination with over 170 units across multiple levels — one of the largest open-air shopping centres in the UK. Individual unit frontages within Liverpool ONE receive substantial solar load, particularly on south-facing and west-facing glazed shop fronts overlooking the Paradise Street and South John Street areas. Solar-control film applied to glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods. We work to Liverpool ONE management guidelines and confirm access arrangements with centre management before mobilisation for any unit within the development.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Liverpool retail outside the city centre — Edge Lane, Aintree, Bootle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Liverpool and Merseyside retail postcodes, not just the L1 city centre core. Edge Lane Retail Park L7, on Edge Lane near the junction with the A5047, is a significant out-of-town destination with national multiples requiring window film for solar control, frosted film for fitting rooms and DDA manifestation. Aintree Retail Park L9/L10, on the A59 near Aintree racecourse, carries similar glazed frontage profiles. New Strand Shopping Centre L20 in Bootle and the retail parks at Huyton L36, Kirkby L33 and Prescot L34 all fall within our standard Liverpool service area. The wider Merseyside retail picture — Birkenhead CH41, Wallasey CH44, St Helens WA9 and Southport PR8 — all fall within our extended service radius. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Liverpool city centre via the M62 west.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Liverpool retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Liverpool retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Liverpool ONE and Metquarter shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Liverpool retailers — units across Liverpool ONE, Edge Lane Retail Park, Aintree, Bootle and wider Merseyside locations — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Liverpool retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850&ndash;1000mm and 1400&ndash;1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Liverpool retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Liverpool ONE, Metquarter, St John&apos;s, Edge Lane Retail Park and across all stand-alone city-centre and high-street Liverpool units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Liverpool retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Liverpool are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Liverpool ONE units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Liverpool retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmLiverpoolPage() {
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
            <span className="text-foreground">Liverpool</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Liverpool &amp; Merseyside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Liverpool
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Liverpool and
            Merseyside. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and DDA-compliant glass manifestation. Liverpool ONE, Metquarter,
            St John&apos;s Shopping Centre, Edge Lane Retail Park, Aintree Retail
            Park and all Liverpool L postcodes. Trading-hours installation
            available. Approximately 1 hour 30 minutes from our South Yorkshire
            base via the M62 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Liverpool Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Liverpool retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Liverpool is one of the UK&apos;s major retail destinations — a city
              of around 500,000 with a retail core that draws shoppers from across
              Merseyside and beyond. Liverpool ONE L1 is the dominant city-centre
              shopping development: an open-air retail and leisure complex of
              over 170 units across multiple levels, spanning from Paradise Street
              to South John Street and down to Chavasse Park and the waterfront.
              Glazed unit frontages throughout Liverpool ONE receive significant
              solar load and are the primary location for solar-control and
              decorative window film applications in the city.
            </p>
            <p>
              The Metquarter L1 — a luxury retail and restaurant centre on
              Whitechapel in the city centre — has glazed frontages and internal
              glazed partitions where frosted and decorative film is regularly
              specified by tenants. St John&apos;s Shopping Centre L1, Church Street
              L1, Lord Street L2 and Bold Street L1 extend the city-centre retail
              footprint, with a mix of glazed shop fronts across various building
              types and ages. The Cavern Quarter L1 and the independent retail
              corridor of Bold Street L1 add further volume to the city-centre
              retail glazing market.
            </p>
            <p>
              Liverpool&apos;s out-of-town retail geography adds substantial capacity.
              Edge Lane Retail Park L7 — on Edge Lane, the main eastern arterial
              out of the city centre — is a large out-of-town retail destination
              with national multiples and significant glazed frontages. Aintree
              Retail Park L9/L10 on the A59 near the racecourse carries a similar
              profile. New Strand Shopping Centre L20 in Bootle serves the north
              Liverpool market, and retail parks at Huyton L36 and Kirkby L33
              serve the eastern and northern Merseyside catchments.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Liverpool city centre via the M62 west from Lofthouse on the
              M1. Liverpool and wider Merseyside are within our standard extended
              service area for retail window film installations.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Liverpool retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Liverpool.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and
                open-air retail frontages. Effective for south and west-facing
                Liverpool ONE and Edge Lane Retail Park units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop
                fronts, internal glass partitions and glazed doors across
                Liverpool retail. Frosted strips, etched-effect, dot pattern
                or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted
                or clear vinyl. Consistent branding across multi-site Liverpool
                and Merseyside retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching —
                relevant for ground-floor Liverpool city-centre retail fronts
                on high-footfall pedestrianised streets around Church Street
                and Bold Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective daytime privacy film for staff areas, security
                glazing and back-office windows — maintains outward visibility
                from inside while blocking inward visibility from the retail floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Liverpool ONE L1</strong>
              — full coverage across all units within Liverpool ONE, including
              individual unit frontages, internal glazed partitions, atrium
              sections and perimeter glazing. Solar-control, frosted,
              manifestation and branded film for any unit. We work to Liverpool
              ONE management guidelines and confirm access arrangements directly
              with centre management before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Metquarter, Church Street
              and city-centre L1/L2</strong> — the Metquarter on Whitechapel,
              Church Street, Lord Street, Bold Street and the wider Liverpool
              city-centre pedestrianised and retail corridor. We are familiar
              with city-centre access requirements and the varied glazing types
              on Liverpool city-centre retail units across different eras of
              construction.
            </p>
            <p>
              <strong className="text-foreground">Edge Lane Retail Park L7</strong>
              — on Edge Lane east of the city centre, Edge Lane Retail Park has
              a significant number of national retailers with large glazed
              frontages requiring solar control, frosted film for fitting rooms
              and DDA manifestation. Full coverage for all units.
            </p>
            <p>
              <strong className="text-foreground">Aintree Retail Park L9 and
              New Strand L20</strong> — Aintree Retail Park on the A59 near
              Aintree racecourse and New Strand Shopping Centre in Bootle both
              serve significant north Liverpool and outer Merseyside catchments.
              Full coverage for all units within both destinations.
            </p>
            <p>
              <strong className="text-foreground">Wider Merseyside retail</strong>
              — Huyton L36, Kirkby L33, Prescot L34, Birkenhead CH41, St Helens
              WA9 and Southport PR8. Full coverage across the wider Merseyside
              retail area from our Liverpool service base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Liverpool
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Window film for Manchester retail — Trafford Centre, Arndale, Salford Quays and Greater Manchester units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Birmingham retail — Bullring, Grand Central, Merry Hill and West Midlands units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Window film for Sheffield retail — Meadowhall, The Moor, Fargate and South Yorkshire units.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing for Liverpool and Merseyside hotels — bedroom and public area glazing.</p>
            </Link>
            <Link href="/architectural-wrap-retail-liverpool/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Liverpool</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Liverpool retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Liverpool retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need —
              frosted, solar control, manifestation or branded film. We&apos;ll quote
              and schedule around your trading hours. WRPX is approximately 1 hour
              30 minutes from Liverpool via the M62 west.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Liverpool Quote →
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
