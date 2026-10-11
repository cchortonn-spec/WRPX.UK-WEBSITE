import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Portsmouth | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Portsmouth and the Hampshire coast — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Gunwharf Quays, Commercial Road, Palmerston Road Southsea, Fareham Shopping Centre and all Portsmouth PO retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-portsmouth/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Portsmouth — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Portsmouth city and the Hampshire south coast. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Gunwharf Quays PO1, Commercial Road PO1, Palmerston Road Southsea PO5, Fareham Shopping Centre PO16, Havant Retail Park PO9 and all Portsmouth and Hampshire PO retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Portsmouth", item: "https://www.wrpx.co.uk/window-film/retail-window-film-portsmouth/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Portsmouth retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Portsmouth city and the Hampshire south coast. Typical uses include fitting room and changing area glazing in clothing retailers at Gunwharf Quays PO1 and Commercial Road PO1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages on Palmerston Road Southsea PO5 where a frosted band improves the display arrangement or reduces glare on merchandise. The independent retail quarter in Southsea PO5 is also well-suited to decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Gunwharf Quays or Portsmouth retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gunwharf Quays — Portsmouth&apos;s principal waterfront designer outlet in PO1, with over 90 retail and restaurant units — has individual unit glazed frontages where solar gain can affect temperature and merchandise presentation on south and west-facing waterfront positions. Portsmouth&apos;s position on the south-facing Solent coast means higher annual sun hours than many UK cities, making solar-control film particularly cost-effective on retail glazing along the PO1 and PO5 seafront zones. The retail park provision at Cosham PO6, Fareham PO16 and Havant PO9 also has large-format glazed retail buildings on exposed edge-of-town sites where solar-control film reduces solar heat gain by 40 to 79%.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Portsmouth retail outside the city centre — Fareham, Havant, Gosport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Portsmouth and wider Hampshire PO retail postcodes, not just the PO1 city-centre core. Fareham Shopping Centre PO16 — a major covered shopping centre serving the Fareham and western Hampshire market — and the Fareham retail park corridor are within our standard Portsmouth-day service area. Havant Retail Park PO9 to the east, Gosport town centre PO12 across the harbour and the Lee-on-the-Solent PO13 coastal strip are all reachable within a standard Portsmouth programme day. Chichester PO19 and PO20 in west Sussex to the east fall within our extended south coast service footprint on a project basis. WRPX is based in South Yorkshire, approximately 3 hours from Portsmouth via the M1 south, M25 and M3/A3(M).",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include branding or a logo on Portsmouth retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Portsmouth retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Gunwharf Quays and Palmerston Road Southsea boutique shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site south coast retailers — units across Portsmouth, Fareham, Havant and Chichester — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Portsmouth retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M for full-height glazed panels and doors that are not otherwise visually apparent. The functional requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Portsmouth retail units with full-height glazed shop fronts at Gunwharf Quays, on Commercial Road, along Palmerston Road Southsea and in Fareham and Havant shopping centres are all likely to require manifestation. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Portsmouth retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Portsmouth are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Gunwharf Quays units where centre management has specific access requirements, early-morning slots before the centre opens are available. A typical Portsmouth retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmPortsmouthPage() {
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
            <span className="text-foreground">Portsmouth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Portsmouth &amp; Hampshire South Coast
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Portsmouth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Portsmouth city
            and the Hampshire south coast — frosted privacy film for fitting rooms
            and staff areas, solar-control film for glazed shop fronts, branded
            decorative vinyl and DDA-compliant glass manifestation. Gunwharf Quays,
            Commercial Road, Palmerston Road Southsea, Fareham Shopping Centre,
            Havant Retail Park and all PO postcode retail locations. Approximately
            3 hours from our South Yorkshire base via the M1 south, M25 and M3/A3(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Portsmouth Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Portsmouth retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Portsmouth is the UK&apos;s only island city, with its commercial
              retail core concentrated on Portsea Island across two distinct
              shopping zones. Commercial Road PO1 — the main pedestrianised
              high street — runs through the heart of Portsmouth city centre,
              with the Cascades Shopping Centre anchoring the northern end.
              Gunwharf Quays PO1, the city&apos;s waterfront designer outlet and
              leisure complex on the former naval dockyard site, has over 90
              retail and restaurant units fronting the Portsmouth Harbour.
            </p>
            <p>
              Southsea — the city&apos;s Victorian residential and seaside suburb
              running south from the city centre — has a thriving independent
              retail corridor along Palmerston Road PO5 and Albert Road PO5,
              popular with independent boutiques, cafes and specialist retailers
              that benefit from frosted film for privacy, solar control for
              south-facing units and decorative branded treatments on
              shop-front glazing.
            </p>
            <p>
              The wider Hampshire south coast retail market includes the
              Fareham Shopping Centre PO16 — a major covered retail destination
              on the M27 corridor serving the western Hampshire and Fareham
              district — and the retail park and out-of-town provision at
              Havant PO9, Cosham PO6 and along the A27 east of the city.
              Portsmouth&apos;s south-facing Solent position gives the city
              significantly higher annual sun hours than many UK retail
              markets, making solar-control film a particularly cost-effective
              specification on south and west-facing glazed retail frontages.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Portsmouth via the M1 south, M25 and M3/A3(M). For multi-site
              Portsmouth and Hampshire south coast retail programmes, we plan
              multi-day site visits with local overnight stays to maximise
              coverage per trip.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Portsmouth retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or lower-panel frosted film for fitting room glazed
                panels in Portsmouth clothing retailers. Clean, professional
                finish — visually equivalent to etched or sandblasted glass —
                without the cost or disruption of glass replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shop fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed Portsmouth retail frontages. Cuts UV fading of merchandise
                displays without blocking natural light — relevant for Gunwharf
                Quays waterfront and Southsea south-facing units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors across Portsmouth retail units. Frosted bands, etched-effect,
                dot pattern or branded manifestation options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, text, pattern or printed frosted film incorporating
                Portsmouth retail branding on shop-front glazing, internal
                partitions and staff area glass — combining identity and
                privacy in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff and back-office privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted or one-way mirror film on staff area glazing, back-office
                partitions and stockroom glass within Portsmouth retail units —
                maintaining natural light while preventing customer view into
                operational areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti and protection film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clear sacrificial film on external ground-floor glazing at
                Portsmouth retail locations — particularly Gunwharf Quays
                waterfront units and Commercial Road high-street positions —
                protecting the glass surface from marking and enabling
                cost-effective removal and replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portsmouth retail zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth retail zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Gunwharf Quays PO1</strong> —
              Portsmouth&apos;s premier retail and leisure destination on the
              waterfront, with over 90 designer outlet and food &amp; drink units.
              South-facing harbour-side positions benefit from solar-control film.
              The centre has specific access arrangements for contractors; we
              co-ordinate directly with the centre management team and can
              schedule early-morning access slots before the centre opens.
            </p>
            <p>
              <strong className="text-foreground">Commercial Road and city centre PO1</strong> —
              Portsmouth&apos;s main pedestrianised high street running from the
              Cascades Shopping Centre south toward Guildhall Square. National
              retailers, independent operators and food and beverage units
              occupy a range of glazed shop fronts where frosted film, DDA
              manifestation and solar-control treatments are the primary
              applications.
            </p>
            <p>
              <strong className="text-foreground">Palmerston Road and Southsea PO5</strong> —
              Portsmouth&apos;s independent retail and lifestyle quarter in the
              Victorian Southsea suburb, running south toward the seafront.
              Independent boutiques, specialist retailers and cafes on the
              Palmerston Road and Albert Road corridors frequently use frosted
              and branded decorative film for shop-front privacy and identity.
              South-facing ground-floor units in this zone benefit from
              solar-control film.
            </p>
            <p>
              <strong className="text-foreground">Fareham and west Hampshire PO16</strong> —
              Fareham Shopping Centre on the M27 corridor serves a major
              west Hampshire catchment. The covered centre and surrounding
              retail park and trading estate provision carry chain and
              independent retail units with standard frosted film, solar control
              and DDA manifestation requirements.
            </p>
          </div>
        </div>
      </section>

      {/* B2B subcontract */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract retail window film installation — Portsmouth
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For sign companies, print companies, shopfitters and retail fit-out
              contractors managing window film programmes across Portsmouth and the
              Hampshire south coast, WRPX operates as a white-label installation
              partner. We attend under your instructions, follow your brand
              standards and centre access protocols, and provide photographic
              sign-off on completion of each unit.
            </p>
            <p>
              For multi-site retail rollouts covering Portsmouth alongside
              Southampton, Chichester and wider south coast locations, we plan
              efficient route schedules across consecutive programme days to
              reduce travel costs and maximise site coverage per trip. RAMS
              documentation is provided as standard for Gunwharf Quays and
              Fareham Shopping Centre programmes that require contractor sign-on.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Portsmouth and south coast services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-southampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Southampton</p>
              <p className="mt-1 text-xs text-muted">Window film for Southampton retail</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Portsmouth care homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Portsmouth</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for fitting rooms and retail glazing</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for retail glazing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Portsmouth retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Portsmouth retail unit — location, glazing
              area and what you need the film to do. We&apos;ll confirm a specification
              and price. Subcontract and multi-site south coast enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Portsmouth Quote →
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
