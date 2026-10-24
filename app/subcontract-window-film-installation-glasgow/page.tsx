import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Glasgow | White-Label Film Installer Scotland | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Glasgow and the West of Scotland. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Buchanan Street G1, St Enoch Centre G1, Silverburn G53, Braehead G51 and all Glasgow G postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M74.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-glasgow/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Glasgow — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Glasgow and the West of Scotland. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Buchanan Street G1, St Enoch Centre G1, Merchant City G1, Silverburn G53, Braehead G51 and all Glasgow G postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M74. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Glasgow", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-glasgow/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Glasgow and West of Scotland G postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Glasgow client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Glasgow sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Glasgow and the West of Scotland as standard. We arrive at the Glasgow job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Glasgow client does not need to know WRPX is involved. Glasgow is approximately 3 hours from our South Yorkshire base via the M74 — a direct motorway route north that covers the full Glasgow G postcode geography. For sign and print businesses based in Scotland managing Glasgow installations, we provide a dependable installation resource that keeps your programme on schedule without you carrying your own install team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Glasgow shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across commercial sites. Shopfitters and fit-out contractors delivering Glasgow commercial projects — retail units in city-centre covered malls, office refurbishments in the Glasgow CBD G2 zone, gym and leisure fitouts, educational facilities across the G postcode geography — frequently need full-height glazed partitions, glass doors or glazed shop fronts manifested in line with Building Standards requirements. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Glasgow fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover the Silverburn and Braehead retail parks for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Silverburn G53 in south Glasgow and Braehead G51 in the Renfrew corridor are two of the West of Scotland&apos;s primary out-of-town retail and leisure destinations. Silverburn has over 100 retail, dining and leisure units generating consistent fit-out contractor and shopfitter demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Braehead operates as a large retail, leisure and marina destination, with similar fit-out activity from clothing, leisure and home retailers. We cover both sites as part of the same Glasgow G postcode mobilisation. Centre management contractor requirements for both sites are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Glasgow from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glasgow is approximately 3 hours from our South Yorkshire base via the A1(M) north and the M74 — a well-established motorway corridor. For planned Glasgow subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the West of Scotland — we incorporate travel time into scheduling with multi-day Glasgow programmes where the project volume justifies it. For Glasgow sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Glasgow and West of Scotland installations avoids the cost and complexity of recruiting your own installer in Scotland. We can also co-ordinate Glasgow installations alongside Edinburgh and other Scottish central belt sites in a single mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Glasgow and West of Scotland postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Glasgow and wider G postcode areas — G1 (Glasgow city centre: Buchanan Street — Scotland&apos;s premier retail corridor with flagship stores and consistent shopfitting demand for manifestation and frosted film; St Enoch Centre — the city-centre covered mall at St Enoch Square with national multiple retailers generating ongoing fit-out window film demand; Merchant City G1 — the mixed commercial, hospitality and creative zone east of the city centre with office fit-out, restaurant and bar glazing film demand), G2 (Glasgow Central Business District — the primary office zone around St Vincent Street and Blythswood Square generating office refurbishment demand for frosted partitions, solar-control and manifestation), G3 (Finnieston, Anderston — the west end creative, hospitality and commercial zone; Scottish Event Campus SEC G3 generates event and exhibition glazing film demand), G4 (Garnethill, Cowcaddens — north city-centre transitional zone with commercial and educational glazing), G5 (Gorbals — south bank regeneration zone with office and commercial development), G11 (Partick — inner west Glasgow mixed residential and commercial zone), G12 (Hillhead, West End — Glasgow University district with hospitality and commercial glazing demand; Byres Road commercial corridor), G14 (Whiteinch, Scotstoun — west Glasgow commercial zone), G20 (Maryhill — north Glasgow residential and commercial zone), G21 (Springburn — north Glasgow commercial and retail zone), G31 (Parkhead, Shettleston — east Glasgow zone; Forge Shopping Centre G31 generates retail fit-out and window film demand), G40 (Bridgeton — east Glasgow regeneration zone), G41 (Shawlands, Pollokshields — south Glasgow prosperous residential and commercial zone), G43 (Pollok, Newlands — south Glasgow suburban commercial zone), G44 (Castlemilk, King&apos;s Park — south-east Glasgow residential zone), G51 (Govan, Ibrox, Braehead — Braehead Shopping Centre and marina complex generating consistent retail fit-out and window film demand from the full Renfrew corridor catchment), G52 (Cardonald, Mosspark — south-west Glasgow residential zone), G53 (Silverburn, Pollok — Silverburn Shopping Centre G53 is one of Scotland&apos;s primary retail destinations, with over 100 retail, dining and leisure units and consistent fit-out contractor demand for manifestation, frosted film and solar-control), G60-G78 (wider Renfrewshire, East Renfrewshire and East Dunbartonshire zones including Paisley, Bearsden, Milngavie, Barrhead and the wider West of Scotland commercial catchment). WRPX is based in South Yorkshire, approximately 3 hours from Glasgow via the M74.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmGlasgowPage() {
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
            <Link href="/subcontract-window-film-installation/" className="text-accent hover:underline">Subcontract Window Film Installation</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Glasgow &amp; West of Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Glasgow and
            the West of Scotland. Frosted film, privacy film, solar-control
            film, glass manifestation and decorative window film installed under
            your instructions. Buchanan Street G1, St Enoch Centre, Silverburn
            G53, Braehead G51 and all Glasgow G postcode commercial sites.
            Approximately 3 hours from our South Yorkshire base via the M74.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Make a Trade Enquiry →
            </Link>
            <Link href="/subcontract-window-film-installation/" className="btn-secondary">
              Subcontract WF Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Who we work for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work for in Glasgow
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is Scotland&apos;s largest commercial city — the UK&apos;s
              third-largest retail destination and a major financial, professional
              services, creative and hospitality economy. Buchanan Street G1 is
              one of the UK&apos;s premier retail high streets; St Enoch Centre
              and the surrounding city-centre malls generate consistent retail
              fit-out activity; the Central Business District G2 produces
              ongoing office refurbishment demand. Out-of-town retail at
              Silverburn G53 and Braehead G51 creates substantial shopfitting
              and window film installation demand across a broad Clydeside
              catchment.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Glasgow clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Glasgow and the West of Scotland,
              we supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running
              window film programmes across multiple Scottish locations — Glasgow,
              Edinburgh, Dundee, Aberdeen — we can co-ordinate the Glasgow and
              wider central belt element from our South Yorkshire base. A single
              multi-day mobilisation via the M74 covers the Glasgow G postcode
              geography in full.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Glasgow
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted and privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film for retail fitting rooms, office partitions, meeting
                room glass, gym changing rooms and any glazing requiring privacy
                without removing natural light. Full-height or banded application
                across all Glasgow G postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Standards-compliant manifestation at 850mm and 1400mm
                height on full-height glazed panels and internal glass doors.
                Frosted bands, etched-effect, dot pattern or branded options —
                the most common subcontract window film application on Glasgow
                retail and office fit-out projects at Buchanan Street and
                Silverburn.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Glasgow offices, retail units and
                hospitality buildings. Relevant for glazed commercial buildings
                on the south-facing Clyde waterfront and west-facing retail
                frontages at Silverburn G53.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Glasgow office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Glasgow office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Glasgow retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glasgow commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Buchanan Street G1</strong> —
              Scotland&apos;s premier retail high street, with flagship fashion,
              lifestyle and home retailers anchoring consistent shopfitting and
              window film demand. Retail fit-out contractors delivering Buchanan
              Street unit fits — refurbishments, brand refreshes, new brand
              openings — regularly need subcontract window film for manifestation,
              frosted fitting-room film and solar-control on glazed frontages.
            </p>
            <p>
              <strong className="text-foreground">St Enoch Centre G1</strong> —
              the city-centre covered mall at St Enoch Square, with national
              multiple retailers generating consistent shopfitting and window
              film installation demand across a two-level enclosed footprint.
              Centre management contractor requirements are addressed as
              standard — RAMS prepared and access confirmed with your programme
              manager before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Silverburn G53</strong> —
              the primary out-of-town retail and leisure destination in south
              Glasgow, with over 100 retail, dining and leisure units. Shopfitters
              managing Silverburn unit fit-outs operate under centre management
              protocols — we prepare RAMS and co-ordinate access windows as a
              matter of course.
            </p>
            <p>
              <strong className="text-foreground">Braehead G51</strong> —
              the large retail, leisure and marina complex in the Renfrew
              corridor west of Glasgow, with consistent fit-out activity from
              retailers and leisure operators generating manifestation, frosted
              film and solar-control demand.
            </p>
            <p>
              <strong className="text-foreground">Glasgow Central Business District G2</strong> —
              the core office and professional services zone across St Vincent
              Street, Blythswood Square and the Central Station corridor, with
              significant office refurbishment and interior fit-out activity
              generating frosted film, solar-control and manifestation demand
              from facilities managers and commercial interior contractors.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Glasgow trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Glasgow client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Glasgow
              commercial projects where the site or centre management requires
              it in advance. For Silverburn G53 or Braehead G51 installations,
              we prepare contractor documentation to meet the respective centre
              management requirements before mobilisation.
            </p>
            <p>
              Glasgow is approximately 3 hours from our South Yorkshire base via
              the M74. For Scottish sign and print companies with regular
              Glasgow installation requirements, we offer planned programme
              scheduling — multi-day Glasgow visits covering multiple projects
              in a single trip, reducing mobilisation overhead on each job. We
              can extend the same visit to Edinburgh, Dundee or other Scottish
              central belt locations where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Glasgow services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Manchester and the North West</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Newcastle and the North East</p>
            </Link>
            <Link href="/window-film/retail-window-film-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Birmingham and the Midlands</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Glasgow trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Glasgow window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Glasgow site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Glasgow G postcodes and wider West of Scotland locations. RAMS
              available on request. Approximately 3 hours from South Yorkshire
              via the M74.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Make a Trade Enquiry →
              </Link>
              <Link href="/subcontract-window-film-installation/" className="btn-secondary">
                Subcontract WF Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
