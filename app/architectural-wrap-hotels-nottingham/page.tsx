import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Nottingham | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Nottingham — kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped to commercial specification. WRPX covers Nottingham city centre, Lace Market, Castle Quarter, NG1–NG7 and the wider East Midlands hotel market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Nottingham — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors in Nottingham and the East Midlands. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Nottingham city centre NG1, Lace Market NG1, Castle Quarter, NG7 and across East Midlands. Installation during void periods, out-of-hours access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Nottingham Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work in Nottingham city centre hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are based in South Yorkshire and run regular installations across Nottingham. We cover NG1 city centre hotels, the Lace Market boutique hotel cluster, the Castle Quarter and the wider Nottingham and East Midlands hotel market. Nottingham is approximately 45 minutes from our base via the M1.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our hotel fit-out company in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
      },
    },
    {
      "@type": "Question",
      name: "How much disruption does hotel vinyl wrapping cause in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Nottingham hotels, we work room by room or floor by floor and can schedule overnight access for communal areas or reception where daytime operation cannot be disrupted. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham hotel surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey before commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What does hotel vinyl wrapping cost in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors, we survey and price by scope. Contact us with the building and surface count.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you work in Nottingham city centre hotels?",
    a: "Yes — we are based in South Yorkshire and run regular installations across Nottingham. We cover NG1 city centre hotels, the Lace Market boutique hotel cluster, the Castle Quarter and the wider Nottingham and East Midlands hotel market. Nottingham is approximately 45 minutes from our base via the M1.",
  },
  {
    q: "Can you work as a subcontractor for our hotel fit-out company in Nottingham?",
    a: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
  },
  {
    q: "How much disruption does hotel vinyl wrapping cause in Nottingham?",
    a: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Nottingham hotels, we work room by room or floor by floor and can schedule overnight access for communal areas or reception where daytime operation cannot be disrupted. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours.",
  },
  {
    q: "Which Nottingham hotel surfaces can be vinyl wrapped?",
    a: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey before commitment.",
  },
  {
    q: "What does hotel vinyl wrapping cost in Nottingham?",
    a: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors, we survey and price by scope. Contact us with the building and surface count.",
  },
];

export default function ArchitecturalWrapHotelsNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Nottingham Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX works with Nottingham hotel operators, hospitality fit-out companies and hotel FM
            contractors on interior vinyl wrapping programmes. We wrap kitchen surfaces, bedroom
            furniture, reception desks, corridor doors and communal areas to commercial specification
            — city centre hotels, aparthotels, budget brands and boutique properties across
            Nottingham and the wider East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Hotel Survey →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s hotel market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham has a well-established city centre hotel market. The NG1 core —
              around the Old Market Square, Maid Marian Way and the main commercial retail zone
              — contains a mix of branded budget, midscale and upscale hotel stock. These city
              centre properties are at varying stages of their refurbishment cycles, with a
              significant cohort at the 10–20 year fit-out age where surfaces are structurally
              sound but visually dated — exactly the profile where architectural vinyl wrapping
              delivers the most value.
            </p>
            <p>
              The Lace Market district of NG1 is Nottingham&apos;s most architecturally distinct hotel
              cluster. The converted Victorian and Georgian lace warehouses contain some of the
              city&apos;s most characterful boutique and independent hotel properties. These tend to
              specify contemporary finish directions — particularly in common areas, bar and
              restaurant spaces — where architectural film in dark woodgrain, brushed metal
              or stone effect aligns with the industrial-heritage aesthetic of the buildings.
            </p>
            <p>
              The NG7 Nottingham Trent University and Arboretum area supports a concentration
              of aparthotels and budget extended-stay properties serving the university, the
              Queen&apos;s Medical Centre and the City Hospital. These properties typically include
              kitchenettes in every room, generating wrapping programmes as the properties reach
              their first refurbishment cycle.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Nottingham hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Guest kitchenettes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Aparthotels and extended-stay rooms include built-in kitchen units with doors,
                drawer fronts and end panels. Wrapping refreshes the finish without replacement
                — particularly useful where units are structural. Fast per-room turnaround
                means a Nottingham programme progresses efficiently.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe doors, bedside unit fascias, headboard surrounds and desk panels. Film
                gives a consistent finish across every room — critical where visual consistency
                matters across a branded Nottingham hotel refurbishment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping a tired or chipped reception desk fascia in a new architectural film —
                stone-effect, brushed metal or solid colour — is a high-impact, low-disruption
                refresh. No building works required; the hotel stays fully operational throughout
                the installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Standard and fire-rated corridor doors can be wrapped to update a tired aesthetic
                without full replacement. We assess each door and substrate for suitability
                and specify the correct film for fire-door compliance in your building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar and restaurant interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back bar panels, counter fascias, booth dividers and wall panels in hotel
                restaurants and bars. We work outside service hours — morning setup and overnight
                sessions are standard for Nottingham city centre hospitality venues.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal and lobby areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lift lobby wall panels, concierge desks, built-in seating surrounds and
                decorative columns. Architectural film in a consistent finish ties a phased
                Nottingham hotel refurbishment together visually when different areas are
                updated at different stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham access and route */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Nottingham — access and route
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is approximately 45 minutes from our South Yorkshire base via the M1
              southbound to junction 26 (M1/A610 Nottingham), or junction 25 (A52 Nottingham
              West). For city centre hotels, the NG1 zone is best approached via the A610
              or A52 ring road corridors, avoiding the inner ring road peak congestion
              windows from 8–9am and 4:30–6pm. We confirm approach logistics for each
              Nottingham site in advance.
            </p>
            <p>
              Nottingham city centre loading is controlled in the NG1 retail core — the
              Broadmarsh and Victoria Centre areas have restricted loading windows. For hotel
              stock on Maid Marian Way, Wollaton Street and the southern NG1 commercial zone,
              loading arrangements are more flexible. Lace Market properties typically have
              rear yard access via the narrow service lanes off Stoney Street and High Pavement.
              We confirm access logistics before every job.
            </p>
            <p>
              For operational Nottingham hotels, the standard approach is room-by-room phasing,
              agreed with your housekeeping or operations team. Communal areas and reception
              work are typically scheduled overnight or at weekends. We can combine Nottingham
              with Derby, Leicester or the Sheffield–Nottingham corridor on multi-city East
              Midlands programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Nottingham hotel operators choose vinyl wrapping
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed versus joinery replacement.</strong> Replacing fitted bedroom furniture requires procurement lead time, skip access and reinstallation — typically two to three days per room minimum. Wrapping the same surfaces takes hours. For a phased Nottingham hotel programme measured against room-night revenue, the difference is material.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> Commercial-grade architectural film is a fraction of the cost of new joinery or furniture. For a 50–80 room Nottingham city centre hotel — a typical midscale branded property — the saving over full replacement across a refurbishment is significant.
            </p>
            <p>
              <strong className="text-foreground">Finish quality.</strong> Modern architectural film from 3M, Avery Dennison and Aslan achieves finishes visually indistinguishable from new joinery — woodgrain, stone, brushed metal and matte solid colour options aligned to current interior specification trends.
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
            Nottingham hotel vinyl wrapping — common questions
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
            <Link href="/sheffield-nottingham-corridor-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sheffield–Nottingham corridor</h3>
              <p className="mt-2 text-sm text-muted">Combined installation coverage across the M1 corridor between Sheffield and Nottingham.</p>
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
              Planning a hotel refurbishment in Nottingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope hotel vinyl wrapping programmes across Nottingham and the
              East Midlands. Tell us the property, surface count and access constraints —
              we&apos;ll give you a realistic picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Nottingham Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
