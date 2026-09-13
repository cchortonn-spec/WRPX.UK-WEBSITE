import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Colne — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Colne and the BB8 zone for sign companies, print houses and fit-out contractors. WRPX covers Colne town centre, Boundary Mill, Earby BD23, Nelson BB9 and the East Lancashire M65 terminus — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-colne/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Colne — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Colne and the BB8 zone. White-label available. WRPX covers Colne town centre, Boundary Mill retail complex, Albert Road commercial zone, Earby BD23, Nelson BB9 and the East Lancashire M65 corridor from South Yorkshire via the M62 and M66."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Colne", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-colne/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Colne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Colne is approximately 1 hour 30–40 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to the M65, then the M65 east to its terminus at Colne (junction 15). Colne is 5 minutes east of Nelson (junction 13) and 20 minutes east of Burnley on the M65. It is the last town at the eastern end of the M65 before the Pennine watershed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Colne jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Colne and BB8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Colne with Nelson or Burnley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Colne is the eastern terminus of the M65 corridor, making it the natural end-point of a Burnley–Nelson–Colne day plan. Burnley (BB11–BB12) is 20 minutes west; Nelson (BB9) is 5 minutes west. For sign companies with East Lancashire programmes, combining Colne BB8, Nelson BB9 and Burnley BB11 in the same day covers the full eastern M65 corridor within a 25-minute stretch.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Colne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Colne commercial stock includes the Albert Road town centre retail zone, Boundary Mill retail complex, the Market Street and Exchange Street commercial area, and industrial units on the M65 terminus corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Earby and the surrounding Craven area from Colne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Earby BD23 is 10 minutes south of Colne via the A56 through Barnoldswick. Barnoldswick BB18 itself is 15 minutes from Colne — it has a commercial zone and industrial estate serving the Craven district. Skipton BD23 is 25–30 minutes north-east of Colne via the A56 and A59 through Earby and the Aire Valley.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Colne?",
    a: "Colne is approximately 1 hour 30–40 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to the M65, then the M65 east to its terminus at Colne (junction 15). Colne is 5 minutes east of Nelson (junction 13) and 20 minutes east of Burnley on the M65. It is the last town at the eastern end of the M65 before the Pennine watershed.",
  },
  {
    q: "Do you work white-label on Colne jobs?",
    a: "Yes — white-label is standard on all Colne and BB8 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
  },
  {
    q: "Can you combine Colne with Nelson or Burnley on the same programme?",
    a: "Yes — Colne is the eastern terminus of the M65 corridor, making it the natural end-point of a Burnley–Nelson–Colne day plan. Burnley (BB11–BB12) is 20 minutes west; Nelson (BB9) is 5 minutes west. For sign companies with East Lancashire programmes, combining Colne BB8, Nelson BB9 and Burnley BB11 in the same day covers the full eastern M65 corridor within a 25-minute stretch.",
  },
  {
    q: "What types of vinyl installation do you cover in Colne?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Colne commercial stock includes the Albert Road town centre retail zone, Boundary Mill retail complex, the Market Street and Exchange Street commercial area, and industrial units on the M65 terminus corridor.",
  },
  {
    q: "Do you cover Earby and the surrounding Craven area from Colne?",
    a: "Yes — Earby BD23 is 10 minutes south of Colne via the A56 through Barnoldswick. Barnoldswick BB18 itself is 15 minutes from Colne — it has a commercial zone and industrial estate serving the Craven district. Skipton BD23 is 25–30 minutes north-east of Colne via the A56 and A59 through Earby and the Aire Valley.",
  },
];

export default function SubcontractVinylInstallerColnePage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/commercial-installation/" className="text-accent hover:underline">Commercial Installation</Link>
            <span className="mx-2">›</span>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">Yorkshire Subcontract Hub</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Colne BB8</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Installation · East Lancashire · Colne BB8
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer in Colne
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides subcontract vinyl installation across Colne and the BB8 zone for sign
            companies, print management firms and fit-out contractors. Colne town centre, Boundary
            Mill retail complex, Albert Road commercial area, Earby BD23 and the M65 eastern
            terminus corridor — white-label by default, photographic sign-off on every job.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Send Us a Colne Brief →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Full Coverage Area
            </Link>
          </div>
        </div>
      </section>

      {/* Colne context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Colne BB8 — the end of the M65 corridor
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Colne sits at the eastern terminus of the M65 motorway — the last commercial town
              before the Pennine watershed. The M65 connects Colne directly to Nelson (5 minutes
              west), Burnley (20 minutes west), Blackburn (35 minutes west) and Preston (50 minutes
              west), making the full East Lancashire corridor accessible in a single day&apos;s programme.
              For sign companies with multiple installations across East Lancashire, Colne is the
              logical easternmost stop on an M65 corridor day.
            </p>
            <p>
              Colne town centre has a compact but active commercial zone. Albert Road and Market
              Street form the main retail spine, with independent retail, hospitality and service
              businesses occupying a mix of Victorian terraced commercial buildings and more recent
              infill. Boundary Mill at Colne — one of the country&apos;s largest factory outlet shopping
              centres — is a significant client for retail and seasonal graphic installations,
              accessible via the A6068 from the M65 terminus.
            </p>
            <p>
              Colne&apos;s industrial and commercial estate stock sits along the M65 terminus corridor
              and the A6068 zone. Pendle Village Mill at Barrowford (between Nelson and Colne on
              the A682) is a mixed arts, crafts, food and hospitality destination with retail units
              that generate window graphics and display vinyl briefs. The Crown Point area south
              of the town centre has light industrial stock serving Pendle district businesses.
            </p>
            <p>
              Earby BD23 — 10 minutes south via the A56 — extends the Colne day plan into the
              Craven district and the Yorkshire Dales border zone. Barnoldswick BB18 is a 15-minute
              run from Colne and has its own commercial and industrial estate. Both are viable
              additions to a Colne-based day plan for sign companies with jobs in those postcodes.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Installation services we provide across Colne
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed window graphics, cut vinyl, frosted and decorative window film, one-way
                vision vinyl and Part M manifestation. Colne shopfronts, Boundary Mill retail
                units, hospitality venues and office glazing across the BB8 zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Wall wraps and graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format wall wraps, printed wall graphics and cut vinyl for retail, hospitality,
                office and industrial interiors in Colne and the Pendle area. Surface assessment
                on arrival — no assumptions about substrate condition.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop front and fascia vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fascia vinyl, signage backing vinyl, window vinyl and cladding wrap for Colne
                town centre retail and commercial premises. Victorian and Edwardian building
                stock typical of the town — substrate assessment confirmed before supply briefing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Retail and seasonal graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal campaign vinyl, promotional window graphics, point-of-sale display
                installations and Christmas graphics for Boundary Mill and Colne town centre
                retailers. Multi-site brief capability for programmes covering other East
                Lancashire locations on the same day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding vinyl installation for construction sites, retail fit-outs and event
                hoardings across the BB8 zone and Pendle district. Temporary hoarding systems
                (Kwik-Klik and similar) and direct substrate hoarding panels — we assess the
                system type before supply.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip compliant floor graphics, directional arrows, safety markings and
                retail floor branding for Colne and Pendle commercial premises. Substrate
                assessment is critical for floor applications — confirmed before material
                is produced, never assumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route and day plan */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Colne day plan — M65 eastern corridor
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Colne is approximately 1 hour 35 minutes via the
              M1 north to junction 40 (Wakefield), then M62 west to junction 18 (M66 north),
              then M65 east from Blackburn to the Colne terminus at junction 15.
            </p>
            <p>
              The most common Colne day plan runs west to east along the M65: start at Burnley
              (BB11–BB12) from around 08:30, move to Nelson BB9 mid-morning, and arrive in Colne
              for an afternoon installation window. This covers approximately 20 miles of the M65
              corridor with three distinct commercial zones without retracing any route.
            </p>
            <p>
              Colne-only days are appropriate where Boundary Mill or a specific Colne town centre
              brief requires the full day. Colne-plus-Earby days work where a BD23 or BB18 job
              can be combined south of Colne on the A56 return route to the M65 and home.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-muted border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-6 font-semibold text-foreground">Location</th>
                  <th className="pb-3 pr-6 font-semibold text-foreground">Postcode</th>
                  <th className="pb-3 font-semibold text-foreground">Drive from Colne</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-6">Nelson</td>
                  <td className="py-3 pr-6">BB9</td>
                  <td className="py-3">5 min west via M65</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-6">Barnoldswick</td>
                  <td className="py-3 pr-6">BB18</td>
                  <td className="py-3">15 min south via A56</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-6">Earby</td>
                  <td className="py-3 pr-6">BD23</td>
                  <td className="py-3">10 min south via A56</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-6">Burnley</td>
                  <td className="py-3 pr-6">BB11–BB12</td>
                  <td className="py-3">20 min west via M65</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-6">Skipton</td>
                  <td className="py-3 pr-6">BD23</td>
                  <td className="py-3">25–30 min north-east via A56/A59</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Blackburn</td>
                  <td className="py-3 pr-6">BB1–BB2</td>
                  <td className="py-3">35 min west via M65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract installation works with WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We are an installation-only subcontract partner. You supply the printed or cut
              materials — we provide the installation crew, tools and expertise on site.
              There is no minimum job size and no territory restriction: we cover Colne as part
              of an East Lancashire programme or as a standalone brief.
            </p>
            <p>
              White-label is standard across all Colne and BB8 zone work. We turn up in plain
              vehicles and work under your company name. The end client sees your brand throughout
              — from the vehicle on the street to the sign-off documentation at the end of the day.
            </p>
            <p>
              Before any material is produced, we confirm the surface type, fixings and access
              window. This avoids on-site surprises that cost your programme time and money.
              We check substrate suitability, access restrictions (pedestrianised zones, Colne
              town centre management rules) and any permit requirements for the specific location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Colne subcontract installation — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby cities and towns we also cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/subcontract-vinyl-installer-nelson/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Nelson BB9</h3>
              <p className="mt-2 text-sm text-muted">5 minutes west on M65. Market Street retail, Pendle Village Mill, Brierfield.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Burnley BB11–BB12</h3>
              <p className="mt-2 text-sm text-muted">20 minutes west on M65. Charter Walk, Burnley Bridge Business Park.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-accrington/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Accrington BB5</h3>
              <p className="mt-2 text-sm text-muted">30 minutes west via M65. Arndale, Oswaldtwistle Mills, M65 J7-8.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-blackburn/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Blackburn BB1–BB2</h3>
              <p className="mt-2 text-sm text-muted">35 minutes west via M65. The Mall, Blackburn town centre, M65 J5.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-halifax/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Halifax HX1</h3>
              <p className="mt-2 text-sm text-muted">35 minutes east via A646 trans-Pennine. Piece Hall, Dean Clough.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Bradford BD1</h3>
              <p className="mt-2 text-sm text-muted">45 minutes east via A629 or A646. City centre and BD postcode zone.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Got a Colne installation brief?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the address, the vinyl type and the access window. We&apos;ll confirm surface
              suitability and give you an installation price — usually within 24 hours. White-label,
              photographic sign-off, no minimum job size.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Send a Colne Brief →
              </Link>
              <Link href="/sign-company-installation-partner/" className="btn-secondary">
                Sign Company Partner Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
