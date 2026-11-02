import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Inverness | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Inverness and the Scottish Highlands — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators, student landlords and HMO stock across all Inverness IV postcodes. UHI Inverness Campus Beechwood Park IV2 and Inverness city-centre IV1 student zones. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-inverness/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Inverness — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Inverness and the Scottish Highlands. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental HMO accommodation, private PBSA and purpose-built student housing across all Inverness IV postcodes. UHI Inverness Campus Beechwood Park IV2, city-centre IV1 HMO zones and Inverness student accommodation. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9."
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
      name: "Inverness",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-inverness/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Inverness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in shared kitchens are the primary application in Inverness student HMO and PBSA accommodation — communal kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within individual rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias in managed PBSA buildings and corridor door panels are also regularly wrapped as part of larger Inverness void programmes. Inverness student accommodation ranges from Victorian and Edwardian terraced HMO conversions in the city-centre IV1 and Crown IV1 residential zones to purpose-built student housing adjacent to UHI Inverness Campus Beechwood Park IV2 — we specify the appropriate commercial-grade film for each substrate and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Inverness student accommodation properties during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Inverness student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) north through Newcastle and Edinburgh, then the A9 north to Inverness. We work through accommodation blocks or HMO portfolios systematically, property by property or room by room, and confirm the schedule with your property management or facilities team before mobilisation. For larger Inverness programmes — full PBSA blocks adjacent to UHI Campus Beechwood Park IV2 or HMO portfolios in the city-centre IV1 student zones — we run multi-day programmes to maximise productivity within tight void windows. Inverness can also be incorporated into a broader Scottish programme alongside Aberdeen — roughly 2.5 hours south on the A9 and A90 — where programme volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness universities and colleges generate student accommodation demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of the Highlands and Islands (UHI) is the primary anchor for Inverness student accommodation demand — with UHI Inverness Campus located at Beechwood Park IV2 east of the city centre. UHI is a federated university incorporating Inverness College UHI as its Inverness hub, serving students across the Highlands and Islands through on-campus and distributed learning. The Beechwood Park campus generates on-campus PBSA refurbishment demand and drives private student rental HMO demand in the surrounding IV2 and city-centre IV1 residential zones. The Crown Academy and other Inverness educational facilities within the IV postcode area generate further student and young adult rental demand from their student populations across the Highland capital.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Inverness student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in individual rooms typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Inverness programme — before and after images per room or per property as agreed with your property management team. Film specification accounts for the Highland climate: we select grades with adhesive rated for the temperature variation and humidity conditions common in Inverness and North Scotland properties, including older Victorian HMO stock in the city-centre IV1 zone.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or property management instructions in Inverness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Inverness and the wider IV postcode area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Inverness commercial programmes. We cover all Inverness IV1, IV2 and IV3 postcodes and can extend to Dingwall IV15, Nairn IV12 and wider Highland IV student accommodation in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness and Highland postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Inverness and surrounding IV postcode areas — IV1 (Inverness city centre: Crown IV1 — the established residential neighbourhood east of the Ness with HMO student rental demand from UHI Campus students seeking city-centre or nearby accommodation; Ness-side IV1 residential zones generating private student rental demand; city-centre IV1 with purpose-built student accommodation and mixed HMO provision from Inverness College UHI students; Old Town IV1 residential corridors with Victorian terraced HMO stock generating void refurbishment demand), IV2 (Eastgate, Millburn Road, Beechwood Park: UHI Inverness Campus Beechwood Park IV2 — the university&apos;s Inverness campus with on-campus and adjacent PBSA accommodation generating void-period kitchen and furniture refurbishment demand; Millburn Road and Eastfield Road IV2 student HMO zones adjacent to the Beechwood Park campus corridor; Inverness Airport zone IV2 student residential fringe), IV3 (Inverness west: Bught and Dochfour Drive IV3 zones with student and young professional HMO rental demand from UHI Campus students choosing west Inverness residential areas). Dingwall IV15, Beauly IV4 and Nairn IV12 also within the broader Highland operational area for multi-site student accommodation programmes. WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) and A9.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapInvernessPage() {
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
            <span className="text-foreground">Inverness</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Inverness &amp; Scottish Highlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Inverness
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for student accommodation refurbishments
            across Inverness and the Scottish Highlands. Kitchen unit doors,
            bedroom furniture panels, communal surfaces and reception areas
            wrapped during void periods. UHI Inverness Campus Beechwood Park IV2
            and city-centre IV1 student HMO zones. PBSA operators, student
            landlords and HMO managers covered across all Inverness IV postcodes.
            Approximately 5 hours from our South Yorkshire base via the A1(M)
            and A9.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Inverness PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Inverness student market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness student accommodation vinyl wrap — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Inverness is the Highland capital and the main higher education
              centre for the north of Scotland. The University of the Highlands
              and Islands (UHI) operates its Inverness hub at the Beechwood Park
              campus IV2, with Inverness College UHI as the principal Inverness
              institution. The city&apos;s student accommodation market spans
              on-campus and adjacent PBSA at Beechwood Park IV2, city-centre IV1
              HMO conversions and private rental stock in the Crown IV1 and
              Ness-side IV1 residential zones.
            </p>
            <p>
              The Crown area — a dense residential neighbourhood east of the
              River Ness with Victorian and Edwardian terraced properties — is
              Inverness&apos;s most established student and young professional
              HMO zone, generating annual void refurbishment demand from the
              UHI Campus student catchment. The Millburn Road IV2 corridor
              adjacent to Beechwood Park extends the student residential reach
              toward the campus itself.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 5 hours from
              Inverness via the A1(M) north and the A9 into Inverness. We cover
              all Inverness IV postcodes and wider Highland student accommodation
              in the same regional mobilisation, and can cover Inverness
              alongside Aberdeen — roughly 2.5 hours south on the A9 and A90 —
              in a co-ordinated Scottish programme where volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Inverness student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shared kitchen units
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors and drawer fronts in Inverness student HMO
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
                Wardrobe door panels and bedside cabinet fronts in Inverness
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
                lounge storage unit fronts in managed Inverness PBSA buildings —
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
                Inverness student accommodation buildings — wrapped to maintain
                a consistent appearance across the property without disruption
                to residents during term.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units — individual rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and drawer fronts within individual
                Inverness studio or en-suite rooms — wrapped systematically room
                by room during the summer void, covering full blocks or selected
                floors as agreed with your property management team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage panels and media wall unit fronts across
                managed Inverness student accommodation — wrapped to refresh
                shared amenity spaces that accumulate wear from constant use
                across the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness student accommodation wrap — common questions
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
            <Link href="/architectural-wrap-student-accommodation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Glasgow</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Glasgow student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Inverness</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Inverness care homes and nursing homes</p>
            </Link>
            <Link href="/subcontract-window-film-installation-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Inverness trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Inverness student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Inverness student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Inverness accommodation property, the surfaces and the
              void window. We work with HMO landlords, PBSA operators and FM
              contractors across all Inverness IV postcodes. White-label by
              default. Approximately 5 hours from South Yorkshire via the A1(M)
              and A9.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Inverness PBSA Quote →
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
