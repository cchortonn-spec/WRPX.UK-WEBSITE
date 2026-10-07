import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Birmingham | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Birmingham and the wider B area. Kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Birmingham, Aston University, Birmingham City University and all major PBSA operators — Unite Students, iQ, Student Roost, Collegiate, Empiric. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Birmingham — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Birmingham and the West Midlands. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Birmingham B15, Aston University B4, Birmingham City University B4/B15, University College Birmingham B5, and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Birmingham",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-birmingham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most frequent application — Birmingham student kitchen units take hard daily use and wrapping restores the finish at a fraction of full unit replacement cost. Bedroom kitchenette doors and drawer fronts in en-suite studio flats, bedroom furniture panels (wardrobe door faces, bedside cabinet fronts, chest of drawer panels), communal lounge furniture, reception desk fascias, corridor doors and study room panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Birmingham site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Birmingham student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Birmingham student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 20 minutes from Birmingham city centre via the M1 south and M42. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large Birmingham PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows where a single summer period is insufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Birmingham universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Birmingham. The University of Birmingham — a Russell Group institution with approximately 38,000 students — occupies its leafy Edgbaston campus in B15, with managed student accommodation spread across the campus estate. Aston University — approximately 16,000 students in Birmingham city centre, B4 — has a compact campus adjacent to Aston Triangle, with direct halls and PBSA buildings in the B4 zone. Birmingham City University — approximately 28,000 students across multiple campuses including City Centre Campus in B4 and Eastside Campus in B5 — has significant PBSA demand in the central Birmingham zone. University College Birmingham, Birmingham Newman University and University of Birmingham Selly Oak/Bournbrook area all add to the substantial Birmingham student accommodation market. PBSA operators active in Birmingham include Unite Students, iQ Student Accommodation, Student Roost, Collegiate AC, Empiric and Liberty Living. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap finish hold up in Birmingham student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Birmingham student accommodation under normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Birmingham programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label delivery is standard for Birmingham student accommodation programmes. We attend on site under your company or your client&apos;s brand, follow your programme schedule and documentation format, and report directly to your project manager or accommodation team. No WRPX branding appears on site or in any programme documentation. For FM contractors managing maintenance contracts across Birmingham&apos;s student accommodation portfolio — covering multiple buildings for multiple operators — we provide the installation capacity and our proximity to the city (approximately 1 hour 20 minutes from South Yorkshire) to deliver cost-effective wrap programmes across all sites in a single void-period window.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover student accommodation outside Birmingham city centre — Selly Oak, Edgbaston, Erdington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Birmingham student accommodation geography, not just the city-centre B4/B5 core. University of Birmingham Edgbaston campus B15 and the dense Selly Oak B29 student accommodation zone — one of the most concentrated student rental areas in England — are within easy reach from our South Yorkshire base via the M1 and M42. Bournbrook B29, Harborne B17, Stirchley B30, Moseley B13, Erdington B23 (Aston accommodation cluster) and the Jewellery Quarter B1 PBSA zone are all within our standard Birmingham coverage. WESTSIDE Birmingham — Brindleyplace B1, Broad Street B1, Centenary Square — has growing PBSA development we also cover. We can mobilise from South Yorkshire to any Birmingham B postcode in approximately 1 hour 20 minutes to 1 hour 45 minutes depending on route.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationWrapBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Birmingham and the wider B area. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods — without
            replacement. WRPX covers University of Birmingham, Aston University, Birmingham
            City University and all major PBSA operators. Commercial-grade film,
            photographic sign-off, white-label for FM contractors. Approximately
            1 hour 20 minutes from our South Yorkshire base.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham student market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s student accommodation estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is England&apos;s second largest city and one of the most
              significant student destinations in the UK. The city is home to five
              universities with a combined student population of well over 100,000 —
              University of Birmingham, Aston University, Birmingham City University,
              University College Birmingham and Birmingham Newman University all draw
              students who require accommodation in and around the city.
            </p>
            <p>
              The University of Birmingham — a Russell Group institution with approximately
              38,000 students — occupies its large Edgbaston campus in B15, with managed
              student accommodation spread across the campus grounds. The Selly Oak and
              Bournbrook B29 zone immediately to the south of campus is one of the densest
              student rental areas in England — a grid of Victorian and Edwardian terraced
              streets converted into HMO accommodation, interspersed with purpose-built
              PBSA blocks. University of Birmingham direct halls are spread across
              the campus perimeter and adjacent streets.
            </p>
            <p>
              Aston University — approximately 16,000 students in the city centre B4 zone
              — has compact, accessible campus accommodation in the Aston Triangle. The
              PBSA market around Aston has grown significantly in the past decade, with
              Unite Students, iQ and Student Roost all operating buildings in the B4 and
              B1 zones. Birmingham City University&apos;s City Centre Campus in B4 and
              Eastside Campus in B5 contribute a further 28,000 students to the central
              Birmingham accommodation demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 20 minutes from
              Birmingham city centre via the M1 south to junction 23A and the M42 west to
              the A38(M). Birmingham is a straightforward motorway drive — there is no
              complex urban approach from the south Yorkshire direction, and early morning
              arrivals into Birmingham B4 or B15 are consistently within the drive time.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Birmingham student accommodation
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
                Often the same unit design repeated across hundreds of Birmingham student
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
            Void period scheduling for Birmingham student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham student accommodation programmes centre on the summer void —
              typically July and August, when full-year tenancy agreements end and halls
              are unoccupied for maintenance and refurbishment. This gives a 6 to 10-week
              window for systematic vinyl wrap programmes across communal kitchens,
              corridors and bedroom furniture without access restrictions.
            </p>
            <p>
              For larger Birmingham programmes — multi-building portfolios or PBSA
              estates across multiple operators — we plan phased programmes aligned to
              the specific void dates for each building. University of Birmingham campus
              halls, Selly Oak PBSA buildings and city-centre Aston/BCU blocks can have
              different void start and end dates — we co-ordinate separately for each site
              to ensure each block is complete before re-occupation.
            </p>
            <p>
              Shorter void windows are available over Christmas (typically 3 to 4 weeks)
              and Easter (1 to 2 weeks). Christmas and Easter programmes suit targeted
              single-surface or single-floor work on the most visible or worn areas
              between terms.
            </p>
            <p>
              WRPX is based in South Yorkshire — approximately 1 hour 20 minutes from
              Birmingham — so we can respond to urgent wrap requests during the academic
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
            White-label delivery for Birmingham FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX works white-label for FM contractors and maintenance companies
              delivering refurbishment programmes across Birmingham&apos;s student
              accommodation estate. We attend under your brand, follow your documentation
              format and report to your project manager. No WRPX branding appears on
              site or in any programme documentation.
            </p>
            <p>
              For FM contractors holding maintenance contracts across multiple Birmingham
              PBSA or university accommodation buildings, we provide the installation
              capacity and regional proximity to deliver cost-effective wrap programmes
              across all sites in a single void-period window. Birmingham is approximately
              1 hour 20 minutes from our South Yorkshire base via the M1 and M42 — a
              consistently reachable drive that makes daily mobilisation across a
              multi-building Birmingham programme practical without excessive travel
              overhead.
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
            Birmingham student accommodation wrap — common questions
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
            Related services for Birmingham student accommodation
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
            <Link href="/architectural-wrap-student-accommodation-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Nottingham student accommodation — Nottingham Trent University, University of Nottingham and all major PBSA operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Manchester student accommodation — University of Manchester, Manchester Met, Salford and all major PBSA operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for overlooked bedrooms, solar control for south-facing blocks, Part M manifestation for corridors.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham hotels — guest kitchenettes, bedroom furniture, reception desks and corridor doors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Birmingham student accommodation void programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the buildings, the surfaces and the void window — we&apos;ll survey,
              scope and price the programme for you. WRPX is approximately 1 hour 20
              minutes from Birmingham via the M1 and M42, so there&apos;s no significant
              mobilisation overhead on Birmingham work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Birmingham Survey →
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
