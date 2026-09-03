import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Leicester | Kitchen, Furniture & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Leicester — kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped to commercial specification. WRPX covers Leicester city centre, Highcross, De Montfort University area, LE1–LE9 and the wider East Midlands hotel market.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Leicester — surfaces, furniture and fit-out",
  "Architectural vinyl wrapping for hotel interiors in Leicester and Leicestershire. Kitchen surfaces, bedroom furniture, reception desks, corridor doors and communal areas wrapped in commercial-grade architectural film. Leicester city centre LE1, Highcross LE1, De Montfort University area LE1/LE2, Fosse Park LE3, Grove Park LE19 and across the East Midlands M1 corridor. Installation during void periods, out-of-hours access, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Leicester Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work in Leicester city centre hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we run regular installations across Leicester. We cover LE1 city centre hotels, the Highcross and Granby Street hotel cluster, De Montfort University conference and hotel facilities, and the wider Leicester and Leicestershire hotel market. Leicester is approximately 1 hour 15 minutes from our South Yorkshire base via the M1 J21.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work as a subcontractor for our hotel fit-out company in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
      },
    },
    {
      "@type": "Question",
      name: "Which hotel surfaces do you wrap in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias. Kitchen surfaces — doors, drawer fronts, worktops where flat-film wrap is suitable. Bathroom vanity units and panel faces. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Communal area fitted furniture and joinery. We work to the hotel brand specification and provide samples for sign-off before any material is committed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work without taking Leicester hotel rooms out of service for long?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — bedroom furniture wrapping typically works room by room through void periods or during a planned refurbishment window. We can work alongside other trades and clear each room within the void period agreed with the hotel. For larger Leicester hotels — national budget brands, serviced apartments and conference hotels — we can provide dedicated teams to maintain a steady throughput without disrupting the overall room count.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover out-of-town and business-park Leicester hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Leicester hotel market, including out-of-town properties on the M1 J21 corridor, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19 and the A563 ring road. Budget and mid-market hotel brands in these locations regularly schedule room refresh programmes using vinyl wrapping — it is the most cost-effective way to update bedroom furniture between full refurbishment cycles.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you work in Leicester city centre hotels?",
    a: "Yes — we run regular installations across Leicester. We cover LE1 city centre hotels, the Highcross and Granby Street hotel cluster, De Montfort University conference and hotel facilities, and the wider Leicester and Leicestershire hotel market. Leicester is approximately 1 hour 15 minutes from our South Yorkshire base via the M1 J21.",
  },
  {
    q: "Can you work as a subcontractor for our hotel fit-out company in Leicester?",
    a: "Yes — white-label by default. We attend under your fit-out company's name, carry your paperwork and report back to your project manager. The hotel operator or brand sees your company throughout. Photographic sign-off provided at handover in whatever format your project requires.",
  },
  {
    q: "Which hotel surfaces do you wrap in Leicester?",
    a: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias. Kitchen surfaces — doors, drawer fronts, worktops where flat-film wrap is suitable. Bathroom vanity units and panel faces. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Communal area fitted furniture and joinery. We work to the hotel brand specification and provide samples for sign-off before any material is committed.",
  },
  {
    q: "Can you work without taking Leicester hotel rooms out of service for long?",
    a: "Yes — bedroom furniture wrapping typically works room by room through void periods or during a planned refurbishment window. We can work alongside other trades and clear each room within the void period agreed with the hotel. For larger Leicester hotels — national budget brands, serviced apartments and conference hotels — we can provide dedicated teams to maintain a steady throughput without disrupting the overall room count.",
  },
  {
    q: "Do you cover out-of-town and business-park Leicester hotels?",
    a: "Yes — we cover the full Leicester hotel market, including out-of-town properties on the M1 J21 corridor, Fosse Park LE3, Grove Park LE19, Meridian Business Park LE19 and the A563 ring road. Budget and mid-market hotel brands in these locations regularly schedule room refresh programmes using vinyl wrapping — it is the most cost-effective way to update bedroom furniture between full refurbishment cycles.",
  },
];

export default function ArchitecturalWrapHotelsLeicesterPage() {
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
            <span className="text-foreground">Leicester Hotels</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Leicester Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps hotel interiors across Leicester and Leicestershire. Bedroom furniture,
            kitchen surfaces, reception desks, corridor doors and communal areas wrapped in
            commercial-grade architectural film — working room by room through void periods
            with no loss of room stock. We cover the full LE postcode zone and East Midlands
            M1 corridor hotel market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Leicester Hotel Programme →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester hotel market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s hotel market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester&apos;s hotel market divides cleanly between city-centre LE1 properties
              targeting leisure and business guests, and out-of-town budget and mid-market
              hotels on the M1 J21 corridor, Fosse Park LE3 and the outer ring road business
              parks. Both segments are active markets for interior refurbishment using
              vinyl wrapping.
            </p>
            <p>
              The city-centre LE1 cluster — grouped around Granby Street, Highcross and
              the Waterside regeneration area — includes independent boutique hotels,
              national mid-market brands and serviced apartment blocks catering to the
              city&apos;s growing conference and events market. The city&apos;s two universities —
              De Montfort LE1/LE2 and University of Leicester LE1 — generate significant
              extended-stay and conference demand that drives room refresh cycles.
            </p>
            <p>
              Leicester&apos;s large South Asian community and its diverse food and cultural
              offering has built a strong leisure tourism market over the past decade,
              bringing a broader range of guests to city hotels and raising the bar on
              interior presentation. Wrapping dated bedroom furniture and reception joinery
              is a practical and cost-effective way for Leicester hotel operators to respond
              to rising guest expectations without committing to a full room replacement
              programme.
            </p>
            <p>
              Out-of-town hotels on the M1 J21 corridor — the dense cluster of budget and
              mid-market brands at Fosse Park LE3, Grove Park LE19 and Meridian Business
              Park LE19 — generate the highest volume of room-refresh work. These hotels
              run large room counts and structured maintenance cycles; vinyl wrapping bedroom
              furniture is the standard method for maintaining room presentation between
              full refurbishment intervals.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leicester hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces
                and minibar unit doors. Film applied in the colour and finish specified by
                the hotel brand or owner. Room-by-room through void periods across Leicester.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Kitchen and kitchenette surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen door faces, drawer fronts and worktops in serviced apartments and
                extended-stay rooms across Leicester LE1 and the Waterside area. Film
                compatible with the cleaning and heat standards of hospitality kitchen use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bathroom vanity panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vanity unit door faces and panel fronts in Leicester hotel bathrooms. Film
                specified for wet environment compatibility — moisture-resistant adhesive
                and film grade appropriate for bathroom use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and lobby desk panel faces across Leicester city
                centre and out-of-town hotels. Overnight installation on the reception desk
                avoids disruption to check-in and check-out operations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedroom corridor door faces — a high-traffic surface that shows wear
                disproportionately fast. Wrapping corridor doors overnight floor by floor
                delivers a consistent refresh across the entire hotel circulation without
                removal or replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Restaurant and bar counter fascias, lounge fitted joinery, fitness room
                locker panels and meeting room joinery across Leicester hotels. Overnight
                installation keeps communal areas operational throughout the programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Leicester hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room through void periods.</strong>{" "}
              We work one room at a time through the hotel&apos;s existing void programme.
              Each room is assessed, film is applied to specification and the room is
              cleared and handed back within the agreed void window. For a standard
              Leicester budget hotel room, the furniture wrap programme typically completes
              in half a day per room.
            </p>
            <p>
              <strong className="text-foreground">Working alongside other trades.</strong>{" "}
              On larger Leicester hotel refurbishment programmes, we integrate with the
              main fit-out contractor&apos;s programme — wrapping furniture and joinery after
              painting is complete and before soft furnishings are installed. Our team
              is experienced working in sequenced multi-trade programmes.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors.</strong>{" "}
              We operate white-label for hotel fit-out contractors and FF&amp;E procurement
              companies working across Leicester and the East Midlands. We attend under
              your company name, carry your paperwork and provide photographic sign-off
              in your format. The hotel operator sees your brand throughout.
            </p>
            <p>
              <strong className="text-foreground">M1 corridor combination programmes.</strong>{" "}
              Leicester sits on the Sheffield–Nottingham–Leicester M1 corridor. We can combine
              a Leicester hotel programme with Nottingham (30 miles north via M1 J25) or
              Coventry (30 miles south-west via M69) work in the same visit — reducing
              mobilisation cost for hotel fit-out contractors with East Midlands portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester hotel wrapping — common questions
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
            Related services in Leicester
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Solar control, privacy film and glass manifestation for Leicester hotel glazing.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts and fitted surfaces for Leicester restaurant and bar interiors.</p>
            </Link>
            <Link href="/architectural-wrap-retail-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior wrapping Leicester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leicester retail counters, fixtures and display surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel room refresh in Leicester?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We work room by room through your void programme across Leicester and
              Leicestershire. Tell us the scope — surfaces, room count, brand specification
              and void access — and we&apos;ll price it.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Leicester Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
