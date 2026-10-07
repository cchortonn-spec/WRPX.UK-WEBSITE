import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Sheffield | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Sheffield and South Yorkshire. Kitchen doors, communal surfaces, bedroom furniture and reception areas wrapped during void periods. WRPX covers all Sheffield universities and major PBSA operators — Unite, iQ, Student Roost, Empiric, Yugo — plus university-managed halls. Commercial specification, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Sheffield — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Sheffield and South Yorkshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers all Sheffield university-managed halls, Unite, iQ, Student Roost, Empiric, Yugo and other PBSA operators. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Sheffield",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-sheffield/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application — Sheffield student kitchen units take hard daily use and wrapping restores appearance at a fraction of replacement cost. Bedroom kitchenette doors and drawer fronts in en-suite studio flats, bedroom furniture panels (wardrobe doors, bedside cabinet faces, drawer fronts), communal lounge furniture panels, reception desk fascias, corridor doors and study booth panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete a Sheffield student accommodation block during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary window for Sheffield student accommodation vinyl wrap programmes. WRPX is based in South Yorkshire, which means Sheffield is a zero-mobilisation location for us — we can be on site within 30 minutes of a call, and there is no travel premium on Sheffield programmes. We work through blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For large Sheffield PBSA buildings — 200+ beds, multiple communal kitchen areas — we can plan phased programmes across multiple void windows if a single summer is not sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield PBSA operators do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with PBSA operators, university accommodation managers and FM contractors across Sheffield. The Sheffield PBSA market includes Unite Students (Beau Sejour S1, Pond Street S1, New Concordia Wharf S1, Regent Court S1 and other city-centre buildings), iQ Student Accommodation (Sheffield city centre portfolio), Student Roost (CRM-managed buildings across Sheffield), Empiric Student Property (Atlas House S1, Sheffield), Yugo (formerly Fresh Student Living), and the university-managed accommodation estate. University of Sheffield manages Endcliffe Village S11, Ranmoor Village S10, Tapton Hall S10 and Sorby House S3. Sheffield Hallam manages Collegiate Halls S10 and city-centre buildings around S1. We work white-label for FM contractors managing accommodation maintenance programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does the vinyl wrap finish hold up in Sheffield student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film on communal kitchen unit doors typically delivers 5–8 years in Sheffield student accommodation with normal use. Bedroom furniture panels in studio flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Sheffield programme — before and after images per room or per block depending on the scope agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label delivery is standard for Sheffield student accommodation programmes. We attend on site under your company or your client&apos;s brand, follow your programme schedule and documentation format, and report directly to your project manager or accommodation team. No WRPX branding appears on site or in any programme documentation. For FM contractors managing maintenance contracts across Sheffield&apos;s student accommodation portfolio, we provide the installation capacity and local presence to deliver cost-effective wrap refurbishment across multiple buildings or sites in a single void-period programme.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationWrapSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Wrapping · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for Sheffield student accommodation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides vinyl wrap refurbishment for student accommodation across Sheffield
            and South Yorkshire. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — commercial-grade film,
            photographic sign-off, white-label for FM contractors. Based in South Yorkshire:
            Sheffield is a zero-mobilisation location.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Student Accommodation Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield student market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s student accommodation estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has one of the largest student populations in England outside
              London. The University of Sheffield — a Russell Group institution with
              over 30,000 students — manages a substantial direct accommodation portfolio:
              Endcliffe Village S11 (one of the largest student residential sites in the
              country at over 2,000 beds), Ranmoor Village S10, Tapton Hall S10 and
              Sorby House S3. These university-managed halls carry a large stock of
              kitchen units, communal furniture and bedroom fittings installed in the
              1990s and 2000s that are now at the point where vinyl wrap refurbishment
              is the most cost-effective improvement route.
            </p>
            <p>
              Sheffield Hallam University — with approximately 32,000 students — manages
              Collegiate Halls S10 and city-centre blocks in S1 and S2, with a growing
              proportion of students in the private PBSA sector. The Sheffield PBSA
              market has expanded significantly over the past decade. Unite Students
              operates multiple buildings in the S1 city centre zone — Pond Street,
              New Concordia Wharf, Regent Court and others. iQ Student Accommodation,
              Student Roost and Empiric all operate Sheffield city-centre buildings.
              Yugo manages further PBSA stock across the S1 and S3 corridors.
            </p>
            <p>
              Sheffield&apos;s PBSA building stock includes everything from converted Victorian
              and Edwardian mill and warehouse conversions in Kelham Island S3 through
              to purpose-built city-centre towers in S1 and S2 and lower-rise residential
              blocks in Broomhill S10, Crookes S10 and the western suburbs. This building
              stock diversity produces a wide range of surface and substrate types — from
              original 1990s kitchen units with post-formed laminate doors to modern
              carcass units with vinyl-wrapped or thermofoil doors — all of which require
              careful survey assessment before film specification.
            </p>
            <p>
              WRPX is based in South Yorkshire. Sheffield is a zero-travel, zero-mobilisation
              location for us — no distance premium, no first-day travel cost. We can be
              on site anywhere in Sheffield within 30 minutes, which makes rapid survey
              visits and responsive programme adjustments straightforward for accommodation
              and FM teams managing tight void windows.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Sheffield student accommodation
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
                and drawer fronts. Lower use frequency than communal kitchens, so
                the wrap finish typically extends further between refurbishment cycles.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, drawer front panels and bedside cabinet surfaces
                in student bedrooms. Often the same unit design repeated across
                hundreds of rooms — systematic wrap programmes reduce per-room
                refurbishment cost significantly.
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
                door panels and corridor feature panels. Wrapped during void periods
                to avoid disruption to occupied floors.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, post room and parcel locker surrounds,
                concierge counter fronts and lobby feature panels. Visible
                front-of-house surfaces that benefit most from a consistent,
                brand-standard finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Void period scheduling */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Void period scheduling for Sheffield student accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield student accommodation programmes centre on the summer void — typically
              July and August, when the majority of full-year tenancy agreements end and
              student halls are unoccupied for maintenance and refurbishment. This gives
              a 6 to 10-week window for systematic vinyl wrap programmes across communal
              kitchens, corridors and bedroom furniture without access restrictions.
            </p>
            <p>
              For larger Sheffield programmes — multi-building portfolios, entire floor
              refurbishments or accommodation estates with 200+ beds — we plan phased
              programmes aligned to your specific void dates for each building. Some
              Sheffield PBSA operators stagger occupancy across different buildings,
              giving extended programme windows. We work to whatever access schedule
              your facilities or accommodation management team provides.
            </p>
            <p>
              Shorter void windows are available over Christmas (typically 3 to 4 weeks
              for university-managed accommodation) and Easter (1 to 2 weeks for most
              Sheffield student accommodation). Christmas and Easter programmes suit
              targeted single-surface or single-floor work where the most visible
              or worn areas are addressed between terms.
            </p>
            <p>
              Because WRPX is based in South Yorkshire, we can respond to emergency or
              urgent wrap requests during the year if a specific area requires attention
              between standard void periods — without the mobilisation overhead a distant
              contractor would need to recover.
            </p>
          </div>
        </div>
      </section>

      {/* White label section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            White-label delivery for Sheffield FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX works white-label for FM contractors and maintenance companies
              delivering refurbishment programmes across Sheffield&apos;s student
              accommodation estate. We attend under your brand, follow your documentation
              format and report to your project manager. No WRPX branding appears on site
              or in any programme paperwork.
            </p>
            <p>
              For FM contractors holding maintenance contracts across multiple Sheffield
              PBSA or university accommodation buildings, we provide the installation
              capacity and local presence to deliver cost-effective wrap programmes
              across all sites in a single void-period window. Sheffield is our home
              territory — there is no competing call on our time during the summer void
              from more distant locations.
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
            Sheffield student accommodation wrap — common questions
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
            Related services for Sheffield student accommodation
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all student accommodation vinyl wrap applications, surfaces, film spec and process.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Sheffield hotels — guest kitchenettes, bedroom furniture, reception desks and corridor doors.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for overlooked bedrooms, solar control for south-facing blocks, Part M manifestation for corridors.</p>
            </Link>
            <Link href="/architectural-wrap-education-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Sheffield schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Sheffield schools, Sheffield Hallam and University of Sheffield.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sheffield student accommodation void programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the buildings, the surfaces and the void window — we&apos;ll survey,
              scope and price the programme for you. WRPX is Sheffield-based, so there&apos;s
              no mobilisation overhead on Sheffield work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Sheffield Survey →
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
