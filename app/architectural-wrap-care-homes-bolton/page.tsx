import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Bolton | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Bolton and Greater Manchester — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Bolton BL postcodes and wider Greater Manchester covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-bolton/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Bolton — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Bolton and Greater Manchester. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Bolton BL postcodes and wider Greater Manchester."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Bolton", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-bolton/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Bolton care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Bolton care homes vary in building type — from modern purpose-built residential care facilities in the suburban BL1 and BL6 zones to converted Victorian and Edwardian properties in the inner BL1 and BL3 corridors — and we specify the appropriate commercial-grade film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Bolton care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Bolton and Greater Manchester?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across Bolton and the wider Greater Manchester area. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Bolton or Greater Manchester care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Bolton?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning and disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Bolton care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Bolton care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Bolton&apos;s care home estate includes a significant number of facilities operating in older converted building stock where cost-effective surface refurbishment is a practical route to refreshing the interior without major capital expenditure.",
  },
  {
    q: "Which Bolton and Greater Manchester postcodes do you cover for care home wrapping?",
    a: "We cover all Bolton and surrounding BL postcode areas — BL1 (Bolton town centre: Royal Bolton Hospital on Minerva Road BL4 is the primary NHS acute hospital for the Bolton borough and generates a natural care home cluster across the BL1 town-centre and adjacent residential corridors; the Bolton town-centre BL1 zone includes a mix of modern purpose-built residential care facilities and older converted Victorian and Edwardian properties generating consistent care home surface refurbishment demand), BL2 (Breightmet, Tonge Moor — north-east Bolton residential care zone with established post-war and modern care home provision), BL3 (Great Lever, Halliwell — west Bolton inner residential zone with a mix of purpose-built and converted care home provision), BL4 (Farnworth, Kearsley — south Bolton residential zone; the Royal Bolton Hospital BL4 Minerva Road campus is the primary acute NHS care facility for the borough, anchoring care home cluster activity across BL4 and adjacent areas), BL5 (Westhoughton — south-west Bolton district town with established residential care provision in a mixed residential and agricultural character area), BL6 (Horwich, Blackrod — north-west Bolton residential zone; Horwich is a prosperous former mill town with purpose-built care home provision in a residential setting near Rivington and the West Pennine Moors), BL7 (Bromley Cross, Edgworth — north Bolton affluent residential zone with private and residential care home provision in suburban and rural-edge settings), BL8 (Bury south, Ramsbottom — east Bolton and Bury boundary zone; BL8 covers the Tottington, Greenmount and Bury south zone where Bolton and Bury care home catchments overlap), BL9 (Bury town centre — Bury is the principal town immediately east of Bolton; Fairfield General Hospital Bury BL9 anchors care home cluster activity across the Bury BL9 zone). Wigan WN1–WN8, Chorley PR7, Manchester M29 and wider Greater Manchester also within reach. WRPX is based in South Yorkshire, approximately 1 hour from Bolton via the M62 and M61.",
  },
];

export default function CareHomeWrapBoltonPage() {
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
            <span className="text-foreground">Bolton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Bolton &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Bolton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Bolton and Greater Manchester. Bedroom wardrobe door panels, bedside
            cabinets, nurses&apos; station counters, corridor doors,
            communal lounge panels and dining room furniture — wrapped without
            replacement. No construction noise, no wet trades, rooms usable the
            same day. All Bolton BL postcodes covered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Bolton Care Home Quote →
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
            Why Bolton care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bolton and the surrounding Greater Manchester area have a
              substantial care home estate — spanning the Bolton borough with its
              mix of modern purpose-built residential care facilities and older
              converted Victorian and Edwardian properties across the BL
              postcode zones. Royal Bolton Hospital on Minerva Road BL4 is the
              primary acute NHS facility for the borough and creates a natural
              care home cluster in the BL1 town-centre corridor and adjacent
              residential areas, including Farnworth BL4 and Great Lever BL3.
            </p>
            <p>
              Vinyl wrapping allows Bolton care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement. A
              single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              before a CQC inspection or ahead of a marketing photography day,
              vinyl wrapping is the fastest and least disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Bolton
              via the M62 and M61. We cover all Bolton BL postcodes, Wigan WN,
              Chorley PR and wider Greater Manchester care homes as part of the
              same regional North West mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Bolton care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Bolton care home bedrooms —
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
                Bolton care home bedrooms — wrapped alongside wardrobes in a
                single visit to refresh the full bedroom suite in one programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nurses&apos; station and care staff counter fascias across
                Bolton care homes — wrapped to restore a professional
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
                throughout Bolton care home buildings — wrapped to maintain
                a consistent interior appearance across the full building
                without disruption to residents.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room table edge banding, chair back panels and dining
                room storage unit fronts across Bolton care home communal
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
                and reception fascias across Bolton care homes — wrapped to
                restore and refresh the shared spaces residents use daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bolton care home wrapping — common questions
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
            <Link href="/architectural-wrap-care-homes-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Manchester</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Manchester care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-wigan/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Wigan</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Wigan care homes</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Bolton</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Bolton</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Liverpool</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Liverpool care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Bolton care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bolton care home wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Bolton care home, the surfaces and the number
              of rooms. We work with care managers, FM contractors and operators
              to schedule around residents. No noise, no wet trades, rooms
              usable the same day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Bolton Care Home Quote →
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
