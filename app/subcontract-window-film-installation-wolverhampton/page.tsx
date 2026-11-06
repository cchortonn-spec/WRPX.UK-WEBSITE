import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Wolverhampton | White-Label Film Installer Black Country | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Wolverhampton and the Black Country. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Wolverhampton city centre WV1, Aldersley Leisure Village WV6, Bilston WV14 and all Wolverhampton WV postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Wolverhampton — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Wolverhampton and the Black Country. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Wolverhampton city centre WV1, University of Wolverhampton WV1, Aldersley Leisure Village WV6 and all Wolverhampton WV postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the M1 and M6. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Wolverhampton", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-wolverhampton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Wolverhampton and Black Country WV postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Wolverhampton client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Wolverhampton sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Wolverhampton and the Black Country as standard. We arrive at the Wolverhampton job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Wolverhampton client does not need to know WRPX is involved. Wolverhampton is approximately 1 hour from our South Yorkshire base via the M1 and M6 — a direct motorway route south-west from Sheffield. The city&apos;s active retail, leisure, education and commercial office sectors generate consistent installation demand from national operators and commercial businesses across the WV postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Wolverhampton commercial projects — retail and leisure fit-outs across the city centre WV1, office refurbishments in the Wolverhampton commercial zone, education facilities at the University of Wolverhampton WV1, and leisure and gym fit-outs at Aldersley Leisure Village WV6 and Bilston Leisure Centre WV14 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed panels. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Wolverhampton commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton commercial sites do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wolverhampton and Black Country WV postcode commercial sites. The Wolverhampton Mander Centre and Wulfrun Centre in the city centre WV1 generate national retailer shopfitting and window film demand. The University of Wolverhampton WV1 campus generates consistent education and student union glazing film demand. Aldersley Leisure Village WV6 is one of the region&apos;s largest public leisure destinations, generating gym, sports hall and pool-facility glazing film demand. Bilston Leisure Centre WV14 adds further public leisure glazing film demand from south-east Wolverhampton. Offices and commercial premises across the city-centre WV1 zone and the wider Black Country WV2-WV14 postcode area generate frosted glazing, privacy film and manifestation demand from sign companies and fit-out contractors covering West Midlands projects.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Wolverhampton from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wolverhampton is approximately 1 hour from our South Yorkshire base via the M1 and M6 — a direct motorway route that makes Wolverhampton one of the most accessible West Midlands cities from our South Yorkshire base. For planned Wolverhampton subcontract programmes, we can typically mobilise within 24 to 48 hours of booking confirmation. For Wolverhampton sign and print businesses with regular installation needs — leisure centre and education fit-outs, office refurbishments, retail fit-out programmes, or multi-site commercial programmes across the WV and surrounding West Midlands postcodes — a standing arrangement with WRPX removes the overhead of sourcing installers per job. Wolverhampton can be combined with Birmingham, Walsall, Dudley and other West Midlands sites in a co-ordinated multi-city programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Wolverhampton and Black Country postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Wolverhampton and surrounding WV postcode areas — WV1 (Wolverhampton city centre: Mander Centre and Wulfrun Centre retail; city-centre office and commercial zone along Victoria Street and Lichfield Street; University of Wolverhampton WV1 campus generating education and student union glazing demand), WV2 (Bilston Road, Heath Town: south-east Wolverhampton zone with community commercial glazing provision), WV3 (Penn, Merry Hill: south-west Wolverhampton residential and commercial zone), WV4 (Penn, Bradmore: south Wolverhampton residential zone with health club and commercial glazing provision), WV5 (Wombourne: south-west Staffordshire fringe), WV6 (Perton, Aldersley: Aldersley Leisure Village WV6 — Wolverhampton&apos;s flagship public leisure centre with athletics, sports halls, gym and pool generating substantial window film demand across its multi-zone facility), WV7 (Albrighton), WV8 (Codsall), WV9 (Featherstone), WV10 (Low Hill, Wednesfield: northern Wolverhampton zone), WV11 (Wednesfield: community commercial and leisure provision), WV12 (Willenhall: Black Country fringe), WV13 (Willenhall: Black Country zone boundary), WV14 (Bilston: Bilston Leisure Centre generating public gym and sports hall glazing demand; Bilston town centre independent retail and commercial glazing provision). Walsall WS1-WS3, West Bromwich B70-B71, Dudley DY1-DY4 and Sandwell B65-B69 also within the broader Black Country operational area for multi-site programmes. WRPX is based in South Yorkshire, approximately 1 hour from Wolverhampton via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmWolverhamptonPage() {
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
            <span className="text-foreground">Wolverhampton</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Wolverhampton &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Wolverhampton
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Wolverhampton
            and the Black Country. Frosted film, privacy film, solar-control
            film, glass manifestation and decorative window film — installed on
            a subcontract basis across all Wolverhampton WV postcode commercial
            sites. City centre WV1, University WV1 and Aldersley WV6 covered.
            Approximately 1 hour from our South Yorkshire base via the M1
            and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Wolverhampton Subcontract Enquiry →
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
            Window film subcontract in Wolverhampton — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Wolverhampton is the principal city of the Black Country — a
              major urban centre with a retail, education, leisure and
              commercial office sector generating consistent window film and
              glazing film installation demand. The University of Wolverhampton
              WV1 campus is a substantial presence in the city centre with
              teaching buildings, student union retail and managed
              accommodation all generating glazing film demand from fit-out
              contractors, facilities managers and sign companies.
            </p>
            <p>
              Aldersley Leisure Village WV6 is Wolverhampton&apos;s flagship public
              leisure destination — a large multi-zone site with athletics,
              sports halls, pool and gym facilities generating glazing film
              demand from leisure fit-out contractors and FM companies. Bilston
              Leisure Centre WV14 adds further public leisure glazing film
              volume from the south-east Wolverhampton zone. Sign companies
              and shopfitters serving the West Midlands frequently need a
              reliable subcontract window film installer for Wolverhampton
              projects where their own teams cannot cover the geography or
              specialist film type.
            </p>
            <p>
              WRPX is approximately 1 hour from Wolverhampton via the M1
              and M6 — a direct motorway route that makes Wolverhampton one of
              the most accessible West Midlands destinations from our South
              Yorkshire base. We work white-label as standard. Your
              Wolverhampton client sees professional installation completed to
              specification. We provide RAMS documentation, photographic
              sign-off and trade-ready communication throughout. Wolverhampton
              can also be combined with Birmingham, Walsall, Dudley and other
              West Midlands sites in a co-ordinated programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Wolverhampton trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Wolverhampton and Black Country WV postcode
                commercial sites — office glazing, meeting rooms, fitting rooms
                and hospitality glass covered on a subcontract basis.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips on full-height
                glazed partitions, glass shopfronts and internal glass doors
                across Wolverhampton fit-out projects — frosted,
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
                frontages across Wolverhampton city-centre WV1 and Aldersley
                Leisure Village WV6 — reducing solar heat gain and glare on
                large open-aspect glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Wolverhampton retail tenants and
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
                vinyl across Wolverhampton office, education and commercial
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
                University of Wolverhampton WV1 — installed under FM contractor
                or shopfitter instructions on a white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Wolverhampton subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Birmingham trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Nottingham trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Window film for Wolverhampton gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Birmingham and the West Midlands</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Wolverhampton subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wolverhampton subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Wolverhampton project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 1 hour from South
              Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Wolverhampton Subcontract Enquiry →
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
