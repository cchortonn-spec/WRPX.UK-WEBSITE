import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Stoke-on-Trent | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Stoke-on-Trent and the Potteries — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Potteries Shopping Centre Hanley, Festival Park, Intu Potteries and all Stoke-on-Trent ST postcode retail environments. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-stoke-on-trent/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Stoke-on-Trent — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Stoke-on-Trent and the Potteries. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Potteries Shopping Centre Hanley ST1, Festival Park Etruria ST1, Hanley town centre ST1, Longton Exchange ST3 and all Stoke-on-Trent ST postcode retail environments. Installation available during or outside trading hours. Approximately 1 hour 15 minutes from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Stoke-on-Trent", item: "https://www.wrpx.co.uk/window-film/retail-window-film-stoke-on-trent/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Stoke-on-Trent retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Stoke-on-Trent and the wider Potteries area. Typical uses include fitting room and changing area glazing in clothing retailers at the Potteries Shopping Centre ST1 and Hanley town centre (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within Stoke retail units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Festival Park Etruria ST1 — with its large-format retail buildings and food park — and Longton Exchange ST3 also generate consistent frosted film demand from shopfitters and facilities teams managing those retail environments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the Potteries Shopping Centre or Festival Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Potteries Shopping Centre in Hanley ST1 — Stoke-on-Trent&apos;s main covered shopping destination with over 100 units across a multi-level footprint — has individual unit frontages and glazed atrium sections where solar-control film is applicable to reduce heat gain and UV fading of merchandise. Festival Park Etruria ST1 — the out-of-town retail and leisure destination west of Hanley — has large-format retail buildings with significant south and west-facing glazed elevations well suited to solar-control film; the open-air retail park format means glazed units receive direct sun exposure across extended periods of the day. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise. We follow the respective centre management and park operator access and contractor protocols for all Potteries Shopping Centre and Festival Park installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Stoke-on-Trent shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Stoke-on-Trent retail units. Retailers at the Potteries Shopping Centre ST1, Festival Park ST1 and Longton Exchange ST3 frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations compliance with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Stoke-on-Trent retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Stoke-on-Trent and Potteries area retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Potteries Shopping Centre landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Stoke-on-Trent retail programmes. Our South Yorkshire base puts Stoke-on-Trent approximately 1 hour 15 minutes away via the M1 and M6, making efficient mobilisation straightforward for Stoke and wider Staffordshire assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Stoke-on-Trent shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Stoke-on-Trent retail units where trading disruption is not acceptable. The Potteries Shopping Centre operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Festival Park Etruria units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance to avoid disruption during peak trading periods.",
      },
    },
    {
      "@type": "Question",
      name: "Which Stoke-on-Trent and Potteries postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Stoke-on-Trent and Staffordshire ST retail postcodes — ST1 (Hanley city centre: the Potteries Shopping Centre, Hanley indoor market, Lamb Street retail corridor and Festival Park Etruria — Stoke-on-Trent&apos;s principal retail core and the highest concentration of commercial retail fit-out window film demand in the Potteries), ST2 (Bucknall, Hanley fringe — east Stoke residential and retail zone), ST3 (Longton — one of the six original Potteries towns with Longton Exchange shopping and the traditional Longton town centre retail strip; a consistent source of independent retail and shopfit demand), ST4 (Stoke town centre and Penkhull — the original town of Stoke-upon-Trent adjacent to Stoke-on-Trent railway station; traditional high-street retail alongside the civic quarter), ST5 (Newcastle-under-Lyme — the adjacent market town with its own town centre retail including the indoor Kingsway Exchange, a separate retail market from Hanley with consistent shopfit demand), ST6 (Tunstall and Burslem — the northern Potteries towns; Tunstall has a traditional market town centre with independent and multiple retail alongside a covered market), ST7 (Alsager, Kidsgrove — south Cheshire and north Staffordshire suburban retail zone on the M6 approach), ST8 (Biddulph — north Staffordshire market town with town centre retail), ST11 (Blythe Bridge — east Staffordshire retail and commercial zone), ST16 (Stafford town centre — the county town of Staffordshire with a traditional retail core including the Guildhall Shopping Centre). WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Stoke-on-Trent via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmStokePage() {
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
            <span className="text-foreground">Stoke-on-Trent</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Stoke-on-Trent &amp; The Potteries
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Stoke-on-Trent
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Stoke-on-Trent
            and the Potteries. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. Potteries Shopping Centre, Festival
            Park, Hanley town centre and all Stoke-on-Trent ST postcode retail
            environments. Trading-hours and out-of-hours installation available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Stoke-on-Trent Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Stoke retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Stoke-on-Trent — the Potteries city formed from six historic towns
              — is the principal retail centre for north Staffordshire and a major
              commercial environment with a retail catchment extending across
              Staffordshire and south Cheshire. The Potteries Shopping Centre in
              Hanley ST1 is the main covered shopping destination for the
              conurbation, with over 100 units across a modern multi-level
              footprint anchored by national multiples and dining operators.
            </p>
            <p>
              Festival Park Etruria ST1 — the out-of-town retail and leisure
              destination immediately west of Hanley — provides a significant
              large-format retail cluster with substantial glazed elevations on
              an open site, well suited to solar-control film on south and
              west-facing shop fronts. Longton Exchange ST3 and the town centres
              of Newcastle-under-Lyme ST5 and the other original Potteries towns
              add further retail and shopfit activity across the conurbation.
            </p>
            <p>
              Retail fit-out contractors and shopfitters delivering Stoke-on-Trent
              projects — new unit builds, refurbishments, brand refreshes — regularly
              need subcontract window film installation for manifestation, frosted
              film and solar-control on tight programme timelines. Print companies
              and sign businesses supplying Potteries retail clients need reliable
              installation partners who know the local centre management
              requirements and can mobilise efficiently.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Stoke-on-Trent via the M1 and M6. We cover the Potteries
              Shopping Centre, Festival Park and all Stoke-on-Trent and Staffordshire
              ST postcode retail environments with straightforward motorway mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Stoke-on-Trent
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Potteries Shopping Centre fashion retailers.
                Complete privacy maintained while retaining natural light in the
                fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — particularly relevant across Festival
                Park&apos;s open-site large-format retail buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                on internal glass doors and full-height glazed panels. Frosted
                bands, etched-effect, dot pattern or branded options for
                Stoke-on-Trent retail units at the Potteries Shopping Centre
                and Festival Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Stoke-on-Trent
                retail glazing — shopfront branding, reception glass and partition
                panels across the Potteries Shopping Centre, Festival Park and
                Longton Exchange retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Stoke-on-Trent retail units —
                providing staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Stoke-on-Trent retail
                campaigns, seasonal graphics and sale-period programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Potteries Shopping Centre ST1</strong> —
              Stoke-on-Trent&apos;s principal covered shopping destination in the
              heart of Hanley, with over 100 retail and dining units across a
              modern multi-level footprint. National multiple retailers and
              independent traders generating consistent window film demand for
              fitting rooms, manifestation and solar-control. We follow Potteries
              Shopping Centre management access and contractor protocols.
            </p>
            <p>
              <strong className="text-foreground">Festival Park Etruria ST1</strong> —
              the out-of-town retail and leisure destination immediately west of
              Hanley, featuring large-format retail buildings alongside a food
              court, cinema and hotel. The open-site orientation and large glazed
              elevations on the retail units mean south and west-facing shop fronts
              receive significant direct solar exposure — a primary driver of
              solar-control film demand across Festival Park.
            </p>
            <p>
              <strong className="text-foreground">Hanley town centre ST1</strong> —
              the civic and retail core of Stoke-on-Trent, with the traditional
              Hanley high-street retail corridor across Lamb Street, Stafford
              Street and the wider pedestrianised zone. A mix of national chains,
              independents and food operators generating consistent shopfit and
              frosted film demand from retailers and print companies working in
              the Hanley core.
            </p>
            <p>
              <strong className="text-foreground">Longton Exchange ST3</strong> —
              the covered shopping centre in Longton, one of the original six
              Potteries towns. Longton Exchange and the wider Longton town centre
              provide a secondary retail environment with consistent shopfitting
              and window film demand from national and independent retailers in
              the south Stoke zone.
            </p>
            <p>
              <strong className="text-foreground">Newcastle-under-Lyme ST5</strong> —
              the adjacent market town with its own established retail centre
              including the Kingsway Exchange indoor market and the traditional
              Newcastle town centre retail strip. Newcastle-under-Lyme generates
              independent shopfit and window film demand separate from the main
              Hanley Potteries retail market.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Stoke-on-Trent and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Nottingham and the East Midlands</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Stoke-on-Trent</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Stoke-on-Trent</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-stoke-on-trent/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Stoke-on-Trent</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Stoke-on-Trent care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Stoke-on-Trent retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stoke-on-Trent retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Stoke-on-Trent retail site, unit size, the glazing areas
              and what you need the film to do — privacy, solar control,
              manifestation or branding. We work white-label for shopfitters and
              print companies, and direct for retailers and facilities managers.
              Installation available during or outside trading hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Stoke-on-Trent Retail Quote →
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
