import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Rochdale — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Rochdale, Oldham and the M62 east corridor for sign companies, print houses and fit-out contractors. WRPX covers Rochdale town centre, Oldham town centre, Trafford Park east and the OL postcode zone — white-label, photographic sign-off, M62 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-rochdale/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Rochdale — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Rochdale, Oldham and the M62 east corridor. White-label available. WRPX covers Rochdale town centre, Oldham town centre, Kingsway Business Park, Middleton and the OL postcode zone — M62 from South Yorkshire via Huddersfield and the M62/M60 interchange."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Rochdale", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-rochdale/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Rochdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rochdale is approximately 1 hour to 1 hour 15 minutes from our South Yorkshire base via the M1 north from Sheffield to the M62 west, continuing through Huddersfield and the Pennine crossing to junction 20 for Rochdale. The M62 is the primary axis — the same motorway that connects our base in South Yorkshire to the greater Manchester conurbation. For programmes combining Rochdale with Oldham (OL postcodes), Bolton or Manchester, we plan them as a single M62 east day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Rochdale and Oldham jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Rochdale, Oldham and OL postcode installations under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Rochdale and Oldham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Rochdale and Oldham town centres have a mix of Victorian civic architecture and modern retail development — Rochdale's Grade I listed Town Hall being the most prominent period building in the central zone.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Rochdale, Oldham and Manchester in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Rochdale, Oldham and Manchester form a natural northern arc of Greater Manchester connected by the M60 orbital. Rochdale is 15 minutes from Oldham via the A671, and both are under 30 minutes from Manchester city centre via the M60. For a sign company running a Greater Manchester programme covering Manchester city centre, Salford, Rochdale and Oldham, a two-day programme covers the full area with one subcontract — one briefing, one documentation standard, one invoice.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Rochdale with Bolton or Bury in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Rochdale, Bury and Bolton form a northern arc of Greater Manchester. Bury is 8 minutes from Rochdale via the A58. Bolton is 20 minutes from Rochdale via the A58 through Bury or the M66/A56 corridor. For sign companies running programmes across the Greater Manchester north, including BL and OL postcode zones, a Bolton–Bury–Rochdale day is a natural sequence — one installer covering the northern arc in one day.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerRochdalePage() {
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
            Subcontract · Rochdale &amp; Oldham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Rochdale &amp; Oldham
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Rochdale, Oldham and the OL postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 direct from South Yorkshire</strong>{" "}
                — Rochdale reached via M1/M62 west from Sheffield through Huddersfield and the Pennine crossing
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Rochdale, Oldham, Bury and Bolton covered as a single Greater Manchester north programme</span>
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
              Discuss a Rochdale subcontract job
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

      {/* Why Rochdale & Oldham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Rochdale &amp; Oldham — the M62 eastern arc of Greater Manchester
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Rochdale and Oldham occupy the north-eastern arc of Greater Manchester — two towns
              with distinct commercial centres linked to each other and to the wider Greater Manchester
              conurbation by the M60 orbital and a dense network of A-roads. The OL postcode zone
              covers both boroughs: OL1 to OL4 for Oldham, OL11 to OL16 for Rochdale, with
              Middleton (OL11), Heywood (OL10) and Shaw (OL2) in between.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From an installation logistics perspective, Rochdale and Oldham sit at the eastern end
              of the M62 Greater Manchester zone. The M62 at junction 20 (Rochdale) is where the
              trans-Pennine motorway emerges from the Pennine crossing — connecting South Yorkshire
              and West Yorkshire commercial centres directly to Rochdale and the wider OL postcode
              zone without going through central Manchester. For sign companies running M62 corridor
              programmes, Rochdale is the first significant stop into Greater Manchester from the east.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Rochdale town centre has a notable civic character — the Grade I listed Town Hall
              (1871, Waterhouse) on The Esplanade is one of the finest examples of Victorian Gothic
              civic architecture in the north of England. The town centre commercial zone around
              the Rochdale Exchange shopping centre, Yorkshire Street and The Butts provides
              standard modern retail installation stock. Oldham town centre is distinct from Rochdale —
              a separate commercial zone 9 miles south-east, centred on Oldham town centre
              shopping and the Metrolink terminus, with Kingsway Business Park (OL9) to the west
              providing a significant out-of-town commercial and light industrial footprint.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Rochdale or Oldham client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Rochdale &amp; Oldham
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Rochdale town centre — Exchange and Yorkshire Street</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Rochdale town centre. The
                Rochdale Exchange shopping centre provides modern managed retail environment
                with contractor access arrangements. Yorkshire Street and the wider town centre
                offer a mix of period commercial buildings and modern retail units — brief with
                building description for any non-standard frontage.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Oldham town centre &amp; Metrolink terminus</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Oldham town centre — Spindles Town Square, the Old Town Hall and Oldham
                Metrolink interchange. Modern retail centre environment alongside period civic
                buildings. Oldham is a distinct commercial zone from Rochdale — 9 miles south-east
                via the A671, 20 minutes. Combined Rochdale and Oldham programmes planned
                as a single OL postcode day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kingsway Business Park — OL9</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kingsway Business Park (Oldham, OL9) is a significant out-of-town commercial and
                light industrial development on the western side of Oldham — modern commercial
                stock, corporate office buildings, logistics and distribution units. Office interior
                graphics, fleet livery, reception feature walls and wayfinding systems.
                Vehicle access throughout the park is straightforward.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middleton &amp; Heywood — OL10/OL11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Middleton (OL11) and Heywood (OL10) sit in the OL postcode zone between
                Rochdale and Manchester — Middleton Arena and Middleton town centre, Heywood
                Distribution Park (one of the North West&apos;s largest logistics hubs). Fleet
                wraps and logistics vehicle livery, warehouse graphics, distribution centre
                signage and wayfinding. Covered as part of the Rochdale or Manchester
                subcontract day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shaw &amp; Royton — OL2</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shaw (OL2) and Royton (OL2) are immediately north of Oldham — commercial
                estates, industrial units and local retail serving the OL2 postcode zone.
                Standard modern commercial stock — glazed shopfronts and aluminium fascias.
                Included within the Oldham subcontract day when brief volumes in the OL2
                zone justify the additional stop.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bury — BL9, between Rochdale and Bolton</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bury (BL9) sits 8 minutes south-west of Rochdale via the A58 — The Rock
                shopping centre, Bury town centre and the Bury industrial and commercial
                estate. Bury is a natural intermediate point between Rochdale and Bolton
                on a northern Greater Manchester programme day. Combined OL/BL programmes
                covering Rochdale, Bury and Bolton handled as a single subcontract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/subcontract-vinyl-installer-bolton/" className="text-accent hover:underline">
                  Bolton subcontract installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M62 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Rochdale in the M62 east corridor — South Yorkshire to Greater Manchester without central Manchester
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M62 runs west from the M1 junction at Lofthouse (Leeds) across the Pennines to
              the M60 Manchester orbital — passing through Huddersfield, Brighouse and Rochdale
              on the way. For a WRPX vehicle travelling from South Yorkshire to Rochdale,
              the M62 at junction 20 is the direct exit: no need to enter Manchester city centre,
              no M60 city-side congestion.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies managing M62 corridor programmes, this means Huddersfield,
              Rochdale and Oldham all sit on the same trans-Pennine axis as Leeds and Bradford —
              a single continuous line from South Yorkshire through West Yorkshire into Greater
              Manchester&apos;s eastern boroughs. One WRPX subcontract covers the entire M62 arc from
              Sheffield to the OL postcode zone, including Huddersfield, Brighouse, Halifax and
              the Calderdale valley on the way west.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M60 orbital connects Rochdale south to Manchester and west to Bolton and Wigan —
              making OL an efficient base for a Greater Manchester north day. Programmes covering
              Manchester city centre, Salford Quays, Bolton (BL) and Rochdale/Oldham (OL) are
              planned over two days, with one WRPX subcontract for the full Greater Manchester
              multi-borough scope.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Rochdale &amp; Oldham
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Rochdale Exchange — OL16</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Rochdale&apos;s primary shopping centre — managed retail environment with contractor
                access requirements. Modern glazed shopfronts and aluminium fascias. Yorkshire
                Street and The Butts adjacent for high-street retail and hospitality
                installations. The Esplanade civic zone nearby with period architecture.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Oldham Spindles — OL1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Oldham town centre retail hub — Spindles Town Square, Old Town Hall and the
                Metrolink terminus. Modern managed retail centre alongside period civic
                buildings. Oldham is distinct from Rochdale: separate commercial zone,
                9 miles south-east, planned as its own half-day within the OL programme.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kingsway Business Park — OL9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Out-of-town commercial and light industrial — modern office buildings,
                logistics units and corporate occupiers. Office interior graphics, fleet
                livery and wayfinding. Western Oldham M60 access via A627(M)/M60.
                Straightforward vehicle access across the park.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Heywood Distribution Park — OL10</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                One of the North West&apos;s largest logistics and distribution hubs —
                fleet wraps, warehouse graphics and logistics vehicle livery. Heywood
                (OL10) sits between Rochdale and Bury. Covered on the Rochdale day
                when logistics or fleet briefs are included.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middleton — OL11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Middleton town centre and Middleton Arena (OL11) — retail, leisure
                and commercial stock south of Rochdale on the A664/A576 corridor.
                Natural intermediate stop between Rochdale and Manchester on an
                M60 west programme day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bury — BL9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                8 minutes south-west of Rochdale via A58. The Rock shopping centre,
                Bury town centre high street and commercial estates. Bridge point
                between Rochdale OL and Bolton BL on the Greater Manchester north arc.
                Natural add-on to a Rochdale subcontract day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Rochdale subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full OL postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Rochdale and Oldham are efficiently covered as part of a wider Greater Manchester
                north programme — combining OL with BL (Bolton/Bury), M (Manchester) or
                HX/HD (trans-Pennine West Yorkshire) where brief volumes justify it.
                If your programme includes multiple OL zone sites, include all addresses
                in the brief. We plan the day sequence to minimise dead mileage and confirm
                feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for period buildings in Rochdale town centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Rochdale town centre has genuine surface variation — the Victorian Gothic civic
                quarter around the Town Hall, period commercial buildings on Yorkshire Street
                and modern retail glazing in the Exchange. For any installation on a period or
                non-standard frontage, brief us with the full site address and a description of the
                frontage. We confirm surface approach before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Rochdale or Oldham site in unbranded vehicles, introduce ourselves
                as the installation team, and carry out the work under your instructions throughout.
                Your client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Rochdale and Oldham installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Rochdale with Huddersfield, Leeds and South Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Rochdale brief sits alongside Huddersfield, Leeds or other M62 corridor jobs,
                we plan them as a single trans-Pennine day. One invoice, one documentation pack
                per site, one consistent installation standard across Yorkshire and Greater Manchester.
                No separate Yorkshire and Greater Manchester subcontractors — one point of
                contact from Sheffield to the OL postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Rochdale subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Oldham separately from Rochdale?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Rochdale and Oldham are both OL postcode zones — they are planned as one
                programme. The two town centres are 9 miles apart via the A671, approximately
                15 minutes. If your programme includes both Rochdale and Oldham sites, include
                all addresses in the brief and we plan them within the same OL postcode day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Rochdale and Manchester on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Rochdale to Manchester city centre is approximately 25 minutes via the M60
                or A664 south. For sign companies with programmes covering Manchester city
                centre and Rochdale/Oldham, a combined OL/M programme typically runs one
                zone in the morning and one in the afternoon. Salford Quays and MediaCityUK
                on the Manchester west side can also be added, subject to installation volumes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Rochdale and Oldham jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Rochdale and OL postcode work. We arrive
                in unbranded vehicles and carry out every installation under your brand. Your
                client never knows WRPX was involved. Full photographic documentation
                delivered in your agreed format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bolton &amp; Greater Manchester North
            </Link>
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Burnley &amp; East Lancashire
            </Link>
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-halifax/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Halifax &amp; Calderdale
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
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
            Ready to subcontract your Rochdale or Oldham installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Rochdale, Oldham or OL postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and plan OL dates as part
            of the M62 East corridor, combining with Manchester, Bolton, Huddersfield or Halifax
            where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Rochdale
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
