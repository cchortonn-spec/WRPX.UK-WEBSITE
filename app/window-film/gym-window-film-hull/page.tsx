import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Hull | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Hull and East Yorkshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Hull Arena, Freedom Leisure, Humber Bridge leisure zone and all HU postcode gyms. Approximately 1 hour 30 minutes from our South Yorkshire base.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-hull/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Hull — frosted, solar control, manifestation and privacy film for Hull gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Hull and East Yorkshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Hull Arena, Freedom Leisure Hull, Humber Bridge leisure zone and all Hull HU postcode gym and leisure facilities. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and A63."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Hull", item: "https://www.wrpx.co.uk/window-film/gym-window-film-hull/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Hull gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Hull gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare across Hull gym and leisure centre sites — particularly relevant for newer HU postcode gym-fit retail-park units with large glazed frontages. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Hull&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Hull and East Yorkshire HU postcodes. Hull Arena on Walton Street HU2 is the city&apos;s principal indoor sports arena, with a 3,000-seat auditorium and associated gym and sports facilities generating window film demand for frosted film, DDA manifestation and solar-control. Freedom Leisure operates Kingston Leisure Centre on Walton Street HU2, providing a 25-metre pool, fitness gym, group exercise studios and sports halls — a multi-zone window film opportunity. Heron Foods Leisure Park and out-of-town gym operators in the HU4 and HU10 zones generate solar-control and frosted film demand. National chain gyms — PureGym, The Gym Group, Nuffield Health, Anytime Fitness — operate across Hull city centre HU1 and suburban retail park zones. The growing boutique fitness and independent personal training studio market across the HU5 and HU6 student quarter adds regular window film demand for smaller studio installations.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Hull gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M62 and A63. Survey visits for Hull gyms can typically be arranged within 2 to 3 days of enquiry. A typical Hull gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Hull personal training studios or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Hull gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Hull gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Hull gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Hull gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Hull gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Hull and East Yorkshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. We are approximately 1 hour 30 minutes from Hull via the M62 and A63 — a reliable motorway route — and can cover Hull alongside Yorkshire-based gym sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull and East Yorkshire postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Hull and East Yorkshire HU postcodes — HU1 (Hull city centre: the main commercial core with national chain gyms, retail-park leisure provision and city-centre boutique fitness studios along the Prospect Street and King Edward Street commercial corridor), HU2 (Walton Street and the Hull Arena zone: the principal concentration of large-venue leisure and sport facilities in Hull; Hull Arena and Kingston Leisure Centre are both in the HU2 zone, making this the highest-volume single-area gym window film opportunity in the city), HU3 (Hessle Road and west Hull: community gym and leisure provision in the west Hull residential zone; the Boulevard leisure centre corridor and Hull Royal Infirmary zone both generate leisure facility window film demand), HU4 (Anlaby, Gypsyville, west Hull fringe: suburban gym and leisure provision in the west Hull residential belt), HU5 (Newland Avenue student quarter: boutique fitness studios, personal training spaces and smaller independent gyms in the HU5 student corridor), HU6 (University of Hull campus zone: university sports facilities on the Cottingham Road campus generate window film demand for sports halls, studio glazing and changing room privacy film), HU7 (Bransholme — north Hull leisure zone: community gym and sports centre provision), HU8 (east Hull residential zone: suburban gym and leisure provision), HU9 (east Hull and Holderness Road: out-of-town leisure park gym provision on the eastern retail corridor), HU10 (Willerby and Kirk Ella — west Hull suburban: health club and private gym demand in the premium west Hull residential zone). Beverley HU17, Driffield YO25, Goole DN14 and wider East Riding also covered. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M62 and A63.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmHullPage() {
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
            <span className="text-foreground">Hull</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Hull
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Hull and East Yorkshire. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. Hull Arena, Kingston Leisure Centre, out-of-town
            leisure park gyms and all Hull HU postcode gym and leisure
            facilities. Approximately 1 hour 30 minutes from our South
            Yorkshire base via the M62 and A63.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Hull Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Hull gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull is East Yorkshire&apos;s principal city — a port and cultural
              city of approximately 260,000 people with a gym and leisure
              market supported by a mix of major public leisure infrastructure
              and a growing private gym sector. Hull Arena on Walton Street HU2
              is the city&apos;s flagship indoor sports and events venue, with gym
              and fitness provision alongside the main arena and associated
              sports halls generating window film demand for changing room
              privacy, DDA manifestation and studio glazing.
            </p>
            <p>
              Kingston Leisure Centre on Walton Street HU2 — operated by Freedom
              Leisure — provides a 25-metre pool, a fitness gym, group exercise
              studios and sports halls across a substantial leisure complex.
              Multi-zone facilities like Kingston generate layered window film
              requirements: frosted film in changing rooms, solar-control on
              south-facing glazed gym sections, DDA manifestation throughout,
              and branded decorative film on studio glass.
            </p>
            <p>
              National chain gym operators — PureGym, The Gym Group, Nuffield
              Health, Anytime Fitness — run multiple Hull locations across the
              city centre HU1 and suburban retail park zones, with ongoing
              maintenance and refurbishment programmes creating consistent window
              film demand. The growing boutique fitness and personal training
              studio market across the HU5 Newland Avenue student corridor and
              HU6 university campus zone adds a segment of smaller, fast-growing
              fitness spaces that regularly need frosted film and manifestation
              on their studio glazing.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes
              from Hull via the M62 and A63 — a reliable motorway route. We can
              survey Hull gym sites efficiently and cover Hull alongside other
              East Yorkshire and Yorkshire sites in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Hull
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Hull
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
                rooms and fitness class areas across Hull.
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
                applicable across Hull Arena, Kingston Leisure Centre and
                out-of-town gym retail-park units with large glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Hull gym and leisure facilities — frosted bands,
                etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or frosted film incorporating
                Hull gym branding on studio glass, reception glazing and partition
                panels — combining identity and privacy in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Hull leisure centre poolside
                glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations such as Kingston
                Leisure Centre&apos;s pool complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hull gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Hull Arena HU2</strong> —
              Hull&apos;s flagship indoor sports and events venue on Walton Street
              in the Boulevard leisure zone, with a capacity arena and associated
              gym, fitness and sports hall facilities. Frosted film for changing
              rooms, DDA manifestation throughout the facility and solar-control
              on glazed sections are the primary applications.
            </p>
            <p>
              <strong className="text-foreground">Kingston Leisure Centre HU2</strong> —
              operated by Freedom Leisure on Walton Street, Kingston combines a
              25-metre pool, fitness gym, group exercise studios and sports halls
              within a major public leisure facility. The multi-zone nature of
              the site generates layered window film requirements across changing
              rooms, studio glazing and poolside areas.
            </p>
            <p>
              <strong className="text-foreground">Hull city centre HU1</strong> —
              the commercial gym market in the city centre zone, with national
              chain gyms on Prospect Street, the St Stephen&apos;s shopping centre
              leisure zone and independent fitness studios across the HU1 retail
              and commercial core.
            </p>
            <p>
              <strong className="text-foreground">HU5 Newland Avenue corridor</strong> —
              the traditional student and young-professional zone of Hull, with
              boutique fitness studios, personal training spaces and smaller
              independent gyms generating regular frosted film and manifestation
              demand.
            </p>
            <p>
              <strong className="text-foreground">Out-of-town retail leisure parks</strong> —
              suburban gym operators in the Heron Foods Leisure Park zone,
              Kingswood retail park HU7 and the Anlaby HU4 retail corridor
              generate solar-control film demand on large glazed frontages and
              frosted film for changing rooms across the east and west Hull
              leisure park belt.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Hull
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Hull gym fit-out contractors, FM companies, sign companies and
              property management businesses managing window film programmes
              across East Yorkshire leisure sites, WRPX operates as a white-label
              installation partner. We attend under your instructions, follow your
              site access protocols and provide photographic sign-off on
              completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Hull gym
              programmes. For national gym chain operators managing Hull sites
              within a wider UK window film programme, our South Yorkshire base
              means we can cover Hull alongside Leeds, Sheffield, York and
              Middlesbrough in a co-ordinated East and West Yorkshire
              mobilisation — the most practical arrangement for multi-site
              northern England programmes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Hull and Yorkshire window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-york/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film York</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across York and North Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Hull</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Hull and East Yorkshire</p>
            </Link>
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Installation</p>
              <p className="mt-1 text-xs text-muted">White-label window film for trade partners</p>
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
              Hull gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Hull gym location, the glazing areas and what you
              need the film to do — privacy, solar control, manifestation or
              branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Approximately 1 hour 30 minutes
              from South Yorkshire via the M62 and A63.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Hull Gym Quote →
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
