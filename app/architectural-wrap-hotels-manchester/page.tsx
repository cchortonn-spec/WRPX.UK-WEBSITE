import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Manchester | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Manchester — kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped to commercial specification. WRPX covers Manchester city centre M1–M4, Piccadilly, Northern Quarter, Spinningfields, Ancoats, MediaCityUK Salford and the wider Greater Manchester hotel market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Manchester — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors in Manchester and Greater Manchester. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Manchester city centre M1–M4, Piccadilly, Northern Quarter, Ancoats, Spinningfields, Castlefield, MediaCityUK Salford M50, Deansgate and across Greater Manchester. Installation during void periods, out-of-hours access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Manchester Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work in Manchester city centre hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we travel to Manchester regularly from our South Yorkshire base. Manchester city centre is approximately 1 hour via the M1 and M60. We cover M1–M4 city centre hotels, the Northern Quarter boutique hotel cluster, Spinningfields corporate hotels, Ancoats, Castlefield, Piccadilly Basin and MediaCityUK in Salford M50. We confirm approach logistics for each Manchester site in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our hotel fit-out company in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out company name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout the Manchester programme. Photographic sign-off provided at handover in your required format.",
      },
    },
    {
      "@type": "Question",
      name: "How much disruption does hotel vinyl wrapping cause in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrapping is dry, low-fume and fast compared to painting or joinery replacement. For occupied Manchester hotels, we work room by room or floor by floor and schedule overnight access for communal areas, reception and lobby work where daytime operation cannot be interrupted. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester hotel surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels, back bar panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey before commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What does hotel vinyl wrapping cost in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors we survey and price by scope — contact us with the property, surface count and access constraints.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you work in Manchester city centre hotels?",
    a: "Yes — we travel to Manchester regularly from our South Yorkshire base. Manchester city centre is approximately 1 hour via the M1 and M60. We cover M1–M4 city centre hotels, the Northern Quarter boutique hotel cluster, Spinningfields corporate hotels, Ancoats, Castlefield, Piccadilly Basin and MediaCityUK in Salford M50. We confirm approach logistics for each Manchester site in advance.",
  },
  {
    q: "Can you work as a subcontractor for our hotel fit-out company in Manchester?",
    a: "Yes — white-label by default. We attend under your fit-out company name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout the Manchester programme. Photographic sign-off provided at handover in your required format.",
  },
  {
    q: "How much disruption does hotel vinyl wrapping cause in Manchester?",
    a: "Wrapping is dry, low-fume and fast compared to painting or joinery replacement. For occupied Manchester hotels, we work room by room or floor by floor and schedule overnight access for communal areas, reception and lobby work where daytime operation cannot be interrupted. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours.",
  },
  {
    q: "Which Manchester hotel surfaces can be vinyl wrapped?",
    a: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels, back bar panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey before commitment.",
  },
  {
    q: "What does hotel vinyl wrapping cost in Manchester?",
    a: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors we survey and price by scope — contact us with the property, surface count and access constraints.",
  },
];

export default function ArchitecturalWrapHotelsManchesterPage() {
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
            <Link href="/architectural-wrap-hotels/" className="text-accent hover:underline">Hotel Interior Vinyl Wrapping</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Manchester Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX works with Manchester hotel operators, hospitality fit-out companies and hotel FM
            contractors on interior vinyl wrapping programmes. We wrap kitchen surfaces, bedroom
            furniture, reception desks, corridor doors and communal areas to commercial specification
            — city centre hotels, aparthotels, boutique properties and branded budget stock across
            Manchester M1–M4, Ancoats, Spinningfields, Castlefield and MediaCityUK Salford.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Hotel Survey →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s hotel market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester has one of the largest and most active hotel markets outside London. The
              M1–M2 city core — Piccadilly, Market Street, Deansgate and the Spinningfields
              financial district — carries a high density of branded midscale and upscale hotel
              stock. Much of this was developed during the 2005–2015 wave; a significant number
              of these properties are now entering their first or second major refurbishment cycle,
              where internal surfaces are structurally sound but visually dated. Architectural
              vinyl wrapping is well placed to service this refurbishment demand efficiently.
            </p>
            <p>
              The Northern Quarter (M4) is Manchester&apos;s boutique and independent hotel cluster.
              Converted Victorian warehouse and textile mill buildings characterise this area — the
              interior specification tends toward industrial-heritage aesthetics, with dark woodgrain,
              brushed metal and matte stone-effect architectural film aligning closely with the
              preferred finish direction. Reception desks, bar and restaurant counter fascias and
              corridor panels are the most commonly specified items.
            </p>
            <p>
              Ancoats (M4/M60) and the wider New Islington area have seen significant new hotel
              development in the last decade. Newer stock in this zone is often at its first
              refurbishment and the kitchenette-equipped aparthotel format — where every room
              includes a small kitchen — generates substantial wrapping programmes as the properties
              age. MediaCityUK in Salford M50, with its concentration of media, tech and hospitality
              operators, is a further Manchester-zone market we cover regularly.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Manchester hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Guest kitchenettes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Aparthotels and extended-stay properties across Manchester and Salford include
                built-in kitchen units in every room. Wrapping doors, drawer fronts and end panels
                refreshes the finish without replacement — fast per-room turnaround means Manchester
                programmes complete efficiently even across large room counts.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe doors, bedside unit fascias, headboard surrounds and desk panels. Film
                gives a consistent finish across every room — critical where visual uniformity
                matters across a branded Manchester hotel refurbishment programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping a tired or chipped reception desk fascia in a new architectural film —
                stone-effect, brushed metal or solid colour — is a high-impact, low-disruption
                refresh. No building works required; the Manchester hotel stays fully operational
                throughout the installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Standard and fire-rated corridor doors can be wrapped to update a tired aesthetic
                without full replacement. We assess each door and substrate for suitability
                and specify the correct film for fire-door compliance in your Manchester building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar and restaurant interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back bar panels, counter fascias, booth dividers and wall panels in hotel restaurants
                and bars. We work outside service hours — morning setup and overnight sessions are
                standard for Manchester city centre hospitality venues where daytime trade cannot
                be interrupted.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal and lobby areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lift lobby wall panels, concierge desks, built-in seating surrounds and decorative
                columns. Architectural film in a consistent finish ties a phased Manchester hotel
                refurbishment together visually when different areas are updated at different stages
                of the programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester access and route */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Manchester — access and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is approximately 1 hour from our South Yorkshire base via the M1 north
              to junction 35a (M18), then the M18/M62 west to the M60 Manchester orbital, then
              the M60 to the relevant city centre approach. For M1 city centre hotel stock, the
              A57(M) or A57 Mancunian Way approach is most direct. For Northern Quarter M4
              properties, the A665 Rochdale Road approach from the M60 at junction 21 is typical.
            </p>
            <p>
              Manchester city centre loading is carefully managed. Deansgate and the main retail
              core have time-restricted loading windows. For hotel stock on the eastern edge of
              the city centre — Piccadilly, London Road — loading arrangements are more flexible.
              Northern Quarter properties in the converted warehouse blocks typically have rear
              yard or basement loading access. MediaCityUK in Salford is accessed via the A57
              or Regent Road and has dedicated loading facilities. We confirm access logistics
              before every Manchester job.
            </p>
            <p>
              For operational Manchester hotels, the standard approach is room-by-room phasing,
              agreed with your housekeeping or operations team. Communal areas, reception and
              lobby work are typically scheduled overnight or at weekends to avoid guest-facing
              disruption. We can combine Manchester with Leeds, Sheffield or Warrington on
              multi-city North West programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Manchester hotel operators choose vinyl wrapping
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed versus joinery replacement.</strong> Replacing fitted bedroom furniture requires procurement lead time, skip access and reinstallation — typically two to three days per room minimum. Wrapping the same surfaces takes hours. For a phased Manchester hotel programme measured against room-night revenue, the difference is material.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> Commercial-grade architectural film is a fraction of the cost of new joinery or furniture. For a 60–100 room Manchester city centre hotel — a typical branded midscale property — the saving over full replacement across a refurbishment is significant.
            </p>
            <p>
              <strong className="text-foreground">Finish quality.</strong> Modern architectural film from 3M, Avery Dennison and Aslan achieves finishes visually indistinguishable from new joinery — woodgrain, stone, brushed metal and matte solid colour options aligned to current interior specification trends in the Manchester hotel market.
            </p>
            <p>
              <strong className="text-foreground">Reversibility.</strong> Film can be removed cleanly at a future refurbishment, leaving the substrate intact. This matters for leased hotel assets and properties under brand franchise agreements requiring periodic refit compliance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester hotel vinyl wrapping — common questions
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
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar control film for hotel guest rooms, lobbies and glazed areas.</p>
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
              Planning a hotel refurbishment in Manchester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope hotel vinyl wrapping programmes across Manchester and Greater
              Manchester. Tell us the property, surface count and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Manchester Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
