import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Inverness | White-Label Film Installer Highland | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Inverness and the Scottish Highlands. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Eastgate Centre IV2, Inverness Retail Park IV2, city-centre IV1 and all Inverness IV postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-inverness/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Inverness — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Inverness and the Scottish Highlands. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Eastgate Centre IV2, Inverness Retail Park IV2, Crown Street IV2, city-centre IV1 and all Inverness IV postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 5 hours from our South Yorkshire base via the A1(M) and A9. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Inverness", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-inverness/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Inverness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Inverness and Highland IV postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Inverness client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Inverness sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Inverness and the Scottish Highlands as standard. We arrive at the Inverness job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Inverness client does not need to know WRPX is involved. Inverness is approximately 5 hours from our South Yorkshire base via the A1(M) north through Newcastle and Edinburgh, then the A9 north to Inverness — a fully dual-carriageway route into the Scottish Highlands. For planned Inverness subcontract programmes — retail fit-out schedules, office refurbishments or multi-site window film work across the IV postcode area — we incorporate travel into scheduling with multi-day Highland programmes where project volume justifies it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Scottish Technical Handbooks-compliant glass manifestation in Inverness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Inverness commercial projects — retail units at Eastgate Centre IV2 or Inverness Retail Park IV2, office refurbishments in the city-centre IV1 zone, gym and leisure fit-outs, healthcare glazing and educational facilities across the IV postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In Scotland, manifestation requirements are governed by the Scottish Technical Handbooks rather than English Building Regulations. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Inverness commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Eastgate Centre and Inverness Retail Park for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Eastgate Centre IV2 is Inverness&apos;s principal covered shopping centre, generating consistent shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages from its national multiple tenants. Inverness Retail Park IV2 on Eastfield Road generates further out-of-town retail fit-out demand from its large-format national retailers with open-aspect glazed elevations. We cover both sites as part of the same Inverness IV postcode mobilisation. Centre management contractor requirements for Eastgate Centre are addressed as standard — RAMS prepared and access confirmed with your programme manager in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Inverness from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inverness is approximately 5 hours from our South Yorkshire base via the A1(M) north through Newcastle and Edinburgh, then the A9 north — a fully dual-carriageway route. For planned Inverness subcontract programmes, we incorporate travel into scheduling with multi-day Highland programmes where the project volume justifies it. For Inverness sign and print businesses with regular installation needs, a standing arrangement with WRPX covering Inverness and wider Highland IV postcode installations avoids the cost and complexity of recruiting your own installer. We can also co-ordinate Inverness installations alongside Aberdeen — adding a further 2.5 hours south on the A9/A90 — within a single extended Scottish mobilisation where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Inverness and Highland postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Inverness and wider IV postcode areas — IV1 (Inverness city centre: High Street IV1 — Inverness&apos;s primary retail street generating frosted film, manifestation and decorative vinyl demand from its retail, office and hospitality stock; Crown Street IV1 commercial core; Inverness city-centre office and professional services quarter along Friars Street and Academy Street IV1 generating office refurbishment and frosted film demand from the Highland capital&apos;s commercial hub), IV2 (Eastgate, Retail Park, Millburn Road: Eastgate Centre IV2 — Inverness&apos;s principal enclosed shopping centre generating national retailer shopfitting, manifestation and frosted film demand; Inverness Retail Park on Eastfield Road IV2 — out-of-town large-format retail generating solar-control and manifestation demand from open-aspect glazed frontages; Millburn Road IV2 commercial and office corridor; Inverness Airport zone IV2 with hotel and commercial glazing film demand), IV3 (Inverness west: Inverness Leisure Centre IV3 — the main Highland public leisure facility generating gym and changing room privacy film and manifestation demand; west Inverness residential and commercial provision), IV4–IV5 (Highland rural and market town zones within the Inverness operational area). WRPX is based in South Yorkshire, approximately 5 hours from Inverness via the A1(M) and A9.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmInvernessPage() {
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
            <span className="text-foreground">Inverness</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Inverness &amp; Scottish Highlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Inverness
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Inverness
            and the Scottish Highlands. Frosted film, privacy film,
            solar-control film, Scottish Technical Handbooks-compliant glass
            manifestation and decorative window film installed under your
            instructions. Eastgate Centre IV2, Inverness Retail Park IV2,
            city-centre IV1 and all Inverness IV postcode commercial sites.
            Approximately 5 hours from our South Yorkshire base via the
            A1(M) and A9.
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
            Who we work for in Inverness
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Inverness is the capital of the Scottish Highlands and the most
              significant commercial centre north of Aberdeen. The retail core
              is anchored by Eastgate Centre IV2 — the principal enclosed
              shopping destination for a Highland catchment area of well over
              200,000 people — alongside Inverness Retail Park IV2, the
              city-centre High Street IV1 and a substantial commercial office
              and professional services base in the city-centre IV1 zone.
            </p>
            <p>
              We install window film on a subcontract and white-label basis for
              sign companies and print companies that sell or supply frosted film,
              solar-control film, decorative vinyl or manifestation products to
              Inverness clients but do not carry their own installation team.
              For shopfitters and commercial fit-out contractors delivering retail,
              office and leisure projects across Inverness and the wider Highland
              IV postcode area, we provide the installation element — attending
              site under your instructions, completing to specification and
              handing back clean documentation.
            </p>
            <p>
              For national retailers, FM companies and print houses running
              window film programmes across multiple Scottish locations, we can
              co-ordinate the Inverness and wider Highland IV postcode element
              from our South Yorkshire base. A multi-day Scottish mobilisation
              via the A1(M) and A9 covers Inverness alongside Aberdeen in a
              single extended trip where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install in Inverness
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
                across all Inverness IV postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Scottish Technical Handbooks manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Manifestation at 850mm and 1400mm height on full-height glazed
                panels and internal glass doors to Scottish Technical Handbooks
                requirements. Frosted bands, etched-effect, dot pattern or
                branded options — the most common subcontract window film
                application on Inverness retail and office fit-out projects
                at Eastgate Centre and the city-centre commercial core.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing
                commercial glazing across Inverness offices, retail units and
                hospitality buildings. Relevant for open-aspect glazed elevations
                at Inverness Retail Park IV2 and south-facing High Street IV1
                commercial frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect and decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-look film, patterned frosted film and branded decorative
                vinyl for Inverness office glazing, reception screens and
                commercial shopfronts — supplied and installed or
                installation-only from your supplied product.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film for Inverness office conference rooms,
                gym studio observation panels and retail security applications —
                mirrored on the bright side, view-through from the darker side.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Promotional and temporary vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term promotional window vinyl for Inverness retail
                campaigns, seasonal graphics and store-opening programmes —
                installed and removed cleanly without glazing damage on behalf
                of your print or sign company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inverness commercial environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness commercial environments we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Eastgate Centre IV2</strong> —
              Inverness&apos;s principal enclosed shopping centre, serving a
              Highland catchment area that extends far beyond the city itself.
              National multiple tenants across the enclosed mall generate
              consistent shopfitting and window film demand for fitting room
              privacy film, glass manifestation on internal doors and partitions,
              and solar-control on glazed frontages. Centre management contractor
              requirements are addressed as standard.
            </p>
            <p>
              <strong className="text-foreground">Inverness Retail Park IV2</strong> —
              Out-of-town large-format retail on Eastfield Road IV2, with
              national DIY, homeware and food retail operators on open-site
              plots generating solar-control film and manifestation demand from
              open-aspect glazed elevations. Retail park access protocols agreed
              with each unit and park management in advance of all installations.
            </p>
            <p>
              <strong className="text-foreground">High Street and city centre IV1</strong> —
              Inverness city-centre High Street, Church Street and Academy
              Street IV1 — the Highland capital&apos;s primary retail and
              commercial corridor, with national and independent operators
              generating consistent frosted film, manifestation and decorative
              vinyl demand from the city-centre commercial stock.
            </p>
            <p>
              <strong className="text-foreground">Millburn Road and Business Park IV2</strong> —
              The Millburn Road IV2 commercial and office corridor alongside
              the retail park, with professional services, logistics and
              business operators generating office refurbishment and commercial
              glazing film demand from the city&apos;s main out-of-centre
              commercial zone.
            </p>
            <p>
              <strong className="text-foreground">Inverness Leisure Centre IV3</strong> —
              Highland&apos;s main public leisure facility on Bught Lane IV3,
              with gym, pool, ice rink and sports hall provision generating
              changing room privacy film, pool-side glazing film and Scottish
              Technical Handbooks-compliant manifestation demand from its
              large enclosed leisure footprint.
            </p>
            <p>
              <strong className="text-foreground">University of the Highlands and Islands (UHI) IV2</strong> —
              UHI Inverness Campus on Beechwood Park IV2 — the Highland&apos;s
              principal further and higher education campus — generating
              educational glazing film demand from teaching blocks, office
              space, library glazing and student-facing facility refurbishments
              across the campus footprint.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work with Inverness trade partners
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You manage the Inverness client relationship. We install the film.
              We attend on the agreed date, communicate only with your site
              contact, complete each glazed area to the specification you provide
              and send you before-and-after photographs for every surface. If you
              need us to arrive without WRPX branding visible, we accommodate that.
            </p>
            <p>
              RAMS documentation is prepared as standard for all Inverness
              commercial projects where the site or centre management requires
              it in advance. For Eastgate Centre installations, we prepare
              contractor documentation to meet centre management requirements
              before mobilisation.
            </p>
            <p>
              Inverness is approximately 5 hours from our South Yorkshire base
              via the A1(M) and A9. For Highland sign and print companies with
              regular Inverness installation requirements, we offer planned
              programme scheduling — multi-day Inverness visits covering
              multiple projects in a single trip. We can extend the same visit
              to Aberdeen — approximately 2.5 hours south on the A9 and A90 —
              where programme volume allows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Inverness subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Highland services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-aberdeen/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Aberdeen</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Aberdeen and North East Scotland</p>
            </Link>
            <Link href="/subcontract-window-film-installation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">White-label installation across Edinburgh and the Lothians</p>
            </Link>
            <Link href="/window-film/retail-window-film-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Inverness and the Highlands</p>
            </Link>
            <Link href="/window-film/gym-window-film-inverness/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Inverness</p>
              <p className="mt-1 text-xs text-muted">Window film for Inverness gyms and leisure centres</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Request a Quote</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Inverness trade enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Inverness window film subcontract — make an enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Inverness site, the glazing areas and the film type
              required. We work white-label by default and can mobilise across
              all Inverness IV postcodes and wider Scottish Highland locations.
              RAMS available on request. Approximately 5 hours from South
              Yorkshire via the A1(M) and A9.
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
