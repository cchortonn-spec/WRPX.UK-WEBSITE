import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Edinburgh | White-Label Film Installer Scotland | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Edinburgh and the Lothians. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. St James Quarter EH1, Princes Street EH2, Ocean Terminal EH6, Fort Kinnaird EH15 and all Edinburgh EH postcode commercial sites. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-edinburgh/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Edinburgh — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Edinburgh and the Lothians. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. St James Quarter EH1, Princes Street EH2, Multrees Walk EH1, Ocean Terminal EH6, Fort Kinnaird EH15, Hermiston Gait EH14, Edinburgh Park EH12 and all Edinburgh EH postcode commercial sites. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Edinburgh", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-edinburgh/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Edinburgh and Lothians EH postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Edinburgh client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Edinburgh sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Edinburgh and the Lothians as standard. We arrive at the Edinburgh job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Edinburgh client does not need to know WRPX is involved. Edinburgh is approximately 3 hours 30 minutes from our South Yorkshire base via the A1 north — a direct route through Northumberland into Scotland&apos;s capital. For Scottish sign and print businesses based in Edinburgh managing local installations, we provide a dependable installation resource that keeps your programme on schedule without you carrying your own install team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for an Edinburgh shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Edinburgh commercial projects — retail units in St James Quarter EH1, office refurbishments in the EH2 New Town financial district, gym and leisure fitouts, educational facilities across the EH postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where an Edinburgh fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover St James Quarter and Princes Street for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — St James Quarter EH1 is Edinburgh&apos;s major new mixed-use development, opened in 2021, anchored by a new John Lewis, fashion brands, food and leisure operators, a W Hotel and a large public atrium generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Princes Street EH2 is Scotland&apos;s most visited shopping street, with anchor retailers, fashion brands and department stores generating ongoing fit-out and window film demand across the full frontage. We cover both sites as part of the same Edinburgh EH postcode mobilisation. Centre management contractor requirements for St James Quarter are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Edinburgh from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edinburgh is approximately 3 hours 30 minutes from our South Yorkshire base via the A1 north — a direct motorway and dual-carriageway route through Northumberland and the Scottish Borders into the capital. For planned Edinburgh subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the Lothians — we incorporate travel time into scheduling with multi-day Edinburgh programmes where the project volume justifies it. For Edinburgh sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Edinburgh and wider Lothians installations avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Edinburgh installations alongside Glasgow and other Scottish central belt sites in a single Scottish mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Edinburgh and Lothians postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Edinburgh and wider EH postcode areas — EH1 (Edinburgh Old Town and Waverley: St James Quarter — Edinburgh&apos;s major new mixed-use development opened 2021 with John Lewis anchor, fashion brands and leisure operators generating consistent shopfitting and window film demand across its glazed retail concourse; Multrees Walk EH1 — Edinburgh&apos;s luxury retail terrace; Royal Mile commercial and hospitality operators; Waverley station retail and office corridor), EH2 (Edinburgh New Town: Princes Street — Scotland&apos;s most visited shopping street with multiple anchor retailers generating ongoing fit-out and window film demand across the full frontage; George Street financial and professional services district with office refurbishment frosted film and solar-control demand; Charlotte Square EH2 and St Andrew Square EH2 office zone generating manifestation and decorative film demand), EH3 (West End, Tollcross: Haymarket EH12 commercial and office zone; Edinburgh&apos;s legal and financial district with office refurbishment film demand; Tollcross retail and hospitality operators), EH4 (Stockbridge, Inverleith, Davidson&apos;s Mains: north Edinburgh mixed commercial and residential zone with retail and hospitality glazing film demand), EH5 (Pilton, Granton: north Edinburgh commercial and industrial zone with logistics and light industrial unit window film demand), EH6 (Leith, Newhaven: Ocean Terminal EH6 — the Leith waterfront shopping centre generating retail fit-out, manifestation and solar-control film demand from its anchor retailers; Shore EH6 hospitality and restaurant operators; Leith Walk commercial corridor; Leith Enterprise Zone regeneration sites with office and commercial glazing film demand), EH7 (Meadowbank: Meadowbank Retail Park and commercial zone adjacent to the new Meadowbank Sports Centre EH7; east Edinburgh commercial operators generating fit-out and glazing film demand), EH8 (Southside, Newington: Edinburgh University campus zone generating manifestation and frosted film demand on university commercial and academic glazing), EH9 (Morningside, Blackford: inner south Edinburgh retail and professional services zone), EH10 (Bruntsfield, Morningside: south Edinburgh boutique retail and hospitality glazing film demand along the Morningside Road EH10 commercial corridor), EH11 (Dalry, Gorgie: west Edinburgh mixed commercial zone with retail and light industrial unit window film demand), EH12 (Corstorphine, Murrayfield, Edinburgh Park: Edinburgh Park — the major out-of-town office and business campus at EH12 generating office refurbishment frosted film, solar-control and manifestation demand from technology, financial and professional services tenants; Gyle Shopping Centre EH12 generating retail window film demand; Edinburgh Airport zone EH12), EH14 (Juniper Green, Currie: Hermiston Gait EH14 — a major out-of-town retail park in west Edinburgh generating consistent shopfitting and window film demand from national retailers), EH15 (Portobello, Joppa: Fort Kinnaird EH15 — Edinburgh&apos;s largest out-of-town retail park with over 40 retail units generating substantial ongoing shopfitting, manifestation and solar-control window film demand from national and regional retailers; Jewel Retail Park EH15 generating further east Edinburgh retail fit-out demand), EH16 (Liberton, Gracemount: south-east Edinburgh residential and commercial zone with retail and professional services glazing film demand), EH17 (Moredun, Gilmerton: south Edinburgh suburban zone with commercial glazing film demand). Midlothian EH18–EH27, East Lothian EH21–EH42 and West Lothian EH27–EH55 also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Edinburgh via the A1.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmEdinburghPage() {
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
            <span className="text-foreground">Edinburgh</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Edinburgh &amp; the Lothians
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Edinburgh
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Edinburgh and
            the Lothians. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film installed under your
            instructions. St James Quarter EH1, Princes Street EH2, Ocean
            Terminal EH6, Fort Kinnaird EH15 and all Edinburgh EH postcode
            commercial sites. Approximately 3 hours 30 minutes from our South
            Yorkshire base via the A1.
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
            Who we work for in Edinburgh
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh is Scotland&apos;s capital and primary financial and
              professional services economy — a major commercial city with a
              strong retail core anchored by St James Quarter EH1 and Princes
              Street EH2, significant out-of-town retail provision at Fort
              Kinnaird EH15, Hermiston Gait EH14 and the Gyle EH12, and a
              substantial office market at Edinburgh Park EH12 and the New Town
              EH2 financial district. The Scottish Government and public sector
              presence generates consistent professional and institutional
              glazing film demand across the city.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Edinburgh clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Edinburgh and the Lothians, we
              supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running
              window film programmes across multiple Scottish locations —
              Edinburgh, Glasgow, Dundee, Aberdeen — we can co-ordinate the
              Edinburgh and wider Lothians element from our South Yorkshire base.
              A single multi-day mobilisation via the A1 covers the full
              Edinburgh EH postcode geography alongside Glasgow and the central
              belt where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Edinburgh
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
                across all Edinburgh EH postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Manifestation at 850mm and 1400mm height on full-height glazed
                panels and internal glass doors. Frosted bands, etched-effect,
                dot pattern or branded options — the most common subcontract
                window film application on Edinburgh retail and office fit-out
                projects at St James Quarter and Princes Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Edinburgh offices, retail units and
                hospitality buildings. Relevant for glazed commercial buildings
                on south-facing Princes Street and the west-facing Fort Kinnaird
                EH15 retail park frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Edinburgh office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Edinburgh office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Edinburgh retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edinburgh commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St James Quarter EH1</strong> —
              Edinburgh&apos;s major new mixed-use development, opened in 2021,
              anchored by a new John Lewis, fashion brands, food and leisure
              operators, a W Hotel and a striking glazed public atrium generating
              consistent shopfitting and window film installation demand.
              Retail fit-out contractors delivering St James Quarter unit
              refurbishments and brand openings regularly need subcontract window
              film for manifestation, frosted fitting-room film and solar-control
              on glazed frontages. Centre management contractor requirements
              are addressed as standard.
            </p>
            <p>
              <strong className="text-foreground">Princes Street EH2</strong> —
              Scotland&apos;s most visited shopping street, with anchor department
              stores, fashion brands and national retailers generating ongoing
              fit-out and window film demand across the full Princes Street
              frontage. Solar-control film on the south-facing glazed retail
              frontages and manifestation on internal glass partitions are the
              primary applications.
            </p>
            <p>
              <strong className="text-foreground">Fort Kinnaird EH15</strong> —
              Edinburgh&apos;s largest out-of-town retail park in east Edinburgh,
              with over 40 retail units generating substantial ongoing shopfitting,
              manifestation and solar-control window film demand from national
              and regional retailers. Shopfitters managing Fort Kinnaird unit
              fits operate under centre management protocols — we prepare RAMS
              and co-ordinate access windows as a matter of course.
            </p>
            <p>
              <strong className="text-foreground">Ocean Terminal EH6</strong> —
              the Leith waterfront shopping centre, with national retailers,
              food operators and a leisure and entertainment zone generating
              ongoing fit-out and window film installation demand in Edinburgh&apos;s
              port quarter regeneration zone.
            </p>
            <p>
              <strong className="text-foreground">Edinburgh Park and New Town EH2/EH12</strong> —
              Edinburgh&apos;s primary office zones, with Edinburgh Park EH12 hosting
              a large technology, financial and government office campus and
              the New Town EH2 financial district generating office refurbishment
              demand for frosted film, solar-control and manifestation from
              facilities managers and commercial interior contractors.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Edinburgh trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Edinburgh client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Edinburgh
              commercial projects where the site or centre management requires
              it in advance. For St James Quarter or Fort Kinnaird installations,
              we prepare contractor documentation to meet the respective centre
              management requirements before mobilisation.
            </p>
            <p>
              Edinburgh is approximately 3 hours 30 minutes from our South
              Yorkshire base via the A1 north. For Scottish sign and print
              companies with regular Edinburgh installation requirements, we
              offer planned programme scheduling — multi-day Edinburgh visits
              covering multiple projects in a single trip, reducing mobilisation
              overhead on each job. We can extend the same visit to Glasgow,
              Dundee or other Scottish locations where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Edinburgh services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Newcastle and the North East</p>
            </Link>
            <Link href="/window-film/retail-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/window-film/gym-window-film-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure window film across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Edinburgh trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Edinburgh window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Edinburgh site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Edinburgh EH postcodes and wider Lothians locations. RAMS
              available on request. Approximately 3 hours 30 minutes from South
              Yorkshire via the A1.
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
