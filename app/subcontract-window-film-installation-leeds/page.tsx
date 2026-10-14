import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Leeds | White-Label Film Installer West Yorkshire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Leeds and West Yorkshire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. South Yorkshire based, fast response to all Leeds LS postcodes and the wider West Yorkshire region.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Leeds — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Leeds and West Yorkshire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. South Yorkshire based — approximately 1 hour from Leeds. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Leeds and West Yorkshire LS postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end client in Leeds sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Leeds sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Leeds and West Yorkshire as standard. We arrive at the Leeds job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end client does not need to know WRPX is involved. We are familiar with how trade relationships and white-label subcontract arrangements work in the Yorkshire print and sign industry and will not put them at risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Leeds shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Leeds commercial sites. Shopfitters and fit-out contractors frequently deliver Leeds commercial projects — offices, retail units, gym and leisure fitouts, educational facilities — that include full-height glazed partitions, glass doors or glazed shop fronts requiring manifestation under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot pattern bands and branded manifestation options to the correct specification. Where a Leeds fit-out involves both standard manifestation and a branded element, we can install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Leeds window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Leeds city centre via the M1 north. For Leeds subcontract window film work, we can typically survey within 2 to 3 days of enquiry and schedule installation within 1 to 2 weeks depending on programme size and any centre or site access lead times. For urgent Leeds window film jobs where a sign or print company needs same-week installation, contact us directly — we can often accommodate fast-turnaround Leeds requests from our South Yorkshire base without the delay that a more distant national installer would face. Leeds is one of our closest major cities and benefits from fast, predictable response times.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Leeds window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Leeds commercial project that requires it. For installations in managed Leeds retail centres — Victoria Leeds LS1, Trinity Leeds LS1 and White Rose Shopping Centre LS11 — or occupied commercial buildings where site or centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Leeds client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Leeds and West Yorkshire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Leeds LS postcodes and the wider West Yorkshire region as core subcontract window film territory — LS1 (Leeds city centre — Victoria Leeds, Trinity Leeds, Headrow offices, financial quarter), LS2 (Leeds Inner Ring Road, Merrion Centre), LS3 (Woodhouse, Hyde Park — student zone bordering Leeds city centre), LS4 (Kirkstall, Burley — inner west Leeds), LS6 (Headingley, Meanwood — north Leeds commercial and residential zone), LS7 (Chapeltown, Scott Hall — north Leeds), LS8 (Roundhay, Moortown — north-east Leeds), LS9 (Harehills, East End Park — east Leeds), LS10 (Hunslet, Middleton — south Leeds industrial and commercial zone), LS11 (Beeston, Holbeck — White Rose Shopping Centre LS11, south Leeds commercial), LS12 (Armley, Wortley — west Leeds industrial and commercial zone), LS13 (Bramley, Rodley — north-west Leeds), LS14 (Seacroft, Swarcliffe — east Leeds), LS15 (Crossgates, Whitkirk — east Leeds retail and commercial), LS16 (Cookridge, Alwoodley — north Leeds residential and commercial). Beyond Leeds: Bradford BD postcodes (approximately 20 minutes west), Halifax HX1 (approximately 30 minutes via M62), Wakefield WF1 (approximately 30 minutes south via M1), Huddersfield HD1 (approximately 45 minutes south-west via M62), Harrogate HG1 (approximately 45 minutes north via A61).",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmLeedsPage() {
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
            <Link href="/subcontract-window-film-installation/" className="text-accent hover:underline">Subcontract Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print companies,
            shopfitters and fit-out contractors across Leeds and West Yorkshire.
            Frosted privacy film, solar-control film, glass manifestation,
            etched-effect film and decorative vinyl installed on your behalf across
            all Leeds LS postcodes and the wider West Yorkshire region.
            South Yorkshire based — approximately 1 hour from Leeds via the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Send a Trade Enquiry →
            </Link>
            <Link href="/subcontract-window-film-installation/" className="btn-secondary">
              Subcontract Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why WRPX for Leeds */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract window film in Leeds — why it matters
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is one of the UK&apos;s largest and most commercially active cities
              outside London — a regional centre for financial services, retail,
              legal, media and creative industries, with a large and growing office
              market in the Leeds city core and substantial commercial construction
              and refurbishment activity across the LS postcode area. Sign companies,
              print houses, shopfitters and fit-out contractors operating in Leeds
              regularly need window film installed as part of commercial fit-out and
              refurbishment programmes — and frequently lack an in-house installation
              capability or a reliable, close-to-Leeds installation partner.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Leeds city
              centre via the M1 north. Leeds is the closest major UK city to our
              base. For Leeds sign and print companies looking for a reliable,
              trade-only window film installation partner, our proximity means fast
              survey response, predictable travel costs and the ability to attend
              short-notice Leeds jobs without the penalty that a more distant
              national installer would need to charge.
            </p>
            <p>
              We operate across all Leeds commercial environments — Victoria Leeds LS1
              and Trinity Leeds LS1 retail centres, the financial quarter and Headrow
              office market, White Rose Shopping Centre LS11, Kirkstall Forge and
              Thorpe Park commercial parks, educational facilities across Leeds and
              Bradford universities, gym and leisure fit-outs and healthcare premises
              across the Leeds Teaching Hospitals estate.
            </p>
            <p>
              Leeds is also the centre of one of the UK&apos;s most active print and sign
              industries. The concentration of print companies, signage businesses and
              graphics studios across the LS and BD postcode areas means there is
              regular demand for a dependable local installation partner that understands
              trade relationships and can attend jobs without needing long lead times.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with in Leeds
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Sign companies — Leeds and West Yorkshire
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Leeds-area sign companies that produce window vinyl,
                printed film or manifestation graphics but need a reliable
                installation partner to fit them at the client&apos;s premises.
                White-label as standard.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Print companies — LS and BD postcodes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Print houses across Leeds, Bradford and the wider West Yorkshire
                print corridor that produce window-film products and need
                professional installation at the end client&apos;s site. Supply the
                film, we fit it — or we can specify and supply as well.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shopfitters and fit-out contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial shopfitters and fit-out contractors delivering Leeds
                retail, office and leisure projects — Victoria Leeds, Trinity
                Leeds, White Rose and beyond — that include glass manifestation,
                frosted privacy film or solar-control film in the specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                FM and property companies
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Facilities management companies and commercial property managers
                overseeing Leeds commercial building portfolios — including the
                large managed office and retail estate in the Leeds city centre
                LS1 zone — that need window film specified, supplied and installed.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Marketing agencies and brands
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Leeds-based marketing agencies and brands managing promotional
                window film campaigns, branded manifestation programmes or
                seasonal retail graphics across West Yorkshire and national
                retail sites that need trade installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glazing and refurbishment contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial glazing contractors and building refurbishment
                companies across Leeds and West Yorkshire that specify window
                film as part of glazing replacement or commercial refurbishment
                programmes and need a reliable trade installation partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract window film works in Leeds
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You send us the Leeds job brief — address, glazing areas, film type
              or product reference, site access requirements and your preferred
              installation window. We confirm scope, price and availability. For
              larger Leeds programmes, we can survey first to confirm the glazing
              inventory before pricing.
            </p>
            <p>
              On-site, we attend as your installer. White-label where required —
              we follow your site contact, work to your instructions and keep
              your client relationship intact. All Leeds commercial sites are
              different: Victoria Leeds LS1 and Trinity Leeds LS1 have centre
              management access protocols, occupied Leeds offices often need
              out-of-hours or weekend scheduling, healthcare sites require
              advance RAMS clearance. We handle all of it as part of the job.
            </p>
            <p>
              On completion, we provide photographic sign-off ready to pass to
              your Leeds client — before and after images per window or area,
              formatted and labelled. RAMS documentation is provided at the
              outset for any site that requires it.
            </p>
            <p>
              We cover the full West Yorkshire region as local territory — Leeds LS,
              Bradford BD, Wakefield WF, Halifax HX, Huddersfield HD — and can
              schedule across multiple sites in the same mobilisation where your
              programme spans more than one city. For Leeds sign and print companies
              with regional portfolios, that flexibility keeps your client delivery
              consistent and your installation costs predictable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Leeds window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film for East Midlands sign and print companies</p>
            </Link>
            <Link href="/window-film/gym-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Frosted, solar-control and manifestation for Leeds gyms</p>
            </Link>
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Leeds LS postcodes</p>
            </Link>
            <Link href="/sign-company-installation-partner/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Sign Company Installation Partner</p>
              <p className="mt-1 text-xs text-muted">Installation-only partner for sign companies</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film</p>
              <p className="mt-1 text-xs text-muted">Privacy and frosted film service overview</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leeds subcontract window film — send a trade enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Leeds site, glazing areas, film type and your timeline.
              We&apos;ll confirm scope, availability and price. White-label by default.
              RAMS and photographic sign-off as standard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Send a Trade Enquiry →
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
