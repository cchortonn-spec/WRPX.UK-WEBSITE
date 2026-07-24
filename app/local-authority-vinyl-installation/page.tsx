import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Local Authority Vinyl Installation — Council & Housing Association Graphics Subcontract | WRPX",
  description:
    "Subcontract vinyl graphics installation for local authorities, housing associations and public sector contractors. WRPX installs wayfinding, building identity, tenant information and multi-site estate graphics across council buildings and managed housing portfolios — white-label, photographic sign-off, Yorkshire and Midlands coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/local-authority-vinyl-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Local authority vinyl installation — council and housing association graphics subcontract",
  "Subcontract vinyl graphics installation for local authorities, housing associations, council contractors and public sector print management companies across Yorkshire and the Midlands. Wayfinding systems, building identity graphics, tenant information vinyls, civic centre rebrands, leisure centre graphics, library and community building wayfinding, housing estate communal area graphics — white-label, consistent specification, full photographic documentation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Wayfinding Graphics Installation", item: "https://www.wrpx.co.uk/wayfinding-graphics-installation/" },
    { "@type": "ListItem", position: 4, name: "Local Authority Vinyl Installation", item: "https://www.wrpx.co.uk/local-authority-vinyl-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you work as a subcontract installer for local authority and council contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — WRPX works directly for sign companies, print management firms and FM contractors holding council supply agreements, as well as directly with local authority procurement teams where the authority is purchasing installation services. We handle vinyl graphics installation across council-managed buildings — civic centres, libraries, leisure centres, housing estates, community buildings and council offices — under one subcontract arrangement. You hold the client relationship; WRPX installs the vinyl element under your brand with full photographic documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with housing associations and social housing providers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — housing associations are a distinct and substantial part of public sector vinyl installation demand. Communal area wayfinding in social housing blocks, tenant information vinyls, building entrance identity graphics, estate signage and reactive maintenance installs are all regular requirements. We work for sign companies and FM contractors holding housing association supply agreements, as well as housing associations who are sourcing installation directly. The key requirements — occupied building access, consistent documentation, reliable reactive response — are the same whether the client is a local authority or a registered housing provider.",
      },
    },
    {
      "@type": "Question",
      name: "Do you hold relevant accreditations for public sector work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain current public liability insurance, and carry RAMS documentation for vinyl installation work in public buildings. We can complete building-specific inductions and permit-to-work requirements as required by individual councils or housing associations. For supply chain partners managing a council or housing association framework contract, we provide the documentation evidence needed for your compliance records.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl graphics do you install in council and public sector buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wayfinding and directional vinyls, department identification graphics, civic centre reception branding, library and community centre signage vinyls, leisure centre floor graphics and wayfinding, housing estate communal area graphics, tenant information panels, window manifestations in council office glazing, and rebrand graphics across council buildings following local authority mergers or rebranding exercises. We cover the full scope of vinyl graphics across public sector managed buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Which local authorities are within your coverage area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover South Yorkshire (Sheffield City Council, Doncaster MBC, Rotherham MBC, Barnsley MBC), West Yorkshire (Leeds City Council, Bradford MDC, Wakefield MDC, Kirklees, Calderdale), North Yorkshire, East Riding of Yorkshire, Lincolnshire, Nottinghamshire, Derbyshire, Leicestershire, and the West Midlands (Birmingham, Wolverhampton, Coventry, Staffordshire). For sign companies or FM contractors managing council framework agreements that span multiple local authority areas across this corridor, WRPX can service the full portfolio under one subcontract arrangement.",
      },
    },
  ],
};

export default function LocalAuthorityVinylInstallationPage() {
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

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            B2B Subcontract · Local Authority &amp; Public Sector
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl Graphics Installation for Local Authorities &amp; Housing Associations
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms, FM contractors and public sector procurement teams</strong>{" "}
            delivering vinyl graphics programmes across council buildings, civic centres, leisure facilities,
            libraries and social housing estates across Yorkshire and the Midlands. We install wayfinding systems,
            building identity graphics, tenant information vinyls, communal area graphics and rebrand programmes —
            under your brand, with full photographic documentation on every job.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Single subcontract across your public sector portfolio</strong>{" "}
                — Yorkshire and Midlands council and housing association estates covered under one arrangement
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>RAMS documentation maintained — permit-to-work and building inductions handled as routine</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a public sector subcontract
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who uses WRPX for local authority vinyl installation?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Local councils and housing associations generate consistent, recurring demand for vinyl graphics
              installation — but the procurement and operational environment is distinct from standard private-sector
              commercial work. A sign company or FM contractor holding a council framework agreement needs an
              installation partner who understands public sector procurement constraints, can operate in occupied
              public buildings, handles the documentation that public sector clients require, and will not create
              problems with council building managers, housing officers or elected members.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The most common routes through which WRPX works on local authority vinyl installation: a sign company
              or print management firm holding a direct award or framework agreement with a council, placing
              installation with WRPX as their subcontract installer; an FM contractor managing a council building
              services contract who needs a reliable vinyl installation partner for wayfinding, maintenance and
              rebrand work; and occasionally local authorities or housing associations purchasing installation
              services directly, particularly for larger or multi-site programmes where the council is managing
              the print supply itself.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Housing associations are a separate and substantial category. Registered providers managing thousands
              of social housing units across a local authority area generate demand for communal area wayfinding,
              tenant information graphics, building entrance identity and estate signage — often with reactive as
              well as planned demand, and across a portfolio of properties built across multiple decades with
              varied substrates and access conditions.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install across council and public sector buildings
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Department identification graphics, floor and level vinyls, directional panels, room and suite
                numbering, lift lobby vinyls, stairwell wayfinding and reception direction graphics across civic
                centres, council offices, multi-service buildings and public-facing council facilities. Wayfinding
                in public buildings must be clear, durable and accessible — we install to the brief and confirm
                legibility and compliance before sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Civic centre &amp; council office rebrands</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building identity rebrands following local authority mergers, departmental restructuring or
                rebranding exercises. Reception glazing branding, entrance vinyls, lobby feature walls, floor
                and door identification vinyls — installed across multiple council-managed buildings to a
                consistent programme specification. Local authority rebrands often span civic centres, libraries,
                leisure centres and public-facing service buildings in a single programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Leisure centre &amp; sports facility graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding, health and safety vinyls, anti-slip floor films, poolside and changing area graphics,
                sports hall floor markings (vinyl-based), reception and entrance branding across council-operated
                leisure centres and sports facilities. Wet environments and high-traffic public areas require
                specific material selection and application standards — we specify correctly and confirm compliance
                before sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/sports-leisure-graphics-installation/" className="text-accent hover:underline">
                  Sports &amp; leisure graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Housing estate &amp; communal area graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Communal area wayfinding in social housing blocks, floor and door level identification, flat and
                stairwell numbering vinyls, tenant information panels, building entrance identity graphics and
                estate directional vinyls. Housing association communal areas are frequently in occupied buildings
                with active residents — we are experienced in occupied residential building access and manage
                on-site variables appropriately.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/property-management-vinyl-installation/" className="text-accent hover:underline">
                  Property management vinyl installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Library &amp; community building graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding, section identification, promotional graphics, window displays and interior branding
                vinyls in public libraries, community centres, day centres and publicly accessible council-managed
                buildings. These buildings are active public spaces — installations typically need to happen
                outside opening hours or in sections without disrupting public access.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window manifestations &amp; film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film, privacy film, solar control film, safety manifestations and decorative window film
                across council offices, civic centres, libraries and community buildings. Window manifestation
                requirements in publicly managed buildings frequently involve Building Regulation compliance for
                glazed partitions and full-height glazing — we install to spec and confirm compliance before
                sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why public sector is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Why public sector vinyl installation is different from private commercial work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Local authority and housing association buildings share operational characteristics with property
            management and NHS estates work — occupied buildings, permit-to-work systems, access constraints —
            but with additional considerations that are specific to the public sector environment.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Public building access and scrutiny</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Council buildings and social housing communal areas are public spaces with active occupants,
                elected member oversight and a higher level of public scrutiny than a private commercial
                building. Installation work that causes disruption, damages existing finishes or falls below
                standard gets escalated quickly and visibly. We manage on-site variables carefully in public
                buildings — noise, access, cleanliness, protection of existing surfaces — and deliver a result
                that reflects well on the council or housing association brief.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Documentation for framework compliance</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sign companies and FM contractors holding council framework agreements typically need installation
                documentation that supports their contract compliance records — photographic sign-off, method
                statement evidence, material specification records and installation completion confirmation.
                We provide photographic documentation in your preferred format on every job, formatted to
                support your framework compliance requirements.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Varied building stock and substrate challenges</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Council-managed building portfolios span decades of construction — 1930s housing stock, 1960s
                and 1970s civic buildings, 1980s and 1990s office blocks, and modern new-build facilities.
                Substrate conditions vary substantially across this mix. We carry out pre-installation
                substrate assessments for council and housing association work, flagging adhesion and
                application issues before material is produced — not after it arrives on site.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Occupied and operational environments</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Civic centres, libraries, leisure centres and housing communal areas are active public spaces.
                Installation typically needs to happen outside public-facing hours, or in managed sections
                with minimal disruption to building users. We accommodate early morning, evening and weekend
                installation where public building access requires it, and manage on-site scheduling to
                minimise impact on building operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Local authority coverage — Yorkshire and Midlands
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sign companies and FM contractors holding multi-authority framework agreements often need an
            installation partner who can cover the full geographic scope of the framework without sourcing
            a different local installer for each council area. WRPX covers the Yorkshire and Midlands
            corridor as a single subcontract.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "South Yorkshire", detail: "Sheffield, Doncaster, Rotherham, Barnsley MBCs", href: "/subcontract-vinyl-installation-yorkshire/" },
              { label: "West Yorkshire", detail: "Leeds, Bradford, Wakefield, Kirklees, Calderdale", href: "/subcontract-vinyl-installer-leeds/" },
              { label: "North & East Yorkshire", detail: "York, Harrogate, East Riding, North Yorkshire CC", href: "/subcontract-vinyl-installer-york/" },
              { label: "East Midlands", detail: "Nottinghamshire, Derbyshire, Leicestershire, Lincolnshire", href: "/subcontract-vinyl-installer-nottingham/" },
              { label: "West Midlands", detail: "Birmingham, Wolverhampton, Coventry, Staffordshire", href: "/subcontract-vinyl-installer-birmingham/" },
              { label: "Shropshire", detail: "Shropshire Council, Telford & Wrekin Council", href: "/subcontract-vinyl-installer-telford/" },
            ].map(({ label, detail, href }) => (
              <Link key={label} href={href} className="card-float block bg-background p-5 hover:border-accent transition-colors">
                <p className="font-semibold text-foreground">{label}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How the subcontract arrangement works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How the subcontract arrangement works for public sector installation
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Public sector installation via a sign company or FM framework works slightly differently from a
            direct private commercial brief. The practical structure that works well:
          </p>
          <div className="mt-8 space-y-4">
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Framework supply chain — agreed rates and response times</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For sign companies or FM contractors with a council or housing association framework agreement,
                we can establish a standing arrangement with agreed rates for common installation types, agreed
                response times for reactive call-outs, and a documented briefing and sign-off process. This
                gives you confidence in cost and lead time before committing to your client, and removes the
                need to re-quote every individual job under the framework.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Programme scheduling — planned work co-ordinated in advance</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Local authority rebrand programmes, leisure centre refurbishments, library fit-outs and housing
                estate wayfinding refreshes are scheduled months in advance. We work from your programme
                schedule — batching buildings by geography to reduce travel cost, sequencing to minimise
                disruption to building operations, and confirming installation dates against your client
                programme.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Reactive work — fast turnaround on public sector call-outs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Council buildings and housing estates generate reactive installation demand — damaged wayfinding,
                urgent tenant information updates, post-refurbishment graphics, emergency rebrand following
                merger or service change. Reactive jobs are handled on a standard briefing: site address,
                substrate, material spec, access constraints, deadline. We confirm availability and a date
                quickly, typically within one working day of the brief.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Documentation — per building and per job</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Every installation generates a photographic record — pre-installation, during and completed
                sign-off. For public sector work, this documentation is formatted to your preferred record
                standard and can be supplied per building reference, per council area or per programme phase.
                The record supports your framework compliance documentation and provides a baseline for future
                maintenance works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related public sector installation services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/nhs-procurement-vinyl-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">NHS procurement vinyl installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Specialist installation for NHS Trust frameworks, PFI estates and CCS-contracted work —
                infection control, out-of-hours NHS access, wayfinding specification and procurement
                compliance documentation.
              </p>
            </Link>
            <Link href="/education-framework-vinyl-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Education framework vinyl installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Multi-academy trust and school framework installation — DBS-cleared, term-time scheduling,
                multi-site programme management and documentation for education sector supply chains.
              </p>
            </Link>
            <Link href="/wayfinding-graphics-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Wayfinding graphics installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Directional systems, floor and level identification, lift lobby and stairwell vinyls — wayfinding
                installation across public buildings, civic centres and managed estates.
              </p>
            </Link>
            <Link href="/property-management-vinyl-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Property management vinyl installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                FM and property management subcontract — standing arrangements, reactive and planned programmes
                across managed commercial and residential portfolios.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Subcontract vinyl installation for local authority and housing association work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sign company, print management firm or FM contractor with a council or housing association framework
            agreement? Contact us to discuss a standing arrangement or a specific programme brief — we will
            confirm coverage, documentation capability and rates quickly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a public sector subcontract
            </Link>
            <Link href="/commercial-installation/" className="btn-ghost inline-block text-center">
              Commercial installation overview
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Or call{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
              {siteConfig.phone}
            </a>{" "}
            to discuss your local authority or housing association subcontract requirements directly.
          </p>
        </div>
      </section>
    </div>
  );
}
