import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Liverpool | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Liverpool and Merseyside — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, The Gym Group, David Lloyd, Lifestyle Fitness and all Liverpool L postcode gyms and leisure centres. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-liverpool/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Liverpool — frosted, solar control, manifestation and privacy film for Liverpool gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Liverpool and Merseyside. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. PureGym, The Gym Group, David Lloyd Liverpool, Lifestyle Fitness and all Liverpool L postcode gym and leisure facilities. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Liverpool", item: "https://www.wrpx.co.uk/window-film/gym-window-film-liverpool/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Liverpool gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Liverpool gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants — a consistent application across Liverpool&apos;s growing boutique fitness, yoga studio and boxing gym market. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Liverpool waterfront and city-centre gym units with large glazed frontages. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Liverpool&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Liverpool gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Liverpool and Merseyside L postcodes. PureGym and The Gym Group operate across multiple Liverpool city-centre L1/L2 and suburban locations. David Lloyd Liverpool at Speke L24 is one of the largest health club and racquet sports facilities in the city, generating window film demand for changing room privacy film, solar-control on glazed court areas and studio one-way mirror film. Lifestyle Fitness operates sites across Merseyside generating consistent changing room and studio film demand. Liverpool ONE L1 gym and leisure operators — including indoor climbing centres and boutique fitness concepts — create demand for manifestation and branded decorative film. The University of Liverpool and Liverpool John Moores University sports centres generate consistent university leisure market window film demand across the L7 and L3 campus zones.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Liverpool gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Liverpool via the M62. Survey visits for Liverpool gyms can typically be arranged within 3 to 4 days of enquiry. A typical Liverpool gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Liverpool boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Liverpool gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Liverpool gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Liverpool gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Liverpool gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Liverpool gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Liverpool and Merseyside. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. We are approximately 1 hour 30 minutes from Liverpool via the M62 — a direct motorway route — and can cover Liverpool alongside Manchester, Wigan and other North West sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Liverpool and Merseyside postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Liverpool and Merseyside L postcodes — L1 (Liverpool city centre and Liverpool ONE: the city&apos;s primary retail and leisure destination, with boutique fitness studios, chain gyms and leisure operators along the waterfront corridor; the Liverpool ONE development and adjacent Cultural Quarter include gym and fitness operators requiring manifestation and branded film), L2 (Dale Street, Castle Street — Liverpool&apos;s core commercial office district with professional services occupiers and commercial gym membership demand), L3 (Everton, Vauxhall, Kensington — inner north Liverpool residential zone; Liverpool John Moores University Byrom Street campus L3 sports centre and gym facilities), L4 (Walton, Kirkdale — north Liverpool residential zone with established public leisure provision; Everton Park L4 generates community leisure and gym demand), L5 (Everton, Tuebrook — inner Liverpool residential zone), L6 (Newsham Park, West Derby — mid-north Liverpool zone with independent gym and fitness studio provision), L7 (Edge Hill, Wavertree — the University of Liverpool campus zone; University of Liverpool sports centre on Bedford Street South L7 is one of the city&apos;s major university leisure facilities), L8 (Toxteth, Dingle — inner south Liverpool zone with community leisure provision), L13 (Old Swan, Stoneycroft — east Liverpool residential zone with community gym and leisure provision), L15 (Wavertree, Childwall — south-east Liverpool residential zone with independent fitness studios and leisure facilities), L17 (Aigburth, Sefton Park — south Liverpool prosperous residential zone with private health clubs, yoga studios and boutique fitness spaces), L18 (Mossley Hill, Allerton — south Liverpool high-value residential zone with private gym and health club provision), L24 (Speke, Hunts Cross — south Liverpool commercial and leisure park zone; David Lloyd Liverpool at Speke L24 is one of the city&apos;s largest private health, tennis and fitness clubs). Wirral CH41-CH62, St Helens WA9-WA10, Runcorn WA7 and wider Merseyside also covered. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Liverpool via the M62.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmLiverpoolPage() {
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
            <span className="text-foreground">Liverpool</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Liverpool &amp; Merseyside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Liverpool
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Liverpool and Merseyside. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. PureGym, The Gym Group, David Lloyd, Lifestyle
            Fitness and all Liverpool L postcode gym and leisure facilities.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the M62.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Liverpool Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Liverpool gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Liverpool is one of the UK&apos;s major regional cities — an
              economy of approximately 500,000 people in the city proper, with a
              gym and leisure market that spans significant public leisure
              infrastructure, national chain gym operators, a growing private
              health club sector and an increasingly active independent fitness
              and wellness scene centred on the waterfront and the city&apos;s
              university district.
            </p>
            <p>
              David Lloyd Liverpool at Speke L24 is one of the city&apos;s
              largest private health, tennis and fitness clubs — a substantial
              multi-zone site generating window film demand for changing room
              privacy, solar-control on glazed court and gym sections, and studio
              one-way mirror film. PureGym and The Gym Group operate multiple
              Liverpool city-centre and suburban sites, with ongoing maintenance
              and refurbishment programmes creating consistent changing room
              frosted film and DDA manifestation demand across the Liverpool L
              postcode zone.
            </p>
            <p>
              Liverpool&apos;s independent fitness market is growing — with an
              increasing concentration of boxing gyms, CrossFit boxes, yoga
              studios and boutique fitness concepts in the L1 city-centre and
              L17 Aigburth and Sefton Park zones. The University of Liverpool
              L7 and Liverpool John Moores University L3 sports centres add a
              large university market segment, with consistent refurbishment
              cycles generating glass film demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Liverpool via the M62 — a direct motorway route. We can
              survey Liverpool gym sites and cover Liverpool alongside Wirral,
              St Helens and wider Merseyside sites in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Liverpool
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Liverpool gyms. Humidity-resistant adhesive for wet-environment
                durability, cleanable with standard gym disinfectant products.
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
                rooms and boutique fitness class areas across Liverpool&apos;s
                independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Liverpool
                waterfront and city-centre gym units with large south-facing
                glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Liverpool gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                Liverpool gym branding on studio glass, reception glazing and
                partition panels — combining identity and privacy in a single
                installation across Liverpool&apos;s independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Liverpool leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Liverpool&apos;s
                major pool and spa facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liverpool gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Speke and South Liverpool L24</strong> —
              David Lloyd Liverpool at Speke is one of Merseyside&apos;s largest
              private health, tennis and fitness club facilities. Solar-control on
              glazed tennis courts and gym sections, changing room privacy film
              and studio one-way mirror film are the primary applications.
            </p>
            <p>
              <strong className="text-foreground">Liverpool ONE and City Centre L1</strong> —
              Liverpool&apos;s prime city-centre retail and leisure zone, with
              boutique fitness studios, chain gyms and leisure operators along
              the waterfront. Frosted film for changing rooms, DDA manifestation
              throughout and branded studio glazing are consistent demands from
              operators across this zone.
            </p>
            <p>
              <strong className="text-foreground">Aigburth and Sefton Park L17</strong> —
              Liverpool&apos;s prosperous south residential and park district, with
              private health clubs, yoga studios and personal training studios.
              One-way mirror film for studio observation glass and frosted film
              for treatment room glazing are the principal applications.
            </p>
            <p>
              <strong className="text-foreground">University of Liverpool campus L7</strong> —
              the University of Liverpool sports centre on Bedford Street South
              is a major campus leisure facility, with studio glass, changing
              rooms and sports hall glazing generating consistent window film
              demand during refurbishment cycles.
            </p>
            <p>
              <strong className="text-foreground">Liverpool John Moores University L3</strong> —
              LJMU&apos;s Byrom Street campus has sports and fitness facilities in
              the L3 zone generating university gym window film demand. The
              expanding Liverpool Knowledge Quarter NE of the city centre adds
              further campus and co-working gym and fitness provision.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Liverpool
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Liverpool gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across North West leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              your site access protocols and provide photographic sign-off on
              completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Liverpool gym
              programmes. For national gym chain operators managing Liverpool
              sites within a wider UK window film programme, our South Yorkshire
              base means we can cover Liverpool alongside Manchester, Wigan and
              other North West sites in a co-ordinated North West mobilisation —
              the most practical arrangement for multi-site programmes across
              the region.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Liverpool gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Liverpool and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Manchester and Greater Manchester</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Liverpool and Merseyside</p>
            </Link>
            <Link href="/subcontract-window-film-installation-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Liverpool</p>
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
              Liverpool gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Liverpool gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 1 hour 30 minutes
              from South Yorkshire via the M62.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Liverpool Gym Quote →
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
