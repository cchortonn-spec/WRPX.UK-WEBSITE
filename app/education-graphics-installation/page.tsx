import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Education Graphics Installation — Schools, Colleges & Universities | WRPX",
  description:
    "Subcontract vinyl graphics installation for education sector sign companies, print firms and fit-out contractors. WRPX installs inspirational wall graphics, wayfinding vinyls, sports graphics and window film across schools, colleges and universities — white-label, term-time scheduling, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/education-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Education graphics installation — schools, colleges and universities vinyl for sign companies and fit-out contractors",
  "Subcontract vinyl graphics installation for the education sector across South Yorkshire and the East Midlands. WRPX installs inspirational wall graphics, corridor vinyls, wayfinding, sports hall graphics and window film in schools, FE colleges and universities — white-label, term-time scheduling, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Education Graphics Installation", item: "https://www.wrpx.co.uk/education-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of education vinyl graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install inspirational quote and motivational wall vinyls, corridor wayfinding graphics, school branding vinyls, sports hall floor and wall graphics, window graphics and frosted film, and large-format feature wall murals. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work during school term time or holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both — we co-ordinate with your site contact to schedule around the school's calendar. Holiday installs (half-term, Easter, summer) allow uninterrupted access to corridors and classrooms. For urgent refreshes during term time, we schedule early morning or phased installation to minimise disruption to teaching.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand on education fit-out contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your site manager. The school, college or university sees your company throughout. We provide photographic documentation at completion under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "Which education environments do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primary and secondary schools, academies, sixth form colleges, further education colleges, universities and specialist schools. We cover South Yorkshire, West Yorkshire and the East Midlands — Sheffield, Leeds, Doncaster, Rotherham, Barnsley, Nottingham, Derby and surrounding areas.",
      },
    },
  ],
};

export default function EducationGraphicsInstallationPage() {
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
            Education &amp; Schools · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Education Graphics Installation — Schools, Colleges &amp; Universities
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, fit-out contractors and print management firms</strong>{" "}
            delivering graphics programmes in schools, colleges and universities. We install inspirational
            wall graphics, wayfinding vinyls, sports graphics, window film and corridor branding on a
            subcontract basis — white-label, term-time or holiday scheduling, with photographic sign-off
            on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Education sector experience</strong>{" "}
                — term-time scheduling, site access co-ordination, safeguarding-aware site conduct
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — school sees your company, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Photo documentation at each stage — surface prep, installation, completion sign-off
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — substrate assessment, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss an education graphics project
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

      {/* Why Education is Different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why education installation requires a different approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Schools, colleges and universities are not standard commercial environments. Access
              windows are dictated by the academic calendar — the most productive installation
              windows are half-term, Easter and summer holidays, but urgent refurbishments and new
              build fit-outs often require phased term-time working. Briefing a subcontract installer
              who doesn&apos;t understand this creates friction: jobs miss the holiday window,
              access conflicts with teaching, or work starts during exam periods when no disruption
              whatsoever is acceptable.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Safeguarding and site conduct expectations in education settings are strict. Installers
              work in corridors alongside pupils and staff. The behaviour, presentation and conduct
              of anyone on site reflects on the design or sign company who placed them there.
              WRPX operates to the site rules your school client sets — supervised access, no
              independent movement through teaching areas, quiet working during lessons.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Substrate variety in older school buildings is significant. Victorian and post-war
              school construction produces unpredictable painted brickwork, dusty render and
              surfaces that have been repainted many times without proper preparation. We assess
              surfaces before committing to installation, feed the condition back to your team,
              and do not paper over substrate problems that will cause adhesion failure within
              months.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You design, print and supply the material. We assess the
              substrate, install to spec and hand back a full photographic completion record. The
              school or college sees your company throughout.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Education graphic types we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Inspirational &amp; motivational wall graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format typographic vinyls, values statements, quote walls and achievement
                displays — a staple of school corridor and reception design. Applied to painted
                plaster, brick and timber surfaces. Substrate assessed and surface conditions
                reported before installation starts. Where walls are unsuitable for direct vinyl
                application, we flag the issue rather than proceed and create a future adhesion problem.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor directional vinyls, room identification graphics, colour-coded zone systems
                and floor direction arrows for school, college and university campuses. Vinyl
                elements installed as part of a wider wayfinding scheme designed by your team —
                we install the vinyl component, you manage the total scope.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sports hall &amp; gym graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall vinyls and feature graphics for school sports halls, PE departments and
                fitness suites. Large-format wall installs on block and painted render surfaces,
                motivational graphics in gym areas and sports court identification markings.
                Anti-slip floor graphics for sports surfaces where specified.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; manifestation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film and glass manifestation for school office glazing, staff room partitions
                and public-facing windows. Branded window graphics for reception areas and main
                entrances. Cut vinyl manifestation dots where full coverage film isn&apos;t specified.
                Installed cleanly with no bubbles and edge-to-edge finish.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Reception &amp; entrance branding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                School or university brand vinyls, mission statement walls, founder and values
                graphics for main reception and entrance areas. Large-format feature walls on
                painted plaster and composite panel surfaces. Installed under your brand — the
                school sees your company throughout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-building campus rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Further education colleges and universities with multiple buildings or sites across
                a single campus or across multiple campuses in South Yorkshire and the East Midlands.
                One installation partner, consistent standards across every building, consolidated
                photo documentation across the whole programme. Sheffield, Leeds, Doncaster and
                Nottingham campuses all covered under a single subcontract arrangement.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who this service is for
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              This is a B2B subcontract service. The right buyer is a business that wins education
              graphic supply or fit-out contracts and needs an experienced vinyl installer to handle
              the installation component on site.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies and signage contractors</strong>{" "}
                  — you design and manufacture the graphics; WRPX installs the vinyl elements at
                  the school or university under your brand.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Fit-out and refurbishment contractors</strong>{" "}
                  — vinyl graphics as a subcontract package within a wider school or college
                  refurbishment programme. We slot in at the right stage of your build programme.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Print management firms</strong>{" "}
                  — you supply the printed material through a framework agreement with the education
                  authority or multi-academy trust; WRPX handles installation at each site.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Brand and graphic design agencies</strong>{" "}
                  — delivering a school or university brand environment project; WRPX installs the
                  final output white-label, feeding back photo completion records to your team.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground">
              Education graphics coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install education graphics on a subcontract basis across South Yorkshire, West
              Yorkshire and the East Midlands — covering schools, colleges and universities in
              Sheffield, Rotherham, Doncaster, Barnsley, Leeds, Wakefield, Huddersfield, Nottingham,
              Derby and surrounding areas.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield Hallam University · University of Sheffield · University of Leeds
                · Leeds Beckett · Nottingham Trent · University of Nottingham · Sheffield College
                · Barnsley College
              </strong>{" "}
              campuses and the wider South Yorkshire, West Yorkshire and East Midlands education estate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                Wayfinding graphics installation
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/healthcare-graphics-installation/" className="text-accent hover:underline">
                Healthcare graphics installation
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — education vinyl graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of education vinyl graphics do you install?",
                a: "Inspirational wall graphics, motivational quote vinyls, corridor wayfinding, room identification, colour-coded zone vinyls, sports hall graphics, window graphics and manifestation film, reception and entrance branding. We are installation-only — you supply the material, we install to spec.",
              },
              {
                q: "Do you work during school term time or holidays?",
                a: "Both — we work to the school's calendar. Holiday windows are ideal for uninterrupted access. For urgent work during term time, we schedule early morning or phased access to minimise disruption. Exam periods are flagged and avoided as standard.",
              },
              {
                q: "Can you work under our brand on education contracts?",
                a: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your site manager. The school or university sees your company throughout. Photographic documentation provided at completion under your agreed sign-off format.",
              },
              {
                q: "How do you handle substrates in old school buildings?",
                a: "We assess substrate conditions before committing to installation. Older school buildings often have walls painted many times on top of brick or render — adhesion compatibility varies. We flag substrate concerns to your team before work starts and do not force material onto a surface that will cause adhesion failure within months.",
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
              Education graphics installation — let&apos;s discuss your project
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the school or campus, the scope, access windows and your timeline.
              We&apos;ll confirm availability and give you a clear installation quote for the
              vinyl element of your programme.
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
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
