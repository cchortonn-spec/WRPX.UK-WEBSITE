import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Derby | Bedroom, Reception & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Derby — bedroom furniture, reception desks, corridor doors, bathroom vanity panels and communal joinery wrapped in commercial-grade film. WRPX covers Derby city centre DE1, Pride Park DE24, the A52/A38 corridor hotel cluster and iPro Stadium DE24 zone. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Derby — bedroom furniture, reception and surface wrap",
  "Architectural vinyl wrapping for hotel interiors across Derby and Derbyshire. Bedroom furniture, reception desks, bathroom vanity panels, corridor doors and communal joinery wrapped in commercial-grade architectural film. Derby city centre DE1, Pride Park DE24, the A52/A38 business hotel corridor, Chellaston and the wider South Derbyshire hotel zone. Room-by-room through void periods — no loss of room stock."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Derby Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap hotel interiors in Derby city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Derby hotel market including the DE1 city-centre cluster, the Pride Park DE24 stadium hotel zone, the A52/A38 corridor business hotel belt and Chellaston DE73. Travel time from our South Yorkshire base is approximately 40 minutes via the M1 — Derby is one of our closest major hotel markets.",
      },
    },
    {
      "@type": "Question",
      name: "Which surfaces can you wrap in a Derby hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Derby survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work room by room without taking Derby hotel rooms out of service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — room-by-room through void periods is our standard model across Derby hotels. Each room is assessed, film applied to specification and cleared within the agreed void window — typically one room per installer per day for a full bedroom furniture programme. Derby's business hotel market on the A52 corridor tends to have mid-week occupancy peaks, so weekend and Monday morning void windows are often the most efficient scheduling approach.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work white-label for a hotel fit-out company in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Derby hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Derby is also a natural staging point for multi-site East Midlands programmes combining Nottingham (16 miles north-east), Leicester (30 miles south) and Sheffield (30 miles north) in the same visit window.",
      },
    },
    {
      "@type": "Question",
      name: "What areas around Derby do you also cover for hotel wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derby sits at the hub of the East Midlands road network — M1, A38, A50 and A52 all within a few miles of the city centre. We combine Derby hotel programmes with Nottingham (16 miles via A52), Burton upon Trent DE14 (10 miles west via A38), Ashbourne DE6 (13 miles north-west), Uttoxeter ST14 (17 miles north-west), and the A38 corridor south to Lichfield. One visit covers Derby and a cluster of surrounding Derbyshire and Staffordshire hotel properties.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap hotel interiors in Derby city centre?",
    a: "Yes — we cover the full Derby hotel market including the DE1 city-centre cluster, the Pride Park DE24 stadium hotel zone, the A52/A38 corridor business hotel belt and Chellaston DE73. Travel time from our South Yorkshire base is approximately 40 minutes via the M1 — Derby is one of our closest major hotel markets.",
  },
  {
    q: "Which surfaces can you wrap in a Derby hotel?",
    a: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Derby survey.",
  },
  {
    q: "Can you work room by room without taking Derby hotel rooms out of service?",
    a: "Yes — room-by-room through void periods is our standard model across Derby hotels. Each room is assessed, film applied to specification and cleared within the agreed void window — typically one room per installer per day for a full bedroom furniture programme. Derby's business hotel market on the A52 corridor tends to have mid-week occupancy peaks, so weekend and Monday morning void windows are often the most efficient scheduling approach.",
  },
  {
    q: "Can you work white-label for a hotel fit-out company in Derby?",
    a: "Yes — white-label is standard for all Derby hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Derby is also a natural staging point for multi-site East Midlands programmes combining Nottingham (16 miles north-east), Leicester (30 miles south) and Sheffield (30 miles north) in the same visit window.",
  },
  {
    q: "What areas around Derby do you also cover for hotel wrapping?",
    a: "Derby sits at the hub of the East Midlands road network — M1, A38, A50 and A52 all within a few miles of the city centre. We combine Derby hotel programmes with Nottingham (16 miles via A52), Burton upon Trent DE14 (10 miles west via A38), Ashbourne DE6 (13 miles north-west), Uttoxeter ST14 (17 miles north-west), and the A38 corridor south to Lichfield. One visit covers Derby and a cluster of surrounding Derbyshire and Staffordshire hotel properties.",
  },
];

export default function ArchitecturalWrapHotelsDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Derby Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps hotel interiors across Derby and Derbyshire — bedroom furniture,
            reception desks, bathroom vanity panels, corridor doors and communal joinery
            in commercial-grade architectural film. DE1 city centre, Pride Park DE24,
            the A52/A38 business hotel corridor and the wider Derbyshire hotel zone.
            Room-by-room through void periods. Free survey.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Derby Hotel Programme →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby hotel market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            The Derby hotel market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is a substantial East Midlands business city with a hotel market anchored
              around the A52/A38 corridor and the Pride Park DE24 business district. The A52
              east of the city centre — connecting Derby to Nottingham via junction 25 of the
              M1 — carries one of the heaviest business travel flows in the East Midlands, and
              the hotel cluster along this corridor includes several mid-scale branded properties
              with ongoing refurbishment requirements.
            </p>
            <p>
              Pride Park DE24, home to Derby County Football Club&apos;s iPro Stadium and a large
              business park, has developed a cluster of event-driven hotel demand around matchday
              and conference hospitality. The city-centre DE1 cluster, anchored around the Cathedral
              Quarter and the Intu Derby shopping complex, includes both independent and branded
              hotel properties in buildings ranging from converted heritage stock to modern
              purpose-built hotels.
            </p>
            <p>
              Derby&apos;s strategic position on the M1/A38/A50/A52 hub makes it an efficient base
              for multi-site East Midlands hotel programmes. Nottingham is 16 miles north-east,
              Leicester 30 miles south, Sheffield 30 miles north and Burton upon Trent 10 miles
              west — all reachable from a Derby base in a single day, reducing mobilisation
              costs significantly on programmes covering multiple East Midlands properties.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 30–40 minutes from Derby via the
              M1 at junction 25 — Derby is one of our closest major hotel markets with no
              additional mobilisation premium on Derby commissions.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Derby hotels
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and
                minibar unit doors — the core bedroom furniture wrap programme for Derby hotels
                refreshing their room specification without FF&amp;E replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bathroom vanity panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vanity unit door faces and panel fronts in Derby hotel bathrooms and en-suites.
                Film specified for wet-area environments with appropriate moisture-resistant
                adhesive systems and film weight for hospitality use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, concierge station panels, lobby feature joinery and
                check-in counter surfaces. A specification refresh on the reception joinery
                immediately changes the perceived quality of the Derby hotel arrival experience.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Guest room door faces, corridor feature panels and lift lobby joinery across
                all Derby hotel bedroom floors. Wrapped floor by floor through void-period
                windows — typically one or two floors per week depending on door count.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Restaurant and bar fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascias, bar fronts, banquette surrounds and servery joinery in Derby
                hotel restaurants and bar areas. Film specified for food and beverage environments
                with appropriate surface preparation for hospitality-grade longevity.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room and conference joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Credenza fascias, wall panel joinery, built-in storage and registration desk
                surfaces in Derby hotel meeting rooms. Particularly relevant for the Pride Park
                and A52 corridor business hotels with active corporate conferencing programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Derby hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room through void periods.</strong>{" "}
              Room-by-room working through the hotel&apos;s natural void pattern is our standard
              model across Derby. We work in rooms blocked by the revenue management team and
              clear each room within the agreed void window — typically same-day — before it
              returns to lettable inventory. Derby&apos;s business hotel market tends to peak mid-week,
              making weekend voids the most productive window for larger bedroom programmes.
            </p>
            <p>
              <strong className="text-foreground">Physical sample sign-off before any Derby work begins.</strong>{" "}
              We bring physical film samples to every Derby hotel survey — not swatches or
              digital images. The hotel brand, interior designer or GM signs off the specification
              on an actual sample before we commit to any purchasing or scheduling. No surprises
              on site.
            </p>
            <p>
              <strong className="text-foreground">White-label for Derby hotel fit-out contractors.</strong>{" "}
              All Derby hotel wrapping work operates white-label for fit-out contractors and
              FF&amp;E project managers. We attend under your company name, carry your documentation
              and provide photographic sign-off in your format. The hotel operator or brand sees
              your company throughout the Derby programme.
            </p>
            <p>
              <strong className="text-foreground">Multi-site East Midlands programmes.</strong>{" "}
              For fit-out contractors managing hotel wrapping programmes across Derby and the
              wider East Midlands — Nottingham, Leicester, Sheffield and Burton — we can combine
              into a single programme. Derby is centrally positioned for the East Midlands hotel
              market, reducing mobilisation costs significantly on multi-property contracts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby hotel wrapping — common questions
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
            Related hotel and Derby services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel wrapping applications, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior vinyl wrapping across Nottingham — 16 miles from Derby via the A52.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Hotel interior vinyl wrapping across Leicester — 30 miles south of Derby via the A6.</p>
            </Link>
            <Link href="/architectural-wrap-retail-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail vinyl wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, shopfitting surfaces and retail interior wrapping across Derby.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel interior refresh in Derby?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby hotel properties and provide a fixed-price scope co-ordinated
              to your void pattern and programme timeline. Tell us the surfaces, room count and
              deadline — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Derby Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
