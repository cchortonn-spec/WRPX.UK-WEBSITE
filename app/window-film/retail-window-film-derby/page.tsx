import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Derby | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Derby — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Intu Derby (Westfield), Eagle Market, Derbion Shopping Centre and all Derby DE retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Derby — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Derby and Derbyshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Derbion Shopping Centre DE1, Eagle Market DE1, Sadler Gate DE1, Babington Lane DE1, Kingsway Retail Park DE22 and all Derby DE retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/retail-window-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Derby retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Derby. Typical uses are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear glass above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Derby city-centre retail — Derbion DE1, Eagle Market DE1 and the pedestrianised areas around St Peter's Street DE1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Derbion Shopping Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Derbion Shopping Centre DE1 — formerly the Westfield Derby and Intu Derby, rebranded as Derbion — is Derby's principal shopping centre, with glazed atrium sections and individual unit frontages that benefit from solar-control film. Solar-control film applied to glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods and reducing air conditioning dependence. The east-facing and south-facing glazed sections of Derbion receive significant solar load during trading hours. We work to Derbion management guidelines and confirm access arrangements with centre management before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Derby retail outside the city centre — Kingsway, Meteor, Wyvern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Derby and Derbyshire retail postcodes, not just the DE1 city centre core. Kingsway Retail Park DE22 to the west of the city is a significant out-of-town destination with national multiples requiring window film for solar control, frosted film for fitting rooms and DDA manifestation. Meteor Centre DE21 to the north on the A38 and Wyvern Retail Park DE21 on Wyvern Way carry similar glazed frontage profiles. The wider Derbyshire retail picture — Belper DE56 town centre, Ilkeston DE7, Swadlincote DE11, Matlock DE4 and Ashbourne DE6 — all fall within our standard Derby service area. WRPX is based in South Yorkshire, less than 30 minutes from Derby city centre via the A38 — the shortest drive time to any of our retail window film service markets.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Derby retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Derby retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Derbion and Eagle Market shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Derby retailers — units across the city centre, Kingsway Retail Park, Meteor Centre and Derbyshire district high streets — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Derby retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Derby retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Derbion, Eagle Market, Kingsway Retail Park and across all stand-alone city-centre and high-street Derby units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Derby retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Derby are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Derbion units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Derby retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Derby &amp; Derbyshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Derby and Derbyshire.
            Frosted privacy film for fitting rooms and staff areas, solar-control film for
            glazed shop fronts, branded decorative vinyl and DDA-compliant glass
            manifestation. Derbion, Eagle Market, Kingsway Retail Park, Meteor Centre,
            Wyvern Retail Park and all Derby DE postcodes. Trading-hours installation
            available. Less than 30 minutes from our South Yorkshire base via the A38.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is a city of around 260,000 people — the principal shopping
              destination for Derbyshire and parts of the East Midlands corridor
              between Birmingham and Nottingham. Derbion Shopping Centre DE1 —
              formerly Westfield Derby and Intu Derby, rebranded as Derbion — is
              the dominant covered shopping centre and one of the largest retail
              destinations in the East Midlands, housing over 200 units across
              multiple floors of glazed gallery space. The Eagle Market DE1 and
              the pedestrianised Cornmarket, St Peter&apos;s Street and Sadler Gate
              area extend the city-centre retail footprint.
            </p>
            <p>
              Derby&apos;s out-of-town retail geography adds substantial capacity.
              Kingsway Retail Park DE22 to the west of the city, on the A516
              Kingsway near the Pentagon Island, has a range of national multiples
              with significant glazed frontages. Meteor Centre DE21 on the A38
              north of the city is a large out-of-town retail park, and Wyvern
              Retail Park DE21 to the north-east adds further out-of-town
              destination retail. All three parks have glazed frontages requiring
              the full range of window film applications.
            </p>
            <p>
              The wider Derbyshire retail picture — Belper DE56 town centre,
              Ilkeston DE7 town centre, Swadlincote DE11, Matlock DE4 and
              Ashbourne DE6 market town high streets — all fall within the standard
              WRPX Derby service area. Window film applications across this landscape
              follow the same three main categories: frosted and privacy film for
              fitting rooms and partitions, solar-control for south and west-facing
              glazed frontages, and DDA-compliant manifestation for full-height
              glazed doors and panels.
            </p>
            <p>
              WRPX is based in South Yorkshire, less than 30 minutes from Derby city
              centre via the A38 south — Derby is our closest Midlands retail window
              film service market and one of the fastest mobilisation points in our
              entire coverage area.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Derby retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Derby.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and
                atrium sections. Effective for south-facing Derbion units and
                west-facing Kingsway Retail Park frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop
                fronts, internal glass partitions and glazed doors across
                Derby retail. Frosted strips, etched-effect, dot pattern
                or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted
                or clear vinyl. Consistent branding across multi-site Derby
                and Derbyshire retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching —
                relevant for ground-floor Derby city-centre retail fronts
                on high-footfall pedestrianised streets around St Peter&apos;s
                Street and the Cornmarket.
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
            Derby retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Derbion Shopping Centre DE1</strong>
              — full coverage across Derbion, including individual unit frontages,
              internal glazing, atrium sections and service corridor glazing. Solar-control,
              frosted, manifestation and branded film for any unit. We work to Derbion
              management guidelines and confirm access arrangements directly with centre
              management before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Eagle Market and city-centre
              DE1</strong> — the Eagle Market, Cornmarket, St Peter&apos;s Street,
              Sadler Gate and the wider Derby city-centre pedestrianised area. We are
              familiar with city-centre access requirements and the standard glazing
              types on Derby city-centre retail units.
            </p>
            <p>
              <strong className="text-foreground">Kingsway Retail Park DE22</strong>
              — on the A516 west of the city, Kingsway Retail Park has a significant
              number of national retailers with large glazed frontages requiring solar
              control, frosted film for fitting rooms and DDA manifestation. Full
              coverage for all units.
            </p>
            <p>
              <strong className="text-foreground">Meteor Centre DE21 and Wyvern
              Retail Park DE21</strong> — both retail parks on the northern A38
              corridor have national multiple retailers with glazed frontages.
              Full coverage for all units within both parks.
            </p>
            <p>
              <strong className="text-foreground">Wider Derbyshire retail</strong>
              — Belper DE56 market town, Ilkeston DE7 town centre, Swadlincote DE11
              and Matlock DE4 high streets, Ashbourne DE6 and all Derbyshire district
              retail high streets. Full coverage across the wider Derbyshire retail
              area from our Derby service base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Derby
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Nottingham retail — intu Victoria Centre, Broadmarsh and Nottinghamshire units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Window film for Leicester retail — Highcross, Haymarket, Fosse Park and Leicestershire units.</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film for Derby commercial and residential glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Solar-control glazing film for Derby commercial buildings — heat reduction and glare control.</p>
            </Link>
            <Link href="/architectural-wrap-retail-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Derby</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Derby retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Derby retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need — frosted,
              solar control, manifestation or branded film. We&apos;ll quote and schedule
              around your trading hours. WRPX is less than 30 minutes from Derby via
              the A38 — among the fastest response times of any of our retail service
              markets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Derby Quote →
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
