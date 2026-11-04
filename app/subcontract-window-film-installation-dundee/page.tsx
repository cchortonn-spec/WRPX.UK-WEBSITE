import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Dundee | White-Label Film Installer Tayside | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Dundee and Tayside. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Overgate Centre DD1, Wellgate Centre DD1, Gallagher Retail Park DD3 and all Dundee DD postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-dundee/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Dundee — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Dundee and Tayside. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Overgate Centre DD1, Wellgate Centre DD1, Gallagher Retail Park Kingsway West DD3 and all Dundee DD postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) and A90. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Dundee", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-dundee/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Dundee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Dundee and Tayside DD postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Dundee client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Dundee sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Dundee and Tayside as standard. We arrive at the Dundee job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Dundee client does not need to know WRPX is involved. Dundee is approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) north and A90 — a direct route into Tayside. Dundee&apos;s active retail, university and commercial office sectors generate consistent installation demand from national retailers and commercial operators across the DD postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Scottish Technical Handbooks-compliant glass manifestation in Dundee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Dundee commercial projects — retail units at the Overgate Centre DD1 and Wellgate Centre DD1, office refurbishments in Dundee city centre, leisure fit-outs, healthcare glazing at Ninewells Hospital DD2 and educational facilities at the University of Dundee DD1 and Abertay University DD1 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In Scotland, manifestation requirements are governed by the Scottish Technical Handbooks for both Domestic and Non-Domestic buildings. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Dundee commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover the Overgate Centre and Dundee city centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Overgate Centre DD1 is Dundee&apos;s principal covered shopping centre, generating consistent national retailer shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Wellgate Centre DD1 adds a further covered retail destination with national and independent retail tenants. Dundee city-centre streets including Commercial Street, Murraygate and the High Street generate independent retail, office and hospitality window film demand. Gallagher Retail Park on Kingsway West DD3 and Kingsway Retail Park DD3 provide out-of-town large-format retail volume from nationally tenanted units. We cover all Dundee and surrounding DD postcode commercial sites as part of the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Dundee from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dundee is approximately 3 hours 30 minutes from our South Yorkshire base via the A1(M) north and A90 — a straightforward dual-carriageway and motorway route via Edinburgh or the M90 Forth bridge crossing and Kinross. For planned Dundee subcontract programmes, we can often mobilise within 48 to 72 hours of booking confirmation. For Dundee sign and print businesses with regular installation needs — retail park fit-outs at Gallagher Retail Park DD3, university or education refurbishments at the University of Dundee DD1 or Abertay University DD1, or multi-site commercial programmes across the DD postcode — a standing arrangement with WRPX covering Dundee and wider Tayside DD postcode installations removes the overhead of sourcing installers per job. We can also cover Perth alongside Dundee in a co-ordinated Tayside programme where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Dundee and Tayside postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Dundee and surrounding DD postcode areas — DD1 (Dundee city centre: Overgate Centre DD1 — the covered retail centre generating national retailer shopfitting and window film demand; Wellgate Centre DD1 covered retail destination; city-centre office and commercial core along Meadowside, Reform Street and Whitehall Street DD1 generating office refurbishment frosted film, privacy film and manifestation demand; University of Dundee Nethergate campus DD1 generating education and retail glazing film demand; Abertay University Bell Street DD1; V&A Dundee waterfront zone DD1 with commercial hospitality and retail glazing demand), DD2 (West End, Ninewells: West End Perth Road DD2 — Dundee&apos;s most established residential and commercial neighbourhood with office and retail glazing demand; Ninewells Hospital DD2 — NHS Tayside&apos;s principal acute hospital generating clinical glazing film demand; Dundee Designer Outlet Lochee Road DD2; Invergowrie DD2 on the western fringe), DD3 (Hilltown, Kingsway: Gallagher Retail Park Kingsway West DD3; Kingsway Retail Park DD3; Hilltown district commercial glazing provision), DD4 (Stobswell, Craigie: Stobswell DD4 and Craigie DD4 district commercial glazing demand from the east-central Dundee zone), DD5 (Broughty Ferry, Monifieth: Broughty Ferry DD5 — independent retail and commercial glazing demand on Brook Street and Gray Street; Barnhill DD5; Monifieth DD5 on the eastern margin). Angus DD8 (Forfar), DD9 (Brechin) and DD10 (Montrose) also within the broader Tayside operational area for multi-site programmes. WRPX is based in South Yorkshire, approximately 3 hours 30 minutes from Dundee via the A1(M) and A90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmDundeePage() {
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
            <span className="text-foreground">Dundee</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Dundee &amp; Tayside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Dundee
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Dundee and
            Tayside. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film — installed on a
            subcontract basis across all Dundee DD postcode commercial sites.
            Overgate Centre DD1 and Gallagher Retail Park DD3 covered.
            Approximately 3 hours 30 minutes from our South Yorkshire base via
            the A1(M) and A90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Dundee Subcontract Enquiry →
            </Link>
            <Link href="/subcontract-window-film-installation/" className="btn-secondary">
              Subcontract Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Window film subcontract in Dundee — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Dundee is a city undergoing sustained commercial regeneration —
              the V&amp;A Dundee waterfront development, continued investment
              in the city-centre Overgate and Wellgate retail estate, and a
              large and growing university sector with the University of Dundee
              at approximately 18,000 students and Abertay University at
              approximately 5,000. This scale of commercial and academic
              activity generates consistent window film and glazing film
              installation demand from fit-out contractors, shopfitters,
              facilities managers and sign companies operating across the
              DD postcode area.
            </p>
            <p>
              Ninewells Hospital DD2 — NHS Tayside&apos;s principal acute
              hospital — generates clinical glazing film demand from its
              large estate of consulting rooms, office glazing and clinical
              partitions. The university sector generates consistent education
              and campus commercial glazing film demand from teaching facilities,
              student union retail and managed accommodation programmes. Sign
              companies and shopfitters serving Tayside frequently need a
              reliable subcontract window film installer for Dundee projects
              where their own teams cannot cover the geography or specialist
              film type.
            </p>
            <p>
              WRPX is approximately 3 hours 30 minutes from Dundee via the
              A1(M) and A90 — a direct route into Tayside via Edinburgh or the
              M90 Forth bridge crossing. We work white-label as standard. Your
              Dundee client sees professional installation completed to
              specification. We provide RAMS documentation, photographic
              sign-off and trade-ready communication throughout. Dundee can also
              be combined with Perth — roughly 20 minutes west on the A90 —
              in a co-ordinated Tayside programme where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Dundee trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Dundee and Tayside DD postcode commercial sites —
                fitting rooms, office glazing, meeting rooms and hospitality
                glass covered on a subcontract basis.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scottish Technical Handbooks-compliant manifestation strips on
                full-height glazed partitions, glass shopfronts and internal
                glass doors across Dundee fit-out projects — frosted,
                etched-effect, dot-pattern or branded to the correct
                specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and west-facing commercial glazed
                frontages across Gallagher Retail Park DD3 and Kingsway Retail
                Park DD3 — reducing solar heat gain and glare on large
                open-aspect glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Dundee retail tenants and
                shopfitters — installed on a subcontract basis for your
                campaign or fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative window
                vinyl across Dundee office, hospitality and commercial
                refurbishments — a cost-effective alternative to sandblasted
                or etched glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Education &amp; campus glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted office glazing, meeting room privacy film and
                Scottish Technical Handbooks-compliant manifestation across the
                University of Dundee DD1 and Abertay University DD1 — installed
                under FM contractor or shopfitter instructions on a white-label
                basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Dundee subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related services and locations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract window film installation service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-glasgow/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Glasgow</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Glasgow trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Edinburgh trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Window film for Dundee gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Dundee and Tayside</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Dundee subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Dundee subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Dundee project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 3 hours 30 minutes from
              South Yorkshire via the A1(M) and A90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Dundee Subcontract Enquiry →
              </Link>
              <Link href="/subcontract-window-film-installation/" className="btn-secondary">
                Subcontract Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
