import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Manchester | White-Label Film Installer North West | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Manchester and the North West. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Arndale Centre, Trafford Centre, Spinningfields and all Manchester M postcode commercial sites.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Manchester — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Manchester and the North West. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Manchester Arndale M4, Trafford Centre M17, Spinningfields M3, MediaCityUK M50 and all Manchester M postcode commercial sites. Approximately 1 hour from our South Yorkshire base via the M62. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Manchester and Greater Manchester M postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Manchester client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Manchester sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Manchester and Greater Manchester as standard. We arrive at the Manchester job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Manchester client does not need to know WRPX is involved. Manchester is approximately 1 hour from our South Yorkshire base via the M62 — close enough for responsive, cost-effective mobilisation across all M postcode commercial environments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Manchester shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Manchester commercial sites. Shopfitters and fit-out contractors delivering Manchester commercial projects — retail units at Manchester Arndale M4, office refurbishments in Spinningfields M3, gym and leisure fitouts, educational and healthcare facilities across Greater Manchester — frequently need full-height glazed partitions, glass doors or glazed shop fronts manifested under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Manchester fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Manchester window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester is approximately 1 hour from our South Yorkshire base via the M62 — a straightforward motorway route that makes Manchester one of our most accessible major North West commercial markets. For Manchester subcontract window film work, we can typically survey within a few days of enquiry and schedule installation within the following week. For urgent Manchester installations — sign and print companies needing same-week or short-notice scheduling for retail or office fit-out programmes — contact us directly to discuss availability. We also cover Salford M50 MediaCityUK, Trafford M17 and wider Greater Manchester as part of the same Manchester mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Manchester window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Manchester commercial project that requires it. For installations in managed Manchester retail environments — Manchester Arndale M4, Trafford Centre M17 or Spinningfields M3 — where centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Manchester client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Manchester and Greater Manchester postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Manchester and Greater Manchester M postcode areas — M1 (Manchester city centre core: Piccadilly, Northern Quarter, Oxford Road — the principal concentration of commercial fit-out, retail, office and hospitality window film demand in Manchester), M2 (Manchester city centre financial district: Deansgate, King Street, St Ann&apos;s Square — premium office and retail window film market), M3 (Spinningfields, Salford approach: the Spinningfields commercial and legal quarter and the approach to Salford with significant office and co-working fit-out demand), M4 (Manchester Arndale zone, Ancoats — Manchester Arndale shopping centre M4 is one of the busiest retail environments in the North West and a frequent destination for retail fit-out subcontract window film installation), M5-M6 (Salford: Salford Quays and the inner Salford commercial zone), M14-M16 (Rusholme, Fallowfield, Didsbury, Chorlton — south Manchester residential and commercial retail zone), M17 (Trafford Centre: the intu Trafford Centre — one of the UK&apos;s largest retail destinations — with major format retail buildings and extensive glazed frontages suited to solar-control and manifestation film; a significant subcontract window film opportunity for shopfitters managing Trafford Centre unit fit-outs), M50 (MediaCityUK, Salford Quays — the BBC, ITV and creative industry hub with modern commercial glazed buildings requiring solar-control and privacy film). Wider Greater Manchester including Stockport SK, Bury BL9, Bolton BL and Wigan WN are also within reach. WRPX is based in South Yorkshire, approximately 1 hour from Manchester via the M62.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmManchesterPage() {
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
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Manchester &amp; Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Manchester
            and Greater Manchester. Frosted film, privacy film, solar-control
            film, glass manifestation and decorative window film installed under
            your instructions. Manchester Arndale, Trafford Centre, Spinningfields,
            MediaCityUK and all Manchester M postcode commercial sites.
            Approximately 1 hour from our South Yorkshire base via the M62.
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
            Who we work for in Manchester
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is the UK&apos;s largest regional commercial centre outside
              London — a major hub for retail, office, creative and digital
              industries with one of the most active commercial fit-out and
              refurbishment markets in the country. The volume of retail unit
              fit-outs across Manchester Arndale M4 and Trafford Centre M17,
              combined with the large office fit-out market in Spinningfields M3
              and the wider Manchester city core, creates consistent demand for
              professional subcontract window film installation from sign
              companies, print businesses and fit-out contractors operating in
              the Manchester area.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Manchester clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering
              retail, office and leisure projects across Manchester and Greater
              Manchester, we supply the installation element — attending site
              under your instructions, completing to specification and handing
              back clean documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple North West locations — Manchester,
              Salford, Trafford, Stockport — we cover the full Greater Manchester
              M postcode geography in a single mobilisation, reducing travel
              overhead and keeping retail rollout schedules tight.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Manchester
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
                across all Manchester M postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation at 850mm and 1400mm
                height on full-height glazed panels and internal glass doors.
                Frosted bands, etched-effect, dot pattern or branded options —
                the most common subcontract window film job on Manchester
                commercial fit-out projects at Arndale and Spinningfields.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Manchester offices, retail units and
                hospitality buildings. Cuts UV fading of interiors and furnishings.
                Relevant for large-glazed commercial buildings across the city
                centre M1-M3 and MediaCityUK M50.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Manchester office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Manchester office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Manchester retail campaigns,
                seasonal graphics and store-opening programmes — installed and
                removed cleanly without glazing damage on behalf of your print
                or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Manchester Arndale M4</strong> —
              the UK&apos;s largest city-centre covered shopping mall, with over 200
              retail and food units across a multi-level footprint in the heart of
              Manchester M4. Standard window film applications across Arndale
              include fitting-room frosted film, DDA glass manifestation on internal
              glass doors and partitions, solar-control film on glazed mall sections
              and branded decorative film for individual unit fit-outs. We follow
              Arndale centre management access and contractor protocols.
            </p>
            <p>
              <strong className="text-foreground">Spinningfields M3</strong> —
              Manchester&apos;s premier commercial and legal quarter, with Class A office
              buildings, premium retail and hospitality concentrated between
              Deansgate and the River Irwell. Office fit-out contractors in
              Spinningfields regularly need subcontract glass manifestation,
              frosted film for meeting room partitions and solar-control film on
              south-facing glazed office frontages.
            </p>
            <p>
              <strong className="text-foreground">Trafford Centre M17</strong> —
              one of the UK&apos;s largest out-of-town retail destinations, with a
              major retail and leisure complex on a large footprint in the Trafford
              Park zone. Shopfitters delivering unit fit-outs at the Trafford Centre
              are a primary audience for subcontract window film installation —
              fitting-room frosted film, manifestation and solar-control across a
              diverse tenant mix.
            </p>
            <p>
              <strong className="text-foreground">MediaCityUK M50</strong> —
              the BBC, ITV and creative media hub at Salford Quays M50. Modern
              commercial glazed buildings with large south-facing facades generate
              consistent solar-control film demand. Creative and media agency fit-out
              in this zone also creates demand for frosted film, etched-effect film
              and branded glass partition treatments.
            </p>
            <p>
              <strong className="text-foreground">Manchester city centre core M1-M2</strong> —
              the commercial heart of Manchester, with Piccadilly, the Northern
              Quarter, the retail core along Market Street and the financial
              district on King Street and Deansgate generating consistent window
              film demand across offices, retail, hospitality and education
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Manchester trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Manchester client relationship. We install the film.
              We attend on the agreed date, communicate only with your site contact,
              complete each glazed area to the specification you provide and send
              you before-and-after photographs for every surface. If you need us
              to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Manchester
              commercial projects where the site or centre management requires
              it in advance. For Manchester Arndale M4 or Trafford Centre M17
              installations, we prepare contractor documentation to meet the
              respective centre requirements before mobilisation.
            </p>
            <p>
              Manchester is approximately 1 hour from our South Yorkshire base
              via the M62 — a reliable motorway route that makes Manchester one
              of our most accessible major North West commercial markets. For
              North West sign and print companies with Manchester installation
              requirements, we offer responsive mobilisation and the ability to
              cover Greater Manchester alongside Yorkshire in a co-ordinated
              multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Manchester services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Sheffield and South Yorkshire</p>
            </Link>
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Manchester and Greater Manchester</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Manchester</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Manchester trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Manchester window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Manchester site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Greater Manchester M postcodes. RAMS available on request.
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
