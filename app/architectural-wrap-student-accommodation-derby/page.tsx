import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Derby | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Derby — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Derby, all major PBSA operators and purpose-built student accommodation across DE1, DE22 and the wider Derbyshire area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Derby — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Derby. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Derby DE1/DE22 and all major PBSA operators in the Derby city area. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Derby",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-derby/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application in Derby PBSA — heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces faster than almost any other interior surface. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Derby site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Derby student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Derby student accommodation vinyl wrap work. WRPX is based in South Yorkshire, less than 45 minutes from Derby city centre via the A38 north and M1. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. Derby is one of our closest service markets — the travel overhead on Derby PBSA programmes is minimal compared to more distant cities.",
      },
    },
    {
      "@type": "Question",
      name: "Which Derby universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Derby and the wider Derbyshire postcode area. The University of Derby — approximately 20,000 students — has its main Markeaton Street campus in DE22, with secondary sites in the city centre DE1 and at Kedleston Road DE22. The university's managed halls and PBSA partnership buildings are distributed across the DE1 and DE22 area, with significant purpose-built student accommodation stock on and around the Markeaton campus. PBSA operators active in Derby include Student Roost, Unite Students and a range of regional operators with city-centre blocks. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Derby student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Derby student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer's specification. We provide photographic sign-off on completion for every Derby programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Derby student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Derby programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Derby and Derbyshire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Derby city postcodes — DE1 (city centre, Cathedral Quarter), DE22 (Markeaton, Mackworth, Kedleston Road, Mickleover), DE23 (Normanton, Littleover, Sunnyhill), DE24 (Allenton, Osmaston, Alvaston, Sinfin) — and the wider Derbyshire area including Ripley DE5, Belper DE56, Long Eaton NG10, Ilkeston DE7 and the Amber Valley DE55 corridor. WRPX is based in South Yorkshire, less than 45 minutes from Derby city centre via the A38 north — one of our closest and most accessible service markets.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Derby &amp; Derbyshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Derby. Kitchen unit doors, bedroom furniture panels, communal surfaces and
            reception areas wrapped during void periods — no replacement, no disruption,
            photographic sign-off on completion. University of Derby and all major PBSA
            operators. White-label for FM contractors. Less than 45 minutes from our
            South Yorkshire base via the A38.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is a city of around 260,000 people, anchored by a single substantial
              university. The University of Derby — approximately 20,000 students — has
              its main Markeaton Street campus in DE22, with secondary sites across
              the city centre DE1 and along the Kedleston Road corridor. The university
              has grown its managed halls provision significantly over recent years,
              with purpose-built student accommodation blocks on and adjacent to the
              main campus forming the core PBSA stock.
            </p>
            <p>
              The Markeaton campus DE22 and the immediate city-centre DE1 zone
              contain the majority of Derby&apos;s PBSA. Purpose-built blocks in the
              Cathedral Quarter DE1, around Friar Gate DE1 and along the ring road
              corridor serve the bulk of the student population living in managed
              accommodation. The scale of Derby&apos;s student accommodation market
              is smaller than Birmingham or Manchester, but it is compact and dense
              — high surface volumes in a relatively small geographic footprint,
              which suits the systematic block-by-block approach WRPX uses on
              void-period programmes.
            </p>
            <p>
              The refurbishment challenge across Derby PBSA is consistent with what
              we see elsewhere: kitchen unit doors, drawer fronts and bedroom
              furniture panels installed during initial fit-out accumulate surface
              damage through years of heavy student use and regular cleaning with
              commercial products. The solution — vinyl wrapping during the void
              period — is faster, cheaper and less disruptive than unit replacement
              in every case we assess.
            </p>
            <p>
              WRPX is based in South Yorkshire, less than 45 minutes from Derby
              city centre via the A38 north — closer than almost any other city
              in our service area. We can mobilise for survey visits and multi-week
              void-period Derby programmes without significant travel overhead.
            </p>
          </div>
        </div>
      </section>

      {/* University of Derby specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            University of Derby accommodation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The University of Derby&apos;s managed halls and PBSA partnership buildings
              are the primary void-period opportunity in Derby student accommodation.
              Halls built or significantly refurbished in the 2000s and 2010s now have
              kitchen unit doors and bedroom furniture panels reaching the point where
              surface wear is visible and a refresh programme makes commercial sense.
            </p>
            <p>
              The Cathedral Quarter campus DE1 and the Markeaton Street DE22 campus
              are well-connected to central Derby — a short drive from our South
              Yorkshire base that allows rapid mobilisation and multi-day programmes
              without overnight stays. For larger programmes — full floors or complete
              blocks — a single mobilisation covers more work in Derby than in more
              distant cities.
            </p>
            <p>
              We work with university estates teams, directly with accommodation
              managers, and white-label for FM contractors managing the university&apos;s
              refurbishment contracts. RAMS documentation, photographic sign-off and
              flexible void-period scheduling are standard on every Derby programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Derby student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Derby PBSA — wrapping replaces the
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
            Working the Derby void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Derby PBSA properties — is the primary window for kitchen unit door and
              bedroom furniture wrapping across the majority of blocks. We co-ordinate
              the programme with your facilities or accommodation team before
              mobilisation: agreed block sequence, access management, sign-off format
              and any facilities team sign-off requirements.
            </p>
            <p>
              For Derby properties on short void windows — particularly PBSA operators
              running 51-week tenancy agreements with minimal gap between outgoing and
              incoming tenants — we can plan phased programmes that use interim access
              windows, semester breaks and short void periods on a floor-by-floor or
              block-by-block basis across multiple years.
            </p>
            <p>
              Derby&apos;s proximity to South Yorkshire means mobilisation is fast —
              we can be on-site in Derby within the hour. For tight void schedules
              where speed of response matters, this makes a practical difference
              compared to contractors travelling from further afield.
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
            Derby student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Derby and Derbyshire
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Nottingham PBSA — University of Nottingham, NTU and all major operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Leicester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leicester and Loughborough student accommodation — UoL, DMU and all major operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Derby and Derbyshire PBSA buildings.</p>
            </Link>
            <Link href="/architectural-wrap-offices-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Derby offices and commercial interiors — reception desks, breakout areas and fit-out surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Derby hotels — guest room furniture, reception desks and corridor surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Derby PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is less than 45 minutes
              from Derby via the A38 — no significant mobilisation overhead on Derby
              student accommodation work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Derby Survey →
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
