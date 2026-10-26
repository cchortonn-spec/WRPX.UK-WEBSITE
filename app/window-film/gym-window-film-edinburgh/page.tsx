import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Gym Window Film Edinburgh | Frosted, Solar Control & Manifestation for Gyms | WRPX",
  description:
    "Window film installation for gyms and leisure centres across Edinburgh and the Lothians — frosted privacy film for changing rooms, one-way mirror film for studio glass, solar-control for glazed gym floors, Building Standards-compliant glass manifestation and branded decorative vinyl. Meadowbank Sports Centre EH7, Firrhill Leisure Centre EH13, Ainslie Park EH5, PureGym Edinburgh EH1 and all Edinburgh EH postcode gyms and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/gym-window-film-edinburgh/",
  },
};

const serviceSchema = getServiceSchema(
  "Gym window film Edinburgh — frosted, solar control, manifestation and privacy film for Edinburgh gyms and leisure centres",
  "Window film installation for gyms, fitness studios and leisure centres across Edinburgh and the Lothians. Frosted privacy film for changing rooms and shower areas, one-way mirror film for studio observation panels, solar-control film for glazed cardio floors and fitness studio windows, Building Standards-compliant glass manifestation for glass partitions and internal doors, branded decorative vinyl for studio glazing. Meadowbank Sports Centre EH7, Firrhill Leisure Centre EH13, Gracemount Leisure Centre EH16, Ainslie Park Leisure Centre EH5, Jack Kane Sports Centre EH15, PureGym Edinburgh EH1, The Gym Group Edinburgh and all Edinburgh EH postcode gym and leisure facilities. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Gyms", item: "https://www.wrpx.co.uk/window-film/gym-window-film/" },
    { "@type": "ListItem", position: 4, name: "Edinburgh", item: "https://www.wrpx.co.uk/window-film/gym-window-film-edinburgh/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film services do you offer for Edinburgh gyms and fitness studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted privacy film for changing rooms, shower cubicle glazing and toilet partitions is the most consistent Edinburgh gym application — full-height frosted for complete privacy, or banded frosted with clear glass above to retain natural light. One-way mirror film on studio observation panels and group exercise room glass walls lets instructors and managers see into studios without disturbing participants — widely used across Edinburgh&apos;s growing boutique fitness, CrossFit, yoga studio and boxing gym market in the Leith EH6 and Bruntsfield EH10 zones. Solar-control film on south and west-facing glazed cardio floors and fitness studio windows reduces solar heat gain and glare — particularly relevant for newer Edinburgh city-centre gym units with large glazed frontages. Building Standards-compliant glass manifestation is required on full-height glazed panels and internal glass doors throughout the facility. Branded decorative film incorporating the gym&apos;s logo or identity on studio glass and reception glazing is common across Edinburgh&apos;s independent and chain operators.",
      },
    },
    {
      "@type": "Question",
      name: "Which Edinburgh gyms and leisure centres do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover gyms, fitness studios, leisure centres and health clubs across all Edinburgh and the Lothians EH postcodes. Meadowbank Sports Centre EH7 is Edinburgh&apos;s major newly rebuilt public sports centre — reopened in 2023 following a comprehensive rebuild — with athletics, leisure swimming, fitness suite and sports hall generating substantial changing room privacy film, DDA manifestation and solar-control demand across its large new multi-zone footprint. Firrhill Leisure Centre EH13 in south Edinburgh provides a major public leisure facility with swimming pool and fitness provision generating pool-side glazing, changing room privacy and manifestation demand. Gracemount Leisure Centre EH16 in south-east Edinburgh covers a substantial community leisure catchment generating consistent window film demand across changing and fitness areas. Ainslie Park Leisure Centre EH5 in north Edinburgh is a key public leisure facility for the Pilton and Granton zones, generating changing room privacy and manifestation demand. Jack Kane Sports Centre EH15 in east Edinburgh is a major multi-sport facility serving the Craigmillar and Niddrie zones. PureGym and The Gym Group operate Edinburgh city-centre EH1 and suburban EH sites with ongoing refurbishment programmes creating consistent changing room and manifestation demand.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install window film at an Edinburgh gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Edinburgh via the A1 north — a well-established direct route into Scotland&apos;s capital. Survey visits for Edinburgh gyms can typically be arranged within 5 to 7 days of enquiry. A typical Edinburgh gym changing room installation — covering window glazing across the changing area and individual shower cubicle panels — takes 3 to 6 hours depending on the glazing area and layout. Smaller Edinburgh boutique fitness studios in Leith EH6 or Bruntsfield EH10 can often be completed in a single morning. We co-ordinate scheduling with your operations team to minimise disruption to opening hours, including early-morning and weekend slots where required. For large Edinburgh leisure centres such as Meadowbank EH7 or Firrhill EH13, we plan multi-session programmes to work through zones without closing the facility.",
      },
    },
    {
      "@type": "Question",
      name: "Is frosted window film suitable for Edinburgh gym changing rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial-grade frosted architectural film applied to Edinburgh gym changing room windows and shower cubicle glazing provides complete privacy, is cleanable with standard gym cleaning products including disinfectant sprays, and is specified with a humidity-resistant adhesive for wet environments. The installation is visually indistinguishable from sandblasted glass. We seal all edges to prevent moisture ingress at the edge band — the critical factor in longevity in changing room and shower environments. Commercial-grade film in a well-maintained Edinburgh gym changing room typically delivers 8 to 12 years of service life.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Edinburgh gym fit-out contractors and facilities managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work as a subcontract window film installation partner for Edinburgh and Lothians gym fit-out contractors, leisure facilities management companies, FM contractors and sign companies managing gym refit programmes across Edinburgh. White-label by default: we attend under your instructions, follow your site access protocols and provide photographic sign-off on completion of each area. We are approximately 3 hours 30 minutes from Edinburgh via the A1 and can cover Edinburgh alongside Glasgow and other Scottish central belt sites in a co-ordinated multi-site programme. RAMS documentation available as standard for all Edinburgh commercial leisure projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which Edinburgh and Lothians postcodes do you cover for gym window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Edinburgh and wider EH postcode areas — EH1 (Edinburgh Old Town and city centre: Royal Mile, Grassmarket and Cowgate zone with boutique fitness studios and CrossFit boxes; PureGym Edinburgh EH1 and The Gym Group Edinburgh EH1 generating changing room privacy, solar-control and manifestation demand in the city-centre gym and leisure core), EH2 (Edinburgh New Town: Princes Street and George Street commercial zone; gym and fitness provision in the financial and professional services district generating manifestation and solar-control demand on glazed gym units), EH3 (West End, Haymarket: Edinburgh&apos;s office and legal district with gym and fitness provision including Haymarket EH12 commercial gym operators; Tollcross EH3 fitness studios), EH5 (Pilton, Granton, Trinity: north Edinburgh residential zones; Ainslie Park Leisure Centre EH5 is a key public leisure facility for north Edinburgh generating changing room privacy, DDA manifestation and pool-side glazing demand), EH6 (Leith, Newhaven: Edinburgh&apos;s most active independent fitness zone; CrossFit boxes, boxing gyms, yoga studios and boutique fitness spaces along the Leith Walk corridor EH6 and the Shore EH6 generate studio glass, changing room frosted film and DDA manifestation demand; Ocean Terminal EH6 leisure and fitness operators), EH7 (Meadowbank: Meadowbank Sports Centre EH7 is Edinburgh&apos;s major newly rebuilt public sports centre — opened 2023 — with athletics track, leisure swimming pool, fitness suite and sports hall generating the highest concentration of changing room privacy, DDA manifestation and solar-control window film demand in Edinburgh), EH8 (Newington, Southside: Edinburgh University campus zone; university sports and fitness facilities EH8 generate changing room privacy and DDA manifestation demand from student-facing leisure provision), EH9 (Morningside, Marchmont: inner south Edinburgh affluent residential zone; boutique fitness studios and independent gym operators along Morningside Road EH10), EH10 (Bruntsfield, Morningside: Edinburgh&apos;s established boutique fitness zone with yoga studios, reformer Pilates, CrossFit and personal training spaces generating studio glass, changing room frosted film and DDA manifestation demand), EH11 (Dalry, Gorgie: west Edinburgh inner zone with community leisure provision including Dalry Swim Centre EH11 generating pool-side, changing room and manifestation demand), EH12 (Corstorphine, Murrayfield: west Edinburgh suburban zone; Murrayfield Stadium and sports facilities EH12; Edinburgh Park EH12 corporate gym and fitness provision; David Lloyd Edinburgh near Edinburgh Airport generating health club window film demand), EH13 (Colinton, Fairmilehead: south Edinburgh residential zone; Firrhill Leisure Centre EH13 is a major south Edinburgh public leisure facility with swimming pool, fitness suite and sports hall generating substantial changing room privacy, DDA manifestation and solar-control window film demand), EH14 (Juniper Green, Currie: south-west Edinburgh suburban zone; Craiglockhart Tennis and Sports Centre EH14 generating multi-sport facility glazing film demand), EH15 (Portobello, Joppa: east Edinburgh coastal zone; Jack Kane Sports Centre EH15 is a major multi-sport facility with indoor sports hall, fitness suite and community leisure provision generating changing room privacy and DDA manifestation demand; Portobello Pool EH15 generates pool-side glazing and changing room demand), EH16 (Liberton, Gracemount: south-east Edinburgh residential zone; Gracemount Leisure Centre EH16 is a significant community leisure facility generating changing room privacy, DDA manifestation and solar-control window film demand across its fitness and pool zones). Wider Midlothian EH17–EH27, East Lothian EH21–EH42 and West Lothian EH27–EH55 also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Edinburgh via the A1.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function GymWindowFilmEdinburghPage() {
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
            <span className="text-foreground">Edinburgh</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Gym &amp; Leisure Window Film · Edinburgh &amp; the Lothians
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Gym window film — Edinburgh
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for gyms, fitness studios and leisure
            centres across Edinburgh and the Lothians. Frosted privacy film
            for changing rooms, one-way mirror film for studio glass, solar
            control for glazed gym floors, Building Standards-compliant glass
            manifestation and branded decorative vinyl. Meadowbank Sports
            Centre EH7, Firrhill Leisure Centre EH13, Ainslie Park EH5,
            PureGym Edinburgh EH1 and all Edinburgh EH postcode gym and leisure
            facilities. Approximately 3 hours 30 minutes from our South
            Yorkshire base via the A1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Edinburgh Gym Quote →
            </Link>
            <Link href="/window-film/gym-window-film/" className="btn-secondary">
              Gym Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Edinburgh gym market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh gym and leisure window film — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh is Scotland&apos;s capital city and the UK&apos;s sixth-largest
              city by population — a diverse economy encompassing financial
              services, legal, technology, tourism, education and government.
              Its gym and leisure market spans Edinburgh Leisure&apos;s extensive
              public network, national chain operators, a growing private
              health club sector and an active independent fitness scene
              concentrated in Leith EH6, Bruntsfield EH10 and the Old Town EH1.
            </p>
            <p>
              Meadowbank Sports Centre EH7 is Edinburgh&apos;s flagship public
              sports centre — fully rebuilt and reopened in 2023 — with
              athletics, leisure swimming, fitness suite, indoor cycling and
              multi-sport halls generating substantial window film demand across
              changing rooms, poolside glazing and glass manifestation on the
              new facility&apos;s extensive glazed partitions and internal doors.
              Firrhill Leisure Centre EH13 in south Edinburgh and Gracemount
              Leisure Centre EH16 in south-east Edinburgh serve their respective
              catchments with swimming pool, fitness suite and sports hall
              provision generating consistent changing room and manifestation
              film demand.
            </p>
            <p>
              The Leith EH6 corridor is Edinburgh&apos;s most concentrated independent
              fitness zone — CrossFit boxes, boxing gyms, yoga studios and
              personal training spaces in the regenerated Shore and Leith Walk
              areas generate studio glass film, changing room frosted film and
              Building Standards-compliant manifestation demand. WRPX is based
              in South Yorkshire, approximately 3 hours 30 minutes from
              Edinburgh via the A1 — a direct route north through
              Northumberland into Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Gym window film applications in Edinburgh
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film — changing rooms
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for changing room windows,
                shower cubicle glazing and toilet partition glass across
                Edinburgh and Lothians gyms. Humidity-resistant adhesive for
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
                Edinburgh&apos;s Leith EH6 and Bruntsfield EH10 operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar control film — gym floors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                glazed cardio floors and fitness studio windows. Cuts UV fading
                of flooring and equipment — particularly relevant for Edinburgh
                city-centre EH1/EH2 gym units with glazed south-facing
                frontages on Princes Street and George Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Building Standards glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Standards-compliant manifestation strips at 850mm
                and 1400mm height for full-height glazed panels and internal
                glass doors throughout Edinburgh and Lothians gym and leisure
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
                incorporating Edinburgh gym branding on studio glass, reception
                glazing and partition panels — combining identity and privacy
                in a single installation across Edinburgh&apos;s independent
                and chain operators.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Poolside and wet-area film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Specialist film specification for Edinburgh and Lothians
                leisure centre poolside glazing, spa areas and wet-side
                changing environments — humidity-appropriate adhesive, edge
                sealing and film grade selected for chlorine-adjacent
                installations at Meadowbank EH7, Firrhill EH13 and
                Gracemount EH16.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edinburgh gym zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh gym and leisure zones we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Meadowbank Sports Centre EH7</strong> —
              Edinburgh&apos;s flagship newly rebuilt public sports centre, reopened
              in 2023. The new facility includes athletics, leisure swimming,
              fitness suite, indoor cycling studio and multi-sport halls with
              an extensive glazed internal envelope generating substantial
              changing room privacy, DDA manifestation on glass partitions and
              doors, and solar-control film demand across the new build.
            </p>
            <p>
              <strong className="text-foreground">Firrhill Leisure Centre EH13</strong> —
              south Edinburgh&apos;s major public leisure facility, with a swimming
              pool, fitness suite and sports hall serving the Colinton and
              Fairmilehead catchments. Pool-side glazing film, changing room
              privacy film and manifestation across the full changing zone
              are the main applications.
            </p>
            <p>
              <strong className="text-foreground">Leith EH6</strong> —
              Edinburgh&apos;s most active independent fitness corridor along the
              Shore and Leith Walk. CrossFit boxes, boxing gyms, yoga studios
              and personal training spaces generate studio glass one-way mirror
              film, changing room frosted film and Building Standards
              manifestation demand from Edinburgh&apos;s independent operator
              market.
            </p>
            <p>
              <strong className="text-foreground">Ainslie Park Leisure Centre EH5</strong> —
              north Edinburgh&apos;s key public leisure facility serving Pilton,
              Granton and Muirhouse, with pool-side glazing, changing room
              privacy and manifestation demand across a substantial community
              leisure footprint.
            </p>
            <p>
              <strong className="text-foreground">Jack Kane Sports Centre EH15</strong> —
              east Edinburgh&apos;s major multi-sport facility in Craigmillar,
              generating indoor sports hall glazing film, changing room privacy
              and manifestation demand across its community leisure footprint.
            </p>
          </div>
        </div>
      </section>

      {/* B2B / subcontract section */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract and white-label gym window film — Edinburgh
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For Edinburgh and Lothians gym fit-out contractors, FM companies,
              sign companies and property management businesses managing window
              film programmes across Scottish leisure sites, WRPX operates as
              a white-label installation partner. We attend under your
              instructions, follow your site access protocols and provide
              photographic sign-off on completion of each area.
            </p>
            <p>
              RAMS documentation is provided as standard for all Edinburgh gym
              programmes. For national gym chain operators managing Edinburgh
              sites within a wider UK or Scottish window film programme, our
              South Yorkshire base via the A1 corridor means we can cover
              Edinburgh alongside Glasgow and other Scottish central belt sites
              in a co-ordinated Scottish mobilisation — the most practical
              arrangement for multi-site programmes across Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh gym window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related Edinburgh and regional window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/gym-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full gym and leisure window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for trade partners in Edinburgh</p>
            </Link>
            <Link href="/window-film/gym-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure film across Newcastle and Tyne and Wear</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Building Standards-compliant manifestation for gym partitions and doors</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Edinburgh gym window film — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Edinburgh or Lothians gym location, the glazing
              areas and what you need the film to do — privacy, solar control,
              manifestation or branding. We&apos;ll confirm a specification and
              price. Subcontract and white-label enquiries welcome. Approximately
              3 hours 30 minutes from South Yorkshire via the A1.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request an Edinburgh Gym Quote →
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
