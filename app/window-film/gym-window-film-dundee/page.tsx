import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Dundee | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Dundee and Tayside — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Scottish Technical Handbooks-compliant glass manifestation and branded decorative vinyl. Dundee Leisure Centre DD4, University of Dundee sport facilities DD1, Lochee Leisure Centre DD2, PureGym Dundee and all Dundee DD postcode gyms and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-dundee/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Dundee — frosted, solar control, manifestation and privacy film for Dundee gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Dundee and Tayside. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Scottish Technical Handbooks-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Dundee Leisure Centre DD4, University of Dundee Sport DD1, Abertay University sport facilities DD1, Lochee Leisure Centre DD2, PureGym Dundee city centre and all Dundee DD postcode gym and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Dundee", item: "https://www.wrpx.co.uk/window-film/gym-window-film-dundee/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Dundee gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Dundee gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Dundee&apos;s growing independent fitness and boutique gym market in the city-centre DD1 zone. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Dundee Leisure Centre DD4 and any glazed fitness spaces facing direct afternoon sun. Scottish Technical Handbooks-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Dundee&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Dundee DD postcodes and the wider Tayside area. Dundee Leisure Centre DD4 — Dundee City Council&apos;s main public leisure facility — generates substantial changing room privacy, poolside glazing and manifestation demand from its large sport and fitness footprint. University of Dundee Sport facilities on the Nethergate campus DD1 — serving the university&apos;s approximately 18,000 students and staff — generate consistent changing room, studio glass and manifestation demand. Abertay University sport and fitness spaces DD1 add further student-facing fitness glazing film demand from the Bell Street campus zone. Lochee Leisure Centre DD2 generates public-facing sport and fitness glazing film demand from its pool, changing rooms and studio spaces. PureGym and The Gym Group operate Dundee city-centre DD1 and suburban locations with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Independent fitness studios, CrossFit boxes and boutique gym operators in the DD1 and DD2 city zones generate studio glass film, changing room frosted film and Scottish Technical Handbooks-compliant manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Dundee gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) north and A90 — a direct route into Tayside. Survey visits for Dundee gyms can typically be arranged within 5 to 10 days of enquiry. A typical Dundee gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Dundee boutique fitness studios in the city-centre DD1 and DD2 zones can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. Dundee can also be combined with Perth — roughly 20 minutes west on the A90 — in a co-ordinated Tayside gym film programme.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Dundee gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Dundee gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Dundee gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Dundee gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Dundee and Tayside gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Scotland. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours 30 minutes from Dundee via the A1(M) and A90. RAMS documentation available as standard for all Dundee commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee and Tayside postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Dundee and surrounding DD postcode areas — DD1 (Dundee city centre: University of Dundee Sport Nethergate campus DD1 generating student-facing fitness glazing film demand from changing rooms and studio spaces; Abertay University sport facilities Bell Street DD1; city-centre Dundee DD1 with commercial gym operators, PureGym and independent fitness studios; Dundee Waterfront zone DD1 with commercial fitness and hospitality glazing demand), DD2 (West End, Ninewells, Lochee: Lochee Leisure Centre DD2 — Dundee City Council leisure facility serving the Lochee and west Dundee community with pool, changing rooms and studio spaces; West End Perth Road DD2 commercial and residential gym provision; Ninewells DD2 NHS clinical and ancillary facilities with glazing film demand), DD3 (Hilltown, Kingsway: Kingsway sport and leisure provision in the northern Dundee DD3 corridor; Hilltown district fitness and community sport facilities DD3), DD4 (Stobswell, Craigie: Dundee Leisure Centre DD4 — Dundee&apos;s principal public sport and leisure facility with pools, fitness suite, sports halls and changing rooms generating substantial glazing film demand; Craigie DD4 community and commercial fitness provision), DD5 (Broughty Ferry, Monifieth: Broughty Ferry DD5 leisure and fitness provision in the coastal eastern suburb; Monifieth DD5 community sport and fitness facilities on the eastern margin of the Dundee operational area). WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmDundeePage() {
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
            <span className="text-foreground">Dundee</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym Window Film · Dundee &amp; Tayside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Dundee
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Dundee and Tayside. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar-control
            for glazed gym floors and Scottish Technical Handbooks-compliant
            glass manifestation. Dundee Leisure Centre DD4, University of
            Dundee Sport DD1 and Lochee Leisure Centre DD2 covered.
            Approximately 3 hours 30 minutes from our South Yorkshire base
            via the A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Dundee Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Dundee gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee gym window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Dundee has a substantial gym and leisure market anchored by
              Dundee City Council&apos;s public leisure estate — Dundee Leisure
              Centre DD4 and Lochee Leisure Centre DD2 — alongside a growing
              independent fitness and boutique gym sector in the city-centre
              DD1 and West End DD2 zones. National gym operators including
              PureGym and The Gym Group operate Dundee sites with ongoing
              refurbishment programmes creating consistent changing room and
              manifestation demand.
            </p>
            <p>
              The two Dundee universities generate a substantial student-facing
              fitness and sport facility demand: University of Dundee Sport
              on the Nethergate campus DD1 serves approximately 18,000 students,
              while Abertay University&apos;s sport and fitness provision on
              Bell Street DD1 serves approximately 5,000 students. Both
              generate consistent glazing film demand from changing rooms,
              studio spaces and sports hall partitions.
            </p>
            <p>
              In Scotland, glass manifestation on full-height glazed panels and
              glass doors in sport and leisure facilities is governed by the
              Scottish Technical Handbooks — not Building Regulations as in
              England. We install Scottish Technical Handbooks-compliant
              manifestation on all Dundee gym and leisure projects.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 3 hours 30
              minutes from Dundee via the A1(M) north and A90. We can mobilise
              to Dundee Leisure Centre, Lochee Leisure Centre, the university
              sport facilities and all DD postcode gym and leisure sites, and
              can cover Dundee alongside Perth in a co-ordinated Tayside
              programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Dundee
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Changing room privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film for Dundee gym changing rooms, shower
                cubicle glazing and toilet partitions. Specified with
                humidity-resistant adhesive for wet environments across Dundee
                Leisure Centre DD4, Lochee Leisure Centre DD2 and all DD
                postcode gym and leisure facilities.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film — studio glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective one-way mirror film on studio observation panels
                and group exercise room glass walls — lets instructors see in
                without disturbing class participants. Used across Dundee
                fitness studios and university sport facilities.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain on south and west-facing glazed gym
                floors and fitness studio windows. Keeps the workout environment
                comfortable year-round across Dundee&apos;s glazed fitness spaces
                without blocking natural light.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation on
                full-height glazed panels and internal glass doors across
                Dundee gym and leisure facilities — frosted bands, etched-effect,
                dot-pattern or branded to the correct specification for
                Scottish commercial premises.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational graphics and decorative vinyl for
                Dundee gym studio glass and reception glazing — incorporating
                the facility&apos;s identity colours and branding across DD1
                and DD2 city-centre and suburban fitness operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Subcontract gym fit-out
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                White-label window film installation for Dundee gym fit-out
                contractors, leisure FM companies and sign companies managing
                Tayside gym refurbishment programmes. RAMS documentation and
                photographic sign-off as standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Dundee and Tayside services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Window film for Glasgow gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/gym-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Window film for Edinburgh gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Dundee and Tayside</p>
            </Link>
            <Link href="/subcontract-window-film-installation-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">White-label installation for Dundee trade partners</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Dundee gym window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Dundee gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Dundee facility, the glazing areas and what you need
              the film to do — privacy, solar control, manifestation or
              branding. We work white-label for gym fit-out contractors and
              direct for leisure operators. Approximately 3 hours 30 minutes
              from South Yorkshire via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Dundee Gym Quote →
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
