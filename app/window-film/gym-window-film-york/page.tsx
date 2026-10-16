import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film York | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across York and North Yorkshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. York Leisure Centre, York Sports Village, York St John University sports and all York YO postcode gyms and fitness facilities. Approximately 1 hour from our South Yorkshire base via the A64.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-york/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film York — frosted, solar control, manifestation and privacy film for York gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across York and North Yorkshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. York Leisure Centre Thanet Road YO24, York Sports Village Heslington East YO10, York St John University Lord Mayor's Walk YO31, PureGym York, Bannatyne York and all York YO postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "York", item: "https://www.wrpx.co.uk/window-film/gym-window-film-york/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for York gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common York gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare at York Leisure Centre, York Sports Village and city-centre gym locations. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across independent and chain York operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which York gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all York and North Yorkshire YO postcodes. York Leisure Centre on Thanet Road YO24 is the city&apos;s main council-operated leisure facility — a large sports and fitness complex with pool, gym and sports hall where frosted film, solar-control and DDA manifestation are all applicable. York Sports Village at Heslington East YO10 — the University of York&apos;s major sports and fitness complex serving approximately 20,000 students — has extensive glazed sports hall and gym facades, changing room blocks and studio spaces requiring professional window film specification. York St John University sports facilities at Lord Mayor&apos;s Walk YO31 serve a campus population of approximately 8,000 students with gym and studio spaces where similar applications apply. PureGym and Bannatyne operate York city-centre and suburban locations across the YO postcode area. The growing independent fitness studio, personal training and boutique gym market across York&apos;s residential suburbs also generates regular window film demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a York gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from York city centre via the A64. Survey visits for York gyms can typically be arranged within a few days of enquiry. A typical York gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller York personal training studios or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for York gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to York gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained York gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with York gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for York gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across York and North Yorkshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For multi-site national gym chain operators managing York locations within a wider UK window film programme, our South Yorkshire base means York sits conveniently alongside Sheffield, Leeds and Doncaster in a single mobilisation — typically manageable as a combined site visit. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which York and North Yorkshire postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all York and North Yorkshire YO postcodes — YO1 (York city centre and inner suburbs — chain gym and independent studio market in and around the historic centre, including boutique fitness studios on Micklegate, Goodramgate and the commercial streets south of the Shambles), YO10 (Fulford, Heslington — York Sports Village at Heslington East, the University of York main campus sports complex serving ~20,000 students; south York residential personal training studio and independent gym market), YO24 (Acomb, Dringhouses — York Leisure Centre on Thanet Road, the city&apos;s principal council leisure facility; west York residential gym market), YO26 (Rawcliffe, Skelton on Ure — north-west York residential leisure provision), YO30 (Clifton, Skelton — north York residential gym and sports facility zone), YO31 (Heworth, Tang Hall, Lord Mayor&apos;s Walk — York St John University sports facilities; north-east York residential fitness market), YO32 (Strensall, Monks Cross, Huntington — north-east York suburban leisure provision; gym facilities adjacent to Monks Cross Shopping Park zone). Wider North Yorkshire including Harrogate HG1, Scarborough YO11 and Selby YO8 are also within reach. WRPX is based in South Yorkshire, approximately 1 hour from York via the A64.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmYorkPage() {
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
            <span className="text-foreground">York</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — York
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across York and North Yorkshire. Frosted privacy film for changing rooms,
            one-way mirror film for studio glass, solar control for glazed gym
            floors, DDA-compliant glass manifestation and branded decorative vinyl.
            York Leisure Centre, York Sports Village Heslington East, York St John
            University sports and all York YO postcode gym and leisure facilities.
            Approximately 1 hour from our South Yorkshire base via the A64.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a York Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* York gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York has a well-developed gym and leisure market shaped by its two
              university populations — the University of York at Heslington East
              and West YO10 (approximately 20,000 students) and York St John
              University at Lord Mayor&apos;s Walk YO31 (approximately 8,000 students)
              — combined with a substantial permanent residential population and
              a large tourism-driven economy that generates hotel and leisure
              facility demand across the city.
            </p>
            <p>
              York Leisure Centre on Thanet Road YO24 is the city&apos;s principal
              council-operated facility, with a pool, gym, sports hall and fitness
              studios serving the wider York residential population. York Sports
              Village at Heslington East — the University of York&apos;s major sports
              complex — is a large purpose-built facility with extensive glazed
              sports hall facades, gym spaces and changing facilities across the
              Heslington East campus development.
            </p>
            <p>
              The city&apos;s tourism economy supports a strong hotel gym and leisure
              sector — many York hotels include pool and gym facilities requiring
              professional window film specification — alongside the growing
              independent personal training and boutique fitness market that has
              expanded across York&apos;s residential suburbs over recent years.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from York
              city centre via the A64. York gyms benefit from straightforward
              mobilisation alongside our existing North Yorkshire coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in York
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across York
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
                exercise room glass walls — mirrored on the bright studio side,
                view-through from the darker corridor. Used in yoga studios, spin
                rooms and CrossFit boxes across York.
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
                relevant for York Leisure Centre, York Sports Village and
                city-centre gyms with large glazed facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout York gym and leisure facilities — frosted bands,
                etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                York gym branding on studio glass, reception glazing and partition
                panels — combining identity and privacy in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for York leisure centre poolside
                glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at York Leisure
                Centre and hotel pool facilities across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* York gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">York city centre YO1</strong> —
              the primary commercial and independent fitness market within York&apos;s
              historic city walls. National chain gyms, boutique fitness studios
              and hotel gym facilities serve the city-centre population, tourist
              visitors and professional worker catchment. Full-height glazed shop
              fronts, internal glass partitions and glazed studio walls are the
              primary window film applications in this zone.
            </p>
            <p>
              <strong className="text-foreground">Heslington East YO10 — York Sports Village</strong> —
              the University of York&apos;s major sports complex, with extensive
              sports halls, gym suites, fitness studios, changing blocks and
              poolside glazing across the Heslington East campus. Approximately
              20,000 students generate significant gym and leisure demand, and
              the Sports Village complex is one of the higher-volume single-site
              window film opportunities in the York area.
            </p>
            <p>
              <strong className="text-foreground">Thanet Road YO24 — York Leisure Centre</strong> —
              York&apos;s principal council leisure facility on the west side of the
              city. Pool, gym and sports hall with changing rooms and studio
              spaces where frosted film, solar-control and DDA manifestation
              are all standard requirements.
            </p>
            <p>
              <strong className="text-foreground">Lord Mayor&apos;s Walk YO31 — York St John University</strong> —
              York St John University&apos;s main campus sports and gym facilities
              serving approximately 8,000 students. Located immediately outside
              the medieval walls on the north side of the city, with accessible
              proximity to the city-centre market.
            </p>
            <p>
              <strong className="text-foreground">Acomb and west York YO24</strong> —
              York&apos;s western residential zone with suburban gym and health club
              provision including independent personal training studios and
              national chain gym locations serving the Acomb, Dringhouses and
              Woodthorpe residential population.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — York
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For York gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple York and North Yorkshire leisure sites, WRPX
              operates as a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide photographic
              sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all York gym
              programmes. For national gym chain operators — PureGym, Bannatyne,
              The Gym Group, Nuffield Health — managing York sites within a wider
              UK window film programme, our South Yorkshire base means we can
              cover York alongside Leeds, Sheffield and Doncaster within a single
              trip, making the scheduling highly cost-efficient.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related York and regional window film services</h2>
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
            <Link href="/window-film/retail-window-film-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film York</p>
              <p className="mt-1 text-xs text-muted">Retail window film across York and North Yorkshire</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Wrap York</p>
              <p className="mt-1 text-xs text-muted">Vinyl wrapping for York and North Yorkshire care homes</p>
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
              York gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your York gym location, the glazing areas and what you need
              the film to do — privacy, solar control, manifestation or branding.
              We&apos;ll confirm a specification and price. Subcontract and
              white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a York Gym Quote →
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
