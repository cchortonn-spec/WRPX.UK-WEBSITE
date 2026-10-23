import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Newcastle | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Newcastle upon Tyne, Gateshead and Tyne and Wear — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, The Gym Group, David Lloyd, Gateshead Leisure Centre and all Newcastle NE postcode gyms and leisure facilities. Approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M).",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-newcastle/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Newcastle — frosted, solar control, manifestation and privacy film for Newcastle gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Newcastle upon Tyne, Gateshead and Tyne and Wear. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. PureGym, The Gym Group, David Lloyd Newcastle, Gateshead Leisure Centre and all Newcastle NE postcode gym and leisure facilities. Approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M)."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Newcastle", item: "https://www.wrpx.co.uk/window-film/gym-window-film-newcastle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Newcastle gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Newcastle gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — widely used across Newcastle&apos;s growing boutique fitness, boxing gym and yoga studio market. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Newcastle city-centre and Gateshead waterfront gym units with large glazed frontages. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Newcastle&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newcastle and Gateshead gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Newcastle and Tyne and Wear NE postcodes. PureGym and The Gym Group operate multiple Newcastle city-centre NE1 and suburban sites, with ongoing refurbishment programmes creating consistent changing room frosted film and DDA manifestation demand. Gateshead Leisure Centre NE8 — a major public leisure facility — generates pool-side glazing, changing room privacy film and DDA manifestation demand across a substantial multi-zone building. David Lloyd Newcastle in the NE12 zone is one of the city&apos;s largest private health and tennis clubs, with solar-control on glazed court sections, changing room privacy and studio one-way mirror film. Newcastle University NU and Northumbria University NE1 sports centres add a significant university leisure market segment with refurbishment cycles generating glass film demand. Eldon Square leisure and fitness operators in Newcastle city centre NE1 create consistent changing room and manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Newcastle gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Newcastle upon Tyne via the A1(M). Survey visits for Newcastle gyms can typically be arranged within 3 to 5 days of enquiry. A typical Newcastle gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Newcastle boutique fitness studios or personal training spaces can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Newcastle gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Newcastle gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Newcastle gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Newcastle gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Newcastle and Tyne and Wear gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Newcastle and Gateshead. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. We are approximately 1 hour 30 minutes from Newcastle via the A1(M) and can cover Newcastle alongside Sunderland, Middlesbrough and other North East sites in a co-ordinated multi-site programme. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newcastle and Tyne and Wear postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newcastle and Tyne and Wear NE postcodes — NE1 (Newcastle city centre: Eldon Square NE1 — the primary covered retail and leisure destination with gym and fitness operators across the centre footprint; Newcastle Central Station NE1 zone — the commercial core with corporate gym membership demand from professional services occupiers; Grainger Town NE1 — Georgian quarter with boutique fitness and wellness studios; Northumbria University City Campus NE1 generates university gym and fitness demand), NE2 (Jesmond — Newcastle&apos;s prosperous inner-north residential zone with private health clubs, yoga studios and personal training studios along Osborne Road; Gosforth Road corridor), NE3 (Gosforth — north Newcastle affluent residential suburb with independent health clubs and gym provision), NE4 (Fenham, Westgate — inner west Newcastle residential zone with community leisure provision), NE5 (Denton, Westerhope — west Newcastle residential and suburban leisure zone), NE6 (Byker, Walker — east Newcastle zone with community leisure provision; NE6 Sport on Dalton Street is a community leisure facility generating window film demand), NE7 (High Heaton, Benton — north-east Newcastle residential zone), NE8 (Gateshead town centre — Gateshead Leisure Centre NE8 is a major public leisure facility on Leisure Lane with a swimming pool, fitness suite, sports hall and changing facilities generating substantial window film demand; Gateshead Quays NE8 development adds further leisure and hospitality glazing film demand), NE9 (Low Fell, Wrekenton — south Gateshead residential zone), NE10 (Felling, Pelaw — east Gateshead residential zone), NE11 (Team Valley, Dunston — south-west Gateshead commercial zone; MetroCentre NE11 is the UK&apos;s largest covered shopping and leisure destination, with gym and leisure operators across the leisure village generating changing room and manifestation film demand), NE12 (Killingworth, Longbenton — north-east Newcastle suburban zone; David Lloyd Newcastle at Four Lane Ends NE12 is one of the city&apos;s major private health and tennis clubs), NE13 (Woolsington, Airport — north Newcastle zone), NE15 (Throckley, Newburn — west Newcastle residential zone). Durham DH1, Sunderland SR, North Shields NE29 and wider Tyne and Wear also covered. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Newcastle via the A1(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmNewcastlePage() {
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
            <span className="text-foreground">Newcastle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Newcastle &amp; Tyne and Wear
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Newcastle
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Newcastle upon Tyne, Gateshead and Tyne and Wear.
            Frosted privacy film for changing rooms, one-way mirror film for
            studio glass, solar control for glazed gym floors, DDA-compliant
            glass manifestation and branded decorative vinyl. PureGym, The Gym
            Group, David Lloyd, Gateshead Leisure Centre and all Newcastle NE
            postcode gym and leisure facilities. Approximately 1 hour 30
            minutes from our South Yorkshire base via the A1(M).
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Newcastle Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Newcastle gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newcastle upon Tyne is one of the UK&apos;s major regional cities —
              a metropolitan economy spanning Tyne and Wear with a gym and
              leisure market that encompasses significant public leisure
              infrastructure, national chain gym operators, a growing private
              health club sector and an active independent fitness scene
              concentrated in the Jesmond NE2 and city-centre NE1 zones.
            </p>
            <p>
              Gateshead Leisure Centre NE8 is one of the North East&apos;s major
              public leisure facilities — a multi-zone site on Leisure Lane
              with swimming pool, fitness suite, sports hall and changing
              facilities generating substantial window film demand for changing
              room privacy, DDA manifestation throughout and solar-control on
              glazed leisure sections. PureGym and The Gym Group operate
              multiple Newcastle and Gateshead sites with ongoing refurbishment
              programmes creating consistent changing room and manifestation
              demand.
            </p>
            <p>
              The MetroCentre NE11 — the UK&apos;s largest covered shopping and
              leisure complex — contains a leisure village with gym and fitness
              operators that generate changing room privacy film and DDA
              manifestation demand. David Lloyd Newcastle at Four Lane Ends NE12
              is a large private health and tennis club generating solar-control
              on glazed court sections, studio one-way mirror film and changing
              room privacy film.
            </p>
            <p>
              Newcastle University and Northumbria University NE1 sports centres
              add a significant university market, with consistent refurbishment
              cycles generating glass film demand. WRPX is based in South
              Yorkshire, approximately 1 hour 30 minutes from Newcastle via the
              A1(M) — a direct dual-carriageway route north.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Newcastle
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Newcastle and Gateshead gyms. Humidity-resistant adhesive for
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
                view-through from the darker corridor. Used in yoga studios,
                spin rooms and boutique fitness class areas across
                Newcastle&apos;s independent and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Newcastle
                Quayside and Gateshead waterfront gym units with large
                south-facing glazed frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Newcastle and Gateshead gym and leisure
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
                incorporating Newcastle gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy in
                a single installation across Newcastle&apos;s independent and
                chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Newcastle and Gateshead
                leisure centre poolside glazing, spa areas and wet-side
                changing environments — humidity-appropriate adhesive, edge
                sealing and film grade selected for chlorine-adjacent
                installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle and Gateshead gym zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Gateshead Leisure Centre NE8</strong> —
              one of the North East&apos;s major public leisure facilities on
              Leisure Lane, with swimming pool, fitness suite, sports hall and
              multi-zone changing facilities. Privacy film for changing room
              windows, DDA manifestation on glass partitions and doors, and
              solar-control on glazed leisure sections are the primary
              applications at this large public site.
            </p>
            <p>
              <strong className="text-foreground">Newcastle city centre NE1</strong> —
              Eldon Square&apos;s leisure and fitness operators, Grainger Town
              boutique fitness studios and Northumbria University City Campus
              sports provision generate consistent changing room frosted film,
              DDA manifestation and branded studio glass demand across the NE1
              zone.
            </p>
            <p>
              <strong className="text-foreground">Jesmond NE2</strong> —
              Newcastle&apos;s most prosperous inner-residential suburb, with
              private health clubs, yoga studios and personal training spaces
              along the Osborne Road corridor. One-way mirror film for studio
              observation glass and frosted film for treatment room and changing
              glazing are the principal applications.
            </p>
            <p>
              <strong className="text-foreground">MetroCentre NE11 Gateshead</strong> —
              the UK&apos;s largest covered shopping and leisure complex contains
              a leisure village with gym operators generating changing room
              privacy and DDA manifestation demand alongside the retail window
              film demand across the centre&apos;s retail units.
            </p>
            <p>
              <strong className="text-foreground">David Lloyd Newcastle NE12</strong> —
              the large private health, tennis and fitness club at Four Lane
              Ends NE12 generates solar-control on glazed court and fitness
              sections, studio one-way mirror film and changing room privacy
              film demand for this substantial multi-zone site.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Newcastle
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Newcastle and Tyne and Wear gym fit-out contractors, FM
              companies, sign companies and property management businesses
              managing window film programmes across North East leisure sites,
              WRPX operates as a white-label installation partner. We attend
              under your instructions, follow your site access protocols and
              provide photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Newcastle gym
              programmes. For national gym chain operators managing Newcastle
              sites within a wider UK window film programme, our South Yorkshire
              base on the A1(M) corridor means we can cover Newcastle alongside
              Sunderland, Middlesbrough and other North East sites in a
              co-ordinated North East mobilisation — the most practical
              arrangement for multi-site programmes across the region.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Newcastle and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/window-film/retail-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Newcastle</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
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
              Newcastle gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Newcastle or Gateshead gym location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              1 hour 30 minutes from South Yorkshire via the A1(M).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Newcastle Gym Quote →
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
