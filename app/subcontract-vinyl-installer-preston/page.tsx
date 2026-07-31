import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Preston — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Preston and Lancashire for sign companies, print houses and fit-out contractors. WRPX covers Capitol Centre, Fishergate, UCLan, Bamber Bridge, Cuerden Valley and the full PR postcode zone — white-label, photographic sign-off, M6 north from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-preston/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Preston — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Preston and Lancashire. White-label available. WRPX covers Capitol Centre, Fishergate shopping centre, UCLan, Bamber Bridge, Cuerden Valley Business Park, Walton Summit and the full PR postcode zone — M6 north from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Preston", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-preston/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Preston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preston is approximately 90–105 minutes from our South Yorkshire base via the M1 and M6 north. The M6 runs directly from our operating area through Manchester (junction 30 onwards) to Preston at junctions 31–32. For programmes combining Preston with Manchester or Yorkshire cities, we run them as a single M6/M62 corridor trip — one installer, no co-ordinating separate Lancashire and Yorkshire subcontractors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Preston installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out the Preston installation under your brand throughout. Your Lancashire client sees your company at every stage. Full photographic documentation delivered under your agreed sign-off format on completion — before, during and completed sign-off images.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Preston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover the full PR postcode zone including Preston city centre, Bamber Bridge, Fulwood, Walton Summit, Cuerden Valley and the wider Lancashire commercial belt.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Preston with Manchester in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Preston sits 30–35 minutes north of Manchester city centre via the M6. A sign company running a North West brand rollout covering Manchester, Salford, Trafford and Preston can run the entire programme under one WRPX subcontract. Same installer, same documentation standard, single point of contact for the whole Lancashire and Greater Manchester programme. We also cover Blackpool via the M55, accessible from Preston in under 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover UCLan and Preston NHS estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — UCLan (University of Central Lancashire) is one of the UK&apos;s largest universities with a substantial city-centre campus that generates consistent demand for wayfinding graphics, faculty identity vinyls, wall graphics and promotional campaigns. Royal Preston Hospital and the wider Lancashire and South Cumbria NHS Foundation Trust estate also generate regular NHS graphics installation briefs. We are familiar with DBS requirements and access protocols for both education and NHS environments.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerPrestonPage() {
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
            Subcontract · Preston &amp; Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Preston
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Preston, Lancashire and the wider PR postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            retail graphics and wayfinding systems — on your instructions, under your brand, with
            full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6 north corridor</strong>{" "}
                — Preston covered as part of M6 corridor runs from South Yorkshire through Manchester to Lancashire
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
              Discuss a Preston subcontract job
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

      {/* Why Preston */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Preston — Lancashire&apos;s county town on the M6 north corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Preston is Lancashire&apos;s county town and principal commercial centre, with a population
              of around 140,000 and a significant wider catchment across central Lancashire. Unlike
              many comparable-sized towns, Preston&apos;s commercial geography is notably diverse: a
              substantial city-centre retail and civic core (Fishergate, St George&apos;s Shopping Centre,
              Fishergate Shopping Centre, the historic Market Hall and expanding city-centre commercial
              development), a ring of out-of-town retail parks including Capitol Centre in Walton-le-Dale,
              a large university campus in UCLan, a major NHS hospital estate at Royal Preston Hospital,
              and a significant industrial and business park belt along the M6 corridor south of the city.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M6 motorway runs directly through Preston — junction 31 at Tickled Trout to the south
              and junction 32 to the north, with the M55 branching west to Blackpool and the Fylde
              Coast. This makes Preston the natural hub for Lancashire commercial sign and graphics
              programmes: a brand rollout across Lancashire typically runs from Preston outward to
              Blackpool (M55), Lancaster (M6 north, 35 minutes), Burnley (M65, 35 minutes) and
              Blackburn (30 minutes via the A59 or M65). For a sign company running a regional
              programme, briefing Preston correctly covers most of the Lancashire commercial geography
              from one installation base.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Preston is also a significant defence and manufacturing location — BAE Systems operates
              one of its largest UK facilities at Samlesbury, immediately east of Preston on the A59,
              and Springfields Nuclear Fuels operates west of the city. Cuerden Valley Business Park,
              Walton Summit Industrial Estate and Bamber Bridge industrial zone south of the city add
              a substantial logistics and distribution commercial base that generates fleet livery and
              brand graphics briefs regularly.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Preston client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Preston &amp; Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; retail frontages</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls
                and branded window installs across Fishergate, St George&apos;s Shopping Centre, Capitol
                Centre, Deepdale Retail Park and Preston city centre commercial premises. Consistent
                finish across multi-unit retail rollouts from one Preston store to a Lancashire-wide
                brand programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Business park &amp; industrial estate graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, wayfinding, corporate identity graphics and fleet livery across
                Cuerden Valley Business Park, Walton Summit Centre, Bamber Bridge, Ribbleton and
                the M6 corridor business park belt south of Preston. Manufacturing, logistics and
                distribution businesses generating fleet identity and brand graphics briefs across
                the PR postcode zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for UCLan,
                commercial offices, hospitality venues and corporate interiors across Preston.
                Substrate assessed before installation — painted plaster, MDF, block, glazed
                partitions, render — any issues flagged before material is committed. UCLan&apos;s
                large city-centre campus and Preston&apos;s expanding hospitality and hotel sector
                both generate regular wall graphic briefs.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; anti-slip vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls, branded floor graphics, anti-slip rated floor films and
                promotional floor campaigns across Preston retail, the Royal Preston Hospital NHS
                estate, UCLan and commercial premises throughout the PR postcode zone. All floor
                vinyls applied to spec, confirmed compliant before sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps &amp; fleet livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for
                vehicles across Preston and Lancashire — Walton Summit and Bamber Bridge logistics
                operations, M6 corridor distribution companies, and national brand fleets serviced
                through your print or sign company. BAE Systems Samlesbury, local authority fleet
                and NHS trust fleet all within range of the PR postcode zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; education/NHS graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics and campus branding for UCLan,
                Royal Preston Hospital and the wider Lancashire NHS estate. UCLan is one of the
                UK&apos;s largest universities — a large multi-building city-centre campus generating
                wayfinding, faculty identity, promotional graphics and outdoor vinyl campaigns year
                on year. NHS wayfinding to IPC (infection prevention and control) standards available.
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

      {/* M6 North Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Preston in the M6 north corridor — Lancashire to Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M6 motorway connects our South Yorkshire base directly to Preston — Sheffield to
              Preston is approximately 90–105 minutes via the M1 and M6. Preston then connects
              north to Lancaster (35 minutes), Kendal and the M6 north corridor, and west via the
              M55 to Blackpool and the Fylde Coast. A sign company running a North West programme
              that includes Manchester, Preston, Blackpool and Lancaster can cover the entire
              geography under one WRPX subcontract.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Preston also connects east via the M65 to Burnley, Accrington and Blackburn — the
              East Lancashire commercial belt that sits between Preston and West Yorkshire. Sign
              companies running programmes across the East Lancashire corridor (Burnley, Nelson,
              Colne, Accrington, Clitheroe) can use Preston as the anchor and cover the surrounding
              Lancashire geography in a single day without the logistics overhead of multiple
              sub-regional installers.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Combined with Manchester to the south, Preston means WRPX can now cover the full
              North West commercial corridor from Wigan and Manchester through Preston to Lancaster
              — alongside our existing Yorkshire and West Midlands coverage — under one subcontract
              relationship. For print management companies and national sign firms running UK-wide
              brand rollouts, that is a meaningful reduction in the number of regional installers
              to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Preston &amp; Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Preston city centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Fishergate, St George&apos;s Shopping Centre, Fishergate Shopping Centre, Market Hall,
                Church Street and the expanding Animate leisure complex. Retail, hospitality and
                civic commercial. PR1 postcode. Lancaster County Council and Preston City Council
                offices generate public sector graphics demand.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Capitol Centre &amp; Walton-le-Dale</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Capitol Centre retail park is one of Lancashire&apos;s largest out-of-town retail
                destinations — major retail chains, leisure operators and food/beverage brands
                requiring regular window graphics, promotional campaigns and fit-out vinyls.
                PR5 postcode. M6 junction 29 adjacent.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Cuerden Valley &amp; Walton Summit</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Cuerden Valley Business Park and Walton Summit Industrial Estate are the primary
                commercial and logistics zones south of Preston city centre. Manufacturing,
                distribution, professional services and trade businesses generating fleet livery,
                building signage and brand graphics briefs. PR5/PR6 postcode zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">UCLan campus</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                University of Central Lancashire — one of the UK&apos;s largest universities with a
                substantial city-centre campus across multiple buildings. Regular wayfinding,
                faculty identity, promotional graphics and wall wrap briefs. DBS protocols
                followed. PR1 postcode, walking distance from Fishergate.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Deepdale Retail Park</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Deepdale is Preston&apos;s largest retail park, combining major retail anchors with
                food and leisure operators. Window graphics, promotional campaigns, floor vinyls
                and fascia installations across a diverse retail mix. PR1/PR2 postcode, north
                of Preston city centre adjacent to the stadium.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Royal Preston Hospital</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Lancashire Teaching Hospitals NHS Foundation Trust operates Royal Preston Hospital
                as its main acute site — a large campus with ongoing wayfinding, departmental
                identity and IPC-compliant graphics requirements. NHS procurement experience;
                DBS-cleared team available. Sharoe Green Lane, Fulwood, PR2 postcode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Preston subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Preston?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Preston is approximately 90–105 minutes from our South Yorkshire base via the M1
                and M6 north. The M6 junction 31 at Tickled Trout provides direct access to the
                south of Preston; junction 32 to the city centre and north. For programmes
                combining Preston with Manchester, we add 30–35 minutes south; for Lancashire
                corridors extending to Lancaster or Blackpool, we build those into the same day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover the full Lancashire area from Preston?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Preston as a base point covers Blackpool and the Fylde Coast (30 minutes
                via M55), Lancaster (35 minutes north via M6), Burnley and Accrington (35 minutes
                via M65), Blackburn (30 minutes via A59 or M65), and the wider central Lancashire
                commercial belt. PR, FY, LA, BB postcode zones covered.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Preston and Lancashire jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard. We arrive in unbranded vehicles and carry out the
                Preston installation under your brand throughout. Your Lancashire client never
                knows WRPX was involved. Full photographic documentation delivered in your
                agreed format on the day of completion.
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
            <Link href="/subcontract-vinyl-installer-wakefield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wakefield
            </Link>
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
            </Link>
            <Link href="/subcontract-vinyl-installer-doncaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Doncaster
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-lancaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Lancaster
            </Link>
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
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
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Ready to subcontract your Preston installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Preston or Lancashire brief — installation type, site address,
            material spec and date requirements. We confirm quickly and can often turn around
            Lancashire dates within a few days for straightforward installs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Preston
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
