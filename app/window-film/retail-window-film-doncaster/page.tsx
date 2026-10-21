import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Doncaster | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Doncaster and South Yorkshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and glass manifestation. Frenchgate Shopping Centre DN1, Doncaster Corn Exchange, Lakeside Village and all Doncaster DN postcode retail environments. WRPX is based in South Yorkshire — less than 30 minutes from Doncaster.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-doncaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Doncaster — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Doncaster and South Yorkshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and glass manifestation. Frenchgate Shopping Centre DN1, Doncaster Corn Exchange, Lakeside Village and all Doncaster DN postcode retail environments. Installation available during or outside trading hours. WRPX is based in South Yorkshire — less than 30 minutes from Doncaster town centre."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Doncaster", item: "https://www.wrpx.co.uk/window-film/retail-window-film-doncaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Doncaster retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Doncaster and the South Yorkshire area. Typical uses include fitting room and changing area glazing in clothing retailers at the Frenchgate Shopping Centre DN1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light in the fitting area), staff area partitions and back-office glazing within Doncaster retail units, and glazed shopfront sections where a frosted band improves the display arrangement or provides staff privacy. Lakeside Village DN4 — the out-of-town retail and outlet centre — and Doncaster Corn Exchange generate consistent frosted film demand from shopfitters and facilities teams managing those retail environments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the Frenchgate Shopping Centre or Lakeside Village?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Frenchgate Shopping Centre in Doncaster DN1 — with over 90 units across a covered multi-level footprint anchored by national multiples — has individual unit frontages and glazed atrium sections where solar-control film is applicable to reduce heat gain and UV fading of merchandise. Lakeside Village DN4 — the out-of-town retail and outlet park adjacent to the Lakeside business zone — has large-format retail and outlet units with significant south and west-facing glazed elevations that receive substantial direct solar exposure on open-site frontages. Solar-control film reduces solar heat gain by 40 to 79%, cutting cooling costs and protecting merchandise. WRPX is based in South Yorkshire and can mobilise to both Frenchgate and Lakeside Village with minimal travel time — less than 30 minutes from our base.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and do Doncaster shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for new and substantially refurbished commercial glazed installations across Doncaster retail units. Retailers at the Frenchgate Shopping Centre DN1, Lakeside Village DN4 and the Doncaster town centre high-street corridor frequently need manifestation on internal glass doors, glazed partition walls and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine Building Regulations requirements with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Doncaster retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Doncaster and South Yorkshire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including any Frenchgate Shopping Centre landlord and centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Doncaster retail programmes. WRPX is based in South Yorkshire, less than 30 minutes from Doncaster town centre — we can respond rapidly to short-notice Doncaster retail assignments and cover Doncaster alongside Sheffield, Rotherham and Barnsley in a single South Yorkshire mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Doncaster shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Doncaster retail units where trading disruption is not acceptable. The Frenchgate Shopping Centre operates within centre management frameworks that can require installation before opening, within agreed access windows or after closing. We co-ordinate timing directly with your facilities team or centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For Lakeside Village and out-of-town Doncaster retail units with individual opening-hours arrangements, we agree logistics with the unit and park management in advance. Our South Yorkshire base means overnight stays are not required for Doncaster assignments — further reducing programme costs.",
      },
    },
    {
      "@type": "Question",
      name: "Which Doncaster and South Yorkshire postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Doncaster and South Yorkshire DN retail postcodes — DN1 (Doncaster town centre: the Frenchgate Shopping Centre with over 90 units, the Doncaster Corn Exchange, St Sepulchre Gate and Frenchgate high-street retail corridor — the primary concentration of commercial retail fit-out and window film demand in the Doncaster area), DN2 (Wheatley, Wheatley Hills — north Doncaster residential and retail zone), DN3 (Armthorpe, Edenthorpe, Kirk Sandall — east Doncaster residential and retail zone), DN4 (Balby, Bessacarr, Warmsworth, Lakeside — south-east Doncaster; Lakeside Village DN4 is the principal out-of-town retail and outlet destination for Doncaster, with large-format retail buildings and an outlet shopping environment generating consistent solar-control and fit-out window film demand), DN5 (Bentley, Scawthorpe — north Doncaster suburban retail zone), DN6 (Adwick le Street, Woodlands — north Doncaster and Wakefield boundary; Robin Hood Doncaster Sheffield Airport zone), DN7 (Hatfield, Stainforth — east Doncaster and Thorne gateway zone), DN8 (Thorne, Moorends — east Doncaster market town retail zone), DN9 (Epworth, Bawtry fringe — Isle of Axholme rural retail), DN10 (Bawtry, Tickhill — south Doncaster market towns with town-centre retail and independent shopfit demand), DN11 (Rossington, New Rossington, Harworth — south Doncaster and North Nottinghamshire fringe retail zone), DN12 (Conisbrough, Denaby — west Doncaster zone). WRPX is based in South Yorkshire — less than 30 minutes from Doncaster town centre.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmDoncasterPage() {
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
            <span className="text-foreground">Doncaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Doncaster &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Doncaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Doncaster and
            South Yorkshire. Frosted privacy film for fitting rooms and staff
            areas, solar-control film for glazed shop fronts, branded decorative
            vinyl and glass manifestation. Frenchgate Shopping Centre, Lakeside
            Village, Doncaster Corn Exchange and all Doncaster DN postcode retail
            environments. WRPX is based in South Yorkshire — less than 30 minutes
            from Doncaster town centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Doncaster Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Doncaster retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Doncaster is South Yorkshire&apos;s largest town by area and a major
              regional retail centre serving a catchment extending across
              Doncaster, the East Riding of Yorkshire, North Lincolnshire and
              North Nottinghamshire. The Frenchgate Shopping Centre in Doncaster
              town centre DN1 is the primary covered retail destination, with
              over 90 units across a modern footprint anchored by national
              multiples and a strong food and beverage offer.
            </p>
            <p>
              Lakeside Village DN4 — the out-of-town retail and outlet park
              south-east of the town centre — provides a large-format retail
              environment with substantial glazed elevations on open-site
              frontages, generating significant solar-control film demand from
              retailers managing heat and glare on south and west-facing units.
              The Doncaster Corn Exchange and St Sepulchre Gate retail corridor
              add further town-centre retail and independent shopfit activity.
            </p>
            <p>
              Retail fit-out contractors and shopfitters working on Doncaster
              retail projects — new unit builds, refurbishments, brand refreshes
              — regularly need subcontract window film installation for
              manifestation, frosted film and solar-control on tight programme
              timelines. Print companies and sign businesses supplying South
              Yorkshire retail clients need reliable installation partners who
              know the local centre management requirements.
            </p>
            <p>
              WRPX is based in South Yorkshire, less than 30 minutes from
              Doncaster town centre. We can mobilise rapidly to Frenchgate,
              Lakeside Village and all Doncaster DN postcode retail sites —
              the most responsive coverage of any Sheffield-based installer
              for Doncaster assignments.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Doncaster
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room and fitting
                room glazing across Frenchgate Shopping Centre fashion retailers.
                Complete privacy maintained while retaining natural light in the
                fitting area.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Cuts UV fading of merchandise and
                mannequin displays — particularly relevant across Lakeside
                Village&apos;s open-site large-format retail buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                on internal glass doors and full-height glazed panels. Frosted
                bands, etched-effect, dot pattern or branded options for
                Doncaster retail units at Frenchgate and Lakeside Village.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, frosted pattern or decorative vinyl on Doncaster retail
                glazing — shopfront branding, reception glass and partition
                panels across the Frenchgate Shopping Centre, Lakeside Village
                and Doncaster Corn Exchange retail units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for back-office glazing, staff room windows and
                internal partitions within Doncaster retail units — providing
                staff privacy without structural alterations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Doncaster retail
                campaigns, seasonal graphics and sale-period programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster retail environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Frenchgate Shopping Centre DN1</strong> —
              Doncaster&apos;s principal covered shopping destination in the heart
              of the town centre, with over 90 retail and dining units across
              a modern multi-level footprint. National multiple retailers and
              independent traders generating consistent window film demand for
              fitting rooms, manifestation and solar-control. We follow
              Frenchgate management access and contractor protocols for all
              centre installations.
            </p>
            <p>
              <strong className="text-foreground">Lakeside Village DN4</strong> —
              the out-of-town retail and outlet park south-east of the town
              centre, featuring large-format retail buildings alongside an outlet
              shopping environment. The open-site orientation and large glazed
              elevations on the retail units mean south and west-facing shop
              fronts receive significant direct solar exposure — the primary
              driver of solar-control film demand at Lakeside Village.
            </p>
            <p>
              <strong className="text-foreground">Doncaster Corn Exchange DN1</strong> —
              the Victorian Corn Exchange on Frenchgate, repurposed as a retail
              and food hall environment with independent retailers and food
              operators. A consistent source of independent retail shopfit and
              window film demand from operators and fit-out contractors working
              in the Corn Exchange and the wider Frenchgate conservation area.
            </p>
            <p>
              <strong className="text-foreground">St Sepulchre Gate retail corridor DN1</strong> —
              the primary high-street retail corridor in Doncaster town centre,
              with national chains, independents and food operators generating
              consistent shopfitting and window film demand from retailers and
              print companies working in the central Doncaster retail market.
            </p>
            <p>
              <strong className="text-foreground">Out-of-town retail parks</strong> —
              suburban retail park provision at Wheatley Hall Road DN2, the
              Loversall Business Park corridor and Carr Hill retail zone
              generates consistent solar-control and frosted film demand from
              large-format retailers with glazed frontages in the east and north
              Doncaster retail belt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Doncaster and South Yorkshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Retail film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/subcontract-window-film-installation-doncaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Doncaster</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Doncaster</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-doncaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Doncaster</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Doncaster</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Doncaster retail enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Doncaster retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Doncaster retail site, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We work white-label for shopfitters and print companies,
              and direct for retailers and facilities managers. WRPX is based in
              South Yorkshire — less than 30 minutes from Doncaster.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Doncaster Retail Quote →
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
