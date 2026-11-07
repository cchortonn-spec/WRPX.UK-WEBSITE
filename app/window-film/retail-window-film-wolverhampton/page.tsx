import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Wolverhampton | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Wolverhampton and the Black Country — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Building Regulations-compliant glass manifestation. Mander Centre WV1, Wulfrun Centre WV1, Bilston town centre WV14 and all Wolverhampton WV postcode retail sites. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Wolverhampton — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Wolverhampton and the Black Country. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Building Regulations-compliant glass manifestation. Mander Centre WV1, Wulfrun Centre WV1, Bilston town centre WV14 and all Wolverhampton WV postcode retail sites. Installation available during or outside trading hours. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Wolverhampton", item: "https://www.wrpx.co.uk/window-film/retail-window-film-wolverhampton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Wolverhampton retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Wolverhampton and the wider Black Country WV postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at the Mander Centre WV1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Wolverhampton city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy without structural alteration. The Mander Centre and adjacent Wulfrun Centre on Dudley Street WV1 form Wolverhampton&apos;s principal covered retail zone, generating consistent shopfitting and window film demand from national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Wolverhampton retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Wolverhampton retail units with south and west-facing glazed elevations — particularly on the open-aspect frontages along the Bilston Road retail corridor WV2 and out-of-town retail provision around the Black Country — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Wolverhampton is approximately 1 hour from our South Yorkshire base via the M1 and M6 — a direct motorway route south-west from Sheffield. We can mobilise to the Mander Centre, Wulfrun Centre, Bilston WV14 and all Wolverhampton WV postcode retail sites, and can cover Wolverhampton alongside Birmingham, Walsall and other West Midlands sites in a co-ordinated regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Wolverhampton shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Building Regulations (Part K in England) for new and substantially refurbished commercial glazed installations across Wolverhampton retail units. Retailers at the Mander Centre WV1 regularly need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed surfaces. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Wolverhampton retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Wolverhampton and Black Country retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Mander Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Wolverhampton retail programmes. Wolverhampton is approximately 1 hour from our South Yorkshire base via the M1 and M6 — for planned Wolverhampton retail fit-out schedules we incorporate travel into scheduling and can combine Wolverhampton with Birmingham, Walsall and other West Midlands locations in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Wolverhampton shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Wolverhampton retail units where trading disruption is not acceptable. The Mander Centre WV1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Bilston town centre WV14 and other Wolverhampton retail locations outside the managed shopping centres, out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton and Black Country postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wolverhampton and surrounding WV postcode retail areas — WV1 (Wolverhampton city centre: the Mander Centre and Wulfrun Centre on Dudley Street — the city&apos;s principal covered retail zone with national multiple tenants generating fitting room frosted film, glass manifestation and solar-control demand; the pedestrianised city-centre shopping quarter across Queen Square, Victoria Street and Lichfield Street WV1; Wolverhampton Ring Road inner commercial and retail zone), WV2 (Bilston Road: south-east Wolverhampton corridor with community retail provision and commercial glazing demand), WV3 (Penn Road: south-west Wolverhampton residential and local retail zone), WV4 (Penn, Bradmore: south Wolverhampton local retail), WV14 (Bilston: Bilston town centre High Street with independent and national retail tenants generating window film demand; Bilston Retail Park WV14). Walsall WS1-WS3, West Bromwich B70-B71 and Dudley DY1-DY4 also within the broader Black Country operational area for multi-site retail programmes. WRPX is based in South Yorkshire, approximately 1 hour from Wolverhampton via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmWolverhamptonPage() {
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
            <span className="text-foreground">Wolverhampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Wolverhampton &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Wolverhampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Wolverhampton
            and the Black Country. Frosted privacy film for fitting rooms and
            staff areas, solar-control film for glazed shop fronts, branded
            decorative vinyl and Building Regulations-compliant glass
            manifestation. Mander Centre WV1, Wulfrun Centre WV1 and Bilston
            WV14 covered. Approximately 1 hour from our South Yorkshire base
            via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Wolverhampton Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Wolverhampton retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wolverhampton is the principal city of the Black Country — a major
              urban centre with a well-established retail core anchored by the
              Mander Centre and Wulfrun Centre on Dudley Street WV1. The Mander
              Centre is Wolverhampton&apos;s primary covered shopping centre,
              housing national multiple retailers across its enclosed retail
              floors and generating consistent shopfitting and window film demand
              for fitting rooms, glass manifestation on internal doors and
              partitions, and solar-control for glazed frontages.
            </p>
            <p>
              Bilston WV14 adds a secondary retail market to the south-east
              of the city — Bilston town centre High Street with a mix of
              national and independent retail tenants, and the Bilston Retail
              Park WV14 generating further glazed-frontage window film demand.
              The city-centre pedestrianised shopping quarter across Queen
              Square, Victoria Street and Lichfield Street WV1 adds independent
              retail, restaurant and hospitality operators with consistent
              window film and manifestation requirements.
            </p>
            <p>
              In England, glass manifestation on full-height glazed panels and
              glass doors in commercial premises is governed by Building
              Regulations Part K — not the Scottish Technical Handbooks or the
              Welsh equivalent. We install Building Regulations-compliant
              manifestation at the correct 850mm and 1500mm height zones on all
              Wolverhampton retail fit-out and refurbishment projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Wolverhampton via the M1 and M6 — a direct motorway route
              south-west from Sheffield. We can mobilise to the Mander Centre,
              Wulfrun Centre, Bilston and all WV postcode retail sites, and can
              cover Wolverhampton alongside Birmingham, Walsall and other West
              Midlands locations in a co-ordinated regional programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Wolverhampton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Mander Centre WV1 fashion retailers.
                Complete privacy maintained while retaining natural light in
                the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — relevant across Wolverhampton&apos;s
                city-centre units and out-of-town retail with open-aspect
                glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at the correct
                850mm and 1500mm heights on internal glass doors and full-height
                glazed panels. Frosted bands, etched-effect, dot pattern or
                branded options for Wolverhampton retail units across the
                Mander Centre and WV postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Wolverhampton
                retail glazing — shopfront branding, reception glass and
                partition panels across the Mander Centre WV1, the city-centre
                pedestrianised quarter and the wider Wolverhampton WV postcode
                retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Wolverhampton retail units —
                providing staff privacy without structural alterations across
                all WV postcode retail environments from city centre to Bilston
                and the broader Black Country.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Wolverhampton retail
                campaigns, seasonal graphics and sale-period programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company across all Wolverhampton WV
                postcode retail destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Mander Centre WV1</strong> —
              Wolverhampton&apos;s principal covered shopping centre on Dudley
              Street, housing national multiple retailers across its enclosed
              retail floors. Consistent shopfitting and window film demand for
              fitting room frosted film, glass manifestation and glazed
              shopfront treatments. Centre management access and contractor
              protocols are followed for all Mander Centre installations.
            </p>
            <p>
              <strong className="text-foreground">Wulfrun Centre WV1</strong> —
              Adjacent to the Mander Centre on Dudley Street, with further
              national retail tenants and food-court provision generating window
              film and manifestation demand from shopfitters and facilities
              managers across the combined Dudley Street retail zone.
            </p>
            <p>
              <strong className="text-foreground">City-centre pedestrianised quarter WV1</strong> —
              The pedestrianised shopping corridor across Queen Square, Victoria
              Street and Lichfield Street WV1 with national multiples,
              independent retailers and restaurant and hospitality operators
              generating fitting room frosted film, manifestation and decorative
              vinyl demand.
            </p>
            <p>
              <strong className="text-foreground">Bilston town centre WV14</strong> —
              Bilston High Street with independent and national retail tenants
              — a secondary Wolverhampton retail market generating window film
              demand from shopfitters, sign companies and local retailers
              refurbishing glazed shopfronts and fitting areas.
            </p>
            <p>
              <strong className="text-foreground">Bilston Retail Park WV14</strong> —
              Out-of-town large-format retail provision at Bilston with national
              home, food and DIY retail operators on open-site glazed plots.
              Solar-control and manifestation demand from nationally tenanted
              units with glazed elevations facing direct sun.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Wolverhampton and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Nottingham</p>
            </Link>
            <Link href="/subcontract-window-film-installation-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Wolverhampton</p>
            </Link>
            <Link href="/window-film/gym-window-film-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Window film for Wolverhampton gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Wolverhampton retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wolverhampton retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Wolverhampton retail site, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              1 hour from South Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Wolverhampton Retail Quote →
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
