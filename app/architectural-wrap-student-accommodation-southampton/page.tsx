import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Southampton | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Southampton — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Southampton, Solent University and all major PBSA operators across SO14, SO15, SO16, SO17 and the wider Southampton area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-southampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Southampton — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Southampton. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Southampton, Solent University and all major PBSA operators across SO14, SO15, SO16, SO17 and the wider Southampton area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Southampton",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-southampton/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Southampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Southampton PBSA — shared student kitchens in purpose-built halls and converted Victorian terraced properties accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Southampton site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Southampton student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Southampton student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours to 3 hours 30 minutes from Southampton city centre via the M1 south, M25 and M3 south. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Southampton programmes — full floors or complete blocks in SO14, SO15 or SO17 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Southampton universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Southampton and the wider Hampshire area. University of Southampton — approximately 25,000 students — has its main Highfield campus in SO17, a large parkland site south of Southampton Common with significant university-managed hall provision in the SO17 corridor. The Avenue Campus, Winchester School of Art, the National Oceanography Centre at the Waterfront Campus and the Southampton General Hospital campus add further sites across the city. Solent University — approximately 10,000 students — operates from its city-centre campus in SO14 East Park Terrace, with student accommodation in the surrounding SO14 and SO15 areas. PBSA operators active in Southampton include Unite Students, iQ Student Accommodation, Student Roost, Sanctuary Students and a range of private developers with blocks across SO14, SO15 and SO17. We work white-label for FM contractors managing refurbishment programmes on behalf of any Southampton operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Southampton student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Southampton programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Southampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Southampton student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Southampton programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Southampton postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Southampton PBSA postcodes — SO14 (Southampton city centre, Solent University campus, Polygon, Newtown, Nicholstown — substantial PBSA and HMO provision in the city centre zone), SO15 (Freemantle, Shirley, Regents Park, Millbrook — west city residential and student zone), SO16 (Bassett, Rownhams, Nursling, North Baddesley — outer north-west, also covering Highfield SO17 western border streets), SO17 (Highfield — the primary University of Southampton campus postcode; Portswood is the principal student commercial and residential street zone immediately adjacent to the Highfield campus with high HMO density along Portswood Road and Lodge Road), SO18 (Bitterne, Bitterne Park, Thornhill — east Southampton residential), SO19 (Sholing, Woolston, Netley — south-east residential). Winchester SO22/SO23 falls within extended service range as does Eastleigh SO50 and Hedge End SO30. WRPX is based in South Yorkshire, approximately 3 hours to 3 hours 30 minutes from Southampton via the M1 south, M25 and M3 south.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapSouthamptonPage() {
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
            <span className="text-foreground">Southampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Southampton &amp; Hampshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Southampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Southampton. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods —
            no replacement, no disruption, photographic sign-off on completion.
            University of Southampton, Solent University and all major PBSA
            operators across SO14, SO15, SO16, SO17 and the wider Southampton area.
            White-label for FM contractors. Approximately 3 hours to 3 hours 30
            minutes from our South Yorkshire base via the M1 south, M25 and M3 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Southampton Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Southampton PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Southampton is one of the south of England&apos;s major university cities,
              with two universities and a combined full-time student population of
              approximately 35,000. University of Southampton — around 25,000 students
              — is a Russell Group research university with its main Highfield campus
              in SO17, set in 150 acres of parkland south of Southampton Common. The
              Highfield campus has extensive university-managed hall provision within
              the SO17 campus envelope and in the surrounding Portswood residential
              zone, which is Southampton&apos;s densest student area.
            </p>
            <p>
              Solent University — approximately 10,000 students — operates from
              its city-centre campus at East Park Terrace SO14, with purpose-built
              student accommodation and PBSA provision concentrated in the SO14 and
              SO15 city-centre and inner-residential corridors. Solent&apos;s urban
              campus location generates demand for both purpose-built PBSA blocks and
              private HMO accommodation across the adjacent Polygon and Newtown areas.
            </p>
            <p>
              Southampton&apos;s PBSA sector has expanded significantly over the past
              decade, with major operators including Unite Students, iQ Student
              Accommodation, Student Roost and Sanctuary Students all active in the
              city. Purpose-built blocks are concentrated in the SO14 city-centre
              zone, the SO17 Highfield corridor and the transitional areas between
              the two campuses. The HMO market in Portswood SO17 — the student
              residential district immediately adjacent to the Highfield campus —
              is one of the most intensively student-occupied areas in southern England.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Southampton for
              multi-day void-period programmes. The M1 south from Doncaster connects
              via the M25 orbital at Watford, then the M3 south from Junction 12 into
              Hampshire, arriving in Southampton in approximately 3 hours to 3 hours
              30 minutes in off-peak conditions. For multi-day Southampton programmes,
              our team stays locally rather than commuting, ensuring an early start on
              site each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton PBSA surfaces we wrap
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in shared student accommodation. Kitchen
                door fronts and drawer faces in communal kitchens absorb daily
                impact, cleaning chemicals and general use from multiple occupants.
                Commercial vinyl extends usable life by 5 to 8 years.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Studio and en-suite bedroom units in Southampton PBSA blocks
                typically include a kitchenette area. Kitchenette door fronts and
                drawer panels are wrapped during the void to a fresh finish for
                new tenants.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe and furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit surfaces
                wrapped to a consistent finish across the block — transforming the
                visual standard of a room without replacement costs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and common area doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and fire door leaf surfaces in Southampton
                PBSA blocks accumulate scuffs and impact damage across the academic
                year. Wrapping during the void restores a clean, consistent finish
                without repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal lounge surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia panels, communal lounge storage unit fronts
                and media wall cladding panels — refreshing the first impression
                of a Southampton PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Southampton PBSA programmes
                across multiple blocks or sites, we operate white-label and provide
                consistent photographic sign-off, RAMS documentation and scheduling
                to your facilities team&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University detail section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Southampton</strong> —
              approximately 25,000 students — is a leading Russell Group research
              university, ranked consistently in the UK&apos;s top 15. The main
              Highfield campus SO17 is a large, self-contained parkland site with
              significant university-managed hall stock within the campus boundary —
              including Mayflower Halls, Glen Eyre Halls and several residential
              blocks along the eastern campus perimeter. The Portswood Road and
              Lodge Road corridor immediately adjacent to the campus is the densest
              HMO zone in Southampton, with streets almost entirely occupied by
              student households. The University also operates the Winchester School
              of Art SO23, the Avenue Campus SO17, and the Waterfront Campus at
              the National Oceanography Centre in Southampton docks SO14.
            </p>
            <p>
              <strong className="text-foreground">Solent University</strong> —
              approximately 10,000 students — is a specialist teaching university
              with a central campus on East Park Terrace SO14 in the heart of
              Southampton city centre, adjacent to Civic Centre and the cultural
              quarter. Solent&apos;s city-centre location means student accommodation
              is distributed across purpose-built PBSA blocks in SO14 and the
              adjacent Polygon and Newtown residential areas in SO15, as well as
              private HMO accommodation across the wider city.
            </p>
            <p>
              <strong className="text-foreground">PBSA operators</strong> active in
              Southampton include Unite Students, iQ Student Accommodation, Student
              Roost, Sanctuary Students and a growing range of private developers.
              Purpose-built PBSA stock is expanding in the SO14 city-centre zone
              as part of ongoing regeneration, and in the SO17 corridor linking
              the Highfield campus to the city centre. We work white-label for FM
              contractors and estates teams managing refurbishment programmes across
              any Southampton operator portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Southampton void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Southampton programmes are planned and scoped in advance of the summer
              void. We typically carry out a survey visit in May or June — or work
              from your facilities team&apos;s surface inventory and photography if a
              pre-void site visit isn&apos;t practical. Scope, programme duration and
              access logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Southampton programmes our team travels south and stays
              overnight near the site. We work flat by flat or floor by floor through
              the block, completing each unit to photographic sign-off standard before
              moving to the next. Your facilities team receives a progress update at the
              end of each day and a full photo package on programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Southampton programme as standard
              — covering surface preparation, film application materials, heat tool use
              and access protocols. All film products are specified to commercial
              architectural grade, with appropriate adhesive chemistry for the substrate
              type at each Southampton site.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Southampton via the M1
              south, M25 and M3 south, arriving in approximately 3 hours to 3 hours
              30 minutes in off-peak conditions. We stay locally during multi-day
              Southampton programmes rather than commuting, ensuring an early start
              on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Southampton student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Southampton PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Southampton student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Southampton Survey →
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
