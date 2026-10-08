import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Cardiff | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Cardiff, the Vale of Glamorgan and the wider South Wales area — bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses&apos; station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All CF postcodes covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-cardiff/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Cardiff — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Cardiff city and the wider South Wales area. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Cardiff", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-cardiff/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Cardiff care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Cardiff care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "Do you work with Care Inspectorate Wales regulated care homes in Cardiff?",
    a: "Yes — we work with Care Inspectorate Wales (CIW) regulated care homes, nursing homes and residential care facilities across Cardiff city and the wider South Wales region. Wales's care homes are regulated by Care Inspectorate Wales rather than the CQC, which applies in England, but our scheduling approach is the same: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Cardiff area care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "How long does care home vinyl wrapping last in Cardiff?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Cardiff care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Cardiff care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Which Cardiff postcodes do you cover for care home wrapping?",
    a: "We cover all Cardiff and wider South Wales CF postcodes — CF10 (Cardiff city centre, Butetown, Roath park, Cathays eastern boundary), CF11 (Pontcanna, Canton, Riverside, Leckwith), CF14 (Whitchurch, Rhiwbina, Llanishen, Heath, Birchgrove, Thornhill), CF15 (Radyr, Morganstown, Creigiau, Pentyrch, Gwaelod-y-Garth), CF23 (Pentwyn, Llanishen east, Cyncoed, Cyncoedd), CF24 (Roath, Penylan, Splott, Adamsdown), CF3 (Rumney, St Mellons, Pontprennau, Llanrumney), CF5 (Canton south, Ely, Fairwater, Llandaff, Michaelston-super-Ely), CF62–CF64 (Barry, Penarth, Sully — Vale of Glamorgan), CF83 (Caerphilly, Bedwas, Trethomas — Caerphilly county borough). The South Wales Valleys corridor — Pontypridd CF37, Rhondda CF40–CF42, Merthyr Tydfil CF47/CF48, Aberdare CF44, Mountain Ash CF45 — is within our extended South Wales service area. WRPX is based in South Yorkshire, approximately 2 hours 45 minutes to 3 hours 30 minutes from Cardiff via the M1 south, M42/M5 junction and M4 west across the Severn crossing.",
  },
];

export default function CareHomeWrapCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Cardiff city and the wider South Wales area — the Vale of Glamorgan,
            Caerphilly and the South Wales Valleys corridor. Bedroom furniture,
            corridor doors, nurses&apos; station counters, communal lounges and dining
            room furniture refreshed without removal or replacement. Resident-sensitive
            scheduling, odour-free adhesives, rooms usable immediately after
            installation. All CF postcodes covered. Approximately 2 hours 45 minutes
            to 3 hours 30 minutes from our South Yorkshire base via the M1 south,
            M42/M5 and M4 west.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Cardiff Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Cardiff care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff care homes — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is the capital city of Wales and its largest urban centre,
              with a population of approximately 365,000 within the city boundary
              and a substantially larger catchment extending across the Vale of
              Glamorgan, Caerphilly county borough and the South Wales Valleys
              corridor. Cardiff&apos;s care home sector is regulated by Care Inspectorate
              Wales — the equivalent body to the CQC in England and the Care
              Inspectorate in Scotland — and the city has a significant and growing
              residential and nursing care provision reflecting Wales&apos;s ageing
              population.
            </p>
            <p>
              Cardiff&apos;s care home stock is particularly concentrated in the
              established residential suburbs. Rhiwbina CF14 and Whitchurch CF14
              in the north of the city — consistently among Cardiff&apos;s most
              prosperous residential neighbourhoods — have a high density of care
              and nursing homes within large Victorian, Edwardian and interwar
              properties. The Pontcanna CF11 and Canton CF11 area in the west,
              Cyncoed CF23 to the north-east and the Penarth CF64 and Barry CF62
              coastal zones in the Vale of Glamorgan are similar in character,
              with established care home provision embedded in owner-occupier streets.
            </p>
            <p>
              The South Wales Valleys corridor — the former coalfield communities
              north of Cardiff across Pontypridd CF37, the Rhondda Valleys CF40–CF42,
              Merthyr Tydfil CF47 and the surrounding area — has its own significant
              care home provision, serving a demographic that includes some of the
              oldest communities in Wales with the highest proportion of older
              residents and corresponding care home demand.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Cardiff for multi-day
              programmes. The M1 south from Doncaster connects via the M42 junction,
              then the M5 south to the M4 west at Bristol, crossing the Severn
              at the Second Severn Crossing into South Wales and continuing into
              Cardiff — approximately 2 hours 45 minutes to 3 hours 30 minutes
              in off-peak conditions. We stay locally during multi-day Cardiff
              programmes rather than commuting.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap not replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Cardiff care homes choose wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedroom furniture replacement in an occupied care home involves
              temporary displacement of the resident, removal and disposal of
              existing furniture, delivery and installation of new furniture, and
              a period of disruption to the resident&apos;s environment that can be
              distressing — particularly for residents with dementia or other
              cognitive needs. For a 40-bedroom Cardiff care home, a full furniture
              refresh by replacement can cost upward of £100,000 and take several
              months to execute safely.
            </p>
            <p>
              Vinyl wrapping removes all of those problems. The resident remains in
              their room or moves to a communal area for the 2 to 3 hours of
              installation. No furniture is removed. No disposal is needed. There
              is no paint, no solvent, no drying time and no overnight displacement.
              The room is returned to full use immediately after the installer leaves
              — with a completely fresh-looking finish at a fraction of the
              replacement cost.
            </p>
            <p>
              For Cardiff care homes looking to meet Care Inspectorate Wales
              environment expectations, demonstrate investment in resident
              accommodation quality, or simply refresh the appearance of ageing
              furniture ahead of a regulatory review, vinyl wrapping offers a fast,
              cost-effective and resident-friendly route to a visible improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff care home surfaces we wrap
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
                Corridor fire door leaf panels and bedroom door fronts absorb
                daily impact and contact marks. Wrapping refreshes the visual
                standard of the whole floor without repainting or door replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counter fascias
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter front panels and side cladding at nurses&apos; station
                positions wrapped in durable commercial film — refreshing the
                appearance of the care home&apos;s central hub without structural works.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge and dining furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Storage unit fronts, media wall panels, dining table edges and
                chair back panels in communal areas wrapped during off-peak or
                overnight access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Reception and entrance surfaces
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascia cladding, entrance lobby panel surfaces
                and signage board bases wrapped to improve the first impression
                for families visiting Cardiff care homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working method */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Cardiff care home programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff care home programmes are planned in advance with the care home
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
              RAMS documentation is prepared as standard for every Cardiff care home
              contract. Photographic sign-off — before and after images for each room
              or area — is provided on completion. For larger multi-floor programmes,
              we provide progress reports at the end of each day so the care home
              manager has a clear picture of progress.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Cardiff for multi-day
              and multi-week programmes. The M1 south from Doncaster connects via the
              M42, M5 and M4 west — crossing the Severn at the Second Severn Crossing
              into South Wales — approximately 2 hours 45 minutes to 3 hours 30
              minutes in off-peak conditions. We stay locally during multi-day Cardiff
              programmes, ensuring an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Cardiff care home — get a survey and quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your care home details — number of bedrooms, primary surfaces,
              and your preferred scheduling approach — and we&apos;ll come back with a
              scoped proposal. We cover all CF postcodes across Cardiff city, the
              Vale of Glamorgan and the wider South Wales area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Cardiff Survey →
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
