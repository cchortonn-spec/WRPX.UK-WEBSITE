import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Liverpool | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Liverpool — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Liverpool, Liverpool John Moores, Liverpool Hope and all major PBSA operators across L1, L3, L7, L8 and the wider Merseyside area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-liverpool/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Liverpool — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Liverpool. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Liverpool, Liverpool John Moores, Liverpool Hope and all major PBSA operators across L1, L3, L7, L8 and wider Merseyside. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Liverpool",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-liverpool/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the most common application in Liverpool PBSA — heavy daily use in shared student kitchens accelerates surface wear on door fronts and drawer faces faster than almost any other interior surface. Bedroom kitchenette unit doors in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess each surface type at survey and specify the appropriate commercial-grade architectural film for the substrate, use pattern and expected contact frequency at each Liverpool site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Liverpool student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Liverpool student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Liverpool city centre via the M62 west. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Liverpool programmes — full floors or complete blocks in L1, L3 or L7 — we can run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Liverpool universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Liverpool and the wider Merseyside area. University of Liverpool — approximately 22,000 students — has its main campus in the Brownlow Hill L3 area, with managed halls in the Smithdown Road L15 corridor and PBSA provision in the city-centre L1 and L3 postcodes. Liverpool John Moores University — approximately 25,000 students — has its city campus in the Mount Pleasant L3 area and its Byrom Street campus in L3, with PBSA spread across L1, L3 and L7. Liverpool Hope University adds a further 8,000 students based across the Hope Park L16 and creative campus L1 sites. PBSA operators active in Liverpool include Unite Students, Student Roost, Liberty Living, Fresh Student Living and a range of private operators with significant L1, L3 and L7 city-centre blocks. We work white-label for FM contractors managing refurbishment programmes on behalf of any operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Liverpool student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life in Liverpool student accommodation under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer's specification. We provide photographic sign-off on completion for every Liverpool programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Liverpool student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Liverpool programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Liverpool and Merseyside postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Liverpool postcodes — L1 (city centre, Liverpool ONE, Ropewalks), L2 (Dale Street, Castle Street), L3 (Brownlow Hill, Mount Pleasant, Everton), L4 (Walton, Anfield, Kirkdale), L6 (Edge Hill, Fairfield, Kensington), L7 (Edge Hill, Wavertree, Fairfield), L8 (Toxteth, Dingle, Princes Park, Smithdown Road), L11 (Norris Green, Clubmoor), L13 (Old Swan, Tuebrook), L15 (Wavertree, Smithdown Road, Penny Lane), L16 (Broadgreen, Child's Ercall) — plus the wider Merseyside area including Bootle L20, Crosby L23, Southport PR8/PR9, Birkenhead CH41/CH42, Wallasey CH44/CH45 and St Helens WA9/WA10. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Liverpool city centre via the M62 west — Liverpool is within our standard extended service area.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapLiverpoolPage() {
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
            <span className="text-foreground">Liverpool</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Liverpool &amp; Merseyside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Liverpool
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Liverpool. Kitchen unit doors, bedroom furniture panels, communal surfaces
            and reception areas wrapped during void periods — no replacement, no
            disruption, photographic sign-off on completion. University of Liverpool,
            Liverpool John Moores, Liverpool Hope and all major PBSA operators.
            White-label for FM contractors. Approximately 1 hour 30 minutes from our
            South Yorkshire base via the M62 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Liverpool Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Liverpool PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Liverpool is one of the UK&apos;s leading student cities, home to three
              universities with a combined student population of approximately 55,000.
              University of Liverpool — around 22,000 students — has its main campus
              in the Brownlow Hill L3 area, with university-managed halls distributed
              across the Smithdown Road L15 corridor and PBSA partnership buildings
              throughout the city-centre L1 and L3 postcodes. Liverpool John Moores
              University — approximately 25,000 students — has its city campus in the
              Mount Pleasant L3 area and its Byrom Street campus in the heart of the
              city centre L3, with a significant PBSA presence across L1, L3 and L7.
              Liverpool Hope University adds a further 8,000 students across the Hope
              Park L16 and creative campus L1 sites.
            </p>
            <p>
              The L3 and L7 postcodes immediately south of the city centre are the
              primary student accommodation geography — a dense zone of purpose-built
              PBSA blocks, managed university halls and high-HMO-density Victorian
              terracing in the Smithdown Road L15 corridor, Toxteth L8 and Edge Hill L7
              that has served the Liverpool student market for decades. The Ropewalks
              L1 zone and adjacent city-centre L1 areas have seen sustained PBSA
              investment, with new-build student blocks alongside converted warehouse
              and commercial buildings. The L8 Toxteth and Princes Park area carries
              further PBSA and large-HMO stock in the Victorian terrace belt south of
              the university campus.
            </p>
            <p>
              The refurbishment challenge across Liverpool PBSA follows the pattern
              seen in every major UK student city: kitchen unit doors, drawer fronts
              and bedroom furniture panels installed during initial fit-out accumulate
              surface damage through years of heavy student use and regular cleaning
              with commercial products. For PBSA operators on annual void-period
              refresh cycles, vinyl wrapping is systematically faster, cheaper and
              less disruptive than unit replacement — and the finish quality exceeds
              many budget replacement alternatives available at the required price point.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from
              Liverpool city centre via the M62 west from the M1 at Lofthouse.
              Liverpool and the wider Merseyside area are within our standard extended
              service radius, with multi-day void-period programmes available for
              larger Liverpool blocks where the programme scale justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Universities section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Three universities — three large PBSA markets
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              University of Liverpool&apos;s managed halls — including Vine Court L7,
              Carnatic Halls L18, the Greenbank cluster L17 and the central campus
              halls in L3 — represent a significant managed accommodation portfolio
              across multiple postcode areas. Halls built or significantly fitted out
              in the 2000s and early 2010s now have kitchen unit doors and bedroom
              furniture panels that are reaching the point where a systematic refresh
              programme makes commercial sense.
            </p>
            <p>
              Liverpool John Moores University operates across multiple city-centre
              campuses and has a distributed PBSA presence through university-managed
              accommodation and third-party PBSA operators. The concentration of LJMU
              student accommodation in the L1 city centre and L3 Mount Pleasant area
              overlaps significantly with the broader Liverpool PBSA market, where
              Unite Students, Student Roost, Liberty Living and Fresh Student Living
              all operate substantial blocks.
            </p>
            <p>
              The private PBSA market across all three university catchments adds
              substantial additional void-period refurbishment volume. We work with
              university estates teams directly, with accommodation managers and
              white-label for FM contractors managing PBSA refurbishment contracts
              in Liverpool. RAMS documentation, photographic sign-off and flexible
              void-period scheduling are standard on every Liverpool programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Liverpool student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application in Liverpool PBSA — wrapping replaces the
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
            Working the Liverpool void window
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The summer void — typically late June through to mid-September for most
              Liverpool PBSA properties — is the primary window for kitchen unit door
              and bedroom furniture wrapping across the majority of blocks. We
              co-ordinate the programme with your facilities or accommodation team
              before mobilisation: agreed block sequence, access management, sign-off
              format and any facilities team requirements.
            </p>
            <p>
              For Liverpool properties on short void windows — particularly PBSA
              operators running 51-week tenancy agreements with minimal gap between
              outgoing and incoming tenants — we plan phased programmes that use
              interim access windows, semester breaks and short void periods on a
              floor-by-floor or block-by-block basis across multiple years.
            </p>
            <p>
              Liverpool is approximately 1 hour 30 minutes from South Yorkshire via
              the M62 west. For larger void-period programmes in L1 or L3 —
              multi-floor blocks or multi-building programmes — we run multi-day site
              programmes with overnight stays in Liverpool, maximising productivity
              within the available window. Single-building or single-floor programmes
              can often be delivered within a daily travel window from our South
              Yorkshire base.
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
            Liverpool student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Liverpool and Merseyside
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all PBSA vinyl wrap applications, surfaces, film spec and void scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester student accommodation — UoM, MMU and all major PBSA operators.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Leeds</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leeds PBSA — University of Leeds, Leeds Beckett and all major operators.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar-control glazing film for Liverpool and Merseyside PBSA buildings.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrap Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Sheffield PBSA — UoS, Sheffield Hallam and all major operators. Based in South Yorkshire.</p>
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
              Liverpool PBSA refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of beds, the surfaces and the void window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately
              1 hour 30 minutes from Liverpool via the M62 west — multi-day site
              programmes available for larger Liverpool and Merseyside PBSA work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Liverpool Survey →
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
