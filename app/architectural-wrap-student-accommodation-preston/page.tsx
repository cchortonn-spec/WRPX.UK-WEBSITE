import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Preston | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Preston and Lancashire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators and student rental accommodation across all Preston PR postcodes. UCLan main campus zone. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-preston/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Preston — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Preston and Lancashire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental accommodation, private PBSA and university-linked housing across all Preston PR postcodes. UCLan (University of Central Lancashire) main campus PR1 zone. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 15 minutes from our South Yorkshire base via the M62 and M61."
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
      name: "Preston",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-preston/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Preston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Preston student accommodation — shared kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Preston void programmes. UCLan&apos;s main campus in Preston city centre PR1 generates consistent demand for cost-effective surface refurbishment across cluster flat, studio and en-suite bedroom accommodation types — from purpose-built PBSA blocks in the campus core to the private student rental stock in Ribbleton PR1, Deepdale PR1 and Moor Park PR1.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Preston student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Preston student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Preston via the M62 and M61. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Preston programmes — full floors or complete PBSA blocks — we run multi-day site programmes to maximise productivity within tight void windows. Out-of-void-period access for individual surface repairs or small refurbishments can also be co-ordinated around occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "Which Preston universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UCLan (University of Central Lancashire) is the dominant student accommodation anchor in Preston — with its main campus in Preston city centre PR1 spanning Adelphi Street, Fylde Road and Victoria Street, and approximately 37,000 students across all programmes. UCLan&apos;s scale makes it one of the largest university campuses in the North West, generating substantial surrounding PBSA demand across the Ribbleton PR1, Deepdale PR1 and Moor Park PR1 student zones. Private PBSA operators managing Preston blocks, student rental landlords with HMO and student-focused residential stock across the PR1 and PR2 postcode zones, and FM contractors managing multi-property portfolios across Lancashire are all primary audiences. Preston College on St George&apos;s Road PR1 adds a further student and further education accommodation demand from its student body.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Preston student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Preston programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor instructions in Preston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Preston and the wider Lancashire area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Preston commercial programmes. We cover all Preston PR postcodes and can extend to Chorley PR7, Bolton BL and wider Lancashire in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Preston and Lancashire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Preston and surrounding PR postcode areas — PR1 (Preston city centre: UCLan main campus — Adelphi Street, Fylde Road, Victoria Street, Corporation Street, the campus core spanning the north end of Preston city centre PR1 and generating the primary immediate PBSA and student private rental demand; Fishergate PR1 — the main Preston city-centre retail and commercial corridor; the bus station PR1 zone and the central HMO rental corridor in the streets immediately surrounding the UCLan campus generating high-density student rental demand; Ribbleton PR1 — the inner east Preston residential zone with established HMO and student rental stock driven by UCLan campus proximity; Deepdale PR1 — the inner north Preston residential zone with substantial student and young professional HMO rental provision), PR2 (Fulwood, Ingol — the prosperous north Preston residential suburb with PBSA and private rental provision serving UCLan students seeking quieter locations; Sharoe Green PR2 and the Fulwood corridor with semi-detached and modern residential stock converted for student rental use), PR5 (Bamber Bridge, Lostock Hall — the south Preston district town with student and young professional rental provision from UCLan and Preston College commuter students), PR6 (Clayton-le-Woods, Whittle-le-Woods — the semi-rural villages between Chorley and Preston with student rental and PBSA demand from UCLan and Chorley College students), PR26 (Leyland — the south Preston town with Preston College and UCLan commuter student rental demand in its residential stock). Wigan WN, Bolton BL and Chorley PR7 also within reach. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Preston via the M62 and M61.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapPrestonPage() {
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
            <span className="text-foreground">Preston</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Preston &amp; Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Preston
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Preston and Lancashire. Kitchen unit doors, bedroom furniture
            panels, communal surfaces and reception areas wrapped during void
            periods. UCLan main campus PR1 zone. PBSA operators, student
            landlords and FM contractors covered across all Preston PR postcodes.
            Approximately 1 hour 15 minutes from our South Yorkshire base via
            the M62 and M61.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Preston PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Preston student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Preston student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Preston is one of the North West&apos;s most significant student
              cities, anchored by UCLan (University of Central Lancashire) —
              one of the largest university campuses in the UK with approximately
              37,000 students across all programmes. UCLan&apos;s main campus
              occupies a substantial footprint in Preston city centre PR1, spanning
              Adelphi Street, Fylde Road, Victoria Street and Corporation Street,
              and generates the primary student accommodation demand across the
              city.
            </p>
            <p>
              The scale of UCLan means that Preston&apos;s student accommodation
              market is one of the most substantial in the North West outside
              Manchester. Purpose-built PBSA blocks in and around the campus
              core, a large private HMO rental market in Ribbleton PR1 and
              Deepdale PR1, and emerging purpose-built student blocks in the
              wider city-centre regeneration zone generate a consistent void-period
              demand for cost-effective surface refurbishment — vinyl wrapping
              kitchen units, bedroom furniture and communal surfaces without
              furniture replacement.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Preston via the M62 and M61 — making Preston one of the
              most accessible Lancashire student cities from our base. We cover
              all Preston PR postcodes, Chorley PR7, Bolton BL and wider
              Lancashire PBSA in the same regional mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Preston student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Preston student cluster
                flat communal kitchens — the surface that accumulates visible
                wear faster than almost any other interior finish. Wrapped
                during the summer void to restore a clean, uniform finish.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels and bedside cabinet fronts in Preston
                studio and en-suite student rooms — wrapped alongside communal
                kitchen units in the same void programme to refresh the full
                accommodation suite without replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, concierge counter panels and communal
                lounge storage unit fronts in Preston PBSA buildings — wrapped
                to restore the managed appearance of high-contact communal
                surfaces within each block.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and communal doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and communal fire door cladding throughout
                Preston student accommodation blocks — wrapped to maintain a
                consistent appearance across the building without disruption
                to residents during term.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units — studio rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and drawer fronts within individual
                Preston studio rooms — wrapped systematically room by room
                during the summer void, covering full blocks or selected floors
                as agreed with your facilities team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage panels and media wall unit fronts across
                Preston PBSA buildings — wrapped to refresh shared amenity
                spaces that accumulate wear from constant use across the
                academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Preston student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Wigan</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wigan student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-chorley/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Chorley</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Chorley care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Preston</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Preston</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Manchester</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Manchester student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Preston PBSA enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Preston student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Preston accommodation block, the surfaces and the
              void window. We work with PBSA operators, FM contractors and
              student landlords across all Preston PR postcodes. White-label
              by default. Approximately 1 hour 15 minutes from South Yorkshire
              via the M62 and M61.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Preston PBSA Quote →
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
