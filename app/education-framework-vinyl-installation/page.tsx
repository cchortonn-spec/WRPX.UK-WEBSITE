import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Multi-Academy Trust Vinyl Installation — MAT Graphics Programmes | WRPX",
  description:
    "Subcontract vinyl installation for multi-academy trust (MAT) graphics programmes. WRPX installs trust-wide wall graphics, wayfinding, sports and faculty vinyls across multiple academy schools — DBS-checked, term-time scheduling, white-label, consistent standards across every site.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/education-framework-vinyl-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Multi-academy trust vinyl installation — MAT graphics programmes across multiple academy schools",
  "Subcontract vinyl installation for multi-academy trust (MAT) graphics rollouts across South Yorkshire, the East Midlands and the M6 corridor. WRPX installs trust-wide wall graphics, wayfinding vinyls, sports hall graphics and faculty identity across multiple academy school sites — DBS-checked installers, term-time and holiday scheduling, white-label, photographic sign-off on every site."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Education Graphics Installation", item: "https://www.wrpx.co.uk/education-graphics-installation/" },
    { "@type": "ListItem", position: 4, name: "Multi-Academy Trust Vinyl Installation", item: "https://www.wrpx.co.uk/education-framework-vinyl-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a MAT vinyl installation programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A multi-academy trust (MAT) vinyl installation programme is a co-ordinated rollout of vinyl graphics — wall art, wayfinding, sports hall graphics, faculty identity vinyls — across multiple academy schools within a single trust. Rather than treating each school as a separate job, WRPX plans and delivers the programme across all sites under one subcontract arrangement, with consistent installation standards, scheduling co-ordinated around term times and holidays, and consolidated photographic sign-off documentation across every academy site.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS-checked for work in schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — all WRPX installers working in school environments hold current DBS (Disclosure and Barring Service) checks appropriate for working in educational settings. We never send unchecked personnel into a school or academy site. If the trust or the lead contractor requires documentation evidence before access is granted, we provide it as standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule MAT installations around term times and school holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — term-time and holiday scheduling is standard for all education graphics work. For MAT programmes, we co-ordinate with the trust estates manager or project co-ordinator to schedule across the academic calendar, prioritising holiday periods (half-term, Easter, summer) for major installations, and early-morning or Saturday slots for minor refreshes that cannot wait for a holiday window. We plan the multi-site sequencing to match each academy's individual access constraints.",
      },
    },
    {
      "@type": "Question",
      name: "How do you maintain consistent standards across multiple academy sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The same installation team covers every site in the MAT programme. Pre-installation substrate assessments are carried out at each academy before material is produced — so the same spec instruction sheet governs the installation at every site. Photographic documentation (pre-installation, installation-in-progress and completed sign-off) is produced to the same format at every academy, giving the trust a consistent record across the full programme.",
      },
    },
    {
      "@type": "Question",
      name: "Which regions do you cover for MAT installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover South Yorkshire, West Yorkshire, the East Midlands (Nottingham, Derby, Leicester, Lincoln), North Staffordshire and extending into the West Midlands via the M6 corridor. MAT programmes often span a geographic corridor of school sites — we plan the installation sequencing to minimise travel between academies, reducing the cost and duration of each trip across the programme. If the trust has academies spread across the Yorkshire and Midlands belt, we can cover the full programme under one subcontract.",
      },
    },
  ],
};

export default function EducationFrameworkVinylInstallationPage() {
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
            Multi-Academy Trust · Education Sector · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Multi-Academy Trust Vinyl Installation — MAT Graphics Programmes
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX installs trust-wide vinyl graphics programmes across multiple academy schools —
            wall art, wayfinding, sports hall graphics, faculty identity vinyls and corridor
            displays — for{" "}
            <strong className="text-foreground">sign companies, print suppliers and fit-out contractors</strong>{" "}
            managing MAT graphics contracts. DBS-checked installers, term-time and holiday scheduling,
            consistent standards at every academy site, photographic sign-off documentation at
            completion.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">DBS-checked installers</strong>{" "}
                — verified for all school and academy environments before site access
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Term-time and holiday scheduling — co-ordinated with the trust estates team</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Same installation team across every academy — consistent standards, not academy-by-academy variation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — the trust sees your company throughout; WRPX works behind you</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, surface assessment, no guesswork
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a MAT installation programme
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

      {/* Why MAT programmes are different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why MAT vinyl installation programmes need a different approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A multi-academy trust graphics programme is not a collection of individual school jobs.
              It is a single programme with a trust-wide brief, a consolidated budget, a central
              approval structure — and the expectation that every academy in the trust receives an
              installation that meets the same standard, regardless of the individual building&apos;s
              substrate quirks, access constraints or timetable pressures.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The practical challenge for sign companies and print suppliers managing MAT contracts
              is not the design or the print — it is the installation logistics. Academies within
              the same trust can have wildly different buildings: a Victorian primary school with
              painted brick walls, a 1970s secondary with polished block corridors, and a PFI new-build
              with smooth painted plasterboard — each requiring different surface preparation, different
              primer specifications and different installation techniques to achieve the same visual
              outcome. Using a single installer across all sites means these substrate differences
              are identified and communicated back before material is produced, not after a failed
              installation has wasted print budget and delayed the programme.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Scheduling is the other dimension. MAT programmes rarely allow all academies to be
              accessed at the same time. Holiday windows are the preferred access period — but
              different academies within a trust often have slightly different holiday dates, school
              closure days and building access arrangements. Sequencing the installation visits
              across the trust requires someone to co-ordinate with the estates team at each academy,
              confirm access permissions, arrange key-holder arrangements and build a programme
              schedule that gets the most academies completed in the fewest trips. This is operational
              planning work — not just vinyl application.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX approaches MAT programmes as the operational delivery partner for the sign company
              or print supplier holding the contract. We carry out the pre-installation substrate
              surveys across the academy sites, feed back substrate conditions and surface preparation
              requirements before material is produced, schedule the installation visits in co-ordination
              with the trust estates team, and deliver photographic documentation at the same standard
              across every academy.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What WRPX installs in MAT programmes
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Corridor &amp; wall vinyl graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Inspirational quote vinyls, motivational wall art, curriculum-led wall graphics,
                subject-specific corridor displays and large-format wall murals. The core product
                of most MAT programmes — applied consistently across every academy regardless of
                individual wall substrate. Painted plaster, painted block, MDF panels and glazed
                wall surfaces all handled.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; internal signage vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Trust-wide wayfinding vinyl systems — department labels, room identification,
                directional vinyls, entrance graphics and office and reception identity. Applied
                consistently across all academies in the trust, maintaining visual coherence
                between sites while accommodating individual building layouts. Substrate variety
                in older academy buildings assessed and managed before installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sports hall &amp; MUGA graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sports hall wall graphics, inspirational sporting vinyls, team identity displays,
                scoreboard vinyls, floor graphics and MUGA court markings across academy sports
                facilities. Holiday period installation standard to avoid disruption to PE
                lessons. Anti-slip specification confirmed for any floor application.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/sports-leisure-graphics-installation/" className="text-accent hover:underline">
                  Sports &amp; leisure graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Faculty &amp; department identity vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Department identity graphics applied to classroom doors, corridor walls and
                faculty entrances across academy secondary schools — English, Maths, Science,
                Arts and Technology faculty zones each given a consistent visual identity. Rolled
                out across every secondary academy in the trust to the same specification under
                a single programme schedule.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; manifestation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, frosted film and safety manifestation vinyls across academy
                buildings — glazed entrance screens, corridor partitions, office windows and
                classroom glazing. Regulatory safety manifestation applied to current BS 6262
                standard. Applied consistently across every academy in the programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">External &amp; entrance graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Academy entrance signage vinyls, external wall graphics, perimeter fence graphics
                and reception area brand vinyls. External substrate assessment — external surfaces
                require appropriate primer and film specification for UV and weather resistance.
                Trust branding applied to a consistent standard across every academy entrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we run a MAT programme */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              How WRPX runs a multi-academy trust installation programme
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-semibold text-foreground">Pre-programme substrate survey</p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Before material is produced, we visit each academy in the programme (or work from
                    surface condition reports where remote assessment is acceptable) to document wall
                    substrates, identify any surfaces needing preparation primer, and flag any access
                    or installation constraints specific to that building. This information feeds
                    directly into the material specification, preventing substrate failures after
                    print has already been committed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-semibold text-foreground">Programme scheduling with the trust estates team</p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    We co-ordinate with the trust estates manager or the designated project co-ordinator
                    to build an installation schedule that maps each academy against its available
                    access windows — prioritising holiday periods, sequencing geographically to
                    minimise travel between academies, and building in contingency for late material
                    delivery or access changes. The schedule is agreed before installation begins,
                    not improvised academy by academy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-semibold text-foreground">Installation — same team, every academy</p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    The same installation team covers every academy in the programme. DBS checks
                    provided at every site before access is granted. Installation carried out to
                    the same spec instruction sheet across every academy — same surface preparation
                    process, same application technique, same finish standard. No variation between
                    academies caused by using different installation personnel.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <p className="font-semibold text-foreground">Photographic sign-off — per academy</p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    At every academy, we produce photographic documentation under the agreed sign-off
                    format: pre-installation surface condition, installation-in-progress, and
                    completed sign-off shots covering all installed elements. The photo pack is
                    delivered academy by academy as the programme progresses, giving the sign company
                    or print supplier consolidated evidence of delivery across the full trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who subcontracts MAT installation work to WRPX
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Sign companies</strong> holding trust-wide graphics contracts — they supply the design and print, WRPX delivers the installation programme across every academy under their brand
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Print management firms</strong> supplying wall art, wayfinding and corridor graphics to MATs — WRPX provides the installation expertise that completes the contract
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Education specialist suppliers</strong> — companies focused on educational graphics and inspirational wall art who need a reliable installation subcontractor for their school programmes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Fit-out contractors</strong> managing academy school refurbishment programmes who need a vinyl installation specialist integrated into the programme at the graphics and wayfinding stage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Framework suppliers</strong> operating under local authority or education procurement framework contracts — WRPX provides the installation delivery arm across the geographic coverage area
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Related education and B2B installation services
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/education-graphics-installation/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Education Graphics Installation</p>
                <p className="mt-1 text-sm text-muted">Schools, colleges and universities — all education sector vinyl installation</p>
              </Link>
              <Link href="/wayfinding-graphics-installation/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Wayfinding Graphics Installation</p>
                <p className="mt-1 text-sm text-muted">Directional and wayfinding vinyl systems for any building type</p>
              </Link>
              <Link href="/multi-site-rollout-installation/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Multi-Site Rollout Installation</p>
                <p className="mt-1 text-sm text-muted">Co-ordinated installation programmes across multiple sites</p>
              </Link>
              <Link href="/sports-leisure-graphics-installation/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Sports &amp; Leisure Graphics</p>
                <p className="mt-1 text-sm text-muted">Sports hall graphics, floor vinyls and facility branding</p>
              </Link>
              <Link href="/commercial-installation/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Commercial Installation Overview</p>
                <p className="mt-1 text-sm text-muted">Full B2B subcontract installation — all sectors and services</p>
              </Link>
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="group block rounded border border-border bg-background p-4 hover:border-accent/40 transition-colors">
                <p className="font-medium text-foreground group-hover:text-accent">Yorkshire Subcontract Hub</p>
                <p className="mt-1 text-sm text-muted">South Yorkshire base — city coverage across Yorkshire and the Midlands</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — multi-academy trust vinyl installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What is a MAT vinyl installation programme?",
                a: "A multi-academy trust (MAT) vinyl installation programme is a co-ordinated rollout of vinyl graphics — wall art, wayfinding, sports hall graphics, faculty identity — across multiple academy schools within a trust. WRPX plans and delivers the programme across all sites under one subcontract, with consistent installation standards, holiday scheduling and consolidated photographic sign-off at every academy.",
              },
              {
                q: "Are your installers DBS-checked for school environments?",
                a: "Yes — all WRPX installers working in school and academy environments hold current DBS checks. Documentation is provided to the trust or the lead contractor before access is granted at any academy site.",
              },
              {
                q: "How do you schedule installations across multiple academies?",
                a: "We co-ordinate with the trust estates manager or project co-ordinator to build a schedule mapped against each academy's access windows — holiday periods, school closure days, early-morning slots. The schedule is sequenced geographically to minimise travel between academies and agreed before installation begins.",
              },
              {
                q: "Which regions do you cover for MAT programmes?",
                a: "South Yorkshire, West Yorkshire, the East Midlands (Nottingham, Derby, Leicester, Lincoln), North Staffordshire and extending into the West Midlands via the M6 corridor. MAT programmes spanning the Yorkshire and Midlands belt are covered under one subcontract arrangement.",
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
      <section className="px-4 pb-20 pt-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a MAT graphics installation programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the trust, the number of academies, the regions covered and the brief.
              We&apos;ll confirm coverage and give you a straightforward installation quote
              across the full programme.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Discuss a MAT programme
              </Link>
              <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                Education graphics installation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
