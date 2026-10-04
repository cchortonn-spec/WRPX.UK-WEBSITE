import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Bristol | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Bristol — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Bristol, University of the West of England (UWE) and all major PBSA operators across BS1, BS2, BS6, BS7, BS8, BS16 and the wider Bristol area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-bristol/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Bristol — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Bristol. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Bristol, University of the West of England (UWE Bristol) and all major PBSA operators across BS1, BS2, BS6, BS7, BS8, BS16 and wider Bristol. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Bristol",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-bristol/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application in Bristol PBSA — heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces faster than almost any other interior surface. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Bristol site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Bristol student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Bristol student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes to 2 hours from Bristol city centre via the M1 south and M4 west, or the M1 south to the M5 south. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Bristol programmes — full floors or complete blocks in BS1, BS8 or BS16 — we can run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bristol universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Bristol and the wider South West area. University of Bristol — approximately 27,000 students — has its main campus in the Clifton BS8 and Tyndalls Park area, with managed halls distributed across Clifton BS8, Stoke Bishop BS9 and the city-centre BS1 corridor. University of the West of England (UWE Bristol) — approximately 30,000 students — has its main campus at Frenchay BS16 in the north-east of the city, with a city-centre campus at BS1. PBSA operators active in Bristol include Unite Students, Student Roost, Liberty Living, Vita Student, Fresh Student Living and a range of private operators with blocks across BS1, BS2, BS6, BS7 and BS8. We work white-label for FM contractors managing refurbishment programmes on behalf of any Bristol operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Bristol student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Bristol student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer&apos;s specification. We provide photographic sign-off on completion for every Bristol programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Bristol student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Bristol programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bristol and South West postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Bristol PBSA postcodes — BS1 (city centre, Harbourside, Redcliffe), BS2 (St Pauls, Cliftonwood, Kingsdown), BS3 (Southville, Bedminster), BS5 (Eastville, St George), BS6 (Redland, Cotham — high HMO density student zone), BS7 (Horfield, Bishopston), BS8 (Clifton, Hotwells — University of Bristol campus area), BS9 (Stoke Bishop, Westbury-on-Trym), BS13 (Bishopsworth, Hartcliffe), BS15 (Kingswood, Warmley), BS16 (Frenchay, Downend — UWE Frenchay campus) — plus the wider Bristol area including Bath BA1/BA2, Weston-super-Mare BS23 and the M4/M5 corridor. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes to 2 hours from Bristol via the M1 south — Bristol is within our standard extended service area for multi-day void-period programmes.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Bristol &amp; South West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Bristol. Kitchen unit doors, bedroom furniture panels, communal surfaces and
            reception areas wrapped during void periods — no replacement, no disruption,
            photographic sign-off on completion. University of Bristol, UWE Bristol and
            all major PBSA operators. White-label for FM contractors. Approximately 1
            hour 45 minutes to 2 hours from our South Yorkshire base via the M1 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bristol Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bristol PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol is one of the UK&apos;s fastest-growing and most sought-after
              student cities, home to two universities with a combined student
              population of approximately 57,000. University of Bristol — around
              27,000 students — has its main teaching campus in the Clifton BS8 and
              Tyndalls Park area, with university-managed halls across Clifton BS8,
              Stoke Bishop BS9 and PBSA partnership buildings in the city centre BS1.
              University of the West of England — approximately 30,000 students — has
              its primary campus at Frenchay BS16 in the north-east of the city and
              a city-centre campus in BS1, with substantial PBSA provision across
              both catchments.
            </p>
            <p>
              The Redland BS6 and Cotham BS6 zone immediately north of the University
              of Bristol campus is the highest-density student HMO and PBSA area in
              the city — a concentration of Victorian and Edwardian terraced housing
              converted to student use, plus newer purpose-built blocks, that has
              served the Bristol student market for decades. The city-centre BS1 area
              around Broadmead and the Harbourside has seen sustained PBSA investment,
              with new-build student accommodation blocks alongside converted commercial
              and warehouse buildings. The Clifton BS8 and Hotwells BS8 area carries
              significant managed university and private PBSA stock directly adjacent
              to the University of Bristol campus.
            </p>
            <p>
              The refurbishment challenge across Bristol PBSA follows the national
              pattern: kitchen unit doors, drawer fronts and bedroom furniture panels
              installed during initial fit-out accumulate surface damage through years
              of heavy student use and regular cleaning with commercial products.
              For PBSA operators on annual void-period refresh cycles, vinyl wrapping
              is systematically faster, cheaper and less disruptive than unit
              replacement — and the finish quality exceeds many budget replacement
              alternatives available at the required price point.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 45 minutes to 2
              hours from Bristol city centre via the M1 south and M4 west, or the M1
              south to the M5 south. Bristol and the wider South West area are within
              our standard extended service radius, with multi-day void-period
              programmes available for larger Bristol blocks where the programme scale
              justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Universities section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Two universities — two large PBSA markets
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              University of Bristol&apos;s managed halls — including Wills Hall BS9,
              Clifton Hill House BS8, Hiatt Baker Hall BS9, Goldney Hall BS8 and
              the newer university-managed blocks in the Clifton and Tyndalls Park
              area — represent a substantial managed accommodation portfolio. Halls
              built or significantly fitted out in the 1990s and 2000s now have
              kitchen unit doors and bedroom furniture panels reaching the point
              where a systematic refresh programme makes commercial sense. The
              private PBSA blocks in BS1 and BS8 that have grown rapidly in the
              past decade now face their first major refurbishment cycles.
            </p>
            <p>
              UWE Bristol&apos;s Frenchay BS16 campus serves a student body of
              approximately 30,000, with a mix of university-managed halls on the
              Frenchay campus and significant private PBSA provision across the
              BS16, BS7 and city-centre BS1 catchments. The University Quarter
              development around UWE city campus in BS1 has added further PBSA
              stock in recent years, supplementing the Frenchay campus
              accommodation offer.
            </p>
            <p>
              The private PBSA market across both university catchments adds
              substantial additional void-period refurbishment volume. Operators
              including Unite Students, Student Roost, Liberty Living and Vita
              Student all have significant Bristol operations. We work with
              university estates teams directly, with accommodation managers and
              white-label for FM contractors managing PBSA refurbishment contracts
              across Bristol. RAMS documentation, photographic sign-off and flexible
              void-period scheduling are standard on every Bristol programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Bristol student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Bristol PBSA — wrapping replaces the
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
            Working the Bristol void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Bristol PBSA properties — is the primary window for kitchen unit door
              and bedroom furniture wrapping across the majority of blocks. We
              co-ordinate the programme with your facilities or accommodation team
              before mobilisation: agreed block sequence, access management, sign-off
              format and any facilities team requirements specific to the Bristol site.
            </p>
            <p>
              For Bristol properties on short void windows — particularly PBSA
              operators running 51-week tenancy agreements with minimal gap between
              outgoing and incoming tenants — we plan phased programmes that use
              interim access windows, semester breaks and short void periods on a
              floor-by-floor or block-by-block basis across multiple years.
            </p>
            <p>
              Bristol is approximately 1 hour 45 minutes to 2 hours from South
              Yorkshire via the M1 south. For larger void-period programmes in BS1,
              BS8 or BS16 — multi-floor blocks or multi-building programmes — we run
              multi-day site programmes with overnight stays in Bristol, maximising
              productivity within the available window. Single-building or
              single-floor programmes can often be delivered within a daily travel
              window from our South Yorkshire base.
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
            Bristol student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Bristol and the South West
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-liverpool/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Liverpool</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Liverpool student accommodation — UoL, LJMU, Liverpool Hope and all major PBSA operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester student accommodation — UoM, MMU and all major PBSA operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Bristol and South West PBSA buildings.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham PBSA — UoB, Aston, BCU and all major operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Nottingham student accommodation — UoN, NTU and all major PBSA operators.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bristol PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately
              1 hour 45 minutes to 2 hours from Bristol via the M1 south — multi-day
              site programmes available for larger Bristol and South West PBSA work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bristol Survey →
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
