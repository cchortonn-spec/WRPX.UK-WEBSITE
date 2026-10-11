import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Manchester | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Manchester and Greater Manchester — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, David Lloyd, The Gym Group, Nuffield Health and all Manchester M postcode gyms and leisure centres. Installation available citywide.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Manchester — frosted, solar control, manifestation and privacy film for Manchester gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Manchester and Greater Manchester. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed gym floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Manchester city centre M1/M2, Ancoats M4, Salford M5/M6, Trafford M15/M17, Didsbury M20, Fallowfield M14, Withington M20, Chorlton M21 and all Greater Manchester M postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/window-film/gym-window-film-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Manchester gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most common Manchester gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disrupting class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare on exposed Manchester city-centre and Trafford sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is increasingly common across Manchester independent and chain fitness operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Manchester and Greater Manchester M postcodes. PureGym operates multiple Manchester locations — Manchester city centre M1, Salford M5, Trafford M17 and others across the metropolitan area. David Lloyd Manchester at Cheadle (SK8) and David Lloyd at the Trafford Centre (M17) are large premium health clubs with pool, spa and group exercise studios where solar-control film, frosted privacy film and DDA manifestation are all standard applications. Nuffield Health Manchester operates multiple sites across the city including Manchester M3 and Didsbury M20. The Gym Group covers the budget-to-mid range across central Manchester. Manchester City Council leisure facilities — Manchester Aquatics Centre M13, Arcadia Leisure Centre M16, Abraham Moss Leisure Centre M8 and others — all carry glazed changing rooms, poolside windows and internal partitions where window film specification applies. Boutique operators, CrossFit boxes, yoga and pilates studios and independent gyms concentrated in the Ancoats M4, Northern Quarter M4, Didsbury M20, Fallowfield M14 and Chorlton M21 zones are also covered.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Manchester gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Manchester city centre via the M1 north and M67/M60 or the M62 west. Survey visits for Manchester gyms can typically be arranged within a few days of enquiry. A typical Manchester gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Manchester PT studio or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Manchester gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Manchester gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is neat and visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Manchester gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Manchester gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Manchester gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Greater Manchester. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Manchester City Council leisure portfolios and multi-site national gym chain operators managing Manchester locations within a wider UK window film programme, our South Yorkshire position means we can cover Manchester, Salford, Trafford and the wider Greater Manchester region without a travel premium that a more distant national installer would need to charge. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Manchester and Greater Manchester M postcodes — M1 (Manchester city centre — multiple gym chain locations, converted commercial-to-gym units and boutique fitness studios), M2 (Deansgate/St John&apos;s — premium gym and studio cluster in central Manchester), M3 (Spinningfields/Salford border — Nuffield Health Manchester and corporate wellness facilities in office developments), M4 (Ancoats/Northern Quarter — Manchester&apos;s growing boutique fitness zone with CrossFit boxes and yoga studios in converted warehouse spaces), M5 (Salford — PureGym Salford and community leisure provision), M6 (Salford/Pendleton — leisure centre and community gym provision), M13 (Rusholme/Fallowfield corridor — Manchester Aquatics Centre M13 is the principal city sports hub, proximity to University of Manchester), M14 (Fallowfield — dense student and young professional fitness market, independent gym cluster), M15 (Hulme/Castlefield — creative and residential quarter gym provision), M16 (Trafford Park/Old Trafford — Arcadia Leisure Centre M16, stadium-adjacent gym market), M17 (Trafford Centre — David Lloyd Trafford Centre and out-of-town leisure destination), M20 (Didsbury — premium south Manchester health club zone, Nuffield Health Didsbury, boutique studios), M21 (Chorlton — Manchester&apos;s densest independent wellness and yoga studio corridor). Wider Greater Manchester: Salford City M5/M6/M7, Stockport SK, Trafford M15-M17, Bolton BL, Oldham OL, Rochdale OL, Bury BL and Wigan WN postcodes are within regular reach from our South Yorkshire base.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Manchester &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Manchester and Greater Manchester. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control for
            glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. Manchester city centre, Ancoats, Salford, Trafford,
            Didsbury, Fallowfield, Chorlton and all Greater Manchester M postcode
            gym and leisure facilities. Approximately 1 hour from our South Yorkshire
            base via the M1 north and M67/M60 or M62.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is the UK&apos;s second-largest city by economic output, with
              a city-region population exceeding 2.8 million and a gym and fitness
              market that reflects the breadth of that population — from premium
              David Lloyd clubs in the southern suburbs, through the major national
              chains across the city core, to a dense and growing boutique fitness
              sector in Ancoats, the Northern Quarter, Didsbury and Chorlton.
            </p>
            <p>
              Manchester, Manchester Metropolitan and Salford universities together
              bring well over 100,000 students to the metropolitan area, with the
              strongest concentration in the Fallowfield M14 and Withington M20
              zones to the south of the city centre. The Manchester Aquatics Centre
              in Moss Side M13 — built for the 2002 Commonwealth Games — is a
              principal city leisure hub with large glazed areas across the pool
              complex, changing rooms and fitness facilities. The Etihad Campus
              in east Manchester includes the National Cycling Centre and Manchester
              City FC facilities, both with specialist window film requirements.
            </p>
            <p>
              Manchester&apos;s commercial office core in Spinningfields M3, NOMA M4
              and the city-centre M1/M2 zone increasingly incorporates on-site gym
              and wellness facilities within major office and mixed-use developments.
              Frosted privacy film for changing rooms and solar-control film for
              glazed fitness floors are frequently part of the fit-out specification
              in these buildings — an expanding subcontract and white-label
              installation opportunity.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Manchester
              city centre via the M1 north and M67/M60 or the M62 west. Manchester
              gyms benefit from fast local survey and installation response without
              the premium that a more distant national installer would need to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Manchester
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Manchester
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
                exercise room glass walls in Manchester fitness studios — mirrored
                on the bright studio side, view-through from the darker corridor.
                Popular for yoga studios, spin rooms and CrossFit boxes in
                Ancoats and the Northern Quarter.
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
                relevant for Manchester city-centre and Trafford gyms with
                large glazed south-facing facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Manchester gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Manchester gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Manchester leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Manchester city centre M1/M2</strong> —
              the primary commercial gym cluster, with multiple PureGym, The Gym
              Group and national chain locations in and around the city core.
              Office and mixed-use developments across the M1 and M2 zones
              increasingly incorporate on-site gym and wellness facilities
              where frosted film for changing rooms and solar-control film
              for glazed fitness spaces are standard fit-out components.
            </p>
            <p>
              <strong className="text-foreground">Ancoats and Northern Quarter M4</strong> —
              Manchester&apos;s fastest-growing boutique fitness zone, concentrated
              in the city&apos;s creative and cultural quarter to the north-east of
              the centre. Converted Victorian warehouse and mill spaces host
              CrossFit boxes, yoga studios, personal training studios and
              independent gyms that frequently need frosted film on street-facing
              studio glass, one-way mirror film on observation panels and
              branded decorative film for studio identity.
            </p>
            <p>
              <strong className="text-foreground">Didsbury and south Manchester M20/M21</strong> —
              Manchester&apos;s premium south-side gym corridor. Nuffield Health Didsbury
              M20 and David Lloyd Cheadle SK8 serve the affluent south Manchester
              residential population. The Chorlton M21 zone has a dense independent
              wellness and yoga studio market along the Barlow Moor Road and
              Manchester Road corridors, where frosted studio glazing and branded
              film treatments are the most common applications.
            </p>
            <p>
              <strong className="text-foreground">Fallowfield and student gym zones M14</strong> —
              Fallowfield M14 is the primary student residential zone for University
              of Manchester students, with fitness demand concentrated around
              the Wilmslow Road and the Fallowfield and Withington High Streets.
              The Manchester Aquatics Centre in adjacent Moss Side M13 — the
              city&apos;s principal public swimming and fitness complex — has poolside
              glazing, changing room windows and internal glazed partitions where
              professional window film specification is required.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Manchester
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Manchester gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple Manchester and Greater Manchester leisure sites,
              WRPX operates as a white-label installation partner. We attend under
              your instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Manchester gym
              programmes. For national gym chain operators — PureGym, David Lloyd,
              The Gym Group, Nuffield Health — managing Manchester sites within a
              wider UK window film programme, our South Yorkshire position means
              we can cover Manchester and the wider Greater Manchester region
              without the travel premium that a more distant national installer
              would need to build into the quote.
            </p>
            <p>
              We also cover Salford M5/M6/M7, Trafford M15-M17, Stockport SK,
              Bolton BL, Bury BL, Oldham OL and the wider Greater Manchester
              leisure portfolio as local rather than out-of-area locations —
              all within straightforward daily reach from our South Yorkshire base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Manchester window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/frosted-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Manchester</p>
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
              Manchester gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Manchester gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Manchester Gym Quote →
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
