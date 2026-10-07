import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Glasgow | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Glasgow, East Renfrewshire, South Lanarkshire, East Dunbartonshire and the wider Greater Glasgow area — bedroom furniture surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All G, PA, ML and G61-G78 postcodes covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-glasgow/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Glasgow — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Glasgow city and the Greater Glasgow area. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Glasgow", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-glasgow/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Glasgow care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Glasgow care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last in Glasgow?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Glasgow care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Glasgow care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Do you work with CQC-registered and Care Inspectorate regulated care homes in Glasgow?",
    a: "Yes — we work with Care Inspectorate regulated care homes, nursing homes and residential care facilities across Glasgow city and the wider Greater Glasgow and Clyde area. Scotland's care homes are regulated by the Care Inspectorate (formerly the Care Commission) rather than the CQC, which applies in England, but our scheduling approach is the same: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Glasgow area care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "Which Glasgow postcodes do you cover for care home wrapping?",
    a: "We cover all Glasgow G postcodes — G1 (Merchant City, Glasgow city centre), G2 (Blythswood, Charing Cross, Cowcaddens), G3 (Kelvingrove, Finnieston, Yorkhill, Woodlands), G4 (Townhead, Cowcaddens), G11 (Partick, Jordanhill, Broomhill), G12 (Hillhead, Hyndland, Dowanhill, Great Western Road), G13 (Knightswood, Scotstoun, Whiteinch), G14 (Whiteinch, Scotstoun), G20 (Maryhill, Ruchill, Possil Park), G21 (Springburn, Balornock, Barmulloch), G22 (Possilpark, Lambhill, Milton), G23 (Summerston, Gilshochill), G31 (Dennistoun, Camlachie, Shettleston west), G32 (Tollcross, Sandyhills, Carntyne), G33 (Riddrie, Millerston, Easterhouse west), G34 (Easterhouse, Barlanark, Shettleston north), G40 (Bridgeton, Calton, Dalmarnock), G41 (Pollokshields, Crosshill, Strathbungo), G42 (Govanhill, Mount Florida, Battlefield), G43 (Pollokshaws, Mansewood, Shawlands), G44 (Langside, Cathcart, Muirend, Newlands), G45 (Castlemilk, Croftfoot, King's Park), G46 (Giffnock, Whitecraigs, Thornliebank), G51 (Ibrox, Cessnock, Govan), G52 (Cardonald, Mosspark, Penilee), G53 (Pollok, Nitshill, Househillwood), G61 (Bearsden), G62 (Milngavie), G63 (Blanefield, Strathblane), G64 (Bishopbriggs, Auchinairn, Torrance), G66 (Kirkintilloch, Lenzie), G67 (Cumbernauld), G68 (Cumbernauld east), G69 (Baillieston, Mount Vernon, Shettleston east), G71 (Uddingston, Bothwell, Tannochside), G72 (Cambuslang, Rutherglen east), G73 (Rutherglen), G74 (East Kilbride), G75 (East Kilbride south), G76 (Clarkston, Carmunnock, Busby, Eaglesham), G77 (Newton Mearns, Neilston) — plus PA postcodes in Renfrewshire and ML postcodes in North and South Lanarkshire. WRPX is based in South Yorkshire, approximately 3 hours to 3 hours 30 minutes from Glasgow city centre via the M1 north, M62 west and M74 north.",
  },
];

export default function CareHomeWrapGlasgowPage() {
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
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Glasgow &amp; Greater Glasgow
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across
            Glasgow city and the Greater Glasgow area — East Renfrewshire, South
            Lanarkshire, East Dunbartonshire and North Lanarkshire. Bedroom furniture,
            corridor doors, nurses&apos; station counters, communal lounges and dining
            room furniture refreshed without removal or replacement. Resident-sensitive
            scheduling, odour-free adhesives, rooms usable immediately after
            installation. All G, PA and ML postcodes covered. Approximately 3 hours
            to 3 hours 30 minutes from our South Yorkshire base via the M1 north,
            M62 west and M74 north.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Glasgow Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Glasgow care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow care homes — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is Scotland&apos;s largest city and one of the UK&apos;s most
              significant care home markets, with a population of approximately
              635,000 within the city boundary and a much larger catchment across
              the Greater Glasgow and Clyde health board area — covering the
              surrounding council areas of East Renfrewshire, South Lanarkshire,
              East Dunbartonshire, West Dunbartonshire, Renfrewshire and Inverclyde.
              The city has a substantial number of CQC-equivalent Care Inspectorate
              registered care homes, nursing homes and residential care facilities.
            </p>
            <p>
              Glasgow&apos;s care home stock is heavily concentrated in the prosperous
              residential suburbs. The East Renfrewshire commuter belt — Giffnock G46,
              Whitecraigs G46, Newton Mearns G77, Clarkston G76, Barrhead G78 and
              Eaglesham G76 — has some of the highest care home densities in the
              Glasgow area, reflecting the older and more affluent demographic of
              these south-side suburbs. Bearsden G61 and Milngavie G62 in East
              Dunbartonshire, and Lenzie G66 and Bishopbriggs G64 in the north,
              follow a similar pattern.
            </p>
            <p>
              In the inner city, established residential areas with strong owner-occupier
              histories — Hyndland G12, Dowanhill G12, Partick G11, Broomhill G11,
              Pollokshields G41 and Shawlands G43 — also have care home provision in
              larger Victorian and Edwardian properties converted for residential care
              use. This older property stock, with furniture installed in the 1980s
              and 1990s, is precisely where vinyl wrap refurbishment delivers the
              most consistent value compared to full furniture replacement.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Glasgow for multi-day
              programmes. The M1 north from Doncaster connects via the M62 west at
              Lofthouse junction, then north-west via the M6 and A74(M) into Scotland,
              joining the M74 into Glasgow city centre — approximately 3 hours to
              3 hours 30 minutes in off-peak conditions. We stay locally during
              multi-day Glasgow programmes rather than commuting.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap not replace */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Glasgow care homes choose wrapping over replacement
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bedroom furniture replacement in an occupied care home involves
              temporary displacement of the resident, removal and disposal of existing
              furniture, delivery and installation of new furniture, and a period of
              disruption to the resident&apos;s environment that can be distressing
              — particularly for residents with dementia or other cognitive needs.
              For a 40-bedroom Glasgow care home, a full furniture refresh by
              replacement can cost upward of £100,000 and take several months to
              execute safely.
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
              For Glasgow care homes looking to meet Care Inspectorate environment
              expectations, demonstrate investment in resident accommodation quality,
              or simply refresh the appearance of ageing furniture ahead of a
              regulatory inspection, vinyl wrapping offers a fast, cost-effective and
              resident-friendly route to a visible improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow care home surfaces we wrap
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
                the first impression for families visiting Glasgow
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
            How Glasgow care home programmes work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow care home programmes are planned in advance with the care home
              manager or facilities lead. We confirm access times, scheduling approach
              (room-by-room versus floor-by-floor), RAMS requirements and sign-off
              format before mobilisation. We do not arrive and start without a confirmed
              access plan.
            </p>
            <p>
              On-site, we co-ordinate room access directly with care staff. A typical
              bedroom suite — wardrobe, bedside cabinet, chest of drawers — takes 2 to
              3 hours including surface preparation and final inspection. Corridor
              access is by arrangement to minimise impact on resident movement. All
              materials are packed in and packed out — no waste is left on site.
            </p>
            <p>
              RAMS documentation is prepared as standard for every Glasgow care home
              contract. Photographic sign-off — before and after images for each room
              or area — is provided on completion. For larger multi-floor programmes,
              we provide progress reports at the end of each day so the care home
              manager has a clear picture of progress.
            </p>
            <p>
              WRPX is based in South Yorkshire and travels to Glasgow for multi-day
              and multi-week programmes. The M1 north from Doncaster connects via the
              M62 west, then the M6 north and A74(M)/M74 north into Glasgow — approximately
              3 hours to 3 hours 30 minutes in off-peak conditions. We stay locally
              during multi-day Glasgow programmes rather than commuting, ensuring
              an early start on site each day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Glasgow care home — get a survey and quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us your care home details — number of bedrooms, primary surfaces,
              and your preferred scheduling approach — and we&apos;ll come back with a
              scoped proposal. We cover all G, PA and ML postcodes across Glasgow
              city and the wider Greater Glasgow area.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Glasgow Survey →
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
