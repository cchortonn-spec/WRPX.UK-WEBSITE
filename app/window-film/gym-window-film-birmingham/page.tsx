import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Birmingham | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Birmingham and the West Midlands — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. David Lloyd, PureGym, Nuffield Health, The Gym Group and all Birmingham B postcode gyms and leisure centres. Installation available citywide.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Birmingham — frosted, solar control, manifestation and privacy film for Birmingham gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Birmingham and the West Midlands. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed gym floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Birmingham city centre B1/B2/B3, Edgbaston B15, Digbeth B5, Bournville B30, Selly Oak B29, Erdington B23, Sutton Coldfield B72-B76 and all West Midlands B postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/gym-window-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Birmingham gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partition glass is the most common Birmingham gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disrupting class participants. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — relevant on Birmingham city-centre and Edgbaston south-facing sites. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing completes the typical Birmingham gym specification.",
      },
    },
    {
      "@type": "Question",
      name: "Which Birmingham gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Birmingham and West Midlands B postcodes. David Lloyd Birmingham at Edgbaston B15 is the city&apos;s largest premium health club, with pool, spa, tennis and group exercise studios where solar-control film, frosted privacy film and DDA manifestation are all standard applications. PureGym operates multiple Birmingham locations — Broad Street B1 city centre, Digbeth B5, Erdington B23 and others across the metropolitan area. Nuffield Health Birmingham city centre and Nuffield Health Bournville B30 both carry glazed changing rooms and studio glass requiring professional film specification. The Gym Group covers the mid-range across central Birmingham and the suburbs. Birmingham City Council leisure facilities — Cannon Hill Park Aquatics Centre B12, Erdington Leisure Centre B23, Ladywood Leisure Centre B16 and others — all carry glazed changing rooms, poolside windows and internal partitions where window film specification applies. Boutique operators, CrossFit boxes, yoga studios and independent gyms in Digbeth B5, the Jewellery Quarter B18, Harborne B17 and the Moseley-Bournbrook corridor are also within scope.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Birmingham gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Birmingham city centre via the M1 south and M42 west or the A38(M). Survey visits for Birmingham gyms can typically be arranged within a few days of enquiry. A typical Birmingham gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Birmingham PT studio or boutique fitness installations can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Birmingham gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Birmingham gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is neat and visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Birmingham gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Birmingham gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Birmingham gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across the West Midlands. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Birmingham City Council leisure portfolios and multi-site national gym chain operators managing Birmingham locations within a wider UK window film programme, our South Yorkshire position means we can cover Birmingham and the wider West Midlands region without a travel premium that a more distant national installer would need to charge. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Birmingham postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Birmingham and West Midlands B postcodes — B1 (Birmingham city centre Broad Street — multiple gym chain locations and converted commercial-to-gym units), B2 (New Street/city core — commercial gym provision within office and mixed-use developments), B3 (Jewellery Quarter — boutique fitness studios in converted Victorian warehouse and factory spaces), B5 (Digbeth — Birmingham&apos;s creative quarter with independent gyms and CrossFit boxes), B15 (Edgbaston — David Lloyd Edgbaston and the premium south Birmingham health club zone), B16 (Ladywood — city council leisure provision), B17 (Harborne — independent gym and wellness studio zone south of the city centre), B18 (Jewellery Quarter north — fitness facilities in the regenerating mixed-use corridor), B23 (Erdington — PureGym and Birmingham City Council leisure provision in north Birmingham), B29 (Selly Oak — student-adjacent gym zone serving University of Birmingham and Birmingham City University students), B30 (Bournville — Nuffield Health Bournville and south Birmingham leisure provision). Wider West Midlands: Sandwell B64-B71, Walsall WS, Wolverhampton WV, Coventry CV, Solihull B90-B93 and Sutton Coldfield B72-B76 all within regular reach from our South Yorkshire base.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Birmingham &amp; West Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Birmingham and the West Midlands. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control for
            glazed gym floors, DDA-compliant glass manifestation and branded
            decorative vinyl. Birmingham city centre, Edgbaston, Digbeth, Selly Oak,
            Harborne, Erdington, Sutton Coldfield and all West Midlands B postcode
            gym and leisure facilities. Approximately 1 hour 30 minutes from our
            South Yorkshire base via the M1 south and M42.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the UK&apos;s second-largest city by population, with a city
              region exceeding 2.9 million people and one of the most diverse and
              dense gym and fitness markets outside London. The premium south side
              — Edgbaston B15, Harborne B17, Bournville B30 — carries David Lloyd
              and Nuffield Health alongside independent boutique operators. The
              city centre B1/B2/B5 and Digbeth B5 creative quarter host major chain
              gym locations and an expanding boutique fitness sector. North Birmingham
              — Erdington B23, Sutton Coldfield B72-B76 — has both national chain
              provision and council leisure facilities serving large suburban populations.
            </p>
            <p>
              Birmingham, Aston, Birmingham City University, Newman University and
              University College Birmingham together bring well over 60,000 students
              into the metropolitan area, with the highest concentration in the
              Selly Oak B29 and Edgbaston B15 zones near the main University of
              Birmingham campus. The associated gym and fitness demand at the
              student-adjacent gym locations — PureGym Selly Oak, the university
              sports facilities and independent operators along the Pershore Road —
              drives consistent window film demand for changing rooms, studio glass
              and glazed fitness areas.
            </p>
            <p>
              Birmingham&apos;s commercial office core around Brindleyplace B1,
              Centenary Square B1 and the Jewellery Quarter B3/B18 increasingly
              incorporates on-site gym and wellness facilities within major office
              and mixed-use developments. Frosted privacy film for changing rooms
              and solar-control film for glazed fitness floors are part of the
              standard fit-out specification in these buildings — an expanding
              subcontract and white-label installation opportunity.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from
              Birmingham city centre via the M1 south and M42 west or the A38(M).
              Birmingham gyms benefit from fast local survey and installation response
              without the premium that a more distant national installer would need
              to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Birmingham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Birmingham
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
                exercise room glass walls in Birmingham fitness studios — mirrored
                on the bright studio side, view-through from the darker corridor.
                Popular in yoga, spin and group exercise studios across Edgbaston
                and the Birmingham city centre fitness corridor.
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
                relevant for Edgbaston B15 and Broad Street B1 gyms with
                large south or west-facing glazed facades.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Birmingham gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Birmingham gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Birmingham leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations at Cannon Hill
                Aquatics Centre and similar facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Birmingham gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Birmingham city centre B1/B2/B3</strong> —
              the primary commercial gym cluster, with multiple PureGym, The Gym
              Group and national chain locations across Broad Street B1, the Jewellery
              Quarter B3 and the New Street B2 city core. Office and mixed-use
              developments in Brindleyplace and Centenary Square increasingly
              incorporate on-site gym and wellness facilities where frosted film
              for changing rooms and solar-control film for glazed fitness spaces
              are standard fit-out components.
            </p>
            <p>
              <strong className="text-foreground">Digbeth and creative quarter B5</strong> —
              Birmingham&apos;s fastest-growing creative and cultural district, with
              converted Victorian warehouse and factory spaces hosting CrossFit boxes,
              yoga studios, personal training studios and independent gyms. These
              boutique operators frequently need frosted film on street-facing studio
              glass, one-way mirror film on observation panels and branded decorative
              film for studio identity in repurposed industrial buildings.
            </p>
            <p>
              <strong className="text-foreground">Edgbaston and south Birmingham B15/B17</strong> —
              Birmingham&apos;s premium south-side gym corridor. David Lloyd Edgbaston B15
              is the city&apos;s largest premium health club, with pool, spa, tennis and
              group exercise studios where solar-control film, changing room frosted
              film and DDA manifestation are all in specification. Harborne B17 has
              a dense independent wellness and boutique gym market along the
              High Street corridor, with studio glazing and privacy film applications
              common.
            </p>
            <p>
              <strong className="text-foreground">Selly Oak and student gym zones B29</strong> —
              Selly Oak B29 is the primary student residential zone for University
              of Birmingham, with gym demand concentrated around the Bristol Road
              and Oak Tree Lane corridors. The university sports facilities on campus
              B15 — University of Birmingham Sport centre — carry glazed changing
              rooms, pool facilities and internal partitions where professional
              window film specification is required.
            </p>
            <p>
              <strong className="text-foreground">Erdington and north Birmingham B23</strong> —
              PureGym Erdington and Birmingham City Council leisure provision in
              north Birmingham serve a large suburban population. Sutton Coldfield
              B72-B76 to the north-east has a substantial premium leisure market
              including national health club operators with pool and spa facilities.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Birmingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Birmingham gym fit-out contractors, FM companies, sign companies
              and property management businesses managing window film programmes
              across multiple Birmingham and West Midlands leisure sites, WRPX
              operates as a white-label installation partner. We attend under
              your instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Birmingham gym
              programmes. For national gym chain operators — David Lloyd, PureGym,
              The Gym Group, Nuffield Health — managing Birmingham sites within a
              wider UK window film programme, our South Yorkshire position means
              we can cover Birmingham and the wider West Midlands without the
              travel premium that a more distant national installer would need to
              build into the quote.
            </p>
            <p>
              We also cover Sandwell B64-B71, Walsall WS, Wolverhampton WV, Coventry
              CV, Solihull B90-B93 and the wider West Midlands metropolitan area
              as local rather than out-of-area locations — all within straightforward
              daily reach from our South Yorkshire base.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Birmingham window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Manchester and Greater Manchester</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Birmingham</p>
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
              Birmingham gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Birmingham gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Birmingham Gym Quote →
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
