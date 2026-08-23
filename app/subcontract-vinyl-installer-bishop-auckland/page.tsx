import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Bishop Auckland — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Bishop Auckland and the DL14 zone for sign companies, print houses and fit-out contractors. WRPX covers Bishop Auckland town centre, Newton Aycliffe DL5, Shildon DL4, Crook DL15, Spennymoor DL16 and the wider County Durham DL corridor — white-label, photographic sign-off, A1(M) from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bishop-auckland/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Bishop Auckland — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Bishop Auckland and the DL14 zone. White-label available. WRPX covers Bishop Auckland town centre, Newton Aycliffe Great North Road DL5, Shildon DL4, Crook DL15, Spennymoor DL16 and the County Durham DL corridor — A1(M) from South Yorkshire via Scotch Corner and the A68."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Bishop Auckland", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bishop-auckland/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Bishop Auckland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bishop Auckland is approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) north to Scotch Corner (junction 53), then the A66 west to Darlington and the A688 north-west to Bishop Auckland. Alternatively, the A1(M) to junction 58 (Durham) then the A689 west through Spennymoor and Coundon also works depending on the programme. Newton Aycliffe DL5 is closer — approximately 2 hours via A1(M) to Aycliffe junction (A167 north).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Bishop Auckland jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard on all Bishop Auckland and DL14 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Bishop Auckland alongside Durham City on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Bishop Auckland and Durham City are approximately 15–20 minutes apart via the A689 east. For sign companies running County Durham programmes, combining DL14 (Bishop Auckland) with DH1 (Durham City) and DL5 (Newton Aycliffe) in the same day is efficient. Newton Aycliffe is 20 minutes south of Durham City; the A689/A688 connects Bishop Auckland and Durham directly. The full DL14/DH1/DL5 arc can be planned as a single County Durham west and south day.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Bishop Auckland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Bishop Auckland commercial stock includes the town centre Newgate Street retail zone, Bishop Auckland market area, Newton Aycliffe Great North Road business park and Aycliffe Business Park, and the Spennymoor and Crook retail and commercial zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Aycliffe Business Park and Newton Aycliffe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Aycliffe Business Park (DL5) is one of the largest business parks in the North East. It generates regular fleet livery, factory signage, office interior graphics and warehouse graphics briefs. We cover the full park — Merchant Place, Forum Way, and the Aycliffe industrial and commercial estate. Vehicle access throughout, no significant loading restrictions. Newton Aycliffe Great North Road retail and commercial zone is a separate area 3 miles west of the business park.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How far is WRPX from Bishop Auckland?",
    a: "Bishop Auckland is approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) north to Scotch Corner (junction 53), then the A66 west to Darlington and the A688 north-west to Bishop Auckland. Alternatively, the A1(M) to junction 58 (Durham) then the A689 west through Spennymoor and Coundon also works depending on the programme. Newton Aycliffe DL5 is closer — approximately 2 hours via A1(M) to Aycliffe junction (A167 north).",
  },
  {
    q: "Do you work white-label on Bishop Auckland jobs?",
    a: "Yes — white-label is standard on all Bishop Auckland and DL14 zone work. We arrive in unbranded vehicles, carry out every installation under your brand and provide full photographic documentation — before, during and completed sign-off — in your agreed format on the day. No WRPX branding appears on site. Your client sees your company at every stage.",
  },
  {
    q: "Can you cover Bishop Auckland alongside Durham City on the same programme?",
    a: "Yes — Bishop Auckland and Durham City are approximately 15–20 minutes apart via the A689 east. For sign companies running County Durham programmes, combining DL14 (Bishop Auckland) with DH1 (Durham City) and DL5 (Newton Aycliffe) in the same day is efficient. Newton Aycliffe is 20 minutes south of Durham City; the A689/A688 connects Bishop Auckland and Durham directly. The full DL14/DH1/DL5 arc can be planned as a single County Durham west and south day.",
  },
  {
    q: "What types of vinyl installation do you cover in Bishop Auckland?",
    a: "Window graphics, frosted and decorative window film, wall wraps, floor graphics, shop front and fascia vinyls, wayfinding vinyls, hoarding graphics, office interior graphics, fleet livery and retail and hospitality graphics. Installation only — you supply the printed or cut material, we assess the surface and install to spec. Bishop Auckland commercial stock includes the town centre Newgate Street retail zone, Bishop Auckland market area, Newton Aycliffe Great North Road business park and Aycliffe Business Park, and the Spennymoor and Crook retail and commercial zones.",
  },
  {
    q: "Do you cover Aycliffe Business Park and Newton Aycliffe?",
    a: "Yes — Aycliffe Business Park (DL5) is one of the largest business parks in the North East. It generates regular fleet livery, factory signage, office interior graphics and warehouse graphics briefs. We cover the full park — Merchant Place, Forum Way, and the Aycliffe industrial and commercial estate. Vehicle access throughout, no significant loading restrictions. Newton Aycliffe Great North Road retail and commercial zone is a separate area 3 miles west of the business park.",
  },
];

export default function SubcontractVinylInstallerBishopAucklandPage() {
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
            Subcontract · Bishop Auckland &amp; the DL14 Zone
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract vinyl installer Bishop Auckland
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX provides white-label vinyl installation across Bishop Auckland and the DL14
            zone for sign companies, print houses and fit-out contractors. Bishop Auckland town
            centre, Newton Aycliffe DL5, Aycliffe Business Park, Shildon DL4, Crook DL15 and
            Spennymoor DL16 — A1(M) corridor from South Yorkshire via Scotch Corner and the A688.
            Unbranded vehicles, your paperwork, photographic sign-off standard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Bishop Auckland Installation Quote →
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
            Bishop Auckland and DL zone coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Bishop Auckland town centre (DL14)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Newgate Street retail zone and the Bishop Auckland market area. Mix of traditional
                town centre retail stock and regeneration-era commercial units. Auckland Castle and
                the Kynren event site generate arts and heritage sector briefs. The Vinovia Retail
                Park and Tindale Crescent shopping park provide out-of-town retail environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Newton Aycliffe &amp; Aycliffe Business Park (DL5)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One of the largest business parks in the North East — manufacturing, logistics,
                distribution and light industrial. Merchant Place, Forum Way and the wider Aycliffe
                industrial estate. Regular fleet livery, office interior graphics, warehouse and
                factory fascia graphics briefs. Vehicle access throughout, no loading restrictions.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Shildon (DL4)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shildon town centre commercial zone and the Locomotion National Railway Museum site.
                Adjacent to the Aycliffe industrial corridor — commonly combined with Newton Aycliffe
                on the same programme day. Main Street retail and commercial frontages, standard
                town centre stock.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Crook &amp; Willington (DL15)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Crook town centre and Hope Street commercial zone — traditional Durham market
                town retail stock. Willington commercial area along the A690 corridor. Reached
                from Bishop Auckland via the A689 north-east. Commonly combined with Bishop
                Auckland or Spennymoor on a west Durham day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Spennymoor (DL16)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Spennymoor town centre and the Mercia Park industrial zone on the A688 corridor.
                Spennymoor is the commercial mid-point between Bishop Auckland DL14 and Durham
                City DH1 — 10 minutes from each. Commonly included in a Bishop Auckland and
                Durham combined programme day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Darlington corridor (DL1–DL3)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Darlington town centre DL1–DL3 is 15 minutes south-east of Bishop Auckland via
                the A688 and A167. For sign companies with programmes covering both Bishop Auckland
                DL14 and Darlington DL1, we plan the day to cover both zones efficiently — one
                crew, one day, the full DL south corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What we install in Bishop Auckland
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
            Getting to Bishop Auckland from South Yorkshire
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              From our South Yorkshire base, Bishop Auckland is approximately 2 hours 15 minutes
              via the A1(M) north. The most efficient route for the town centre is A1(M) north
              to Scotch Corner (junction 53), then the A66 west to Darlington, and the A688
              north-west via Shildon to Bishop Auckland. This route covers Newton Aycliffe and
              Shildon naturally on the approach.
            </p>
            <p>
              For Aycliffe Business Park DL5, a nearer A1(M) exit applies — junction 59 on the
              A167 leads directly to the Great North Road corridor and the Aycliffe Business Park
              entrance. Newton Aycliffe is 20 minutes south of Durham City, making it the natural
              first or last stop on a Durham DH1 and Newton Aycliffe DL5 combined day.
            </p>
            <p>
              For Spennymoor DL16, the most efficient approach from the A1(M) is junction 61
              (Chester-le-Street south), then the A167 south to Spennymoor. This places Spennymoor
              between Durham City and Bishop Auckland on the same west Durham arc.
            </p>
            <p>
              <strong className="text-foreground">DL south corridor day plan.</strong>{" "}
              For sign companies with County Durham DL programmes, a logical two-zone day structure
              works well: morning in Darlington DL1–DL3 and Newton Aycliffe DL5 (both A1(M)
              accessible), afternoon in Bishop Auckland DL14 and Spennymoor DL16 (A688/A689
              corridor). This covers the full DL south arc without significant backtracking.
            </p>
          </div>
        </div>
      </section>

      {/* Bishop Auckland specifics */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bishop Auckland installation considerations
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bishop Auckland town centre is a traditional market town with a mix of original
              Victorian and Edwardian commercial frontages on Newgate Street and the surrounding
              retail streets. The retail core is compact. Vehicle access on Newgate Street has
              loading restrictions during trading hours — morning loading before 9am or early
              evening is the standard approach for town centre graphic installations.
            </p>
            <p>
              Auckland Castle and the surrounding Prince Bishops estate (reopened as an arts and
              heritage destination) generates specialist graphics briefs — heritage-sensitive
              interpretation graphics, wayfinding vinyl in listed or managed buildings, temporary
              event graphics. Brief any Auckland Castle or estate installation with building name
              and a note on heritage status for the specific location.
            </p>
            <p>
              Tindale Crescent and Vinovia Retail Park (south of the town centre) are standard
              modern retail park environments — no loading restrictions, straightforward commercial
              unit construction. Vehicle access throughout. Brief like any out-of-town retail park.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bishop Auckland installation questions
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
            <Link href="/subcontract-vinyl-installer-darlington/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Darlington</h3>
              <p className="mt-2 text-sm text-muted">DL1–DL3 — 15 min south-east via A688/A167</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-durham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Durham City</h3>
              <p className="mt-2 text-sm text-muted">DH1 — 20 min north-east via A689/A167</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-middlesbrough/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Middlesbrough</h3>
              <p className="mt-2 text-sm text-muted">TS1–TS6 — 40 min south-east via A688/A19</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-hartlepool/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hartlepool</h3>
              <p className="mt-2 text-sm text-muted">TS24–TS26 — 45 min east via A689/A19</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-sunderland/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sunderland</h3>
              <p className="mt-2 text-sm text-muted">SR1–SR6 — 40 min north via A689/A690</p>
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
              Need vinyl installation in Bishop Auckland?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the job details — location, material spec and access requirements — and we
              will come back with availability and a quote. White-label as standard.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Get a Bishop Auckland Installation Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
