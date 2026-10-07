import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Coventry | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Coventry and Warwickshire — bedroom furniture surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day. All Coventry CV postcodes and wider Warwickshire covered.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Coventry — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Coventry and Warwickshire. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-coventry/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Coventry care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound structural condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable for film application.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Coventry care homes?",
    a: "Yes, with a small window of access per room. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area, at a meal, or has agreed to brief supervised access in their room. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last in Coventry?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal-use surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey. All edges are sealed to the manufacturer's specification, which is the most important factor in longevity on care home surfaces where regular cleaning with commercial products is standard practice.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Coventry care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Coventry care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio.",
  },
  {
    q: "Do you work with CQC-registered care homes and nursing homes in Coventry?",
    a: "Yes — we work with CQC-registered care homes, nursing homes and residential care facilities across Coventry and Warwickshire. Our scheduling approach is designed to work within the care environment: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Coventry care home contract as standard. Photographic sign-off is provided on completion for each surface area or bedroom.",
  },
  {
    q: "Which Coventry and Warwickshire postcodes do you cover for care home wrapping?",
    a: "We cover all Coventry CV postcodes for care home vinyl wrapping — CV1 (city centre), CV2 (Cheylesmore, Stoke, Binley, Wyken), CV3 (Tile Hill, Canley, Green Lane, Willenhall), CV4 (Westwood, Cannon Park), CV5 (Earlsdon, Chapelfields, Allesley), CV6 (Radford, Holbrooks, Longford, Coundon), plus wider Warwickshire — Kenilworth CV8, Leamington Spa CV31/CV32, Warwick CV34, Rugby CV21/CV22 and the north Warwickshire NW postcodes. WRPX is based in South Yorkshire, approximately 1 hour from Coventry via the M1 south and M6 south — one of our most accessible service markets.",
  },
];

export default function CareHomeWrapCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Coventry &amp; Warwickshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across Coventry
            and Warwickshire. Bedroom furniture surfaces, corridor doors, nurses&apos;
            station counters, communal lounge panels and dining room furniture wrapped
            without replacement — no noise, no wet trades, rooms usable the same day.
            Resident-sensitive scheduling as standard. All Coventry CV postcodes and
            the wider Warwickshire area covered. Approximately 1 hour from our South
            Yorkshire base via the M1 south and M6 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry care home context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Care homes across Coventry — the refurbishment challenge
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is a city of around 370,000 people — one of the larger cities in
              the West Midlands Combined Authority area — with a care home sector that
              reflects both its population density and its age profile. The city has a
              significant stock of registered residential care homes, nursing homes and
              specialist care facilities spread across all six CV postcode areas.
            </p>
            <p>
              Earlsdon CV5 and Chapelfields CV5 — established residential neighbourhoods
              in the south-west of Coventry — have a notable concentration of converted
              residential care homes and purpose-built nursing homes, reflecting their
              demographic profile and the quality of the existing housing stock in
              those areas. Cheylesmore CV3 and Stoke CV2 carry similar density, with
              a mix of older and more recently built facilities serving the south and
              east of the city.
            </p>
            <p>
              The University Hospital Coventry and Warwickshire (UHCW) campus at
              Walsgrave CV2 anchors a cluster of care facilities in the north-east
              of the city — nursing homes and residential care homes benefiting from
              proximity to hospital services tend to cluster in and around the CV2
              postcode area along the A4600 corridor.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Coventry
              via the M1 south and M6 south at Junction 2 (Coventry south) or
              Junction 3 (Coventry/Kenilworth). Coventry is one of our closest and
              most accessible Midlands service markets, with no significant travel
              overhead on multi-day care home programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Coventry care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedroom wardrobe doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full wardrobe door panel faces — the most visible and most frequently
                refreshed surface in care home bedroom refurbishment programmes.
                Commercial film transforms faded or chipped doors without removal
                or replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Bedside cabinet panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bedside cabinet door and drawer front panels — high contact with
                cleaning products and daily resident use. Commercial film seals
                edges to resist moisture ingress from regular wiping.
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
                Dining table edge wrapping, chair back panels and sideboard unit
                fronts. Wrapping is carried out between meal services — no
                disruption to the dining programme, surfaces usable the same day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Communal lounge panels
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                TV unit fronts, media wall panels, storage unit doors and fixed
                lounge seating back panels in communal sitting rooms. High-durability
                film specified for all communal contact surfaces.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Corridor doors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom door leaf panels and utility room door
                faces. Wrapped during occupancy hours without access to the room
                — corridor door face work does not require resident access.
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
              Replacing bedroom furniture in a Coventry care home means sourcing new
              units, organising delivery, removing old furniture — which typically
              involves temporarily relocating the resident — and waiting for the new
              furniture to be assembled and positioned. For a 30 or 40-bedroom home,
              that is 30 or 40 individual bedroom disruptions, 30 or 40 disposal jobs
              and a procurement cost running to five figures minimum.
            </p>
            <p>
              Vinyl wrapping requires none of that. We bring the materials, work in
              the room for 2 to 3 hours while the resident is at a meal or in the
              lounge, and leave a fully refreshed bedroom suite with no removal, no
              delivery, no assembly and no disruption to the resident&apos;s routine.
              The surface quality of a well-applied commercial film is excellent —
              consistent and durable in a way that budget replacement furniture often
              is not.
            </p>
            <p>
              For Coventry care home operators — whether independent single-site homes
              in Earlsdon CV5 or Cheylesmore CV3, or group operators with multiple
              facilities across the Coventry CV and wider Warwickshire postcode area
              — the cost and operational case for wrapping over replacement is
              consistent across every size of programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry care home wrapping — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Coventry care homes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all care home vinyl wrap applications, surfaces, film spec and scheduling.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Birmingham and West Midlands care homes — bedroom furniture, nurses&apos; stations and communal areas.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Nottingham and Nottinghamshire care homes — bedroom furniture, nurses&apos; stations and communal surfaces.</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Manchester and Greater Manchester care homes — bedroom furniture and communal areas.</p>
            </Link>
            <Link href="/window-film/care-home-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for care homes</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for care home bedrooms and shared spaces — solar control for south-facing lounges and dining rooms.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Coventry hotels — guest room furniture, reception desks, corridor doors and communal surfaces.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Coventry care home refurbishment enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the number of bedrooms, the surfaces and the access window — we&apos;ll
              survey, scope and price the programme for you. WRPX is approximately 1 hour
              from Coventry via the M1 south and M6 — no significant mobilisation overhead
              on Coventry or Warwickshire care home work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Coventry Survey →
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
