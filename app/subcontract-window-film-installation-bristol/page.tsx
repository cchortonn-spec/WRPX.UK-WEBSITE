import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Bristol | White-Label Film Installer South West | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Bristol and the South West. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Cabot Circus, Broadmead, Clifton Village, Bristol Temple Quarter and all Bristol BS postcode commercial sites.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-bristol/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Bristol — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Bristol and the South West. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Cabot Circus BS1, Broadmead BS1, Clifton Village BS8, Bristol Temple Quarter BS1, Aztec West Business Park BS32 and all Bristol BS postcode commercial sites. Approximately 2 hours from our South Yorkshire base via the M1 and M5. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Bristol", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-bristol/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Bristol and South West BS postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Bristol client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Bristol sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Bristol and the South West as standard. We arrive at the Bristol job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Bristol client does not need to know WRPX is involved. Bristol is approximately 2 hours from our South Yorkshire base via the M1 and M5 — a direct motorway route that makes Bristol one of our important South West commercial markets, alongside the Bristol and Bath Science Park BS4 and the wider M4/M5 corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Bristol shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Bristol commercial sites. Shopfitters and fit-out contractors delivering Bristol commercial projects — retail units at Cabot Circus BS1 and Broadmead BS1, office refurbishments in Temple Quarter BS1 and Redcliffe BS1, gym and leisure fitouts, educational and healthcare facilities across Avon — frequently need full-height glazed partitions, glass doors or glazed shop fronts manifested under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Bristol fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Bristol window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bristol is approximately 2 hours from our South Yorkshire base via the M1 and M5 — a direct motorway route. For Bristol subcontract window film work, we can typically survey within a few days of enquiry and schedule installation within the following week. For urgent Bristol installations — sign and print companies needing same-week or short-notice scheduling for retail or office fit-out programmes — contact us directly to discuss availability. We also cover Bath BA, Weston-super-Mare BS23, Gloucester GL and the wider South West as part of the same Bristol mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Bristol window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Bristol commercial project that requires it. For installations in managed Bristol retail environments — Cabot Circus BS1 or Broadmead BS1 — where centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Bristol client or facilities contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bristol and South West postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bristol and wider South West BS postcode areas — BS1 (Bristol city centre: Cabot Circus — the major covered shopping, dining and leisure destination with over 100 units across a multi-level complex anchored by Harvey Nichols and national multiples; Broadmead retail district — the traditional Bristol city-centre shopping area adjacent to Cabot Circus with a large volume of retail and food operator units; Temple Quarter — Bristol&apos;s major mixed-use regeneration zone east of Bristol Temple Meads station generating significant office, hotel and co-working fit-out demand; Redcliffe and Harbourside — Bristol&apos;s creative and hospitality quarter on the south bank of the Floating Harbour generating consistent restaurant, bar and hotel fit-out demand), BS2 (St Paul&apos;s, St Jude&apos;s — inner east Bristol commercial and residential zone), BS3 (Bedminster, Southville — south Bristol mixed commercial and retail zone with a lively independent retail street on North Street generating consistent decorative film demand), BS4 (Knowle, Brislington — south-east Bristol commercial zone), BS5 (Easton, St George — east Bristol commercial and retail zone), BS6 (Redland, Cotham — north Bristol independent retail and commercial zone), BS7 (Horfield, Bishopston — north Bristol commercial and retail zone near Gloucester Road — one of the longest independent retail streets in the UK, generating consistent decorative and frosted film demand from independent traders), BS8 (Clifton — Bristol&apos;s affluent mixed-use district; Clifton Village has a dense concentration of independent boutiques, restaurants, cafes and professional offices requiring privacy film, decorative film and manifestation), BS9 (Westbury-on-Trym, Stoke Bishop — north-west Bristol commercial zone), BS16 (Fishponds, Emersons Green — north-east Bristol commercial and retail zone; the Bristol &amp; Bath Science Park at Emersons Green BS16 generates office and laboratory fit-out demand), BS32 (Aztec West Business Park, Bradley Stoke — north Bristol&apos;s major commercial business park with significant office fit-out window film demand from facilities managers and office fit-out contractors). Bath BA1-BA2, Weston-super-Mare BS23, Clevedon BS21 and wider Somerset and Gloucestershire are also within reach. WRPX is based in South Yorkshire, approximately 2 hours from Bristol via the M1 and M5.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Bristol &amp; South West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Bristol and
            the South West. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film installed under your
            instructions. Cabot Circus, Broadmead, Clifton Village, Temple
            Quarter and all Bristol BS postcode commercial sites. Approximately
            2 hours from our South Yorkshire base via the M1 and M5.
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
            Who we work for in Bristol
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol is one of the UK&apos;s major commercial cities — a
              significant retail, technology, creative and office market with
              one of the most active commercial fit-out scenes in the South
              West. Cabot Circus BS1 is the city&apos;s flagship retail
              destination — over 100 units anchored by Harvey Nichols and major
              national multiples — generating consistent retail shopfitting
              demand. The Broadmead district adds further retail and dining
              fit-out activity, while Temple Quarter, Clifton Village and the
              Bristol &amp; Bath Science Park create a diverse commercial and
              creative sector office and mixed-use fit-out market.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Bristol clients but do not carry their own installation team. For
              shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Bristol and the South West, we
              supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple South West locations — Bristol, Bath,
              Gloucester, Swindon — we cover the full Bristol BS postcode geography
              in a single mobilisation from the M5, keeping retail rollout schedules
              tight and reducing travel overhead on multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Bristol
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
                across all Bristol BS postcode commercial environments.
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
                the most common subcontract window film job on Bristol
                commercial fit-out projects at Cabot Circus and Temple Quarter.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Bristol offices, retail units and
                hospitality buildings. Relevant for the glazed commercial
                buildings along the Harbourside BS1 and south-facing
                glass-fronted units within Cabot Circus.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Bristol office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Bristol office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Bristol retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bristol commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Cabot Circus BS1</strong> —
              Bristol&apos;s flagship retail and leisure destination, with over 100
              retail, restaurant and leisure units across a multi-level covered
              and open-air complex anchored by Harvey Nichols. Retail fit-out
              contractors delivering Cabot Circus unit fits — new brands,
              refurbs, brand refreshes — are a primary audience for subcontract
              window film installation including manifestation, frosted
              fitting-room film and solar-control on glazed frontages.
            </p>
            <p>
              <strong className="text-foreground">Broadmead BS1</strong> —
              Bristol&apos;s traditional city-centre retail district adjacent to
              Cabot Circus, with a large volume of retail and food operator
              units across both covered and open-air streetscape. Shopfitters
              managing Broadmead unit fit-outs regularly need subcontract
              manifestation and solar-control window film as part of the
              fit-out programme.
            </p>
            <p>
              <strong className="text-foreground">Temple Quarter BS1</strong> —
              Bristol&apos;s major regeneration zone east of Bristol Temple Meads
              station, with significant office, hotel, co-working and technology
              campus development. Office and hospitality fit-out contractors in
              Temple Quarter regularly need subcontract frosted film, solar-control
              and manifestation on large-glazed modern commercial buildings.
            </p>
            <p>
              <strong className="text-foreground">Clifton Village BS8</strong> —
              Bristol&apos;s affluent mixed-use district with a dense concentration
              of independent boutiques, restaurants, cafes, professional offices
              and co-working spaces. Clifton Village generates consistent demand
              for decorative frosted film, etched-effect window film and branded
              glass treatments from the area&apos;s community of independent business
              owners and commercial occupiers.
            </p>
            <p>
              <strong className="text-foreground">Aztec West and North Bristol BS32</strong> —
              Aztec West Business Park at Bradley Stoke BS32 is one of Bristol&apos;s
              primary out-of-town commercial office destinations, with a significant
              concentration of corporate and technology offices generating consistent
              office fit-out window film demand for facilities managers and
              corporate interior contractors.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Bristol trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Bristol client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Bristol
              commercial projects where the site or centre management requires
              it in advance. For Cabot Circus BS1 or Broadmead BS1 installations,
              we prepare contractor documentation to meet the respective centre
              requirements before mobilisation.
            </p>
            <p>
              Bristol is approximately 2 hours from our South Yorkshire base via
              the M1 and M5 — a direct motorway route that connects to the South
              West efficiently. For South West sign and print companies with Bristol
              installation requirements, we offer responsive mobilisation and the
              ability to cover Bath, Gloucester, Swindon and wider South West
              locations alongside Bristol in a co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Bristol services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Birmingham and the Midlands</p>
            </Link>
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Manchester and the North West</p>
            </Link>
            <Link href="/window-film/retail-window-film-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Bristol</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Bristol and the South West</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-bristol/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Bristol</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Bristol</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Bristol trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Bristol window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Bristol site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Bristol BS postcodes. RAMS available on request.
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
