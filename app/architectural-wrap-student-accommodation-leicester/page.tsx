import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Leicester | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Leicester and Loughborough — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Leicester, De Montfort University, Loughborough University and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Leicester — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Leicester, Loughborough and the wider Leicestershire area. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Leicester LE1, De Montfort University LE1/LE2, Loughborough University LE11/LE12, and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Leicester",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-leicester/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most frequent application — Leicester student kitchen units see heavy daily use and wrapping restores the finish at a fraction of full unit replacement cost. Bedroom kitchenette doors and drawer fronts in studio and en-suite flats, bedroom furniture panels (wardrobe door faces, bedside cabinet fronts, chest of drawer panels), communal lounge furniture, reception desk fascias, corridor doors and study room panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Leicester or Loughborough site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Leicester student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Leicester and Loughborough student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour from Leicester via the M1 south and approximately 1 hour 10 minutes from Loughborough LE11/LE12. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows where a single summer period is insufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leicester and Loughborough universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Leicester, Loughborough and the wider LE postcode area. The University of Leicester — a Russell Group institution with approximately 25,000 students — occupies its compact campus on University Road LE1/LE2, with managed halls and PBSA buildings in the LE1/LE2/LE3 zone. De Montfort University — approximately 32,000 students — is located in central Leicester LE1/LE2 adjacent to the Newarke area, with student accommodation across the immediate city centre zone. Loughborough University — approximately 18,000 students in LE11 — has its own large halls estate and the adjacent Burleigh Road PBSA zone in Loughborough town. PBSA operators active in the Leicester/Loughborough market include Unite Students, iQ Student Accommodation, Fresh Student Living, Student Roost, Vita Student and Collegiate AC. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap finish hold up in Leicester student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Leicester student accommodation under normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer's specification. We provide photographic sign-off on completion for every Leicester and Loughborough programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Leicester and Loughborough student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Leicester and Loughborough programmes. We are familiar with void-period constraints, key management requirements and the multi-site scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "What Leicester and Loughborough postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Leicester city postcodes — LE1 (city centre, University of Leicester campus, De Montfort campus), LE2 (Knighton, Stoneygate, Oadby, South Leicester), LE3 (Braunstone, West Leicester, Narborough Road), LE4 (Belgrave, Thurmaston, Birstall) and wider Leicestershire LE postcodes including LE5 (Evington, Spinney Hills), LE6, LE7, LE8 and LE9 — plus Loughborough LE11 and LE12. WRPX is based in South Yorkshire, approximately 1 hour from Leicester city centre via the M1 south to junction 21 (M69 east). Leicester is one of our most accessible Midlands service markets.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Leicester &amp; Loughborough
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Leicester and Loughborough. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods — no
            replacement, no disruption, photographic sign-off on completion.
            University of Leicester, De Montfort University, Loughborough University
            and all major PBSA operators. White-label for FM contractors. Approximately
            1 hour from our South Yorkshire base via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester has a substantial and growing student accommodation market built
              around two significant universities. The University of Leicester — a Russell
              Group institution with approximately 25,000 students — occupies a compact
              campus on University Road LE1/LE2, close to Victoria Park, with managed
              halls and PBSA buildings concentrated in the LE1, LE2 and LE3 zones.
              De Montfort University — approximately 32,000 students across its city
              centre campus — generates significant PBSA demand across the LE1/LE2
              area adjacent to the Newarke, Granby Street and St George&apos;s quarter.
            </p>
            <p>
              Together, the two universities bring approximately 57,000 students into
              Leicester&apos;s accommodation market. PBSA operators in Leicester include
              Unite Students, iQ Student Accommodation, Fresh Student Living, Student
              Roost, Vita Student and Collegiate AC — a dense operator landscape in
              a compact city. Purpose-built student accommodation blocks in the LE1/LE2
              core are among the highest-occupancy residential buildings in the city.
            </p>
            <p>
              The refurbishment challenge across Leicester PBSA is familiar: kitchen
              unit doors, drawer fronts and bedroom furniture panels installed during
              initial fit-out accumulate surface damage through years of heavy student
              use and regular cleaning with commercial products. Replacing units in
              occupied or recently vacated student rooms during the void window is
              expensive, time-consuming and operationally complex. Vinyl wrapping
              resolves this at a fraction of the cost and disruption.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Leicester
              city centre via the M1 south to junction 21 (M69 east). Leicester is
              one of our closest and most accessible Midlands service markets — we
              can mobilise for survey visits and multi-week void-period programmes
              without significant travel overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Loughborough */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Loughborough University and LE11 student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Loughborough University — approximately 18,000 students — sits in its
              own substantial campus in LE11, with a large managed halls estate on
              campus and a significant PBSA zone along Burleigh Road, Ashby Road and
              Epinal Way in Loughborough town centre. The Loughborough student
              accommodation market is particularly active in void-period refurbishment
              because the university&apos;s strong reputation drives consistently high
              occupancy, and operators need to maintain the quality of accommodation
              to compete.
            </p>
            <p>
              Kitchen unit doors in Loughborough PBSA communal kitchens and studio
              flat kitchenettes are among the highest-turnover surfaces we see in
              student accommodation programmes — heavy daily use, regular cleaning
              and consistent occupancy across academic years means the surface
              specification matters as much as the fit. We specify commercial-grade
              architectural film for all Loughborough applications and provide
              photographic sign-off per room or per block.
            </p>
            <p>
              Loughborough LE11/LE12 is approximately 1 hour 10 minutes from our
              South Yorkshire base via the M1 south — we cover both Leicester and
              Loughborough under a single programme where accommodation is split
              across both locations.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Leicester and Loughborough student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Leicester student accommodation — wrapping
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
            Working the Leicester void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Leicester PBSA properties — is the primary window for kitchen unit door
              and bedroom furniture wrapping across the majority of blocks. We
              co-ordinate the programme with your facilities or accommodation team
              before mobilisation: agreed block sequence, access management, sign-off
              format and any facilities team sign-off requirements.
            </p>
            <p>
              For Leicester properties where the void window is short — particularly
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
            Leicester student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Leicester and Loughborough
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Nottingham student accommodation — NTU, University of Nottingham and all major PBSA operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham PBSA — UoB, Aston, BCU and all major operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Leicester and Loughborough PBSA buildings.</p>
            </Link>
            <Link href="/architectural-wrap-offices-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leicester offices and commercial interiors — reception desks, breakout areas, fit-out surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leicester hotels — guest room furniture, reception desks and corridor surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leicester and Loughborough PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately 1 hour
              from Leicester via the M1 — no significant mobilisation overhead on
              Leicester or Loughborough student accommodation work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leicester Survey →
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
