import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Sunderland | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Sunderland and Wearside — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Sunderland Aquatic Centre, PureGym Sunderland, Washington Leisure Centre and all Sunderland SR postcode gyms and leisure facilities. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M).",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-sunderland/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Sunderland — frosted, solar control, manifestation and privacy film for Sunderland gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Sunderland and Wearside. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Sunderland Aquatic Centre SR1, PureGym Sunderland, Washington Leisure Centre and all Sunderland SR postcode gym and leisure facilities. Approximately 1 hour 45 minutes from our South Yorkshire base via the A1(M)."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sunderland", item: "https://www.wrpx.co.uk/window-film/gym-window-film-sunderland/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Sunderland gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Sunderland gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light in the changing area. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Sunderland&apos;s fitness class, boxing gym and yoga studio market. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for leisure centre glazed frontages on Wearside. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Sunderland&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunderland gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Sunderland and Wearside SR postcodes. Sunderland Aquatic Centre in the city centre SR1 is one of Wearside&apos;s major public aquatic and leisure facilities — a large multi-zone site with poolside glazing, changing room privacy film and DDA manifestation demand across the complex. PureGym operates across multiple Sunderland sites with ongoing refurbishment programmes creating consistent changing room frosted film and DDA manifestation demand. Washington Leisure Centre serves the Washington SR3 and SR4 corridor — a major public leisure facility generating changing room privacy, DDA manifestation and solar-control demand. The Bridges Sunderland SR1 leisure tenants and Stadium of Light zone operators add city-centre fitness demand. Gentoo Group, as Sunderland&apos;s largest social housing provider, manages community facilities and properties where surface film and glazing work is sometimes required during refurbishment programmes.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Sunderland gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 45 minutes from Sunderland via the A1(M). Survey visits for Sunderland gyms can typically be arranged within 3 to 5 days of enquiry. A typical Sunderland gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Sunderland boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Sunderland gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Sunderland gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Sunderland gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Sunderland gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Sunderland and Wearside gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 1 hour 45 minutes from Sunderland via the A1(M) and can cover Sunderland alongside Newcastle, Middlesbrough and other North East sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunderland and Wearside postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Sunderland and Wearside SR postcodes — SR1 (Sunderland city centre: Sunderland Aquatic Centre SR1 — a major public aquatic and leisure facility with pool-side glazing, changing room privacy and DDA manifestation demand across a large multi-zone complex; The Bridges Sunderland SR1 — the city-centre covered retail and leisure destination with fitness operators in the leisure zone; Sunderland city-centre independent fitness studios and PT spaces along the commercial core), SR2 (Hendon, Ashbrooke — inner south Sunderland residential zone with independent health clubs and yoga studios along the Ashbrooke Road corridor), SR3 (Silksworth, Pallion — south-west Sunderland zone; Washington Leisure Centre serves the wider SR3-SR4 corridor; Silksworth Sports Complex SR3 is a public leisure facility with ski slope and sports hall generating glazing and manifestation demand), SR4 (Southwick, Millfield — west Sunderland zone; Sunderland Royal Hospital SR4 healthcare campus with staff and visitor glazing demand), SR5 (Hylton, Carley Hill — west Sunderland zone; Stadium of Light SR5 area generates hospitality and leisure glazing demand from the stadium precinct operators), SR6 (Roker, Seaburn — north-east Sunderland coastal zone; Seaburn leisure and fitness operators on the coastal strip generate independent gym and wellness studio glazing demand; beach-front leisure facilities). South Shields NE33-NE34, Durham DH1 and Gateshead NE8 also within reach from the same North East mobilisation. WRPX is based in South Yorkshire, approximately 1 hour 45 minutes from Sunderland via the A1(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmSunderlandPage() {
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
            <span className="text-foreground">Sunderland</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Sunderland &amp; Wearside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Sunderland
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Sunderland and Wearside. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. Sunderland Aquatic Centre, PureGym Sunderland,
            Washington Leisure Centre and all Sunderland SR postcode gym and
            leisure facilities. Approximately 1 hour 45 minutes from our South
            Yorkshire base via the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sunderland Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sunderland gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sunderland is one of the North East&apos;s major urban areas — a
              city and metropolitan borough with a gym and leisure market that
              spans significant public leisure infrastructure, national chain
              gym operators, and a growing independent fitness and wellness scene.
              University of Sunderland&apos;s city campus in SR1 adds a substantial
              student population with corresponding sports and leisure demand.
            </p>
            <p>
              Sunderland Aquatic Centre is one of Wearside&apos;s major public
              leisure facilities — a multi-zone site in the city centre with
              a swimming complex, fitness suite and associated changing facilities
              generating substantial window film demand for changing room privacy,
              DDA manifestation throughout and solar-control on glazed leisure
              sections. PureGym operates multiple Sunderland sites with ongoing
              refurbishment programmes creating consistent changing room and
              manifestation demand.
            </p>
            <p>
              Washington Leisure Centre serves the SR3-SR4 corridor — a major
              public leisure facility for the Washington new-town catchment with
              pool, sports hall and fitness suite generating glazing film demand
              across a substantial multi-zone building. Silksworth Sports Complex
              SR3 adds further public leisure provision with its multi-sport
              facilities generating manifestation and privacy film requirements.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 45 minutes
              from Sunderland via the A1(M). We can cover Sunderland alongside
              Newcastle and Middlesbrough in a co-ordinated North East
              mobilisation from the same route.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Sunderland
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Sunderland gyms and leisure centres. Humidity-resistant adhesive
                for wet-environment durability, cleanable with standard gym
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
                spin rooms and boutique fitness class areas across
                Sunderland&apos;s independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — relevant for Sunderland leisure
                centres with glazed frontages facing the Wear valley or
                west-facing retail park gym units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Sunderland and Wearside gym and leisure
                facilities — frosted bands, etched-effect, dot pattern or
                branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Sunderland gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy in
                a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Sunderland leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sunderland gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sunderland Aquatic Centre SR1</strong> —
              one of Wearside&apos;s primary public aquatic and leisure facilities,
              with a competitive swimming pool, leisure pool, fitness suite and
              multi-zone changing facilities. Privacy film for changing room
              windows, DDA manifestation on glass partitions and doors, and
              solar-control on glazed leisure sections are the primary
              applications at this large public site.
            </p>
            <p>
              <strong className="text-foreground">Sunderland city centre SR1</strong> —
              The Bridges leisure zone, University of Sunderland campus sports
              facilities and city-centre fitness studios generate consistent
              changing room frosted film, DDA manifestation and branded studio
              glass demand across the SR1 zone.
            </p>
            <p>
              <strong className="text-foreground">Washington Leisure Centre SR3</strong> —
              the major public leisure facility serving the Washington new-town
              SR3-SR4 catchment, with a swimming pool, sports hall, fitness
              suite and associated changing facilities generating substantial
              window film demand across the complex.
            </p>
            <p>
              <strong className="text-foreground">Silksworth Sports Complex SR3</strong> —
              a multi-sport public leisure facility in south Sunderland with
              a ski slope, sports hall and fitness provision generating
              manifestation, privacy film and solar-control demand across
              glazed sections of the complex.
            </p>
            <p>
              <strong className="text-foreground">Seaburn SR6</strong> —
              the north-east Sunderland coastal zone with a leisure and
              hospitality strip generating independent gym, fitness and wellness
              studio demand along the seafront corridor.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Sunderland
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Sunderland and Wearside gym fit-out contractors, FM companies,
              sign companies and property management businesses managing window
              film programmes across North East leisure sites, WRPX operates as
              a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Sunderland gym
              programmes. For national gym chain operators managing Sunderland
              sites within a wider UK window film programme, our South Yorkshire
              base on the A1(M) corridor means we can cover Sunderland alongside
              Newcastle and Middlesbrough in a co-ordinated North East
              mobilisation — the most practical arrangement for multi-site
              programmes across the region.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sunderland gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Sunderland and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/window-film/gym-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/window-film/retail-window-film-sunderland/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Sunderland</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Sunderland and Wearside</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across the North East</p>
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
              Sunderland gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Sunderland gym or leisure centre location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              1 hour 45 minutes from South Yorkshire via the A1(M).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Sunderland Gym Quote →
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
