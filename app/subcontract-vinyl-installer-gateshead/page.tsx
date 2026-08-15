import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Gateshead — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Gateshead and the NE8-NE11 postcode zone for sign companies, print houses and fit-out contractors. WRPX covers MetroCentre NE11, Team Valley Business Park, Sage Gateshead, Baltic Quay and the Tyne South bank — white-label, photographic sign-off, A1(M) from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-gateshead/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Gateshead — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Gateshead and the NE8-NE11 postcode zone. White-label available. WRPX covers MetroCentre NE11, Team Valley Business Park NE11, Gateshead town centre NE8, Sage Gateshead, Baltic Centre waterfront, IKEA and the A1(M)/A69 interchange retail zone — A1(M) from South Yorkshire to junction 65."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Gateshead", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-gateshead/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Gateshead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gateshead is approximately 2 hours to 2 hours 10 minutes from our South Yorkshire base via the A1(M) north from Doncaster through Wetherby, Leeming Bar and Scotch Corner to junction 65 at the Gateshead/Newcastle interchange. The MetroCentre (NE11) is just off the A1(M) at junction 65 — it is the first major destination passed on entry to the Tyneside urban zone. Team Valley Business Park (NE11) is 2 minutes further north on the A1(M). For programmes combining Gateshead with Newcastle city centre (10 minutes via the Tyne Bridge) or Sunderland (25 minutes south on the A19/A184), we plan them as a Tyne corridor day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Gateshead and NE postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Gateshead and NE postcode work. We arrive in unbranded vehicles and carry out every installation under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Gateshead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. The MetroCentre is the largest retail and leisure park outside London — managed contractor access, standard shopfront substrates. Team Valley is a purpose-built 1970s/80s business park with modern commercial units. Gateshead town centre (NE8) has post-war redevelopment mixed with period frontages near the High Street and Deptford — substrate assessment relevant for period frontages near the High Street and Trinity Square.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Gateshead MetroCentre and Team Valley on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the MetroCentre (NE11, A1(M) junction 65) and Team Valley Business Park (NE11, 2 minutes north) are adjacent. For sign companies with multiple NE11 zone sites, both can be covered efficiently in a single Gateshead day. MetroCentre managed retail and Team Valley office/commercial installations on the same brief — one route, one invoice, one documentation standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Gateshead and Newcastle on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Gateshead and Newcastle are linked by the Tyne Bridge, approximately 10 minutes between town centres. For sign companies running a Tyneside programme covering both banks of the Tyne, a single WRPX subcontract covers the full NE8-NE11 (Gateshead) and NE1-NE4 (Newcastle city centre) zone in one trip. MetroCentre and Team Valley on the south bank, Newcastle Quayside and city centre on the north — one installer, one day, one brief.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerGatesheadPage() {
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
            Subcontract · Gateshead, MetroCentre &amp; Team Valley
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Gateshead, MetroCentre &amp; the Tyne South Bank
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Gateshead, the MetroCentre and the NE8–NE11 postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A1(M) direct — junction 65 Gateshead:</strong>{" "}
                MetroCentre NE11 is the first major stop off the A1(M) on entry to Tyneside
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>MetroCentre, Team Valley, Baltic Quay and Gateshead town centre covered as a single NE11 programme</span>
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
              Discuss a Gateshead subcontract job
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

      {/* Why Gateshead */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Gateshead — the south Tyne commercial zone often missed in Newcastle briefs
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Gateshead sits on the south bank of the Tyne, directly across from Newcastle
              city centre, linked by the Tyne Bridge (A167). It is a Metropolitan Borough
              in its own right — with its own town centre, its own major retail and commercial
              parks and its own NE postcode geography from NE8 (town centre and riverside)
              through NE9 (Low Fell), NE10 (Felling and Wardley), NE11 (MetroCentre and
              Team Valley) to NE16 (Whickham and Sunniside).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The NE11 commercial park zone is the most significant installation zone:
              Metrocentre — the largest retail and leisure park outside London — and
              Team Valley Business Park, one of the largest purpose-built business parks
              in the North East, sit side by side immediately off the A1(M) at junction 65.
              For sign companies with programmes at either site, the A1(M) approach means
              Gateshead NE11 is reached before Newcastle city centre on every north run.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Gateshead Quays is the waterfront cultural zone — Sage Gateshead (music venue),
              Baltic Centre for Contemporary Art (BALTIC, converted flour mill), and the
              growing Sage Gateshead Quay development including the emerging Gateshead
              Innovation Village. Branded cultural and hospitality graphics in a high-profile
              riverside setting.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and
              ready to apply. We prepare the surface, install to spec and deliver a signed-off
              photo pack. Your Gateshead client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Gateshead &amp; the NE11 zone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MetroCentre — NE11, managed retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The MetroCentre is the largest retail and leisure centre in the UK
                outside London — 2.1 million sq ft of retail, leisure and restaurants
                across the Yellow, Blue, Red and Green malls plus the Qube leisure
                complex. Managed centre with standardised contractor access arrangements.
                Pre-registration with the centre management team required for access
                during trading hours. Window graphics, seasonal promotional vinyls,
                branded shopfront and unit graphics across all mall zones.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Team Valley Business Park — NE11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Team Valley is a purpose-built business park developed from the 1930s
                through to the 1980s — one of the largest and oldest in the North East.
                The Earlsway, Queensway, Kingsway and Princesway estate roads cover
                a mix of light industrial units, office buildings, showrooms and retail
                warehouse parks. Office interior branding, shop front graphics, vehicle
                livery, warehouse and unit graphics. Modern commercial stock with
                standard substrate conditions throughout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Gateshead Quays — Sage &amp; BALTIC waterfront</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gateshead Quays sits on the south bank directly under the Tyne Bridge —
                Sage Gateshead (the concert hall, now undergoing expansion as the Sage
                Gateshead Quay development), BALTIC Centre for Contemporary Art (the
                converted Baltic Flour Mills), and the waterfront hotels and restaurants.
                Cultural and hospitality graphics, event branding, gallery and venue
                interior graphics. BALTIC&apos;s converted mill structure involves exposed
                concrete — substrate confirmation relevant for wall installations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Gateshead town centre — NE8</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gateshead town centre (NE8) was significantly redeveloped following the
                1980 fire and post-industrial transition — Trinity Square is the primary
                shopping centre (anchor: Tesco, retail mix), with the surrounding streets
                offering a mix of national retail and independent commercial occupiers.
                The High Street and Jackson Street zone retains some period commercial
                frontages. Retail and commercial graphics, shopfront vinyls, branded
                window campaigns in the town centre zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">IKEA Gateshead &amp; the A1(M)/A69 retail zone — NE11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The IKEA Gateshead store and surrounding A1(M)/A69 retail and leisure
                parks (including Retail World and the Saltmeadows Road zone) form a
                major out-of-town retail cluster at the A1(M)/A69 interchange. Large
                format window graphics, branded fleet vehicles, promotional and wayfinding
                graphics for the NE11 retail corridor. Access via A1(M) junction 65 —
                same exit as MetroCentre and Team Valley.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Low Fell &amp; Felling — NE9/NE10</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low Fell (NE9) is Gateshead&apos;s southern inner suburb — Lobley Hill Road
                and Durham Road commercial strip, local retail and professional services.
                Felling (NE10) is the industrial and logistics zone east of Gateshead town
                centre — Felling Business Park and the Heworth area. Vehicle livery,
                commercial unit graphics and logistics fleet wrap for the NE9/NE10 zone.
                Covered as add-ons to a Gateshead NE11 primary brief.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A1(M) position section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Gateshead NE11 — first stop on the A1(M) into Tyneside
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A1(M) enters Tyneside at junction 65, Gateshead — and the MetroCentre
              (NE11) car park is immediately off that junction. For every A1(M) north
              programme from South Yorkshire, Gateshead NE11 is reached before Newcastle
              city centre, before the Tyne Bridge, before any NE1 or NE2 postcode.
              It is the natural first destination on a Tyneside day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Team Valley Business Park is 2 minutes further north on the A1(M) before
              the Tyne Bridge interchange — also accessible directly from the Gateshead
              western bypass without entering the city centre. For sign companies with
              multiple NE11 zone sites (MetroCentre units, Team Valley offices,
              IKEA zone retail parks), all are within a 5-minute radius of each other.
              One trip, multiple installations.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For programmes that extend north to Newcastle city centre, the Tyne Bridge
              from Gateshead High Street to Newcastle Grey Street is 10 minutes.
              Sunderland is 25 minutes south on the A1 and A184. Durham is 20 minutes
              south on the A693/A167. Darlington is 45 minutes south on the A1(M).
              We plan the most efficient route across the full Tyne and Wear corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Gateshead &amp; the NE postcode zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MetroCentre — NE11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Largest retail and leisure park outside London — 2.1m sq ft.
                Yellow, Blue, Red and Green malls plus Qube leisure. Managed
                centre access. Pre-registration required for trading hours.
                Window graphics, seasonal vinyls, branded unit graphics.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Team Valley — NE11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Purpose-built business park — light industrial, office, showroom,
                retail warehouse. Earlsway/Queensway/Kingsway estate roads.
                Modern stock with standard substrates. Office branding, vehicle
                livery, unit graphics. 2 minutes from MetroCentre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Gateshead Quays — NE8</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sage Gateshead concert hall, BALTIC Contemporary Art, waterfront
                hotels and restaurants. Cultural and hospitality graphics, event
                branding, venue interiors. BALTIC: converted mill structure —
                substrate confirmation for wall installations.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Trinity Square — NE8</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Gateshead town centre shopping centre — Tesco anchor, retail mix.
                Adjacent High Street and Jackson Street commercial zone with
                period frontages. Town centre retail graphics and shopfront
                branded vinyls.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">IKEA &amp; A69 Retail Zone — NE11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                IKEA Gateshead and Retail World at A1(M)/A69 interchange.
                Large format window vinyls, promotional graphics, fleet vehicles.
                Major out-of-town retail cluster with accessible loading arrangements.
                Adjacent to MetroCentre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Felling Business Park — NE10</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Industrial and logistics zone east of Gateshead — Heworth zone,
                Felling Business Park and the NE10 commercial corridor. Vehicle
                livery, logistics fleet, warehouse graphics. Add-on to NE11
                primary Gateshead brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Gateshead subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full NE11 zone scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Gateshead NE11 is most efficiently covered as a Tyne corridor programme —
                combining NE11 (MetroCentre/Team Valley) with NE8 (Gateshead town centre/Quays)
                and NE1-NE4 (Newcastle city centre) where brief volumes justify it. If your
                programme includes multiple Gateshead sites, include all addresses in the
                brief. We plan the day sequence to minimise dead mileage and confirm feasibility
                before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">MetroCentre managed access — brief us early</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The MetroCentre requires contractor pre-registration before access during
                trading hours. If your programme includes MetroCentre units, flag this
                in the brief. We can work to MetroCentre centre management timelines —
                early morning before centre opens, or agreed contractor windows — and
                we liaise directly with the facilities team on your behalf if required.
                Brief us as early as possible for managed centre access arrangements.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Gateshead or NE zone site in unbranded vehicles, introduce
                ourselves as the installation team, and carry out the work under your
                instructions throughout. Your client&apos;s experience is with your company at
                every stage — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Gateshead installation is documented with before, during-installation
                and completed sign-off photographs. Photo packs delivered to you same day
                or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Gateshead with Newcastle, Sunderland or Darlington in one programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Gateshead brief sits alongside Newcastle, Sunderland or Darlington,
                we plan them as a single Tyne corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the full
                NE/SR/DL postcode programme. No separate contractors for Gateshead and
                Newcastle — one point of contact from Sheffield to Tyneside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Gateshead subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Is Gateshead covered separately from Newcastle?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Gateshead is a distinct Metropolitan Borough from Newcastle, on the
                south bank of the Tyne. The NE11 commercial zone (MetroCentre, Team Valley)
                is a major installation zone in its own right — many sign companies brief
                Gateshead separately from Newcastle because MetroCentre programmes and
                Team Valley office park programmes operate independently of Newcastle city
                centre work. We can cover Gateshead as a standalone NE11 day or combine
                it with Newcastle NE1 as a full Tyneside programme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                What is the MetroCentre contractor access arrangement?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The MetroCentre operates a contractor management system — contractors must
                be pre-registered with the centre facilities team before access during
                trading hours. For sign companies briefing MetroCentre installations,
                include the unit reference, trading name and any existing contractor
                registration number in the brief. We can work to centre timelines —
                early morning, late evening or agreed contractor access windows — and
                liaise with the MetroCentre facilities team directly where required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can WRPX cover the BALTIC Centre and Sage Gateshead on subcontract?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Sage Gateshead and BALTIC Centre for Contemporary Art are both in
                the Gateshead Quays zone (NE8), accessible directly from the Gateshead
                riverside approach. Cultural venue installations — event branding, exhibition
                graphics, wayfinding and interior vinyls — are covered under the standard
                subcontract arrangement. BALTIC&apos;s converted mill structure has exposed
                concrete surfaces in some gallery areas — substrate confirmation should
                be included in the brief for any BALTIC wall installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the Tyne &amp; A1(M) North East corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-newcastle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Newcastle city centre
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sunderland &amp; Wearside
            </Link>
            <Link href="/subcontract-vinyl-installer-darlington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Darlington &amp; County Durham South
            </Link>
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Middlesbrough &amp; Teesside
            </Link>
            <Link href="/subcontract-vinyl-installer-carlisle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Carlisle &amp; Cumbria
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
            Ready to subcontract your Gateshead or MetroCentre installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Gateshead, MetroCentre or NE11 brief — installation
            type, site address (including mall/unit reference for MetroCentre), material spec
            and date requirements. We confirm quickly and plan NE11 dates as part of the
            Tyneside corridor, combining with Newcastle, Sunderland or Darlington where
            there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Gateshead
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
