import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Nottingham | White-Label Film Installer East Midlands | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Nottingham and the East Midlands. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. South Yorkshire based, fast response to all NG postcodes and the wider East Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Nottingham — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Nottingham and the East Midlands. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. South Yorkshire based — approximately 1 hour from Nottingham. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Nottingham and East Midlands NG postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end client in Nottingham sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Nottingham sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Nottingham and the East Midlands as standard. We arrive at the Nottingham job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end client does not need to know WRPX is involved. We are familiar with how trade relationships and white-label subcontract arrangements work in the East Midlands and will not put them at risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Nottingham shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Nottingham commercial sites. Shopfitters and fit-out contractors frequently deliver Nottingham commercial projects — offices, retail units, gym and leisure fitouts, educational facilities — that include full-height glazed partitions, glass doors or glazed shop fronts requiring manifestation under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot pattern bands and branded manifestation options to the correct specification. Where a Nottingham fit-out involves both standard manifestation and a branded element, we can install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Nottingham window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire, approximately 1 hour from Nottingham city centre via the M1 south. For Nottingham subcontract window film work, we can typically survey within 2 to 3 days of enquiry and schedule installation within 1 to 2 weeks depending on programme size and any centre or site access lead times. For urgent Nottingham window film jobs where a sign or print company needs same-week installation, contact us directly — we can often accommodate fast-turnaround Nottingham requests from our South Yorkshire base without the delay that a more distant national installer would face.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Nottingham window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Nottingham commercial project that requires it. For installations in managed Nottingham retail centres — intu Broadmarsh (where applicable), Victoria Centre NG1 — or occupied commercial buildings where site or centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Nottingham client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Nottingham and East Midlands postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Nottingham NG postcodes and the wider East Midlands as core subcontract window film territory — NG1 (Nottingham city centre — Victoria Centre, Hockley, Lace Market), NG2 (West Bridgford, Meadows), NG7 (Lenton, Radford), NG8 (Bilborough, Aspley), NG9 (Beeston, Chilwell), NG10 (Long Eaton), NG15 (Hucknall), NG18/NG19 (Mansfield), NG24 (Newark). Beyond Nottingham: Derby DE postcodes (approximately 30 minutes via A52), Leicester LE postcodes (approximately 45 minutes via A46/M1), Lincoln LN postcodes (approximately 1 hour), Sheffield S and Doncaster DN postcodes as home territory. For East Midlands sign companies, print companies and FM contractors managing window film programmes across multiple NG, DE and LE sites, our South Yorkshire base makes us a practical and cost-efficient installation partner across the whole region.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Nottingham &amp; East Midlands
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print companies,
            shopfitters and fit-out contractors across Nottingham and the East
            Midlands. Frosted privacy film, solar-control film, glass manifestation,
            etched-effect film and decorative vinyl installed on your behalf across
            all Nottingham NG postcodes and the wider East Midlands region.
            South Yorkshire based — approximately 1 hour from Nottingham via the
            M1 south.
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

      {/* Why WRPX for Nottingham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract window film in Nottingham — why it matters
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is one of the UK&apos;s most commercially active East Midlands
              cities — a regional centre for retail, commercial property, education
              and healthcare, with a growing office market in the city core and
              substantial commercial construction and refurbishment activity across
              the NG postcode area. Sign companies, print houses, shopfitters
              and fit-out contractors operating in Nottingham regularly need
              window film installed as part of commercial fit-out and refurbishment
              programmes — and frequently lack an in-house installation capability
              or a reliable local installation partner.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour from Nottingham
              city centre via the M1 south. For Nottingham sign and print companies
              looking for a reliable, trade-only window film installation partner,
              our proximity means fast survey response, predictable travel costs and
              the ability to attend short-notice Nottingham jobs without the penalty
              that a more distant national installer would need to charge.
            </p>
            <p>
              We operate across all Nottingham commercial environments — city-centre
              retail units in the Victoria Centre NG1, commercial offices across the
              Nottingham Business District and Lace Market NG1, gym and leisure
              fit-outs at sites including Harvey Hadden NG8, educational facilities
              across Nottingham Trent University NG1 and the University of
              Nottingham NG7 campus, and healthcare premises across the Nottingham
              University Hospitals NG7 estate.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with in Nottingham
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Sign companies — Nottingham and East Midlands
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nottingham-area sign companies that produce window vinyl,
                printed film or manifestation graphics but need a reliable
                installation partner to fit them at the client&apos;s premises.
                White-label as standard.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Print companies — NG postcodes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Print houses across Nottingham and the East Midlands that
                produce window-film products and need professional installation
                at the end client&apos;s site. Supply the film, we fit it — or
                we can specify and supply as well.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shopfitters and fit-out contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial shopfitters and fit-out contractors delivering
                Nottingham retail, office and leisure projects that include
                glass manifestation, frosted privacy film or solar-control
                film as part of the specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                FM and property companies
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Facilities management companies and commercial property managers
                overseeing Nottingham commercial building portfolios that need
                window film specified, supplied and installed across multiple
                tenancies or buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Marketing agencies and brands
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nottingham-based marketing agencies and brands managing
                promotional window film campaigns, branded manifestation
                programmes or seasonal retail graphics across East Midlands
                retail sites that need professional trade installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glazing and refurbishment contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial glazing contractors and building refurbishment
                companies across Nottingham and Nottinghamshire that specify
                window film as part of glazing replacement or refurbishment
                programmes and need a trade installation partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract window film works in Nottingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You send us the Nottingham job brief — address, glazing areas,
              film type or product reference, site access requirements and your
              preferred installation window. We confirm scope, price and
              availability. For larger Nottingham programmes, we can survey
              first to confirm the glazing inventory before pricing.
            </p>
            <p>
              On-site, we attend as your installer. White-label where required —
              we follow your site contact, work to your instructions and keep
              your client relationship intact. All Nottingham commercial sites
              are different: Victoria Centre NG1 has landlord access protocols,
              occupied Nottingham offices need out-of-hours scheduling,
              healthcare sites require advance RAMS clearance. We handle all
              of it as part of the job.
            </p>
            <p>
              On completion, we provide photographic sign-off ready to pass
              to your Nottingham client — before and after images per window
              or area, formatted and labelled. RAMS documentation is provided
              at the outset for any site that requires it.
            </p>
            <p>
              We cover the full East Midlands as local territory — Nottingham
              NG, Derby DE, Leicester LE, Lincoln LN — and can schedule across
              multiple sites in the same mobilisation where your programme spans
              more than one city. For Nottingham sign and print companies with
              regional portfolios, that flexibility keeps your client delivery
              consistent and your installation costs predictable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Nottingham window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/window-film/gym-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Frosted, solar-control and manifestation for Nottingham gyms</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Retail Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">Retail window film across Nottingham NG postcodes</p>
            </Link>
            <Link href="/sign-company-installation-partner/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Sign Company Installation Partner</p>
              <p className="mt-1 text-xs text-muted">Installation-only partner for sign companies</p>
            </Link>
            <Link href="/print-company-installation-partner/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Print Company Installation Partner</p>
              <p className="mt-1 text-xs text-muted">Trade installation for print houses and studios</p>
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
              Nottingham subcontract window film — send a trade enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Nottingham site, glazing areas, film type and
              your timeline. We&apos;ll confirm scope, availability and price.
              White-label by default. RAMS and photographic sign-off as standard.
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
