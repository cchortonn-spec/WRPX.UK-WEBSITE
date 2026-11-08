import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Walsall | White-Label Film Installer Black Country | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Walsall and the Black Country. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. The Saddlers Centre WS1, Gallagher Retail Park WS2, Bloxwich WS3 and all Walsall WS postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the M1 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-walsall/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Walsall — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Walsall and the Black Country. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. The Saddlers Centre WS1, Gallagher Retail Park WS2, Bloxwich Leisure Centre WS3, Walsall Aquatics Centre WS1 and all Walsall WS postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the M1 and M6. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Walsall", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-walsall/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Walsall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Walsall and Black Country WS postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Walsall client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Walsall sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Walsall and the Black Country as standard. We arrive at the Walsall job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Walsall client does not need to know WRPX is involved. Walsall is approximately 1 hour from our South Yorkshire base via the M1 south and M6 — a direct motorway route that makes planned and reactive mobilisation straightforward for Walsall and the wider Black Country WS postcode commercial area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Walsall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Walsall commercial projects — retail and leisure fit-outs across The Saddlers Centre WS1 and Gallagher Retail Park WS2, office refurbishments in the Walsall commercial zone, and leisure fit-outs at Walsall Aquatics Centre WS1 and Bloxwich Leisure Centre WS3 — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. Building Regulations require manifestation at 850mm and 1500mm height zones on full-height glazed panels. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Walsall commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall commercial sites do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Walsall and Black Country WS postcode commercial sites. The Saddlers Centre WS1 is Walsall&apos;s principal indoor retail destination on Park Street, generating national retailer shopfitting and window film demand. St Matthew&apos;s Quarter WS1 adds further city-centre retail and leisure glazing film demand adjacent to the town centre. Gallagher Retail Park WS2 — a large-format out-of-town retail park on Tempus 10 — generates solar-control and manifestation demand from nationally tenanted retail and leisure units. Walsall Aquatics Centre WS1 and Bloxwich Leisure Centre WS3 generate leisure-sector glazing film demand from FM contractors and leisure management companies. Offices, hotels and commercial premises across the Walsall WS1 and WS2 zones and the wider Walsall WS postcode area generate frosted glazing, privacy film and manifestation demand from sign companies and fit-out contractors.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Walsall from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walsall is approximately 1 hour from our South Yorkshire base via the M1 south and M6 — a direct motorway connection that makes planned and responsive mobilisation straightforward. For planned Walsall subcontract programmes, we can typically mobilise within 24 to 48 hours of booking confirmation. For Walsall sign and print businesses with regular installation needs — retail centre fit-outs at The Saddlers Centre or Gallagher Retail Park, leisure facility refit programmes at Walsall Aquatics Centre, or office programmes across the Walsall WS1 and WS2 zones — a standing arrangement with WRPX removes the overhead of sourcing installers per job. Walsall can be combined with Wolverhampton, Birmingham and other West Midlands sites in a co-ordinated multi-city programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which Walsall and Black Country postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Walsall and surrounding WS postcode areas — WS1 (Walsall town centre: The Saddlers Centre WS1 — Walsall&apos;s principal covered retail destination generating consistent retail fit-out and window film demand from national multiple tenants; St Matthew&apos;s Quarter WS1 — adjacent city-centre retail and leisure glazing provision; Walsall Aquatics Centre WS1 generating public leisure glazing film demand; Walsall town-centre commercial offices and hotels along the WS1 ring zone), WS2 (Walsall south: Gallagher Retail Park WS2 — a large-format out-of-town retail park generating solar-control and manifestation demand from nationally tenanted units; outer south Walsall commercial and retail provision), WS3 (Bloxwich: Bloxwich Leisure Centre WS3 generating community leisure glazing film demand; Bloxwich town centre local commercial provision; north Walsall residential and local commercial zone), WS4 (Rushall, Shelfield: outer north Walsall residential and local commercial provision), WS5 (Aldridge: Aldridge local commercial zone with community leisure and retail provision). Wolverhampton WV1 and Birmingham B70-B71 also within the broader Black Country operational area for multi-site commercial programmes. WRPX is based in South Yorkshire, approximately 1 hour from Walsall via the M1 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmWalsallPage() {
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
            <span className="text-foreground">Walsall</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Walsall &amp; the Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Walsall
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Walsall and
            the Black Country. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film — installed on a
            subcontract basis across all Walsall WS postcode commercial sites.
            The Saddlers Centre WS1, Gallagher Retail Park WS2 and Bloxwich
            WS3 covered. Approximately 1 hour from our South Yorkshire base
            via the M1 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Walsall Subcontract Enquiry →
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
            Window film subcontract in Walsall — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Walsall is a substantial Black Country commercial centre with a
              retail, leisure, office and industrial sector generating consistent
              window film and glazing film installation demand. The Saddlers
              Centre WS1 and St Matthew&apos;s Quarter WS1 generate national
              retailer shopfitting and window film demand from fit-out
              contractors managing refurbishment and new tenant fit-outs across
              the town&apos;s retail destinations.
            </p>
            <p>
              Gallagher Retail Park WS2 — a large-format out-of-town retail
              park to the south-west of the town centre — adds national retail
              glazing film demand from large-footprint units with glazed
              elevations. Walsall Aquatics Centre WS1 and Bloxwich Leisure
              Centre WS3 generate leisure-sector window film demand from FM
              contractors and leisure management companies. Sign companies
              and shopfitters serving the West Midlands frequently need a
              reliable subcontract window film installer for Walsall projects
              where their own teams cannot cover the specific film type or
              programme timing.
            </p>
            <p>
              WRPX is approximately 1 hour from Walsall via the M1 and M6 —
              a direct motorway connection from our South Yorkshire base. We
              work white-label as standard. Your Walsall client sees
              professional installation completed to specification. We provide
              RAMS documentation, photographic sign-off and trade-ready
              communication throughout. Walsall can also be combined with
              Wolverhampton, Birmingham and other West Midlands sites in a
              co-ordinated multi-city programme.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Walsall trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Walsall and Black Country WS postcode commercial
                sites — office glazing, meeting rooms, fitting rooms and
                hospitality glass covered on a subcontract basis.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations-compliant manifestation strips on full-height
                glazed partitions, glass shopfronts and internal glass doors
                across Walsall fit-out projects — frosted, etched-effect,
                dot-pattern or branded to the correct 850mm and 1500mm
                specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and west-facing commercial glazed
                frontages across Walsall town centre WS1 and Gallagher Retail
                Park WS2 — reducing solar heat gain and glare on nationally
                tenanted units with exposed glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Walsall retail tenants and
                shopfitters — installed on a subcontract basis for your
                campaign or fit-out programme at The Saddlers Centre WS1,
                Gallagher Retail Park WS2 or city-centre units.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative window
                vinyl across Walsall office, leisure and commercial refurbishments
                — a cost-effective alternative to sandblasted or etched glass
                across all WS postcode commercial environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Leisure &amp; fitness facility glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted changing room glazing, Building Regulations-compliant
                manifestation and solar-control film across Walsall Aquatics
                Centre WS1 and Bloxwich Leisure Centre WS3 — installed under
                FM contractor or leisure management company instructions on
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
            Walsall subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Wolverhampton trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-birmingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Birmingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Birmingham trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-walsall/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Walsall</p>
              <p className="mt-1 text-xs text-muted">Window film for Walsall gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-wolverhampton/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Wolverhampton</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Wolverhampton and the Black Country</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Walsall subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Walsall subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Walsall project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 1 hour from South
              Yorkshire via the M1 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Walsall Subcontract Enquiry →
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
