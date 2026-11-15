import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Walsall | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Walsall and the Black Country — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Walsall WS postcodes. University of Wolverhampton Walsall campus WS1 and surrounding student residential zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-walsall/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Walsall — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Walsall and the Black Country. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Walsall WS postcodes. University of Wolverhampton Walsall campus WS1 and surrounding student residential areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
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
      name: "Walsall",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-walsall/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Walsall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Walsall student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Walsall void programmes. Walsall student accommodation spans managed PBSA blocks in the town-centre WS1 zone adjacent to the University of Wolverhampton Walsall campus to privately converted terraced HMO properties in the student residential streets across the broader WS postcode area — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Walsall student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Walsall student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 south and M6 — a direct motorway route from Sheffield into the West Midlands. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Walsall programmes — PBSA blocks close to the University of Wolverhampton Walsall campus WS1 or HMO portfolios in the residential streets of the broader WS postcode zone — we run multi-day programmes to maximise productivity within tight void windows. Walsall can also be incorporated into a broader Black Country and West Midlands programme alongside Wolverhampton and Birmingham where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall institution generates student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of Wolverhampton Walsall campus on Wisemore WS1 is the primary anchor for student accommodation demand in the Walsall area — a town-centre university campus generating adjacent student housing demand in the surrounding WS1 and WS2 zones. The Walsall campus is part of the broader University of Wolverhampton estate that also includes the Springfield campus in Wolverhampton, creating a combined student population that sustains student accommodation demand across both the Walsall and Wolverhampton WV1 postcodes. Walsall College on Littleton Street WS1 adds a further further-education student population across the town centre. The combined student and further-education population supports a local private rental HMO market and a small but growing PBSA sector in the Walsall town-centre zone.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Walsall student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Walsall programme — before and after images per room or per property as agreed with your property management team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Walsall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Walsall and the wider WS postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Walsall commercial programmes. We cover all Walsall WS postcodes and can extend to wider Black Country student and HMO accommodation in the same regional mobilisation alongside Wolverhampton and Birmingham.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall and Black Country postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Walsall and surrounding WS postcode areas — WS1 (Walsall town centre: University of Wolverhampton Walsall campus on Wisemore WS1 generating the town&apos;s primary PBSA and adjacent student HMO demand; town-centre student accommodation close to Walsall College Littleton Street WS1; student rental properties in the inner town-centre residential streets within walking distance of the university campus), WS2 (Walsall outer south: student and young professional rental properties in the outer south-west WS2 residential zone; proximity to Manor Hospital WS2 and the town-centre university campus generates mixed student demand), WS3 (Bloxwich: outer north Walsall residential zone with student rental properties accessible to the town-centre campus), WS4 (Rushall, Shelfield: outer residential student rental provision), WS9 (Aldridge: outer Walsall residential zone). Wolverhampton WV1 also within the broader University of Wolverhampton student market for multi-site PBSA programmes. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapWalsallPage() {
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
            <span className="text-foreground">Walsall</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Walsall &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Walsall
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Walsall and the Black Country. Kitchen unit doors, bedroom
            furniture panels, communal surfaces and reception areas wrapped during
            void periods. University of Wolverhampton Walsall campus WS1 and
            surrounding student residential zones. PBSA operators, student
            landlords and HMO managers covered across all Walsall WS postcodes.
            Approximately 1 hour from our South Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Walsall PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Walsall student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Walsall has a town-centre university campus and a growing student
              accommodation sector anchored by the University of Wolverhampton
              Walsall campus on Wisemore WS1. The campus generates adjacent
              student housing demand in the surrounding WS1 and WS2 zones,
              supporting a private rental HMO market within walking distance of
              the town-centre campus.
            </p>
            <p>
              The University of Wolverhampton Walsall campus is part of the
              broader University of Wolverhampton estate, creating a combined
              student population across both the Walsall WS1 and Wolverhampton
              WV1 postcodes. Walsall College on Littleton Street WS1 adds a
              further further-education student population, sustaining year-round
              local accommodation demand from students and young professional
              renters across the town-centre zone.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Walsall via the M1 south and M6 — a direct motorway route from
              Sheffield into the West Midlands. We cover all Walsall WS
              postcodes and can incorporate Walsall into a broader Black Country
              and West Midlands programme alongside Wolverhampton and Birmingham
              where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Walsall student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Walsall student HMO
                shared kitchens — the surface that accumulates visible wear
                fastest. Wrapped during the summer void to restore a clean,
                uniform finish ahead of the new academic year.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels and bedside cabinet fronts in Walsall
                student rooms — wrapped alongside shared kitchen units in the
                same void programme to refresh the full accommodation without
                furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal areas
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, concierge counter panels and communal
                lounge storage unit fronts in managed Walsall PBSA buildings —
                wrapped to restore the managed appearance of high-contact
                communal surfaces within each block.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and communal doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and communal fire door cladding throughout
                Walsall student accommodation buildings — wrapped to maintain a
                consistent appearance across the property without disruption
                to residents during term.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units — individual rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and drawer fronts within individual
                Walsall studio or en-suite rooms — wrapped systematically room
                by room during the summer void, covering full blocks or
                selected floors as agreed with your property management team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage panels and media wall unit fronts across
                managed Walsall student accommodation — wrapped to refresh shared
                amenity spaces that accumulate wear from constant use across
                the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full student accommodation vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wolverhampton student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Birmingham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Birmingham student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Walsall</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Walsall care homes</p>
            </Link>
            <Link href="/window-film/retail-window-film-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Walsall and the Black Country</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Walsall student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Walsall student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Walsall accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Walsall WS postcodes. White-label by
              default. Approximately 1 hour from South Yorkshire via the M1
              and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Walsall PBSA Quote →
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
