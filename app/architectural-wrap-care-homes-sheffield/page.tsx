import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care Home Vinyl Wrapping Sheffield | Bedroom Furniture & Interior Surfaces | WRPX",
  description:
    "Architectural vinyl wrapping for care homes and nursing homes across Sheffield and South Yorkshire — bedroom furniture surfaces, corridor doors, nurses' station counters, communal lounge panels and dining room furniture wrapped without replacement. Resident-sensitive scheduling, no construction noise, no wet trades.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-care-homes-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Care home vinyl wrapping Sheffield — bedroom furniture, communal areas and interior surfaces",
  "Architectural vinyl wrapping for care homes and nursing homes across Sheffield and South Yorkshire. Bedroom wardrobe door panels, bedside cabinet surfaces, corridor doors, nurses' station counter fascias, dining room furniture panels and communal lounge surfaces wrapped in commercial-grade film. Resident-sensitive scheduling, no construction noise, no wet trades, rooms usable the same day."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Care Homes", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/architectural-wrap-care-homes-sheffield/" },
  ],
};

const faqItems = [
  {
    q: "Which surfaces in Sheffield care homes can be vinyl wrapped?",
    a: "Bedroom wardrobe door panels, bedside cabinet surfaces, chest of drawer fronts, corridor door panels, skirting board covers, nurses' station counter fascias, dining room table edges and chair backs, communal lounge unit fronts and media wall panels, reception desk fascias and entrance cladding panels. Any flat or near-flat substrate in sound condition can typically be wrapped. We assess at survey and advise on any surface that needs preparation or is unsuitable.",
  },
  {
    q: "Can wrapping be done in occupied rooms in Sheffield care homes?",
    a: "Yes, with a small window of access. Wrapping a full bedroom suite typically takes 2 to 3 hours. We co-ordinate with care staff to access each room when the resident is in a communal area or has agreed to brief supervised access. Adhesive is water-based and odour-free. Tools are hand squeegees and a low-temperature heat gun — no louder than normal conversation. Rooms are fully usable immediately after we leave. No wet paint, no drying time, no displaced residents overnight.",
  },
  {
    q: "How long does care home vinyl wrapping last in Sheffield?",
    a: "Commercial-grade architectural vinyl applied to care home bedroom furniture typically delivers 7 to 10 years before showing wear on normal surfaces. Communal areas — nurses' stations, dining room furniture and lounge panels — have higher contact frequency and are typically assessed at 5 to 8 years. We specify film grades matched to the surface type and contact level at survey — bedroom furniture and low-contact corridor doors receive a different specification to high-contact counter fascias. All edges are sealed to the manufacturer's specification, which is the single most important factor in longevity on care home surfaces where regular cleaning with commercial cleaning products is standard.",
  },
  {
    q: "Is vinyl wrapping cheaper than replacement for Sheffield care homes?",
    a: "Yes — significantly cheaper in almost every case. Wrapping a full bedroom suite — wardrobe, bedside cabinet, chest of drawers — typically costs a small fraction of what new furniture replacement would cost, with no disposal fees, no delivery disruption and no room downtime beyond the 2 to 3 hours of installation. For a Sheffield care home looking to refresh 20, 30 or 40 bedrooms, the cost saving versus furniture replacement can run into tens of thousands of pounds. Corridor doors, communal lounge panels and dining room furniture follow the same cost ratio. Wrapping is not a budget substitute for replacement — it delivers a superior outcome in most cases because the surface quality of a well-applied commercial film is consistent and durable in a way that budget replacement furniture often is not.",
  },
  {
    q: "Do you work with CQC-registered care homes and nursing homes in Sheffield?",
    a: "Yes — we work with CQC-registered care homes, nursing homes and residential care facilities across Sheffield and South Yorkshire. Our scheduling approach is designed to work within the care environment: we co-ordinate access times with care management, use only odour-free adhesives, keep noise to a minimum and clear up completely on the day. We can provide RAMS (Risk Assessment and Method Statements) documentation for any Sheffield care home contract as standard. Photographic sign-off is provided on completion.",
  },
  {
    q: "Which Sheffield and South Yorkshire care homes and care providers do you cover?",
    a: "We cover all Sheffield postcodes for care home vinyl wrapping — city-centre S1, north Sheffield S5/S6 (Hillsborough, Parson Cross, Southey), east Sheffield S9/S12 (Attercliffe, Darnall, Handsworth), south Sheffield S7/S8/S11 (Millhouses, Woodseats, Dore, Beauchief), west Sheffield S10/S11/S17 (Broomhill, Fulwood, Dore) and the wider South Yorkshire area including Rotherham, Barnsley, Doncaster and Chesterfield. We work with large care providers operating multiple Sheffield homes as well as independent single-site operators — the programme scope and scheduling are adapted to each client.",
  },
];

export default function CareHomeWrapSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Care Home Vinyl Wrapping · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Care home vinyl wrapping — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Architectural vinyl wrapping for care homes and nursing homes across Sheffield
            and South Yorkshire. Bedroom furniture surfaces, corridor doors, nurses&apos; station
            counters, communal lounge panels and dining room furniture wrapped without
            replacement — no construction noise, no wet trades, rooms usable the same day.
            WRPX is based in South Yorkshire and Sheffield is our home market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Survey →
            </Link>
            <Link href="/architectural-wrap-care-homes/" className="btn-secondary">
              Care Home Wrap Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why wrapping in care environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why vinyl wrapping works in Sheffield care homes
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Care homes face a specific challenge that most other commercial properties
              do not: the need to improve and maintain interior surfaces in a live, occupied
              environment where residents cannot simply be moved out during refurbishment.
              Traditional approaches — painting, replacement — require noise, fumes, drying
              time and disruption that is genuinely problematic in a care environment.
            </p>
            <p>
              Vinyl wrapping solves this. A bedroom wardrobe or chest of drawers can be
              wrapped in 2 to 3 hours while the resident has lunch or is in a communal area.
              The adhesive is water-based and completely odour-free. The tools — squeegees
              and a low-temperature heat gun — are quieter than a vacuum cleaner. The room
              is ready to use the moment we leave. There is no wet paint to dry, no
              furniture to dispose of, no construction noise to manage around residents
              with dementia or sensory sensitivities.
            </p>
            <p>
              For Sheffield care homes looking to refresh interiors — whether as part of
              a planned maintenance cycle, a CQC improvement programme, or a general
              upgrade before inspection — vinyl wrapping provides the most practical path
              to a renewed appearance that is consistent with continued safe operation
              of the home.
            </p>
            <p>
              WRPX is based in South Yorkshire. Sheffield is our home market — we can
              attend for surveys quickly, mobilise without excessive travel overhead, and
              respond to urgent work at short notice in a way that a more distant contractor
              cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Surfaces we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Surfaces we wrap in Sheffield care homes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedroom wardrobe doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wardrobe door panel faces, side panels and drawer fronts on bedroom
                furniture suites — refreshed with wood-grain, stone-effect or solid
                colour film to match your interior specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Bedside cabinet surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cabinet door panels, drawer fronts and top surfaces on bedside and
                overbed units — the surfaces residents interact with most in their
                personal space.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Nurses&apos; station counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascias, desk front panels and work surface edges on nurses&apos;
                station and staff desk units — high-contact surfaces where consistent
                appearance matters most.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Communal lounge panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                TV cabinet fronts, storage unit panels, media wall surfaces and fixed
                lounge furniture faces — wrapped during low-occupancy periods or
                room by room to minimise disruption.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor-facing bedroom door panels, fire door leaf faces and utility
                door panels — a systematic corridor wrap programme refreshes the
                entire visual environment of the home quickly and quietly.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dining room furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Dining chair back panels, sideboard fascias, serving counter fronts
                and fixed banquette panels — refreshed without the noise and
                disruption of replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield care home coverage
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We cover care homes across all Sheffield postcodes and the wider South
              Yorkshire area. Sheffield has a significant number of care homes and nursing
              homes spread across every part of the city — from city-centre S1 and
              inner-city S2/S3/S4 homes through to the suburban and semi-rural care homes
              across S7, S8, S10, S11, S17 in south and west Sheffield, S5 and S6 in
              north Sheffield, and S9 and S12 across east Sheffield.
            </p>
            <p>
              South Yorkshire beyond Sheffield — Rotherham S60/S65/S66, Barnsley S70/S71/S75,
              Doncaster DN1/DN2/DN4 — is fully within our standard coverage. We also cover
              Chesterfield S40/S41/S44 in north Derbyshire and the Peak District fringe.
              For care home operators running multiple homes across South Yorkshire, we can
              co-ordinate multi-site programmes to reduce survey and mobilisation cost per
              site.
            </p>
            <p>
              WRPX provides RAMS documentation for all care home contracts, photographic
              sign-off on completion, and can work within any reasonable scheduling
              framework set by the home manager — whether that means specific floor-by-floor
              programmes, room-by-room scheduling around individual residents, or phased
              work across multiple visits.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield care home wrap — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Sheffield care homes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-care-homes/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Care home vinyl wrapping — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all care home vinyl wrap applications, surfaces, film specification and process.</p>
            </Link>
            <Link href="/window-film/care-home-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for care homes</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film for en-suite windows, solar control for overheating lounges, and manifestation for glazed doors.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel vinyl wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Architectural wrap for Sheffield hotels — similar applications to care homes but for hospitality environments.</p>
            </Link>
            <Link href="/commercial/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Commercial vinyl installation Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Full commercial graphics and vinyl installation services across Sheffield and South Yorkshire.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Vinyl wrapping for your Sheffield care home?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the home, the surfaces and the access constraints — we&apos;ll survey,
              scope and price the programme around your care environment. WRPX is based
              in South Yorkshire, so Sheffield surveys are straightforward to arrange.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Sheffield Survey →
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
