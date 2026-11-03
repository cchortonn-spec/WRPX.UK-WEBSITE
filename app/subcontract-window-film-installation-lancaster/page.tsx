import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Lancaster | White-Label Film Installer North Lancashire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Lancaster and North Lancashire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. St Nicholas Arcades LA1, Marketgate LA1, Lancaster Retail Park LA1 and all Lancaster LA postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-lancaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Lancaster — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and facilities companies across Lancaster and North Lancashire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. St Nicholas Arcades LA1, Marketgate Shopping Centre LA1, Lancaster Retail Park LA1 and all Lancaster LA postcode commercial sites. Building Regulations-compliant manifestation. Approximately 1 hour 30 minutes from our South Yorkshire base via the M62 and M6. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Lancaster", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-lancaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Lancaster and North Lancashire LA postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end Lancaster client sees professional installation completed to specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Lancaster sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Lancaster and North Lancashire as standard. We arrive at the Lancaster job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end Lancaster client does not need to know WRPX is involved. Lancaster is approximately 1 hour 30 minutes from our South Yorkshire base via the M62 west and M6 north — a direct motorway route into the North West. Lancaster&apos;s active enclosed retail centre market and the university sector mean there is consistent installation demand from national retailers and commercial operators across the LA postcode area.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Building Regulations-compliant glass manifestation in Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out on commercial fit-out projects. Shopfitters and fit-out contractors delivering Lancaster commercial projects — retail units at St Nicholas Arcades LA1 and Marketgate LA1, office refurbishments in Lancaster city centre, leisure fit-outs, healthcare glazing and educational facilities at Lancaster University Bailrigg LA1 and across the LA postcode geography — regularly need full-height glazed partitions, glass doors or glazed shopfronts manifested to the correct standard. In England, manifestation requirements are governed by Building Regulations. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation to the correct specification for each Lancaster commercial environment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover St Nicholas Arcades and Lancaster city centre for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — St Nicholas Arcades LA1 on Common Garden Street is Lancaster&apos;s principal enclosed shopping centre, generating consistent national retailer shopfitting and window film installation demand for manifestation, frosted fitting-room film and solar-control on glazed frontages. Marketgate Shopping Centre LA1 adds a further covered retail destination with national and independent retail tenants. Lancaster city centre from Castle Hill to Penny Street generates independent retail, office and hospitality window film demand. Lancaster Retail Park on Caton Road LA1 provides out-of-town large-format retail volume from its nationally tenanted units. We cover all Lancaster and surrounding LA postcode commercial sites as part of the same regional mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Lancaster from your base and how quickly can you respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lancaster is approximately 1 hour 30 minutes from our South Yorkshire base via the M62 west and M6 north — a straightforward motorway route with no major junction complexity. For planned Lancaster subcontract programmes, we can often mobilise within 48 to 72 hours of booking confirmation. For Lancaster sign and print businesses with regular installation needs — retail park fit-outs at Lancaster Retail Park LA1, university or education refurbishments at Lancaster University Bailrigg LA1, or multi-site retail campaigns across the LA postcode — a standing arrangement with WRPX covering Lancaster and wider North Lancashire LA postcode installations removes the overhead of sourcing installers per job. We can also cover Preston alongside Lancaster in a co-ordinated North Lancashire programme where programme volume allows.",
      },
    },
    {
      "@type": "Question",
      name: "Which Lancaster and North Lancashire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Lancaster and surrounding LA postcode areas — LA1 (Lancaster city centre: St Nicholas Arcades LA1 — the covered retail centre generating national retailer shopfitting and window film demand; Marketgate LA1 covered retail destination; Lancaster Retail Park on Caton Road LA1 — out-of-town large-format retail generating manifestation and solar-control demand; Lancaster city-centre office and commercial core from Castle Hill to Dalton Square LA1 generating office refurbishment frosted film, privacy film and manifestation demand; Lancaster University Bailrigg campus LA1 generating education and retail glazing film demand from the university&apos;s commercial and teaching spaces), LA2 (Galgate, Caton, rural north: rural and village commercial provision within the North Lancaster LA2 corridor; Galgate LA2 commercial zone adjacent to the Lancaster University campus access route), LA3 (Heysham: Heysham LA3 commercial and coastal retail provision on the western fringe of the Lancaster operational area), LA4 (Morecambe: Morecambe town centre LA4 — Marine Road and town-centre retail streets generating frosted film, manifestation and decorative vinyl demand; Morecambe Retail Park LA4 — out-of-town retail park generating solar-control and manifestation demand from its national multiple tenants; Morecambe seafront commercial operators LA4). WRPX is based in South Yorkshire, approximately 1 hour 30 minutes from Lancaster via the M62 and M6.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmLancasterPage() {
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
            <span className="text-foreground">Lancaster</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Lancaster &amp; North Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Lancaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print
            companies, shopfitters and fit-out contractors across Lancaster and
            North Lancashire. Frosted film, privacy film, solar-control film,
            glass manifestation and decorative window film — installed on a
            subcontract basis across all Lancaster LA postcode commercial sites.
            St Nicholas Arcades LA1 and Lancaster Retail Park LA1 covered.
            Approximately 1 hour 30 minutes from our South Yorkshire base via
            the M62 and M6.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Start a Lancaster Subcontract Enquiry →
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
            Window film subcontract in Lancaster — why WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Lancaster is the commercial centre for North Lancashire — a
              regional economy with active retail, education and commercial
              office activity. St Nicholas Arcades LA1 and Marketgate LA1 form
              the city&apos;s twin enclosed retail destinations, generating
              consistent national retailer shopfitting and window film demand
              for manifestation, frosted fitting-room film and decorative vinyl.
              Lancaster Retail Park on Caton Road LA1 adds out-of-town
              large-format retail volume to the programme.
            </p>
            <p>
              Lancaster University at Bailrigg LA1 — with approximately 15,000
              students — generates a distinct education and campus commercial
              glazing film demand from its teaching facilities, student union
              retail and catering spaces, and managed student accommodation.
              Sign companies and shopfitters serving the North West frequently
              need a reliable subcontract window film installer for Lancaster
              projects where their own teams cannot cover the geography or
              specialist film type.
            </p>
            <p>
              WRPX is approximately 1 hour 30 minutes from Lancaster via the
              M62 and M6 — one of the most accessible North West locations from
              our South Yorkshire base. We work white-label as standard. Your
              Lancaster client sees professional installation completed to
              specification. We provide RAMS documentation, photographic
              sign-off and trade-ready communication throughout. Lancaster
              can also be combined with Preston — roughly 20 minutes further
              south on the M6 — in a co-ordinated North Lancashire programme
              where programme volume justifies it.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install for Lancaster trade partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height frosted film, banded privacy film and one-way mirror
                film across Lancaster and North Lancashire LA postcode commercial
                sites — fitting rooms, office glazing, meeting rooms and
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
                across Lancaster fit-out projects — frosted, etched-effect,
                dot-pattern or branded to the correct specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar-control film on south and west-facing commercial glazed
                frontages across Lancaster Retail Park LA1 and Morecambe Retail
                Park LA4 — reducing solar heat gain and glare on large
                open-aspect glazed elevations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Retail window graphics
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted and decorative window vinyl, cut-vinyl decals and
                promotional window film for Lancaster retail tenants and
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
                vinyl across Lancaster office, hospitality and commercial
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
                Building Regulations-compliant manifestation across Lancaster
                University Bailrigg LA1 and wider North Lancashire education
                estate — installed under FM contractor or shopfitter
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
            Lancaster subcontract window film — common questions
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
            <Link href="/subcontract-window-film-installation-manchester/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Manchester</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Manchester trade partners</p>
            </Link>
            <Link href="/subcontract-window-film-installation-liverpool/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Liverpool</p>
              <p className="mt-1 text-xs text-muted">White-label window film installation for Liverpool trade partners</p>
            </Link>
            <Link href="/window-film/gym-window-film-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Lancaster</p>
              <p className="mt-1 text-xs text-muted">Window film for Lancaster gyms and leisure centres</p>
            </Link>
            <Link href="/window-film/retail-window-film-lancaster/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Lancaster</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Lancaster and North Lancashire</p>
            </Link>
            <Link href="/contact/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Start a Subcontract Enquiry</p>
              <p className="mt-1 text-xs text-muted">Get in touch for a Lancaster subcontract window film enquiry</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster subcontract window film — get in touch
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Lancaster project, the film type and the programme
              window. We provide RAMS, photographic sign-off and white-label
              communication as standard. Approximately 1 hour 30 minutes from
              South Yorkshire via the M62 and M6.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Start a Lancaster Subcontract Enquiry →
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
