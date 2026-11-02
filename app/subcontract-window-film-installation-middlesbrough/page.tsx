import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Middlesbrough | White-Label Film Installer Teesside | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Middlesbrough and Teesside. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Teesside Retail Park TS17, Middlesbrough town centre TS1, Thornaby TS17 and all Middlesbrough TS postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the A1(M) and A19.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-middlesbrough/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Middlesbrough — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Middlesbrough and Teesside. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Teesside Retail Park TS17, Middlesbrough town centre TS1, Thornaby TS17, Stockton-on-Tees TS18 and all Middlesbrough TS postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour from our South Yorkshire base via the A1(M) and A19. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Middlesbrough", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-middlesbrough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Middlesbrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Middlesbrough and Teesside TS postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Middlesbrough client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Middlesbrough sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Middlesbrough and Teesside as standard. We arrive at the Middlesbrough job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Middlesbrough client does not need to know WRPX is involved. Middlesbrough is approximately 1 hour from our South Yorkshire base via the A1(M) north and the A19 north through Teesside — one of the most accessible locations from our base after Yorkshire itself. Teesside&apos;s active retail park and commercial estate means there is consistent installation demand from the national retailers and commercial operators based across the TS postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Middlesbrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Middlesbrough commercial projects — retail units at Teesside Retail Park TS17 or Middlesbrough Retail Park TS1, office refurbishments in Middlesbrough town centre TS1, leisure fit-outs, healthcare glazing and educational facilities across the TS postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In England, manifestation requirements are governed by Building Regulations. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Middlesbrough commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Teesside Retail Park and Middlesbrough town centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Teesside Retail Park on Teesdale Avenue TS17 Thornaby is one of the UK&apos;s largest retail parks, generating consistent national retailer shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on open-aspect glazed frontages. Middlesbrough Retail Park TS1 and Cleveland Retail Park TS1 generate further Middlesbrough retail fit-out demand from their national multiple tenants. Middlesbrough town centre TS1 — including the Cleveland Centre and surrounding commercial core — generates office and hospitality window film demand. We cover all Middlesbrough and Teesside TS postcode commercial sites as part of the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Middlesbrough from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Middlesbrough is approximately 1 hour from our South Yorkshire base via the A1(M) north and the A19 north through Teesside — among the shortest travel times of any location outside Yorkshire in our coverage area. For planned Middlesbrough subcontract programmes, we can often mobilise within 48 to 72 hours of booking confirmation. For Middlesbrough sign and print businesses with regular installation needs — retail park fit-outs at Teesside Retail Park TS17, office refurbishments across TS1 and Stockton TS18, or multi-site retail campaigns — a standing arrangement with WRPX covering Middlesbrough and wider Teesside TS postcode installations removes the overhead of sourcing installers per job. We can also cover Newcastle alongside Middlesbrough in a co-ordinated North East programme where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Middlesbrough and Teesside postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Middlesbrough and surrounding TS postcode areas — TS1 (Middlesbrough town centre: Middlesbrough retail core TS1 — the Cleveland Centre and surrounding town-centre retail and commercial stock generating manifestation, frosted film and solar-control demand from its national multiple tenants and independent retailers; Middlesbrough office quarter along Corporation Road and Albert Road TS1 generating office refurbishment frosted film and privacy film demand from the Tees Valley commercial hub; Middlesbrough Retail Park TS1 and Cleveland Retail Park TS1 with open-aspect national retailer glazed frontages generating solar-control and manifestation demand), TS2 (Port Clarence, Cargo Fleet: industrial and commercial TS2 zone west of Middlesbrough with commercial and warehouse glazing film demand), TS3 (Berwick Hills, Park End, Brambles Farm: east Middlesbrough residential and commercial TS3 zone with local commercial glazing film demand), TS4 (Acklam, Whinney Banks: south Middlesbrough residential TS4 with commercial film demand from local retail and service operators), TS17 (Thornaby, Ingleby Barwick: Teesside Retail Park on Teesdale Avenue TS17 — one of the UK&apos;s largest retail parks, generating consistent national retailer shopfitting, manifestation, frosted fitting-room film and solar-control demand; Thornaby town centre TS17 with retail and commercial glazing film demand; Ingleby Barwick TS17 residential commercial zone), TS18 (Stockton-on-Tees: Stockton High Street TS18 — active retail and commercial street generating manifestation, frosted film and retail window vinyl demand from its national and independent retail occupiers; Stockton Riverside and commercial quarter TS18), TS19 (Stockton west and north: further Stockton-on-Tees retail and commercial zones TS19), TS5–TS9 (Middlesbrough suburbs and surrounding Teesside towns including Redcar TS10, Guisborough TS14 and Eaglescliffe TS16 within the operational area). WRPX is based in South Yorkshire, approximately 1 hour from Middlesbrough via the A1(M) and A19.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmMiddlesbroughPage() {
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
            <span className="text-foreground">Middlesbrough</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Middlesbrough &amp; Teesside
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Middlesbrough
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Middlesbrough
            and Teesside. Frosted film, privacy film, solar-control film, glass
            manifestation and decorative window film — installed on a subcontract
            basis across all Middlesbrough TS postcode commercial sites. Teesside
            Retail Park TS17 and Middlesbrough town centre TS1 covered.
            Approximately 1 hour from our South Yorkshire base via the A1(M)
            and A19.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Middlesbrough Subcontract Enquiry →
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
            Window film subcontract in Middlesbrough — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Middlesbrough is the commercial and retail centre for Teesside —
              a regional economy with active retail park development, NHS and
              education estate, commercial office refurbishment and a significant
              leisure and hospitality sector. Teesside Retail Park on Teesdale
              Avenue TS17 is one of the UK&apos;s largest out-of-town retail parks,
              generating consistent installation demand from national multiple
              tenants requiring manifestation, frosted fitting-room film and
              solar-control on large glazed frontages.
            </p>
            <p>
              Sign companies, print houses and shopfitters based in or serving
              the Teesside TS area regularly need a reliable subcontract window
              film installer for projects their own teams cannot cover — whether
              because of scale, specialist film type, programme scheduling or
              geographic reach. WRPX is approximately 1 hour from Middlesbrough
              via the A1(M) and A19 — one of the most accessible locations from
              our South Yorkshire base — making same-day or next-day
              mobilisation practical for time-sensitive Teesside programmes.
            </p>
            <p>
              We work white-label as standard. Your Middlesbrough client sees
              professional installation completed to specification. We provide
              RAMS documentation, photographic sign-off and trade-ready
              communication throughout. Middlesbrough can also be combined
              with Newcastle — roughly 30 minutes further north on the A19 —
              in a co-ordinated North East programme where programme volume
              justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Middlesbrough trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Middlesbrough and Teesside commercial sites —
                fitting rooms, office glazing, meeting rooms and hospitality
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
                across Middlesbrough fit-out projects — frosted, etched-effect,
                dot-pattern or branded to the correct specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and west-facing commercial glazed
                frontages across Teesside Retail Park TS17 and Middlesbrough
                office and leisure buildings — reducing solar heat gain and
                glare on large open-aspect glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Middlesbrough retail tenants and
                shopfitters — installed on a subcontract basis for your
                campaign or fit-out programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect film, textured frosted film and decorative
                window vinyl across Middlesbrough office, hospitality and
                commercial refurbishments — a cost-effective alternative to
                sandblasted or etched glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Office &amp; healthcare glazing
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted office glazing, meeting room privacy film and healthcare
                facility window film across Middlesbrough commercial and NHS
                estate — installed under FM contractor or shopfitter instructions
                on a white-label basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Middlesbrough subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-newcastle/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Newcastle</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Newcastle trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Leeds trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Window film for Middlesbrough gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-middlesbrough/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Middlesbrough</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Middlesbrough and Teesside</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Middlesbrough subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Middlesbrough subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Middlesbrough project, the film type and the
              programme window. We provide RAMS, photographic sign-off and
              white-label communication as standard. Approximately 1 hour from
              South Yorkshire via the A1(M) and A19.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Middlesbrough Subcontract Enquiry →
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
