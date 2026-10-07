import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Leeds | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Leeds and West Yorkshire. Kitchen doors, communal surfaces, bedroom furniture and reception areas wrapped during void periods. WRPX covers all Leeds universities and major PBSA operators — Unite Students, iQ, Student Roost, Empiric, Yugo — plus university-managed halls. Commercial specification, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Leeds — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Leeds and West Yorkshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Leeds LS2/LS6, Leeds Beckett University LS1/LS6, Leeds Arts University LS6 and all major PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Leeds",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-leeds/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application — Leeds student kitchen units take hard daily use and wrapping restores appearance at a fraction of replacement cost. Bedroom kitchenette doors and drawer fronts in en-suite studio flats, bedroom furniture panels (wardrobe doors, bedside cabinet faces, drawer fronts), communal lounge furniture panels, reception desk fascias, corridor doors and study booth panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete a Leeds student accommodation block during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary window for Leeds student accommodation vinyl wrap programmes. WRPX is based in South Yorkshire, approximately 30 minutes from Leeds city centre via the M1 — Leeds is a short daily drive with no travel premium on the programme. We work through blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large Leeds PBSA buildings — 200+ beds, multiple communal kitchen areas, or full accommodation estates — we plan phased programmes across multiple void windows if a single summer is not sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leeds PBSA operators and universities do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Leeds. The Leeds PBSA market is extensive: Unite Students operates multiple city-centre buildings including properties in the LS2 and LS6 zones around the University of Leeds campus. iQ Student Accommodation has significant Leeds city-centre presence. Student Roost manages buildings across the LS1 and LS2 corridor. Empiric Student Property operates in Leeds. Yugo (formerly Fresh Student Living) has Leeds buildings. University of Leeds manages its own campus accommodation across the Headingley and Bodington campus zones. Leeds Beckett University manages accommodation on its City Campus LS1 and Headingley Campus LS6. We work white-label for FM contractors managing maintenance programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does the vinyl wrap finish hold up in Leeds student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film on communal kitchen unit doors typically delivers 5–8 years in Leeds student accommodation with normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Leeds programme — before and after images per room or per block depending on the scope agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label delivery is standard for Leeds student accommodation programmes. We attend on site under your company or your client&apos;s brand, follow your programme schedule and documentation format, and report directly to your project manager or accommodation team. No WRPX branding appears on site or in any programme documentation. For FM contractors managing maintenance contracts across Leeds&apos;s student accommodation portfolio — covering multiple buildings for multiple operators — we provide the installation capacity and accessible location to deliver cost-effective wrap refurbishment across all sites in a single void-period programme.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationWrapLeedsPage() {
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
            <Link href="/architectural-wrap-student-accommodation/" className="text-accent hover:underline">Student Accommodation Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Wrapping · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for Leeds student accommodation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides vinyl wrap refurbishment for student accommodation across Leeds
            and West Yorkshire. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — commercial-grade
            film, photographic sign-off, white-label for FM contractors. Based in South
            Yorkshire: Leeds is approximately 30 minutes via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Student Accommodation Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds student market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds&apos;s student accommodation estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is one of the largest student cities in England. The University of
              Leeds — a Russell Group institution with over 38,000 students — occupies
              a substantial campus in the LS2 and LS6 zones immediately north of the
              city centre. The university manages a significant direct accommodation
              portfolio including Bodington Hall LS16, Charles Morris Hall LS2, Devonshire
              Hall LS3, Henry Price Residences LS6 and further halls across the Headingley
              corridor. Many of these buildings were constructed in the 1960s and 1970s —
              the generation of student accommodation now most in need of vinyl wrap
              refurbishment on kitchen units, bedroom furniture and communal surfaces.
            </p>
            <p>
              Leeds Beckett University — with approximately 28,000 students — operates
              from its City Campus LS1 in the heart of the city centre and its Headingley
              Campus LS6, adjoining the University of Leeds on the same northern corridor.
              Leeds Beckett manages halls including Opal 1, Opal 2 and Kirkstall Brewery
              accommodation along the Kirkstall Road LS3 corridor — a mixed building stock
              ranging from converted Victorian industrial buildings to purpose-built student
              blocks from the 1990s through the 2010s.
            </p>
            <p>
              Leeds&apos;s private sector PBSA (purpose-built student accommodation) market
              has expanded dramatically over the past decade. Unite Students operates
              multiple buildings in the LS2 and LS6 zones. iQ Student Accommodation
              has significant Leeds city-centre presence. Student Roost manages buildings
              in the LS1 and LS2 corridor. Empiric and Yugo also operate Leeds buildings.
              Leeds Arts University LS6 and Leeds Trinity University LS18 in Horsforth
              each bring further student populations with accommodation requirements in
              the west Leeds and Headingley zones.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 30 minutes south of Leeds
              city centre via the M1. There is no mobilisation premium on Leeds student
              accommodation programmes — the M1 from South Yorkshire to the Leeds
              junction is the same route we run for our own commercial work in the
              city. We can be on site anywhere in Leeds within 30–45 minutes of a call,
              which makes rapid survey visits and same-day programme adjustments practical
              for accommodation and FM teams managing tight void windows.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Leeds student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal kitchen unit doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-use surface in any student accommodation block. Worn,
                delaminating or scratched kitchen unit doors wrapped with commercial-grade
                architectural vinyl — delivering a new-kitchen appearance at a small
                fraction of full unit replacement cost.
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
                Often the same unit design repeated across hundreds of Leeds student
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
            Void period scheduling for Leeds student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds student accommodation programmes centre on the summer void — typically
              July and August, when the majority of full-year tenancy agreements end and
              student halls are unoccupied for maintenance and refurbishment. This gives
              a 6 to 10-week window for systematic vinyl wrap programmes across communal
              kitchens, corridors and bedroom furniture without access restrictions.
            </p>
            <p>
              For larger Leeds programmes — multi-building portfolios, entire floor
              refurbishments or accommodation estates with 200+ beds — we plan phased
              programmes aligned to your specific void dates for each building. Some Leeds
              PBSA operators stagger occupancy across different buildings, giving extended
              programme windows. We work to whatever access schedule your facilities or
              accommodation management team provides.
            </p>
            <p>
              Shorter void windows are available over Christmas (typically 3 to 4 weeks
              for university-managed Leeds accommodation) and Easter (1 to 2 weeks for
              most Leeds student halls). Christmas and Easter programmes suit targeted
              single-surface or single-floor work where the most visible or worn areas
              are addressed between terms.
            </p>
            <p>
              WRPX is based in South Yorkshire — approximately 30 minutes from Leeds —
              so we can respond to emergency or urgent wrap requests during the year
              if a specific area requires attention between standard void periods, without
              the mobilisation overhead that a more distant contractor would need to recover.
            </p>
          </div>
        </div>
      </section>

      {/* White label section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label delivery for Leeds FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX works white-label for FM contractors and maintenance companies
              delivering refurbishment programmes across Leeds&apos;s student
              accommodation estate. We attend under your brand, follow your documentation
              format and report to your project manager. No WRPX branding appears on site
              or in any programme paperwork.
            </p>
            <p>
              For FM contractors holding maintenance contracts across multiple Leeds PBSA
              or university accommodation buildings, we provide the installation capacity
              and regional proximity to deliver cost-effective wrap programmes across all
              sites in a single void-period window. Leeds is 30 minutes from our South
              Yorkshire base — the most consistently reachable major PBSA city in our
              network outside Sheffield itself.
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
            Leeds student accommodation wrap — common questions
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
            Related services for Leeds student accommodation
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
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for overlooked bedrooms, solar control for south-facing blocks, Part M manifestation for corridors.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Leeds</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leeds hotels — guest kitchenettes, bedroom furniture, reception desks and corridor doors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leeds student accommodation void programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the buildings, the surfaces and the void window — we&apos;ll survey,
              scope and price the programme for you. WRPX is 30 minutes from Leeds via
              the M1, so there&apos;s no mobilisation overhead on Leeds work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leeds Survey →
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
