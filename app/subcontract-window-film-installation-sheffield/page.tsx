import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation Sheffield | White-Label Film Installer South Yorkshire | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters and fit-out contractors across Sheffield and South Yorkshire. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on a white-label basis. Sheffield is our home territory — fast response to all Sheffield S postcodes and the wider South Yorkshire region.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation Sheffield — white-label frosted film, manifestation and solar-control film for sign and print companies",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors across Sheffield and South Yorkshire. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. Sheffield is our home territory — same-day survey availability, fast installation scheduling and no travel premium. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/subcontract-window-film-installation-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), and cut vinyl window decals across all Sheffield and South Yorkshire S postcode commercial sites. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end client in Sheffield sees professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for Sheffield sign and print companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors across Sheffield and South Yorkshire as standard. We arrive at the Sheffield job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end client does not need to know WRPX is involved. Sheffield is our home territory — we know the local trade landscape, how the city&apos;s print and sign companies work, and we will not put your client relationships at risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a Sheffield shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out across Sheffield commercial sites. Shopfitters and fit-out contractors frequently deliver Sheffield commercial projects — offices, retail units, gym and leisure fitouts, educational facilities — that include full-height glazed partitions, glass doors or glazed shop fronts requiring manifestation under Building Regulations Approved Document M. Two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot-pattern bands and branded manifestation options to the correct specification. Where a Sheffield fit-out involves both standard manifestation and a branded element, we can install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you respond to Sheffield window film subcontract jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield is our home territory — we are based in South Yorkshire and Sheffield is under 30 minutes from our base. For Sheffield subcontract window film work, we can typically survey on the same day or next day for urgent enquiries and schedule installation within days rather than weeks. For sign and print companies in Sheffield that need same-week or even same-day installation, contact us directly — our proximity to Sheffield makes us the most responsive installation partner available in the city without the wait or travel cost that a more distant national installer would need to build into the quote.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every Sheffield window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any Sheffield commercial project that requires it. For installations in managed Sheffield retail environments — Meadowhall Shopping Centre S9, The Moor Sheffield S1 and other managed retail destinations — or occupied Sheffield commercial buildings where site or centre management requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready, suitable to pass directly to your own Sheffield client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sheffield and South Yorkshire postcodes do you cover for subcontract window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Sheffield S postcodes as home territory — S1 (Sheffield city centre, The Moor, Fargate, Heart of the City Quarter — commercial offices, retail units, hospitality and mixed-use glazed buildings across the core regeneration zone), S2 (Heeley, Arbourthorne — south-east Sheffield residential and light commercial zone), S3 (Burngreave, Kelham Island — Kelham Island creative and manufacturing quarter, now a significant commercial and residential zone with glazed office and workspace units), S4 (Darnall, Attercliffe — east Sheffield commercial and industrial zone), S5 (Southey, Parson Cross — north Sheffield residential and commercial), S6 (Hillsborough, Wadsley, Stocksbridge fringe — north-west Sheffield including Hillsborough S6 retail and commercial zone), S7 (Millhouses, Nether Edge — south Sheffield affluent residential commercial zone), S8 (Gleadless, Intake — south-east Sheffield residential commercial zone), S9 (Meadowhall — Meadowhall Shopping Centre S9, the largest retail and leisure destination in Yorkshire with over 270 units, requiring regular window film installation work for retailers, leisure operators and hospitality units), S10 (Broomhill, Ranmoor — University of Sheffield campus zone, west Sheffield residential and commercial), S11 (Ecclesall Road, Sharrow — Ecclesall Road retail and commercial strip, one of Sheffield&apos;s most active independent and commercial retail zones), S13 (Handsworth, Woodhouse — east Sheffield commercial and residential), S14 (Gleadless — south-east Sheffield). Beyond Sheffield: Doncaster DN, Rotherham S60/S61/S62/S63/S64/S65/S66, Barnsley S70/S71/S72/S73/S74/S75, Chesterfield S40/S41 and the wider South Yorkshire region.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract Window Film · Sheffield &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            White-label window film installation for sign companies, print companies,
            shopfitters and fit-out contractors across Sheffield and South Yorkshire.
            Frosted privacy film, solar-control film, glass manifestation,
            etched-effect film and decorative vinyl installed on your behalf across
            all Sheffield S postcodes and the wider South Yorkshire region.
            Sheffield is our home territory — fastest response times, no travel
            premium, same-day survey available.
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

      {/* Why WRPX for Sheffield */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract window film in Sheffield — home territory advantage
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield is WRPX&apos;s home territory. We are based in South Yorkshire
              and Sheffield S postcodes are our closest and fastest-response commercial
              market. For Sheffield sign companies, print houses and shopfitters that
              need a dependable window film installation partner, our proximity means
              we can survey the same day an enquiry comes in, schedule installation
              within days and attend the site without the travel overhead that a
              more distant installer would need to build into the price.
            </p>
            <p>
              Sheffield has a significant commercial activity base — the Heart of
              the City regeneration programme and the wider city-centre development
              around West Bar and Castlegate have brought substantial new glazed
              office, retail and hospitality space to S1. Meadowhall Shopping Centre
              in S9 remains one of the UK&apos;s largest managed retail and leisure
              destinations, with over 270 units requiring regular window film
              installation as part of tenant fit-out, seasonal campaign and
              refurbishment programmes. The Moor Sheffield has continued to evolve
              as a retail and leisure destination following recent development phases.
            </p>
            <p>
              Sheffield and South Yorkshire also carry a strong legacy sign and print
              industry base — a concentration of sign companies, graphics businesses
              and commercial print operators in the S and DN postcode areas who need
              a reliable, trade-only window film installation partner that understands
              how the local industry works.
            </p>
            <p>
              We operate across all Sheffield commercial environments — Meadowhall S9,
              Heart of the City S1, Ecclesall Road S11, Kelham Island S3 workspace
              and creative quarter, university campuses across S10 and S1, healthcare
              and education facilities across the Sheffield city region and the wider
              South Yorkshire commercial estate.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with in Sheffield
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Sign companies — Sheffield and South Yorkshire
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sheffield-area sign companies that produce window vinyl,
                printed film or manifestation graphics but need a reliable
                installation partner to fit them at the client&apos;s premises.
                White-label as standard — your client, your relationship.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Print companies — S and DN postcodes
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Print houses across Sheffield, Doncaster and the wider South
                Yorkshire print corridor that produce window-film products and
                need professional installation at the end client&apos;s site. Supply
                the film, we fit it — or we can specify and supply as well.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Shopfitters and fit-out contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial shopfitters and fit-out contractors delivering Sheffield
                retail, office and leisure projects — Meadowhall S9, The Moor
                S1, Heart of the City and beyond — that include glass manifestation,
                frosted privacy film or solar-control film in the specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                FM and property companies
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Facilities management companies and commercial property managers
                overseeing Sheffield commercial building portfolios — including
                managed office and retail estates in S1, S3 and the wider Sheffield
                commercial zone — that need window film specified, supplied and installed.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Marketing agencies and brands
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sheffield-based marketing agencies and brands managing promotional
                window film campaigns, branded manifestation programmes or seasonal
                retail graphics across South Yorkshire and national retail sites
                that need trade installation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glazing and refurbishment contractors
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial glazing contractors and building refurbishment companies
                across Sheffield and South Yorkshire that specify window film as
                part of glazing replacement or commercial refurbishment programmes
                and need a reliable trade installation partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract window film works in Sheffield
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You send us the Sheffield job brief — address, glazing areas, film type
              or product reference, site access requirements and your preferred
              installation window. We confirm scope, price and availability. For
              larger Sheffield programmes, we can survey first to confirm the glazing
              inventory before pricing. Sheffield being home territory means survey
              can happen the same day for urgent Sheffield jobs.
            </p>
            <p>
              On-site, we attend as your installer. White-label where required —
              we follow your site contact, work to your instructions and keep
              your client relationship intact. All Sheffield commercial sites are
              different: Meadowhall S9 has centre management access protocols,
              Heart of the City and managed Sheffield offices often need out-of-hours
              or weekend scheduling, healthcare and university sites require advance
              RAMS clearance. We handle all of it as part of the job.
            </p>
            <p>
              On completion, we provide photographic sign-off ready to pass to
              your Sheffield client — before and after images per window or area,
              formatted and labelled. RAMS documentation is provided at the
              outset for any site that requires it.
            </p>
            <p>
              We cover the full South Yorkshire region as home territory — Sheffield S,
              Doncaster DN, Rotherham S60/S61–S66, Barnsley S70–S75, Chesterfield
              S40/S41 — and can schedule across multiple sites in the same mobilisation
              where your programme spans more than one South Yorkshire town.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield subcontract window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Related subcontract and Sheffield window film services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/subcontract-window-film-installation/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film — Overview</p>
              <p className="mt-1 text-xs text-muted">Full subcontract and white-label window film service</p>
            </Link>
            <Link href="/subcontract-window-film-installation-leeds/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Leeds</p>
              <p className="mt-1 text-xs text-muted">White-label window film for West Yorkshire sign and print companies</p>
            </Link>
            <Link href="/subcontract-window-film-installation-nottingham/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Subcontract Window Film Nottingham</p>
              <p className="mt-1 text-xs text-muted">White-label window film for East Midlands sign and print companies</p>
            </Link>
            <Link href="/window-film/gym-window-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Gym Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Frosted, solar-control and manifestation for Sheffield gyms</p>
            </Link>
            <Link href="/sign-company-installation-partner/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Sign Company Installation Partner</p>
              <p className="mt-1 text-xs text-muted">Installation-only partner for sign companies</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-4 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground text-sm">Frosted Window Film Sheffield</p>
              <p className="mt-1 text-xs text-muted">Privacy and frosted film across Sheffield</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sheffield subcontract window film — send a trade enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Sheffield site, glazing areas, film type and your timeline.
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
