import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping York | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across York and North Yorkshire — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All York YO postcodes and wider North Yorkshire covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-york/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping York — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across York and North Yorkshire. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all York YO postcodes and wider North Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "York", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-york/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in York care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. York and North Yorkshire care homes vary widely in building type — from purpose-built modern residential care facilities to converted Victorian and Georgian properties — and we specify the appropriate commercial-grade film for each surface condition and substrate type.",
  },
  {
    q: "Can wrapping be done in occupied rooms in York care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in York and North Yorkshire?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across York and North Yorkshire. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any York or North Yorkshire care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in York?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for York care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a York or North Yorkshire care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which York and North Yorkshire postcodes do you cover for care home wrapping?",
    a: "We cover all York and North Yorkshire YO postcodes — YO1 (York city centre — the historic walled city; care homes in the city centre and immediately adjacent residential zones, including a number of care facilities within converted period properties), YO10 (Fulford, Heslington — south York residential zone with care home provision serving the suburban population south of the city centre along the Fulford Road corridor), YO24 (Acomb, Dringhouses, Woodthorpe — west York residential zone with suburban care home provision), YO26 (Skelton, Rawcliffe, Poppleton — north-west York residential care sector), YO30 (Skelton on Ure, Clifton — north York residential zone with care home provision north of the city centre, including purpose-built residential care facilities along the Shipton Road and Skelton corridors), YO31 (Heworth, Tang Hall — north-east York residential care sector), YO32 (Strensall, Huntington, New Earswick — north-east York suburban care home zone). Beyond the city: Selby YO8, Malton YO17, Pickering YO18, Harrogate HG1, Northallerton DL6 and the wider North Yorkshire county area are also within reach. WRPX is based in South Yorkshire, approximately 1 hour from York via the A64.",
  },
];

export default function CareHomeWrapYorkPage() {
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
            <span className="text-foreground">York</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — York
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            York and North Yorkshire. Bedroom wardrobe door panels, bedside
            cabinet surfaces, corridor doors, nurses&apos; station counters,
            communal lounge panels and dining room furniture wrapped without
            replacement. CQC-regulated facilities across all York YO postcodes
            and wider North Yorkshire. Resident-sensitive scheduling, no
            construction noise, no wet trades, rooms usable the same day.
            Approximately 1 hour from our South Yorkshire base via the A64.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a York Care Home Quote →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York care homes — a distinctive North Yorkshire market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York has a well-established residential care sector, shaped by the
              city&apos;s mix of historic residential properties, newer purpose-built
              care facilities and a strong local and regional care home market
              serving both the York city population and the wider North Yorkshire
              catchment.
            </p>
            <p>
              North Yorkshire is one of the UK&apos;s largest counties by area, with a
              rural and semi-rural population across the Yorkshire Dales, North York
              Moors, the Vale of York and the coastal and market town zones from
              Scarborough to Harrogate and Northallerton. Care homes in North
              Yorkshire range from purpose-built residential care facilities in
              market towns and commuter belt suburbs to period properties converted
              to residential care use — many in the surrounding villages and market
              towns within easy reach of York city.
            </p>
            <p>
              The York city care home market includes residential homes, nursing
              homes and dementia care facilities across a range of building types and
              sizes. Converted Victorian and Edwardian residential properties in
              the YO24, YO26 and YO30 zones sit alongside modern purpose-built care
              developments in the Huntington YO32, Strensall YO32 and Selby YO8
              areas.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from York
              via the A64. We work with care home managers, facilities operators
              and FM contractors across York and North Yorkshire to schedule
              resident-sensitive refurbishment programmes that minimise disruption
              to daily care routines.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in York care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe and furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts, bedside cabinet surfaces and chest of
                drawer panels in resident bedrooms across York care homes —
                wrapped during brief room access windows to refresh the finish
                without disturbing the resident&apos;s daily routine.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors and door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door panels and fire door surfaces across York care home
                floors and wings wrapped to refresh the interior appearance without
                door replacement — one of the highest-impact visual improvements
                for a care home corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counter fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception and nurses&apos; station counter fascias in York care homes
                wrapped in commercial-grade film to refresh worn or dated surfaces
                — one of the most-touched surfaces in any care home and one that
                wears visibly faster than bedroom furniture.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room table edges, chair backs and dining room storage
                unit fronts in York care home dining rooms wrapped to refresh
                the dining environment — particularly important for the resident
                experience and for family visitor impressions.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and social area surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lounge unit fronts, media wall panels and communal storage
                surfaces in York care home social areas wrapped during scheduled
                access windows — refreshing shared spaces without the disruption
                of replacement or redecoration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and entrance surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, entrance lobby panels and visitor
                reception surfaces wrapped to maintain the first impression
                of York care home facilities for prospective residents, families
                and visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How resident-sensitive care home wrapping works in York
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We co-ordinate with the York care home manager or FM contractor
              before mobilisation to agree the access schedule — which rooms, which
              surfaces, which days and which access windows work around the
              residential care routine. We do not arrive and begin work without a
              confirmed schedule agreed in advance with the care team.
            </p>
            <p>
              In resident bedrooms, we access each room when the resident is
              in a communal area, at a meal or has agreed to brief supervised
              access. Wrapping a full bedroom suite — wardrobe door fronts,
              bedside cabinet panels and chest of drawers surfaces — typically
              takes 2 to 3 hours. The adhesive is water-based and odour-free.
              The only tools in use are hand squeegees and a low-temperature
              heat gun — no louder than a normal conversation. The room is
              fully usable when we leave. No wet paint, no drying time, no
              overnight absence required.
            </p>
            <p>
              For communal areas, dining rooms and corridor doors, we work
              around the daily schedule agreed with the care team. RAMS
              documentation is available for York care home contracts where
              required. Photographic sign-off is provided per room or per
              surface area on completion.
            </p>
            <p>
              We operate white-label throughout for FM contractors managing
              York care home portfolios — attending under your instructions,
              following your access protocols and reporting to your project
              manager.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related York and North Yorkshire services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Leeds</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across West Yorkshire</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across County Durham</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap York</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across York and North Yorkshire</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your York care home programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              York care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your York care home — postcode, size, primary
              surfaces to be refreshed and any scheduling constraints around
              the residential care programme. We&apos;ll come back with a
              proposal. FM contractor and multi-site enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a York Care Home Quote →
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
