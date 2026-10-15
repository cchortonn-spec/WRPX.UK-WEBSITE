import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping York | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across York — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of York, York St John University and all major PBSA operators across YO1, YO10 and YO31 postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-york/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping York — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across York. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of York Heslington campus YO10, York St John University YO31 and all major PBSA operators across York YO postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "York",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-york/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in York PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. University of York accommodation ranges from the distinctive circular college residences at Heslington West to modern purpose-built blocks on Heslington East and private PBSA along the main routes between campus and York city centre, and we assess at survey and specify the appropriate commercial-grade architectural film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete York student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for York student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour from York via the A64. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger York programmes — full floors or complete PBSA blocks in the YO10 or YO31 zones — we run multi-day site programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which York universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across York and the wider North Yorkshire YO postcode area. University of York — approximately 20,000 students — operates across two Heslington campus sites (Heslington West and Heslington East in YO10). College residences at Heslington West include the iconic circular colleges — Derwent, Langwith, Alcuin, Goodricke, Vanbrugh and others — each with their own accommodation stock managed by the college. Heslington East has more modern purpose-built accommodation in a campus setting. York St John University — approximately 8,000 students on the Lord Mayor&apos;s Walk campus YO31 — has its own student accommodation blocks close to the city centre. Private PBSA has expanded in York, particularly in the city-centre YO1 zone and along the Fulford Road YO10 corridor between the Heslington campus and the city centre. We work white-label for FM contractors managing refurbishment programmes across any York operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in York student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every York programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across York. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing York alongside other PBSA cities in Yorkshire and beyond, our coverage of Sheffield, Leeds, Durham, Newcastle and other cities means we can provide installation consistency across multiple sites within the same programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which York postcodes and areas do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all York and North Yorkshire YO postcodes relevant to student accommodation — YO1 (York city centre — the historic walled city, Micklegate, Gillygate and the city-centre private PBSA zone; York St John University Lord Mayor&apos;s Walk campus is immediately adjacent to the city centre walls in YO31), YO10 (Fulford, Heslington — the primary student accommodation zone for the University of York; Heslington West and Heslington East campuses both sit in the YO10 Heslington area; Fulford Road YO10 is the principal corridor between the campus and the city centre, with a high concentration of HMO student properties and some private PBSA stock), YO31 (Heworth, Tang Hall — York St John University and the north-east York residential zone; the York St John campus accommodation and adjacent private PBSA and HMO stock in YO31). Wider North Yorkshire including Selby YO8, Harrogate HG1, Scarborough YO11 and the Vale of York YO42/YO43 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour from York via the A64.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationYorkPage() {
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
            <span className="text-foreground">York</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — York
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across York
            and North Yorkshire. Kitchen unit doors, communal area furniture,
            bedroom furniture panels, reception and corridor surfaces wrapped
            during void periods. University of York Heslington campus YO10,
            York St John University YO31, private PBSA operators and city-centre
            YO1 student housing portfolios. White-label for FM contractors and
            accommodation managers. Approximately 1 hour from our South Yorkshire
            base via the A64.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a York Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* York PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York student accommodation — a compact, high-value PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York is one of the UK&apos;s most distinctive student cities — a UNESCO
              World Heritage Site and one of the most visited cities in the country,
              with a combined student population of approximately 28,000 across the
              University of York (approximately 20,000 students) and York St John
              University (approximately 8,000 students).
            </p>
            <p>
              The University of York operates a distinctive collegiate system across
              two Heslington campus sites. Heslington West — the original campus —
              includes the iconic circular college residences: Derwent, Langwith,
              Alcuin, Goodricke, Vanbrugh and others, each managing their own
              accommodation stock. Heslington East, the newer campus zone opened
              from 2009, has more contemporary purpose-built accommodation in a
              modern campus setting. Both sites run annual void-period refurbishment
              programmes between the end of Summer Term and the start of Autumn Term.
            </p>
            <p>
              York St John University&apos;s compact Lord Mayor&apos;s Walk campus in YO31
              is immediately adjacent to the York city walls, with student
              accommodation blocks close to the campus and private PBSA provision
              concentrated in the YO31 zone and city-centre YO1 area.
            </p>
            <p>
              Private PBSA has expanded in York, with operators investing in
              purpose-built student apartment blocks in the city-centre YO1 zone
              and along the Fulford Road corridor YO10 between the Heslington campus
              and the city centre. FM contractors managing these portfolios require
              void-period refurbishment programmes for kitchen unit doors and bedroom
              furniture panels on the same annual cycle as university college
              accommodation managers.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from York via
              the A64. We work with FM contractors and accommodation managers across
              York to schedule void-period programmes that deliver maximum room
              coverage within summer or vacation void windows.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in York student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in shared kitchen areas across York
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
                York private PBSA en-suite flats wrapped alongside bedroom
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
                key factor in resident experience and re-letting for York
                PBSA operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance
                lobby surfaces wrapped to maintain the first impression of
                York accommodation blocks for incoming students and during
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
            How York PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York PBSA void programmes are planned in advance with the college
              accommodation manager, PBSA operator facilities team or FM contractor.
              We confirm the block schedule — which floors, which flat or room types,
              what surfaces — before mobilisation, and work systematically through
              the programme to maximise room throughput within the available void
              window.
            </p>
            <p>
              A typical York en-suite cluster kitchen — 4 to 6 kitchen unit door
              fronts and drawer faces — takes approximately 2 to 3 hours per flat.
              A full floor of eight flats can be completed in a working day by an
              experienced two-person team. For larger York PBSA blocks across
              multiple floors — including the larger Heslington East accommodation
              buildings and private PBSA blocks in the city-centre YO1 zone — we
              plan multi-day site programmes to maintain daily productivity within
              tight void windows.
            </p>
            <p>
              We operate white-label throughout: attending under your company name
              or the operator&apos;s name, following your site access protocols and
              providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for York programmes that require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related York and Yorkshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Leeds</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Durham and County Durham</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap York</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across North Yorkshire</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your York PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              York student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your York accommodation block — university college
              or operator, postcode, number of units, primary surfaces to be
              refreshed and your void window dates. We&apos;ll come back with a scoped
              programme proposal. White-label and FM contractor enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a York Quote →
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
