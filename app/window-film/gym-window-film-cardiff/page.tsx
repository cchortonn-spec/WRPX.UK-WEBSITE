import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Cardiff | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Cardiff and the Vale of Glamorgan — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Regulations-compliant glass manifestation and branded decorative vinyl. Sport Wales National Centre CF11, Cardiff International Sports Village CF10, David Lloyd Cardiff and all Cardiff CF postcode gyms and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-cardiff/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Cardiff — frosted, solar control, manifestation and privacy film for Cardiff gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Cardiff and the Vale of Glamorgan. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Regulations-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Sport Wales National Centre CF11, Cardiff International Sports Village CF10, David Lloyd Cardiff, PureGym Cardiff, The Gym Group Cardiff and all Cardiff CF postcode gym and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M4."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Cardiff", item: "https://www.wrpx.co.uk/window-film/gym-window-film-cardiff/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Cardiff gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Cardiff gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — widely used across Cardiff&apos;s growing boutique fitness, CrossFit, yoga studio and boxing gym market in the Roath CF24, Canton CF5 and Cardiff Bay CF10 zones. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Cardiff city-centre CF10 and CF24 gym units with large glazed frontages. Building Regulations-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Cardiff&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Cardiff gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Cardiff CF postcodes and the Vale of Glamorgan. Sport Wales National Centre CF11 at Sophia Gardens is Wales&apos;s primary national sports performance facility generating substantial glazing film demand across its training, competition and fitness areas. Cardiff International Sports Village CF10 in Cardiff Bay is a major multi-sport destination — home to the Cardiff International Pool, an ice rink and leisure facilities — generating pool-side glazing, changing room privacy and manifestation demand. David Lloyd Cardiff generates health club window film demand from its changing room, studio and poolside provision. PureGym and The Gym Group operate Cardiff city-centre CF10 and suburban CF sites with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Cardiff University sport facilities CF10/CF24 generate student-facing leisure glazing film demand. Canton Leisure Centre CF5 in west Cardiff serves its community catchment with changing room privacy and manifestation needs.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Cardiff gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours from Cardiff via the M4 — a direct motorway route south-west across England and into Wales via the Severn crossings. Survey visits for Cardiff gyms can typically be arranged within 5 to 7 days of enquiry. A typical Cardiff gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Cardiff boutique fitness studios in Roath CF24 or Canton CF5 can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Cardiff leisure facilities such as Cardiff International Sports Village CF10, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Cardiff gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Cardiff gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Cardiff gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Cardiff gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Cardiff and South Wales gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Cardiff. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours from Cardiff via the M4 and can cover Cardiff alongside Swansea and other South Wales sites in a co-ordinated multi-site programme. RAMS documentation available as standard for all Cardiff commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Cardiff and South Wales postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Cardiff and wider CF postcode areas — CF10 (Cardiff city centre and Cardiff Bay: Cardiff International Pool and Cardiff International Sports Village generating substantial pool-side, changing room and manifestation demand; St David&apos;s Dewi Sant retail zone with ground-floor gym and leisure operators; National Museum Cardiff and civic quarter leisure provision; Cardiff Bay waterfront mixed-use development with boutique fitness and leisure operators), CF11 (Canton, Pontcanna, Leckwith: Sport Wales National Centre at Sophia Gardens CF11 — Wales&apos;s primary national sports performance facility with athlete training rooms, gymnasium, indoor athletics and performance sport facilities generating glazing film demand; Cardiff City Stadium CF11 zone with adjacent commercial gym and fitness provision; Leckwith Retail Park CF11 with leisure operator glazing film demand), CF14 (Whitchurch, Thornhill, Rhiwbina: north Cardiff residential zone with community leisure provision and suburban gym operators; Coryton and Whitchurch commercial gym demand), CF15 (Radyr, Creigiau: north-west Cardiff residential zone with community leisure provision), CF23 (Cyncoed, Pontprennau: east Cardiff residential and university zone; Cardiff Metropolitan University sport facilities CF23 generating student-facing glazing film demand), CF24 (Roath, Splott, Adamsdown: east Cardiff mixed residential and commercial zone; Roath CF24 is Cardiff&apos;s most active independent fitness zone with CrossFit boxes, yoga studios, boxing gyms and boutique fitness spaces along City Road and the Roath commercial corridor generating studio glass, changing room frosted film and manifestation demand), CF3 (Rumney, St Mellons, Marshfield: east Cardiff and Torfaen fringe with out-of-town commercial and leisure provision; St Mellons Business Park CF3 commercial gym demand), CF5 (Canton, Fairwater, Llandaff: west Cardiff residential zone; Canton Leisure Centre CF5 is a significant west Cardiff public leisure facility with pool and fitness provision generating changing room privacy and manifestation demand; Culverhouse Cross retail and leisure park CF5 generating out-of-town operator glazing film demand), CF62–CF64 (Barry, Penarth, Vale of Glamorgan: south Cardiff coast and Vale catchment with community leisure provision and local gym operators). WRPX is based in South Yorkshire, approximately 3 hours from Cardiff via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Cardiff and South Wales. Frosted privacy film for
            changing rooms, one-way mirror film for studio glass, solar control
            for glazed gym floors, Building Regulations-compliant glass
            manifestation and branded decorative vinyl. Sport Wales National
            Centre CF11, Cardiff International Sports Village CF10, David Lloyd
            Cardiff and all Cardiff CF postcode gym and leisure facilities.
            Approximately 3 hours from our South Yorkshire base via the M4.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Cardiff Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Cardiff gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is Wales&apos;s capital city and the primary commercial,
              government, media and sports economy in Wales. Its gym and leisure
              market spans national-standard sport facilities, a major university
              and student sport sector, national chain operators, private health
              clubs and an active independent fitness scene concentrated in Roath
              CF24, Canton CF5 and Cardiff Bay CF10.
            </p>
            <p>
              Sport Wales National Centre at Sophia Gardens CF11 is Wales&apos;s
              primary national sports performance facility — an extensive
              multi-sport site generating substantial glazing film demand across
              training rooms, performance gymnasium areas and public-facing
              fitness provision. Cardiff International Sports Village CF10 in
              Cardiff Bay is a major multi-sport destination anchored by the
              Cardiff International Pool, generating pool-side glazing, changing
              room privacy and manifestation demand across its large multi-zone
              footprint.
            </p>
            <p>
              The Roath CF24 corridor is Cardiff&apos;s most concentrated
              independent fitness zone — CrossFit boxes, boxing gyms, yoga
              studios and personal training spaces in the Roath and Adamsdown
              residential areas generate studio glass film, changing room frosted
              film and Building Regulations-compliant manifestation demand. WRPX
              is based in South Yorkshire, approximately 3 hours from Cardiff
              via the M4 — a direct motorway route through England and into
              Wales across the Severn crossings.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Cardiff
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Cardiff and South Wales gyms. Humidity-resistant adhesive for
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
                spin rooms and boutique fitness class areas across Cardiff&apos;s
                Roath CF24 and Canton CF5 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Cardiff
                Bay CF10 gym units with large south-facing glazed frontages
                overlooking the waterfront.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Regulations glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Cardiff and South Wales gym and leisure
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
                incorporating Cardiff gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Cardiff&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Cardiff and South Wales
                leisure centre poolside glazing, spa areas and wet-side
                changing environments — humidity-appropriate adhesive, edge
                sealing and film grade selected for chlorine-adjacent
                installations at Cardiff International Pool CF10 and Sport
                Wales CF11.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiff gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sport Wales National Centre CF11</strong> —
              Wales&apos;s primary national sports performance facility at Sophia
              Gardens, with athlete training rooms, performance gymnasium, indoor
              athletics area and multi-sport halls generating substantial glazing
              film demand across changing rooms, performance areas and public-facing
              fitness provision. The CF11 Pontcanna and Canton zones surrounding
              the national centre generate further independent gym and leisure
              demand.
            </p>
            <p>
              <strong className="text-foreground">Cardiff International Sports Village CF10</strong> —
              Cardiff Bay&apos;s major multi-sport destination, home to the Cardiff
              International Pool and a significant leisure and entertainment zone.
              Pool-side glazing film, changing room privacy film and manifestation
              across the full aquatic and leisure footprint are the main
              applications. The wider Cardiff Bay CF10 waterfront regeneration zone
              generates boutique fitness and gym operator demand.
            </p>
            <p>
              <strong className="text-foreground">Roath CF24</strong> —
              Cardiff&apos;s most concentrated independent fitness corridor along
              City Road and the Roath residential zone. CrossFit boxes, boxing
              gyms, yoga studios and personal training spaces generate studio glass
              one-way mirror film, changing room frosted film and Building
              Regulations manifestation demand from Cardiff&apos;s growing
              independent operator market.
            </p>
            <p>
              <strong className="text-foreground">Canton Leisure Centre CF5</strong> —
              west Cardiff&apos;s major public leisure facility in Canton, with pool
              and fitness provision serving its community catchment. Pool-side
              glazing film, changing room privacy and manifestation across the
              full changing zone are the primary applications.
            </p>
            <p>
              <strong className="text-foreground">Cardiff city centre CF10</strong> —
              PureGym and The Gym Group city-centre Cardiff sites, along with
              national hotel health club operators in the Cardiff CF10 core,
              generate ongoing refurbishment demand for changing room film and
              manifestation across the city-centre commercial gym market.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Cardiff
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Cardiff and South Wales gym fit-out contractors, FM companies,
              sign companies and property management businesses managing window
              film programmes across Welsh leisure sites, WRPX operates as a
              white-label installation partner. We attend under your instructions,
              follow your site access protocols and provide photographic sign-off
              on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Cardiff gym
              programmes. For national gym chain operators managing Cardiff sites
              within a wider UK or Welsh window film programme, our South Yorkshire
              base via the M4 corridor means we can cover Cardiff alongside Swansea
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
            Cardiff gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Cardiff and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/window-film/retail-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Cardiff and South Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Cardiff</p>
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
              Cardiff gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Cardiff or South Wales gym location, the glazing areas
              and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              3 hours from South Yorkshire via the M4.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Cardiff Gym Quote →
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
