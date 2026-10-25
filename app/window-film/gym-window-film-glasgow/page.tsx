import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Glasgow | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Glasgow and the West of Scotland — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, DDA glass manifestation and branded decorative vinyl. Pollok Leisure Centre G53, Scotstoun Leisure Centre G14, Kelvin Hall G3, PureGym Glasgow G2 and all Glasgow G postcode gyms and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M74.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-glasgow/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Glasgow — frosted, solar control, manifestation and privacy film for Glasgow gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Glasgow and the West of Scotland. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, DDA-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Pollok Leisure Centre G53, Scotstoun Leisure Centre G14, Bellahouston Sports Centre G41, Kelvin Hall G3, PureGym Glasgow G2, Tollcross International Swimming Centre G32 and all Glasgow G postcode gym and leisure facilities. Approximately 3 hours from our South Yorkshire base via the M74."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Glasgow", item: "https://www.wrpx.co.uk/window-film/gym-window-film-glasgow/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Glasgow gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Glasgow gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — widely used across Glasgow&apos;s growing boutique fitness, CrossFit, boxing gym and yoga studio market in Finnieston G3 and the west end. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Glasgow city-centre G1/G2 gym units with large glazed frontages on Argyle Street and Buchanan Street. DDA-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Glasgow&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Glasgow gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Glasgow and the West of Scotland G postcodes. Pollok Leisure Centre G53 in south Glasgow is a large public leisure facility with swimming pool, fitness suite and sports hall generating substantial changing room privacy film, DDA manifestation and solar-control demand. Scotstoun Leisure Centre G14 in west Glasgow — home to a 50-metre swimming pool, fitness suite and sports hall — generates pool-side glazing film, changing room privacy and DDA manifestation demand. Bellahouston Sports Centre G41 in south Glasgow provides a substantial multi-sport facility with consistent window film demand across its changing and fitness zones. Kelvin Hall Sports Arena G3 in the west end — recently refurbished as a major track and field venue — generates specialist sports facility glazing film demand. PureGym and The Gym Group operate multiple Glasgow city-centre G1/G2 and suburban G sites with ongoing refurbishment programmes creating consistent changing room and manifestation demand. Tollcross International Swimming Centre G32 is one of Scotland&apos;s premier aquatic venues, generating pool-side glazing, changing room privacy and DDA manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at a Glasgow gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours from Glasgow via the M74 — a direct motorway route north from our base. Survey visits for Glasgow gyms can typically be arranged within 5 to 7 days of enquiry. A typical Glasgow gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Glasgow boutique fitness studios in Finnieston G3 or Partick G11 can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Glasgow leisure centres such as Pollok G53 or Scotstoun G14, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Glasgow gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Glasgow gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Glasgow gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Glasgow gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Glasgow and West of Scotland gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Glasgow and Clydeside. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours from Glasgow via the M74 and can cover Glasgow alongside Edinburgh and other Scottish central belt sites in a co-ordinated multi-site programme. RAMS documentation available as standard for all Glasgow commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Glasgow and West of Scotland postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Glasgow and wider G postcode areas — G1 (Glasgow city centre: Buchanan Street G1 — Scotland&apos;s premier retail corridor where Buchanan Galleries and St Enoch Centre gym and leisure operators generate manifestation and changing room film demand; The Gym Group Buchanan Galleries G1 and other city-centre chain operators generate ongoing refurbishment film demand; Merchant City G1 boutique fitness and yoga studios), G2 (Glasgow Central Business District — PureGym Glasgow G2 on Argyle Street and corporate gym and leisure operators in the office core generate solar-control, manifestation and changing room film demand), G3 (Finnieston, Anderston — Glasgow&apos;s most active boutique fitness zone; CrossFit boxes, boxing gyms, yoga studios and personal training spaces along the Finnieston strip G3 generate studio glass, changing room frosted film and manifestation demand; Kelvin Hall Sports Arena G3 generates specialist track and field facility glazing film demand), G4 (Garnethill, Cowcaddens — north city-centre fitness and leisure provision), G11 (Partick — inner west Glasgow mixed residential zone with independent gym and fitness provision), G12 (Hillhead, West End — Glasgow University campus zone; university sports and fitness facilities G12 generate changing room privacy and DDA manifestation demand; Byres Road boutique fitness studios), G14 (Whiteinch, Scotstoun — west Glasgow; Scotstoun Leisure Centre G14 is a major public leisure facility with a 50-metre swimming pool, fitness suite and sports hall generating substantial pool-side glazing, changing room privacy and DDA manifestation film demand), G20 (Maryhill — north Glasgow community leisure provision), G21 (Springburn — north Glasgow residential and commercial zone with leisure provision), G31 (Parkhead, Shettleston — east Glasgow; Forge Shopping Centre G31 gym and leisure operators), G32 (Tollcross — Tollcross International Swimming Centre G32 is one of Scotland&apos;s premier aquatic venues with pool-side glazing, changing room and DDA manifestation demand), G40 (Bridgeton — east Glasgow regeneration zone with fitness and community leisure provision), G41 (Shawlands, Pollokshields, Bellahouston — south Glasgow; Bellahouston Sports Centre G41 is a significant multi-sport facility generating changing room privacy, DDA manifestation and solar-control film demand), G43 (Pollok, Newlands — south Glasgow), G51 (Govan, Ibrox, Braehead — Braehead Retail and Leisure G51 gym and leisure operators; Scotstoun corridor leisure provision), G53 (Silverburn, Pollok — Pollok Leisure Centre G53 is one of south Glasgow&apos;s major public leisure facilities with swimming pool, fitness suite and sports hall generating substantial changing room privacy, DDA manifestation and solar-control window film demand). Wider Renfrewshire PA, East Dunbartonshire G61–G66, North Lanarkshire G67–G69 and Clydeside commercial leisure also within reach. WRPX is based in South Yorkshire, approximately 3 hours from Glasgow via the M74.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmGlasgowPage() {
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
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Glasgow &amp; West of Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Glasgow and the West of Scotland. Frosted privacy
            film for changing rooms, one-way mirror film for studio glass,
            solar control for glazed gym floors, DDA-compliant glass
            manifestation and branded decorative vinyl. Pollok Leisure Centre
            G53, Scotstoun Leisure Centre G14, Kelvin Hall G3, PureGym Glasgow
            G2 and all Glasgow G postcode gym and leisure facilities.
            Approximately 3 hours from our South Yorkshire base via the M74.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Glasgow Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Glasgow gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is Scotland&apos;s largest city and the UK&apos;s third-largest
              retail and commercial economy — a metropolitan area spanning
              Clydeside with a gym and leisure market that encompasses major
              public leisure infrastructure, national chain gym operators,
              a growing private health club sector and one of the UK&apos;s most
              active independent fitness scenes, concentrated in the Finnieston
              G3 and west-end G11/G12 zones.
            </p>
            <p>
              Pollok Leisure Centre G53 in south Glasgow is one of the city&apos;s
              major public leisure facilities, with swimming pool, fitness suite
              and sports hall generating substantial window film demand across
              changing rooms, poolside glazing and DDA manifestation on glass
              partitions. Scotstoun Leisure Centre G14 in west Glasgow — home
              to a 50-metre swimming pool — generates significant pool-side
              glazing, changing room privacy and manifestation film demand.
              PureGym and The Gym Group operate multiple Glasgow G1/G2
              city-centre and suburban sites with ongoing refurbishment programmes
              creating consistent changing room and manifestation demand.
            </p>
            <p>
              The Finnieston G3 strip is Glasgow&apos;s most concentrated boutique
              fitness zone — CrossFit boxes, boxing gyms, yoga studios and
              personal training spaces along this regenerated waterfront corridor
              generate studio glass film, changing room frosted film and DDA
              manifestation demand. WRPX is based in South Yorkshire,
              approximately 3 hours from Glasgow via the M74 — a direct
              motorway route north.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Glasgow
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Glasgow and West of Scotland gyms. Humidity-resistant adhesive
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
                spin rooms and boutique fitness class areas across
                Glasgow&apos;s Finnieston G3 and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Glasgow
                city-centre G1/G2 gym units with large glazed frontages on
                Argyle Street and Buchanan Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                DDA glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Standards-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Glasgow and West of Scotland gym and
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
                incorporating Glasgow gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Glasgow&apos;s independent and
                chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Glasgow and West of Scotland
                leisure centre poolside glazing, spa areas and wet-side
                changing environments — humidity-appropriate adhesive, edge
                sealing and film grade selected for chlorine-adjacent
                installations at Pollok G53, Scotstoun G14 and Tollcross G32.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glasgow gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Pollok Leisure Centre G53</strong> —
              one of south Glasgow&apos;s major public leisure facilities, with
              a swimming pool, fitness suite, sports hall and multi-zone
              changing facilities. Changing room privacy film, DDA manifestation
              on glass partitions and doors, and solar-control on glazed leisure
              sections are the primary applications at this large public site.
            </p>
            <p>
              <strong className="text-foreground">Scotstoun Leisure Centre G14</strong> —
              west Glasgow&apos;s major public leisure facility, home to a
              50-metre swimming pool, fitness suite, sports hall and a substantial
              changing room footprint. Pool-side glazing film, changing room
              privacy film and DDA manifestation across the full changing zone
              are the main applications.
            </p>
            <p>
              <strong className="text-foreground">Finnieston G3</strong> —
              Glasgow&apos;s most active boutique fitness corridor along the
              regenerated Clydeside waterfront. CrossFit boxes, boxing gyms,
              yoga studios and personal training spaces generate studio glass
              one-way mirror film, changing room frosted film and DDA
              manifestation demand from Glasgow&apos;s independent operator
              market.
            </p>
            <p>
              <strong className="text-foreground">Kelvin Hall G3</strong> —
              the recently refurbished major indoor athletics and sports venue
              in the west end, generating specialist sports facility glazing
              film demand across its large multi-sport footprint.
            </p>
            <p>
              <strong className="text-foreground">Tollcross International Swimming Centre G32</strong> —
              one of Scotland&apos;s premier aquatic venues in east Glasgow, with
              a substantial pool-side glazing, changing room privacy and DDA
              manifestation demand across a large competition and public swim
              facility.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Glasgow
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Glasgow and West of Scotland gym fit-out contractors, FM
              companies, sign companies and property management businesses
              managing window film programmes across Scottish leisure sites,
              WRPX operates as a white-label installation partner. We attend
              under your instructions, follow your site access protocols and
              provide photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Glasgow gym
              programmes. For national gym chain operators managing Glasgow
              sites within a wider UK window film programme, our South Yorkshire
              base via the M74 corridor means we can cover Glasgow alongside
              Edinburgh and other Scottish central belt sites in a co-ordinated
              Scottish mobilisation — the most practical arrangement for
              multi-site programmes across Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Glasgow and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/window-film/retail-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Glasgow</p>
            </Link>
            <Link href="/window-film/gym-window-film-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Liverpool and Merseyside</p>
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
              Glasgow gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Glasgow or West of Scotland gym location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              3 hours from South Yorkshire via the M74.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Glasgow Gym Quote →
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
