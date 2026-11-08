import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Walsall | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Walsall and the Black Country — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Walsall Aquatics Centre WS1, Bloxwich Leisure Centre WS3 and all Walsall WS postcode gyms and leisure centres. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-walsall/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Walsall — frosted, solar control, manifestation and privacy film for Walsall gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Walsall and the Black Country. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Walsall Aquatics Centre WS1, Bloxwich Leisure Centre WS3, PureGym, JD Gym and all Walsall WS postcode gym and leisure facilities. Approximately 1 hour from our South Yorkshire base via the M1 and M6."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Walsall", item: "https://www.wrpx.co.uk/window-film/gym-window-film-walsall/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Walsall gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Walsall gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant for Walsall&apos;s newer gym units with large glazed frontages in the town-centre WS1 and retail-park zones. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Walsall&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Walsall and Black Country WS postcodes. Walsall Aquatics Centre on Gala Baths site WS1 is the town&apos;s principal public leisure destination — a community swimming and leisure facility generating changing room privacy film, Building Regulations manifestation and solar-control demand. Bloxwich Leisure Centre WS3 adds a secondary local authority leisure facility in the north of the borough. PureGym, JD Gym and other national chain operators active across Walsall town centre WS1 and surrounding Black Country retail parks generate consistent refurbishment and changing room film demand. Independent boutique fitness studios, personal training spaces and CrossFit boxes across the Walsall WS postcode area generate consistent smaller installation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Walsall gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 south and M6 — a direct motorway route from Sheffield into the West Midlands. Survey visits for Walsall gyms can typically be arranged within 1 to 2 days of enquiry. A typical Walsall gym changing room installation covering window glazing across the changing area and individual shower cubicle panels takes 3 to 6 hours depending on the glazing area and layout. Smaller boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Walsall gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Walsall gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Walsall gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Walsall gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Walsall gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Walsall and the Black Country. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 1 hour from Walsall via the M1 and M6 and can cover Walsall alongside Wolverhampton, Birmingham and other West Midlands sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall and Black Country postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Walsall and surrounding WS postcode areas — WS1 (Walsall town centre: Walsall Aquatics Centre generating the town&apos;s primary public leisure glazing film demand; The Saddlers Centre and St Matthew&apos;s Quarter retail and commercial zone WS1; Walsall town-centre national chain gym operators; commercial and leisure glazing across the WS1 zone), WS2 (Walsall outer south: Gallagher Retail Park WS2 — a large-format retail and commercial park generating solar-control and manifestation demand from nationally tenanted units; outer south-west Walsall commercial provision), WS3 (Bloxwich: Bloxwich Leisure Centre WS3 — a secondary Walsall local authority leisure facility generating changing room privacy film and manifestation demand; Bloxwich town centre local commercial provision), WS4 (Rushall, Shelfield: outer north Walsall residential and local leisure provision), WS5 (Aldridge: Aldridge local commercial zone with community leisure provision). Wolverhampton WV1 and Birmingham B70 also within the broader Black Country operational area for multi-site leisure programmes. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmWalsallPage() {
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
            <span className="text-foreground">Walsall</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Walsall &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Walsall
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Walsall and the Black Country. Frosted privacy film
            for changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, Building Regulations-compliant glass
            manifestation and branded decorative vinyl. Walsall Aquatics Centre
            WS1, Bloxwich Leisure Centre WS3 and all Walsall WS postcode gym
            and leisure facilities. Approximately 1 hour from our South Yorkshire
            base via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Walsall Gym Quote →
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
            Walsall gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Walsall is a large Black Country town of approximately 270,000
              people — the main urban centre of the Metropolitan Borough of
              Walsall with a gym and leisure market spanning major public leisure
              infrastructure, national chain gym operators and an active
              community fitness market across its residential zones and
              surrounding WS postcode area.
            </p>
            <p>
              Walsall Aquatics Centre WS1 is the town&apos;s principal public
              leisure destination — generating changing room privacy film,
              Building Regulations-compliant manifestation and solar-control
              demand. Bloxwich Leisure Centre WS3 adds a secondary local
              authority leisure facility in the north of the borough. National
              chain gym operators including PureGym and JD Gym have a presence
              across Walsall town centre WS1 and surrounding retail parks,
              creating consistent refurbishment and new-fit changing room film
              demand.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from
              Walsall via the M1 south and M6 — a direct motorway route from
              Sheffield. We can survey Walsall gym sites quickly and cover
              Walsall alongside Wolverhampton, Birmingham and other West Midlands
              sites in a co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Walsall
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Walsall gyms. Humidity-resistant adhesive for wet-environment
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
                yoga studios and boutique fitness class areas across Walsall.
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
                applicable across Walsall town-centre and retail-park gym
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
                glass doors throughout Walsall gym and leisure facilities —
                frosted bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Walsall gym branding on studio glass, reception
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
                Specialist film specification for Walsall leisure centre
                poolside glazing and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Walsall
                Aquatics Centre WS1 and Bloxwich Leisure Centre WS3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Walsall gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Walsall gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Walsall Aquatics Centre WS1</strong> —
              The town&apos;s principal public leisure destination, generating
              changing room frosted film, Building Regulations-compliant
              manifestation and solar-control demand from the facility&apos;s
              swimming, fitness and leisure provision. The primary application
              across this multi-zone facility is changing room privacy film
              and poolside glazing treatment.
            </p>
            <p>
              <strong className="text-foreground">Bloxwich Leisure Centre WS3</strong> —
              A secondary Walsall Borough Council leisure facility in Bloxwich
              to the north of the town. Changing room privacy film and
              Building Regulations manifestation on glazed partitions and
              doors are the consistent demand drivers for this community
              leisure facility.
            </p>
            <p>
              <strong className="text-foreground">Walsall town centre WS1</strong> —
              The commercial gym market including national chain operators
              active in and around The Saddlers Centre WS1 and the Walsall
              town-centre commercial zone. City-centre gym units generating
              changing room privacy film, studio film and Building Regulations
              manifestation demand.
            </p>
            <p>
              <strong className="text-foreground">Gallagher Retail Park WS2</strong> —
              Out-of-town large-format retail and leisure provision generating
              solar-control and manifestation demand from nationally tenanted
              gym and leisure units with glazed frontages facing direct sun
              in the south-west Walsall WS2 corridor.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Walsall
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Walsall gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across Black Country leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow
              your site access protocols and provide photographic sign-off on
              completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Walsall gym
              programmes. For national gym chain operators managing Walsall
              sites within a wider West Midlands window film programme, our
              South Yorkshire base means we can cover Walsall alongside
              Wolverhampton, Birmingham and other Black Country sites in a
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
            Walsall gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Walsall and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Wolverhampton</p>
            </Link>
            <Link href="/window-film/gym-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/subcontract-window-film-installation-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">White-label installation for trade partners across Walsall</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Building Regulations-compliant manifestation for gym partitions and doors</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Walsall gym enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Walsall gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Walsall gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 1 hour from
              South Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Walsall Gym Quote →
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
