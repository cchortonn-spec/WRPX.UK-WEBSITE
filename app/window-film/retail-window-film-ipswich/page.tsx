import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Ipswich | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Ipswich and Suffolk — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Building Regulations-compliant glass manifestation. Sailmakers Shopping Centre IP1, Buttermarket IP1, Priory Walk IP1, Whitehouse Retail Park IP1, Copdock Retail Park IP8 and all Ipswich IP postcode retail sites. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-ipswich/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Ipswich — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Ipswich and Suffolk. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Building Regulations-compliant glass manifestation. Sailmakers Shopping Centre IP1, Buttermarket Shopping Centre IP1, Priory Walk IP1, Whitehouse Retail Park IP1, Copdock Retail Park IP8 and all Ipswich IP postcode retail sites. Installation available during or outside trading hours. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Ipswich", item: "https://www.wrpx.co.uk/window-film/retail-window-film-ipswich/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Ipswich retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Ipswich and the broader IP postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at the Sailmakers Shopping Centre IP1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light. Staff area partitions and back-office glazing within Ipswich town-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy without structural alteration. The Sailmakers Shopping Centre is Ipswich&apos;s principal covered retail destination, generating consistent shopfitting and window film demand from national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Ipswich retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ipswich retail units with south and east-facing glazed elevations — particularly the large-format nationally tenanted units at Copdock Retail Park IP8 south of the town — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) south and A14 east — a direct route into Suffolk. We can mobilise to the Sailmakers Shopping Centre IP1, Buttermarket IP1, Copdock Retail Park IP8 and all Ipswich IP postcode retail sites, and can cover Ipswich alongside Norwich and other East Anglian sites in a co-ordinated regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Ipswich shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Building Regulations (Part K in England) for new and substantially refurbished commercial glazed installations across Ipswich retail units. Retailers at the Sailmakers Shopping Centre IP1, Buttermarket Shopping Centre IP1 and the broader Ipswich town-centre commercial zone regularly need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed surfaces. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Ipswich retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Ipswich and Suffolk retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Sailmakers Shopping Centre or Buttermarket management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Ipswich retail programmes. WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14 — for planned Ipswich retail fit-out schedules we incorporate travel into scheduling and can combine Ipswich with Norwich and other East Anglian sites in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Ipswich shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Ipswich retail units where trading disruption is not acceptable. The Sailmakers Shopping Centre IP1 and Buttermarket Shopping Centre IP1 operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Copdock Retail Park IP8, Priory Walk IP1 and other Ipswich retail locations outside the managed shopping centres, out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich and Suffolk postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Ipswich and surrounding IP postcode retail areas — IP1 (Ipswich town centre: Sailmakers Shopping Centre IP1 — Ipswich&apos;s principal covered retail destination with national multiple tenants generating fitting room frosted film, glass manifestation and solar-control demand; Buttermarket Shopping Centre IP1 — adjacent town-centre retail and leisure glazing provision; Priory Walk IP1 — further town-centre retail commercial provision; Whitehouse Retail Park IP1 — out-of-town retail and commercial provision on the western corridor), IP2 (Ipswich south-west: outer south-west Ipswich retail and commercial provision), IP3 (Ipswich east and Whitton: Ipswich Waterfront IP3 mixed-use and leisure zone; outer east Ipswich retail provision), IP4 (Ipswich north-east including Rushmere: residential and local retail zone), IP5 (Martlesham: Martlesham Heath Business Park IP5 commercial zone; outer east retail provision), IP8 (Copdock: Copdock Retail Park IP8 — a large-format out-of-town retail and commercial park south of Ipswich generating solar-control, branded film and Building Regulations manifestation demand from nationally tenanted units). WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmIpswichPage() {
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
            <span className="text-foreground">Ipswich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Ipswich &amp; Suffolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Ipswich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Ipswich and
            Suffolk. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and Building Regulations-compliant glass manifestation. Sailmakers
            Shopping Centre IP1, Buttermarket IP1, Copdock Retail Park IP8 and
            all Ipswich IP postcode retail sites covered. Approximately 2 hours
            15 minutes from our South Yorkshire base via the A1(M) and A14.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Ipswich Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Ipswich retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ipswich is the county town and commercial centre of Suffolk —
              a substantial East Anglian city with a population of approximately
              180,000 and a retail market that spans a covered town-centre
              shopping destination at the Sailmakers Shopping Centre IP1, a
              second major town-centre retail cluster at the Buttermarket
              Shopping Centre IP1, an out-of-town large-format park at Copdock
              Retail Park IP8 and further retail provision at Priory Walk IP1
              and Whitehouse Retail Park IP1.
            </p>
            <p>
              The Sailmakers Shopping Centre is Ipswich&apos;s principal covered
              shopping destination, housing national multiple retailers and
              generating consistent shopfitting and window film demand for
              fitting rooms, glass manifestation on internal doors and
              partitions, and solar-control treatments for glazed frontages.
              Copdock Retail Park IP8 provides large-format out-of-town retail
              in an open-site layout with glazed elevations — a consistent
              source of solar-control and manifestation demand from nationally
              tenanted units facing direct sun.
            </p>
            <p>
              In England, glass manifestation on full-height glazed panels and
              glass doors in commercial premises is governed by Building
              Regulations Part K. We install Building Regulations-compliant
              manifestation at the correct 850mm and 1500mm height zones on all
              Ipswich retail fit-out and refurbishment projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 15
              minutes from Ipswich via the A1(M) south and A14 east — a direct
              route from Sheffield into Suffolk. We can mobilise quickly to the
              Sailmakers, Buttermarket, Copdock Retail Park and all IP postcode
              retail sites, and can cover Ipswich alongside Norwich and other
              East Anglian sites in a co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Ipswich
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Sailmakers IP1 fashion retailers.
                Complete privacy maintained while retaining natural light
                in the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and east-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — particularly relevant across Copdock
                Retail Park IP8 large-format units facing direct sun.
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
                branded options for all Ipswich IP postcode retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Ipswich retail
                glazing — shopfront branding, reception glass and partition
                panels across the Sailmakers IP1, Buttermarket IP1, Copdock
                Retail Park IP8 and the wider Suffolk IP postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Ipswich retail units — providing
                staff privacy without structural alterations across all IP
                postcode retail environments from town centre to out-of-town
                retail parks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Ipswich retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company across all Ipswich IP postcode retail
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
            Ipswich retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sailmakers Shopping Centre IP1</strong> —
              Ipswich&apos;s principal covered shopping destination on the
              Tavern Street corridor, housing national multiple retailers across
              its retail floors. Consistent shopfitting and window film demand
              for fitting room frosted film, glass manifestation and glazed
              shopfront treatments. Centre management access and contractor
              protocols are followed for all Sailmakers installations.
            </p>
            <p>
              <strong className="text-foreground">Buttermarket Shopping Centre IP1</strong> —
              The adjacent town-centre retail cluster linking the Sailmakers
              zone with the broader IP1 high-street retail environment.
              National and independent retail tenants generating fitting room,
              glazed partition and shopfront window film demand from shopfitters
              and facilities managers in the wider IP1 commercial zone.
            </p>
            <p>
              <strong className="text-foreground">Priory Walk IP1</strong> —
              Further town-centre retail and leisure provision close to Ipswich
              station — national multiple operators, food service and commercial
              units generating window film and manifestation demand from
              shopfitters and facilities managers in the IP1 corridor.
            </p>
            <p>
              <strong className="text-foreground">Copdock Retail Park IP8</strong> —
              A large-format out-of-town retail and commercial park south of
              Ipswich at junction 55 of the A14. Nationally tenanted units
              with glazed frontages facing direct sun generating solar-control,
              branded film and Building Regulations manifestation demand. The
              park&apos;s open-site layout means south and east elevations
              receive consistent direct solar exposure across the retail day.
            </p>
            <p>
              <strong className="text-foreground">Whitehouse Retail Park IP1</strong> —
              Out-of-town retail provision on the western Ipswich corridor —
              nationally tenanted units and commercial operators generating
              solar-control and window film demand from facilities contractors
              and national retailer shopfitting programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Ipswich and regional services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Norwich and Norfolk</p>
            </Link>
            <Link href="/subcontract-window-film-installation-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Ipswich</p>
            </Link>
            <Link href="/window-film/gym-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Window film for Ipswich gyms and leisure facilities</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Ipswich</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Ipswich care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Ipswich retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ipswich retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Ipswich retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              2 hours 15 minutes from South Yorkshire via the A1(M) and A14.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Ipswich Retail Quote →
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
