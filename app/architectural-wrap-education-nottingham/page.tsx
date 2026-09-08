import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Nottingham | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Nottingham — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Nottingham NG7, Nottingham Trent University NG1, Nottingham College and all Nottingham secondary schools, academies and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Nottingham — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Nottingham and Nottinghamshire. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Nottingham NG7, Nottingham Trent University NG1, Nottingham College NG1 and all secondary schools, academies and multi-academy trusts across Nottingham and Nottinghamshire. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/architectural-wrap-education-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Nottingham and Nottinghamshire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. The University of Nottingham, Nottingham Trent University and Nottingham College campus catering facilities are all within our regular Nottingham coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Nottingham school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The majority of Nottingham school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required, our full team is DBS checked and compliant with standard safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Nottingham school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach across Nottingham. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Nottingham school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Nottingham school or university estates team before any mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Nottingham academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nottingham and Nottinghamshire have a significant multi-academy trust sector managing secondary schools across the city and county — programmes requiring consistent specification across multiple sites on a structured estates maintenance schedule are something we are specifically set up to deliver. We can programme rolling refurbishment across all Nottingham MAT sites in a single season with a consistent finish standard.",
      },
    },
    {
      "@type": "Question",
      name: "What Nottingham university buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Nottingham NG7 and Nottingham Trent University NG1 — campus catering counters and kitchen surfaces, student union bar areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery. We also cover Nottingham College NG1 across its city-centre campus. Surface assessment before any commitment — not all university surfaces are suitable for film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap school kitchens and canteen counters in Nottingham?",
    a: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Nottingham and Nottinghamshire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. The University of Nottingham, Nottingham Trent University and Nottingham College campus catering facilities are all within our regular Nottingham coverage zone.",
  },
  {
    q: "Are your installers DBS checked for Nottingham school work?",
    a: "Yes — we hold current enhanced DBS certificates. The majority of Nottingham school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required, our full team is DBS checked and compliant with standard safeguarding requirements.",
  },
  {
    q: "Can you schedule Nottingham school work around the academic calendar?",
    a: "Yes — and this is our standard approach across Nottingham. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Nottingham school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Nottingham school or university estates team before any mobilisation.",
  },
  {
    q: "Do you cover Nottingham academy trusts and multi-site school programmes?",
    a: "Yes. Nottingham and Nottinghamshire have a significant multi-academy trust sector managing secondary schools across the city and county — programmes requiring consistent specification across multiple sites on a structured estates maintenance schedule are something we are specifically set up to deliver. We can programme rolling refurbishment across all Nottingham MAT sites in a single season with a consistent finish standard.",
  },
  {
    q: "What Nottingham university buildings and surfaces do you cover?",
    a: "University of Nottingham NG7 and Nottingham Trent University NG1 — campus catering counters and kitchen surfaces, student union bar areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery. We also cover Nottingham College NG1 across its city-centre campus. Surface assessment before any commitment — not all university surfaces are suitable for film.",
  },
];

export default function ArchitecturalWrapEducationNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Nottingham Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities in Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps educational buildings across Nottingham and Nottinghamshire. School kitchen
            units and canteen counters, corridor doors, common room furniture and student
            accommodation surfaces — wrapped in durable commercial-grade film during holiday
            periods and out-of-hours. DBS-checked installers. Free survey for Nottingham
            schools, academies and universities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Nottingham School or University Programme →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham education market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s education sector — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham supports two major universities within close proximity of each other —
              a concentration unusual outside London. The University of Nottingham NG7 occupies
              a large campus in the Lenton and Dunkirk areas west of the city centre, with over
              33,000 students across academic buildings, student accommodation blocks and
              extensive catering and social facilities. Nottingham Trent University NG1 is
              centred on the City Campus in the heart of Nottingham, with additional buildings
              on Clifton Campus NG11 and Brackenhurst Campus NG25.
            </p>
            <p>
              Nottingham College NG1 — one of the largest further education colleges in the East
              Midlands — operates from its Adams Building on Stoney Street and the Highfields
              Campus, with a wide range of vocational and academic provision across multiple
              buildings. Vocational catering facilities, practical training kitchens and student
              canteens across the Nottingham College estate present consistent wrapping opportunities.
            </p>
            <p>
              Nottingham&apos;s secondary school estate is substantial. The city has a high proportion
              of academy schools, with several large multi-academy trusts managing multiple
              Nottingham and Nottinghamshire secondary schools under a single estates function.
              The county beyond the city boundary adds a further layer of schools, colleges and
              sixth-form centres across the Nottinghamshire market towns — all within practical
              reach of our South Yorkshire base.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 40 miles north of Nottingham via
              the M1 — Nottingham is a straightforward daily reach with no additional mobilisation
              premium on Nottingham commissions. We hold existing relationships with FM contractors
              and estates management companies operating across the Nottingham and East Midlands
              education estate.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Nottingham schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen units and canteen counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces and drawer fronts, servery counter fascias and canteen
                fitted joinery. Wrapped in commercial-grade film during Nottingham school holiday
                periods — typically summer or Easter. Film specified to withstand food-service
                cleaning regimes and heavy daily use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door faces across Nottingham school buildings — the highest-wear surface
                in any school corridor. Wrapping door faces in durable, impact-resistant film refreshes
                the corridor appearance without door replacement. Applied floor by floor or block
                by block during holiday access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Common room and library furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in joinery in Nottingham school common rooms, sixth-form areas and university
                libraries — shelving fascias, counter fronts, fitted seating surrounds and display
                panel faces. Wrapping extends the life of existing joinery without the disruption
                and cost of replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, wardrobe faces and furniture panel surfaces in University of
                Nottingham and Nottingham Trent student accommodation blocks. Void-period programmes
                sequenced to the Nottingham academic year — typically July to September with
                coordination through the university estates team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and admin area fitted joinery across Nottingham schools
                and university departments. The first visible surface in any school building —
                a wrapping refresh creates an immediate, positive impression on parents, visitors
                and prospective students.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Staff room kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Staff kitchen unit door faces and fitted furniture across Nottingham schools and
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
            How we work in Nottingham schools and universities
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Nottingham school programmes —
              typically six weeks of uninterrupted site access across the city. Easter and
              half-term breaks suit smaller-scope work. We agree the schedule with your
              Nottingham estates or FM team before mobilisation and work to the confirmed
              academic calendar without variation.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Where
              term-time access is unavoidable for a Nottingham school project, we comply with
              all safeguarding requirements and relevant school policies. Method statements
              and risk assessments provided on request for Nottingham school procurement teams.
            </p>
            <p>
              <strong className="text-foreground">White-label for Nottingham FM contractors.</strong>{" "}
              We operate white-label for FM contractors and estates management companies working
              across the Nottingham and Nottinghamshire school and university estate. We attend
              under your company name, carry your paperwork and provide photographic sign-off
              in your format. Nottingham school or university estates teams see your brand throughout.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Nottingham MAT programmes.</strong>{" "}
              Multi-academy trusts operating across Nottingham and Nottinghamshire benefit from
              consistent specification and co-ordinated holiday-period scheduling. We scope each
              school within the trust individually, then programme the full MAT refresh in a
              single summer season — one consistent finish standard across every site, delivered
              by the same installation team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham school and university wrapping — common questions
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
            Related services in Nottingham
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for schools &amp; universities — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education sector wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-education-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Education wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Sheffield schools, Sheffield Hallam University and University of Sheffield.</p>
            </Link>
            <Link href="/architectural-wrap-offices-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Reception desks, breakout kitchen surfaces and meeting room panels across Nottingham offices.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, reception desks and corridor doors for Nottingham hotel interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a school or university refresh in Nottingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Nottingham schools, academies and university buildings and provide a
              fixed-price programme co-ordinated to your academic calendar. Tell us the scope —
              surfaces, building and access period — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Nottingham School or University Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
