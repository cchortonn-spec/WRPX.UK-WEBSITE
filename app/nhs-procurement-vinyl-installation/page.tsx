import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "NHS Procurement Vinyl Installation — Healthcare Estates & Framework Contracts | WRPX",
  description:
    "Subcontract vinyl graphics installation for sign companies and fit-out contractors working within NHS procurement frameworks and NHS Trust approved supplier chains. WRPX installs wayfinding, department identity and wall graphics in NHS settings — infection control aware, out-of-hours, white-label.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/nhs-procurement-vinyl-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "NHS procurement vinyl installation — healthcare estates framework contracts",
  "Subcontract vinyl graphics installation for sign companies, fit-out contractors and print management firms working within NHS procurement frameworks, NHS Trust approved supplier chains and PFI hospital estates. Wayfinding systems, department identity graphics, clinical area vinyls and estates refresh programmes — infection control aware, out-of-hours by default, white-label throughout."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Healthcare Graphics Installation", item: "https://www.wrpx.co.uk/healthcare-graphics-installation/" },
    { "@type": "ListItem", position: 4, name: "NHS Procurement Vinyl Installation", item: "https://www.wrpx.co.uk/nhs-procurement-vinyl-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you work as a subcontract installer on NHS framework contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — WRPX works as a subcontract installation partner for sign companies, print management firms and fit-out contractors who hold or are operating under NHS procurement frameworks and NHS Trust approved supplier arrangements. You maintain the client relationship and the framework compliance; WRPX installs the vinyl graphics element on site under your brand and to your specification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you understand infection control requirements for working in NHS clinical areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — working in occupied NHS environments requires a different approach from standard commercial installation. We understand the requirement to follow infection prevention and control (IPC) protocols on site, including PPE requirements specific to clinical zones, the constraints on using wet application fluids near patient areas, equipment decontamination between zones, and the access permit and induction requirements that NHS Trusts typically apply to estates contractors. We flag any IPC-relevant considerations in the pre-installation brief rather than discovering them on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install NHS wayfinding systems on subcontract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — wayfinding and department identity graphics are among the most common NHS estates vinyl projects. This includes department colour-coded directional systems, vinyl applied to existing wayfinding frames, floor-to-ceiling department header graphics, lift lobby identification vinyls, and patient navigation graphics across large hospital estates. We install to the specification supplied — whether that is a full wayfinding system refresh or individual department identity vinyls as part of a phased programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you carry out NHS installation work out of hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours installation is standard practice in NHS environments. Clinical areas, wards, outpatient departments and public corridors in operating hospitals cannot accommodate installation work during core hours. We install during nights, early mornings and weekend slots, working with your site manager and the NHS Trust estates contact to arrange access, infection control induction sign-off and contractor management system registration. The installation schedule is built around the Trust's operational pattern, not ours.",
      },
    },
    {
      "@type": "Question",
      name: "What NHS contractor management systems do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS Trusts and their PFI estates management partners use a range of contractor management and site induction systems — including Veriforce, Alcumus SafeContractor, Smartlog, and Trust-specific permit-to-work systems. As a subcontract installer operating under your framework arrangement, we follow the contractor registration and induction process specified by the Trust for each project. Advance paperwork, photo ID, method statement submission and DBS requirements are managed as part of the standard pre-job briefing process.",
      },
    },
  ],
};

export default function NhsProcurementVinylInstallationPage() {
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
            Healthcare Estates · NHS Framework Contracts · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            NHS Procurement Vinyl Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, fit-out contractors and print management firms</strong>{" "}
            operating under NHS procurement frameworks, NHS Trust approved supplier arrangements and
            PFI hospital estates contracts. We install wayfinding systems, department identity graphics,
            clinical area vinyls and estates refresh programmes in NHS environments — infection control
            aware, out-of-hours as standard, white-label throughout.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">NHS-environment installation as standard</strong>{" "}
                — infection control protocols, contractor management system induction, permit-to-work compliance
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Out-of-hours and night-shift installation for occupied clinical areas and live wards</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — NHS Trust sees your company, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — substrate knowledge, regulatory awareness, full photo sign-off
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss an NHS installation project
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

      {/* Why NHS is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why NHS estates work requires a specialist installation approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              NHS buildings are not standard commercial environments, and installation work in them
              cannot be approached as if they were. An NHS acute hospital is a 24-hour operational
              site where patient safety and infection control take precedence over every contractor
              requirement. The estates and facilities management function within an NHS Trust exists
              to enable that operational environment — not to accommodate contractors on the schedule
              that suits the contractor.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company or fit-out contractor managing an NHS graphics contract, the practical
              consequences are significant. Installation access to clinical areas is not granted on
              request — it requires advance notification to the estates team, a method statement
              submitted and approved, a site induction completed under the Trust&apos;s contractor
              management system, and in many cases, a permit-to-work issued for each zone. The
              induction and permit process is not bureaucratic friction; it is the mechanism by which
              the Trust manages infection risk and patient safety in areas where contractors are working.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Wet application fluids used in standard vinyl installation are a COSHH-notifiable substance
              in clinical environments. In zones with immunocompromised patients — oncology wards,
              haematology units, transplant wards, neonatal intensive care — even the application fluid
              residue on a squeegee creates an IPC question. A subcontract installer who understands
              NHS infection prevention and control requirements will apply dry installation techniques
              where wet methods are restricted, use only IPC-approved materials in clinical zones,
              and clean down and decontaminate equipment between clinical and non-clinical areas.
              One who treats NHS work like office work creates a risk the framework contractor carries.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              NHS Trusts also operate under strict procurement governance. If you have won an NHS
              graphics contract through a Crown Commercial Service framework, an NHS Supply Chain
              route, or a Trust-direct approved supplier arrangement, your subcontract chain needs
              to be able to evidence competence, method statements and insurance to the standard
              the procurement framework requires. We are installation-only. You hold the framework
              relationship and the client-facing contract. We install under your brand, to your spec,
              and feed back the documentation your compliance team needs.
            </p>
          </div>
        </div>
      </section>

      {/* NHS procurement frameworks */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              NHS procurement frameworks — what contractors need to know
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              NHS graphics and wayfinding contracts are won through several distinct procurement routes,
              each with its own compliance and documentation requirements. Understanding where your
              contract sits in the procurement structure determines what your subcontract chain
              needs to be able to demonstrate.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground">Crown Commercial Service (CCS) frameworks</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  CCS frameworks — including RM6232 (print and related services) and related creative
                  and marketing procurement routes — are used by NHS Trusts and NHS England bodies
                  to procure design, print and signage services. Contractors operating under CCS
                  frameworks typically need subcontract chains that meet the same supplier approval
                  standards as the prime contractor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">NHS Supply Chain and SBS routes</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  NHS Supply Chain and NHS Shared Business Services (SBS) operate category-specific
                  procurement routes for estates goods and services. Wayfinding systems, signage
                  and graphics contracts procured through these routes typically sit within the
                  Estates &amp; Facilities Management category and are subject to NHS-specific
                  supplier approval requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Trust-direct approved supplier lists</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Many NHS Trusts maintain their own approved supplier lists (ASLs) for estates
                  and FM services, used for direct award contracts below OJEU thresholds and for
                  framework call-offs. Contractors on a Trust ASL who need a subcontract installer
                  need that installer to be able to meet the Trust&apos;s supplier registration
                  and site induction requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">PFI hospital estate contracts</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  PFI (Private Finance Initiative) hospital buildings are managed by a private estates
                  management company — typically a joint venture between the construction contractor
                  and an FM operator — under a long-term contract with the NHS Trust. Graphics and
                  wayfinding work in PFI buildings goes through the estates management company,
                  which has its own contractor approval and site management processes separate
                  from the Trust&apos;s direct procurement route.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            NHS vinyl graphics we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">NHS wayfinding systems</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Department colour-coded directional vinyls, floor-level navigation graphics, lift lobby
                identification, corridor zone vinyls and patient navigation systems applied to
                existing wayfinding frames or directly to wall and floor surfaces. Installed in
                sequence with the wayfinding design system — zone by zone, floor by floor — to
                maintain wayfinding continuity during a phased programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Department identity &amp; clinical area graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Department header graphics, clinical zone identification vinyls, reception and
                waiting area wall graphics, staff zone branding and NHS estate identity vinyls.
                Applied in clinical areas using infection control-approved methods — dry application
                techniques where IPC requirements restrict wet fluid use, equipment decontamination
                between zones, and full COSHH compliance on all materials used on site.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                  Healthcare graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hospital window graphics &amp; privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted privacy film, one-way vision film, manifestation film and window graphics
                on patient-facing, staff and public windows across NHS estates. Clinical environments
                require privacy film that meets HTM (Health Technical Memorandum) surface specification
                requirements — we advise on compatible products for clinical zone windows and glazed
                partitions where specialist film types are required.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor vinyls &amp; anti-slip graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Floor graphics and directional floor vinyls in hospital corridors, entrances, waiting
                areas and public-access zones. Floor graphics in NHS public areas must meet the
                appropriate anti-slip rating — R9 or above for dry areas, R11 for areas subject
                to water or cleaning fluid contamination. We specify and install to the correct
                anti-slip rating for each location and use type.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Estates refresh &amp; rebrand programmes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Phased NHS estates refresh programmes — removing legacy wayfinding vinyls, applying
                updated department identity, refreshing colour-coded zone systems across multi-floor
                or multi-building hospital sites. Managed as a programme rather than a series of
                individual jobs, with consolidated documentation for each phase and a single point
                of contact for the sign company or fit-out contractor managing the contract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">GP surgery &amp; primary care estates</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding, patient information graphics and reception area vinyls in GP surgeries,
                health centres, community hospitals and primary care network hubs. Primary care
                premises are procured and managed differently from acute NHS estates — many operate
                as leaseholder practices or PCN-managed premises without the full contractor management
                infrastructure of an acute Trust. We work with the practice manager or the building
                landlord&apos;s managing agent to arrange access and installation around surgery hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who this service is for
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              This is a B2B subcontract installation service for businesses that design, supply or
              manage NHS graphics programmes and need a specialist vinyl installer to handle the
              site installation element.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies on NHS approved supplier lists</strong>{" "}
                  — design and manufacture the wayfinding, department identity or graphics system;
                  WRPX installs the vinyl elements across the NHS estate under your brand.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Fit-out contractors on NHS Trust contracts</strong>{" "}
                  — managing a ward refurbishment, department reconfiguration or new-build
                  fit-out; vinyl graphics installation subcontracted to WRPX as part of the
                  broader programme, slotted in at the right stage around other trades.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Print management firms supplying NHS clients</strong>{" "}
                  — supplying large-format print to NHS Trust procurement or to a wayfinding
                  system manufacturer; WRPX provides the site installation element under
                  your trade arrangement, white-label, with full IPC compliance documentation.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Wayfinding and environmental graphics consultancies</strong>{" "}
                  — designing or specifying NHS wayfinding systems and needing a specialist
                  installation partner for the Yorkshire and East Midlands NHS estates in the programme.
                </div>
              </li>
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;You hold the framework relationship. WRPX installs to your spec, under your name,
              and gives you the documentation your compliance team needs.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              NHS installation coverage — South Yorkshire &amp; East Midlands
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install NHS vinyl graphics on a subcontract basis across NHS Trusts, primary care
              estates and community health buildings in South Yorkshire, West Yorkshire and the East
              Midlands — covering Sheffield Teaching Hospitals, Barnsley, Rotherham Doncaster and
              Bassetlaw (RDB), Calderdale and Huddersfield, Leeds Teaching Hospitals, Nottingham
              University Hospitals, Derby, Leicester and surrounding community and primary care sites.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Doncaster · Rotherham · Barnsley · Nottingham · Derby · Leicester · Wakefield
              </strong>{" "}
              and the wider South Yorkshire, West Yorkshire and East Midlands NHS estate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                Healthcare graphics installation
              </Link>
              <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                Wayfinding graphics installation
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — NHS procurement vinyl installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Can you work as a subcontract installer on NHS framework contracts?",
                a: "Yes — WRPX works as a subcontract installation partner for sign companies, print management firms and fit-out contractors operating under NHS procurement frameworks and NHS Trust approved supplier arrangements. You hold the framework relationship; WRPX installs the vinyl graphics element on site under your brand.",
              },
              {
                q: "Do you work to NHS infection control requirements?",
                a: "Yes — we follow infection prevention and control (IPC) protocols on NHS sites, including PPE requirements in clinical zones, dry application techniques where wet fluid use is restricted, equipment decontamination between clinical and non-clinical areas, and COSHH compliance for all materials. IPC constraints are discussed as part of the pre-installation brief.",
              },
              {
                q: "Can you install NHS wayfinding systems on subcontract?",
                a: "Yes — NHS wayfinding and department identity graphics are among the most common NHS estates projects we install. This includes department colour-coded directional systems, floor navigation graphics, lift lobby identification, corridor zone vinyls and patient wayfinding graphics across large NHS estates.",
              },
              {
                q: "Do you carry out NHS installation work out of hours?",
                a: "Yes — out-of-hours installation is standard practice in NHS environments. Clinical areas and occupied hospital departments cannot accommodate installation work during core hours. We install during nights, early mornings and weekend slots, working with your site manager and the NHS Trust estates contact to arrange access and contractor induction in advance.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-background p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              NHS procurement installation — let&apos;s discuss your contract
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the Trust, the scope, the access constraints and your programme timeline.
              We&apos;ll confirm availability and give you a clear installation quote for the
              vinyl element of your NHS contract.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Contact WRPX
              </Link>
              <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                Healthcare graphics installation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
