import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Glasgow | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Glasgow — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Glasgow, University of Strathclyde, Glasgow Caledonian University and all major PBSA operators across G1, G3, G4, G11, G12 and the wider Glasgow area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-glasgow/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Glasgow — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Glasgow. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Glasgow, University of Strathclyde, Glasgow Caledonian University and all major PBSA operators across G1, G3, G4, G11, G12 and wider Glasgow. Commercial-grade film, photographic sign-off, white-label for FM contractors."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Student Accommodation Vinyl Wrapping",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Glasgow",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-glasgow/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Glasgow PBSA — heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces faster than almost any other interior surface. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Glasgow site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Glasgow student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Glasgow student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours from Glasgow city centre via the M1 north and M74 north. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Glasgow programmes — full floors or complete blocks in G1, G3 or G12 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Glasgow universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Glasgow and the wider central Scotland area. University of Glasgow — approximately 30,000 students — has its main Gilmorehill campus in the West End G12 area, with university-managed halls across G12, G3 and G1. University of Strathclyde — approximately 25,000 students — occupies the John Anderson Campus in the city centre G1 area adjacent to George Square, with managed halls and PBSA partnerships close to the campus. Glasgow Caledonian University — approximately 17,000 students — is based in the Cowcaddens G4 area, with its student population spread across central and north Glasgow PBSA. PBSA operators active in Glasgow include Unite Students, Sanctuary Students, Fresh Student Living, True Student and a range of private developers with blocks across G1, G3, G4 and G41. We work white-label for FM contractors managing refurbishment programmes on behalf of any Glasgow operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Glasgow student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Glasgow student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Glasgow programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Glasgow student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Glasgow programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Glasgow postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Glasgow PBSA postcodes — G1 (city centre, Merchant City, Strathclyde campus), G2 (city centre, Buchanan Street, Hope Street), G3 (Finnieston, Anderston, Kelvingrove — key PBSA and university halls zone), G4 (Cowcaddens, Townhead, Dobbies Loan — GCU campus area), G5 (Laurieston, Hutchesontown, Crown Street), G11 (Partick, Whiteinch), G12 (Hillhead, Hyndland, Kelvinside — University of Glasgow West End campus zone), G13 (Scotstounhill, Yoker, Knightswood), G20 (Maryhill, North Kelvinside, Ruchill), G31 (Dennistoun, Camlachie), G40 (Bridgeton, Parkhead, Dalmarnock), G41 (Pollokshields, Strathbungo, Shawlands), G42 (Mount Florida, Battlefield, Langside) — plus the wider Glasgow area including East Kilbride G74, Motherwell ML1, Hamilton ML3 and the M8 corridor. WRPX is based in South Yorkshire, approximately 3 hours from Glasgow city centre via the M1 north and M74 north — Glasgow is within our extended service area for multi-day void-period programmes.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapGlasgowPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-student-accommodation/" className="text-accent hover:underline">Student Accommodation Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Glasgow &amp; Central Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Glasgow. Kitchen unit doors, bedroom furniture panels, communal surfaces and
            reception areas wrapped during void periods — no replacement, no disruption,
            photographic sign-off on completion. University of Glasgow, University of
            Strathclyde, Glasgow Caledonian University and all major PBSA operators
            across G1, G3, G4, G11, G12 and the wider Glasgow area. White-label for FM
            contractors. Approximately 3 hours from our South Yorkshire base via the
            M1 north and M74 north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Glasgow Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Glasgow PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is Scotland&apos;s largest city and one of the UK&apos;s major
              student destinations, home to three substantial universities with a
              combined full-time student population of approximately 72,000. University
              of Glasgow — around 30,000 students — occupies the Victorian Gilmorehill
              campus in Hillhead G12, a PBSA-dense zone with university halls and
              private operator blocks concentrated in the G12, G11 and G3 postcodes.
              University of Strathclyde — around 25,000 students — is city-centre based
              in the G1 John Anderson Campus, close to George Square, with managed
              halls and PBSA provision in G1, G4 and the inner north of the city.
            </p>
            <p>
              Glasgow Caledonian University, based at Cowcaddens G4, adds approximately
              17,000 students to the city&apos;s PBSA demand base. Together, the three
              institutions create one of the UK&apos;s largest and most concentrated
              student accommodation markets outside London and Manchester. The Glasgow
              PBSA stock is a mix of purpose-built modern developments — Unite Students,
              Sanctuary Students, True Student and Fresh Student Living all operate
              significant Glasgow portfolios — alongside older conversions and
              university-managed traditional halls.
            </p>
            <p>
              Summer void refurbishments in Glasgow PBSA follow the same pattern as
              other major UK student cities: a concentrated window between late June
              and mid-September in which operators carry out maintenance, deep cleans
              and surface refreshes before the new academic intake. Kitchen unit doors,
              communal area furniture and bedroom furniture panels are the primary
              vinyl wrap applications in Glasgow PBSA — high-contact surfaces that
              show wear faster than any other interior finish and are expensive to
              replace without replacement of the whole unit.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Glasgow for multi-day
              void-period programmes. The M1 north to the M18 east and then the M74
              north connects South Yorkshire to Glasgow in approximately 3 hours in
              off-peak conditions. For programmes requiring 2 or more days on site,
              our team travels up on the Sunday evening before the programme starts
              and works through to completion before returning south.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow PBSA surfaces we wrap
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in shared student accommodation. Kitchen
                door fronts and drawer faces in communal kitchens absorb daily
                impact, cleaning chemicals and general abuse from multiple occupants.
                Commercial vinyl extends usable life by 5 to 8 years.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Studio and en-suite bedroom units in Glasgow PBSA blocks typically
                include a kitchenette area with under-counter fridge, hob and
                microwave. Kitchenette door fronts and drawer panels are wrapped
                during the void to a fresh finish for new tenants.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe and furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                surfaces in Glasgow student bedrooms are wrapped to a consistent
                finish across the block — transforming the visual standard of a
                room without replacement costs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and common area doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and fire door leaf surfaces in Glasgow PBSA
                blocks accumulate scuffs, grease marks and impact damage across
                the academic year. Wrapping during the void restores a clean,
                consistent finish without repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal lounge surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia panels, communal lounge storage unit
                fronts and media wall cladding panels can all be wrapped in
                commercial film — refreshing the first impression of a Glasgow
                PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Glasgow PBSA programmes
                across multiple blocks or sites, we operate white-label and
                provide consistent photographic sign-off, RAMS documentation and
                scheduling to your facilities team&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glasgow universities detail */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Glasgow</strong> —
              approximately 30,000 students — occupies the Gilmorehill campus in
              the West End G12 area, one of the most architecturally distinctive
              university campuses in the UK. University-managed halls are concentrated
              in the G12, G11 and G3 West End and Finnieston zones. PBSA operators
              including Unite Students and Sanctuary Students operate blocks in the
              G3 Anderston and Finnieston area to serve the University of Glasgow
              student catchment.
            </p>
            <p>
              <strong className="text-foreground">University of Strathclyde</strong> —
              approximately 25,000 students — occupies the John Anderson Campus in
              central Glasgow G1, directly adjacent to the Merchant City and the
              Cathedral area. Strathclyde&apos;s managed halls and PBSA operator
              buildings are concentrated in the G1 and G4 city-centre zone, with
              further PBSA provision in the Cowcaddens G4 area. The city-centre
              location means Strathclyde PBSA stock is mixed-vintage, combining
              modern purpose-built blocks with conversions of older commercial and
              residential buildings.
            </p>
            <p>
              <strong className="text-foreground">Glasgow Caledonian University</strong> —
              approximately 17,000 students — is based on the Cowcaddens G4 campus.
              GCU student accommodation is a mix of managed halls in G4 and PBSA
              operator provision across the central Glasgow G1, G2 and G4 zone.
              The Cowcaddens and Sighthill areas carry a high proportion of
              1960s and 1970s converted and purpose-built student accommodation
              stock where interior finishes are ageing and vinyl wrap offers a
              cost-effective void-period refresh.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Glasgow void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow programmes are planned and scoped in advance of the summer void.
              We typically carry out a survey visit in May or June — or work from
              your facilities team&apos;s surface inventory and photography if a
              pre-void site visit isn&apos;t practical. Scope, programme duration and
              access logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Glasgow programmes our team stays overnight near the site.
              We work flat by flat or floor by floor through the block, completing
              each unit to photographic sign-off standard before moving to the next.
              Your facilities team gets a progress update at the end of each day and
              a full photo package on programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Glasgow programme as standard
              — covering surface preparation, film application materials, heat tool
              use and access protocols within a live care environment. All film
              products are specified to commercial architectural grade, with
              appropriate adhesive chemistry for the substrate type present at each
              Glasgow site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Glasgow PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Glasgow student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Glasgow Survey →
              </Link>
              <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
                Student Accommodation Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
