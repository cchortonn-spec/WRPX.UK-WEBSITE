import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Perth | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Perth and Perthshire — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland-regulated care homes across all Perth PH postcodes. Perth city centre PH1, Kinnoull PH2, Bridgend PH2, Scone PH2, Crieff PH7 and Pitlochry PH16 covered. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-perth/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Perth — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Perth and Perthshire. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. Care Inspectorate Scotland-regulated care homes across all Perth PH postcode areas including Perth city centre PH1, Kinnoull Hill PH2, Bridgend PH2, Scone PH2, Crieff PH7 and wider Perthshire PH postcodes. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Perth", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-perth/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Perth care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edge banding and chair back panels, communal lounge storage unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. Perth care homes range from purpose-built residential care facilities in the PH1 city-centre zone and Bridgend PH2 to converted properties in the North Inch corridor and Kinnoull Hill zone — and we specify the appropriate commercial-grade architectural film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Perth care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with Care Inspectorate Scotland-regulated care homes in Perth?",
    a: "Yes — we work with Care Inspectorate Scotland-regulated care homes, nursing homes and residential care facilities across Perth and Perthshire. The Care Inspectorate is the independent regulator for social care and social work in Scotland, responsible for registering, inspecting and grading care homes across all Scottish local authority areas including Perth and Kinross Council. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Perth care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Perth care homes?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial disinfection products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Perth care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Perth care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Perth is approximately 3 hours from our South Yorkshire base via the A1(M) north and M90 — a direct motorway-standard route into Perthshire.",
  },
  {
    q: "Which Perth and Perthshire postcodes do you cover for care home wrapping?",
    a: "We cover all Perth and surrounding PH postcode areas — PH1 (Perth city centre: city-centre care home and nursing home provision serving the Perth urban core; residential care facilities adjacent to the main civic and commercial zone; North Inch and South Inch corridor PH1 with care provision for the city-centre residential population; Perth Royal Infirmary PH1 generating a natural cluster of nursing home and residential care provision in the surrounding city zones), PH2 (Kinnoull, Bridgend, Scone: Kinnoull Hill PH2 — residential care provision in the established east-Perth residential zone; Bridgend PH2 — Perth&apos;s west-bank residential zone with community care home provision; Scone PH2 — village community care home provision north-east of Perth city; Cherrybank PH2 — suburban Perth residential zone with care home provision), PH7 (Crieff: Crieff is a Perthshire market town approximately 17 miles west of Perth with a distinct local care home estate serving the Strathearn valley; accessible from Perth and from South Yorkshire in a co-ordinated Tayside-Perthshire programme), PH8 (Dunkeld: Dunkeld is a Perthshire town approximately 15 miles north of Perth on the A9 corridor; local residential care provision on the southern Highland edge), PH16 (Pitlochry: Pitlochry is a Highland Perthshire tourist town approximately 25 miles north of Perth on the A9; seasonal and residential care provision serving the upper Perthshire population). WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) and M90.",
  },
];

export default function CareHomeWrapPerthPage() {
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
            <span className="text-foreground">Perth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Perth &amp; Perthshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Perth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Perth and Perthshire. Bedroom wardrobe door panels, bedside
            cabinets, nurses&apos; station counters, corridor doors, communal
            lounge panels and dining room furniture — wrapped without
            replacement. No construction noise, no wet trades, rooms usable
            the same day. Care Inspectorate Scotland-regulated care homes
            across all Perth PH postcodes covered. Approximately 3 hours from
            our South Yorkshire base via the A1(M) and M90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Perth Care Home Quote →
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
            Why Perth care homes use vinyl wrapping
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Perth is the principal city of Perth and Kinross, a large Scottish
              local authority area encompassing both the PH1-PH2 city zone and
              a wide rural Perthshire hinterland reaching north to Pitlochry and
              west to Crieff. Perth city sits at the junction of the A9 Highland
              corridor and the M90 motorway link to Edinburgh and central
              Scotland — a strategic position that makes it a natural regional
              service centre for care home provision across the broader
              Perthshire population.
            </p>
            <p>
              Vinyl wrapping allows Perth care homes to refresh bedroom
              furniture, corridor doors, nurses&apos; station counters and communal
              surfaces without the noise, disruption and cost of replacement.
              A single bedroom suite takes 2 to 3 hours — during a mealtime or
              while the resident is elsewhere — leaving the room fully usable
              the same day. For a Perth care home looking to refresh multiple
              rooms ahead of a Care Inspectorate inspection or a marketing
              photography day, vinyl wrapping is the fastest and least
              disruptive option available.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Perth via the A1(M) north and M90 — a direct motorway-standard
              route into Perthshire via Edinburgh and Kinross. We cover all
              Perth PH postcodes and can extend coverage to Crieff PH7,
              Dunkeld PH8 and Pitlochry PH16 within the same regional visit
              where care home programme volume justifies it. Perth can also
              be combined with Dundee — approximately 20 minutes east on the
              A90 — in a co-ordinated Tayside-Perthshire programme.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Perth care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panels across Perth care home bedrooms — wrapped
                to restore a uniform, clean appearance in 2 to 3 hours without
                removal or replacement. The most common individual surface
                request across Perth PH postcode care homes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinets
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet fascia panels and chest of drawer fronts in
                Perth care home bedrooms — matching the wardrobe finish for
                a unified bedroom appearance without furniture replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia panels and high-contact laminate surfaces at
                nurses&apos; stations across Perth care homes — refreshed in
                commercial-grade film without structural works, with edges
                sealed against cleaning chemical exposure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door leaf panels and door frame surrounds across Perth care
                home corridors — wrapped in a consistent finish to give a
                fresh, cohesive appearance throughout the facility without
                painting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lounge storage unit fronts, media wall panels and decorative
                surface cladding in Perth care home communal areas — refreshed
                in commercial-grade film without decant or communal area
                closure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Table edge banding, chair back panels and dining room storage
                unit fronts in Perth care home dining areas — wrapped to
                restore a clean, hygienic appearance without furniture
                disposal costs or room downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth care home vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-care-homes-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Dundee</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Dundee and Tayside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Inverness</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Inverness and the Highlands</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Care home vinyl wrapping across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Perth</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Perth student accommodation</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Get a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Perth care home enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Perth care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the care home, the surfaces you want to refresh and the
              number of rooms. We survey, specify and quote before any work
              begins. Resident-sensitive scheduling, no construction noise,
              rooms usable the same day. Approximately 3 hours from South
              Yorkshire via the A1(M) and M90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Perth Care Home Quote →
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
