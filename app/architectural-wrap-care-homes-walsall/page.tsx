import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Walsall | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Walsall and the Black Country — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Walsall WS postcodes. Manor Hospital WS2 care cluster, Bloxwich WS3, Aldridge WS9 and all Walsall postcode zones covered. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-walsall/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Walsall — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Walsall and the Black Country. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Walsall WS postcodes including Walsall town WS1, Bloxwich WS3, Aldridge WS9 and the wider Black Country WS postcode area. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Walsall", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-walsall/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Walsall care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Walsall care homes range from purpose-built residential care facilities in the Bloxwich WS3 and Aldridge WS9 residential zones to converted properties in the town-centre WS1 and inner residential WS2 zones — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Walsall care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Walsall?",
    a: "Yes — we work with CQC-regulated care homes, nursing homes and residential care facilities across Walsall and the wider Black Country WS postcode area. The Care Quality Commission is the independent regulator for health and social care in England, responsible for registering, inspecting and rating care homes across all English local authority areas including the Metropolitan Borough of Walsall. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Walsall care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Walsall care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Walsall care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Walsall care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6 — a direct motorway route from Sheffield into the West Midlands.",
  },
  {
    q: "Which Walsall and Black Country postcodes do you cover for care home wrapping?",
    a: "We cover all Walsall and surrounding WS postcode areas — WS1 (Walsall town centre: town-centre care home and nursing home provision serving the Walsall urban core; residential care facilities in the WS1 zone adjacent to Manor Hospital WS2), WS2 (Walsall outer south: Manor Hospital WS2 — Walsall&apos;s principal NHS acute hospital generating a natural cluster of nursing homes, residential care and assisted-living provision in the surrounding WS2 zone; outer south-west Walsall residential care provision), WS3 (Bloxwich: a substantial residential zone in the north of the borough with community care home provision across Bloxwich and surrounding residential streets), WS4 (Rushall, Shelfield: outer north Walsall residential zones with community care home provision), WS5 (Aldridge: Aldridge WS9 — a prosperous outer Walsall residential zone with a significant care home and assisted-living market across the Aldridge and Streetly residential areas). WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6.",
  },
];

export default function CareHomeWrapWalsallPage() {
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
            <span className="text-foreground">Walsall</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Walsall &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Walsall
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Walsall and the Black Country. Bedroom wardrobe door panels, bedside
            cabinets, nurses&apos; station counters, corridor doors, communal lounge
            panels and dining room furniture — wrapped without replacement. No
            construction noise, no wet trades, rooms usable the same day.
            CQC-regulated care homes across all Walsall WS postcodes covered.
            Approximately 1 hour from our South Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Walsall Care Home Quote →
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
            Why Walsall care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Walsall is a large Black Country town with a substantial care
              home estate spread across its residential zones — Bloxwich WS3,
              Aldridge WS9, the town-centre WS1 and WS2 zones and the outer
              residential WS4 and WS5 postcodes. Manor Hospital WS2 is
              Walsall&apos;s principal NHS acute hospital, generating a natural
              cluster of nursing homes, residential care and assisted-living
              provision in the surrounding WS2 zone.
            </p>
            <p>
              Vinyl wrapping allows Walsall care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              ahead of a CQC inspection or a marketing photography day, vinyl
              wrapping is the fastest and least disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Walsall via the M1 south and M6 — a direct motorway route from
              Sheffield into the West Midlands. We cover all Walsall WS
              postcodes and can extend coverage to neighbouring Black Country
              care home markets alongside Wolverhampton, Birmingham and other
              West Midlands sites where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Walsall care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Walsall care home bedrooms —
                wrapped to restore a uniform, clean appearance in 2 to 3 hours
                without removal or replacement. The most common individual
                surface request across Walsall WS postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Walsall care home bedrooms — matching the wardrobe finish for
                a unified bedroom appearance without furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia panels and high-contact laminate surfaces at
                nurses&apos; stations across Walsall care homes — refreshed in
                commercial-grade film without structural works, with edges sealed
                against cleaning chemical exposure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door leaf panels and door frame surrounds across Walsall care
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
                surface cladding in Walsall care home communal areas — refreshed
                in commercial-grade film without decant or communal area closure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Table edge banding, chair back panels and dining room storage
                unit fronts in Walsall care home dining areas — wrapped to
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
            Walsall care home vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-care-homes-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Wolverhampton</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Birmingham</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Birmingham</p>
            </Link>
            <Link href="/window-film/retail-window-film-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Walsall and the Black Country</p>
            </Link>
            <Link href="/subcontract-window-film-installation-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Walsall trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Get a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Walsall care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Walsall care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the care home, the surfaces you want to refresh and the
              number of rooms. We survey, specify and quote before any work
              begins. Resident-sensitive scheduling, no construction noise, rooms
              usable the same day. Approximately 1 hour from South Yorkshire
              via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Walsall Care Home Quote →
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
