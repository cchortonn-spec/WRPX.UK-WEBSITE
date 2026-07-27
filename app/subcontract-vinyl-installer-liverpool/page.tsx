import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Liverpool — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Liverpool and Merseyside for sign companies, print houses and fit-out contractors. WRPX covers Liverpool ONE, Albert Dock, Baltic Triangle, the Knowledge Quarter and the full L postcode — white-label, photographic sign-off, direct from South Yorkshire via M62.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-liverpool/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Liverpool — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Liverpool and Merseyside. White-label available. WRPX covers Liverpool ONE, Albert Dock, Baltic Triangle, Knowledge Quarter, the Wirral via Mersey Tunnel and the full L/CH postcode zone — M62 direct from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Liverpool", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-liverpool/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liverpool is approximately 100–115 minutes from our South Yorkshire base via the M1 and M62. The M62 runs direct from the M1 junction through Leeds, Bradford and across the Pennines to Warrington (junction 8–9), then continues west to Liverpool at junction 6. For programmes combining Liverpool with Warrington (30 minutes east), Manchester (45 minutes east) or Yorkshire cities, we run them as corridor trips — one installer relationship covering the full M62 belt without separate Merseyside and Yorkshire subcontractors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Liverpool and Merseyside installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out the Liverpool installation under your brand throughout. Your Merseyside client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on the day of completion. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover the full L postcode zone including Liverpool city centre, Liverpool ONE, Albert Dock, Baltic Triangle, Knowledge Quarter, Birkenhead and Wirral (CH postcode via Mersey Tunnel), Bootle and north Liverpool, and the M57/M58 outer ring.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Liverpool with Manchester and Warrington in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Liverpool sits at the western end of the M62 corridor. Warrington is 30 minutes east, Manchester 45 minutes east. A sign company running a North West brand rollout covering Liverpool, Warrington and Manchester can run the entire programme under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the Liverpool–Warrington–Manchester axis and then Yorkshire further east. No separate Merseyside, Cheshire and Manchester subcontractors to manage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birkenhead and the Wirral as well as Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Birkenhead and the Wirral (CH postcode) are covered via the Mersey Tunnels as part of the Liverpool zone. The Wirral has a distinct commercial belt including Birkenhead town centre, the Cammell Laird site, Bebington and the Wirral Business Park. Hamilton Square, Conway Street and the wider Birkenhead commercial zone generate regular shop front, office and retail graphics briefs. A Liverpool brief that also includes Wirral sites runs as a single trip.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerLiverpoolPage() {
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
            Subcontract · Liverpool &amp; Merseyside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Liverpool
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Liverpool, Merseyside and the wider L postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail graphics and wayfinding systems — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 direct from South Yorkshire</strong>{" "}
                — Liverpool covered as part of corridor runs linking Yorkshire, Warrington and Manchester
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
              Discuss a Liverpool subcontract job
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

      {/* Why Liverpool */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Liverpool — the western anchor of the M62 corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Liverpool sits at the western terminus of the M62, the primary trans-Pennine motorway
              running from the docks at Liverpool east through Warrington, Manchester, Leeds, Bradford
              and across into Yorkshire. From WRPX&apos;s South Yorkshire base, the M1 connects north
              to Leeds and the M62, running west through the Pennines to Warrington and on to Liverpool
              — roughly 100–115 minutes via motorway. This makes Liverpool reachable as part of a
              corridor programme rather than a standalone long-distance trip.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Liverpool&apos;s commercial character is genuinely distinctive from the other major North
              West cities. Where Manchester has developed a dense city-centre commercial core,
              Liverpool has a more distributed commercial geography: the waterfront and Albert Dock
              heritage and tourism zone, Liverpool ONE as the primary retail destination, a fast-growing
              Baltic Triangle creative and digital district, the Knowledge Quarter anchored by two major
              universities and the Royal Liverpool University Hospital, and a substantial outer commercial
              belt along the M57 and M58. Understanding these distinct zones is what separates effective
              Liverpool installation planning from generic North West logistics.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The Wirral peninsula across the Mersey (CH postcode) adds a further distinct commercial
              geography — Birkenhead town centre, the Cammell Laird industrial heritage, Bebington and
              the Wirral&apos;s suburban commercial belt — accessible via the Mersey Tunnels as part of the
              same Liverpool trip. For sign companies running Merseyside-wide programmes, Liverpool and
              the Wirral regularly appear in the same brief.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Liverpool client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Liverpool &amp; Merseyside
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Liverpool ONE &amp; city centre retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision, promotional vinyls and
                branded window installs across Liverpool ONE, Church Street, Bold Street, Metquarter
                and the wider Liverpool city centre retail strip. Rollout consistency across multi-unit
                retail programmes — from a single Liverpool store to a North West chain programme
                covering Manchester and Warrington in the same week.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Albert Dock &amp; waterfront hospitality</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail, restaurant, bar and hospitality vinyl installations across the Albert Dock
                complex, Pier Head, Mann Island and the Waterfront. High-footfall heritage environments
                requiring careful surface preparation and clean installation — no disruption to tenant
                operations, finished graphics matching the architectural setting. Museums, galleries
                and visitor attractions alongside commercial retail and hospitality.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Baltic Triangle &amp; creative district</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office branding, studio interior graphics, wall wraps, wayfinding systems and
                reception fit-outs across Liverpool&apos;s fast-growing Baltic Triangle creative and
                digital district. Former industrial units converted to creative office space generating
                a consistent stream of interior graphics briefs — open-plan brand environments, exposed
                brickwork substrates, feature wall wraps and directional vinyl in loft-style spaces.
                L1/L3 postcode zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Knowledge Quarter — universities &amp; NHS</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics, reception vinyls, faculty branding
                and corridor graphics across the University of Liverpool, Liverpool John Moores
                University, Liverpool School of Tropical Medicine and the Royal Liverpool University
                Hospital complex. Multi-building campuses with consistent specification standards,
                DBS-aware site access and term-time scheduling requirements — all managed under a
                single subcontract brief.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; commercial vehicle graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vehicle wraps, full and partial fleet livery, cut vinyl signage and commercial vehicle
                graphics across Liverpool&apos;s logistics, distribution and commercial vehicle sectors.
                Merseyside&apos;s position as a port city generates regular fleet branding briefs from
                haulage, freight, distribution and commercial services operators — national brand
                fleets serviced through your sign or print company under one subcontract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Birkenhead &amp; Wirral (CH postcode)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front graphics, retail window vinyls, office interior graphics and fascia
                installations across Birkenhead town centre, Hamilton Square, Conway Street and the
                Wirral commercial belt — Bebington, Heswall, West Kirby, Bromborough Dock and the
                Wirral Business Park industrial zone. Accessed via the Mersey Tunnels as part of the
                same Liverpool trip. No separate Wirral-based installer required for Merseyside-wide
                programmes.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M62 Corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Liverpool in the M62 corridor — Hull to the docks, one installer
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M62 connects Liverpool&apos;s port geography directly to the Humber ports at Hull in
              the east — the trans-Pennine spine of northern England. WRPX&apos;s South Yorkshire base
              sits at the midpoint of this corridor: Sheffield connects north to Leeds and the M62 via
              the M1, with the M62 running west through the Pennines, past Bradford, Huddersfield,
              Rochdale, Manchester, Warrington and on to Liverpool. The M62 is how WRPX reaches
              every major city on its western half — without requiring separate regional subcontractors
              for each city.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a national or UK-wide brand rollout covering both Yorkshire
              and the North West, the M62 corridor is typically the part of the programme that
              generates the most logistics questions — who covers Manchester? who covers Warrington?
              who covers Liverpool? With WRPX, the entire corridor from Hull west to Liverpool can run
              under one subcontract. A programme covering Sheffield, Leeds, Manchester, Warrington and
              Liverpool is a single week of corridor work — same installer, same documentation standard,
              one invoice per site.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M57 and M58 outer orbital roads give Liverpool the same kind of distributed outer
              commercial belt that the M60 gives Manchester — business parks and retail parks in
              Knowsley, Huyton, Prescot, Skelmersdale and Haydock that are not in the city centre
              but are part of a Liverpool brief. We cover these zones as part of the L/WN/WA postcode
              reach on the same trip.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Liverpool &amp; Merseyside
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Liverpool city centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Liverpool ONE, Church Street, Bold Street, Cavern Quarter, Castle Street financial
                district, Metquarter and St John&apos;s Shopping Centre. L1/L2 postcode zone. National
                retail chains, independent operators, hospitality brands and professional services
                generating regular window graphics and interior fit-out briefs.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Waterfront &amp; Albert Dock</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Albert Dock, Pier Head, Mann Island, Museum of Liverpool, Tate Liverpool and the
                riverside commercial zone. Heritage-sensitive installation environments with
                conservation-grade surface requirements. High footfall, strict access protocols and
                premium finish expected. L3 postcode.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Baltic Triangle</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Liverpool&apos;s emerging creative and digital quarter — converted industrial units,
                creative studios, co-working spaces, independent hospitality and event venues.
                Interior branding, feature wall wraps, exposed brick preparation and wayfinding
                installs. Jamaica Street, Parliament Street, Baltic Place. L1/L8 postcode.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Knowledge Quarter</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                University of Liverpool, Liverpool John Moores University, Royal Liverpool University
                Hospital, Liverpool School of Tropical Medicine and the expanding Knowledge Quarter
                development zone. Wayfinding, faculty graphics, reception installs and campus
                branding programmes. L3/L7 postcode. DBS-aware access, term-time scheduling.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Knowsley &amp; outer Merseyside</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Knowsley Business Park, Haydock Industrial Estate, Prescot, Huyton and the M57 outer
                ring commercial belt. Logistics, distribution, manufacturing and commercial services
                generating fleet livery, warehouse graphics and brand identity briefs. L34/WA11 postcode
                zone — connecting Liverpool to the Warrington and Manchester outer commercial belt.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Birkenhead &amp; Wirral</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Birkenhead town centre, Hamilton Square, Conway Street, the Pyramids Shopping Centre
                and the Wirral commercial belt. CH41–CH48 postcode zone. Mersey Tunnels access.
                Retail, hospitality, professional services and Cammell Laird industrial site. Treated
                as one zone with Liverpool — no separate Wirral subcontract needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Liverpool subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Liverpool installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address (L or CH postcode), material spec, installation
                type, surface condition notes and any access constraints. Albert Dock and the
                waterfront zone has specific heritage access requirements for some installations —
                flag these and we confirm feasibility before you commit material. Knowledge Quarter
                university and hospital sites may require DBS or visitor registration — handled in
                the brief, not on the day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Liverpool site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions. Your
                client&apos;s experience is with your company throughout — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Liverpool installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered to you same day or next morning
                in whatever format you need — ready to forward to your Merseyside client or add to
                your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Liverpool with Warrington, Manchester and Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Liverpool brief sits alongside jobs in Warrington, Manchester, Leeds or
                Sheffield, we combine them in a single corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the whole programme.
                The M62 makes multi-city North West and Yorkshire programmes a single logistics
                conversation rather than four separate subcontractor relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Liverpool?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Liverpool is approximately 100–115 minutes from our South Yorkshire base via the
                M1 north to Leeds and the M62 west to Liverpool. For corridor programmes combining
                Liverpool with Warrington (30 minutes east) or Manchester (45 minutes east), we
                run them as a single trip — the M62 connects the entire North West corridor and
                Yorkshire in one route.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Bootle and north Liverpool?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Bootle (L20/L30) and north Liverpool are covered as part of the L postcode
                zone. The Bootle commercial area, Regent Road industrial zone and the container port
                logistics belt north of the city generate regular fleet graphics and commercial
                signage briefs. These are treated as part of the Liverpool trip, not a separate zone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Liverpool and Wirral jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Merseyside work. We arrive in unbranded vehicles
                and carry out every installation under your brand. Your Liverpool or Wirral client never
                knows WRPX was involved. Full photographic documentation delivered in your agreed format.
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
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
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
            Ready to subcontract your Liverpool installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Liverpool or Merseyside brief — installation type, site address,
            material spec and date requirements. We confirm quickly and can often turn around
            Liverpool dates within a few days for straightforward installs, combining with Warrington
            or Manchester when there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Liverpool
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
