import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Sunderland | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Sunderland and Wearside — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers PBSA operators and student rental accommodation across all Sunderland SR postcodes. University of Sunderland campus zone. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M).",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-sunderland/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Sunderland — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Sunderland and Wearside. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers student rental accommodation, private PBSA and university-linked housing across all Sunderland SR postcodes. University of Sunderland campus zone SR1, Marina Quarter SR6. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M)."
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
      name: "Sunderland",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-sunderland/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Sunderland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Sunderland student accommodation — shared kitchens accumulate surface wear faster than almost any other interior finish and the void period is the most practical window to address it. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio rooms are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Sunderland void programmes. University of Sunderland&apos;s growing PBSA estate around the city campus SR1 and the award-winning Marina Quarter SR6 generates consistent demand for cost-effective surface refurbishment that avoids furniture replacement across student cluster flat, studio and en-suite bedroom accommodation types.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Sunderland student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Sunderland student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes from Sunderland via the A1(M). We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Sunderland programmes — full floors or complete PBSA blocks — we run multi-day site programmes to maximise productivity within tight void windows. Out-of-void-period access for individual surface repairs or small refurbishments can also be co-ordinated around occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunderland universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Sunderland has approximately 17,000 students split across its city campus in SR1 and its award-winning campus in the Marina Quarter SR6. The university-affiliated PBSA estate and the surrounding private rental market across Sunderland city centre, Ashbrooke SR2 and Hendon SR2 generate consistent void-period demand for kitchen and bedroom surface wrapping. Private PBSA operators managing Sunderland blocks, student rental landlords with HMO and student-focused residential stock, and FM contractors managing multi-property portfolios across Wearside are all primary audiences. We also cover non-university student accommodation — FE college student rental, apprenticeship housing and young professional rental stock in the SR postcode zone where the surface refurbishment need is the same.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Sunderland student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Sunderland programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor instructions in Sunderland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, property management instructions or directly for PBSA operators and student landlords across Sunderland and the wider Wearside area. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Sunderland commercial programmes. We cover all Sunderland SR postcodes and can extend to Newcastle NE, Durham DH and wider North East in the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunderland and Wearside postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Sunderland and surrounding SR postcode areas — SR1 (Sunderland city centre: University of Sunderland city campus — the main academic hub generating proximity PBSA and private student rental demand throughout the SR1 zone; The Bridges SR1 and city-centre residential-above-retail development; the primary student HMO corridor in the streets immediately surrounding the city campus), SR2 (Hendon, Ashbrooke — inner south Sunderland residential zone generating significant student rental demand; Ashbrooke SR2 is one of Sunderland&apos;s most established private rental and student accommodation zones, with Victorian terrace and inter-war semi-detached stock adapted for HMO use; student rental demand here is driven by University of Sunderland campus proximity), SR3 (Silksworth, Pallion — south-west Sunderland zone with student and young professional rental provision in the residential stock; Washington SR3 generates further rental demand from commuting students to Sunderland and Durham), SR4 (Southwick, Millfield, Pennywell — west Sunderland residential zone with more affordable HMO and student rental stock; the SR4 corridor has student and young professional rental provision driven by university proximity and cost), SR5 (Hylton, Carley Hill — west Sunderland zone with student rental and young professional HMO provision in the terrace and estate stock; Stadium of Light SR5 area adds visitor accommodation and short-term rental stock), SR6 (Roker, Seaburn, Monkwearmouth — north-east Sunderland coastal zone; University of Sunderland&apos;s award-winning Marina Quarter campus SR6 generates immediate PBSA and private rental demand in the Monkwearmouth and Roker zone; the coastal regeneration zone adds purpose-built student and young professional residential development). Durham DH1, Newcastle NE, South Shields NE33 and Gateshead NE8 also within reach. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes from Sunderland via the A1(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapSunderlandPage() {
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
            <span className="text-foreground">Sunderland</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Sunderland &amp; Wearside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Sunderland
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for PBSA and student rental
            refurbishments across Sunderland and Wearside. Kitchen unit
            doors, bedroom wardrobe panels, communal furniture and reception
            areas wrapped during void periods without replacement. University
            of Sunderland campus zone and all Sunderland SR postcodes covered.
            Approximately 1 hour 45 minutes from our South Yorkshire base via
            the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Sunderland PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sunderland PBSA market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland student accommodation — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sunderland is an established university city with approximately
              17,000 students at the University of Sunderland, split across a
              city campus in SR1 and an award-winning campus in the Marina
              Quarter SR6. This dual-campus footprint generates student
              accommodation demand across a broad Wearside geography — from
              the city-centre HMO corridors surrounding the SR1 campus to the
              purpose-built PBSA development adjacent to the Marina SR6 campus.
            </p>
            <p>
              Private rental landlords and property managers operating HMO
              and student-focused residential stock across Sunderland SR postcodes
              — particularly in Ashbrooke SR2, Hendon SR2 and the city-centre
              streets within walking distance of the SR1 campus — generate
              consistent void-period demand for kitchen and bedroom surface
              refurbishment. Commercial-grade vinyl wrapping avoids the cost
              and disruption of full furniture replacement while achieving a
              consistently fresh internal appearance ahead of new occupancies.
            </p>
            <p>
              PBSA operators managing Sunderland purpose-built blocks and
              FM contractors overseeing multi-property student portfolios
              are the primary B2B audience — a single-call arrangement covering
              multiple properties in one mobilisation programme, with white-label
              documentation and photographic sign-off per property.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 45 minutes
              from Sunderland via the A1(M). We can cover Sunderland SR
              properties alongside Newcastle NE and Durham DH in the same
              North East mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Sunderland student accommodation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in any shared student property.
                Communal kitchen unit doors and drawer fronts in Sunderland HMO
                and PBSA properties are wrapped in commercial-grade film to
                restore appearance without replacement during the void.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                panels in student bedrooms across Sunderland properties —
                wrapped to refresh appearance and extend furniture life ahead
                of new occupancies.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception counters and front-of-house fascias in Sunderland
                PBSA lobbies wrapped in architectural film — a cost-effective
                alternative to replacement on surfaces that are the first thing
                prospective tenants and parents see at viewing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge storage
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and corridor storage door panels across Sunderland student
                accommodation properties — wrapped to refresh shared social
                spaces efficiently.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units (studio flats)
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and panels within individual studio
                rooms — wrapped during the void period to restore condition
                ahead of new occupancies in Sunderland studio student
                accommodation properties.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door panels and communal area door cladding
                across Sunderland student accommodation blocks and larger HMO
                properties — wrapped to maintain a consistent internal
                appearance throughout the building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Sunderland letting agents and FM contractors
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work directly with letting agencies, property managers and FM
              contractors managing the Sunderland student and young-professional
              rental portfolio. For contractors managing the work on behalf of
              a landlord or PBSA operator, we operate on a white-label basis —
              attending under your company instructions and providing
              documentation in your preferred format.
            </p>
            <p>
              Void-period scheduling is co-ordinated with your property team
              before mobilisation. We confirm the property list, room programme
              and access logistics, bring everything required on the day and
              work through systematically. Each completed area receives
              photographic sign-off — before and after images for every surface
              — so your team has a clear record for every Sunderland property.
            </p>
            <p>
              For larger Sunderland programmes covering multiple properties
              across the SR postcode zone, we can run multi-day programmes to
              cover the volume within the available void window. RAMS
              documentation is provided as standard for all Sunderland
              programmes where your site access requirements or client
              relationship demands it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland student accommodation wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full PBSA vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Durham and County Durham</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-sunderland/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Sunderland</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Sunderland care homes</p>
            </Link>
            <Link href="/window-film/retail-window-film-sunderland/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sunderland</p>
              <p className="mt-1 text-xs text-muted">Window film for Sunderland retail environments</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Sunderland student accommodation enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sunderland student accommodation wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Sunderland property or portfolio, the surface types
              and the void window. We work white-label for FM contractors and
              letting agents, and direct for PBSA operators. Photographic
              sign-off and RAMS as standard. Approximately 1 hour 45 minutes
              from South Yorkshire via the A1(M).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Sunderland PBSA Quote →
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
