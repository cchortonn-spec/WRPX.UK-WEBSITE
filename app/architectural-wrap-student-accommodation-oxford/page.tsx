import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Oxford | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Oxford — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Oxford, Oxford Brookes and all major PBSA operators across OX1, OX2, OX3, OX4 and the wider Oxford area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-oxford/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Oxford — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Oxford. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Oxford, Oxford Brookes University and all major PBSA operators across OX1, OX2, OX3, OX4 and the wider Oxfordshire area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Oxford",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-oxford/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Oxford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Oxford PBSA — shared student kitchens in purpose-built halls and en-suite cluster flats accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. Oxford Brookes PBSA blocks and University of Oxford managed halls carry a mix of older laminate finishes and refurbished surfaces — we assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Oxford site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Oxford student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Oxford student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours from Oxford via the M1 south and M40 south or the A34. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Oxford programmes — full floors or complete PBSA blocks in OX1, OX2 or OX3 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Oxford universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Oxford and the wider Oxfordshire area. The University of Oxford — approximately 25,000 students across 39 colleges — has a unique accommodation structure with college-managed student accommodation spread across the OX1 and OX2 city-centre zones. College buildings range from historic listed structures with adapted student rooms to purpose-built modern accommodation blocks — all with the same void-period kitchen unit and bedroom furniture refurbishment challenge. Oxford Brookes University — approximately 17,000 students — has its principal campus at Headington OX3, with managed halls of residence on the Headington Hill and Clive Nicholls campuses and student accommodation across the OX3 and OX4 zones. Purpose-built private PBSA operators have expanded in Oxford in recent years, particularly around the Jericho OX2 and Cowley Road OX4 corridors, adding private hall stock to the market. We work white-label for FM contractors managing refurbishment programmes across any Oxford operator portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Oxford student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Oxford programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Oxford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WRPX operates white-label for FM contractors, accommodation managers and refurbishment programme managers across Oxford. We attend under your company name, follow your access protocols, report to your project manager and provide sign-off documentation in whatever format your contract requires — photographic log per room or per block, daily progress reports, or RAMS prior to mobilisation. We do not communicate directly with the end client unless instructed to do so. For multi-site FM contractors managing Oxford alongside other PBSA cities, our coverage of Reading, Bath, Bristol, Portsmouth and other southern England locations means we can provide installation consistency across multiple sites.",
      },
    },
    {
      "@type": "Question",
      name: "Which Oxford postcodes and areas do you cover for PBSA vinyl wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Oxford and Oxfordshire OX postcodes — OX1 (Oxford city centre, Jericho, St Ebbe&apos;s — the primary University of Oxford college accommodation zone, with college-managed rooms and purpose-built private PBSA blocks across the city centre), OX2 (North Oxford, Summertown, Botley — premium north Oxford residential zones with University of Oxford managed student accommodation in Jericho OX2 and along the Woodstock Road corridor, plus private PBSA and HMO provision), OX3 (Headington, Marston — Oxford Brookes University Headington campus, the principal Brookes halls of residence zone and the NHS John Radcliffe Hospital site adjacent to the Brookes campus), OX4 (Cowley, Iffley — south Oxford student residential zone with a dense HMO and some managed PBSA provision along the Cowley Road corridor), OX5 (Kidlington — north Oxfordshire commuter belt with further education provision), OX9 (Thame — market town south Oxfordshire), OX14 (Abingdon — south Oxfordshire), OX16 (Banbury — north Oxfordshire). WRPX is based in South Yorkshire, approximately 2 hours from Oxford via the M1 south and M40 south or A34.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccommodationOxfordPage() {
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
            <span className="text-foreground">Oxford</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Oxford &amp; Oxfordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Oxford
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Vinyl wrapping for student accommodation refurbishments across Oxford
            and Oxfordshire. Kitchen unit doors, communal area furniture, bedroom
            furniture panels, reception and corridor surfaces wrapped during void
            periods. University of Oxford college accommodation, Oxford Brookes
            University halls, PBSA operators across OX1, OX2, OX3 and OX4, and
            wider Oxfordshire student accommodation portfolios. White-label for
            FM contractors and accommodation managers. Approximately 2 hours from
            our South Yorkshire base via the M1 south and M40.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Oxford Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Oxford PBSA market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Oxford student accommodation — a distinctive PBSA market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Oxford is one of the UK&apos;s most distinctive and high-value student
              accommodation markets, driven by the combination of the University of
              Oxford — approximately 25,000 students across 39 self-governing
              colleges — and Oxford Brookes University with approximately 17,000
              students based predominantly at the Headington OX3 campus.
            </p>
            <p>
              The University of Oxford&apos;s college-managed accommodation structure
              creates a unique pattern of student housing spread across the city
              centre OX1 and north Oxford OX2 zones. College buildings range
              from historic listed structures with adapted single study-bedrooms to
              purpose-built modern accommodation blocks on college grounds — all
              managed by individual college facilities teams. The common challenge
              across the portfolio is the same: kitchen unit surfaces, bedroom
              furniture panels and communal area finishes that accumulate wear
              through each academic year and need refreshing during summer or
              vacation void windows.
            </p>
            <p>
              Oxford Brookes University&apos;s managed halls of residence are concentrated
              in the Headington OX3 zone, on and adjacent to the Headington Hill
              and Clive Nicholls campuses. Purpose-built private PBSA has expanded
              in Oxford in recent years, particularly in the Jericho OX2 and Cowley
              Road OX4 corridors, adding private hall stock with the same annual
              refurbishment cycle.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from Oxford
              via the M1 south and M40 south or the A34. We work with FM contractors
              and accommodation managers across Oxford to schedule void-period
              programmes that deliver maximum room coverage within summer, Christmas
              or Easter void windows.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Oxford student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in student accommodation. Kitchen door
                fronts and drawer faces in shared kitchen areas across Oxford
                PBSA blocks wrapped in commercial-grade film during void periods —
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
                the room finish between tenancies — matching surfaces within
                each block or college building for visual consistency.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Studio kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door fronts within studio flat kitchenettes in
                Oxford Brookes and private PBSA en-suite flats wrapped
                alongside bedroom furniture as part of an integrated flat
                refurbishment programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and social area surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels and lounge furniture
                surfaces in communal social areas and common rooms wrapped
                during void periods to refresh shared space appearance.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and corridor surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, corridor door panels and entrance lobby
                surfaces wrapped to maintain the first impression of Oxford
                accommodation blocks for incoming tenants and during marketing
                viewings.
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
            How Oxford PBSA void programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Oxford PBSA void programmes are planned in advance with the
              accommodation manager, college facilities team or FM contractor.
              We confirm the block schedule — which floors, which flat or room
              types, what surfaces — before mobilisation, and work systematically
              through the programme to maximise room throughput within the
              available void window.
            </p>
            <p>
              A typical Oxford en-suite cluster kitchen — 4 to 6 kitchen unit
              door fronts and drawer faces — takes approximately 2 to 3 hours
              per flat. A full floor of eight flats can be completed in a working
              day by an experienced two-person team. For larger Oxford PBSA blocks
              across multiple floors, we plan multi-day site programmes with
              overnight stays to maintain daily productivity without long commutes.
            </p>
            <p>
              We operate white-label throughout: attending under your company name
              or the operator&apos;s name, following your site access protocols and
              providing photographic sign-off per flat or per floor as agreed.
              RAMS documentation is available for Oxford programmes that require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Oxford student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Oxford and south England services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-reading/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Reading</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Reading and Berkshire</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bath/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Bath</p>
              <p className="mt-1 text-xs text-muted">PBSA refurbishment across Bath and Somerset</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Bristol</p>
              <p className="mt-1 text-xs text-muted">PBSA void-period refurbishment Bristol</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Oxford PBSA programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Oxford student accommodation — get a void programme quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Oxford accommodation block — university or operator,
              postcode, number of units, primary surfaces to be refreshed and your
              void window dates. We&apos;ll come back with a scoped programme proposal.
              White-label and FM contractor enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Oxford Quote →
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
