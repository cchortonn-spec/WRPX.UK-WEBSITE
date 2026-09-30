import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Birmingham | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Birmingham and the West Midlands — bedroom furniture surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Birmingham B postcodes and wider West Midlands covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Birmingham — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Birmingham and the West Midlands. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-birmingham/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Birmingham care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Birmingham care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access in their room. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last in Birmingham?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey — bedroom furniture and low-contact corridor doors receive a different specification to high-contact counter fascias. All edges are sealed to the manufacturer's specification, which is the single most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Birmingham care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a small fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Birmingham care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Do you work with CQC-registered care homes and nursing homes in Birmingham?",
    a: "Yes — we work with CQC-registered care homes, nursing homes and residential care facilities across Birmingham and the wider West Midlands. Our scheduling approach is designed to work within the care environment: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Birmingham care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "Which Birmingham and West Midlands postcodes do you cover for care home wrapping?",
    a: "We cover all Birmingham postcodes for care home vinyl wrapping — from city-centre B1/B5 through to the outer Birmingham postcode area. Key care home areas include: Edgbaston B15/B16 (established residential care homes in south-west Birmingham), Selly Oak B29 (high density of residential and nursing homes near QE hospital), Moseley B13, Kings Heath B14, Hall Green B28, Shirley B90 and Solihull B91 (south Birmingham care home belt), Harborne B17, Northfield B31, Longbridge B45, Rubery B45, Sutton Coldfield B72/B73/B74/B75 (north Birmingham), Erdington B23/B24, Aston B6, Handsworth B21, Wylde Green B72 and the wider West Midlands — Sandwell, Dudley DY, Wolverhampton WV, Walsall WS and Coventry CV postcodes are all within our standard reach from South Yorkshire, approximately 1 hour from Birmingham city centre via the M1 and M6.",
  },
];

export default function CareHomeWrapBirminghamPage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-care-homes/" className="text-accent hover:underline">Vinyl Wrapping for Care Homes</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across Birmingham
            and the West Midlands. Bedroom furniture surfaces, corridor doors, nurses&apos;
            station counters, communal lounge panels and dining room furniture wrapped
            without replacement — no noise, no wet trades, rooms usable the same day.
            Resident-sensitive scheduling as standard. All Birmingham B postcodes and
            the wider West Midlands area covered. Approximately 1 hour from our South
            Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Care homes across Birmingham — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the UK&apos;s second city with a population of over 1.1 million
              in the city itself and more than 2.9 million across the wider West Midlands
              Combined Authority area. The care home sector reflects this population
              density: there are hundreds of registered residential care homes, nursing
              homes and specialist care facilities across the Birmingham postcode area
              and the surrounding Sandwell, Dudley, Wolverhampton, Walsall and Solihull
              districts.
            </p>
            <p>
              South-west Birmingham has a particularly notable care home concentration.
              Edgbaston B15/B16 — with its Victorian and Edwardian semi-detached housing
              and established residential character — has a high density of converted
              residential care homes and purpose-built nursing homes. Selly Oak B29, close
              to the Queen Elizabeth Hospital campus, is another dense care home area
              reflecting the long-established health and social care infrastructure in
              that part of the city. Moseley B13, Kings Heath B14, Hall Green B28,
              Shirley B90 and Solihull B91 extend a continuous south Birmingham care
              home belt.
            </p>
            <p>
              Across this geography, the challenge facing care home operators is
              consistent: bedroom furniture and communal area surfaces installed 10 to
              20 years ago are structurally sound but visually dated or surface-damaged.
              Replacing furniture in occupied care home bedrooms is expensive, disruptive
              and requires residents to be temporarily relocated — a significant operational
              and wellbeing challenge. Vinyl wrapping resolves this directly.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Birmingham
              city centre via the M1 south and M6 north. Birmingham is one of our primary
              service markets — we can mobilise for survey visits and multi-week West
              Midlands care home programmes without the overhead of a more distant
              contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Birmingham care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full wardrobe door panel faces — the most visible and most frequently
                refreshed surface in care home bedroom refurbishment programmes.
                Commercial film transforms faded or chipped doors without any removal
                or replacement work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door and drawer front panels — high contact with
                cleaning products and daily resident use. Commercial film seals edges
                to resist moisture ingress from regular wiping.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Nurses&apos; station counters
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia panels on nurses&apos; station desks — high-contact
                surfaces in constant daily use. Heavy-duty commercial-grade film
                specified for all counter and worktop-adjacent applications.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Dining room furniture
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining table edge wrapping, chair back panels and sideboard unit fronts.
                Wrapping is carried out between meal services — no disruption to the
                dining programme, and surfaces are usable on the same day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                TV unit fronts, media wall panels, storage unit doors and fixed lounge
                seating back panels in communal sitting rooms. High-durability film
                specified for all communal contact surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom door leaf panels and utility room door faces.
                Wrapped during occupancy hours without access to the room — corridor
                door face work does not require resident access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why wrap vs replace */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wrap vs replace — the care home case
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Replacing bedroom furniture in a Birmingham care home means sourcing new
              units, organising delivery, removing old furniture — which typically
              involves temporarily relocating the resident — and waiting for the new
              furniture to be assembled and positioned. For a 40-bedroom home, that is
              40 individual bedroom disruptions, 40 disposal jobs and a procurement
              cost running to five or six figures.
            </p>
            <p>
              Vinyl wrapping requires none of that. We bring the materials, work in
              the room for 2 to 3 hours while the resident is at a meal or in the lounge,
              and leave a fully refreshed bedroom suite with no removal, no delivery,
              no assembly, no disruption to the resident&apos;s routine. The surface
              quality of a well-applied commercial film is excellent — the finish is
              consistent and durable in a way that budget replacement furniture often
              is not.
            </p>
            <p>
              For Birmingham care home operators — whether independent single-site homes
              in Edgbaston or Selly Oak, or large group operators with multiple homes
              across the West Midlands B, DY, WV, WS and CV postcode area — the cost
              and operational case for wrapping over replacement is consistent across
              every size of programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham care home wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Birmingham care homes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all care home vinyl wrap applications, surfaces, film spec and scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Manchester and Greater Manchester care homes — bedroom furniture, nurses&apos; stations and communal areas.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Nottingham and Nottinghamshire care homes — bedroom furniture, nurses&apos; stations and communal surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Leeds</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Leeds and West Yorkshire care homes — bedroom furniture, corridor doors and communal surfaces.</p>
            </Link>
            <Link href="/window-film/care-home-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for care homes</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for care home bedrooms and shared spaces — solar control for south-facing lounges and dining rooms.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham hotels — guest room furniture, reception desks, corridor doors and communal surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Birmingham care home refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of bedrooms, the surfaces and the access window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately 1 hour
              from Birmingham via the M1 and M6 — no significant mobilisation overhead
              on West Midlands care home work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Birmingham Survey →
              </Link>
              <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
                Care Home Wrap Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
