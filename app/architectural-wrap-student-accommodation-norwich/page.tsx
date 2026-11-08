import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Norwich | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Norwich and Norfolk — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Norwich NR postcodes. University of East Anglia NR4, Norwich University of the Arts NR2 and Earlham Road NR4 student zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-norwich/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Norwich — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Norwich and Norfolk. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Norwich NR postcodes. University of East Anglia NR4, Norwich University of the Arts NR2, Earlham Road NR4 student zone and wider NR postcode student residential areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11."
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
      name: "Norwich",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-norwich/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Norwich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Norwich student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Norwich void programmes. Norwich student accommodation spans managed PBSA blocks in the city-centre NR1 and NR2 zones adjacent to Norwich University of the Arts to privately converted terraced HMO properties in the student residential streets around the Earlham Road NR4 corridor and the Golden Triangle NR2 — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Norwich student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Norwich student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) south and A11 through Thetford — a direct route from the East Midlands into East Anglia. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Norwich programmes — PBSA blocks close to UEA on the Earlham Road NR4 corridor or HMO portfolios in the residential streets of the Golden Triangle NR2 — we run multi-day programmes to maximise productivity within tight void windows. Norwich can also be incorporated into a broader East Anglian programme alongside Ipswich and Cambridge where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich universities generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of East Anglia is the primary anchor for student accommodation demand in Norwich — a major campus university on the Earlham Road NR4 corridor with approximately 17,000 students across a broad range of undergraduate and postgraduate programmes. UEA&apos;s managed on-campus accommodation and the extensive private rental market in the surrounding NR4 postcode and the Golden Triangle NR2 generate consistent void-period refurbishment demand from PBSA operators and private landlords. Norwich University of the Arts NR2 adds a significant city-centre art and design university with both studio-based and privately rented student accommodation in the NR1 and NR2 postcodes. The combined student population across both institutions sustains a substantial private rental HMO market and a growing PBSA sector across the city.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Norwich student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Norwich programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for the Norfolk climate: we select grades with adhesive rated for the temperature variation and humidity conditions common in Norwich NR postcode properties.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Norwich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Norwich and the wider NR postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Norwich commercial programmes. We cover all Norwich NR1 to NR8 postcodes and can extend to wider Norfolk NR postcode student and HMO accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich and Norfolk postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Norwich and surrounding NR postcode areas — NR1 (Norwich city centre: city-centre student accommodation close to Norwich University of the Arts and in the Castle area NR1; student rental terraced properties in the inner city-centre residential streets and around King Street NR1 generating annual void demand from landlords and managing agents; NUA-adjacent student accommodation in the lower city-centre zone), NR2 (inner west Norwich: Norwich University of the Arts NUA city-centre campus generating PBSA and adjacent private rental demand; the Golden Triangle NR2 — Norwich&apos;s principal student residential zone with high-density HMO terraced housing generating the largest private landlord void programme demand; Chapelfield area NR2 student residential streets), NR3 (inner north Norwich: Anglia Square and north city-centre student residential provision), NR4 (Eaton, UEA campus: University of East Anglia Earlham Road campus — the city&apos;s main university generating the largest PBSA and private rental student accommodation demand; Earlham Road NR4 corridor with student HMO properties; Eaton NR4 residential zone with private rental student properties), NR5 (Costessey, Bowthorpe: outer south-west residential zone with private rental student properties serving the UEA market), NR6 (Old Catton, Sprowston, Hellesdon: north Norwich residential zone with student rental properties), NR7 (Thorpe St Andrew: east Norwich residential zone with student and young professional rental properties). WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) and A11.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapNorwichPage() {
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
            <span className="text-foreground">Norwich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Norwich &amp; Norfolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Norwich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Norwich and Norfolk. Kitchen unit doors, bedroom furniture
            panels, communal surfaces and reception areas wrapped during void
            periods. University of East Anglia NR4, Norwich University of the
            Arts NR2 and the Earlham Road NR4 student zone. PBSA operators,
            student landlords and HMO managers covered across all Norwich NR
            postcodes. Approximately 2 hours 30 minutes from our South Yorkshire
            base via the A1(M) and A11.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Norwich PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Norwich student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Norwich student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Norwich has a substantial and growing student population anchored
              by two distinct institutions — the University of East Anglia on
              the Earlham Road NR4 campus with approximately 17,000 students,
              and Norwich University of the Arts in the city-centre NR2 zone.
              The combined student population supports a large private HMO rental
              market and an expanding purpose-built student accommodation sector
              across the city.
            </p>
            <p>
              UEA&apos;s managed on-campus accommodation and the dense HMO
              market in the Earlham Road NR4 corridor and the Golden Triangle
              NR2 generate the most consistent void-period refurbishment demand.
              The Golden Triangle — the residential streets between Unthank Road,
              Earlham Road and Newmarket Road NR2 — is Norwich&apos;s principal
              student neighbourhood: high-density terraced Victorian and
              Edwardian HMO properties where kitchen unit doors and bedroom
              furniture accumulate visible wear across each academic year.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 30 minutes
              from Norwich via the A1(M) south and A11 through Thetford — a
              direct route from the East Midlands into East Anglia. We cover all
              Norwich NR postcodes and can incorporate Norwich into a broader
              East Anglian programme alongside Ipswich and Cambridge where
              programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Norwich student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Norwich student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Norwich
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
                lounge storage unit fronts in managed Norwich PBSA buildings —
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
                Norwich student accommodation buildings — wrapped to maintain a
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
                Norwich studio or en-suite rooms — wrapped systematically room
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
                managed Norwich student accommodation — wrapped to refresh shared
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
            Norwich student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping York</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for York student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Nottingham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Nottingham student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Norwich</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Norwich care homes</p>
            </Link>
            <Link href="/window-film/retail-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Norwich and Norfolk</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Norwich student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Norwich student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Norwich accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Norwich NR postcodes. White-label by
              default. Approximately 2 hours 30 minutes from South Yorkshire
              via the A1(M) and A11.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Norwich PBSA Quote →
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
