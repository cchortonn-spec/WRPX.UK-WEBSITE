import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Ipswich | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Ipswich and Suffolk — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Ipswich IP postcodes. University of Suffolk IP4 campus and surrounding student residential zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-ipswich/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Ipswich — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Ipswich and Suffolk. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Ipswich IP postcodes. University of Suffolk main campus IP4 and surrounding student residential areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14."
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
      name: "Ipswich",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-ipswich/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Ipswich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Ipswich student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Ipswich void programmes. Ipswich student accommodation spans managed PBSA blocks in the town-centre IP1 and IP4 zones close to the University of Suffolk campus to privately converted terraced HMO properties in the student residential streets across the broader IP postcode area — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Ipswich student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Ipswich student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) south and A14 east — a direct route into Suffolk. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Ipswich programmes — PBSA blocks close to the University of Suffolk IP4 campus or HMO portfolios in the residential streets of the broader IP postcode zone — we run multi-day programmes to maximise productivity within tight void windows. Ipswich can also be incorporated into a broader East Anglian programme alongside Norwich and Cambridge where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich institution generates student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of Suffolk main campus on Waterfront Walk IP4 is the primary anchor for student accommodation demand in the Ipswich area — a town-centre waterfront university campus with approximately 10,000 students generating adjacent student housing demand in the surrounding IP4 and IP1 zones. The University of Suffolk occupies a distinctive waterfront campus on the Ipswich Waterfront regeneration zone, creating a growing PBSA and student HMO market in the town-centre IP1 and IP3 corridors close to the campus. The university&apos;s expansion in recent years has added new student accommodation demand in the IP4 and waterfront IP3 zones, sustaining year-round local accommodation demand from students and young professional renters across the town-centre area.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Ipswich student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Ipswich programme — before and after images per room or per property as agreed with your property management team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Ipswich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Ipswich and the wider IP postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Ipswich commercial programmes. We cover all Ipswich IP postcodes and can extend to wider Suffolk and East Anglian student and HMO accommodation in the same regional mobilisation alongside Norwich and Cambridge.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich and Suffolk postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Ipswich and surrounding IP postcode areas — IP1 (Ipswich town centre: town-centre student accommodation close to the University of Suffolk waterfront campus; student rental properties in the inner town-centre residential streets within walking distance of the IP4 campus; Sailmakers and Buttermarket zones with proximity to campus generating town-centre student demand), IP3 (Ipswich east and Whitton: Ipswich Waterfront IP3 mixed-use zone — the University of Suffolk Waterfront Walk campus sits in this zone, generating primary PBSA and adjacent HMO demand in the IP3 waterfront corridor; Whitton IP3 student rental properties in the east Ipswich residential streets), IP4 (Ipswich north-east including Rushmere: University of Suffolk main campus on Waterfront Walk IP4 — the principal anchor for student accommodation demand in Ipswich; outer north-east IP4 residential student rental properties within cycling and bus distance of the campus), IP5 (Martlesham: outer east Ipswich residential zone; proximity to Martlesham Heath Business Park and BT Adastral Park IP5 generating young professional demand in the IP5 residential corridor). WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapIpswichPage() {
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
            <span className="text-foreground">Ipswich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Ipswich &amp; Suffolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Ipswich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Ipswich and Suffolk. Kitchen unit doors, bedroom furniture
            panels, communal surfaces and reception areas wrapped during void
            periods. University of Suffolk IP4 and surrounding student
            residential zones. PBSA operators, student landlords and HMO
            managers covered across all Ipswich IP postcodes. Approximately
            2 hours 15 minutes from our South Yorkshire base via the A1(M)
            and A14.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Ipswich PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Ipswich student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ipswich has a growing university campus and an expanding student
              accommodation sector anchored by the University of Suffolk on
              Waterfront Walk IP4. The campus occupies a distinctive position
              on the Ipswich Waterfront regeneration zone — a town-centre
              location generating adjacent student housing demand in the
              surrounding IP3 and IP4 zones and supporting a private rental
              HMO market within cycling and walking distance of the waterfront
              campus.
            </p>
            <p>
              The University of Suffolk&apos;s expansion in recent years has
              added new PBSA provision and student HMO demand in the IP3
              waterfront corridor and the IP4 north-east residential zones.
              With approximately 10,000 students, the university sustains
              year-round accommodation demand that generates consistent void-period
              refurbishment opportunities for HMO landlords, PBSA operators
              and FM contractors managing student accommodation stock across
              the Ipswich IP postcodes.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 15
              minutes from Ipswich via the A1(M) south and A14 east — a direct
              route into Suffolk. We cover all Ipswich IP postcodes and can
              incorporate Ipswich into a broader East Anglian programme
              alongside Norwich and Cambridge where programme volume justifies
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Ipswich student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Ipswich student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Ipswich
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
                lounge storage unit fronts in managed Ipswich PBSA buildings —
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
                Ipswich student accommodation buildings — wrapped to maintain a
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
                Ipswich studio or en-suite rooms — wrapped systematically room
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
                managed Ipswich student accommodation — wrapped to refresh shared
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
            Ipswich student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Norwich</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Norwich student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Ipswich</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Ipswich care homes</p>
            </Link>
            <Link href="/window-film/retail-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Ipswich and Suffolk</p>
            </Link>
            <Link href="/window-film/gym-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Window film for Ipswich gyms and leisure facilities</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Ipswich student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ipswich student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Ipswich accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Ipswich IP postcodes. White-label by
              default. Approximately 2 hours 15 minutes from South Yorkshire
              via the A1(M) and A14.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Ipswich PBSA Quote →
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
