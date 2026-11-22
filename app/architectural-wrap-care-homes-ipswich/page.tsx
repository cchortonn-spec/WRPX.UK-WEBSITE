import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Ipswich | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Ipswich and Suffolk — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Ipswich IP postcodes. Ipswich Hospital IP4 cluster, Rushmere IP4, Whitton IP3 and all Ipswich postcode zones covered. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-ipswich/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Ipswich — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Ipswich and Suffolk. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Ipswich IP postcodes including Ipswich Hospital IP4 cluster, Rushmere IP4, Whitton IP3 and the wider Suffolk IP postcode area. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Ipswich", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-ipswich/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Ipswich care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Ipswich care homes range from purpose-built residential care facilities in the Rushmere IP4 and outer IP postcode residential zones to converted properties in the town-centre IP1 and inner IP3 areas — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Ipswich care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Ipswich?",
    a: "Yes — we work with CQC-regulated care homes, nursing homes and residential care facilities across Ipswich and the wider Suffolk IP postcode area. The Care Quality Commission is the independent regulator for health and social care in England, responsible for registering, inspecting and rating care homes across all English local authority areas including the Borough and County of Suffolk. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Ipswich care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Ipswich care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Ipswich care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For an Ipswich care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14 — a direct route from Sheffield into Suffolk.",
  },
  {
    q: "Which Ipswich and Suffolk postcodes do you cover for care home wrapping?",
    a: "We cover all Ipswich and surrounding IP postcode areas — IP1 (Ipswich town centre: town-centre care home and nursing home provision serving the Ipswich urban core; residential care facilities in the IP1 zone adjacent to the hospital cluster), IP2 (Ipswich south-west: outer south-west Ipswich residential care provision), IP3 (Ipswich east and Whitton: Whitton IP3 — a substantial east Ipswich residential zone with community care home provision; Ipswich Waterfront IP3 mixed-use and surrounding residential care provision), IP4 (Ipswich north-east including Rushmere: Ipswich Hospital IP4 — Ipswich&apos;s principal NHS acute hospital generating a natural cluster of nursing homes, residential care and assisted-living provision in the surrounding IP4 zone; Rushmere area IP4 — a prosperous outer north-east residential zone with significant care home and assisted-living provision), IP5 (Martlesham: outer east Ipswich residential zone with community and private care home provision close to Martlesham Heath Business Park IP5), IP8 (Copdock and outer south: outer south Ipswich rural and residential zone with community care home provision). WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14.",
  },
];

export default function CareHomeWrapIpswichPage() {
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
            <span className="text-foreground">Ipswich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Ipswich &amp; Suffolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Ipswich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Ipswich and Suffolk. Bedroom wardrobe door panels, bedside cabinets,
            nurses&apos; station counters, corridor doors, communal lounge panels
            and dining room furniture — wrapped without replacement. No
            construction noise, no wet trades, rooms usable the same day.
            CQC-regulated care homes across all Ipswich IP postcodes covered.
            Approximately 2 hours 15 minutes from our South Yorkshire base
            via the A1(M) and A14.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get an Ipswich Care Home Quote →
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
            Why Ipswich care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ipswich is the county town of Suffolk with a substantial care
              home estate spread across its residential zones — Rushmere IP4,
              Whitton IP3, the town-centre IP1 zone and the outer residential
              IP2 and IP5 postcodes. Ipswich Hospital IP4 is the town&apos;s
              principal NHS acute hospital, generating a natural cluster of
              nursing homes, residential care and assisted-living provision
              in the surrounding IP4 zone.
            </p>
            <p>
              Vinyl wrapping allows Ipswich care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              ahead of a CQC inspection or a marketing photography day, vinyl
              wrapping is the fastest and least disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 15
              minutes from Ipswich via the A1(M) south and A14 east — a direct
              route into Suffolk. We cover all Ipswich IP postcodes and can
              extend coverage to neighbouring Suffolk and East Anglian care
              home markets alongside Norwich and Cambridge where programme
              volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Ipswich care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Ipswich care home bedrooms —
                wrapped to restore a uniform, clean appearance in 2 to 3 hours
                without removal or replacement. The most common individual
                surface request across Ipswich IP postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Ipswich care home bedrooms — matching the wardrobe finish for
                a unified bedroom appearance without furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia panels and high-contact laminate surfaces at
                nurses&apos; stations across Ipswich care homes — refreshed in
                commercial-grade film without structural works, with edges sealed
                against cleaning chemical exposure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door leaf panels and door frame surrounds across Ipswich care
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
                surface cladding in Ipswich care home communal areas — refreshed
                in commercial-grade film without decant or communal area closure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Table edge banding, chair back panels and dining room storage
                unit fronts in Ipswich care home dining areas — wrapped to
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
            Ipswich care home vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-care-homes-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Norwich</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Norwich and Norfolk</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Ipswich</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Ipswich student accommodation</p>
            </Link>
            <Link href="/window-film/retail-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Ipswich and Suffolk</p>
            </Link>
            <Link href="/subcontract-window-film-installation-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Ipswich trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Get a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Ipswich care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ipswich care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the care home, the surfaces you want to refresh and the
              number of rooms. We survey, specify and quote before any work
              begins. Resident-sensitive scheduling, no construction noise, rooms
              usable the same day. Approximately 2 hours 15 minutes from South
              Yorkshire via the A1(M) and A14.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get an Ipswich Care Home Quote →
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
