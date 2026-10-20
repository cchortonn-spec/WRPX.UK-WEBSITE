import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Student Accommodation Vinyl Wrapping Wolverhampton | PBSA Kitchen & Furniture Refurbishment | WRPX",
  description:
    "Vinyl wrapping for student accommodation refurbishments across Wolverhampton and the Black Country — kitchen unit doors, bedroom furniture panels, communal surfaces and reception areas wrapped during void periods. WRPX covers University of Wolverhampton City Campus and private PBSA operators across WV postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Student accommodation vinyl wrapping Wolverhampton — PBSA kitchen and furniture refurbishment",
  "Architectural vinyl wrapping for student accommodation refurbishments across Wolverhampton and the Black Country. Kitchen unit doors, communal area furniture, bedroom furniture panels, reception and corridor surfaces wrapped during void periods. Covers University of Wolverhampton City Campus WV1, Springfield Campus WV1 and all major PBSA operators across Wolverhampton WV postcodes. Commercial-grade film, photographic sign-off, white-label for FM contractors. Approximately 1 hour 30 minutes from our South Yorkshire base via the M1 and M6."
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
      name: "Wolverhampton",
      item: "https://www.wrpx.co.uk/architectural-wrap-student-accommodation-wolverhampton/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What student accommodation surfaces do you wrap in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen unit doors and drawer fronts in communal kitchens are the primary application in Wolverhampton PBSA — shared student kitchens in cluster-flat and en-suite accommodation accumulate surface wear faster than almost any other interior finish. Bedroom wardrobe door panels, bedside cabinet fronts, desk unit panels and kitchenette unit doors within studio en-suite flats are all within scope. Communal lounge storage unit fronts, reception desk fascias and corridor door panels are also regularly wrapped as part of larger Wolverhampton PBSA void programmes. The University of Wolverhampton operates student accommodation across its City Campus WV1 and Springfield Campus WV1 footprints, and the growing private PBSA market in the Wolverhampton city-centre WV1 zone generates annual void-period refurbishment demand for all these surface types.",
      },
    },
    {
      "@type": "Question",
      name: "Can you complete Wolverhampton student accommodation blocks during the summer void?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the summer void is the primary programme window for Wolverhampton student accommodation vinyl wrap work. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Wolverhampton via the M1 and M6. We work through accommodation blocks systematically, flat by flat or floor by floor, and confirm the schedule with your facilities or accommodation team before mobilisation. For larger Wolverhampton programmes — full floors or complete PBSA blocks in the WV1 city-centre zone — we run multi-day site programmes to maximise productivity within tight void windows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton universities and PBSA operators do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover PBSA operators, university accommodation managers and FM contractors across Wolverhampton and the wider Black Country. The University of Wolverhampton — approximately 20,000 students — operates its main City Campus WV1 and Springfield Campus WV1 in the heart of Wolverhampton city centre, with additional campuses at Walsall WS2 and Telford TF2. The university&apos;s city-centre footprint creates a natural catchment for private PBSA development in the WV1 core, with purpose-built student apartment blocks generating regular void-period refurbishment demand. FM contractors managing multi-site West Midlands refurbishment programmes also form part of our Wolverhampton coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How does vinyl wrap hold up in Wolverhampton student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specify commercial-grade architectural vinyl for all student accommodation applications — not standard consumer-grade product. Commercial film applied to communal kitchen unit doors typically delivers 5 to 8 years of service life under normal use. Bedroom furniture panels in studio and en-suite flats typically last longer than communal kitchen surfaces, as the contact frequency and cleaning cycle is lower. All edges are sealed to the manufacturer specification. We provide photographic sign-off on completion for every Wolverhampton programme — before and after images per room or per block as agreed with your facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under FM contractor or university facilities instructions in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we operate under FM contractor instructions, university accommodation management instructions or directly for PBSA operators across Wolverhampton and the wider West Midlands. Where you manage the end client relationship, we work on a white-label basis — attending site under your company instructions, providing documentation in your preferred format and not representing WRPX directly to the accommodation team. RAMS documentation is available as standard for all Wolverhampton commercial programmes. We cover the University of Wolverhampton City Campus and Springfield Campus, all private PBSA in the WV1 corridor, and Walsall WS2 and Telford TF2 campus-adjacent accommodation within the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton and Black Country postcodes do you cover for student accommodation wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wolverhampton and Black Country WV postcode areas — WV1 (Wolverhampton city centre: the University of Wolverhampton City Campus and Springfield Campus, both situated within the WV1 city-centre zone; the primary private PBSA market in Wolverhampton is concentrated in the WV1 city-centre corridor adjacent to the university campus footprint, with purpose-built student apartment blocks on the key approaches to the city centre; Wolverhampton city centre also has the Mander Centre and Wulfrun Centre retail environments and a significant commercial and hospitality sector generating non-student architectural film demand), WV2 (Penn Road — south Wolverhampton residential zone adjacent to the city centre), WV3 (Tettenhall, Finchfield — west Wolverhampton residential zone; Tettenhall is a prosperous suburban area with some private student and young-professional rental accommodation), WV4 (Blakenhall, Parkfields — south Wolverhampton zone), WV6 (Codsall, Tettenhall Wood — west Wolverhampton commuter zone), WV10 (Wednesfield, Low Hill — north Wolverhampton residential zone), WV11 (Willenhall, Short Heath — north-east Wolverhampton zone), WV13 (Willenhall town centre), WV14 (Bilston — east Wolverhampton zone with established residential and industrial character). Walsall WS1-WS2 (University of Wolverhampton Walsall Campus WS2 — the Walsall campus sits within the town centre regeneration zone with adjacent purpose-built student accommodation demand) and the wider Black Country including Dudley DY and West Bromwich B70 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Wolverhampton via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function StudentAccomWrapWolverhamptonPage() {
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
            <span className="text-foreground">Wolverhampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Student Accommodation Vinyl Wrapping · Wolverhampton &amp; Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Student accommodation vinyl wrapping — Wolverhampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for PBSA refurbishments across
            Wolverhampton and the Black Country. Kitchen unit doors, bedroom
            wardrobe panels, communal furniture and reception areas wrapped
            during void periods without replacement. University of Wolverhampton
            City Campus and Springfield Campus, and private PBSA across all
            Wolverhampton WV postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Wolverhampton PBSA Quote →
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="btn-secondary">
              Student Accommodation Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Wolverhampton PBSA market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton student accommodation — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wolverhampton is a significant student city in the West Midlands,
              with the University of Wolverhampton serving approximately 20,000
              students across its City Campus WV1, Springfield Campus WV1,
              Walsall WS2 and Telford TF2 campuses. The city-centre campus
              footprint — with City Campus and Springfield Campus both situated
              within the WV1 core — creates a natural catchment for purpose-built
              student accommodation in the heart of Wolverhampton.
            </p>
            <p>
              Private PBSA development in Wolverhampton has expanded across the
              WV1 city-centre corridor adjacent to the university campuses, with
              modern student apartment blocks providing en-suite and studio
              accommodation within walking distance of both the City Campus and
              Springfield Campus. These blocks follow a typical PBSA refurbishment
              cycle requiring void-period surface refresh on communal kitchens,
              bedroom furniture and corridor areas.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Wolverhampton via the M1 and M6. We cover the University of
              Wolverhampton campus estate, all private PBSA operators in the WV1
              city-centre zone, and FM contractors managing multi-site West Midlands
              student accommodation refurbishment programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Wolverhampton PBSA
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal kitchen unit doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The highest-wear surface in any cluster flat. Shared kitchen
                unit doors and drawer fronts across Wolverhampton PBSA blocks
                are wrapped in commercial-grade film to restore appearance
                without replacement during the void period.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels, bedside cabinet fronts and desk unit
                panels in en-suite and studio rooms across Wolverhampton
                student accommodation — all wrapped to refresh appearance
                and extend furniture life.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception counters and front-of-house fascias in Wolverhampton
                PBSA lobbies wrapped in architectural film — a cost-effective
                alternative to replacement on surfaces that are the first thing
                prospective students and parents see.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge storage
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and corridor storage door panels across Wolverhampton student
                accommodation blocks — wrapped to refresh shared social spaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Kitchenette units (studio flats)
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchenette unit doors and panels within individual studio
                en-suite rooms — wrapped during the void period to restore
                condition ahead of new occupancies at Wolverhampton WV1
                PBSA blocks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door panels, communal area door cladding and
                entrance door panels across Wolverhampton PBSA blocks —
                wrapped to maintain a consistent, professional internal
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
            How we work with Wolverhampton PBSA teams
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We work directly with university accommodation managers, PBSA
              operators and FM contractors managing the Wolverhampton student
              portfolio. For FM contractors managing the work on behalf of
              a PBSA operator, we operate on a white-label basis — attending
              under your company instructions and providing documentation in
              your preferred format.
            </p>
            <p>
              Void-period scheduling is co-ordinated with your accommodation
              team before mobilisation. We confirm the block, floor or flat
              programme, bring everything required on the day and work through
              systematically. Each completed area receives photographic sign-off —
              before and after images for every surface — so your team has a clear
              record of work completed for each Wolverhampton unit.
            </p>
            <p>
              For larger Wolverhampton PBSA programmes covering full floors or
              multiple blocks within the WV1 corridor, we can run multi-day
              programmes to cover the volume within the available void window.
              RAMS documentation is provided as standard for all Wolverhampton
              PBSA projects where your site access requirements or accommodation
              management team require it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton student accommodation wrapping — common questions
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
            <Link href="/architectural-wrap-student-accommodation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Birmingham</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Birmingham</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-coventry/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Coventry</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Coventry</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Wolverhampton care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Wolverhampton</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Wolverhampton PBSA enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wolverhampton PBSA wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Wolverhampton accommodation block, the surface types
              and the void window. We work white-label for FM contractors and
              direct for PBSA operators and university accommodation teams.
              Photographic sign-off and RAMS as standard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Wolverhampton PBSA Quote →
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
