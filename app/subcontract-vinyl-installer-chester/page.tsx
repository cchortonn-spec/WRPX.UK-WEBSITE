import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Chester — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Chester and Cheshire West for sign companies, print houses and fit-out contractors. WRPX covers Chester city centre, The Rows, Chester Business Park, Cheshire Oaks, Ellesmere Port and the CH postcode zone — white-label, photographic sign-off, direct from South Yorkshire via M62 and M53.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-chester/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Chester — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Chester and Cheshire West. White-label available. WRPX covers Chester city centre, The Rows retail galleries, Chester Business Park, Cheshire Oaks Designer Outlet, Ellesmere Port and the CH postcode zone — M62 west to Liverpool then M53 south from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Chester", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-chester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Chester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chester is approximately 100–120 minutes from our South Yorkshire base via the M1 north to Leeds, M62 west to Liverpool, then M53 south to Chester. For programmes combining Chester with Liverpool (30 minutes north via M53), Warrington (30 minutes east) or Manchester (50 minutes east), we run them as corridor trips — one installer covering the full North West arc without separate Cheshire and Merseyside subcontractors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Chester installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out all Chester and Cheshire West installations under your brand throughout. Your Chester client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on completion day. No WRPX branding appears anywhere on site.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Chester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. Chester's heritage buildings, including The Rows two-level retail galleries and the walled city conservation area, require specific surface assessment and fixings approach — flagged and confirmed in the brief before material is ordered.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Cheshire Oaks and Ellesmere Port alongside Chester city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Cheshire Oaks Designer Outlet and Ellesmere Port sit on the M53 north of Chester (15 minutes from Chester city centre), and are covered as part of the same Chester trip. Cheshire Oaks generates a significant volume of retail graphics briefs — national outlet brands rolling out seasonal window graphics and branded retail environments across the 150+ outlet units. Ellesmere Port's commercial and industrial zones (Stanlow petrochemical belt, Port Causeway industrial estates, Retail World) are treated as one zone with the Chester and Cheshire Oaks trip.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Chester with Liverpool, Warrington and Manchester in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Chester sits at the south end of the M53, which connects directly north to Ellesmere Port, the Mersey Tunnels and Liverpool. A sign company running a North West programme covering Liverpool, Warrington, Chester and Cheshire Oaks can run the entire programme under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the Liverpool–Wirral–Chester axis and then Warrington and Manchester further east. No separate Cheshire, Merseyside and Greater Manchester subcontractors to coordinate.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerChesterPage() {
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
            Subcontract · Chester &amp; Cheshire West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Chester
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Chester, Cheshire West and the CH postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail and hospitality graphics — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 + M53 from South Yorkshire</strong>{" "}
                — Chester covered via Liverpool as part of corridor runs linking Yorkshire, Merseyside and Cheshire
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Heritage building experience — Chester&apos;s conservation zones and listed structures handled correctly</span>
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
              Discuss a Chester subcontract job
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

      {/* Why Chester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Chester — a genuinely different commercial environment in the North West
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Chester is unlike any other North West city in terms of the installation environments
              it generates. Its historic walled city — one of the best-preserved Roman city walls in
              Europe — and its two-level Victorian retail galleries (The Rows) create an installation
              context that requires specific planning well before material is ordered. Fixings into
              stone or listed timber, conservation area consent for external signage, and the physical
              access constraints of a walled mediaeval street grid are all practical factors for sign
              companies who assume Chester operates like a standard modern retail brief.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Outside the walled city, Chester&apos;s commercial geography is more recognisable: the
              Chester Business Park off the A55 south, Greyhound Retail Park, Chester Retail Park and
              the Northgate Arena commercial zone to the north. Chester Business Park is the city&apos;s
              primary out-of-town office estate, occupied by financial services, professional services
              and technology businesses generating office interior graphics, wayfinding systems and
              reception fit-out briefs. These are straightforward to access and do not carry the
              planning constraints of the walled city zone.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Cheshire Oaks Designer Outlet, 12 miles north of Chester city centre off the M53 at
              Ellesmere Port, is one of the UK&apos;s highest-footfall retail environments — 150+ outlet
              stores generating seasonal window graphics programmes and brand rollout installs at a
              volume that rivals city-centre retail destinations. The same M53 trip covers both Chester
              and Cheshire Oaks without backtracking, making them natural companions on a single
              subcontract day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, assess any conservation or access constraints ahead of
              arrival, install to spec and deliver a signed-off photo pack. Your Chester client never
              knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Chester &amp; Cheshire West
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Rows &amp; Chester city centre retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film, one-way vision, promotional vinyls and branded
                retail installations across The Rows (Bridge Street, Eastgate Street, Northgate Street,
                Watergate Street), Eastgate Street itself, and the Chester city centre retail circuit.
                Chester&apos;s two-level medieval gallery structure creates access constraints not found in
                standard modern retail — brief us clearly on gallery level, frontage type and surface
                material before material is produced.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cheshire Oaks Designer Outlet</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal window graphics, promotional vinyl campaigns, brand rollout installs and
                retail environment graphics across Cheshire Oaks&apos;s 150+ outlet stores. One of
                the UK&apos;s largest designer outlet centres, generating consistent year-round graphics
                briefs as outlet brands roll out seasonal windows and brand refreshes across their
                Cheshire Oaks units. High-footfall environment requiring swift, clean installation
                with minimal disruption to adjacent traders.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                  Retail fit-out graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Chester Business Park &amp; out-of-town offices</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, reception feature walls, glass partition film, meeting room
                branding and wayfinding systems across Chester Business Park (A55 south), Hoole Bridge
                commercial zone, and Chester&apos;s wider business park estate. Financial services, insurance,
                technology and professional services occupiers generating interior branding briefs on
                modern, accessible office stock — no conservation area constraints, straightforward
                building access.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Ellesmere Port industrial &amp; logistics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet livery, warehouse graphics, commercial vehicle signage, industrial unit fascias
                and external signage across Ellesmere Port&apos;s commercial and industrial zones — Stanlow
                petrochemical belt, Port Causeway Industrial Estate, Retail World and the wider CH65
                logistics belt. Vehicle graphics and fleet branding for haulage, distribution and
                manufacturing operators served through a Liverpool or Chester subcontract day.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hospitality &amp; heritage tourism graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl graphics for Chester&apos;s substantial hotel, restaurant and visitor attraction
                sector — Chester Zoo (one of the UK&apos;s most-visited zoos), Grosvenor Estate hospitality,
                historic pub frontages on Eastgate Street and the wider city-centre dining quarter.
                Heritage-sensitive installation — correct surface preparation for stone, timber and
                painted render, photographic sign-off before material is permanently applied.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; campus graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional signage systems, wayfinding vinyls and campus identity graphics across
                the University of Chester multi-site campus (city centre, Kingsway, Parkgate Road),
                Countess of Chester Hospital NHS Trust and Chester&apos;s growing healthcare and education
                estate. Multi-building programmes consolidated under one subcontract brief — single
                installer, consistent standard, single documentation pack per site.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M53 / corridor section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Chester in the M53 / M62 corridor — Cheshire and Merseyside under one subcontract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Chester sits at the southern terminus of the M53, which runs north from the city centre
              through Ellesmere Port, under the Mersey (Mersey Gateway / Wallasey Tunnel approach) and
              connects to the Wirral peninsula and Liverpool. This makes Chester a natural extension of
              the Liverpool and Wirral subcontract zone — not a separate out-of-the-way destination, but
              the south end of the same M53 corridor that WRPX uses to cover Merseyside.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a programme that includes Liverpool city centre, Birkenhead or
              the Wirral, Cheshire Oaks and Chester — a perfectly common North West retail or
              hospitality rollout — the entire sequence runs on one M53 trip. WRPX travels M62 west
              to Liverpool, then M53 south through Ellesmere Port and Cheshire Oaks to Chester. No
              separate Cheshire installer. No separate Merseyside subcontractor. One invoice per site,
              one documentation pack, one consistent standard throughout.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Chester also connects west via the A55 to Rhyl, Colwyn Bay, Llandudno and the North Wales
              coast — a separate zone with its own installation requirements, not covered as part of a
              standard Chester day, but relevant context if your programme includes the North Wales
              border zone. We confirm coverage for North Wales sites on a brief-by-brief basis.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Chester &amp; Cheshire West
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Chester walled city</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Eastgate Street, Bridge Street, Northgate Street, Watergate Street, The Rows
                two-level gallery retail, Eastgate Clock zone and the Grosvenor precinct. CH1 postcode.
                Conservation area. Listed buildings. Surface assessment essential before material
                production — brief us early.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cheshire Oaks &amp; Ellesmere Port</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Cheshire Oaks Designer Outlet (150+ stores), Retail World, Port Causeway Industrial
                Estate and Stanlow belt. CH65 postcode. M53 junction 10. High-volume retail rollout
                graphics and industrial fleet livery. 15 minutes north of Chester city centre —
                natural companion on the same trip.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Chester Business Park</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Chester&apos;s primary office business park estate off the A55/A483 southern junction.
                CH4 postcode. Financial services, insurance, technology and professional services
                occupiers. Office interior graphics, glass partition film, wayfinding and reception
                branding. Standard commercial access — no conservation constraints.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">University of Chester campuses</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Main campus (Parkgate Road CH1), Kingsway campus, city-centre buildings and the
                Exton Park health campus. Multi-site university estate generating wayfinding,
                faculty branding, reception and corridor graphics briefs. DBS-aware access, term-time
                scheduling requirements — handled in the brief.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Countess of Chester Hospital</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Countess of Chester Hospital NHS Trust, Liverpool Road CH2. Full district general
                hospital estate with wayfinding, patient environment and department identity graphics
                briefs. NHS access protocols, IPC requirements, out-of-hours scheduling. CH2 postcode.
                WRPX carries NHS-environment installation experience from cross-corridor NHS work.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Chester Zoo &amp; heritage attractions</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Chester Zoo (Upton, CH2), the Roman amphitheatre, Grosvenor Museum and Chester&apos;s
                wider heritage visitor economy. Wayfinding systems, visitor-facing directional graphics,
                retail and food-service vinyls within heritage and visitor attraction environments.
                Conservation-grade surface preparation and fixings where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Chester subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Chester installation — especially the building type</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Chester is one of the few UK cities where the building type and postcode zone genuinely
                changes the installation approach. A Chester city-centre brief on a listed Row property
                requires surface assessment before material is ordered. A Chester Business Park brief
                does not. Send us the site address and building description alongside the standard job
                details — material spec, installation type, access constraints and date. We confirm
                feasibility and flag any surface or conservation issues before you commit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Chester site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions throughout.
                Your Chester client&apos;s experience is with your company at every stage — WRPX is invisible
                behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Chester installation is documented with before, during-installation and completed
                sign-off photographs. Photo packs delivered to you same day or next morning in whatever
                format you need — ready to forward to your Cheshire client or add to your own project
                documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Chester with Liverpool, Wirral and Cheshire Oaks</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Chester brief sits alongside Cheshire Oaks, Ellesmere Port, Birkenhead or
                Liverpool jobs, we run them as a single M53 corridor trip. One invoice, one documentation
                pack per site, one consistent installation standard across the whole Merseyside and
                Cheshire programme. The M53 makes Chester-to-Liverpool multi-site programmes a single
                logistics conversation rather than separate Cheshire and Merseyside subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Chester subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Do listed building or conservation area rules affect vinyl installation in Chester city centre?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                They can. Chester&apos;s city centre is a conservation area, and many frontages on The Rows
                and the main retail streets are listed. External signage may require planning consent from
                Cheshire West and Chester Council — this is the sign company&apos;s responsibility to confirm
                before producing material. For installation-only briefs, we assess surface condition and
                flag any technical constraints (substrate type, fixings, adhesion risk on historic surfaces)
                before arrival. Interior vinyl installation is generally unaffected by conservation rules.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Wrexham and the North Wales border zone from Chester?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Wrexham (LL11–LL14 postcode) is 12 miles south-west of Chester via the A483 and can
                be combined with a Chester day where the brief warrants it. We confirm Wrexham coverage
                on a job-by-job basis — include it in the brief and we will advise on logistics. The
                wider North Wales coast (Rhyl, Colwyn Bay, Llandudno) is the A55 west from Chester and
                is covered on a case-by-case basis as a separate trip, not as a default Chester extension.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Chester and Cheshire Oaks jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard for all Chester and Cheshire West work. We arrive in
                unbranded vehicles and carry out every installation under your brand. Your Chester or
                Cheshire Oaks client never knows WRPX was involved. Full photographic documentation
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
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
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
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Birmingham
            </Link>
            <Link href="/subcontract-vinyl-installer-wigan/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wigan
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
            Ready to subcontract your Chester installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Chester or Cheshire West brief — installation type, site address
            (CH postcode and building description), material spec and date requirements. We confirm
            quickly and can often turn around Chester dates within a few days for straightforward
            installs, combining with Cheshire Oaks, Liverpool or Wirral when there are multiple sites.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Chester
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
