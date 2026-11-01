import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Inverness | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Inverness and the Scottish Highlands — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Scottish Technical Handbooks-compliant glass manifestation and branded decorative vinyl. Inverness Leisure Centre IV3, UHI Inverness IV2, city-centre fitness operators IV1 and all Inverness IV postcode gyms and leisure facilities. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-inverness/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Inverness — frosted, solar control, manifestation and privacy film for Inverness gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Inverness and the Scottish Highlands. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Scottish Technical Handbooks-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Inverness Leisure Centre Bught Lane IV3, UHI Inverness Campus IV2, city-centre fitness operators IV1 and all Inverness IV postcode gym and leisure facilities. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Inverness", item: "https://www.wrpx.co.uk/window-film/gym-window-film-inverness/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Inverness gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Inverness gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Inverness&apos;s growing independent fitness and boutique gym market in the city-centre IV1 zone. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Inverness Leisure Centre IV3 and any glazed fitness facilities facing direct afternoon sun. Scottish Technical Handbooks-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Inverness&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Inverness IV postcodes and the wider Scottish Highland area. Inverness Leisure Centre on Bught Lane IV3 — Highland Council&apos;s main public leisure facility at the Bught, with pools, fitness suite, ice rink and sports halls — generates substantial changing room privacy, poolside glazing and manifestation demand from its large enclosed leisure footprint. PureGym Inverness and The Gym Group operate city-centre IV1 sites with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Independent fitness studios, CrossFit boxes and boutique gym operators in the city-centre IV1 zone generate studio glass one-way mirror film, changing room frosted film and Scottish Technical Handbooks-compliant manifestation demand. University of the Highlands and Islands (UHI) Inverness Campus IV2 generates student-facing fitness facility glazing film demand across its Beechwood Park campus.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at an Inverness gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) north and the A9 into Inverness — a fully dual-carriageway route. Survey visits for Inverness gyms can typically be arranged within 5 to 10 days of enquiry. A typical Inverness gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Inverness boutique fitness studios in the city-centre IV1 zone can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Inverness leisure facilities such as Inverness Leisure Centre IV3, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Inverness gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Inverness gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Inverness gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Inverness gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Inverness and Highland gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Scottish leisure sites. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 5 hours from Inverness via the A1(M) and A9 — and can cover Inverness alongside Aberdeen — approximately 2.5 hours south on the A9 and A90 — in a co-ordinated Scottish mobilisation where programme volume justifies it. RAMS documentation available as standard for all Inverness commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness and Highland postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Inverness and wider IV postcode areas — IV1 (Inverness city centre: city-centre PureGym, The Gym Group and independent fitness operators in the IV1 core generating consistent changing room film and manifestation demand; city-centre hotel health club operators in IV1 commercial zone), IV2 (Eastgate, Retail Park, Millburn Road: UHI Inverness Campus on Beechwood Park IV2 generating student-facing fitness facility glazing film demand; hotel and commercial leisure operators in the Millburn Road and Eastfield Road IV2 zones; Inverness Airport zone IV2 hotel leisure facility glazing film demand), IV3 (Inverness west: Inverness Leisure Centre on Bught Lane IV3 — Highland Council&apos;s principal public leisure facility with pools, fitness suite, ice rink and sports halls generating changing room, poolside and manifestation demand; west Inverness residential gym and leisure provision IV3), IV4–IV5 (Highland rural and market town zones: Beauly IV4 and Drumnadrochit IV63 within operational reach for planned Highland leisure programmes). Dingwall IV15 leisure centre and Nairn IV12 leisure centre also within the Highland IV postcode operational area. WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) and A9.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmInvernessPage() {
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
            <span className="text-foreground">Inverness</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Inverness &amp; Scottish Highlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Inverness
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Inverness and the Scottish Highlands. Frosted privacy
            film for changing rooms, one-way mirror film for studio glass,
            solar control for glazed gym floors, Scottish Technical
            Handbooks-compliant glass manifestation and branded decorative vinyl.
            Inverness Leisure Centre IV3, UHI Inverness IV2, city-centre fitness
            operators IV1 and all Inverness IV postcode gym and leisure
            facilities. Approximately 5 hours from our South Yorkshire base
            via the A1(M) and A9.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Inverness Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Inverness gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Inverness has a significant gym and leisure market shaped by its
              role as the Highland capital, a large public sector workforce,
              a growing independent fitness scene and well-developed public
              leisure infrastructure. Inverness Leisure Centre on Bught Lane IV3
              — Highland Council&apos;s principal public leisure facility —
              is the most concentrated Highland leisure venue, with pools,
              fitness suite, ice rink and sports halls generating substantial
              changing room privacy, poolside glazing and manifestation demand
              from its large enclosed footprint.
            </p>
            <p>
              The University of the Highlands and Islands (UHI) Inverness
              Campus on Beechwood Park IV2 and associated campuses generate
              student-facing fitness facility glazing film demand across
              teaching blocks, student services areas and campus leisure
              provision serving tens of thousands of students across the
              Highland and Islands network.
            </p>
            <p>
              Inverness&apos;s independent fitness scene — CrossFit boxes,
              yoga studios, boutique fitness spaces and personal training
              studios — is concentrated in the city-centre IV1 zone and
              Crown Street IV2 commercial corridor. These operators generate
              studio glass one-way mirror film, changing room frosted film
              and Scottish Technical Handbooks-compliant manifestation demand.
              WRPX is based in South Yorkshire, approximately 5 hours from
              Inverness via the A1(M) and A9.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Inverness
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Inverness and Highland gyms. Humidity-resistant adhesive for
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
                view-through from the darker corridor. Used in yoga studios,
                spin rooms and boutique fitness class areas across Inverness&apos;s
                city-centre IV1 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Relevant for
                Inverness Leisure Centre IV3 and any Highland gym with
                glazed elevations facing direct afternoon sun.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Scottish Technical Handbooks manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation strips at
                850–1000mm and 1400–1600mm height for full-height glazed panels
                and internal glass doors throughout Inverness and Highland gym
                and leisure facilities — frosted bands, etched-effect, dot
                pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Inverness gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Inverness&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Inverness leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Inverness
                Leisure Centre IV3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inverness gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Inverness Leisure Centre IV3</strong> —
              Highland Council&apos;s principal public leisure facility on
              Bught Lane IV3, with pools, fitness suite, ice rink and sports
              halls serving a large Highland catchment. Pool-side glazing film,
              changing room privacy film and Scottish Technical
              Handbooks-compliant manifestation across the full leisure footprint
              are the primary applications at this large Highland leisure facility.
            </p>
            <p>
              <strong className="text-foreground">City-centre gyms IV1</strong> —
              PureGym, The Gym Group and national hotel health club operators
              in Inverness city centre, along with city-centre independent
              fitness studios, generate ongoing refurbishment demand for changing
              room film and manifestation across the Highland capital&apos;s
              commercial gym market in the IV1 core.
            </p>
            <p>
              <strong className="text-foreground">UHI Inverness Campus IV2</strong> —
              University of the Highlands and Islands Inverness Campus on
              Beechwood Park IV2 — sport and fitness facilities generating
              student-facing glazing film demand for frosted film, manifestation
              and solar-control across the campus footprint.
            </p>
            <p>
              <strong className="text-foreground">Crown Street and Millburn Road IV2</strong> —
              Commercial leisure operators in the Crown Street IV2 and Millburn
              Road IV2 corridor — including hotel health clubs and chain fitness
              operators in the commercial zone east of the city centre —
              generating gym glazing film demand from Inverness&apos;s main
              out-of-centre commercial zone.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Inverness
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Inverness and Highland gym fit-out contractors, FM companies,
              sign companies and property management businesses managing window
              film programmes across Scottish leisure sites, WRPX operates as
              a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Inverness gym
              programmes. For national gym chain operators managing Inverness
              sites within a wider UK or Scottish window film programme, our
              South Yorkshire base via the A1(M) and A9 means we can cover
              Inverness alongside Aberdeen and other Scottish locations in a
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
            Inverness gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Inverness and Highland window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Aberdeen and North East Scotland</p>
            </Link>
            <Link href="/window-film/gym-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Inverness</p>
            </Link>
            <Link href="/window-film/retail-window-film-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Inverness and the Highlands</p>
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
              Inverness gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Inverness or Highland gym location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              5 hours from South Yorkshire via the A1(M) and A9.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Inverness Gym Quote →
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
