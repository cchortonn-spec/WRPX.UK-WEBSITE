import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Middlesbrough | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Middlesbrough, Stockton-on-Tees and Teesside — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Middlesbrough TS postcodes and wider Teesside area covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Middlesbrough — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Middlesbrough, Stockton-on-Tees and Teesside. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Middlesbrough TS postcodes and wider Teesside."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Middlesbrough", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-middlesbrough/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Middlesbrough care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Middlesbrough and Teesside care homes vary in building type — from purpose-built modern residential care facilities to converted Victorian terraced properties in Linthorpe and Acklam — and we specify the appropriate commercial-grade film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Middlesbrough care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Middlesbrough and Teesside?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Middlesbrough and Teesside. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Middlesbrough or Teesside care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Middlesbrough?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning and disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Middlesbrough care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Middlesbrough or Stockton-on-Tees care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which Middlesbrough and Teesside postcodes do you cover for care home wrapping?",
    a: "We cover all Middlesbrough and Teesside TS postcodes — TS1 (Middlesbrough town centre and Linthorpe approach — the main town-centre care home zone, with a mix of purpose-built residential facilities and converted Victorian terraced properties in the inner ring), TS2 (Middlehaven, Port Clarence — north Middlesbrough near the river; care home provision in this zone serves the inner north residential population), TS3 (Park End, Berwick Hills, Pallister, North Ormesby — east Middlesbrough residential care sector with a significant volume of purpose-built residential care facilities serving the large TS3 population), TS4 (Marton West, Tollesby, Brookfield — south Middlesbrough suburban residential care home zone, including the Marton approach corridor adjacent to James Cook University Hospital TS4), TS5 (Linthorpe, Acklam, Whinney Banks — one of the main Middlesbrough care home catchment zones; Linthorpe TS5 carries a number of residential care and nursing home facilities in the tree-lined Victorian and Edwardian suburban streets; Acklam TS5 extends into the south-west Middlesbrough residential care market), TS6 (Eston, South Bank, Grangetown — south-east Middlesbrough and Eston care home zone serving the Eston Hills corridor population), TS7 (Marton, Nunthorpe, Ormesby — the south suburban Middlesbrough residential care home zone; Nunthorpe TS7 is a high-value south Teesside suburb with demand for premium residential care facilities), TS8 (Hemlington, Stainton, Coulby Newham — south Middlesbrough residential expansion zone with newer residential care facilities adjacent to the large Coulby Newham residential area). Stockton-on-Tees TS18/TS19/TS20/TS21, Redcar TS10, Guisborough TS14 and the wider Tees Valley are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19.",
  },
];

export default function CareHomeWrapMiddlesbroughPage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-care-homes/" className="text-accent hover:underline">Vinyl Wrapping for Care Homes</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Middlesbrough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Middlesbrough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Middlesbrough, Stockton-on-Tees and Teesside. Bedroom wardrobe door
            panels, bedside cabinet surfaces, corridor doors, nurses&apos; station
            counters and communal lounge surfaces wrapped without replacement.
            Resident-sensitive scheduling, no construction noise, no wet trades,
            rooms usable the same day. CQC-regulated care homes across all
            Teesside TS postcodes covered. Approximately 1 hour 30 minutes from
            our South Yorkshire base via the A1(M) and A19.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Middlesbrough Care Home Quote →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Middlesbrough care home market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough care home wrapping — the context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough and the wider Teesside area — Stockton-on-Tees,
              Redcar and Cleveland, Hartlepool — has one of the UK&apos;s largest
              concentrations of CQC-regulated care homes relative to its population.
              The significant elderly population across the post-industrial Tees
              Valley, combined with a pattern of care home provision that blends
              large purpose-built residential facilities with smaller converted
              Victorian and Edwardian terrace conversions across TS1, TS3 and TS5,
              creates consistent demand for interior refurbishment that avoids
              disruption to residents.
            </p>
            <p>
              James Cook University Hospital in Marton TS4 is a major NHS acute
              hospital serving the Teesside population — the cluster of care homes
              in TS4, TS5 and TS7 adjacent to and within the James Cook catchment
              area forms one of the densest residential care concentrations in the
              North East outside of Newcastle.
            </p>
            <p>
              Architectural vinyl wrapping is particularly suited to the Teesside
              care home estate because many of the region&apos;s residential care
              facilities operate in buildings that were furnished 10 to 20 years
              ago and are now due for interior refresh. Replacing furniture across
              a 40-bedroom Middlesbrough care home is a major procurement and
              operational project. Wrapping the existing furniture — at a fraction
              of the replacement cost, in occupied rooms, without removing residents
              or generating construction noise — is a practical alternative that
              more care home operators in Teesside are choosing.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Middlesbrough via the A1(M) north and A19. Middlesbrough sits
              naturally alongside our established North East coverage — we already
              cover Newcastle and Durham — and extends our care home wrapping
              footprint to the Tees Valley.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Middlesbrough care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The most common care home wrapping job — flat wardrobe door
                fronts wrapped in a fresh colour or wood-effect film. Transforms
                a tired bedroom suite without removing furniture from the room.
                Completed in under 2 hours per wardrobe set.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet and drawer surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet top surfaces, door fronts and drawer panels
                wrapped to match the updated wardrobe colour scheme. Completes
                the bedroom refresh without any furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire-door panels, bedroom entrance doors and utility
                doors wrapped to refresh colour scheme or standardise appearance
                across the care home. Faster and less disruptive than door
                replacement in an occupied care setting.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counter fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Front fascia panels and counter top edges of nurses&apos; stations
                and care team workstations wrapped to refresh the appearance of
                the main care team hub area. High-traffic surface — film
                specified for durability and easy cleaning.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room and communal lounge furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room table edges, lounge unit fronts and media wall
                panels refreshed with wrapping film. Communal areas benefit
                from wrapping because the surface area across a full dining
                or lounge room is large — replacement cost is high, wrapping
                cost is low.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception desk and entrance panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia, front panels and entrance feature
                cladding wrapped to create a welcoming and refreshed arrival
                environment. The reception is the first impression for families
                and CQC inspectors visiting the Middlesbrough care home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How the process works
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We begin with a survey of the Middlesbrough or Teesside care home —
              assessing each surface to be wrapped, confirming substrate condition
              and suitability, agreeing the film colours and finishes required,
              and establishing the access logistics with care management to minimise
              disruption to residents&apos; routines.
            </p>
            <p>
              Installation is carried out room by room, co-ordinating with care
              staff so each room is accessed when the resident is elsewhere in the
              building. The adhesive is odour-free and water-based. Installation
              tools are quiet — hand squeegees and a low-temperature heat gun.
              There is no construction noise, no wet trades and no chemical smell.
              Each room is cleared and usable immediately after we leave — typically
              within 2 to 3 hours of entering.
            </p>
            <p>
              We provide photographic sign-off on completion for each room and
              surface area, and RAMS documentation is available as standard for
              Middlesbrough and Teesside care home contracts requiring it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough care home wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related North East care home and wrapping services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrapping — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home wrapping service overview</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Newcastle and Tyne &amp; Wear care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for County Durham care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Leeds</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Leeds and West Yorkshire care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Wrapping</p>
              <p className="mt-1 text-xs text-muted">Commercial surface wrapping for all environments</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">Architectural wrapping for Newcastle PBSA and student accommodation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough care home wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us which Middlesbrough or Teesside care home you are looking
              to refresh, roughly how many rooms and which surfaces need wrapping.
              We will arrange a survey and provide a detailed quote with no
              obligation. RAMS available on request.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Middlesbrough Quote →
              </Link>
              <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
                Care Home Wrapping Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
