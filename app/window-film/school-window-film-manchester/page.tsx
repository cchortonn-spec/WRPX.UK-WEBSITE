import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Manchester | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Manchester and Greater Manchester — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Manchester M13, Manchester Metropolitan M15, University of Salford M5 and all Greater Manchester secondary schools and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Manchester — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Manchester and Greater Manchester. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Manchester M13, Manchester Metropolitan University M15, University of Salford M5, Manchester College and all Greater Manchester secondary schools, academies and MATs across all ten borough areas. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/window-film/school-window-film-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Manchester school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating south-facing classrooms are the most common Manchester school window film enquiry we handle. University of Manchester M13 lecture rooms and seminar blocks, Manchester Metropolitan University M15 teaching spaces and Greater Manchester secondary school classrooms all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without HVAC upgrade or window replacement. Greater Manchester is within our regular daily coverage zone via the M62 and M60.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in Manchester schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where pupils move at speed. This applies across all Manchester schools and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools and university buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Manchester school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Manchester school programmes. Greater Manchester schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Greater Manchester schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Manchester school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Manchester school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Greater Manchester schools on the same MAT programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Greater Manchester multi-academy trusts and FM contractors managing school portfolios across Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. One summer programme addresses the full Greater Manchester MAT portfolio.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Manchester school classrooms?",
    a: "Yes — overheating south-facing classrooms are the most common Manchester school window film enquiry we handle. University of Manchester M13 lecture rooms and seminar blocks, Manchester Metropolitan University M15 teaching spaces and Greater Manchester secondary school classrooms all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without HVAC upgrade or window replacement. Greater Manchester is within our regular daily coverage zone via the M62 and M60.",
  },
  {
    q: "Is glass manifestation required in Manchester schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where pupils move at speed. This applies across all Manchester schools and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools and university buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
  },
  {
    q: "Can you install Manchester school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Manchester school programmes. Greater Manchester schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Greater Manchester schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Manchester school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Manchester school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
  },
  {
    q: "Can you work across multiple Greater Manchester schools on the same MAT programme?",
    a: "Yes — and this is a particular strength for Greater Manchester multi-academy trusts and FM contractors managing school portfolios across Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. One summer programme addresses the full Greater Manchester MAT portfolio.",
  },
];

export default function SchoolWindowFilmManchesterPage() {
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/school-window-film/" className="text-accent hover:underline">Window Film for Schools &amp; Universities</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Manchester Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Manchester schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Manchester and Greater Manchester.
            University of Manchester M13, Manchester Metropolitan M15, University of Salford M5
            and all Greater Manchester secondary schools, academies and MATs — DBS-checked
            team, holiday-period scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Greater Manchester is home to one of the largest and most complex education
              estates outside London. The University of Manchester M13 — a Russell Group
              institution with over 40,000 students — occupies a large south-of-city campus
              with a mix of Victorian Gothic lecture theatres, mid-century science blocks and
              modern curtain-wall teaching facilities. South-facing elevations across the
              campus are among the most frequently reported overheating zones in the
              North West university sector.
            </p>
            <p>
              Manchester Metropolitan University M15 operates from its All Saints and Birley
              campuses — large, heavily glazed teaching blocks from the 1960s through to the
              2000s with significant south-facing classroom and studio exposure. The University
              of Salford M5 occupies a riverside campus on the Irwell with substantial
              teaching stock from multiple eras, much of it single-glazed or early
              double-glazed with poor solar performance. Both institutions have active
              estates procurement functions commissioning window film and compliance work.
            </p>
            <p>
              Greater Manchester&apos;s secondary school estate spans ten local authority areas:
              Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury,
              Bolton and Wigan. The combined school estate is one of the largest in England,
              with a high proportion of academised schools. Major multi-academy trusts manage
              portfolios of secondary schools across borough boundaries — and a single MAT
              window film programme can span several towns and postcodes within Greater Manchester,
              making consistent specification and coordinated holiday scheduling essential.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 45 miles south-east of Manchester
              city centre via the M62 or M67 — a straightforward daily reach with no additional
              mobilisation premium on Manchester commissions. The M60 orbital gives direct access
              to school and university sites across all ten Greater Manchester boroughs from a
              single base day.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Manchester schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Manchester classrooms, lecture theatres and library
                spaces by 40–79% depending on specification. Keeps south-facing rooms usable
                during spring and summer terms without blinds that block the view or darken
                the space. Certain low-emissivity specifications also reduce winter heat loss
                through existing Manchester school glazing — lowering heating costs without
                window replacement.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices, staff interview
                rooms and ground-floor windows adjacent to Manchester school playgrounds or
                public footpaths. Frosted film provides full privacy from outside while keeping
                spaces light. Half-height privacy film is frequently specified in Manchester
                school offices where corridor visibility to the reception desk is maintained.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels in
                Manchester school corridors, entrance areas and sports halls where large
                glass panels could be mistaken for open space. Applied as a dot or stripe
                band at 850–1000mm and 1400–1600mm from finished floor level. We assess
                compliance requirements at survey and provide a full scope report before
                committing to any Manchester school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Manchester M13</h3>
              <p className="mt-2 text-sm text-muted">Main campus south of the city centre — lecture rooms, seminar spaces, library buildings, student accommodation glazing and sports facilities. Mix of historic Victorian Gothic buildings and modern curtain-wall teaching stock with significant south-facing solar control and manifestation scope.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Manchester Metropolitan University M15</h3>
              <p className="mt-2 text-sm text-muted">All Saints Campus and Birley Campus — large-span glazed teaching blocks, studio spaces, library buildings and student social areas. 1960s–2000s construction with significant overheating exposure on south-facing teaching elevations across both campuses.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Salford M5</h3>
              <p className="mt-2 text-sm text-muted">Riverside campus on the Irwell — teaching blocks, student accommodation, catering facilities and engineering and media buildings. Mixed glazing stock from multiple eras with active estates procurement for solar control and compliance window film.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Greater Manchester secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All secondary schools, academies and multi-academy trust buildings across all ten Greater Manchester boroughs — Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. Manifestation, solar control and frosted privacy across the full estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Manchester education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Manchester school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Manchester school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Manchester school
              safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Manchester FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Manchester schools and universities.
              We attend under your company name, carry your paperwork and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Manchester school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Greater Manchester MAT programmes.</strong>{" "}
              For MATs or FM contractors managing multiple school buildings across Greater
              Manchester&apos;s ten boroughs, we can programme rolling window film installation
              across all sites with a consistent film specification. One summer programme
              addresses the full portfolio — same film, same standard, same documentation
              at every building. The M60 orbital makes multi-borough day planning efficient
              from a single Manchester base day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester school window film — common questions
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
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for Manchester schools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education window film applications, film types and process.</p>
            </Link>
            <Link href="/window-film/school-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for Sheffield schools</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted film and manifestation for Sheffield schools, Sheffield Hallam and University of Sheffield.</p>
            </Link>
            <Link href="/window-film/solar-control-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Manchester commercial and office buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Manchester schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Manchester schools and universities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Manchester school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Manchester schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
