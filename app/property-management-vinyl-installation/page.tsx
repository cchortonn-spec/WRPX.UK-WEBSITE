import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Property Management Vinyl Installation — Facilities & FM Graphics Subcontract | WRPX",
  description:
    "Subcontract vinyl graphics installation for property management companies, facilities managers and FM contractors. WRPX installs wayfinding, building identity, tenant rebrand and multi-site portfolio graphics across managed commercial properties — white-label, photographic sign-off, Yorkshire and Midlands coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/property-management-vinyl-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Property management vinyl installation — facilities management and FM graphics subcontract",
  "Subcontract vinyl graphics installation for property management companies, facilities management contractors and commercial landlords managing multi-site property portfolios across Yorkshire, the Midlands and the M1/M6 corridor. Wayfinding refreshes, building identity graphics, tenant rebrand programmes, reactive maintenance vinyls and planned refurbishment graphics — white-label, consistent specification across every managed property, full photographic documentation."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Wayfinding Graphics Installation", item: "https://www.wrpx.co.uk/wayfinding-graphics-installation/" },
    { "@type": "ListItem", position: 4, name: "Property Management Vinyl Installation", item: "https://www.wrpx.co.uk/property-management-vinyl-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you work as a subcontract installer across a managed property portfolio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — WRPX works directly for property management companies, FM contractors and commercial landlords managing multi-site portfolios. We handle all vinyl graphics installation across your managed buildings — wayfinding refreshes, building identity rebrands, tenant signage graphics, reactive maintenance and planned refurbishment graphics — under one subcontract arrangement. You manage the property relationships; WRPX installs the vinyl element under your brand with full photographic documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for FM and property management companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard for property management and FM subcontract work. We attend managed buildings in unbranded vehicles and present to building occupants as your team or your subcontractor, depending on your preference. Tenants, building managers and landlord representatives see your company throughout. All photographic documentation, delivery notes and sign-off records are formatted to your specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle reactive maintenance vinyls as well as planned programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — property management generates both types of work. Planned programmes (wayfinding refreshes at lease renewal, building rebrand following landlord portfolio changes, tenant fit-out graphics at handover) are scheduled in advance. Reactive work (damaged wayfinding replaced, tenant rebrand triggered by short-notice notice, promotional graphics for a managed retail unit) is accommodated where diary allows, typically on 48–72 hours notice. We aim to be as responsive as a reliable FM supply chain requires.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl graphics do you install in managed commercial properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wayfinding and directional vinyls, floor and door level identification graphics, lift lobby and stairwell identity, building reception branding, tenant floor and suite identification, window manifestations and frosted film for office partitions, retail unit window graphics and promotional vinyls, car park directional vinyls, external fascia and entrance vinyls, and wall graphics for common areas and managed spaces. We cover the full scope of vinyl graphics within a managed commercial building across the Yorkshire and Midlands corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Which regions do you cover for property management subcontract work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover South Yorkshire, West Yorkshire, the East Midlands (Nottingham, Derby, Leicester, Lincoln), the West Midlands (Birmingham, Wolverhampton, Coventry), and the M1/M6 corridor connecting these regions. For property management companies with managed buildings spread across this corridor, we can cover the full portfolio under one subcontract arrangement rather than needing separate regional installers for each city or county.",
      },
    },
  ],
};

export default function PropertyManagementVinylInstallationPage() {
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
            B2B Subcontract · Property Management &amp; FM
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl Graphics Installation for Property Management &amp; FM Companies
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">property management companies, facilities management contractors and commercial landlords</strong>{" "}
            managing multi-site portfolios across Yorkshire, the East Midlands and the M6 corridor. We install wayfinding
            systems, building identity graphics, tenant rebrand vinyls, window manifestations, floor graphics and reactive
            maintenance installs — under your brand, with full photographic documentation on every job.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Single subcontract across your portfolio</strong>{" "}
                — Yorkshire, East Midlands and West Midlands covered under one arrangement
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Reactive and planned programmes — both accommodated</span>
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
              Discuss a property management subcontract
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
              Who uses WRPX for property management vinyl installation?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Property management companies and facilities management contractors deal with a specific kind of installation
              demand — recurring, portfolio-wide, often reactive, and with a strong requirement for consistent standards
              across every managed building regardless of geography. The brief is rarely a single building. It is a managed
              estate of offices, retail units, business parks, mixed-use developments or commercial properties spread across
              a region, with wayfinding that needs refreshing, tenants that rebrand or move, and building identity that
              changes when the landlord or brand changes hands.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The challenge for a property management company or FM contractor is finding one installation partner who can
              cover the geography of the portfolio — not sourcing a different local installer for every city — while maintaining
              a consistent installation standard, documentation process and point of contact. WRPX covers the Yorkshire and
              Midlands corridor — South Yorkshire, West Yorkshire, the East Midlands and the M6 West Midlands corridor — as
              a single subcontract arrangement. For a managed portfolio spread across Sheffield, Nottingham, Leicester and
              Birmingham, we can service every building from one agreement.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Common clients for this service include commercial property management firms managing multi-tenant office
              buildings and business parks, facilities management contractors holding service contracts across large commercial
              estates, commercial landlords managing retail portfolios, and FM arms of large commercial property agents.
              We also work with print management companies and sign companies who hold the supply agreement with the FM or
              property company and need a reliable installation partner who understands the demands of a managed property
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install in managed commercial properties
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Floor and door numbering, level identification graphics, lift lobby vinyls, stairwell directional systems,
                car park wayfinding, reception direction panels and tenant directory vinyls. Installed to a consistent
                standard across every building in the managed estate — whether the wayfinding is a phased refresh or a
                complete new wayfinding system following a building rebrand.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Building identity &amp; entrance graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building name and branding vinyls on reception glazing, entrance screens, external fascias, lobby walls and
                building perimeter hoardings. When a building changes landlord, brand or tenant mix, the identity graphics
                need replacing promptly and to a standard that reflects the grade of the building. We install building
                identity graphics from reception level through to facade — to spec, on time, with sign-off documentation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Tenant rebrand &amp; suite identification</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                When a tenant rebrands, moves out, or takes new space, the vinyl graphics in their suite need updating —
                suite identification panels, window branding, internal door graphics, floor vinyls and reception signage.
                We handle tenant churn graphics as reactive installs, typically on 48–72 hours&apos; notice, and document
                each change to the managed property record.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window film &amp; manifestations</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film, decorative film, privacy film, safety manifestations and one-way vision for managed office
                buildings, managed retail units and mixed-use developments. Window manifestation requirements are a
                recurring element of office suite management — change of tenant, refurbishment, building regulation
                compliance updates. We install to spec and provide photo documentation confirming compliance.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; car park vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls for managed lobbies, reception areas and common areas, anti-slip floor film for
                staircases and wet-risk zones, and car park directional and bay identification vinyls across managed car
                parks and multi-storey car parks within the portfolio. Floor vinyls are applied to spec and confirmed
                compliant before sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Common area &amp; communal space graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded wall graphics, promotional vinyls and decorative installations in managed common areas —
                reception lobbies, breakout areas, communal corridors, stairwells, managed co-working zones and
                shared business centre spaces. Managed building common areas are often the only part of the building
                the landlord controls directly — and the quality of the installation reflects on the landlord&apos;s
                brand across every tenant.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why property management is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Why property management installation is different from standard commercial work
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Managed commercial properties have constraints that do not apply on a standard single-site commercial install.
            Understanding these constraints — and operating within them without needing constant guidance from the
            property manager — is what separates a reliable FM installation partner from one who creates problems.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Occupied building access</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Most managed commercial property work happens in occupied buildings. This means working around tenant
                business hours, managing noise and disruption in shared areas, maintaining access to common parts without
                blocking tenant movement, and completing installs without triggering tenant complaints to the property
                manager. We are experienced in occupied building installation and manage the on-site variables — without
                calling the property manager every time a tenant objects to a ladder in the corridor.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Permit to work &amp; building induction</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Grade A and Grade B commercial offices, managed business parks and multi-tenant buildings frequently
                operate permit-to-work systems for external contractors, including induction requirements and method
                statement submission. We maintain current RAMS documentation for vinyl installation work and can
                complete building-specific inductions as required by the property management company or FM contractor.
                This is routine — not an obstacle.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Out-of-hours &amp; weekend access</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Many managed property vinyl installs — particularly wayfinding refreshes in occupied common areas,
                tenant rebrand graphics in active suites, and anything that involves access to building services
                areas — need to happen outside core business hours. We accommodate early morning, evening and weekend
                installation slots for property management work where building access requires it.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Substrate variation across a portfolio</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Managed portfolios typically contain buildings of different ages, construction types and finishes.
                Wayfinding vinyls need to adhere to powder-coated aluminium panels in a modern Grade A office and
                to painted blockwork in a 1980s business park unit. We carry out pre-installation substrate assessments
                as standard for managed property work — flagging any adhesion or application issues before material
                is printed, not after it is on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Geographic coverage — one subcontract across your managed portfolio
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            One of the most common frustrations for property management companies with geographically spread portfolios
            is sourcing a different local installer for every city — each with different rates, documentation standards,
            lead times and reliability. WRPX covers the Yorkshire and Midlands corridor as a single subcontract, removing
            that co-ordination burden.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "South Yorkshire", detail: "Sheffield, Doncaster, Rotherham, Barnsley", href: "/subcontract-vinyl-installation-yorkshire/" },
              { label: "West Yorkshire", detail: "Leeds, Bradford, Wakefield, Huddersfield", href: "/subcontract-vinyl-installer-leeds/" },
              { label: "East Midlands", detail: "Nottingham, Derby, Leicester, Lincoln", href: "/subcontract-vinyl-installer-nottingham/" },
              { label: "Birmingham & West Mids", detail: "Birmingham, Coventry, Walsall", href: "/subcontract-vinyl-installer-birmingham/" },
              { label: "Black Country", detail: "Wolverhampton, Dudley, West Bromwich", href: "/subcontract-vinyl-installer-wolverhampton/" },
              { label: "North Yorkshire", detail: "York, Harrogate, surrounding areas", href: "/subcontract-vinyl-installer-york/" },
            ].map(({ label, detail, href }) => (
              <Link key={label} href={href} className="card-float block bg-background p-5 hover:border-accent transition-colors">
                <p className="font-semibold text-foreground">{label}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How the subcontract arrangement works for property management
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Property management and FM subcontract work runs on a slightly different cadence from a one-off commercial
            install. The practical structure that works best:
          </p>
          <div className="mt-8 space-y-4">
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Standing arrangement — agreed rates and response times</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For property management companies or FM contractors with regular or ongoing vinyl graphics demand,
                we can establish a standing arrangement — agreed rates for common installation types, agreed
                response times for reactive work, and a documented escalation process for urgent installs. This
                removes the need to re-negotiate every job and gives you confidence in cost and lead time before
                you commit to your client.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Portfolio schedule — planned programmes co-ordinated in advance</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For planned programmes — wayfinding refresh across a business park, building rebrand following
                portfolio sale, scheduled tenant graphics updates — we work from your programme schedule. Buildings
                are batched by geography to reduce travel cost, and installation is sequenced to minimise disruption
                across the managed estate.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Reactive jobs — standard briefing process, fast turnaround</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reactive property management installs — damaged wayfinding, urgent tenant rebrand, new tenant graphics
                at handover — are handled on a standard briefing: site address, substrate, material spec, access
                constraints, deadline. We confirm availability and a date quickly, typically within one working day
                of the brief being received.
              </p>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Documentation — per building and per job</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Every installation generates a photographic record — pre-installation, during and completed sign-off.
                For managed property work, this documentation is formatted to your property management record
                standard and can be supplied per building reference, per job reference or per tenant suite as your
                system requires. The record supports your compliance documentation and provides a condition baseline
                for future works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related B2B installation services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/wayfinding-graphics-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Wayfinding graphics installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Directional systems, floor and door level identification, lift lobby and stairwell vinyls — wayfinding
                installation across managed buildings and commercial estates.
              </p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Co-ordinated installation programmes across multiple properties or buildings — same standard, consolidated
                documentation, single subcontract point of contact.
              </p>
            </Link>
            <Link href="/office-graphics-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Office &amp; corporate graphics installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Office interior vinyls, partition graphics, reception branding, boardroom graphics and corporate
                identity installations across managed commercial office buildings.
              </p>
            </Link>
            <Link href="/commercial-installation/" className="card-float block bg-background p-6 hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground">Commercial installation hub</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Full overview of WRPX commercial subcontract installation — services, regions, how white-label working
                operates, and how to set up a subcontract arrangement.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Subcontract vinyl installation across your managed property portfolio
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Property management company, FM contractor or commercial landlord with vinyl graphics installation needs
            across a multi-site portfolio? Contact us to discuss a standing arrangement or a specific project brief —
            we will confirm coverage and rates quickly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a property management subcontract
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
            to discuss your property management subcontract requirements directly.
          </p>
        </div>
      </section>
    </div>
  );
}
