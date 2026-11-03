import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Dundee | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Dundee — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Dundee DD postcodes. University of Dundee Nethergate DD1, Abertay University Bell Street DD1 and West End Perth Road DD2 student zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-dundee/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Dundee — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Dundee. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Dundee DD postcodes. University of Dundee Nethergate DD1, Abertay University Bell Street DD1, West End Perth Road DD2 student zone and Dundee city-centre student accommodation. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90."
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
      name: "Dundee",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-dundee/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Dundee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Dundee student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Dundee void programmes. Dundee student accommodation ranges from purpose-built PBSA blocks in the city-centre DD1 zone adjacent to the University of Dundee campus on Nethergate to Victorian and Edwardian terraced HMO conversions in the West End Perth Road DD2 corridor — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Dundee student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Dundee student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) north to Edinburgh and the A90 west into Dundee. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Dundee programmes — full PBSA blocks adjacent to the University of Dundee Nethergate campus or HMO portfolios in the West End Perth Road DD2 student corridor — we run multi-day programmes to maximise productivity within tight void windows. Dundee can also be incorporated into a broader Scottish programme alongside Perth, Inverness or Aberdeen where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee universities and colleges generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of Dundee is the primary anchor for student accommodation demand across the city — with its main campus on Nethergate DD1 and the Ninewells Medical School at Ninewells Hospital DD2, together serving approximately 18,000 students. The University of Dundee&apos;s managed accommodation on and adjacent to the Nethergate campus generates direct PBSA refurbishment demand, while the West End Perth Road DD2 corridor is Dundee&apos;s most established student residential neighbourhood with dense HMO and private rental stock generating annual void programme demand. Abertay University on Bell Street DD1 — with approximately 5,000 students — adds a second student population to the city-centre DD1 zone, with managed PBSA accommodation on and near the Bell Street campus and private rental demand across the DD1 and Hilltown DD3 postcode areas.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Dundee student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Dundee programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for Scottish climate conditions: we select grades with adhesive rated for the temperature variation and humidity conditions common in Dundee and Tayside properties, including older West End Victorian HMO stock along the Perth Road DD2 corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Dundee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Dundee and the wider DD postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Dundee commercial programmes. We cover all Dundee DD1, DD2, DD3, DD4 and DD5 postcodes and can extend to Perth PH and Angus DD8–DD11 student and HMO accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee and Tayside postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Dundee and surrounding DD postcode areas — DD1 (Dundee city centre: University of Dundee Nethergate campus DD1 — the university&apos;s main campus with on-campus PBSA and adjacent student accommodation generating void-period refurbishment demand; Abertay University Bell Street DD1 with managed student accommodation blocks and adjacent private student rental demand; city-centre DD1 PBSA blocks generating regular void-programme kitchen unit and communal surface refurbishment demand; Meadowside and Seagate DD1 student and young professional residential zones), DD2 (West End, Ninewells: Perth Road DD2 — Dundee&apos;s most established student residential corridor extending from the University of Dundee campus westward through the West End with dense Victorian and Edwardian terraced HMO stock generating annual void programme demand; Ninewells Hospital DD2 area with student and junior medical professional accommodation demand from Ninewells Medical School; Blackness Road DD2 HMO corridor), DD3 (Hilltown, Dens: Hilltown DD3 with student and young professional rental demand from its Dundee city-centre proximity and access to both University of Dundee and Abertay University; Dens and Albert Street DD3 areas with HMO rental provision), DD4 (Stobswell, Craigie: Stobswell DD4 — a well-established student HMO zone east of the city centre with dense private rental stock catering to both University of Dundee and Abertay student populations; Craigie DD4 residential zone), DD5 (Broughty Ferry: Broughty Ferry DD5 — Dundee&apos;s affluent eastern coastal suburb with private PBSA and residential student rental demand from its proximity to the Dundee campuses via the A930 coastal route). WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapDundeePage() {
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
            <span className="text-foreground">Dundee</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Dundee &amp; Tayside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Dundee
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Dundee. Kitchen unit doors, bedroom furniture panels, communal
            surfaces and reception areas wrapped during void periods. University
            of Dundee Nethergate DD1, Abertay University Bell Street DD1 and
            the West End Perth Road DD2 student corridor. PBSA operators, student
            landlords and HMO managers covered across all Dundee DD postcodes.
            Approximately 3 hours 30 minutes from our South Yorkshire base via
            the A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Dundee PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Dundee student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Dundee is one of Scotland&apos;s principal university cities —
              home to the University of Dundee and Abertay University, together
              serving approximately 23,000 students across the city&apos;s
              Nethergate and Bell Street campuses. The city&apos;s student
              accommodation market spans purpose-built PBSA blocks adjacent to
              both campuses, city-centre DD1 managed student housing and the
              West End Perth Road DD2 corridor — Dundee&apos;s most established
              student residential neighbourhood.
            </p>
            <p>
              The West End Perth Road corridor extends westward from the
              University of Dundee Nethergate campus through Dundee&apos;s most
              attractive residential district — a dense run of Victorian and
              Edwardian terraced properties converted to student HMO
              accommodation, generating annual void programme demand from
              the university&apos;s approximately 18,000-strong student
              population. The Hilltown DD3 and Stobswell DD4 zones add further
              HMO stock catering to both Dundee university populations.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30 minutes
              from Dundee via the A1(M) north to Edinburgh and the A90 west into
              Dundee. We cover all Dundee DD postcodes and can incorporate Dundee
              into a broader Scottish programme alongside Aberdeen — roughly
              1 hour 30 minutes further north on the A90 — where programme
              volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Dundee student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Dundee student HMO
                shared kitchens — the surface that accumulates visible wear
                fastest. Wrapped during the summer void to restore a clean,
                uniform finish ahead of the new academic year.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels and bedside cabinet fronts in Dundee
                student rooms — wrapped alongside shared kitchen units in the
                same void programme to refresh the full accommodation without
                furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and communal areas
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, concierge counter panels and communal
                lounge storage unit fronts in managed Dundee PBSA buildings —
                wrapped to restore the managed appearance of high-contact
                communal surfaces within each block.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor and communal doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and communal fire door cladding throughout
                Dundee student accommodation buildings — wrapped to maintain a
                consistent appearance across the property without disruption
                to residents during term.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units — individual rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and drawer fronts within individual
                Dundee studio or en-suite rooms — wrapped systematically room
                by room during the summer void, covering full blocks or
                selected floors as agreed with your property management team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage panels and media wall unit fronts across
                managed Dundee student accommodation — wrapped to refresh shared
                amenity spaces that accumulate wear from constant use across
                the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Aberdeen student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Edinburgh student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Dundee</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Dundee care homes and nursing homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Glasgow</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Glasgow student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Dundee student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Dundee student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Dundee accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Dundee DD postcodes. White-label by
              default. Approximately 3 hours 30 minutes from South Yorkshire
              via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Dundee PBSA Quote →
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
