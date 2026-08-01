import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Bolton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Bolton and Greater Manchester North for sign companies, print houses and fit-out contractors. WRPX covers Bolton town centre, Middlebrook Retail Park, University of Bolton, Bolton One and the BL postcode zone — white-label, photographic sign-off, direct from South Yorkshire via M62 and M61.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bolton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Bolton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Bolton and Greater Manchester North. White-label available. WRPX covers Bolton town centre, Crompton Place, Middlebrook Retail Park Horwich, University of Bolton, Bolton One and the BL postcode zone — M62 west to Manchester then M61 north from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Bolton", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bolton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Bolton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bolton is approximately 90–110 minutes from our South Yorkshire base via the M1 north to Leeds, M62 west to Manchester, then M61 north to Bolton. For programmes combining Bolton with Manchester (20 minutes south via M61), Wigan (15 minutes west via A58/M58), or Preston (30 minutes north via M61), we run them as corridor trips — one installer covering the Greater Manchester North and Lancashire circuit without separate Bolton and Manchester subcontractors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Bolton installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Bolton and BL postcode installations under your brand throughout. Your Bolton client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Bolton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Bolton's mix of Victorian mill-conversion offices, modern retail parks and university buildings generates a wide range of substrate types — flagged and confirmed in the brief before material is ordered.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Middlebrook Retail Park and Bolton town centre in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Middlebrook Retail Park at Horwich sits off the M61 at junction 6, approximately 4 miles north-west of Bolton town centre. Both zones are covered as part of the same Bolton subcontract day. Middlebrook generates consistent retail graphics briefs — national brands with units across the retail park's 60+ stores, running seasonal window programmes and brand refresh installs throughout the year. Bolton town centre (Crompton Place, The Market Place) can be covered in the same trip without backtracking.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Bolton with Manchester, Wigan and Bury in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Bolton sits on the M61, which connects south to Manchester (M60 ring) and north to Preston (M6). Wigan is 15 minutes west via the A58 and M58. Bury is 15 minutes east via the A58. A sign company running a Greater Manchester North programme covering Bolton, Bury, Wigan and Manchester can run the entire programme under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the BL, BL9, WN and M60 arc.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBoltonPage() {
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
            Subcontract · Bolton &amp; Greater Manchester North
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Bolton
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Bolton, Greater Manchester North and the BL postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 + M61 from South Yorkshire</strong>{" "}
                — Bolton covered via Manchester as part of corridor runs linking Yorkshire, Greater Manchester and North Lancashire
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Middlebrook Retail Park + Bolton town centre covered as one trip — no separate subcontractors</span>
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
              Discuss a Bolton subcontract job
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

      {/* Why Bolton */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bolton — two distinct commercial zones on the M61
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Bolton sits at the northern end of the M61, which provides a direct link south to
              Manchester city centre and the M60 ring, and north to Preston and the M6. This
              position makes Bolton a natural staging point for Greater Manchester North programmes —
              not a detour from Manchester, but the next logical stop up the motorway.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography splits across two main zones. Middlebrook Retail Park at
              Horwich — directly off M61 junction 6 — is one of the North West&apos;s better-performing
              retail parks with 60+ units including major leisure and retail anchor stores. It
              generates consistent seasonal window graphics programmes and brand rollout briefs
              from national retailers with units there. Separately, Bolton town centre (Crompton
              Place, The Market Place, Deansgate) serves the BL1 retail and hospitality core —
              Victorian mill-era street pattern with some modern retail development. The two zones
              are 4 miles apart and both accessible within a single Bolton subcontract day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond retail, Bolton has a growing office and tech economy. Bolton One — the
              health, sport and enterprise campus adjacent to the town centre — generates office
              interior graphics, wayfinding and branded environment briefs. The University of
              Bolton campus creates education-sector installation work. Trinity Street and Mealhouse
              Lane provide the hospitality and food-service quarter.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Bolton client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Bolton &amp; Greater Manchester North
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middlebrook Retail Park — seasonal and rollout graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal window graphics, promotional vinyl campaigns, brand rollout installs and
                retail environment graphics across Middlebrook&apos;s 60+ stores. Directly off M61
                junction 6, Horwich BL6. National retailers running seasonal window programmes and
                branded retail environments across their Middlebrook units — a consistent source of
                rollout graphics work for sign companies covering the Greater Manchester and
                Lancashire circuit.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bolton town centre — Crompton Place &amp; Market Place</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, one-way vision, promotional vinyls and branded
                retail installations across Crompton Place (BL1 2AL), The Market Place and
                Deansgate. Bolton town centre serves the BL1 retail and hospitality core —
                standard modern and Victorian-era retail stock, generally straightforward to
                access. Brief us on unit size, frontage type and surface material for accurate
                material spec confirmation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">University of Bolton &amp; Bolton One campus</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, directional graphics, faculty branding, corridor and reception
                vinyls across the University of Bolton town-centre campus (BL3) and Bolton One
                health, sport and enterprise campus. Education-sector access protocols, DBS
                awareness and term-time scheduling considerations — all handled in the brief.
                Multi-building programmes consolidated under one subcontract for consistent standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Office interiors &amp; professional services</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, glass partition film, meeting room branding, wayfinding
                and reception feature walls across Bolton&apos;s growing professional services and
                technology sector. Bolton&apos;s out-of-town business parks — Horwich Business Park
                (BL6), Waters Meeting (BL1), Manchester Road commercial corridor — generating
                office branding briefs from financial services, insurance and tech occupiers.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; commercial vehicle graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet wraps, vehicle livery, van graphics and commercial vehicle branding across
                Bolton&apos;s logistics, distribution and trade services sector. BL postcode industrial
                zones — Lostock Industrial Estate BL6, Westhoughton BL5, Horwich industrial belt
                — generating vehicle graphics work for fleet operators and local trade businesses.
                Bolton–Manchester motorway corridor for multi-vehicle fleet programmes.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bury, Westhoughton &amp; BL outer zones</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bury (BL9, 15 minutes east) is covered as a natural extension of a Bolton day —
                The Rock shopping centre, Bury town centre and Bury Business Park. Westhoughton
                (BL5), Horwich (BL6), Farnworth (BL4) and Kearsley (M26) all fall within the
                BL/Bolton outer zone. Combined into a single Bolton subcontract day where brief
                volumes warrant the full zone coverage.
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

      {/* M61 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bolton in the M61 corridor — Greater Manchester North and Lancashire under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M61 connects Bolton directly south to Manchester city centre (M60 ring, 20 minutes)
              and north to Chorley, Preston and the M6. This makes Bolton not an out-of-the-way
              destination but the natural next stop when a programme already includes Manchester —
              or a staging point for a Lancashire day that also covers Wigan (M58 west) and Preston
              (M61 north).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a Greater Manchester North programme covering Manchester,
              Bolton, Bury and Wigan — a common pattern for national brands with retail or
              hospitality units across the M60 and M61 arc — the entire sequence runs under one
              WRPX subcontract. Same installer, same documentation standard, single point of
              contact. No separate Bolton and Manchester subcontractors to coordinate, no separate
              Bury run for a single unit.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Bolton also connects north to Blackburn and Burnley via the A666 and M65 — the East
              Lancashire corridor where print companies and sign houses serving the Pennine towns
              often need installation support. Programmes that include Bolton, Blackburn and
              Burnley can be run as a single M61/A666/M65 arc without separate Lancashire
              subcontractors.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Bolton &amp; Greater Manchester North
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bolton town centre — BL1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Crompton Place shopping centre, The Market Place, Deansgate, Newport Street
                and the Mealhouse Lane hospitality quarter. BL1 postcode. Standard retail
                and hospitality stock — Victorian mill-era and modern mixed frontage. No
                conservation area constraints for standard interior and window installation.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Middlebrook Retail Park — BL6</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                60+ retail and leisure units directly off M61 junction 6, Horwich. BL6 postcode.
                Major leisure anchor (Middlebrook Leisure), food retail, casual dining and
                national brands. Consistent seasonal window graphics and brand rollout briefs
                — high-volume retail environment requiring swift, clean installation.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bolton One &amp; University campus</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Bolton One health, sport and enterprise complex (Deane Road BL3). University of
                Bolton campus (BL3). Education and professional occupiers generating wayfinding,
                interior branding and campus identity briefs. DBS-aware access. Term-time
                scheduling requirements handled in the brief.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bury — BL9</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Rock shopping centre, Bury town centre, Bury Business Park and Bury Interchange.
                BL9 postcode. 15 minutes east of Bolton via A58. Natural companion on a Bolton
                day for programmes covering the north Greater Manchester retail circuit. Also
                M66 connection north to Rochdale.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Westhoughton &amp; Horwich industrial</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Lostock Industrial Estate (BL6), Westhoughton commercial zone (BL5) and Horwich
                industrial belt. Vehicle livery, fleet graphics, warehouse signage and
                commercial unit fascias. BL5–BL6 outer zone. Fleet-intensive logistics and
                manufacturing operators along the M61 corridor.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Farnworth &amp; Kearsley — BL4 / M26</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Farnworth town centre (BL4), Kearsley (M26) and the Ringley Road commercial zone
                between Bolton and Manchester. BL4/M26 postcode boundary. Standard retail,
                trade and commercial stock. Covered as part of the Bolton subcontract day
                when the programme includes these out-of-town BL zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Bolton subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Bolton installation — Middlebrook or town centre?</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Bolton&apos;s two main commercial zones — Middlebrook Retail Park and the town centre
                — have different access considerations. Middlebrook is a standard modern retail
                park with straightforward vehicle access. Bolton town centre has the standard
                constraints of a busy town-centre circuit. Send us the site address and installation
                type alongside the standard job details — material spec, installation type, access
                constraints and date. We confirm feasibility and flag any surface or access issues
                before you commit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Bolton site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions
                throughout. Your Bolton client&apos;s experience is with your company at every stage —
                WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Bolton installation is documented with before, during-installation and completed
                sign-off photographs. Photo packs delivered to you same day or next morning in whatever
                format you need — ready to forward to your Bolton client or add to your own project
                documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Bolton with Manchester, Wigan, Bury and Burnley</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Bolton brief sits alongside Manchester, Wigan, Bury or Burnley jobs,
                we run them as a single M61/M62 corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the whole Greater
                Manchester North and Lancashire programme. No separate Bolton and Manchester
                subcontractors to coordinate — one point of contact from Sheffield to the M61 arc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bolton subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Horwich and Middlebrook separately from Bolton town centre?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                No — Horwich and Middlebrook Retail Park are covered as part of the Bolton
                subcontract day, not as a separate location. They sit 4 miles north-west of
                Bolton town centre off M61 junction 6 and are accessed as part of the same
                trip. If your programme includes both Middlebrook retail installs and Bolton
                town-centre work, include both addresses in the brief and we will schedule them
                efficiently within the same day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Bolton and Manchester on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — Bolton is 20 minutes north of Manchester city centre via the M61.
                Programmes that combine Bolton and Manchester installations are a standard
                corridor day for WRPX. Manchester city centre, Salford Quays or Trafford
                Park in the morning, Bolton town centre and Middlebrook in the afternoon —
                or vice versa, depending on access times and job sequence. Include both
                locations in the brief and we confirm the day plan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Bolton and BL postcode jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Bolton and Greater Manchester North work.
                We arrive in unbranded vehicles and carry out every installation under your brand.
                Your Bolton client never knows WRPX was involved. Full photographic documentation
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
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wigan
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Burnley &amp; East Lancashire
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
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Ready to subcontract your Bolton installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Bolton or BL postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and can often turn around Bolton
            dates within a few days for straightforward installs, combining with Middlebrook,
            Manchester, Wigan or Bury when there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Bolton
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
