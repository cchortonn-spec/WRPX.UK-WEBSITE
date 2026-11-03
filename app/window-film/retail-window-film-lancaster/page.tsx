import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Lancaster | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Lancaster and North Lancashire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and Building Regulations-compliant glass manifestation. St Nicholas Arcades LA1, Marketgate LA1, Lancaster Retail Park LA1 and Morecambe LA4 covered. All Lancaster LA postcode retail sites. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-lancaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Lancaster — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Lancaster and North Lancashire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and Building Regulations-compliant glass manifestation. St Nicholas Arcades LA1, Marketgate Shopping Centre LA1, Lancaster Retail Park on Caton Road LA1, Morecambe Retail Park LA4 and all Lancaster LA postcode retail sites. Installation available during or outside trading hours. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Lancaster", item: "https://www.wrpx.co.uk/window-film/retail-window-film-lancaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Lancaster retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Lancaster and the LA postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at St Nicholas Arcades LA1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area. Staff area partitions and back-office glazing within Lancaster city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. St Nicholas Arcades LA1 and Marketgate Shopping Centre LA1 are the two principal enclosed retail destinations in Lancaster city centre, generating consistent shopfitting and window film demand from their national and independent retail tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Lancaster retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lancaster retail units with south and west-facing glazed elevations on open-site frontages — particularly at Lancaster Retail Park on Caton Road LA1 and Morecambe Retail Park LA4 — can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Lancaster is approximately 1 hour 30 minutes from our South Yorkshire base via the M62 west and M6 north — a direct motorway route into North Lancashire. We can mobilise to St Nicholas Arcades, Marketgate, Lancaster Retail Park and all LA postcode retail sites, and can cover Lancaster alongside Preston or Wigan in a co-ordinated North West programme.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Lancaster shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at the correct heights to full-height glazed panels and glass doors — is required under Building Regulations for new and substantially refurbished commercial glazed installations across Lancaster retail units. Retailers at St Nicholas Arcades LA1 and Marketgate LA1 frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. In England, manifestation height bands run 850–1000mm and 1400–1600mm above floor level. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Lancaster retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Lancaster and North Lancashire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any St Nicholas Arcades or Marketgate centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Lancaster retail programmes. Lancaster is approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6 — for planned Lancaster retail fit-out schedules we incorporate travel into scheduling and can combine Lancaster with Preston, Wigan or other North West locations in a single regional programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Lancaster shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Lancaster retail units where trading disruption is not acceptable. St Nicholas Arcades LA1 and Marketgate LA1 operate within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For out-of-town Lancaster retail — Lancaster Retail Park on Caton Road LA1 and Morecambe Retail Park LA4 — we agree logistics with unit and park management in advance, and out-of-hours slots can typically be arranged for most nationally tenanted units.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster and North Lancashire postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Lancaster and surrounding LA postcode retail areas — LA1 (Lancaster city centre: St Nicholas Arcades LA1 — Lancaster&apos;s principal enclosed shopping centre on Common Garden Street, generating fitting room frosted film, glass manifestation and solar-control demand from its national and independent retail tenants; Marketgate Shopping Centre LA1 — Lancaster&apos;s other major covered retail destination with national multiple tenants generating consistent window film demand; Lancaster Retail Park on Caton Road LA1 — out-of-town large-format and destination retail generating solar-control and manifestation demand from open-aspect glazed elevations; Lancaster Affordable Housing and independent retail along the city-centre streets from Castle Hill to Penny Street generating frosted and manifestation demand; Lancaster University campus retail and commercial glazing at Bailrigg LA1), LA2 (Galgate, Caton, rural north: Galgate LA2 village commercial provision; rural LA2 fringe retail and commercial glazing within the operational area), LA3 (Heysham: Heysham LA3 commercial retail provision on the western coastal fringe of Lancaster; Heysham village retail corridor), LA4 (Morecambe: Morecambe Retail Park LA4 — out-of-town retail park on the Morecambe seafront approach, generating solar-control and manifestation demand from its national multiple tenants; Morecambe town centre LA4 — the Marine Road seafront retail corridor and town-centre shopping streets generating frosted film, manifestation and promotional vinyl demand from national and independent retailers; Morecambe Market Hall LA4 with local retail and service operators). WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmLancasterPage() {
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
            <span className="text-foreground">Lancaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Lancaster &amp; North Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Lancaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Lancaster and
            North Lancashire. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and Building Regulations-compliant glass manifestation.
            St Nicholas Arcades LA1, Marketgate LA1, Lancaster Retail Park LA1
            and Morecambe LA4 covered. Approximately 1 hour 30 minutes from our
            South Yorkshire base via the M62 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Lancaster Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Lancaster retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Lancaster is a city with a well-established commercial retail
              centre anchored by two covered shopping destinations — St Nicholas
              Arcades LA1 on Common Garden Street and Marketgate Shopping Centre
              LA1 — alongside a growing independent retail sector across the
              city-centre streets between Castle Hill and Penny Street. Lancaster
              Retail Park on Caton Road LA1 adds out-of-town large-format retail
              volume, while Morecambe LA4 extends the North Lancashire retail
              catchment with its seafront town centre and Morecambe Retail Park.
            </p>
            <p>
              St Nicholas Arcades LA1 is Lancaster&apos;s principal enclosed
              shopping centre — a covered retail mall with national multiple
              tenants across its footprint, generating consistent shopfitting
              and window film demand for fitting rooms, glass manifestation on
              internal doors and partitions, and solar-control for glazed
              frontages. Centre management access requirements apply for all
              St Nicholas Arcades installations.
            </p>
            <p>
              Lancaster University on the Bailrigg campus LA1 — with
              approximately 15,000 students — generates campus retail and
              commercial glazing film demand from the university&apos;s own
              retail and hospitality spaces, creating a distinct window film
              market alongside the city-centre retail estate.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Lancaster via the M62 west and M6 north — a direct motorway
              route into North Lancashire. We can mobilise to St Nicholas
              Arcades, Marketgate, Lancaster Retail Park, Morecambe and all LA
              postcode retail sites, and can cover Lancaster alongside Preston
              or Wigan in a co-ordinated North West programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Lancaster
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across St Nicholas Arcades LA1 and Marketgate LA1
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
                mannequin displays — relevant across Lancaster Retail Park LA1
                and Morecambe Retail Park LA4 with open-site glazed elevations
                facing direct sun.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at the correct
                heights on internal glass doors and full-height glazed panels.
                Frosted bands, etched-effect, dot pattern or branded options for
                Lancaster retail units at St Nicholas Arcades, Marketgate and
                across the LA postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Lancaster
                retail glazing — shopfront branding, reception glass and
                partition panels across St Nicholas Arcades LA1, Marketgate
                LA1 and the wider Lancaster LA postcode retail estate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Lancaster retail units — providing
                staff privacy without structural alterations across all LA
                postcode retail environments from city centre to out-of-town.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Lancaster retail
                campaigns, seasonal graphics and sale-period programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company across all Lancaster retail
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
            Lancaster retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St Nicholas Arcades LA1</strong> —
              Lancaster&apos;s principal enclosed shopping centre on Common
              Garden Street, serving the city-centre retail catchment with
              national multiple tenants across its covered footprint. Consistent
              shopfitting and window film demand for fitting rooms, glass
              manifestation and solar-control glazing. Centre management access
              and contractor protocols are followed for all St Nicholas Arcades
              installations.
            </p>
            <p>
              <strong className="text-foreground">Marketgate Shopping Centre LA1</strong> —
              Lancaster&apos;s other major covered retail destination, connected
              to the city-centre street network with national and independent
              retail occupiers generating consistent fitting room frosted film,
              manifestation and decorative vinyl demand.
            </p>
            <p>
              <strong className="text-foreground">Lancaster Retail Park LA1</strong> —
              Out-of-town large-format retail on Caton Road LA1, with national
              DIY, homeware and food retail operators on open-site plots. The
              open-aspect glazed elevations on south and west-facing frontages
              generate solar-control film and manifestation demand from their
              nationally tenanted retail units.
            </p>
            <p>
              <strong className="text-foreground">Morecambe and coastal LA4</strong> —
              Morecambe town centre LA4 — the Marine Road seafront retail
              corridor and town-centre shopping streets — generates frosted
              film, manifestation and promotional vinyl demand from national and
              independent retailers. Morecambe Retail Park LA4 on the approach
              road adds out-of-town retail park volume to the North Lancashire
              coverage area.
            </p>
            <p>
              <strong className="text-foreground">Lancaster University campus LA1</strong> —
              The Bailrigg campus generates retail and hospitality glazing film
              demand from its campus commercial and catering operations —
              fitting room frosted film, manifestation on glass partitions and
              decorative vinyl for the university&apos;s own retail and branded
              spaces.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Lancaster and North Lancashire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Greater Manchester</p>
            </Link>
            <Link href="/window-film/retail-window-film-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Liverpool and Merseyside</p>
            </Link>
            <Link href="/subcontract-window-film-installation-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Lancaster</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Lancaster</p>
            </Link>
            <Link href="/window-film/gym-window-film-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Lancaster</p>
              <p className="mt-1 text-xs text-muted">Window film for Lancaster gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Lancaster retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Lancaster retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately
              1 hour 30 minutes from South Yorkshire via the M62 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Lancaster Retail Quote →
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
