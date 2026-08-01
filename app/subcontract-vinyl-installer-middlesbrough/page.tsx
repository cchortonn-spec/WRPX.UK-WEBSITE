import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Middlesbrough — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Middlesbrough, Teesside and the Tees Valley for sign companies, print houses and fit-out contractors. WRPX covers Middlesbrough town centre, Teesside Industrial Estate, Stockton-on-Tees, Darlington and the TS and DL postcode zone — white-label, photographic sign-off, direct from South Yorkshire via A1(M).",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Middlesbrough — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Middlesbrough, Teesside and the wider Tees Valley. White-label available. WRPX covers Middlesbrough town centre, Teesside Industrial Estate, Stockton-on-Tees, Darlington DL1 and the TS/DL postcode zone — direct from South Yorkshire via the A1(M) north from Doncaster, exiting at the A66 Darlington junction."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Middlesbrough", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-middlesbrough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Middlesbrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Middlesbrough is approximately 90–110 minutes from our South Yorkshire base via the A1(M) north from Doncaster, then the A66 west at Darlington and the A19 into Middlesbrough town centre. The A1(M) route from South Yorkshire is direct and fast — passing through Wetherby and Leeming Bar before the Darlington interchange. For programmes combining Middlesbrough with Darlington (25 minutes south via A19/A167), Stockton-on-Tees (6 minutes west) or Hartlepool (20 minutes north), we run them as a Tees Valley corridor trip — one installer covering the whole TS and DL zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Middlesbrough and Teesside installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Middlesbrough, Stockton, Darlington and Tees Valley installations under your brand throughout. Your Teesside client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Middlesbrough and Teesside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics, industrial and facility signage. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Teesside's mix of post-industrial commercial buildings, regenerated retail and modern business parks generates a wide range of substrate types — confirmed in the brief before material is ordered.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Middlesbrough, Stockton and Darlington in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Middlesbrough, Stockton-on-Tees and Darlington form a natural triangle within the Tees Valley. Stockton town centre is 6 miles west of Middlesbrough via the A66; Darlington is 25 miles south via the A19/A167. A sign company running a Tees Valley programme covering Middlesbrough, Stockton and Darlington can run the entire programme under one WRPX subcontract — same installer, same documentation standard, single point of contact for the TS1–TS5, TS18 and DL1 zones.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Middlesbrough with York or Harrogate in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — York is approximately 50 minutes south of Middlesbrough via the A19 and A64. Harrogate is 55 minutes south via the A19 and A1(M). For a sign company with a North Yorkshire programme covering both York and Middlesbrough, a single A19 corridor day can cover both locations without backtracking. The A19 connects Middlesbrough south through Teesside, across the North Yorkshire Moors and into York — a natural one-way route for a northern programme.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerMiddlesbroughPage() {
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
            Subcontract · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Middlesbrough
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Middlesbrough, Teesside and the wider Tees Valley.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A1(M) direct from South Yorkshire</strong>{" "}
                — Middlesbrough reached via A1(M) north from Doncaster, A66 at Darlington and A19 into Teesside
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Middlesbrough, Stockton-on-Tees and Darlington covered as a single Tees Valley corridor day</span>
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
              Discuss a Middlesbrough subcontract job
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

      {/* Why Middlesbrough */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough — Teesside industrial regeneration and the A1(M) North corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Middlesbrough sits at the centre of the Tees Valley — a post-industrial region
              undergoing significant commercial regeneration since the decline of the steel and
              heavy engineering industries that originally shaped it. The current commercial
              landscape is a mix of regenerated town-centre retail, modern business parks, a
              growing creative and digital economy, a major university campus and the substantial
              industrial and logistics zones that remain active in the Teesside riverside corridor.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print houses, this creates a broad range of installation
              types across a compact geography. Middlesbrough town centre (TS1) — the Cleveland
              Centre, Linthorpe Road retail strip, Captain Cook Square — generates retail and
              hospitality graphics briefs. Teesside University (TS1/TS3) generates education
              and campus identity briefs. The business parks at Teesdale (TS17) and Stockton
              waterfront generate office interior and corporate environment briefs. Teesside
              Industrial Estate and the wider riverside industrial zones generate fleet livery
              and facility graphics briefs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Middlesbrough is also notable for the scale of its ongoing regeneration projects.
              The South Tees Development Corporation zone (former SSI steelworks site, Redcar)
              and the Teesworks freeport development — one of the UK&apos;s largest freeport sites —
              are generating commercial and industrial construction activity that brings with it
              a wave of new premises branding, facility signage and corporate identity installation
              across the TS postcode area.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Middlesbrough client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Middlesbrough &amp; Teesside
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middlesbrough town centre — retail and hospitality</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Middlesbrough town centre —
                the Cleveland Centre, Captain Cook Square, Linthorpe Road and the
                surrounding retail and food quarter. Regenerating town-centre environment with
                a mix of modern retail units and older commercial stock. Brief with full
                site address and frontage type for accurate surface confirmation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockton-on-Tees — High Street and Teesdale</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stockton-on-Tees High Street is one of the widest market streets in England —
                a long linear retail and market trading street with a high density of retail,
                food service and commercial units. Teesdale Business Park (TS17) on the Stockton
                waterfront provides modern office and commercial stock generating office interior
                graphics, wayfinding and branded environment briefs. 6 miles west of Middlesbrough
                via the A66 — covered in the same Tees Valley day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Teesside University &amp; education sector</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, directional graphics, faculty branding, corridor and reception
                vinyls across Teesside University&apos;s town-centre campus (TS1). Education-sector
                access protocols, DBS awareness and term-time scheduling considerations — handled
                in the brief. Multi-building campus programmes consolidated under one subcontract
                for consistent standard. Hartlepool College and Stockton Sixth Form also covered
                within the Teesside education sector.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; Teesworks freeport corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet wraps, vehicle livery, van graphics and commercial vehicle branding across
                Teesside&apos;s logistics, distribution and industrial operator base. Teesworks freeport
                (TS10/TS11 Redcar corridor) generating new commercial activity and vehicle branding
                briefs. Wilton International industrial estate, the Port of Tees and the Teesside
                International Airport zone all generating fleet and facility graphics work for sign
                companies with North East programmes.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darlington — A1(M) junction commercial zone</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Darlington (DL1/DL2/DL3) sits at the A1(M)/A66 interchange — the road junction
                that connects Teesside to the rest of England. Darlington town centre generates
                retail, hospitality and office interior graphics briefs. Morton Park Business
                Park (DL1) provides modern commercial stock. Covered as a natural stop on the
                journey from South Yorkshire to Middlesbrough — or as a standalone Darlington
                day when the programme is DL-postcode only.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hartlepool &amp; north Teesside</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hartlepool (TS24/TS25) — 20 minutes north of Middlesbrough via the A19 —
                provides additional Tees Valley coverage. Hartlepool town centre, Hartlepool
                Marina retail and hospitality zone, and the B&amp;Q/Tesco Dalton Flatts retail park.
                Covered as part of the Tees Valley subcontract day when brief volumes justify
                the northern extension. Hartlepool College of Further Education generating
                education-sector installation briefs within the TS corridor.
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
              Middlesbrough in the A1(M) North corridor — Teesside and North Yorkshire under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A1(M) runs north from Doncaster through Wetherby and the Vale of York to
              Darlington, where the A66 turns east into Teesside and Middlesbrough. This makes
              Middlesbrough a natural northern extension of a South Yorkshire or York-based
              programme — not a separate North East expedition, but the next corridor north from
              Harrogate and York on the A1(M).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a programme covering York, Harrogate and Middlesbrough —
              a common pattern for national brands with retail, hospitality or commercial units
              across the A1(M) North arc — the entire sequence runs under one WRPX subcontract.
              Same installer, same documentation standard, single point of contact across the
              YO, HG and TS postcode zones. No separate Yorkshire and Teesside subcontractors.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The A1(M) North corridor also connects Middlesbrough south to Newcastle and Sunderland
              via the A19 — opening the door to a broader North East programme for sign companies
              with multi-city North East coverage requirements. Middlesbrough is the geographic
              hinge between Yorkshire and the North East: accessible from both, and connectable
              to both within a sensibly planned day.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Middlesbrough &amp; the Tees Valley
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middlesbrough town centre — TS1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Cleveland Centre, Captain Cook Square, Linthorpe Road retail strip and the
                town-centre hospitality quarter. TS1 postcode. Regenerating mixed commercial
                environment — standard modern retail units alongside older commercial stock.
                Surface confirmation particularly relevant for installations on older commercial
                frontages.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockton High Street — TS18</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockton-on-Tees High Street retail and market trading strip. TS18 postcode.
                High-density commercial frontages — retail, food service and hospitality units.
                Teesdale Business Park (TS17) for modern office stock. 6 miles west of
                Middlesbrough. Combined in the same Tees Valley day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darlington — DL1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Darlington town centre (DL1), Morton Park Business Park (DL1) and the A1(M)/A66
                junction commercial zone. 25 miles south of Middlesbrough via A19/A167.
                Covered on the same A1(M) North day en route from South Yorkshire to Teesside
                — or as a standalone DL postcode day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Teesworks &amp; Redcar — TS10/TS11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Teesworks freeport development zone, Redcar town centre and the TS10/TS11
                coastal industrial corridor east of Middlesbrough. New commercial activity
                from the freeport development generates fleet, facility and branded environment
                graphics briefs. Covered as part of a Middlesbrough subcontract day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Teesside University campus — TS1/TS3</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Teesside University town-centre campus (TS1). Education graphics, wayfinding,
                campus identity and faculty branding. DBS-aware access. Term-time scheduling.
                Multi-building programmes managed under one subcontract. Middlesbrough College
                (TS1) and Hartlepool College (TS24) also within the Teesside education zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hartlepool Marina &amp; TS24</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Hartlepool Marina retail and hospitality zone, Hartlepool town centre and the
                TS24/TS25 coastal corridor. 20 minutes north of Middlesbrough via A19. Marina
                environment generating hospitality and retail rebrand graphics. Included in
                the Tees Valley day when programme scope justifies the northern extension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Middlesbrough subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full Tees Valley scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Middlesbrough is efficiently covered as part of a Tees Valley programme —
                combining Middlesbrough with Stockton, Darlington and Hartlepool where brief
                volumes justify it. If your programme includes multiple TS and DL zone sites,
                include all addresses in the brief. We plan the day sequence to minimise dead
                mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Middlesbrough site in unbranded vehicles, introduce ourselves
                as the installation team, and carry out the work under your instructions throughout.
                Your Teesside client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Middlesbrough and Tees Valley installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in your preferred format — ready to forward to your
                Teesside client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Middlesbrough with York, Harrogate and South Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Middlesbrough brief sits alongside York, Harrogate or other A1(M) corridor
                jobs, we run them as a single northbound day. One invoice, one documentation pack
                per site, one consistent installation standard across the whole Yorkshire and Teesside
                programme. No separate Yorkshire and North East subcontractors — one point of contact
                from Sheffield to the TS postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Stockton-on-Tees separately from Middlesbrough?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockton-on-Tees is covered as part of the same Tees Valley day as Middlesbrough —
                the A66 connects both town centres in approximately 15 minutes. If your programme
                includes both Middlesbrough and Stockton installations, include both in the brief
                and we plan them efficiently within the same day. Separate Middlesbrough-only
                briefs are also accepted where Stockton is not part of the programme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Middlesbrough and York on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — York is approximately 50 minutes south of Middlesbrough via the A19 and A64.
                Programmes combining York and Middlesbrough are a standard A19 corridor day for
                WRPX. Depending on installation volumes, the day typically runs York in the morning
                and Middlesbrough in the afternoon — or the reverse — with Darlington as a
                potential intermediate stop on the A1(M)/A66 junction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Middlesbrough and Tees Valley jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Middlesbrough and Tees Valley work. We
                arrive in unbranded vehicles and carry out every installation under your brand.
                Your Teesside client never knows WRPX was involved. Full photographic documentation
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
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
            </Link>
            <Link href="/subcontract-vinyl-installer-harrogate/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Harrogate
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bradford
            </Link>
            <Link href="/subcontract-vinyl-installer-hull/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Hull
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-doncaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Doncaster
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
            Ready to subcontract your Middlesbrough or Teesside installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Middlesbrough or TS/DL postcode brief — installation type,
            site address, material spec and date requirements. We confirm quickly and can plan
            Teesside dates as part of the A1(M) North corridor, combining with York, Harrogate,
            Darlington or Stockton where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Middlesbrough
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
