import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Bristol | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Bristol and the South West — bedroom furniture surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Bristol BS postcodes and wider South West covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-bristol/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Bristol — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Bristol and the South West. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Bristol", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-bristol/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Bristol care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Bristol care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last in Bristol?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Bristol care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Bristol care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Do you work with CQC-registered care homes and nursing homes in Bristol?",
    a: "Yes — we work with CQC-registered care homes, nursing homes and residential care facilities across Bristol and the wider South West. Our scheduling approach is designed to work within the care environment: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Bristol care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "Which Bristol and South West postcodes do you cover for care home wrapping?",
    a: "We cover all Bristol BS postcodes — BS1 (city centre, Harbourside, Redcliffe), BS2 (St Pauls, Kingsdown, Cliftonwood), BS3 (Southville, Bedminster, Windmill Hill), BS4 (Knowle, Brislington, Totterdown), BS5 (Eastville, St George, Redfield), BS6 (Redland, Cotham, Westbury Park), BS7 (Bishopston, Horfield, Filton), BS8 (Clifton, Hotwells, Sneyd Park), BS9 (Stoke Bishop, Westbury-on-Trym, Henleaze), BS10 (Southmead, Henbury, Brentry), BS11 (Avonmouth, Sea Mills), BS13 (Hartcliffe, Bishopsworth, Whitchurch), BS14 (Stockwood, Whitchurch, Hengrove), BS15 (Kingswood, Warmley, Oldland Common), BS16 (Frenchay, Downend, Staple Hill), BS30 (Oldland, Cold Ashton), BS31 (Keynsham, Saltford) — plus the wider South West including Bath BA1/BA2, Weston-super-Mare BS23/BS24, Clevedon BS21, Nailsea BS48, Portishead BS20 and the M4/M5 corridor. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes to 2 hours from Bristol city centre via the M1 south.",
  },
];

export default function CareHomeWrapBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Bristol &amp; South West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across Bristol
            and the South West. Bedroom furniture, corridor doors, nurses&apos; station
            counters, communal lounges and dining room furniture refreshed without
            removal or replacement. Resident-sensitive scheduling, odour-free adhesives,
            rooms usable immediately after installation. All Bristol BS postcodes and
            the wider South West covered. Approximately 1 hour 45 minutes to 2 hours
            from our South Yorkshire base via the M1 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Bristol Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Bristol care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol care homes — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol has a large and growing care home sector serving the city&apos;s
              ageing population and the wider South West catchment. The Bristol City
              Council area alone has several dozen CQC-registered care homes, nursing
              homes and residential care facilities spread across BS1 to BS16 and the
              outer Bristol suburbs. The wider South Gloucestershire, North Somerset and
              Bath and North East Somerset area extends the Bristol care home market
              significantly — covering Kingswood BS15, Warmley BS30, Keynsham BS31,
              Weston-super-Mare BS23 and Bath BA1/BA2.
            </p>
            <p>
              Many Bristol care homes are based in converted Victorian and Edwardian
              residential properties in the inner suburbs — Cotham BS6, Clifton BS8,
              Westbury Park BS6, Bishopston BS7 and Henleaze BS9 — where the building
              fabric reflects the original residential architecture. Bedroom furniture
              in these properties is often 1990s or early-2000s chipboard-and-laminate
              fitted units, now ageing and worn, where wrapping offers a cost-effective
              route to a refreshed and dignified finish without full furniture
              replacement.
            </p>
            <p>
              Newer purpose-built care homes in the Bristol outer suburbs — Hartcliffe
              BS13, Stockwood BS14, Frenchay BS16 and the Kingswood BS15 corridor —
              often have standardised bedroom furniture suites installed at opening that
              are now 10 to 15 years old and due for refresh. For these sites, a
              room-by-room wrapping programme during low-occupancy periods or as a
              rolling bedroom-by-bedroom programme through the year can transform the
              standard of accommodation without any room being out of use overnight.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap not replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Bristol care homes choose wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedroom furniture replacement in an occupied care home involves
              temporary displacement of the resident, removal and disposal of
              existing furniture, delivery and installation of new furniture, and
              a period of disruption to the resident&apos;s environment that can be
              distressing — particularly for residents with dementia. For a 40-bedroom
              care home, a full furniture refresh by replacement can cost upward of
              £100,000 and take several months to execute safely.
            </p>
            <p>
              Vinyl wrapping removes all of those problems. The resident remains in
              their room or moves to a communal area for the 2 to 3 hours of
              installation. No furniture is removed. No disposal is needed. There is
              no paint, no solvent, no drying time and no overnight displacement. The
              room is returned to full use immediately after the installer leaves —
              with a completely fresh-looking finish at a fraction of the replacement
              cost.
            </p>
            <p>
              For Bristol care homes looking to meet CQC environment expectations,
              demonstrate investment in resident accommodation quality, or simply
              refresh the appearance of ageing furniture ahead of a regulatory
              inspection, vinyl wrapping offers a fast, cost-effective and
              resident-friendly route to a visible improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol care home surfaces we wrap
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door fronts are typically the most visible furniture
                surface in a care home bedroom. Worn, scratched or discoloured
                laminate can be wrapped in 30 to 45 minutes per door panel.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door fronts, drawer faces and top surfaces
                wrapped to a consistent finish — matching the wardrobe and
                chest of drawers as part of a full bedroom suite refresh.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor door panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor fire door leaf panels and bedroom door fronts
                absorb daily impact and contact marks. Wrapping refreshes
                the visual standard of the whole floor without repainting
                or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counter fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter front panels and side cladding at nurses&apos; station
                positions wrapped in durable commercial film — refreshing
                the appearance of the care home&apos;s central hub without
                structural works.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and dining furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels, dining table edges
                and chair back panels in communal areas wrapped during
                off-peak or overnight access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and entrance surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia cladding, entrance lobby panel
                surfaces and signage board bases wrapped to improve
                the first impression for families visiting Bristol
                care homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working method */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Bristol care home programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol care home programmes are planned in advance with the care home
              manager or facilities lead. We confirm access times, scheduling approach
              (room-by-room versus floor-by-floor), RAMS requirements and sign-off
              format before mobilisation. We do not arrive and start without a
              confirmed access plan.
            </p>
            <p>
              On-site, we co-ordinate room access directly with care staff. A typical
              bedroom suite — wardrobe, bedside cabinet, chest of drawers — takes 2 to
              3 hours including surface preparation and final inspection. Corridor
              access is by arrangement to minimise impact on resident movement. All
              materials are packed in and packed out — no waste is left on site.
            </p>
            <p>
              RAMS documentation is prepared as standard for every Bristol care home
              contract. Photographic sign-off — before and after images for each room
              or area — is provided on completion. For larger multi-floor programmes,
              we provide progress reports at the end of each day so the care home
              manager has a clear picture of progress.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Bristol for multi-day
              and multi-week programmes. The M1 south from Sheffield to Bristol takes
              approximately 1 hour 45 minutes to 2 hours in off-peak conditions.
              We stay locally during multi-day Bristol programmes rather than
              commuting, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bristol care home — get a survey and quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your care home details — number of bedrooms, primary
              surfaces, and your preferred scheduling approach — and we&apos;ll
              come back with a scoped proposal. We cover all Bristol BS postcodes
              and the wider South West.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Bristol Survey →
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
