import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Wigan | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Wigan and Greater Manchester — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. The Galleries WN1, Grand Arcade WN1, Robin Park Retail WN5 and all Wigan WN postcode retail environments. Approximately 1 hour from our South Yorkshire base via the M62.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-wigan/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Wigan — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Wigan and Greater Manchester. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. The Galleries WN1, Grand Arcade WN1, Robin Park Retail WN5 and all Wigan WN postcode retail environments. Installation available during or outside trading hours. Approximately 1 hour from our South Yorkshire base via the M62."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Wigan", item: "https://www.wrpx.co.uk/window-film/retail-window-film-wigan/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Wigan retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Wigan and the wider Greater Manchester area. Typical uses include fitting room and changing area glazing in clothing retailers at The Galleries WN1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area), staff area partitions and back-office glazing within Wigan retail units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Robin Park Retail Park WN5 — the out-of-town retail and leisure destination in west Wigan — generates consistent frosted film demand from large-format retailers with glazed frontages and fitting room requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Wigan retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Robin Park Retail Park WN5 — the primary out-of-town retail destination in Wigan — has large-format retail and leisure units with significant south and west-facing glazed elevations on open-site frontages that receive substantial direct solar exposure. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays. The Galleries WN1 — the covered town-centre shopping destination — has individual unit frontages and glazed mall sections where solar-control film is applicable to reduce heat gain in south-facing units. Wigan is approximately 1 hour from our South Yorkshire base via the M62 — we can mobilise rapidly for urgent or planned installation programmes.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Wigan shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Wigan retail units. Retailers at The Galleries WN1, Robin Park WN5 and the Wigan town-centre high-street corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Wigan retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Wigan and Greater Manchester retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Galleries WN1 landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Wigan retail programmes. Wigan is approximately 1 hour from our South Yorkshire base via the M62 — we can respond rapidly to short-notice Wigan retail assignments and cover Wigan alongside Manchester, Bolton and St Helens in a single North West mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Wigan shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Wigan retail units where trading disruption is not acceptable. The Galleries WN1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Robin Park and out-of-town Wigan retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance. Our South Yorkshire base and direct M62 access means Wigan is a straightforward mobilisation with no overnight stays required.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wigan and Greater Manchester postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wigan and surrounding WN postcode retail areas — WN1 (Wigan town centre: The Galleries shopping centre — the primary covered retail destination in Wigan town centre with a mix of national multiples and independent retailers; the Grand Arcade — Wigan&apos;s open-air retail extension adjacent to The Galleries, with further national chain and dining operators; Standishgate and the pedestrianised town-centre retail corridor with consistent high-street shopfitting and window film demand), WN2 (Hindley, Abram — east Wigan retail zone with district centre retail provision on Hindley town square), WN3 (Pemberton, Goose Green — west Wigan residential retail zone), WN4 (Ashton-in-Makerfield — south Wigan district town with established town-centre retail provision on Bryn Street and Market Place), WN5 (Billinge, Orrell — west Wigan zone; Robin Park Retail Park WN5 is the primary out-of-town retail and leisure destination for Wigan, with large-format retail buildings, DW Stadium leisure, David Lloyd Wigan and open-site retail units generating consistent solar-control and fit-out window film demand), WN6 (Standish — north Wigan suburban retail zone with district centre provision), WN7 (Leigh — the major town in the east Wigan zone; Leigh Market and the town-centre retail corridor generate consistent shopfitting and window film demand from independent and national retailers), WN8 (Skelmersdale — west Wigan new town retail zone with The Concourse shopping centre — a town-centre covered retail destination in Skelmersdale town centre). Bolton BL1-BL9, St Helens WA9-WA11, Warrington WA4-WA5 and wider Greater Manchester also within reach. WRPX is based in South Yorkshire, approximately 1 hour from Wigan via the M62.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmWiganPage() {
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
            <span className="text-foreground">Wigan</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Wigan &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Wigan
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Wigan and
            Greater Manchester. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. The Galleries WN1, Grand Arcade WN1,
            Robin Park Retail Park WN5 and all Wigan WN postcode retail
            environments. Approximately 1 hour from our South Yorkshire base
            via the M62.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Wigan Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Wigan retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wigan retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wigan is a substantial North West town with a catchment area
              extending across the Wigan borough, south Lancashire and the
              western edge of Greater Manchester. The Galleries shopping centre
              in Wigan town centre WN1 is the primary covered retail destination,
              with a mix of national multiples and independent retailers across
              a footprint that connects to the Grand Arcade and the town-centre
              pedestrianised retail corridor.
            </p>
            <p>
              Robin Park Retail Park WN5 — the out-of-town retail and leisure
              park west of the town centre — provides a large-format retail
              environment with substantial glazed elevations on open-site
              frontages, generating significant solar-control film demand from
              retailers managing heat and glare on south and west-facing units.
              The David Lloyd Wigan leisure facility within Robin Park adds a
              leisure and gym window film dimension to the same out-of-town zone.
            </p>
            <p>
              Retail fit-out contractors and shopfitters working on Wigan retail
              projects — new unit builds, refurbishments, brand refreshes —
              regularly need subcontract window film installation for
              manifestation, frosted film and solar-control on tight programme
              timelines. Print companies and sign businesses supplying North West
              retail clients need reliable installation partners with clear
              understanding of centre management requirements.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Wigan
              via the M62 — a direct motorway route. We can mobilise rapidly
              to The Galleries, Robin Park and all Wigan WN postcode retail
              sites, and can cover Wigan alongside Manchester, Bolton and
              Liverpool in a co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Wigan
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Galleries WN1 fashion retailers. Complete
                privacy maintained while retaining natural light in the fitting
                area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — particularly relevant across Robin Park
                WN5&apos;s open-site large-format retail buildings.
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
                Wigan retail units at The Galleries and Robin Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Wigan retail
                glazing — shopfront branding, reception glass and partition
                panels across The Galleries WN1, Grand Arcade and Robin Park
                retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Wigan retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Wigan retail campaigns,
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
            Wigan retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">The Galleries WN1</strong> —
              Wigan&apos;s principal covered shopping destination in the heart of the
              town centre, with national multiples and independent traders across
              an enclosed footprint connecting to the Standishgate pedestrianised
              corridor. National multiple retailers and independent traders
              generating consistent window film demand for fitting rooms,
              manifestation and solar-control. We follow Galleries management
              access and contractor protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Grand Arcade WN1</strong> —
              the open-air retail extension connecting The Galleries to Wigan bus
              station, with further national chain retailers and dining operators
              generating shopfitting and window film demand. Consistent fit-out
              activity from brands refreshing or entering the Wigan town-centre
              market.
            </p>
            <p>
              <strong className="text-foreground">Robin Park Retail Park WN5</strong> —
              the out-of-town retail and leisure destination west of Wigan town
              centre, featuring large-format retail buildings from B&amp;Q,
              Currys and other national multiples alongside the David Lloyd
              leisure facility and DW Stadium. Open-site orientation and large
              glazed elevations mean south and west-facing units receive
              significant direct solar exposure — the primary driver of
              solar-control film demand at Robin Park.
            </p>
            <p>
              <strong className="text-foreground">Leigh Market and town centre WN7</strong> —
              Leigh is the largest town in the east Wigan zone, with a
              town-centre retail market generating consistent shopfitting and
              window film demand from independent and national retailers along
              Leigh&apos;s pedestrianised centre and covered market.
            </p>
            <p>
              <strong className="text-foreground">The Concourse, Skelmersdale WN8</strong> —
              the covered shopping centre in Skelmersdale town centre, the
              primary retail destination for the west Wigan new town zone.
              Consistent shopfitting and window film demand from the
              centre&apos;s retail and service occupiers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wigan retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Wigan and North West services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Manchester and Greater Manchester</p>
            </Link>
            <Link href="/window-film/retail-window-film-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Liverpool and Merseyside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Wigan</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wigan care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Wigan</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Wigan</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Wigan retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wigan retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Wigan retail site, the glazing areas and what you need
              the film to do — privacy, solar control, manifestation or branding.
              We work white-label for shopfitters and print companies, and direct
              for retailers and facilities managers. Approximately 1 hour from
              South Yorkshire via the M62.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Wigan Retail Quote →
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
