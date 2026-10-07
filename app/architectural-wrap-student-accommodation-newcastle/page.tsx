import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Newcastle | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Newcastle upon Tyne — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers Newcastle University, Northumbria University, all major PBSA operators and purpose-built student accommodation across NE1, NE2 and the wider Tyne and Wear area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-newcastle/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Newcastle — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Newcastle upon Tyne. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers Newcastle University and Northumbria University NE1/NE2 and all major PBSA operators in the Newcastle and Tyne & Wear area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Newcastle",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-newcastle/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application in Newcastle PBSA — heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces faster than almost any other interior surface. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Newcastle site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Newcastle student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Newcastle student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 2 hours from Newcastle city centre via the A1(M) north. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Newcastle programmes — full floors or complete blocks in NE1 or NE2 — we can run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newcastle universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Newcastle upon Tyne and the wider Tyne and Wear area. Newcastle University — approximately 25,000 students — has its main campus in the Haymarket NE1 area, with managed halls distributed across the city centre NE1 and Jesmond NE2. Northumbria University — approximately 35,000 students — has its city campus in NE1 and its Coach Lane campus in NE7, with a substantial PBSA presence across the Shieldfield NE2 and city-centre NE1 postcodes. PBSA operators active in Newcastle include Unite Students, Unipol, Student Roost, Fresh Student Living and a range of operators with Quayside NE1 and Jesmond NE2 city-centre blocks. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Newcastle student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Newcastle student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer's specification. We provide photographic sign-off on completion for every Newcastle programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Newcastle student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Newcastle programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newcastle and Tyne and Wear postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newcastle upon Tyne postcodes — NE1 (city centre, Quayside, Haymarket), NE2 (Jesmond, Heaton, Sandyford, Shieldfield), NE3 (Gosforth, Fawdon), NE4 (Fenham, Elswick, Benwell, Denton), NE5 (Westerhope, Newbiggin Hall, Chapel House), NE6 (Byker, Heaton, Walker, Walkergate), NE7 (High Heaton, Benton), NE15 (Lemington, Throckley) — plus the wider Tyne and Wear area including Gateshead NE8/NE9/NE10, Sunderland SR1-SR5, South Shields NE33/NE34, Wallsend NE28 and Whitley Bay NE25/NE26. WRPX is based in South Yorkshire, approximately 2 hours from Newcastle city centre via the A1(M) north — Newcastle is within our standard extended service area.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapNewcastlePage() {
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
            <span className="text-foreground">Newcastle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Newcastle &amp; Tyne and Wear
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Newcastle
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Newcastle upon Tyne. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods — no replacement, no
            disruption, photographic sign-off on completion. Newcastle University,
            Northumbria University and all major PBSA operators. White-label for FM
            contractors. Approximately 2 hours from our South Yorkshire base via the
            A1(M) north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Newcastle Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Newcastle PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newcastle upon Tyne is one of the UK&apos;s leading student cities,
              home to two major universities with a combined student population of
              approximately 60,000. Newcastle University — around 25,000 students
              — has its main campus in the Haymarket NE1 area, with managed halls
              and PBSA partnership buildings distributed across the city centre NE1
              and Jesmond NE2. Northumbria University — approximately 35,000 students
              — operates its city campus in NE1 and the Coach Lane campus in NE7,
              with significant PBSA provision in the Shieldfield NE2 and city-centre
              NE1 postcode areas.
            </p>
            <p>
              The Jesmond NE2 and Sandyford NE2 areas immediately north of the city
              centre are the primary student accommodation geography — a dense zone
              of purpose-built PBSA blocks, managed halls and high-HMO-density
              Victorian terracing that has served the Newcastle student market for
              decades. The Quayside NE1 zone has seen significant PBSA investment
              in recent years, with new-build student blocks alongside established
              city-centre university accommodation. Heaton NE6 and the areas east
              of the city centre carry further PBSA and HMO stock.
            </p>
            <p>
              The refurbishment challenge across Newcastle PBSA follows the same
              pattern seen in every UK student city: kitchen unit doors, drawer fronts
              and bedroom furniture panels installed during initial fit-out accumulate
              surface damage through years of heavy student use and regular cleaning
              with commercial products. For PBSA operators on annual void-period
              refresh cycles, vinyl wrapping is systematically faster, cheaper and
              less disruptive than unit replacement — and the quality of finish is
              better than many budget replacement alternatives.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours from Newcastle
              city centre via the A1(M) north. We service Newcastle and the wider
              Tyne and Wear area on multi-day void-period programmes, with overnight
              stays where the programme scale justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Newcastle University specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle and Northumbria — two large PBSA markets
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newcastle University&apos;s managed halls — including Castle Leazes NE2,
              Leazes Terrace NE1 and the cluster of university-managed buildings across
              the Richardson Road NE2 and Claremont Road NE2 zone — have been subject
              to ongoing refurbishment. Halls built or significantly fitted out in the
              2000s and early 2010s now have kitchen unit doors and bedroom furniture
              panels that are reaching the point where a systematic refresh programme
              makes commercial sense.
            </p>
            <p>
              Northumbria University&apos;s PBSA provision is distributed more widely —
              city-campus NE1 buildings around the Ellison Place and Sandyford Road
              area, with the Coach Lane NE7 campus accommodation serving students
              at the health and education faculties. The private PBSA market around
              both universities — Unite Students, Student Roost, Fresh Student Living,
              Unipol and a range of private operators — adds substantial additional
              void-period refurbishment volume across the NE1 and NE2 postcodes.
            </p>
            <p>
              We work with university estates teams directly, with accommodation
              managers and white-label for FM contractors managing PBSA refurbishment
              contracts in Newcastle. RAMS documentation, photographic sign-off and
              flexible void-period scheduling are standard on every Newcastle programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Newcastle student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Newcastle PBSA — wrapping replaces the
                appearance of heavily used kitchen unit doors at a fraction of
                full unit replacement cost, with no disruption to the kitchen layout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchen drawer fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Drawer fronts in communal kitchens and studio flat kitchenettes
                see the highest contact frequency after door faces. Commercial film
                seals edges to resist moisture and cleaning product ingress.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panel faces in en-suite bedrooms and studio flats —
                refreshed during the void period without any removal, disposal or
                furniture replacement overhead.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet fronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door and drawer front panels — wrapped to match or
                complement the wardrobe finish, giving a refreshed look across the
                full bedroom furniture set.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception counter and desk fascia panels — the highest-visibility
                surface in any PBSA building. Commercial film specification for
                high-contact counter surfaces as standard.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors and panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom door leaf panels and communal area door faces
                — wrapped without room access where corridor-only work is required
                during the live-in semester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Void window */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working the Newcastle void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Newcastle PBSA properties — is the primary window for kitchen unit door
              and bedroom furniture wrapping across the majority of blocks. We co-ordinate
              the programme with your facilities or accommodation team before mobilisation:
              agreed block sequence, access management, sign-off format and any facilities
              team requirements.
            </p>
            <p>
              For Newcastle properties on short void windows — particularly PBSA operators
              running 51-week tenancy agreements with minimal gap between outgoing and
              incoming tenants — we plan phased programmes that use interim access windows,
              semester breaks and short void periods on a floor-by-floor or block-by-block
              basis across multiple years.
            </p>
            <p>
              Newcastle is approximately 2 hours from South Yorkshire via the A1(M) north.
              For larger void-period programmes in NE1 or NE2 — multi-floor blocks or
              multi-building programmes — we run multi-day site programmes with overnight
              stays in Newcastle, maximising productivity within the available window.
              Single-building or single-floor programmes can often be delivered within a
              daily travel window from our South Yorkshire base.
            </p>
            <p>
              All programmes include before and after photographic documentation per
              room and per surface area. RAMS documentation is provided as standard.
              We work white-label under your contractor identity where required for
              FM-managed programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Newcastle and the North East
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Leeds</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leeds PBSA — University of Leeds, Leeds Beckett and all major operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester student accommodation — UoM, MMU and all major PBSA operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Newcastle and North East PBSA buildings.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-newcastle/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract vinyl installer Newcastle</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation in Newcastle for sign companies, print houses and agencies.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Sheffield PBSA — UoS, Sheffield Hallam and all major operators. Based in South Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newcastle PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately 2 hours
              from Newcastle via the A1(M) north — regular multi-day site programmes
              available for larger Newcastle and North East PBSA work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Newcastle Survey →
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
