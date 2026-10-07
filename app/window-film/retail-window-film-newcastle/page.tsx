import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Newcastle | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Newcastle upon Tyne and the North East — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. intu Metrocentre Gateshead, Eldon Square, Silverlink and all Newcastle NE retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-newcastle/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Newcastle — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Newcastle upon Tyne, Gateshead, Sunderland and the North East. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. intu Metrocentre Gateshead NE11, Eldon Square NE1, Silverlink Retail Park NE28, Monument Mall NE1, Northumberland Street NE1 and all North East NE retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Newcastle", item: "https://www.wrpx.co.uk/window-film/retail-window-film-newcastle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Newcastle retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Newcastle and the North East. Typical uses are fitting room and changing area glazing in clothing retailers at Eldon Square NE1, Northumberland Street NE1 and the Metrocentre NE11 (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail areas around Grainger Street NE1, Clayton Street NE1 and the Jesmond high street NE2 also have substantial glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the intu Metrocentre or Eldon Square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The intu Metrocentre in Gateshead NE11 is one of Europe's largest indoor shopping centres, with over 330 units across multiple malls — the Red, Yellow, Green and Blue Malls — plus a leisure and entertainment zone. Glazed frontages throughout the Metrocentre create solar gain in individual units, particularly on south and west-facing mall elevations. Solar-control film reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods. Eldon Square NE1 — one of the UK's largest city-centre shopping centres with over 150 units across multiple levels — has significant glazed roof sections and frontages that similarly benefit from solar control. We work to centre management guidelines for both the Metrocentre and Eldon Square and confirm access arrangements before mobilisation for any unit within those developments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Newcastle retail outside the city centre — Silverlink, Team Valley, Kingston Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Newcastle and North East retail postcodes, not just the NE1 city centre core. Silverlink Retail Park NE28 in Wallsend — one of the largest out-of-town retail parks in the North East, anchored by major national multiples — is within our standard service area for solar control, frosted film and DDA manifestation. Team Valley Retail World NE11 in Gateshead, adjacent to the Metrocentre, has a large cluster of national multiple units with significant glazed frontages. Kingston Park Retail Park NE3 on the northern edge of Newcastle, St James Retail Park NE4 and Byker Retail Park NE6 are all covered. The wider North East — Sunderland Bridges SR1, Washington Galleries NE38, The Gate NE1 leisure complex, and the South Shields Ocean Road NE33 high street — all fall within our extended service area. WRPX is based in South Yorkshire, approximately 2 hours from Newcastle via the A1(M) north.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Newcastle retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Newcastle retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Eldon Square and Northumberland Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site North East retailers — units across the Metrocentre, Eldon Square, Silverlink and Sunderland — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Newcastle retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850&ndash;1000mm and 1400&ndash;1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Newcastle retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Eldon Square, the Metrocentre, Monument Mall NE1, Silverlink Retail Park NE28 and across all stand-alone city-centre and high-street Newcastle units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Newcastle retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Newcastle are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Eldon Square and Metrocentre units where centre management requires out-of-hours installation, early-morning and overnight slots are available. The Metrocentre typically permits access from 6:00am before centre opening for works that need to be completed out of hours. A typical Newcastle retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmNewcastlePage() {
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
            <span className="text-foreground">Newcastle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Newcastle &amp; North East
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Newcastle
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Newcastle upon Tyne,
            Gateshead and the wider North East. Frosted privacy film for fitting rooms
            and staff areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and DDA-compliant glass manifestation. intu Metrocentre, Eldon Square,
            Silverlink and all Newcastle NE retail postcodes. Installation available during
            or outside trading hours. Approximately 2 hours from our South Yorkshire base
            via the A1(M) north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Newcastle Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Newcastle retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newcastle upon Tyne is the North East&apos;s largest city and primary retail
              destination, anchored by Eldon Square NE1 — one of the UK&apos;s largest
              city-centre shopping centres with over 150 units across multiple levels,
              including the indoor shopping mall and the open-air Eldon Garden area — and
              the Northumberland Street pedestrianised high street that connects it to the
              Monument NE1 area. Together, Eldon Square and Northumberland Street account
              for the largest concentration of glazed retail frontages in the North East.
            </p>
            <p>
              Across the Tyne in Gateshead, the intu Metrocentre NE11 is one of the
              largest covered shopping centres in Europe, with over 330 units across four
              main malls and an entertainment complex. The Metrocentre&apos;s scale — and
              its significant glazed roof and frontage area — makes solar-control film a
              particularly relevant application, with glazed south and west-facing malls
              receiving high solar load during peak summer trading periods.
            </p>
            <p>
              Beyond the two major covered centres, Newcastle has a strong out-of-town
              retail network at Silverlink NE28, Team Valley NE11 and Kingston Park NE3,
              plus a vibrant independent retail culture in the Grainger Market area NE1,
              the Quayside NE1, Jesmond NE2 and Gosforth NE3. The wider North East
              retail area extends to Sunderland Bridges SR1, Washington Galleries NE38,
              South Shields NE33 and the Northumberland coast town high streets.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Newcastle
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Newcastle retail units at Eldon Square, Northumberland
                Street and the Metrocentre. Full-height or banded frosted film
                — clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                the Metrocentre, Eldon Square, Silverlink and Newcastle retail
                parks — keeping the floor temperature comfortable and protecting
                displayed merchandise from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Newcastle retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site North East installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors in Newcastle retail units — frosted bands, etched-effect,
                dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Newcastle retail glazing in
                high-footfall locations — Northumberland Street NE1, Grainger
                Street NE1 and the Quayside NE1 — protecting glazing from surface
                scratching and marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple North East locations, we
                supply and install consistent film specification across every site
                — the same product, finish and installation standard at the
                Metrocentre, Eldon Square, Silverlink and Sunderland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle retail destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Eldon Square NE1</strong> — the
              indoor city-centre shopping centre in the heart of Newcastle, with
              over 150 units across multiple levels. We work to Eldon Square centre
              management guidelines for access and installation scheduling.
              Early-morning installation available for units where in-hours work
              is not practical.
            </p>
            <p>
              <strong className="text-foreground">intu Metrocentre Gateshead NE11</strong> —
              one of Europe&apos;s largest covered shopping centres, with over 330 units
              across the Red, Yellow, Green and Blue Malls and a separate leisure
              and entertainment complex. We work to Metrocentre centre management
              access protocols — typically 6:00am early access before centre
              opening for out-of-hours installations.
            </p>
            <p>
              <strong className="text-foreground">Northumberland Street NE1 and Monument area NE1</strong> —
              Newcastle&apos;s primary pedestrianised high street, connecting Eldon
              Square to the Haymarket. National multiples, independent retailers and
              restaurant units with significant glazed frontages. Solar-control,
              frosted film and DDA manifestation all carried out during or outside
              trading hours.
            </p>
            <p>
              <strong className="text-foreground">Silverlink Retail Park NE28</strong> —
              one of the largest out-of-town retail parks in the North East, in
              Wallsend near the Tyne Tunnel. National large-format multiples with
              single-storey glazed units where solar-control film and DDA
              manifestation are standard applications.
            </p>
            <p>
              <strong className="text-foreground">Team Valley Retail World NE11</strong> —
              the large out-of-town retail park adjacent to the Metrocentre in
              Gateshead, with national multiples requiring window film for solar
              control and glazing compliance. Also covers the Team Valley Business
              Park NE11 office and commercial glazing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newcastle retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the
              film to do. We&apos;ll confirm a specification and price. We cover
              Eldon Square, the Metrocentre, Silverlink, all Newcastle NE postcodes
              and the wider North East.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Newcastle Quote →
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
