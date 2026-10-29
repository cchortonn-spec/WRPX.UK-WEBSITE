import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Swansea | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Swansea and the SA postcode area — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Quadrant Shopping Centre SA1, Morfa Retail Park SA1, Parc Tawe SA1, the SA1 Waterfront regeneration zone and the wider Swansea city-centre retail corridor. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-swansea/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Swansea — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Swansea and the SA postcode area. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Quadrant Shopping Centre SA1, Morfa Retail Park SA1, Parc Tawe Retail and Leisure Park SA1, the SA1 Waterfront regeneration zone and the Swansea city-centre high street retail corridor. Installation available during or outside trading hours. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Swansea", item: "https://www.wrpx.co.uk/window-film/retail-window-film-swansea/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Swansea retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Swansea and the SA postcode area. Typical uses include fitting room and changing area glazing in clothing retailers at Quadrant Shopping Centre SA1 — full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area — staff area partitions and back-office glazing within Swansea city-centre and retail-park units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Morfa Retail Park SA1 near the Liberty Stadium generates frosted film demand from large-format and warehouse-style retail operators with glazed frontages.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Swansea retail premises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Morfa Retail Park SA1 and out-of-town Swansea retail units with south and west-facing glazed elevations on open-site frontages can receive substantial direct solar exposure during retail trading hours. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise and mannequin displays from UV fading. Swansea city-centre units on Oxford Street and in Quadrant Shopping Centre SA1 with glazed frontages facing the pedestrianised retail zone are also candidates for solar-control film where orientation and glazing configuration generate heat or glare issues. Swansea is approximately 3 hours 30 minutes from our South Yorkshire base via the M4, and we can mobilise for planned programmes across the SA postcode retail estate alongside Cardiff and Newport in a single South Wales mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Swansea shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Swansea retail units. Retailers at Quadrant Shopping Centre SA1, Morfa Retail Park SA1, Parc Tawe SA1 and the Swansea city-centre Oxford Street retail corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop-front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Swansea retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Swansea and wider South Wales retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Quadrant Shopping Centre landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Swansea retail programmes. Swansea is approximately 3 hours 30 minutes from our South Yorkshire base via the M4 — we can cover Swansea alongside Cardiff and Newport in a co-ordinated South Wales mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Swansea shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Swansea retail units where trading disruption is not acceptable. Quadrant Shopping Centre SA1 operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Morfa Retail Park SA1 and Parc Tawe SA1 out-of-town Swansea retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea and surrounding postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Swansea and surrounding SA postcode retail areas — SA1 (Swansea city centre and Maritime Quarter: Quadrant Shopping Centre — Swansea&apos;s principal covered shopping destination with national multiples and independent traders; Oxford Street and the pedestrianised Swansea city-centre retail corridor; SA1 Waterfront and Maritime Quarter regeneration zone with new mixed-use commercial and retail glazing film demand; Parc Tawe Retail and Leisure Park SA1 — the mixed retail, leisure and cinema destination adjacent to the city centre; Morfa Retail Park SA1 — Swansea&apos;s primary large-format out-of-town retail park near the Liberty Stadium generating substantial solar-control and manifestation demand from national retailers on open-site frontages), SA2 (Uplands, Sketty, Brynmill: inner west Swansea mixed residential and commercial zone with independent retail and service business glazing film demand; Singleton Hospital SA2 area commercial corridor), SA3 (Mumbles: the Mumbles seafront and village with high footfall café, restaurant, retail and independent operator demand along Newton Road SA3), SA4 (Gorseinon: west Swansea suburban town centre generating district-level retail glazing film demand), SA5 (Fforestfach: west Swansea commercial and light industrial estate with glazing film demand from retail and service operators), SA6 (Morriston: north Swansea retail and commercial corridor generating national and independent retailer glazing film demand). Neath SA11, Port Talbot SA12 and wider South West Wales also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmSwanseaPage() {
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
            <span className="text-foreground">Swansea</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Swansea &amp; South West Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Swansea
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Swansea and
            the SA postcode area. Frosted privacy film for fitting rooms and
            staff areas, solar-control film for glazed shop fronts, branded
            decorative vinyl and glass manifestation. Quadrant Shopping Centre
            SA1, Morfa Retail Park SA1, Parc Tawe SA1 and the Swansea
            city-centre retail corridor. Approximately 3 hours 30 minutes from
            our South Yorkshire base via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Swansea Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Swansea retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Swansea is Wales&apos;s second city, with a retail market anchored
              by Quadrant Shopping Centre in the city centre SA1 and
              significant out-of-town provision through Morfa Retail Park SA1
              and Parc Tawe Retail and Leisure Park SA1. The city-centre
              retail core along Oxford Street and the pedestrianised zone
              generates consistent shopfitting and retail fit-out activity
              creating ongoing window film demand from national retailers and
              independent operators.
            </p>
            <p>
              Quadrant Shopping Centre SA1 — Swansea&apos;s primary covered
              shopping destination in the heart of the city centre — has
              national multiple and independent retail tenants generating
              consistent window film demand for fitting rooms, glass
              manifestation and solar-control glazing. The SA1 Waterfront and
              Maritime Quarter regeneration zone is an expanding commercial and
              retail environment with growing glazed development and increasing
              window film demand from new-fit operators and refurbishments.
            </p>
            <p>
              Morfa Retail Park SA1 near the Liberty Stadium is Swansea&apos;s
              primary large-format out-of-town retail destination — large-scale
              national retailers with open-site orientations and substantial
              glazed elevations. South and west-facing glazed frontages receive
              significant direct solar exposure — a primary driver of
              solar-control film demand at out-of-town Swansea locations.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30 minutes
              from Swansea via the M4 — a direct motorway route across England
              and into South Wales via the Severn crossings. We can mobilise to
              Quadrant, Morfa Retail Park, Parc Tawe and all Swansea SA postcode
              retail sites, and can cover Swansea alongside Cardiff and Newport
              in a co-ordinated South Wales multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Swansea
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Quadrant Shopping Centre SA1 fashion retailers.
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
                mannequin displays — particularly relevant across Morfa Retail
                Park&apos;s open-site large-format retail buildings facing the
                Swansea Bay horizon.
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
                for Swansea retail units at Quadrant Shopping Centre, Morfa
                Retail Park and across the SA postcode.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Swansea retail
                glazing — shopfront branding, reception glass and partition
                panels across Quadrant SA1, Parc Tawe SA1 and SA1 Waterfront
                commercial units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Swansea retail units — providing
                staff privacy without structural alterations across all SA
                postcode retail environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Swansea retail campaigns,
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
            Swansea retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Quadrant Shopping Centre SA1</strong> —
              Swansea&apos;s principal covered shopping destination in the heart
              of the city centre, with national multiples and independent traders
              across an enclosed footprint. Consistent shopfitting and window
              film demand for fitting rooms, manifestation and solar-control from
              retailers within the centre. We follow Quadrant centre management
              access and contractor protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Morfa Retail Park SA1</strong> —
              Swansea&apos;s primary large-format out-of-town retail destination
              near the Liberty Stadium, featuring warehouse-style and large-format
              retail operators with open-site orientations and substantial glazed
              elevations. South and west-facing glazed frontages receive
              significant direct solar exposure — a primary driver of solar-control
              film demand at out-of-town Swansea locations.
            </p>
            <p>
              <strong className="text-foreground">Parc Tawe Retail &amp; Leisure Park SA1</strong> —
              Swansea&apos;s mixed retail and leisure destination adjacent to the
              city centre, with national retailers, a cinema and leisure operators
              generating consistent fit-out and window film installation demand
              in Swansea&apos;s central commercial zone.
            </p>
            <p>
              <strong className="text-foreground">Swansea city-centre Oxford Street SA1</strong> —
              The main pedestrianised retail corridor running through Swansea
              city centre, with national high-street brands, independent retailers
              and service businesses generating window film demand for frosted
              film, manifestation and branded vinyl from the core retail strip.
            </p>
            <p>
              <strong className="text-foreground">SA1 Waterfront and Maritime Quarter</strong> —
              Swansea&apos;s expanding waterfront regeneration zone with growing
              mixed-use commercial, office and retail development. New-fit glazing
              in the SA1 Waterfront district generates increasing manifestation
              and decorative film demand from operators moving into the
              regeneration area.
            </p>
            <p>
              <strong className="text-foreground">Mumbles SA3 and suburban district centres</strong> —
              Mumbles seafront and village commercial zone with high-footfall
              café, restaurant and independent retail operators along Newton Road
              SA3 generating frosted film, decorative vinyl and manifestation
              demand. Gorseinon SA4, Morriston SA6 and Fforestfach SA5 district
              retail provide further SA postcode coverage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Swansea and South Wales services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Cardiff and South Wales</p>
            </Link>
            <Link href="/window-film/retail-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Bristol and the West</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Swansea</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Swansea care homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Swansea</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Swansea retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Swansea retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Swansea retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. Approximately 3
              hours 30 minutes from South Yorkshire via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Swansea Retail Quote →
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
