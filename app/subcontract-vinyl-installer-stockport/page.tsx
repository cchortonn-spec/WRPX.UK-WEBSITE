import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Stockport — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Stockport and the SK postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Stockport town centre, Cheadle, Hazel Grove, Bramhall, Macclesfield and the Manchester Airport commercial zone — white-label, photographic sign-off, M60 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-stockport/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Stockport — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Stockport and the SK postcode zone. White-label available. WRPX covers Stockport town centre, Merseyway Shopping Centre, Cheadle, Hazel Grove, Bramhall, Macclesfield, Wilmslow and the Manchester Airport commercial and logistics zone — M60 from South Yorkshire via Manchester."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Stockport", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-stockport/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Stockport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockport is approximately 1 hour to 1 hour 10 minutes from our South Yorkshire base via the M1 north to the M62 west, joining the M60 Manchester orbital at junction 12 and continuing south on the M60 to Stockport at junctions 1 to 5. The M60 is the direct route — no need to enter Manchester city centre. For programmes combining Stockport with Manchester city centre, Warrington or other M60 boroughs, we plan them as a single Greater Manchester south day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Stockport and SK postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Stockport and SK postcode work. We arrive in unbranded vehicles and carry out every installation under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Stockport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Stockport town centre has a mix of period sandstone commercial frontages and modern managed retail in the Merseyway centre.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Stockport and Manchester city centre in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Stockport is 20 minutes from Manchester city centre via the M60 or A6 north. For sign companies running a Greater Manchester programme covering Manchester city centre and Stockport, the two zones combine naturally as a single South Yorkshire to Greater Manchester south trip. Manchester in the morning, Stockport in the afternoon — or the reverse — with Cheadle or Hazel Grove as a potential intermediate stop.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Stockport and Macclesfield or Wilmslow in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Macclesfield (SK10) is 20 minutes south of Stockport via the A523 or M60/A6. Wilmslow (SK9) is 15 minutes south-west via the A34. Both sit in the SK postcode zone and are included within the Stockport subcontract day when brief volumes justify the additional stops. Manchester Airport sits between Stockport and Wilmslow — 10 minutes from Stockport town centre via the A6 and M56 — and is covered as part of the same Greater Manchester south programme.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerStockportPage() {
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
            Subcontract · Stockport &amp; the SK Postcode Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Stockport &amp; Greater Manchester South
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Stockport and the SK postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M60 direct from South Yorkshire</strong>{" "}
                — Stockport reached via M1/M62/M60 orbital, junctions 1–5; no city centre congestion
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Stockport, Cheadle, Macclesfield, Wilmslow and Manchester Airport zone covered as a single SK programme</span>
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
              Discuss a Stockport subcontract job
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

      {/* Why Stockport */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stockport — the southern gateway of the M60 orbital
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Stockport occupies the southern arc of the M60 Manchester orbital — a substantial
              commercial centre in its own right, distinct from Manchester city centre and separated
              from it by the River Mersey valley. The SK postcode zone is one of the broadest in
              Greater Manchester: SK1 to SK4 covering Stockport town centre, Edgeley and the
              inner ring, then SK7 Bramhall, SK8 Cheadle and Cheadle Hulme, SK10 Macclesfield,
              SK11 further south Macclesfield, and SK9 Wilmslow — the zone stretches from the
              M60 south through Cheshire to the Peak District boundary.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Stockport town centre is built across a dramatic sandstone valley above the Mersey
              — the Victorian railway viaduct (27 arches, 600 metres) and the Underbanks medieval
              street pattern give the town centre genuine character distinct from modern Greater
              Manchester retail. The Merseyway Shopping Centre occupies the decked-over River
              Mersey through the town centre — a managed retail environment with standard
              contractor access arrangements. Around it, Princes Street, Merseyway itself and
              the wider town centre mix modern retail glazing with period sandstone commercial
              frontages.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From an installation logistics perspective, Stockport sits at M60 junctions 1 to 5 —
              the M60 exits directly into Stockport without requiring a run through central Manchester.
              Manchester Airport is 10 minutes west via the A6 and M56. Cheadle and Cheadle Hulme
              (SK8) are 5 to 10 minutes north-west. Hazel Grove (SK7) and Bramhall (SK7) are
              5 to 10 minutes south-east. The SK postcode zone can be covered efficiently as
              a half-day from the M60 without repeating the same motorway routes.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and
              ready to apply. We prepare the surface, install to spec and deliver a signed-off
              photo pack. Your Stockport client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Stockport &amp; the SK zone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockport town centre — Merseyway and Princes Street</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Stockport town centre. The
                Merseyway Shopping Centre provides a modern managed retail environment with
                contractor access arrangements. Princes Street, Little Underbank and the wider
                town centre offer a mix of period sandstone commercial buildings and modern
                retail units — brief with building description for any non-standard frontage.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cheadle &amp; Cheadle Hulme — SK8</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cheadle Royal Business Park (SK8) and Cheadle Hulme commercial centre. Cheadle
                Royal is a substantial out-of-town business park on the A34 corridor north of
                Stockport — modern commercial buildings, corporate office occupiers, and BUPA
                Healthcare as the headline occupier. Office interior graphics, reception feature
                walls, fleet livery and wayfinding. Straightforward vehicle access throughout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hazel Grove &amp; Bramhall — SK7</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hazel Grove and Bramhall sit immediately south-east of Stockport on the
                A6 south corridor — commercial units, retail parades, industrial estates and
                corporate business parks. Hazel Grove is a significant retail and commercial
                strip on the A6 between Stockport and Macclesfield. Included within the
                Stockport subcontract day when brief volumes in the SK7 zone justify the stop.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Manchester Airport zone — SK9/SK10/WA15</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Manchester Airport is 10 minutes west of Stockport town centre via the A6 and M56.
                The airport zone includes the Manchester Airport Business Park (M90), Ringway Road
                logistics and hotel strip, and Altrincham WA15 on the north-west approach. Fleet
                livery, hotel graphics, logistics vehicle wrapping and corporate wayfinding for the
                airport commercial zone. Wilmslow (SK9) is the residential and mixed-commercial
                town directly north-east of the airport on the A34 corridor.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Macclesfield — SK10/SK11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Macclesfield (SK10/SK11) sits 20 minutes south of Stockport on the A523 — a
                former mill town with a distinct commercial centre, AstraZeneca&apos;s Macclesfield
                Science Park campus (one of the largest pharmaceutical research sites in the UK),
                and a mix of period mill buildings converted to offices alongside modern retail
                in the Grosvenor Centre. Surface assessment required for mill building interiors.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wilmslow &amp; Alderley Edge — SK9</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wilmslow (SK9) is 15 minutes south-west of Stockport via the A34 — a high-value
                commercial and retail centre with boutique retail, corporate office buildings and
                the Wilmslow Business Quarter on the A34. Alderley Edge village (SK9) is 5 minutes
                further south — independent retail, hospitality and upmarket commercial. Both
                are natural add-ons to a Stockport subcontract day and can be combined with
                Macclesfield on a full SK postcode programme.
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

      {/* M60 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stockport in the M60 south corridor — South Yorkshire to Greater Manchester without city centre congestion
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M60 Manchester orbital runs anti-clockwise from the M62 in the north-east
              of Greater Manchester around the southern arc through Stockport and back north
              to Salford and the M61. For a WRPX vehicle travelling from South Yorkshire to
              Stockport, the M60 at junctions 1 to 5 is the direct exit — no need to enter
              Manchester city centre, no Piccadilly or city-side congestion.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This means Stockport, Cheadle, Hazel Grove and Bramhall sit on the same
              trans-Pennine axis as Leeds, Bradford and Manchester — accessible via the M1/M62/M60
              from South Yorkshire in one continuous motorway run. For sign companies managing
              Greater Manchester programmes, Stockport is logistically separate from Manchester
              city centre, often more efficient to cover as a dedicated M60 south stop before
              or after Manchester on a two-day programme.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The A34 south from Cheadle provides a direct corridor to Wilmslow, Alderley Edge
              and Macclesfield without returning to the M60. For programmes combining Stockport
              town centre with the Cheshire south satellite towns, the A34 south gives a clean
              corridor to SK9 and SK10 without motorway repetition. Manchester Airport sits on
              this same A34/M56 axis, making it a natural stopover point on a Stockport–Wilmslow
              day for any brief that includes airport zone sites.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Stockport &amp; the SK postcode zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Merseyway Shopping Centre — SK1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockport&apos;s primary shopping centre — decked over the River Mersey, managed
                retail environment with standard contractor access. Modern glazed shopfronts
                alongside period market hall. Princes Street and Merseyway adjacent for
                high-street retail and hospitality installations.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cheadle Royal Business Park — SK8</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Out-of-town business park on the A34 — modern commercial and corporate
                buildings. BUPA Healthcare headquarters as headline occupier. Office interior
                graphics, reception feature walls and wayfinding. Straightforward vehicle
                access. 5 minutes from Stockport town centre via the A34.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Manchester Airport Business Park — M90</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Airport-adjacent commercial zone: logistics, hotel strip, corporate HQs and
                aviation services. M56 access direct. Fleet livery, hotel graphics, wayfinding
                and corporate office installations. 10 minutes from Stockport via A6/M56.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">AstraZeneca Macclesfield — SK10</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                One of the largest pharmaceutical research sites in the UK — corporate office
                graphics, wayfinding systems, laboratory and campus vinyl installations.
                Modern campus buildings alongside converted mill-era structures on the
                Macclesfield site. Surface assessment required for any heritage building
                interior.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hazel Grove — SK7</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Significant A6 retail and commercial strip between Stockport and Macclesfield.
                Commercial parades, car showrooms, business estates and independent retail.
                Standard modern glazed shopfronts. Natural intermediate stop on a Stockport–Macclesfield
                A6 south day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wilmslow — SK9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                15 minutes south-west of Stockport via the A34. High-value retail and
                commercial — boutique shopfronts, corporate office buildings, Wilmslow
                Business Quarter. Alderley Edge 5 minutes further south. Both are SK9
                zone, covered within the Stockport or Macclesfield subcontract day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Stockport subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full SK postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockport and the SK zone are efficiently covered as part of a wider Greater
                Manchester south programme — combining SK with M (Manchester city centre),
                WA (Warrington/Cheshire), or extending south to Macclesfield and Wilmslow
                where brief volumes justify it. If your programme includes multiple SK zone
                sites, include all addresses in the brief. We plan the day sequence to
                minimise dead mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for period buildings in Stockport town centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockport town centre has genuine surface variation — the Victorian sandstone
                commercial frontages on Little Underbank and Princes Street, the Edwardian
                market hall character of the Merseyway area and modern retail glazing in
                the shopping centre itself. For any installation on a period or non-standard
                frontage, brief us with the full site address and a description of the
                frontage. We confirm surface approach before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Stockport or SK zone site in unbranded vehicles, introduce
                ourselves as the installation team, and carry out the work under your
                instructions throughout. Your client&apos;s experience is with your company at
                every stage — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Stockport installation is documented with before, during-installation
                and completed sign-off photographs. Photo packs delivered to you same day
                or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Stockport with Manchester, Warrington or South Yorkshire in one programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Stockport brief sits alongside Manchester city centre, Warrington,
                or other M60 corridor stops, we plan them as a single Greater Manchester day.
                One invoice, one documentation pack per site, one consistent installation
                standard across the full programme area. No separate Greater Manchester
                subcontractors — one point of contact from Sheffield to the SK postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Stockport subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Stockport and Macclesfield separately or as one programme?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Both are SK postcode zone — they are planned as one programme when brief volumes
                justify it. Macclesfield is 20 minutes from Stockport town centre via the A523
                or A6 south. If your programme includes both Stockport and Macclesfield sites,
                include all addresses in the brief and we plan them within the same SK postcode day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Stockport and Warrington on the same day?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Warrington (WA postcodes) is approximately 30 minutes from Stockport via the M60
                west to the M56 west. For sign companies with programmes covering Stockport and
                Warrington, a combined SK/WA programme is feasible in a single long day depending
                on installation volumes. Both sit on the M60/M56 arc south of Manchester.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Stockport and Cheshire south jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Stockport, SK zone and Cheshire south work.
                We arrive in unbranded vehicles and carry out every installation under your brand.
                Your client never knows WRPX was involved. Full photographic documentation
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
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington &amp; Cheshire
            </Link>
            <Link href="/subcontract-vinyl-installer-chester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Chester
            </Link>
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wigan
            </Link>
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
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
            Ready to subcontract your Stockport or SK zone installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Stockport, SK postcode or Greater Manchester south brief —
            installation type, site address, material spec and date requirements. We confirm
            quickly and plan SK dates as part of the M60 south corridor, combining with
            Manchester, Warrington or Macclesfield where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Stockport
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
