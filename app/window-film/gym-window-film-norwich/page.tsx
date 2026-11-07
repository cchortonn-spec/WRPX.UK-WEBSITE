import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Norwich | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Norwich and Norfolk — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Norwich Sports Village NR4, UEA Sportspark NR4, Riverside Leisure NR1 and all Norwich NR postcode gyms and leisure centres. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-norwich/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Norwich — frosted, solar control, manifestation and privacy film for Norwich gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Norwich and Norfolk. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Norwich Sports Village NR4, UEA Sportspark NR4, Riverside Leisure NR1, PureGym, The Gym Group, Anytime Fitness and all Norwich NR postcode gym and leisure facilities. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Norwich", item: "https://www.wrpx.co.uk/window-film/gym-window-film-norwich/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Norwich gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Norwich gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Norwich&apos;s newer gym units with large glazed frontages in the city-centre NR1 and NR2 zones. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Norwich&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Norwich and Norfolk NR postcodes. Norwich Sports Village NR4 on Roger Bannister Road is the city&apos;s largest public leisure and sport destination — a major multi-sport site with athletics, a swimming pool, fitness centre and sports halls generating changing room privacy film, Building Regulations manifestation and solar-control demand. UEA Sportspark on the University of East Anglia campus NR4 is a substantial university leisure facility with a 50-metre pool, climbing wall, gym and fitness studios generating consistent film demand during refurbishment cycles. PureGym and The Gym Group operate across multiple Norwich city-centre NR1 and NR2 locations. Riverside Leisure at Riverside Road NR1 adds a commercial leisure and entertainment zone with gym and fitness provision. Independent boutique fitness studios, personal training spaces and yoga studios across the Golden Triangle NR2 and Eaton NR4 zones generate consistent smaller installation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Norwich gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) south and A11 through Thetford into the city — a well-established route from the East Midlands into East Anglia. Survey visits for Norwich gyms can typically be arranged within 2 to 4 days of enquiry. A typical Norwich gym changing room installation covering window glazing across the changing area and individual shower cubicle panels takes 3 to 6 hours depending on the glazing area and layout. Smaller boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Norwich gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Norwich gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Norwich gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Norwich gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Norwich gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Norwich and Norfolk. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 2 hours 30 minutes from Norwich via the A1(M) and A11 and can cover Norwich alongside Ipswich, Cambridge and other East Anglian sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich and Norfolk postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Norwich and surrounding NR postcode areas — NR1 (Norwich city centre: the commercial gym and leisure market including Riverside Leisure at Riverside Road NR1; city-centre national chain gym operators; Norwich Castle and city-centre office zones generating consistent manifestation and frosted glazing demand), NR2 (inner west Norwich: the Golden Triangle residential zone with independent boutique fitness studios, yoga studios and personal training spaces; Chapelfield area commercial and gym provision), NR3 (inner north Norwich: Anglia Square area and north city-centre residential zone with community leisure provision), NR4 (Eaton, UEA, Mile End: Norwich Sports Village Roger Bannister Road NR4 — the city&apos;s principal public sport and leisure destination with athletics, pool, fitness centre and sports halls generating changing room privacy film, DDA manifestation and solar-control demand; University of East Anglia Sportspark NR4 — a major university leisure facility with 50-metre pool, climbing wall and fitness studios; Eaton Park NR4 public recreational zone), NR5 (Costessey, Bowthorpe: south-west Norwich residential and community leisure provision), NR6 (Old Catton, Sprowston, Hellesdon: north Norwich zone with community gym and leisure provision), NR7 (Thorpe St Andrew, Thorpe Hamlet: east Norwich zone with community sports and leisure provision), NR8 (Drayton, Taverham: outer north-west Norfolk fringe with community leisure). WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) and A11.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmNorwichPage() {
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
            <span className="text-foreground">Norwich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Norwich &amp; Norfolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Norwich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Norwich and Norfolk. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, Building Regulations-compliant
            glass manifestation and branded decorative vinyl. Norwich Sports
            Village NR4, UEA Sportspark NR4 and all Norwich NR postcode gym
            and leisure facilities. Approximately 2 hours 30 minutes from
            our South Yorkshire base via the A1(M) and A11.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Norwich Gym Quote →
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
            Norwich gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Norwich is Norfolk&apos;s principal city — a prosperous city of
              approximately 215,000 people with a gym and leisure market
              spanning major public leisure infrastructure, a significant
              university sport sector, national chain gym operators and an
              active community fitness market across its residential zones
              and surrounding Norfolk NR postcode area.
            </p>
            <p>
              Norwich Sports Village NR4 on Roger Bannister Road is the
              city&apos;s largest public leisure destination — a major multi-sport
              site with a swimming pool, fitness centre, sports halls and
              athletics track generating changing room privacy film,
              Building Regulations-compliant manifestation and solar-control
              demand. UEA Sportspark on the University of East Anglia campus
              NR4 adds a substantial university leisure facility with a
              50-metre pool, climbing wall and extensive fitness provision,
              creating a university market segment with consistent glazing
              film demand during refurbishment cycles.
            </p>
            <p>
              PureGym and The Gym Group operate across multiple Norwich
              city-centre NR1 and NR2 locations with ongoing refurbishment
              programmes creating consistent changing room frosted film and
              manifestation demand. Independent boutique fitness studios,
              personal training spaces and yoga studios across the Golden
              Triangle NR2 generate consistent smaller installation demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 30
              minutes from Norwich via the A1(M) south and A11 through
              Thetford — a direct route from the East Midlands into East
              Anglia. We can survey Norwich gym sites and cover Norwich
              alongside Ipswich, Cambridge and other East Anglian sites in
              a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Norwich
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Norwich gyms. Humidity-resistant adhesive for wet-environment
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
                view-through from the darker corridor. Used in spin rooms,
                yoga studios and boutique fitness class areas across Norwich.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and east-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment without blocking natural light —
                applicable across Norwich Sports Village NR4 and city-centre
                gym units with large glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1500mm height for full-height glazed panels and internal
                glass doors throughout Norwich gym and leisure facilities —
                frosted bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Norwich gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across the city&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Norwich leisure centre
                poolside glazing, spa areas and wet-side changing environments
                — humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Norwich Sports
                Village NR4 and UEA Sportspark NR4.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Norwich gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Norwich gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Norwich Sports Village NR4</strong> —
              The city&apos;s flagship public leisure destination on Roger Bannister
              Road, encompassing athletics, a swimming pool, fitness centre,
              sports halls and multi-sport provision. Changing room frosted film,
              DDA manifestation and solar-control on glazed gym sections are
              the primary applications across this large multi-zone facility.
            </p>
            <p>
              <strong className="text-foreground">UEA Sportspark NR4</strong> —
              The University of East Anglia&apos;s Sportspark facility on the
              Earlham Road campus — a major university leisure centre with a
              50-metre swimming pool, climbing wall, gym and fitness studios.
              Changing room privacy film, studio one-way mirror film and
              Building Regulations manifestation on glazed partitions and doors
              are the consistent demand drivers for this university sector site.
            </p>
            <p>
              <strong className="text-foreground">Norwich city centre NR1</strong> —
              The commercial gym market including national chain operators and
              Riverside Leisure at Riverside Road NR1. City-centre gym units
              with glazed frontages generating changing room privacy film,
              studio film and Building Regulations manifestation demand.
            </p>
            <p>
              <strong className="text-foreground">Golden Triangle NR2</strong> —
              South-west inner Norwich residential zone with a concentration of
              independent boutique fitness studios, yoga studios and personal
              training spaces generating consistent smaller installation demand.
              Chapelfield NR2 commercial zone adds national gym presence.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Norwich
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Norwich gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across Norfolk leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              your site access protocols and provide photographic sign-off on
              completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Norwich gym
              programmes. For national gym chain operators managing Norwich
              sites within a wider UK window film programme, our South Yorkshire
              base means we can cover Norwich alongside Ipswich, Cambridge and
              other East Anglian sites in a co-ordinated multi-site
              mobilisation — the most practical arrangement for East Anglian
              multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Norwich gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Norwich and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Nottingham</p>
            </Link>
            <Link href="/window-film/gym-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/subcontract-window-film-installation-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Norwich</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Building Regulations-compliant manifestation for gym partitions and doors</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Norwich gym enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Norwich gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Norwich gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 2 hours 30
              minutes from South Yorkshire via the A1(M) and A11.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Norwich Gym Quote →
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
