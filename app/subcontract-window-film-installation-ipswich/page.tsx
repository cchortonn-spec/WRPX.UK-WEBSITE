import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Ipswich | White-Label Film Installer Suffolk | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Ipswich and Suffolk. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Sailmakers Shopping Centre IP1, Buttermarket IP1, Martlesham Heath Business Park IP5 and all Ipswich IP postcode commercial sites. Building Regulations-compliant manifestation. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-ipswich/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Ipswich — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Ipswich and Suffolk. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Sailmakers Shopping Centre IP1, Buttermarket Shopping Centre IP1, Priory Walk IP1, Whitehouse Retail Park IP1, Copdock Retail Park IP8, Ipswich Sports Club IP1, Martlesham Heath Business Park IP5 and all Ipswich IP postcode commercial sites. Building Regulations-compliant manifestation. Approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) and A14. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Ipswich", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-ipswich/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Ipswich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Ipswich and Suffolk IP postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Ipswich client sees professional installation completed to specification. Common applications include office and retail fit-outs across the Sailmakers Shopping Centre IP1, Buttermarket IP1 and Martlesham Heath Business Park IP5 zones, as well as privacy film for Ipswich office partitions and glazed meeting rooms throughout the IP1 and IP2 commercial zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Ipswich sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Ipswich and Suffolk as standard. We arrive at the Ipswich job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Ipswich client does not need to know WRPX is involved. Ipswich is approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) south and A14 east — a straightforward direct route into East Anglia that makes planned and reactive mobilisation manageable for Ipswich and the wider Suffolk IP postcode commercial area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Ipswich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Ipswich commercial projects — retail fit-outs across the Sailmakers Shopping Centre IP1 and Buttermarket Shopping Centre IP1, office refurbishments in the Ipswich commercial zones and leisure fit-outs at Ipswich Sports Club IP1 and the Whitton Sports Centre IP3 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed panels. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Ipswich commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich commercial sites do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Ipswich and Suffolk IP postcode commercial sites. The Sailmakers Shopping Centre IP1 is Ipswich&apos;s principal covered retail destination on the Tavern Street corridor, generating national retailer shopfitting and window film demand. The Buttermarket Shopping Centre IP1 adds further town-centre retail and leisure glazing film demand adjacent to the Sailmakers zone. Priory Walk IP1 and Whitehouse Retail Park IP1 add further retail and leisure window film demand from nationally tenanted units. Copdock Retail Park IP8 — a large-format out-of-town retail and commercial park south of the town — generates solar-control and manifestation demand from nationally tenanted units. Martlesham Heath Business Park IP5 — a significant commercial and technology park to the east of Ipswich — generates office window film demand from corporate occupiers. Ipswich Sports Club IP1 and the Whitton Sports Centre IP3 add leisure-sector window film demand from FM contractors and leisure management companies.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Ipswich from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ipswich is approximately 2 hours 15 minutes from our South Yorkshire base via the A1(M) south and A14 east — a direct and straightforward route into Suffolk. For planned Ipswich subcontract programmes, we can typically mobilise within 24 to 48 hours of booking confirmation. For Ipswich sign and print businesses with regular installation needs — retail centre fit-outs at the Sailmakers or Buttermarket, office programmes across Martlesham Heath Business Park IP5, or leisure facility programmes at Ipswich Sports Club IP1 — a standing arrangement with WRPX removes the overhead of sourcing installers per job. Ipswich can also be combined with Norwich NR, Cambridge CB and other East Anglian sites in a co-ordinated multi-city programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Ipswich and Suffolk postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Ipswich and surrounding IP postcode areas — IP1 (Ipswich town centre: Sailmakers Shopping Centre IP1 — Ipswich&apos;s principal covered retail destination generating consistent retail fit-out and window film demand from national multiple tenants; Buttermarket Shopping Centre IP1 — adjacent town-centre retail and leisure glazing provision; Priory Walk IP1 — further town-centre retail and commercial provision; town-centre office and hotel zones along the IP1 ring; Ipswich Sports Club IP1 on Henley Road), IP2 (Ipswich south and west: outer south-west Ipswich commercial and retail provision; Whitehouse Retail Park IP1 corridor), IP3 (Ipswich east and Whitton: Whitton Sports Centre IP3; outer east Ipswich commercial provision; Ipswich Waterfront IP3 mixed-use and leisure zone), IP4 (Ipswich north-east including Rushmere: University of Suffolk main campus IP4 — ~10,000 students; outer north-east Ipswich residential and commercial provision), IP5 (Martlesham: Martlesham Heath Business Park IP5 — a significant commercial and technology cluster east of Ipswich generating office window film demand from corporate occupiers; BT Adastral Park IP5; outer east commercial zone), IP8 (Copdock: Copdock Retail Park IP8 — a large-format out-of-town retail and commercial park south of Ipswich generating solar-control and manifestation demand from nationally tenanted units). WRPX is based in South Yorkshire, approximately 2 hours 15 minutes from Ipswich via the A1(M) and A14.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmIpswichPage() {
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
            <span className="text-foreground">Ipswich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Ipswich &amp; Suffolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Ipswich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Ipswich and
            Suffolk. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film — installed on a
            subcontract basis across all Ipswich IP postcode commercial sites.
            Sailmakers Shopping Centre IP1, Buttermarket IP1, Martlesham Heath
            Business Park IP5 and Copdock Retail Park IP8 covered.
            Approximately 2 hours 15 minutes from our South Yorkshire base
            via the A1(M) and A14.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start an Ipswich Subcontract Enquiry →
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
            Window film subcontract in Ipswich — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Ipswich is the county town and commercial centre of Suffolk —
              a substantial East Anglian city with a retail, leisure, office
              and commercial sector generating consistent window film and glazing
              film installation demand. The Sailmakers Shopping Centre IP1 and
              Buttermarket Shopping Centre IP1 generate national retailer
              shopfitting and window film demand from fit-out contractors
              managing refurbishment and new tenant fit-outs across the
              town&apos;s retail destinations.
            </p>
            <p>
              Martlesham Heath Business Park IP5 — a major commercial and
              technology cluster to the east of Ipswich including BT Adastral
              Park — adds significant office window film demand from corporate
              occupiers and their facilities management contractors. Copdock
              Retail Park IP8 to the south of the town generates solar-control
              and manifestation demand from nationally tenanted large-format
              retail units. Sign companies and shopfitters serving the East
              Anglian market frequently need a reliable subcontract window film
              installer for Ipswich projects where their own teams cannot cover
              the specific film type or programme timing.
            </p>
            <p>
              WRPX is approximately 2 hours 15 minutes from Ipswich via the
              A1(M) and A14 — a direct and manageable route from our South
              Yorkshire base into Suffolk. We work white-label as standard.
              Your Ipswich client sees professional installation completed to
              specification. We provide RAMS documentation, photographic
              sign-off and trade-ready communication throughout. Ipswich can
              also be combined with Norwich, Cambridge and other East Anglian
              sites in a co-ordinated multi-city programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Ipswich trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Ipswich and Suffolk IP postcode commercial sites —
                office glazing, meeting rooms, fitting rooms and hospitality
                glass covered on a subcontract basis.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips on full-height
                glazed partitions, glass shopfronts and internal glass doors
                across Ipswich fit-out projects — frosted, etched-effect,
                dot-pattern or branded to the correct 850mm and 1500mm
                specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and east-facing commercial glazed
                frontages across Ipswich town centre IP1, Copdock Retail Park
                IP8 and Martlesham Heath IP5 — reducing solar heat gain and
                glare on nationally tenanted units with exposed glazed
                elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Ipswich retail tenants and
                shopfitters — installed on a subcontract basis for your
                campaign or fit-out programme at the Sailmakers IP1,
                Buttermarket IP1 or Copdock Retail Park IP8.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative window
                vinyl across Ipswich office, leisure and commercial refurbishments
                — a cost-effective alternative to sandblasted or etched glass
                across all Suffolk IP postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Office &amp; leisure glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted meeting-room glazing, Building Regulations-compliant
                manifestation and solar-control film across Martlesham Heath
                Business Park IP5 offices and Ipswich Sports Club IP1 —
                installed under FM contractor or facilities management
                instructions on a white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Ipswich subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Norwich trade partners</p>
            </Link>
            <Link href="/window-film/retail-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Ipswich and Suffolk</p>
            </Link>
            <Link href="/window-film/gym-window-film-ipswich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Ipswich</p>
              <p className="mt-1 text-xs text-muted">Window film for Ipswich gyms and leisure facilities</p>
            </Link>
            <Link href="/window-film/retail-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Norwich and Norfolk</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for an Ipswich subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ipswich subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Ipswich project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 2 hours 15 minutes from
              South Yorkshire via the A1(M) and A14.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start an Ipswich Subcontract Enquiry →
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
