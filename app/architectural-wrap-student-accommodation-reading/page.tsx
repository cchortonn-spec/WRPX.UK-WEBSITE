import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Reading | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Reading — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Reading, Reading College and all major PBSA operators across RG1, RG2, RG4, RG6 and the wider Reading area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-reading/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Reading — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Reading. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Reading, Reading College and all major PBSA operators across RG1, RG2, RG4, RG6 and the wider Berkshire area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Reading",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-reading/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Reading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Reading PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Reading site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Reading student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Reading student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours from Reading via the M1 south and M4 west. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Reading programmes — full floors or complete PBSA blocks in RG1 or RG6 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Reading universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Reading and the wider Berkshire area. University of Reading — approximately 18,000 students — has its main campus at Whiteknights in the Earley RG6 zone, with extensive managed halls of residence on campus and student accommodation spread across the Earley, Lower Earley and Shinfield Road RG2 zones south of the city. Reading&apos;s PBSA sector has expanded significantly around the station quarter RG1 and the city-centre RG1 zones, with Unite Students and other private operators developing purpose-built blocks targeting Reading&apos;s growing student population. The proximity to London — under 30 minutes by fast train — makes Reading PBSA an attractive market for operators managing student accommodation portfolios across the south of England. We work white-label for FM contractors managing refurbishment programmes across any Reading operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Reading student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Reading programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Reading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across Reading. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing Reading alongside other PBSA cities, our national coverage means we can provide installation consistency across multiple sites using the same team.",
      },
    },
    {
      "@type": "Question",
      name: "Which Reading postcodes and areas do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Reading and Berkshire RG postcodes — RG1 (Reading city centre and station quarter — the primary PBSA growth zone with purpose-built blocks for University of Reading students, city-centre living options and graduate accommodation near the station and Oracle retail centre), RG2 (Reading south — Whitley, Shinfield Road, Katesgrove — established student HMO and PBSA zone south of the city, close to University of Reading campus), RG4 (Caversham, Tilehurst — north Reading residential zones with student HMO provision and some managed student accommodation), RG6 (Earley, Lower Earley — home to University of Reading Whiteknights campus and the primary halls of residence cluster). Wider Berkshire: RG7 (Mortimer — west Berkshire), RG9 (Henley-on-Thames — south Oxfordshire), RG10 (Twyford/Wargrave), RG12 (Bracknell — east Berkshire town with further education provision), RG14 (Newbury — west Berkshire market town). WRPX is based in South Yorkshire, approximately 2 hours from Reading via the M1 south and M4 west.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationReadingPage() {
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
            <span className="text-foreground">Reading</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Reading &amp; Berkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Reading
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across Reading
            and Berkshire. Kitchen unit doors, communal area furniture, bedroom
            furniture panels, reception and corridor surfaces wrapped during void
            periods. University of Reading, Reading PBSA operators in RG1, RG2 and
            RG6, and wider Berkshire student accommodation portfolios. White-label
            for FM contractors and accommodation managers. Approximately 2 hours
            from our South Yorkshire base via the M1 south and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Reading Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Reading PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Reading student accommodation — the PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Reading is one of the UK&apos;s fastest-growing PBSA markets outside
              the major northern and Scottish cities. The University of Reading —
              approximately 18,000 students on the Whiteknights campus in Earley
              RG6 — is the primary demand driver, with an accommodation shortfall
              that has accelerated purpose-built development in the city-centre
              and station quarter RG1 zones during the past decade.
            </p>
            <p>
              Reading&apos;s position on the Elizabeth line corridor — under 30 minutes
              from central London — makes it attractive for PBSA operators targeting
              students who want affordable accommodation with commuter access to
              London campuses or London placements. This has brought several
              national PBSA operators to Reading in addition to the university&apos;s
              own managed halls provision across the Whiteknights campus,
              Shinfield Road RG2 and the city-centre zones.
            </p>
            <p>
              The primary PBSA stock in Reading is concentrated around the station
              and Oracle RG1 city-centre zones, the Shinfield Road/London Road RG2
              corridor south of the city, and the Whiteknights campus RG6 where
              university-managed halls range from standard en-suite cluster flats
              to catered hall accommodation. All carry the same void-period
              refurbishment challenges: kitchen unit doors, bedroom furniture panels
              and communal surface wear that accumulates through each academic year.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from Reading
              via the M1 south and M4 west. We work with FM contractors and
              accommodation managers across Reading to schedule void-period
              programmes that deliver maximum room coverage within summer,
              Christmas or Easter void windows.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Reading student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in en-suite cluster kitchen areas
                wrapped in commercial-grade film during void periods —
                transforming the kitchen finish without cabinet replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts, desk unit panels and bedside cabinet
                surfaces in en-suite and studio bedrooms wrapped to refresh
                the room finish between tenancies — matching surfaces
                within each block for visual consistency.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door fronts within studio flat kitchenettes — a
                common Reading PBSA configuration — wrapped alongside bedroom
                furniture as part of an integrated flat refurbishment programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and social area surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels and lounge furniture
                surfaces in communal social areas and study rooms wrapped
                during void periods to refresh shared space appearance.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance lobby
                surfaces wrapped to maintain the first impression of Reading
                PBSA blocks for incoming tenants and during marketing viewings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Laundry room and utility surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Worktop and unit surfaces in laundry rooms, utility areas and
                building management rooms wrapped where substrate condition
                allows — humidity-appropriate adhesive specified where relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Reading PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Reading PBSA void programmes are planned in advance with the
              accommodation manager or FM contractor. We confirm the block schedule
              — which floors, which flat types, what surfaces — before mobilisation,
              and work systematically through the programme to maximise room
              throughput within the available void window.
            </p>
            <p>
              A typical Reading en-suite cluster kitchen — 4 to 6 kitchen unit
              door fronts and drawer faces — takes approximately 2 to 3 hours
              per flat. A full floor of eight flats can be completed in a working
              day by an experienced two-person team. For larger Reading PBSA
              blocks across multiple floors, we plan multi-day site programmes
              with overnight stays to maintain daily productivity without long
              commutes.
            </p>
            <p>
              We operate white-label throughout: attending under your company name
              or the operator&apos;s name, following your site access protocols and
              providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for Reading programmes that require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Reading student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Reading and south England services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bath/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Bath</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Bath and Somerset</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Bristol</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Bristol</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-portsmouth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Portsmouth</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Portsmouth</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Reading PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Reading student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Reading PBSA block — operator, postcode, number
              of units, primary surfaces to be refreshed and your void window
              dates. We&apos;ll come back with a scoped programme proposal. White-label
              and FM contractor enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Reading Quote →
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
