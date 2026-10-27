import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Chorley | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Chorley and the PR7 postcode area — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Market Walk Shopping Centre PR7, Chorley town-centre retail corridor and Boundary Mill Retail Park. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-chorley/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Chorley — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Chorley and the PR7 postcode area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Market Walk Shopping Centre PR7, Chorley town-centre retail corridor and Boundary Mill Retail Park PR7. Installation available during or outside trading hours. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Chorley", item: "https://www.wrpx.co.uk/window-film/retail-window-film-chorley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Chorley retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Chorley and the PR7 postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Market Walk Shopping Centre PR7 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area — staff area partitions and back-office glazing within Chorley town-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Boundary Mill Retail Park near Chorley generates frosted film demand from large-format and warehouse-style retail operators with glazed frontages.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Chorley retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Boundary Mill Retail Park and out-of-town Chorley retail units with south and west-facing glazed elevations on open-site frontages can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Chorley town-centre units on Market Street and in Market Walk Shopping Centre PR7 with glazed frontages facing the pedestrianised retail zone are also candidates for solar-control film where orientation and glazing configuration generate heat or glare issues. Chorley is approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61, and we can mobilise for planned programmes across the PR7 retail estate alongside Bolton and Wigan in a single Greater Manchester North West mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Chorley shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Chorley retail units. Retailers at Market Walk PR7, Boundary Mill Retail Park and the Chorley town-centre high street frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Chorley retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Chorley and wider Lancashire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Market Walk landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Chorley retail programmes. Chorley is approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61 — we can cover Chorley alongside Preston, Bolton and Manchester in a co-ordinated North West mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Chorley shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Chorley retail units where trading disruption is not acceptable. Market Walk Shopping Centre PR7 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Boundary Mill Retail Park and out-of-town Chorley retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Chorley and surrounding postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Chorley and surrounding PR7 postcode retail areas — PR7 (Chorley town centre and district: Market Walk Shopping Centre PR7 — Chorley&apos;s principal covered shopping destination with national multiples and independent traders; Market Street and the pedestrianised Chorley town-centre retail corridor generating consistent window film demand for fitting rooms, manifestation and solar-control; Chorley Market Hall — the covered indoor market generating independent retail glazing demand; Boundary Mill Retail Park near Chorley generating large-format retail and warehouse-style operator window film demand; Buckshaw Village PR7 — the major new residential and commercial development south of Chorley town centre with retail and service operator glazing film demand; Adlington PR7 — the south Chorley district town with a town-centre retail parade; Coppull PR7 — the north Chorley district zone with community retail provision; Eccleston PR7 — the west Chorley rural district zone). Preston PR1/PR2, Bolton BL and Wigan WN also within reach as part of the same M62/M61 corridor mobilisation. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Chorley via the M62 and M61.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmChorleyPage() {
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
            <span className="text-foreground">Chorley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Chorley &amp; Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Chorley
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Chorley and
            the PR7 postcode area. Frosted privacy film for fitting rooms and
            staff areas, solar-control film for glazed shop fronts, branded
            decorative vinyl and glass manifestation. Market Walk Shopping
            Centre PR7, Chorley town-centre retail corridor and Boundary Mill
            Retail Park. Approximately 1 hour 15 minutes from our South
            Yorkshire base via the M62 and M61.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Chorley Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Chorley retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Chorley retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Chorley is a market town in Lancashire with a retail market
              anchored by Market Walk Shopping Centre in the town centre PR7
              and further provision through Boundary Mill Retail Park on the
              edge of town. The covered town-centre mall and the out-of-town
              retail destination together generate consistent shopfitting and
              retail fit-out activity that creates ongoing subcontract window
              film demand.
            </p>
            <p>
              Market Walk PR7 — Chorley&apos;s principal covered shopping
              destination — has national multiple and independent retail tenants
              generating consistent window film demand for fitting rooms, glass
              manifestation and solar-control glazing. The town-centre high
              street corridor along Market Street and into the wider pedestrianised
              zone generates further retailer and service-business glazing film
              demand from brand refreshes and new fit-outs.
            </p>
            <p>
              Buckshaw Village PR7 — the major new residential and commercial
              development south of Chorley town centre, built on the former
              Royal Ordnance Factory site — is an expanding retail and service
              environment with growing commercial glazing demand from new units
              and developing business operators. Chorley&apos;s market town
              position in central Lancashire places it between Bolton to the
              south, Preston to the north and Manchester to the east — all
              achievable in the same M62/M61 mobilisation.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Chorley via the M62 and M61. We can mobilise to Market Walk,
              Boundary Mill Retail Park and all Chorley PR7 postcode retail
              sites, and can cover Chorley alongside Bolton, Preston and wider
              Lancashire locations in a co-ordinated North West multi-site
              programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Chorley
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Market Walk PR7 fashion retailers.
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
                mannequin displays — particularly relevant across Boundary
                Mill Retail Park&apos;s open-site large-format retail buildings.
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
                for Chorley retail units at Market Walk and across the PR7
                postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Chorley retail
                glazing — shopfront branding, reception glass and partition
                panels across Market Walk PR7 and Buckshaw Village commercial
                units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Chorley retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Chorley retail campaigns,
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
            Chorley retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Market Walk Shopping Centre PR7</strong> —
              Chorley&apos;s principal covered shopping destination in the heart
              of the town centre, with national multiples and independent traders
              across an enclosed footprint. Consistent shopfitting and window
              film demand for fitting rooms, manifestation and solar-control from
              retailers within the centre. We follow Market Walk management
              access and contractor protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Boundary Mill Retail Park</strong> —
              the out-of-town large-format retail destination near Chorley,
              featuring warehouse-style and large-format retail operators with
              open-site orientations and substantial glazed elevations. South
              and west-facing glazed frontages receive significant direct solar
              exposure — a primary driver of solar-control film demand at
              out-of-town Chorley locations.
            </p>
            <p>
              <strong className="text-foreground">Chorley town-centre high street PR7</strong> —
              Market Street and the pedestrianised retail corridor extending
              from Market Walk into the broader town-centre zone generate
              independent retailer and national high-street brand window film
              demand for frosted film, manifestation and branded vinyl.
            </p>
            <p>
              <strong className="text-foreground">Buckshaw Village PR7</strong> —
              Chorley&apos;s major new residential and commercial development on
              the former Royal Ordnance Factory site south of the town centre.
              An expanding commercial environment with growing retail and service
              operator glazing demand from new-build units and developing
              business occupiers across the Buckshaw Village commercial zone.
            </p>
            <p>
              <strong className="text-foreground">Adlington, Coppull and district centres PR7</strong> —
              Adlington town centre and the wider Chorley district-centre retail
              provision — Coppull, Eccleston, Euxton — generate smaller-scale
              but consistent retail window film demand from independent retailers,
              pharmacy chains and service businesses across the PR7 hinterland.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Chorley retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Chorley and Lancashire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-bolton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bolton</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Bolton and Greater Manchester</p>
            </Link>
            <Link href="/window-film/retail-window-film-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Wigan</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Wigan and Greater Manchester</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-chorley/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Chorley</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Chorley care homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Greater Manchester</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Chorley retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Chorley retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Chorley retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 1
              hour 15 minutes from South Yorkshire via the M62 and M61.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Chorley Retail Quote →
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
