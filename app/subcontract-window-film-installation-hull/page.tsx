import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Hull | White-Label Film Installer East Yorkshire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Hull and East Yorkshire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. St Stephen's Shopping Centre HU1, Kingswood Retail Park HU7, Prospect Centre HU2 and all Hull HU postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-hull/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Hull — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Hull and East Yorkshire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. St Stephen's Shopping Centre HU1, Kingswood Retail Park HU7, Prospect Centre HU2 and all Hull HU postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Hull", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-hull/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Hull and East Yorkshire HU postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Hull client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Hull sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Hull and East Yorkshire as standard. We arrive at the Hull job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Hull client does not need to know WRPX is involved. Hull is approximately 1 hour 30 minutes from our South Yorkshire base via the M62 — a direct motorway route east from Sheffield and the M18 junction. Hull&apos;s active retail, university and commercial port sectors generate consistent installation demand from national retailers and commercial operators across the HU postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Hull commercial projects — retail units at St Stephen&apos;s Shopping Centre HU1 and Kingswood Retail Park HU7, office refurbishments in Hull city centre, leisure fit-outs, healthcare glazing at Hull Royal Infirmary HU3 and educational facilities at the University of Hull HU6 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed panels. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Hull commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover St Stephen's Shopping Centre and Hull city centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — St Stephen&apos;s Shopping Centre HU1 is Hull&apos;s principal covered shopping centre, generating consistent national retailer shopfitting and window film installation demand for manifestation, frosted fitting-room film and decorative window vinyl. The Prospect Centre HU2 provides a further covered retail destination with national and independent retail tenants. Hull city-centre streets including Whitefriargate, King Edward Street and Jameson Street generate independent retail, office and hospitality window film demand. Kingswood Retail Park HU7 provides out-of-town large-format retail volume from nationally tenanted units on the north-east fringe of Hull. We cover all Hull and surrounding HU postcode commercial sites as part of the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Hull from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hull is approximately 1 hour 30 minutes from our South Yorkshire base via the M18 and M62 — a straightforward motorway route east from Sheffield. At this distance Hull is one of the closest significant cities to our base. For planned Hull subcontract programmes, we can often mobilise within 24 to 48 hours of booking confirmation. For Hull sign and print businesses with regular installation needs — retail park fit-outs at Kingswood Retail Park HU7, university or education refurbishments at the University of Hull HU6, or multi-site commercial programmes across the HU postcode — a standing arrangement with WRPX covering Hull and wider East Yorkshire HU postcode installations removes the overhead of sourcing installers per job.",
      },
    },
    {
      "@type": "Question",
      name: "Which Hull and East Yorkshire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Hull and surrounding HU postcode areas — HU1 (Hull city centre: St Stephen&apos;s Shopping Centre HU1 — the covered retail centre generating national retailer shopfitting and window film demand; city-centre office and commercial core along Whitefriargate, King Edward Street and the Land of Green Ginger generating office refurbishment frosted film, privacy film and manifestation demand; Hull Minster and old town zone HU1 with commercial hospitality and retail glazing demand), HU2 (Prospect Centre: Prospect Centre HU2 covered retail destination; western city-centre commercial zone), HU3 (Hessle Road, St Andrew&apos;s: Hull Royal Infirmary HU3 — NHS Humber Health Partnership&apos;s principal acute hospital generating clinical glazing film demand; Hessle Road HU3 and Spring Bank HU3 district commercial glazing demand), HU4 (Anlaby, Hessle: Anlaby Common HU4 and Hessle HU13 on the western fringe; retail and commercial glazing provision in the suburb zone), HU5 (Beverley Road, Chanterlands: residential north-west Hull zone with district retail and commercial glazing demand), HU6 (Orchard Park, University: University of Hull HU6 — a campus of approximately 19,000 students generating education, student union retail and managed accommodation film demand; Orchard Park district commercial provision), HU7 (Kingswood, Bransholme: Kingswood Retail Park HU7 — Hull&apos;s primary out-of-town retail park with large-format nationally tenanted retail units; Bransholme HU7 district commercial provision), HU8 (Sutton, Stoneferry: east Hull residential and commercial zone; Holderness Road HU8 district retail and commercial glazing demand), HU9 (Marfleet, Longhill: eastern Hull zone; port area commercial glazing provision). East Riding HU10 (Willerby, Anlaby), HU14 (North Ferriby), HU15 (South Cave, Brough), HU16 (Cottingham), HU17 (Beverley) and HU18 (Hornsea) also within the broader East Yorkshire operational area. WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Hull via the M18 and M62.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmHullPage() {
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
            <span className="text-foreground">Hull</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Hull
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Hull and
            East Yorkshire. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film — installed on a
            subcontract basis across all Hull HU postcode commercial sites.
            St Stephen&apos;s Shopping Centre HU1 and Kingswood Retail Park HU7
            covered. Approximately 1 hour 30 minutes from our South Yorkshire
            base via the M62.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Hull Subcontract Enquiry →
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
            Window film subcontract in Hull — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull is a significant port city and regional centre for East
              Yorkshire — a city of approximately 260,000 people with a
              substantial retail, commercial and university sector generating
              consistent window film and glazing film installation demand.
              St Stephen&apos;s Shopping Centre HU1 is the city&apos;s principal
              covered retail destination, with national retailer tenants
              generating shopfitting and window film demand throughout the
              year. Kingswood Retail Park HU7 adds large-format out-of-town
              retail volume from nationally tenanted units on the north-east
              fringe of the city.
            </p>
            <p>
              The University of Hull HU6 — a campus of approximately 19,000
              students — generates consistent education, student union retail
              and managed accommodation glazing film demand from fit-out
              contractors, facilities managers and sign companies operating
              across the HU postcode area. Hull Royal Infirmary HU3 generates
              clinical glazing film demand from its large estate of consulting
              rooms, office glazing and clinical partitions. The Hull city-centre
              office and commercial zone, including the Fruit Market creative
              district and the redeveloped waterfront along the River Hull,
              generates consistent office refurbishment and hospitality window
              film demand from sign companies and shopfitters covering
              East Yorkshire projects.
            </p>
            <p>
              WRPX is approximately 1 hour 30 minutes from Hull via the M18
              and M62 — one of the closest significant cities to our South
              Yorkshire base. We work white-label as standard. Your Hull client
              sees professional installation completed to specification. We
              provide RAMS documentation, photographic sign-off and trade-ready
              communication throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Hull trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Hull and East Yorkshire HU postcode commercial sites
                — fitting rooms, office glazing, meeting rooms and hospitality
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
                across Hull fit-out projects — frosted, etched-effect,
                dot-pattern or branded to the correct specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and west-facing commercial glazed
                frontages across St Stephen&apos;s HU1 and Kingswood Retail Park
                HU7 — reducing solar heat gain and glare on large open-aspect
                glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Hull retail tenants and shopfitters
                — installed on a subcontract basis for your campaign or
                fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative window
                vinyl across Hull office, hospitality and commercial
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
                Building Regulations-compliant manifestation across the
                University of Hull HU6 — installed under FM contractor or
                shopfitter instructions on a white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Leeds trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Sheffield trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Hull</p>
              <p className="mt-1 text-xs text-muted">Window film for Hull gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-hull/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Hull</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Hull and East Yorkshire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Hull subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Hull subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Hull project, the film type and the programme window.
              We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 1 hour 30 minutes from
              South Yorkshire via the M18 and M62.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Hull Subcontract Enquiry →
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
