import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Coventry | Bedroom, Reception & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Coventry — bedroom furniture, reception desks, corridor doors, bathroom vanity panels and communal joinery wrapped in commercial-grade film. WRPX covers Coventry city centre CV1, Ricoh Arena CV6, the A45/M6 corridor and the University of Warwick campus hotel zone. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Coventry — bedroom furniture, reception and surface wrap",
  "Architectural vinyl wrapping for hotel interiors across Coventry and Warwickshire. Bedroom furniture, reception desks, bathroom vanity panels, corridor doors and communal joinery wrapped in commercial-grade architectural film. Coventry city centre CV1, Ricoh Arena CV6, the A45/M45/M6 corridor hotel cluster, University of Warwick campus CV4 and all Coventry hotel postcodes. Room-by-room through void periods — no loss of room stock."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Coventry Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap hotel interiors in Coventry city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Coventry hotel market including the city-centre cluster around CV1. The Cathedral Quarter hotels, Broadgate and the ring-road corridor hotels, the Ricoh Arena CV6 conference hotel zone and the University of Warwick campus CV4 hotel and conference centre are all within our Coventry coverage. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6.",
      },
    },
    {
      "@type": "Question",
      name: "Which surfaces can you wrap in a Coventry hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Coventry survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work room by room without taking Coventry hotel rooms out of service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — room-by-room through void periods is our standard model across Coventry hotels. Each room is assessed, film applied to specification and cleared within the agreed void window — typically one room per installer per day for a full bedroom furniture programme. For larger Coventry hotels around the Ricoh Arena and the A45 corridor, we can provide dedicated teams to maintain throughput.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work white-label for a hotel fit-out company in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Coventry hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Useful for fit-out contractors managing multi-site programmes across Coventry and the wider West Midlands — Birmingham, Wolverhampton, Leicester and Solihull all within a single visit radius from Coventry.",
      },
    },
    {
      "@type": "Question",
      name: "What areas around Coventry do you also cover for hotel wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coventry sits at the junction of the M6, M45 and M69. We combine Coventry hotel programmes with Birmingham (20 miles west via M6), Leicester (25 miles north-east via M69 and M1), Leamington Spa CV31 (9 miles south), Kenilworth CV8 (5 miles south) and the NEC/airport B40 cluster (12 miles west). One visit can cover multiple Warwickshire and West Midlands hotel properties without separate mobilisation costs.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap hotel interiors in Coventry city centre?",
    a: "Yes — we cover the full Coventry hotel market including the city-centre cluster around CV1. The Cathedral Quarter hotels, Broadgate and the ring-road corridor hotels, the Ricoh Arena CV6 conference hotel zone and the University of Warwick campus CV4 hotel and conference centre are all within our Coventry coverage. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6.",
  },
  {
    q: "Which surfaces can you wrap in a Coventry hotel?",
    a: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Coventry survey.",
  },
  {
    q: "Can you work room by room without taking Coventry hotel rooms out of service?",
    a: "Yes — room-by-room through void periods is our standard model across Coventry hotels. Each room is assessed, film applied to specification and cleared within the agreed void window — typically one room per installer per day for a full bedroom furniture programme. For larger Coventry hotels around the Ricoh Arena and the A45 corridor, we can provide dedicated teams to maintain throughput.",
  },
  {
    q: "Can you work white-label for a hotel fit-out company in Coventry?",
    a: "Yes — white-label is standard for all Coventry hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Useful for fit-out contractors managing multi-site programmes across Coventry and the wider West Midlands — Birmingham, Wolverhampton, Leicester and Solihull all within a single visit radius from Coventry.",
  },
  {
    q: "What areas around Coventry do you also cover for hotel wrapping?",
    a: "Coventry sits at the junction of the M6, M45 and M69. We combine Coventry hotel programmes with Birmingham (20 miles west via M6), Leicester (25 miles north-east via M69 and M1), Leamington Spa CV31 (9 miles south), Kenilworth CV8 (5 miles south) and the NEC/airport B40 cluster (12 miles west). One visit can cover multiple Warwickshire and West Midlands hotel properties without separate mobilisation costs.",
  },
];

export default function ArchitecturalWrapHotelsCoventry() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Coventry Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps hotel interiors across Coventry and Warwickshire — bedroom furniture,
            reception desks, bathroom vanity panels, corridor doors and communal joinery in
            commercial-grade architectural film. CV1 city centre, Ricoh Arena CV6, A45/M6
            corridor hotels and the University of Warwick campus zone. Room-by-room through
            void periods. Free survey.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Coventry Hotel Programme →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry hotel market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            The Coventry hotel market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is a major commercial city and conference destination sitting at the
              junction of the M6, M45 and M69, with an established hotel market that runs from
              the city-centre CV1 cluster around Cathedral Quarter and Broadgate through to the
              Ricoh Arena CV6 conference hotel complex in the north of the city. The M6/M45
              junction corridor carries significant business travel traffic from Birmingham and
              the south, generating consistent room occupancy across the A45 hotel belt.
            </p>
            <p>
              The University of Warwick CV4 campus — one of the UK&apos;s largest campus hotel and
              conference operations — sits on the south-west edge of Coventry. The Radisson Blu
              at Warwick and the campus conference hotel complex run substantial room counts
              with ongoing refurbishment requirements. Coventry University CV1, centrally located,
              adds significant student and conference accommodation demand to the city-centre
              hotel stock.
            </p>
            <p>
              Coventry&apos;s strategic motorway position means the city regularly hosts multi-site
              hotel programmes that extend to Birmingham, Leicester and Leamington Spa in the
              same visit window. We combine Coventry hotel work with the wider West Midlands
              hotel market on the same programme for fit-out contractors managing multi-site
              refurbishment schedules across the region.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Coventry hotels
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and
                minibar unit doors — the core bedroom furniture wrap programme for Coventry
                hotels refreshing their room specification without FF&amp;E replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bathroom vanity panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vanity unit door faces and panel fronts in Coventry hotel bathrooms and en-suites.
                Film specified for wet-area environments with appropriate moisture-resistant
                adhesive systems and film weight for hospitality use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, concierge station panels, lobby feature joinery and
                check-in counter surfaces. The highest-visibility surface in the hotel —
                a specification refresh on the reception joinery immediately changes the
                perceived quality of the space.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Guest room door faces, corridor feature panels and lift lobby joinery across
                all Coventry hotel bedroom floors. Wrapped floor by floor through void-period
                windows — typically one or two floors per week depending on door count.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Restaurant and bar fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascias, bar fronts, banquette surrounds and servery joinery in Coventry
                hotel restaurants and bar areas. Film specified for the food and beverage
                environment with appropriate surface preparation for hospitality-grade longevity.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room and conference joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Credenza fascias, wall panel joinery, built-in storage and registration desk
                surfaces in Coventry hotel meeting rooms and conference suites. Particularly
                relevant for the Ricoh Arena and University of Warwick conference hotel markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Coventry hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room through void periods.</strong>{" "}
              Room-by-room working through the hotel&apos;s natural void pattern is our standard
              model across Coventry. We work in rooms blocked by the revenue management team
              and clear each room within the agreed void window — typically same-day — before
              it returns to lettable inventory. No loss of total room count during the programme.
            </p>
            <p>
              <strong className="text-foreground">Physical sample sign-off before any Coventry work begins.</strong>{" "}
              We bring physical film samples to every Coventry hotel survey — not swatches or
              digital images. The hotel brand, interior designer or GM signs off the specification
              on an actual sample before we commit to any purchasing or scheduling. No surprises
              on site.
            </p>
            <p>
              <strong className="text-foreground">White-label for Coventry hotel fit-out contractors.</strong>{" "}
              All Coventry hotel wrapping work operates white-label for fit-out contractors and
              FF&amp;E project managers. We attend under your company name, carry your documentation
              and provide photographic sign-off in your format. The hotel operator or brand sees
              your company throughout the Coventry programme.
            </p>
            <p>
              <strong className="text-foreground">Multi-site West Midlands programmes.</strong>{" "}
              For fit-out contractors managing hotel wrapping programmes across Coventry and the
              wider West Midlands — Birmingham, Leicester, Leamington Spa and Solihull — we can
              combine into a single programme. Coventry is centrally located for the full West
              Midlands hotel market, reducing mobilisation costs significantly on multi-property
              contracts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry hotel wrapping — common questions
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
            Related hotel and Coventry services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel wrapping applications, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior vinyl wrapping across Birmingham — Grand Hotel B3, Mailbox B1, NEC B40.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior vinyl wrapping across Leicester — city centre LE1, stadium district LE2.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts and fitted surfaces for Coventry restaurant and bar interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel interior refresh in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Coventry hotel properties and provide a fixed-price scope co-ordinated
              to your void pattern and programme timeline. Tell us the surfaces, room count and
              deadline — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Coventry Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
