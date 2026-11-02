import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Inverness | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Inverness and the Scottish Highlands — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses&apos; station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland regulated. All Inverness IV postcodes covered. Inverness city centre IV1 and Eastgate IV2 area care homes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-inverness/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Inverness — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Inverness and the Scottish Highlands. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland regulated care homes across all Inverness IV postcodes including Inverness city centre IV1, Eastgate and Millburn Road IV2 and the Ness-side residential IV1 care home cluster. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Inverness", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-inverness/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Inverness care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Inverness care homes range from purpose-built residential care facilities in the city-centre IV1 and Millburn Road IV2 zones to converted Victorian and Edwardian properties in the Ness-side and Crown Street residential neighbourhoods — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Inverness care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with Care Inspectorate Scotland regulated care homes in Inverness?",
    a: "Yes — we work with Care Inspectorate Scotland regulated care homes, nursing homes and residential care facilities across Inverness and the wider Highland IV postcode area. Care Inspectorate is the independent scrutiny and improvement body for care services in Scotland, responsible for registering, inspecting and grading care homes across all Scottish local authority areas including Highland Council. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Inverness care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Inverness care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses&apos; stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer&apos;s specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Inverness care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For an Inverness care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Inverness&apos;s care home estate includes facilities serving the Highland capital&apos;s growing elderly population where cost-effective surface refurbishment is a practical route to refreshing interiors ahead of a Care Inspectorate Scotland inspection or a marketing photography day.",
  },
  {
    q: "Which Inverness and Highland postcodes do you cover for care home wrapping?",
    a: "We cover all Inverness and surrounding IV postcode areas — IV1 (Inverness city centre: Inverness city-centre NP residential zone IV1 — the Highland capital&apos;s principal residential care cluster along Crown Street, Kenneth Street and the Ness-side residential corridor; Raigmore Hospital IV2 adjacent zones generating nursing home and residential care demand from the principal NHS Highland acute hospital catchment; Old Town IV1 and Crown IV1 residential zones with care home provision serving Inverness&apos;s established residential neighbourhoods), IV2 (Eastgate, Millburn Road, Raigmore: Raigmore Hospital IV2 — NHS Highland&apos;s principal acute hospital on Raigmore Approach IV2, generating a natural cluster of nursing homes, residential care and assisted-living provision in the surrounding Raigmore and Millburn Road IV2 residential zones; Eastgate residential IV2 zone adjacent to Eastgate Centre with care home provision; Inverness Airport and Dalcross IV2 zone with care home provision within the wider IV2 operational area), IV3 (Inverness west: Bught and Dochfour Drive IV3 residential zones with care home provision on the west side of Inverness; west-bank Ness residential IV3 area). Dingwall IV15, Beauly IV4, Nairn IV12 and Fortrose IV10 also within the broader Highland operational area for multi-site care home programmes. WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) and A9.",
  },
];

export default function CareHomeWrapInvernessPage() {
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
            <span className="text-foreground">Inverness</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Inverness &amp; Scottish Highlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Inverness
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Inverness and the Scottish Highlands. Bedroom wardrobe door panels,
            bedside cabinets, nurses&apos; station counters, corridor doors,
            communal lounge panels and dining room furniture — wrapped without
            replacement. No construction noise, no wet trades, rooms usable the
            same day. Care Inspectorate Scotland regulated care homes across all
            Inverness IV postcodes covered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get an Inverness Care Home Quote →
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
            Why Inverness care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Inverness is the Highland capital — the principal city of northern
              Scotland with a care home estate regulated by Care Inspectorate
              Scotland and anchored around Raigmore Hospital IV2, NHS
              Highland&apos;s main acute hospital. Raigmore generates a natural
              cluster of nursing homes, residential care and assisted-living
              provision across the surrounding Millburn Road and Raigmore IV2
              residential zones, with further care home provision throughout the
              city-centre IV1 and Ness-side residential neighbourhoods.
            </p>
            <p>
              Vinyl wrapping allows Inverness care homes to refresh bedroom
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
              WRPX is based in South Yorkshire, approximately 5 hours from
              Inverness via the A1(M) north through Newcastle and Edinburgh,
              then the A9 north. We cover all Inverness IV postcodes and wider
              Highland care homes — Dingwall IV15, Beauly IV4, Nairn IV12 and
              Fortrose IV10 — as part of the same Highland mobilisation.
              Inverness programmes can also be combined with Aberdeen — roughly
              2.5 hours south on the A9 and A90 — within a single extended
              Scottish visit where care home programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Inverness care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Inverness care home bedrooms —
                wrapped to restore a uniform, clean appearance in 2 to 3 hours
                without removal or replacement. The most common individual
                surface request across Inverness IV postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Inverness care home bedrooms — wrapped alongside wardrobes in a
                single visit to refresh the full bedroom suite in one programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nurses&apos; station and care staff counter fascias across
                Inverness care homes — wrapped to restore a professional
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
                throughout Inverness care home buildings — wrapped to maintain
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
                room storage unit fronts across Inverness care home communal
                dining areas — wrapped to refresh high-contact communal surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal lounge storage unit fronts, media wall panel cladding
                and reception fascias across Inverness care homes — wrapped to
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
            Inverness care home wrapping — common questions
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
            <Link href="/subcontract-window-film-installation-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Inverness</p>
            </Link>
            <Link href="/window-film/gym-window-film-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">Window film for Inverness gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Inverness care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Inverness care home wrap — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Inverness care home, the surfaces and the number
              of rooms. We work with care managers, FM contractors and operators
              to schedule around residents. No noise, no wet trades, rooms
              usable the same day. Approximately 5 hours from South Yorkshire
              via the A1(M) and A9.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get an Inverness Care Home Quote →
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
