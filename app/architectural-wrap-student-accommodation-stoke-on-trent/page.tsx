import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Stoke-on-Trent | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Stoke-on-Trent and North Staffordshire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Staffordshire University and Keele University PBSA operators across ST postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-stoke-on-trent/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Stoke-on-Trent — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Stoke-on-Trent and North Staffordshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Staffordshire University Stoke campus ST4, Keele University ST5 and all major PBSA operators across Stoke-on-Trent ST postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 15 minutes from our South Yorkshire base via the M1 and M6."
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
      name: "Stoke-on-Trent",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-stoke-on-trent/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Stoke-on-Trent PBSA — shared student kitchens in cluster-flat and en-suite accommodation accumulate surface wear faster than almost any other interior finish. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio en-suite flats are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Stoke-on-Trent PBSA void programmes. Staffordshire University operates its main Stoke campus in the ST4 zone adjacent to Stoke-on-Trent railway station, with associated student accommodation and PBSA demand; Keele University&apos;s residential campus in ST5 generates a separate and distinct student accommodation wrapping market in north Staffordshire.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Stoke-on-Trent student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Stoke-on-Trent student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Stoke-on-Trent via the M1 and M6. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Stoke-on-Trent programmes — full floors or complete PBSA blocks near the Staffordshire University campus in ST4 or in the city-centre private PBSA zone — we run multi-day site programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Stoke-on-Trent universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Stoke-on-Trent, North Staffordshire and Keele. Staffordshire University — approximately 10,000 students — operates its main Stoke campus in the ST4 zone immediately adjacent to Stoke-on-Trent railway station, with an established student accommodation footprint and growing private PBSA development in the Stoke city-centre and Shelton ST4 zones. Keele University — approximately 10,000 students — occupies a largely self-contained residential campus in ST5, between Stoke-on-Trent and Newcastle-under-Lyme, with on-campus student housing that is subject to annual void-period refurbishment programmes. FM contractors managing multi-site Midlands refurbishment programmes also form part of our Stoke-on-Trent and North Staffordshire coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Stoke-on-Trent student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Stoke-on-Trent programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, university accommodation management instructions or directly for PBSA operators across Stoke-on-Trent and the wider North Staffordshire area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Stoke-on-Trent commercial programmes. We cover Staffordshire University&apos;s Stoke campus ST4, Keele University&apos;s ST5 campus, all private PBSA in the city-centre corridor, and Newcastle-under-Lyme ST5 campus-adjacent accommodation within the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Stoke-on-Trent and North Staffordshire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Stoke-on-Trent and North Staffordshire ST postcode areas — ST1 (Hanley — the commercial and civic heart of the Potteries conurbation; private PBSA development in the Hanley ST1 zone is driven by student demand from Staffordshire University and proximity to the city-centre retail and leisure environment at the Potteries Shopping Centre), ST2 (Bucknall, Hanley fringe — east Stoke residential and student rental zone), ST3 (Longton — south Stoke residential zone with student rental provision in the post-industrial Longton residential market), ST4 (Stoke town centre and Penkhull — the location of Staffordshire University&apos;s main Stoke campus immediately adjacent to Stoke-on-Trent railway station; the primary concentration of university-adjacent PBSA and student accommodation in the Potteries, with purpose-built student apartment blocks in the Stoke ST4 campus corridor and the sheltered residential areas between the station and the university), ST5 (Newcastle-under-Lyme — Keele University occupies an expansive residential campus in the north-west of the Newcastle-under-Lyme ST5 zone; on-campus student residences at Keele generate the main void-period wrapping demand here, alongside private student rental accommodation in the Newcastle-under-Lyme town-centre zone catering to Keele students), ST6 (Tunstall, Burslem — northern Potteries towns with student rental and young professional accommodation), ST7 (Alsager — Alsager is served by both Keele University and Staffordshire University students; a small but consistent source of student rental accommodation demand), ST8 (Biddulph — north Staffordshire residential zone), ST11 (Blythe Bridge — east Staffordshire residential zone). WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Stoke-on-Trent via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapStokePage() {
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
            <span className="text-foreground">Stoke-on-Trent</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Stoke-on-Trent &amp; North Staffordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Stoke-on-Trent
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for PBSA refurbishments across
            Stoke-on-Trent and North Staffordshire. Kitchen unit doors, bedroom
            wardrobe panels, communal furniture and reception areas wrapped
            during void periods without replacement. Staffordshire University
            Stoke campus and Keele University, and private PBSA across all
            Stoke-on-Trent ST postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Stoke-on-Trent PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Stoke PBSA market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent student accommodation — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Stoke-on-Trent and North Staffordshire support two distinct
              student accommodation markets. Staffordshire University&apos;s main
              Stoke campus — approximately 10,000 students — is situated in
              the ST4 zone immediately adjacent to Stoke-on-Trent railway
              station, creating a concentrated campus-adjacent PBSA market in
              the Stoke town centre and Shelton ST4 corridor.
            </p>
            <p>
              Keele University — approximately 10,000 students on a largely
              self-contained residential campus between Stoke-on-Trent and
              Newcastle-under-Lyme in ST5 — generates a separate annual void
              programme with on-campus student residences across the Keele
              estate. The residential campus model means Keele produces a
              concentrated block of void-period work during summer, creating
              an efficient programme opportunity for multi-flat wrapping.
            </p>
            <p>
              Private PBSA development has expanded in the Hanley ST1 and
              Stoke ST4 city-centre zones, with purpose-built student apartment
              blocks in the Potteries conurbation providing cluster-flat and
              studio accommodation for students from both universities. These
              blocks follow the standard PBSA refurbishment cycle with annual
              void-period demand for communal kitchen and bedroom surface refresh.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Stoke-on-Trent via the M1 and M6. We cover Staffordshire
              University, Keele University and all private PBSA operators across
              the Stoke-on-Trent and North Staffordshire ST postcode zone.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Stoke-on-Trent PBSA
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in any cluster flat. Shared kitchen
                unit doors and drawer fronts across Stoke-on-Trent PBSA blocks
                are wrapped in commercial-grade film to restore appearance
                without replacement during the void period.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                panels in en-suite and studio rooms across Stoke-on-Trent and
                Keele student accommodation — all wrapped to refresh appearance
                and extend furniture life.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception counters and front-of-house fascias in Stoke-on-Trent
                PBSA lobbies wrapped in architectural film — a cost-effective
                alternative to replacement on surfaces that are the first thing
                prospective students and parents see.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge storage
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and corridor storage door panels across Stoke-on-Trent student
                accommodation blocks — wrapped to refresh shared social spaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units (studio flats)
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and panels within individual studio
                en-suite rooms — wrapped during the void period to restore
                condition ahead of new occupancies at Stoke-on-Trent and
                Keele PBSA blocks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door panels, communal area door cladding and
                entrance door panels across Stoke-on-Trent PBSA blocks —
                wrapped to maintain a consistent, professional internal
                appearance throughout the building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Stoke-on-Trent PBSA teams
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work directly with university accommodation managers, PBSA
              operators and FM contractors managing the Stoke-on-Trent and
              North Staffordshire student portfolio. For FM contractors managing
              the work on behalf of a PBSA operator, we operate on a white-label
              basis — attending under your company instructions and providing
              documentation in your preferred format.
            </p>
            <p>
              Void-period scheduling is co-ordinated with your accommodation
              team before mobilisation. We confirm the block, floor or flat
              programme, bring everything required on the day and work through
              systematically. Each completed area receives photographic sign-off —
              before and after images for every surface — so your team has a clear
              record of work completed for each Stoke-on-Trent unit.
            </p>
            <p>
              For larger Stoke-on-Trent PBSA programmes covering full floors or
              multiple blocks in the ST4 campus corridor or the Keele ST5 campus
              estate, we can run multi-day programmes to cover the volume within
              the available void window. RAMS documentation is provided as
              standard for all Stoke-on-Trent PBSA projects where your site
              access requirements or accommodation management team require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Birmingham</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Birmingham</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Wolverhampton and the Black Country</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-stoke-on-trent/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Stoke-on-Trent</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Stoke-on-Trent care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Stoke-on-Trent</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Stoke-on-Trent</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Stoke-on-Trent PBSA enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stoke-on-Trent PBSA wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Stoke-on-Trent or Keele accommodation block, the
              surface types and the void window. We work white-label for FM
              contractors and direct for PBSA operators and university
              accommodation teams. Photographic sign-off and RAMS as standard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Stoke-on-Trent PBSA Quote →
              </Link>
              <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
                Student Accommodation Wrap Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
