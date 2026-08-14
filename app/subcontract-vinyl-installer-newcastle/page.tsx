import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Newcastle — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Newcastle, Gateshead, Sunderland and the North East for sign companies, print houses and fit-out contractors. WRPX covers Newcastle city centre, MetroCentre Gateshead, Team Valley Business Park, Sunderland and the NE/SR postcode zone — white-label, photographic sign-off, via A1(M) from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-newcastle/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Newcastle — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Newcastle upon Tyne, Gateshead, Sunderland and the wider North East. White-label available. WRPX covers Newcastle city centre, MetroCentre Gateshead, Team Valley Business Park NE11, Sunderland SR postcode zone and the wider NE postcode area — A1(M) north from South Yorkshire via Doncaster, Darlington and the A1(M) North East spur."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Newcastle", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-newcastle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newcastle upon Tyne is approximately 2 hours to 2 hours 15 minutes from our South Yorkshire base via the A1(M) north from Doncaster, through Wetherby and Leeming Bar to Scotch Corner, then continuing north on the A1(M) to the Gateshead/Newcastle interchange at junction 65. For programmes combining Newcastle with Sunderland (25 minutes south-east via A19/A690), Gateshead (immediately south via the Tyne Bridge), Durham (20 minutes south on the A1(M)), or Middlesbrough (50 minutes south via the A19), we plan them as a North East corridor trip — one installer covering the NE and SR postcode zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Newcastle and North East installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Newcastle, Gateshead, Sunderland and North East installations under your brand throughout. Your North East client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Newcastle and the North East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Newcastle city centre has a mix of Victorian and Edwardian sandstone buildings alongside modern retail and commercial development — surface confirmation is particularly relevant for installations on period Grey Street and Grainger Street frontages.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Newcastle, Gateshead and Sunderland in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Newcastle, Gateshead and Sunderland form a natural urban cluster at the heart of the North East. Gateshead immediately adjoins Newcastle across the Tyne Bridge. Sunderland is 25 minutes south-east via the A19 and A690. A sign company running a North East programme covering Newcastle city centre, MetroCentre Gateshead and Sunderland city centre or Washington can run the entire programme under one WRPX subcontract — same installer, same documentation standard, single point of contact for the NE and SR postcode zones.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Newcastle with Middlesbrough in the same trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Newcastle and Middlesbrough are approximately 50 minutes apart via the A19 south from Gateshead through Washington and into Teesside. For sign companies running a North East programme covering both Newcastle/Tyne and Middlesbrough/Tees, an A19 corridor day covers both urban zones. Newcastle in the morning, Middlesbrough in the afternoon — or the reverse — with Washington, Sunderland or Durham as potential intermediate stops depending on the programme.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerNewcastlePage() {
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
            Subcontract · Newcastle &amp; North East
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Newcastle
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Newcastle upon Tyne, Gateshead, Sunderland and
            the wider NE and SR postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">A1(M) direct from South Yorkshire</strong>{" "}
                — Newcastle reached via A1(M) north from Doncaster, continuing through Darlington and up to the Tyne
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Newcastle, Gateshead and Sunderland covered as a single North East corridor programme</span>
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
              Discuss a Newcastle subcontract job
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

      {/* Why Newcastle */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newcastle — North East commercial capital and the A1(M) northern reach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Newcastle upon Tyne is the commercial, cultural and economic capital of the North
              East of England. Sitting on the north bank of the River Tyne opposite Gateshead,
              the Newcastle and Gateshead conurbation forms a continuous commercial environment
              with over a million people in the urban area — one of England&apos;s largest cities.
              For sign companies and print houses running national or multi-regional rollout
              programmes, Newcastle is not a peripheral northern outpost: it is a significant
              commercial centre with a dense concentration of retail, hospitality, corporate
              office, education, NHS and public-sector installation opportunities within a
              compact geography.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Newcastle city centre has a distinctive built environment. The Grainger Town area —
              Grey Street, Grainger Street, the Grainger Market and the streets around the Central
              Station — is one of England&apos;s finest examples of planned Victorian commercial
              architecture: wide sandstone streets, consistent building heights and period
              shopfronts with original or period-sympathetic glazing systems. Installing on
              these frontages is different from installing on a standard modern retail unit —
              the substrate environment requires surface confirmation before material
              specification. Interior window graphics applied to the inside face of period
              glass avoid most of the surface preparation considerations that external
              fascia vinyls on these buildings raise.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond Grainger Town, Newcastle has substantial modern retail capacity. Eldon Square
              and the adjoining Eldon Garden form one of the UK&apos;s major regional shopping centres.
              The MetroCentre in Gateshead (NE11) is Europe&apos;s largest indoor shopping and leisure
              complex by retail floor area — generating a continuous programme of brand rollout,
              seasonal campaign and new-unit graphics briefs. Team Valley Business Park (NE11/NE40)
              to the south-west of Gateshead is one of Europe&apos;s largest planned business parks —
              a dense commercial office and light industrial environment generating consistent
              corporate interior and fleet graphics work.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Newcastle client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Newcastle &amp; the North East
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Newcastle city centre — Grainger Town and Eldon Square</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, promotional vinyls, seasonal window campaigns
                and branded retail and hospitality installations across Newcastle city centre.
                Two distinct zones: the historic Grainger Town sandstone streets (Grey Street,
                Grainger Street, Clayton Street) where period frontages require surface
                confirmation; and the modern retail environment of Eldon Square and the
                adjoining shopping streets where standard commercial briefing applies.
                Full brief including building description ensures material is specified correctly.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MetroCentre — Gateshead NE11</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                MetroCentre Gateshead (NE11) — Europe&apos;s largest indoor shopping and leisure
                complex. A continuous programme of brand rollout, seasonal campaign graphics,
                new-unit fit-out, window graphics and promotional vinyls across the retail malls,
                leisure zones and food court areas. Managed centre environment — access
                requirements, contractor management and signage approval through the centre
                management team. Brief with MetroCentre contractor access documentation
                requirements included.
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
                Team Valley Business Park is one of Europe&apos;s largest planned business parks —
                a high-density commercial office and light industrial environment immediately
                south-west of Gateshead. Office interior graphics, glass partition manifestation,
                meeting room branding, wayfinding systems and reception feature walls across the
                park&apos;s extensive corporate occupier base. Fleet livery and commercial vehicle
                branding from the logistics and light industrial operators also concentrated here.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland — city centre and Washington</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sunderland (SR1/SR2/SR3) city centre — The Bridges shopping centre, High Street
                West, Keel Square and the emerging Riverside Sunderland regeneration zone.
                Washington New Town (NE37/NE38) 10 minutes inland — Washington retail parks,
                commercial estates and Nissan Manufacturing UK (Sunderland&apos;s largest employer)
                in the Washington corridor. Sunderland is 25 minutes south-east of Newcastle via
                the A19 and A690 — covered as part of a North East corridor day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Newcastle University &amp; Northumbria University</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Newcastle University (NE1) and Northumbria University (NE1/NE2) — both
                large campus universities immediately adjacent to Newcastle city centre.
                Wayfinding systems, campus identity graphics, faculty branding, corridor
                and reception vinyls, library and student union installations. Education-sector
                access protocols, DBS awareness and term-time vs holiday scheduling — handled
                in the brief. Multi-building programmes consolidated under one subcontract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">NHS Newcastle &amp; North East healthcare</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Newcastle upon Tyne Hospitals NHS Foundation Trust operates the Royal Victoria
                Infirmary (NE1), Freeman Hospital (NE7) and Great North Children&apos;s Hospital —
                generating NHS wayfinding, patient environment graphics, departmental identification
                and facility branding briefs. Clinical environment access, infection control
                compliance and out-of-hours installation windows are standard for NHS work
                in the Newcastle estate.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                  Healthcare graphics installation
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
              Newcastle in the A1(M) North corridor — Tyne and Tees under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The A1(M) runs north from Doncaster through Wetherby, Scotch Corner and Darlington
              to the Gateshead/Newcastle interchange. This makes Newcastle the northern terminus
              of the same A1(M) corridor that WRPX uses for Yorkshire, Harrogate, York and
              Middlesbrough — a single continuous axis from South Yorkshire to the Tyne.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies running A1(M) corridor programmes, this means Newcastle,
              Durham and Middlesbrough are all accessible on the same axis — no separate
              North East subcontractor needed. The A19 south from Gateshead connects to
              Sunderland (25 minutes) and then to Middlesbrough (50 minutes) via Washington
              and Teesside. A programme covering Newcastle, Durham, Sunderland and Middlesbrough
              runs as a single North East day under one WRPX subcontract.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Durham (NE/DH postcode zone) sits midway on the A1(M) between Darlington and
              Newcastle — 20 minutes from both. Durham city centre is compact and dense:
              the cathedral, castle and university buildings generate heritage graphics briefs,
              while the Prince Bishops shopping centre, the Arnison Centre (DH1 north)
              and the Dragonville Retail Park provide modern commercial installation work.
              Included on the Newcastle day when brief volumes justify the intermediate stop.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Newcastle &amp; the North East
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Grainger Town — NE1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Grey Street, Grainger Street, Clayton Street and the Grainger Market. Victorian
                sandstone commercial architecture — period shopfronts with surface variation.
                Interior window graphics straightforward; external fascia vinyls on period
                stone frontages require pre-install surface confirmation. Britain&apos;s finest
                Victorian commercial streetscape.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Eldon Square &amp; Northumberland Street — NE1</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Eldon Square shopping centre and Northumberland Street — Newcastle&apos;s primary
                modern retail core. Modern retail unit construction — standard glazed shopfronts
                and aluminium fascias. Managed centre environment with contractor access
                requirements. Northumberland Street is pedestrianised — delivery and access
                logistics briefed in advance.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MetroCentre — NE11 Gateshead</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Europe&apos;s largest indoor shopping and leisure complex. Continuous brand rollout,
                seasonal and promotional campaign briefs. Managed centre contractor access —
                MetroCentre management system requirements apply. Immediately adjacent to
                Team Valley Business Park for combined Gateshead commercial days.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Team Valley — NE11</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                One of Europe&apos;s largest planned business parks. Office interior graphics,
                fleet livery and commercial vehicle branding from the extensive corporate
                and light industrial occupier base. Modern commercial stock — standard
                glazed office buildings. Vehicle access straightforward throughout the park.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sunderland city centre — SR1/SR2</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Bridges shopping centre, High Street West, Keel Square and the Riverside
                Sunderland regeneration zone. SR1/SR2 postcode. 25 minutes from Newcastle via
                A19/A690. Covered as part of the North East corridor day when the brief includes
                Sunderland sites alongside Newcastle or Gateshead.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Durham — DH1, A1(M) midpoint</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Durham city centre (DH1), Prince Bishops Place, the Arnison Centre north and
                Dragonville Retail Park. 20 minutes south of Newcastle on the A1(M). Heritage
                graphics briefs from the cathedral and university zone alongside modern retail
                and commercial installation. Natural intermediate stop on the A1(M) Newcastle
                day from South Yorkshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Newcastle subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the full North East scope</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Newcastle is efficiently covered as part of a wider North East programme —
                combining Newcastle with Gateshead, Sunderland, Durham or Middlesbrough where
                brief volumes justify it. If your programme includes multiple NE and SR zone
                sites, include all addresses in the brief. We plan the day sequence to minimise
                dead mileage and confirm feasibility before material is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Surface confirmation for Grainger Town period frontages</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Newcastle&apos;s Grainger Town has genuine surface variation — Victorian sandstone,
                original cast-iron shopfront frames and period glazing systems sit alongside
                modern retail glazed units. For any installation on a Grainger Town or
                similarly period-fronted building, brief us with the full site address and
                a description of the frontage. We confirm surface approach before material
                is produced.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Newcastle site in unbranded vehicles, introduce ourselves as
                the installation team, and carry out the work under your instructions throughout.
                Your North East client&apos;s experience is with your company at every stage — WRPX is
                invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Newcastle and North East installation is documented with before,
                during-installation and completed sign-off photographs. Photo packs delivered to
                you same day or next morning in whatever format you need — ready to forward to your
                North East client or add to your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Newcastle with Middlesbrough, York and South Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Newcastle brief sits alongside Middlesbrough, York or other A1(M) corridor
                jobs, we plan them as a single northbound day. One invoice, one documentation pack
                per site, one consistent installation standard across Yorkshire, Teesside and the
                North East. No separate Yorkshire and North East subcontractors — one point of
                contact from Sheffield to the NE postcode zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Gateshead separately from Newcastle?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Gateshead is covered as part of the same North East day as Newcastle — the Tyne
                Bridge connects both city centres in minutes and MetroCentre/Team Valley are
                immediately to the south-west of Gateshead. If your programme includes Newcastle
                city centre and Gateshead (MetroCentre or Team Valley) sites, include all
                addresses in the brief and we plan them efficiently within the same day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you cover Newcastle and Middlesbrough on the same day?
              </h3>
              <p className="mt-2 text-muted leading-relaxed text-sm">
                Yes — Newcastle and Middlesbrough are approximately 50 minutes apart via the A19
                south from Gateshead. For sign companies with programmes covering both Tyne
                and Tees, an A19 corridor day covers both zones. Depending on installation
                volumes, the day typically runs one city in the morning and one in the
                afternoon, with Washington, Sunderland or Durham as potential intermediate stops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Newcastle and North East jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Newcastle and NE postcode work. We arrive
                in unbranded vehicles and carry out every installation under your brand. Your
                North East client never knows WRPX was involved. Full photographic documentation
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
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Middlesbrough &amp; Teesside
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sunderland &amp; Wearside
            </Link>
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
            </Link>
            <Link href="/subcontract-vinyl-installer-harrogate/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Harrogate
            </Link>
            <Link href="/subcontract-vinyl-installer-hull/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Hull
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
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
            Ready to subcontract your Newcastle or North East installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Newcastle or NE postcode brief — installation type, site address,
            material spec and date requirements. We confirm quickly and plan Newcastle dates as part
            of the A1(M) North corridor, combining with Middlesbrough, York, Sunderland or Durham
            where there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Newcastle
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
