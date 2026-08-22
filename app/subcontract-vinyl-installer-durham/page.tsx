import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Durham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across County Durham and the DH postcode zone for sign companies, print houses and fit-out contractors. WRPX covers Durham City DH1, Chester-le-Street DH2-DH3, Seaham DH4, Houghton-le-Spring DH5 and the County Durham DH6-DH9 arc — white-label, photographic sign-off, A1(M) corridor from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-durham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Durham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across County Durham and the DH postcode zone. White-label available. WRPX covers Durham City DH1, Chester-le-Street DH2-DH3, Seaham DH4, Houghton-le-Spring DH5, Peterlee DH6, Spennymoor DH6, Bishop Auckland DL14, and the County Durham commercial corridor — A1(M) J61/J62 from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Durham", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-durham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from County Durham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durham City is approximately 2 hours from our South Yorkshire base via the A1(M) north. The most direct route is A1(M) to junction 62 (Chester-le-Street / Durham), then the A693 or A167 into Durham City. For Chester-le-Street DH2-DH3, junction 63 (Birtley) is a closer exit. For Seaham DH4 or Houghton-le-Spring DH5, the A1(M) to Sunderland then the A690 or A19 south is often quicker. County Durham sits in the same North East programme day corridor as Gateshead, Sunderland, Hartlepool and Darlington — all connectable in a single run north.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on County Durham jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all County Durham and DH postcode work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in County Durham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, hoarding graphics, office interior graphics, retail and hospitality graphics, educational and healthcare graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. County Durham commercial stock includes Durham City centre (North Road, Claypath, Framwellgate Waterside), the Arnison Centre Pity Me, Aykley Heads Business District, and Seaham Business Park.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Durham and Sunderland on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Durham City and Sunderland are approximately 20 minutes apart via the A690 east. For sign companies running North East corridor programmes, combining County Durham DH1-DH5 with Sunderland SR1-SR6 in the same day is efficient and common. Gateshead (30 minutes north via A1(M)) and Hartlepool (40 minutes south-east via A19/A182) can also be incorporated in a two-day North East programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Durham University and the college campuses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Durham University is a significant institutional client environment in DH1. University installation requires advance access clearance through the Estates and Facilities team and out-of-hours scheduling around academic timetables. We have experience working in higher education environments — wayfinding graphics, room identity vinyls, window film, wall graphics and departmental branding. Contact us with the job spec and we will advise on access requirements.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from County Durham?",
    a: "Durham City is approximately 2 hours from our South Yorkshire base via the A1(M) north. The most direct route is A1(M) to junction 62 (Chester-le-Street / Durham), then the A693 or A167 into Durham City. For Chester-le-Street DH2-DH3, junction 63 (Birtley) is a closer exit. For Seaham DH4 or Houghton-le-Spring DH5, the A1(M) to Sunderland then the A690 or A19 south is often quicker. County Durham sits in the same North East programme day corridor as Gateshead, Sunderland, Hartlepool and Darlington — all connectable in a single run north.",
  },
  {
    q: "Do you work white-label on County Durham jobs?",
    a: "Yes — white-label is standard on all County Durham and DH postcode work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
  },
  {
    q: "What types of vinyl installation do you cover in County Durham?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, hoarding graphics, office interior graphics, retail and hospitality graphics, educational and healthcare graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. County Durham commercial stock includes Durham City centre (North Road, Claypath, Framwellgate Waterside), the Arnison Centre Pity Me, Aykley Heads Business District, and Seaham Business Park.",
  },
  {
    q: "Can you cover Durham and Sunderland on the same programme?",
    a: "Yes — Durham City and Sunderland are approximately 20 minutes apart via the A690 east. For sign companies running North East corridor programmes, combining County Durham DH1-DH5 with Sunderland SR1-SR6 in the same day is efficient and common. Gateshead (30 minutes north via A1(M)) and Hartlepool (40 minutes south-east via A19/A182) can also be incorporated in a two-day North East programme.",
  },
  {
    q: "Do you cover Durham University and the college campuses?",
    a: "Yes — Durham University is a significant institutional client environment in DH1. University installation requires advance access clearance through the Estates and Facilities team and out-of-hours scheduling around academic timetables. We have experience working in higher education environments — wayfinding graphics, room identity vinyls, window film, wall graphics and departmental branding. Contact us with the job spec and we will advise on access requirements.",
  },
];

export default function SubcontractVinylInstallerDurhamPage() {
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
            Subcontract · County Durham &amp; the DH Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer Durham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label vinyl installation across County Durham and the DH postcode
            zone for sign companies, print houses and fit-out contractors. Durham City DH1,
            Chester-le-Street DH2–DH3, Seaham DH4, Houghton-le-Spring DH5 and the wider County
            Durham arc — A1(M) corridor from South Yorkshire. Unbranded vehicles, your paperwork,
            photographic sign-off standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Durham Installation Quote →
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
            County Durham and DH postcode coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Durham City (DH1)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The city centre core — North Road, Claypath, Framwellgate Waterside, Saddler Street
                and the Market Place. Mixed heritage and modern commercial stock. Durham University
                campus buildings throughout DH1. Aykley Heads Business District — office park
                adjacent to the city centre, home to county and regional public sector occupiers.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Chester-le-Street (DH2–DH3)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Chester-le-Street town centre and Front Street retail core. DH2 covers the town
                centre and Drum Industrial Estate. DH3 covers Pelton and the Chester-le-Street
                eastern residential commercial arc. A1(M) J63 (Birtley) is the most efficient
                approach — 10 minutes from the motorway.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Seaham &amp; Houghton (DH4–DH5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seaham town centre and Seaham Business Park (DH4) — coastal commercial and
                industrial. Houghton-le-Spring (DH5) — town centre retail and commercial. Both
                accessed from the A19/A690 corridor east of Durham City, and efficiently combined
                with Sunderland SR programmes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Peterlee &amp; Easington (DH6)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Peterlee town centre and Peterlee Industrial Estate — a significant manufacturing
                and distribution zone on the A19 east Durham coast corridor. Easington commercial
                area. Common for fleet graphics, building fascia, internal graphics and retail
                fit-out work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Spennymoor &amp; mid-Durham (DH6–DH7)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Spennymoor town centre and Mercia Park industrial zone (DH6 border). Brandon and
                Meadowfield Industrial Estate DH7 — accessible directly from the A167 south of
                Durham City. Meadowfield is a substantial industrial estate with regular fleet
                livery and graphics demand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Stanley &amp; Consett (DH8–DH9)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stanley town centre and Consett town centre — the DH8/DH9 north-west Durham
                corridor. Consett Business Park and the former steelworks commercial zone. Both
                reached via the A693 west of Chester-le-Street, combinable with Chester-le-Street
                on the same programme day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in County Durham
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
                  <span>Vehicle wraps and fleet livery</span>
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
                  <span>Office interior graphics and manifestation</span>
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
            Getting to County Durham from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Durham City is approximately 2 hours via the A1(M)
              north — A1(M) to junction 62 (Chester-le-Street / Durham North), then the A693 west
              to Durham City or the A167 direct south into the city. For Chester-le-Street
              DH2–DH3, junction 63 (Birtley interchange) is a closer exit — Chester-le-Street
              is then 10 minutes south via the A167.
            </p>
            <p>
              For the east Durham coast — Seaham DH4, Houghton DH5, Peterlee DH6 — the efficient
              approach is A1(M) to the Sunderland interchange (A690 or A19 south), then the A182
              or A19 to the coast. This route also connects Sunderland SR1–SR6 on the same day
              with minimal deadmileage between jobs.
            </p>
            <p>
              For Stanley DH9 and Consett DH8, the A693 west from Chester-le-Street reaches both
              towns. A Chester-le-Street-first, Stanley-second, Consett-third sequence in a single
              day covers the DH2–DH9 north-west arc efficiently.
            </p>
            <p>
              <strong className="text-foreground">Corridor efficiency.</strong> County Durham sits
              naturally between the Tyne and Wear corridor (Gateshead, Sunderland) and the Teesside
              corridor (Darlington, Hartlepool, Middlesbrough). A two-day North East run typically
              covers Day 1: Gateshead NE / Sunderland SR / Durham DH, and Day 2: Darlington DL /
              Hartlepool TS / Middlesbrough TS — one crew, logical geography, one set of travel costs.
            </p>
          </div>
        </div>
      </section>

      {/* Durham City specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Durham City installation considerations
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Durham City centre has a compact, largely pedestrianised core with vehicle access
              restrictions on the main retail streets. North Road and Claypath have normal
              commercial vehicle access; Market Place and Saddler Street are pedestrianised with
              loading windows typically before 10am and after 6pm. For jobs in the central
              commercial zone, morning loading access is the standard approach — we co-ordinate
              access timing with the brief.
            </p>
            <p>
              Durham University occupies numerous buildings across DH1 — colleges, departmental
              buildings, library and administrative sites. University installation requires advance
              contractor registration with the Estates team, DBS or equivalent checks in some areas,
              and scheduling around academic timetable constraints. We can work in this environment
              but the brief needs to include access contacts and advance lead time.
            </p>
            <p>
              Aykley Heads Business District (DH1 north) is straightforward — modern office
              buildings with standard commercial access, ample vehicle access and no loading
              restrictions. A common location for office interior graphics, window film and
              building fascia work.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Durham installation questions
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
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sunderland</h3>
              <p className="mt-2 text-sm text-muted">SR1–SR6 — 20 min east via A690 from Durham City</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-gateshead/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Gateshead &amp; Newcastle</h3>
              <p className="mt-2 text-sm text-muted">NE1–NE10 — 30 min north via A1(M) from Durham</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-hartlepool/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hartlepool</h3>
              <p className="mt-2 text-sm text-muted">TS24–TS26 — 40 min south-east via A19/A182</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-darlington/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Darlington</h3>
              <p className="mt-2 text-sm text-muted">DL1–DL5 — 35 min south via A167/A1(M)</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Middlesbrough</h3>
              <p className="mt-2 text-sm text-muted">TS1–TS6 — 50 min south via A167 / A19</p>
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
              Need vinyl installation in County Durham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, material spec and access requirements — and we
              will come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Durham Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
