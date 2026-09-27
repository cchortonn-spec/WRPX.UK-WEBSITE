import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Nottingham | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Nottingham and the wider NG area. Kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Nottingham Trent University, University of Nottingham and all major PBSA operators — Unite Students, iQ, Student Roost, Collegiate, Prestige. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Nottingham — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Nottingham and Nottinghamshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Nottingham Trent University NG1/NG2, University of Nottingham NG7/NG9, Jubilee Campus and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Nottingham",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-nottingham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most frequent application — Nottingham student kitchen units take hard daily use and wrapping restores the finish at a fraction of full unit replacement cost. Bedroom kitchenette doors and drawer fronts in en-suite studio flats, bedroom furniture panels (wardrobe door faces, bedside cabinet fronts, chest of drawer panels), communal lounge furniture, reception desk fascias, corridor doors and study room panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Nottingham site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Nottingham student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Nottingham student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 35 to 45 minutes from Nottingham city centre via the M1 south to junction 26 or the A1(M) south to junction 25. Nottingham is one of our shortest mobilisation drives — an early-morning departure from South Yorkshire arrives in Nottingham NG1 consistently within 40 minutes. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large Nottingham PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows where a single summer period is insufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Nottingham. Nottingham Trent University — with approximately 32,000 students — operates from its City Campus in NG1 and NG2 (Nottingham city centre and the Lace Market area) and its Clifton Campus NG11 south of the city. NTU manages significant direct accommodation including Derwent Hall, Peveril Hall and Marriott Hall, and students are also housed across a large private and PBSA market in NG1, NG2 and NG7. The University of Nottingham — a Russell Group institution with approximately 35,000 students — occupies its University Park campus NG7 to the west of the city, with its Jubilee Campus NG8 in Dunkirk to the north-west. University of Nottingham direct accommodation includes halls across the University Park NG7 estate. PBSA operators active in Nottingham include Unite Students, iQ Student Accommodation, Student Roost, Collegiate AC, Prestige Student Living and Empiric. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap finish hold up in Nottingham student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Nottingham student accommodation under normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Nottingham programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label delivery is standard for Nottingham student accommodation programmes. We attend on site under your company or your client&apos;s brand, follow your programme schedule and documentation format, and report directly to your project manager or accommodation team. No WRPX branding appears on site or in any programme documentation. For FM contractors managing maintenance contracts across Nottingham&apos;s student accommodation portfolio — covering multiple buildings for multiple operators — we provide the installation capacity and our proximity to the city (35 to 45 minutes from South Yorkshire) to deliver cost-effective wrap programmes across all sites in a single void-period window.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover student accommodation outside Nottingham city centre — Clifton, Dunkirk, Beeston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Nottingham student accommodation geography, not just the city-centre NG1/NG2 core. NTU Clifton Campus NG11 and its associated accommodation are within easy reach south of the city. University of Nottingham Jubilee Campus NG8 and University Park NG7 accommodation are west of Nottingham — both accessible from the M1 junction 26 approach. Student accommodation in Beeston NG9 (close to University of Nottingham and well-served by NET tram), Lenton NG7 (private student accommodation dense zone adjacent to University of Nottingham campus), Dunkirk NG7, Radford NG7, Forest Fields NG7 and the Hyson Green NG7 corridor are all within our standard Nottingham coverage. We can mobilise from South Yorkshire to any Nottingham NG postcode in under 45 minutes on a standard working day.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationWrapNottinghamPage() {
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
            <Link href="/architectural-wrap-student-accommodation/" className="text-accent hover:underline">Student Accommodation Wrap</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Nottingham &amp; Nottinghamshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Nottingham and the wider NG area. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods — without
            replacement. WRPX covers Nottingham Trent University, University of Nottingham
            and all major PBSA operators. Commercial-grade film, photographic sign-off,
            white-label for FM contractors. Approximately 35 to 45 minutes from our South
            Yorkshire base.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham student market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s student accommodation estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is one of the largest student cities in England, with two
              substantial universities and a major private-sector PBSA market. Nottingham
              Trent University — approximately 32,000 students — occupies its City Campus
              in NG1 and NG2, at the heart of Nottingham city centre. The Lace Market
              and city-centre PBSA market is dense and close to NTU&apos;s buildings.
              NTU also operates Clifton Campus NG11 south of the city, and manages direct
              student accommodation including Derwent Hall, Peveril Hall, Marriott Hall
              and further managed halls across the NG1 and NG7 zones.
            </p>
            <p>
              The University of Nottingham — a Russell Group institution with approximately
              35,000 students — is campus-based in NG7 to the west of the city at University
              Park, one of the largest and most landscaped university campuses in England.
              Its Jubilee Campus NG8 in Dunkirk serves business and computing faculties.
              University of Nottingham direct accommodation is spread across the University
              Park campus in purpose-built halls — many dating from the 1960s and 1970s
              and now at the stage where kitchen units, bedroom furniture and communal
              surfaces benefit significantly from vinyl wrap refurbishment.
            </p>
            <p>
              Nottingham&apos;s PBSA sector is well-developed. Unite Students operates
              multiple Nottingham buildings including Broadgate Park (one of the largest
              PBSA sites in England, over 2,200 beds on Beeston Road NG7). iQ Student
              Accommodation has significant city-centre Nottingham presence. Student Roost,
              Collegiate AC, Prestige Student Living and Empiric also operate Nottingham
              accommodation. The private PBSA and HMO market in Lenton NG7, Radford NG7,
              Forest Fields NG7 and Hyson Green NG7 is one of the densest student rental
              zones in the East Midlands.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 35 to 45 minutes from
              Nottingham city centre via the M1 south to junction 26 or the A1(M) south
              to junction 24 and then the A453. Nottingham is one of the shortest
              mobilisation drives from our base — early-morning arrivals into Nottingham
              NG1 are consistently within 40 minutes. There is no significant mobilisation
              overhead on Nottingham student accommodation programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Nottingham student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal kitchen unit doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-use surface in any student accommodation block. Worn or
                delaminating communal kitchen doors wrapped with commercial-grade
                architectural vinyl at a fraction of full unit replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom kitchenette doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                En-suite studio flat kitchenettes with individual kitchen unit doors
                and drawer fronts — lower contact frequency than communal kitchens,
                so the wrap finish extends further between refurbishment cycles.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, drawer front panels and bedside cabinet surfaces.
                Often the same unit design repeated across hundreds of Nottingham student
                rooms — systematic wrap programmes reduce per-room cost significantly.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal lounge furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Coffee table surfaces, TV unit panels, storage unit fronts and fixed
                lounge seating panels in communal social areas. High-durability film
                specified for all contact surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom doors, fire door leaf faces, utility room door
                panels and corridor feature wall panels — wrapped during void periods
                to avoid disruption to occupied floors.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, parcel locker surrounds, concierge counter fronts
                and lobby feature panels — front-of-house surfaces that benefit most from
                a consistent, refreshed finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Void period scheduling */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Void period scheduling for Nottingham student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham student accommodation programmes centre on the summer void —
              typically July and August, when full-year tenancy agreements end and halls
              are unoccupied for maintenance and refurbishment. This gives a 6 to 10-week
              window for systematic vinyl wrap programmes across communal kitchens,
              corridors and bedroom furniture without access restrictions.
            </p>
            <p>
              For larger Nottingham programmes — multi-building portfolios or
              accommodation estates with 200+ beds — we plan phased programmes aligned
              to the specific void dates for each building. Broadgate Park NG7 alone,
              with over 2,200 beds across multiple blocks, is a multi-phase programme
              that benefits from careful scheduling to ensure each block is complete
              before re-occupation. NTU city-centre halls in NG1 and NG2 have their
              own void schedules that can differ from University of Nottingham NG7
              halls — we co-ordinate separately for each site as required.
            </p>
            <p>
              Shorter void windows are available over Christmas (typically 3 to 4 weeks
              for Nottingham university-managed accommodation) and Easter (1 to 2 weeks
              for most halls). Christmas and Easter programmes suit targeted single-surface
              or single-floor work on the most visible or worn areas between terms.
            </p>
            <p>
              WRPX is based in South Yorkshire — approximately 35 to 45 minutes from
              Nottingham — so we can respond to urgent wrap requests during the academic
              year if a specific area requires attention between standard void periods,
              without significant mobilisation overhead.
            </p>
          </div>
        </div>
      </section>

      {/* White label section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label delivery for Nottingham FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX works white-label for FM contractors and maintenance companies
              delivering refurbishment programmes across Nottingham&apos;s student
              accommodation estate. We attend under your brand, follow your documentation
              format and report to your project manager. No WRPX branding appears on
              site or in any programme documentation.
            </p>
            <p>
              For FM contractors holding maintenance contracts across multiple Nottingham
              PBSA or university accommodation buildings, we provide the installation
              capacity and regional proximity to deliver cost-effective wrap programmes
              across all sites in a single void-period window. Nottingham is 35 to 45
              minutes from our South Yorkshire base via the M1 — a consistently reachable
              drive that makes daily mobilisation across a multi-building Nottingham
              programme practical without excessive travel overhead.
            </p>
            <p>
              Photographic sign-off is provided as standard: before and after images for
              every room or surface area, delivered in your agreed format on the day of
              completion. All work is invoiced in line with your agreed job reference
              and documentation requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham student accommodation wrap — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Nottingham student accommodation
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all student accommodation vinyl wrap applications, surfaces, film spec and process.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrap refurbishment for Sheffield student accommodation — University of Sheffield halls, Sheffield Hallam and all major PBSA operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Leeds</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leeds student accommodation — University of Leeds, Leeds Beckett, Leeds Arts and all major PBSA operators across LS2/LS6.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Manchester student accommodation — University of Manchester, Manchester Met, Salford and all major PBSA operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for overlooked bedrooms, solar control for south-facing blocks, Part M manifestation for corridors.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Nottingham hotels — guest kitchenettes, bedroom furniture, reception desks and corridor doors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Nottingham student accommodation void programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the buildings, the surfaces and the void window — we&apos;ll survey,
              scope and price the programme for you. WRPX is approximately 35 to 45 minutes
              from Nottingham via the M1, so there&apos;s no significant mobilisation
              overhead on Nottingham work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Nottingham Survey →
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
