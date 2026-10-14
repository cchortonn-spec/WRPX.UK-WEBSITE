import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Durham | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Durham — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Durham University college accommodation, purpose-built PBSA operators and all major student sites across DH1, DH7 and wider County Durham. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-durham/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Durham — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Durham. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Durham University college accommodation, PBSA operators and all major student sites across DH1 and wider County Durham. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Durham",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-durham/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Durham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Durham PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. Durham University college accommodation spans a wide range of building ages and types — from medieval and Georgian buildings on the historic Bailey to modern purpose-built college blocks — and we assess at survey and specify the appropriate commercial-grade architectural film for each substrate and contact frequency.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Durham student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Durham student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Durham City via the A1(M) north. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Durham programmes — full floors or complete PBSA blocks in DH1 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Durham universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Durham and the wider County Durham area. Durham University — approximately 20,000 students — has a distinctive college accommodation structure, with 17 colleges each managing their own student accommodation across Durham City DH1. College buildings range from the historic Bailey colleges immediately below Durham Cathedral to purpose-built modern blocks on the outskirts of Durham City. All carry the same annual void-period kitchen unit and bedroom furniture refurbishment challenge regardless of building age. Purpose-built private PBSA operators have expanded in Durham, particularly within the DH1 zone and along the main student residential corridors heading north and south from the city centre. We work white-label for FM contractors managing refurbishment programmes across any Durham operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Durham student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Durham programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Durham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across Durham. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing Durham alongside other PBSA cities in the North East and Yorkshire, our coverage of Newcastle, Leeds, Sheffield and other locations means we can provide installation consistency across multiple sites within the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Durham postcodes and areas do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Durham and County Durham DH postcodes relevant to student accommodation — DH1 (Durham City — the principal student accommodation zone, encompassing the historic Bailey immediately below Durham Cathedral where several Durham University colleges are sited, the Mountjoy campus DH1 area where newer purpose-built student accommodation has been developed, and the surrounding residential streets that carry a large volume of HMO and some private PBSA provision), DH7 (Langley Park, Brandon — west Durham residential areas adjacent to Durham City with some student residential provision and commuter student HMOs). Private PBSA operators have also developed stock along the main commuter corridors from Durham City railway station. Wider County Durham including Chester-le-Street DH2 (commuter distance from Durham City), Seaham SR7 and Peterlee SR8 (east Durham, closer to Sunderland student market) are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Durham City via the A1(M) north.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationDurhamPage() {
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
            <span className="text-foreground">Durham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Durham &amp; County Durham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Durham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across Durham
            and County Durham. Kitchen unit doors, communal area furniture, bedroom
            furniture panels, reception and corridor surfaces wrapped during void
            periods. Durham University college accommodation across DH1, private
            PBSA operators and wider County Durham student housing portfolios.
            White-label for FM contractors and accommodation managers.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Durham Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Durham PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Durham student accommodation — a distinctive PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Durham is one of the UK&apos;s most distinctive student cities — a UNESCO
              World Heritage Site built around Durham Cathedral and Castle, with
              a student population of approximately 20,000 across Durham University.
              The university&apos;s collegiate structure, with 17 colleges each managing
              their own accommodation stock, creates a unique pattern of student
              housing spread across the historic city core and the surrounding
              residential areas of Durham City DH1.
            </p>
            <p>
              Durham University&apos;s college accommodation ranges from historic buildings
              on the Bailey — the medieval street running between Cathedral and Castle —
              to purpose-built modern residential blocks on the Mountjoy and
              Trevelyan campuses. College accommodation managers each oversee their
              own refurbishment programmes, with kitchen unit doors, bedroom wardrobe
              fronts and communal surface finishes refreshed during the summer void
              window between the end of Trinity Term and the start of Michaelmas.
            </p>
            <p>
              Private PBSA has grown in Durham in recent years, with purpose-built
              student apartment blocks developed in the DH1 zone and along the main
              transport corridors. FM contractors managing these operator portfolios
              require the same void-period refurbishment programme for kitchen unit
              doors and bedroom furniture panels as university college accommodation
              managers.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Durham City via the A1(M) north. We work with FM contractors
              and accommodation managers across Durham to schedule void-period
              programmes that deliver maximum room coverage within summer or
              vacation void windows.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Durham student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in shared kitchen areas across Durham
                college blocks and PBSA floors wrapped in commercial-grade film
                during void periods — transforming the kitchen finish without
                cabinet replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts, desk unit panels and bedside cabinet
                surfaces in en-suite and study-bedroom accommodation wrapped
                to refresh the room finish between tenancies — matching
                surfaces within each block or college building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door fronts within studio flat kitchenettes in
                Durham private PBSA en-suite flats wrapped alongside bedroom
                furniture as part of an integrated flat refurbishment
                programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and social area surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels and lounge furniture
                surfaces in communal social areas and common rooms wrapped
                during void periods to refresh shared space appearance — a
                key factor in resident experience and re-letting.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance lobby
                surfaces wrapped to maintain the first impression of Durham
                accommodation blocks for incoming students and during
                marketing viewings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Laundry room and utility surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Worktop and unit surfaces in laundry rooms, utility areas and
                building management rooms wrapped where substrate condition
                allows — humidity-appropriate adhesive specified where
                relevant for wet-area utility installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Durham PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Durham PBSA void programmes are planned in advance with the
              college accommodation manager, PBSA operator facilities team or
              FM contractor. We confirm the block schedule — which floors, which
              flat or room types, what surfaces — before mobilisation, and work
              systematically through the programme to maximise room throughput
              within the available void window.
            </p>
            <p>
              A typical Durham en-suite cluster kitchen — 4 to 6 kitchen unit
              door fronts and drawer faces — takes approximately 2 to 3 hours
              per flat. A full floor of eight flats can be completed in a working
              day by an experienced two-person team. For larger Durham PBSA blocks
              across multiple floors, we plan multi-day site programmes with
              overnight stays to maintain daily productivity without long return
              commutes from South Yorkshire.
            </p>
            <p>
              We operate white-label throughout: attending under your company name
              or the operator&apos;s name, following your site access protocols and
              providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for Durham programmes that require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Durham student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Durham and North East services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Newcastle and Tyneside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across County Durham</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Leeds</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Durham PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Durham student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Durham accommodation block — university college
              or operator, postcode, number of units, primary surfaces to be
              refreshed and your void window dates. We&apos;ll come back with a scoped
              programme proposal. White-label and FM contractor enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Durham Quote →
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
