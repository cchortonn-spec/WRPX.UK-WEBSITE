import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Inverness | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Inverness and the Scottish Highlands — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Scottish Technical Handbooks-compliant glass manifestation. Eastgate Centre IV2, Inverness Retail Park IV2, High Street IV1 and all Inverness IV postcode retail sites. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-inverness/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Inverness — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Inverness and the Scottish Highlands. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Scottish Technical Handbooks-compliant glass manifestation. Eastgate Centre IV2, Inverness Retail Park IV2, High Street IV1 and all Inverness IV postcode retail sites. Installation available during or outside trading hours. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Inverness", item: "https://www.wrpx.co.uk/window-film/retail-window-film-inverness/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Inverness retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Inverness and the IV postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Eastgate Centre IV2 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Inverness city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Eastgate Centre IV2 serves a Highland catchment area of well over 200,000 people, and national multiple tenants across the centre generate consistent shopfitting and window film demand for fitting room privacy film, glass manifestation and decorative vinyl.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Inverness retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Inverness retail units with south and west-facing glazed elevations on open-site frontages can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Inverness Retail Park IV2 on Eastfield Road — an out-of-town site with open aspects and large glazed elevations — is a candidate for solar-control film where orientation and glazing configuration generate heat or glare issues. Inverness is approximately 5 hours from our South Yorkshire base via the A1(M) through Newcastle and Edinburgh, then the A9 — a fully dual-carriageway route into the Highland capital. We can mobilise to Eastgate Centre, Inverness Retail Park and all IV postcode retail sites, and can cover Inverness alongside Aberdeen in a co-ordinated Scottish Highlands programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Inverness shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under the Scottish Technical Handbooks for new and substantially refurbished commercial glazed installations across Inverness retail units. Retailers at Eastgate Centre IV2 and across Inverness&apos;s retail parks frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. Under the Scottish Technical Handbooks applicable in Scotland, manifestation height bands run 850–1000mm and 1400–1600mm above floor level. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Scottish Technical Handbooks requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Inverness retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Inverness and Highland retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Eastgate Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Inverness retail programmes. Inverness is approximately 5 hours from our South Yorkshire base via the A1(M) and A9 — for planned Inverness retail fit-out schedules we incorporate travel into scheduling with multi-day Highland programmes where project volume justifies it. Inverness can be combined with Aberdeen — approximately 2.5 hours south — in a single extended Scottish mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Inverness shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Inverness retail units where trading disruption is not acceptable. Eastgate Centre IV2 operates within a centre management framework that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Inverness retail — Inverness Retail Park IV2 on Eastfield Road — we agree logistics with unit and park management in advance, and out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness and Highland postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Inverness and surrounding IV postcode retail areas — IV1 (Inverness city centre: High Street IV1 — Inverness&apos;s primary retail artery generating consistent frosted film, manifestation and decorative vinyl demand from its national and independent retail stock; Church Street, Academy Street and Eastgate retail approaches IV1; city-centre office and hospitality operators generating commercial glazing film demand from the Highland capital&apos;s commercial core), IV2 (Eastgate, Retail Park, Millburn Road: Eastgate Centre IV2 — Inverness&apos;s principal enclosed shopping centre serving a Highland catchment extending across the region, generating national retailer shopfitting and window film demand; Inverness Retail Park on Eastfield Road IV2 — out-of-town large-format retail generating solar-control and manifestation demand from open-aspect glazed elevations; Millburn Road IV2 commercial corridor with office and professional services glazing film demand; Inverness Airport zone IV2 with hotel and commercial retail glazing demand), IV3 (Inverness west: Inverness Leisure Centre IV3 area; west Inverness retail and commercial provision), IV4–IV5 (further Highland market town and rural zones within the Inverness operational area). WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) and A9.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmInvernessPage() {
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
            <span className="text-foreground">Inverness</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Inverness &amp; Scottish Highlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Inverness
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Inverness and
            the Scottish Highlands. Frosted privacy film for fitting rooms and
            staff areas, solar-control film for glazed shop fronts, branded
            decorative vinyl and Scottish Technical Handbooks-compliant glass
            manifestation. Eastgate Centre IV2, Inverness Retail Park IV2,
            High Street IV1 and all Inverness IV postcode retail sites.
            Approximately 5 hours from our South Yorkshire base via the
            A1(M) and A9.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Inverness Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Inverness retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Inverness is the capital of the Scottish Highlands and the most
              significant retail destination north of Aberdeen — serving a
              Highland catchment area of well over 200,000 people across a
              vast geographic region. The retail core is anchored by Eastgate
              Centre IV2 — the Highland&apos;s principal enclosed shopping
              mall — with major out-of-town volume at Inverness Retail Park
              on Eastfield Road IV2.
            </p>
            <p>
              Eastgate Centre IV2 is Inverness&apos;s primary enclosed retail
              destination — a well-established city-centre shopping mall with
              national multiple tenants across its covered footprint, generating
              consistent shopfitting and window film demand from fitting rooms,
              glass manifestation on internal doors and partitions, and
              solar-control for glazed frontages. Centre management access
              requirements apply for all Eastgate Centre installations.
            </p>
            <p>
              Inverness Retail Park on Eastfield Road IV2 brings large-format
              national DIY, homeware and food retail operators to an out-of-town
              site with open aspects and glazed elevations — generating
              solar-control film and manifestation demand from its nationally
              tenanted retail units and adjacent commercial operators.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 5 hours from
              Inverness via the A1(M) through Newcastle and Edinburgh, then
              the A9 — a fully dual-carriageway route into the Highland
              capital. We can mobilise to Eastgate Centre, Inverness Retail
              Park and all IV postcode retail sites, and can cover Inverness
              alongside Aberdeen in a co-ordinated Scottish programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Inverness
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Eastgate Centre IV2 fashion retailers.
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
                mannequin displays — relevant across Inverness Retail Park IV2
                with open-site glazed elevations facing direct sun.
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
                options for Inverness retail units at Eastgate Centre and
                across the IV postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Inverness
                retail glazing — shopfront branding, reception glass and
                partition panels across Eastgate Centre IV2, High Street IV1
                and the wider Inverness IV postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Inverness retail units — providing
                staff privacy without structural alterations across all IV
                postcode retail environments from city centre to out-of-town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Inverness retail
                campaigns, seasonal graphics and sale-period programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company across all Inverness retail
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
            Inverness retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Eastgate Centre IV2</strong> —
              Inverness&apos;s principal enclosed shopping mall, serving a
              Highland catchment area extending well beyond the city. National
              multiple tenants across the covered footprint generate ongoing
              shopfitting and window film demand for fitting rooms, glass
              manifestation and solar-control glazing. Centre management access
              and contractor protocols are followed for all Eastgate Centre
              installations.
            </p>
            <p>
              <strong className="text-foreground">Inverness Retail Park IV2</strong> —
              Out-of-town large-format retail on Eastfield Road IV2, with
              national DIY, homeware and food retail operators on open-site
              plots. The open-aspect glazed elevations on south and
              west-facing frontages generate solar-control film and
              manifestation demand from its nationally tenanted units.
              Retail park access protocols agreed with unit and park management
              in advance of all installations.
            </p>
            <p>
              <strong className="text-foreground">High Street and city centre IV1</strong> —
              Inverness city-centre High Street, Church Street and the
              Academy Street retail approaches IV1 — the Highland capital&apos;s
              primary retail corridor, with national and independent operators
              generating consistent frosted film, manifestation and decorative
              vinyl demand.
            </p>
            <p>
              <strong className="text-foreground">Crown Street and Millburn Road IV2</strong> —
              The Crown Street and Millburn Road IV2 commercial zone extending
              east from Eastgate Centre, with retail, hospitality and commercial
              operators generating glazing film demand from the city&apos;s
              main east–west commercial corridor.
            </p>
            <p>
              <strong className="text-foreground">Wider Highland IV postcode</strong> —
              The broader IV postcode network — Dingwall IV15, Tain IV19,
              Nairn IV12 and Forres IV36 among the Highland market town
              catchment served from Inverness — all within the same Highland
              mobilisation for planned multi-site retail window film programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Inverness and Highland services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Aberdeen and North East Scotland</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Inverness</p>
            </Link>
            <Link href="/window-film/gym-window-film-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">Window film for Inverness gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Inverness retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Inverness retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Inverness retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 5
              hours from South Yorkshire via the A1(M) and A9.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Inverness Retail Quote →
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
