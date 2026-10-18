import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Stoke-on-Trent | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Stoke-on-Trent and Staffordshire — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Stoke-on-Trent ST postcodes and wider Staffordshire covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-stoke-on-trent/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Stoke-on-Trent — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Stoke-on-Trent and Staffordshire. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Stoke-on-Trent ST postcodes, Newcastle-under-Lyme ST5, Stafford ST17, Stone ST15 and wider Staffordshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Stoke-on-Trent", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-stoke-on-trent/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Stoke-on-Trent care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Stoke-on-Trent care homes vary in building type — from purpose-built modern residential care facilities in Trentham ST4 and Meir ST3 to converted Victorian terrace properties in Burslem ST6, Longton ST3 and Hanley ST1, representing the distinctive Potteries townscape — and we specify the appropriate commercial-grade film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Stoke-on-Trent care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Stoke-on-Trent and Staffordshire?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Stoke-on-Trent and the wider Staffordshire area. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Stoke-on-Trent or Staffordshire care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Stoke-on-Trent?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning and disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Stoke-on-Trent care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Stoke-on-Trent care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. The Potteries care home estate includes many facilities operating in older building stock where cost-effective surface refurbishment is a practical necessity.",
  },
  {
    q: "Which Stoke-on-Trent and Staffordshire postcodes do you cover for care home wrapping?",
    a: "We cover all Stoke-on-Trent and Staffordshire ST postcodes — ST1 (Hanley: the principal city-centre area of Stoke-on-Trent; a significant concentration of care home provision in the Hanley and Shelton zones), ST2 (Bucknall, Bentilee, Weston Coyney — east Stoke-on-Trent residential care home zone), ST3 (Longton, Meir, Normacot — south-east Stoke residential care home zone; Longton ST3 is one of the traditional Potteries towns with a good concentration of residential care facilities), ST4 (Stoke, Trentham, Fenton — the Stoke town zone, the geographic heart of the city and the location of the University Hospital of North Midlands on Newcastle Road ST4; the hospital catchment creates a cluster of care homes across the ST4 corridor), ST5 (Newcastle-under-Lyme — Stoke&apos;s primary neighbouring town with its own substantial care home market; Keele University campus is within the ST5 zone), ST6 (Burslem, Tunstall, Chell — north Stoke-on-Trent; Burslem and Tunstall are Potteries towns with Victorian housing stock and established residential care home provision), ST7 (Alsager, Kidsgrove — north Cheshire and Staffordshire fringe zone; a suburban residential care market between Stoke and the Cheshire Plain), ST8 (Biddulph — north-west Staffordshire residential care zone), ST11 (Blythe Bridge, Forsbrook — south-east Stoke fringe care home market). Wider Staffordshire including Stafford ST17, Stone ST15, Lichfield WS13 and Tamworth B79 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Stoke-on-Trent via the M6.",
  },
];

export default function CareHomeWrapStokeOnTrentPage() {
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
            <span className="text-foreground">Stoke-on-Trent</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Stoke-on-Trent &amp; Staffordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Stoke-on-Trent
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Stoke-on-Trent and Staffordshire. Bedroom wardrobe door panels,
            bedside cabinet surfaces, corridor doors, nurses&apos; station counters
            and communal lounge surfaces wrapped without replacement.
            Resident-sensitive scheduling, no construction noise, no wet trades,
            rooms usable the same day. CQC-regulated care homes across all
            Stoke-on-Trent ST postcodes covered. Approximately 1 hour 15 minutes
            from our South Yorkshire base via the M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Stoke-on-Trent Care Home Quote →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Stoke care home market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent care home wrapping — the context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Stoke-on-Trent is a federated city of six Potteries towns —
              Burslem, Fenton, Hanley, Longton, Stoke and Tunstall — spread
              across a distinctive post-industrial urban landscape with a
              substantial ageing population. The city has a higher proportion
              of older residents than many comparable urban areas, and its care
              home estate reflects this: a mix of larger purpose-built residential
              care facilities and smaller converted Victorian terrace properties
              that characterise the Potteries townscape across ST1 to ST8.
            </p>
            <p>
              The University Hospital of North Midlands on Newcastle Road ST4
              is the principal acute NHS hospital serving the Stoke-on-Trent
              population. The cluster of care homes across the ST4 and ST5
              corridors — adjacent to the hospital and Newcastle-under-Lyme town
              centre — forms one of the denser care home concentrations in the
              Midlands.
            </p>
            <p>
              Architectural vinyl wrapping is well suited to the Stoke-on-Trent
              care home estate because a significant portion of the region&apos;s
              residential care facilities operate in buildings furnished during
              the 1990s and 2000s that are now overdue for interior refresh.
              Replacing bedroom furniture across a 30 or 40-bedroom care home
              in Stoke is a major capital project. Wrapping the existing furniture
              — at a fraction of the cost, in occupied rooms, with no construction
              disruption — is the practical route that more Staffordshire care
              operators are choosing.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes
              from Stoke-on-Trent via the M6. Stoke sits naturally on our
              south-western route corridor, connecting our Sheffield base
              efficiently to the Midlands care home market.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Stoke-on-Trent care homes
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
                and CQC inspectors visiting the Stoke-on-Trent care home.
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
              We begin with a survey of the Stoke-on-Trent or Staffordshire
              care home — assessing each surface to be wrapped, confirming
              substrate condition and suitability, agreeing the film colours and
              finishes required, and establishing the access logistics with care
              management to minimise disruption to residents&apos; routines.
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
              Stoke-on-Trent and Staffordshire care home contracts requiring it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stoke-on-Trent care home wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Midlands care home and wrapping services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrapping — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home wrapping service overview</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Birmingham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Birmingham and West Midlands care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Manchester</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Manchester and Greater Manchester care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Sheffield</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Sheffield and South Yorkshire care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Wrapping</p>
              <p className="mt-1 text-xs text-muted">Commercial surface wrapping for all environments</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Stoke-on-Trent</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Stoke-on-Trent</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stoke-on-Trent care home wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us which Stoke-on-Trent or Staffordshire care home you are
              looking to refresh, roughly how many rooms and which surfaces need
              wrapping. We will arrange a survey and provide a detailed quote
              with no obligation. RAMS available on request.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Stoke-on-Trent Quote →
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
