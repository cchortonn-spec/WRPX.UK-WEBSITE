import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Doncaster | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Doncaster and South Yorkshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Doncaster Dome, Keepmoat Stadium zone, Lakeside Village and all DN postcode gyms. Based in South Yorkshire — local response times.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-doncaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Doncaster — frosted, solar control, manifestation and privacy film for Doncaster gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Doncaster and South Yorkshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Doncaster Dome, Keepmoat Stadium zone DN4, Lakeside Village DN4, Doncaster Racecourse DN2, Frenchgate Centre DN1 and all Doncaster DN postcode gym and leisure facilities. Based in South Yorkshire — local survey and installation response."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Doncaster", item: "https://www.wrpx.co.uk/window-film/gym-window-film-doncaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Doncaster gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Doncaster gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare across Doncaster gym and leisure centre sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Doncaster&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Doncaster gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Doncaster and South Yorkshire DN postcodes. The Doncaster Dome on Bawtry Road DN4 is one of the UK&apos;s largest multi-sport leisure facilities — an indoor leisure complex with pool, ice rink, gym, fitness studios and sports halls where frosted film, DDA manifestation and solar-control film are all applicable. The Keepmoat Stadium zone on Stadium Way DN4 includes gym and fitness provision within the stadium and adjacent developments. Lakeside Village retail and leisure park DN4 has gym and fitness club provision on the southern Doncaster retail corridor. Doncaster Racecourse on Leger Way DN2 hosts events and hospitality in glazed facilities suited to solar-control and decorative film. National chain gyms — PureGym, The Gym Group, David Lloyd, Anytime Fitness — operate across Doncaster town centre DN1 and suburban locations. The growing independent personal training and boutique fitness market across Doncaster also generates regular window film demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Doncaster gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire — Doncaster is our home territory and one of our fastest-response markets. Survey visits for Doncaster gyms can typically be arranged within 1 to 2 days of enquiry. A typical Doncaster gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Doncaster personal training studios or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Doncaster gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Doncaster gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Doncaster gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Doncaster gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Doncaster gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Doncaster and South Yorkshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. Being based in South Yorkshire, we are ideally placed for Doncaster gym programmes — same-day survey availability for urgent projects, fast mobilisation for time-sensitive fit-out schedules, and the ability to cover Doncaster alongside Sheffield, Rotherham and Barnsley in a single South Yorkshire programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Doncaster and South Yorkshire postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Doncaster and South Yorkshire DN postcodes — DN1 (Doncaster town centre: the main commercial core with national chain gyms, Frenchgate shopping centre gym provision, and town-centre independent fitness studios), DN2 (Doncaster Racecourse, Wheatley Hills, Intake — north-east Doncaster residential and leisure zone; Doncaster Racecourse DN2 hosts events and gym-adjacent hospitality facilities), DN3 (Armthorpe, Edenthorpe, Kirk Sandall — east Doncaster residential leisure zone), DN4 (Balby, Hexthorpe, Warmsworth — south Doncaster; the Doncaster Dome on Bawtry Road DN4 and the Keepmoat Stadium zone on Stadium Way DN4 are both within this postcode, making DN4 the highest concentration of large-venue leisure and sport window film demand in Doncaster; Lakeside Village retail and leisure park is also accessed from the DN4 Bawtry Road corridor), DN5 (Bentley, Adwick, Skellow — north-west Doncaster residential gym and leisure provision), DN6 (Askern, Carcroft — far north Doncaster), DN7 (Hatfield, Stainforth — east rural fringe), DN8 (Thorne, Moorends — east Doncaster; Thorne leisure provision including pool and gym), DN9 (Finningley, Blaxton — south-east Doncaster rural), DN10 (Bawtry, Misson — Bawtry is a premium south Doncaster market town with independent gym and leisure demand), DN11 (Tickhill, Harworth — south Doncaster residential). WRPX is based in South Yorkshire — Doncaster is home territory with the fastest possible mobilisation of any market we serve.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmDoncasterPage() {
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
            <span className="text-foreground">Doncaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Doncaster &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Doncaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Doncaster and South Yorkshire. Frosted privacy film
            for changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, DDA-compliant glass manifestation
            and branded decorative vinyl. Doncaster Dome, Keepmoat Stadium zone,
            Lakeside Village and all Doncaster DN postcode gym and leisure
            facilities. Based in South Yorkshire — local survey and installation
            with the fastest possible response times.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Doncaster Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Doncaster gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Doncaster is one of South Yorkshire&apos;s largest boroughs with a
              population of approximately 310,000 — a substantial gym and leisure
              market supported by major public and private leisure infrastructure.
              The Doncaster Dome on Bawtry Road DN4 is one of the UK&apos;s largest
              indoor leisure complexes, encompassing a 25-metre swimming pool,
              ice rink, gym, fitness studios, sports halls and a health suite —
              a significant window film opportunity for changing rooms, studio
              observation panels, solar-control on the glazed atrium and DDA
              manifestation throughout the facility.
            </p>
            <p>
              The Keepmoat Stadium zone on Stadium Way DN4 includes gym and fitness
              provision within the stadium buildings, used by Doncaster Rovers FC
              and available for community and commercial fitness use. The adjacent
              Lakeside Village retail and leisure park on the A6182 southern
              corridor generates gym and fitness club window film demand from
              national chain operators in the leisure park development.
            </p>
            <p>
              National chain gym operators — PureGym, The Gym Group, David Lloyd,
              Anytime Fitness — run multiple Doncaster locations across the town
              centre DN1 and suburban retail park zones, with ongoing maintenance
              and refurbishment programmes creating consistent window film demand
              for frosted film, DDA manifestation and solar-control.
            </p>
            <p>
              WRPX is based in South Yorkshire — Doncaster is home territory.
              Our South Yorkshire base means we can survey Doncaster gym sites
              within 1 to 2 days of enquiry and install within a week. For
              urgent or short-notice Doncaster gym programmes, we offer the
              fastest possible response of any market we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Doncaster
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Doncaster gyms. Humidity-resistant adhesive for
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
                rooms and fitness class areas across Doncaster.
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
                applicable across the Doncaster Dome glazed sections and
                town-centre gym locations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Doncaster gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                Doncaster gym branding on studio glass, reception glazing and
                partition panels — combining identity and privacy in a single
                installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Doncaster leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations such as the
                Doncaster Dome pool complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doncaster gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Doncaster Dome DN4</strong> —
              one of the UK&apos;s largest indoor leisure complexes on Bawtry Road,
              with pool, ice rink, gym, fitness studios and sports halls across
              a large glazed roof structure. Frosted film for changing rooms,
              solar-control on glazed atrium sections and DDA manifestation
              throughout the facility are the primary applications. A major
              single-site window film opportunity in South Yorkshire.
            </p>
            <p>
              <strong className="text-foreground">Keepmoat Stadium zone DN4</strong> —
              the community stadium on Stadium Way DN4 used by Doncaster Rovers
              FC with gym, fitness and sports facilities available for community
              use. Stadium and sports complex glazing — changing rooms, gym areas,
              glazed facility buildings — generates window film demand for frosted
              film and manifestation.
            </p>
            <p>
              <strong className="text-foreground">Lakeside Village DN4</strong> —
              the retail and leisure park on the A6182 southern Doncaster corridor
              with gym and health club provision from national chain operators.
              Out-of-town leisure park gym buildings generate consistent solar-
              control film demand on south-facing glazed frontages.
            </p>
            <p>
              <strong className="text-foreground">Doncaster town centre DN1</strong> —
              the commercial gym market in the town centre zone, with national
              chain gyms, Frenchgate shopping centre provision and independent
              fitness studios across the DN1 retail and commercial core.
            </p>
            <p>
              <strong className="text-foreground">Doncaster Racecourse DN2</strong> —
              the racecourse on Leger Way DN2 hosts events and has hospitality
              facilities in glazed buildings adjacent to the track. Decorative
              film, solar-control and frosted glass film for hospitality and
              conference spaces are applicable in the racecourse leisure zone.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Doncaster
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Doncaster gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across South Yorkshire leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow your
              site access protocols and provide photographic sign-off on completion
              of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Doncaster gym
              programmes. Being based in South Yorkshire, Doncaster is our home
              market — survey, pricing and scheduling happen faster than for any
              other location we serve. For national gym chain operators managing
              Doncaster sites within a wider UK window film programme, our base
              means we can cover Doncaster, Sheffield, Rotherham and Barnsley
              in a single South Yorkshire mobilisation — the most cost-effective
              multi-site arrangement in the region.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Doncaster and South Yorkshire window film services</h2>
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
            <Link href="/window-film/window-film-doncaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Window Film Doncaster</p>
              <p className="mt-1 text-xs text-muted">General window film services across Doncaster</p>
            </Link>
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Installation</p>
              <p className="mt-1 text-xs text-muted">White-label window film for South Yorkshire trade partners</p>
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
              Doncaster gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Doncaster gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Based in South Yorkshire —
              fastest response in the region.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Doncaster Gym Quote →
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
