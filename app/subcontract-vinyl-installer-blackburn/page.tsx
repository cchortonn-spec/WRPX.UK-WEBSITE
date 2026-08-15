import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Blackburn — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Blackburn and the BB postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Blackburn town centre, Lancashire Business Park, Darwen, Accrington and the M65 BB corridor — white-label, photographic sign-off, M62/M65 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-blackburn/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Blackburn — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Blackburn and the BB postcode zone. White-label available. WRPX covers Blackburn town centre, The Mall Blackburn, Cathedral Quarter, Lancashire Business Park BB2, Darwen BB3, Accrington BB5, Clitheroe BB7 and the full M65 BB postcode corridor — M62 west from South Yorkshire to M65 junction 5."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Blackburn", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-blackburn/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Blackburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blackburn is approximately 1 hour 45 minutes from our South Yorkshire base via the M62 west from Doncaster/Sheffield to junction 10, then north on the M6 to junction 29 Bamber Bridge, and west on the M65 to junction 5 Blackburn central — or directly M62 west to junction 18 and M66 north to M65 east. For programmes combining Blackburn with Burnley (15 minutes east on M65 j12), Preston (20 minutes north-west via M6 j31), Bolton (20 minutes south via M65/M61) or Accrington (10 minutes east via A679), we plan them as a Lancashire M65 corridor trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Blackburn and BB postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Blackburn and BB postcode work. We arrive in unbranded vehicles and carry out every installation under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Blackburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Blackburn town centre is a mix of Victorian commercial stock — the Cathedral Quarter has significant period sandstone and brick frontages — and modern retail in The Mall Blackburn. The Victorian mill heritage across the borough means many commercial premises occupy converted or repurposed cotton mill buildings: original brick and timber substrate conditions relevant for wall vinyl briefing.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Blackburn and Burnley on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Blackburn and Burnley are 15 minutes apart on the M65 motorway. The M65 runs directly east from Blackburn (junction 5-6) to Burnley (junction 10-12) as dual carriageway. For sign companies running East Lancashire corridor programmes across the BB postcode zone, a Blackburn–Burnley day covers both urban zones efficiently — or can be extended west to Accrington (10 minutes east of Blackburn on A679) as a three-town M65 programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Lancashire Business Park and Blackburn town centre in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Lancashire Business Park (BB2, Bamber Bridge/Walton Summit) is 15 minutes north of Blackburn town centre via the M65 and A59. The business park is one of the largest in Lancashire — a mix of office, distribution and commercial occupiers. Office interior graphics, branded corporate graphics and fleet livery at the business park combine naturally with retail, hospitality and shopfront graphics in Blackburn town centre as a single BB programme. One invoice, one documentation standard across both zones.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBlackburnPage() {
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
            Subcontract · Blackburn &amp; the BB Postcode Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Blackburn &amp; the M65 East Lancashire Corridor
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Blackburn and the BB postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62/M65 direct from South Yorkshire</strong>{" "}
                — Blackburn at M65 junction 5: 1 hour 45 minutes from Doncaster on motorway
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Blackburn town centre, Lancashire Business Park, Darwen and the BB zone covered as a single programme</span>
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
              Discuss a Blackburn subcontract job
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

      {/* Why Blackburn */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Blackburn — the M65 western anchor and East Lancashire commercial hub
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Blackburn (BB1–BB2) is the largest town in East Lancashire and the western
              anchor of the M65 corridor. The M65 East Lancashire motorway connects
              Blackburn directly east to Accrington (BB5), Burnley (BB10–BB12) and
              Nelson/Colne — making Blackburn the natural western entry point to the
              M65 East Lancashire programme from the M6 or M61.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The BB postcode zone extends further than Blackburn town itself: BB1 is
              the town centre and inner districts, BB2 covers the western suburbs and
              the Lancashire Business Park zone around Walton Summit and Bamber Bridge,
              BB3 covers Darwen — a distinct mill town 4 miles south on the A666 —
              BB5 covers Accrington to the east, BB6 covers Langho and Whalley to
              the north-east, and BB7 covers Clitheroe — the Ribble Valley market town
              in the Forest of Bowland.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Blackburn town centre has a dual character: The Mall Blackburn is the
              modern managed shopping centre (anchor stores, standard contractor access),
              while the Cathedral Quarter around the Cathedral, Fleming Square and
              Church Street retains significant Victorian and Edwardian commercial
              fabric — sandstone and brick frontages where substrate assessment is
              relevant for external vinyl applications on period shopfronts.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated
              and ready to apply. We prepare the surface, install to spec and deliver a
              signed-off photo pack. Your Blackburn client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Blackburn &amp; the BB zone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Mall Blackburn &amp; town centre — BB1</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The Mall Blackburn is the primary managed shopping centre — modern glazed
                shopfronts, standard contractor access arrangements. The adjacent town centre
                retail on King William Street and Darwen Street provides high-street retail
                and hospitality installations. Window graphics, seasonal promotional vinyls,
                branded unit graphics and shopfront applications across the BB1 town centre
                zone. Brief with unit reference for Mall managed centre access.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cathedral Quarter — BB1 Victorian commercial zone</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The Cathedral Quarter around Blackburn Cathedral and Church Street is the
                historic commercial core — Victorian and Edwardian sandstone and brick
                commercial buildings with traditional frontages. Professional services,
                legal, financial and hospitality occupiers. Period shopfront vinyls require
                substrate assessment: painted render, sandstone and Victorian brick are
                common surfaces in this zone. External vinyl on period frontages — include
                surface type in the brief for Cathedral Quarter sites.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancashire Business Park — BB2, Walton Summit</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lancashire Business Park (BB2, Walton Summit, Bamber Bridge — M65 j1a/M6 j29)
                is one of Lancashire&apos;s largest mixed-use business parks — office, distribution,
                light industrial and logistics. Located at the M65/M6/A6 interchange 15 minutes
                north of Blackburn town centre. Office interior branding, corporate wall graphics,
                wayfinding, reception feature walls and fleet livery for the Walton Summit
                business park zone. Modern commercial stock with standard substrate conditions.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darwen — BB3 mill town 4 miles south</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Darwen (BB3) is 4 miles south of Blackburn on the A666 — a distinct cotton
                mill town with its own commercial core around The Greenway shopping centre
                and Market Street. India Mill (the Darlington-inspired chimney, now
                office conversion) is the landmark. Darwen&apos;s commercial stock is
                predominantly Victorian mill-era — brick and stone substrate across much
                of the town centre. Shop front vinyls, window graphics and fleet livery
                for the BB3 zone; included within the Blackburn subcontract programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Accrington — BB5 town centre, M65 east</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Accrington (BB5) is 10 minutes east of Blackburn on the A679 — a market
                town between Blackburn and Burnley with its own covered market hall (the
                Arndale), Burton&apos;s Montague Burton flagship building (Grade II listed) and
                a mix of national and independent town centre retailers. The Accrington
                Stanley FC stadium (Crown Ground) is adjacent to the town centre. Town
                centre retail and commercial graphics, venue branding; covered as a
                BB5 add-on to the Blackburn programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Clitheroe &amp; Ribble Valley — BB7</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clitheroe (BB7) is 12 miles north-east of Blackburn via the A59 — a market
                town in the Ribble Valley below Pendle Hill. The compact town centre on
                Castle Street and Moor Lane has a strong independent retail and hospitality
                character. Covered as a northern extension to a Blackburn BB day for
                programmes including Clitheroe Castle precincts, independent retailers
                or the Primrose Print industrial estate. An occasional add-on rather
                than a primary installation zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M65 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Blackburn on the M65 — the East Lancashire motorway from South Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M65 East Lancashire motorway enters the BB postcode zone at junction 5
              (Blackburn central) and runs east through Accrington (junction 7–8) to
              Burnley (junction 10–12) and Nelson/Colne (junction 13–14). From South Yorkshire
              the approach is M18 west to M62, then M62 west to M66 north and M65 east,
              or M62 west to M6 north to junction 29 Bamber Bridge then M65 east — both
              routes total approximately 1 hour 45 minutes to Blackburn.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies with programmes across the M65 East Lancashire corridor,
              Blackburn is the western entry. Accrington (10 minutes east, A679) and
              Burnley (15 minutes east, M65) are natural additions to a Blackburn day
              — a single M65 east programme covers the full BB postcode zone in one
              trip without retracing. One installer covers Blackburn, Darwen, Accrington
              and Burnley in a single day with east-to-west or west-to-east routing.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M65 also connects south-west to Bolton (M61, 20 minutes) and Manchester
              (M61/M60, 35 minutes), and north-west to Preston (M6 j31, 20 minutes).
              For agencies and print houses with North West programmes spanning Lancashire
              and Greater Manchester, the M65 Blackburn zone bridges the M6 north corridor
              with the Manchester orbital.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Blackburn &amp; the BB postcode zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Mall Blackburn — BB1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Blackburn&apos;s primary managed shopping centre. Modern glazed shopfronts,
                standard contractor access. King William Street adjacent for high-street
                retail. Window graphics, seasonal vinyls, branded unit graphics.
                Brief with unit reference for managed access.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cathedral Quarter — BB1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Victorian commercial core around Blackburn Cathedral. Professional
                services, hospitality, independent retail. Sandstone and brick
                frontages — substrate briefing required for external vinyl on
                period frontages. Church Street and Fleming Square zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancashire Business Park — BB2</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Walton Summit/Bamber Bridge — M65 j1a/M6 j29. Major mixed-use
                business park: office, distribution, light industrial. Office
                branding, corporate graphics, fleet livery. 15 minutes north
                of Blackburn town centre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darwen — BB3</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Mill town 4 miles south on A666. The Greenway and Market Street
                town centre. Victoria cotton mill heritage — brick substrate.
                Shop front vinyls, window graphics, fleet livery. Natural
                add-on to Blackburn day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Accrington — BB5</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                10 minutes east via A679. Town centre retail including Arndale
                market hall and Burton&apos;s listed building. Bridge between
                Blackburn and Burnley on M65. Town centre retail and commercial
                graphics.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Blackburn Rovers — Ewood Park BB2</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Ewood Park stadium (BB2) — Championship football venue on the
                edge of Blackburn town. Corporate hospitality graphics, stadium
                branding, sponsor graphics and fleet livery for football club
                and stadium facilities contractor work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Blackburn subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full BB postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Blackburn and the BB zone are efficiently covered as part of a wider
                M65 East Lancashire corridor programme — combining BB (Blackburn/Accrington)
                with Burnley BB10–BB12 (15 minutes east), Preston PR (20 minutes north-west),
                Bolton BL (20 minutes south) or Manchester M (35 minutes south-west) where
                brief volumes justify it. If your programme includes multiple BB zone sites,
                include all addresses in the brief. We plan the day sequence to minimise
                dead mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Mill-era substrate considerations</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Much of Blackburn&apos;s commercial stock occupies Victorian mill-era buildings —
                brick, stone, painted render and original timber window frames. For external
                window or fascia vinyls on period frontages, include a surface description or
                photo in the brief. Modern commercial units (retail parks, business park buildings)
                have standard substrate conditions and no special briefing is needed. The
                Cathedral Quarter and Darwen town centre zones are the areas where substrate
                briefing is most relevant.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Blackburn or BB zone site in unbranded vehicles, introduce
                ourselves as the installation team, and carry out the work under your
                instructions throughout. Your client&apos;s experience is with your company at
                every stage — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Blackburn installation is documented with before, during-installation
                and completed sign-off photographs. Photo packs delivered to you same day
                or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Blackburn with Burnley, Preston or Bolton in one programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Blackburn brief sits alongside Burnley, Preston or Bolton, we plan
                them as a single M65/M6/M61 Lancashire trip. One invoice, one documentation
                pack per site, one consistent installation standard across the full BB/BL/PR
                postcode programme. No separate contractors for different Lancashire towns —
                one point of contact from Sheffield to East Lancashire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Blackburn subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Is Blackburn covered separately from Burnley?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Blackburn (BB1–BB2) and Burnley (BB10–BB12) are distinct towns
                15 minutes apart on the M65. Sign companies with programmes across both
                the Blackburn and Burnley postcode zones can have a single WRPX subcontract
                cover both — or we can cover Blackburn as a standalone BB day if the volume
                is there without a Burnley visit on the same trip. Accrington (BB5) sits
                between them on the A679 and is a natural intermediate stop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Blackburn and Preston on the same day?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Preston (PR) is 20 minutes north-west of Blackburn via the M65/M6 junction 31.
                For sign companies running North West programmes covering BB and PR postcode
                zones, a combined Blackburn–Preston day covers both commercial centres
                efficiently. Lancashire Business Park at Walton Summit (BB2/M6 j29) sits
                directly on the A6 between Blackburn and Preston — a natural intermediate
                stop on the route.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                What is the access situation at The Mall Blackburn?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Mall Blackburn is a managed shopping centre — contractor access during
                trading hours requires registration with the centre management team. For
                installations inside the Mall, include unit reference and trading name
                in the brief. We can work to centre timelines — early morning before centre
                opens or agreed contractor windows — and we liaise directly with the
                facilities team on your behalf where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the M65 East Lancashire corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Burnley &amp; East Lancashire
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bolton
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
            </Link>
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wigan
            </Link>
            <Link href="/subcontract-vinyl-installer-rochdale/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Rochdale &amp; Oldham
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
            Ready to subcontract your Blackburn or BB zone installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Blackburn, BB postcode or East Lancashire brief —
            installation type, site address, material spec and date requirements. We confirm
            quickly and plan BB dates as part of the M65 East Lancashire corridor, combining
            with Burnley, Preston or Bolton where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Blackburn
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
