import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Reading | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Reading and Berkshire — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Oracle Shopping Centre, Broad Street Mall, The Meadway and all Reading RG retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-reading/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Reading — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Reading and Berkshire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Oracle Shopping Centre RG1, Broad Street Mall RG1, The Meadway Tilehurst RG31, Calcot Retail Park RG31, Winnersh Triangle RG41 and all Reading and Berkshire RG retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Reading", item: "https://www.wrpx.co.uk/window-film/retail-window-film-reading/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Reading retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Reading and Berkshire. Typical uses include fitting room and changing area glazing in clothing retailers at the Oracle Shopping Centre RG1 and Broad Street Mall RG1 (full-height frosted for complete privacy, or lower-panel frosted with clear glass above to retain natural light and visual merchandising), staff area partitions and back-office glazing within Reading retail units, and street-facing glazed frontages on Oxford Road RG1 and King&apos;s Road RG1 where a frosted band improves the display arrangement or controls the shopfront visual. The independent retail quarter around Caversham Road and the Caversham RG4 high street is also suited to decorative frosted and etched-effect window film treatments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at the Oracle or Reading retail parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Oracle Shopping Centre — Reading&apos;s principal covered retail destination in RG1, with over 90 retail and restaurant units — has individual unit glazed frontages where solar gain affects temperature and merchandise presentation on south and west-facing positions along the riverside and upper levels. The large-format retail parks on the outskirts of Reading — Calcot Retail Park RG31, Winnersh Triangle RG41, Reading Retail Park RG30 — have substantial glazed retail buildings on exposed edge-of-town sites where solar-control film reduces solar heat gain by 40 to 79%. Reading&apos;s position in the Thames Valley means higher sun hours than many UK cities on south and west-facing glazed retail frontages.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA glass manifestation and do Reading shops need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DDA-compliant glass manifestation — frosted, etched-effect or branded vinyl strips applied at 850mm and 1400mm height to full-height glazed panels and glass doors — is required by Building Regulations for all new and substantially refurbished commercial glazed installations in the UK, including retail units across Reading. Retailers at the Oracle Shopping Centre RG1 and Reading town centre units frequently need manifestation on internal glass doors, glazed partition walls within the sales floor, and full-height shop front glazed panels. We install standard frosted bands, etched-effect bands, dot-pattern manifestation and branded options that combine compliance with the retailer&apos;s visual identity.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install retail window film at a Reading store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 2 hours from Reading via the M1 south and M4 west. Survey visits for Reading retail units can typically be arranged within a few days of enquiry. A typical Reading fitting room installation — frosted film on two to four glazed panels — takes 2 to 4 hours. Larger Oracle Shopping Centre units or multi-unit Reading town centre projects are scoped individually. We can install outside trading hours to minimise disruption to the Reading retail operation — early morning, late evening or overnight access are all options we work around.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle multi-site retail window film programmes across Reading and Berkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for retailers, facilities managers, fit-out contractors and sign companies managing window film programmes across multiple Reading and Berkshire retail locations, WRPX operates as a white-label installation partner. We attend under your instructions, follow your brand and site protocols, and provide photographic sign-off on completion of each unit. For national retailers managing Reading alongside other UK sites — Bristol, Portsmouth, Southampton, Birmingham, Leeds, Manchester — our coverage across those locations means we can deliver consistency across a multi-site programme without sourcing separate local installers at each location. RAMS documentation is available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Reading and Berkshire postcodes do you cover for retail window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Reading and Berkshire RG retail postcodes — RG1 (Reading city centre — the Oracle Shopping Centre, Broad Street Mall and the Oxford Road, King&apos;s Road and Friar Street prime retail frontages), RG2 (Reading south — Whitley retail provision and neighbourhood shopping), RG4 (Caversham — north Reading high street and neighbourhood retail), RG6 (Earley — Maiden Place and Earley neighbourhood retail, close to the University of Reading Whiteknights campus), RG12 (Bracknell — The Lexicon Bracknell, east Berkshire&apos;s major retail destination with covered and open mall), RG14 (Newbury — Newbury town centre retail and The Parkway Shopping Centre), RG21 (Basingstoke — north Hampshire retail, well within the Berkshire operational zone), RG31 (Calcot, Tilehurst — Calcot Retail Park and The Meadway neighbourhood retail west of Reading). Reading and Berkshire are approximately 2 hours from our South Yorkshire base via the M1 south and M4 west.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmReadingPage() {
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
            <span className="text-foreground">Reading</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Reading &amp; Berkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Reading
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Reading and Berkshire.
            Frosted privacy film for fitting rooms and staff areas, solar-control film
            for glazed shop fronts and retail parks, branded decorative vinyl and
            DDA-compliant glass manifestation. The Oracle Shopping Centre, Broad Street
            Mall, Calcot Retail Park, Bracknell Lexicon and all Reading and Berkshire
            RG retail postcodes. Trading-hours and out-of-hours installation available.
            Approximately 2 hours from our South Yorkshire base via the M1 and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Reading Retail Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Reading retail market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Reading retail window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Reading is the commercial and retail capital of Berkshire and the
              wider Thames Valley, with a retail offer that extends from the Oracle
              Shopping Centre on the Kennet riverfront through the Broad Street
              pedestrian core to large-format retail parks on the western and eastern
              outskirts. The Oracle — Reading&apos;s principal covered retail destination
              in RG1 — anchors a prime catchment area covering much of Berkshire,
              north Hampshire and south Oxfordshire, bringing strong national and
              international retailers to the city.
            </p>
            <p>
              Reading&apos;s position on the Elizabeth line — under 30 minutes from
              central London — has driven sustained retail investment in the city
              centre. The Broad Street Mall and the surrounding King&apos;s Road and
              Oxford Road retail frontages carry a dense mix of high street,
              independent and food-and-beverage retail. Newbury RG14, Bracknell
              RG12 and the Basingstoke fringe serve wider Berkshire and north
              Hampshire retail catchments with substantial glazed retail buildings
              on out-of-town sites.
            </p>
            <p>
              Frosted privacy film for fitting rooms and staff areas, solar-control
              film for south-facing glazed retail frontages and DDA glass
              manifestation on full-height shop front glazing are the three most
              consistent Reading retail window film applications. The Oracle&apos;s
              riverside south and west-facing unit positions and the exposed
              Calcot Retail Park RG31 edge-of-town site both experience significant
              solar gain where solar-control film delivers a measurable improvement
              in comfort and energy cost.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from Reading
              via the M1 south and M4 west. Reading retail sites benefit from fast
              survey and installation turnaround without the premium that a more
              distant national installer would need to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications in Reading
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted film — fitting rooms and staff areas
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or lower-panel frosted film for fitting room glazing,
                staff area partitions and back-office glazing in Reading retail
                units. Frosted bands retain natural light while providing complete
                privacy where required.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — shopfront glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed retail frontages. Controls glare on merchandise, reduces
                temperature and UV fading of stock and fittings — relevant for
                Oracle waterfront units and Reading retail park edge-of-town sites.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation for full-height glazed
                panels, glass doors and internal glass partitions throughout
                Reading retail units — frosted bands, etched-effect, dot pattern
                or branded options at the required 850mm and 1400mm heights.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed or cut decorative film incorporating the retailer&apos;s brand
                identity on shopfront glazing, internal partitions or fitting room
                doors — combining visual identity with privacy or solar control
                in a single Reading retail film installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Temporary or semi-permanent promotional film and vinyl graphics
                for Reading retail units — sale campaigns, new collections,
                seasonal promotions. Removable film options for short-campaign
                use across Oracle, Broad Street and Reading retail park sites.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror and privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Reading retail office areas,
                consultation rooms and back-office glazing — full privacy
                from the corridor or sales floor while maintaining natural
                light internally. Suitable for opticians, salons, banks and
                professional services in Reading retail environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reading retail zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Reading retail zones and locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Oracle Shopping Centre RG1</strong> —
              Reading&apos;s principal retail destination on the Kennet riverside. Over
              90 retail and restaurant units across covered and open-air mall format.
              South and west-facing river-frontage units are most exposed to solar
              gain. DDA manifestation is required on all full-height glazed frontages
              within the mall. We work around the Oracle&apos;s delivery and access
              schedules for out-of-hours installation where required.
            </p>
            <p>
              <strong className="text-foreground">Broad Street Mall and town centre RG1</strong> —
              Reading&apos;s secondary covered mall and the surrounding Broad Street
              pedestrian core, King&apos;s Road and Oxford Road retail frontages. A mix
              of high-street chains, independent retailers and food-and-beverage
              operators with varied glazing requirements from frosted fitting rooms
              to promotional vinyl and solar-control film.
            </p>
            <p>
              <strong className="text-foreground">Calcot Retail Park RG31 and west Reading</strong> —
              Calcot Retail Park on the A4 west of Reading is an established
              large-format retail location with DIY, furniture and home retail
              units on exposed edge-of-town sites. The Meadway Tilehurst RG31
              provides neighbourhood retail provision to the west of the city.
              Both benefit from solar-control film on south and west-facing glazed
              facades.
            </p>
            <p>
              <strong className="text-foreground">Bracknell Lexicon RG12</strong> —
              Bracknell&apos;s major retail destination following the town centre
              regeneration. New-build retail and leisure units with large glazed
              frontages where DDA manifestation, solar-control film and decorative
              branded vinyl are all in common specification.
            </p>
            <p>
              <strong className="text-foreground">Newbury RG14 and wider Berkshire</strong> —
              Newbury town centre and The Parkway Shopping Centre serve west Berkshire
              retail. Basingstoke RG21-RG24 and the Festival Place shopping centre
              are within the operational range we cover across the Berkshire and
              north Hampshire retail corridor.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and multi-site retail window film — Reading
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For retailers, facilities managers, fit-out contractors and sign
              companies managing window film programmes across multiple Reading
              and Berkshire retail sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              your brand and site protocols, and provide photographic sign-off
              on completion of each unit.
            </p>
            <p>
              RAMS documentation is available as standard for all Reading and
              Berkshire retail programmes. For national retailers managing
              Reading alongside other UK cities — Bristol, Portsmouth, Southampton,
              Birmingham, Leeds, Manchester — our coverage of those locations
              means we can deliver installation consistency across a multi-site
              programme without sourcing separate local installers at each location.
            </p>
            <p>
              For print companies, sign companies and agencies supplying window
              film or retail graphics to Reading retailers, we are available as
              a white-label installation-only partner. We install, photograph,
              sign off and report back to you. The end client sees your brand,
              not ours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Reading retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Reading and south England window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/retail-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full retail window film service</p>
            </Link>
            <Link href="/window-film/retail-window-film-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Portsmouth</p>
              <p className="mt-1 text-xs text-muted">Window film for Portsmouth and Hampshire retail</p>
            </Link>
            <Link href="/window-film/retail-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Window film for Bristol and Somerset retail</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-reading/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Reading</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Reading</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for fitting rooms and staff areas</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for retail glazing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Reading retail window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Reading retail location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Multi-site and
              white-label subcontract enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Reading Retail Quote →
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
