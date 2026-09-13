import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Sheffield | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Sheffield — kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped to commercial specification. WRPX serves Sheffield city centre, Kelham Island, Ecclesall Road and the wider South Yorkshire hotel market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Sheffield — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors in Sheffield and South Yorkshire. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Installation during void periods, out-of-hours access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Sheffield Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work in Sheffield city centre hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are Sheffield-based and work across S1 city centre, Kelham Island, the Victoria Quays area, Ecclesall Road and the wider South Yorkshire hotel market. We know the access constraints around Sheffield city centre loading zones and plan installation windows accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our hotel fit-out company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out contractor's instructions, carry your paperwork and report back to your project manager. Photographic sign-off provided at handover. The hotel operator or brand sees your company throughout.",
      },
    },
    {
      "@type": "Question",
      name: "How much disruption does hotel vinyl wrapping cause in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Sheffield hotels, we work room by room or floor by floor and can schedule overnight access where needed. A typical bedroom suite takes 2–4 hours depending on surfaces. There is no need to close a floor — we work around your occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield hotel surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings.",
      },
    },
    {
      "@type": "Question",
      name: "What does hotel vinyl wrapping cost in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the number of surfaces, film specification and access requirements. As a rough guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme quote across multiple rooms or floors, we survey and price by scope. Contact us with the building and surface count.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you work in Sheffield city centre hotels?",
    a: "Yes — we are Sheffield-based and work across S1 city centre, Kelham Island, the Victoria Quays area, Ecclesall Road and the wider South Yorkshire hotel market. We know the access constraints around Sheffield city centre loading zones and plan installation windows accordingly.",
  },
  {
    q: "Can you work as a subcontractor for our hotel fit-out company?",
    a: "Yes — white-label by default. We attend under your fit-out contractor's instructions, carry your paperwork and report back to your project manager. Photographic sign-off provided at handover. The hotel operator or brand sees your company throughout.",
  },
  {
    q: "How much disruption does hotel vinyl wrapping cause in Sheffield?",
    a: "Wrapping is dry, fast and low-fume compared to painting or joinery replacement. For occupied Sheffield hotels, we work room by room or floor by floor and can schedule overnight access where needed. A typical bedroom suite takes 2–4 hours depending on surfaces. There is no need to close a floor — we work around your occupancy.",
  },
  {
    q: "Which Sheffield hotel surfaces can be vinyl wrapped?",
    a: "Most flat and near-flat interior surfaces: kitchen unit doors and drawer fronts in guest kitchenettes, bedroom furniture panels and wardrobe doors, reception desk fascias, corridor doors, lift lobby wall panels and built-in joinery. Film is not suited to heavily textured surfaces or curved mouldings.",
  },
  {
    q: "What does hotel vinyl wrapping cost in Sheffield?",
    a: "Cost depends on the number of surfaces, film specification and access requirements. As a rough guide, a standard guest bedroom with wardrobe doors and a small desk panel can be done in a half-day session. For a programme quote across multiple rooms or floors, we survey and price by scope. Contact us with the building and surface count.",
  },
];

export default function ArchitecturalWrapHotelsSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Sheffield Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX is Sheffield-based and works directly with Sheffield hotel operators, hospitality
            fit-out companies and hotel FM contractors on interior vinyl wrapping programmes.
            We wrap kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal
            areas to commercial specification — city centre hotels, aparthotels, budget brands and
            boutique properties across Sheffield and South Yorkshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Hotel Survey →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield hotel context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s hotel market — what we work on
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has a varied hotel stock. The city centre S1 zone — around Arundel Gate,
              the train station and the main commercial core — contains the bulk of branded chain
              hotels: budget, midscale and upscale properties serving business travellers, leisure
              guests and university visitor traffic. Many of these properties are at a refurbishment
              stage where interior surfaces have aged but the joinery itself is structurally sound —
              exactly the profile where vinyl wrapping delivers the most value over replacement.
            </p>
            <p>
              Kelham Island and the Victoria Quays area have seen significant hotel and aparthotel
              development over the past decade — including properties with open-plan studio layouts
              where kitchen unit surfaces, worktops and furniture panels are highly visible and
              subject to daily guest contact. These buildings often have contemporary specification
              requirements for their refurbishments, where architectural film in brushed metal,
              stone-effect or satin woodgrain finishes performs well.
            </p>
            <p>
              Ecclesall Road and the Hunters Bar area support boutique guesthouses and smaller
              hotel properties. These often involve bespoke scopes — specific rooms, specific
              surfaces — rather than whole-building programmes. We work on both scales.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Sheffield hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Guest kitchenettes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Aparthotels and extended-stay rooms typically include kitchen units with doors,
                drawer fronts and end panels. Wrapping refreshes the finish without replacement —
                particularly useful where units are structural and built in.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe doors, bedside unit fascias, headboard surrounds and desk panels. Film
                applied to a prepared substrate gives a consistent finish across every room — critical
                where visual consistency matters across a branded property refurbishment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wrapping a tired or chipped reception desk fascia in a new architectural film —
                stone-effect, brushed metal or solid colour — is a high-impact, low-disruption
                refresh that requires no building works and no temporary closure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Standard and fire-rated corridor doors can be wrapped to update a tired aesthetic
                without door replacement. We assess each door and substrate for suitability and
                specify the correct film for the fire-door compliance requirement in your building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bar and restaurant interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Back bar panels, counter fascias, booth dividers and wall panels in hotel restaurants
                and bars. We work outside service hours to avoid disruption — morning setup and
                overnight sessions are standard for Sheffield city centre hospitality.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal and lobby areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lift lobby wall panels, concierge desks, built-in seating surrounds and decorative
                columns. Architectural film in a consistent finish ties refurbishment areas together
                when a hotel is being updated in phases rather than all at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working in Sheffield hotels */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Sheffield hotels — access and scheduling
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield city centre has parking and loading constraints at most hotel locations.
              We are familiar with the access arrangements around the main hotel zones — station
              hotel stock on Sheaf Street and Arundel Gate, the properties on Charter Square, and
              the Kelham Island and Victoria Quays approaches. We plan each job around the hotel&apos;s
              loading bay or nearest available access point and confirm logistics in advance.
            </p>
            <p>
              For operational Sheffield hotels, the standard approach is room-by-room phasing.
              We agree a daily room count with your operations or housekeeping team, complete each
              room before handback, and move through the programme floor by floor. For larger
              programmes, we can run concurrent teams.
            </p>
            <p>
              Overnight access — arriving after last guest check-in and completing before morning
              housekeeping — is available for communal areas and reception work where daytime
              disruption is not acceptable. We agree access windows in writing before mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Sheffield hotel operators choose vinyl wrapping
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speed versus joinery replacement.</strong> Replacing fitted bedroom furniture requires procurement lead time, skip access and reinstallation — typically two to three days per room minimum. Wrapping the same surfaces takes hours. For a phased Sheffield hotel programme, the time saving is significant against a room-night revenue calculation.
            </p>
            <p>
              <strong className="text-foreground">Cost.</strong> Commercial-grade architectural film is a fraction of the cost of new joinery or furniture. For a 50–80 room Sheffield hotel — a typical midscale branded property — the saving over full replacement across a refurbishment is material.
            </p>
            <p>
              <strong className="text-foreground">Finish quality.</strong> Modern architectural film from 3M, Avery Dennison and Aslan achieves finishes that are visually indistinguishable from new joinery — including woodgrain, stone, brushed metal and matte solid colour options that match current interior specification trends.
            </p>
            <p>
              <strong className="text-foreground">Reversibility.</strong> Film can be removed cleanly at a future refurbishment, leaving the substrate intact. This matters for leased hotel assets and properties under brand franchise agreements with periodic refit requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield hotel vinyl wrapping — common questions
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
              <h3 className="font-semibold text-foreground">Hotel window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and solar control film for Sheffield hotel guest rooms and glazed areas.</p>
            </Link>
            <Link href="/architectural-wrap-offices-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office architectural wrap Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Surface wrapping for Sheffield offices — breakout kitchens, reception desks, meeting room furniture.</p>
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
              Planning a hotel refurbishment in Sheffield?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope hotel vinyl wrapping programmes across Sheffield and South Yorkshire.
              Tell us the property, surface count and access constraints — we&apos;ll give you a realistic
              picture of what wrapping can achieve and what it will cost.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Your Sheffield Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
