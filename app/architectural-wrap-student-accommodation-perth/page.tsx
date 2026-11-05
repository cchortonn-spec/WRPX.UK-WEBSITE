import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Perth | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Perth and Perthshire — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Perth PH postcodes. Perth College UHI Crieff Road, PH1 city-centre student zones and PH2 residential areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-perth/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Perth — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Perth and Perthshire. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Perth PH postcodes. Perth College UHI Crieff Road, city-centre PH1 student zones and PH2 residential areas. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90."
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
      name: "Perth",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-perth/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Perth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Perth student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Perth void programmes. Perth student accommodation spans managed PBSA blocks in the city-centre PH1 zone adjacent to Perth College UHI to privately converted terraced HMO properties in the residential streets around the Crieff Road and North Inch corridors — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Perth student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Perth student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) north to Edinburgh and the M90 directly into Perth. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Perth programmes — PBSA blocks close to Perth College UHI Crieff Road or HMO portfolios in the residential streets around the North Inch and Kinnoull Hill zones — we run multi-day programmes to maximise productivity within tight void windows. Perth can also be incorporated into a broader Scottish programme alongside Dundee — roughly 20 minutes east on the A90 — where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth colleges and universities generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perth College UHI is the primary anchor for student accommodation demand in the city — operating on Crieff Road as part of the University of the Highlands and Islands network, with both full-time and part-time students across a range of vocational, professional and academic programmes. The college&apos;s managed student accommodation and the private rental market in the surrounding PH1 and PH2 postcode areas generate void-period refurbishment demand from PBSA operators and private landlords. Perth&apos;s position as a regional centre also draws students from across Perthshire and neighbouring counties who may commute or live in the city during term, sustaining a broader private rental market of HMO properties and small residential units within the PH1 city-centre postcode and the residential areas of Kinnoull, Cherrybank and Bridgend PH2.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Perth student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Perth programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for Scottish climate conditions: we select grades with adhesive rated for the temperature variation and humidity conditions common in Perth and Perthshire properties.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Perth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Perth and the wider PH postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Perth commercial programmes. We cover all Perth PH1 and PH2 postcodes and can extend to wider Perthshire PH3 to PH16 student and HMO accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth and Perthshire postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Perth and surrounding PH postcode areas — PH1 (Perth city centre: Perth College UHI Crieff Road campus generating PBSA and adjacent private rental student accommodation demand from managed blocks and HMO properties; city-centre PH1 student residential zones around King Street, Kinnoull Street and North Inch including Victorian and Edwardian terraced HMO stock generating annual void programme demand; Kinnoull Hill residential area PH1 with private rental properties catering to the Perth College UHI student population; Perth Royal Infirmary area PH1 with student and junior medical professional accommodation demand), PH2 (Bridgend, Cherrybank, South Perth: Bridgend PH2 — Perth&apos;s southern residential neighbourhood across the river Tay with private rental and HMO stock catering to Perth College students; Cherrybank PH2 residential area on the south-western approach to Perth with student rental demand; Broxden and Viewlands PH2 residential zones with private rental provision), PH3 to PH16 (wider Perthshire: Kinross PH2, Crieff PH7, Blairgowrie PH10, Pitlochry PH16 and surrounding market towns within the broader Perthshire PH postcode operational area for multi-site and rural PBSA programmes). WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) and M90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapPerthPage() {
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
            <span className="text-foreground">Perth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Perth &amp; Perthshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Perth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Perth and Perthshire. Kitchen unit doors, bedroom furniture
            panels, communal surfaces and reception areas wrapped during void
            periods. Perth College UHI Crieff Road, PH1 city-centre student
            zones and PH2 residential areas. PBSA operators, student landlords
            and HMO managers covered across all Perth PH postcodes.
            Approximately 3 hours from our South Yorkshire base via the
            A1(M) and M90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Perth PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Perth student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Perth is a compact university city anchored by Perth College UHI
              on Crieff Road — part of the University of the Highlands and
              Islands network — alongside a broader private rental market
              that draws students from across Perthshire and neighbouring
              counties. The city&apos;s student accommodation market spans
              managed PBSA blocks in the city-centre PH1 zone close to the
              Crieff Road campus, Victorian and Edwardian terraced HMO
              properties in the residential streets around North Inch, Kinnoull
              and the city-centre PH1 corridor.
            </p>
            <p>
              The Bridgend and Cherrybank areas of PH2 add further private
              rental provision on the southern side of the river Tay, with
              students sharing older terraced and semi-detached properties
              that generate annual void programme demand from landlords and
              managing agents looking to maintain rental condition without
              the cost of full furniture replacement.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Perth via the A1(M) north to Edinburgh and the M90 directly
              into Perth city centre. We cover all Perth PH postcodes and
              can incorporate Perth into a broader Scottish programme alongside
              Dundee — roughly 20 minutes east on the A90 — where programme
              volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Perth student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Perth student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Perth
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
                lounge storage unit fronts in managed Perth PBSA buildings —
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
                Perth student accommodation buildings — wrapped to maintain a
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
                Perth studio or en-suite rooms — wrapped systematically room
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
                managed Perth student accommodation — wrapped to refresh shared
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
            Perth student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Dundee</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Dundee student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Aberdeen student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Dundee</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Dundee care homes and nursing homes</p>
            </Link>
            <Link href="/window-film/retail-window-film-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Perth and Perthshire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Perth student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Perth student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Perth accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Perth PH postcodes. White-label by
              default. Approximately 3 hours from South Yorkshire via the
              A1(M) and M90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Perth PBSA Quote →
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
