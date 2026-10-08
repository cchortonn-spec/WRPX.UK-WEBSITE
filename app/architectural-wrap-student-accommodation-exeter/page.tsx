import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Exeter | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Exeter — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Exeter, University of Exeter Medical School and all major PBSA operators across EX1, EX2, EX4 and the wider Exeter area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-exeter/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Exeter — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Exeter. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Exeter and all major PBSA operators across EX1, EX2, EX4 and the wider Exeter area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Exeter",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-exeter/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Exeter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Exeter PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Exeter site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Exeter student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Exeter student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes to 4 hours from Exeter city centre via the M1 south, M5 south through Bristol and into Devon. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Exeter programmes — full floors or complete blocks in EX1, EX2 or EX4 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Exeter universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Exeter and the wider Devon area. University of Exeter — approximately 25,000 students — is a Russell Group research university with its main Streatham Campus in EX4, a 300-acre site in the leafy northern residential suburbs of Exeter. The university also operates the St Luke's Campus EX1 (education, sport and health sciences) and the Penryn Campus in Falmouth (shared with Falmouth University, approximately 5,000 additional students). The main Streatham campus has extensive university-managed hall provision including Holland, Lafrowda and the newer Birks Grange Village complex in EX4. The St David's area adjacent to the campus and Exeter's inner-western suburbs house significant HMO and private PBSA provision. PBSA operators active in Exeter include Unite Students, Student Roost and a range of private developers with blocks in the EX1 and EX4 city zone. We work white-label for FM contractors managing refurbishment programmes on behalf of any Exeter operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Exeter student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Exeter programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Exeter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Exeter student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Exeter programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Exeter postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Exeter PBSA postcodes — EX1 (Exeter city centre, St David's, Heavitree, Whipton — significant PBSA and HMO provision close to the St Luke's Campus and the city-centre student zone), EX2 (Countess Wear, Topsham, Exwick, St Thomas — south and west Exeter residential and student areas), EX4 (Exwick, St David's, Pennsylvania, Mount Pleasant, Stoke Hill — the primary Streatham Campus zone; Pennsylvania Road, Union Road and Mount Pleasant Road are the densest student residential streets in Exeter, immediately adjacent to the campus north gate). Wider Devon: Exmouth EX8, Teignmouth TQ14, Newton Abbot TQ12 and Plymouth PL postcodes fall within our extended south-west service area on a project basis. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes to 4 hours from Exeter via the M1 south and M5 south through Bristol.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapExeterPage() {
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
            <span className="text-foreground">Exeter</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Exeter &amp; Devon
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Exeter
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Exeter. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — no replacement,
            no disruption, photographic sign-off on completion. University of Exeter
            and all major PBSA operators across EX1, EX2, EX4 and the wider Exeter
            area. White-label for FM contractors. Approximately 3 hours 30 minutes
            to 4 hours from our South Yorkshire base via the M1 south and M5 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Exeter Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Exeter PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Exeter is one of the South West of England&apos;s principal university
              cities. The University of Exeter — a Russell Group research university
              with approximately 25,000 students — is the dominant higher education
              presence, with its main Streatham Campus set within 300 acres of parkland
              and gardens in the EX4 northern suburbs. The campus is one of the most
              architecturally varied in the UK, incorporating historic buildings
              alongside modern residential and academic blocks, with significant
              university-managed hall provision on the campus estate.
            </p>
            <p>
              The Pennsylvania, Mount Pleasant and St David&apos;s zones immediately
              north and east of the Streatham Campus — Pennsylvania Road EX4, Union
              Road EX4 and the surrounding residential streets — form Exeter&apos;s
              densest student residential area. The transition from campus halls to
              the private HMO and PBSA market for second and third-year students
              largely occurs within walking distance of the campus north gate.
              PBSA developers have added purpose-built blocks to the EX1 city-centre
              zone and the St David&apos;s station area, broadening the student
              accommodation footprint across the inner city.
            </p>
            <p>
              The University also operates the St Luke&apos;s Campus EX1 — home to
              education, sport and health sciences — and, jointly with Falmouth
              University, the Penryn Campus in Cornwall. Exeter&apos;s student
              accommodation market therefore spans the EX1 city zone, the EX4
              campus-adjacent zone and, for Penryn-based students, the broader
              South West peninsula.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Exeter for multi-day
              void-period programmes. The M1 south from Doncaster connects via
              the M5 south through Bristol and Taunton, arriving in Exeter in
              approximately 3 hours 30 minutes to 4 hours in off-peak conditions.
              For multi-day Exeter programmes, our team stays locally rather than
              commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter PBSA surfaces we wrap
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
                Studio and en-suite bedroom units in Exeter PBSA blocks typically
                include a kitchenette area. Kitchenette door fronts and drawer
                panels are wrapped during the void to a fresh finish for new tenants.
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
                Corridor door panels and fire door leaf surfaces in Exeter PBSA
                blocks accumulate scuffs and impact damage across the academic year.
                Wrapping during the void restores a clean, consistent finish
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
                of an Exeter PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Exeter PBSA programmes
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
            Exeter universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Exeter</strong> —
              approximately 25,000 students — is a leading Russell Group research
              university ranked consistently in the UK&apos;s top 10. The main Streatham
              Campus EX4 is a 300-acre parkland site in the northern residential
              suburbs, with major university-managed hall provision including
              Holland Hall, Lafrowda, James Owen Court and the Birks Grange Village
              complex. The campus hall stock represents a significant vinyl wrap
              opportunity across communal kitchens, bedroom furniture and
              corridor surfaces during the annual summer void period.
            </p>
            <p>
              The St Luke&apos;s Campus EX1 — approximately 1 mile south of the
              Streatham Campus — houses the College of Social Sciences and
              International Studies, Sport and Health Sciences faculty and the
              Graduate School of Education. Student accommodation in the EX1 zone
              combines purpose-built blocks managed by the university with private
              PBSA provision, particularly in the St David&apos;s area near Exeter
              St David&apos;s railway station.
            </p>
            <p>
              <strong className="text-foreground">PBSA operators</strong> active in
              Exeter include Unite Students, Student Roost and a range of private
              developers with purpose-built blocks in the EX1 city-centre zone and
              the EX4 campus-adjacent area. The Exeter PBSA market has expanded
              in recent years as purpose-built supply has grown alongside the
              university&apos;s student population growth. We work white-label for FM
              contractors and estates teams managing refurbishment programmes across
              any Exeter operator portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Exeter void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Exeter programmes are planned and scoped in advance of the summer void.
              We typically carry out a survey visit in May or June — or work from your
              facilities team&apos;s surface inventory and photography if a pre-void
              site visit isn&apos;t practical. Scope, programme duration and access
              logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Exeter programmes our team travels south and stays overnight
              near the site. We work flat by flat or floor by floor through the block,
              completing each unit to photographic sign-off standard before moving to
              the next. Your facilities team receives a progress update at the end of
              each day and a full photo package on programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Exeter programme as standard —
              covering surface preparation, film application materials, heat tool use
              and access protocols. All film products are specified to commercial
              architectural grade, with appropriate adhesive chemistry for the
              substrate type at each Exeter site.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Exeter via the M1 south
              and M5 south, arriving in approximately 3 hours 30 minutes to 4 hours in
              off-peak conditions. We stay locally during multi-day Exeter programmes
              rather than commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Exeter student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Exeter PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Exeter student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Exeter Survey →
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
