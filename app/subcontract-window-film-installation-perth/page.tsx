import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Perth | White-Label Film Installer Perthshire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Perth and Perthshire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. St John's Shopping Centre PH1, Broxden Retail Park PH2, Dewars Centre PH2 and all Perth PH postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-perth/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Perth — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Perth and Perthshire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. St John's Shopping Centre PH1, Broxden Retail Park PH2, Dewars Centre PH2, Perth College UHI Crieff Road and all Perth PH postcode commercial sites. Scottish Technical Handbooks-compliant manifestation. Approximately 3 hours from our South Yorkshire base via the A1(M) and M90. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Perth", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-perth/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Perth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Perth and Perthshire PH postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Perth client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Perth sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Perth and Perthshire as standard. We arrive at the Perth job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Perth client does not need to know WRPX is involved. Perth is approximately 3 hours from our South Yorkshire base via the A1(M) north and M90 — a direct motorway route via the Forth Road Bridge and Kinross into Perth city centre. Perth&apos;s active retail, leisure, education and commercial office sectors generate consistent installation demand across the PH postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Scottish Technical Handbooks-compliant glass manifestation in Perth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Perth commercial projects — retail units at St John&apos;s Shopping Centre PH1, office refurbishments in Perth city centre, leisure fit-outs at the Dewars Centre PH2, educational facilities at Perth College UHI Crieff Road, and healthcare glazing at Perth Royal Infirmary — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In Scotland, manifestation requirements are governed by the Scottish Technical Handbooks for both Domestic and Non-Domestic buildings. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Perth commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover St John's Shopping Centre and Perth city centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — St John&apos;s Shopping Centre PH1 is Perth&apos;s principal covered shopping centre, generating consistent national retailer shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Perth High Street, King Edward Street and South Street generate independent retail, office and hospitality window film demand. Broxden Retail Park PH2 at the M90 Junction 10 interchange provides out-of-town large-format retail volume from nationally tenanted units. We cover all Perth and surrounding PH postcode commercial sites as part of the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Perth from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perth is approximately 3 hours from our South Yorkshire base via the A1(M) north and M90 — a straightforward dual-carriageway and motorway route via Edinburgh and the Forth Road Bridge, with the M90 running directly into Perth at the southern city approach. For planned Perth subcontract programmes, we can often mobilise within 48 to 72 hours of booking confirmation. For Perth sign and print businesses with regular installation needs — retail fit-outs at St John&apos;s Shopping Centre PH1, education or leisure refurbishments, or multi-site commercial programmes across the PH postcode — a standing arrangement with WRPX covering Perth and wider Perthshire PH installations removes the overhead of sourcing installers per job. We can also cover Dundee — roughly 20 minutes east on the A90 — alongside Perth in a co-ordinated Tayside programme where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Perth and Perthshire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Perth and surrounding PH postcode areas — PH1 (Perth city centre: St John&apos;s Shopping Centre PH1 — the covered retail centre generating national retailer shopfitting and window film demand; High Street and King Edward Street pedestrianised retail core PH1; Perth city-centre office and commercial core along Atholl Street, Tay Street and Canal Street PH1 generating office refurbishment frosted film, privacy film and manifestation demand; Perth College UHI Crieff Road campus generating education and commercial glazing film demand; Perth Royal Infirmary PH1 generating healthcare glazing film demand; Inveralmond Retail Park PH1 out-of-town retail provision), PH2 (Bridgend, South Perth: Broxden Retail Park PH2 at M90 Junction 10 — out-of-town retail generating solar-control and manifestation demand from nationally tenanted units; Dewars Centre PH2 on Glover Street — Perth&apos;s principal leisure centre generating sport and leisure glazing film demand; Bridgend commercial and residential glazing demand on the south Perth side of the river Tay). PH3 to PH16 (wider Perthshire: Kinross, Crieff, Blairgowrie, Pitlochry and surrounding market towns within the broader Perthshire PH postcode operational area for multi-site programmes). WRPX is based in South Yorkshire, approximately 3 hours from Perth via the A1(M) and M90.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmPerthPage() {
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
            <span className="text-foreground">Perth</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Perth &amp; Perthshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Perth
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Perth and
            Perthshire. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film — installed on a
            subcontract basis across all Perth PH postcode commercial sites.
            St John&apos;s Shopping Centre PH1, Broxden Retail Park PH2 and
            Dewars Centre PH2 covered. Approximately 3 hours from our South
            Yorkshire base via the A1(M) and M90.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Perth Subcontract Enquiry →
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
            Window film subcontract in Perth — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Perth is a prosperous market city at the gateway to the Scottish
              Highlands — a compact, well-established commercial centre with
              active retail, leisure, education, healthcare and commercial
              office sectors. The retail core around St John&apos;s Shopping
              Centre PH1 and the High Street generates consistent national
              retailer fit-out and refurbishment demand. Out-of-town retail
              volume at Broxden Retail Park PH2 and Inveralmond Retail Park
              PH1 adds large-format retail glazing film demand from open-site
              frontages.
            </p>
            <p>
              Perth College UHI on Crieff Road — part of the University of the
              Highlands and Islands network — generates education and campus
              commercial glazing film demand from teaching facilities, student
              services areas and managed accommodation programmes. The Dewars
              Centre PH2 on Glover Street — Perth&apos;s principal leisure
              facility operated by Live Active Leisure — generates sport and
              leisure glazing film demand from changing rooms, studio spaces and
              poolside glazing. Sign companies and shopfitters serving Perth and
              Perthshire frequently need a reliable subcontract window film
              installer for projects where their own teams cannot cover the
              geography or specialist film type.
            </p>
            <p>
              WRPX is approximately 3 hours from Perth via the A1(M) and M90 —
              a direct motorway route into the heart of Perthshire. We work
              white-label as standard. Your Perth client sees professional
              installation completed to specification. We provide RAMS
              documentation, photographic sign-off and trade-ready communication
              throughout. Perth can also be combined with Dundee — roughly
              20 minutes east on the A90 — in a co-ordinated Tayside programme
              where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Perth trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Perth and Perthshire PH postcode commercial sites —
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
                glass doors across Perth fit-out projects — frosted,
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
                frontages across Broxden Retail Park PH2 and Inveralmond
                Retail Park PH1 — reducing solar heat gain and glare on large
                open-aspect glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Perth retail tenants and
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
                vinyl across Perth office, hospitality and commercial
                refurbishments — a cost-effective alternative to sandblasted
                or etched glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Education &amp; leisure glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted office glazing, changing room privacy film and
                Scottish Technical Handbooks-compliant manifestation across
                Perth College UHI Crieff Road and the Dewars Centre PH2 —
                installed under FM contractor or shopfitter instructions on
                a white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Perth subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-dundee/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Dundee</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Dundee trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-edinburgh/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Edinburgh</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Edinburgh trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">Window film for Perth gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-perth/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Perth</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Perth and Perthshire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Perth subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Perth subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Perth project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 3 hours from South
              Yorkshire via the A1(M) and M90.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Perth Subcontract Enquiry →
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
