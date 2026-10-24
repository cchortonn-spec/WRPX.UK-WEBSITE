import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Bolton | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Bolton and Greater Manchester — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Crompton Place BL1, Middlebrook Retail Park BL6 and all Bolton BL postcode retail environments. Approximately 1 hour from our South Yorkshire base via the M62 and M61.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-bolton/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Bolton — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Bolton and Greater Manchester. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Crompton Place BL1, Middlebrook Retail Park BL6 and all Bolton BL postcode retail environments. Installation available during or outside trading hours. Approximately 1 hour from our South Yorkshire base via the M62 and M61."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Bolton", item: "https://www.wrpx.co.uk/window-film/retail-window-film-bolton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Bolton retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Bolton and the wider BL postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Crompton Place BL1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area — staff area partitions and back-office glazing within Bolton retail units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Middlebrook Retail Park BL6, near Horwich, generates frosted film demand from large-format retailers with glazed frontages and fitting room requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Bolton retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Middlebrook Retail Park BL6 — the primary out-of-town retail and leisure destination in the Bolton area, near Horwich — has large-format retail units with south and west-facing glazed elevations on open-site frontages that can receive substantial direct solar exposure. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays. Crompton Place BL1 — Bolton&apos;s covered town-centre shopping mall — has individual unit frontages and glazed mall sections where solar-control film is applicable to reduce heat gain in exposed units. Bolton is approximately 1 hour from our South Yorkshire base via the M62 and M61, and we can mobilise for planned programmes across Bolton and the BL postcode retail estate.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Bolton shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Bolton retail units. Retailers at Crompton Place BL1, Middlebrook Retail Park BL6 and the Bolton town-centre high-street corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Bolton retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Bolton and Greater Manchester retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Crompton Place BL1 landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Bolton retail programmes. Bolton is approximately 1 hour from our South Yorkshire base via the M62 and M61 — we can cover Bolton alongside Wigan, Manchester and wider Greater Manchester locations in a single North West mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Bolton shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Bolton retail units where trading disruption is not acceptable. Crompton Place BL1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Middlebrook Retail Park BL6 and out-of-town Bolton retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bolton and Greater Manchester postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bolton and surrounding BL postcode retail areas — BL1 (Bolton town centre: Crompton Place — Bolton&apos;s primary covered shopping mall with national multiples across an enclosed footprint and consistent shopfitting and window film demand; Newport Street and the pedestrianised town-centre retail corridor with national high-street brands and independent traders; Bolton Market Hall — the covered indoor market generating independent retail glazing demand), BL2 (Breightmet, Tonge Fold — north-east Bolton residential and district retail zone), BL3 (Great Lever, Farnworth — south Bolton zone with district-centre retail provision; Farnworth generates its own retail and commercial glazing demand from the town-centre shopping parade), BL4 (Walkden, Kearsley — south-east Bolton zone; Walkden has significant retail provision through Ellesmere Shopping Centre on Ellesmere Road generating consistent window film demand), BL5 (Westhoughton — south Bolton district town with a town-centre retail parade), BL6 (Horwich, Lostock — west Bolton zone; Middlebrook Retail Park BL6 near Horwich is the primary out-of-town retail and leisure destination in the Bolton area, with a substantial number of large-format retail units, restaurants and leisure operators generating solar-control, manifestation and frosted film demand from ongoing fit-out activity), BL7 (Edgworth, Bromley Cross — north Bolton residential zone), BL8 (Bury, Ramsbottom — east Bolton/Bury zone with Bury Millgate Shopping Centre generating retail window film demand for its national multiple and independent occupiers), BL9 (Bury town centre — the primary covered shopping destination in Bury with consistent shopfitting and window film demand; the Bury Market zone adds further retail glazing demand). Wigan WN, Manchester M and wider Greater Manchester also covered. WRPX is based in South Yorkshire, approximately 1 hour from Bolton via the M62 and M61.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmBoltonPage() {
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
            <span className="text-foreground">Bolton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Bolton &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Bolton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Bolton and
            Greater Manchester. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. Crompton Place BL1, Middlebrook
            Retail Park BL6 and all Bolton BL postcode retail environments.
            Approximately 1 hour from our South Yorkshire base via the M62
            and M61.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bolton Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bolton retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bolton retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bolton is one of Greater Manchester&apos;s major town economies —
              a metropolitan borough with a retail market anchored by Crompton
              Place in the town centre BL1 and Middlebrook Retail Park BL6
              near Horwich. The covered town-centre mall and the out-of-town
              retail park together generate consistent shopfitting and retail
              fit-out activity that creates ongoing subcontract window film
              demand.
            </p>
            <p>
              Crompton Place BL1 — Bolton&apos;s primary covered shopping
              destination — has national multiple and independent retail tenants
              generating consistent window film demand for fitting rooms, glass
              manifestation and solar-control. Middlebrook Retail Park BL6 is
              one of the North West&apos;s significant out-of-town retail and
              leisure parks, with large-format retail units on open-site
              frontages generating substantial solar-control film demand from
              south and west-facing glazed elevations.
            </p>
            <p>
              Retail fit-out contractors and shopfitters working on Bolton
              retail projects — new unit builds, refurbishments, brand refreshes
              — regularly need subcontract window film installation for
              manifestation, frosted film and solar-control on tight programme
              timelines. Print companies and sign businesses supplying Greater
              Manchester retail clients need reliable installation partners who
              understand centre management requirements and can mobilise within
              the M62 and M61 corridor.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Bolton
              via the M62 and M61. We can mobilise to Crompton Place, Middlebrook
              Retail Park and all Bolton BL postcode retail sites, and can cover
              Bolton alongside Wigan and Manchester in a co-ordinated Greater
              Manchester multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Bolton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Crompton Place BL1 fashion retailers.
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
                mannequin displays — particularly relevant across Middlebrook
                Retail Park BL6&apos;s open-site large-format retail buildings.
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
                for Bolton retail units at Crompton Place and Middlebrook
                Retail Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Bolton retail
                glazing — shopfront branding, reception glass and partition
                panels across Crompton Place BL1 and Middlebrook BL6.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Bolton retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Bolton retail campaigns,
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
            Bolton retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Crompton Place BL1</strong> —
              Bolton&apos;s principal covered shopping destination in the heart
              of the town centre, with national multiples and independent traders
              across an enclosed footprint. Consistent shopfitting and window
              film demand for fitting rooms, manifestation and solar-control from
              retailers within the centre. We follow Crompton Place management
              access and contractor protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Middlebrook Retail Park BL6</strong> —
              the out-of-town retail and leisure park near Horwich, featuring
              large-format retail units with open-site orientations and
              substantial glazed elevations. South and west-facing glazed
              frontages receive significant direct solar exposure — the primary
              driver of solar-control film demand at Middlebrook. Consistent
              fit-out activity from retailers, restaurants and leisure operators
              in the park.
            </p>
            <p>
              <strong className="text-foreground">Bolton town-centre high street BL1</strong> —
              Newport Street and the pedestrianised retail corridor extending
              from Crompton Place into the broader town-centre zone generate
              independent retailer and national high-street brand window film
              demand for frosted film, manifestation and branded vinyl.
            </p>
            <p>
              <strong className="text-foreground">Farnworth BL3 and district centres</strong> —
              Farnworth town centre and the wider Bolton district-centre retail
              provision — Westhoughton BL5, Walkden BL4 — generate smaller-scale
              but consistent retail window film demand from independent retailers,
              pharmacy chains and service businesses.
            </p>
            <p>
              <strong className="text-foreground">Bury BL8–BL9</strong> —
              Bury Millgate Shopping Centre and Bury Market are primary retail
              destinations generating window film demand that sits within the
              same BL postcode mobilisation as Bolton town centre.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bolton retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Bolton and Greater Manchester services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Wigan</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Wigan and Greater Manchester</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Manchester city centre</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-bolton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Bolton</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Bolton care homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Greater Manchester</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Bolton retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bolton retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Bolton retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 1
              hour from South Yorkshire via the M62 and M61.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bolton Retail Quote →
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
