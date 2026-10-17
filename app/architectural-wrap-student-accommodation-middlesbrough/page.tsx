import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Middlesbrough | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Middlesbrough and Teesside — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Teesside University, private PBSA operators and university halls across TS1 and TS2 postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Middlesbrough — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Middlesbrough and Teesside. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Teesside University TS1 campus and all major PBSA operators across Middlesbrough TS1 and TS2 postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M)/A19."
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
      name: "Middlesbrough",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-middlesbrough/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Middlesbrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Middlesbrough PBSA — shared student kitchens in cluster-flat and en-suite accommodation accumulate surface wear faster than almost any other interior finish. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio en-suite flats are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Middlesbrough PBSA void programmes. Teesside University operates a significant volume of purpose-built student accommodation across the TS1 central Middlesbrough campus, and the growing private PBSA market in the TS1 and TS2 zones generates annual void-period refurbishment demand for all these surface types.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Middlesbrough student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Middlesbrough student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Middlesbrough programmes — full floors or complete PBSA blocks in the TS1 and TS2 zones — we run multi-day site programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Middlesbrough and the wider Tees Valley. Teesside University — approximately 17,000 students — operates its campus centrally in TS1 Middlesbrough with purpose-built student accommodation blocks close to the main campus buildings. Private PBSA in Middlesbrough has grown substantially, with purpose-built student apartment blocks concentrated in the TS1 town-centre zone and extending into the TS2 riverside regeneration area. FM contractors managing multi-site refurbishment programmes across Teesside — covering Middlesbrough TS alongside Stockton-on-Tees TS18-21, Redcar TS10 and broader Tees Valley TS postcodes — also form part of our Middlesbrough coverage. We work white-label for FM contractors managing refurbishment programmes across any Middlesbrough operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Middlesbrough student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Middlesbrough programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Middlesbrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across Middlesbrough and Teesside. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing Middlesbrough alongside other PBSA cities in the North East and Yorkshire — Durham, Newcastle, Leeds, Sheffield — our coverage of those cities means we can provide installation consistency across multiple sites within the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough and Teesside postcodes do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Middlesbrough and Tees Valley TS postcodes relevant to student accommodation — TS1 (Middlesbrough town centre: Teesside University main campus and the surrounding TS1 town-centre PBSA zone; the principal concentration of purpose-built student accommodation in Middlesbrough), TS2 (Middlesbrough riverside: the TS2 regeneration corridor along the River Tees where newer PBSA development has expanded student accommodation provision beyond the core campus zone), TS3 (East Middlesbrough residential zone with HMO student housing stock), TS4 (Marton Road and Marton-in-Cleveland approaches — the TS4 corridor between Middlesbrough town centre and suburban residential areas). Wider Tees Valley including Stockton-on-Tees TS18-21, Redcar TS10, Billingham TS23 and Guisborough TS14 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationMiddlesbroughPage() {
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
            <span className="text-foreground">Middlesbrough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Middlesbrough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across
            Middlesbrough and Teesside. Kitchen unit doors, communal area
            furniture, bedroom furniture panels, reception and corridor surfaces
            wrapped during void periods. Teesside University TS1 campus, private
            PBSA operators and all major Middlesbrough TS postcode student
            accommodation. White-label for FM contractors and accommodation
            managers. Approximately 1 hour 30 minutes from our South Yorkshire
            base via the A1(M) and A19.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Middlesbrough Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Middlesbrough PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough student accommodation — Teesside University and the Tees Valley PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough is Teesside&apos;s principal higher education centre, with
              Teesside University operating a campus of approximately 17,000
              students in the heart of the TS1 town centre. The university has
              invested substantially in its campus estate over the past decade,
              and its student accommodation provision — purpose-built blocks
              concentrated around the TS1 campus — generates regular void-period
              refurbishment demand for kitchen unit door wrapping, bedroom
              furniture panels and communal surface treatments.
            </p>
            <p>
              The private PBSA market in Middlesbrough has expanded alongside
              the university&apos;s growth, with purpose-built student apartment
              blocks developing in the TS1 town-centre zone and along the TS2
              riverside regeneration corridor. PBSA operators managing these
              newer blocks run void-period refurbishment programmes for kitchen
              unit doors, bedroom wardrobe panels and communal area surfaces on
              the same annual cycle as university accommodation managers.
            </p>
            <p>
              Beyond Middlesbrough town centre, the wider Tees Valley generates
              PBSA and student housing stock across Stockton-on-Tees TS18-21,
              Redcar TS10 and the surrounding TS postcode area. FM contractors
              managing multi-site Teesside refurbishment programmes benefit
              from a single installation partner with consistent commercial-grade
              film and photographic sign-off across all Tees Valley sites.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Middlesbrough via the A1(M) and A19. We work with FM contractors
              and accommodation managers across Middlesbrough to schedule
              void-period programmes that deliver maximum room coverage within
              summer or vacation void windows.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Middlesbrough student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in shared kitchen areas across
                Middlesbrough PBSA floors wrapped in commercial-grade film
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
                surfaces within each Middlesbrough PBSA block or floor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door fronts within studio flat kitchenettes in
                Middlesbrough private PBSA en-suite flats wrapped alongside
                bedroom furniture as part of an integrated flat refurbishment
                programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and social area surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels and lounge furniture
                surfaces in communal social areas wrapped during void periods
                to refresh shared space appearance — a key factor in resident
                experience and re-letting for Middlesbrough PBSA operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance
                lobby surfaces wrapped to maintain the first impression of
                Middlesbrough accommodation blocks for incoming students and
                during marketing viewings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Laundry room and utility surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Worktop and unit surfaces in laundry rooms and utility areas
                wrapped where substrate condition allows — humidity-appropriate
                adhesive specified where relevant for wet-area utility
                installations in Middlesbrough PBSA blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Middlesbrough PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough PBSA void programmes are planned in advance with the
              accommodation manager, PBSA operator facilities team or FM
              contractor. We confirm the block schedule — which floors, which
              flat or room types, what surfaces — before mobilisation, and work
              systematically through the programme to maximise room throughput
              within the available void window.
            </p>
            <p>
              A typical Middlesbrough en-suite cluster kitchen — 4 to 6 kitchen
              unit door fronts and drawer faces — takes approximately 2 to 3
              hours per flat. A full floor of eight flats can be completed in a
              working day by an experienced two-person team. For larger
              Middlesbrough PBSA blocks across multiple floors, we plan
              multi-day site programmes to maintain daily productivity within
              tight void windows.
            </p>
            <p>
              We operate white-label throughout: attending under your company
              name or the operator&apos;s name, following your site access protocols
              and providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for Middlesbrough programmes that
              require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Middlesbrough and North East services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Newcastle and the North East</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Durham and County Durham</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across Teesside</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Middlesbrough PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Middlesbrough accommodation block — Teesside
              University, PBSA operator or FM contractor, postcode, number of
              units, primary surfaces to be refreshed and your void window dates.
              We&apos;ll come back with a scoped programme proposal. White-label and
              FM contractor enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Middlesbrough Quote →
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
