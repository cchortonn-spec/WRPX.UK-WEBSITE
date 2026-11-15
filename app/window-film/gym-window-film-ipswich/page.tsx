import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Ipswich | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Ipswich and Suffolk — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Ipswich Sports Club IP1, Tower Ramparts IP1, Whitton Sports Centre IP3 and all Ipswich IP postcode gyms and leisure centres. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-ipswich/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Ipswich — frosted, solar control, manifestation and privacy film for Ipswich gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Ipswich and Suffolk. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Ipswich Sports Club IP1, Tower Ramparts Leisure IP1, Whitton Sports Centre IP3 and all Ipswich IP postcode gym and leisure facilities. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Ipswich", item: "https://www.wrpx.co.uk/window-film/gym-window-film-ipswich/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Ipswich gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Ipswich gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Ipswich&apos;s newer gym units with large glazed frontages in the town-centre IP1 and waterfront zones. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Ipswich&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Ipswich and Suffolk IP postcodes. Ipswich Sports Club on Henley Road IP1 is one of the town&apos;s well-established multi-sport leisure facilities — generating changing room privacy film, Building Regulations manifestation and solar-control demand. Whitton Sports Centre IP3 provides a community leisure centre in the east of the town. National chain gym operators including PureGym, Anytime Fitness and other chains active across Ipswich town centre IP1 and retail-park locations generate consistent refurbishment and changing room film demand. Independent boutique fitness studios, personal training spaces and CrossFit boxes across the Ipswich IP postcode area generate consistent smaller installation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at an Ipswich gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) south and A14 through Cambridge — a direct A-road route from the East Midlands into East Anglia. Survey visits for Ipswich gyms can typically be arranged within 2 to 3 days of enquiry. A typical Ipswich gym changing room installation covering window glazing across the changing area and individual shower cubicle panels takes 3 to 6 hours depending on the glazing area and layout. Smaller boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Ipswich gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Ipswich gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Ipswich gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Ipswich gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Ipswich gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Ipswich and Suffolk. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14 and can cover Ipswich alongside Norwich, Cambridge and other East Anglian sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich and Suffolk postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Ipswich and surrounding IP postcode areas — IP1 (Ipswich town centre: Tower Ramparts Shopping Centre IP1 and the town-centre commercial zone; Ipswich Sports Club Henley Road IP1 — one of the town&apos;s principal multi-sport leisure facilities; national chain gym operators in the town-centre IP1 zone; commercial and leisure glazing across the central Ipswich IP1 area), IP2 (Ipswich south and west: Chantry area and south Ipswich residential and leisure provision; local fitness studios and community sports facilities), IP3 (east Ipswich: Whitton Sports Centre IP3 — a community leisure facility in the east of the town generating changing room privacy film and Building Regulations manifestation demand; Ipswich Waterfront IP3 development zone with commercial and leisure glazing), IP4 (north-east Ipswich: Rushmere area local leisure provision and commercial fitness studios), IP5 (outer east: Martlesham Heath commercial park IP5 generating commercial gym and leisure demand from the technology and business park zone). WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmIpswichPage() {
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
            <span className="text-foreground">Ipswich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Ipswich &amp; Suffolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Ipswich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Ipswich and Suffolk. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, Building Regulations-compliant glass
            manifestation and branded decorative vinyl. Ipswich Sports Club IP1,
            Whitton Sports Centre IP3 and all Ipswich IP postcode gym and leisure
            facilities. Approximately 2 hours 15 minutes from our South Yorkshire
            base via the A1(M) and A14.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Ipswich Gym Quote →
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
            Ipswich gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ipswich is Suffolk&apos;s county town and principal commercial centre —
              a port and market town of approximately 180,000 people with a gym
              and leisure market spanning national chain operators, local
              authority leisure centres and an active independent fitness sector
              across its residential zones and surrounding IP postcode area.
            </p>
            <p>
              Ipswich Sports Club on Henley Road IP1 is one of the town&apos;s
              well-established multi-sport leisure destinations — generating
              changing room privacy film, Building Regulations-compliant
              manifestation and solar-control demand. Whitton Sports Centre IP3
              adds a community leisure facility in the east of the borough.
              National chain gym operators are active across Ipswich town centre
              IP1 and surrounding retail parks, creating consistent refurbishment
              and changing room film demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 2 hours 15 minutes
              from Ipswich via the A1(M) south and A14 through Cambridge — a
              direct A-road route from the East Midlands into East Anglia. We can
              survey Ipswich gym sites quickly and cover Ipswich alongside
              Norwich, Cambridge and other East Anglian sites in a co-ordinated
              multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Ipswich
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Ipswich gyms. Humidity-resistant adhesive for wet-environment
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
                yoga studios and boutique fitness class areas across Ipswich.
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
                applicable across Ipswich town-centre and waterfront gym
                units with glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1500mm height for full-height glazed panels and internal
                glass doors throughout Ipswich gym and leisure facilities —
                frosted bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Ipswich gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across the town&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Ipswich leisure centre
                poolside glazing and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Ipswich
                public leisure and sports facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ipswich gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Ipswich town centre IP1</strong> —
              The commercial gym market in the town-centre zone including
              national chain operators active around Tower Ramparts IP1 and
              the Cornhill IP1. City-centre gym units generating changing room
              privacy film, studio film and Building Regulations manifestation
              demand. Ipswich Sports Club Henley Road IP1 — one of the town&apos;s
              well-established multi-sport leisure facilities.
            </p>
            <p>
              <strong className="text-foreground">Whitton Sports Centre IP3</strong> —
              A community leisure centre in the east Ipswich IP3 zone, generating
              changing room privacy film and Building Regulations-compliant
              manifestation demand from the facility&apos;s swimming, fitness and
              leisure provision.
            </p>
            <p>
              <strong className="text-foreground">Ipswich Waterfront IP3</strong> —
              The regenerated waterfront zone on the Wet Dock — commercial and
              leisure operators with glazed elevations facing direct sun
              generating solar-control, manifestation and branded film demand
              from fitness studios and leisure operators in the waterfront
              development zone.
            </p>
            <p>
              <strong className="text-foreground">Martlesham Heath retail and business park IP5</strong> —
              The out-of-town technology and business park zone to the east of
              Ipswich — generating gym and leisure demand from commercial fitness
              operators serving the business park workforce and surrounding
              residential areas.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Ipswich
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Ipswich gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across Suffolk and East Anglian leisure sites, WRPX operates as a
              white-label installation partner. We attend under your instructions,
              follow your site access protocols and provide photographic sign-off
              on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Ipswich gym
              programmes. For national gym chain operators managing Ipswich sites
              within a wider East Anglian window film programme, our South
              Yorkshire base means we can cover Ipswich alongside Norwich,
              Cambridge and other East Anglian and East Midlands sites in a
              co-ordinated multi-site mobilisation — the most practical
              arrangement for regional multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Ipswich and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Norwich and Norfolk</p>
            </Link>
            <Link href="/window-film/retail-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Norwich and Norfolk</p>
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
              <p className="mt-1 text-xs text-muted">Get in touch for an Ipswich gym enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ipswich gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Ipswich gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 2 hours 15 minutes
              from South Yorkshire via the A1(M) and A14.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Ipswich Gym Quote →
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
