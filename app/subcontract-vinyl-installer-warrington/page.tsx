import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Warrington — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Warrington and Cheshire for sign companies, print houses and fit-out contractors. WRPX covers Birchwood, Gemini Retail Park, the M62/M6 junction zone and the full WA postcode — white-label, photographic sign-off, direct from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-warrington/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Warrington — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Warrington and Cheshire. White-label available. WRPX covers Birchwood Business Park, Gemini Retail Park, Warrington town centre, the M62/M6 junction zone and the full WA postcode — connecting South Yorkshire, Manchester and Liverpool under one subcontract."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Warrington", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-warrington/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Warrington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warrington is approximately 80–95 minutes from our South Yorkshire base via the M1 and M62. The M62 runs directly west from Leeds and the M1 junction through to Warrington at junctions 8–9, with the M6 interchange at junction 9 connecting north to Wigan and Preston or south to Birmingham. For programmes combining Warrington with Manchester (20 minutes east via M62), Liverpool (30 minutes west via M62) or Yorkshire cities, we run them as corridor trips — one installer, no co-ordinating separate regional subcontractors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Warrington installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out the Warrington installation under your brand throughout. Your Cheshire or North West client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on the day of completion.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Warrington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover the full WA postcode zone including Warrington town centre, Birchwood, Padgate, Stockton Heath, Lymm, Culcheth and the M62/M6 business park belt.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Warrington with Manchester and Liverpool in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Warrington&apos;s position at the M62/M6 junction makes it the natural mid-point between Manchester (20 minutes east) and Liverpool (30 minutes west). A sign company running a North West brand rollout that covers Manchester, Warrington and Merseyside can run the entire programme under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the full Liverpool–Warrington–Manchester corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birchwood and the Warrington business park belt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Birchwood Business Park is Warrington&apos;s primary technology and office commercial estate, home to major employers in aerospace, defence, nuclear (including Sellafield Ltd and Jacobs Engineering operations), financial services and professional services. Fleet livery, corporate interior graphics, wayfinding systems and branded environments are regular briefs from the Birchwood WA3 zone. The wider Warrington business park belt — Woolston Grange, Lingley Mere, Gemini and Omega — all covered.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerWarringtonPage() {
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
            Subcontract · Warrington &amp; Cheshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Warrington
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Warrington, Cheshire and the wider WA postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail graphics and wayfinding systems — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62/M6 junction zone</strong>{" "}
                — Warrington covered as part of corridor runs linking South Yorkshire, Manchester and Liverpool
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed sign-off</span>
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
              Discuss a Warrington subcontract job
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

      {/* Why Warrington */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Warrington — the junction town between Manchester and Liverpool
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Warrington sits at one of the most commercially significant motorway junctions in
              the North West: the point where the M62 (Liverpool–Hull trans-Pennine route) crosses
              the M6 (Birmingham–Preston north-south route), with Warrington town centre straddling
              the gap between junction 8 and junction 9. Manchester is 20 minutes east via the M62;
              Liverpool is 30 minutes west. The M6 adds Preston (40 minutes north) and the wider
              Midlands corridor south. This makes Warrington a natural anchor point for any North
              West brand rollout programme that covers multiple cities — briefing Warrington correctly
              covers a substantial geography without excessive travel overhead.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial character of Warrington is notably different from both Manchester and
              Liverpool. Rather than a dominant city-centre retail and financial district, Warrington
              has developed as a planned new town with a distributed commercial geography: a large
              ring of business parks and industrial estates (Birchwood in the east, Omega in the
              west, Woolston Grange, Lingley Mere, Gemini and Winwick Quay), a substantial
              chemical, nuclear and engineering industrial heritage in the Mersey Gateway corridor,
              a major out-of-town retail destination at Gemini Retail Park, and Warrington town
              centre&apos;s Golden Square shopping centre as the retail core.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The Birchwood zone is nationally significant: it hosts operations from the nuclear,
              aerospace and defence sectors (including Sellafield Ltd and Jacobs Engineering),
              alongside major professional and financial services employers. This generates a
              consistent corporate interior graphics and fleet livery demand quite distinct from
              the retail-led graphics profile of comparable North West towns.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Warrington client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Warrington &amp; Cheshire
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Retail window graphics &amp; fascia</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision, promotional vinyls and
                branded window installs across Golden Square shopping centre, Gemini Retail Park,
                Warrington town centre, Stockton Heath, Lymm and the wider WA postcode retail belt.
                Consistent finish across multi-unit retail rollouts — from a single Warrington unit
                to a North West chain programme covering Manchester and Liverpool in the same week.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Birchwood &amp; business park interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corporate interior graphics, wall wraps, wayfinding systems, office branding and
                reception fit-out installations across Birchwood Business Park, Woolston Grange,
                Lingley Mere and the Warrington Science Park. Nuclear, defence and engineering sector
                clients with specific security and access requirements — briefed in advance, no
                surprises on site. WA3/WA1 postcode zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for
                vehicles across Warrington&apos;s logistics and distribution sector — Omega Industrial
                Park, Winwick Quay, the Mersey Gateway corridor and the wider WA/WN postcode logistics
                belt. National brand fleets serviced through your print or sign company under one
                subcontract. Warrington is a major national distribution hub with Omega on the
                M62/M6 junction being home to major logistics operators.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls, branded floor campaigns, anti-slip rated floor films and
                promotional floor graphics across Warrington retail, leisure and commercial premises.
                The Pyramids shopping centre, Gemini Retail Park, Warrington Town Centre and the
                surrounding commercial estate all generate floor graphics briefs. Applied to spec,
                confirmed compliant at sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; outdoor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fascia vinyls, shop front graphics, outdoor promotional campaigns and building
                signage across Warrington town centre, the retail parks and the surrounding
                commercial estate. Working at height, managing access in busy retail environments,
                installing through seasonal campaigns and tight fit-out windows — all covered
                under a standard Warrington subcontract brief.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; corporate fit-out</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics, reception vinyls and corporate
                campus graphics for business park occupiers, NHS and local authority premises
                across the WA postcode zone. Warrington and Halton NHS Trust estate, local
                authority civic buildings and the Birchwood corporate cluster all generate
                wayfinding and interior graphics programmes on a regular basis.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M62/M6 Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Warrington in the M62 corridor — Liverpool to Hull, Manchester to South Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M62 is the primary trans-Pennine motorway running from Liverpool docks in the west
              to the Humber ports at Hull in the east — passing through Warrington, Manchester,
              Leeds, Bradford and the Yorkshire commercial belt. WRPX&apos;s South Yorkshire base sits
              directly on this corridor: Sheffield is connected to Leeds and the M62 via the M1,
              then west along the M62 through Manchester to Warrington and Liverpool.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a UK-wide brand rollout or retail refresh that spans
              both Yorkshire and the North West, Warrington is typically the part of the programme
              that requires a separate logistics conversation — it sits between Manchester and
              Liverpool, neither of which alone covers the WA zone. With WRPX, Warrington is
              covered as part of the same corridor that includes Manchester, Leeds, Sheffield,
              Bradford and Huddersfield. A programme covering Yorkshire, Manchester and Warrington
              runs as a single installer relationship — no separate Merseyside or Cheshire
              subcontractor required for the gap in the middle.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M6 at junction 9 also connects Warrington directly to Preston (40 minutes north
              via M6) and the wider Lancashire commercial belt. A North West programme covering
              Manchester, Warrington and Preston — three significant commercial centres that
              individually might require three separate installation conversations — runs under
              one WRPX subcontract with a single point of contact, consistent photo documentation
              and one invoice.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a detailed briefing guide on Warrington&apos;s commercial zones, Birchwood access
              protocols, the Omega logistics district and how to plan multi-city North West
              programmes through the M62/M6 corridor, see our{" "}
              <Link href="/blog/warrington-subcontract-installation-guide/" className="text-accent hover:underline">
                Warrington subcontract installation guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Warrington &amp; Cheshire
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Warrington town centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Golden Square shopping centre, The Pyramids, Bridge Street, Sankey Street and the
                expanding Time Square development. Retail, hospitality, civic commercial and town
                centre offices. WA1 postcode. Mix of national retail chains, independent operators
                and hospitality brands generating regular window graphics and fit-out briefs.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Birchwood Business Park</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Warrington&apos;s primary technology and office commercial estate — nuclear, aerospace,
                defence, engineering, financial services and professional services employers.
                Corporate interior graphics, fleet livery and wayfinding briefs. WA3 postcode.
                Security-cleared access protocols followed for restricted-site occupiers.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Omega &amp; Gemini</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Omega Industrial Park on the M62/M6 junction is one of the North West&apos;s largest
                logistics and distribution hubs — major national operators generating fleet livery,
                warehouse graphics and brand identity briefs. Gemini Retail Park adjacent:
                large-format retail, food and leisure operators generating window graphics and
                fit-out installation briefs. WA5/WA2 postcode zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockton Heath &amp; south Warrington</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockton Heath village commercial strip, Appleton, Grappenhall and the wider south
                Warrington affluent residential and commercial belt. Independent retail, hospitality,
                professional services and residential-adjacent commercial generating high-quality
                graphics briefs. WA4 postcode. M56 accessible to Cheshire and Macclesfield.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Winwick Quay &amp; north Warrington</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Winwick Quay Industrial Estate, Woolston Grange Business Park and Lingley Mere
                Business Park north of the town centre. Distribution, logistics and commercial
                services. WA2/WA1 postcode. M6 north to Wigan and Preston accessible from
                junction 22, adding the wider Greater Manchester north and Lancashire commercial
                corridor to the same trip.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Mersey Gateway corridor</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Mersey crossing zone connecting Warrington to Runcorn and Widnes across the
                estuary — chemical, industrial and commercial premises in Runcorn&apos;s Mersey Gateway
                Business Park and Widnes commercial estates. WA7/WA8 postcode. Connecting the
                Warrington commercial belt to the Merseyside geography without requiring a
                separate Liverpool-based installer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Warrington subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Warrington installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address, material spec, installation type, surface
                condition notes and any access constraints specific to the Warrington site. Birchwood
                and the business park belt sometimes has specific security and pre-registration
                requirements — flag these early and we confirm feasibility before you commit material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Warrington site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions. Your
                client&apos;s experience is with your company throughout — we are invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Warrington installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered to you same day or next morning
                in whatever format you need — ready to forward to your client or add to your own
                project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Warrington with Manchester, Liverpool and Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Warrington brief sits alongside jobs in Manchester, Leeds, Sheffield or
                other cities in the corridor, we combine them in a single trip. One invoice, one
                documentation pack per site, one consistent installation standard across the whole
                programme. No separate North West and Yorkshire subcontractors to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Warrington subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Warrington?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Warrington is approximately 80–95 minutes from our South Yorkshire base via the M1
                and M62. The M62 runs direct from the M1 junction through Leeds and across the
                Pennines to Warrington at junctions 8–9. For programmes combining Warrington with
                Manchester or Yorkshire cities, we run them as a single corridor trip — the M62
                connects both sides of the Pennines and Warrington in the same route.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Runcorn and Widnes as well as Warrington?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Runcorn (WA7) and Widnes (WA8) are covered as part of the Warrington zone.
                The Mersey Gateway Bridge connects Warrington to Runcorn and Widnes across the
                estuary, and the Mersey Gateway Business Park at Runcorn generates regular commercial
                graphics briefs from the chemical, pharmaceutical and logistics sectors located there.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Warrington and Cheshire jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard. We arrive in unbranded vehicles and carry out the
                Warrington installation under your brand throughout. Your Cheshire or North West
                client never knows WRPX was involved. Full photographic documentation delivered
                in your agreed format on the day of completion.
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
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
            </Link>
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bradford
            </Link>
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-hull/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Hull
            </Link>
            <Link href="/subcontract-vinyl-installer-chester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Chester
            </Link>
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wigan
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
            Ready to subcontract your Warrington installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Warrington or Cheshire brief — installation type, site address,
            material spec and date requirements. We confirm quickly and can often turn around
            Warrington dates within a few days for straightforward installs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Warrington
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
