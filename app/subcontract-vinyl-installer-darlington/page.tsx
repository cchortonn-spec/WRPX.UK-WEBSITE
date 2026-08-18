import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Darlington — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Darlington and the DL postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Darlington town centre, Lingfield Point, Newton Aycliffe, Teesside and the DL zone — white-label, photographic sign-off, A1(M) direct from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-darlington/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Darlington — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Darlington and the DL postcode zone. White-label available. WRPX covers Darlington town centre, Lingfield Point DL1 business park, Newton Aycliffe DL5, Aycliffe Business Park, Stockton-on-Tees TS18, Bishop Auckland DL14 and the DL postcode arc — A1(M) direct from South Yorkshire to junction 59."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Darlington", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-darlington/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Darlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Darlington is approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M) north from Doncaster through Wetherby, Boroughbridge and Leeming Bar to junction 59 at Darlington. The A1(M) is dual carriageway motorway standard the full length — straightforward mileage with predictable journey times. For programmes combining Darlington with Middlesbrough (20 minutes east via the A66), Stockton-on-Tees (15 minutes north-east via the A66/A135), Durham (20 minutes north on the A167) or Newcastle (45 minutes north on the A1(M)), we plan them as a DL/TS/NE corridor day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Darlington and DL postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Darlington and DL postcode work. We arrive in unbranded vehicles and carry out every installation under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Darlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Darlington town centre is a mix of Victorian commercial stock and modern retail — the covered Cornmill Shopping Centre, High Row pedestrianised main street and the surrounding Victorian terraces. Period frontages on Northgate and Tubwell Row require substrate assessment for external vinyls.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Darlington and Middlesbrough on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Darlington and Middlesbrough are approximately 20 minutes apart via the A66 east. For sign companies running A1(M) north programmes covering the DL and TS postcode zones, a Darlington–Middlesbrough combined day covers both urban zones efficiently. Darlington town centre and Lingfield Point in the morning, then A66 east to Middlesbrough in the afternoon — with Stockton-on-Tees (A135, 15 minutes from Darlington) as a natural intermediate stop.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Aycliffe Business Park and Darlington town centre in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Newton Aycliffe (DL5) and Aycliffe Business Park are 10 minutes south of Darlington via the A167. The business park is the largest employment site in County Durham — a mix of manufacturing, logistics and commercial occupiers. Fleet livery, warehouse graphics and industrial installation at Aycliffe combines efficiently with retail and office graphics in Darlington town centre on the same DL programme. One invoice, one documentation standard across both zones.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerDarlingtonPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Darlington &amp; the DL Postcode Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Darlington &amp; County Durham South
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Darlington and the DL postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A1(M) direct from South Yorkshire</strong>{" "}
                — junction 59 Darlington: 1 hour 45 minutes from Doncaster on motorway standard road
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Darlington town centre, Lingfield Point, Newton Aycliffe and the DL zone covered as a single programme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Darlington subcontract job
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Darlington */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Darlington — the A1(M) midpoint between South Yorkshire and Tyneside
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Darlington (DL1) sits at junction 59 on the A1(M) — the exact midpoint of
              the motorway corridor between South Yorkshire and Newcastle. It is not a satellite
              of Middlesbrough or of Durham. It is a market town of 100,000+ with its own
              commercial core, its own business parks and its own distinct DL postcode geography
              stretching west across County Durham.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The DL postcode zone covers a wide arc: DL1–DL3 cover Darlington town and the
              surrounding districts, DL5 and DL17 cover Newton Aycliffe and Chilton to the north,
              DL6 covers Northallerton — the North Yorkshire county town — to the south-east,
              DL7 covers Catterick and the A1(M) garrison zone, and DL14 covers Bishop Auckland
              to the west. This is not a single-city postcode — it is a broad market town
              and rural commercial arc.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Darlington town centre is centred on the Cornmill Shopping Centre (DL1) and
              the adjacent High Row — the pedestrianised main street with a mix of national
              retail and independent occupiers. The Victorian commercial fabric survives
              extensively: Northgate, Tubwell Row and Bondgate have period stone-fronted
              commercial buildings where external vinyl substrate assessment is relevant for
              print company briefs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and
              ready to apply. We prepare the surface, install to spec and deliver a signed-off
              photo pack. Your Darlington client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Darlington &amp; the DL zone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darlington town centre — Cornmill &amp; High Row</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls and branded retail and
                hospitality installations across Darlington town centre. The Cornmill
                Shopping Centre (DL1) is the primary managed retail environment — standard
                contractor access arrangements. High Row pedestrianised main street has
                a mix of national and independent retailers. Victorian commercial frontages
                on Northgate and Tubwell Row require substrate briefing for external
                vinyl applications — painted render and stone finishes common.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lingfield Point — DL1 business park</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lingfield Point is Darlington&apos;s primary commercial business park — a
                converted Victorian wool warehouse complex on the A67 north of Darlington
                town centre. It houses a mix of office, tech, creative and professional
                services occupiers. Office interior graphics, branded reception walls,
                wayfinding and floor graphics are the typical installation types.
                Modern commercial interiors within retained heritage shell — good
                substrate conditions for interior vinyl work.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Newton Aycliffe &amp; Aycliffe Business Park — DL5</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Newton Aycliffe (DL5) is 10 minutes south of Darlington via the A167 —
                a New Town designation housing Aycliffe Business Park, the largest
                employment site in County Durham. Over 300 businesses on site —
                manufacturing, logistics, food production, precision engineering and
                commercial occupiers including Hitachi Rail at Merchant Park. Fleet
                livery, warehouse graphics, vehicle wrap and corporate campus installations.
                DL5/DL17 covers the full Aycliffe and Chilton arc.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Northallerton — DL6 county town</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Northallerton (DL6) is the North Yorkshire county town — 15 minutes
                south-east of Darlington via the A167. The High Street is the primary
                commercial zone: an unusually long traditional high street with a mix
                of national retail, independent occupiers and period commercial frontages.
                North Yorkshire County Council headquarters at County Hall are a natural
                wayfinding and signage client in the town. Covered as a DL zone add-on
                when brief volumes justify the stop.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bishop Auckland — DL14</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bishop Auckland (DL14) is 15 minutes west of Darlington via the A688 —
                a market town in the Wear Valley with a distinct commercial core and
                the Auckland Castle Trust cultural quarter (Auckland Castle, Kynren
                amphitheatre, Spanish Gallery). Town centre retail and hospitality
                graphics, cultural venue branding and external graphics on the
                expanding castle estate. Bishop Auckland is a regeneration focus:
                growing branded installation volumes as the cultural quarter develops.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockton-on-Tees — TS18, 15 minutes east</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stockton-on-Tees (TS18) is 15 minutes east of Darlington via the A66 and
                A135 — the Tees Valley&apos;s historic market town on the River Tees.
                Stockton High Street is one of the widest high streets in England —
                significant branded retail and hospitality footprint. The Castlegate
                Shopping Centre and Swallow Hotel zone are the managed retail
                environments. Natural extension of a Darlington day eastward into the
                TS postcode zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A1(M) corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Darlington on the A1(M) — the natural midpoint for corridor programmes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Darlington at junction 59 sits midway along the A1(M) between South Yorkshire
              and Tyneside. Every A1(M) north programme from Sheffield or Doncaster passes
              through the Darlington interchange — it is not a detour, it is the route.
              For sign companies with installation work at multiple DL or TS zone sites,
              Darlington is the logical base for a County Durham and Teesside corridor day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The A66 east from junction 57 links Darlington directly to Middlesbrough
              (20 minutes) and Stockton-on-Tees (15 minutes). The A167 south connects
              to Newton Aycliffe (10 minutes), Bishop Auckland (15 minutes via A688)
              and Durham (20 minutes). The A167 north connects to Durham and on to
              Chester-le-Street. One installer covers the DL/TS corridor in a single
              efficiently planned day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For programmes that extend north to Newcastle, the A1(M) from Darlington
              to Gateshead/Newcastle interchange is 45 minutes — making a Darlington
              plus Newcastle programme feasible in a single long day with early start.
              Sunderland via the A19 is approximately 50 minutes from Darlington.
              We plan the route to maximise site coverage on A1(M) north corridor days.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Darlington &amp; the DL postcode zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cornmill Shopping Centre — DL1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Darlington&apos;s primary shopping centre — managed retail, standard
                contractor access. High Row pedestrianised main street adjacent.
                Mix of national multiples and independent retailers. Victorian
                frontage zone on Northgate/Tubwell Row for substrate briefing.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lingfield Point — DL1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Converted Victorian wool warehouse business park — tech, office,
                professional services. Office interior graphics, branded reception
                walls, wayfinding. Heritage shell with modern commercial interiors
                — good substrate conditions.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Aycliffe Business Park — DL5</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Largest employment site in County Durham. 300+ businesses —
                manufacturing, logistics, food, engineering. Hitachi Rail at
                Merchant Park. Fleet livery, warehouse graphics, vehicle
                wrapping. 10 minutes south via A167.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Northallerton — DL6</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                North Yorkshire county town — unusually long high street with
                national and independent retail. County Hall North Yorkshire.
                15 minutes south-east via A167. Add-on to Darlington
                day when volumes justify.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bishop Auckland — DL14</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Market town with Auckland Castle cultural quarter in active
                regeneration — Auckland Castle Trust, Kynren, Spanish Gallery.
                Growing branded installation zone. 15 minutes west via A688.
                Town centre retail and cultural venue graphics.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Catterick &amp; Scotch Corner — DL7/DL10</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Catterick Garrison (DL9) — major British Army garrison town,
                significant fleet livery and building graphics work. Catterick
                Racecourse (DL10) — corporate hospitality and venue branding.
                A1(M) junction 53 Scotch Corner — logistics and transport hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Darlington subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full DL postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Darlington and the DL zone are efficiently covered as part of a wider A1(M)
                north corridor programme — combining DL with TS (Middlesbrough/Stockton),
                NE (Newcastle/Gateshead), SR (Sunderland) or DH (Durham) where brief
                volumes justify it. If your programme includes multiple DL zone sites,
                include all addresses in the brief. We plan the day sequence to minimise
                dead mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Aycliffe industrial and Darlington town centre on the same programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Newton Aycliffe (DL5) and Darlington town centre (DL1) are 10 minutes apart
                via the A167. For programmes that combine fleet work or industrial graphics
                at Aycliffe Business Park with retail, office or hospitality graphics in
                Darlington town centre, include all addresses and we plan the most efficient
                day sequence. One invoice, one documentation standard, one installer
                across both zones.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Darlington or DL zone site in unbranded vehicles, introduce
                ourselves as the installation team, and carry out the work under your
                instructions throughout. Your client&apos;s experience is with your company at
                every stage — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Darlington installation is documented with before, during-installation
                and completed sign-off photographs. Photo packs delivered to you same day
                or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Darlington with Middlesbrough, Durham or Newcastle in one programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Darlington brief sits alongside Middlesbrough, Stockton, Durham or
                Newcastle, we plan them as a single A1(M) north corridor trip. One invoice,
                one documentation pack per site, one consistent installation standard across
                the full DL/TS/DH/NE postcode programme. No separate contractors for
                different parts of the corridor — one point of contact from Sheffield to
                Tyneside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Darlington subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Is Darlington covered separately from Middlesbrough?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Darlington (DL1) and Middlesbrough (TS1) are distinct commercial zones,
                20 minutes apart via the A66. Sign companies with programmes across both
                the DL and TS zones can have a single WRPX subcontract cover both — or
                we can cover Darlington as a standalone DL postcode day when volumes justify
                it without requiring a Middlesbrough visit on the same trip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Darlington and Newcastle on the same day?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Darlington to Newcastle is approximately 45 minutes via the A1(M) north to
                junction 65. For sign companies with programmes covering both DL and NE
                postcode zones, an A1(M) corridor day starting at Darlington and finishing
                in Newcastle or Gateshead is feasible with an early start — particularly
                for programmes that include Aycliffe or Northallerton as intermediate stops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work on NHS or local authority sites in the Darlington area?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Darlington Memorial Hospital (DL3) and other NHS sites in the DL
                postcode zone can be covered with RAMS documentation and DBS-checked crew
                where required. County Durham and Darlington NHS Foundation Trust covers
                the area — contact us early for NHS or local authority programmes to allow
                RAMS submission lead times. Wayfinding, department branding and floor
                graphics are the typical installation types in clinical settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the A1(M) North East corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Middlesbrough &amp; Teesside
            </Link>
            <Link href="/subcontract-vinyl-installer-newcastle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Newcastle &amp; Gateshead
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sunderland &amp; Wearside
            </Link>
            <Link href="/subcontract-vinyl-installer-carlisle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Carlisle &amp; Cumbria
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            View all coverage:{" "}
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
              Yorkshire subcontract hub
            </Link>{" "}
            ·{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              Commercial installation overview
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Ready to subcontract your Darlington or DL zone installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Darlington, DL postcode or County Durham south brief —
            installation type, site address, material spec and date requirements. We confirm
            quickly and plan DL dates as part of the A1(M) North East corridor, combining
            with Middlesbrough, Durham or Newcastle where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Darlington
            </Link>
            <Link href="/white-label-graphics-installation/" className="btn-secondary inline-block">
              White-label trade partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
