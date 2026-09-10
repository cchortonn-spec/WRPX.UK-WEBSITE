import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Birmingham | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Birmingham — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Birmingham B15, Aston University B4, Birmingham City University B4, Newman University B32 and all Birmingham secondary schools, academies and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Birmingham — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Birmingham and the West Midlands. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Birmingham B15, Aston University B4, Birmingham City University B4, Newman University B32 and all Birmingham secondary schools, academies and multi-academy trusts. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/architectural-wrap-education-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Birmingham and the West Midlands. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. The University of Birmingham, Aston University, Birmingham City University and Birmingham College campus catering facilities are all within our regular Birmingham coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Birmingham school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The majority of Birmingham school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment. Where term-time access is required for specific joinery areas, our full team is DBS checked and compliant with safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Birmingham school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Birmingham school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Birmingham school or university estates team before any mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birmingham academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Birmingham has one of the largest multi-academy trust sectors in England — the city spans a massive school estate with major MATs managing secondary and primary schools across the whole West Midlands conurbation. We are specifically set up to deliver consistent specification across multiple sites in a structured estates programme. We can programme rolling refurbishment across all Birmingham MAT sites in a single season with a consistent finish standard and the same documentation format at every school.",
      },
    },
    {
      "@type": "Question",
      name: "What Birmingham university buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Birmingham B15, Aston University B4, Birmingham City University B4, BCU Bournville campus B30 and Newman University B32 — campus catering counters and kitchen surfaces, student union bar and social areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery. Surface assessment before any commitment — not all substrates are suitable for film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you wrap school kitchens and canteen counters in Birmingham?",
    a: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Birmingham and the West Midlands. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture wrapped during summer, Easter or half-term holidays. The University of Birmingham, Aston University, Birmingham City University and Birmingham College campus catering facilities are all within our regular Birmingham coverage zone.",
  },
  {
    q: "Are your installers DBS checked for Birmingham school work?",
    a: "Yes — we hold current enhanced DBS certificates. The majority of Birmingham school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment. Where term-time access is required for specific joinery areas, our full team is DBS checked and compliant with safeguarding requirements.",
  },
  {
    q: "Can you schedule Birmingham school work around the academic calendar?",
    a: "Yes — and this is our standard approach. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Birmingham school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Birmingham school or university estates team before any mobilisation.",
  },
  {
    q: "Do you cover Birmingham academy trusts and multi-site school programmes?",
    a: "Yes. Birmingham has one of the largest multi-academy trust sectors in England — the city spans a massive school estate with major MATs managing secondary and primary schools across the whole West Midlands conurbation. We are specifically set up to deliver consistent specification across multiple sites in a structured estates programme. We can programme rolling refurbishment across all Birmingham MAT sites in a single season with a consistent finish standard and the same documentation format at every school.",
  },
  {
    q: "What Birmingham university buildings and surfaces do you cover?",
    a: "University of Birmingham B15, Aston University B4, Birmingham City University B4, BCU Bournville campus B30 and Newman University B32 — campus catering counters and kitchen surfaces, student union bar and social areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery. Surface assessment before any commitment — not all substrates are suitable for film.",
  },
];

export default function ArchitecturalWrapEducationBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Wrap · Birmingham Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps educational buildings across Birmingham and the West Midlands. School
            kitchen units and canteen counters, corridor doors, common room furniture and
            student accommodation surfaces — wrapped in durable commercial-grade film during
            holiday periods and out-of-hours. DBS-checked installers. Free survey for
            Birmingham schools, academies and universities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a Birmingham School or University Programme →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham education market */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s education sector — where we work
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the UK&apos;s second largest city and hosts one of the largest
              concentrations of higher education institutions outside London. The University
              of Birmingham B15 — a Russell Group university with over 38,000 students —
              occupies a large Edgbaston campus with a diverse mix of Victorian redbrick
              buildings, 1960s–70s concrete academic blocks and modern teaching and research
              facilities. Aston University B4, positioned at the eastern edge of the city
              centre, is a leading technical university with a compact purpose-built campus
              and a highly active estates programme.
            </p>
            <p>
              Birmingham City University B4 operates across a large multi-site estate —
              its City Centre Campus on Millennium Point and its Bournville Campus B30 are
              the two main locations, with substantial built stock including vocational
              training spaces, student social areas, catering facilities and teaching blocks
              from multiple eras. Newman University B32 in Bartley Green serves a smaller
              student population but has a significant school-supply and education sector
              specialism that makes it a particularly relevant institution to WRPX&apos;s
              education client base.
            </p>
            <p>
              Birmingham&apos;s secondary school estate is one of the largest in England.
              The city has a very high proportion of academy schools, with some of the
              largest multi-academy trusts in the Midlands managing dozens of secondary
              schools across Birmingham and the wider West Midlands. For FM contractors
              managing estate programmes across a Birmingham MAT, the scale and geographic
              spread of the school portfolio makes single-programme delivery with a consistent
              specification partner especially valuable.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 80 miles north of Birmingham
              via the M1 and M6 — a 90-minute drive that sits comfortably within a viable
              day visit. We hold existing relationships with FM contractors and fit-out
              companies delivering maintenance and refurbishment programmes across the
              Birmingham and West Midlands education estate.
            </p>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Birmingham schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen units and canteen counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces and drawer fronts, servery counter fascias and canteen
                fitted joinery. Wrapped in commercial-grade film during Birmingham school
                holiday periods — typically summer or Easter. Film specified to withstand
                food-service cleaning regimes and heavy daily use.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor door faces across Birmingham school buildings — the highest-wear
                surface in any school. Wrapping door faces in durable, impact-resistant film
                refreshes the corridor appearance without door replacement. Applied block by
                block or floor by floor during holiday access windows.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Common room and library furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in joinery in Birmingham school common rooms, sixth-form areas and
                university libraries — shelving fascias, counter fronts, fitted seating
                surrounds and display panel faces. Wrapping extends joinery life without
                the disruption and cost of replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, wardrobe faces and furniture panel surfaces in University
                of Birmingham, Aston University and BCU student accommodation blocks.
                Void-period programmes sequenced to the Birmingham academic year —
                typically July to September with co-ordination through the university
                estates team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin area joinery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias and admin area fitted joinery across Birmingham schools
                and university departments. The first visible surface in any school building —
                a wrapping refresh creates an immediate positive impression on parents,
                visitors and prospective students.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Staff room kitchen units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Staff kitchen unit door faces and fitted furniture across Birmingham schools
                and university staff areas. Often the quickest-to-wear kitchen joinery in
                the building — wrapped to a fresh specification during holiday closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work in Birmingham schools and universities
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Birmingham school programmes —
              typically six weeks of uninterrupted site access. Easter and half-term breaks
              suit smaller-scope work. We agree the schedule with your Birmingham estates or
              FM team before mobilisation and work to the confirmed academic calendar without
              variation.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Where
              term-time access is unavoidable for a Birmingham school project, we comply with
              all safeguarding requirements and relevant school policies. Method statements
              and risk assessments provided on request for Birmingham school procurement teams.
            </p>
            <p>
              <strong className="text-foreground">White-label for Birmingham FM contractors.</strong>{" "}
              We operate white-label for FM contractors and estates management companies working
              across the Birmingham and West Midlands school and university estate. We attend
              under your company name, carry your paperwork and provide photographic sign-off
              in your format. Birmingham school or university estates teams see your brand
              throughout.
            </p>
            <p>
              <strong className="text-foreground">Multi-site West Midlands MAT programmes.</strong>{" "}
              Multi-academy trusts operating across Birmingham and the wider West Midlands benefit
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
            Birmingham school and university wrapping — common questions
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
            Related services in Birmingham
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for schools &amp; universities — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education sector wrapping work, surfaces and process.</p>
            </Link>
            <Link href="/architectural-wrap-education-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Education wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester schools, Manchester Metropolitan and University of Manchester educational buildings.</p>
            </Link>
            <Link href="/architectural-wrap-offices-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office vinyl wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Reception desks, breakout kitchen surfaces and meeting room panels across Birmingham offices.</p>
            </Link>
            <Link href="/architectural-wrap-hotels-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, reception desks and corridor doors for Birmingham hotel interiors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a school or university refresh in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Birmingham schools, academies and university buildings and provide a
              fixed-price programme co-ordinated to your academic calendar. Tell us the scope —
              surfaces, building and access period — and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss a Birmingham School or University Programme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
