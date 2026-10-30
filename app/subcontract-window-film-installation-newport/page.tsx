import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Newport | White-Label Film Installer South Wales | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Newport and South East Wales. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Kingsway Centre NP20, Newport city centre, Spytty Retail Park NP19, Queensway Meadows NP20 and all Newport NP postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-newport/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Newport — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Newport and South East Wales. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Kingsway Centre NP20, Newport city centre, Spytty Retail Park NP19, Queensway Meadows NP20, the Aneurin Bevan University Health Board campus and all Newport NP postcode commercial sites. Approximately 3 hours from our South Yorkshire base via the M4. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Newport", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-newport/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Newport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Newport and South East Wales NP postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Newport client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Newport sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Newport and South East Wales as standard. We arrive at the Newport job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Newport client does not need to know WRPX is involved. Newport is approximately 3 hours from our South Yorkshire base via the M1, M42 and M4 — a direct motorway route across England and into South Wales. For planned Newport subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the NP postcode area — we incorporate travel time into scheduling with multi-day South Wales programmes where the project volume justifies it. Newport sits between Cardiff and Bristol on the M4 corridor, making it straightforward to combine with Cardiff or Bristol in a single mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Newport shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Newport commercial projects — retail units at Kingsway Centre NP20 or Spytty Retail Park NP19, office refurbishments in Newport city centre NP20, gym and leisure fitouts, healthcare glazing at the Aneurin Bevan University Health Board facilities and educational fit-outs across the NP postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In Wales, manifestation standards follow Building Regulations, with two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Newport commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Kingsway Centre and Spytty Retail Park for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Kingsway Centre NP20 is Newport&apos;s primary covered shopping centre in the heart of the city centre, generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Spytty Retail Park NP19 — Newport&apos;s main out-of-town retail destination — generates large-format and warehouse-style retailer glazing film demand from its open-site frontages. Queensway Meadows NP20 provides further Newport retail park glazing film demand. We cover all three sites as part of the same Newport NP postcode mobilisation. Centre management contractor requirements for Kingsway Centre are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Newport from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newport is approximately 3 hours from our South Yorkshire base via the M1, M42 and M4 — a direct motorway route with the M4 crossing into Wales via the Second Severn Crossing. Newport is effectively on the same M4 route as Cardiff — approximately 20 minutes east of Cardiff — making it straightforward to combine Newport and Cardiff installations in a single South Wales mobilisation. For Newport sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Newport and the wider South East Wales NP postcode area avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Newport installations alongside Cardiff, Swansea or Bristol in a single extended mobilisation where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newport and South East Wales postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newport and surrounding NP postcode areas — NP18 (Caerleon: the historic Roman town and Caerleon campus of the University of South Wales generating educational glazing film demand; Caerleon NP18 suburban zone), NP19 (Bettws, Ringland, Llanwern: Spytty Retail Park NP19 — Newport&apos;s primary out-of-town retail destination with large-format national retailers generating solar-control and manifestation demand from open-site glazed frontages; the Llanwern and eastern Newport industrial and commercial zones), NP20 (Newport city centre: Kingsway Centre NP20 — Newport&apos;s primary covered shopping mall generating consistent shopfitting and window film demand from national retailer tenants; Commercial Street NP20 — Newport&apos;s pedestrianised city-centre retail and hospitality corridor; Queensway Meadows NP20 retail park; Newport Civic Centre and the commercial office quarter generating office refurbishment and glazing film demand; Royal Gwent Hospital NP20 — the principal NHS hospital for Newport and South East Wales, part of the Aneurin Bevan University Health Board, generating healthcare interior glazing film demand from commercial contractors), NP44 (Cwmbran: Cwmbran town centre and Cwmbran Shopping NP44 — a significant retail destination north of Newport generating shopfitting and window film demand from national retailers in the Cwmbran covered mall and town-centre retail zone), NP10 (Rogerstone, Bassaleg, Duffryn: west Newport commercial and light industrial zone with retail and service operator glazing film demand). Cardiff CF postcodes, Caerphilly CF83 and wider South East Wales also within reach. WRPX is based in South Yorkshire, approximately 3 hours from Newport via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmNewportPage() {
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
            <span className="text-foreground">Newport</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Newport &amp; South East Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Newport
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Newport and
            South East Wales. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film installed under your
            instructions. Kingsway Centre NP20, Spytty Retail Park NP19,
            Newport city centre and all Newport NP postcode commercial sites.
            Approximately 3 hours from our South Yorkshire base via the M4.
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
            Who we work for in Newport
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newport is South Wales&apos;s third city and a significant commercial
              hub on the M4 corridor between Cardiff and Bristol. The city
              has a well-established retail core anchored by Kingsway Centre
              NP20 and Spytty Retail Park NP19, a growing commercial office
              sector along the city-centre NP20 core, and a large NHS health
              campus at Royal Gwent Hospital NP20 — together generating consistent
              commercial glazing film demand from fit-out contractors, facilities
              managers and sign companies working across the NP postcode geography.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Newport clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Newport and the South East Wales
              NP postcode area, we supply the installation element — attending
              site under your instructions, completing to specification and
              handing back clean documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple South Wales locations — Newport,
              Cardiff, Swansea — we can co-ordinate the Newport and wider NP
              postcode element from our South Yorkshire base. A South Wales
              mobilisation via the M4 covers Newport alongside Cardiff where
              programme volume allows, reducing mobilisation overhead on each job.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Newport
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
                across all Newport NP postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and
                1400mm height on full-height glazed panels and internal glass
                doors. Frosted bands, etched-effect, dot pattern or branded
                options — the most common subcontract window film application
                on Newport retail and office fit-out projects at Kingsway Centre
                and the city-centre commercial core.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Newport offices, retail units and
                hospitality buildings. Relevant for glazed frontages along
                Commercial Street NP20 and Spytty Retail Park NP19 open-site
                retail buildings with significant glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Newport office glazing, reception screens and commercial
                shopfronts — supplied and installed or installation-only from
                your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Newport office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Newport retail campaigns,
                seasonal graphics and store-opening programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newport commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Kingsway Centre NP20</strong> —
              Newport&apos;s primary covered shopping centre in the heart of the
              city centre, with national and independent retail tenants generating
              consistent shopfitting and window film demand for fitting rooms,
              manifestation and solar-control glazing. Centre management contractor
              requirements are addressed as standard — RAMS prepared and access
              confirmed in advance.
            </p>
            <p>
              <strong className="text-foreground">Spytty Retail Park NP19</strong> —
              Newport&apos;s main out-of-town retail destination on the eastern
              edge of the city, with large-format national retailers and
              warehouse-style operators on open-site frontages. South and
              west-facing glazed elevations receive significant direct solar
              exposure — a primary driver of solar-control film demand at
              Newport out-of-town locations.
            </p>
            <p>
              <strong className="text-foreground">Newport city centre NP20</strong> —
              Commercial Street and the Newport city-centre pedestrianised zone,
              with retail, hospitality and service operators generating frosted
              film, manifestation and decorative vinyl demand from the core retail
              and commercial strip. Office buildings along the city-centre NP20
              corridor generate consistent office refurbishment and glazing film
              demand.
            </p>
            <p>
              <strong className="text-foreground">Royal Gwent Hospital NP20</strong> —
              Newport&apos;s principal NHS hospital and the Aneurin Bevan University
              Health Board commercial estate, generating healthcare interior glazing
              film demand from commercial interior contractors working across
              clinical, administrative and patient-facing spaces.
            </p>
            <p>
              <strong className="text-foreground">Cwmbran NP44</strong> —
              Cwmbran town centre and Cwmbran Shopping NP44 — a significant retail
              and commercial destination north of Newport generating shopfitting
              and window film demand from national retailers within the Cwmbran
              covered mall and town-centre retail zone. Readily combined with
              Newport in the same mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Queensway Meadows NP20 &amp; wider NP</strong> —
              Queensway Meadows retail park and the wider Newport NP postcode
              commercial estate — business parks, light industrial and commercial
              operators across Rogerstone NP10, Bassaleg and the Newport M4
              junction commercial zones — all within the same Newport NP mobilisation.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Newport trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Newport client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Newport commercial
              projects where the site or centre management requires it in advance.
              For Kingsway Centre or Spytty Retail Park installations, we prepare
              contractor documentation to meet the respective management requirements
              before mobilisation.
            </p>
            <p>
              Newport is approximately 3 hours from our South Yorkshire base via
              the M1, M42 and M4 — a direct motorway route with the M4 crossing
              into Wales. Newport sits on the same M4 corridor as Cardiff, making
              it practical to combine Newport and Cardiff in a single South Wales
              mobilisation. For Newport sign and print companies with regular
              installation requirements, we offer planned programme scheduling —
              multi-site South Wales visits covering Newport, Cardiff and wider NP
              postcode locations in a single trip to reduce mobilisation overhead
              on each job.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newport subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Newport services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Cardiff and South Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-swansea/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Swansea</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Swansea and South West Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Bristol and the West</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Glass Manifestation</p>
              <p className="mt-1 text-xs text-muted">Building Regulations-compliant manifestation for glazed panels and doors</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Newport trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newport window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Newport site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Newport NP postcodes and wider South East Wales locations.
              RAMS available on request. Approximately 3 hours from South
              Yorkshire via the M4.
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
