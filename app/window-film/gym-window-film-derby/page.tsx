import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Derby | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Derby and Derbyshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Derby Arena, PureGym Derby, David Lloyd Derby and all Derby DE postcode gyms and leisure facilities. Approximately 30 minutes from our South Yorkshire base via the A38 and M1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Derby — frosted, solar control, manifestation and privacy film for Derby gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Derby and Derbyshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Derby city centre DE1, Littleover DE3, Mackworth DE22, Normanton DE23, Alvaston DE24, Chaddesden DE21 and all Derbyshire DE postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/gym-window-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Derby gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Derby gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare across Derby city-centre and suburban sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across independent and chain Derby operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Derby gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Derby and Derbyshire DE postcodes. Derby Arena — the city&apos;s principal multi-sport facility at Pride Park DE24 — houses a large indoor velodrome, sports halls and gym space with extensive glazed areas and partitioned changing rooms where frosted film and DDA manifestation are both standard requirements. David Lloyd Derby is a premium health club serving the south Derby residential population with pool, spa and group exercise studios where solar-control film, frosted changing room film and DDA manifestation are all applicable. PureGym operates multiple Derby locations across the city centre and suburbs. Nuffield Health Derby serves the mid-market health club sector. University of Derby — approximately 13,000 students based on the Kedleston Road DE22 campus — operates sports facilities and gym space where window film specification applies.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Derby gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 30 minutes from Derby city centre via the A38 and M1. Derby is one of our closest cities and benefits from fast local survey and installation response without any travel premium. Survey visits for Derby gyms can typically be arranged within a few days of enquiry. A typical Derby gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Derby personal training studios or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Derby gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Derby gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Derby gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Derby gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Derby gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Derby and Derbyshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Derby City Council leisure portfolios and for multi-site national gym chain operators managing Derby locations within a wider UK window film programme, our South Yorkshire base makes Derby one of the most cost-efficient cities in our coverage area — under 30 minutes from mobilisation. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Derby postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Derby and Derbyshire DE postcodes — DE1 (Derby city centre — the Derbion shopping centre zone, Eagle Market, Cathedral Quarter and city-centre independent fitness studios and national chain gyms), DE3 (Littleover — south-west Derby affluent residential area with independent gym and personal training studio market), DE21 (Chaddesden, Spondon — east Derby residential gym and leisure provision), DE22 (Mackworth, Allestree, Kedleston Road — University of Derby main campus DE22 sports facilities; north-west Derby residential fitness market), DE23 (Normanton, Pear Tree, Peartree Road — south Derby residential gym zone), DE24 (Alvaston, Boulton, Pride Park — Derby Arena DE24 multi-sport facility; the Pride Park commercial zone adjacent to Derbyshire County Cricket Ground), DE56 (Belper, Ripley — Amber Valley gym and leisure provision to the north). Wider Derbyshire including Chesterfield S40/S41, Matlock DE4, Ashbourne DE6 and Long Eaton NG10 are also within regular reach.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Derby &amp; Derbyshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Derby and Derbyshire. Frosted privacy film for changing rooms,
            one-way mirror film for studio glass, solar control for glazed gym
            floors, DDA-compliant glass manifestation and branded decorative vinyl.
            Derby Arena Pride Park, David Lloyd Derby, PureGym Derby and all
            Derbyshire DE postcode gym and leisure facilities. Approximately
            30 minutes from our South Yorkshire base via the A38 and M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is the principal commercial city of Derbyshire, with a gym and
              fitness market shaped by a mix of major public leisure facilities,
              national health club operators, a growing independent fitness studio
              sector and a university population of approximately 13,000 students at
              the University of Derby&apos;s main Kedleston Road DE22 campus.
            </p>
            <p>
              Derby Arena at Pride Park DE24 is the city&apos;s flagship multi-sport
              facility — home to the National Cycling Centre of Excellence, with an
              indoor velodrome, sports halls, gym suite and fitness studio across a
              large glazed building. The arena is a significant window film
              application site, with changing rooms, poolside glazing, internal
              glass partitions and large south-facing facade glazing all requiring
              professional specification.
            </p>
            <p>
              The Derbion shopping centre development in DE1 has brought additional
              footfall and commercial activity to the Derby city core, supporting the
              mid-market gym and leisure sector across the city-centre zone. The
              surrounding DE postcodes carry a mix of national chain gyms, leisure
              centres and the growing independent personal training studio and
              boutique fitness market that has expanded strongly across the east
              Midlands over the past five years.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 30 minutes from Derby
              city centre via the A38 and M1. Derby gyms benefit from fast local
              survey and installation response — and no travel premium that a more
              distant installer would need to add.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Derby
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Derby
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
                exercise room glass walls in Derby fitness studios — mirrored
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
                relevant for Derby Arena Pride Park and city-centre gyms
                with large glazed facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Derby gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Derby gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Derby leisure centre poolside
                glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Derby Arena
                and other Derby aquatic and leisure facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derby gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Derby city centre DE1</strong> —
              the primary commercial gym cluster within the Derbion shopping centre
              zone, Eagle Market and Cathedral Quarter. National chain gyms and
              independent fitness studios serve the city-centre office worker and
              student population. Full-height glazed shop fronts, internal glass
              partitions and glazed studio walls are the primary window film
              application in this zone.
            </p>
            <p>
              <strong className="text-foreground">Pride Park DE24</strong> —
              Derby Arena at Pride Park is the city&apos;s principal multi-sport
              facility. The arena&apos;s large glazed facade, changing room banks,
              poolside and sports hall partitions represent one of the highest-volume
              single-site window film opportunities in the East Midlands. The
              surrounding Pride Park business zone also houses commercial
              fitness operators alongside the arena.
            </p>
            <p>
              <strong className="text-foreground">Kedleston Road DE22</strong> —
              the University of Derby&apos;s main campus zone, with sports facilities
              and a gym serving approximately 13,000 students. Independent
              personal training studios and boutique fitness operators have
              followed the student population into the surrounding Mackworth
              and Allestree DE22 residential area.
            </p>
            <p>
              <strong className="text-foreground">Normanton and south Derby DE23</strong> —
              Normanton Road and the south Derby residential zone carry a strong
              independent gym and personal training studio market. The diverse
              residential population in DE23 supports a range of fitness formats
              from boxing gyms and martial arts studios to commercial fitness
              facilities requiring changing room frosted film.
            </p>
            <p>
              <strong className="text-foreground">Littleover and west Derby DE3</strong> —
              the affluent south-west Derby residential suburb, with demand for
              mid-market and premium health club facilities. Independent fitness
              studios and David Lloyd Derby serve this catchment from sites within
              or adjacent to the DE3 zone.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Derby
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Derby gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple Derby and Derbyshire leisure sites, WRPX operates
              as a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide photographic
              sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Derby gym
              programmes. For national gym chain operators — PureGym, David Lloyd,
              The Gym Group, Nuffield Health — managing Derby sites within a
              wider UK window film programme, our South Yorkshire base means we can
              cover Derby and the wider Derbyshire region in under 30 minutes
              from mobilisation — one of the fastest response times in our
              coverage area.
            </p>
            <p>
              We also cover Chesterfield S40/S41, Nottingham NG, Leicester LE
              and Sheffield S postcode gym and leisure sites as accessible locations
              from our base — all within the East Midlands and South Yorkshire
              corridor that forms our natural operating territory.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Derby window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Nottingham and Nottinghamshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-derby/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Derby</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Derby and Derbyshire</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Derby</p>
              <p className="mt-1 text-xs text-muted">Privacy and frosted film across Derby</p>
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
              Derby gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Derby gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Derby Gym Quote →
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
