import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Manchester | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Manchester — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Manchester Arndale, Trafford Centre, Market Street, King Street, Spinningfields, Deansgate and all Manchester retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Manchester — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Manchester and the wider Greater Manchester area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Manchester Arndale M4, Trafford Centre M17, Market Street M1/M4, King Street M2, Spinningfields M3, Deansgate M3, Northern Quarter M4, Cheetham Hill M8, Manchester Fort M9, Salford Quays M50 and all Manchester retail postcodes. Installation available during trading hours or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/window-film/retail-window-film-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Manchester retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail window film application we carry out across Manchester. Typical applications are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Manchester city-centre retail — Market Street M4, King Street M2, Deansgate M3, Spinningfields M3 and the Northern Quarter M4 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value. Manchester Arndale units frequently require frosted film for internal partitions, trial rooms and staff areas adjacent to the main floor.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the Trafford Centre or Manchester Arndale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Trafford Centre M17 — one of the largest shopping centres in the UK with approximately 200 stores across 1.9 million square feet — has glazed areas across its Peel Dome foodcourt, the Orient foodcourt and glazing sections in the main mall. Solar-control film applied to the interior face of glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures comfortable during high-occupancy trading periods and reducing reliance on air conditioning. Manchester Arndale M4 — approximately 200 stores in the city centre — and its connecting Halle St Peter&apos;s section both have glazed atrium areas and unit frontages where solar control film is effective. We work to centre management guidelines and schedule installation outside trading hours or during early-morning slots for Trafford Centre and Arndale units where centre management requires off-hours access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Manchester retail outside the city centre — Salford, Stockport, Oldham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Greater Manchester retail postcodes, not just the city-centre M1/M2/M3/M4 core. Manchester Fort retail park M9 (Cheetham Hill), Cheetham Hill retail area M8, Salford Quays M50 and MediaCity M50 retail units, The Lowry Outlet Mall M50, Stockport SK1 (Merseyway and Bridgefield) and Stockport Pyramid, Oldham OL1 (town centre retail), Bury BL9 (The Rock shopping centre), Bolton BL1 (The Market Place) and Wigan WN1 (Grand Arcade) all fall within our standard Manchester service area. WRPX is based in South Yorkshire, approximately 1 hour from Manchester city centre via the M1 and M62 — Manchester is one of our primary service markets outside the South Yorkshire corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Manchester retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Manchester retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Market Street and King Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Manchester retailers — units across the city centre, Trafford Centre, out-of-town retail parks and district high streets across Greater Manchester — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Manchester retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Manchester retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units across Manchester Arndale, King Street nationals, Spinningfields premium retail, Northern Quarter independents and all stand-alone city-centre and high-street units across Greater Manchester. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Manchester retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Manchester are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Manchester city-centre units on Market Street, King Street and Deansgate where centre or council access management may require specific scheduling, and for Trafford Centre and Manchester Arndale units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Manchester retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Manchester &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Manchester and Greater
            Manchester. Frosted privacy film for fitting rooms and staff areas, solar-control
            film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass
            manifestation. Manchester Arndale, Trafford Centre, Market Street, King Street,
            Spinningfields, Deansgate and all Greater Manchester postcodes. Trading-hours
            installation available. Approximately 1 hour from our South Yorkshire base
            via the M1 and M62.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is one of the UK&apos;s most significant retail destinations.
              Manchester city centre alone has multiple major retail clusters: Manchester
              Arndale M4 (approximately 200 stores, the largest city-centre shopping
              centre in the UK), Market Street M1/M4 (high street nationals), King Street
              M2 (premium and luxury independents), Deansgate M3 (mixed retail and
              restaurant), Spinningfields M3 (upscale retail, financial district) and
              the Northern Quarter M4 (independent and boutique retail).
            </p>
            <p>
              Beyond the city centre, the Trafford Centre in Trafford M17 — approximately
              200 stores across 1.9 million square feet — is one of the most visited
              shopping destinations in the UK. Manchester Fort retail park M9 in Cheetham
              Hill serves north Manchester and covers a broad out-of-town retail catchment.
              The wider Greater Manchester postcode area includes significant retail clusters
              in Stockport SK, Oldham OL, Bury BL, Bolton BL and Wigan WN.
            </p>
            <p>
              Window film applications across this retail landscape span three main
              categories: frosted and privacy film for fitting rooms, staff areas and
              internal partitions; solar-control film for south- and west-facing glazed
              shop fronts; and DDA-compliant glass manifestation for full-height glazed
              frontages and internal glazed panels.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Manchester
              city centre via the M1 and M62. Manchester is a primary service market —
              we carry out regular retail window film work across the Greater Manchester
              area with established access arrangements at major centres.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Manchester retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Manchester.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and atrium
                sections. Effective for west-facing Market Street units and south-facing
                Trafford Centre and Manchester Fort glazing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop fronts,
                internal glass partitions and glazed doors across Manchester retail.
                Frosted strips, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted or clear
                vinyl. Consistent branding across multi-site Manchester and Greater
                Manchester retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching and graffiti
                — relevant for ground-floor Manchester city-centre retail fronts on
                high-footfall pedestrianised streets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective daytime privacy film for staff areas, security glazing
                and back-office windows — maintains outward visibility from inside
                while blocking inward visibility from the retail floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Manchester city centre</strong> — Manchester
              Arndale M4, Market Street M1/M4 nationals, King Street M2 premium retail,
              Deansgate M3, Spinningfields M3, Northern Quarter M4 independents and the
              St Ann&apos;s Square/Exchange Square M2/M4 zone. We are familiar with Arndale
              centre management access requirements and can schedule early-morning or
              overnight slots for units where centre management requires off-hours installation.
            </p>
            <p>
              <strong className="text-foreground">Trafford Centre M17</strong> — full coverage
              across the main mall, Peel Dome and Orient sections. Solar-control, frosted,
              manifestation and branded film for any Trafford Centre retail unit. We work to
              Trafford Centre management guidelines and confirm access arrangements directly
              with centre management before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Greater Manchester out-of-town retail</strong> —
              Manchester Fort M9 (Cheetham Hill), Cheetham Hill retail M8, The Lowry Outlet
              Mall M50/Salford Quays, Stockport Merseyway SK1 and Bridgefield area, The Rock
              Bury BL9, The Market Place Bolton BL1, Grand Arcade Wigan WN1, Oldham town
              centre OL1 and all district high streets across the M, SK, OL, BL and WN
              postcode areas.
            </p>
            <p>
              For multi-site retailers with units spread across Manchester city centre,
              Trafford Centre and out-of-town retail parks, we co-ordinate a rolling
              installation schedule across all locations — consistent film specification
              and installation standard at every site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Manchester
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Window film for Sheffield retail — Meadowhall, The Moor and city-centre retail units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Window film for Leeds retail — Trinity Leeds, Victoria Gate and Briggate.</p>
            </Link>
            <Link href="/window-film/frosted-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film for Manchester commercial and residential glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Solar-control glazing film for Manchester commercial buildings — heat reduction and glare control.</p>
            </Link>
            <Link href="/architectural-wrap-retail-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Manchester retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need — frosted,
              solar control, manifestation or branded film. We&apos;ll quote and schedule
              around your trading hours. WRPX is approximately 1 hour from Manchester
              via the M1 and M62.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Manchester Quote →
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
