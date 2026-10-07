import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Coventry | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Coventry and Warwickshire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Coventry University, University of Warwick and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Coventry — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Coventry and Warwickshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Coventry University CV1, University of Warwick CV4, and all major PBSA operators in the Coventry and wider West Midlands area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Coventry",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-coventry/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application across Coventry PBSA — the heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Coventry or Warwick site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Coventry student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Coventry student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour from Coventry city centre via the M1 and M6 south. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows where a single summer period is insufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Coventry universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Coventry and the wider CV postcode area. Coventry University — approximately 27,000 students — has its main campus in the city centre CV1, with a significant concentration of managed halls and PBSA buildings in the CV1 and CV2 zones immediately surrounding the campus. The University of Warwick — approximately 25,000 students — is located in CV4, primarily on its own campus estate, with university-managed halls and significant PBSA operator presence in Canley CV4, Westwood CV4 and the Earlsdon CV5/Chapelfields CV5 areas. PBSA operators active in Coventry include Unite Students, iQ Student Accommodation, Fresh Student Living, Student Roost, Vita Student and Collegiate AC. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap finish hold up in Coventry student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Coventry student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer's specification. We provide photographic sign-off on completion for every Coventry programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Coventry and Warwick student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Coventry programmes. We are familiar with void-period constraints, key management requirements and the multi-site scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "What Coventry and Warwickshire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Coventry city postcodes — CV1 (city centre, Coventry University campus, main PBSA zone), CV2 (Cheylesmore, Stoke, Binley, Wyken), CV3 (Tile Hill, Canley, Green Lane), CV4 (Westwood, Cannon Park, University of Warwick campus), CV5 (Earlsdon, Chapelfields, Allesley), CV6 (Radford, Holbrooks, Longford) and wider Warwickshire CV postcodes including Kenilworth CV8, Royal Leamington Spa CV31/CV32, Warwick CV34 and Stratford-upon-Avon CV37. WRPX is based in South Yorkshire, approximately 1 hour from Coventry city centre via the M1 and M6 south.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Coventry &amp; Warwickshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Coventry and Warwickshire. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods — no
            replacement, no disruption, photographic sign-off on completion.
            Coventry University, University of Warwick and all major PBSA operators.
            White-label for FM contractors. Approximately 1 hour from our South
            Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry has one of the highest student-to-population ratios of any UK city,
              driven by two substantial universities in close proximity. Coventry University
              — approximately 27,000 students — has its main campus in the city centre CV1,
              making it one of the more compact, high-density university campuses in the UK.
              The concentration of PBSA and managed halls in the CV1 and CV2 zones
              immediately around the campus is significant.
            </p>
            <p>
              The University of Warwick — approximately 25,000 students — occupies its own
              campus in Canley CV4, with a large managed halls estate on site and growing
              PBSA operator presence in Westwood CV4 and the Earlsdon CV5 and Chapelfields
              CV5 areas. Together, the two universities bring approximately 52,000 students
              into Coventry&apos;s accommodation market — a substantial PBSA demand pool for
              a city of around 370,000 people.
            </p>
            <p>
              The refurbishment challenge across Coventry PBSA mirrors what we see
              elsewhere: kitchen unit doors, drawer fronts and bedroom furniture panels
              installed during initial fit-out accumulate surface damage through years of
              heavy student use and regular cleaning with commercial products. The solution
              — vinyl wrapping during the void period — is faster, cheaper and less
              disruptive than unit replacement in every case we have assessed.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Coventry city
              centre via the M1 south and M6 south — one of our most accessible Midlands
              service markets alongside Leicester. We can mobilise for survey visits and
              multi-week void-period programmes without significant travel overhead.
            </p>
          </div>
        </div>
      </section>

      {/* University of Warwick */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            University of Warwick and CV4 student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The University of Warwick campus in CV4 is one of the larger self-contained
              university estates in the UK, with a substantial managed halls operation
              on campus housing thousands of students in a mix of self-catered flats and
              catered halls. The volume of kitchen unit doors and bedroom furniture panels
              in on-campus accommodation alone represents a large void-period refurbishment
              programme.
            </p>
            <p>
              The Warwick Westwood area, Canley CV4 and the student accommodation clusters
              along Charter Avenue and the Tile Hill Lane corridor add significant private
              and PBSA stock to the mix. PBSA operators active around the Warwick campus
              include several national operators with blocks ranging from 100 to 400+ beds
              — these are exactly the scale of programmes where WRPX&apos;s systematic
              approach to void-period wrapping is most cost-effective.
            </p>
            <p>
              We cover Warwick campus and the wider CV4/CV5 area as part of our standard
              Coventry service area — approximately 1 hour from our South Yorkshire base,
              the same journey time as central Coventry.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Coventry student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Coventry student accommodation — wrapping
                replaces the appearance of heavily used kitchen unit doors at a fraction
                of full unit replacement cost, with no disruption to the kitchen layout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchen drawer fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Drawer fronts in communal kitchens and studio flat kitchenettes see
                the highest contact frequency after door faces. Commercial film seals
                edges to resist moisture and cleaning product ingress.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panel faces in en-suite bedrooms and studio flats —
                refreshed during the void period without any removal, disposal or
                furniture replacement overhead.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door and drawer front panels — wrapped to match or
                complement the wardrobe finish, giving a refreshed look across the
                full bedroom furniture set.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception counter and desk fascia panels — the highest-visibility
                surface in any PBSA building. Commercial film specification for
                high-contact counter surfaces as standard.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors and panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom door leaf panels and communal area door faces —
                wrapped without room access where corridor-only work is required during
                the live-in semester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Void window */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working the Coventry void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Coventry PBSA properties — is the primary window for kitchen unit door
              and bedroom furniture wrapping across the majority of blocks. We
              co-ordinate the programme with your facilities or accommodation team
              before mobilisation: agreed block sequence, access management, sign-off
              format and any facilities team sign-off requirements.
            </p>
            <p>
              For Coventry properties where the void window is short — particularly
              PBSA operators running 51-week tenancy agreements with minimal gap
              between outgoing and incoming tenants — we can plan phased programmes
              that use interim access windows, semester breaks and short void periods
              on a floor-by-floor or block-by-block basis over multiple years.
            </p>
            <p>
              Communal areas — reception desks, common room furniture and corridor
              doors — can typically be addressed outside the full void, during term
              time where access can be managed carefully. We co-ordinate access for
              these elements directly with your on-site management team.
            </p>
            <p>
              All programmes include before and after photographic documentation per
              room and per surface area. RAMS documentation is provided as standard.
              We work white-label under your contractor identity where required for
              FM-managed programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Coventry and Warwickshire
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham PBSA — UoB, Aston, BCU and all major operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Leicester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leicester and Loughborough student accommodation — UoL, DMU and all major PBSA operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Coventry and Warwickshire PBSA buildings.</p>
            </Link>
            <Link href="/architectural-wrap-offices-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Coventry offices and commercial interiors — reception desks, breakout areas, fit-out surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Coventry hotels — guest room furniture, reception desks and corridor surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Coventry and Warwickshire PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately 1 hour
              from Coventry via the M1 and M6 — no significant mobilisation overhead on
              Coventry or Warwick student accommodation work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Coventry Survey →
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
