import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Aberdeen | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Aberdeen and the AB postcode area — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Union Square AB11, Bon Accord Centre AB25, Union Street AB10, Marischal Square AB10 and all Aberdeen AB postcode retail sites. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-aberdeen/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Aberdeen — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Aberdeen and the AB postcode area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Union Square AB11, Bon Accord Centre AB25 on George Street, the Union Street AB10 retail and commercial corridor, Marischal Square AB10 and all Aberdeen AB postcode retail sites. Installation available during or outside trading hours. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Aberdeen", item: "https://www.wrpx.co.uk/window-film/retail-window-film-aberdeen/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Aberdeen retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Aberdeen and the AB postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Union Square AB11 and Bon Accord Centre AB25 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area — staff area partitions and back-office glazing within Aberdeen city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Union Street AB10 generates frosted film demand from the long run of retail, hospitality and service operators across Aberdeen&apos;s principal commercial artery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Aberdeen retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Aberdeen retail units with south and east-facing glazed elevations on open-site frontages can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Marischal Square AB10 and the city-centre office and retail district with south-facing glazing are candidates for solar-control film where orientation and glazing configuration generate heat or glare issues. Aberdeen is approximately 4 hours from our South Yorkshire base via the A1(M) north and the A90 into Aberdeen — a fully motorway and dual-carriageway route — and we can mobilise for planned programmes across the AB postcode retail estate alongside Edinburgh in a single extended Scottish mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Aberdeen shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Scottish Technical Handbooks standards for new and substantially refurbished commercial glazed installations across Aberdeen retail units. Retailers at Union Square AB11, Bon Accord Centre AB25 and across the Union Street AB10 retail corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. In Scotland, manifestation height bands under the Scottish Technical Handbooks run 850–1000mm and 1400–1600mm above floor level. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Scottish Technical Handbooks requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Aberdeen retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Aberdeen and wider North East Scotland retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Union Square or Bon Accord Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Aberdeen retail programmes. Aberdeen is approximately 4 hours from our South Yorkshire base via the A1(M) and A90 — for planned Aberdeen retail fit-out schedules we incorporate travel into scheduling with multi-day programmes where project volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Aberdeen shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Aberdeen retail units where trading disruption is not acceptable. Union Square AB11 and Bon Accord Centre AB25 operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Aberdeen retail parks — Kingsgate and the wider AB postcode retail estate — we agree logistics with unit and park management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Aberdeen and surrounding AB postcode retail areas — AB10 (Aberdeen city centre: Union Street — Aberdeen&apos;s principal commercial artery running the length of the city centre with retail, office, hospitality and service operators generating consistent frosted film, solar-control and manifestation demand; Marischal Square AB10 — the Aberdeen City Council civic campus and mixed-use commercial development with glazed retail and office frontages), AB11 (Torry, Ferryhill: Union Square AB11 — Aberdeen&apos;s primary retail and leisure mall adjacent to Aberdeen railway station, anchored by national multiples and a cinema complex, generating consistent shopfitting and window film demand from retail fit-out programmes; the Aberdeen harbour and waterfront commercial zone with hospitality and retail glazing film demand), AB25 (Woodside, Kittybrewster: Bon Accord Centre AB25 — Aberdeen&apos;s established covered shopping mall on George Street generating national retailer shopfitting, frosted film and manifestation demand; Kittybrewster retail park AB25 generating out-of-town retailer glazing film demand), AB15 (Rubislaw, Queen&apos;s Cross: the west Aberdeen professional quarter with retail and service operator glazing film demand along the Albyn Place and Queens Road AB15 corridor), AB24 (Seaton, Old Aberdeen, King&apos;s Links: the Beach Boulevard AB24 leisure and retail corridor; University of Aberdeen AB24 campus commercial provision). Elgin IV30, Inverness IV1 and wider North East Scotland also within operational reach. WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmAberdeenPage() {
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
            <span className="text-foreground">Aberdeen</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Aberdeen &amp; North East Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Aberdeen
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Aberdeen and the
            AB postcode area. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. Union Square AB11, Bon Accord Centre
            AB25, Union Street AB10 and all Aberdeen AB postcode retail sites.
            Approximately 4 hours from our South Yorkshire base via the
            A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Aberdeen Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Aberdeen retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Aberdeen is Scotland&apos;s third city and a significant commercial
              economy shaped by energy, financial services and a well-established
              retail market. The retail core is anchored by two principal
              shopping destinations — Union Square AB11, adjacent to Aberdeen
              railway station, and Bon Accord Centre AB25 on George Street — with
              extensive independent and national retail provision along Union
              Street AB10, Aberdeen&apos;s primary commercial artery running the
              length of the city centre.
            </p>
            <p>
              Union Square AB11 is Aberdeen&apos;s primary retail and leisure
              mall — national multiples, a cinema complex and a hotel in a modern
              enclosed footprint adjacent to the station. Consistent shopfitting
              and window film installation demand from the national retailer
              tenant mix for fitting rooms, glass manifestation, solar-control
              glazing and branded decorative vinyl. Centre management contractor
              protocols apply.
            </p>
            <p>
              Bon Accord Centre AB25 on George Street is Aberdeen&apos;s established
              covered shopping mall — a long-standing enclosed retail destination
              with national and independent tenants generating ongoing fit-out and
              window film demand from its enclosed mall footprint. Bon Accord
              centre management access requirements are addressed as standard on
              all centre installations.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 4 hours from
              Aberdeen via the A1(M) north through Newcastle and Edinburgh,
              then the A90 into Aberdeen — a fully motorway and dual-carriageway
              route. We can mobilise to Union Square, Bon Accord Centre, Union
              Street and all Aberdeen AB postcode retail sites, and can cover
              Aberdeen alongside Edinburgh in a co-ordinated Scottish multi-site
              programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Aberdeen
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Union Square AB11 and Bon Accord Centre AB25
                fashion retailers. Complete privacy maintained while retaining
                natural light in the fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and east-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — relevant across Aberdeen city-centre and
                out-of-town retail units with significant glazed elevations
                facing direct sun.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation at the
                correct heights on internal glass doors and full-height glazed
                panels. Frosted bands, etched-effect, dot pattern or branded
                options for Aberdeen retail units at Union Square, Bon Accord
                Centre and across the AB postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Aberdeen retail
                glazing — shopfront branding, reception glass and partition
                panels across Union Square AB11, Bon Accord Centre AB25 and
                the Union Street AB10 commercial corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Aberdeen retail units — providing
                staff privacy without structural alterations across all AB
                postcode retail environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Aberdeen retail campaigns,
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
            Aberdeen retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Union Square AB11</strong> —
              Aberdeen&apos;s primary retail and leisure destination, adjacent to
              Aberdeen railway station, anchored by national multiples and a
              cinema complex. Consistent shopfitting and window film demand
              for fitting rooms, manifestation and solar-control from the national
              retailer tenant mix. We follow Union Square centre management access
              and contractor protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Bon Accord Centre AB25</strong> —
              Aberdeen&apos;s established covered shopping mall on George Street,
              with national and independent retail tenants across an enclosed
              footprint. Ongoing shopfitting and window film demand for fitting
              rooms, glass manifestation and solar-control glazing from retailers
              within the mall. Bon Accord centre management access requirements
              are handled as standard.
            </p>
            <p>
              <strong className="text-foreground">Union Street AB10</strong> —
              Aberdeen&apos;s principal commercial artery running the length of
              the city centre, with retail, office, hospitality and professional
              services operators generating consistent frosted film, manifestation
              and branded vinyl demand. The distinctive granite frontages
              along Union Street create a concentrated run of commercial glazing
              film applications.
            </p>
            <p>
              <strong className="text-foreground">Marischal Square AB10</strong> —
              Aberdeen City Council&apos;s major civic and commercial campus
              development, with glazed retail, office and public-space frontages
              generating window film demand from commercial interior contractors
              and facilities managers across the complex.
            </p>
            <p>
              <strong className="text-foreground">Kittybrewster Retail Park AB25</strong> —
              Out-of-town Aberdeen retail destination near Kittybrewster generating
              large-format and warehouse-style retail window film demand from
              open-site glazed frontages. Frosted film, solar-control and
              manifestation for national retailers and service operators
              within the park.
            </p>
            <p>
              <strong className="text-foreground">Beach Boulevard AB24 &amp; wider AB postcode</strong> —
              Aberdeen&apos;s Beach and leisure corridor AB24, Old Aberdeen and
              the wider AB postcode district and suburban retail provision —
              all within the same Aberdeen AB postcode mobilisation. Elgin IV30
              and Inverness IV1 within operational reach for planned programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Aberdeen and Scottish services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/window-film/retail-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Aberdeen</p>
            </Link>
            <Link href="/window-film/gym-window-film-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Window film for Aberdeen gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Aberdeen retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Aberdeen retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Aberdeen retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 4
              hours from South Yorkshire via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Aberdeen Retail Quote →
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
