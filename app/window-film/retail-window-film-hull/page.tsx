import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Hull | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Hull and East Yorkshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. St Stephen's Hull, Princes Quay, Whitefriargate and all Hull HU postcode retail environments. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-hull/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Hull — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Hull and East Yorkshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. St Stephen's Hull HU1 (100+ units), Princes Quay HU1, Whitefriargate HU1, Humber Retail Park HU4 and all Hull and East Yorkshire HU postcode retail environments. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Hull", item: "https://www.wrpx.co.uk/window-film/retail-window-film-hull/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Hull retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Hull and East Yorkshire. Typical uses include fitting room and changing area glazing in clothing retailers at St Stephen&apos;s Hull HU1 and Princes Quay HU1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within Hull city-centre retail units on Whitefriargate HU1 and King Edward Street HU1, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Hull&apos;s independent retail quarter on Newland Avenue HU5 and the Avenues also generates demand for decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at St Stephen's or Princes Quay Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St Stephen&apos;s Hull — the city&apos;s principal covered shopping centre in the HU1 core, with over 100 retail and dining units on multiple levels adjacent to Hull Paragon Interchange — has individual unit frontages where solar-control and manifestation film are applicable. Princes Quay HU1 — the shopping centre built over the marina with glazed atrium sections and waterfront retail units — has substantial glazed elevations on the marina-facing side well suited to solar-control film. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and UV fading of merchandise on exposed frontages. We follow the respective centre management access and contractor protocols for all St Stephen&apos;s and Princes Quay installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Hull shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Hull retail units. Retailers at St Stephen&apos;s HU1, Princes Quay HU1 and Humber Retail Park HU4 frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations compliance with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Hull retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Hull and East Yorkshire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any St Stephen&apos;s or Princes Quay landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Hull retail programmes. Our South Yorkshire base puts Hull approximately 1 hour 30 minutes away via the M62 and A63, making efficient mobilisation straightforward for Hull and East Yorkshire retail assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Hull shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Hull retail units where trading disruption is not acceptable. St Stephen&apos;s Hull and Princes Quay both operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Hull city-centre units on Whitefriargate HU1 or King Edward Street HU1 with pedestrian access considerations, we agree logistics with the unit in advance to avoid disruption during peak trading.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull and East Yorkshire retail postcodes do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Hull and East Yorkshire HU retail postcodes — HU1 (Hull city centre: St Stephen&apos;s shopping centre, Princes Quay, Whitefriargate, King Edward Street and the Fruit Market creative quarter — Hull&apos;s principal retail core and the highest concentration of commercial retail fit-out window film demand in the city), HU2 (West Hull: the commercial and industrial fringe west of the city centre), HU3 (Hessle Road, Boulevard — west Hull residential and retail zone; Hessle Road is one of Hull&apos;s longest traditional retail streets), HU4 (Humber Retail Park, Anlaby Road — Humber Retail Park on the western retail corridor with major format retail including B&Q, Argos and other large-footprint retailers with significant glazed frontages suited to solar-control film; Anlaby Road runs west from the city centre through a long mixed-retail and commercial strip), HU5 (Newland Avenue, Beverley Road — north Hull retail and residential; Newland Avenue is Hull&apos;s primary independent retail street, popular with independent traders, cafes and boutiques generating consistent decorative and frosted film demand), HU6 (Cottingham Road, Orchard Park — north Hull residential retail), HU7 (Bransholme, Sutton — north-east Hull residential retail), HU8 (Holderness Road — east Hull&apos;s primary retail corridor, running east from the city centre with a long mixed strip of national and independent retailers), HU9 (Hedon Road, east Hull commercial and retail zone), HU10 (Willerby, Anlaby — west Hull suburban retail), HU13 (Hessle — Humber Bridge approach zone with suburban retail). Beverley HU17 and wider East Riding are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M62 and A63.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmHullPage() {
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
            <span className="text-foreground">Hull</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Hull
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Hull and East
            Yorkshire. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and glass manifestation. St Stephen&apos;s Hull, Princes Quay,
            Whitefriargate, Humber Retail Park and all Hull HU postcode retail
            environments. Trading-hours installation available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Hull Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Hull retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull — Kingston upon Hull — is the principal retail centre for
              the East Riding of Yorkshire and a major port city with a
              catchment population of approximately 500,000 across Hull and
              the surrounding East Riding. St Stephen&apos;s Hull in the HU1
              city core is the main covered shopping destination adjacent to
              Hull Paragon Interchange, with over 100 units across a modern
              multi-level footprint anchored by national multiples and
              independent retailers.
            </p>
            <p>
              Princes Quay — the glass-fronted shopping centre built over the
              marina in HU1 — provides additional city-centre retail adjacent
              to the waterfront, with glazed atrium sections and waterfront
              unit frontages that benefit from solar-control and decorative film.
              Humber Retail Park on Anlaby Road HU4 forms the main out-of-town
              retail cluster west of the city with large-format retail buildings
              on an open site with significant south and west-facing glazed
              elevations suited to solar-control film.
            </p>
            <p>
              Retail fit-out contractors and shopfitters delivering Hull projects
              — new unit builds, refurbishments, brand refreshes — regularly need
              subcontract window film installation for manifestation, frosted film
              and solar-control on tight programme timelines. Print companies and
              sign businesses supplying Hull retail clients need reliable
              installation partners who know the local centre management
              requirements and can mobilise efficiently.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Hull via the M62 and A63. We cover St Stephen&apos;s, Princes
              Quay and all Hull and East Yorkshire HU postcode retail environments
              with straightforward motorway mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Hull
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across St Stephen&apos;s and Princes Quay fashion
                retailers. Complete privacy maintained while retaining natural
                light in the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays in Hull retail unit windows — relevant
                across Humber Retail Park buildings and Princes Quay&apos;s
                waterfront glazed elevations.
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
                Hull retail units at St Stephen&apos;s and Princes Quay.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Hull retail
                glazing — shopfront branding, reception glass and partition
                panels across St Stephen&apos;s, Princes Quay and Whitefriargate
                retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Hull retail units — providing staff
                privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Hull retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St Stephen&apos;s Hull HU1</strong> —
              Hull&apos;s principal covered shopping centre adjacent to Hull Paragon
              Interchange, with over 100 retail and dining units on multiple levels
              in the heart of the HU1 city core. National multiple retailers,
              independent traders and food operators across the modern multi-level
              footprint generate consistent window film demand for fitting rooms,
              manifestation and solar-control. We follow St Stephen&apos;s centre
              management access and contractor protocols.
            </p>
            <p>
              <strong className="text-foreground">Princes Quay HU1</strong> —
              the distinctive glass-fronted shopping centre built on stilts over
              the marina basin, with waterfront retail and dining units and
              glazed atrium sections facing south over the marina. The marina-facing
              and south-facing glazed elevations are well suited to solar-control
              film. Princes Quay&apos;s waterfront position makes it one of the
              more architecturally distinctive retail window film environments
              in the region.
            </p>
            <p>
              <strong className="text-foreground">Whitefriargate and King Edward Street HU1</strong> —
              Hull&apos;s traditional high-street retail corridor running through the
              city centre, with a mix of national chains, independents and food
              operators on pedestrianised and semi-pedestrianised streets. Glazed
              shopfronts, internal glass partitions and fitting room windows are
              the primary window film applications in this zone.
            </p>
            <p>
              <strong className="text-foreground">Humber Retail Park HU4</strong> —
              the main out-of-town retail cluster on Anlaby Road west of the city
              centre, with large-format retailers including B&amp;Q, Argos and
              other major brands on an open site with significant south and
              west-facing glazed frontages suited to solar-control film. We follow
              individual retailer and park management contractor access requirements.
            </p>
            <p>
              <strong className="text-foreground">Newland Avenue HU5</strong> —
              Hull&apos;s primary independent retail street, popular with independent
              traders, cafes, boutiques and specialist retailers. The independent
              retail quarter on Newland Avenue generates consistent demand for
              decorative frosted film, etched-effect treatments and branded
              window graphics from Hull&apos;s community of independent business owners.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Hull and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film York</p>
              <p className="mt-1 text-xs text-muted">Retail film across York and North Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Hull</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Hull</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Hull retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Hull retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Hull retail site, unit size, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Installation
              available during or outside trading hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Hull Retail Quote →
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
