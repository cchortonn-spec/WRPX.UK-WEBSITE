import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Oxford | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Oxford and Oxfordshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Westgate Oxford, Covered Market, Cowley Road, Templars Square and all Oxford OX retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-oxford/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Oxford — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Oxford and Oxfordshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Westgate Oxford OX1 (100+ retail and restaurant units), Covered Market OX1, Cowley Road OX4, Templars Square OX4, Oxford Retail Park OX4 and all Oxford and Oxfordshire OX retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Oxford", item: "https://www.wrpx.co.uk/window-film/retail-window-film-oxford/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Oxford retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Oxford and Oxfordshire. Typical uses include fitting room and changing area glazing in clothing retailers at Westgate Oxford OX1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light and visual merchandising), staff area partitions and back-office glazing within Oxford retail units, and street-facing glazed frontages on Cornmarket Street OX1 and Queen Street OX1 where a frosted band improves the display arrangement. The independent retail quarter along Cowley Road OX4 and Covered Market OX1 is also suited to decorative frosted and etched-effect window film treatments that match the character of the retail environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Westgate Oxford or Oxford retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Westgate Oxford — the city&apos;s principal modern retail destination in OX1, redeveloped in 2017 with over 100 retail and restaurant units across five levels — has individual unit glazed frontages and the large rooftop restaurant level where solar gain affects temperature and merchandise presentation on south and west-facing positions. Oxford Retail Park in Cowley OX4, Templars Square OX4 and Kassam Retail Park OX4 have large-format retail buildings on edge-of-town sites where solar-control film reduces solar heat gain by 40 to 79%. Oxford&apos;s position in the Thames Valley means high sun hours on south-facing glazed retail frontages, making solar-control specification a practical rather than optional decision for many Oxford retailers.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA glass manifestation and do Oxford shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DDA-compliant glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for all new and substantially refurbished commercial glazed installations in the UK, including retail units across Oxford. Retailers at Westgate Oxford OX1 and Oxford town centre units frequently need manifestation on internal glass doors, glazed partition walls within the sales floor, and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine compliance with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Oxford retail fit-out contractors and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate as a subcontract and white-label window film installation partner for Oxford and Oxfordshire retail fit-out contractors, shopfitters, print companies and sign companies managing window film programmes across retail sites. We attend under your instructions, follow site access protocols — including Westgate Oxford landlord procedures and any retail centre management requirements — and provide photographic sign-off on completion of each unit. RAMS documentation is available as standard for all Oxford retail programmes. For multi-site national retailers with Oxford units as part of a wider window film programme, our South Yorkshire base means we can schedule Oxford alongside Midlands locations in a single mobilisation to keep costs efficient.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film outside trading hours at Oxford shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and early-morning installation is available for Oxford retail units where trading disruption is not acceptable. Westgate Oxford and Oxford&apos;s managed retail environments typically require installation teams to work before centre opening, during agreed access windows or after closing. We co-ordinate timing directly with your facilities team or the centre management to confirm the access window, arrive equipped and complete each unit within the agreed time. For campaigns with multiple Oxford units across different environments — high street, shopping centre, retail park — we schedule each location according to the access requirements of that site.",
      },
    },
    {
      "@type": "Question",
      name: "Which Oxford and Oxfordshire retail postcodes do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Oxford and Oxfordshire OX retail postcodes — OX1 (Oxford city centre and Westgate Oxford — the city&apos;s principal retail core, including Cornmarket Street, Queen Street, the High Street, Bonn Square and the Covered Market; all high-footfall retail environments with glazed fronts, glass doors and partitions requiring film), OX2 (Botley Road, Cutteslowe, Summertown — north and west Oxford suburban retail; Summertown OX2 carries an independent retail cluster along the Banbury Road), OX4 (Cowley Road, Rose Hill, Templars Square, Oxford Retail Park, Kassam Retail Park, Cowley Road — south-east Oxford independent retail quarter and the main Cowley edge-of-town retail park zone), OX14 (Abingdon — Vale of White Horse town centre retail), OX16 (Banbury — north Oxfordshire town centre retail and Castle Quay Shopping Centre), OX28 (Witney — west Oxfordshire market town retail). WRPX is based in South Yorkshire, approximately 2 hours from Oxford via the M1 south and M40 west.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmOxfordPage() {
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
            <span className="text-foreground">Oxford</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Oxford &amp; Oxfordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Oxford
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail units across Oxford and Oxfordshire.
            Frosted privacy film for fitting rooms and staff areas, solar-control
            film for glazed shop fronts, branded decorative vinyl and DDA-compliant
            glass manifestation. Westgate Oxford, Covered Market, Cowley Road
            independents, Templars Square and Oxford Retail Park. Subcontract
            and white-label installation for fit-out contractors and print companies.
            Approximately 2 hours from our South Yorkshire base via the M1 and M40.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Oxford Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Oxford retail market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Oxford retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Oxford has one of the most distinctive retail environments in the UK,
              combining a major modern shopping centre at Westgate Oxford OX1 —
              opened in 2017 with over 100 retail, restaurant and leisure units
              across five levels — with a historic high street on Cornmarket Street
              and Queen Street, the Covered Market, and a dense independent retail
              quarter along Cowley Road OX4 and Summertown OX2.
            </p>
            <p>
              Westgate Oxford&apos;s architecture creates significant solar-control
              requirements, particularly on the glazed rooftop restaurant and leisure
              level and on south-facing unit frontages along the building&apos;s central
              atrium. The Cowley Road OX4 retail quarter — Oxford&apos;s bohemian
              independent shopping and hospitality strip — has a high density of
              individually managed retail, caf&eacute; and gallery premises with glazed
              frontages suited to frosted, decorative and etched-effect window film.
            </p>
            <p>
              The edge-of-town retail zone around Cowley OX4 — Oxford Retail Park,
              Templars Square and Kassam Retail Park — carries large-format retail
              buildings on exposed southerly sites where solar-control film is a
              practical specification decision, reducing solar heat gain and cooling
              costs across large glazed facades on south and west-facing elevations.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from Oxford
              via the M1 south and M40 west. Oxford retail units benefit from
              a direct route without overnight travel for single-day installations,
              and we stay locally for larger Oxfordshire retail programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Oxford
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for fitting room and changing
                area glazing. Complete privacy while retaining natural light
                in the sales floor beyond — particularly relevant for clothing
                retailers at Westgate Oxford and the high street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — glazed frontages
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed shop fronts and retail units. Cuts UV fading of merchandise
                and interior furnishings. Relevant for Westgate Oxford units,
                Oxford Retail Park buildings and south-facing Cowley Road premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                height on full-height glazed panels and glass doors. Frosted bands,
                etched-effect, dot pattern or branded options across all Oxford
                retail environments including Westgate Oxford.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut vinyl, frosted film with brand graphics or printed decorative
                film for Oxford shop windows and entrance glazing. Independent
                retailers on Cowley Road OX4 and Summertown OX2 frequently
                use decorative film to create distinctive shopfront identity.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and seasonal film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary promotional vinyl for sale campaigns, seasonal
                events and Oxford store launches. Installed and removed cleanly
                without damage to glazing. Suitable for all Oxford retail
                environments including managed Westgate Oxford units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Staff area privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal staff area partitions, back-office glazing and stockroom
                windows where privacy from the sales floor is needed. Applied to
                internal glazing within the unit rather than the external shopfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oxford retail areas */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Oxford retail areas we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Westgate Oxford OX1</strong> —
              Oxford&apos;s principal modern retail destination, opened 2017, with over
              100 retail, restaurant and cinema units across five levels in the
              city centre. Standard window film applications across Westgate
              include fitting room frosted film, solar-control film on south-facing
              unit glazing, DDA manifestation on glass doors and partitions, and
              branded decorative film on unit frontages. We follow Westgate Oxford
              landlord site access protocols for all installations.
            </p>
            <p>
              <strong className="text-foreground">Oxford city centre high street OX1</strong> —
              Cornmarket Street, Queen Street and the High Street form Oxford&apos;s
              traditional retail core, with a mix of national chains and independent
              retailers in period and refurbished premises. Glazed frontages here
              combine historic building constraints with modern retail window film
              requirements — frosted, manifestation and solar-control applications
              are all common across the OX1 city centre zone.
            </p>
            <p>
              <strong className="text-foreground">The Covered Market OX1</strong> —
              Oxford&apos;s historic indoor market, with 50+ independent traders across
              a Victorian arcade structure. Individual stalls and units have varied
              glazing arrangements suited to decorative, etched-effect and frosted
              film. A distinctive retail environment with a significant independent
              operator base.
            </p>
            <p>
              <strong className="text-foreground">Cowley Road and south-east Oxford OX4</strong> —
              Oxford&apos;s independent retail and hospitality quarter along the Cowley
              Road corridor. A dense and diverse strip of independent shops, caf&eacute;s,
              restaurants and galleries with street-facing glazed frontages where
              frosted, decorative and etched-effect window film treatments are
              particularly appropriate for independent character retail.
            </p>
            <p>
              <strong className="text-foreground">Oxford Retail Park, Templars Square and Kassam OX4</strong> —
              Oxford&apos;s Cowley edge-of-town retail zone, with major national retailers
              in large-format buildings on exposed southerly sites. Solar-control
              film and DDA manifestation are the primary applications across the
              OX4 retail park portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract retail window film — Oxford and Oxfordshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Oxford-area retail fit-out contractors, shopfitters, print companies
              and sign companies managing window film programmes across multiple
              Oxfordshire retail sites, WRPX operates as a white-label installation
              partner. We attend under your instructions, follow centre access
              protocols, complete each unit to specification and provide photographic
              sign-off ready to pass to your end client.
            </p>
            <p>
              RAMS documentation is available as standard. For national retailers
              or print companies managing Oxford units as part of a wider UK window
              film campaign — seasonal graphics, frosted film rollout, manifestation
              programme — our South Yorkshire base allows us to schedule Oxford
              alongside Midlands locations within a single mobilisation, keeping
              travel costs efficient.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Oxford retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Oxford and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service overview</p>
            </Link>
            <Link href="/window-film/retail-window-film-reading/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Reading</p>
              <p className="mt-1 text-xs text-muted">Retail film across Reading and Berkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail film across Birmingham and the Midlands</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-oxford/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Oxford</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Oxford and Oxfordshire care homes</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy and frosted film for retail fitting rooms</p>
            </Link>
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Installation</p>
              <p className="mt-1 text-xs text-muted">White-label window film for trade partners</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Oxford retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Oxford retail location, glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or a branded/promotional treatment. We&apos;ll confirm specification
              and price. Subcontract and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Oxford Retail Quote →
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
