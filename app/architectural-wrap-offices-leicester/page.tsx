import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping Leicester | Desks, Panels & Surfaces | WRPX",
  description:
    "Office interior vinyl wrapping in Leicester — reception desks, breakout kitchen surfaces, meeting room panels and built-in furniture wrapped to commercial specification. WRPX covers LE1 city centre, Highcross, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19 and all Leicester office districts.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping Leicester — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors in Leicester and Leicestershire. Reception desks, breakout kitchen and staff area unit surfaces, meeting room wall panels, door fascias and built-in office furniture wrapped in commercial-grade architectural film. LE1 city centre, Highcross LE1, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19, Wanlip and all Leicester and Leicestershire office districts. Works around your office schedule — evenings, weekends or phased daytime installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Leicester Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install office vinyl wrapping in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Leicester from our South Yorkshire base. Leicester is approximately 1 hour via the M1 south to the A46. We cover LE1 city centre, Highcross LE1, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19, Wanlip, Syston LE7 and all Leicester and Leicestershire office districts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around our Leicester office schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we commonly work evenings and weekends for live Leicester offices where daytime disruption is not acceptable. For phased programmes — zones or floors done sequentially — we can also work daytime with clear access windows. We agree the schedule with your facilities manager or fit-out project manager before starting any Leicester office programme.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces in Leicester can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen and staff area unit doors and drawer fronts, meeting room furniture panels and wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Leicester programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can you subcontract to our fit-out company on Leicester office projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label available for all Leicester office work. We attend under your fit-out company name, carry your paperwork, report back to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Leicester programme.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Leicester office fit-outs with multiple floors or zones are scoped and priced individually — we survey the space and give you a programme timeline before commitment.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install office vinyl wrapping in Leicester?",
    a: "Yes — we travel to Leicester from our South Yorkshire base. Leicester is approximately 1 hour via the M1 south to the A46. We cover LE1 city centre, Highcross LE1, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19, Wanlip, Syston LE7 and all Leicester and Leicestershire office districts.",
  },
  {
    q: "Can you work around our Leicester office schedule?",
    a: "Yes — we commonly work evenings and weekends for live Leicester offices where daytime disruption is not acceptable. For phased programmes — zones or floors done sequentially — we can also work daytime with clear access windows. We agree the schedule with your facilities manager or fit-out project manager before starting any Leicester office programme.",
  },
  {
    q: "What office surfaces in Leicester can be vinyl wrapped?",
    a: "Flat and near-flat surfaces: reception desk fascias and tops, breakout kitchen and staff area unit doors and drawer fronts, meeting room furniture panels and wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we assess suitability at survey before any Leicester programme begins.",
  },
  {
    q: "Can you subcontract to our fit-out company on Leicester office projects?",
    a: "Yes — white-label available for all Leicester office work. We attend under your fit-out company name, carry your paperwork, report back to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Leicester programme.",
  },
  {
    q: "How long does office vinyl wrapping take in Leicester?",
    a: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Larger Leicester office fit-outs with multiple floors or zones are scoped and priced individually — we survey the space and give you a programme timeline before commitment.",
  },
];

export default function ArchitecturalWrapOfficesLeicesterPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-offices/" className="text-accent hover:underline">Office Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leicester Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office interior vinyl wrapping in Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office interiors across Leicester and Leicestershire — reception desks,
            breakout kitchens, meeting room panels and built-in furniture in commercial-grade
            architectural film. LE1 city centre, Highcross, Fosse Park, Grove Park,
            Meridian Business Park and every Leicester office district. We work around your
            schedule — evenings, weekends or phased daytime access.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Office Survey →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester office context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s office market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester&apos;s commercial office market is anchored on two poles: the LE1 city
              centre — where professional services, financial services, legal and public-sector
              occupiers concentrate around the waterfront, Highcross and the inner ring road
              — and the out-of-town business parks to the south-west of the city. The M1
              corridor at junctions 21 and 21a is the spine of Leicester&apos;s out-of-town office
              geography: Meridian Business Park LE19 and Grove Park LE19 are the largest
              clusters, with a mix of regional and national occupiers who have held these
              locations for fifteen to twenty years.
            </p>
            <p>
              Much of this out-of-town stock — particularly the office buildings occupied
              through the mid-2000s at Meridian and Fosse Park LE3 — is now entering a
              sustained refurbishment cycle. The buildings retain value and location
              advantages but the fitted interiors — reception desk fascias, breakout kitchen
              and staff area units, meeting room furniture, internal joinery — reflect the
              specification standards of their original fit-out rather than current
              occupier expectations. Architectural vinyl wrapping is the most cost-efficient
              route to a refreshed commercial specification without full joinery replacement.
            </p>
            <p>
              The LE1 city centre office market is different in character: a higher proportion
              of refurbishment programmes here are driven by lease events and occupier
              re-gears, with fit-out contractors and commercial interior designers managing
              programmes for professional services and financial occupiers whose branding
              and finish standards are tightly controlled. WRPX works white-label for these
              contractors — attending under the fit-out company name, reporting to the
              project manager and delivering sign-off photography in the agreed format.
            </p>
            <p>
              Syston LE7 and Wanlip to the north of Leicester, and the Hinckley Road LE3
              corridor to the west, represent additional secondary office markets we cover
              on combined Leicester programmes.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leicester office interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The reception desk is the highest-visibility surface in any Leicester office.
                Wrapping a dated fascia in a new architectural film — stone-effect, brushed
                metal, matte black, solid colour — is a high-impact refresh completed
                typically in a half-day or evening session.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchens and staff areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen and staff area unit doors, drawer fronts and end panels in Leicester
                office breakout areas. A 15–20 door unit wraps in a single day. Commonly
                specified alongside a wider Leicester office refurbishment or fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in meeting room furniture, feature wall panels, credenza doors and
                presentation wall fascias. A consistent film specification across multiple
                Leicester meeting rooms achieves a coordinated fit-out standard without
                the cost and lead time of bespoke joinery replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal office doors wrapped to update an outdated finish or achieve
                consistency with a new specification — particularly useful where door
                replacement would require fire-door recertification or significant disruption
                to a live Leicester floor plate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Built-in joinery and shelving</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bespoke office joinery, shelving surrounds and partitioned storage panels.
                Where existing Leicester office joinery is structurally sound but visually
                mismatched with a new specification, wrapping delivers visual consistency
                at a fraction of replacement cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and columns</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Architectural film on wall panels and columns — woodgrain, stone, concrete-effect
                — used in Leicester&apos;s LE1 city centre offices and design-led Highcross-area
                commercial premises where film achieves a premium finish specification
                without costly cladding or decorative plaster work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Leicester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Leicester offices — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is approximately 1 hour from our South Yorkshire base via the M1 south
              to junction 21, then the A5460 or A563 into the city and out-of-town business
              parks. For Meridian Business Park LE19 and Grove Park LE19, the M1 junction 21
              approach is direct. For LE1 city centre offices, junction 21 and the A5460
              or Fosse Road approach is most practical. We carry materials on-site and
              work to minimise any loading or access disruption.
            </p>
            <p>
              For occupied Leicester offices, evenings and weekends are our standard working
              pattern — particularly for reception desks and communal areas where daytime
              access would affect staff or clients. Breakout kitchens can frequently be
              phased section by section during working hours. We agree the access schedule
              with your facilities manager or fit-out project manager before starting.
            </p>
            <p>
              Leicester sits at the centre of a midlands cluster: Coventry is 30 miles
              south-west via the M69, Nottingham is 30 miles north-east via the A46, and
              Derby is 25 miles north-west via the A50. For fit-out contractors managing
              multi-site programmes across the East and West Midlands, we are available as
              a consistent white-label installation partner — same crew, same reporting
              format, same sign-off standard across all sites on a combined visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester office vinyl wrapping — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-offices/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all office interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/frosted-office-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted office film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Leicester office glass partitions and meeting rooms.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Leicester</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Leicester.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Architectural vinyl wrapping for hotel interiors in Leicester — bedrooms, reception, restaurant and corridor surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning an office fit-out or refurbishment in Leicester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office vinyl wrapping programmes across Leicester and
              Leicestershire. Tell us the space, surfaces and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Leicester Office Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
