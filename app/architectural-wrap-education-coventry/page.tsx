import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Coventry | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Coventry — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Warwick CV4, Coventry University CV1, Coventry College and all Coventry and Warwickshire secondary schools, academies and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Coventry — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Coventry and Warwickshire. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Warwick CV4, Coventry University CV1, Coventry College and all Coventry and Warwickshire secondary schools, academies and multi-academy trusts. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/architectural-wrap-education-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications in Coventry and Warwickshire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. University of Warwick campus catering counters and Coventry University student refectory facilities are all within our regular Coventry coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Coventry school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The majority of Coventry school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment. Where term-time access is required for specific joinery areas, our full team is DBS checked and compliant with safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Coventry school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Coventry school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Coventry school or university estates team before any mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Coventry and Warwickshire academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Coventry and Warwickshire have a significant multi-academy trust sector — several large MATs manage secondary and primary schools across the Coventry city boundary and into Warwickshire and the wider West Midlands. We are specifically set up to deliver consistent specification across multiple sites in a structured programme. We can programme rolling refurbishment across all Coventry or Warwickshire MAT sites in a single season with a consistent finish standard and the same documentation format at every school.",
      },
    },
    {
      "@type": "Question",
      name: "What Coventry university buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Warwick CV4 — campus catering counters, student union surfaces, library and common room furniture, student accommodation kitchen units, corridor door faces, teaching block reception joinery and sports centre facilities. Coventry University CV1 — student social areas, faculty building fitted joinery, refectory counters, library furniture, student accommodation surfaces and reception areas across the city centre campus. Surface assessment before any commitment — not all substrates are suitable for film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap school kitchens and canteen counters in Coventry?",
    a: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications in Coventry and Warwickshire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. University of Warwick campus catering counters and Coventry University student refectory facilities are all within our regular Coventry coverage zone.",
  },
  {
    q: "Are your installers DBS checked for Coventry school work?",
    a: "Yes — we hold current enhanced DBS certificates. The majority of Coventry school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment. Where term-time access is required for specific joinery areas, our full team is DBS checked and compliant with safeguarding requirements.",
  },
  {
    q: "Can you schedule Coventry school work around the academic calendar?",
    a: "Yes — and this is our standard approach. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Coventry school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Coventry school or university estates team before any mobilisation.",
  },
  {
    q: "Do you cover Coventry and Warwickshire academy trusts and multi-site school programmes?",
    a: "Yes. Coventry and Warwickshire have a significant multi-academy trust sector — several large MATs manage secondary and primary schools across the Coventry city boundary and into Warwickshire and the wider West Midlands. We are specifically set up to deliver consistent specification across multiple sites in a structured programme. We can programme rolling refurbishment across all Coventry or Warwickshire MAT sites in a single season with a consistent finish standard and the same documentation format at every school.",
  },
  {
    q: "What Coventry university buildings and surfaces do you cover?",
    a: "University of Warwick CV4 — campus catering counters, student union surfaces, library and common room furniture, student accommodation kitchen units, corridor door faces, teaching block reception joinery and sports centre facilities. Coventry University CV1 — student social areas, faculty building fitted joinery, refectory counters, library furniture, student accommodation surfaces and reception areas across the city centre campus. Surface assessment before any commitment — not all substrates are suitable for film.",
  },
];

export default function ArchitecturalWrapEducationCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Coventry Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps educational buildings across Coventry and Warwickshire. School
            kitchen units and canteen counters, corridor doors, common room furniture and
            student accommodation surfaces — wrapped in durable commercial-grade film during
            holiday periods and out-of-hours. University of Warwick CV4 and Coventry University
            CV1 within our regular West Midlands coverage zone. DBS-checked installers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Coventry School or University Programme →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry education market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s education sector — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is home to two significant higher education institutions with very
              different campus characters. The University of Warwick CV4 — a Russell Group
              university with approximately 29,000 students — occupies a large self-contained
              campus on the southern edge of the city, with a mix of 1960s brutalist
              teaching blocks, modern faculty buildings and a substantial student residential
              estate. The campus has a well-funded, proactive estates team with a consistent
              pipeline of refurbishment and maintenance work across teaching and residential buildings.
            </p>
            <p>
              Coventry University CV1 operates from a large, dense city-centre campus with
              a predominantly young, urban student population. Its faculty buildings and
              student social spaces have been substantially redeveloped in recent years, with
              ongoing fit-out and maintenance work across catering facilities, student union
              areas, library buildings and teaching spaces. The university operates a large
              student accommodation estate across the city, adding a residential wrapping
              scope alongside the academic building programme.
            </p>
            <p>
              Coventry&apos;s secondary school estate serves a diverse urban population, with
              a significant proportion of academy schools. Several large multi-academy trusts
              operate across Coventry and into the wider Warwickshire and West Midlands area —
              managing school portfolios that span postcode areas and require co-ordinated
              estates management across multiple sites. For FM contractors managing a Coventry
              or Warwickshire MAT programme, the ability to deliver a consistent wrap
              specification across multiple schools in a single holiday-period programme
              is a genuine operational advantage.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 85 miles from Coventry via the
              M1 and M6 — around 90 minutes from our base. Coventry sits naturally on the
              same coverage corridor as Birmingham, Leicester and Nottingham, making it an
              efficient stop within a Midlands education programme day.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Coventry schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen units and canteen counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces and drawer fronts, servery counter fascias and canteen
                fitted joinery. Wrapped in commercial-grade film during Coventry school
                holiday periods — typically summer or Easter. Film specified to withstand
                food-service cleaning regimes and heavy daily use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door faces across Coventry school buildings — the highest-wear
                surface in any school. Wrapping door faces in durable, impact-resistant film
                refreshes the corridor appearance without door replacement. Applied block by
                block or floor by floor during holiday access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Common room and library furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in joinery in Coventry school common rooms, sixth-form areas and
                university libraries — shelving fascias, counter fronts, fitted seating
                surrounds and display panel faces. Wrapping extends joinery life without
                the disruption and cost of replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, wardrobe faces and furniture panel surfaces in University
                of Warwick and Coventry University student accommodation blocks.
                Void-period programmes sequenced to the Coventry academic year —
                typically July to September with co-ordination through the university
                estates team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and admin area fitted joinery across Coventry schools
                and university departments. The first visible surface in any school building —
                a wrapping refresh creates an immediate positive impression on parents,
                visitors and prospective students.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student union and social area surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bar counter fronts, servery surfaces, booth seating surrounds and fitted
                joinery in Coventry University and University of Warwick student union and
                social buildings. High-wear surfaces benefiting from durable commercial film
                refresh during summer closure periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Coventry schools and universities
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Coventry school programmes —
              typically six weeks of uninterrupted site access. Easter and half-term breaks
              suit smaller-scope work. We agree the schedule with your Coventry estates or
              FM team before mobilisation and work to the confirmed academic calendar without
              variation.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Where
              term-time access is unavoidable for a Coventry school project, we comply with
              all safeguarding requirements and relevant school policies. Method statements
              and risk assessments provided on request for Coventry school procurement teams.
            </p>
            <p>
              <strong className="text-foreground">White-label for Coventry FM contractors.</strong>{" "}
              We operate white-label for FM contractors and estates management companies working
              across the Coventry and Warwickshire school and university estate. We attend
              under your company name, carry your paperwork and provide photographic sign-off
              in your format. Coventry school or university estates teams see your brand
              throughout.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Coventry and Warwickshire MAT programmes.</strong>{" "}
              Multi-academy trusts operating across Coventry and wider Warwickshire benefit
              from consistent specification and co-ordinated holiday-period scheduling. We scope
              each school within the trust individually, then programme the full MAT refresh in
              a single summer season — one consistent finish standard across every site, delivered
              by the same installation team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry school and university wrapping — common questions
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
            Related services in Coventry
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for schools &amp; universities — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education sector wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-education-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Education wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Birmingham schools, University of Birmingham, Aston University and West Midlands MATs.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, reception desks and corridor door wrapping for Coventry hotel interiors.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Counter fronts, bar surfaces and interior joinery wrapping for Coventry restaurants and hospitality.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a school or university refresh in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Coventry schools, academies and university buildings and provide a
              fixed-price programme co-ordinated to your academic calendar. Tell us the scope —
              surfaces, building and access period — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Coventry School or University Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
