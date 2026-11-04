import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Dundee | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Dundee and Tayside — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Scottish Technical Handbooks-compliant glass manifestation. Overgate Centre DD1, Wellgate Centre DD1, Gallagher Retail Park DD3, Kingsway Retail Park DD3 and all Dundee DD postcode retail sites. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-dundee/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Dundee — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Dundee and Tayside. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Scottish Technical Handbooks-compliant glass manifestation. Overgate Centre DD1, Wellgate Centre DD1, Gallagher Retail Park Kingsway West DD3, Kingsway Retail Park DD3, Dundee Designer Outlet DD2 and all Dundee DD postcode retail sites. Installation available during or outside trading hours. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Dundee", item: "https://www.wrpx.co.uk/window-film/retail-window-film-dundee/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Dundee retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Dundee and the DD postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at the Overgate Centre DD1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Dundee city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. The Overgate Centre DD1 and Wellgate Centre DD1 are Dundee&apos;s two principal covered retail destinations, generating consistent shopfitting and window film demand from their national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Dundee retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dundee retail units with south and west-facing glazed elevations on open-site frontages — particularly at Gallagher Retail Park on Kingsway West DD3 and Kingsway Retail Park DD3 — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Dundee is approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) north and A90 — a direct route into Tayside. We can mobilise to the Overgate Centre, Wellgate Centre, Gallagher Retail Park, Kingsway Retail Park, Dundee Designer Outlet and all DD postcode retail sites, and can cover Dundee alongside Perth or other Tayside locations in a co-ordinated programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Dundee shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under the Scottish Technical Handbooks for new and substantially refurbished commercial glazed installations across Dundee retail units. Retailers at the Overgate Centre DD1 and Wellgate Centre DD1 regularly need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. In Scotland, the Scottish Technical Handbooks set the manifestation requirements for Domestic and Non-Domestic buildings. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Scottish Technical Handbooks requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Dundee retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Dundee and Tayside retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Overgate Centre or Wellgate Centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Dundee retail programmes. Dundee is approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90 — for planned Dundee retail fit-out schedules we incorporate travel into scheduling and can combine Dundee with Perth, Inverness or other Tayside and Scottish locations in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Dundee shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Dundee retail units where trading disruption is not acceptable. The Overgate Centre DD1 and Wellgate Centre DD1 operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Dundee retail — Gallagher Retail Park on Kingsway West DD3 and Kingsway Retail Park DD3 — we agree logistics with unit and park management in advance, and out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee and Tayside postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Dundee and surrounding DD postcode retail areas — DD1 (Dundee city centre: Overgate Centre DD1 — Dundee&apos;s principal covered shopping centre on the Overgate, with national multiple tenants generating fitting room frosted film, glass manifestation and solar-control demand; Wellgate Centre DD1 — Dundee&apos;s other covered retail destination on Wellgate with national and independent occupiers; city-centre retail streets including Commercial Street and Murraygate generating independent retail and commercial glazing film demand; V&A Dundee waterfront zone DD1 — the regenerated waterfront with retail, hospitality and commercial glazing demand; Dundee bus station and city-core retail along High Street DD1), DD2 (West End, Ninewells: Dundee Designer Outlet DD2 on Lochee Road — premium outlet retail generating fitting room frosted film and solar-control demand; West End retail and commercial glazing on Perth Road DD2 generating independent and commercial window film demand; Invergowrie DD2 at the western margin of the Dundee retail area), DD3 (Hilltown, Kingsway: Gallagher Retail Park Kingsway West DD3 — out-of-town large-format retail park with national multiple tenants on south-facing open-site glazed elevations generating solar-control and manifestation demand; Kingsway Retail Park DD3 — additional out-of-town retail volume on the northern Kingsway ring road corridor; Hilltown DD3 district retail and commercial glazing provision), DD4 (Stobswell, Craigie: Stobswell DD4 district retail and commercial glazing; Craigie DD4 retail provision on the Arbroath Road south-east corridor), DD5 (Broughty Ferry, Monifieth: Broughty Ferry DD5 — Dundee&apos;s affluent eastern coastal suburb with active independent retail on Brook Street and Gray Street generating frosted film, manifestation and decorative vinyl demand; Monifieth DD5 on the eastern margin of the Dundee operational area). WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmDundeePage() {
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
            <span className="text-foreground">Dundee</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Dundee &amp; Tayside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Dundee
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Dundee and
            Tayside. Frosted privacy film for fitting rooms and staff areas,
            solar-control film for glazed shop fronts, branded decorative vinyl
            and Scottish Technical Handbooks-compliant glass manifestation.
            Overgate Centre DD1, Wellgate Centre DD1, Gallagher Retail Park DD3
            and Kingsway Retail Park DD3 covered. Approximately 3 hours 30
            minutes from our South Yorkshire base via the A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Dundee Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Dundee retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Dundee is a city with a regenerated commercial core anchored by
              two covered retail destinations — the Overgate Centre DD1 and
              Wellgate Centre DD1 — alongside a vibrant independent retail and
              hospitality sector stretching across the city-centre streets and
              the waterfront V&amp;A Dundee development zone. Out-of-town retail
              volume sits at Gallagher Retail Park on Kingsway West DD3 and
              Kingsway Retail Park DD3, with Dundee Designer Outlet DD2 on
              Lochee Road adding premium outlet retail to the city&apos;s
              commercial geography.
            </p>
            <p>
              The Overgate Centre DD1 is Dundee&apos;s principal covered
              shopping centre — a modern enclosed mall on the Overgate with
              national multiple tenants across two trading levels, generating
              consistent shopfitting and window film demand for fitting rooms,
              glass manifestation on internal doors and partitions, and
              solar-control for glazed frontages. Centre management access
              requirements apply for all Overgate installations.
            </p>
            <p>
              Dundee&apos;s two universities — University of Dundee with
              approximately 18,000 students and Abertay University with
              approximately 5,000 — generate campus retail and commercial
              glazing film demand from university-owned retail and hospitality
              spaces, alongside a large private student accommodation sector
              across the city creating further window film demand from landlord
              and management company programmes.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30
              minutes from Dundee via the A1(M) north and A90 — a direct
              route into Tayside. We can mobilise to the Overgate Centre,
              Wellgate Centre, Gallagher Retail Park, Kingsway Retail Park,
              Dundee Designer Outlet and all DD postcode retail sites, and
              can cover Dundee alongside Perth or other Tayside locations
              in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Dundee
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Overgate Centre DD1 and Wellgate Centre DD1
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
                mannequin displays — relevant across Gallagher Retail Park DD3
                and Kingsway Retail Park DD3 with open-site glazed elevations
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
                options for Dundee retail units at the Overgate Centre,
                Wellgate Centre and across the DD postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Dundee retail
                glazing — shopfront branding, reception glass and partition
                panels across the Overgate Centre DD1, Wellgate Centre DD1
                and the wider Dundee DD postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Dundee retail units — providing
                staff privacy without structural alterations across all DD
                postcode retail environments from city centre to out-of-town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Dundee retail campaigns,
                seasonal graphics and sale-period programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company across all Dundee DD postcode retail destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Overgate Centre DD1</strong> —
              Dundee&apos;s principal covered shopping centre on the Overgate,
              serving the city-centre retail catchment with national multiple
              tenants across two trading levels. Consistent shopfitting and
              window film demand for fitting rooms, glass manifestation and
              solar-control glazing. Centre management access and contractor
              protocols are followed for all Overgate installations.
            </p>
            <p>
              <strong className="text-foreground">Wellgate Centre DD1</strong> —
              Dundee&apos;s other covered retail destination on Wellgate with
              national and independent retail occupiers generating consistent
              fitting room frosted film, manifestation and decorative vinyl
              demand from its enclosed retail floors.
            </p>
            <p>
              <strong className="text-foreground">Gallagher Retail Park — Kingsway West DD3</strong> —
              Out-of-town large-format retail on Kingsway West DD3, with
              national home, leisure and food retail operators on open-site
              plots. The open-aspect glazed elevations on south and west-facing
              frontages generate solar-control film and manifestation demand
              from nationally tenanted retail units.
            </p>
            <p>
              <strong className="text-foreground">Kingsway Retail Park DD3</strong> —
              Additional out-of-town retail volume on the northern Kingsway ring
              road corridor, with large-format retail and DIY operators on open
              plots with glazed frontages generating solar-control and
              manifestation demand.
            </p>
            <p>
              <strong className="text-foreground">Broughty Ferry and suburban DD5</strong> —
              Broughty Ferry DD5 — Dundee&apos;s affluent eastern coastal
              suburb — hosts an active independent retail corridor on Brook
              Street and Gray Street generating frosted film, manifestation and
              decorative vinyl demand from independent retailers and commercial
              operators along the seafront approach.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Dundee and Tayside services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Glasgow and the West of Scotland</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Dundee</p>
            </Link>
            <Link href="/window-film/gym-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Window film for Dundee gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Dundee retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Dundee retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Dundee retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              3 hours 30 minutes from South Yorkshire via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Dundee Retail Quote →
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
