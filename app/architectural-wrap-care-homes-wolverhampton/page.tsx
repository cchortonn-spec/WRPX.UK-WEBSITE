import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Wolverhampton | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Wolverhampton and the Black Country — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Wolverhampton WV postcodes and wider Black Country covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Wolverhampton — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Wolverhampton and the Black Country. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Wolverhampton WV postcodes, Walsall WS, Dudley DY and wider Black Country."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Wolverhampton", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-wolverhampton/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Wolverhampton care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Wolverhampton care homes vary in building type — from modern purpose-built residential care facilities in the suburban WV3 and WV4 zones to converted Victorian properties in the inner WV1 and WV2 corridors — and we specify the appropriate commercial-grade film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Wolverhampton care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Wolverhampton and the Black Country?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Wolverhampton and the wider Black Country. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Wolverhampton or Black Country care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Wolverhampton?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning and disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Wolverhampton care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Wolverhampton care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Wolverhampton&apos;s care home estate includes a significant number of facilities operating in older building stock where cost-effective surface refurbishment is a practical route to refreshing the interior without major capital expenditure.",
  },
  {
    q: "Which Wolverhampton and Black Country postcodes do you cover for care home wrapping?",
    a: "We cover all Wolverhampton and Black Country WV postcode areas — WV1 (Wolverhampton city centre and inner zone: New Cross Hospital WV10 on the northern approach and Royal Wolverhampton NHS Trust anchor for the local care home cluster; the city-centre WV1 zone includes a mix of purpose-built modern residential care facilities and older converted residential properties generating consistent care home surface refurbishment demand), WV2 (Penn Road, Blakenhall — south Wolverhampton residential care zone; Penn Road is one of the primary residential corridors south of the city centre with established care home provision), WV3 (Tettenhall, Finchfield, Bradmore — west Wolverhampton residential care zone; a prosperous suburban area with purpose-built care facilities in quiet residential surroundings), WV4 (Blakenhall, Parkfields, Lanesfield — south-west Wolverhampton residential care zone), WV6 (Codsall, Tettenhall Wood — west Wolverhampton semi-rural residential care zone with detached-house converted and purpose-built care facilities), WV10 (Wednesfield, Low Hill, Heath Town — north Wolverhampton residential care zone; New Cross Hospital WV10 is the main acute NHS hospital for the Wolverhampton catchment and the primary care home cluster anchor in north Wolverhampton), WV11 (Willenhall, Short Heath — north-east Wolverhampton residential care zone on the Walsall boundary), WV13 (Willenhall town centre and surrounding residential care zone), WV14 (Bilston — east Wolverhampton zone with established care home provision in a mixed residential and industrial character area). Walsall WS1-WS5 (Walsall Manor Hospital WS2 — the primary acute hospital for Walsall and a major care home cluster anchor for the WS postcode zone), Dudley DY1-DY5 (Russells Hall Hospital DY1 — Dudley&apos;s primary acute hospital and the care home cluster anchor for the Black Country south zone) and West Bromwich B70-B71 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Wolverhampton via the M1 and M6.",
  },
];

export default function CareHomeWrapWolverhamptonPage() {
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
            <span className="text-foreground">Wolverhampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Wolverhampton &amp; Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Wolverhampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Wolverhampton and the Black Country. Bedroom wardrobe door panels,
            bedside cabinets, nurses&apos; station counters, corridor doors,
            communal lounge panels and dining room furniture — wrapped without
            replacement. No construction noise, no wet trades, rooms usable the
            same day. All Wolverhampton WV postcodes, Walsall WS and Dudley DY covered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Wolverhampton Care Home Quote →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Wolverhampton care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wolverhampton and the Black Country have a large and diverse care
              home estate — a mix of modern purpose-built residential care
              facilities in the suburban WV3 and WV4 zones and older converted
              properties in the inner WV1 and WV2 corridors. New Cross Hospital
              WV10 to the north and the wider Royal Wolverhampton NHS Trust
              catchment creates a dense care home cluster across the WV postcode
              area that needs to maintain interior standards for CQC inspection
              and occupancy.
            </p>
            <p>
              Vinyl wrapping allows Wolverhampton care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              before a CQC inspection or ahead of a marketing photography day,
              vinyl wrapping is the fastest and least disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Wolverhampton via the M1 and M6. We cover all Wolverhampton WV
              postcodes, Walsall WS and Dudley DY care homes as part of the same
              regional mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Wolverhampton care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Wolverhampton care home bedrooms —
                wrapped to restore a uniform, clean appearance in 2 to 3 hours
                without removal or replacement. The most common individual
                surface request.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Wolverhampton care home bedrooms — wrapped alongside wardrobes
                in a single visit to refresh the full bedroom suite in one
                programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nurses&apos; station and care staff counter fascias across
                Wolverhampton care homes — wrapped to restore a professional
                appearance on surfaces subject to high-frequency contact,
                cleaning and disinfection.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door panels and communal area door cladding
                throughout Wolverhampton care home buildings — wrapped to
                maintain a consistent interior appearance across the full
                building without disruption to residents.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room table edge banding, chair back panels and dining
                room storage unit fronts across Wolverhampton care home communal
                dining areas — wrapped to refresh the appearance of high-contact
                communal surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and reception fascias across Wolverhampton care homes — wrapped
                to restore and refresh the shared spaces residents use daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton care home wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Birmingham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Birmingham care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-coventry/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Coventry</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Coventry care homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Wolverhampton</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Wolverhampton</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Wolverhampton care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wolverhampton care home wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Wolverhampton care home, the surfaces and the number
              of rooms. We work with care managers, FM contractors and operators
              to schedule around residents. No noise, no wet trades, rooms
              usable the same day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Wolverhampton Care Home Quote →
              </Link>
              <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
                Care Home Wrap Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
