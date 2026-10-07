import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Edinburgh | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Edinburgh — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Edinburgh, Heriot-Watt University, Edinburgh Napier University and all major PBSA operators across EH1, EH8, EH9, EH11, EH12 and the wider Edinburgh area. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-edinburgh/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Edinburgh — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Edinburgh. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Edinburgh, Heriot-Watt University, Edinburgh Napier University and all major PBSA operators across EH1, EH8, EH9, EH11, EH12 and wider Edinburgh. Commercial-grade film, photographic sign-off, white-label for FM contractors."
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
      name: "Edinburgh",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-edinburgh/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Edinburgh PBSA — shared student kitchens in purpose-built halls and converted properties accumulate surface wear faster than almost any other interior finish. Bedroom kitchenette units in studio and en-suite flats, bedroom wardrobe door panels, bedside cabinet fronts, communal lounge storage unit fronts, reception desk fascias and corridor door panels are all within scope. We assess at survey and specify the appropriate commercial-grade architectural film for the substrate and contact frequency at each Edinburgh site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Edinburgh student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Edinburgh student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes to 4 hours from Edinburgh city centre via the A1(M) north and the A1 through Berwick-upon-Tweed into Scotland. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Edinburgh programmes — full floors or complete blocks in EH1, EH8 or EH11 — we run multi-day site programmes with overnight stays to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Edinburgh universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Edinburgh and the wider Lothians area. University of Edinburgh — approximately 30,000 students — has its historic Old Town campus in the EH8 area, with the main Bristo Square and George Square zone, King's Buildings campus in the south EH9 area, and managed halls spread across EH8, EH9, EH10 and EH16. Heriot-Watt University — approximately 11,000 Edinburgh-campus students — is based at the Riccarton campus on the western edge of Edinburgh in EH14, with PBSA provision in both the EH14 campus area and the city centre. Edinburgh Napier University — approximately 18,000 students — operates across three campuses: Craiglockhart EH14, Sighthill EH11 and Merchiston EH10, with student accommodation spread across south-west Edinburgh. PBSA operators active in Edinburgh include Unite Students, Vita Student, Fresh Student Living, Chapter and a range of private developers with blocks across EH1, EH6, EH7 and EH8. We work white-label for FM contractors managing refurbishment programmes on behalf of any Edinburgh operator.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Edinburgh student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. High-contact areas such as drawer pull edges and kitchen door corners adjacent to sinks are assessed at survey, and edge profiles are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Edinburgh programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for FM contractors, property management companies and university estates teams managing Edinburgh student accommodation programmes. We operate under your contractor identity where required, follow your facilities team scheduling instructions, use your preferred sign-off formats, and provide photographic documentation per room or per area to your specification. RAMS documentation is available as standard for all Edinburgh programmes. We are familiar with void-period constraints, key management requirements and the scheduling demands that FM-led programmes typically involve across larger PBSA portfolios.",
      },
    },
    {
      "@type": "Question",
      name: "Which Edinburgh postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all key Edinburgh PBSA postcodes — EH1 (Old Town, Royal Mile, Grassmarket), EH2 (New Town, West End, Princes Street), EH3 (Tollcross, Bruntsfield, Fountainbridge, Stockbridge), EH4 (Comely Bank, Inverleith, Davidson's Mains, Cramond), EH6 (Leith, Bonnington, Easter Road), EH7 (Abbeyhill, Hillside, Meadowbank, Restalrig), EH8 (Newington, Pleasance, Canongate, Holyrood — University of Edinburgh Old Town campus zone), EH9 (Marchmont, Grange, Sciennes, Mayfield — King's Buildings campus), EH10 (Morningside, Bruntsfield, Craiglockhart, Greenhill — Napier Merchiston campus adjacent), EH11 (Sighthill, Longstone, Broomhouse, Gorgie — Napier Sighthill campus), EH12 (Corstorphine, Murrayfield, Saughton), EH14 (Slateford, Longstone, Balerno, Currie — Heriot-Watt Riccarton campus), EH15 (Portobello, Joppa, Duddingston), EH16 (Liberton, Gilmerton, Gracemount, Moredun), EH17 (Gilmerton, Moredun, Burdiehouse) — plus the wider Lothians including Musselburgh EH21, Dalkeith EH22, Bonnyrigg EH19, Penicuik EH26, Livingston EH54, Broxburn EH52 and Bathgate EH48. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes to 4 hours from Edinburgh via the A1(M) north.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapEdinburghPage() {
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
            <span className="text-foreground">Edinburgh</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Edinburgh &amp; Lothians
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Edinburgh
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments across
            Edinburgh. Kitchen unit doors, bedroom furniture panels, communal surfaces and
            reception areas wrapped during void periods — no replacement, no disruption,
            photographic sign-off on completion. University of Edinburgh, Heriot-Watt
            University, Edinburgh Napier University and all major PBSA operators across
            EH1, EH8, EH9, EH11, EH14 and the wider Edinburgh area. White-label for FM
            contractors. Approximately 3 hours 30 minutes to 4 hours from our South
            Yorkshire base via the A1(M) north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Edinburgh Survey →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Edinburgh PBSA context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh student accommodation — the refurbishment picture
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh is Scotland&apos;s capital and one of the UK&apos;s most prominent
              student cities, home to four universities with a combined full-time student
              population of approximately 70,000. University of Edinburgh — around 30,000
              students — is the largest, with its historic Old Town campus around George
              Square and Bristo Square in EH8, the science and engineering King&apos;s
              Buildings campus in EH9, and managed halls spread across the EH8, EH9,
              EH10 and EH16 postcodes.
            </p>
            <p>
              Heriot-Watt University, based at the Riccarton campus in the EH14 west
              Edinburgh area, has approximately 11,000 students at its Edinburgh campus,
              with PBSA provision both on-campus in EH14 and in city-centre blocks closer
              to Edinburgh city centre. Edinburgh Napier University operates across three
              campuses — Craiglockhart EH14, Sighthill EH11 and Merchiston EH10 — with
              approximately 18,000 students and student accommodation spread across the
              south-west Edinburgh corridor. Queen Margaret University, based in
              Musselburgh EH21 on the east Edinburgh boundary, adds further PBSA demand
              to the wider Lothians area.
            </p>
            <p>
              Edinburgh&apos;s PBSA stock is a mix of purpose-built modern developments
              in the city centre and Leith — Unite Students, Vita Student, Fresh Student
              Living, Chapter and private developers — alongside older university-managed
              halls and converted tenement buildings. The city&apos;s summer void window
              runs from late June to mid-September, during which PBSA operators carry out
              maintenance and surface refurbishments before the new academic intake.
            </p>
            <p>
              WRPX is based in South Yorkshire and mobilises to Edinburgh for multi-day
              void-period programmes. The A1(M) north from Doncaster connects to the A1
              at Scotch Corner and continues north through Berwick-upon-Tweed EH45 into
              Scotland, arriving in Edinburgh in approximately 3 hours 30 minutes to 4
              hours in off-peak conditions. For multi-day Edinburgh programmes, our team
              stays locally rather than commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh PBSA surfaces we wrap
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in shared student accommodation. Kitchen
                door fronts and drawer faces in communal kitchens absorb daily
                impact, cleaning chemicals and general use from multiple occupants.
                Commercial vinyl extends usable life by 5 to 8 years.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom kitchenette units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Studio and en-suite bedroom units in Edinburgh PBSA blocks typically
                include a kitchenette area. Kitchenette door fronts and drawer panels
                are wrapped during the void to a fresh finish for new tenants.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe and furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                surfaces wrapped to a consistent finish across the block —
                transforming the visual standard of a room without replacement costs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and common area doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and fire door leaf surfaces in Edinburgh PBSA
                blocks accumulate scuffs and impact damage across the academic year.
                Wrapping during the void restores a clean, consistent finish without
                repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal lounge surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia panels, communal lounge storage unit fronts
                and media wall cladding panels — refreshing the first impression
                of an Edinburgh PBSA block at a fraction of the replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Multi-site and white-label programmes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For FM contractors and operators running Edinburgh PBSA programmes
                across multiple blocks or sites, we operate white-label and
                provide consistent photographic sign-off, RAMS documentation and
                scheduling to your facilities team&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edinburgh universities detail */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh universities and PBSA operators
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">University of Edinburgh</strong> —
              approximately 30,000 students — is one of the UK&apos;s oldest and most
              prestigious universities. The main campus is clustered around George
              Square and Bristo Square in the EH8 Newington area, with the Medical
              School and Law School in the EH8/EH9 zone, and the engineering and
              science King&apos;s Buildings campus in EH9 to the south. University-managed
              halls are concentrated in EH8, EH9, EH10 and EH16 — plus newer
              purpose-built blocks in the EH6 Leith and EH7 Abbeyhill areas. A
              significant proportion of Edinburgh University students live in HMO
              tenement flats in the Marchmont EH9, Newington EH16 and Bruntsfield EH10
              areas, driving strong private rental demand across south Edinburgh.
            </p>
            <p>
              <strong className="text-foreground">Heriot-Watt University</strong> —
              approximately 11,000 Edinburgh-campus students — occupies a large
              self-contained campus at Riccarton in EH14 on the western edge of the
              city. The campus has purpose-built PBSA stock on-site, and the city-centre
              student population is served by operator blocks in the EH1, EH3 and EH6
              zones. Riccarton campus on-site accommodation includes halls from the
              1970s and 1980s alongside newer purpose-built units — a mixed-vintage
              stock where vinyl wrap refurbishment is highly relevant.
            </p>
            <p>
              <strong className="text-foreground">Edinburgh Napier University</strong> —
              approximately 18,000 students — spans three campuses: Craiglockhart in
              EH14, Sighthill in EH11 and Merchiston in EH10. The multi-campus structure
              means student accommodation and PBSA provision is spread across the
              south-west Edinburgh arc, with Unite Students and other operators providing
              blocks at Sighthill EH11 and in the city centre EH1/EH2 zone.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Edinburgh void-period programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh programmes are planned and scoped in advance of the summer void.
              We typically carry out a survey visit in May or June — or work from
              your facilities team&apos;s surface inventory and photography if a
              pre-void site visit isn&apos;t practical. Scope, programme duration and
              access logistics are confirmed before mobilisation.
            </p>
            <p>
              On multi-day Edinburgh programmes our team travels north and stays overnight
              near the site. We work flat by flat or floor by floor through the block,
              completing each unit to photographic sign-off standard before moving to the
              next. Your facilities team receives a progress update at the end of each day
              and a full photo package on programme completion.
            </p>
            <p>
              RAMS documentation is prepared for every Edinburgh programme as standard
              — covering surface preparation, film application materials, heat tool use
              and access protocols. All film products are specified to commercial
              architectural grade, with appropriate adhesive chemistry for the substrate
              type at each Edinburgh site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh student accommodation wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Edinburgh PBSA void programme — get a survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your Edinburgh student accommodation details and we&apos;ll
              confirm scope, programme duration and access requirements. Early
              enquiry before the summer void gets you a confirmed slot.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Edinburgh Survey →
              </Link>
              <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
                Student Accommodation Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
