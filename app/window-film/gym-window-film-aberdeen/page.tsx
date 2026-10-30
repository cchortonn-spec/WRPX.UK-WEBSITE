import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Aberdeen | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Aberdeen and North East Scotland — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Scottish Technical Handbooks-compliant glass manifestation and branded decorative vinyl. Beach Leisure Centre AB24, Aberdeen Sports Village AB24, PureGym Aberdeen and all Aberdeen AB postcode gyms and leisure facilities. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-aberdeen/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Aberdeen — frosted, solar control, manifestation and privacy film for Aberdeen gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Aberdeen and North East Scotland. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Scottish Technical Handbooks-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Beach Leisure Centre AB24, Aberdeen Sports Village Linksfield Road AB24, PureGym Aberdeen, David Lloyd Aberdeen, University of Aberdeen sport facilities AB24 and all Aberdeen AB postcode gym and leisure facilities. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Aberdeen", item: "https://www.wrpx.co.uk/window-film/gym-window-film-aberdeen/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Aberdeen gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Aberdeen gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Aberdeen&apos;s growing independent fitness and boutique gym market in the city-centre AB10/AB11 zones and the suburban west-end AB15 corridor. Solar-control film on south and east-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Beach Leisure Centre AB24 and Aberdeen Sports Village AB24 with east-facing glazed elevations overlooking the Aberdeen beachfront. Scottish Technical Handbooks-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Aberdeen&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Aberdeen AB postcodes and the wider North East Scotland area. Beach Leisure Centre AB24 — Aberdeen City Council&apos;s main public leisure facility at the Beach, with pools, fitness suite and sports halls — generates substantial changing room privacy, poolside glazing and manifestation demand. Aberdeen Sports Village at Linksfield Road AB24 — Aberdeen&apos;s major multi-sport facility adjacent to the Beach Leisure Centre — is a significant sport and fitness installation with glazed fitness suites, sports halls, changing areas and an indoor track generating substantial glazing film demand. PureGym Aberdeen and The Gym Group operate city-centre AB10/AB11 sites and suburban locations with ongoing refurbishment programmes creating consistent changing room and manifestation demand. David Lloyd Aberdeen generates health club window film demand from its changing room, studio and poolside provision in the Aberdeen south suburban zone. University of Aberdeen sport facilities AB24 and Robert Gordon University (RGU) sport facilities AB10 generate substantial student-facing glazing film demand across fitness suites, sports halls and changing areas.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at an Aberdeen gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) north and the A90 into Aberdeen — a fully motorway and dual-carriageway route. Survey visits for Aberdeen gyms can typically be arranged within 5 to 10 days of enquiry. A typical Aberdeen gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Aberdeen boutique fitness studios in the city-centre AB10 or west-end AB15 zones can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Aberdeen leisure facilities such as Beach Leisure Centre AB24 or Aberdeen Sports Village AB24, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Aberdeen gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Aberdeen gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Aberdeen gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Aberdeen gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Aberdeen and North East Scotland gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Scottish leisure sites. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 4 hours from Aberdeen via the A1(M) and A90 — a fully dual-carriageway route — and can cover Aberdeen alongside Edinburgh in a co-ordinated Scottish mobilisation where programme volume justifies it. RAMS documentation available as standard for all Aberdeen commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen and North East Scotland postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Aberdeen and wider AB postcode areas — AB10 (Aberdeen city centre: city-centre PureGym, The Gym Group and national hotel health club operators in the AB10 core generating consistent changing room film and manifestation demand; Robert Gordon University AB10 sport facilities generating student-facing glazing film demand from the RGU Garthdee campus), AB11 (Torry, Ferryhill: Union Square AB11 leisure operators and hotel health clubs adjacent to the station generating gym glazing film demand from the Torry and Ferryhill zone), AB15 (Rubislaw, Queen&apos;s Cross, Mannofield: west Aberdeen suburban health club and independent fitness operator zone along Albyn Place, Queens Road and the Mannofield AB15 residential corridor; Westhill AB32 and Bridge of Dee AB15 generating suburban gym glazing film demand), AB24 (Seaton, Old Aberdeen, King&apos;s Links: Beach Leisure Centre AB24 — Aberdeen City Council&apos;s primary public leisure facility at the Beach, with pools, fitness suite and sports halls generating changing room privacy, poolside and manifestation demand; Aberdeen Sports Village Linksfield Road AB24 — Aberdeen&apos;s major multi-sport facility generating substantial glazing film demand; University of Aberdeen AB24 sport facilities generating student-facing glazing film demand from the King&apos;s Campus), AB21 (Dyce: Aberdeen Airport AB21 hotel and commercial gym provision), AB22–AB23 (Bridge of Don, Danestone: north Aberdeen suburban gym and leisure provision). Elgin IV30 and Inverness IV1 within operational reach. WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmAberdeenPage() {
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
            <span className="text-foreground">Aberdeen</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Aberdeen &amp; North East Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Aberdeen
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Aberdeen and North East Scotland. Frosted privacy film
            for changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, Scottish Technical Handbooks-compliant
            glass manifestation and branded decorative vinyl. Beach Leisure Centre
            AB24, Aberdeen Sports Village AB24, PureGym Aberdeen and all Aberdeen
            AB postcode gym and leisure facilities. Approximately 4 hours from our
            South Yorkshire base via the A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Aberdeen Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Aberdeen gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Aberdeen has a significant gym and leisure market shaped by two
              major universities, a large energy-sector professional population
              and a well-developed public leisure infrastructure. Beach Leisure
              Centre AB24 and Aberdeen Sports Village at Linksfield Road AB24
              together form Aberdeen&apos;s most concentrated public sport and
              leisure complex — both facilities generate substantial changing
              room privacy, poolside glazing and manifestation demand from their
              multi-zone footprints.
            </p>
            <p>
              University of Aberdeen&apos;s King&apos;s Campus AB24 and Robert
              Gordon University&apos;s Garthdee Campus AB10 each operate sport
              and fitness facilities serving tens of thousands of students.
              Student-facing fitness suites, sports halls and changing areas
              across both campuses generate ongoing glazing film demand for
              frosted film, manifestation and solar-control.
            </p>
            <p>
              Aberdeen&apos;s independent fitness scene — CrossFit boxes, boxing
              gyms, yoga studios and boutique fitness spaces — is concentrated
              in the city-centre AB10/AB11 zone and the west-end AB15 corridor
              along Albyn Place and Queens Road. These operators generate studio
              glass one-way mirror film, changing room frosted film and Scottish
              Technical Handbooks-compliant manifestation demand from Aberdeen&apos;s
              growing independent operator market. WRPX is based in South
              Yorkshire, approximately 4 hours from Aberdeen via the A1(M) and A90.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Aberdeen
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Aberdeen and North East Scotland gyms. Humidity-resistant
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
                spin rooms and boutique fitness class areas across Aberdeen&apos;s
                city-centre AB10 and west-end AB15 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and east-facing
                glazed cardio floors and fitness studio windows. Relevant for
                Beach Leisure Centre AB24 and Aberdeen Sports Village AB24 with
                east-facing glazed frontages overlooking the Aberdeen beachfront
                and links.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Scottish Technical Handbooks manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation strips at
                850–1000mm and 1400–1600mm height for full-height glazed panels
                and internal glass doors throughout Aberdeen and North East
                Scotland gym and leisure facilities — frosted bands, etched-effect,
                dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Aberdeen gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Aberdeen&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Aberdeen leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Beach Leisure
                Centre AB24 and Aberdeen Sports Village AB24.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aberdeen gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Beach Leisure Centre AB24</strong> —
              Aberdeen City Council&apos;s main public leisure facility at the
              Aberdeen Beach, with pools, fitness suite, sports halls and
              changing areas serving a large city catchment. Pool-side glazing
              film, changing room privacy film and manifestation across the full
              leisure footprint are the primary applications at this large
              public Aberdeen leisure facility.
            </p>
            <p>
              <strong className="text-foreground">Aberdeen Sports Village AB24</strong> —
              Aberdeen&apos;s major multi-sport facility at Linksfield Road AB24,
              adjacent to Beach Leisure Centre. An extensive sport and fitness
              complex with indoor athletics track, fitness suites, sports halls,
              group exercise studios and changing facilities generating substantial
              glazing film demand for frosted privacy film, manifestation and
              solar-control across its large enclosed footprint.
            </p>
            <p>
              <strong className="text-foreground">University of Aberdeen AB24</strong> —
              The University of Aberdeen&apos;s King&apos;s Campus sport and
              fitness facilities, serving approximately 20,000 students. Fitness
              suites, sports halls, studios and changing areas across the campus
              generate student-facing glazing film demand for frosted film,
              manifestation and solar-control.
            </p>
            <p>
              <strong className="text-foreground">Aberdeen city centre AB10 / AB11</strong> —
              PureGym, The Gym Group and national hotel health club operators
              in Aberdeen city centre, along with city-centre independent fitness
              studios, generate ongoing refurbishment demand for changing room
              film and manifestation across the city-centre commercial gym market.
            </p>
            <p>
              <strong className="text-foreground">West Aberdeen AB15</strong> —
              The west Aberdeen suburban residential zone along Albyn Place,
              Queens Road and Mannofield generating independent health club,
              boutique fitness studio and national chain operator glazing film
              demand from Aberdeen&apos;s most affluent catchment.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Aberdeen
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Aberdeen and North East Scotland gym fit-out contractors, FM
              companies, sign companies and property management businesses
              managing window film programmes across Scottish leisure sites,
              WRPX operates as a white-label installation partner. We attend
              under your instructions, follow your site access protocols and
              provide photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Aberdeen gym
              programmes. For national gym chain operators managing Aberdeen
              sites within a wider UK or Scottish window film programme, our
              South Yorkshire base via the A1(M) and A90 means we can cover
              Aberdeen alongside Edinburgh and other Scottish locations in a
              co-ordinated Scottish mobilisation — the most practical arrangement
              for multi-site programmes across Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Aberdeen and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/window-film/retail-window-film-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Aberdeen and North East Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Aberdeen</p>
            </Link>
            <Link href="/window-film/gym-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Scottish Technical Handbooks-compliant manifestation for gym partitions and doors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Aberdeen gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Aberdeen or North East Scotland gym location, the
              glazing areas and what you need the film to do — privacy, solar
              control, manifestation or branding. We&apos;ll confirm a
              specification and price. Subcontract and white-label enquiries
              welcome. Approximately 4 hours from South Yorkshire via the A1(M)
              and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Aberdeen Gym Quote →
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
