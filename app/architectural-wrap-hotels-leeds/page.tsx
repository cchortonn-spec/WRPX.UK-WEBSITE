import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Leeds | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Leeds — kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped to commercial specification. WRPX covers Leeds city centre, Granary Wharf, Headingley, the South Bank and the wider West Yorkshire hotel market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Leeds — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors in Leeds and West Yorkshire. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Installation during void periods, out-of-hours access, photographic sign-off. Leeds city centre LS1–LS2, Granary Wharf, Headingley, South Bank and wider West Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Leeds Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work in Leeds city centre hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Leeds LS1 and LS2 city centre hotels, Granary Wharf, Clarence Dock, the South Bank regeneration zone, Headingley and the wider West Yorkshire hotel market. We are familiar with Leeds city centre loading and access constraints across all the main hotel locations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our hotel fit-out company in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
      },
    },
    {
      "@type": "Question",
      name: "How much disruption does hotel vinyl wrapping cause in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Leeds hotels, we work room by room or floor by floor and can schedule overnight access for communal areas or reception where daytime disruption is not acceptable. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours. No need to close a floor.",
      },
    },
    {
      "@type": "Question",
      name: "Which hotel surfaces can be vinyl wrapped in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey.",
      },
    },
    {
      "@type": "Question",
      name: "What does hotel vinyl wrapping cost in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors, we survey and price by scope. Contact us with the building, surface count and any access constraints.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you work in Leeds city centre hotels?",
    a: "Yes — we cover Leeds LS1 and LS2 city centre hotels, Granary Wharf, Clarence Dock, the South Bank regeneration zone, Headingley and the wider West Yorkshire hotel market. We are familiar with Leeds city centre loading and access constraints across all the main hotel locations.",
  },
  {
    q: "Can you work as a subcontractor for our hotel fit-out company in Leeds?",
    a: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
  },
  {
    q: "How much disruption does hotel vinyl wrapping cause in Leeds?",
    a: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Leeds hotels, we work room by room or floor by floor and can schedule overnight access for communal areas or reception where daytime disruption is not acceptable. A typical guest bedroom with wardrobe doors and a desk panel takes 2–4 hours. No need to close a floor.",
  },
  {
    q: "Which hotel surfaces can be vinyl wrapped in Leeds?",
    a: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings — we identify any limitations at survey.",
  },
  {
    q: "What does hotel vinyl wrapping cost in Leeds?",
    a: "Cost depends on the number of surfaces, film specification and access requirements. As a guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme across multiple rooms or floors, we survey and price by scope. Contact us with the building, surface count and any access constraints.",
  },
];

export default function ArchitecturalWrapHotelsLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leeds Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX works directly with Leeds hotel operators, hospitality fit-out companies and hotel
            FM contractors on interior vinyl wrapping programmes. We wrap kitchen surfaces, bedroom
            furniture, reception desks, corridor doors and communal areas to commercial specification
            — city centre hotels, aparthotels, budget brands and boutique properties across Leeds
            and West Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Hotel Survey →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds&apos; hotel market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds has one of the most active hotel markets in the north of England. The LS1
              city centre core — along The Headrow, Boar Lane and the station area — contains a
              dense mix of branded budget, midscale and upscale hotel stock, with a number of
              properties undergoing or due for refurbishment as the buildings reach the 15–20
              year mark since their original fit-out. These are the exact properties where
              architectural vinyl wrapping offers the highest value: surfaces that are structurally
              sound but visually dated, where film can deliver a specification-grade finish at
              a fraction of the replacement cost.
            </p>
            <p>
              Granary Wharf and Clarence Dock have a distinct cluster of boutique and lifestyle
              hotel stock. Properties in these locations typically have higher specification
              requirements for their refurbishments — contemporary finish directions where brushed
              metal, stone-effect and dark woodgrain architectural film performs well against
              the industrial heritage aesthetics of the waterfront buildings.
            </p>
            <p>
              The Leeds South Bank regeneration zone — one of Europe&apos;s largest urban regeneration
              projects — is driving significant new hotel and aparthotel development. New-build
              aparthotels in this zone typically include guest kitchenettes in every room, generating
              wrapping programmes as the properties age into their first full refurbishment cycle.
              We are well positioned to service this growing market segment.
            </p>
            <p>
              Headingley and the Hyde Park area support a strong concentration of guesthouses,
              aparthotels and smaller hotel properties serving the University of Leeds, Leeds Beckett
              and the Headingley stadium venues. These typically involve room-by-room or building-by-building
              programmes rather than large branded refurbishments — we work on both scales.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leeds hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Guest kitchenettes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Aparthotels and extended-stay rooms include kitchen units with doors, drawer fronts
                and end panels. Wrapping refreshes the finish without replacement — particularly
                useful where units are structural and built in. Fast turnaround per room means
                a Leeds aparthotel programme can move efficiently floor by floor.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe doors, bedside unit fascias, headboard surrounds and desk panels. Film
                applied to a prepared substrate gives a consistent finish across every room —
                critical where visual consistency matters across a branded Leeds hotel
                refurbishment programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping a tired or chipped reception desk fascia in a new architectural film —
                stone-effect, brushed metal or solid colour — is a high-impact, low-disruption
                refresh that requires no building works. The hotel stays open and operational
                throughout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Standard and fire-rated corridor doors can be wrapped to update a tired aesthetic
                without full door replacement. We assess each door and substrate for suitability
                and specify the correct film for fire-door compliance requirements in your building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar and restaurant interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back bar panels, counter fascias, booth dividers and wall panels in hotel restaurants
                and bars. We work outside service hours to avoid disruption — morning setup and
                overnight sessions are standard for Leeds city centre hospitality venues.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal and lobby areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lift lobby wall panels, concierge desks, built-in seating surrounds and decorative
                columns. Architectural film in a consistent finish ties a phased Leeds hotel
                refurbishment together visually when different areas are being updated at different
                times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Leeds hotels */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Leeds hotels — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds city centre has loading and parking constraints around most hotel locations.
              The main hotel cluster around the station on Neville Street and Wellington Street
              has restricted loading on the main carriageways during peak hours. Properties in
              the Headrow area, the Light and Trinity area of LS1 have their own access arrangements.
              We confirm logistics in advance of each job, not on arrival.
            </p>
            <p>
              For operational Leeds hotels, the standard approach is room-by-room phasing. We
              agree a daily room count with your housekeeping or operations team, complete each
              room to sign-off standard before handback, and progress floor by floor through
              the programme. For larger Leeds hotel programmes, concurrent teams are available.
            </p>
            <p>
              Overnight access — arriving after last check-in and completing before morning
              housekeeping — is available for communal and reception work where daytime operation
              cannot be disrupted. We agree all access windows in writing before mobilising.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Leeds hotel operators choose vinyl wrapping
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed versus joinery replacement.</strong> Replacing fitted bedroom furniture requires procurement lead time, skip access and reinstallation — typically two to three days per room minimum. Wrapping the same surfaces takes hours. For a phased Leeds hotel programme against a room-night revenue calculation, the time saving is material.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> Commercial-grade architectural film is a fraction of the cost of new joinery or furniture. For a 50–100 room Leeds hotel — a typical midscale branded city centre property — the saving over full replacement across a complete refurbishment is significant, and the budget releases to other refurbishment priorities.
            </p>
            <p>
              <strong className="text-foreground">Finish quality.</strong> Modern architectural film from 3M, Avery Dennison and Aslan achieves finishes visually indistinguishable from new joinery — including woodgrain, stone, brushed metal and matte solid colour options that match current interior specification trends in the Leeds hotel market.
            </p>
            <p>
              <strong className="text-foreground">Reversibility.</strong> Film can be removed cleanly at a future refurbishment, leaving the substrate intact. This matters for leased hotel assets and properties under brand franchise agreements with periodic refit requirements — a consideration for Leeds&apos; significant branded hotel stock.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds hotel vinyl wrapping — common questions
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
            <Link href="/architectural-wrap-offices-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office architectural wrap Leeds</h3>
              <p className="mt-2 text-sm text-muted">Surface wrapping for Leeds offices — breakout kitchens, reception desks, meeting room furniture.</p>
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
              Planning a hotel refurbishment in Leeds?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope hotel vinyl wrapping programmes across Leeds and West Yorkshire.
              Tell us the property, surface count and access constraints — we&apos;ll give you a realistic
              picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Leeds Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
