import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Bath | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Bath — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Bath, Bath Spa University and all major PBSA operators across BA1, BA2 and the wider Bath area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-bath/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Bath — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Bath. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Bath, Bath Spa University and all major PBSA operators across BA1, BA2 and the wider Bath area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Bath",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-bath/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Bath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Bath PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Bath site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Bath student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Bath student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Bath city centre via the M1 south and M4 west to junction 18, then south via the A46. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Bath programmes — full floors or complete blocks in BA1 or BA2 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bath universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Bath and the wider Somerset area. University of Bath — approximately 21,000 students and a Russell Group institution — is situated on the Claverton Down campus above the city in BA2, with extensive managed halls of residence including Eastwood Court, Brendon Court and Polden Court on the campus site, and additional managed accommodation in the Oldfield Park BA2 and city-centre BA1 zones. Bath Spa University — approximately 11,000 students — operates from the historic Newton Park campus BA2 and a city-centre campus in Bath BA1, with student accommodation spread across the city and the Oldfield Park zone. PBSA operators active in Bath include Unite Students and private developers with city-centre and station-adjacent blocks in BA1, targeting the premium student market that Bath&apos;s two universities and UNESCO World Heritage City status attract. We work white-label for FM contractors managing refurbishment programmes across any Bath operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Bath student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. Bath&apos;s geography — a river valley city surrounded by hills — means some older Bath PBSA buildings in lower BA1 and BA2 zones can have above-average internal humidity levels, particularly ground-floor units in period conversions near the River Avon. We specify adhesive chemistry appropriate to the environment at survey. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Bath programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Bath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Bath student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Bath programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios. University of Bath&apos;s campus site on Claverton Down is accessed via the A36 approach and has specific vehicle access requirements — we confirm logistics in advance for campus-based programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bath postcodes and areas do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bath and wider Somerset BA postcodes relevant to student accommodation — BA1 (Bath city centre, Larkhall, Lambridge, Bathampton — city-centre PBSA, Unite Students and private developer blocks near Bath Spa station and the city core), BA2 (Oldfield Park, Twerton, Combe Down, Claverton Down — the primary student HMO and Oldfield Park PBSA zone; University of Bath campus at Claverton Down BA2 and Newton Park campus BA2). Wider reach: Keynsham BS31, Midsomer Norton BA3, Frome BA11, Trowbridge BA14 and Chippenham SN15 fall within our extended Somerset and Wiltshire service area on a project basis. Bristol BS postcodes — approximately 20 minutes north of Bath on the A4 — are within regular reach. WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Bath via the M1 south and M4 west.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapBathPage() {
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
            <span className="text-foreground">Bath</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Bath &amp; Somerset
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Bath
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Bath. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — no replacement,
            no disruption, photographic sign-off on completion. University of Bath,
            Bath Spa University and all major PBSA operators across BA1, BA2 and
            the wider Bath area. White-label for FM contractors. Approximately
            2 hours 30 minutes from our South Yorkshire base via the M1 south
            and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bath Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bath PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bath student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bath is one of the UK&apos;s most distinctive university cities —
              a UNESCO World Heritage Site and a compact Georgian city that
              supports two universities with a combined student population of
              approximately 32,000. The University of Bath, a Russell Group
              institution with approximately 21,000 students, occupies a
              purpose-built campus on Claverton Down BA2 above the city,
              with its managed accommodation blocks concentrated on the campus
              site. Bath Spa University — approximately 11,000 students —
              operates from Newton Park BA2 and a city-centre campus, with
              student accommodation spread across Oldfield Park and the
              city-centre BA1 zone.
            </p>
            <p>
              Bath&apos;s student accommodation geography is shaped by the city&apos;s
              compact size and heritage setting. The primary student residential
              zone outside the University of Bath campus is Oldfield Park BA2 —
              a Victorian and Edwardian residential neighbourhood immediately
              south-west of the city centre, where a high density of student HMOs
              and private PBSA developments are concentrated within walking or
              cycling distance of both universities&apos; city facilities. The city-centre
              BA1 zone, particularly around Bath Spa station and the lower town,
              has seen growth in purpose-built PBSA development targeting the
              premium student market that Bath&apos;s Russell Group status attracts.
            </p>
            <p>
              Bath&apos;s PBSA market is notably premium relative to many UK university
              cities. The Russell Group status of the University of Bath, combined
              with Bath&apos;s tourism economy and World Heritage City designation,
              drives a higher average willingness-to-pay for student accommodation.
              This means that operators and FM teams managing Bath PBSA stock have
              a stronger commercial incentive to maintain high-quality interior
              finish standards — and that vinyl wrap refurbishment, which delivers
              a visible quality improvement at low cost and without disruption,
              is a particularly good fit for the Bath market.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Bath for void-period
              programmes. The M1 south from Doncaster to junction 15 connects to
              the M4 west, exiting at junction 18 and travelling south via the A46
              into Bath — approximately 2 hours 30 minutes in off-peak conditions.
              For multi-day Bath programmes, our team stays locally rather than
              commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Bath PBSA surfaces we wrap
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
                Studio and en-suite bedroom units in Bath PBSA blocks typically
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
                Corridor door panels and fire door leaf surfaces in Bath PBSA
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
                of a Bath PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Bath PBSA programmes
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
            Bath universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Bath</strong> —
              approximately 21,000 students — is a Russell Group university with
              a strong reputation in engineering, science, management and sport,
              consistently ranked among the UK&apos;s top universities. The university
              is campus-based on Claverton Down BA2, approximately 2 miles south-east
              of the city centre via the A36 Warminster Road. On-campus managed halls
              — including Eastwood Court, Brendon Court, Polden Court and Westwood
              Court — are purpose-built accommodation blocks from the 1960s to
              2000s, with kitchen unit doors, bedroom furniture and corridor surfaces
              all typical vinyl wrap applications in the older stock. The university
              also manages off-campus accommodation in Oldfield Park BA2 and
              city-centre BA1.
            </p>
            <p>
              <strong className="text-foreground">Bath Spa University</strong> —
              approximately 11,000 students — specialises in arts, humanities,
              education and creative subjects. Its main campus is at Newton Park
              BA2 — a Georgian country house estate approximately 4 miles south-west
              of Bath city centre — with a secondary campus in the city centre at
              Locksbrook Road BA1. Student accommodation is primarily in the Oldfield
              Park BA2 and city-centre zones, spread across managed halls and private
              PBSA development.
            </p>
            <p>
              <strong className="text-foreground">PBSA operators</strong> active in Bath
              include Unite Students — with blocks in the city-centre BA1 zone near
              Bath Spa station — and private developers targeting the premium end
              of the market. Bath&apos;s limited buildable land, planning constraints
              within the World Heritage Site buffer zone, and high land values mean
              that PBSA stock turns over more slowly than in many UK cities — making
              periodic refurbishment of existing blocks commercially important for
              maintaining competitive rental standards. We work white-label for FM
              contractors and estates teams managing programmes across any Bath
              operator portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Bath void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bath programmes are planned and scoped in advance of the summer void.
              We typically carry out a survey visit in May or June — or work from your
              facilities team&apos;s surface inventory and photography if a pre-void site
              visit isn&apos;t practical. Scope, programme duration and access logistics are
              confirmed before mobilisation.
            </p>
            <p>
              For University of Bath campus programmes, vehicle access to Claverton
              Down requires advance permit arrangement via the university estates
              team — we confirm logistics and access requirements before mobilisation
              for campus-based programmes. City-centre and Oldfield Park PBSA
              programmes follow standard urban site access procedures.
            </p>
            <p>
              On multi-day Bath programmes our team travels south-west and stays
              overnight near the site. We work flat by flat or floor by floor
              through the block, completing each unit to photographic sign-off
              standard before moving to the next. Your facilities team receives a
              progress update at the end of each day and a full photo package on
              programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Bath programme as standard —
              covering surface preparation, film application materials, heat tool use
              and access protocols. All film products are specified to commercial
              architectural grade. WRPX is based in South Yorkshire and travels to
              Bath via the M1 south and M4 west to junction 18, arriving in
              approximately 2 hours 30 minutes in off-peak conditions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bath student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrap service nationwide</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Bristol</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period programmes across Bristol</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Portsmouth</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Portsmouth care homes</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Survey</p>
              <p className="mt-1 text-xs text-muted">Get a scoped quote for your Bath PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bath PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Bath student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bath Survey →
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
