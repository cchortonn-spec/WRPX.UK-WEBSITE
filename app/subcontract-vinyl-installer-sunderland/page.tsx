import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Sunderland — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Sunderland and the SR postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Sunderland city centre, The Bridges, Nissan Manufacturing UK, Riverside Sunderland, Washington and the SR postcode zone — white-label, photographic sign-off, A19 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-sunderland/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Sunderland — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Sunderland and the SR postcode zone. White-label available. WRPX covers Sunderland city centre, The Bridges shopping centre, Keel Square, Riverside Sunderland regeneration zone, Nissan Manufacturing UK SR5, Washington NE37 industrial corridor, Seaham SR7 and the A19 postcode arc from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Sunderland", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-sunderland/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Sunderland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunderland is approximately 2 hours 15 minutes to 2 hours 30 minutes from our South Yorkshire base via the A1(M) north from Doncaster through Wetherby, Leeming Bar and Scotch Corner, then north to the A690 junction at Chester-le-Street and A19 east to Sunderland. For programmes combining Sunderland with Newcastle (25 minutes north via the A19 and A184), Washington (10 minutes west), Durham (20 minutes south-west via the A690) or Middlesbrough (45 minutes south via the A19), we plan them as a North East corridor trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Sunderland and SR postcode jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Sunderland and SR postcode work. We arrive in unbranded vehicles and carry out every installation under your brand throughout. Your client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Sunderland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Sunderland city centre is a modern redevelopment zone following post-industrial transition — The Bridges shopping centre and Keel Square regeneration area provide primarily modern commercial stock.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Sunderland and Newcastle on the same day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sunderland and Newcastle are approximately 25 minutes apart via the A184 and A1 north from Sunderland, or 25 minutes via the A19 north and A184 west to Gateshead and the Tyne Bridge. For sign companies running a North East programme covering both Tyne and Wear, an A19 corridor day covers both urban zones. Newcastle in the morning, Sunderland in the afternoon — or the reverse — with Washington or Chester-le-Street as potential intermediate stops.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover the Nissan plant in Washington and Sunderland city centre in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Washington and Sunderland city centre are 10 minutes apart via the A182/A183. The Nissan Manufacturing UK plant (SR5) and the broader Washington NE37 industrial and logistics zone sit on the western approach to Sunderland. Fleet livery, logistics vehicle wraps and industrial graphics on the Washington industrial estates combine naturally with retail and commercial graphics in Sunderland city centre as a single SR postcode programme.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerSunderlandPage() {
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
            Subcontract · Sunderland &amp; the SR Postcode Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Sunderland &amp; Wearside
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Sunderland and the SR postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A19 direct from South Yorkshire</strong>{" "}
                — A1(M) north from Doncaster via Darlington and Durham to the Sunderland A690/A19 junction
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Sunderland city centre, Washington, Seaham and the SR zone covered as a single Wearside programme</span>
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
              Discuss a Sunderland subcontract job
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

      {/* Why Sunderland */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sunderland — the Wearside commercial centre distinct from Newcastle
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sunderland is the largest city in Wearside and the largest city in the North East
              by population after Newcastle. It sits at the mouth of the River Wear, 25 minutes
              south-east of Newcastle via the A184 and A19 — close enough to cover in the same
              North East corridor programme, but a genuinely distinct commercial zone with its
              own city centre, industrial base and SR postcode geography.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The SR postcode zone is broad: SR1 and SR2 cover Sunderland city centre and the
              Riverside Sunderland regeneration zone, SR3 covers Silksworth and the southern
              residential areas, SR4 covers Pallion and Hendon to the south-west, SR5 covers
              Washington and the Nissan Manufacturing UK plant corridor, SR6 covers Roker and
              Fulwell on the coast, and SR7 covers Seaham — a distinct coastal commercial town
              17 minutes south of Sunderland via the A19.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Sunderland city centre underwent significant post-industrial redevelopment from the
              1990s onward. The Bridges shopping centre (SR1) is the primary managed retail
              environment — modern glazed shopfronts with standard contractor access. Keel Square
              is the civic and cultural focal point, with Sunderland Museum &amp; Winter Gardens
              and the National Glass Centre (SR6 Roker waterfront) as significant cultural
              buildings. The Riverside Sunderland regeneration zone (SR1) is the major
              active development: a 33-hectare city centre regeneration site with new commercial,
              residential and civic buildings — a growing zone for branded wayfinding and
              interior graphics as buildings complete.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and
              ready to apply. We prepare the surface, install to spec and deliver a signed-off
              photo pack. Your Sunderland client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Sunderland &amp; the SR zone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland city centre — The Bridges and High Street West</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns and
                branded retail and hospitality installations across Sunderland city centre.
                The Bridges Shopping Centre is the primary managed retail environment with
                standard contractor access arrangements. High Street West and the wider city
                centre offer modern retail stock. Brief with building description for any
                non-standard frontage.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Riverside Sunderland regeneration zone — SR1</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The 33-hectare Riverside Sunderland development is the major active regeneration
                zone south of the River Wear — new commercial buildings, civic facilities and the
                emerging Sunderland Vaux site. New build commercial interiors: wayfinding,
                branded office graphics, reception feature walls and retail unit installations
                as the zone builds out. Early briefing recommended for programmes tied to
                building completion dates.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Washington &amp; Nissan SR5 — industrial and logistics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Washington (NE37/NE38) sits on the western approach to Sunderland — Nissan
                Manufacturing UK (SR5, Washington) is the largest single-site vehicle production
                facility in the UK. Washington New Town&apos;s industrial and commercial estate
                grid includes Sunderland Highway, Great North Road and District 3/4/5 business
                parks. Fleet wraps, logistics vehicle livery, warehouse graphics and corporate
                campus wayfinding for the Washington industrial corridor.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Seaham — SR7 coastal commercial</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seaham (SR7) is a coastal town 17 minutes south of Sunderland via the A19 —
                a distinct commercial zone with Seaham town centre retail, the Dalton Park
                retail outlet (one of the North East&apos;s largest outlet centres) and Seaham
                Harbour industrial estate. Dalton Park provides a significant managed retail
                environment for branded window graphics and seasonal rollout campaigns.
                Included within the Sunderland subcontract day when brief volumes justify the stop.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Houghton-le-Spring &amp; Chester-le-Street — DH4/DH3</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Houghton-le-Spring (DH4) is 10 minutes south-west of Sunderland on the
                A690 — local commercial and retail, covered as an add-on to a Sunderland
                day. Chester-le-Street (DH3) is 15 minutes south on the A693 — commercial
                and retail town between Sunderland and Durham. Both are natural intermediate
                stops on a Sunderland–Durham A1(M) south corridor day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland University campus — SR1/SR2</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                University of Sunderland city campus is based in SR1/SR2 — two main campus
                clusters within Sunderland city centre and on the Riverside. University
                wayfinding, campus branding, window graphics and interior vinyl installations.
                Access arrangements typical for a working university campus — term-time
                briefing required. Sunderland College (City Campus, Bede campus) is
                the further education equivalent within the same city zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A19 corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sunderland on the A19 North East corridor — a distinct zone from Newcastle
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A19 is the primary spine road of the North East coast — running from the A1(M)
              at Dishforth (near Wetherby) north through Middlesbrough, Sunderland and on to
              Tyneside. From South Yorkshire, the approach is A1(M) north from Doncaster to
              Scotch Corner, then continuing north and joining the A19 east at Chester-le-Street
              for Sunderland — approximately 2 hours 15 minutes in light traffic.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies running A19 corridor programmes, Sunderland can be combined
              with Middlesbrough (45 minutes south via the A19), Newcastle (25 minutes north
              via the A184), Durham (20 minutes south-west via the A690) or the coastal
              Seaham–Hartlepool corridor (Seaham 17 minutes, Hartlepool 30 minutes south)
              — all within a single North East trip. One WRPX subcontract covers the
              full SR and TS postcode arc from Sunderland south to Teesside.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Washington, as the industrial connector between Sunderland and the A1(M), is
              the key logistics hub — the Nissan plant, Washington New Town business parks
              and the A182 direct link to Sunderland city centre. For programmes that
              combine fleet and logistics vehicle work at Washington with retail and office
              graphics in Sunderland city centre, the A182 gives a direct 10-minute connection
              between the two zones.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Sunderland &amp; the SR postcode zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Bridges — SR1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sunderland&apos;s primary shopping centre — managed retail environment,
                modern glazed shopfronts. High Street West adjacent for high-street
                retail and hospitality. Keel Square civic zone nearby — cultural
                and civic buildings including Sunderland Museum &amp; Winter Gardens.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Riverside Sunderland — SR1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                33-hectare city centre regeneration zone south of the River Wear —
                active development with new commercial buildings. Wayfinding, office
                branding and retail unit graphics as buildings complete. Growth zone
                for branded installation work.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Nissan / Washington — NE37/SR5</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Nissan Manufacturing UK at Washington — largest single-site vehicle
                plant in the UK. Washington New Town grid of industrial and
                commercial estates: Districts 3, 4, 5. Fleet livery, logistics
                wrapping, warehouse graphics. 10 minutes from Sunderland city centre.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Dalton Park — SR7</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                One of the North East&apos;s largest retail outlet centres, 17 minutes
                south of Sunderland in Seaham. Managed retail environment, brand
                rollout and seasonal window campaign work. Natural add-on to a
                Sunderland subcontract day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland University — SR1/SR2</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                City campus and Riverside campus in the SR1/SR2 zone. University
                wayfinding, campus branding and interior vinyl. Access
                arrangements require term-time briefing and safeguarding
                compliance for on-campus work.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland Royal Hospital — SR4</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sunderland Royal Hospital (SR4 Kayll Road) — NHS Trust wayfinding,
                department branding, floor graphics and window film in clinical
                areas. NHS site access requires RAMS submission and DBS-checked
                crew. Covered within the Sunderland city programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Sunderland subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full SR postcode scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sunderland and the SR zone are efficiently covered as part of a wider North East
                corridor programme — combining SR with NE (Newcastle/Gateshead), DH (Durham),
                TS (Teesside/Middlesbrough) or the Seaham–Hartlepool coastal corridor where
                brief volumes justify it. If your programme includes multiple SR zone sites,
                include all addresses in the brief. We plan the day sequence to minimise
                dead mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Washington industrial and city centre on the same programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Washington NE37/SR5 and Sunderland city centre SR1 are 10 minutes apart via
                the A182. For programmes that combine fleet work or logistics vehicle livery
                at Washington with retail, office or hospitality graphics in Sunderland city
                centre, include all addresses and we plan the most efficient day sequence.
                One invoice, one documentation standard, one installer across both zones.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Sunderland or SR zone site in unbranded vehicles, introduce
                ourselves as the installation team, and carry out the work under your
                instructions throughout. Your client&apos;s experience is with your company at
                every stage — WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Sunderland installation is documented with before, during-installation
                and completed sign-off photographs. Photo packs delivered to you same day
                or next morning in whatever format you need — ready to forward to your
                client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Sunderland with Newcastle, Durham or Middlesbrough in one programme</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Sunderland brief sits alongside Newcastle, Gateshead, Durham or
                Middlesbrough, we plan them as a single North East corridor trip. One invoice,
                one documentation pack per site, one consistent installation standard across
                the full NE/SR/TS postcode programme. No separate North East subcontractors
                — one point of contact from Sheffield to Wearside and Teesside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Is Sunderland covered separately from Newcastle?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Sunderland is a distinct city and commercial zone from Newcastle,
                25 minutes apart via the A184/A19. Sign companies with programmes across
                both Tyne and Wear can have a single WRPX subcontract cover both zones —
                one brief, one installer, two cities — or we can cover Sunderland as a
                standalone SR postcode day if the volume is there without requiring a Newcastle
                visit on the same trip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Sunderland and Middlesbrough on the same day?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Middlesbrough is approximately 45 minutes from Sunderland via the A19 south
                through Washington and into Teesside. For sign companies running A19 corridor
                programmes covering both Wearside and Teesside, a combined SR/TS programme
                covers both zones in a single North East trip. Installation volumes permitting,
                Sunderland in the morning and Middlesbrough in the afternoon — with Seaham
                or Hartlepool as potential intermediate stops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on NHS or University of Sunderland jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard. For NHS sites including Sunderland Royal Hospital
                (SR4), we can provide RAMS documentation and operate with DBS-checked crew
                where required. University of Sunderland campus work follows standard education
                site access requirements — term-time briefing and managed access. Contact us
                early for NHS or education programmes to allow RAMS submission lead times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the North East corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-newcastle/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Newcastle &amp; Gateshead
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
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
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
            Ready to subcontract your Sunderland or SR zone installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Sunderland, SR postcode or Wearside brief — installation
            type, site address, material spec and date requirements. We confirm quickly and
            plan SR dates as part of the A19 North East corridor, combining with Newcastle,
            Durham or Middlesbrough where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Sunderland
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
