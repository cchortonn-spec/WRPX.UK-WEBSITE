import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hotel Interior Vinyl Wrapping Birmingham | Bedroom, Reception & Surface Wrap | WRPX",
  description:
    "Hotel interior vinyl wrapping in Birmingham — bedroom furniture, reception desks, corridor doors, bathroom vanity panels and communal joinery wrapped in commercial-grade film. WRPX covers the Grand Hotel B3, Mailbox area B1, Jewellery Quarter B1, Brindleyplace B1 and all Birmingham hotel postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-hotels-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Hotel interior vinyl wrapping Birmingham — bedroom furniture, reception and surface wrap",
  "Architectural vinyl wrapping for hotel interiors across Birmingham and the West Midlands. Bedroom furniture, reception desks, bathroom vanity panels, corridor doors and communal joinery wrapped in commercial-grade architectural film. Grand Hotel B3, Colmore Row B3 hotel cluster, Mailbox B1, Jewellery Quarter B1, Brindleyplace B1, NEC B40, Solihull B90 and all Birmingham hotel postcodes. Room-by-room through void periods — no loss of room stock."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Hotel Interior Vinyl Wrapping", item: "https://www.wrpx.co.uk/architectural-wrap-hotels/" },
    { "@type": "ListItem", position: 4, name: "Birmingham Hotels", item: "https://www.wrpx.co.uk/architectural-wrap-hotels-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap hotel interiors in Birmingham city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover the full Birmingham hotel market including the city-centre cluster. Grand Hotel B3 on Colmore Row, the Mailbox B1 hotels, Jewellery Quarter B1 boutique properties, Brindleyplace B1 and Broad Street B1 corporate hotels — and all out-of-town Birmingham properties on the M6, M42 and M5 corridors. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6 Toll.",
      },
    },
    {
      "@type": "Question",
      name: "Which surfaces can you wrap in a Birmingham hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Birmingham survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work room by room without taking Birmingham hotel rooms out of service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — room-by-room through void periods is our standard model across Birmingham hotels. Each room is assessed, film applied to specification and cleared within the agreed void window. For larger Birmingham hotels running high room counts — the national budget brands around the NEC B40, Solihull B90 and the M6 corridor — we can provide dedicated teams to maintain throughput without disrupting the overall room count.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work white-label for a hotel fit-out company in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for all Birmingham hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Useful for fit-out contractors managing multi-site programmes across Birmingham and the West Midlands — Coventry, Wolverhampton, Solihull and Leicester within a single visit radius.",
      },
    },
    {
      "@type": "Question",
      name: "What areas around Birmingham do you also cover for hotel wrapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birmingham sits at the centre of the West Midlands motorway network. We combine Birmingham hotel programmes with Coventry (20 miles east via M6), Wolverhampton (12 miles west via M6), Solihull B90 (8 miles south-east), the NEC and airport cluster B40 (9 miles south-east), and Leicester (40 miles north-east via M6 and M1). One visit can cover multiple West Midlands hotel properties without separate mobilisation costs.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap hotel interiors in Birmingham city centre?",
    a: "Yes — we cover the full Birmingham hotel market including the city-centre cluster. Grand Hotel B3 on Colmore Row, the Mailbox B1 hotels, Jewellery Quarter B1 boutique properties, Brindleyplace B1 and Broad Street B1 corporate hotels — and all out-of-town Birmingham properties on the M6, M42 and M5 corridors. Travel time from our South Yorkshire base is approximately 1 hour 30 minutes via the M1 and M6 Toll.",
  },
  {
    q: "Which surfaces can you wrap in a Birmingham hotel?",
    a: "Bedroom furniture — wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and minibar unit doors. Bathroom vanity unit door faces and panel fronts. Reception and lobby desk fascias. Corridor door faces. Lift lobby feature panels. Restaurant and bar counter fascias. Communal area fitted joinery. We work to the hotel brand specification and bring physical samples to every Birmingham survey.",
  },
  {
    q: "Can you work room by room without taking Birmingham hotel rooms out of service?",
    a: "Yes — room-by-room through void periods is our standard model across Birmingham hotels. Each room is assessed, film applied to specification and cleared within the agreed void window. For larger Birmingham hotels running high room counts — the national budget brands around the NEC B40, Solihull B90 and the M6 corridor — we can provide dedicated teams to maintain throughput without disrupting the overall room count.",
  },
  {
    q: "Can you work white-label for a hotel fit-out company in Birmingham?",
    a: "Yes — white-label is standard for all Birmingham hotel fit-out and FF&E work. We attend under your company name, carry your paperwork and provide photographic sign-off in your format. The hotel operator or brand sees your company throughout. Useful for fit-out contractors managing multi-site programmes across Birmingham and the West Midlands — Coventry, Wolverhampton, Solihull and Leicester within a single visit radius.",
  },
  {
    q: "What areas around Birmingham do you also cover for hotel wrapping?",
    a: "Birmingham sits at the centre of the West Midlands motorway network. We combine Birmingham hotel programmes with Coventry (20 miles east via M6), Wolverhampton (12 miles west via M6), Solihull B90 (8 miles south-east), the NEC and airport cluster B40 (9 miles south-east), and Leicester (40 miles north-east via M6 and M1). One visit can cover multiple West Midlands hotel properties without separate mobilisation costs.",
  },
];

export default function ArchitecturalWrapHotelsBirminghamPage() {
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
            <span className="text-foreground">Birmingham Hotels</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Birmingham Hotels
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hotel interior vinyl wrapping in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps hotel interiors across Birmingham and the West Midlands. Bedroom furniture,
            reception desks, bathroom vanity panels, corridor doors and communal joinery wrapped
            in commercial-grade architectural film — room by room through void periods with no
            loss of room stock. Grand Hotel B3, Mailbox B1, Jewellery Quarter B1 boutique hotels,
            Brindleyplace B1, NEC B40 and all Birmingham postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Birmingham Hotel Programme →
            </Link>
            <Link href="/architectural-wrap-hotels/" className="btn-secondary">
              Hotel Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham hotel market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s hotel market — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the largest hotel market in England outside London, with over 10,000
              hotel rooms across the city and metropolitan area. The Commonwealth Games legacy
              investment and continued regeneration of the city centre — HS2, the Arena
              Birmingham expansion and the sustained growth of the MICE sector around the ICC
              and NEC — have driven a sustained programme of hotel investment and refurbishment
              that shows no sign of slowing.
            </p>
            <p>
              The city-centre hotel cluster is anchored by the Grand Hotel Birmingham on Colmore
              Row B3 — the landmark restored Victorian property that represents the top of
              Birmingham&apos;s independent luxury market — alongside a dense concentration of
              national full-service brands on Broad Street B1 and Brindleyplace B1 serving the
              corporate, events and conference market. These properties have high room counts and
              ongoing refurbishment needs; they run room-refresh programmes continuously rather
              than in periodic full-hotel closures.
            </p>
            <p>
              The Mailbox B1 and Jewellery Quarter B1 represent Birmingham&apos;s boutique and
              lifestyle hotel segment. These properties have smaller room counts but high design
              expectations and frequent refurbishment cycles driven by their design-literate
              guest base. Vinyl wrapping is particularly well suited here: bespoke finish
              specifications, rapid room turnaround and minimal disruption to trading are all
              well matched to the boutique hotel model.
            </p>
            <p>
              Birmingham&apos;s out-of-town hotel market — centred on the NEC and airport cluster B40,
              Solihull B90 and the M6/M42/M5 motorway corridors — runs the highest room volumes
              of any Birmingham segment. Budget and mid-market brands at these locations operate
              large room counts and structured maintenance cycles; vinyl wrapping is the standard
              cost-effective method for maintaining room presentation between full refurbishment
              intervals.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Birmingham hotel interiors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door faces, headboard panels, bedside unit fascias, desk surfaces and
                minibar unit doors — wrapped to the hotel brand specification in the colour and
                finish agreed at survey. Room-by-room through void periods across Birmingham.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bathroom vanity panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vanity unit door faces and panel fronts in Birmingham hotel bathrooms. Film
                specified for wet environment compatibility — moisture-resistant adhesive and
                film grade appropriate for bathroom use throughout the B postcode range.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and lobby desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and lobby desk panel faces — the first contact point for
                every Birmingham hotel guest. Overnight installation avoids disruption to
                check-in and check-out operations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and frames</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedroom corridor door faces — a high-traffic surface that accumulates scuffs and
                wear disproportionately fast. Wrapping corridor doors floor by floor overnight
                delivers a consistent hotel-wide refresh without removal or replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Restaurant and bar counter fascias, lounge fitted joinery, fitness room locker
                panels, meeting room joinery and lift lobby feature panels. Overnight
                installation maintains communal areas in operation throughout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Kitchenette surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door faces, drawer fronts and worktop surfaces in serviced apartment and
                extended-stay Birmingham hotel rooms. Film compatible with the cleaning and
                heat standards of hospitality kitchen environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Birmingham hotels
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Room-by-room through void periods.</strong>{" "}
              We work through the hotel&apos;s existing void programme — one room at a time, or
              in blocks where the Birmingham property&apos;s reservation system allows. Each room
              is assessed, film applied and the room cleared within the agreed void window.
              For a standard Birmingham budget hotel room, the furniture wrap programme
              typically completes in a half-day per room.
            </p>
            <p>
              <strong className="text-foreground">Working alongside other Birmingham trades.</strong>{" "}
              On refurbishment programmes where multiple contractors are on site — painters,
              decorators, soft furnishing teams — we integrate into the fit-out contractor&apos;s
              programme. Wrapping furniture and joinery after painting is complete and before
              soft furnishings are installed is the typical sequencing across Birmingham hotel
              projects.
            </p>
            <p>
              <strong className="text-foreground">White-label for Birmingham fit-out contractors.</strong>{" "}
              We operate white-label for hotel fit-out contractors and FF&amp;E procurement
              companies working across Birmingham and the West Midlands. We attend under your
              company name, carry your paperwork and provide photographic sign-off in your
              format. The hotel operator sees your brand throughout the Birmingham programme.
            </p>
            <p>
              <strong className="text-foreground">West Midlands combination programmes.</strong>{" "}
              Birmingham is the hub of the West Midlands motorway network. We combine Birmingham
              hotel work with Coventry (20 miles east via M6), Wolverhampton (12 miles west via
              M6), the NEC B40 and airport cluster (9 miles south-east via M42), and Leicester
              (40 miles north-east via M6 and M1). One visit, multiple hotel locations — no
              separate mobilisation per city.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Birmingham hotel operators and fit-out contractors choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">No lost room stock</h3>
              <p className="text-sm text-muted leading-relaxed">
                Room-by-room through void periods means Birmingham hotels maintain their available
                room count throughout the programme. No block closure, no block lost revenue —
                work proceeds at the pace of the void schedule.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Cost vs. replacement</h3>
              <p className="text-sm text-muted leading-relaxed">
                Film wrapping typically costs 20–40% of equivalent replacement furniture or
                joinery. For a Birmingham hotel refreshing 100 rooms, the saving over new
                furniture procurement is substantial — and the finish quality is indistinguishable
                from new at guest inspection distance.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Brand-matched finishes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Film is available in the finish specified by the hotel brand or interior designer
                — matched to the brand&apos;s approved colour palette where required. Physical samples
                brought to every Birmingham survey for sign-off before any material is committed.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">West Midlands reach</h3>
              <p className="text-sm text-muted leading-relaxed">
                Birmingham covers the West Midlands hotel market from a single mobilisation point.
                Coventry, Wolverhampton, Solihull and the NEC cluster all accessible without
                separate mobilisation costs — particularly efficient for hotel groups and fit-out
                contractors managing multi-property programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham hotel vinyl wrapping — common questions
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
            Related services in Birmingham
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-hotels/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel interior vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all hotel interior wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/hotel-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Solar control film, frosted privacy film and glass manifestation for Birmingham hotel glazing.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts and booth panels for Birmingham restaurant and bar interiors.</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Subcontract installer Birmingham</h3>
              <p className="mt-2 text-sm text-muted">White-label vinyl installation for sign companies, print houses and fit-out contractors across Birmingham.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a hotel room refresh in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We work room by room through your void programme across Birmingham and the
              West Midlands. Tell us the scope — surfaces, room count, brand specification
              and void access — and we&apos;ll price it.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Birmingham Hotel Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
