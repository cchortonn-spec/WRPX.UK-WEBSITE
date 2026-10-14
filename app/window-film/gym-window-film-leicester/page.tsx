import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Leicester | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Leicester and Leicestershire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. David Lloyd Leicester, PureGym LE1/LE2, Saffron Lane Sports Centre and all Leicester LE postcode gyms and leisure facilities. Approximately 45 minutes from our South Yorkshire base via the M1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Leicester — frosted, solar control, manifestation and privacy film for Leicester gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Leicester and Leicestershire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Leicester city centre LE1, Aylestone LE2, Beaumont Leys LE4, Evington LE5, Knighton LE2, Narborough Road LE3, Wigston LE18 and all Leicestershire LE postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/gym-window-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Leicester gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Leicester gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare across Leicester city-centre and suburban sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across independent and chain Leicester operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leicester gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Leicester and Leicestershire LE postcodes. David Lloyd Leicester is a large premium health club in the Meridian Business Park LE2 area, serving the south Leicester residential and business population with pool, spa and group exercise studio facilities where solar-control film, frosted changing room film and DDA manifestation are all standard requirements. PureGym operates across multiple Leicester locations, including Leicester city centre LE1. Saffron Lane Sports Centre LE2 is the primary Leicestershire City Council leisure hub, with pool, sports halls and gym space — a significant commercial window film application site. Nuffield Health Leicester and Bannatyne&apos;s Leicester serve the mid-market health club sector. University of Leicester — approximately 19,000 students in the LE1 zone — and De Montfort University — approximately 27,000 students across LE1 and LE2 — both operate sports facilities and fitness studios where window film specification applies.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Leicester gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 45 minutes from Leicester city centre via the M1 south. Survey visits for Leicester gyms can typically be arranged within a few days of enquiry. A typical Leicester gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Leicester personal training studio or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Leicester gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Leicester gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Leicester gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Leicester gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Leicester gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Leicester and Leicestershire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Leicester City Council leisure portfolios — Saffron Lane Sports Centre, Cossington Street Sports Centre and other Leicester council leisure facilities — and for multi-site national gym chain operators managing Leicester locations within a wider UK window film programme, our South Yorkshire base keeps us close to the East Midlands region without the premium that a more distant national installer would need to charge. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leicester postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Leicester and Leicestershire LE postcodes — LE1 (Leicester city centre, Granby Street, Highcross Quarter — PureGym Leicester city centre, University of Leicester and De Montfort University sports facilities, city-centre independent fitness studios and national chain gyms), LE2 (Aylestone, Knighton, South Leicester — David Lloyd Leicester Meridian Business Park, Saffron Lane Sports Centre LE2, Knighton Fields Recreation Ground leisure provision and south Leicester suburban fitness market), LE3 (Narborough Road, Braunstone — west Leicester residential fitness market with independent gym and personal training studio operators along the Narborough Road corridor), LE4 (Beaumont Leys, Belgrave — north Leicester leisure and gym provision including Beaumont Leys Leisure Centre), LE5 (Evington, Humberstone — east Leicester residential fitness market), LE7 (Syston, Birstall — north Leicestershire suburban gym provision), LE9 (Hinckley, Barwell — south-west Leicestershire gym and leisure facilities), LE10 (Hinckley town — mid-Leicestershire fitness market), LE11 (Loughborough — Loughborough University Sports Park, PureGym Loughborough and the active Loughborough student and residential fitness market), LE12 (Shepshed, Mountsorrel — north Leicestershire suburban gym provision). Wider Leicestershire including Market Harborough LE16, Melton Mowbray LE13 and Coalville LE67 are also within regular reach.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Leicester &amp; Leicestershire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Leicester and Leicestershire. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control for
            glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. David Lloyd Leicester, PureGym LE1/LE2,
            Saffron Lane Sports Centre and all Leicestershire LE postcode gym
            and leisure facilities. Approximately 45 minutes from our South
            Yorkshire base via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is the East Midlands&apos; second major commercial city, with a
              gym and fitness market shaped by two significant universities —
              the University of Leicester with approximately 19,000 students across
              the LE1 campus zone, and De Montfort University with approximately
              27,000 students across LE1 and LE2 — combined with a broad suburban
              residential population across Aylestone LE2, Beaumont Leys LE4,
              Evington LE5 and the western Narborough Road LE3 corridor.
            </p>
            <p>
              The University of Leicester and De Montfort University together place
              approximately 46,000 students in and around the city centre LE1 zone,
              driving sustained commercial gym and fitness studio demand in the
              surrounding areas. Both universities operate their own sports
              facilities, and the surrounding LE1, LE2 and LE3 zones carry a
              dense cluster of commercial gym and leisure operators ranging from
              budget chains to boutique independent studios.
            </p>
            <p>
              David Lloyd Leicester in the Meridian Business Park area is the
              city&apos;s premier premium health club, serving the south Leicester
              professional and residential population with pool, spa, group exercise
              studios and a large gym floor. Saffron Lane Sports Centre LE2 is
              the principal Leicestershire City Council multi-sport leisure hub
              — a large glazed facility with pool, sports halls and gym space where
              window film specification is a regular requirement.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 45 minutes from
              Leicester city centre via the M1 south. Leicester gyms benefit from
              fast local survey and installation response without the premium that
              a more distant national installer would need to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Leicester
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Leicester
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
                exercise room glass walls in Leicester fitness studios — mirrored
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
                relevant for Leicester city-centre and Meridian Business Park
                gyms with large glazed south-facing facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Leicester gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Leicester gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Leicester leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Saffron Lane
                and David Lloyd Leicester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leicester gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Leicester city centre LE1</strong> —
              the primary commercial gym cluster, with PureGym Leicester city centre,
              national chain operators and multiple independent boutique fitness
              studios. The University of Leicester and De Montfort University
              both have sports facilities in the LE1 zone, serving a combined
              student population of over 46,000 and including glazed gym and fitness
              studio spaces requiring frosted changing room film and manifestation.
            </p>
            <p>
              <strong className="text-foreground">Aylestone and South Leicester LE2</strong> —
              Leicester&apos;s active south-side zone, home to David Lloyd Leicester
              in the Meridian Business Park, Saffron Lane Sports Centre LE2 (the
              city&apos;s main council leisure hub), and a broad residential fitness
              market. Saffron Lane and Aylestone Road carry independent gym
              operators and personal training studios where frosted privacy film
              for changing areas and one-way mirror film for studio glass are
              the most common applications.
            </p>
            <p>
              <strong className="text-foreground">Narborough Road LE3</strong> —
              Leicester&apos;s western commercial and residential corridor, with a
              growing independent gym and personal training studio market. The
              Narborough Road strip supports a dense cluster of independent
              operators including martial arts and CrossFit gyms where frosted
              studio glazing and branded film are regularly specified.
            </p>
            <p>
              <strong className="text-foreground">Beaumont Leys LE4</strong> —
              north Leicester&apos;s principal leisure hub, with Beaumont Leys Leisure
              Centre serving the large north Leicester residential population
              and adjacent communities. Large glazed leisure centre facilities
              with pool, sports halls and gym space.
            </p>
            <p>
              <strong className="text-foreground">Loughborough LE11</strong> —
              north Leicestershire&apos;s major gym and sport city. Loughborough
              University Sports Park is the UK&apos;s leading university sport complex,
              with extensive glazed gym, pool and sports hall facilities.
              PureGym Loughborough and the independent Loughborough fitness
              market extend commercial window film demand across the LE11 zone.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Leicester
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Leicester gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple Leicester and Leicestershire leisure sites, WRPX
              operates as a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide photographic
              sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Leicester gym
              programmes. For national gym chain operators — PureGym, David Lloyd,
              The Gym Group, Nuffield Health — managing Leicester sites within a
              wider UK window film programme, our South Yorkshire base means we
              can cover Leicester and the wider Leicestershire region in under
              45 minutes from mobilisation, without the travel premium that a more
              distant national installer would need to build into the quote.
            </p>
            <p>
              We also cover Loughborough LE11, Hinckley LE10, Market Harborough
              LE16, Coventry CV and Nottingham NG gym and leisure sites as
              accessible locations from our base — all within the East Midlands
              corridor that forms our natural operating territory.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Leicester window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Nottingham and Nottinghamshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Leicester</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Leicester</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for changing rooms and studio glass</p>
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
              Leicester gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Leicester gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leicester Gym Quote →
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
