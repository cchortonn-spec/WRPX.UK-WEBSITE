import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Middlesbrough | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Middlesbrough and Teesside — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Teesside University sports facilities, Teesside Arena, Bannatyne Middlesbrough and all TS postcode gyms. Approximately 1 hour 30 minutes from our South Yorkshire base.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Middlesbrough — frosted, solar control, manifestation and privacy film for Middlesbrough gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Middlesbrough and Teesside. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Teesside University sports facilities TS1, Teesside Arena, Bannatyne Middlesbrough, Gym Group Middlesbrough and all Middlesbrough and Tees Valley TS postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Middlesbrough", item: "https://www.wrpx.co.uk/window-film/gym-window-film-middlesbrough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Middlesbrough gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Middlesbrough gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare across Middlesbrough gym and leisure centre sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across independent and chain Middlesbrough operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Middlesbrough and Tees Valley TS postcodes. Teesside University sports facilities on the TS1 campus serve approximately 17,000 students — a large on-campus gym and sports complex with changing rooms, studio spaces and glazed gym areas requiring professional window film specification. Teesside Arena — a large multi-use venue in the TS1 town centre zone — has gym, fitness and health club provision with glazed frontages suited to solar-control and manifestation film. Bannatyne operates a prominent Middlesbrough health club with gym, pool and studio spaces where frosted film and DDA manifestation are standard requirements. The Gym Group and other national chain operators run Middlesbrough locations across the TS postcode area. The growing independent personal training and boutique fitness market across Middlesbrough and the wider Tees Valley also generates regular window film demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Middlesbrough gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19. Survey visits for Middlesbrough gyms can typically be arranged within a few days of enquiry. A typical Middlesbrough gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Middlesbrough personal training studios or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Middlesbrough gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Middlesbrough gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Middlesbrough gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Middlesbrough gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Middlesbrough gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Middlesbrough and the Tees Valley. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For multi-site national gym chain operators managing Middlesbrough locations within a wider UK window film programme, our South Yorkshire base means Middlesbrough sits conveniently alongside Newcastle, Durham, Leeds and Sheffield in a coherent North East and Yorkshire mobilisation plan. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough and Tees Valley postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Middlesbrough and Tees Valley TS postcodes — TS1 (Middlesbrough town centre: Teesside University campus sports facilities; Teesside Arena; town-centre chain gym and independent studio market), TS2 (Middlesbrough riverside: riverside regeneration zone with commercial and leisure development), TS3 (East Middlesbrough: Brambles Farm, Ormesby — residential suburban gym and leisure provision), TS4 (Marton Road, Longlands: James Cook University Hospital zone — commercial gym and health club provision south of the town centre), TS5 (Acklam, Linthorpe — south-west Middlesbrough residential leisure zone including Middlesbrough Sports Village), TS6 (Eston, Grangetown — east Teesside residential gym and leisure provision), TS7 (Marton, Coulby Newham — south Middlesbrough residential gym zone including Coulby Newham leisure development). Wider Tees Valley including Stockton-on-Tees TS18, Thornaby TS17, Billingham TS23 and Redcar TS10 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Middlesbrough via the A1(M) and A19.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmMiddlesbroughPage() {
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/gym-window-film/" className="text-accent hover:underline">Window Film for Gyms</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Middlesbrough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Middlesbrough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Middlesbrough and the Tees Valley. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. Teesside University sports facilities, Teesside
            Arena, Bannatyne Middlesbrough and all TS postcode gym and leisure
            facilities. Approximately 1 hour 30 minutes from our South Yorkshire
            base via the A1(M) and A19.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Middlesbrough Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Middlesbrough gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough has a well-established gym and leisure market supported
              by Teesside University&apos;s campus of approximately 17,000 students
              in the TS1 town centre, a large permanent residential population
              across the Tees Valley, and significant public leisure infrastructure
              including Middlesbrough Sports Village in TS5 — the borough&apos;s major
              purpose-built leisure complex with gym, pool, sports hall and fitness
              studios.
            </p>
            <p>
              Teesside University&apos;s on-campus sports facilities generate consistent
              window film demand for changing rooms, studio observation panels and
              glazed gym frontages. The university sports complex is one of the
              larger single-site gym window film opportunities in the Middlesbrough
              area, with a student user base creating year-round demand for well-
              maintained privacy and manifestation installations.
            </p>
            <p>
              The national chain gym sector — Bannatyne, The Gym Group and others
              — has a presence across the Middlesbrough and Tees Valley TS postcode
              area, with gyms in the town centre and suburban retail park locations
              that regularly require frosted film, DDA manifestation and solar-control
              film as part of ongoing facilities maintenance and refurbishment
              programmes.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Middlesbrough via the A1(M) and A19. Middlesbrough gyms benefit
              from straightforward mobilisation alongside our existing North East
              coverage of Newcastle and Durham.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Middlesbrough
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Middlesbrough gyms. Humidity-resistant adhesive for
                wet-environment durability, cleanable with standard gym
                disinfectant products.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for studio observation panels and group
                exercise room glass walls — mirrored on the bright studio side,
                view-through from the darker corridor. Used in yoga studios, spin
                rooms and fitness class areas across Middlesbrough.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment without blocking natural light —
                applicable across Middlesbrough Sports Village, Teesside
                University sports complex and town-centre gym locations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Middlesbrough gym and leisure facilities —
                frosted bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                Middlesbrough gym branding on studio glass, reception glazing
                and partition panels — combining identity and privacy in a
                single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Middlesbrough leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Middlesbrough gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Middlesbrough town centre TS1</strong> —
              the primary commercial gym market in Middlesbrough. National chain
              gyms, Teesside University sports complex and Teesside Arena all sit
              within or immediately adjacent to the TS1 core. Full-height glazed
              shop fronts, internal glass partitions and glazed studio walls are
              the primary window film applications in this zone.
            </p>
            <p>
              <strong className="text-foreground">Middlesbrough Sports Village TS5</strong> —
              the borough&apos;s major purpose-built leisure facility on Marton Road
              in the TS5 area. A large sports and fitness complex with pool, gym,
              sports halls and fitness studios where frosted film, solar-control
              and DDA manifestation are all relevant applications.
            </p>
            <p>
              <strong className="text-foreground">James Cook University Hospital zone TS4</strong> —
              the major NHS hospital and commercial corridor south of Middlesbrough
              town centre, with health club and gym provision serving staff,
              patients and the broader south Middlesbrough residential population.
            </p>
            <p>
              <strong className="text-foreground">Coulby Newham and south Middlesbrough TS8</strong> —
              the suburban residential and retail zone to the south of the town
              centre, with chain gym and independent fitness studio provision
              serving the Coulby Newham, Marton and Nunthorpe residential
              catchments.
            </p>
            <p>
              <strong className="text-foreground">Stockton-on-Tees and wider Tees Valley TS18-21</strong> —
              Stockton&apos;s town centre and suburban gym market sits approximately
              5 miles from Middlesbrough with independent leisure centre provision,
              national chain gyms and University of Sunderland at Riverside
              Campus TS18 sports facilities all generating window film demand
              across the wider Tees Valley.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Middlesbrough
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Middlesbrough gym fit-out contractors, FM companies, sign
              companies and property management businesses managing window film
              programmes across multiple Tees Valley leisure sites, WRPX operates
              as a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Middlesbrough gym
              programmes. For national gym chain operators managing Middlesbrough
              sites within a wider UK window film programme, our South Yorkshire
              base means we can cover Middlesbrough alongside Newcastle, Durham,
              Leeds and Sheffield within a coherent North East and Yorkshire
              mobilisation — reducing travel overhead on multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Middlesbrough and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for Middlesbrough and Teesside care homes</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for gym partitions and doors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Middlesbrough gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract and
              white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Middlesbrough Gym Quote →
              </Link>
              <Link href="/window-film/gym-window-film/" className="btn-secondary">
                Gym Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
