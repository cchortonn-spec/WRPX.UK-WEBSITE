import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Gyms & Leisure Centres | Privacy, Frosted & Solar Control | WRPX",
  description:
    "Professional window film installation for gyms, fitness studios and leisure centres — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. South Yorkshire, East Midlands, national subcontract.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for gyms and leisure centres — privacy, frosted, solar control and manifestation",
  "Window film installation for gyms, fitness studios, leisure centres and health clubs. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed gym floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. PureGym, David Lloyd, JD Gyms, Everyone Active, independent fitness studios and leisure operators across South Yorkshire and the East Midlands, with national subcontract coverage."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film applications are most common in gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent gym application — full-height frosted for complete privacy or lower-panel frosted with clear glass above to retain natural light. One-way mirror film or privacy film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disrupting class participants. Solar-control film on south and west-facing glazed gym floors and fitness studio windows reduces solar heat gain and glare without blocking natural light, keeping the workout environment comfortable during summer. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo, motivational graphics or identity colours on studio glass and reception glazing is increasingly popular across independent and chain fitness operators.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film while the gym is open to members?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most gym window film installations can be carried out during normal trading hours. Film application is quiet, clean work. Changing room and shower-area installations are typically scheduled with the facilities or operations team to work section by section while the facility remains in use, closing one changing area at a time if needed. Studio installations during class times are avoided for group exercise rooms but are straightforward in changing corridors and reception areas. For 24-hour gyms where member footfall never fully stops, early-morning windows before the peak commuter rush are often the most practical option. We co-ordinate scheduling directly with your operations team.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for gym changing rooms and shower areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for high-moisture environments. The installation is neat and indistinguishable from sandblasted glass in normal use. We seal all edges to prevent moisture ingress at the edge band — the most important factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "What is one-way mirror film and does it work in gym studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One-way mirror film (also called reflective privacy film or mirror film) creates a mirrored appearance on the bright side of the glass and a view-through effect from the darker side. In gym studios, this means an observation panel or studio glass wall can appear mirror-like from inside the lit studio — useful where participants prefer not to feel observed — while remaining view-through from the corridor or management area outside when that space is darker. The effect depends on the lighting differential between the two sides: it works most consistently where the studio is brighter than the corridor or observation area. It is a popular alternative to frosted film for studio glass where both observation and participant comfort are priorities.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar control window film work in gym and leisure centre buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar-control film is a practical and cost-effective solution for glazed gym floors and fitness studio windows that overheat in summer. Large south and west-facing glazed areas in modern gym and leisure builds — panoramic windows on cardio floors, glazed studio frontages, poolside glazing — can create uncomfortable solar heat gain and strong glare on exercise equipment. Solar-control film reduces solar heat gain by 40 to 79% depending on the film specification selected, and cuts UV transmission substantially, protecting flooring, upholstery and equipment from UV fading. Film is applied to the interior face of the glass with no external scaffolding required and no disruption to the glazing system.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes. White-label by default: we attend under your instructions, carry your paperwork where required, follow your site access protocols and provide photographic sign-off on completion. For multi-site gym operators with rolling refurbishment programmes — PureGym, JD Gyms, Everyone Active or independent chains — we can provide consistent installation across multiple locations. RAMS documentation available as standard.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmPage() {
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
            <span className="text-foreground">Window Film for Gyms &amp; Leisure</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Gyms, Fitness Studios &amp; Leisure Centres
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for gyms &amp; leisure centres
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Professional window film installation for gyms, fitness studios, leisure
            centres and health clubs. Frosted privacy film for changing rooms and
            shower areas, one-way mirror film for studio observation panels, solar
            control for glazed gym floors and fitness studio windows, DDA-compliant
            glass manifestation and branded decorative vinyl. South Yorkshire,
            East Midlands and national subcontract installation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Gym Quote →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for gyms and leisure
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass. Humidity-resistant
                adhesive specified for wet-environment durability, cleanable with
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
                view-through from the darker corridor side. Popular for spin
                studios, yoga rooms and PT areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40–79% on south and west-facing glazed
                cardio floors, studio frontages and poolside glazing. Cuts UV
                fading of flooring, equipment upholstery and studio finishes
                without blocking natural light.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout gym and leisure facilities — frosted bands,
                etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating gym branding on studio glass, reception glazing
                and partition panels — privacy and identity in a single
                installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti protective film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial protective film for entrance glazing, lobby glass
                and street-facing gym frontages — protecting glazing from
                surface scratching, marker pen and vandalism at high-footfall
                city-centre and retail-park gym locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environments section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Gym and leisure environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Budget gym chains</strong> —
              PureGym, JD Gyms, The Gym Group and similar operators typically occupy
              large-format retail and industrial units with significant glazed frontages
              and open-plan gym floors. Solar-control film on south and west-facing
              glazing manages the overheating that affects cardio zones during summer.
              Changing room frosted film and DDA manifestation on internal glass
              partitions are standard fit-out requirements across this sector.
            </p>
            <p>
              <strong className="text-foreground">Premium health clubs</strong> —
              David Lloyd, Virgin Active, Nuffield Health and similar operators
              have more complex environments including swimming pools, spa areas,
              group exercise studios and dedicated PT suites. One-way mirror film
              on studio observation panels, frosted film in spa glazing and humidity-
              appropriate specification for poolside and wet-area glazing are typical
              applications. We advise on film selection for glazing adjacent to pool
              environments where chlorine-laden air is a factor.
            </p>
            <p>
              <strong className="text-foreground">Independent fitness studios</strong> —
              smaller independent gyms, PT studios, yoga and pilates studios, CrossFit
              boxes and specialist fitness operators typically have more specific
              glazing requirements. Street-facing studio glass where instructor-led
              classes are visible from outside often uses frosted banding to reduce
              visual distraction for participants while retaining a visible presence
              at street level. Branded decorative film and etched-effect film are
              popular for independent studio identities.
            </p>
            <p>
              <strong className="text-foreground">Local authority leisure centres</strong> —
              council-operated swimming pools, sports halls, fitness suites and
              community leisure centres managed by operators such as Everyone Active,
              GLL (Better) and Serco Leisure have substantial window film requirements
              including changing room privacy, poolside solar control and DDA
              manifestation across large public-facing glazed areas. We work white-label
              for FM contractors and leisure management companies managing refurbishment
              programmes across council leisure portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* Changing room detail section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Changing room and wet-area window film
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Changing room and shower-area glazing requires a different film
              specification from standard commercial applications. High humidity,
              regular cleaning with disinfectant products and the potential for
              condensation on glass surfaces mean that standard dry-environment
              adhesive formulations are unsuitable for some changing room locations.
            </p>
            <p>
              For gym changing rooms and shower cubicle glazing, we specify commercial-
              grade architectural film with a moisture-tolerant adhesive appropriate
              to the humidity level expected in the specific environment. All edges
              are sealed to prevent moisture ingress between the film and the glass
              substrate — the primary cause of premature failure in high-humidity
              installations. Where glazing is directly adjacent to shower heads
              or pool areas with chlorine in the air, we specify film accordingly
              and advise on the realistic service life expectation for that environment.
            </p>
            <p>
              A typical gym changing room installation — covering window glazing across
              the changing area and individual shower cubicle panels — takes 3 to 6
              hours depending on the glazing area and layout. We co-ordinate with your
              operations team to work section by section, closing one changing area
              at a time if needed, so the facility can continue operating throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract gym window film installation
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For gym fit-out contractors, leisure facilities management companies,
              FM contractors and sign companies managing gym refurbishment programmes,
              we operate as a subcontract installation partner. We attend under your
              instructions, carry your paperwork where required, follow your site
              access and sign-in procedures, and provide photographic sign-off per
              area on completion. RAMS documentation is prepared as standard for
              every subcontract gym programme.
            </p>
            <p>
              For national gym operators rolling out new sites or running chain-wide
              refurbishment programmes, we can provide consistent specification and
              installation quality across multiple locations — the same product,
              finish and installation standard at every site. Where multiple sites
              fall across a geographic corridor accessible from South Yorkshire,
              we programme them efficiently to minimise day-rate and travel costs.
            </p>
            <p>
              We do not manufacture or supply gym fit-out products beyond window
              film and related glazing films. Our service is installation and project
              co-ordination — which is exactly what most gym fit-out contractors
              and FM companies need: a reliable specialist who turns up, does the
              film work correctly and provides the sign-off documentation their
              client expects.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for changing rooms and studio glass</p>
            </Link>
            <Link href="/window-film/one-way-mirror-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">One-Way Mirror Film</p>
              <p className="mt-1 text-xs text-muted">Reflective privacy film for studio observation panels</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Solar Control Film</p>
              <p className="mt-1 text-xs text-muted">Heat and glare reduction for glazed gym floors</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for gym partitions and doors</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Commercial Window Film</p>
              <p className="mt-1 text-xs text-muted">Full commercial window film service overview</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Hotel Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy and solar control for hotel and leisure sectors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Gym or leisure centre window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, glazing areas and what you need the film to do —
              privacy, solar control, manifestation or branding. We&apos;ll confirm
              a specification and price. Subcontract and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Gym Quote →
              </Link>
              <Link href="/window-film/" className="btn-secondary">
                Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
