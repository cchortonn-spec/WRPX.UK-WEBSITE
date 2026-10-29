import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Swansea | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Swansea and South West Wales — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Swansea SA postcodes. Swansea University Bay Campus SA1, UWTSD Swansea SA1, Uplands SA2 and Brynmill SA2 student zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-swansea/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Swansea — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Swansea and South West Wales. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Swansea SA postcodes. Swansea University Bay Campus SA1, UWTSD Swansea SA1, Uplands SA2, Brynmill SA2 and Sketty SA2 student zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4."
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
      name: "Swansea",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-swansea/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Swansea student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Swansea void programmes. Swansea&apos;s student accommodation stock ranges from Victorian terraced HMO conversions in the Uplands SA2 and Brynmill SA2 zones to modern purpose-built student housing in the SA1 city-centre and Bay Campus areas — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Swansea student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Swansea student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4 — a direct motorway route across England and into South Wales via the Severn crossings. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Swansea programmes — multiple HMO properties in the same SA2 postcode zone or full PBSA blocks around the Swansea University Bay Campus SA1 — we run multi-day programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea universities and colleges generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swansea University is the primary anchor, with approximately 22,000 students across two campuses. The Bay Campus SA1 on Fabian Way — an ambitious modern campus development on the Swansea Bay waterfront — houses a large cohort of students who live in the surrounding SA1 and city-centre accommodation corridors. The Singleton Campus SA2 in Sketty — Swansea University&apos;s original parkland campus — generates accommodation demand in the adjacent Uplands SA2 and Brynmill SA2 zones, which are Swansea&apos;s most established student HMO neighbourhoods. UWTSD (University of Wales Trinity Saint David) has a significant Swansea SA1 campus presence, particularly in the SA1 Waterfront regeneration zone, generating further purpose-built and private student accommodation demand in the city-centre and Maritime Quarter areas.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Swansea student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Swansea programme — before and after images per room or per property as agreed with your property management team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Swansea and the wider South West Wales area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Swansea commercial programmes. We cover all Swansea SA postcodes and can extend to Cardiff, Newport, Carmarthen and wider South Wales in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea and South Wales postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Swansea and surrounding SA postcode areas — SA1 (Swansea city centre and Maritime Quarter: SA1 Waterfront zone with UWTSD campus and PBSA blocks; Swansea University Bay Campus on Fabian Way generating accommodation demand in the adjacent SA1 postcode zone; SA1 city-centre purpose-built student accommodation blocks near the university and UWTSD provision), SA2 (Uplands, Sketty, Brynmill: Swansea&apos;s most established and densely populated student HMO zone adjacent to Swansea University Singleton Campus — Uplands SA2 and Brynmill SA2 together form Swansea&apos;s largest student private rental neighbourhood with Victorian terraced HMO stock generating the highest-volume void refurbishment demand; Sketty SA2 — the residential zone surrounding the Singleton Campus with mixed private rental and PBSA provision), SA3 (Mumbles: south-west Swansea coastal village with student rental overflow from Singleton Campus for students seeking quieter accommodation outside the core Uplands zone), SA4 (Gorseinon: west Swansea suburban town with student and young professional HMO provision from Swansea University and UWTSD commuter students), SA5 (Manselton, Cwmbwrla, Fforestfach: west Swansea residential zones with affordable HMO and student rental provision from Swansea University and UWTSD students), SA6 (Morriston, Clydach: north Swansea residential zone with student and young professional HMO and rental provision). Cardiff CF, Newport NP and wider South Wales also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapSwanseaPage() {
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
            <span className="text-foreground">Swansea</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Swansea &amp; South West Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Swansea
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Swansea and South West Wales. Kitchen unit doors, bedroom
            furniture panels, communal surfaces and reception areas wrapped
            during void periods. Swansea University Bay Campus SA1, UWTSD
            Swansea SA1, Uplands SA2 and Brynmill SA2 student zones. PBSA
            operators, student landlords and HMO managers covered across all
            Swansea SA postcodes. Approximately 3 hours 30 minutes from our
            South Yorkshire base via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Swansea PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Swansea student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Swansea is Wales&apos;s second city and home to one of Wales&apos;s
              largest universities. Swansea University has approximately 22,000
              students across two campuses — the modern Bay Campus SA1 on the
              Swansea Bay waterfront and the original Singleton Campus SA2 in
              Sketty. Together they create a large and established private
              student rental market across the SA postcode geography.
            </p>
            <p>
              The Uplands SA2 and Brynmill SA2 zones — immediately adjacent to
              the Singleton Campus — form Swansea&apos;s most concentrated student
              HMO neighbourhood: streets of Victorian terraced properties
              converted for shared student rental that generate consistent annual
              void refurbishment demand. UWTSD (University of Wales Trinity
              Saint David) has a growing Swansea SA1 campus presence in the
              SA1 Waterfront regeneration zone, generating purpose-built student
              accommodation demand in the city-centre and Maritime Quarter areas.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30 minutes
              from Swansea via the M4 — a direct motorway route across England
              and into South Wales via the Severn crossings. We cover all
              Swansea SA postcodes, Cardiff CF and wider South Wales student
              accommodation in the same regional mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Swansea student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Swansea student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Swansea
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
                lounge storage unit fronts in managed Swansea PBSA buildings —
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
                Swansea student accommodation buildings — wrapped to maintain a
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
                Swansea studio or en-suite rooms — wrapped systematically room
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
                managed Swansea student accommodation — wrapped to refresh shared
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
            Swansea student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Cardiff</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Cardiff student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Swansea</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Swansea care homes and nursing homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation across Swansea and South Wales</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Bristol</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Bristol student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Swansea student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Swansea student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Swansea accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Swansea SA postcodes. White-label by
              default. Approximately 3 hours 30 minutes from South Yorkshire
              via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Swansea PBSA Quote →
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
