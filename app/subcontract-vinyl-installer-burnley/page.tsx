import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Burnley & East Lancashire — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Burnley, Blackburn and East Lancashire for sign companies, print houses and fit-out contractors. WRPX covers Burnley Bridge Business Park, Burnley town centre, Blackburn BB1–BB2, The Mall, Accrington, Nelson, Darwen and the BB postcode zone — white-label, photographic sign-off, via M62 and M65.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-burnley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Burnley & East Lancashire — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Burnley, Blackburn and East Lancashire. White-label available. WRPX covers Burnley Bridge Business Park, Burnley town centre, Blackburn BB1–BB2, The Mall Blackburn, Accrington BB5, Nelson BB9, Colne BB8, Darwen BB3 and the full BB postcode zone — M62 west then M65 east from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Burnley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-burnley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Burnley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnley is approximately 90–110 minutes from our South Yorkshire base via the M1 north to Leeds, M62 west to the M65 junction, then M65 east to Burnley. Alternatively, via M62 west to Manchester then M61 north to Bolton, then A666 north to Blackburn and M65 east to Burnley — used when the programme includes Manchester or Bolton earlier in the day. For programmes combining Burnley with Preston (30 minutes west via M65 and M6), Blackburn (10 minutes west via M65), or Bolton (30 minutes south via A666), we run them as corridor trips.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Burnley and East Lancashire installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Burnley, Blackburn and East Lancashire installations under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Burnley and Blackburn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics, warehouse and industrial unit graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. East Lancashire's mix of mill-conversion offices, modern retail parks and industrial estates generates a wide range of substrate types — flagged and confirmed in the brief before material is ordered.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Burnley Bridge Business Park and Burnley town centre in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Burnley Bridge Business Park sits directly off the M65 at junction 11, and Burnley town centre (Charter Walk, St James Street) is 10 minutes east. Both zones are covered as part of the same Burnley subcontract day. Burnley Bridge generates office interior graphics and commercial signage briefs from its business park occupiers, while the town centre generates retail window graphics, shop front vinyls and hospitality branding.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Burnley with Blackburn, Accrington and Nelson in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the M65 runs west-to-east through the entire East Lancashire corridor: Blackburn (BB1) to Accrington (BB5) to Burnley (BB10) to Nelson (BB9) and Colne (BB8). The entire motorway corridor is approximately 20 miles from end to end. A sign company running a programme across the East Lancashire towns can run the full corridor under one WRPX subcontract — same installer, same documentation standard, single point of contact for the BB postcode zone from Blackburn to Colne.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBurnleyPage() {
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
            Subcontract · Burnley, Blackburn &amp; East Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Burnley &amp; East Lancashire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Burnley, Blackburn, Accrington, Nelson, Colne, Darwen and
            the full BB postcode zone. We install window graphics, wall wraps, vehicle wraps, shop
            fronts, floor graphics, retail and hospitality graphics — on your instructions, under
            your brand, with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 + M65 from South Yorkshire</strong>{" "}
                — East Lancashire covered as part of corridor runs linking Yorkshire, Lancashire and Greater Manchester
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Full M65 East Lancashire corridor — Blackburn, Accrington, Burnley, Nelson, Colne in one subcontract</span>
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
              Discuss an East Lancashire subcontract job
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

      {/* Why Burnley */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              East Lancashire — a corridor of commercial activity along the M65
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              East Lancashire is not a single town but a chain of commercially active towns
              strung along the M65 motorway. From Blackburn in the west (BB1–BB2) through
              Darwen (BB3), Accrington (BB5), Burnley (BB10–BB12), Padiham (BB12) to Nelson
              (BB9) and Colne (BB8) at the eastern end — the corridor is approximately 20 miles
              end to end, with each town generating its own retail, commercial, industrial and
              hospitality graphics work. Sign companies who need installation support across
              East Lancashire are often managing briefs spread across three or four of these
              towns simultaneously.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Burnley is the largest commercial hub on the corridor — Burnley Bridge Business
              Park off M65 junction 11 is a modern, mixed-use commercial park generating office
              interior graphics and commercial signage work from professional services and
              technology occupiers. Burnley town centre (Charter Walk, St James Street) provides
              the retail and hospitality circuit. Turf Moor and the wider Burnley FC estate
              create occasional sports and events graphics briefs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Blackburn is separately significant — not just as the western end of the M65, but
              as a major town in its own right. The Mall Blackburn provides a concentrated retail
              graphics environment. Blackburn town centre (BB1), Darwen (BB3) and the Daisyfield
              business belt generate office and retail briefs. Blackburn is also the M65 entry
              point from Preston (M6 junction 31A) and Bolton (A666 south).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your East Lancashire client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Burnley &amp; East Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Burnley Bridge Business Park</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, glass partition film, reception feature walls, meeting room
                branding and wayfinding across Burnley Bridge Business Park (M65 junction 11, BB11).
                Modern commercial park generating consistent office branding briefs from professional
                services, technology and financial sector occupiers. Standard commercial access —
                straightforward briefing and installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Blackburn — The Mall &amp; town centre BB1</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, one-way vision, promotional vinyls and branded retail
                installations across The Mall Blackburn (BB1 7JQ) and Blackburn town centre —
                Church Street, Darwen Street, Market Hall. The Mall generates consistent seasonal
                window graphics programmes from national brands with units across its 70+ store
                circuit. Town centre provides retail, hospitality and commercial graphics briefs.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Burnley town centre — Charter Walk &amp; St James Street</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail and hospitality graphics across Charter Walk shopping centre (BB11 1ET),
                St James Street, Market Place and the wider Burnley town-centre circuit. Window
                graphics, shop front vinyls, wall graphics and promotional vinyl campaigns.
                Burnley town centre mix of modern retail and heritage-era commercial frontage —
                brief us on frontage type and surface for accurate spec confirmation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Nelson, Colne &amp; Pendle — BB9 / BB8</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial graphics, window vinyls, shop front installations and fleet livery across
                Nelson (BB9) and Colne (BB8) — the eastern end of the M65 corridor. Pendle Shopping
                Centre in Nelson, Nelson town centre and the Colne commercial circuit. East Lancashire&apos;s
                Pennine edge towns generating retail, trade and industrial graphics briefs accessible
                as part of a full M65 corridor day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Industrial &amp; fleet — BB postcode industrial zones</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet wraps, vehicle livery, van graphics, warehouse graphics and commercial unit
                fascias across East Lancashire&apos;s industrial estates. Burnley&apos;s Widow Hill Road
                industrial belt (BB10), Accrington commercial zone (BB5), Darwen industrial estate
                (BB3), Blackburn&apos;s Daisyfield business park (BB1). Fleet-intensive logistics and
                manufacturing along the M65 corridor from Blackburn to Colne.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Accrington &amp; Darwen — BB5 / BB3</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial graphics, retail window vinyls, hospitality graphics and wayfinding across
                Accrington (BB5) and Darwen (BB3) — the mid-section of the East Lancashire corridor.
                Accrington Market Hall, Broadway retail, Warner Bros. Cinema and the Accrington
                commercial circuit. Darwen town centre and India Mill office complex. Both covered as
                part of the M65 corridor day alongside Blackburn and Burnley.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
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
              The M65 East Lancashire corridor — Blackburn to Colne under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M65 is the geographic spine of East Lancashire. It runs west from the M6 at
              Preston, through Blackburn (BB1), past Accrington (BB5), through Burnley (BB10–BB12)
              and on to Nelson (BB9) and Colne (BB8) where it becomes the A6068. The entire corridor
              is approximately 20 miles end to end and provides a straightforward logistics route
              through the East Lancashire towns without leaving the motorway network.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies running programmes across East Lancashire — a common scenario for
              national brands with units in Blackburn, Accrington, Burnley and Nelson — the corridor
              can be covered under a single WRPX subcontract. Same installer, same documentation
              standard, one invoice per site. No separate Blackburn, Burnley and Nelson subcontractors
              to coordinate for a multi-town rollout along the M65.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              East Lancashire also connects in multiple directions from the M65: Preston and the M6
              west (30 minutes from Blackburn), Bolton and Manchester south via the A666 (30 minutes
              from Blackburn to Bolton), Halifax and West Yorkshire east via the A646 from Burnley
              over the Pennines (45 minutes to Halifax). Programmes that include Yorkshire origins,
              trans-Pennine M62 routing and East Lancashire destinations can be structured as a
              single cross-corridor day with one point of contact throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Burnley &amp; East Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Blackburn — BB1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Mall Blackburn (70+ stores), Blackburn town centre, King William Street,
                Church Street and the Daisyfield business belt. Western gateway to East
                Lancashire from Preston and Bolton. M65 junction 5 / M6 junction 31A connection.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Darwen — BB3</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Darwen town centre, India Mill Enterprise Centre (India Mill chimney),
                Darwen Market, Railway Road commercial zone and the Darwen industrial belt.
                BB3 postcode. A666 from Bolton south. Mid-corridor between Blackburn and
                Accrington.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Accrington — BB5</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Accrington Market Hall, Broadway shopping, Peel Centre retail park and the
                Accrington commercial circuit. BB5 postcode. M65 junction 8. Mid-corridor
                between Darwen and Burnley. Generating retail window, hospitality and
                commercial signage graphics briefs.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Burnley — BB10 / BB11 / BB12</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Burnley Bridge Business Park (M65 j11), Charter Walk shopping centre, St James
                Street, Burnley Leisure Village and the Widow Hill Road industrial belt. Largest
                commercial hub on the M65 corridor. Multiple postcode zones across town centre,
                business park and industrial areas.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Nelson — BB9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Pendle Shopping Centre, Nelson town centre, Every Street commercial zone and
                Nelson industrial estate. BB9 postcode. M65 terminus — A6068 Colne Road east.
                East Lancashire Pennine edge town generating retail, trade and industrial
                graphics work.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Colne — BB8</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Colne town centre, Market Street commercial zone, Crown Commercial Estate
                and the A6068/A56 gateway east towards Yorkshire. BB8 postcode. Eastern
                terminus of the M65 East Lancashire corridor. A646 Burnley–Halifax
                trans-Pennine route connection — cross-corridor programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What an East Lancashire subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on which towns are included</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                East Lancashire programmes often span multiple M65 corridor towns. Send us the
                full site list — town, site address, installation type, material spec, access
                constraints and dates — and we plan the corridor sequence efficiently. Blackburn-to-Colne
                programmes are handled as a single day or split across two days depending on install
                volume. We confirm logistics and flag any surface, access or substrate issues before
                you commit material to production.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your East Lancashire sites in unbranded vehicles, introduce ourselves to
                your client as the installation team, and carry out the work under your instructions
                throughout. Your client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand anywhere on the M65 corridor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every East Lancashire installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered to you same day or next morning
                — per site, in whatever format you need. Ready to forward to your client or add to your
                own project documentation. Multi-site corridor programmes receive a documentation pack
                per site, not one combined pack.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine East Lancashire with Preston, Bolton and Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The M65 connects west to Preston (M6) and south to Bolton (A666) and Manchester (M61).
                The A646 connects Burnley east to Halifax and the West Yorkshire circuit. Programmes
                that combine East Lancashire with Preston, Bolton and Yorkshire origins can be run
                as a single cross-corridor subcontract. One invoice per site, one documentation
                standard, one installer familiar with the full M65 and trans-Pennine circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            East Lancashire subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover the full M65 corridor or just Burnley?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The full corridor — Blackburn (BB1), Darwen (BB3), Accrington (BB5), Burnley
                (BB10–BB12), Padiham (BB12), Nelson (BB9) and Colne (BB8) are all covered as
                part of a single East Lancashire subcontract. We do not restrict coverage to
                Burnley alone. If your programme spans multiple BB postcode towns, include all
                the site addresses in the brief and we plan the corridor sequence and confirm
                whether it is a one-day or two-day programme based on install volumes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover trans-Pennine programmes linking East Lancashire to Yorkshire?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — the A646 connects Burnley to Halifax over the Pennines (45 minutes),
                providing a direct link between East Lancashire and West Yorkshire for
                cross-Pennine programmes. The M65 to M62 eastbound also connects East Lancashire
                to Huddersfield, Leeds and Sheffield. Programmes that combine East Lancashire
                sites with West Yorkshire or South Yorkshire sites can often be structured as
                a single cross-corridor day from WRPX&apos;s South Yorkshire base.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Burnley and East Lancashire jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all East Lancashire work. We arrive in
                unbranded vehicles and carry out every installation under your brand. Your
                Burnley, Blackburn or East Lancashire client never knows WRPX was involved.
                Full photographic documentation delivered in your agreed format.
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
            <Link href="/subcontract-vinyl-installer-blackburn/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackburn &amp; East Lancashire
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
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-halifax/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Halifax &amp; Calderdale
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
            </Link>{" "}
            ·{" "}
            <Link href="/blog/bolton-east-lancashire-installation-guide/" className="text-accent hover:underline">
              Bolton &amp; East Lancashire installation guide
            </Link>{" "}
            ·{" "}
            <Link href="/subcontract-vinyl-installer-nelson/" className="text-accent hover:underline">
              Nelson BB9
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Ready to subcontract your East Lancashire installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Burnley, Blackburn or East Lancashire brief — installation type,
            site addresses (BB postcode and town), material spec and date requirements. We confirm
            quickly and can often turn around East Lancashire corridor dates within a few days,
            combining multiple M65 towns when brief volumes warrant the full corridor run.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about East Lancashire
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
