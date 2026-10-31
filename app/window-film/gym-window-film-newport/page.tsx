import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Newport | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Newport and South East Wales — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Newport Leisure Centre NP20, Newport International Sports Village NP19, Cwmbran Leisure Centre NP44 and all Newport NP postcode gyms and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-newport/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Newport — frosted, solar control, manifestation and privacy film for Newport gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Newport and South East Wales. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Newport Leisure Centre NP20, Newport International Sports Village NP19, Cwmbran Leisure Centre NP44, PureGym Newport and all Newport NP postcode gym and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M4."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Newport", item: "https://www.wrpx.co.uk/window-film/gym-window-film-newport/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Newport gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Newport gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Newport&apos;s independent fitness, boxing gym and martial arts studio market in the city-centre NP20 zone and the Spytty NP19 commercial corridor. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Newport International Sports Village NP19 and Spytty-area gym units with west-facing glazed elevations. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Newport&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newport gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Newport NP postcodes and the wider South East Wales area. Newport Leisure Centre NP20 — operated by Newport Live, Newport&apos;s leisure trust — is a significant city-centre public leisure facility with pools, fitness suites and sports halls generating changing room privacy, poolside glazing and manifestation demand. Newport International Sports Village NP19 at Spytty is Newport&apos;s major multi-sport complex — a large sport and fitness installation with sports halls, fitness suites, a velodrome and extensive changing facilities generating substantial glazing film demand for frosted privacy film, manifestation and solar-control. PureGym Newport and DW Fitness First Newport operate in the NP20 city-centre and Spytty NP19 zones with ongoing refurbishment programmes creating consistent changing room and manifestation demand. University of South Wales Newport campus at Allt-yr-yn NP20 generates student-facing sport and fitness glazing film demand from its campus fitness provision. Cwmbran Leisure Centre NP44 — the principal public leisure facility for the Cwmbran catchment — generates changing room privacy, pool-side glazing and manifestation demand from its large municipal footprint.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Newport gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours from Newport via the M1, M42 and M4 — a direct motorway route across England and into South Wales. Survey visits for Newport gyms can typically be arranged within 5 to 7 days of enquiry. A typical Newport gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Newport boutique fitness studios in the city-centre NP20 zone can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Newport leisure facilities such as Newport International Sports Village NP19, we plan multi-session programmes to work through zones without closing the facility. Newport also sits between Cardiff and Bristol on the M4, making it straightforward to combine with either city in the same South Wales mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Newport gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Newport gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Newport gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Newport gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Newport and South East Wales gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Welsh leisure sites. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours from Newport via the M4 and can cover Newport alongside Cardiff and Swansea in a co-ordinated South Wales mobilisation where programme volume justifies it. RAMS documentation available as standard for all Newport commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newport and South East Wales postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newport and surrounding NP postcode areas — NP20 (Newport city centre: Newport Leisure Centre NP20 — city-centre public leisure facility with pools and fitness suites; Newport city-centre PureGym and national chain operators in the NP20 core; University of South Wales Newport campus NP20 sport and fitness provision; Newport city-centre independent fitness studios along Stow Hill and the Commercial Street NP20 corridor), NP19 (Spytty: Newport International Sports Village NP19 — Newport&apos;s principal multi-sport complex at Spytty Point generating substantial glazing film demand from its large multi-zone leisure footprint; Spytty NP19 commercial gym and fitness operator provision adjacent to the Sports Village; DW Fitness First Newport NP19 operational area), NP44 (Cwmbran: Cwmbran Leisure Centre NP44 — principal public leisure facility for the Cwmbran catchment with pools, fitness suites and sports hall generating municipal leisure glazing film demand; Cwmbran city-centre fitness studio and gym operator provision; Cwmbran shopping-centre-adjacent commercial gym provision NP44), NP18 (Caerleon: Caerleon leisure and sport provision from the University of Wales Newport Caerleon NP18 former campus and surrounding residential catchment). Pontypool NP4, Abergavenny NP7 and Chepstow NP16 also within the broader South East Wales operational area. WRPX is based in South Yorkshire, approximately 3 hours from Newport via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmNewportPage() {
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
            <span className="text-foreground">Newport</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Newport &amp; South East Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Newport
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Newport and South East Wales. Frosted privacy film
            for changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, Building Regulations-compliant
            glass manifestation and branded decorative vinyl. Newport Leisure
            Centre NP20, Newport International Sports Village NP19, Cwmbran
            Leisure Centre NP44 and all Newport NP postcode gym and leisure
            facilities. Approximately 3 hours from our South Yorkshire base
            via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Newport Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Newport gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newport has a well-established public and commercial leisure
              market anchored by Newport Live — the city&apos;s leisure trust
              operating Newport Leisure Centre NP20 and Newport International
              Sports Village NP19. Newport International Sports Village at
              Spytty NP19 is the most significant facility: a large multi-sport
              complex incorporating a velodrome, sports halls, fitness suites
              and extensive changing facilities that together generate
              substantial glazing film demand from their large enclosed footprint.
            </p>
            <p>
              The University of South Wales Newport campus at Allt-yr-yn NP20
              brings a student population to the city-centre catchment, generating
              student-facing sport and fitness glazing film demand alongside the
              independent gym and fitness studio market in the city-centre NP20
              zone. Cwmbran NP44 — Newport&apos;s principal satellite town —
              has its own leisure centre and fitness operator provision that
              falls within the same NP postcode mobilisation.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours from
              Newport via the M4 — a direct motorway route. Newport sits between
              Cardiff and Bristol on the M4 corridor, making it straightforward
              to combine Newport gym installations with Cardiff or Bristol in
              a single extended South Wales programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Newport
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Newport and South East Wales gyms. Humidity-resistant
                adhesive for wet-environment durability, cleanable with
                standard gym disinfectant products.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for studio observation panels and group
                exercise room glass walls — mirrored on the bright studio side,
                view-through from the darker corridor. Used in yoga studios,
                spin rooms and boutique fitness class areas across Newport
                NP20 and Spytty NP19 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Relevant for
                Newport International Sports Village NP19 and Spytty-area
                gym units with westerly-facing glazed frontages receiving
                afternoon sun exposure.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at
                850–1000mm and 1400–1600mm height for full-height glazed panels
                and internal glass doors throughout Newport and South East
                Wales gym and leisure facilities — frosted bands, etched-effect,
                dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Newport gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Newport&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Newport leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Newport
                Leisure Centre NP20 and Newport International Sports Village NP19.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newport gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Newport Leisure Centre NP20</strong> —
              Newport Live&apos;s city-centre public leisure facility serving
              Newport&apos;s central catchment. Pools, fitness suites and
              sports halls across a significant city-centre leisure footprint
              — generating changing room privacy film, poolside glazing film
              and Building Regulations-compliant manifestation demand.
            </p>
            <p>
              <strong className="text-foreground">Newport International Sports Village NP19</strong> —
              Newport&apos;s major multi-sport complex at Spytty — a significant
              public sport and leisure installation with a velodrome, sports
              halls, fitness suites, group exercise studios and extensive
              changing facilities. Newport International Sports Village
              generates substantial glazing film demand for frosted privacy film,
              manifestation and solar-control across its large multi-zone
              enclosed footprint.
            </p>
            <p>
              <strong className="text-foreground">Cwmbran Leisure Centre NP44</strong> —
              The principal public leisure facility for the Cwmbran catchment,
              operated within the Newport NP postcode area. Pools, sports hall
              and fitness provision at Cwmbran generate changing room and
              manifestation demand that falls naturally within a Newport
              NP postcode installation programme.
            </p>
            <p>
              <strong className="text-foreground">Newport city centre NP20</strong> —
              PureGym Newport and commercial gym operators in the city-centre
              NP20 zone, along with city-centre independent fitness studios
              and martial arts facilities, generate ongoing refurbishment demand
              for changing room film and manifestation from the city-centre
              commercial gym market.
            </p>
            <p>
              <strong className="text-foreground">Spytty &amp; wider NP19</strong> —
              The Spytty NP19 commercial and leisure zone — adjacent to Newport
              International Sports Village and Spytty Retail Park — generates
              commercial gym and leisure film demand from the cluster of
              sport, leisure and commercial operators around the Spytty Point
              development area.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Newport
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Newport and South East Wales gym fit-out contractors, FM
              companies, sign companies and property management businesses
              managing window film programmes across Welsh leisure sites,
              WRPX operates as a white-label installation partner. We attend
              under your instructions, follow your site access protocols and
              provide photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Newport gym
              programmes. For national gym chain operators managing Newport
              sites within a wider UK or Welsh window film programme, our
              South Yorkshire base via the M4 means we can cover Newport
              alongside Cardiff, Swansea and Bristol in a co-ordinated South
              Wales mobilisation — the most practical arrangement for
              multi-site programmes across South Wales.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Newport and South Wales window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Cardiff and the Vale</p>
            </Link>
            <Link href="/window-film/retail-window-film-newport/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Newport</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Newport and South East Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newport/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newport</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Newport</p>
            </Link>
            <Link href="/window-film/gym-window-film-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Swansea and South West Wales</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Building Regulations-compliant manifestation for gym partitions and doors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newport gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Newport or South East Wales gym location, the
              glazing areas and what you need the film to do — privacy, solar
              control, manifestation or branding. We&apos;ll confirm a
              specification and price. Subcontract and white-label enquiries
              welcome. Approximately 3 hours from South Yorkshire via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Newport Gym Quote →
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
