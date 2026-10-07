import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Manchester | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Manchester and Greater Manchester. Kitchen doors, communal surfaces, bedroom furniture and reception areas wrapped during void periods. WRPX covers University of Manchester, Manchester Metropolitan, Salford, PBSA operators and purpose-built student blocks — Unite Students, iQ, Student Roost, Liberty Living, Yugo. Commercial specification, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Manchester — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Manchester and Greater Manchester. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Manchester M13/M14, Manchester Metropolitan University M15, University of Salford M5 and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Manchester",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-manchester/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application — Manchester student kitchen units take hard daily use and wrapping restores appearance at a fraction of replacement cost. Bedroom kitchenette doors and drawer fronts in en-suite studio flats, bedroom furniture panels (wardrobe doors, bedside cabinet faces, drawer fronts), communal lounge furniture panels, reception desk fascias, corridor doors and study booth panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete a Manchester student accommodation block during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary window for Manchester student accommodation vinyl wrap programmes. WRPX is based in South Yorkshire, approximately 50 to 60 minutes from Manchester city centre via the M67 and M60, or the M1 north to the M62 west. Manchester is a direct, well-connected drive from our base — no significant motorway congestion on early-morning mobilisations into Greater Manchester. We work through blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large Manchester PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows if a single summer is not sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester PBSA operators and universities do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Manchester. The Manchester PBSA market is one of the largest in England. The University of Manchester — a Russell Group university with approximately 40,000 students — manages significant direct accommodation in the M13 and M14 zones south of the city centre, including Owens Park, Oak House, Whitworth Park and further halls in the Fallowfield/Withington corridor. Manchester Metropolitan University operates from its city-centre All Saints campus M15 with accommodation in purpose-built blocks and managed halls. The University of Salford M5 covers the Peel Park and MediaCity corridors west of Manchester. PBSA operators active in Manchester include Unite Students (multiple city-centre and Fallowfield buildings), iQ Student Accommodation, Student Roost, Liberty Living, Yugo and Empiric. We work white-label for FM contractors managing maintenance programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does the vinyl wrap finish hold up in Manchester student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film on communal kitchen unit doors typically delivers 5 to 8 years in Manchester student accommodation with normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Manchester programme — before and after images per room or per block depending on the scope agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label delivery is standard for Manchester student accommodation programmes. We attend on site under your company or your client&apos;s brand, follow your programme schedule and documentation format, and report directly to your project manager or accommodation team. No WRPX branding appears on site or in any programme documentation. For FM contractors managing maintenance contracts across Manchester&apos;s student accommodation portfolio — covering multiple buildings for multiple operators — we provide the installation capacity and accessible location to deliver cost-effective wrap refurbishment across all sites in a single void-period programme.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationWrapManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Manchester &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Manchester and Greater Manchester. Kitchen unit doors, bedroom furniture panels,
            communal surfaces and reception areas wrapped during void periods — without
            replacement. WRPX covers University of Manchester, Manchester Metropolitan,
            University of Salford and all major PBSA operators. Commercial-grade film,
            photographic sign-off, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester student market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s student accommodation estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is one of the largest student cities in England. The University
              of Manchester — a Russell Group institution with approximately 40,000 students
              — occupies a substantial campus in the M13 and M14 zones immediately south
              of the city centre. The university manages significant direct accommodation
              in the Fallowfield and Withington corridor: Owens Park is one of the largest
              student residence complexes in Europe, with over 2,000 beds across a mixture
              of self-catering flats and cluster units. Oak House, Whitworth Park, Weston
              Hall and further university-managed halls extend the direct accommodation
              estate across the M14 and M20 zones. Many of these buildings were constructed
              in the 1960s and 1970s — the generation now most in need of vinyl wrap
              refurbishment on kitchen units, bedroom furniture and communal surfaces.
            </p>
            <p>
              Manchester Metropolitan University, with approximately 37,000 students,
              operates from its All Saints and Birley campuses in M15 and M14. Manchester
              Met&apos;s accommodation portfolio includes purpose-built student blocks close
              to the All Saints campus and managed PBSA in the city-centre corridor. The
              University of Salford, based in M5 west of the city centre near the BBC
              MediaCity campus, manages accommodation at Peel Park and across the Salford
              Quays area — including mixed-use blocks with a high proportion of en-suite
              studio flats that benefit significantly from vinyl wrap refurbishment of
              bedroom kitchenette units.
            </p>
            <p>
              Manchester&apos;s PBSA sector is one of the most extensive in England. Unite
              Students operates multiple buildings including Sanctuary and Manchester
              Conference Centre blocks in the M1/M3 city-centre zones. iQ Student
              Accommodation has significant Manchester presence. Student Roost manages
              buildings across the M14 Fallowfield corridor and M1 city centre. Liberty
              Living (now a Unite entity) contributed several large Manchester PBSA
              buildings. Empiric and Yugo also operate Manchester accommodation.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 50 to 60 minutes from
              Manchester city centre via the M67 eastbound to the M60, or the M1 north
              to the M62 west. There is no significant mobilisation premium on Manchester
              student accommodation programmes — early morning departures from South
              Yorkshire reach Manchester consistently within the hour. We can mobilise
              for survey visits and same-day programme adjustments across Greater Manchester
              without the overhead of a distant contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Manchester student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal kitchen unit doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-use surface in any student accommodation block. Worn,
                delaminating or scratched kitchen unit doors wrapped with commercial-grade
                architectural vinyl — delivering a new-kitchen appearance at a fraction
                of full unit replacement cost.
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
                Often the same unit design repeated across hundreds of Manchester student
                rooms — systematic wrap programmes reduce per-room cost significantly.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal lounge furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Coffee table surfaces, TV unit panels, storage furniture fronts and
                fixed lounge seating panels in communal social areas. High-durability
                film specified for contact surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom doors, fire door leaf faces, utility room
                door panels and corridor feature panels — wrapped during void periods
                to avoid disruption to occupied floors.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, parcel locker surrounds, concierge counter
                fronts and lobby feature panels — visible front-of-house surfaces
                that benefit most from a refreshed, consistent finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Void period scheduling */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Void period scheduling for Manchester student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester student accommodation programmes centre on the summer void —
              typically July and August, when the majority of full-year tenancy agreements
              end and student halls are unoccupied for maintenance and refurbishment. This
              gives a 6 to 10-week window for systematic vinyl wrap programmes across
              communal kitchens, corridors and bedroom furniture without access restrictions.
            </p>
            <p>
              For larger Manchester programmes — multi-building portfolios, entire floor
              refurbishments or accommodation estates with 200+ beds — we plan phased
              programmes aligned to your specific void dates for each building. Some
              Manchester PBSA operators stagger occupancy across different buildings,
              giving extended programme windows. Owens Park alone, with over 2,000 beds,
              is a multi-phase programme that benefits from careful scheduling across
              buildings to ensure each block is complete before re-occupation.
            </p>
            <p>
              Shorter void windows are available over Christmas (typically 3 to 4 weeks
              for university-managed Manchester accommodation) and Easter (1 to 2 weeks
              for most Manchester student halls). Christmas and Easter programmes suit
              targeted single-surface or single-floor work where the most visible or worn
              areas are addressed between terms.
            </p>
            <p>
              WRPX is based in South Yorkshire — approximately 50 to 60 minutes from
              Manchester — so we can respond to urgent wrap requests during the year if
              a specific area requires attention between standard void periods, without
              the mobilisation overhead that a more distant contractor would need to recover.
            </p>
          </div>
        </div>
      </section>

      {/* White label section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label delivery for Manchester FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX works white-label for FM contractors and maintenance companies
              delivering refurbishment programmes across Manchester&apos;s student
              accommodation estate. We attend under your brand, follow your documentation
              format and report to your project manager. No WRPX branding appears on site
              or in any programme paperwork.
            </p>
            <p>
              For FM contractors holding maintenance contracts across multiple Manchester
              PBSA or university accommodation buildings, we provide the installation
              capacity and regional proximity to deliver cost-effective wrap programmes
              across all sites in a single void-period window. Manchester is 50 to 60
              minutes from our South Yorkshire base on the M67/M60 — a consistently
              reachable drive that makes daily mobilisation across a multi-building
              Manchester programme practical without excessive travel overhead.
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
            Manchester student accommodation wrap — common questions
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
            Related services for Manchester student accommodation
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
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for overlooked bedrooms, solar control for south-facing blocks, Part M manifestation for corridors.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Manchester hotels — guest kitchenettes, bedroom furniture, reception desks and corridor doors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Manchester student accommodation void programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the buildings, the surfaces and the void window — we&apos;ll survey,
              scope and price the programme for you. WRPX is approximately 50 to 60 minutes
              from Manchester via the M67/M60, so there&apos;s no significant mobilisation
              overhead on Manchester work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Manchester Survey →
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
