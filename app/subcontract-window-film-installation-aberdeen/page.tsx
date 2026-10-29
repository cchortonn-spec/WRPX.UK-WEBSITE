import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Aberdeen | White-Label Film Installer Scotland | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Aberdeen and North East Scotland. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Union Street AB10, Union Square AB11, Bon Accord Centre AB25, Marischal Square AB10 and all Aberdeen AB postcode commercial sites. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-aberdeen/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Aberdeen — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Aberdeen and North East Scotland. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Union Street AB10, Union Square AB11, Bon Accord Centre AB25, Marischal Square AB10, the Aberdeen Beach commercial corridor and all Aberdeen AB postcode commercial sites. Approximately 4 hours from our South Yorkshire base via the A1(M) and A90. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Aberdeen", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-aberdeen/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Aberdeen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Aberdeen and North East Scotland AB postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Aberdeen client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Aberdeen sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Aberdeen and North East Scotland as standard. We arrive at the Aberdeen job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Aberdeen client does not need to know WRPX is involved. Aberdeen is approximately 4 hours from our South Yorkshire base via the A1(M) north and A90 — a fully motorway and dual-carriageway route through Edinburgh and up the east coast of Scotland. For planned Aberdeen subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the AB postcode area — we incorporate travel time into scheduling with multi-day Aberdeen programmes where the project volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for an Aberdeen shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Aberdeen commercial projects — retail units in Union Square AB11, Bon Accord Centre AB25 or the Union Street AB10 retail corridor, office refurbishments in the Aberdeen city-centre AB10 and AB11 commercial district, gym and leisure fitouts, healthcare glazing across Foresterhill AB25 and educational facilities across the AB postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In Scotland, manifestation standards are governed by the Scottish Technical Handbooks rather than English Building Regulations. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Aberdeen commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Union Square and Bon Accord Centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Union Square AB11 is Aberdeen&apos;s primary retail and leisure destination, anchored by national multiples and a cinema complex, generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Bon Accord Centre AB25 — Aberdeen&apos;s established covered shopping centre on George Street — generates further retail fit-out and window film demand from national and independent retailers within the enclosed mall footprint. We cover both sites as part of the same Aberdeen AB postcode mobilisation. Centre management contractor requirements for Union Square and Bon Accord Centre are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Aberdeen from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aberdeen is approximately 4 hours from our South Yorkshire base via the A1(M) north through Newcastle and Edinburgh, then the A90 north to Aberdeen — a fully motorway and dual-carriageway route. For planned Aberdeen subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the AB postcode area — we incorporate travel time into scheduling with multi-day Aberdeen programmes where the project volume justifies it. For Aberdeen sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Aberdeen and wider North East Scotland installations avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Aberdeen installations alongside Edinburgh or Glasgow in a single extended Scottish mobilisation where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Aberdeen and North East Scotland postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Aberdeen and North East Scotland AB postcode areas — AB10 (Aberdeen city centre: Union Street — Aberdeen&apos;s primary commercial and retail artery generating consistent window film demand for frosted film, solar-control and manifestation across its retail, office and hospitality stock; Marischal Square AB10 — the Aberdeen City Council civic campus and mixed-use commercial development generating office refurbishment and commercial glazing film demand; the Castlegate and Merchant Quarter AB10 zones with hospitality and independent retail glazing film demand), AB11 (Torry, Ferryhill, Duthie Park: Union Square AB11 — Aberdeen&apos;s primary retail and leisure mall generating substantial shopfitting, manifestation and solar-control window film demand from national multiple tenants; the Aberdeen harbour and waterfront commercial zone with hospitality and commercial glazing film demand), AB15 (Rubislaw, Queen&apos;s Cross, Mannofield: west Aberdeen professional quarter; the prime Aberdeen office zone along Albyn Place and Queens Road AB15 generating consistent office refurbishment, frosted film and manifestation demand from professional services, energy sector and corporate office operators), AB24 (Seaton, Old Aberdeen, King&apos;s Links: University of Aberdeen AB24 campus generating educational glazing film demand; Old Aberdeen conservation zone commercial provision; the Beach leisure and retail corridor AB24 generating gym, leisure and retail glazing film demand), AB25 (Woodside, Kittybrewster: Bon Accord Centre AB25 — Aberdeen&apos;s established covered shopping mall on George Street generating national retailer shopfitting, frosted film and manifestation demand; the Kittybrewster retail park AB25 generating out-of-town retailer glazing film demand; Foresterhill AB25 — Aberdeen&apos;s principal NHS health campus with Aberdeen Royal Infirmary generating healthcare glazing film demand from commercial interior contractors), AB12–AB13 (south Aberdeen: Dyce, Portlethen, Stonehaven: south Aberdeen commercial and residential zones with retail and business park glazing film demand from office and light industrial operators), AB21–AB23 (north and east Aberdeen: Dyce, Bridge of Don, Ellon: Aberdeen Airport AB21 zone with hotel and commercial glazing film demand; Bridge of Don AB22/AB23 business park and retail zone generating consistent commercial glazing film demand from energy sector and light industrial operators). Elgin IV30, Inverness IV1 and wider North Scotland also within operational reach. WRPX is based in South Yorkshire, approximately 4 hours from Aberdeen via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmAberdeenPage() {
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
            <span className="text-foreground">Aberdeen</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Aberdeen &amp; North East Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Aberdeen
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Aberdeen and
            North East Scotland. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film installed under your
            instructions. Union Square AB11, Bon Accord Centre AB25, Union
            Street AB10, Marischal Square AB10 and all Aberdeen AB postcode
            commercial sites. Approximately 4 hours from our South Yorkshire
            base via the A1(M) and A90.
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
            Who we work for in Aberdeen
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Aberdeen is Scotland&apos;s third city and a major commercial
              economy shaped by the energy sector, financial services and
              a significant retail, hospitality and property market. The city
              has a strong commercial office core along Union Street AB10 and
              the Queen&apos;s Road AB15 professional quarter, major retail
              destinations at Union Square AB11 and Bon Accord Centre AB25,
              and a large NHS health campus at Foresterhill AB25 — together
              generating consistent commercial glazing film demand from fit-out
              contractors, facilities managers and sign companies working across
              the AB postcode geography.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Aberdeen clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Aberdeen and the North East
              Scotland AB postcode area, we supply the installation element —
              attending site under your instructions, completing to specification
              and handing back clean documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple Scottish locations — Aberdeen,
              Edinburgh, Glasgow — we can co-ordinate the Aberdeen and wider AB
              postcode element from our South Yorkshire base. A multi-day
              Scottish mobilisation via the A1(M) covers Aberdeen alongside
              Edinburgh where programme volume allows, reducing mobilisation
              overhead on each job.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Aberdeen
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
                across all Aberdeen AB postcode commercial environments.
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
                window film application on Aberdeen retail and office fit-out
                projects at Union Square and the city-centre commercial core.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and east-facing
                commercial glazing across Aberdeen offices, retail units and
                hospitality buildings. Relevant for the large glazed offices along
                the Aberdeen Union Street frontage and the south-facing Marischal
                Square AB10 civic campus glazing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Aberdeen office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Aberdeen office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Aberdeen retail campaigns,
                seasonal graphics and store-opening programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aberdeen commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Union Square AB11</strong> —
              Aberdeen&apos;s primary retail and leisure destination, anchored by
              national multiples, a cinema complex and a hotel adjacent to
              Aberdeen railway station. Retail fit-out contractors delivering
              Union Square unit refurbishments and brand openings regularly need
              subcontract window film for manifestation, frosted fitting-room film
              and solar-control on glazed frontages. Centre management contractor
              requirements are addressed as standard.
            </p>
            <p>
              <strong className="text-foreground">Bon Accord Centre AB25</strong> —
              Aberdeen&apos;s established covered shopping centre on George Street,
              with national and independent retail tenants across an enclosed
              footprint. Consistent shopfitting and window film demand for fitting
              rooms, manifestation and solar-control from retailers within the
              centre. We follow Bon Accord centre management access and contractor
              protocols for all centre installations.
            </p>
            <p>
              <strong className="text-foreground">Union Street AB10</strong> —
              Aberdeen&apos;s principal commercial artery, with retail, office,
              hospitality and professional services operators across its full
              length generating consistent frosted film, manifestation and
              decorative vinyl demand from the city-centre commercial core.
              The distinctive granite frontages on Union Street generate a high
              concentration of commercial glazing film applications.
            </p>
            <p>
              <strong className="text-foreground">Marischal Square AB10</strong> —
              Aberdeen City Council&apos;s major mixed-use civic campus and
              commercial development, with office, hotel and public-space
              glazing generating commercial interior contractor demand for
              frosted film, manifestation and decorative vinyl across the
              Marischal Square complex.
            </p>
            <p>
              <strong className="text-foreground">Queen&apos;s Road AB15 professional quarter</strong> —
              Aberdeen&apos;s prime office corridor along Albyn Place, Queens Road
              and the west end of the city generating consistent office
              refurbishment, frosted film and manifestation demand from energy
              sector operators, professional services firms and corporate
              occupiers across the AB15 professional quarter.
            </p>
            <p>
              <strong className="text-foreground">Foresterhill AB25 health campus</strong> —
              Aberdeen Royal Infirmary and the wider Foresterhill NHS health
              campus, generating healthcare glazing film demand from commercial
              interior contractors working across the clinical, administrative and
              support estate. Frosted film, manifestation and privacy film across
              clinical areas, offices and patient-facing spaces.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Aberdeen trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Aberdeen client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Aberdeen
              commercial projects where the site or centre management requires
              it in advance. For Union Square or Bon Accord Centre installations,
              we prepare contractor documentation to meet the respective management
              requirements before mobilisation.
            </p>
            <p>
              Aberdeen is approximately 4 hours from our South Yorkshire base via
              the A1(M) and A90. For North East Scotland sign and print companies
              with regular Aberdeen installation requirements, we offer planned
              programme scheduling — multi-day Aberdeen visits covering multiple
              projects in a single trip, reducing mobilisation overhead on each
              job. We can extend the same visit to Edinburgh or other Scottish
              locations where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Aberdeen subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Aberdeen services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/subcontract-window-film-installation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Glasgow and West of Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Newcastle and the North East</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Manifestation for glazed panels and glass doors</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Aberdeen trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Aberdeen window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Aberdeen site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Aberdeen AB postcodes and wider North East Scotland locations.
              RAMS available on request. Approximately 4 hours from South
              Yorkshire via the A1(M) and A90.
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
