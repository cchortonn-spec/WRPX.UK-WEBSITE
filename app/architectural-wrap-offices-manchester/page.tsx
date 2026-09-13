import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Office Interior Vinyl Wrapping Manchester | Desks, Panels & Surfaces | WRPX",
  description:
    "Office interior vinyl wrapping in Manchester — reception desks, kitchen and breakout surfaces, meeting room panels and built-in furniture wrapped to commercial specification. WRPX covers Spinningfields, NOMA, Piccadilly Basin, Ancoats, MediaCityUK Salford M50 and all M1–M4 office districts.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-offices-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Office interior vinyl wrapping Manchester — desks, panels and surfaces",
  "Architectural vinyl wrapping for office interiors in Manchester and Greater Manchester. Reception desks, kitchen and breakout unit surfaces, meeting room wall panels, door fascias and built-in office furniture wrapped in commercial-grade architectural film. Spinningfields M3, NOMA M4, Piccadilly Basin M1, Ancoats M4, MediaCityUK Salford M50, St Peter's Square and all Manchester city centre office districts. Works around your office schedule — evenings, weekends or phased daytime installation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Office Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-offices/" },
    { "@type": "ListItem", position: 4, name: "Manchester Offices", item: "https://www.wrpx.co.uk/architectural-wrap-offices-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install office vinyl wrapping in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Manchester from our South Yorkshire base. Manchester is approximately 1 hour via the M1 and M60. We cover Spinningfields M3, NOMA M4, Piccadilly Basin M1, Ancoats M4, St Peter's Square, Deansgate, Castlefield, Salford Quays M50 and all Manchester city centre and Greater Manchester office districts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work around our Manchester office schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we commonly work evenings and weekends for live Manchester offices where daytime disruption is not acceptable. For phased programmes — floors or zones done sequentially — we can also work daytime with a clear access window. We agree the schedule with your facilities or fit-out team before starting on any Manchester office programme.",
      },
    },
    {
      "@type": "Question",
      name: "What office surfaces in Manchester can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat and near-flat surfaces: reception desk fascias and tops, kitchen and breakout unit doors and drawer fronts, meeting room furniture panels and wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we identify these at survey before any Manchester programme begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can you subcontract to our fit-out company on Manchester office projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label available for all Manchester office work. We attend under your fit-out company name, carry your paperwork, report back to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Manchester programme.",
      },
    },
    {
      "@type": "Question",
      name: "How long does office vinyl wrapping take in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Large Manchester office fit-outs with multiple floors are scoped and priced individually — we survey the space and give you a programme timeline before commitment.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install office vinyl wrapping in Manchester?",
    a: "Yes — we travel to Manchester from our South Yorkshire base. Manchester is approximately 1 hour via the M1 and M60. We cover Spinningfields M3, NOMA M4, Piccadilly Basin M1, Ancoats M4, St Peter's Square, Deansgate, Castlefield, Salford Quays M50 and all Manchester city centre and Greater Manchester office districts.",
  },
  {
    q: "Can you work around our Manchester office schedule?",
    a: "Yes — we commonly work evenings and weekends for live Manchester offices where daytime disruption is not acceptable. For phased programmes — floors or zones done sequentially — we can also work daytime with a clear access window. We agree the schedule with your facilities or fit-out team before starting on any Manchester office programme.",
  },
  {
    q: "What office surfaces in Manchester can be vinyl wrapped?",
    a: "Flat and near-flat surfaces: reception desk fascias and tops, kitchen and breakout unit doors and drawer fronts, meeting room furniture panels and wall panels, built-in joinery surrounds, internal door faces and frames, and feature wall panels. Heavily textured, curved or fabric surfaces are not suitable for film — we identify these at survey before any Manchester programme begins.",
  },
  {
    q: "Can you subcontract to our fit-out company on Manchester office projects?",
    a: "Yes — white-label available for all Manchester office work. We attend under your fit-out company name, carry your paperwork, report back to your project manager and provide photographic sign-off in your required format. The end client sees your company throughout the Manchester programme.",
  },
  {
    q: "How long does office vinyl wrapping take in Manchester?",
    a: "A standard reception desk fascia takes 2–4 hours. A breakout kitchen with 15–20 unit doors takes a full day. Large Manchester office fit-outs with multiple floors are scoped and priced individually — we survey the space and give you a programme timeline before commitment.",
  },
];

export default function ArchitecturalWrapOfficesManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Manchester Offices
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office interior vinyl wrapping in Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps office interiors across Manchester and Greater Manchester — reception desks,
            breakout kitchens, meeting room panels and built-in furniture in commercial-grade
            architectural film. Spinningfields, NOMA, Piccadilly Basin, Ancoats, MediaCityUK
            Salford and every Manchester office district. We work around your schedule — evenings,
            weekends or phased daytime access.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Office Survey →
            </Link>
            <Link href="/architectural-wrap-offices/" className="btn-secondary">
              Office Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester office context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s office market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is the largest regional office market in England outside London.
              Spinningfields M3 — the city&apos;s primary financial and professional services district —
              contains a concentration of Grade A commercial office space developed between
              2005 and 2020. A significant portion of this stock is now entering its first
              full refurbishment cycle: the buildings are structurally sound and well-located
              but the fitted interiors — reception desk fascias, breakout kitchen units, meeting
              room joinery, door surrounds — are showing their age. Architectural vinyl wrapping
              is the most cost-efficient route to a refreshed specification without full joinery
              replacement.
            </p>
            <p>
              The NOMA development (M4, north of Manchester city centre) and the Piccadilly Basin
              cluster represent a newer generation of Manchester office stock — typically
              design-led, with a preference for contemporary finishes. These offices specify
              wrapping as part of planned fit-out programmes and periodic refresh cycles rather
              than refurbishment of worn surfaces. We work with fit-out contractors and office
              design companies serving this market.
            </p>
            <p>
              Ancoats M4 and the wider New Islington area have become one of Manchester&apos;s most
              desirable creative and tech office clusters. The converted Victorian mill buildings
              and new-build creative campus buildings here frequently specify industrial-heritage
              finishes — dark woodgrain, raw concrete-effect and matte black architectural film
              aligning with the aesthetic of the area. MediaCityUK in Salford M50, with the BBC,
              ITV and a large media and tech occupier base, represents a further Manchester-zone
              office market we cover.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Manchester office interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The reception desk is the first surface visitors see. Wrapping a tired or dated
                fascia in a new architectural film — stone-effect, brushed metal, matte black,
                solid colour — is a high-impact, low-disruption refresh. Typically completed
                in a half-day evening session in a live Manchester office.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Breakout kitchens</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, drawer fronts and end panels in Manchester office breakout
                areas and staff kitchens. A 15–20 door breakout kitchen wraps in a single day.
                Commonly specified alongside a wider office fit-out or refurbishment programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in meeting room furniture, feature wall panels, presentation wall fascias
                and credenza doors. Architectural film in a consistent finish specification
                ties a multi-room Manchester office fit-out together without the cost and lead
                time of bespoke joinery.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Internal doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Internal office doors can be wrapped to update an outdated finish or achieve
                consistency with a new specification — particularly where door replacement
                would require fire-door recertification or significant disruption to a live
                Manchester floor plate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Built-in joinery and shelving</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bespoke office joinery, shelving surrounds, server room door fascias and
                partitioned storage panels. Where existing joinery is structurally sound
                but visually mismatched with a new Manchester office specification, wrapping
                is the efficient route to visual consistency.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Feature walls and columns</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Architectural film on wall panels and columns — woodgrain, stone, concrete-effect
                — is an increasingly common specification in Manchester&apos;s design-led Ancoats and
                NOMA offices. Film achieves the industrial-heritage aesthetic without the cost
                of bespoke cladding or decorative plaster finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Manchester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Manchester offices — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester city centre is approximately 1 hour from our South Yorkshire base via
              the M1 north to the M60 orbital, then the relevant city centre approach. For
              Spinningfields and the core M3 office district, the A57 or Deansgate approach
              is most direct. NOMA M4 and Piccadilly Basin M1 are accessible from the M60
              junction 12 via the A665 or A62. We park and bring materials on-site in the
              morning to minimise loading time in restricted Manchester city centre zones.
            </p>
            <p>
              For occupied Manchester offices, we work evenings or at weekends as standard —
              particularly for reception desks and communal areas where daytime access would
              disrupt staff or clients. Breakout kitchens can often be phased section by section
              during the working day. We agree the access schedule with your facilities manager
              or fit-out PM before starting.
            </p>
            <p>
              We can combine Manchester with Salford, Stockport, Warrington or Leeds on
              multi-city North West programmes. For Manchester office fit-out contractors
              managing multi-site programmes, we are available as a consistent white-label
              installation partner — same crew, same reporting format, same sign-off standard
              across all sites.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester office vinyl wrapping — common questions
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
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Manchester office glass partitions and meeting rooms.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Manchester</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Manchester.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial and residential interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning an office fit-out or refurbishment in Manchester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office vinyl wrapping programmes across Manchester and Greater
              Manchester. Tell us the space, surfaces and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Manchester Office Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
