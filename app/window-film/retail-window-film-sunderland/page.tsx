import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Sunderland | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Sunderland and Wearside — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. The Bridges SR1, Hylton Retail Park SR5, The Galleries Washington SR3 and all Sunderland SR postcode retail environments. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M).",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-sunderland/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Sunderland — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Sunderland and Wearside. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. The Bridges SR1, Hylton Retail Park SR5, The Galleries Washington SR3 and all Sunderland SR postcode retail environments. Installation available during or outside trading hours. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M)."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sunderland", item: "https://www.wrpx.co.uk/window-film/retail-window-film-sunderland/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Sunderland retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Sunderland and Wearside. Typical uses include fitting room and changing area glazing in clothing retailers at The Bridges SR1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area), staff area partitions and back-office glazing within Sunderland retail units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Hylton Retail Park SR5 — the out-of-town retail and leisure destination in west Sunderland — generates consistent frosted film demand from large-format retailers with glazed frontages and fitting room requirements. The Galleries Washington SR3 adds further retail film demand for the wider Wearside catchment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Sunderland retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hylton Retail Park SR5 — the primary out-of-town retail destination in west Sunderland — has large-format retail units with south and west-facing glazed elevations on open-site frontages that can receive substantial direct solar exposure. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays. The Bridges SR1 — Sunderland&apos;s covered town-centre shopping destination — has individual unit frontages and glazed mall sections where solar-control film is applicable to reduce heat gain in south-facing units. Sunderland is approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M), and we can mobilise for planned programmes across Wearside retail sites.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Sunderland shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Sunderland retail units. Retailers at The Bridges SR1, Hylton Retail Park SR5 and the Sunderland town-centre high-street corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Sunderland retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Sunderland and Wearside retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Bridges SR1 landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Sunderland retail programmes. Sunderland is approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M) — we can cover Sunderland alongside Newcastle and Middlesbrough in a single North East mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Sunderland shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Sunderland retail units where trading disruption is not acceptable. The Bridges SR1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Hylton Retail Park and out-of-town Sunderland retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunderland and Wearside postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Sunderland and surrounding SR postcode retail areas — SR1 (Sunderland city centre: The Bridges shopping centre — Sunderland&apos;s primary covered retail destination with national multiples across a two-level enclosed footprint; Fawcett Street and the pedestrianised town-centre retail corridor; The Point Sunderland — the city-centre leisure and retail development adjacent to the Bridges; consistent shopfitting and window film demand from the centre&apos;s retailers and from the broader town-centre high street), SR2 (Hendon, Ashbrooke — inner south Sunderland residential and commercial zone; SR2 retail provision includes local shopping parades and small commercial units), SR3 (Silksworth, Pallion, Thorney Close — south-west Sunderland zone; The Galleries Washington — a major covered regional shopping centre in Washington SR3 sits within the wider SR postcode catchment and generates consistent retail window film demand for its national multiple and independent retail occupiers), SR4 (Southwick, Pennywell, Millfield — west Sunderland residential zone with district centre retail provision; Sunderland Royal Hospital SR4 is the primary acute NHS facility and anchors care home cluster activity in the surrounding area), SR5 (Hylton, Carley Hill — west Sunderland zone; Hylton Retail Park SR5 is the primary out-of-town retail park in Sunderland, featuring large-format retail units with open-site orientations and glazed frontages generating solar-control and manifestation film demand; Stadium of Light adjacent area adds leisure and hospitality glazing), SR6 (Roker, Seaburn — the north-east Sunderland coastal zone; Seaburn Centre retail provision and the coastal leisure corridor generate independent and hospitality glazing film demand). Gateshead NE8-NE11, Durham DH1, South Shields NE33 and wider Wearside also within reach. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes from Sunderland via the A1(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmSunderlandPage() {
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
            <span className="text-foreground">Sunderland</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Sunderland &amp; Wearside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Sunderland
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Sunderland and
            Wearside. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and glass manifestation. The Bridges SR1, Hylton Retail Park SR5,
            The Galleries Washington SR3 and all Sunderland SR postcode retail
            environments. Approximately 1 hour 45 minutes from our South
            Yorkshire base via the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sunderland Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sunderland retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sunderland is one of the North East&apos;s major retail cities — a
              catchment area extending across Wearside and into County Durham,
              with The Bridges shopping centre in Sunderland city centre SR1
              as the primary covered retail destination. The Bridges&apos; national
              multiple and independent retail tenant mix generates consistent
              shopfitting and window film demand across a two-level enclosed
              footprint.
            </p>
            <p>
              Hylton Retail Park SR5 — the out-of-town retail and leisure park
              in west Sunderland — provides a large-format retail environment
              with substantial glazed elevations on open-site frontages,
              generating significant solar-control film demand from retailers
              managing heat and glare on south and west-facing units. The
              Galleries Washington SR3 adds a further major covered shopping
              centre to the Wearside retail catchment, creating regional retail
              rollout opportunities across the Sunderland and Washington zone.
            </p>
            <p>
              Retail fit-out contractors and shopfitters working on Sunderland
              retail projects — new unit builds, refurbishments, brand refreshes
              — regularly need subcontract window film installation for
              manifestation, frosted film and solar-control on tight programme
              timelines. Print companies and sign businesses supplying North
              East retail clients need reliable installation partners who
              understand centre management requirements and can mobilise within
              the A1(M) corridor.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 45 minutes
              from Sunderland via the A1(M). We can mobilise to The Bridges,
              Hylton Retail Park and all Sunderland SR postcode retail sites,
              and can cover Sunderland alongside Newcastle and Middlesbrough in
              a co-ordinated North East multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Sunderland
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Bridges SR1 fashion retailers. Complete
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
                mannequin displays — particularly relevant across Hylton Retail
                Park SR5&apos;s open-site large-format retail buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and
                1400mm on internal glass doors and full-height glazed panels.
                Frosted bands, etched-effect, dot pattern or branded options
                for Sunderland retail units at The Bridges and Hylton Retail
                Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Sunderland
                retail glazing — shopfront branding, reception glass and
                partition panels across The Bridges SR1 and Hylton Retail
                Park SR5.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Sunderland retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Sunderland retail
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
            Sunderland retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">The Bridges SR1</strong> —
              Sunderland&apos;s principal covered shopping destination in the
              heart of the city centre, with national multiples and independent
              traders across an enclosed two-level footprint. Consistent
              shopfitting and window film demand for fitting rooms, manifestation
              and solar-control from retailers within the centre. We follow
              Bridges management access and contractor protocols for all centre
              installations.
            </p>
            <p>
              <strong className="text-foreground">Hylton Retail Park SR5</strong> —
              the out-of-town retail park in west Sunderland, featuring
              large-format retail units with open-site orientations and
              substantial glazed elevations. South and west-facing glazed
              frontages receive significant direct solar exposure — the primary
              driver of solar-control film demand at Hylton. Consistent
              fit-out activity from retailers and leisure operators in the park.
            </p>
            <p>
              <strong className="text-foreground">The Galleries Washington SR3</strong> —
              the major covered shopping centre in Washington town centre,
              serving the Wearside new-town catchment. National multiple and
              independent retailer fit-out activity at The Galleries generates
              consistent manifestation, frosted film and branded film demand
              from the centre&apos;s ongoing unit refresh programme.
            </p>
            <p>
              <strong className="text-foreground">Sunderland city-centre high street SR1</strong> —
              Fawcett Street and the pedestrianised retail corridor extending
              from The Bridges into the broader city-centre zone generate
              independent retailer and national high-street brand window film
              demand for frosted film, manifestation and branded vinyl.
            </p>
            <p>
              <strong className="text-foreground">Seaburn retail and leisure SR6</strong> —
              the north-east Sunderland coastal zone with Seaburn Centre retail
              provision and the coastal leisure and hospitality corridor
              generating independent retail and hospitality glazing film demand.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Sunderland and North East services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/window-film/retail-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-sunderland/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Sunderland</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Sunderland care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Sunderland</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Sunderland</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Sunderland retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sunderland retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Sunderland retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 1
              hour 45 minutes from South Yorkshire via the A1(M).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Sunderland Retail Quote →
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
