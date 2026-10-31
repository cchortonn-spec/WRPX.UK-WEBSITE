import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Aberdeen | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Aberdeen and North East Scotland — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Aberdeen AB postcodes. University of Aberdeen King's Campus AB24, Robert Gordon University Garthdee AB15/AB10, Hillhead AB24 and Rosemount AB25 student HMO zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-aberdeen/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Aberdeen — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Aberdeen and North East Scotland. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Aberdeen AB postcodes. University of Aberdeen King's Campus AB24, Robert Gordon University Garthdee AB15, Hillhead AB24 student HMO zone, Old Aberdeen AB24, Rosemount AB25 and Froghall AB24 student areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90."
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
      name: "Aberdeen",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-aberdeen/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Aberdeen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Aberdeen student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Aberdeen void programmes. Aberdeen&apos;s student accommodation stock ranges from granite-fronted Victorian terraced HMO conversions in the Hillhead AB24, Rosemount AB25 and Old Aberdeen AB24 zones to modern purpose-built student housing adjacent to the University of Aberdeen King&apos;s Campus AB24 — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Aberdeen student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Aberdeen student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) north through Newcastle and Edinburgh, then the A90 into Aberdeen — a fully motorway and dual-carriageway route. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Aberdeen programmes — multiple HMO properties in the same Hillhead AB24 postcode zone or full PBSA blocks adjacent to King&apos;s Campus — we run multi-day programmes to maximise productivity within tight void windows. Aberdeen can also be incorporated into a broader Scottish programme alongside Edinburgh or Glasgow.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen universities and colleges generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of Aberdeen is the primary anchor, with approximately 20,000 students centred on the King&apos;s Campus in Old Aberdeen AB24. The campus and its surrounding Hillhead AB24 neighbourhood form Aberdeen&apos;s most established student residential zone — a dense concentration of university-managed halls and private HMO properties generating consistent annual void refurbishment demand. Hillhead Halls AB24 and the university-adjacent Froghall AB24, Old Aberdeen AB24 and Great Northern Road AB24 corridors are the principal student HMO zones served by King&apos;s Campus. Robert Gordon University (RGU) has approximately 17,000 students primarily based at the Garthdee Campus AB15 on the south side of Aberdeen, generating student accommodation demand across the west Aberdeen AB15 and city-centre AB10/AB11 zones from students seeking private rental near the Garthdee campus. Aberdeen City Campus (Aberdeen College) adds a further further education student population generating private rental demand in the city-centre NP20 corridor.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Aberdeen student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Aberdeen programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for Aberdeen&apos;s climate: we select grades with an adhesive rated for the temperature variation and humidity conditions common in Scottish coastal properties.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Aberdeen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Aberdeen and the wider North East Scotland area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Aberdeen commercial programmes. We cover all Aberdeen AB postcodes and can extend to Inverurie AB51, Stonehaven AB39 and wider North East Scotland student accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen and North East Scotland postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Aberdeen and surrounding AB postcode areas — AB24 (Seaton, Old Aberdeen, Froghall, Hilton: the primary University of Aberdeen student HMO zone — Hillhead AB24 is Aberdeen&apos;s most concentrated student residential neighbourhood, immediately north of King&apos;s Campus, with streets of granite-fronted properties converted for private student rental and managed PBSA blocks generating consistent void refurbishment demand; Old Aberdeen AB24 — the historic university quarter surrounding the medieval King&apos;s Campus, with student HMO and PBSA provision; Froghall and Great Northern Road AB24 student HMO corridors; Aberdeen Sports Village and Beach Leisure Centre AB24 area student provision), AB25 (Woodside, Kittybrewster, Rosemount: Rosemount AB25 is a popular Aberdeen student residential area north of the city centre with private HMO stock from students at both University of Aberdeen and RGU; Kittybrewster AB25 and Woodside AB25 student and young professional HMO provision), AB10 (Aberdeen city centre: RGU city-centre student accommodation demand from students at Aberdeen City Campus and RGU city-centre facilities; city-centre HMO and purpose-built student accommodation provision in the AB10 commercial core), AB11 (Torry, Ferryhill, Crown Street: Crown Street and Ferryhill AB11 student HMO provision — popular with University of Aberdeen students seeking city-centre access; Torry AB11 affordable student rental provision), AB15 (Rubislaw, Mannofield, Cults: west Aberdeen residential zone adjacent to RGU Garthdee Campus AB15 — student and young professional HMO provision along the Riverside Drive and Garthdee Road AB15 corridors; Mannofield AB15 and west-Aberdeen suburbs generating private student rental demand from RGU Garthdee Campus), AB21–AB23 (Dyce, Bridge of Don: north Aberdeen residential zones with student and young professional rental provision). Inverurie AB51, Stonehaven AB39 and wider North East Scotland also within operational reach. WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapAberdeenPage() {
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
            <span className="text-foreground">Aberdeen</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Aberdeen &amp; North East Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Aberdeen
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Aberdeen and North East Scotland. Kitchen unit doors, bedroom
            furniture panels, communal surfaces and reception areas wrapped
            during void periods. University of Aberdeen King&apos;s Campus AB24,
            Robert Gordon University Garthdee AB15, Hillhead AB24 student zone
            and Rosemount AB25 HMO areas. PBSA operators, student landlords
            and HMO managers covered across all Aberdeen AB postcodes.
            Approximately 4 hours from our South Yorkshire base via the
            A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Aberdeen PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Aberdeen student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Aberdeen is one of Scotland&apos;s most significant student cities,
              with two major universities generating a combined student population
              of approximately 37,000. The University of Aberdeen — based on
              the medieval King&apos;s Campus in Old Aberdeen AB24 — has
              approximately 20,000 students. Robert Gordon University (RGU) at
              Garthdee AB15 serves approximately 17,000 students. Together they
              create a large and established private student rental and purpose-built
              student accommodation market across the AB postcode geography.
            </p>
            <p>
              Hillhead AB24 — the residential neighbourhood immediately north
              of King&apos;s Campus — is Aberdeen&apos;s most concentrated
              student HMO zone: streets of granite-fronted Victorian and
              Edwardian properties converted for shared student rental that
              generate consistent annual void refurbishment demand. Rosemount
              AB25, Old Aberdeen AB24 and Froghall AB24 form Aberdeen&apos;s
              wider student residential cluster. RGU students generate
              accommodation demand across the west Aberdeen AB15 corridor
              adjacent to the Garthdee Campus and in city-centre AB10/AB11.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 4 hours from
              Aberdeen via the A1(M) north and the A90 — a fully motorway
              and dual-carriageway route. We cover all Aberdeen AB postcodes,
              Inverurie AB51, Stonehaven AB39 and wider North East Scotland
              student accommodation in the same regional mobilisation, and
              can cover Aberdeen alongside Edinburgh in a co-ordinated
              Scottish programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Aberdeen student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Aberdeen student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Aberdeen
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
                lounge storage unit fronts in managed Aberdeen PBSA buildings —
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
                Aberdeen student accommodation buildings — wrapped to maintain a
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
                Aberdeen studio or en-suite rooms — wrapped systematically room
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
                managed Aberdeen student accommodation — wrapped to refresh
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
            Aberdeen student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Edinburgh student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Aberdeen care homes and nursing homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation across Aberdeen and North East Scotland</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Glasgow</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Glasgow student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Aberdeen student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Aberdeen student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Aberdeen accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Aberdeen AB postcodes. White-label by
              default. Approximately 4 hours from South Yorkshire via the
              A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Aberdeen PBSA Quote →
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
