import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Bristol | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Bristol — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Cabot Circus, Broadmead, Cribbs Causeway, The Mall Cribbs and all Bristol BS retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-bristol/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Bristol — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Bristol and the South West. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Cabot Circus BS1, Broadmead BS1, Cribbs Causeway BS10, The Mall Cribbs BS10, Cabot Circus North BS1, East Street Bedminster BS3 and all Bristol BS retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Bristol", item: "https://www.wrpx.co.uk/window-film/retail-window-film-bristol/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Bristol retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Bristol. Typical uses are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Cabot Circus BS1, Broadmead BS1, East Street Bedminster BS3 and the independent retail areas around Clifton Village BS8 and Gloucester Road BS7 all have substantial glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Cabot Circus or Cribbs Causeway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cabot Circus BS1 is a covered shopping centre on the eastern edge of Bristol city centre with over 120 units across multiple levels — significant glazed roof and frontage areas that create substantial solar gain in individual units. Cribbs Causeway BS10 and The Mall Cribbs BS10 together form one of the largest covered retail and leisure destinations in the South West, with glazed frontages throughout the development that receive high solar load on south and west-facing sides. Solar-control film applied to glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods. We work to centre management guidelines for Cabot Circus and Cribbs Causeway and confirm access arrangements before mobilisation for any unit within those developments.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Bristol retail outside the city centre — Brislington, Longwell Green, Filton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Bristol and South West retail postcodes, not just the BS1 city centre core. Brislington Retail Park BS4, on the A4 near the Bath Road/Brislington junction, has national multiples requiring window film for solar control, frosted film for fitting rooms and DDA manifestation. Longwell Green Retail Park BS30 on the A4174 ring road, Filton Avenue retail in BS7 and the out-of-town retail at Avonmeads BS2 on the eastern edge of the city centre all fall within our standard Bristol service area. The wider South West — Bath BA1/BA2, Weston-super-Mare BS23, Clevedon BS21, Portishead BS20 and the M4/M5 corridor — is within our extended service radius. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes to 2 hours from Bristol city centre via the M1 south.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Bristol retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Bristol retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Cabot Circus and Broadmead shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Bristol retailers — units across Cabot Circus, Cribbs Causeway, Brislington and the wider South West — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Bristol retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850&ndash;1000mm and 1400&ndash;1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Bristol retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Cabot Circus, Broadmead, Cribbs Causeway, Brislington Retail Park and across all stand-alone city-centre and high-street Bristol units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Bristol retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Bristol are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Cabot Circus and Cribbs Causeway units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Bristol retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Bristol &amp; South West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Bristol and the South
            West. Frosted privacy film for fitting rooms and staff areas, solar-control
            film for glazed shop fronts, branded decorative vinyl and DDA-compliant
            glass manifestation. Cabot Circus, Broadmead, Cribbs Causeway and all
            Bristol BS retail postcodes. Installation available during or outside
            trading hours. Approximately 1 hour 45 minutes to 2 hours from our South
            Yorkshire base via the M1 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bristol Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bristol retail overview */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol is the South West&apos;s largest city and primary retail
              destination, anchored by two major developments: Cabot Circus BS1 on
              the eastern edge of the city centre — a covered shopping centre with
              approximately 120 units including major national anchors and a
              multi-screen cinema — and the Broadmead BS1 open-air shopping area
              that adjoins it, one of the most established UK city-centre retail
              precincts. Together, Cabot Circus and Broadmead account for a large
              concentration of glazed retail frontages in a compact geographic area.
            </p>
            <p>
              North of the city, Cribbs Causeway BS10 and The Mall Cribbs BS10 form
              the South West&apos;s largest out-of-town shopping destination — a
              covered mall and adjacent retail park with over 130 units ranging from
              flagship fashion retailers to large-format home and electrical stores.
              The glazed frontages at Cribbs Causeway and The Mall receive significant
              solar load, particularly on the southern and western elevations, making
              solar-control film a practical and frequently requested application.
            </p>
            <p>
              Beyond the main shopping destinations, Bristol has a strong independent
              retail culture in the Clifton Village BS8 area, along Gloucester Road
              BS7 north of the city, and in the regenerating Stokes Croft BS2 and
              Tobacco Factory BS3 areas. Smaller independent and boutique retailers in
              these areas frequently require frosted film for privacy, solar control
              for south-facing glazing, and branded decorative film for shop-front
              identity. Out-of-town retail parks at Brislington BS4, Avonmeads BS2,
              Longwell Green BS30 and Filton BS34 round out the Bristol retail
              geography.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film types for Bristol
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff partitions and back-of-house
                glazing in Bristol retail units. Full-height or banded frosted film
                — clear above for light, opaque below for privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts at
                Cabot Circus, Cribbs Causeway and Bristol retail parks — keeping
                the floor temperature comfortable and protecting displayed
                merchandise from UV fading.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, patterned or printed frosted film incorporating your
                branding on Bristol retail glazing — combining privacy or solar
                control with consistent brand presence across single or
                multi-site installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors in Bristol retail units — frosted bands, etched-effect,
                dot pattern or branded manifestation to specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for Bristol retail glazing in
                high-footfall locations — Broadmead BS1, Stokes Croft BS2
                and East Street BS3 — protecting glazing from surface
                scratching, acid etching and spray marking.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site consistency
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For retailers with units across multiple Bristol or South West
                locations, we supply and install consistent film specification
                across every site — the same product, finish and installation
                standard at Cabot Circus, Cribbs Causeway, Brislington and Bath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bristol destinations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol retail destinations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Cabot Circus BS1</strong> — the
              covered shopping centre on the eastern edge of Bristol city centre.
              We work to Cabot Circus centre management guidelines for access
              and installation scheduling. Early-morning installation available
              for units where in-hours work is not practical.
            </p>
            <p>
              <strong className="text-foreground">Broadmead BS1</strong> — the
              open-air city-centre retail precinct adjacent to Cabot Circus,
              anchored by large-format nationals and supported by mid-range
              and independent retailers. Glazed shop-front film, DDA manifestation
              and branded decorative vinyl all carried out during or outside
              trading hours.
            </p>
            <p>
              <strong className="text-foreground">Cribbs Causeway BS10 and The Mall Cribbs BS10</strong> —
              the South West&apos;s largest out-of-town retail destination, north of
              the city near junction 17 of the M5. We cover the full Cribbs
              Causeway and Mall retail estate, coordinating access with the
              centre management team. Solar-control film and frosted film are the
              primary applications at this location.
            </p>
            <p>
              <strong className="text-foreground">Brislington Retail Park BS4 and Avonmeads BS2</strong> —
              east Bristol out-of-town retail with large-format national multiples
              and glazed single-storey units where solar-control film and DDA
              manifestation are standard applications.
            </p>
            <p>
              <strong className="text-foreground">Clifton Village BS8 and Gloucester Road BS7</strong> —
              Bristol&apos;s independent retail zones. Boutique and independent
              retailers in these areas use frosted film for privacy and branded
              decorative film for shop-front identity — typically smaller units
              with a same-day installation scope.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bristol retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, glazing type and what you need the
              film to do. We&apos;ll confirm a specification and price. We cover
              Cabot Circus, Broadmead, Cribbs Causeway, all Bristol BS postcodes
              and the wider South West.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bristol Quote →
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
