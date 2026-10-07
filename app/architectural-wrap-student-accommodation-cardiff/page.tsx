import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Cardiff | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Cardiff — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Cardiff University, Cardiff Metropolitan University and all major PBSA operators across CF10, CF24, CF5, CF11 and the wider Cardiff area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-cardiff/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Cardiff — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Cardiff. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Cardiff University, Cardiff Metropolitan University and all major PBSA operators across CF10, CF24, CF5, CF11 and the wider Cardiff area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Cardiff",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-cardiff/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Cardiff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Cardiff PBSA — shared student kitchens in purpose-built halls and converted Victorian terraced properties accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Cardiff site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Cardiff student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Cardiff student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours 45 minutes to 3 hours 30 minutes from Cardiff city centre via the M1 south, M42, M5 south and M4 west into Wales. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Cardiff programmes — full floors or complete blocks in CF10, CF24 or CF11 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Cardiff universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Cardiff and the wider South Wales area. Cardiff University — approximately 32,000 students — has its main campus in the civic CF10 area around Park Place and Museum Avenue, with the Medical and Dental schools at the Heath Park campus in CF14. University-managed halls are spread across CF10, CF24 and the inner city. Cardiff Metropolitan University — approximately 12,000 students — operates from the Llandaff campus in CF5 and the Cyncoed campus in CF23, with student accommodation in those areas and city-centre PBSA provision. PBSA operators active in Cardiff include Unite Students, iQ Student Accommodation, Vita Student, Fresh Student Living, Chapter and a range of private developers with blocks across CF10, CF11 and CF24. We work white-label for FM contractors managing refurbishment programmes on behalf of any Cardiff operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Cardiff student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Cardiff programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Cardiff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Cardiff student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Cardiff programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Cardiff postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Cardiff PBSA postcodes — CF10 (city centre, Cathays Park civic area, Central Square, St David's area), CF11 (Pontcanna, Canton, Leckwith, Grangetown — student and young professional zones along the Taff), CF14 (Whitchurch, Rhiwbina, Heath Park — Cardiff University Medical School campus), CF23 (Cyncoed, Pen-y-Lan, Llanishen, Pontprennau — Cardiff Met Cyncoed campus area), CF24 (Roath, Cathays, Plasnewydd, Adamsdown — the primary student residential area; Cathays is arguably the most student-dense neighbourhood in Wales), CF3 (Rumney, Llanrumney, St Mellons, Old St Mellons), CF5 (Llandaff, Fairwater, Ely, Caerau — Cardiff Met Llandaff campus), CF15 (Radyr, Pentyrch, Creigiau, Tongwynlais), CF64 (Barry and Penarth in the Vale of Glamorgan). WRPX is based in South Yorkshire, approximately 2 hours 45 minutes to 3 hours 30 minutes from Cardiff via the M1 south, M42, M5 and M4 west.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Cardiff. Kitchen unit doors, bedroom furniture panels, communal surfaces and
            reception areas wrapped during void periods — no replacement, no disruption,
            photographic sign-off on completion. Cardiff University, Cardiff Metropolitan
            University and all major PBSA operators across CF10, CF24, CF5, CF11 and
            the wider Cardiff area. White-label for FM contractors. Approximately
            2 hours 45 minutes to 3 hours 30 minutes from our South Yorkshire base
            via the M1 south, M42, M5 and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Cardiff Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Cardiff PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is Wales&apos; capital and the country&apos;s largest student city,
              with two major universities and a combined full-time student population
              of approximately 44,000. Cardiff University — around 32,000 students —
              is one of the UK&apos;s leading research universities, with its main
              civic campus around Park Place and Museum Avenue in the CF10 city centre
              and specialist campuses including the Heath Park Medical and Dental School
              in CF14.
            </p>
            <p>
              Cardiff Metropolitan University, operating across the Llandaff campus
              in CF5 and the Cyncoed campus in CF23, has approximately 12,000 students.
              Its accommodation and student PBSA provision is spread across those two
              campus zones and the wider city-centre student corridor. Together, the two
              universities generate a significant demand for PBSA stock, private rented
              accommodation and regular void-period refurbishment programmes.
            </p>
            <p>
              Cardiff&apos;s student geography is concentrated in the Cathays CF24 and
              Roath CF24 areas — arguably the most student-dense neighbourhoods in Wales.
              The Victorian terrace streets of Cathays, running north from the civic
              quarter towards the Glamorgan County Cricket Ground, are almost entirely
              student-occupied. Purpose-built PBSA blocks from Unite Students, iQ Student
              Accommodation, Vita Student, Fresh Student Living and private developers
              are concentrated in CF10 and CF11 alongside converted terrace houses.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Cardiff for multi-day
              void-period programmes. The M1 south from Doncaster connects via the M42
              through Birmingham, then the M5 south to Bristol and the M4 west across
              the Severn Bridge into Wales, arriving in Cardiff in approximately
              2 hours 45 minutes to 3 hours 30 minutes in off-peak conditions. For
              multi-day Cardiff programmes, our team stays locally rather than
              commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff PBSA surfaces we wrap
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
                Studio and en-suite bedroom units in Cardiff PBSA blocks typically
                include a kitchenette area. Kitchenette door fronts and drawer panels
                are wrapped during the void to a fresh finish for new tenants.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe and furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                surfaces wrapped to a consistent finish across the block —
                transforming the visual standard of a room without replacement costs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and common area doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and fire door leaf surfaces in Cardiff PBSA
                blocks accumulate scuffs and impact damage across the academic year.
                Wrapping during the void restores a clean, consistent finish without
                repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal lounge surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia panels, communal lounge storage unit fronts
                and media wall cladding panels — refreshing the first impression
                of a Cardiff PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Cardiff PBSA programmes
                across multiple blocks or sites, we operate white-label and
                provide consistent photographic sign-off, RAMS documentation and
                scheduling to your facilities team&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiff universities detail */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Cardiff University</strong> —
              approximately 32,000 students — is Wales&apos; largest and leading
              research university, a member of the Russell Group. The main campus
              is centred on the civic quarter in CF10, with the Main Building on
              Park Place, the Law and Social Sciences Building on Museum Avenue, and
              the Students&apos; Union on Park Place. University-managed halls are
              spread across CF10 and CF24, including Talybont halls at the northern
              end of the Cathays student area and several purpose-built blocks in
              the Roath CF24 area. The Medical and Dental School at Heath Park CF14
              has its own halls provision on campus.
            </p>
            <p>
              <strong className="text-foreground">Cardiff Metropolitan University</strong> —
              approximately 12,000 students — is a specialist teaching university
              with two main Cardiff campuses. The Llandaff campus in CF5 on Western
              Avenue has purpose-built accommodation in the surrounding residential
              area. The Cyncoed campus in CF23, set in parkland in north-east Cardiff,
              focuses on sport and education faculty provision, with student
              accommodation nearby. The multi-campus structure means PBSA demand
              is distributed across the south-west and north-east Cardiff corridors
              as well as the city centre.
            </p>
            <p>
              <strong className="text-foreground">PBSA operators</strong> active in
              Cardiff include Unite Students, iQ Student Accommodation, Vita Student,
              Fresh Student Living, Chapter and a range of private developers and
              specialist PBSA landlords. City-centre blocks are concentrated in CF10
              — particularly in the Central Square area south of the Civic Centre —
              and in the Roath CF24 and Canton CF5 corridors. We work white-label for
              FM contractors and estates teams managing refurbishment programmes
              across any Cardiff operator portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Cardiff void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff programmes are planned and scoped in advance of the summer void.
              We typically carry out a survey visit in May or June — or work from
              your facilities team&apos;s surface inventory and photography if a
              pre-void site visit isn&apos;t practical. Scope, programme duration and
              access logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Cardiff programmes our team travels west and stays overnight
              near the site. We work flat by flat or floor by floor through the block,
              completing each unit to photographic sign-off standard before moving to the
              next. Your facilities team receives a progress update at the end of each day
              and a full photo package on programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Cardiff programme as standard
              — covering surface preparation, film application materials, heat tool use
              and access protocols. All film products are specified to commercial
              architectural grade, with appropriate adhesive chemistry for the substrate
              type at each Cardiff site.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Cardiff via the M1 south,
              M42, M5 and M4 west, arriving in approximately 2 hours 45 minutes to
              3 hours 30 minutes in off-peak conditions. We stay locally during
              multi-day Cardiff programmes rather than commuting, ensuring an early
              start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Cardiff PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Cardiff student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Cardiff Survey →
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
