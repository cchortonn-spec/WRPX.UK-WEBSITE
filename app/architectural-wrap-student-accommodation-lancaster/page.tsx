import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Lancaster | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Lancaster and North Lancashire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Lancaster LA postcodes. Lancaster University Bailrigg LA1, Greaves LA1 and Bowerham LA1 student HMO zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-lancaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Lancaster — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Lancaster and North Lancashire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Lancaster LA postcodes. Lancaster University Bailrigg LA1, Greaves LA1 student HMO zone, Bowerham LA1, Scotforth LA1 and city-centre Lancaster student accommodation. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6."
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
      name: "Lancaster",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-lancaster/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Lancaster student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Lancaster void programmes. Lancaster&apos;s student accommodation ranges from Victorian and Edwardian terraced HMO conversions in the Greaves LA1, Bowerham LA1 and Scotforth LA1 zones to modern purpose-built student housing adjacent to and within Lancaster University&apos;s Bailrigg campus — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Lancaster student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Lancaster student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 west and M6 north — a direct motorway route. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Lancaster programmes — multiple HMO properties in the same Greaves LA1 or Bowerham LA1 postcode zone, or full PBSA blocks on or near the Bailrigg campus — we run multi-day programmes to maximise productivity within tight void windows. Lancaster can also be incorporated into a broader North West or Yorkshire programme alongside Preston, Wigan or York.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster universities and colleges generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lancaster University on the Bailrigg campus LA1 is the primary anchor — with approximately 15,000 students, it is one of the UK&apos;s leading research universities. The campus operates its own college-based halls system on the Bailrigg site, and the surrounding private student rental market extends into Greaves LA1, Bowerham LA1 and Scotforth LA1 as the main off-campus student residential zones. The Greaves area — a dense concentration of Victorian and Edwardian terraced HMO properties to the south of Lancaster city centre — is one of the most established student residential neighbourhoods in the North West, generating consistent annual void refurbishment demand. Lancaster and Morecambe College (UCLan Lancaster) adds a further further-education and part-time student population generating student accommodation demand across the city-centre LA1 and Morecambe LA4 zones.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Lancaster student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Lancaster programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for Lancaster&apos;s climate: we select grades with adhesive rated for the temperature variation and humidity conditions common in North Lancashire properties, including older Victorian HMO stock in the Greaves LA1 area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Lancaster and the wider LA postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Lancaster commercial programmes. We cover all Lancaster LA1 and LA2 postcodes and can extend to Morecambe LA4, Galgate LA2 and wider North Lancashire student accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster and North Lancashire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Lancaster and surrounding LA postcode areas — LA1 (Lancaster city and Bailrigg: Greaves LA1 — Lancaster&apos;s most established student HMO residential neighbourhood, immediately south of Lancaster city centre, with dense streets of Victorian and Edwardian terrace conversions generating consistent annual void refurbishment demand; Bowerham LA1 — popular student residential area between Lancaster city centre and the Bailrigg campus corridor, with private HMO stock from Lancaster University students; Scotforth LA1 — residential zone on the south side of the city along the A6 corridor generating student HMO demand from Lancaster University Bailrigg campus adjacency; Lancaster city centre LA1 — purpose-built student accommodation and mixed HMO provision in and around the city-centre commercial zone; Lancaster University Bailrigg campus LA1 — university-managed halls and PBSA provision on and adjacent to the campus generating void-period refurbishment demand from the university estate), LA2 (Galgate, Caton, rural north: Galgate LA2 — student and young professional rental provision adjacent to the Lancaster University Bailrigg campus access road; rural LA2 and Lancaster fringe zones within the operational area), LA4 (Morecambe: Morecambe seafront and residential zones generating student and young professional HMO rental demand from Lancaster University students seeking coastal living adjacent to the campus corridor). WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapLancasterPage() {
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
            <span className="text-foreground">Lancaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Lancaster &amp; North Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Lancaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Lancaster and North Lancashire. Kitchen unit doors, bedroom
            furniture panels, communal surfaces and reception areas wrapped
            during void periods. Lancaster University Bailrigg LA1, Greaves LA1
            student HMO zone and Bowerham LA1 residential area. PBSA operators,
            student landlords and HMO managers covered across all Lancaster LA
            postcodes. Approximately 1 hour 30 minutes from our South Yorkshire
            base via the M62 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Lancaster PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Lancaster student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Lancaster is one of the UK&apos;s most significant university
              cities relative to its size — Lancaster University on the Bailrigg
              campus LA1 is a consistently top-ranked research university with
              approximately 15,000 students. The city has a well-established
              private student rental market centred on the Greaves LA1, Bowerham
              LA1 and Scotforth LA1 residential zones south of the city centre.
            </p>
            <p>
              Greaves LA1 — the neighbourhood immediately south of Lancaster
              city centre — is Lancaster&apos;s most established student HMO
              zone: streets of Victorian and Edwardian terrace conversions that
              generate consistent annual void refurbishment demand from private
              landlords and HMO managers ahead of each new academic year. The
              density of student HMO stock in Greaves makes it one of the most
              productive zones for void-period vinyl wrap work in the North West.
              Bowerham LA1 and Scotforth LA1 extend the student residential
              corridor towards the Bailrigg campus.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Lancaster via the M62 west and M6 north — a direct motorway
              route. We cover all Lancaster LA1 and LA2 postcodes, Morecambe LA4
              and wider North Lancashire student accommodation in the same
              regional mobilisation, and can cover Lancaster alongside Preston
              or Wigan in a co-ordinated North West programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Lancaster student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Lancaster student HMO
                shared kitchens — the surface that accumulates visible wear
                faster than almost any other interior finish. Wrapped during
                the summer void to restore a clean, uniform finish ahead of
                the new academic year.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels and bedside cabinet fronts in Lancaster
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
                lounge storage unit fronts in managed Lancaster PBSA buildings —
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
                Lancaster student accommodation buildings — wrapped to maintain
                a consistent appearance across the property without disruption
                to residents during term.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units — individual rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and drawer fronts within individual
                Lancaster studio or en-suite rooms — wrapped systematically room
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
                managed Lancaster student accommodation — wrapped to refresh
                shared amenity spaces that accumulate wear from constant use
                across the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster student accommodation wrap — common questions
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
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Preston student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Wigan</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wigan student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Lancaster</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Lancaster care homes and nursing homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Manchester</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Manchester student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Lancaster student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Lancaster accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Lancaster LA postcodes. White-label by
              default. Approximately 1 hour 30 minutes from South Yorkshire
              via the M62 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Lancaster PBSA Quote →
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
