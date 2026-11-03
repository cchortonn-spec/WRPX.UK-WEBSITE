import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Dundee | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Dundee — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses&apos; station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland regulated. All Dundee DD postcodes covered. Ninewells Hospital DD2 care cluster, Broughty Ferry DD5 and Dundee city centre DD1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-dundee/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Dundee — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Dundee. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland regulated care homes across all Dundee DD postcodes including Ninewells Hospital DD2 care cluster, West End DD2, Broughty Ferry DD5 and Dundee city centre DD1. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Dundee", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-dundee/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Dundee care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Dundee care homes range from purpose-built residential care facilities in the Ninewells Hospital DD2 cluster and West End DD2 to converted properties in the city-centre DD1 zone and the residential suburbs of Broughty Ferry DD5 and Barnhill DD5 — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Dundee care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with Care Inspectorate Scotland regulated care homes in Dundee?",
    a: "Yes — we work with Care Inspectorate Scotland regulated care homes, nursing homes and residential care facilities across Dundee and the wider Tayside DD postcode area. Care Inspectorate is the independent scrutiny and improvement body for care services in Scotland, responsible for registering, inspecting and grading care homes across all Scottish local authority areas including Dundee City Council and Angus Council. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Dundee care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Dundee care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Dundee care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Dundee care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Dundee's care home estate includes facilities in the Ninewells Hospital DD2 cluster and across the city's residential suburbs where cost-effective surface refurbishment is a practical route to refreshing interiors ahead of a Care Inspectorate Scotland inspection or a marketing photography day.",
  },
  {
    q: "Which Dundee and Tayside postcodes do you cover for care home wrapping?",
    a: "We cover all Dundee and surrounding DD postcode areas — DD1 (Dundee city centre: city-centre DD1 residential care and nursing home provision serving the Dundee urban core; Abertay University zone DD1 with care provision for the city-centre residential population; Dundee central care facilities adjacent to the main commercial and civic core), DD2 (West End, Ninewells: Ninewells Hospital DD2 — NHS Tayside's principal acute hospital on the western edge of the city, generating a natural cluster of nursing homes, residential care and assisted-living provision across the surrounding Ninewells and Ninewells Drive DD2 residential zones; West End Perth Road DD2 — Dundee's most established residential neighbourhood with care home provision serving the city's older population; Invergowrie DD2 at the western margin of the Dundee operational area), DD3 (Hilltown, Dens: Hilltown DD3 residential care provision north of the city centre; Dens Park and Albert Street DD3 zones with care home provision for the north Dundee residential community), DD4 (Stobswell, Craigie: Stobswell DD4 residential care provision in the east-central zone of Dundee; Craigie DD4 with care home provision for the south-east Dundee residential catchment), DD5 (Broughty Ferry, Monifieth: Broughty Ferry DD5 — Dundee's affluent eastern coastal suburb with care home provision serving its predominantly residential and older demographic; Barnhill DD5 residential care provision; Monifieth DD5 on the eastern margin of the Dundee operational area). Angus DD8 (Forfar), DD9 (Brechin) and DD10 (Montrose) also within the broader Tayside operational area for multi-site care home programmes. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) and A90.",
  },
];

export default function CareHomeWrapDundeePage() {
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
            <span className="text-foreground">Dundee</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Dundee &amp; Tayside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Dundee
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Dundee. Bedroom wardrobe door panels, bedside cabinets, nurses&apos;
            station counters, corridor doors, communal lounge panels and dining
            room furniture — wrapped without replacement. No construction noise,
            no wet trades, rooms usable the same day. Care Inspectorate Scotland
            regulated care homes across all Dundee DD postcodes covered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Dundee Care Home Quote →
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
            Why Dundee care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Dundee is a major Scottish city with a care home estate regulated
              by Care Inspectorate Scotland and anchored around Ninewells
              Hospital DD2 — NHS Tayside&apos;s principal acute hospital on the
              western fringe of the city. Ninewells generates a natural cluster
              of nursing homes, residential care and assisted-living provision
              across the surrounding Ninewells and West End DD2 residential
              zones. Further care home provision is distributed across the
              city-centre DD1, Hilltown DD3 and Broughty Ferry DD5 residential
              areas.
            </p>
            <p>
              Vinyl wrapping allows Dundee care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a care home looking to refresh multiple rooms
              ahead of a Care Inspectorate Scotland inspection or a marketing
              photography day, vinyl wrapping is the fastest and least disruptive
              option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30 minutes
              from Dundee via the A1(M) north to Edinburgh and the A90 west into
              Dundee. We cover all Dundee DD postcodes and wider Tayside care
              homes — Forfar DD8, Brechin DD9 and Angus DD10–DD11 — as part of
              the same Tayside mobilisation. Dundee programmes can also be
              combined with Aberdeen — roughly 1 hour 30 minutes further north
              on the A90 — within a single extended Scottish visit where care
              home programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Dundee care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Dundee care home bedrooms — wrapped
                to restore a uniform, clean appearance in 2 to 3 hours without
                removal or replacement. The most common individual surface
                request across Dundee DD postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Dundee care home bedrooms — wrapped alongside wardrobes in a
                single visit to refresh the full bedroom suite in one programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nurses&apos; station and care staff counter fascias across Dundee
                care homes — wrapped to restore a professional appearance on
                surfaces subject to high-frequency contact, cleaning and
                disinfection.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door panels and communal area door cladding
                throughout Dundee care home buildings — wrapped to maintain a
                consistent interior appearance across the full building without
                disruption to residents.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room table edge banding, chair back panels and dining
                room storage unit fronts across Dundee care home communal
                dining areas — wrapped to refresh high-contact communal surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and reception fascias across Dundee care homes — wrapped to
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
            Dundee care home wrapping — common questions
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
            <Link href="/architectural-wrap-care-homes-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Aberdeen care homes</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Edinburgh care homes</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrapping Dundee</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Dundee student accommodation</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrapping Glasgow</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Glasgow care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Dundee care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Dundee care home wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Dundee care home, the surfaces and the number of
              rooms. We work with care managers, FM contractors and operators
              to schedule around residents. No noise, no wet trades, rooms
              usable the same day. Approximately 3 hours 30 minutes from South
              Yorkshire via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Dundee Care Home Quote →
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
