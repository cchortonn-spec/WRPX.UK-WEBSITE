import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Kendal — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Kendal, South Cumbria and the Lake District gateway for sign companies, print houses and fit-out contractors. WRPX covers Kendal town centre, Barrow-in-Furness BAE Systems, Ulverston and the LA postcode zone — white-label, photographic sign-off, direct from South Yorkshire via M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-kendal/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Kendal — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Kendal, South Cumbria and the Lake District gateway. White-label available. WRPX covers Kendal town centre, Barrow-in-Furness LA14 BAE Systems corridor, Ulverston LA12 and the LA postcode zone — M1 north from South Yorkshire then M6 north from Leeds/Bradford, exiting at Kendal junctions 36–37."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Kendal", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-kendal/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Kendal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kendal is approximately 2 hours 15 minutes to 2 hours 30 minutes from our South Yorkshire base via the M1 north to Leeds, then the M6 north through Lancaster to junction 36 (Kendal south) or junction 37 (Kendal north/Shap). For programmes combining Kendal with Lancaster (35 minutes south via M6), Preston (60 minutes south) or Barrow-in-Furness (40 minutes south-west via A590), we plan them as a single M6 North corridor day to make the journey time cost-effective.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Kendal and South Cumbria installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Kendal, Barrow and South Cumbria installations under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Kendal and South Cumbria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Kendal's mix of limestone Georgian and Victorian town-centre buildings and modern commercial units generates substrate variation — surface confirmed in the brief before material is ordered.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Barrow-in-Furness and Kendal in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Barrow-in-Furness (LA14) is 38 miles south-west of Kendal via the A590, approximately 45 minutes. For programmes combining Kendal town centre with Barrow-in-Furness BAE Systems corridor, Ulverston or other LA zone installations, we plan a South Cumbria day that covers the A590 arc without returning to Yorkshire between sites. Include all site addresses in the brief and we plan the day sequence to minimise dead mileage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Kendal with Lancaster and Preston in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Kendal sits on the M6 at junctions 36–37, with Lancaster 20 miles south (junction 34) and Preston 45 miles south (junction 31/32). A sign company running a M6 North programme covering Kendal, Lancaster and Preston can run the entire corridor under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the LA and PR postcode arc. This avoids separate subcontractors for each North West location.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerKendalPage() {
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
            Subcontract · Kendal &amp; South Cumbria
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Kendal
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Kendal, South Cumbria and the LA postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1 + M6 from South Yorkshire</strong>{" "}
                — Kendal covered via the M6 north corridor, combining naturally with Lancaster, Preston and Barrow-in-Furness
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Barrow-in-Furness BAE Systems corridor + Kendal town centre covered as part of a South Cumbria day</span>
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
              Discuss a Kendal subcontract job
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

      {/* Why Kendal */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Kendal — Lake District gateway economy and the M6 North terminus
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Kendal is the last significant commercial town on the M6 before the Lake District
              National Park boundary closes off standard commercial development patterns. This
              position makes it a geographic hinge point: the services, hospitality and retail
              businesses that serve the Lake District visitor economy concentrate in Kendal
              rather than dispersing across the national park itself. For sign companies and
              print houses running North West programmes, Kendal is not a detour — it is the
              natural M6 terminus for a Lancaster and North Lancashire day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The town centre commercial core (LA9) is predominantly Georgian and Victorian
              limestone-fronted buildings on the medieval street pattern of Highgate, Stricklandgate
              and Finkle Street. This creates a substrate environment that is not the standard
              modern retail glass and aluminium — older painted renders, limestone reveals and
              period timber shopfronts are common. Surface confirmation before material production
              is particularly important here. Window graphics applied to the interior face of glass
              avoid most surface preparation questions; external fascia vinyls on period shopfronts
              require a pre-install assessment.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond the town centre, Kendal has an established light industrial and commercial
              park economy at Shap Road Industrial Estate (LA9 east) and the Kendal Business Park
              zone — generating office interior graphics, wayfinding and commercial unit fascia
              briefs from manufacturing, food and drink, and professional services occupiers.
              The Mintsfeet Road area provides additional commercial and trade unit stock on the
              north side of town.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Kendal client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Kendal &amp; South Cumbria
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kendal town centre — hospitality and retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Kendal&apos;s town-centre commercial
                core — Highgate, Stricklandgate, Finkle Street and the surrounding lanes. Lake
                District gateway hospitality businesses, independent retail and the national
                brands that do operate in Kendal generate a consistent seasonal graphics
                programme throughout the year.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Barrow-in-Furness — BAE Systems and industrial corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Barrow-in-Furness (LA14) is the industrial anchor of South Cumbria — BAE Systems
                Submarines occupies a major site on Barrow Island, with a supply chain and contractor
                base throughout the LA13–LA14 postcode zone. Commercial unit graphics, vehicle livery,
                facility signage, wayfinding systems and office interior branding across this industrial
                and engineering economy. A590 from Kendal, approximately 45 minutes. Included as part
                of a South Cumbria subcontract day when brief volumes warrant.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding and facility graphics
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Ulverston &amp; South Lakeland</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ulverston (LA12) — midway between Kendal and Barrow on the A590 — generates
                independent retail, hospitality and commercial unit graphics briefs. Ulverston
                town centre, the Coronation Hall, the Furness General Hospital access zone and
                the commercial units along the A590 bypass. Covered as a natural stop on the
                Kendal–Barrow A590 corridor. Brief with full site addresses and access requirements
                for all South Lakeland locations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; commercial vehicle graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet wraps, vehicle livery, van graphics and commercial vehicle branding across
                South Cumbria&apos;s trade, logistics and contractor economy. LA9 Kendal industrial
                zones, Barrow-in-Furness logistics and engineering vehicle operators, construction
                and utilities contractors serving the Lake District and Cumbrian coast. Vehicle
                graphics for local trade businesses and national fleet programmes with Cumbrian
                depots.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Office interiors &amp; professional services</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, glass partition film, meeting room branding, wayfinding
                and reception feature walls across Kendal&apos;s commercial parks. Kendal Business Park
                and Shap Road Industrial Estate generate office branding briefs from financial
                services, insurance, professional services and technology occupiers — a steadily
                growing sector as businesses serving the Lake District visitor economy professionalise
                their premises branding.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hospitality &amp; Lake District gateway retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hospitality graphics, branded environment installs and seasonal window campaigns
                across Kendal&apos;s hotels, restaurants, bars and visitor-economy businesses — the
                concentrated commercial base that serves the Lake District. Seasonal installation
                windows align with peak visitor periods. Wall wraps, feature graphics, wayfinding
                and branded interiors for hospitality refits and rebrand programmes. Brief with
                access timing requirements for live hospitality environments.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
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
              Kendal in the M6 North corridor — South Cumbria under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M6 runs from South Yorkshire north through Leeds/Bradford (via M1), Lancaster
              and on to Kendal at junctions 36–37. This makes Kendal the natural northern extension
              of the Lancaster corridor — not a separate expedition to Cumbria, but the next stop
              on a M6 North day that may already include Lancaster, Preston or the Blackpool
              connection (M55 from junction 32).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a programme covering Lancaster, Kendal and Barrow-in-Furness —
              a common pattern for national brands with hospitality, retail or industrial units across
              the M6 North and A590 arc — the entire sequence runs under one WRPX subcontract.
              Same installer, same documentation standard, single point of contact across the
              LA postcode zone. No separate Kendal, Lancaster and Barrow subcontractors to coordinate.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From South Yorkshire, the journey to Kendal follows the M1 north to Leeds/Bradford,
              then the M6 north through the Lune Gorge and over Shap, reaching Kendal at junction 36
              or 37. Return trips pair efficiently with Lancaster, Preston, Bolton or the Lancashire
              corridor, making a Cumbria day economically viable as part of a wider North West
              programme rather than a standalone trip from Sheffield.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Kendal &amp; South Cumbria
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kendal town centre — LA9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Highgate, Stricklandgate, Finkle Street and the Westmorland Shopping Centre.
                Georgian and Victorian limestone buildings — period shopfronts with surface
                variation. Interior window graphics straightforward; external fascia vinyls
                require pre-install surface confirmation. Hospitality and independent retail core.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Kendal Business Park &amp; Shap Road — LA9 east</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Modern commercial and light industrial units east of the town centre. Shap Road
                Industrial Estate, Mintsfeet Road and the Kendal Business Park zone. Standard
                modern commercial stock — glass, aluminium and composite cladding. Office
                interior graphics, wayfinding, unit fascias and fleet vehicle graphics.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Barrow-in-Furness — LA13/LA14</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                BAE Systems Submarines, Barrow island industrial zone, Furness Business Park
                and Barrow town centre. LA13/LA14 postcode. Industrial, engineering and defence
                sector generates vehicle livery, facility signage and office interior graphics
                briefs. A590 from Kendal, 45 minutes. Combined with Ulverston on the same
                South Cumbria day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Ulverston — LA12</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Ulverston town centre, Coronation Hall, Furness General Hospital zone and A590
                commercial strip. LA12 postcode. Independent retail, hospitality and commercial
                unit graphics. Natural stop on the Kendal–Barrow A590 corridor — included in a
                South Cumbria day when brief volumes justify the additional stop.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Windermere &amp; South Lakes — LA23</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Windermere and Bowness-on-Windermere (LA23) — primary Lake District gateway
                resort. Hotel branded environments, visitor attraction graphics, retail window
                campaigns and hospitality interiors. Seasonal access constraints — peak season
                (Easter–October) generates strong brief volumes for hospitality rebrand and
                seasonal graphic updates. A591 from Kendal, 12 miles.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Carnforth &amp; north Lancashire border — LA5/LA6</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Carnforth (LA5) and the M6 j35 zone — the border between Lancashire and Cumbria.
                Commercial, retail and logistics units serving the motorway corridor. Covered as
                part of a Lancaster or Kendal day depending on which city programme the brief is
                centred on. Junction 35 motorway services generate retail and hospitality graphics
                work on the M6 North circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Kendal subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us with the full South Cumbria scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Kendal is efficiently covered as part of a wider South Cumbria or M6 North
                programme rather than a standalone trip. If your brief includes Barrow-in-Furness,
                Ulverston, Lancaster or other LA zone sites alongside Kendal, include all addresses
                in the brief. We plan the day sequence to minimise dead mileage and confirm
                feasibility for the full programme — including any surface or access issues —
                before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for period buildings</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Kendal&apos;s town-centre buildings have genuine surface variation — limestone, painted
                render, period timber frames and historic glazing systems sit alongside standard
                modern shopfronts. For any installation on a period-fronted building, brief us
                with the full site address and a description of the frontage. We confirm surface
                approach before material is produced, preventing the common failure mode of material
                being specified to the wrong substrate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Kendal site in unbranded vehicles, introduce ourselves as the
                installation team, and carry out the work under your instructions throughout.
                Your Kendal client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Kendal and South Cumbria installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Kendal with Lancaster, Preston and North Lancashire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Kendal brief sits alongside Lancaster, Preston, Barrow or Bolton jobs,
                we plan them as a single M6 North corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the whole North West
                and South Cumbria programme. No separate Kendal and Lancaster subcontractors —
                one point of contact from Sheffield to the LA postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kendal subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Barrow-in-Furness separately from Kendal?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Barrow-in-Furness is covered as part of a South Cumbria day, not as a completely
                separate trip — the A590 connects Kendal and Barrow via Ulverston in approximately
                45 minutes. If your programme includes both Kendal and Barrow-in-Furness,
                include both in the brief and we plan them as a single A590 corridor day. Separate
                Kendal-only briefs are also accepted where Barrow is not part of the programme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Kendal and Lancaster on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — Lancaster is 20 miles south of Kendal on the M6 (junction 34 vs junctions
                36–37). Programmes combining Lancaster and Kendal are a standard M6 North day for
                WRPX. Include both sites in the brief and we confirm the day plan — typically
                Lancaster in the morning and Kendal in the afternoon, or vice versa, depending
                on access times.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Kendal and South Cumbria jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Kendal and LA postcode work. We arrive in
                unbranded vehicles and carry out every installation under your brand. Your client
                never knows WRPX was involved. Full photographic documentation delivered in your
                agreed format.
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
            <Link href="/subcontract-vinyl-installer-carlisle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Carlisle &amp; Cumbria
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
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Burnley &amp; East Lancashire
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
            Ready to subcontract your Kendal or South Cumbria installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Kendal or LA postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and plan Kendal dates as part
            of the M6 North corridor, combining with Lancaster, Barrow-in-Furness or Preston
            where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Kendal
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
