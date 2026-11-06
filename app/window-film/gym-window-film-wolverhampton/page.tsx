import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Wolverhampton | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Wolverhampton and the Black Country — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. PureGym, The Gym Group, Wolverhampton Leisure, Aldersley Leisure Village and all Wolverhampton WV postcode gyms and leisure centres. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Wolverhampton — frosted, solar control, manifestation and privacy film for Wolverhampton gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Wolverhampton and the Black Country. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. PureGym, The Gym Group, Wolverhampton Leisure, Aldersley Leisure Village WV6 and all Wolverhampton WV postcode gym and leisure facilities. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Wolverhampton", item: "https://www.wrpx.co.uk/window-film/gym-window-film-wolverhampton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Wolverhampton gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Wolverhampton gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Wolverhampton&apos;s newer gym units with large glazed frontages in the city-centre WV1 and Bilston Road WV2 zones. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Wolverhampton&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Wolverhampton and Black Country WV postcodes. PureGym and The Gym Group operate across multiple Wolverhampton city-centre WV1 and suburban locations. Wolverhampton Leisure manages a network of public leisure facilities across the city — including the Aldersley Leisure Village WV6 on the northern fringe, which is one of the region&apos;s most significant public leisure centres with an athletics track, sports halls, gym, and swimming pool, generating changing room privacy film, DDA manifestation and solar-control demand. The University of Wolverhampton WV1 campus sports facilities and gym create a university leisure market segment. Independent boutique fitness studios, personal training spaces and CrossFit boxes across the city-centre WV1 and Penn WV4 zones generate consistent smaller installation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Wolverhampton gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Wolverhampton via the M1 and M6 — a direct motorway route south-west from Sheffield. Survey visits for Wolverhampton gyms can typically be arranged within 2 to 3 days of enquiry. A typical Wolverhampton gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Wolverhampton gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Wolverhampton gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Wolverhampton gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Wolverhampton gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Wolverhampton gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Wolverhampton and the wider Black Country. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 1 hour from Wolverhampton via the M1 and M6 — a straightforward motorway route — and can cover Wolverhampton alongside Birmingham, Walsall, West Bromwich and other West Midlands sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton and Black Country postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wolverhampton and surrounding WV postcodes — WV1 (Wolverhampton city centre: the commercial gym market including national chain gym operators, boutique fitness studios and the University of Wolverhampton WV1 campus sports facilities; city-centre office and retail zones generating consistent DDA manifestation and frosted glazing demand), WV2 (Bilston Road, Heath Town: south-east Wolverhampton zone with community leisure provision and gym demand from the residential and commercial district), WV3 (Penn, Merry Hill: south-west Wolverhampton residential zone with private gym and personal training studio provision), WV4 (Penn, Bradmore: south Wolverhampton residential zone with health club and gym provision), WV5 (Wombourne: south-west Staffordshire fringe; independent gym and leisure provision), WV6 (Perton, Aldersley: Aldersley Leisure Village WV6 — Wolverhampton&apos;s flagship public leisure centre with athletics, sports halls, gym and pool generating substantial window film demand across its multi-zone facility; Perton WV6 residential and gym provision), WV7 (Albrighton: south Shropshire fringe, community sports and gym provision), WV8 (Codsall: north-west fringe, community leisure and gym provision), WV9 (Featherstone: northern fringe, district sports provision), WV10 (Low Hill, Wednesfield: northern Wolverhampton zone; Wednesfield WV11 community leisure provision), WV11 (Wednesfield: community gym and leisure provision in the north-east Wolverhampton zone), WV12 (Willenhall: Black Country fringe zone with district gym and sports provision), WV13 (Willenhall: Black Country zone boundary), WV14 (Bilston: Bilston Leisure Centre generating public gym and sports hall demand). Walsall WS1-WS3 and West Bromwich B70-B71 also within the broader Black Country operational area for multi-site programmes. WRPX is based in South Yorkshire, approximately 1 hour from Wolverhampton via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmWolverhamptonPage() {
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
            <span className="text-foreground">Wolverhampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Wolverhampton &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Wolverhampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Wolverhampton and the Black Country. Frosted privacy
            film for changing rooms, one-way mirror film for studio glass,
            solar control for glazed gym floors, Building Regulations-compliant
            glass manifestation and branded decorative vinyl. PureGym, The Gym
            Group, Aldersley Leisure Village and all Wolverhampton WV postcode
            gym and leisure facilities. Approximately 1 hour from our South
            Yorkshire base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Wolverhampton Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Market section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wolverhampton is the principal city of the Black Country — a
              major urban centre of approximately 265,000 people with a gym
              and leisure market spanning major public leisure infrastructure,
              national chain gym operators, a university leisure sector and
              an active community fitness market across its twelve wards and
              surrounding Black Country WV postcode zone.
            </p>
            <p>
              Aldersley Leisure Village WV6 is Wolverhampton&apos;s flagship public
              leisure destination — a large multi-zone site on the northern
              fringe of the city with an athletics track, indoor sports halls,
              swimming pool and gym facility, generating changing room privacy
              film, solar-control on glazed sections and Building
              Regulations-compliant DDA manifestation demand throughout.
              PureGym and The Gym Group operate across multiple Wolverhampton
              city-centre WV1 and suburban locations with ongoing refurbishment
              programmes creating consistent changing room frosted film and
              manifestation demand.
            </p>
            <p>
              The University of Wolverhampton WV1 campus sports and leisure
              facilities add a university market segment, with teaching
              facilities and student union commercial glazing generating
              consistent film demand during refurbishment cycles. Independent
              boutique fitness studios, personal training spaces and
              CrossFit boxes across the city-centre and Penn WV4 zones
              generate consistent smaller installation demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Wolverhampton via the M1 and M6 — a direct motorway route.
              We can survey Wolverhampton gym sites and cover Wolverhampton
              alongside Birmingham, Walsall, Dudley and other West Midlands
              sites in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Wolverhampton
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Wolverhampton gyms. Humidity-resistant adhesive for
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
                view-through from the darker corridor. Used in spin rooms,
                yoga studios and boutique fitness class areas across
                Wolverhampton.
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
                applicable across Aldersley Leisure Village WV6 and
                city-centre gym units with large glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1500mm height for full-height glazed panels and internal
                glass doors throughout Wolverhampton gym and leisure facilities
                — frosted bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Wolverhampton gym branding on studio glass,
                reception glazing and partition panels — combining identity
                and privacy in a single installation across the city&apos;s
                independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Wolverhampton leisure centre
                poolside glazing, spa areas and wet-side changing environments
                — humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Aldersley
                Leisure Village WV6 and other Wolverhampton pool facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wolverhampton gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Aldersley WV6</strong> —
              Aldersley Leisure Village is Wolverhampton&apos;s largest public
              leisure destination, encompassing athletics, sports halls, gym,
              swimming pool and community fitness. Changing room frosted film,
              solar-control on glazed gym sections and DDA manifestation
              throughout the multi-zone facility are the primary applications.
            </p>
            <p>
              <strong className="text-foreground">Wolverhampton city centre WV1</strong> —
              The commercial gym market including national chain operators
              — PureGym and The Gym Group — and the University of
              Wolverhampton campus sports facilities. Changing room privacy
              film, studio one-way mirror film and Building Regulations
              manifestation on glazed office and commercial partitions are
              the consistent demand drivers.
            </p>
            <p>
              <strong className="text-foreground">Bilston WV14</strong> —
              Bilston Leisure Centre on Bilston Road is a major Wolverhampton
              City Council public leisure facility with gym, sports halls and
              pool — a multi-zone facility generating changing room frosted
              film, DDA manifestation and solar-control demand.
            </p>
            <p>
              <strong className="text-foreground">Penn WV4 and Merry Hill WV3</strong> —
              South Wolverhampton residential and commercial zones with
              a concentration of private health clubs, yoga studios and
              personal training spaces generating consistent smaller
              installation demand.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Wolverhampton
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Wolverhampton gym fit-out contractors, FM companies, sign
              companies and property management businesses managing window
              film programmes across Black Country leisure sites, WRPX
              operates as a white-label installation partner. We attend under
              your instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Wolverhampton
              gym programmes. For national gym chain operators managing
              Wolverhampton sites within a wider UK window film programme,
              our South Yorkshire base means we can cover Wolverhampton
              alongside Birmingham, Walsall, Dudley and other West Midlands
              sites in a co-ordinated multi-site mobilisation — the most
              practical arrangement for Black Country and West Midlands
              multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Wolverhampton and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/window-film/gym-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Nottingham</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Birmingham trade partners</p>
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
              Wolverhampton gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Wolverhampton gym location, the glazing areas and
              what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome.
              Approximately 1 hour from South Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Wolverhampton Gym Quote →
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
