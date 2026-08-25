import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Nelson — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Nelson and the BB9 zone for sign companies, print houses and fit-out contractors. WRPX covers Nelson town centre, Colne BB8, Barrowford BB9, Brierfield BB9 and the East Lancashire M65 corridor — white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-nelson/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Nelson — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Nelson and the BB9 zone. White-label available. WRPX covers Nelson town centre, Colne BB8, Barrowford BB9, Brierfield BB9 and the East Lancashire M65 corridor from South Yorkshire via the M62 and M66."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Nelson", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-nelson/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Nelson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nelson is approximately 1 hour 25–35 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to the M65, then the M65 east to Nelson (junction 13). Alternatively the M62 to the A59 north-west and A682 brings you into the Pendle Valley from the south. Nelson is 5 minutes east of Burnley on the M65 and 5 minutes west of Colne at the M65 terminus.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Nelson jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Nelson and BB9 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Nelson with Burnley or Colne on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Nelson is directly between Burnley and Colne on the M65 corridor. Burnley (BB11–BB12) is 5 minutes west via the M65; Colne (BB8) is 5 minutes east at the M65 terminus. For sign companies with East Lancashire programmes, combining Burnley BB11, Nelson BB9 and Colne BB8 in the same day is natural — all three are within a 15-minute stretch of the M65.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Nelson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Nelson commercial stock includes the town centre Market Street retail zone, Pendle Village Mill at Barrowford, the industrial estates on the M65 corridor and the Brierfield commercial zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Colne and the surrounding Pendle area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Colne BB8 is at the end of the M65 corridor, 5 minutes east of Nelson. The Colne town centre commercial zone and the Boundary Mill retail complex at Colne are both accessible from the M65 terminus. Brierfield BB9 (the M65 J12 zone) and Barrowford BB9 (on the A682) are both within the BB9 coverage zone. Skipton BD23 is a further 30 minutes north-east via the A56 and A59.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Nelson?",
    a: "Nelson is approximately 1 hour 25–35 minutes from our South Yorkshire base via the M1 north to the M62 west, then the M66 north to the M65, then the M65 east to Nelson (junction 13). Alternatively the M62 to the A59 north-west and A682 brings you into the Pendle Valley from the south. Nelson is 5 minutes east of Burnley on the M65 and 5 minutes west of Colne at the M65 terminus.",
  },
  {
    q: "Do you work white-label on Nelson jobs?",
    a: "Yes — white-label is standard on all Nelson and BB9 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site.",
  },
  {
    q: "Can you combine Nelson with Burnley or Colne on the same programme?",
    a: "Yes — Nelson is directly between Burnley and Colne on the M65 corridor. Burnley (BB11–BB12) is 5 minutes west via the M65; Colne (BB8) is 5 minutes east at the M65 terminus. For sign companies with East Lancashire programmes, combining Burnley BB11, Nelson BB9 and Colne BB8 in the same day is natural — all three are within a 15-minute stretch of the M65.",
  },
  {
    q: "What types of vinyl installation do you cover in Nelson?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Nelson commercial stock includes the town centre Market Street retail zone, Pendle Village Mill at Barrowford, the industrial estates on the M65 corridor and the Brierfield commercial zone.",
  },
  {
    q: "Do you cover Colne and the surrounding Pendle area?",
    a: "Yes — Colne BB8 is at the end of the M65 corridor, 5 minutes east of Nelson. The Colne town centre commercial zone and the Boundary Mill retail complex at Colne are both accessible from the M65 terminus. Brierfield BB9 (the M65 J12 zone) and Barrowford BB9 (on the A682) are both within the BB9 coverage zone. Skipton BD23 is a further 30 minutes north-east via the A56 and A59.",
  },
];

export default function SubcontractVinylInstallerNelsonPage() {
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
            Subcontract · Nelson &amp; the BB9 Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer Nelson
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label vinyl installation across Nelson and the BB9 zone for
            sign companies, print houses and fit-out contractors. Nelson town centre, Colne BB8,
            Barrowford BB9, Brierfield BB9 — M65 East Lancashire corridor from South Yorkshire
            via the M62 and M66. Unbranded vehicles, your paperwork, photographic sign-off standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Nelson Installation Quote →
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
            Nelson and BB9 zone coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Nelson town centre (BB9)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Market Street and the main Nelson town centre retail zone — a compact East Lancashire
                town centre with traditional Victorian frontages and later 20th century retail
                development. Standard town centre loading restrictions on the main retail street
                during trading hours; early morning access is the standard approach for shop front
                and window graphic installations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brierfield (BB9)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brierfield is the M65 junction zone for Nelson — the Brierfield Business Park and
                the commercial corridor along Burnley Road between Burnley and Nelson. Industrial
                and commercial units accessible directly from M65 junction 12. Good vehicle access
                throughout the Brierfield industrial zone with no town centre loading constraints.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Barrowford (BB9)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Barrowford village and Pendle Village Mill — a large converted mill retail and
                leisure complex on the A682 between Nelson and Clitheroe. The complex includes
                retail units, a garden centre, restaurant space and events facilities. Generates
                seasonal graphics, window film, wall graphics and directional vinyl briefs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Colne (BB8)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Colne is at the eastern terminus of the M65 — 5 minutes east of Nelson at
                junction 14. The town centre commercial zone and the Boundary Mill retail complex
                are accessible from junction 14. Colne is commonly combined with Nelson on an
                East Lancashire east end programme day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Pendle Valley wider area</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The Pendle Valley between Nelson and Clitheroe — including Barrowford BB9,
                Roughlee and the A682 corridor — has a mix of rural commercial and light
                industrial premises. The area also includes several visitor attractions and
                leisure venues that generate seasonal graphics and interpretive display briefs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">M65 East Lancashire corridor</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nelson sits at M65 junctions 12–13, between Burnley (J10–12, 5 minutes west)
                and Colne (J14, 5 minutes east at the M65 terminus). For sign companies with
                East Lancashire programmes, this makes Nelson the natural second half of a
                Burnley–Nelson–Colne east end day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Nelson
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
            Getting to Nelson from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Nelson is approximately 1 hour 25–35 minutes via
              the M1 north to the M62 west junction, then the M62 west to the M66 north (junction 18),
              then the M66 north to its terminus continuing on the A56 to the M65, or the M66
              directly to the M65 junction and then the M65 east. Nelson is at M65 junctions
              12–13, approximately 5 minutes east of Burnley.
            </p>
            <p>
              For Nelson town centre, M65 junction 13 (A682 Barrowford exit) gives the most direct
              approach into the town centre via the A682 south. For the Brierfield Business Park
              and the M65 corridor commercial zone, junction 12 is more efficient. Colne is
              accessible from junction 14 — the M65 terminus.
            </p>
            <p>
              <strong className="text-foreground">East Lancashire M65 east end day plan.</strong>{" "}
              For sign companies with East Lancashire programmes, the M65 east end works as a
              structured half-day from Burnley: Burnley (BB11, M65 J10–12) in the morning,
              Nelson (BB9, M65 J12–13) mid-morning, Colne (BB8, M65 J14) before lunch. Brierfield BB9
              and Barrowford BB9 can be incorporated en route. This east end arc runs in one
              direction along the M65 without any backtracking.
            </p>
          </div>
        </div>
      </section>

      {/* Nelson specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nelson installation considerations
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nelson town centre commercial stock is predominantly Victorian and Edwardian
              brick — similar substrate character to the wider East Lancashire mill town stock.
              For wall graphics and vinyl on rendered or masonry surfaces, we assess substrate
              suitability and any preparation requirements on arrival and report before
              proceeding. Main retail street loading is restricted during trading hours —
              early morning (before 9am) is the standard approach.
            </p>
            <p>
              Pendle Village Mill at Barrowford is a significant out-of-town installation
              environment for this zone. The converted mill complex has substantial vehicle
              access and a mix of retail, leisure and food and beverage units that generate
              regular graphics installation briefs — seasonal campaigns, window graphics,
              directional vinyl. Brief with unit number and access instructions.
            </p>
            <p>
              The mill building stock throughout the Nelson and Colne valley — converted for
              commercial, industrial and residential uses — typically presents stone and brick
              substrates with mixed modern insertions. For wall graphics on mill fabric,
              always brief substrate type. Older painted brick in particular requires assessment
              before adhesive vinyl can be specified with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nelson installation questions
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
            <Link href="/subcontract-vinyl-installer-burnley/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Burnley</h3>
              <p className="mt-2 text-sm text-muted">BB11–BB12 — 5 min west via M65</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-accrington/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Accrington</h3>
              <p className="mt-2 text-sm text-muted">BB5 — 15 min west via M65</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-blackburn/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Blackburn</h3>
              <p className="mt-2 text-sm text-muted">BB1–BB2 — 20 min west via M65</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-lancaster/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Lancaster</h3>
              <p className="mt-2 text-sm text-muted">LA1 — 45 min north-west via M65/M6</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Bradford</h3>
              <p className="mt-2 text-sm text-muted">BD1–BD5 — 35 min east via M65/M606</p>
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
              Need vinyl installation in Nelson?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, material spec and access requirements — and we
              will come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Nelson Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
