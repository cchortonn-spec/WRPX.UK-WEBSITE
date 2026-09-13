import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Sheffield | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Sheffield — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Sheffield S10, Sheffield Hallam S1, secondary schools, academies and further education colleges across Sheffield and South Yorkshire. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Sheffield — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Sheffield and South Yorkshire. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Sheffield S10, Sheffield Hallam S1, Sheffield College and all secondary schools, academies and further education colleges across Sheffield and South Yorkshire. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/architectural-wrap-education-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Sheffield. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during the summer, Easter or half-term holidays. The University of Sheffield, Sheffield Hallam and Sheffield College campus catering facilities are all in our regular coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Sheffield school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The large majority of Sheffield school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required, our full team is DBS checked and compliant with standard safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Sheffield school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach across Sheffield. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Sheffield school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Sheffield school or university estates team before any mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Sheffield academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sheffield is home to a number of multi-academy trusts operating secondary schools across the city and South Yorkshire — programmes requiring consistent specification across multiple sites on a structured estates maintenance schedule are something we are specifically set up to deliver. We can programme rolling refurbishment across all Sheffield MAT sites in a single season with a consistent finish standard.",
      },
    },
    {
      "@type": "Question",
      name: "What Sheffield university buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Sheffield S10 and Sheffield Hallam University S1 — campus catering counters and kitchen surfaces, student union bar areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery, staff room kitchen units. We also cover Sheffield College at its City and Hillsborough campuses. Surface assessment before any commitment — not all university surfaces are suitable for film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap school kitchens and canteen counters in Sheffield?",
    a: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Sheffield. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during the summer, Easter or half-term holidays. The University of Sheffield, Sheffield Hallam and Sheffield College campus catering facilities are all in our regular coverage zone.",
  },
  {
    q: "Are your installers DBS checked for Sheffield school work?",
    a: "Yes — we hold current enhanced DBS certificates. The large majority of Sheffield school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required, our full team is DBS checked and compliant with standard safeguarding requirements.",
  },
  {
    q: "Can you schedule Sheffield school work around the academic calendar?",
    a: "Yes — and this is our standard approach across Sheffield. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Sheffield school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Sheffield school or university estates team before any mobilisation.",
  },
  {
    q: "Do you cover Sheffield academy trusts and multi-site school programmes?",
    a: "Yes. Sheffield is home to a number of multi-academy trusts operating secondary schools across the city and South Yorkshire — programmes requiring consistent specification across multiple sites on a structured estates maintenance schedule are something we are specifically set up to deliver. We can programme rolling refurbishment across all Sheffield MAT sites in a single season with a consistent finish standard.",
  },
  {
    q: "What Sheffield university buildings and surfaces do you cover?",
    a: "University of Sheffield S10 and Sheffield Hallam University S1 — campus catering counters and kitchen surfaces, student union bar areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery, staff room kitchen units. We also cover Sheffield College at its City and Hillsborough campuses. Surface assessment before any commitment — not all university surfaces are suitable for film.",
  },
];

export default function ArchitecturalWrapEducationSheffieldPage() {
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
            <Link href="/architectural-wrap-education/" className="text-accent hover:underline">Vinyl Wrapping for Schools &amp; Universities</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Sheffield Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps educational buildings across Sheffield and South Yorkshire. School kitchen
            units and canteen counters, corridor doors, common room furniture and student
            accommodation surfaces — wrapped in durable commercial-grade film during holiday
            periods and out-of-hours. DBS-checked installers. Free survey for Sheffield
            schools, academies and universities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Sheffield School or University Programme →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield education market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s education sector — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has one of the largest higher education communities in England. The
              University of Sheffield S10 — a Russell Group university with over 30,000 students —
              and Sheffield Hallam University S1, with a large campus spread across the city
              centre, generate continuous estates maintenance and refurbishment demand across
              a broad range of campus buildings: catering facilities, student accommodation,
              academic buildings, libraries and communal spaces.
            </p>
            <p>
              Sheffield College operates across the City Campus on the edge of the city centre
              and the Hillsborough Campus in north Sheffield — further education provision for
              a significant proportion of post-16 students across the city. Catering and
              hospitality training kitchens, workshop support spaces and common room furniture
              across both campuses fall within the scope of our Sheffield education wrapping work.
            </p>
            <p>
              Sheffield&apos;s secondary school estate is substantial. The city has a high proportion
              of academy schools and multi-academy trust (MAT) provision — trusts managing
              multiple Sheffield secondary schools under a single estates function. These trusts
              are among the most efficient clients for a rolling, multi-site vinyl wrapping
              programme: consistent specification across multiple schools, co-ordinated to the
              shared academic calendar, produces significant economies in both cost and
              programme time.
            </p>
            <p>
              WRPX is based in South Yorkshire — Sheffield is part of our home territory.
              There is no additional mobilisation premium for Sheffield work, and we hold
              existing working relationships with FM contractors and estates teams operating
              across the Sheffield school and university estate.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Sheffield schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen units and canteen counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces and drawer fronts, servery counter fascias and canteen
                fitted joinery. Wrapped in commercial-grade film during Sheffield school holiday
                periods — typically summer or Easter. Film specified to withstand food-service
                cleaning regimes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door faces — the highest-wear surface in any Sheffield school. Wrapping
                door faces in a durable, impact-resistant film refreshes the corridor appearance
                without door replacement. Applied floor by floor or block by block during holiday
                access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Common room and library furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in joinery in Sheffield school common rooms, sixth-form areas and university
                libraries — shelving fascias, counter fronts, fitted seating surrounds and display
                panel faces. Wrapping extends the life of existing joinery without the disruption
                of replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, wardrobe faces and furniture panel surfaces in University of
                Sheffield and Sheffield Hallam University student accommodation blocks. Void-period
                programmes sequenced to the Sheffield academic year — typically July to September.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and admin area fitted joinery across Sheffield schools and
                university departments. The first visible surface in any school building — a
                wrapping refresh makes a significant immediate impression on visitors and parents.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Staff room kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Staff kitchen unit door faces and fitted furniture across Sheffield schools and
                university staff areas. Often the most heavily used and quickest-to-wear kitchen
                joinery in the building — wrapped to a fresh specification during holiday closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Sheffield schools and universities
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Sheffield school programmes —
              typically six weeks of uninterrupted site access across the city. Easter and
              half-term breaks suit smaller-scope work. We agree the schedule with your
              Sheffield estates or FM team before mobilisation and work to the confirmed
              academic calendar.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Where
              term-time access is unavoidable for a Sheffield school project, we comply with
              all safeguarding requirements and relevant school policies. Method statements
              and risk assessments provided on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Sheffield FM contractors.</strong>{" "}
              We operate white-label for FM contractors and estates management companies working
              across the Sheffield and South Yorkshire school estate. We attend under your
              company name, carry your paperwork and provide photographic sign-off in your
              format. Sheffield school or university estates teams see your brand throughout.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Sheffield MAT programmes.</strong>{" "}
              Multi-academy trusts operating across Sheffield benefit from consistent specification
              and co-ordinated holiday-period scheduling. We scope each Sheffield school within
              the trust individually, then programme the full MAT refresh in a single summer
              season — one consistent finish standard across every site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield school and university wrapping — common questions
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

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services in Sheffield
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for schools &amp; universities — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education sector wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">School window film</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted privacy and Part M manifestation film for Sheffield school and university glazing.</p>
            </Link>
            <Link href="/architectural-wrap-offices-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Reception desks, breakout kitchen surfaces and meeting room panels across Sheffield offices.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts and fitted surfaces for Sheffield restaurant and bar interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a school or university refresh in Sheffield?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Sheffield schools, academies and university buildings and provide a
              fixed-price programme co-ordinated to your academic calendar. Tell us the scope —
              surfaces, building and access period — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Sheffield School or University Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
