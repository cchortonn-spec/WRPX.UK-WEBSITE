import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Cardiff | White-Label Film Installer Wales | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Cardiff and South Wales. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. St David&apos;s Dewi Sant CF10, Cardiff Bay, Culverhouse Cross and all Cardiff CF postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M1 and M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-cardiff/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Cardiff — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Cardiff and South Wales. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. St David's Dewi Sant CF10, Cardiff Bay CF10, Culverhouse Cross CF5, Capital Retail Park CF3 and all Cardiff CF postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M1 and M4. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Cardiff", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-cardiff/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Cardiff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Cardiff and South Wales CF postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Cardiff client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Cardiff sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Cardiff and South Wales as standard. We arrive at the Cardiff job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Cardiff client does not need to know WRPX is involved. Cardiff is approximately 3 hours from our South Yorkshire base via the M1 south and M4 west — a well-established motorway corridor into Wales. For sign and print businesses based in Wales managing Cardiff installations, we provide a dependable installation resource that keeps your programme on schedule without you carrying your own install team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Cardiff shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Cardiff commercial projects — retail units in St David's Dewi Sant CF10, office refurbishments in Cardiff Bay CF10, gym and leisure fitouts, educational facilities across the CF postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Cardiff fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover St David's Dewi Sant and Cardiff Bay for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — St David's Dewi Sant CF10 is one of Wales&apos;s largest and most visited shopping destinations, with anchor retailers, fashion brands, food and leisure operators and a large glazed public atrium generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Cardiff Bay CF10 is the city&apos;s major waterfront regeneration zone — Mermaid Quay, Roald Dahl Plass, the Pierhead area and Cardiff Bay Retail Park generate office refurbishment, hospitality and retail window film demand across a substantial mixed-use footprint. We cover both sites as part of the same Cardiff CF postcode mobilisation. Centre management contractor requirements for St David's are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Cardiff from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cardiff is approximately 3 hours from our South Yorkshire base via the M1 south and M4 west — a direct motorway route into South Wales. For planned Cardiff subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across South Wales — we incorporate travel time into scheduling with multi-day Cardiff programmes where the project volume justifies it. For Cardiff sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Cardiff and wider South Wales installations avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Cardiff installations alongside Bristol and South West England sites in a single mobilisation via the M4 corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Which Cardiff and South Wales postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Cardiff and wider CF postcode areas — CF10 (Cardiff city centre: St David's Dewi Sant — one of Wales&apos;s largest shopping destinations with national multiple retailers generating ongoing shopfitting and window film demand across its two-phase CF10 footprint; Cardiff Bay — the city&apos;s major waterfront zone with Mermaid Quay, Roald Dahl Plass and Cardiff Bay Retail Park generating office, hospitality and retail window film demand; Cardiff Central Station corridor with commercial and office glazing film demand; Cardiff Castle and Bute Park area with hospitality and attraction glazing demand), CF11 (Pontcanna, Canton, Leckwith — inner south-west Cardiff residential and commercial zone; Leckwith Retail Park generating retail fit-out and window film demand from the western approach; Pontcanna CF11 with boutique retail and hospitality glazing demand), CF14 (Whitchurch, Rhiwbina, Llanishen — north Cardiff affluent suburban zone; Llanishen Leisure Centre CF14 and north Cardiff retail provision generating window film demand), CF15 (Radyr, Morganstown, Tongwynlais — north-west Cardiff suburban zone), CF23 (Roath, Cyncoed — east Cardiff inner residential zone with private healthcare and professional services glazing demand), CF24 (Roath, Penylan, Tremorfa — south-east Cardiff inner zone; The Capitol shopping centre CF24 generating retail window film demand), CF3 (Rumney, Llanrumney, St Mellons — east Cardiff zone; Capital Retail Park CF3 is a major out-of-town retail destination generating substantial shopfitting and window film installation demand from national and regional retailers), CF5 (Ely, Fairwater, Culverhouse Cross — west Cardiff zone; Culverhouse Cross retail area CF5 is a significant out-of-town retail cluster generating consistent shopfitting, manifestation and solar-control film demand), CF14-CF83 (wider Vale of Glamorgan, Rhondda Cynon Taf and Cardiff City Region postcodes also within reach). Newport NP, Bridgend CF31 and wider South Wales also covered from the same Cardiff mobilisation. WRPX is based in South Yorkshire, approximately 3 hours from Cardiff via the M1 and M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Cardiff and
            South Wales. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film installed under your
            instructions. St David&apos;s Dewi Sant CF10, Cardiff Bay, Culverhouse
            Cross CF5, Capital Retail Park CF3 and all Cardiff CF postcode
            commercial sites. Approximately 3 hours from our South Yorkshire
            base via the M1 and M4.
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
            Who we work for in Cardiff
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is Wales&apos;s capital and largest commercial city — a major
              retail, financial, professional services, media and hospitality
              economy anchored by St David&apos;s Dewi Sant in the city centre
              CF10, Cardiff Bay&apos;s waterfront regeneration zone and a strong
              out-of-town retail offer at Culverhouse Cross CF5 and Capital
              Retail Park CF3. The Welsh Government presence generates substantial
              professional services and office glazing film demand across
              Cardiff Bay and the city centre.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Cardiff clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Cardiff and South Wales, we
              supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running
              window film programmes across multiple Welsh locations — Cardiff,
              Swansea, Newport, Bridgend — we can co-ordinate the Cardiff and
              wider South Wales element from our South Yorkshire base. A single
              multi-day mobilisation via the M4 covers the full Cardiff CF
              postcode geography and nearby South Wales commercial centres.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Cardiff
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
                across all Cardiff CF postcode commercial environments.
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
                window film application on Cardiff retail and office fit-out
                projects at St David&apos;s and Cardiff Bay.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Cardiff offices, retail units and
                hospitality buildings. Relevant for glazed commercial buildings
                on the south-facing Cardiff Bay waterfront and west-facing
                retail frontages at Culverhouse Cross CF5.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Cardiff office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Cardiff office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Cardiff retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiff commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">St David&apos;s Dewi Sant CF10</strong> —
              one of Wales&apos;s largest and most visited shopping destinations,
              with anchor retailers, fashion brands, food and leisure operators
              and a glazed public atrium generating consistent shopfitting and
              window film installation demand. Retail fit-out contractors
              delivering St David&apos;s unit refurbishments and brand openings
              regularly need subcontract window film for manifestation,
              frosted fitting-room film and solar-control on glazed frontages.
            </p>
            <p>
              <strong className="text-foreground">Cardiff Bay CF10</strong> —
              the city&apos;s major waterfront regeneration zone covering Mermaid
              Quay, Roald Dahl Plass, the Pierhead area and Cardiff Bay Retail
              Park. Office refurbishment in the Welsh Government and media
              buildings, hospitality fit-outs and retail units across Cardiff
              Bay generate a broad range of subcontract window film demand
              from frosted privacy film to solar-control and manifestation.
            </p>
            <p>
              <strong className="text-foreground">Culverhouse Cross CF5</strong> —
              a major out-of-town retail cluster in west Cardiff, with national
              and regional retailers generating consistent shopfitting, manifestation
              and solar-control film demand across a substantial retail footprint.
            </p>
            <p>
              <strong className="text-foreground">Capital Retail Park CF3</strong> —
              east Cardiff&apos;s primary out-of-town retail destination, with a
              broad mix of home, fashion, leisure and food retailers generating
              ongoing fit-out and window film installation demand. Shopfitters
              managing Capital Retail Park unit fits operate under centre
              management protocols — we prepare RAMS and co-ordinate access
              windows as a matter of course.
            </p>
            <p>
              <strong className="text-foreground">Cardiff city centre and office zones CF10–CF24</strong> —
              the wider city-centre office and commercial zone, including the
              Central Station corridor, Bute Terrace, Park Place and the
              university quarter CF10, generating office refurbishment demand
              for frosted film, solar-control and manifestation from facilities
              managers and commercial interior contractors.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Cardiff trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Cardiff client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Cardiff
              commercial projects where the site or centre management requires
              it in advance. For St David&apos;s Dewi Sant or Culverhouse Cross
              installations, we prepare contractor documentation to meet the
              respective centre management requirements before mobilisation.
            </p>
            <p>
              Cardiff is approximately 3 hours from our South Yorkshire base via
              the M1 and M4. For Welsh sign and print companies with regular
              Cardiff installation requirements, we offer planned programme
              scheduling — multi-day Cardiff visits covering multiple projects
              in a single trip, reducing mobilisation overhead on each job. We
              can extend the same visit to Swansea, Newport, Bridgend or other
              South Wales locations where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Cardiff services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Bristol and the South West</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Birmingham and the Midlands</p>
            </Link>
            <Link href="/window-film/retail-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Cardiff and South Wales</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Commercial Window Film</p>
              <p className="mt-1 text-xs text-muted">Full commercial window film service overview</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Cardiff trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Cardiff window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Cardiff site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Cardiff CF postcodes and wider South Wales locations. RAMS
              available on request. Approximately 3 hours from South Yorkshire
              via the M1 and M4.
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
