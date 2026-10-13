import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Nottingham | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Nottingham and Nottinghamshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. David Lloyd West Bridgford, PureGym NG1/NG7, Harvey Hadden Sports Village and all Nottingham NG postcode gyms and leisure facilities. Approximately 1 hour from our South Yorkshire base via the M1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Nottingham — frosted, solar control, manifestation and privacy film for Nottingham gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Nottingham and Nottinghamshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Nottingham city centre NG1, Lenton NG7, Beeston NG9, West Bridgford NG2, Mapperley NG3, Arnold NG5, Carlton NG4, Radford NG7, Hucknall NG15 and all Nottinghamshire NG postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/window-film/gym-window-film-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Nottingham gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Nottingham gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare on Nottingham city-centre and suburban sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across independent and chain Nottingham operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Nottingham and Nottinghamshire NG postcodes. David Lloyd Nottingham in West Bridgford NG2 is a large premium health club south of the city with pool, spa and group exercise facilities where solar-control film, frosted changing room film and DDA manifestation are all standard requirements. PureGym operates multiple Nottingham locations — Nottingham city centre NG1 and Lenton NG7 close to the University of Nottingham campus. Nottingham Ice Centre in the city centre NG1 carries large glazed areas across its ice rink, fitness and leisure facilities. Harvey Hadden Sports Village in Bilborough NG8 is a major Nottingham City Council leisure hub with pool, sports halls and gym space. The Gym Group covers the budget-to-mid range across central Nottingham. Nuffield Health Nottingham operates from the city centre. University of Nottingham and Nottingham Trent University sports facilities in the NG7/NG1 zones both carry gym and fitness spaces where window film specification applies.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Nottingham gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Nottingham city centre via the M1 south. Survey visits for Nottingham gyms can typically be arranged within a few days of enquiry. A typical Nottingham gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Nottingham personal training studio or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Nottingham gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Nottingham gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Nottingham gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Nottingham gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Nottingham gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Nottingham and Nottinghamshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Nottingham City Council leisure portfolios — Harvey Hadden, John Carroll, Djanogly and other Nottingham council leisure facilities — and for multi-site national gym chain operators managing Nottingham locations within a wider UK window film programme, our South Yorkshire base keeps us close to the East Midlands region without the premium that a more distant national installer would need to charge. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Nottingham and Nottinghamshire NG postcodes — NG1 (Nottingham city centre, Hockley, Lace Market — PureGym city centre, Nottingham Ice Centre, The Gym Group, national chain leisure and fitness), NG2 (West Bridgford — David Lloyd Nottingham and the south Nottingham premium health club zone; Embankment and Meadows fitness provision), NG3 (Mapperley, Sneinton — east Nottingham gym and leisure provision), NG4 (Carlton, Gedling — suburban east Nottingham fitness market), NG5 (Arnold, Sherwood — north Nottingham leisure and gym provision), NG7 (Lenton, Radford, Forest Fields — PureGym Lenton NG7, University of Nottingham sports hall and gym facilities across the Jubilee Campus and University Park NG7; the primary student gym zone), NG8 (Bilborough, Aspley — Harvey Hadden Sports Village NG8, the city&apos;s principal multi-sport facility), NG9 (Beeston, Stapleford, Chilwell — Beeston Leisure Centre NG9 and the Beeston/Chilwell gym market south-west of the city, close to the University of Nottingham), NG15 (Hucknall — north Nottinghamshire gym and leisure provision). Wider Nottinghamshire including Newark NG24, Mansfield NG18/NG19, Worksop S80 and the Sherwood Forest leisure corridor are also within regular reach.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Nottingham &amp; Nottinghamshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Nottingham and Nottinghamshire. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control for
            glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. David Lloyd West Bridgford, PureGym NG1/NG7,
            Harvey Hadden Sports Village, Nottingham Ice Centre and all
            Nottinghamshire NG postcode gym and leisure facilities.
            Approximately 1 hour from our South Yorkshire base via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is the East Midlands&apos; principal commercial city, with a
              gym and fitness market shaped by a student population approaching
              70,000 across the University of Nottingham and Nottingham Trent
              University, combined with a strong suburban residential population
              concentrated in West Bridgford NG2, Arnold NG5, Beeston NG9 and
              the western suburbs.
            </p>
            <p>
              The University of Nottingham, with approximately 33,000 students
              across University Park and Jubilee Campus in NG7, operates its own
              sports complex with gym, pool, sports halls and fitness studios.
              Nottingham Trent University, with approximately 35,000 students
              concentrated in the city centre NG1 and Clifton campus, has its own
              sport facilities at Nottingham Trent Sport. Both universities generate
              significant commercial gym demand in the surrounding Lenton NG7,
              Beeston NG9 and Radford NG7 zones.
            </p>
            <p>
              David Lloyd Nottingham in West Bridgford NG2 is the city&apos;s premier
              premium health club, serving the affluent south Nottingham residential
              population with pool, spa, group exercise studios and a large gym
              floor. Harvey Hadden Sports Village in Bilborough NG8 is the main
              Nottingham City Council multi-sport leisure hub, with pool, sports halls
              and a fitness suite across a large glazed building — a significant
              window film application site.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Nottingham
              city centre via the M1 south. Nottingham gyms benefit from fast local
              survey and installation response without the premium that a more
              distant national installer would need to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Nottingham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Nottingham
                gyms. Humidity-resistant adhesive for wet-environment durability,
                cleanable with standard gym disinfectant products.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for studio observation panels and group
                exercise room glass walls in Nottingham fitness studios — mirrored
                on the bright studio side, view-through from the darker corridor.
                Used in yoga studios, spin rooms and CrossFit boxes across the city.
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
                relevant for Nottingham city-centre and West Bridgford gyms
                with large glazed south-facing facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Nottingham gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Nottingham gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Nottingham leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at sites including
                Harvey Hadden and Nottingham Ice Centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Nottingham city centre NG1</strong> —
              the primary commercial gym cluster, with PureGym city centre,
              Nottingham Ice Centre, The Gym Group and multiple national chain
              locations. Nottingham Trent University&apos;s city-centre sports facilities
              in NG1 serve a student population of 35,000 and include glazed gym
              and fitness studio spaces.
            </p>
            <p>
              <strong className="text-foreground">Lenton and Radford NG7</strong> —
              Nottingham&apos;s primary student gym zone. PureGym Lenton NG7 sits close
              to the University of Nottingham campus, where over 33,000 students
              generate sustained commercial gym demand. Lenton Boulevard and Gregory
              Boulevard carry independent gym and fitness studio operators that
              require frosted film for changing areas and one-way mirror film for
              studio observation panels.
            </p>
            <p>
              <strong className="text-foreground">West Bridgford NG2</strong> —
              Nottingham&apos;s affluent south-side suburb, home to David Lloyd Nottingham
              which is the city&apos;s largest premium health club. The West Bridgford
              zone also has independent health and wellness studios along Melton Road
              and Bridgford Road where frosted studio glazing and branded film are
              the most common applications.
            </p>
            <p>
              <strong className="text-foreground">Beeston and Chilwell NG9</strong> —
              south-west of Nottingham, with Beeston Leisure Centre NG9 serving the
              Beeston residential population and University of Nottingham students
              from the adjacent campus zone. A growing independent gym and personal
              training studio market along Station Road and High Road serves the
              Beeston commuter population.
            </p>
            <p>
              <strong className="text-foreground">Harvey Hadden and Bilborough NG8</strong> —
              Harvey Hadden Sports Village in Bilborough NG8 is the city&apos;s principal
              multi-sport facility, operated by Nottingham City Council. The large
              glazed building includes a swimming pool, sports halls, gym suite and
              fitness studio — all with glazed internal partitions, changing rooms
              and poolside windows where professional window film specification is
              required.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Nottingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Nottingham gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple Nottingham and Nottinghamshire leisure sites, WRPX
              operates as a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide photographic
              sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Nottingham gym
              programmes. For national gym chain operators — PureGym, David Lloyd,
              The Gym Group, Nuffield Health — managing Nottingham sites within a
              wider UK window film programme, our South Yorkshire base means we can
              cover Nottingham and the wider Nottinghamshire region in under 1 hour
              from mobilisation, without the travel premium that a more distant
              national installer would need to build into the quote.
            </p>
            <p>
              We also cover Newark NG24, Mansfield NG18/NG19, Worksop S80, Derby
              DE and Leicester LE gym and leisure sites as accessible locations from
              our base — all within the Sheffield-Nottingham corridor that forms our
              natural operating territory.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Nottingham window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/window-film/frosted-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Nottingham</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for changing rooms and studio glass</p>
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
              Nottingham gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Nottingham gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Nottingham Gym Quote →
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
