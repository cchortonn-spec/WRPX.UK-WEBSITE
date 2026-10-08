import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Subcontract Window Film Installation | White-Label Film & Manifestation Installer | WRPX",
  description:
    "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors. WRPX installs frosted film, privacy film, solar-control film, glass manifestation and decorative window film on your behalf — white-label, documented, photographic sign-off. South Yorkshire based, covering the Midlands, North and beyond.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-window-film-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract window film installation — white-label frosted film, manifestation and solar-control film",
  "Subcontract window film installation for sign companies, print companies, shopfitters, fit-out contractors and glazing contractors. Frosted film, privacy film, solar-control film, glass manifestation, etched-effect film and decorative window film installed on a white-label basis. South Yorkshire based, covering the Midlands, North and beyond. RAMS documentation, photographic sign-off, trade-ready communication."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Subcontract Window Film Installation", item: "https://www.wrpx.co.uk/subcontract-window-film-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film types can you install on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install frosted privacy film, one-way mirror film, solar-control film, etched-effect film, decorative window film, glass manifestation strips (frosted, dot pattern, etched-effect or branded), anti-graffiti protective film and cut vinyl window decals. If you are a sign company, print house or shopfitter supplying the film or vinyl product, we will install it. If you need us to specify and supply the product as well as install, we can do that too. Either way, the end client sees clean professional installation — what happens behind it is your arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label — will the end client know WRPX is involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work white-label for sign companies, print companies, shopfitters and fit-out contractors as standard. We arrive at the job in unmarked or unbranded workwear where required, communicate only with your site contact, and provide all documentation under your company identity if that is your preference. Your end client does not need to know WRPX is involved. We are familiar with how trade relationships and white-label subcontract arrangements work and will not put them at risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install glass manifestation for a shopfitter or fit-out contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass manifestation is one of the most common subcontract window film applications we carry out. Shopfitters, fit-out contractors and glazing contractors frequently deliver commercial projects that include full-height glazed partitions, glass doors or glazed shop fronts requiring manifestation under Building Regulations Approved Document M — two horizontal bands at 850–1000mm and 1400–1600mm above floor level. We install frosted vinyl strips, etched-effect manifestation, dot pattern bands and branded manifestation options to the correct specification. Where a fit-out involves both standard manifestation and a branded element, we can install both in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide for subcontract window film installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide photographic sign-off as standard — before and after images for every window or glazed surface we film. RAMS (Risk Assessment and Method Statements) documentation is available for any commercial project that requires it. For installations in managed retail centres or occupied commercial buildings where the site or centre management team requires method statements in advance, we prepare these as part of the pre-mobilisation process. All documentation is formatted to be professional and trade-ready — something you can pass directly to your own client or FM contact.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for subcontract window film installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in South Yorkshire and carry out subcontract window film installation across the Midlands, Yorkshire, the North West and the North East as core coverage. Projects in the South — including London, the South East and South West — are taken on a project basis, typically where travel is incorporated into the job rate or where multi-day programmes make the journey economically sound. For retail multi-site rollouts with units spread across multiple regions, we discuss coverage on a programme basis and work with your project timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film as part of a retail rollout or multi-site campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail window film is an area we actively work in. If you are a print company, sign company or agency managing a promotional film campaign, a seasonal frosted film rollout or a branded manifestation programme across multiple retail units, we can work as the installation partner. We provide consistent installation quality across each site, photographic documentation per unit, RAMS where required and scheduling co-ordination with your project team or the retailer's facilities team. For tight campaign timelines, we discuss the programme dates and volume up front so you can rely on confirmed installation slots.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SubcontractWindowFilmPage() {
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
            <span className="text-foreground">Subcontract Window Film Installation</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract &amp; White-Label · Window Film Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract window film installation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film and glass manifestation installation on a subcontract or
            white-label basis for sign companies, print companies, shopfitters,
            fit-out contractors and glazing contractors. Frosted film, privacy film,
            solar-control film, etched-effect film, glass manifestation and decorative
            window vinyl — installed cleanly, documented professionally, signed off with
            photographs. South Yorkshire based, covering the Midlands, North and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Subcontract Programme →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Services Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who uses WRPX for subcontract window film installation?
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Most sign companies, print companies and shopfitters carry out window
              film work occasionally — it comes in as part of a broader project, or
              a client requests film alongside their main vinyl graphics or shopfit
              programme. The challenge is that window film installation is a
              specialist skill. Applying frosted film, solar-control film or glass
              manifestation to a standard consistently — with no bubbles, correct
              edge sealing and precise alignment on branded manifestation strips —
              takes equipment and daily practice that not every team has.
            </p>
            <p>
              WRPX provides installation-only subcontract window film for trade
              customers who need the job done right on their client&apos;s site.
              You supply the work, manage the client relationship and invoice at
              your rate. We turn up, install clean, document and leave. Your
              client gets a professional outcome. You maintain the relationship.
            </p>
            <p>
              Typical trade customers for subcontract window film include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sign companies with retail or commercial clients who need film installed alongside a graphics package</li>
              <li>Print companies supplying frosted film, solar-control film or printed decorative vinyl and needing a trade installation partner</li>
              <li>Shopfitters delivering retail fit-outs that include glazed partitions, glass manifestation or frosted film to fitting rooms</li>
              <li>Fit-out contractors working in offices, gyms, hotels or commercial buildings where glass manifestation and privacy film are specified</li>
              <li>Glazing contractors who install the glass and then require a film specialist to complete the frosting or solar-control element</li>
              <li>Marketing agencies and brand managers managing campaign film installations across multi-site retail portfolios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Film types grid */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types we install on a subcontract basis
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height or banded frosted film for fitting rooms, changing areas,
                office glazing, glass partitions and meeting room glass. The most
                consistent subcontract window film request from shopfitters and
                fit-out contractors.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted vinyl strips, etched-effect bands, dot pattern and branded
                manifestation to Building Regulations specification on full-height
                glazed panels and glass doors. Installed to the correct 850mm and
                1400mm height positions.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Heat-reduction and glare-control film for glazed shop frontages,
                office windows and commercial glazing where your client needs
                solar-gain management without replacing the glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Etched-effect &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-glass-look film, patterned frosted film and decorative window
                vinyl for shopfronts, office glass and commercial interiors. Supplied
                by you or specified and supplied by WRPX — installed to the same
                professional standard either way.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded &amp; cut vinyl on glass
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logo, text and pattern vinyl applied to retail glazing, office
                glass and shopfronts. Where your client wants branded manifestation
                or a cut-vinyl identity element on glass alongside a standard film,
                we install both in a single visit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror &amp; safety film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirror / reflective film for commercial privacy applications
                and anti-graffiti protective film for retail glazing in high-footfall
                locations — installed white-label as part of your project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract window film installation works with WRPX
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              You send us the job details — client location, glazing area and type,
              what the film needs to do, your access window and whether the site has
              any constraints such as retail trading-hours requirements or centre
              management sign-in procedures. We confirm the installation slot,
              confirm whether we supply the film or install what you supply, and
              mobilise on the agreed date.
            </p>
            <p>
              On site, we carry out a surface preparation check before application,
              apply the film to the agreed specification, edge-seal all cut runs to
              the manufacturer standard, and carry out a quality inspection on
              completion. Photographs of each completed window or surface are taken
              as standard — before and after. These go to you, formatted to your
              preference, so you can pass them to your client or use them in your
              own project sign-off process.
            </p>
            <p>
              RAMS documentation is available for any commercial project where the
              site or your client&apos;s facilities team requires it. For installations in
              managed retail centres — shopping centres, retail parks with centre
              management teams — we prepare method statements to the centre&apos;s
              requirements as part of pre-mobilisation. We are familiar with the
              contractor management and access restriction procedures at major UK
              retail and commercial environments.
            </p>
            <p>
              Communication back to you is clear and timely. Before mobilisation
              you know the plan. On the day, you know when we are on site and when
              we are done. After completion, you get the photo sign-off and any
              other documentation you need. We do not leave you chasing for updates
              to pass on to your client.
            </p>
          </div>
        </div>
      </section>

      {/* Why WRPX */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why sign companies and shopfitters work with WRPX for window film
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Window film is specialist work. The difference between a clean
              installation — no bubbles, correct edge radius, precise band alignment
              on branded manifestation — and a poor one is immediately visible.
              On a client&apos;s shopfit or a retail campaign installation, that quality
              reflects on you, not on the installer. We understand this dynamic and
              take it seriously.
            </p>
            <p>
              We install window film at commercial volume, not occasionally. Our
              process for surface preparation, film handling and application is
              consistent regardless of the job size. We carry the tools and the
              skill for window sizes from a single office door panel to a full
              glazed shopfront elevation, frosted fitting-room partitions or a
              floor-by-floor office glass-partition programme.
            </p>
            <p>
              We are straight about what the job involves. If the substrate is
              unsuitable, if the glazing has a surface coating that will affect
              adhesion, or if the access window is too tight for a quality result,
              we will tell you before we mobilise. We would rather flag a problem
              in advance than produce an outcome that damages your client relationship.
            </p>
            <p>
              Coverage: we are based in South Yorkshire and regularly cover Sheffield,
              Doncaster, Leeds, Nottingham, Derby, Leicester, Coventry, Birmingham and
              the surrounding region. Wider coverage for larger programmes is available
              on a project basis.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Commercial sectors for subcontract window film
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Subcontract window film installations come from projects across a wide
              range of commercial sectors. The most consistent sources are:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-foreground">Retail shopfits and refurbishments</strong> —
                frosted film to fitting rooms, solar control on glazed shop fronts,
                branded manifestation and cut vinyl to retail glazing. Often delivered
                white-label as part of a broader shopfitter or project manager&apos;s
                scope.
              </li>
              <li>
                <strong className="text-foreground">Office and commercial fit-out</strong> —
                glass partitions, meeting room glazing and full-height office glazing
                panels requiring manifestation and privacy film. Fit-out contractors
                and office refurb companies regularly use WRPX for this element.
              </li>
              <li>
                <strong className="text-foreground">Retail multi-site rollouts and campaigns</strong> —
                promotional frosted film, seasonal branded window film or DDA
                manifestation refreshes across multiple retail units. Print companies
                and marketing agencies use WRPX as their installation partner on
                campaign programmes covering multiple sites or regions.
              </li>
              <li>
                <strong className="text-foreground">Hospitality and leisure</strong> —
                hotels, gyms, restaurants and leisure facilities with glass partitions,
                glazed frontages or internal glazing needing frosted film, one-way
                mirror film or solar-control treatments. Often specified by a shopfitter
                or design-and-build contractor as part of a larger interior programme.
              </li>
              <li>
                <strong className="text-foreground">Healthcare and education</strong> —
                clinical partitions, observation windows, school internal glazing and
                school office glass where privacy film or manifestation is required.
                FM contractors and facilities teams in these sectors frequently
                manage these installations through a trusted installation partner.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Subcontract window film — common questions from trade customers
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Related subcontract and installation services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            <Link href="/sign-company-installation-partner/" className="card-float p-4 text-accent hover:underline block">
              Sign company installation partner →
            </Link>
            <Link href="/print-company-installation-partner/" className="card-float p-4 text-accent hover:underline block">
              Print company installation partner →
            </Link>
            <Link href="/white-label-graphics-installation/" className="card-float p-4 text-accent hover:underline block">
              White-label graphics installation →
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-4 text-accent hover:underline block">
              Commercial window film →
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-4 text-accent hover:underline block">
              Frosted window film →
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-4 text-accent hover:underline block">
              Glass manifestation →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Discuss a subcontract window film programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Send us the project details — location, glazing type, film specification
              and your access window — and we&apos;ll come back with a clear installation
              price. Trade enquiries are handled quickly. White-label arrangements
              discussed on first contact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Discuss a Subcontract Programme →
              </Link>
              <Link href="/window-film/" className="btn-secondary">
                Window Film Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
