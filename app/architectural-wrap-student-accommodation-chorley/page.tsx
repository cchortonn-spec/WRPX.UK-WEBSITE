import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Chorley | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Chorley and mid-Lancashire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Chorley PR7 postcodes. UCLan commuter student zone. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-chorley/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Chorley — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Chorley and mid-Lancashire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and further education student housing across all Chorley PR7 postcodes. UCLan commuter student zone, Runshaw College and Chorley College catchment. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61."
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
      name: "Chorley",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-chorley/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Chorley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Chorley student HMO and rental accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Chorley void programmes. Chorley&apos;s student accommodation stock ranges from traditional Victorian terraced HMO conversions in the town-centre PR7 zone to modern purpose-built shared housing in Euxton PR7 and Buckshaw Village PR7 — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Chorley student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Chorley student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Chorley via the M62 and M61. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Chorley programmes — multiple HMO properties in the same PR7 postcode zone — we run multi-day programmes to maximise productivity within tight void windows. Access for individual surface repairs or small refurbishments can also be co-ordinated around occupancy where a full void is not available.",
      },
    },
    {
      "@type": "Question",
      name: "Which Chorley colleges and universities generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Runshaw College in Leyland PR25 — directly adjacent to Chorley — is a large further education and sixth-form college with a substantial student body generating accommodation demand across the Chorley PR7 and Leyland PR25 corridor. Chorley College on High Street PR7 provides further education provision within the town itself. UCLan (University of Central Lancashire) in Preston PR1 generates commuter student demand from Chorley — students who study in Preston and live in cheaper Chorley HMO and rental stock, particularly in the town-centre PR7 zone, making the approximately 20-minute Preston to Chorley rail commute viable. This combination of local FE college students and UCLan commuter students creates a consistent student HMO rental market in Chorley across the PR7 postcode geography.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Chorley student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Chorley programme — before and after images per room or per property as agreed with your property management team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Chorley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Chorley and the wider mid-Lancashire area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Chorley commercial programmes. We cover all Chorley PR7 postcodes and can extend to Preston PR1, Bolton BL, Wigan WN and wider Lancashire in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Chorley and mid-Lancashire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Chorley and surrounding PR7 postcode areas — PR7 (Chorley town and district: the town-centre PR7 zone around High Street, Market Street and Union Street with traditional terraced HMO stock converted for student and young professional rental driven by Chorley College PR7 and UCLan commuter student demand; Euxton PR7 — the suburban south-west Chorley village with modern semi-detached and purpose-built student-appropriate rental provision; Buckshaw Village PR7 — the contemporary residential development on the former Royal Ordnance Factory site with modern shared housing suitable for PBSA-style management; Adlington PR7 — the village between Chorley and Horwich with established community HMO provision; Eccleston PR7 — the semi-rural village south-west of Chorley with residential rental provision; Coppull PR7 — semi-rural village west of Chorley with residential HMO and rental provision), PR25 (Leyland — the town directly south of Chorley; Runshaw College on Langdale Road PR25 is the primary FE anchor for the Leyland and Chorley student accommodation market, generating substantial HMO and student rental demand across the Leyland PR25 and adjacent Chorley PR7 corridor; Clayton Brook and Clayton-le-Woods PR25 residential zones), PR26 (Farington, Earnshaw Bridge: the Leyland and South Ribble fringe zone with student and young professional HMO and rental provision from Runshaw College and UCLan commuter students), PR6 (Whittle-le-Woods, Clayton-le-Woods: the semi-rural residential villages between Chorley and Preston with student rental and HMO provision from UCLan and Runshaw College students), PR5 (Bamber Bridge, Lostock Hall: south Preston zone with student and young professional rental from UCLan and Runshaw College commuters). Bolton BL, Wigan WN, Preston PR1 and wider Lancashire also within reach. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Chorley via the M62 and M61.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapChorleyPage() {
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
            <span className="text-foreground">Chorley</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Chorley &amp; Mid-Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Chorley
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Chorley and mid-Lancashire. Kitchen unit doors, bedroom
            furniture panels, communal surfaces and reception areas wrapped
            during void periods. UCLan commuter student zone and Runshaw College
            catchment. PBSA operators, student landlords and HMO managers
            covered across all Chorley PR7 postcodes. Approximately 1 hour 15
            minutes from our South Yorkshire base via the M62 and M61.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Chorley PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Chorley student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Chorley student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Chorley is a mid-Lancashire market town with a student and young
              professional rental market driven by two main sources. Runshaw
              College in Leyland PR25 — directly south of Chorley — is one
              of the North West&apos;s largest further education and sixth-form
              colleges, with a substantial student body generating accommodation
              demand across the Chorley PR7 and Leyland PR25 corridor. Chorley
              College on High Street PR7 provides further education provision
              within the town itself.
            </p>
            <p>
              UCLan (University of Central Lancashire) in Preston PR1 generates
              commuter student demand from Chorley — students who study at
              UCLan&apos;s main campus and live in cheaper Chorley HMO and rental
              stock, using the approximately 20-minute Preston to Chorley rail
              service. This combination of Runshaw College students and UCLan
              commuter students creates a consistent HMO rental market across
              the Chorley PR7 town-centre zone and surrounding residential
              corridors.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Chorley via the M62 and M61 — making Chorley one of the
              most accessible mid-Lancashire towns from our base. We cover all
              Chorley PR7 postcodes, Preston PR1, Wigan WN, Bolton BL and
              wider Lancashire student accommodation in the same regional
              mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Chorley student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Chorley student HMO
                shared kitchens — the surface that accumulates visible wear
                faster than almost any other interior finish. Wrapped during
                the summer void to restore a clean, uniform finish.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels and bedside cabinet fronts in Chorley
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
                lounge storage unit fronts in managed Chorley PBSA buildings —
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
                Chorley student accommodation buildings — wrapped to maintain a
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
                Chorley studio or en-suite rooms — wrapped systematically room
                by room during the summer void, covering full blocks or selected
                floors as agreed with your property management team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage panels and media wall unit fronts across
                managed Chorley student accommodation — wrapped to refresh shared
                amenity spaces that accumulate wear from constant use across the
                academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Chorley student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-preston/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Preston</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Preston and UCLan campus student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-chorley/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Chorley</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Chorley care homes and nursing homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Preston</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Preston and Lancashire</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Wigan</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wigan student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Chorley student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Chorley student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Chorley accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Chorley PR7 postcodes. White-label by
              default. Approximately 1 hour 15 minutes from South Yorkshire via
              the M62 and M61.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Chorley PBSA Quote →
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
