import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Accrington — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Accrington and the BB5 zone for sign companies, print houses and fit-out contractors. WRPX covers Accrington town centre, Oswaldtwistle BB5, Church BB5, Clayton-le-Moors BB5, Great Harwood BB6 and the East Lancashire M65 corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-accrington/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Accrington — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Accrington and the BB5 zone. White-label available. WRPX covers Accrington town centre, Oswaldtwistle BB5, Church BB5, Clayton-le-Moors BB5, Great Harwood BB6 and the East Lancashire M65 corridor from South Yorkshire via the M62 and M66."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Accrington", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-accrington/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Accrington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accrington is approximately 1 hour 20–30 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to Ramsbottom and the A56 north-west, or the M66 continuing to the M65 junction then the M65 east to Accrington (junctions 7 and 8 on the M65). The most efficient route depends on traffic but the M62/M66/M65 corridor is the standard approach. Burnley is 10 minutes further east on the M65.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Accrington jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Accrington and BB5 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Accrington with Blackburn or Burnley on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Accrington sits between Blackburn and Burnley on the M65 corridor. Blackburn (BB1–BB2) is 10 minutes west of Accrington via the M65 or A679; Burnley (BB11–BB12) is 10 minutes east. For sign companies with East Lancashire programmes, combining Blackburn BB1, Accrington BB5 and Burnley BB11 in the same day is efficient and avoids return dead mileage. Great Harwood BB6 and Clitheroe BB7 can be added to a north Lancashire extension.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Accrington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Accrington commercial stock includes the town centre Market Hall and Church Street retail zone, the Hyndburn commercial areas, Oswaldtwistle Mills complex and the industrial estates on the Clayton-le-Moors corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Oswaldtwistle Mills retail and commercial complex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Oswaldtwistle Mills is a significant retail and leisure destination within the BB5 postcode zone, featuring a mix of independent retailers, café units, restaurant space and the Delphi manufacturing facility adjacent. The complex generates window graphics, internal directional vinyl, seasonal promotional graphics and wall graphic installation briefs. Brief with unit reference and access hours — the site has flexible loading access.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Accrington?",
    a: "Accrington is approximately 1 hour 20–30 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to Ramsbottom and the A56 north-west, or the M66 continuing to the M65 junction then the M65 east to Accrington (junctions 7 and 8 on the M65). The most efficient route depends on traffic but the M62/M66/M65 corridor is the standard approach. Burnley is 10 minutes further east on the M65.",
  },
  {
    q: "Do you work white-label on Accrington jobs?",
    a: "Yes — white-label is standard on all Accrington and BB5 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
  },
  {
    q: "Can you combine Accrington with Blackburn or Burnley on the same programme?",
    a: "Yes — Accrington sits between Blackburn and Burnley on the M65 corridor. Blackburn (BB1–BB2) is 10 minutes west of Accrington via the M65 or A679; Burnley (BB11–BB12) is 10 minutes east. For sign companies with East Lancashire programmes, combining Blackburn BB1, Accrington BB5 and Burnley BB11 in the same day is efficient and avoids return dead mileage. Great Harwood BB6 and Clitheroe BB7 can be added to a north Lancashire extension.",
  },
  {
    q: "What types of vinyl installation do you cover in Accrington?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Accrington commercial stock includes the town centre Market Hall and Church Street retail zone, the Hyndburn commercial areas, Oswaldtwistle Mills complex and the industrial estates on the Clayton-le-Moors corridor.",
  },
  {
    q: "Do you cover the Oswaldtwistle Mills retail and commercial complex?",
    a: "Yes — Oswaldtwistle Mills is a significant retail and leisure destination within the BB5 postcode zone, featuring a mix of independent retailers, café units, restaurant space and the Delphi manufacturing facility adjacent. The complex generates window graphics, internal directional vinyl, seasonal promotional graphics and wall graphic installation briefs. Brief with unit reference and access hours — the site has flexible loading access.",
  },
];

export default function SubcontractVinylInstallerAccringtonPage() {
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
            Subcontract · Accrington &amp; the BB5 Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer Accrington
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label vinyl installation across Accrington and the BB5 zone for
            sign companies, print houses and fit-out contractors. Accrington town centre, Church BB5,
            Oswaldtwistle BB5, Clayton-le-Moors BB5, Great Harwood BB6 — M65 East Lancashire corridor
            from South Yorkshire via the M62 and M66. Unbranded vehicles, your paperwork,
            photographic sign-off standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get an Accrington Installation Quote →
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="btn-secondary">
              Yorkshire Subcontract Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Accrington and BB5 zone coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Accrington town centre (BB5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Church Street and the Arndale Centre retail zone, the Market Hall and surrounding
                town centre commercial stock. Traditional East Lancashire town centre frontages —
                mix of Victorian brick commercial buildings and 1960s–70s redevelopment stock.
                Standard town centre loading constraints on main retail streets during trading hours.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Oswaldtwistle (BB5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Oswaldtwistle Mills — a substantial retail and leisure destination within the BB5
                postcode zone. Mix of independent retail, café and restaurant units, with the
                adjacent Delphi manufacturing facility. Seasonal graphics, window film, wall
                graphics and directional vinyl briefs generated regularly. Flexible loading access.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Church (BB5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Church town centre and the commercial zone along Union Road and Blackburn Road.
                Mix of small retail units, light industrial and commercial premises. Standard
                BB5 town access — load on adjacent streets during off-peak hours for the main
                retail frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Clayton-le-Moors (BB5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clayton-le-Moors and the industrial corridor east of Accrington along the A678
                and A680. Mix of manufacturing, light industrial and distribution premises.
                Generates fleet livery, factory graphics, office interior vinyl and wayfinding
                briefs. Good vehicle access throughout the industrial zone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Great Harwood (BB6)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Great Harwood town centre and the surrounding BB6 commercial zone — 5 minutes
                north of Accrington via the A680. Traditional Lancashire market town retail stock
                on Queen Street and the town square. Commonly combined with Accrington BB5 or
                Clitheroe BB7 on a north Hyndburn programme day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">M65 East Lancashire corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Accrington sits at M65 junctions 7–8, between Blackburn (J5–6, 10 minutes west)
                and Burnley (J10–12, 10 minutes east). For sign companies with East Lancashire
                programmes, this makes Accrington the natural mid-point of a Blackburn–Accrington–
                Burnley three-town day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Accrington
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Window graphics, frosted and decorative window film</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Wall wraps and large-format wall graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Floor graphics and floor vinyl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Shop front and fascia vinyl graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Fleet wraps and vehicle livery</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Hoarding graphics (construction and temporary systems)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Wayfinding and directional vinyl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Office and industrial interior graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Education and healthcare graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent font-bold">✓</span>
                  <span>Retail and hospitality interior graphics</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-muted">
            Installation only — you supply the printed or cut material, we assess, prepare and
            install to spec. We do not carry inventory stock.
          </p>
        </div>
      </section>

      {/* Route */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to Accrington from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Accrington is approximately 1 hour 20–30 minutes via
              the M1 north to the M62 west junction, then the M62 west to the M66 north (junction 18),
              then the M66 north to its terminus and continuing on the A56 to the M65, or staying
              on the M66 to the M65 junction then running east on the M65 to Accrington
              (junctions 7 and 8).
            </p>
            <p>
              For Accrington town centre, junction 7 (M65/A678) is the most direct approach via
              the A679 into the town centre. For Clayton-le-Moors and the eastern industrial zone,
              junction 8 (A6185) gives better access to the industrial corridor. Oswaldtwistle is
              served from junction 7 via the A678 south-west.
            </p>
            <p>
              <strong className="text-foreground">East Lancashire M65 day plan.</strong>{" "}
              For sign companies with programmes across East Lancashire, the M65 corridor makes a
              linear day structure straightforward: Blackburn (BB1–BB2, M65 J5–6) in the morning,
              Accrington (BB5, M65 J7–8) mid-morning, Burnley (BB11–BB12, M65 J10–12) after lunch.
              Great Harwood BB6 and Nelson BB9 can extend the day north or east respectively.
              The full East Lancashire arc is achievable in a single programme day from South Yorkshire.
            </p>
          </div>
        </div>
      </section>

      {/* Accrington specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Accrington installation considerations
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Accrington town centre has a mix of original Victorian and Edwardian commercial
              frontages on Church Street and the Arndale Centre block, alongside 1960s–70s
              redevelopment stock. Loading on the main retail street is restricted during
              trading hours — morning loading before 9am or evening after 5:30pm is the standard
              approach for town centre shop front and window graphic installations.
            </p>
            <p>
              Oswaldtwistle Mills is the most significant out-of-town installation environment in
              the BB5 zone. The complex has flexible vehicle access — large loading areas adjacent
              to the retail wings. For multi-unit programmes at Oswaldtwistle Mills, a single-day
              schedule covering several units is straightforward. Brief with unit numbers and any
              site induction requirement.
            </p>
            <p>
              The East Lancashire mill-building stock — converted throughout the BB5 zone for
              industrial, commercial and residential uses — typically presents brickwork and
              plaster substrates in the older sections with concrete block and plasterboard in
              later additions. For wall graphics, always brief substrate type and any existing
              surface preparation requirements. We assess on arrival and report before installation
              if there are substrate issues.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Accrington installation questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nearby subcontract coverage
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/subcontract-vinyl-installer-blackburn/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Blackburn</h3>
              <p className="mt-2 text-sm text-muted">BB1–BB2 — 10 min west via M65/A679</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Burnley</h3>
              <p className="mt-2 text-sm text-muted">BB11–BB12 — 10 min east via M65</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-bolton/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Bolton</h3>
              <p className="mt-2 text-sm text-muted">BL1–BL3 — 25 min south via M65/M61</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-rochdale/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Rochdale</h3>
              <p className="mt-2 text-sm text-muted">OL11–OL16 — 25 min south via M65/M66/A627</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Preston</h3>
              <p className="mt-2 text-sm text-muted">PR1–PR2 — 30 min north-west via M65/M6</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-nelson/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Nelson</h3>
              <p className="mt-2 text-sm text-muted">BB9 — 20 min east via M65 (beyond Burnley)</p>
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Yorkshire Subcontract Hub</h3>
              <p className="mt-2 text-sm text-muted">Full UK coverage map and all city pages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need vinyl installation in Accrington?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, material spec and access requirements — and we
              will come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get an Accrington Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
