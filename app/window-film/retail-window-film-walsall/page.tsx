import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Walsall | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Walsall and the Black Country — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Building Regulations-compliant glass manifestation. The Saddlers Centre WS1, Gallagher Retail Park WS2, St Matthew&apos;s Quarter WS1 and all Walsall WS postcode retail sites. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-walsall/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Walsall — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Walsall and the Black Country. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Building Regulations-compliant glass manifestation. The Saddlers Centre WS1, Gallagher Retail Park WS2, St Matthew's Quarter WS1 and all Walsall WS postcode retail sites. Installation available during or outside trading hours. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Walsall", item: "https://www.wrpx.co.uk/window-film/retail-window-film-walsall/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Walsall retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Walsall and the broader WS postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at The Saddlers Centre WS1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light. Staff area partitions and back-office glazing within Walsall town-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy without structural alteration. The Saddlers Centre is Walsall&apos;s principal covered retail destination, generating consistent shopfitting and window film demand from national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Walsall retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Walsall retail units with south and west-facing glazed elevations — particularly the large-format nationally tenanted units at Gallagher Retail Park WS2 — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 south and M6 — a direct motorway route from Sheffield into the West Midlands. We can mobilise to The Saddlers Centre WS1, Gallagher Retail Park WS2 and all Walsall WS postcode retail sites, and can cover Walsall alongside Wolverhampton, Birmingham and other West Midlands sites in a co-ordinated regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Walsall shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Building Regulations (Part K in England) for new and substantially refurbished commercial glazed installations across Walsall retail units. Retailers at The Saddlers Centre WS1 and the broader Walsall town-centre commercial zone regularly need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed surfaces. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Walsall retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Walsall and Black Country retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Saddlers Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Walsall retail programmes. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6 — for planned Walsall retail fit-out schedules we incorporate travel into scheduling and can combine Walsall with Wolverhampton, Birmingham and other West Midlands sites in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Walsall shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Walsall retail units where trading disruption is not acceptable. The Saddlers Centre WS1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Gallagher Retail Park WS2, St Matthew&apos;s Quarter WS1 and other Walsall retail locations outside the managed shopping centres, out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall and Black Country postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Walsall and surrounding WS postcode retail areas — WS1 (Walsall town centre: The Saddlers Centre WS1 — Walsall&apos;s principal covered retail destination with national multiple tenants generating fitting room frosted film, glass manifestation and solar-control demand; St Matthew&apos;s Quarter WS1 — the town-centre commercial and retail zone adjacent to the market; Walsall town-centre high street national multiple operators), WS2 (Walsall outer south: Gallagher Retail Park WS2 — a large-format out-of-town retail and commercial park with nationally tenanted units and glazed frontages generating solar-control, branded film and manifestation demand; outer south-west Walsall commercial provision), WS3 (Bloxwich: Bloxwich town centre local retail zone with community-scale retail and commercial provision), WS4 (Rushall, Shelfield: outer north Walsall local retail provision), WS5 (Aldridge: Aldridge town centre local commercial and retail zone). Wolverhampton WV1 and Birmingham B70 are also within the broader Black Country operational area for multi-site retail film programmes. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmWalsallPage() {
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
            <span className="text-foreground">Walsall</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Walsall &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Walsall
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Walsall and the
            Black Country. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and Building Regulations-compliant glass manifestation. The
            Saddlers Centre WS1, Gallagher Retail Park WS2 and all Walsall WS
            postcode retail sites covered. Approximately 1 hour from our South
            Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Walsall Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Walsall retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Walsall is a large Black Country town of approximately 270,000
              people — the main urban centre of the Metropolitan Borough of
              Walsall and a significant retail destination within the wider West
              Midlands conurbation. The retail market spans a covered town-centre
              shopping destination at The Saddlers Centre WS1, a major
              out-of-town retail park at Gallagher Retail Park WS2 and the
              broader St Matthew&apos;s Quarter town-centre commercial zone
              adjacent to the market.
            </p>
            <p>
              The Saddlers Centre is Walsall&apos;s principal covered shopping
              destination, housing national multiple retailers and generating
              consistent shopfitting and window film demand for fitting rooms,
              glass manifestation on internal doors and partitions, and
              solar-control treatments for glazed frontages. Gallagher Retail
              Park WS2 provides large-format out-of-town retail in an open-site
              layout with glazed elevations — a consistent source of solar-control
              and manifestation demand from nationally tenanted units facing
              direct sun.
            </p>
            <p>
              In England, glass manifestation on full-height glazed panels and
              glass doors in commercial premises is governed by Building
              Regulations Part K. We install Building Regulations-compliant
              manifestation at the correct 850mm and 1500mm height zones on all
              Walsall retail fit-out and refurbishment projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Walsall via the M1 south and M6 — a direct motorway route from
              Sheffield into the West Midlands. We can mobilise quickly to
              The Saddlers Centre, Gallagher Retail Park and all WS postcode
              retail sites, and can cover Walsall alongside Wolverhampton,
              Birmingham and other Black Country and West Midlands sites in a
              co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Walsall
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Saddlers Centre WS1 fashion retailers.
                Complete privacy maintained while retaining natural light
                in the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — particularly relevant across Gallagher
                Retail Park WS2 large-format units facing direct sun.
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
                branded options for all Walsall WS postcode retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Walsall retail
                glazing — shopfront branding, reception glass and partition
                panels across The Saddlers Centre WS1, Gallagher Retail Park
                WS2 and the wider Black Country WS postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Walsall retail units — providing
                staff privacy without structural alterations across all WS
                postcode retail environments from town centre to out-of-town
                retail parks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Walsall retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company across all Walsall WS postcode retail
                destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">The Saddlers Centre WS1</strong> —
              Walsall&apos;s principal covered shopping destination in the town
              centre, housing national multiple retailers across its retail
              floors. Consistent shopfitting and window film demand for fitting
              room frosted film, glass manifestation and glazed shopfront
              treatments. Centre management access and contractor protocols
              are followed for all Saddlers Centre installations.
            </p>
            <p>
              <strong className="text-foreground">Gallagher Retail Park WS2</strong> —
              A large-format out-of-town retail and commercial park in the
              south-west Walsall WS2 corridor. Nationally tenanted units with
              glazed frontages facing direct sun generating solar-control,
              branded film and Building Regulations manifestation demand.
              The park&apos;s open-site layout means south and west elevations
              receive consistent direct solar exposure across the retail day.
            </p>
            <p>
              <strong className="text-foreground">St Matthew&apos;s Quarter WS1</strong> —
              The town-centre commercial and retail zone adjacent to Walsall
              market — national multiple operators, food service and commercial
              units generating window film and manifestation demand from
              shopfitters and facilities managers in the wider WS1 commercial
              zone.
            </p>
            <p>
              <strong className="text-foreground">Bloxwich town centre WS3</strong> —
              The secondary Walsall district centre in Bloxwich to the north
              of the borough — local retail, food service and community
              commercial provision generating privacy film and manifestation
              demand from independent operators and locally managed estates.
            </p>
            <p>
              <strong className="text-foreground">Aldridge WS9 and outer WS retail parks</strong> —
              Outer Walsall borough retail-park provision across Aldridge WS9
              and the surrounding WS postcode ring — generating solar-control
              and manifestation demand from nationally tenanted out-of-town
              commercial and retail operators across the broader Black Country
              WS postcode zone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Walsall and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Wolverhampton</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/subcontract-window-film-installation-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Walsall</p>
            </Link>
            <Link href="/window-film/gym-window-film-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">Window film for Walsall gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Walsall retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Walsall retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Walsall retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              1 hour from South Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Walsall Retail Quote →
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
