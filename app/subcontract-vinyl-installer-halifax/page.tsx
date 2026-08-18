import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Halifax — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Halifax, Calderdale and the A646 trans-Pennine corridor for sign companies, print houses and fit-out contractors. WRPX covers Halifax town centre, The Piece Hall, Dean Clough, Brighouse and the HX postcode zone — white-label, photographic sign-off, M62/A629 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-halifax/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Halifax — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Halifax, Brighouse and the Calderdale HX postcode zone. White-label available. WRPX covers Halifax town centre, The Piece Hall cultural quarter, Dean Clough business park, Brighouse commercial zone and the wider HX postcode area — M62 west from South Yorkshire via Huddersfield, or A629 north from Sheffield."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Halifax", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-halifax/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Halifax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Halifax is approximately 45 minutes to 1 hour from our South Yorkshire base. The primary route is the M1 north from Sheffield to the M62 west, exiting at junction 24 (Ainley Top) for Halifax — the same motorway used for Huddersfield (junction 23) and Leeds (junction 27). Alternatively, the A629 runs north from Sheffield through Penistone and Denby Dale directly into Halifax, making it one of the most naturally connected Calderdale towns from our South Yorkshire base.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Halifax and Calderdale jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Halifax, Brighouse and HX postcode installations under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Halifax and Calderdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Halifax has a significant heritage built environment — the Grade I listed Piece Hall (1779), the Dean Clough Victorian mill complex and the town centre's Georgian and Victorian commercial streets. Surface confirmation is particularly relevant for installations on period stone frontages in the Piece Hall cultural quarter and Dean Clough mill buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Halifax, Huddersfield and Bradford in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Halifax, Huddersfield and Bradford form a natural West Yorkshire triangle connected by the M62 and A629/A641 corridors. Halifax to Huddersfield is 11 miles via the A629/A641, approximately 25 minutes. Halifax to Bradford is 10 miles via the A641, approximately 20 minutes. For a sign company running a West Yorkshire programme covering Bradford, Halifax and Huddersfield, all three can be covered in a single WRPX day — one briefing, one documentation standard, one invoice.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Halifax with Burnley and East Lancashire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Halifax and Burnley are connected by the A646 trans-Pennine road through the Calder Valley. The drive from Halifax to Burnley is approximately 30 minutes via the A646 west through Hebden Bridge and Todmorden. For sign companies running programmes that span West Yorkshire and East Lancashire — covering Halifax and Huddersfield on the Yorkshire side and Burnley, Blackburn and Accrington on the Lancashire side — the A646 corridor connects both halves without motorway. One WRPX subcontract covers the full trans-Pennine HX/BB zone.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerHalifaxPage() {
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
            Subcontract · Halifax &amp; Calderdale
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Halifax &amp; Calderdale
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Halifax, Brighouse and the HX postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 or A629 direct from South Yorkshire</strong>{" "}
                — Halifax reached via M62/A629 from Sheffield, 45–60 minutes, same axis as Huddersfield and Leeds
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Halifax, Brighouse, Huddersfield and Bradford covered as a single West Yorkshire programme</span>
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
              Discuss a Halifax subcontract job
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

      {/* Why Halifax & Calderdale */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Halifax &amp; Calderdale — the trans-Pennine crossroads and West Yorkshire&apos;s heritage commercial core
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Halifax is the commercial and administrative centre of the Metropolitan Borough of
              Calderdale — a dense West Yorkshire town set in the steep-sided Calder Valley.
              The HX postcode zone covers Halifax (HX1–HX3), Brighouse (HD6), Elland (HX5),
              Hebden Bridge (HX7), Todmorden (OL14) and the Calderdale valley running west
              toward the Lancashire border.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Halifax occupies a genuinely distinctive position in the trans-Pennine
              commercial geography. The A646 Calder Valley road runs west from Halifax through
              Hebden Bridge and Todmorden to Burnley and East Lancashire — one of the principal
              trans-Pennine routes that predates the motorway era. The A629 runs south from Halifax
              through the Colne Valley into Huddersfield, and then continues south through Penistone
              and Deepcar into the Sheffield M1 corridor. Halifax is therefore a natural crossroads:
              south-east to West Yorkshire (Leeds and Bradford 10–15 miles), south to South Yorkshire
              (Sheffield 40 minutes), and west to East Lancashire (Burnley 30 minutes via A646).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The built environment in Halifax is heavily influenced by the town&apos;s Victorian wool
              and textile trading heritage. The Piece Hall (1779) — a Grade I listed former cloth
              hall with an Italianate courtyard — is one of England&apos;s most remarkable commercial
              heritage buildings and now operates as a retail, hospitality and events venue.
              Dean Clough (HX3) is an extensive former Crossley&apos;s carpet mill complex,
              now redeveloped as a business park with offices, studios, galleries and hospitality
              — one of the North&apos;s most significant mill-to-business conversions. Installing on
              these period mill and heritage buildings requires surface confirmation before
              material specification.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Halifax client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Halifax &amp; Calderdale
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Piece Hall — HX1 cultural quarter</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The Piece Hall (HX1) is Halifax&apos;s flagship cultural and commercial venue —
                a Grade I listed 1779 cloth hall with colonnaded Italianate courtyard, now
                housing independent retail, restaurants, a market hall and event space.
                Window graphics, frosted film, wayfinding and promotional vinyls within the
                historic courtyard and colonnade. Period stone surfaces, original glazing
                and listed building context — surface confirmation required before material
                specification. Brief with full building and surface description.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Dean Clough — HX3 business park</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dean Clough is a converted Victorian carpet mill complex (Crossley&apos;s Mills, HX3)
                now operating as a business park with office suites, studios, galleries and
                hospitality. One of the North&apos;s most significant mill conversion business
                environments. Office interior graphics, glass manifestation, wall wraps,
                reception feature walls and wayfinding across the multi-building complex.
                Mill building surfaces — brick, steel and original flooring — require
                substrate confirmation before material production.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Halifax town centre — Westgate Arcade and Market</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Halifax town centre retail zone — Borough Market (HX1), Westgate Arcade,
                the Princess Arcade and the wider Southgate and Westgate commercial streets.
                Victorian and Edwardian commercial frontages alongside modern retail units.
                Window graphics, shop front vinyls, seasonal promotional graphics and
                wayfinding. Brief with frontage description for any period buildings
                outside the managed retail zones.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Brighouse — HD6 commercial zone</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brighouse (HD6) is 5 miles south-east of Halifax on the A641 and A644 —
                an M62 j25 industrial and commercial zone with retail, industrial units,
                logistics and commercial estate stock. Fleet wraps and vehicle livery from
                the logistics operators, office interior graphics and shop front installations
                from the commercial estate. Natural add-on to a Halifax or Huddersfield day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hebden Bridge &amp; Todmorden — A646 Calder Valley</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hebden Bridge (HX7) and Todmorden (OL14) run west from Halifax through the
                Calder Valley on the A646 toward Burnley. Independent retail, arts venues
                and hospitality in Hebden Bridge; mixed retail and commercial in Todmorden.
                Covered on the Halifax day when the A646 corridor brief includes these
                Calder Valley towns as intermediate or standalone stops.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sowerby Bridge &amp; Elland — HX5/HX6</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sowerby Bridge (HX6) and Elland (HX5) sit in the Calder Valley between Halifax
                and Brighouse — commercial estates, industrial units and mixed retail.
                Elland M62 junction 24 access provides straightforward motorway connectivity.
                Fleet livery, industrial and commercial graphics and shop front installations.
                Covered within the Halifax or Brighouse day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A646 / M62 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Halifax in the trans-Pennine corridor — West Yorkshire meets East Lancashire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A646 Calder Valley road is one of England&apos;s principal trans-Pennine links —
              running west from Halifax through Hebden Bridge and Todmorden into Burnley (BB11),
              connecting directly to the M65 East Lancashire corridor at Burnley. This makes
              Halifax the eastern gateway to an unbroken West Yorkshire–East Lancashire arc:
              Halifax to Burnley is 30 minutes, Burnley to Blackburn 15 minutes on the M65,
              Blackburn to Accrington 10 minutes east.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies running trans-Pennine programmes that span both West Yorkshire
              and East Lancashire — covering Bradford (BD), Halifax (HX), Huddersfield (HD)
              on the Yorkshire side, and Burnley (BB11), Blackburn (BB1/BB2) and Accrington (BB5)
              on the Lancashire side — the A646 corridor makes this a single geographic zone
              from an installation logistics perspective. One WRPX subcontract covers the
              full HX/BB arc without a separate Yorkshire and Lancashire installer.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              To the south, the A629 connects Halifax through the Colne Valley to Huddersfield
              in 25 minutes, and then continues through Penistone and Stocksbridge into the
              Sheffield M1 corridor. For programmes combining Halifax with Huddersfield or
              South Yorkshire installations, the A629 provides a direct south connection
              without motorway.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Halifax &amp; Calderdale
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Piece Hall — HX1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Grade I listed 1779 cloth hall. Cultural, retail and events venue in
                Halifax town centre. Period stone colonnade and original glazing — surface
                confirmation required before any fascia or external installation. Interior
                window graphics and wayfinding more straightforward. Listed building context.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Dean Clough — HX3</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Victorian carpet mill complex converted to offices, studios and hospitality.
                Multi-building business park immediately north of Halifax town centre.
                Mill surfaces — brick, steel, original flooring — require substrate
                confirmation. Office interior graphics, wall wraps and reception feature
                walls are the core brief types here.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Halifax town centre — HX1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Borough Market, Westgate Arcade, Princess Arcade, Southgate retail. Victorian
                and Edwardian frontages alongside modern retail units. Standard window and
                shop front briefs on modern units; period frontage confirmation needed for
                older buildings. Pedestrian-priority town centre core.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Brighouse &amp; Elland — HD6/HX5</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                M62 j25 commercial and industrial zone. Modern commercial stock — glazed
                office buildings, logistics units, retail parks. Fleet livery, office
                graphics and industrial signage. Straightforward access. Natural
                southern neighbour to Halifax on the M62 arc.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hebden Bridge — HX7</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Calder Valley market town, 11 miles west on the A646. Independent retail,
                arts and hospitality character. Period stone commercial frontages — brief
                with surface description for any external installation. Covered on the
                Halifax A646 day when the Calder Valley corridor brief extends west.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Todmorden — OL14</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Trans-Pennine market town at the Lancashire border — A646 west from Halifax,
                15 miles, 25 minutes. OL14 postcode. Natural last stop before Burnley
                (BB11) on an A646 cross-Pennine day. Mixed retail and commercial stock.
                Gateway to East Lancashire from the Halifax base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Halifax subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full HX postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Halifax and Calderdale are efficiently covered as part of a wider West Yorkshire
                or trans-Pennine programme — combining HX with HD (Huddersfield), BD (Bradford),
                LS (Leeds) or BB (Burnley/East Lancashire) where brief volumes justify it.
                If your programme includes multiple HX zone sites, include all addresses
                in the brief. We plan the day sequence to minimise dead mileage and confirm
                feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for Piece Hall, Dean Clough and period buildings</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Halifax has genuine surface variation — Grade I listed stone at the Piece Hall,
                Victorian brick mill at Dean Clough, Georgian and Victorian commercial frontages
                in the town centre, and modern glazed commercial stock in Brighouse and the
                commercial estates. For any installation on a period, heritage or non-standard
                frontage, brief us with the full site address and a description of the frontage.
                We confirm surface approach before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Halifax site in unbranded vehicles, introduce ourselves as
                the installation team, and carry out the work under your instructions throughout.
                Your Calderdale client&apos;s experience is with your company at every stage —
                WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Halifax and Calderdale installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Halifax with Huddersfield, Bradford and South Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Halifax brief sits alongside Huddersfield, Bradford or other West Yorkshire
                corridor jobs, we plan them as a single day. One invoice, one documentation pack
                per site, one consistent installation standard across Calderdale and West Yorkshire.
                No separate Halifax and Huddersfield subcontractors — one point of contact from
                Sheffield to the HX postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Halifax subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Brighouse and Elland separately from Halifax?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Brighouse (HD6) and Elland (HX5) are covered as part of the same Calderdale day as Halifax.
                Brighouse is 5 miles south-east of Halifax on the A641/A644 and sits at M62 junction 25 —
                straightforward add-on to any Halifax programme with industrial or commercial
                estate briefs in that zone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Halifax and Huddersfield on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — Halifax and Huddersfield are 11 miles apart via the A629/A641, approximately
                25 minutes. For sign companies with programmes covering West Yorkshire including
                both Halifax and Huddersfield, a combined HX/HD programme day covers both zones.
                Bradford is 10 miles from Halifax via the A641 — also combinable on the same day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Halifax and Burnley in the same programme?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Halifax and Burnley are 30 minutes apart via the A646 Calder Valley road
                through Hebden Bridge and Todmorden. For sign companies with trans-Pennine
                programmes covering both West Yorkshire (HX) and East Lancashire (BB), the
                A646 corridor links both zones. One WRPX subcontract covers the full
                Halifax–Burnley–Blackburn arc without a separate Yorkshire and Lancashire installer.
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
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bradford
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Burnley &amp; East Lancashire
            </Link>
            <Link href="/subcontract-vinyl-installer-rochdale/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Rochdale &amp; Oldham
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
            Ready to subcontract your Halifax or Calderdale installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Halifax, Brighouse or HX postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and plan Halifax dates as part
            of the West Yorkshire or trans-Pennine corridor, combining with Huddersfield, Bradford,
            Burnley or Rochdale where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Halifax
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
