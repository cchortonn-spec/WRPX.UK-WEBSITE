import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Newcastle | White-Label Film Installer North East | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Newcastle and the North East. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Eldon Square NE1, MetroCentre NE11, Newcastle Quayside and all Tyne and Wear NE postcode commercial sites.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-newcastle/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Newcastle — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Newcastle upon Tyne and the wider North East. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Eldon Square NE1, MetroCentre NE11 Gateshead, Newcastle Quayside NE1, Business District NE1 and all Tyne and Wear NE postcode commercial sites. Approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M). RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Newcastle", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-newcastle/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Newcastle and North East NE postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Newcastle client sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Newcastle sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Newcastle and the North East as standard. We arrive at the Newcastle job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Newcastle client does not need to know WRPX is involved. Newcastle is approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M) — a well-established route linking Sheffield and the North East and covering the full Tyne and Wear NE postcode geography in a single mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Newcastle shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Newcastle commercial sites. Shopfitters and fit-out contractors delivering Newcastle commercial projects — retail units at Eldon Square NE1 and Intu Eldon Square, office refurbishments in the Newcastle Central Business District NE1 and Quayside NE1, gym and leisure fitouts, educational facilities across Tyne and Wear — frequently need full-height glazed partitions, glass doors or glazed shop fronts manifested under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification. Where a Newcastle fit-out involves both standard manifestation and a branded element, we install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover the MetroCentre in Gateshead for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the MetroCentre in Gateshead NE11 is one of the UK&apos;s largest regional shopping and leisure centres, with over 300 retail, dining and leisure units across a multi-level covered footprint. Retail fit-out contractors and shopfitters delivering MetroCentre unit installations — new brand openings, refurbishments, seasonal fit-outs — regularly need subcontract window film installation for glass manifestation on full-height glazed frontages, frosted film for fitting rooms and staff areas, and solar-control film on glazed atrium and unit frontages. We follow MetroCentre centre management contractor requirements, provide RAMS documentation as standard and co-ordinate access windows with your programme manager before mobilisation. Gateshead NE11 is covered alongside the full Tyne and Wear NE postcode geography from the same A1(M) mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Newcastle window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newcastle is approximately 1 hour 30 minutes from our South Yorkshire base via the A1(M) — a well-established arterial route. For Newcastle subcontract window film work, we can typically survey within a few days of enquiry and schedule installation within the following week. For urgent Newcastle installations — sign and print companies needing same-week or short-notice scheduling for retail or office fit-out programmes — contact us directly to discuss availability. We also cover Sunderland SR, Gateshead NE8–NE11, Durham DH, Middlesbrough TS and Northumberland NE65–NE71 as part of the same North East mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Which Newcastle and North East postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Newcastle and wider North East NE and Tyne and Wear postcode areas — NE1 (Newcastle city centre: Eldon Square and Intu Eldon Square — one of the UK&apos;s busiest city-centre retail and leisure destinations with over 250 units across a covered and open-air footprint, generating consistent fit-out demand for manifestation, frosted film and solar-control; the Newcastle Central Business District on Grey Street, Collingwood Street and Quayside — a major office and professional services market generating office fit-out window film demand for facilities managers and commercial interior contractors; Newcastle Quayside — a mixed hospitality, bar, restaurant and creative office zone along the Tyne generating consistent decorative film and manifestation demand from independent operators and fit-out contractors), NE2 (Jesmond, Sandyford — north-east Newcastle professional and residential mixed zone with independent retail and commercial activity), NE3 (Gosforth — north Newcastle suburban commercial zone with retail and professional services), NE4 (Benwell, Elswick — west Newcastle commercial and residential zone), NE5 (Westerhope, Denton Burn — north-west Newcastle suburban retail zone), NE6 (Walker, Byker — east Newcastle residential and light commercial zone), NE7 (High Heaton — north-east Newcastle residential zone), NE8 (Gateshead town centre — Gateshead High Street and the Bridges shopping centre, which anchor the town-centre retail market south of the Tyne), NE9 (Low Fell, Wrekenton — south Gateshead residential and retail zone), NE10 (Felling, Heworth — east Gateshead residential zone), NE11 (Dunston, TeamValley, MetroCentre — the MetroCentre in Gateshead NE11 is one of the UK&apos;s largest out-of-town retail and leisure destinations, with over 300 units and consistent retail fit-out demand; Team Valley Trading Estate NE11 is one of the North East&apos;s primary commercial business park zones with significant office and light industrial occupier fit-out demand). Sunderland SR1–SR7, Durham DH1–DH9, Middlesbrough TS1–TS24 and South Tyneside NE31–NE36 are also within reach from the same North East mobilisation. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Newcastle via the A1(M).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmNewcastlePage() {
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
            <span className="text-foreground">Newcastle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Newcastle &amp; North East
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Newcastle
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Newcastle and
            the North East. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film installed under your
            instructions. Eldon Square, MetroCentre Gateshead, Newcastle
            Quayside and all Tyne and Wear NE postcode commercial sites.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the A1(M).
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
            Who we work for in Newcastle
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Newcastle upon Tyne and the wider North East is a major regional
              commercial market — a large retail, office, hospitality and leisure
              economy centred on Eldon Square NE1 and the Newcastle Central
              Business District, with the MetroCentre NE11 in Gateshead forming
              one of the UK&apos;s most significant out-of-town retail and leisure
              destinations. Together these two locations anchor a consistent
              volume of retail fit-out and shopfitting activity that generates
              ongoing subcontract window film demand.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies who sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Newcastle clients but do not carry their own installation team. For
              shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Newcastle and the North East, we
              supply the installation element — attending site under your
              instructions, completing to specification and handing back clean
              documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running window
              film programmes across multiple North East locations — Newcastle,
              Sunderland, Middlesbrough, Durham — we cover the full NE postcode
              geography in a single mobilisation from the A1(M), keeping retail
              rollout schedules tight and reducing travel overhead on
              multi-site programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Newcastle
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
                across all Newcastle NE postcode commercial environments.
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
                the most common subcontract window film job on Newcastle
                commercial fit-out projects at Eldon Square and MetroCentre.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Newcastle offices, retail units and
                hospitality buildings. Relevant for glazed commercial buildings
                along the Newcastle Quayside and south-facing frontages at
                MetroCentre NE11.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Newcastle office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Newcastle office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Newcastle retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Eldon Square NE1</strong> —
              Newcastle&apos;s flagship city-centre retail and leisure destination,
              with over 250 retail, restaurant and leisure units across a covered
              and open-air footprint including the Eldon Garden and Monument Mall
              sections. Retail fit-out contractors delivering Eldon Square unit
              fits — new brand openings, refurbishments, brand refreshes — are a
              primary audience for subcontract window film installation including
              manifestation, frosted fitting-room film and solar-control on
              glazed frontages.
            </p>
            <p>
              <strong className="text-foreground">MetroCentre Gateshead NE11</strong> —
              one of the UK&apos;s largest out-of-town retail and leisure centres,
              with over 300 units across the Red, Green, Yellow and Blue malls.
              Shopfitters managing MetroCentre unit fit-outs operate under strict
              centre management contractor requirements — we prepare RAMS,
              co-ordinate access windows and mobilise under centre protocols
              as a matter of course.
            </p>
            <p>
              <strong className="text-foreground">Newcastle Quayside NE1</strong> —
              the Newcastle waterfront regeneration zone along the Tyne, with a
              dense concentration of bars, restaurants, hotels, creative offices
              and event spaces generating consistent demand for decorative film,
              etched-effect treatment on glazing and glass manifestation during
              refurbishment and brand-refresh programmes.
            </p>
            <p>
              <strong className="text-foreground">Newcastle Central Business District NE1</strong> —
              the core office and professional services zone across Grey Street,
              Collingwood Street, St Andrew Street and the Central Station
              corridor, with significant office refurbishment and interior
              fit-out activity generating frosted film, solar-control and
              manifestation demand from facilities managers and office interior
              contractors.
            </p>
            <p>
              <strong className="text-foreground">Team Valley NE11 and North East business parks</strong> —
              Team Valley Trading Estate in Gateshead NE11 is one of the North
              East&apos;s largest commercial business parks, with a significant
              volume of office, light industrial and commercial occupier units
              generating fit-out window film demand for frosted partitions,
              solar-control and manifestation.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Newcastle trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Newcastle client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Newcastle
              commercial projects where the site or centre management requires
              it in advance. For Eldon Square NE1 or MetroCentre NE11
              installations, we prepare contractor documentation to meet the
              respective centre management requirements before mobilisation.
            </p>
            <p>
              Newcastle is approximately 1 hour 30 minutes from our South
              Yorkshire base via the A1(M) — one of the UK&apos;s primary
              north-south arterial routes. For North East sign and print
              companies with Newcastle installation requirements, we offer
              responsive mobilisation and the ability to cover Sunderland,
              Durham, Middlesbrough and wider North East locations alongside
              Newcastle in a co-ordinated multi-site programme.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Newcastle services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Manchester and the North West</p>
            </Link>
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Leeds and West Yorkshire</p>
            </Link>
            <Link href="/window-film/retail-window-film-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Newcastle and the North East</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Vinyl Installer Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label vinyl and graphics installation in Newcastle</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Newcastle trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Newcastle window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Newcastle site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Newcastle NE postcodes and wider North East locations. RAMS
              available on request.
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
