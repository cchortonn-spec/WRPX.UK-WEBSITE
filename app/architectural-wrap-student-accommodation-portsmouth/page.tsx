import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Portsmouth | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Portsmouth — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Portsmouth, Arts University Portsmouth and all major PBSA operators across PO1, PO2, PO3, PO4 and the wider Portsmouth area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-portsmouth/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Portsmouth — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Portsmouth. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Portsmouth and all major PBSA operators across PO1, PO2, PO3, PO4 and the wider Portsmouth area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Portsmouth",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-portsmouth/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Portsmouth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Portsmouth PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Portsmouth site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Portsmouth student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Portsmouth student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours from Portsmouth city centre via the M1 south, M25 and M3, then the A3(M) south into Portsmouth. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Portsmouth programmes — full floors or complete blocks in PO1 or PO2 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Portsmouth universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Portsmouth and the wider Hampshire coast. University of Portsmouth — approximately 25,000 students — is the dominant higher education presence, with campuses centred around the Guildhall area PO1 and the southern waterfront zone between the historic dockyard and Southsea. The university operates halls of residence in the PO1 city zone including Rees Hall and Nelson House, with additional managed accommodation across the inner PO1 and PO5 residential zones. Arts University Portsmouth (formerly Highbury College of Art and Design) contributes a smaller student population in the northern PO6 zone. PBSA operators active in Portsmouth include Unite Students, private developers and housing associations with blocks concentrated in the PO1 city centre and the Southsea PO4/PO5 student residential zone. We work white-label for FM contractors managing refurbishment programmes across any Portsmouth operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Portsmouth student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. Portsmouth&apos;s coastal environment — elevated humidity and salt air near the waterfront in PO1 and PO5 — is a relevant factor for installations in older buildings with less controlled internal humidity. We specify adhesive chemistry appropriate to the environment at survey. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Portsmouth programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Portsmouth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Portsmouth student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Portsmouth programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Portsmouth postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Portsmouth PBSA postcodes — PO1 (Portsmouth city centre, Old Portsmouth, the hard/waterfront, Portsea Island north — the primary PBSA and university campus zone), PO2 (Cosham, Hilsea, Paulsgrove — north of Portsea Island), PO3 (Buckland, Hilsea industrial and northern residential areas), PO4 (Southsea east, Milton, Eastney — a major student residential zone), PO5 (Southsea west, Clarence Road area — large student HMO and private PBSA cluster close to the university), PO6 (Cosham, Drayton, Farlington — north coastal zone). Wider Hampshire south coast: Gosport PO12/PO13, Fareham PO14–PO17, Havant PO9, and Lee-on-the-Solent PO13 fall within our extended Hampshire service area on a project basis. WRPX is based in South Yorkshire, approximately 3 hours from Portsmouth via the M1 south, M25 and M3/A3(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapPortsmouthPage() {
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
            <span className="text-foreground">Portsmouth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Portsmouth &amp; Hampshire South Coast
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Portsmouth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Portsmouth. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — no replacement,
            no disruption, photographic sign-off on completion. University of Portsmouth
            and all major PBSA operators across PO1, PO2, PO4, PO5 and the wider
            Portsmouth area. White-label for FM contractors. Approximately 3 hours
            from our South Yorkshire base via the M1 south, M25 and M3/A3(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Portsmouth Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Portsmouth PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Portsmouth is a major university city on the Hampshire south coast,
              with the University of Portsmouth — approximately 25,000 students —
              as its dominant higher education presence. The university is primarily
              campus-based in the central PO1 zone, with buildings concentrated
              around the Guildhall Square area, the historic dockyard waterfront and
              the Southsea student residential quarter extending south into PO4 and
              PO5. Portsmouth is the UK&apos;s only island city, with Portsea Island
              providing a well-defined and compact student accommodation geography.
            </p>
            <p>
              The Southsea zone — PO4 Milton Road, PO5 Clarence Road, Albert Road
              and the Marmion/Festing Road residential streets — is Portsmouth&apos;s
              densest student HMO and PBSA area, within walking distance of the
              university&apos;s southern academic buildings and the Ravelin Sports Centre.
              Purpose-built PBSA blocks have been developed in the PO1 city-centre
              zone in recent years, adding to the existing mix of university-managed
              halls and private PBSA provision on Portsea Island.
            </p>
            <p>
              Portsmouth&apos;s student accommodation stock has a specific characteristic:
              Portsea Island&apos;s coastal setting means that many older student HMOs
              and PBSA blocks in the PO4/PO5 zone are exposed to marine air —
              elevated humidity and salt-laden air from the Solent and Portsmouth
              Harbour. This is a relevant consideration for film specification in
              older buildings with less controlled internal ventilation, and something
              we assess and specify for at survey.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Portsmouth for
              multi-day void-period programmes. The M1 south from Doncaster
              connects via the M25 at junction 8, then the M3 south to the A3(M)
              south through Horndean into Portsmouth — approximately 3 hours in
              off-peak conditions. For multi-day Portsmouth programmes, our team
              stays locally rather than commuting, ensuring an early start on site
              each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth PBSA surfaces we wrap
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
                Studio and en-suite bedroom units in Portsmouth PBSA blocks typically
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
                Corridor door panels and fire door leaf surfaces in Portsmouth PBSA
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
                of a Portsmouth PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Portsmouth PBSA programmes
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
            Portsmouth universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Portsmouth</strong> —
              approximately 25,000 students — is a modern university with a strong
              reputation across technology, engineering, computing and maritime
              subjects, reflecting the city&apos;s naval and maritime heritage. The
              university&apos;s academic buildings are primarily concentrated in the
              PO1 zone around Guildhall Square, the Ravelin Park area and the
              waterfront. University-managed halls of residence — including Rees Hall,
              Nelson House and James Watson Hall — are located across the PO1 inner
              zone, with a mix of corridor and cluster-flat layouts typical of
              late-1990s and 2000s university hall construction.
            </p>
            <p>
              <strong className="text-foreground">Arts University Portsmouth</strong> —
              a specialist arts university formerly associated with Highbury College —
              operates from the north PO6 area and contributes a smaller creative
              student population to Portsmouth&apos;s accommodation market. Arts students
              are distributed across PO6, PO1 and the Southsea PO4/PO5 zone.
            </p>
            <p>
              <strong className="text-foreground">PBSA operators</strong> active in
              Portsmouth include Unite Students, private developers with city-centre
              blocks in the PO1 zone, and a range of housing associations with
              managed student accommodation across Portsea Island. The Southsea
              PO4/PO5 private HMO market remains substantial, with student households
              embedded in the Victorian terraced housing stock of Milton Road, Elm
              Grove, Festing Road and the surrounding grid streets. We work
              white-label for FM contractors and estates teams managing refurbishment
              programmes across any Portsmouth operator portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Portsmouth void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Portsmouth programmes are planned and scoped in advance of the summer
              void. We typically carry out a survey visit in May or June — or work
              from your facilities team&apos;s surface inventory and photography if a
              pre-void site visit isn&apos;t practical. Scope, programme duration and
              access logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Portsmouth programmes our team travels south and stays
              overnight near the site. We work flat by flat or floor by floor
              through the block, completing each unit to photographic sign-off
              standard before moving to the next. Your facilities team receives a
              progress update at the end of each day and a full photo package on
              programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Portsmouth programme as
              standard — covering surface preparation, film application materials,
              heat tool use and access protocols. All film products are specified
              to commercial architectural grade, with adhesive chemistry appropriate
              for the substrate type and coastal humidity environment at each
              Portsmouth site.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Portsmouth via the
              M1 south, M25 and M3/A3(M), arriving in approximately 3 hours in
              off-peak conditions. We stay locally during multi-day Portsmouth
              programmes rather than commuting, ensuring an early start on site
              each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Portsmouth student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Portsmouth PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Portsmouth student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Portsmouth Survey →
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
