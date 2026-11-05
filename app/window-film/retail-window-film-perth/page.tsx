import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Perth | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Perth and Perthshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Scottish Technical Handbooks-compliant glass manifestation. St John's Shopping Centre PH1, Broxden Retail Park PH2, Inveralmond Retail Park PH1 and all Perth PH postcode retail sites. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-perth/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Perth — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Perth and Perthshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Scottish Technical Handbooks-compliant glass manifestation. St John's Shopping Centre PH1, Broxden Retail Park PH2, Inveralmond Retail Park PH1, King Edward Street and High Street retail corridor PH1 and all Perth PH postcode retail sites. Installation available during or outside trading hours. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Perth", item: "https://www.wrpx.co.uk/window-film/retail-window-film-perth/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Perth retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Perth and the PH postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at St John&apos;s Shopping Centre PH1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Perth city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy without structural alteration. St John&apos;s Shopping Centre PH1 is Perth&apos;s principal covered retail destination, generating consistent shopfitting and window film demand from its national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Perth retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Perth retail units with south and west-facing glazed elevations on open-site frontages — particularly at Broxden Retail Park PH2 near the M90 junction and Inveralmond Retail Park PH1 on the northern approach into the city — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Perth is approximately 3 hours from our South Yorkshire base via the A1(M) north and M90 — a direct motorway route into the heart of Perthshire. We can mobilise to St John&apos;s Shopping Centre, Broxden Retail Park, Inveralmond Retail Park and all PH postcode retail sites, and can cover Perth alongside Dundee — roughly 20 minutes east on the A90 — in a co-ordinated Tayside programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Perth shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under the Scottish Technical Handbooks for new and substantially refurbished commercial glazed installations across Perth retail units. Retailers at St John&apos;s Shopping Centre PH1 regularly need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. In Scotland, the Scottish Technical Handbooks set the manifestation requirements for Domestic and Non-Domestic buildings. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Scottish Technical Handbooks requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Perth retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Perth and Perthshire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any St John&apos;s Shopping Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Perth retail programmes. Perth is approximately 3 hours from our South Yorkshire base via the A1(M) and M90 — for planned Perth retail fit-out schedules we incorporate travel into scheduling and can combine Perth with Dundee or other Tayside and central Scotland locations in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Perth shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Perth retail units where trading disruption is not acceptable. St John&apos;s Shopping Centre PH1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Perth retail — Broxden Retail Park PH2 and Inveralmond Retail Park PH1 — we agree logistics with unit and park management in advance, and out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth and Perthshire postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Perth and surrounding PH postcode retail areas — PH1 (Perth city centre: St John&apos;s Shopping Centre PH1 — Perth&apos;s principal covered shopping centre serving the city-centre retail catchment with national multiple tenants generating fitting room frosted film, glass manifestation and solar-control demand; King Edward Street and High Street PH1 — Perth&apos;s main pedestrianised retail core with national and independent retail generating consistent window film demand; South Street and Scott Street retail corridor PH1; Kinnoull Street commercial and retail PH1; Inveralmond Retail Park PH1 on the northern Inveralmond Road approach with large-format retail operators on open-site glazed plots; Perth city-centre independent retail and hospitality on Methven Street and Mill Street PH1), PH2 (Bridgend, South Perth: Broxden Retail Park PH2 at the M90 Junction 10 interchange — an out-of-town retail destination with national multiple operators on open-site glazed frontages generating solar-control and manifestation demand; South Inch retail and commercial provision PH2; Bridgend commercial and retail glazing PH2). WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) and M90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmPerthPage() {
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
            <span className="text-foreground">Perth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Perth &amp; Perthshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Perth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Perth and
            Perthshire. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and Scottish Technical Handbooks-compliant glass manifestation.
            St John&apos;s Shopping Centre PH1, Broxden Retail Park PH2 and
            Inveralmond Retail Park PH1 covered. Approximately 3 hours from
            our South Yorkshire base via the A1(M) and M90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Perth Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Perth retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Perth is a compact, prosperous city with a well-established retail
              core anchored by St John&apos;s Shopping Centre PH1 — the
              city&apos;s principal covered retail destination — and an active
              pedestrianised High Street and King Edward Street retail corridor.
              Out-of-town retail volume sits at Broxden Retail Park PH2 at the
              M90 Junction 10 interchange and Inveralmond Retail Park PH1 on
              the northern approach into the city, with large-format and
              national multiple operators on open-site glazed frontages.
            </p>
            <p>
              St John&apos;s Shopping Centre PH1 serves a wide Perthshire
              catchment that extends well beyond the city boundary — drawing
              shoppers from Kinross, Crieff, Blairgowrie and surrounding
              Perthshire market towns into the city-centre retail core.
              National retailer fit-out and refurbishment programmes at
              St John&apos;s generate consistent shopfitting and window film
              demand for fitting rooms, glass manifestation on internal doors
              and partitions, and solar-control for glazed frontages.
            </p>
            <p>
              In Scotland, glass manifestation on full-height glazed panels
              and glass doors in commercial premises is governed by the
              Scottish Technical Handbooks — not Building Regulations as in
              England. We install Scottish Technical Handbooks-compliant
              manifestation on all Perth retail fit-out and refurbishment
              projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Perth via the A1(M) north and M90 — a direct motorway route via
              the Forth Road Bridge and Kinross into the heart of Perthshire.
              We can mobilise to St John&apos;s Shopping Centre, Broxden
              Retail Park, Inveralmond Retail Park and all PH postcode retail
              sites, and can cover Perth alongside Dundee — roughly 20 minutes
              east on the A90 — in a co-ordinated Tayside programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Perth
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across St John&apos;s Shopping Centre PH1 fashion
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
                mannequin displays — relevant across Broxden Retail Park PH2
                and Inveralmond Retail Park PH1 with open-site glazed
                elevations facing direct sun.
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
                options for Perth retail units at St John&apos;s Shopping
                Centre and across the PH postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Perth retail
                glazing — shopfront branding, reception glass and partition
                panels across St John&apos;s Shopping Centre PH1, the High
                Street retail core and the wider Perth PH postcode retail
                estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Perth retail units — providing
                staff privacy without structural alterations across all PH
                postcode retail environments from city centre to out-of-town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Perth retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company across all Perth PH postcode retail destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St John&apos;s Shopping Centre PH1</strong> —
              Perth&apos;s principal covered shopping centre on the High Street,
              serving the city-centre retail catchment and a wide Perthshire
              commuter catchment with national multiple tenants across its
              enclosed retail floors. Consistent shopfitting and window film
              demand for fitting rooms, glass manifestation and solar-control
              glazing. Centre management access and contractor protocols are
              followed for all St John&apos;s installations.
            </p>
            <p>
              <strong className="text-foreground">King Edward Street &amp; High Street PH1</strong> —
              Perth&apos;s pedestrianised retail core extending from King
              Edward Street through the High Street to South Street, with
              national multiples, independent retailers and hospitality
              operators generating fitting room frosted film, manifestation
              and decorative vinyl demand.
            </p>
            <p>
              <strong className="text-foreground">Broxden Retail Park PH2</strong> —
              Out-of-town large-format retail at the M90 Junction 10
              interchange, with national home, leisure and food retail
              operators on open-site plots. The open-aspect glazed elevations
              on south and west-facing frontages generate solar-control film
              and manifestation demand from nationally tenanted retail units.
            </p>
            <p>
              <strong className="text-foreground">Inveralmond Retail Park PH1</strong> —
              Large-format retail and trade-counter provision on the northern
              Inveralmond Road approach into Perth city centre, with open-plan
              retail and DIY operators on glazed frontages generating
              solar-control and manifestation demand.
            </p>
            <p>
              <strong className="text-foreground">South Street &amp; Scott Street retail corridor PH1</strong> —
              Perth&apos;s secondary city-centre retail corridor with
              independent retailers, estate agents, food operators and
              commercial glazing provision generating window film and
              manifestation demand along the full corridor from South Inch
              to the city centre.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Perth and Tayside services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Dundee and Tayside</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Perth</p>
            </Link>
            <Link href="/window-film/gym-window-film-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">Window film for Perth gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Perth retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Perth retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Perth retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              3 hours from South Yorkshire via the A1(M) and M90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Perth Retail Quote →
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
