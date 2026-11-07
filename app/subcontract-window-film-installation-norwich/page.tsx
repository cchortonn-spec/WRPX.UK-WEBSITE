import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Norwich | White-Label Film Installer Norfolk | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Norwich and Norfolk. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Norwich city centre NR1, Chapelfield NR2, UEA NR4, Norwich Sports Village NR4 and all Norwich NR postcode commercial sites. Building Regulations-compliant manifestation. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-norwich/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Norwich — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Norwich and Norfolk. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Norwich city centre NR1, Chapelfield Shopping Centre NR2, Castle Quarter NR1, University of East Anglia NR4, Norwich Sports Village NR4 and all Norwich NR postcode commercial sites. Building Regulations-compliant manifestation. Approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) and A11. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Norwich", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-norwich/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Norwich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Norwich and Norfolk NR postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Norwich client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Norwich sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Norwich and Norfolk as standard. We arrive at the Norwich job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Norwich client does not need to know WRPX is involved. Norwich is approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) south and A11 through Thetford — a direct route from the East Midlands into East Anglia. The city&apos;s active retail, leisure, education and commercial office sectors generate consistent installation demand from national operators and commercial businesses across the NR postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Norwich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Norwich commercial projects — retail and leisure fit-outs across Chapelfield Shopping Centre NR2 and Castle Quarter NR1, office refurbishments in the Norwich commercial zone, education facilities at the University of East Anglia NR4, and leisure fit-outs at Norwich Sports Village NR4 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed panels. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Norwich commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich commercial sites do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Norwich and Norfolk NR postcode commercial sites. Chapelfield Shopping Centre NR2 is Norwich&apos;s principal retail destination, generating national retailer shopfitting and window film demand. Castle Quarter NR1 adds further covered retail glazing film demand from the city-centre NR1 zone. The University of East Anglia NR4 campus generates consistent education and student union glazing film demand from fit-out contractors, facilities managers and sign companies. Norwich Sports Village NR4 generates gym, sports hall and leisure-facility glazing film demand. Norwich Research Park NR4 — one of Europe&apos;s largest concentrations of health, food and environmental science organisations — generates commercial office and laboratory glazing film demand. Offices, hotels and commercial premises across the city-centre NR1 and NR2 zones and the wider Norwich NR postcode area generate frosted glazing, privacy film and manifestation demand from sign companies and fit-out contractors covering East Anglian projects.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Norwich from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Norwich is approximately 2 hours 30 minutes from our South Yorkshire base via the A1(M) south and A11 through Thetford into the city. For planned Norwich subcontract programmes, we can typically mobilise within 48 to 72 hours of booking confirmation. For Norwich sign and print businesses with regular installation needs — retail centre fit-outs at Chapelfield or Castle Quarter, education refurbishments at UEA, office programmes across the city-centre NR1 and NR2 zones, or leisure facility refit programmes at Norwich Sports Village — a standing arrangement with WRPX removes the overhead of sourcing installers per job. Norwich can be combined with Ipswich, Cambridge and other East Anglian sites in a co-ordinated multi-city programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Norwich and Norfolk postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Norwich and surrounding NR postcode areas — NR1 (Norwich city centre: Castle Quarter retail generating shopfitting and window film demand; city-centre commercial offices and hotels along Prince of Wales Road and riverside NR1; Riverside leisure zone NR1), NR2 (inner west Norwich: Chapelfield Shopping Centre NR2 — Norwich&apos;s principal retail destination generating consistent retail fit-out and window film demand from national multiple tenants; Golden Triangle residential zone with boutique commercial and fitness studio glazing provision), NR3 (inner north Norwich: Anglia Square area and north city-centre commercial provision), NR4 (Eaton, UEA: University of East Anglia campus generating education, student union and research glazing film demand; Norwich Sports Village generating public leisure facility glazing film demand; Norwich Research Park generating commercial and laboratory glazing demand), NR5 (Costessey, Bowthorpe: outer south-west residential and commercial provision), NR6 (Old Catton, Sprowston, Hellesdon: north Norwich residential and commercial zone), NR7 (Thorpe St Andrew: east Norwich residential and commercial zone), NR8 (Drayton, Taverham: outer north-west Norfolk commercial fringe). WRPX is based in South Yorkshire, approximately 2 hours 30 minutes from Norwich via the A1(M) and A11.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmNorwichPage() {
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
            <span className="text-foreground">Norwich</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Norwich &amp; Norfolk
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Norwich
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Norwich and
            Norfolk. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film — installed on a
            subcontract basis across all Norwich NR postcode commercial sites.
            Chapelfield NR2, Castle Quarter NR1 and UEA NR4 covered.
            Approximately 2 hours 30 minutes from our South Yorkshire base
            via the A1(M) and A11.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Norwich Subcontract Enquiry →
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
            Window film subcontract in Norwich — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Norwich is Norfolk&apos;s principal city — a prosperous university
              and commercial centre with a retail, education, leisure and
              office sector generating consistent window film and glazing film
              installation demand. Chapelfield Shopping Centre NR2 and Castle
              Quarter NR1 generate national retailer shopfitting and window
              film demand from fit-out contractors managing refurbishment and
              new tenant fit-outs across the city&apos;s two principal retail
              centres.
            </p>
            <p>
              The University of East Anglia NR4 campus is a substantial
              presence in the south-west of the city — teaching buildings,
              student union facilities and managed accommodation all generating
              glazing film demand from fit-out contractors, facilities managers
              and sign companies. Norwich Research Park NR4 — one of Europe&apos;s
              largest health and science research parks — adds commercial
              office and laboratory glazing film demand from this specialised
              commercial zone. Sign companies and shopfitters serving East
              Anglia frequently need a reliable subcontract window film
              installer for Norwich projects where their own teams cannot cover
              the geography or specialist film type.
            </p>
            <p>
              WRPX is approximately 2 hours 30 minutes from Norwich via the
              A1(M) and A11 — a direct route from our South Yorkshire base into
              East Anglia through Cambridge and Thetford. We work white-label
              as standard. Your Norwich client sees professional installation
              completed to specification. We provide RAMS documentation,
              photographic sign-off and trade-ready communication throughout.
              Norwich can also be combined with Ipswich, Cambridge and other
              East Anglian sites in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Norwich trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Norwich and Norfolk NR postcode commercial sites —
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
                across Norwich fit-out projects — frosted, etched-effect,
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
                frontages across Norwich city-centre NR1 and NR2, Norwich
                Research Park NR4 and retail locations with glazed elevations
                facing direct sun — reducing solar heat gain and glare.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Norwich retail tenants and
                shopfitters — installed on a subcontract basis for your campaign
                or fit-out programme at Chapelfield, Castle Quarter or
                city-centre units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative window
                vinyl across Norwich office, education and commercial
                refurbishments — a cost-effective alternative to sandblasted
                or etched glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Education &amp; campus glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted office glazing, meeting room privacy film and Building
                Regulations-compliant manifestation across the University of
                East Anglia NR4 and Norwich University of the Arts NR2 —
                installed under FM contractor or shopfitter instructions on a
                white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Norwich subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Nottingham trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Birmingham trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Norwich</p>
              <p className="mt-1 text-xs text-muted">Window film for Norwich gyms and leisure centres</p>
            </Link>
            <Link href="/architectural-wrap-care-homes-norwich/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Care Home Vinyl Wrap Norwich</p>
              <p className="mt-1 text-xs text-muted">Architectural vinyl wrapping for Norwich care homes</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Norwich subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Norwich subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Norwich project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 2 hours 30 minutes from
              South Yorkshire via the A1(M) and A11.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Norwich Subcontract Enquiry →
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
