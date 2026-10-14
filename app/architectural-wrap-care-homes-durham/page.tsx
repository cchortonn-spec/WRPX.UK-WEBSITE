import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Durham | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across County Durham — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Durham DH and DL postcodes and wider County Durham covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-durham/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Durham — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across County Durham. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. CQC-regulated care homes across all Durham DH postcodes and wider County Durham, including Darlington DL1 and DL2."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Durham", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-durham/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Durham care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels are all within scope. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application. County Durham care homes — including purpose-built residential facilities and converted period properties across the DH and DL postcode areas — vary in substrate type and construction; we specify the appropriate commercial-grade film for each surface condition.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Durham care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with CQC-regulated care homes in Durham and County Durham?",
    a: "Yes — we work with Care Quality Commission (CQC) regulated care homes, nursing homes and residential care facilities across County Durham. Our scheduling approach co-ordinates access times with care management, uses only odour-free adhesives, keeps noise to a minimum and clears up completely on the day. We can provide RAMS documentation for any Durham or County Durham care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Durham?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Durham care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Durham or County Durham care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which Durham and County Durham postcodes do you cover for care home wrapping?",
    a: "We cover all County Durham DH postcodes and adjacent DL postcodes — DH1 (Durham City — the primary administrative and care centre for County Durham, including the Cathedral and Bailey area and the surrounding residential zones with established care provision), DH2 (Chester-le-Street — north Durham market town with residential care facilities serving the Lumley and Chester Moor commuter catchments), DH3 (Birtley, Pelton — south Tyneside fringe and north Durham residential care sector), DH4 (Houghton-le-Spring — east Durham residential and former mining community care provision), DH5 (Easington Lane, Murton — east County Durham residential care facilities), DH6 (Ferryhill, Chilton — south Durham coalfield area care provision), DH7 (Langley Park, Brandon — west Durham residential care facilities close to Durham City), DH8 (Consett, Leadgate — north-west Durham former steel town residential care sector), DH9 (Stanley, Annfield Plain — north-west Durham residential care provision), DL1 and DL2 (Darlington — the principal market town of County Durham&apos;s southern area, with a significant care home sector including purpose-built residential facilities and converted period properties). WRPX is based in South Yorkshire, approximately 1 hour and 30 minutes from Durham City via the A1(M) north.",
  },
];

export default function CareHomeWrapDurhamPage() {
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
            <span className="text-foreground">Durham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Durham &amp; County Durham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Durham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            County Durham. Bedroom wardrobe door panels, bedside cabinet surfaces,
            corridor doors, nurses&apos; station counters, communal lounge panels and
            dining room furniture wrapped without replacement. CQC-regulated
            facilities across all Durham DH postcodes, Darlington DL1 and DL2
            and the wider County Durham area. Resident-sensitive scheduling, no
            construction noise, no wet trades, rooms usable the same day.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Durham Quote →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why vinyl wrap for Durham care homes */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Vinyl wrapping for Durham care homes — why it works
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              County Durham has a significant and growing residential care sector,
              with a wide range of CQC-regulated care homes, nursing homes and
              residential facilities spread across Durham City DH1, Darlington
              DL1, Chester-le-Street DH2, Consett DH8 and the east and west
              Durham residential zones.
            </p>
            <p>
              Many Durham care homes operate in buildings constructed in the 1980s
              and 1990s with laminate furniture finishes that accumulate wear
              across years of daily use and intensive cleaning regimes. Replacing
              bedroom furniture or communal area units is expensive, disruptive
              and typically triggers a chain of associated works. Vinyl wrapping
              the existing surfaces delivers a fresh, durable finish at a fraction
              of the replacement cost — without removing residents from rooms or
              introducing wet trades, construction noise or extended downtime.
            </p>
            <p>
              For care home managers, facilities leads and group property teams
              overseeing County Durham sites, vinyl wrap is a practical refurbishment
              tool that can be scheduled around the care rota, delivered floor by
              floor or wing by wing, and completed without disruption to daily
              care routines.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Durham City via the A1(M) north. We plan Durham care home
              programmes in advance, working through blocks systematically and
              keeping total mobilisation costs predictable for North East England
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Durham care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The primary application across Durham care homes. Wardrobe door
                fronts in resident bedrooms wrapped in commercial-grade film
                to refresh the room finish — matching finishes across a floor
                or wing for visual consistency.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door fronts and top panels wrapped alongside
                wardrobes as part of an integrated bedroom refurbishment —
                restoring a uniform appearance across all bedroom furniture
                without full replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedroom and communal corridor doors wrapped to refresh faded,
                chipped or worn door finishes across Durham care home floors —
                a high-impact visual improvement that requires no door
                replacement or remedial painting.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascias and desk surfaces at nurses&apos; stations and
                reception points wrapped to restore appearance and protect
                substrate — specified with appropriate film grades for
                high-contact healthcare surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining room unit fronts and table edge surfaces wrapped where
                substrate condition allows — refreshing communal dining spaces
                without replacing furniture or repainting wet surfaces adjacent
                to food preparation areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and reception surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lounge unit fronts, media wall panels and reception desk fascias
                wrapped to maintain the standard of shared social spaces and
                entrance areas — the first impression for residents, families
                and CQC inspection teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Durham care home vinyl wrap programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Durham care home programmes are planned in advance with the care home
              manager, facilities lead or group property team. We confirm the
              schedule — which wings, which floors, what surfaces — before
              mobilisation, and work systematically through the programme to
              maximise room throughput within the agreed visiting pattern.
            </p>
            <p>
              A typical Durham care home bedroom suite — wardrobe and bedside
              cabinet — takes approximately 2 to 3 hours per room. A full floor
              of eight to ten rooms can typically be completed in a working day
              by an experienced team. For larger County Durham programmes spanning
              multiple wings or floors, we plan multi-day site visits with
              overnight stays to maintain productivity without long daily commutes
              from South Yorkshire.
            </p>
            <p>
              We co-ordinate access times with care staff, avoid mealtimes and
              activities where instructed, use only odour-free water-based
              adhesives and operate at no higher noise level than normal conversation.
              Rooms are fully usable on the day of installation. RAMS documentation
              and photographic sign-off are provided as standard.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Durham care home vinyl wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Durham and North East services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap — Overview</p>
              <p className="mt-1 text-xs text-muted">Full care home vinyl wrapping service</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Newcastle</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across Tyneside</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation-durham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Student Accommodation Wrap Durham</p>
              <p className="mt-1 text-xs text-muted">PBSA vinyl wrapping across Durham and County Durham</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Architectural Vinyl Film</p>
              <p className="mt-1 text-xs text-muted">Full architectural wrapping service overview</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Leeds</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for care homes across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get a scoped proposal for your Durham care home programme</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Durham care home vinyl wrapping — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about your Durham care home — name and postcode, approximate
              number of bedrooms, primary surfaces to be refreshed and whether you
              need the work phased around the care rota. We&apos;ll come back with a
              scoped programme proposal and price. Group portfolios and multi-site
              enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Durham Quote →
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
