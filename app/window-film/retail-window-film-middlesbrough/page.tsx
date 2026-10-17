import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Middlesbrough | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Middlesbrough and Teesside — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Cleveland Centre, Teesside Retail Park, Middlesbrough Retail Park, Captain Cook Square and all TS postcode retail environments. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Middlesbrough — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Middlesbrough and Teesside. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Cleveland Centre TS1 (120+ units), Teesside Retail Park TS17 Stockton (major out-of-town retail destination), Middlesbrough Retail Park, Captain Cook Square TS1 and all Middlesbrough and Tees Valley TS postcode retail environments. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Middlesbrough", item: "https://www.wrpx.co.uk/window-film/retail-window-film-middlesbrough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Middlesbrough retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Middlesbrough and Teesside. Typical uses include fitting room and changing area glazing in clothing retailers at Cleveland Centre TS1 and Teesside Retail Park TS17 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within Middlesbrough town-centre retail units on Corporation Road and Linthorpe Road, and glazed shopfront sections in Captain Cook Square TS1 and surrounding commercial areas where a frosted band improves the display arrangement or provides staff privacy. Middlesbrough&apos;s independent retail quarter on Baker Street and Norton Road also generates demand for decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Cleveland Centre or Teesside Retail Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cleveland Centre — Middlesbrough&apos;s principal covered shopping centre in the TS1 core, with approximately 120 retail units — has glazed atrium sections and individual unit frontages where solar-control and manifestation film are applicable. Teesside Retail Park in Thornaby TS17 — one of the largest out-of-town retail destinations in the North East — has major retail buildings including Next, M&S, Currys, DFS and a cinema multiplex on an open site with significant south and west-facing glazed frontages well suited to solar-control film. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and UV fading of merchandise on exposed frontages. We follow the respective centre management access and contractor protocols for all Cleveland Centre and Teesside Retail Park installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Middlesbrough shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Middlesbrough retail units. Retailers at Cleveland Centre TS1, Teesside Retail Park TS17 and Captain Cook Square TS1 frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations compliance with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Middlesbrough retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Middlesbrough and Teesside retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Cleveland Centre or Teesside Retail Park landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Middlesbrough retail programmes. Our South Yorkshire base puts Middlesbrough approximately 1 hour 30 minutes away via the A1(M) and A19, making efficient mobilisation straightforward for Middlesbrough and Tees Valley retail assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Middlesbrough shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Middlesbrough retail units where trading disruption is not acceptable. Cleveland Centre and Teesside Retail Park both operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Middlesbrough town-centre units on Linthorpe Road TS1 or Corporation Road with pedestrian access considerations, we agree logistics with the unit in advance to avoid disruption during peak trading.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough and Teesside retail postcodes do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Middlesbrough and Tees Valley TS retail postcodes — TS1 (Middlesbrough town centre: Cleveland Centre, Captain Cook Square, Corporation Road, Linthorpe Road and the town-centre retail core — Middlesbrough&apos;s principal high-street and covered mall retail environment), TS2 (Middlesbrough riverside retail development zone), TS3 (East Middlesbrough retail: Berwick Hills, Pallister Park — residential suburban retail), TS4 (Marton Road commercial corridor: out-of-town and roadside retail south of the town centre), TS5 (Acklam and Linthorpe: south-west Middlesbrough residential retail zone), TS6 (South Bank, Eston — east Teesside residential retail provision), TS7 (Marton, Coulby Newham — south Middlesbrough residential retail including Coulby Newham shopping area). Stockton-on-Tees TS18 — including Teesside Retail Park TS17 in Thornaby and Stockton High Street TS18 — is also within reach. Wider Tees Valley including Redcar TS10, Hartlepool TS24 and Billingham TS23 are covered. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmMiddlesbroughPage() {
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
            <span className="text-foreground">Middlesbrough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Middlesbrough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Middlesbrough
            and the Tees Valley. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. Cleveland Centre, Teesside Retail Park,
            Captain Cook Square and all Middlesbrough TS postcode retail
            environments. Trading-hours installation available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Middlesbrough Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Middlesbrough retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough is the principal retail centre for the Tees Valley,
              serving a combined catchment population of approximately 700,000
              across Middlesbrough, Stockton-on-Tees, Redcar &amp; Cleveland and
              the wider North East. Cleveland Centre in the TS1 town core is
              the main covered shopping destination, with approximately 120 units
              across a covered mall and open-air extensions anchored by national
              multiples and independent retailers.
            </p>
            <p>
              Teesside Retail Park in Thornaby TS17 and Middlesbrough Retail Park
              near the A66 form a major out-of-town retail cluster with large-format
              retail buildings — Next, M&amp;S, Currys, DFS, Cineworld —
              on open sites with substantial south and west-facing glazed elevations
              suited to solar-control film. Captain Cook Square TS1 provides
              additional town-centre retail and leisure adjacent to the main
              Cleveland Centre footprint.
            </p>
            <p>
              Retail fit-out contractors and shopfitters delivering Middlesbrough
              projects — new unit builds, refurbishments, brand refreshes —
              regularly need subcontract window film installation for manifestation,
              frosted film and solar-control on tight programme timelines. Print
              companies and sign businesses supplying Middlesbrough retail clients
              need reliable installation partners who know the local centre
              management requirements and can mobilise efficiently.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Middlesbrough via the A1(M) and A19. We cover Cleveland Centre,
              Teesside Retail Park and all Middlesbrough and Tees Valley TS
              postcode retail environments with straightforward mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Middlesbrough
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Cleveland Centre and Teesside Retail Park
                fashion retailers. Complete privacy maintained while retaining
                natural light in the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays in Middlesbrough retail unit windows — relevant
                across large-format Teesside Retail Park buildings and
                town-centre units.
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
                Middlesbrough retail units at Cleveland Centre and Captain Cook
                Square.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Middlesbrough
                retail glazing — shopfront branding, reception glass and
                partition panels across Cleveland Centre and out-of-town retail
                park units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Middlesbrough retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Middlesbrough retail
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
            Middlesbrough retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Cleveland Centre TS1</strong> —
              Middlesbrough&apos;s principal covered shopping centre in the TS1 town
              core, with approximately 120 retail units across a covered mall and
              adjacent open areas. National multiple retailers, independent traders
              and food operators across two levels generate consistent window film
              demand for fitting rooms, manifestation and solar-control. We follow
              Cleveland Centre management access and contractor protocols.
            </p>
            <p>
              <strong className="text-foreground">Teesside Retail Park TS17 (Thornaby)</strong> —
              one of the largest out-of-town retail parks in the North East, with
              major format retailers including Next, M&amp;S, Currys and DFS on an
              open site in Thornaby TS17. Large-format glazed retail frontages —
              particularly on south and west-facing elevations — are well suited
              to solar-control film. We follow individual retailer and park
              management contractor access requirements.
            </p>
            <p>
              <strong className="text-foreground">Captain Cook Square TS1</strong> —
              the retail and leisure complex immediately adjacent to Cleveland
              Centre, including Cineworld, restaurants and retail units with
              glazed frontages and internal glass doors requiring manifestation
              and privacy film.
            </p>
            <p>
              <strong className="text-foreground">Linthorpe Road and Middlesbrough town centre TS1</strong> —
              the primary high-street retail corridor south of Cleveland Centre,
              with independent retailers, national chains and food operators on
              a traditional high street. Glazed shopfronts, internal glass
              partitions and fitting room windows are the primary window film
              applications in this zone.
            </p>
            <p>
              <strong className="text-foreground">Stockton High Street and Stockton town centre TS18</strong> —
              Stockton-on-Tees is Teesside&apos;s secondary retail centre approximately
              5 miles west of Middlesbrough, with a significant independent retail
              quarter on one of the widest high streets in the UK and a growing
              commercial property refurbishment pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Middlesbrough and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Retail film across Newcastle and the North East</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Window film for gyms and leisure centres across Teesside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across Teesside</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Middlesbrough</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Middlesbrough retail site, unit size, the glazing areas
              and what you need the film to do — privacy, solar control,
              manifestation or branding. We work white-label for shopfitters and
              print companies, and direct for retailers and facilities managers.
              Installation available during or outside trading hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Middlesbrough Retail Quote →
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
