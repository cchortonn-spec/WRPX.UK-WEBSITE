import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Carlisle — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Carlisle, Cumbria and the Scottish border gateway for sign companies, print houses and fit-out contractors. WRPX covers Carlisle city centre, Kingstown Retail Park, Penrith and the CA postcode zone — white-label, photographic sign-off, direct from South Yorkshire via M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-carlisle/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Carlisle — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Carlisle, Cumbria and the Scottish border gateway. White-label available. WRPX covers Carlisle city centre, Kingstown Retail Park, Penrith CA11 and the CA postcode zone — M1 north from South Yorkshire, M6 north through Lancaster and Kendal, exiting at Carlisle junctions 43–44."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Carlisle", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-carlisle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Carlisle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carlisle is approximately 2 hours 45 minutes to 3 hours from our South Yorkshire base via the M1 north to Leeds, then the M6 north through Lancaster and Kendal, exiting at junction 43 or 44 for Carlisle city centre. For programmes combining Carlisle with Kendal (45 minutes south via M6 junction 36), Lancaster (75 minutes south) or Penrith (25 minutes south at junction 40), we plan them as a single M6 North corridor day — Cumbria covered under one WRPX subcontract without separate trips.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Carlisle and Cumbria installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Carlisle, Penrith and Cumbrian installations under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Carlisle and Cumbria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Carlisle city centre features a mix of sandstone Georgian and Victorian buildings alongside modern retail and commercial stock — surface confirmation before material production is important for period-fronted buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Carlisle and Kendal in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Carlisle and Kendal are 45 minutes apart on the M6 (junction 44 for Carlisle, junction 36 for Kendal south). For sign companies running an M6 North programme covering both Carlisle and Kendal — or adding Penrith CA11 midway at junction 40 — we plan the full Cumbrian arc under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the CA and LA postcode zones. Include all site addresses in the brief and we plan the day sequence to minimise dead mileage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you reach the Scottish border and south-west Scotland from Carlisle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carlisle is the last major city on the English side of the Scottish border. The M6 continues north from Carlisle into Scotland at Gretna (10 minutes, DG16), connecting to the M74 and Glasgow. For sign companies with cross-border programmes covering Carlisle and south-west Scotland, we can plan the logistics on a case-by-case basis. Scotland installations (beyond Gretna) are assessed individually — discuss the specific brief with us and we confirm feasibility based on site locations and programme timing.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerCarlislePage() {
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
            Subcontract · Carlisle &amp; Cumbria
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Carlisle
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Carlisle, Cumbria and the CA postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1 + M6 from South Yorkshire</strong>{" "}
                — Carlisle covered via the M6 North corridor, the natural terminus beyond Kendal and Lancaster
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Carlisle, Penrith and Kendal covered as part of a single Cumbrian M6 corridor programme</span>
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
              Discuss a Carlisle subcontract job
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

      {/* Why Carlisle */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Carlisle — border city economy and the M6 North terminus
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Carlisle is England&apos;s most northerly city and the commercial and administrative
              centre of Cumbria. Sitting at the junction of the M6 and the A69 — the east-west
              trans-Pennine road connecting Carlisle to Newcastle via Hexham — it occupies a
              unique geographic position as the gateway between northern England and Scotland.
              This border economy gives Carlisle&apos;s commercial landscape a distinct character:
              retail and services that serve both the Cumbrian hinterland and cross-border
              traffic, logistics and distribution businesses that use the M6 corridor, and
              an industrial base with a long history in biscuit manufacturing, defence,
              engineering and the rail industry.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Carlisle city centre (CA1/CA2/CA3) has a mix of historic sandstone-fronted
              buildings in the medieval street pattern around English Street, Scotch Street
              and The Lanes shopping centre, alongside more modern retail and commercial stock.
              The older sandstone and brick frontages on the city-centre streets present the
              same surface-variation considerations as other northern English cities with
              historic cores — interior window graphics avoid most substrate questions,
              while external fascia vinyls on period buildings require surface confirmation
              before material production.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond the city centre, Carlisle has significant out-of-town retail and
              commercial capacity. Kingstown Retail Park (CA3 north) is a substantial out-of-town
              retail and trade park on the A7 north of the city, generating regular window graphics,
              fascia vinyls and seasonal campaign briefs. The industrial estates along Willowholme
              and Kingmoor south of the city provide commercial unit, fleet and facility graphics
              work for trade customers in logistics, manufacturing and engineering.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Carlisle client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Carlisle &amp; Cumbria
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Carlisle city centre — retail and hospitality</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Carlisle city centre — English
                Street, Scotch Street, The Lanes shopping centre and the surrounding retail and
                food quarter. Period sandstone and Victorian-era frontages are common in the
                historic core; surface confirmation before material production is particularly
                relevant for external fascia installations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kingstown Retail Park &amp; out-of-town commercial</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kingstown Retail Park (CA3) on the A7 north of Carlisle city centre — substantial
                out-of-town retail and trade park stock. Modern unit construction with standard
                aluminium fascias and glazed shopfronts — straightforward substrate environment
                for window graphics, seasonal promotional vinyls and fascia installations.
                The Kingstown Retail Park and associated trade counter units generate a consistent
                programme of retail graphics briefs throughout the year.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; industrial corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet wraps, vehicle livery, van graphics and commercial vehicle branding across
                Carlisle&apos;s logistics, distribution and industrial operator base. Willowholme
                Industrial Estate, Kingmoor Industrial Estate and the M6 junction commercial
                zones generate vehicle livery, fleet graphics and facility branding briefs from
                logistics, construction, utilities and manufacturing businesses operating in
                the Cumbrian market.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Office interiors &amp; Carlisle Gateway</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, glass partition film, meeting room branding, wayfinding
                and reception feature walls across Carlisle&apos;s commercial parks and civic buildings.
                Carlisle Gateway — the city&apos;s regeneration zone on the western edge of the city
                centre — and the Rosehill Industrial Estate generate office interior and
                professional services branding briefs. The University of Cumbria&apos;s Carlisle
                campuses also generate education graphics and wayfinding briefs.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Penrith &amp; Eden Valley — CA10/CA11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Penrith (CA10/CA11) sits 25 minutes south of Carlisle at M6 junction 40 —
                the last significant market town between the Lake District and Carlisle.
                Penrith town centre, Penrith Auction Mart retail zone, J40 Retail Park and the
                commercial units serving the Eden Valley and east Cumbria agricultural economy.
                Covered as a natural intermediate stop on a Carlisle and Kendal corridor day,
                or as a standalone Penrith brief.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; public-sector estates</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, directional vinyls and public estate branding across
                Carlisle&apos;s hospitals, council buildings and civic venues. Cumberland Council
                (formed from the merger of Carlisle City Council and Cumbria County Council)
                generates local authority graphics briefs. Cumberland Infirmary CA2 generates
                NHS and healthcare graphics work. Public sector installation — RAMS documentation,
                permit-to-work and out-of-hours access — handled as standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding and facility graphics
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M6 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Carlisle in the M6 North corridor — Cumbria under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Carlisle is the natural northern terminus of the M6 — the road that WRPX uses
              for the entire North West corridor from Sheffield via Manchester, Preston, Lancaster
              and Kendal. Every city on that route is accessible on the same M6 axis, which means
              Carlisle is not a detour but the logical northern end of a programme that may already
              include Kendal, Lancaster, Preston or Bolton.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a programme covering Carlisle, Kendal and Lancaster —
              a common pattern for national brands with retail, hospitality or logistics units
              at multiple M6 North locations — the entire CA and LA postcode arc runs under one
              WRPX subcontract. Same installer, same documentation standard, single point of
              contact across the full Cumbrian corridor. No separate Carlisle, Kendal and
              Lancaster subcontractors to coordinate.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The A69 east from Carlisle also connects to the A1(M) at Newcastle, linking the
              M6 and A1(M) North corridors at Carlisle. For sign companies with programmes
              spanning Carlisle and the North East, Carlisle acts as a western junction point
              between both routes — a Carlisle day can extend east to Hexham or even Newcastle
              via the A69 when the brief justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Carlisle &amp; Cumbria
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Carlisle city centre — CA1/CA2/CA3</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                English Street, Scotch Street, The Lanes shopping centre and the historic
                market cross area. Georgian and Victorian sandstone buildings in the medieval
                street pattern — period frontages require surface confirmation for external
                fascia work. Interior window graphics are straightforward.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kingstown Retail Park — CA3 north</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Out-of-town retail and trade park on the A7 north of Carlisle. Modern commercial
                unit construction — aluminium fascias and standard glazed shopfronts. Consistent
                retail graphics programme. Retail warehouse, food retail and trade counter units.
                Access straightforward; standard commercial briefing applies.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Penrith — CA10/CA11, M6 j40</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Market town at the southern gateway to Carlisle on the M6. Penrith town centre,
                J40 Retail Park and the A686 commercial strip. 25 minutes south of Carlisle.
                Natural intermediate stop on a Carlisle and Kendal corridor day. Eden Valley
                agricultural and rural services economy generates local commercial briefs.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Willowholme &amp; Kingmoor Industrial — CA2/CA1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Willowholme Industrial Estate (CA2) and Kingmoor Industrial Estate on the south
                and north sides of Carlisle. Logistics, manufacturing, engineering and distribution
                operators. Fleet livery, facility signage and office interior branding briefs.
                Vehicle access straightforward — standard industrial estate environment.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cumberland Infirmary &amp; NHS — CA2</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Cumberland Infirmary (CA2) and the NHS Cumberland estate — healthcare vinyl
                graphics, wayfinding, patient environment branding and departmental identification
                vinyls. Clinical environment access, infection control compliance and out-of-hours
                installation windows are standard for NHS work in Carlisle.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">University of Cumbria — Carlisle campuses</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                University of Cumbria has campuses across Carlisle city centre (Fusehill Street
                CA1 and Brampton Road CA3). Education graphics, wayfinding and campus identity
                work. DBS-aware access, term-time scheduling and multi-building programme
                consolidation available under one subcontract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Carlisle subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us with the full Cumbrian scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Carlisle is most efficiently covered as part of a wider M6 North programme —
                combining Carlisle with Penrith, Kendal, Lancaster or other CA and LA zone
                sites on the same day. If your brief includes multiple Cumbrian sites, include
                all addresses in the brief. We plan the day sequence to minimise dead mileage and
                confirm feasibility — including any surface or access issues — before material
                is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for period buildings</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Carlisle city centre has genuine surface variation — sandstone, painted render,
                period timber shopfronts and historic glazing systems sit alongside modern retail
                and out-of-town commercial stock. For any installation on a period-fronted
                building, brief us with the full site address and a description of the frontage.
                We confirm surface approach before material is produced, preventing the common
                failure mode of material being specified to the wrong substrate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Carlisle site in unbranded vehicles, introduce ourselves as
                the installation team, and carry out the work under your instructions throughout.
                Your Carlisle client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Carlisle and Cumbrian installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Carlisle with the full M6 North corridor</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Carlisle brief sits alongside Kendal, Lancaster, Preston or other M6 North
                jobs, we plan them as a single corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the whole North West
                and Cumbrian programme. No separate Carlisle, Kendal and Lancaster subcontractors —
                one point of contact from Sheffield to the CA postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Carlisle subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Carlisle and Kendal on the same day?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Carlisle and Kendal are 45 minutes apart on the M6 (junction 44 for
                Carlisle city centre, junctions 36–37 for Kendal). A programme combining
                Carlisle and Kendal — or adding Penrith at junction 40 as an intermediate stop —
                is a standard M6 North corridor day. Include all site addresses in the brief
                and we plan the day sequence accordingly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Carlisle installations?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — white-label is standard for all Carlisle and CA postcode work. We arrive
                in unbranded vehicles and carry out every installation under your brand. Your
                Carlisle client never knows WRPX was involved. Full photographic documentation
                delivered in your agreed format.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Penrith as well as Carlisle?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Penrith (CA10/CA11) at M6 junction 40 is 25 minutes south of Carlisle and
                is covered as part of the same Cumbrian M6 corridor programme. If your brief
                includes both Carlisle and Penrith installations, include both addresses and we
                plan the day efficiently — typically one city in the morning and one in the
                afternoon depending on access timing requirements.
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
            <Link href="/subcontract-vinyl-installer-kendal/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Kendal &amp; South Cumbria
            </Link>
            <Link href="/subcontract-vinyl-installer-lancaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Lancaster
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bolton
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
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
            Ready to subcontract your Carlisle or Cumbrian installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Carlisle or CA postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and plan Carlisle dates as part
            of the M6 North corridor, combining with Kendal, Penrith, Lancaster or Preston
            where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Carlisle
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
