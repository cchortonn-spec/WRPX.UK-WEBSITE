import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Swansea | White-Label Film Installer South Wales | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Swansea and South West Wales. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Swansea city centre SA1, Quadrant Shopping Centre, Parc Tawe SA1, Morfa Retail Park SA1 and all Swansea SA postcode commercial sites. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-swansea/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Swansea — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Swansea and South West Wales. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Swansea city centre SA1, Quadrant Shopping Centre SA1, Parc Tawe Retail Park SA1, Morfa Retail Park SA1, Liberty Stadium SA1 zone and all Swansea SA postcode commercial sites. Approximately 3 hours 30 minutes from our South Yorkshire base via the M4. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Swansea", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-swansea/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Swansea and South West Wales SA postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Swansea client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Swansea sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Swansea and South West Wales as standard. We arrive at the Swansea job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Swansea client does not need to know WRPX is involved. Swansea is approximately 3 hours 30 minutes from our South Yorkshire base via the M4 — a direct motorway route across England and into South Wales. For South Wales sign and print businesses based in Swansea managing local installations, we provide a dependable installation resource that keeps your programme on schedule without you carrying your own install team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Swansea shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Swansea commercial projects — retail units in Quadrant Shopping Centre SA1, office refurbishments in the Swansea city-centre SA1 commercial district, gym and leisure fitouts, care home glazing and educational facilities across the SA postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Swansea fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Quadrant Shopping Centre and Morfa Retail Park for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Quadrant Shopping Centre SA1 is Swansea&apos;s primary covered shopping destination in the city centre, with national multiples and independent retailers across an enclosed footprint generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Morfa Retail Park SA1 near the Liberty Stadium is Swansea&apos;s primary out-of-town retail destination, with large-format national retailers on open-site frontages generating substantial solar-control and manifestation window film demand from south and west-facing glazed elevations. We cover both sites as part of the same Swansea SA1 mobilisation. Centre management contractor requirements for Quadrant Shopping Centre are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Swansea from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swansea is approximately 3 hours 30 minutes from our South Yorkshire base via the M4 — a direct motorway route across the Midlands and into South Wales via the Severn crossings. For planned Swansea subcontract window film programmes — retail fit-out schedules, office refurbishments or multi-site window film rollouts across the SA postcode area — we incorporate travel time into scheduling with multi-day Swansea programmes where the project volume justifies it. For Swansea sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Swansea and wider South West Wales installations avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Swansea installations alongside Cardiff and other South Wales sites in a single Welsh mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Swansea and South Wales postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Swansea and wider SA postcode areas — SA1 (Swansea city centre and Maritime Quarter: Quadrant Shopping Centre — Swansea&apos;s primary covered shopping destination with national multiples generating consistent shopfitting and window film demand; St David&apos;s Indoor Market and the Wind Street hospitality and leisure corridor with bar, restaurant and retail glazing film demand; SA1 Waterfront and Maritime Quarter regeneration zone with new mixed-use office and commercial glazing film demand; Parc Tawe Retail and Leisure Park SA1 — the out-of-town retail park adjacent to the city centre with national retailers and leisure operators; Morfa Retail Park SA1 — Swansea&apos;s primary large-format out-of-town retail park near the Liberty Stadium with consistent national retailer shopfitting and solar-control demand), SA2 (Uplands, Sketty, Brynmill: inner west Swansea mixed commercial and residential zone; Singleton Park and Swansea University campus SA2 generating educational and sport facility glazing film demand; professional services and healthcare glazing film demand in the Sketty Lane SA2 corridor), SA3 (Mumbles: the Mumbles seafront and village commercial zone generating hospitality and retail glazing film demand from café, restaurant and independent retail operators along Newton Road SA3), SA4 (Gorseinon, Loughor: west Swansea suburban zone; Gorseinon town centre SA4 generating district-level retail and commercial glazing film demand), SA5 (Manselton, Cwmbwrla, Fforestfach: west Swansea residential and commercial zones; Fforestfach SA5 commercial and light industrial estate generating glazing film demand from office and light commercial operators), SA6 (Morriston, Clydach: north Swansea industrial and commercial zone; Morriston retail and commercial corridor SA6 generating window film demand from national and independent retailers), SA7 (Birchgrove, Llansamlet: north-east Swansea commercial and light industrial zone; Swansea Enterprise Park SA7 generating office and commercial glazing film demand from business park operators), SA8 (Pontardawe: the upper Swansea Valley district town generating community retail and commercial glazing film demand). Neath SA11, Port Talbot SA12, Carmarthen SA31, Llanelli SA15 and wider South West Wales also within reach. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Swansea via the M4.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmSwanseaPage() {
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
            <span className="text-foreground">Swansea</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Swansea &amp; South West Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Swansea
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Swansea and
            South West Wales. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film installed under your
            instructions. Quadrant Shopping Centre SA1, Morfa Retail Park SA1,
            Parc Tawe SA1 and all Swansea SA postcode commercial sites.
            Approximately 3 hours 30 minutes from our South Yorkshire base
            via the M4.
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
            Who we work for in Swansea
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Swansea is Wales&apos;s second city and a growing commercial economy
              in South West Wales — a city with a retail core anchored by
              Quadrant Shopping Centre SA1 in the city centre, significant
              out-of-town retail provision at Morfa Retail Park SA1 and Parc
              Tawe Retail Park SA1, and expanding commercial and office
              development in the SA1 Waterfront regeneration zone. The wider
              SA postcode area extends across Neath, Port Talbot, the Gower
              Peninsula and the South West Wales coastal and valley communities.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Swansea clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Swansea and the SA postcode area,
              we supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple Welsh locations — Swansea, Cardiff,
              Newport — we can co-ordinate the Swansea and wider SA postcode
              element from our South Yorkshire base. A single multi-day
              mobilisation via the M4 covers the full Swansea geography alongside
              Cardiff and the south Wales coast where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Swansea
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
                across all Swansea SA postcode commercial environments.
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
                window film application on Swansea retail and office fit-out
                projects at Quadrant Shopping Centre and Morfa Retail Park.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Swansea offices, retail units and
                hospitality buildings. Relevant for glazed commercial buildings
                on the Swansea Bay waterfront and the south-facing Morfa Retail
                Park SA1 frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Swansea office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Swansea office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Swansea retail campaigns,
                seasonal graphics and store-opening programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swansea commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Quadrant Shopping Centre SA1</strong> —
              Swansea&apos;s primary covered shopping destination in the city centre,
              with national multiples and independent retailers across an enclosed
              footprint generating consistent shopfitting and window film installation
              demand. Retail fit-out contractors delivering Quadrant unit
              refurbishments and brand openings regularly need subcontract window
              film for manifestation, frosted fitting-room film and solar-control
              on glazed frontages. Centre management contractor requirements are
              addressed as standard.
            </p>
            <p>
              <strong className="text-foreground">Morfa Retail Park SA1</strong> —
              Swansea&apos;s primary large-format out-of-town retail destination near
              the Liberty Stadium, with national retailers on open-site frontages
              generating substantial ongoing shopfitting, manifestation and
              solar-control window film demand. Shopfitters managing Morfa unit
              fits operate under park management protocols — we prepare RAMS and
              co-ordinate access windows as a matter of course.
            </p>
            <p>
              <strong className="text-foreground">Parc Tawe Retail &amp; Leisure Park SA1</strong> —
              Swansea&apos;s mixed retail and leisure destination adjacent to the city
              centre, with national retailers, a cinema and leisure operators
              generating ongoing fit-out and window film installation demand
              in Swansea&apos;s central commercial zone.
            </p>
            <p>
              <strong className="text-foreground">SA1 Waterfront and Maritime Quarter</strong> —
              Swansea&apos;s major waterfront regeneration zone, with growing commercial
              office, hotel and mixed-use development generating office refurbishment
              demand for frosted film, solar-control and manifestation from facilities
              managers and commercial interior contractors in the expanding SA1
              waterfront district.
            </p>
            <p>
              <strong className="text-foreground">Swansea University and Enterprise Park SA7</strong> —
              Swansea University&apos;s Bay Campus SA1 and Singleton Campus SA2, along
              with Swansea Enterprise Park SA7, generate educational, research and
              commercial glazing film demand from university facilities managers,
              commercial tenants and fit-out contractors working across the
              Swansea knowledge economy estate.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Swansea trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Swansea client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Swansea
              commercial projects where the site or centre management requires
              it in advance. For Quadrant Shopping Centre or Morfa Retail Park
              installations, we prepare contractor documentation to meet the
              respective management requirements before mobilisation.
            </p>
            <p>
              Swansea is approximately 3 hours 30 minutes from our South
              Yorkshire base via the M4. For South Wales sign and print companies
              with regular Swansea installation requirements, we offer planned
              programme scheduling — multi-day Swansea visits covering multiple
              projects in a single trip, reducing mobilisation overhead on each
              job. We can extend the same visit to Cardiff, Newport or other
              South Wales locations where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Swansea services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Cardiff and South Wales</p>
            </Link>
            <Link href="/subcontract-window-film-installation-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Bristol and the West</p>
            </Link>
            <Link href="/window-film/retail-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Cardiff and South Wales</p>
            </Link>
            <Link href="/window-film/gym-window-film-cardiff/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Cardiff</p>
              <p className="mt-1 text-xs text-muted">Gym and leisure window film across Cardiff and South Wales</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Swansea trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Swansea window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Swansea site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Swansea SA postcodes and wider South West Wales locations.
              RAMS available on request. Approximately 3 hours 30 minutes from
              South Yorkshire via the M4.
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
