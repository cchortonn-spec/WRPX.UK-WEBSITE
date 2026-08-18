import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Wigan — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Wigan and West Lancashire for sign companies, print houses and fit-out contractors. WRPX covers Wigan town centre, Robin Park, DW Stadium, Leigh, Ashton-in-Makerfield and the WN postcode zone — white-label, photographic sign-off, via M6 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wigan/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Wigan — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Wigan and West Lancashire. White-label available. WRPX covers Wigan town centre, Robin Park retail, DW Stadium commercial zone, Leigh, Ashton-in-Makerfield and the WN postcode zone — M6 corridor between Warrington and Manchester, direct from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Wigan", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wigan/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Wigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wigan is approximately 90–105 minutes from our South Yorkshire base via the M1 north to Leeds, M62 west, then M6 north to Wigan (junction 26). For programmes combining Wigan with Warrington (20 minutes south on the M6), Manchester (25 minutes east on the A577/M60) or Preston (30 minutes north on the M6), we run them as corridor trips — one installer covering the full North West programme without separate subcontractors for each town.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Wigan installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Wigan and West Lancashire installations under your brand throughout. Your Wigan client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered on the day of completion in whatever format you need. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Wigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover the full WN postcode zone including Wigan town centre, Robin Park, Leigh, Ashton-in-Makerfield, Standish, Hindley and the wider West Lancashire belt.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Wigan with Warrington, Manchester and Preston in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wigan sits on the M6 between Warrington to the south and Preston to the north, with Manchester 25 minutes east via the A577 and M60. A sign company running a North West programme covering Warrington, Wigan and Manchester can run the entire M6 belt under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the Warrington–Wigan–Manchester axis. No separate subcontractors for each town.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leigh and Ashton-in-Makerfield as well as Wigan town centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leigh (WN7) and Ashton-in-Makerfield (WN4) are covered as part of the Wigan WN postcode zone. Leigh sits east of Wigan between the town and Manchester, with its own commercial high street and logistics/distribution estate generating graphics briefs. Ashton-in-Makerfield is an important junction point on the A49 between Warrington and Wigan, with significant retail park and commercial strip presence. Both are treated as part of the Wigan day, not separate trips.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerWiganPage() {
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
            Subcontract · Wigan &amp; West Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Wigan
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Wigan, West Lancashire and the WN postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6 corridor between Warrington and Manchester</strong>{" "}
                — Wigan covered as part of corridor runs linking Yorkshire, Greater Manchester and the North West
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
              Discuss a Wigan subcontract job
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

      {/* Why Wigan */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wigan — the M6 junction town sign companies forget about
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wigan sits on the M6 at junction 25 (A49 south to Warrington) and junction 26 (A577
              east to Manchester), making it a natural corridor point between Greater Manchester and
              the Warrington and North West motorway network. For sign companies running North West
              programmes that include both Manchester and Warrington, Wigan is frequently omitted
              from logistics planning — assumed to be coverable by whichever installer does Manchester,
              or lumped into a generic &quot;North West&quot; zone that never quite gets addressed directly.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography that actually generates graphics briefs in the Wigan zone is
              genuinely distinct. Wigan town centre — Market Street, Standishgate, the Grand Arcade
              shopping centre and the wider pedestrian retail core — generates consistent shop-front,
              window graphics and retail interior briefs. Robin Park, immediately west of the town
              centre at the DW Stadium, is Wigan&apos;s primary out-of-town retail and leisure destination:
              Primark, Next, DW Fitness, Frankie &amp; Benny&apos;s and a substantial restaurant and leisure
              strip that generates regular graphics and signage briefs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Leigh, east of Wigan on the A578/A579 between the town and Manchester, has its own
              commercial centre, logistics belt and healthcare estate (Leigh Infirmary, now part of
              Wrightington, Wigan and Leigh NHS Trust). Ashton-in-Makerfield on the A49 south
              (between Wigan and Warrington) is a significant retail park and commercial strip
              location. Both are covered as part of the Wigan WN zone — not separate trips.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Wigan client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Wigan &amp; West Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wigan town centre retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop-front graphics, window vinyls, frosted film, promotional window campaigns and
                interior retail graphics across Market Street, Standishgate, the Grand Arcade shopping
                centre and the Wigan town centre pedestrian retail circuit. National chains,
                independent operators and hospitality brands generating regular shop-front and interior
                graphics briefs in a compact, walkable town centre. WN1 postcode.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Robin Park &amp; DW Stadium zone</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail graphics, window vinyl campaigns, wayfinding systems, stadium commercial
                graphics and sports venue branding across the Robin Park retail and leisure park,
                DW Stadium (home of Wigan Athletic and Wigan Warriors) and the surrounding commercial
                zone. Out-of-hours and match-day access windows to plan around — flagged in the brief
                and managed on the day. WN5 postcode.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/sports-leisure-graphics-installation/" className="text-accent hover:underline">
                  Sports &amp; leisure graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wigan office &amp; business park graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, glass partition film, reception feature walls, wayfinding
                and corporate branding across Wigan&apos;s office and business park estate — Trencherfield
                Mill Wigan Waterfront, Vision Wigan, Leigh Spinners Mill and the wider commercial park
                zone. Professional services, technology and financial services occupiers generating
                interior branding and fit-out graphics briefs.
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
                Vehicle wraps, partial fleet livery, commercial vehicle signage and cut vinyl graphics
                across Wigan&apos;s logistics, distribution and commercial vehicle sector. The M6 and A49
                corridor through Wigan generates significant logistics traffic — haulage, distribution,
                waste and construction fleet branding briefs served through the same Wigan subcontract
                day. WN3/WN4/WN5 postcode belt.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Leigh &amp; east Wigan commercial zone</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop-front vinyls, window graphics, NHS wayfinding, retail interior graphics and office
                branding across Leigh town centre (Leigh Market, St Helens Road commercial strip),
                Leigh Infirmary, and the A578/A579 commercial belt east towards Manchester. Leigh
                generates a separate stream of retail and healthcare briefs from Wigan town centre —
                covered as part of the WN7 zone on the same trip.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                  Healthcare graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Ashton-in-Makerfield &amp; retail parks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail park window graphics, shop-front vinyls and commercial graphics across
                Ashton-in-Makerfield retail zone (A49 between Wigan and Warrington), Bryn retail
                area, Golborne and the wider WN4 belt. National retailers and food-service chains in
                out-of-town retail park environments — window campaigns, brand refresh graphics and
                seasonal vinyl programmes. Natural bridge between a Wigan and Warrington combined day.
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

      {/* M6 Corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wigan in the M6 corridor — one subcontract for the North West arc
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M6 is the north-south spine of the North West motorway network, and Wigan sits
              on it at a position that makes it the natural bridge between Warrington to the south
              and Preston to the north. Manchester is a 25-minute run east on the A577/A571 connecting
              to the M60. For sign companies managing programmes that span multiple North West towns,
              Wigan is frequently the point in the route where either the day gets planned correctly
              or it falls apart — it is close enough to Manchester to feel like Greater Manchester,
              close enough to Warrington to feel like Cheshire, but distinct from both.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX covers the M6 corridor from Warrington (junction 8–9 on the M62) north through
              Wigan (junction 26) and on to Preston — the same north-south route already covered for
              Yorkshire via the M1. A North West programme brief covering Warrington, Wigan and Preston
              runs north on the M6 — three towns, one corridor, one subcontract relationship.
              Combining Wigan with Manchester east or with Liverpool west (via Warrington M62 west)
              adds very little additional logistics complexity.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This matters for sign companies running national brand rollouts or regional chains with
              sites spread across the North West: the WN postcode zone often appears in briefs alongside
              WA (Warrington), M (Manchester) and PR (Preston) postcodes. With WRPX, all four are
              covered under one subcontract without separate local installer relationships for each town.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Wigan &amp; West Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wigan town centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Market Street, Standishgate, Grand Arcade, The Galleries and the pedestrian retail
                circuit. WN1 postcode. National chains, independent retailers and hospitality
                operators. Shop-front vinyls, window graphics, interior retail fit-outs and
                promotional campaigns. Compact, walkable centre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Robin Park &amp; DW Stadium</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Out-of-town retail and leisure park immediately west of Wigan town centre. DW
                Stadium (Wigan Athletic / Wigan Warriors), Primark, Next, DW Fitness and restaurant
                strip. WN5 postcode. Retail graphics, sports venue branding and leisure graphics —
                match-day access to manage.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Leigh (WN7)</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Leigh town centre (Leigh Market, St Helens Road), Leigh Infirmary, Leigh Spinners
                Mill heritage site and the A578/A579 commercial belt east towards Manchester. WN7
                postcode. Retail, healthcare and commercial graphics — covered as part of the
                Wigan WN zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Ashton-in-Makerfield (WN4)</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                A49 corridor town between Wigan and Warrington. Retail parks, commercial strip and
                national chain presence. WN4 postcode. Natural bridge between a Wigan town centre
                and a Warrington day — retail park window graphics and shop-front briefs.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Standish &amp; Wigan north (WN6)</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Standish village commercial zone, M6 junction 27 approach and the northern Wigan
                residential and commercial belt. WN6 postcode. Independent retail, pub/restaurant
                graphics and commercial van livery. M6 north towards Preston accessible from here
                without returning to the town centre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wigan logistics &amp; industrial belt</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                M6 junction 25 / A49 logistics corridor, Trencherfield and Westwood industrial zones
                and the wider Wigan haulage and distribution base. Fleet livery, warehouse fascia
                graphics, commercial vehicle signage and external building vinyls for the logistics
                and manufacturing sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Wigan subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Wigan installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address (WN postcode), material spec, installation type,
                surface condition notes and any access constraints. Robin Park and DW Stadium have
                match-day and event-day access restrictions — flag planned dates and we confirm
                access windows before you commit material. Multi-site Wigan/Leigh/Ashton programmes
                are routed in the brief to minimise travel between sites.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Wigan site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions.
                Your client&apos;s experience is with your company throughout — WRPX is invisible
                behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Wigan installation is documented with before, during-installation and completed
                sign-off photographs. Photo packs delivered to you same day or next morning in whatever
                format you need — ready to forward to your West Lancashire client or add to your own
                project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Wigan with Warrington, Manchester and Preston</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Wigan brief sits alongside jobs in Warrington, Manchester or Preston, we
                combine them in a single M6 corridor trip. One invoice, one documentation pack per
                site, one consistent installation standard across the whole programme. The M6 makes
                multi-city North West programmes a single logistics conversation rather than four
                separate subcontractor relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wigan subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Wigan?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Wigan is approximately 90–105 minutes from our South Yorkshire base via the M1
                north to Leeds and the M62 west to the M6 junction, then north to Wigan. For corridor
                programmes combining Wigan with Warrington (20 minutes south) or Manchester (25
                minutes east), we run them as a single trip — no separate subcontractors for each town.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Skelmersdale and Orrell as part of the Wigan zone?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Skelmersdale (WN8 postcode) sits north-west of Wigan at the M58 junction and can be
                combined with a Wigan day where the brief warrants it. Orrell (WN5 west) is treated as
                part of the Robin Park / western Wigan zone. We cover both on a brief-by-brief basis —
                include them in the brief and we will confirm logistics. Skelmersdale&apos;s Concourse
                Shopping Centre and Peel Park industrial estate generate a distinct set of retail and
                logistics graphics briefs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Wigan and Leigh jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Wigan and West Lancashire work. We arrive in
                unbranded vehicles and carry out every installation under your brand. Your Wigan or
                Leigh client never knows WRPX was involved. Full photographic documentation delivered
                in your agreed format.
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
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-chester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Chester
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bolton
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
            Ready to subcontract your Wigan installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Wigan or West Lancashire brief — installation type, site address,
            material spec and date requirements. We confirm quickly and can often turn around Wigan
            dates within a few days for straightforward installs, combining with Warrington,
            Manchester or Preston when there are multiple sites across the North West corridor.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Wigan
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
