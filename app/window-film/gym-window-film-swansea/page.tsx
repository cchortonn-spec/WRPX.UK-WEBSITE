import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Swansea | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Swansea and South West Wales — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Welsh National Pool Swansea SA1, Swansea University Sport Bay Campus SA1, Swansea Leisure Centre SA1 and all Swansea SA postcode gyms and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-swansea/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Swansea — frosted, solar control, manifestation and privacy film for Swansea gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Swansea and South West Wales. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Welsh National Pool Swansea SA1, Swansea University Sport Bay Campus SA1, Swansea Leisure Centre SA1, David Lloyd Swansea SA7, PureGym Swansea and all Swansea SA postcode gym and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Swansea", item: "https://www.wrpx.co.uk/window-film/gym-window-film-swansea/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Swansea gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Swansea gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — used across Swansea&apos;s growing boutique fitness, yoga studio and boxing gym market in the Uplands SA2, Sketty SA2 and city-centre SA1 zones. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for Swansea Bay-facing gym units and the open south-facing glazing of the Swansea University Bay Campus SA1 sport facilities. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Swansea&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Swansea SA postcodes and the wider South West Wales area. The Welsh National Pool Swansea SA1 — Wales&apos;s flagship aquatic facility on Sketty Lane — is a significant leisure installation with poolside glazing, changing room privacy and manifestation demand across its large multi-zone footprint. Swansea University Sport at the Bay Campus SA1 generates substantial student-facing sport facility glazing film demand across its fitness suites, sports halls and changing areas on the modern waterfront campus. Swansea Leisure Centre SA1 serves its city-centre catchment with changing room privacy and manifestation needs. David Lloyd Swansea at Llandarcy SA10 generates health club window film demand from its changing room, studio and poolside provision. PureGym and The Gym Group operate Swansea city-centre SA1 and suburban SA sites with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Swansea University Singleton Campus SA2 sport facilities generate further student-facing glazing film demand adjacent to the Uplands and Sketty student zones.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Swansea gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4 — a direct motorway route across England and into South Wales via the Severn crossings. Survey visits for Swansea gyms can typically be arranged within 5 to 7 days of enquiry. A typical Swansea gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Swansea boutique fitness studios in Uplands SA2 or the city-centre SA1 can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Swansea leisure facilities such as the Welsh National Pool SA1, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Swansea gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Swansea gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Swansea gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Swansea gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Swansea and South West Wales gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Welsh leisure sites. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours 30 minutes from Swansea via the M4 and can cover Swansea alongside Cardiff and other South Wales sites in a co-ordinated Welsh mobilisation — the most practical arrangement for multi-site programmes across Wales. RAMS documentation available as standard for all Swansea commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea and South Wales postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Swansea and wider SA postcode areas — SA1 (Swansea city centre and Maritime Quarter: Welsh National Pool Swansea SA1 on Sketty Lane — Wales&apos;s flagship aquatic centre generating substantial poolside, changing room and manifestation demand; Swansea University Bay Campus SA1 sport facilities on Fabian Way — the modern waterfront campus generating student-facing fitness suite, sports hall and changing area glazing film demand; Swansea Leisure Centre SA1 generating city-centre public leisure changing room and manifestation demand; SA1 Waterfront gym and leisure operators in the regeneration zone), SA2 (Uplands, Sketty, Brynmill: Swansea University Singleton Campus SA2 sport facilities generating student-facing glazing film demand; Uplands SA2 independent fitness operators — CrossFit boxes, yoga studios and personal training spaces along Uplands Crescent and the Sketty Road commercial corridor generating studio glass, changing room frosted film and manifestation demand from Swansea&apos;s active independent fitness zone), SA3 (Mumbles: Mumbles seafront leisure and fitness operators along Newton Road generating local gym glazing film demand), SA4 (Gorseinon: west Swansea leisure and fitness provision generating suburban gym glazing film demand), SA7 (Llansamlet: David Lloyd Swansea at the Llandarcy SA10 border zone generating health club changing room, studio and poolside glazing film demand; Swansea Enterprise Park SA7 commercial gym and fitness operator demand), SA10 (Neath, Skewen, Llandarcy: David Lloyd Swansea at Llandarcy SA10 health club generating substantial changing room and pool-side film demand; Neath town centre SA11 leisure and fitness provision), SA11 (Neath: town centre leisure and fitness provision). Carmarthen SA31, Llanelli SA15 and wider South West Wales also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmSwanseaPage() {
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
            <span className="text-foreground">Swansea</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Swansea &amp; South West Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Swansea
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Swansea and South West Wales. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, Building Regulations-compliant glass
            manifestation and branded decorative vinyl. Welsh National Pool
            Swansea SA1, Swansea University Sport Bay Campus SA1, Swansea
            Leisure Centre SA1 and all Swansea SA postcode gym and leisure
            facilities. Approximately 3 hours 30 minutes from our South
            Yorkshire base via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Swansea Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Swansea gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Swansea has a significant gym and leisure market shaped by its
              university population, public leisure infrastructure and growing
              independent fitness scene. The Welsh National Pool Swansea SA1
              on Sketty Lane is Wales&apos;s flagship aquatic facility — a
              large-scale leisure centre generating substantial poolside glazing,
              changing room privacy and manifestation demand across its
              multi-zone footprint.
            </p>
            <p>
              Swansea University&apos;s Bay Campus SA1 on the Swansea Bay
              waterfront houses a modern sport and fitness complex serving its
              large student population. The south-facing glazed elevations of
              the Bay Campus sport facilities receive significant direct solar
              exposure — a primary driver of solar-control film demand. The
              Singleton Campus SA2 in Sketty generates further sport facility
              glazing film demand adjacent to the Uplands student zone.
            </p>
            <p>
              The Uplands SA2 corridor is Swansea&apos;s most active independent
              fitness zone — CrossFit boxes, yoga studios, boxing gyms and
              personal training spaces along Uplands Crescent and the Sketty
              Road commercial corridor generate studio glass film, changing room
              frosted film and Building Regulations-compliant manifestation
              demand from Swansea&apos;s growing independent operator market.
              WRPX is based in South Yorkshire, approximately 3 hours 30 minutes
              from Swansea via the M4.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Swansea
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Swansea and South West Wales gyms. Humidity-resistant adhesive
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
                spin rooms and boutique fitness class areas across Swansea&apos;s
                Uplands SA2 and city-centre SA1 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Swansea
                Bay Campus SA1 gym units with south-facing glazed frontages
                overlooking the bay.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Swansea and South West Wales gym and
                leisure facilities — frosted bands, etched-effect, dot pattern
                or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film
                incorporating Swansea gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Swansea&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Swansea and South West Wales
                leisure centre poolside glazing, spa areas and wet-side changing
                environments — humidity-appropriate adhesive, edge sealing and
                film grade selected for chlorine-adjacent installations at the
                Welsh National Pool Swansea SA1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swansea gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Welsh National Pool Swansea SA1</strong> —
              Wales&apos;s flagship aquatic facility on Sketty Lane, with Olympic-
              standard competition pool, training pools and a significant leisure
              and fitness zone. Pool-side glazing film, changing room privacy
              film and manifestation across the full aquatic and leisure footprint
              are the main applications. The scale and profile of the Welsh
              National Pool make it one of Swansea&apos;s most significant gym
              and leisure glazing film installations.
            </p>
            <p>
              <strong className="text-foreground">Swansea University Bay Campus SA1</strong> —
              The modern waterfront sport and fitness complex at the Bay Campus
              on Fabian Way, serving approximately 22,000 Swansea University
              students. Fitness suites, sports halls, studios and changing areas
              across the Bay Campus generate student-facing glazing film demand
              for frosted film, manifestation and solar-control. The south-facing
              glazed elevations overlooking Swansea Bay are a primary solar-control
              film candidate.
            </p>
            <p>
              <strong className="text-foreground">Uplands SA2</strong> —
              Swansea&apos;s most concentrated independent fitness corridor along
              Uplands Crescent and the Sketty Road commercial zone. CrossFit
              boxes, boxing gyms, yoga studios and personal training spaces
              generate studio glass one-way mirror film, changing room frosted
              film and Building Regulations manifestation demand from Swansea&apos;s
              growing independent operator market.
            </p>
            <p>
              <strong className="text-foreground">Swansea city centre SA1</strong> —
              PureGym and The Gym Group city-centre Swansea sites, along with
              national hotel health club operators in the Swansea SA1 core,
              generate ongoing refurbishment demand for changing room film and
              manifestation across the city-centre commercial gym market.
            </p>
            <p>
              <strong className="text-foreground">David Lloyd Swansea — Llandarcy SA10</strong> —
              The David Lloyd health club near Llandarcy, Neath Port Talbot,
              serving south-west Swansea and the Neath SA10/SA11 catchment.
              Changing room privacy film, studio glass and poolside film across
              the full health club footprint.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Swansea
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Swansea and South West Wales gym fit-out contractors, FM
              companies, sign companies and property management businesses
              managing window film programmes across Welsh leisure sites, WRPX
              operates as a white-label installation partner. We attend under
              your instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Swansea gym
              programmes. For national gym chain operators managing Swansea sites
              within a wider UK or Welsh window film programme, our South Yorkshire
              base via the M4 corridor means we can cover Swansea alongside Cardiff
              and other South Wales sites in a co-ordinated Welsh mobilisation —
              the most practical arrangement for multi-site programmes across Wales.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Swansea and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Cardiff and South Wales</p>
            </Link>
            <Link href="/window-film/retail-window-film-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Swansea and South West Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Swansea</p>
            </Link>
            <Link href="/window-film/gym-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Bristol and the West</p>
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
              Swansea gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Swansea or South West Wales gym location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              3 hours 30 minutes from South Yorkshire via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Swansea Gym Quote →
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
