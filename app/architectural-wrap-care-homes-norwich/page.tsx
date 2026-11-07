import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Norwich | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Norwich and Norfolk — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Norwich NR postcodes. Norfolk & Norwich University Hospital NR4 care cluster, Eaton NR4, Old Catton NR6, Thorpe NR7 and all Norwich postcode zones covered. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-norwich/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Norwich — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Norwich and Norfolk. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Norwich NR postcodes including Norwich city NR1, Eaton NR4, Old Catton NR6, Sprowston NR6, Thorpe St Andrew NR7 and Costessey NR5. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Norwich", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-norwich/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Norwich care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Norwich care homes range from purpose-built residential care facilities in the Eaton NR4 and Sprowston NR6 growth zones to converted properties in the city-centre NR1 and inner residential NR2 zones — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Norwich care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Norwich?",
    a: "Yes — we work with CQC-regulated care homes, nursing homes and residential care facilities across Norwich and the wider Norfolk NR postcode area. The Care Quality Commission is the independent regulator for health and social care in England, responsible for registering, inspecting and rating care homes across all English local authority areas including Norfolk County Council. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Norwich care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Norwich care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Norwich care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Norwich care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Norwich is approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11 — a direct route from the East Midlands into East Anglia.",
  },
  {
    q: "Which Norwich and Norfolk postcodes do you cover for care home wrapping?",
    a: "We cover all Norwich and surrounding NR postcode areas — NR1 (Norwich city centre: city-centre care home and nursing home provision serving the Norwich urban core; residential care facilities in the St Stephen's NR1 and Riverside NR1 zones), NR2 (inner west Norwich: Golden Triangle NR2 care home provision in the south-west inner residential zone; Chapelfield NR2 boundary care facilities), NR3 (inner north Norwich: Anglia Square NR3 and north city-centre residential care provision; Mile Cross NR3 community care facilities), NR4 (Eaton, UEA, Cringleford: Norfolk & Norwich University Hospital NR4 — the Norfolk region&apos;s principal NHS teaching hospital generating a natural cluster of nursing homes and care facilities in the surrounding Eaton NR4 and Cringleford NR4 zones; Eaton NR4 is one of Norwich&apos;s premier residential care home concentrations, with a significant number of residential and nursing homes benefiting from proximity to the NNUH and the A11 transport corridor), NR5 (Costessey, Bowthorpe: south-west Norwich residential zones with care home provision across the Costessey NR5 and Bowthorpe NR5 residential footprint), NR6 (Old Catton, Sprowston, Hellesdon: north Norwich residential zone with care home provision across Old Catton NR6 and Sprowston NR6 — established residential care markets north of the city; Hellesdon NR6 has a significant NHS presence at Hellesdon Hospital, generating a further cluster of care and support facilities in the immediate NR6 zone), NR7 (Thorpe St Andrew, Plumstead: east Norwich residential zone with care home provision across Thorpe St Andrew NR7), NR8 (Drayton, Taverham: outer north-west residential zone with community care home provision). WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) and A11.",
  },
];

export default function CareHomeWrapNorwichPage() {
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
            <span className="text-foreground">Norwich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Norwich &amp; Norfolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Norwich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Norwich and Norfolk. Bedroom wardrobe door panels, bedside cabinets,
            nurses&apos; station counters, corridor doors, communal lounge panels
            and dining room furniture — wrapped without replacement. No
            construction noise, no wet trades, rooms usable the same day.
            CQC-regulated care homes across all Norwich NR postcodes covered.
            Approximately 2 hours 30 minutes from our South Yorkshire base
            via the A1(M) and A11.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Norwich Care Home Quote →
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
            Why Norwich care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Norwich is Norfolk&apos;s principal city with a substantial care
              home estate across its residential zones — Eaton NR4, Old Catton
              NR6, Sprowston NR6, Thorpe St Andrew NR7, Costessey NR5 and
              the city-centre NR1 and NR2 zones. Norfolk &amp; Norwich University
              Hospital (NNUH) at Colney Lane NR4 is the region&apos;s principal
              NHS teaching hospital, generating a natural cluster of nursing
              homes, residential care and assisted-living provision in the
              surrounding Eaton NR4 and Cringleford NR4 zones.
            </p>
            <p>
              Vinyl wrapping allows Norwich care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              ahead of a CQC inspection or a marketing photography day, vinyl
              wrapping is the fastest and least disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 30
              minutes from Norwich via the A1(M) south and A11 through
              Thetford — a direct route from the East Midlands into East
              Anglia. We cover all Norwich NR postcodes and can extend
              coverage to neighbouring Norfolk market towns and care home
              clusters where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Norwich care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Norwich care home bedrooms —
                wrapped to restore a uniform, clean appearance in 2 to 3 hours
                without removal or replacement. The most common individual
                surface request across Norwich NR postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Norwich care home bedrooms — matching the wardrobe finish for
                a unified bedroom appearance without furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia panels and high-contact laminate surfaces at
                nurses&apos; stations across Norwich care homes — refreshed in
                commercial-grade film without structural works, with edges sealed
                against cleaning chemical exposure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door leaf panels and door frame surrounds across Norwich care
                home corridors — wrapped in a consistent finish to give a fresh,
                cohesive appearance throughout the facility without painting or
                door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lounge storage unit fronts, media wall panels and decorative
                surface cladding in Norwich care home communal areas — refreshed
                in commercial-grade film without decant or communal area closure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Table edge banding, chair back panels and dining room storage
                unit fronts in Norwich care home dining areas — wrapped to
                restore a clean, hygienic appearance without furniture disposal
                costs or room downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Norwich care home vinyl wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related care home wrap services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrapping — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home surface wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-peterborough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Peterborough</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Peterborough</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Nottingham</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Nottingham</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Hull</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Hull and East Riding</p>
            </Link>
            <Link href="/subcontract-window-film-installation-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Norwich trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Get a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Norwich care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Norwich care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the care home, the surfaces you want to refresh and the
              number of rooms. We survey, specify and quote before any work
              begins. Resident-sensitive scheduling, no construction noise, rooms
              usable the same day. Approximately 2 hours 30 minutes from South
              Yorkshire via the A1(M) and A11.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Norwich Care Home Quote →
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
