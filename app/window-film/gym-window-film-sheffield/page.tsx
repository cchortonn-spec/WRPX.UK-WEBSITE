import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Sheffield | Frosted, Solar Control & Manifestation for Fitness Centres | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Sheffield and South Yorkshire — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. PureGym, The Gym Group, David Lloyd and all Sheffield S postcode gyms. Fast local installation from our South Yorkshire base.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Sheffield — frosted, solar control, manifestation and privacy film for Sheffield gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Sheffield and South Yorkshire. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed gym floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Sheffield city centre, Meadowhall, Hillsborough, Ecclesall Road, Abbeydale, Attercliffe and all Sheffield S postcode gym and leisure facilities."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/gym-window-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Sheffield gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Sheffield gym application — full-height frosted for complete privacy or lower-panel frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disrupting class participants. Solar-control film on south and west-facing glazed gym floors and fitness studio windows reduces solar heat gain and glare. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is increasingly popular across Sheffield independent and chain fitness operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Sheffield S postcodes. This includes PureGym and The Gym Group locations in Sheffield city centre (S1), Meadowhall Retail Park (S9), Hillsborough (S6) and the wider Sheffield metropolitan area. David Lloyd Sheffield (Abbeydale Road South S7) is a premium health club with pool, spa and group exercise studios where solar-control film, frosted film and DDA manifestation are typical applications. Sheffield&apos;s large network of Sheffield City Trust leisure centres — Ponds Forge International Sports Centre S1, Hillsborough Leisure Centre S6, English Institute of Sport Sheffield S9, Woodbourn Road Athletics S9 — all fall within our local service area. Independent gyms, CrossFit boxes, yoga studios, PT studios and specialist fitness operators across Ecclesall Road S11, Attercliffe S9, Hillsborough S6, Rotherham S60 and the wider South Yorkshire area are all covered.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Sheffield gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a South Yorkshire-based business, Sheffield gyms are our local area — we can typically respond to Sheffield enquiries more quickly than a national installer travelling from further afield. Survey visits for Sheffield gyms are usually possible within a few days of enquiry. A typical Sheffield gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Sheffield PT studio or yoga studio installations (studio glass, reception area) can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Sheffield gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Sheffield gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for high-moisture environments. The installation is neat and indistinguishable from sandblasted glass in normal use. We seal all edges to prevent moisture ingress at the edge band — the most important factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Sheffield gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Sheffield gym fit-out contractors and leisure facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Sheffield gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across South Yorkshire. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion. For Sheffield City Trust and South Yorkshire council leisure portfolios managed by FM operators, we can provide consistent installation across multiple South Yorkshire leisure centre locations. RAMS documentation available as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield postcodes and areas do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Sheffield S postcodes — S1 (city centre/Devonshire Quarter/Moorfoot — several PureGym and independent studio locations), S2 (Manor/Heeley/Gleadless/Arbourthorne), S3 (Burngreave/Upperthorpe — close to city centre gym cluster), S6 (Hillsborough/Wadsley/Stannington — Hillsborough Leisure Centre and Hillsborough Arena zone), S7 (Sharrow/Millhouses/Abbeydale — David Lloyd Abbeydale; Ecclesall Road S7/S11 independent studios), S8 (Woodseats/Beauchief/Gleadless Valley), S9 (Attercliffe/Meadowhall/Darnall — English Institute of Sport, Ponds Forge adjacent zone, Meadowhall gym facilities), S10 (Broomhill/Crookes/Fulwood/Ranmoor — Hallamshire Tennis and Squash Club, University of Sheffield sports facilities), S11 (Ecclesall/Hunters Bar/Endcliffe — high-density independent studio zone), S17 (Dore/Totley/Bradway), S20 (Westfield/Sothall/Beighton — Westfield Retail Park gym facilities). Wider South Yorkshire: Rotherham S60–S65, Barnsley S70–S75, Doncaster DN postcode gyms are all within easy daily reach from our South Yorkshire base.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure centres
            across Sheffield and South Yorkshire. Frosted privacy film for changing
            rooms, one-way mirror film for studio glass, solar control for glazed
            gym floors, DDA-compliant glass manifestation and branded decorative
            vinyl. Sheffield city centre, Meadowhall, Hillsborough, Ecclesall Road
            and all S postcode gym and leisure facilities. South Yorkshire-based
            — fast local survey and installation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has a notably large and varied gym and leisure sector for
              a city of its size. The combination of two major universities — the
              University of Sheffield and Sheffield Hallam University, with a
              combined student population approaching 60,000 — and a young
              professional population distributed across the inner city and western
              suburbs creates strong demand for budget gym, boutique studio and
              independent fitness operators across Sheffield city centre and the
              Ecclesall Road, Broomhill and Crookes zones.
            </p>
            <p>
              Sheffield&apos;s established sports and leisure legacy — including Ponds
              Forge International Sports Centre, the English Institute of Sport
              Sheffield, Sheffield Arena and the Hallam FM Arena — reflects the
              city&apos;s depth of sport and leisure investment across both elite and
              community facilities. Sheffield City Trust operates a network of
              leisure centres across all Sheffield districts, including Hillsborough
              Leisure Centre S6, Concord Sports Centre S5, Graves Leisure Centre
              S8 and Birley Spa S12, all of which have window film requirements
              across changing rooms, pool glazing and public-facing glazed areas.
            </p>
            <p>
              The gym chain sector in Sheffield is well represented, with PureGym
              operating multiple locations across the city including Sheffield
              city centre S1 and Meadowhall S9. The Gym Group, DW Fitness and
              independent premium operators including David Lloyd Abbeydale S7
              cover the premium-to-budget range. Boutique operators — CrossFit
              boxes, yoga and pilates studios, cycling studios and PT suites —
              are particularly concentrated along the Ecclesall Road S7/S11
              corridor and in the Broomhill/Crookes S10 zone.
            </p>
            <p>
              WRPX is South Yorkshire-based, which means Sheffield gyms benefit
              from fast local survey and installation response — no long national
              travel days, no minimum visit charges to cover distance, and
              straightforward scheduling around your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Sheffield
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across Sheffield
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
                exercise room glass walls in Sheffield fitness studios — mirrored
                on the bright studio side, view-through from the darker corridor.
                Popular for yoga studios, spin rooms and CrossFit boxes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows across Sheffield
                gym buildings. Cuts UV fading of flooring and equipment without
                blocking natural light.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm and
                1400mm height for full-height glazed panels and internal glass
                doors throughout Sheffield gym and leisure facilities — frosted
                bands, etched-effect, dot pattern or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, motivational text, pattern or printed frosted film
                incorporating Sheffield gym branding on studio glass, reception
                glazing and partition panels — identity and privacy combined in
                a single installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Sheffield leisure centre
                poolside glazing, spa areas and wet-side changing environments —
                humidity-appropriate adhesive, edge sealing and film grade
                selected for chlorine-adjacent installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sheffield city centre S1/S3</strong> —
              the primary budget gym cluster, with multiple PureGym, The Gym Group
              and independent studio locations in and around the city core. Converted
              commercial and retail units used as gyms often have large glazed frontages
              where frosted banding and DDA manifestation are required, alongside
              changing room privacy film.
            </p>
            <p>
              <strong className="text-foreground">Meadowhall and Attercliffe S9</strong> —
              the Meadowhall Retail Park area has established gym facilities adjacent
              to the retail and leisure complex. The Sheffield Olympic Legacy Park at
              Attercliffe S9 — home to the English Institute of Sport Sheffield —
              has substantial glazed sports hall and gym floor areas where solar-control
              film and DDA manifestation are standard applications for large leisure
              buildings.
            </p>
            <p>
              <strong className="text-foreground">Ecclesall Road and Broomhill S7/S10/S11</strong> —
              Sheffield&apos;s highest-density independent boutique fitness zone. Yoga
              studios, CrossFit boxes, personal training studios and independent gyms
              along the Ecclesall Road and Broomhill/Crookes corridors frequently need
              frosted film on street-facing studio glass, one-way mirror film on
              observation panels and branded decorative film for studio identity.
            </p>
            <p>
              <strong className="text-foreground">Hillsborough and north Sheffield S6</strong> —
              Hillsborough Leisure Centre and the arena zone, plus neighbourhood gyms
              across the north Sheffield suburbs. Sheffield City Trust facilities
              across this zone include pool and fitness suite glazing where privacy
              film and solar control are standard service items.
            </p>
          </div>
        </div>
      </section>

      {/* Local advantage section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            South Yorkshire-based — local response for Sheffield gyms
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX is based in South Yorkshire, which means Sheffield gym and leisure
              centre installations are local work — not a long-distance project
              requiring advance logistics planning. Survey visits for Sheffield gyms
              are typically available within a few days of enquiry, and installations
              can be scheduled around your peak and off-peak operational windows
              without the premium that a national installer has to charge to cover
              travel time.
            </p>
            <p>
              For Sheffield gym operators needing urgent changing room privacy film
              ahead of a refit opening or a refurbishment deadline, our local position
              means we can respond faster than most. For national gym operators and
              FM contractors managing Sheffield sites within a wider UK programme, we
              provide the same white-label service and RAMS documentation as we would
              for any other site — with the added benefit of not needing to factor in
              an out-of-area travel supplement for Sheffield specifically.
            </p>
            <p>
              We also cover Rotherham, Barnsley, Doncaster and the surrounding South
              Yorkshire towns — Chapeltown, Stocksbridge, Mosborough, Waverley and
              Brinsworth — as local rather than out-of-area locations for gym and
              leisure centre window film installation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Sheffield window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Frosted and privacy film across Sheffield</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy film for changing rooms and studio glass</p>
            </Link>
            <Link href="/window-film/one-way-mirror-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">One-Way Mirror Film</p>
              <p className="mt-1 text-xs text-muted">Reflective privacy film for studio observation panels</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">DDA-compliant manifestation for gym partitions and doors</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Commercial Window Film</p>
              <p className="mt-1 text-xs text-muted">Full commercial window film service overview</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sheffield gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Sheffield gym location, the glazing areas and what
              you need the film to do — privacy, solar control, manifestation
              or branding. We&apos;ll confirm a specification and price. Subcontract
              and white-label enquiries welcome. Local South Yorkshire survey
              available quickly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Sheffield Gym Quote →
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
