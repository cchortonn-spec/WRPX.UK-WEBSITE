import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Hull | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Hull and East Yorkshire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Hull, Hull Universitiy of the Arts and private PBSA operators across HU postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-hull/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Hull — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Hull and East Yorkshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Hull HU6 campus, Hull College of the Arts and all major PBSA operators across Hull HU postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and A63."
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
      name: "Hull",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-hull/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Hull PBSA — shared student kitchens in cluster-flat and en-suite accommodation accumulate surface wear faster than almost any other interior finish. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio en-suite flats are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Hull PBSA void programmes. The University of Hull operates a significant volume of purpose-built student accommodation on and near the HU6 Cottingham Road campus, and the growing private PBSA market in the HU1 city centre and HU5 Newland Avenue zone generates annual void-period refurbishment demand for all these surface types.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Hull student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Hull student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M62 and A63. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Hull programmes — full floors or complete PBSA blocks in the HU1 city centre or HU6 campus zone — we run multi-day site programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Hull and East Yorkshire. The University of Hull — approximately 16,000 students — operates its main campus on Cottingham Road HU6 and manages a substantial student accommodation estate on the Endyke Lane and Inglemire Avenue approaches. Hull College of the Arts occupies the RIBA award-winning Harveys Building in the HU1 city-centre zone, with student accommodation demand concentrated in the adjacent private PBSA market. Private PBSA in Hull has expanded across the HU1 city centre, HU5 Newland Avenue student quarter and HU6 campus corridor, with purpose-built student apartment blocks generating regular void-period refurbishment demand. FM contractors managing multi-site East Yorkshire refurbishment programmes also form part of our Hull coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Hull student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Hull programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across Hull and East Yorkshire. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing Hull alongside other PBSA cities — Leeds, Sheffield, York, Middlesbrough — our coverage of those cities means we can provide installation consistency across multiple sites within the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull and East Yorkshire postcodes do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Hull and East Yorkshire HU postcodes relevant to student accommodation — HU1 (Hull city centre: the Old Town, Fruit Market creative quarter and adjacent areas where private PBSA development has increased substantially as the city has invested in its waterfront and cultural infrastructure; also the location of Hull College of the Arts), HU5 (Newland Avenue and Chanterlands Avenue — the traditional Hull student quarter where Victorian terrace housing stock is supplemented by purpose-built PBSA developments along the main student corridors), HU6 (Cottingham Road and the University of Hull main campus: Endyke Lane, Inglemire Avenue, the university accommodation blocks surrounding the campus — the primary concentration of university-managed PBSA in Hull), HU3 (Hessle Road and west Hull — a secondary HMO and student housing zone), HU10 (Cottingham village — a popular postgraduate and mature student residential area adjacent to the university campus). East Riding PBSA in Beverley HU17 and Bridlington YO15 are also within reach where relevant. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M62 and A63.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationHullPage() {
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
            <span className="text-foreground">Hull</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Hull
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across Hull
            and East Yorkshire. Kitchen unit doors, communal area furniture,
            bedroom furniture panels, reception and corridor surfaces wrapped
            during void periods. University of Hull HU6 campus, private PBSA
            operators and all major Hull HU postcode student accommodation.
            White-label for FM contractors and accommodation managers.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the M62 and A63.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Hull Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Hull PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull student accommodation — University of Hull and the East Yorkshire PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull is East Yorkshire&apos;s principal higher education centre, with
              the University of Hull — approximately 16,000 students — operating
              its main campus on Cottingham Road HU6, within striking distance
              of the city centre via the A1079. The university manages a
              substantial on-campus accommodation estate on the Endyke Lane and
              Inglemire Avenue approaches, with purpose-built halls and clusters
              of student accommodation blocks generating regular void-period
              refurbishment demand for kitchen unit door wrapping, bedroom
              furniture panels and communal surface treatments.
            </p>
            <p>
              The private PBSA market in Hull has expanded significantly across
              the HU1 city-centre zone and the HU5 Newland Avenue student
              quarter — the traditional corridor of student accommodation running
              from the city centre to the campus. Purpose-built student apartment
              blocks and converted commercial buildings in the Fruit Market and
              Old Town HU1 area now provide a growing alternative to campus
              accommodation, and void-period refurbishment programmes for these
              operators follow the same annual cycle as university accommodation
              managers.
            </p>
            <p>
              Hull College of the Arts in the HU1 city centre adds a further
              cohort of creative and arts students to the Hull PBSA market,
              supported by city-centre PBSA provision immediately adjacent to
              the college site.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Hull via the M62 and A63. We work with FM contractors and
              accommodation managers across Hull to schedule void-period
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
            What we wrap in Hull student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in shared kitchen areas across Hull PBSA
                floors wrapped in commercial-grade film during void periods —
                transforming the kitchen finish without cabinet replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts, desk unit panels and bedside cabinet
                surfaces in en-suite and study-bedroom accommodation wrapped to
                refresh the room finish between tenancies — matching surfaces
                within each Hull PBSA block or floor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door fronts within studio flat kitchenettes in
                Hull private PBSA en-suite flats wrapped alongside bedroom
                furniture as part of an integrated flat refurbishment programme.
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
                experience and re-letting for Hull PBSA operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance lobby
                surfaces wrapped to maintain the first impression of Hull
                accommodation blocks for incoming students and during marketing
                viewings.
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
                installations in Hull PBSA blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Hull PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull PBSA void programmes are planned in advance with the
              accommodation manager, PBSA operator facilities team or FM
              contractor. We confirm the block schedule — which floors, which
              flat or room types, what surfaces — before mobilisation, and work
              systematically through the programme to maximise room throughput
              within the available void window.
            </p>
            <p>
              A typical Hull en-suite cluster kitchen — 4 to 6 kitchen unit door
              fronts and drawer faces — takes approximately 2 to 3 hours per
              flat. A full floor of eight flats can be completed in a working day
              by an experienced two-person team. For larger Hull PBSA blocks
              across multiple floors, we plan multi-day site programmes to
              maintain daily productivity within tight void windows.
            </p>
            <p>
              We operate white-label throughout: attending under your company
              name or the operator&apos;s name, following your site access protocols
              and providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for Hull programmes that require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Hull and East Yorkshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap York</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across York and North Yorkshire</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Hull</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across Hull and East Yorkshire</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Hull PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Hull student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Hull accommodation block — University of Hull,
              PBSA operator or FM contractor, postcode, number of units, primary
              surfaces to be refreshed and your void window dates. We&apos;ll come
              back with a scoped programme proposal. White-label and FM contractor
              enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Hull Quote →
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
