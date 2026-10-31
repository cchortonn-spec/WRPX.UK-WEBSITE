import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Newport | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Newport and the NP postcode area — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Building Regulations-compliant glass manifestation. Kingsway Centre NP20, Friars Walk NP20, Spytty Retail Park NP19 and all Newport NP postcode retail sites. Approximately 3 hours from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-newport/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Newport — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Newport and the NP postcode area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Building Regulations-compliant glass manifestation. Kingsway Centre NP20, Friars Walk NP20, Spytty Retail Park NP19, Newport Retail Park NP10 and all Newport NP postcode retail sites. Installation available during or outside trading hours. Approximately 3 hours from our South Yorkshire base via the M4."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Newport", item: "https://www.wrpx.co.uk/window-film/retail-window-film-newport/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Newport retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Newport and the NP postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Kingsway Centre NP20 and Friars Walk NP20 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Newport city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Spytty Retail Park NP19 generates frosted film demand from its large-format national retailer footprint and adjacent commercial units.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Newport retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Newport retail units with south and west-facing glazed elevations on open-site frontages can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Spytty Retail Park NP19 and Newport Retail Park at Duffryn NP10 — both out-of-town sites with open aspects and large glazed elevations — are candidates for solar-control film where orientation and glazing configuration generate heat or glare issues. Newport is approximately 3 hours from our South Yorkshire base via the M1, M42 and M4 — a direct motorway route — and we can mobilise for planned programmes across the NP postcode retail estate alongside Cardiff in a single South Wales mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Newport shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Building Regulations for new and substantially refurbished commercial glazed installations across Newport retail units. Retailers at Kingsway Centre NP20, Friars Walk NP20 and across Newport&apos;s retail parks frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. Under Building Regulations applicable in Wales, manifestation height bands run 850–1000mm and 1400–1600mm above floor level. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Newport retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Newport and wider South East Wales retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Kingsway Centre or Friars Walk management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Newport retail programmes. Newport is approximately 3 hours from our South Yorkshire base via the M4 — for planned Newport retail fit-out schedules we incorporate travel into scheduling with multi-day South Wales programmes where project volume justifies it. Newport sits between Cardiff and Bristol on the M4 corridor, making it practical to combine with Cardiff, Swansea or Bristol in a single mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Newport shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Newport retail units where trading disruption is not acceptable. Kingsway Centre NP20 and Friars Walk NP20 operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Newport retail parks — Spytty Retail Park NP19 and Newport Retail Park NP10 — we agree logistics with unit and park management in advance, and out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newport postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newport and surrounding NP postcode retail areas — NP20 (Newport city centre: Kingsway Centre NP20 — Newport&apos;s principal enclosed shopping centre on Kingsway generating national retailer shopfitting, frosted film and manifestation demand; Friars Walk NP20 — Newport&apos;s newer city-centre retail and leisure development adjacent to Kingsway with national food and beverage and retail tenants; Newport High Street and Bridge Street NP20 retail corridor; Royal Gwent Hospital NP20 commercial and retail ancillary provision around the hospital campus; Queensway Meadows NP20 commercial zone), NP19 (Spytty: Spytty Retail Park NP19 — one of Newport&apos;s principal out-of-town retail destinations with large-format national retailers, generating solar-control, frosted film and manifestation demand from open-site glazed frontages; Newport City Retail Park NP19; the Spytty and Nash industrial and commercial zone NP19), NP10 (Duffryn, Rogerstone: Newport Retail Park at Duffryn NP10 — further out-of-town retail provision generating large-format retailer window film demand; Rogerstone commercial provision NP10), NP44 (Cwmbran: Cwmbran Shopping Centre NP44 — the principal shopping destination for the Cwmbran new town catchment generating national retailer shopfitting and window film demand from its enclosed mall footprint; Cwmbran Retail Park NP44). Caerleon NP18, Pontypool NP4 and Chepstow NP16 also within the broader NP postcode operational area. WRPX is based in South Yorkshire, approximately 3 hours from Newport via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmNewportPage() {
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
            <span className="text-foreground">Newport</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Newport &amp; South East Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Newport
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Newport and the
            NP postcode area. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and Building Regulations-compliant glass manifestation.
            Kingsway Centre NP20, Friars Walk NP20, Spytty Retail Park NP19
            and all Newport NP postcode retail sites. Approximately 3 hours
            from our South Yorkshire base via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Newport Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Newport retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newport is the largest city in Gwent and a significant South Wales
              commercial centre positioned on the M4 corridor between Cardiff
              and Bristol. The retail core is anchored by two principal enclosed
              shopping destinations — Kingsway Centre NP20 and the adjacent
              Friars Walk NP20 development — with major out-of-town retail
              volume at Spytty Retail Park NP19 and Newport Retail Park
              at Duffryn NP10.
            </p>
            <p>
              Kingsway Centre NP20 is Newport&apos;s principal enclosed shopping
              mall — a long-established city-centre retail destination with
              national and independent retail tenants generating ongoing
              fit-out and window film demand from its enclosed footprint.
              Frosted film for fitting rooms, glass manifestation on internal
              doors and partitions, and solar-control for glazed frontages
              facing the Kingsway elevation are the consistent applications.
              Centre management access requirements apply for all Kingsway
              Centre installations.
            </p>
            <p>
              Friars Walk NP20 — Newport&apos;s newer city-centre retail and
              leisure scheme — brings national food, beverage and retail brands
              alongside a multiplex cinema into a modern glazed footprint
              immediately adjacent to Kingsway Centre. The contemporary
              glazed architecture of Friars Walk generates consistent
              manifestation and decorative film demand from its national
              retail and leisure tenants.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Newport via the M1, M42 and M4 — a direct motorway route into
              South Wales. We can mobilise to Kingsway Centre, Friars Walk,
              Spytty Retail Park and all NP postcode retail sites, and can
              cover Newport alongside Cardiff and Swansea in a co-ordinated
              South Wales programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Newport
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Kingsway Centre NP20 and Friars Walk NP20
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
                mannequin displays — relevant across Newport&apos;s out-of-town
                retail parks at Spytty NP19 and Duffryn NP10 with open-site
                glazed elevations facing direct sun.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at the correct
                heights on internal glass doors and full-height glazed panels.
                Frosted bands, etched-effect, dot pattern or branded options
                for Newport retail units at Kingsway Centre, Friars Walk
                and across the NP postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Newport retail
                glazing — shopfront branding, reception glass and partition
                panels across Kingsway Centre NP20, Friars Walk NP20 and
                the wider Newport NP postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Newport retail units — providing
                staff privacy without structural alterations across all NP
                postcode retail environments from city centre to out-of-town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Newport retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company across all Newport retail destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Kingsway Centre NP20</strong> —
              Newport&apos;s principal enclosed shopping mall on Kingsway,
              with national and independent retail tenants across an established
              city-centre footprint. Consistent shopfitting and window film
              demand for fitting rooms, glass manifestation and solar-control
              glazing. Kingsway Centre management access and contractor
              protocols are followed for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Friars Walk NP20</strong> —
              Newport&apos;s newer city-centre retail and leisure development
              adjacent to Kingsway Centre, with national food, beverage and
              retail brands in a contemporary glazed scheme. The modern
              glazed architecture of Friars Walk generates ongoing manifestation,
              decorative film and frosted film demand from its national tenant
              fit-out programmes and ongoing refurbishments.
            </p>
            <p>
              <strong className="text-foreground">Spytty Retail Park NP19</strong> —
              One of Newport&apos;s principal out-of-town retail destinations
              at Spytty, with large-format national retailers on open-site
              plots generating solar-control film, frosted film and
              manifestation demand from open-aspect glazed frontages. Retail
              park access protocols agreed with each unit and park management
              in advance of all installations.
            </p>
            <p>
              <strong className="text-foreground">Newport Retail Park NP10</strong> —
              Out-of-town retail provision at Duffryn NP10 — further
              large-format and warehouse-style Newport retail generating
              window film demand from open-site glazed frontages across the
              national retailer and service operator mix.
            </p>
            <p>
              <strong className="text-foreground">Cwmbran Shopping Centre NP44</strong> —
              The principal enclosed shopping destination for the Cwmbran new
              town catchment — enclosed mall retail with national tenants
              generating shopfitting, frosted film and manifestation demand.
              Cwmbran is a natural addition to any planned Newport NP postcode
              retail window film programme given its proximity and enclosed
              mall retail environment.
            </p>
            <p>
              <strong className="text-foreground">Newport High Street &amp; wider NP</strong> —
              Newport city-centre high street and Bridge Street retail corridor
              NP20, the Queensway Meadows commercial zone NP20 and wider NP
              postcode retail provision — all within the same Newport NP
              mobilisation. Caerleon NP18, Pontypool NP4 and Chepstow NP16
              also within reach.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Newport and South Wales services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Swansea and South West Wales</p>
            </Link>
            <Link href="/window-film/retail-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Cardiff and the Vale</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newport/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newport</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Newport</p>
            </Link>
            <Link href="/window-film/gym-window-film-newport/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Newport</p>
              <p className="mt-1 text-xs text-muted">Window film for Newport gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Newport retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newport retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Newport retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 3
              hours from South Yorkshire via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Newport Retail Quote →
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
