import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Leicester | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Leicester — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Leicester LE1, De Montfort University LE1, Leicester College, secondary schools, academies and multi-academy trusts across Leicester and Leicestershire. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Leicester — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Leicester and Leicestershire. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Leicester LE1, De Montfort University LE1, Leicester College and all secondary schools, academies and multi-academy trusts across Leicester and Leicestershire. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/architectural-wrap-education-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Leicester and Leicestershire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture can be wrapped during summer, Easter or half-term holidays to minimise disruption to the school day. University of Leicester and De Montfort University campus catering facilities, Leicester College campuses and the city&apos;s secondary school estate all sit within our regular coverage zone. Leicester is approximately 55 to 60 minutes from our South Yorkshire base via the M1, making it straightforward to plan and mobilise holiday-period education programmes across Leicestershire.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Leicester school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The majority of Leicester school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required for specific areas, our full team is DBS checked and compliant with standard safeguarding requirements across Leicester and Leicestershire.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Leicester school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach across Leicester and Leicestershire. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Leicester school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Leicester school or university estates team before any mobilisation. For multi-site Leicestershire MAT programmes, we plan the season across all sites simultaneously to maximise the holiday window — ensuring every school in the trust gets the same finish standard in the same summer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leicester academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Leicester and Leicestershire have a substantial multi-academy trust sector with secondary schools across the city and county. Programmes requiring consistent specification across multiple sites on a structured estates schedule are specifically what we are set up to deliver. We can programme rolling refurbishment across all Leicester MAT sites in a single season — same film specification, same application method, same documentation format at every school — with a consistent finish standard that holds up to comparison across the portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "What Leicester university and college buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Leicester LE1 (University Road, Victoria Park campus): canteen counters and kitchen surfaces, student union and social areas, library and common room furniture, student accommodation kitchen units in Digby Hall, John Foster Hall and Beaumont Hall, corridor door faces, reception and admin area joinery, staff room kitchen units. De Montfort University LE1/LE2 (Kimberley Road, Aylestone Road campus): catering facilities and café counters, the Hugh Aston Building and Vijay Patel Building public spaces, student accommodation kitchen units at Bede Hall and Edith Murphy House, corridor doors across faculty buildings. Leicester College (City Campus LE1, St Margaret&apos;s Campus LE1, Freemen&apos;s Park LE2): canteen and catering facilities, corridor doors and general joinery surfaces. Surface assessment before any commitment — not all university and college surfaces are suitable for film.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function ArchitecturalWrapEducationLeicesterPage() {
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
            <Link href="/architectural-vinyl-film/" className="text-accent hover:underline">Architectural Vinyl Film</Link>
            <span className="mx-2">›</span>
            <Link href="/architectural-wrap-education/" className="text-accent hover:underline">Wrapping for Schools &amp; Universities</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Vinyl Wrapping · Schools &amp; Universities Leicester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps school kitchens, canteen counters, corridor doors, furniture
            and wall panels for schools, colleges and universities across Leicester
            and Leicestershire. University of Leicester LE1, De Montfort University LE1,
            Leicester College, secondary schools, academies and multi-academy trusts.
            DBS-checked installers, holiday-period scheduling, and white-label delivery
            for FM contractors and estates teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Leicester Schools Quote →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Leicester schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces, drawer fronts and base panels in staff
                kitchens, prep areas and servery rooms — wrapped during summer or
                half-term to avoid disruption to the school day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Canteen counter fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Servery counter fascias, end panels and cashier counters in Leicester
                school dining halls and university canteens — a fast, high-impact refresh
                without the disruption or cost of a full fit-out.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door faces, door frames and corridor wall panels — often the highest-wear
                surfaces in a Leicester school. Wrapped to refresh tired laminate or
                painted MDF without replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Library and common room furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shelving unit doors, desk panels, table edge banding and storage joinery
                in library, sixth-form common room and learning resource centre spaces
                across Leicester and Leicestershire schools.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, admin office joinery and headteacher suite
                cabinetry — surfaces that carry the school&apos;s public face and benefit
                from a clean, consistent update ahead of a new academic year.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                University of Leicester and De Montfort University student
                accommodation kitchen units, bathroom panels and bedroom furniture —
                wrapped between tenancy periods for cost-effective block-by-block refresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leicester education context */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s school and university estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is home to two substantial universities. The University of
              Leicester LE1 — centred on University Road with a distinctive 1960s
              and 1970s campus extending south to Victoria Park — has approximately
              20,000 students and carries a wide range of catering, residential and
              teaching surfaces where vinyl wrapping is well-suited as a refurbishment
              approach. The student accommodation estate — Digby Hall LE2, John Foster
              Hall LE5, Beaumont Hall LE4, Shirley House LE2 and several city-centre
              managed blocks — presents consistent opportunities for kitchen unit
              wrapping between annual tenancy periods. The campus catering facilities,
              student union building surfaces, library and social space joinery, and
              corridor door faces across the main campus buildings are all within scope.
            </p>
            <p>
              De Montfort University LE1/LE2 occupies a compact urban campus between
              Kimberley Road, Aylestone Road and Mill Lane, with high-profile buildings
              including the Hugh Aston Building and the Vijay Patel Building. The DMU
              estate includes significant catering and social space infrastructure where
              canteen counter wrapping, corridor joinery and furniture surface updates
              are relevant across multiple buildings. DMU student accommodation at
              Bede Hall LE2 and Edith Murphy House LE3 provides further scope for
              kitchen unit wrapping between occupancy periods.
            </p>
            <p>
              Leicester College operates across City Campus LE1 (the main Welford Road
              site), St Margaret&apos;s Campus LE1, and Freemen&apos;s Park LE2. All three sites
              carry substantial further education catering facilities where vinyl
              wrapping provides a cost-effective holiday-period update. The college&apos;s
              large catering and hospitality training department at the City Campus
              means kitchen surfaces are particularly well-maintained but still
              subject to regular aesthetic refresh cycles. Gateway College LE5 on
              Gipsy Lane and Wyggeston &amp; Queen Elizabeth I College LE2 on University
              Road add further volume to the Leicester FE and sixth-form estate.
            </p>
            <p>
              Across the wider city and county, Leicester and Leicestershire have a
              substantial secondary school estate including schools in multi-academy
              trusts such as the Discovery Schools Academy Trust, Avanti Schools
              Trust, STAR Academies, Lionheart Educational Trust, and the Diocese
              of Leicester Academy Trust. Many schools in LE1 through LE18 and
              across Leicestershire carry canteen counters, corridor door faces and
              kitchen surfaces originally installed in the 1990s and early 2000s —
              now at the point where vinyl wrapping delivers the most cost-effective
              update without the cost or disruption of a full replacement programme.
              From our South Yorkshire base, Leicester is approximately 55 to 60
              minutes south via the M1 — a practical day-run distance for holiday-period
              education programmes.
            </p>
            <p>
              We hold current enhanced DBS certificates and carry appropriate public
              liability insurance for education premises across Leicester and
              Leicestershire. All work is scheduled around academic calendars to
              minimise disruption — summer holidays for larger multi-surface programmes,
              Easter and half-term for smaller-scope or single-building work.
              White-label delivery is available for FM contractors, estates consultants
              and building management companies carrying Leicester school or university
              contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Why vinyl wrapping for schools */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Leicester schools and universities choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fraction of replacement cost</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Replacing a school canteen counter or a block of corridor doors is
                expensive and disruptive. Vinyl wrapping the existing surfaces delivers
                a comparable visual result at a significantly lower cost — and completes
                during a holiday window without major works.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Holiday-period completion</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                WRPX schedules Leicester school work to complete within summer, Easter
                or half-term breaks. No disruption to teaching, no contractor presence
                during term time, no scaffolding or site hoardings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">DBS-checked team</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full team holds current enhanced DBS certificates. Where term-time
                access is required — for specific areas that cannot wait for a holiday
                window — we are fully compliant with Leicester safeguarding requirements.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Consistent finish across sites</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For Leicester MAT programmes with multiple schools, we deliver the same
                specification and finish standard at every site — the same film,
                same application method, same documentation format. No variation
                across the portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who commissions */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who commissions education vinyl wrapping in Leicester
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">School and university estates teams</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bursars, estates managers and FP directors at Leicester schools and
                universities commissioning directly — typically for a single site or
                a small batch of surfaces within one academic year.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">FM contractors and building managers</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Facilities management contractors holding Leicester school or university
                contracts who need a vinyl wrap specialist as a subcontract delivery
                partner — white-label available on all Leicester education work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Multi-academy trust estates directors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Estates directors and property managers for Leicestershire MATs who
                need a reliable installer capable of delivering a consistent standard
                across multiple schools in a single holiday season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester education vinyl wrapping — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-semibold text-foreground">
            Related education and architectural wrap services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Education Vinyl Wrapping</p>
              <p className="mt-1 text-sm text-muted">Full national overview — schools, colleges and universities</p>
            </Link>
            <Link href="/education-framework-vinyl-installation/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">MAT Framework Installation</p>
              <p className="mt-1 text-sm text-muted">Multi-academy trust programmes — consistent specification across all sites</p>
            </Link>
            <Link href="/architectural-wrap-offices-leicester/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Office Vinyl Wrapping Leicester</p>
              <p className="mt-1 text-sm text-muted">Commercial office and business park wrap across LE postcodes</p>
            </Link>
            <Link href="/window-film/school-window-film-sheffield/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">School Window Film</p>
              <p className="mt-1 text-sm text-muted">Solar control, frosted privacy and Part M manifestation for schools</p>
            </Link>
            <Link href="/architectural-wrap-education-nottingham/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Education Wrap Nottingham</p>
              <p className="mt-1 text-sm text-muted">Schools and universities across Nottingham and Nottinghamshire</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-leicester/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Subcontract Installer Leicester</p>
              <p className="mt-1 text-sm text-muted">White-label vinyl installation for sign and print companies in Leicester</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leicester school, college or university — get a quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the surfaces you want wrapped, and the academic
              calendar window you&apos;re working to. We&apos;ll provide a clear, itemised
              quote — no obligation, no pressure, and a straightforward assessment
              of whether the surfaces are suitable before any commitment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Get a Quote →
              </Link>
              <Link href="/architectural-wrap-education/" className="btn-secondary">
                Education Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
