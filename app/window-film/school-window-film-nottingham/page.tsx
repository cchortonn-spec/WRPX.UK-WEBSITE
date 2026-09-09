import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Nottingham | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Nottingham and Nottinghamshire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Nottingham NG7, Nottingham Trent NG1, Nottingham College and all Nottingham secondary schools covered. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Nottingham — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Nottingham and Nottinghamshire. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Nottingham NG7, Nottingham Trent University NG1, Nottingham College NG1 and all Nottingham secondary schools, academies and MATs across Nottinghamshire. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/window-film/school-window-film-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Nottingham school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating south-facing classrooms are the most common Nottingham school window film enquiry we receive. University of Nottingham NG7 lecture rooms and seminar spaces, Nottingham Trent University NG1 teaching blocks and Nottingham secondary school classrooms all experience significant overheating during spring and summer terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the cost of HVAC upgrade or window replacement. Nottingham and Nottinghamshire are within our regular daily coverage zone via the M1.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation a legal requirement in Nottingham schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas, sports halls and entrance areas where pupils move at speed. This applies across all Nottingham schools and university buildings. We assess the compliance requirement at survey and apply manifestation to the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools built or refurbished from the 1990s onwards with large-span corridor glazing are most commonly exposed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Nottingham school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Nottingham school programmes. Summer provides six weeks of uninterrupted site access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Nottingham and Nottinghamshire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Nottingham school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Nottingham school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your Nottingham school safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Nottingham schools on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Nottingham multi-academy trusts and FM contractors managing a portfolio of school buildings across Nottingham and Nottinghamshire. We can programme rolling window film installation across multiple sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Nottingham or Nottinghamshire MAT.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Nottingham school classrooms?",
    a: "Yes — overheating south-facing classrooms are the most common Nottingham school window film enquiry we receive. University of Nottingham NG7 lecture rooms and seminar spaces, Nottingham Trent University NG1 teaching blocks and Nottingham secondary school classrooms all experience significant overheating during spring and summer terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the cost of HVAC upgrade or window replacement. Nottingham and Nottinghamshire are within our regular daily coverage zone via the M1.",
  },
  {
    q: "Is glass manifestation a legal requirement in Nottingham schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas, sports halls and entrance areas where pupils move at speed. This applies across all Nottingham schools and university buildings. We assess the compliance requirement at survey and apply manifestation to the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools built or refurbished from the 1990s onwards with large-span corridor glazing are most commonly exposed.",
  },
  {
    q: "Can you install Nottingham school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Nottingham school programmes. Summer provides six weeks of uninterrupted site access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Nottingham and Nottinghamshire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Nottingham school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Nottingham school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your Nottingham school safeguarding lead on request.",
  },
  {
    q: "Can you work across multiple Nottingham schools on the same programme?",
    a: "Yes — and this is a particular strength for Nottingham multi-academy trusts and FM contractors managing a portfolio of school buildings across Nottingham and Nottinghamshire. We can programme rolling window film installation across multiple sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Nottingham or Nottinghamshire MAT.",
  },
];

export default function SchoolWindowFilmNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Nottingham Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Nottingham schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Nottingham and Nottinghamshire.
            University of Nottingham NG7, Nottingham Trent NG1, Nottingham College and all
            Nottingham secondary schools and academies — DBS-checked team, holiday-period
            scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham hosts two major universities in close proximity — University of
              Nottingham NG7, a Russell Group institution with over 33,000 students on its
              large Lenton and Dunkirk campus west of the city, and Nottingham Trent University
              NG1, centred on the City Campus in the heart of Nottingham with additional
              buildings at Clifton Campus NG11. Both institutions have substantial glazed
              teaching stock with a mix of older single-glazed panels and more recent
              curtain-wall construction that overheats significantly on south-facing
              elevations during spring and summer terms.
            </p>
            <p>
              Nottingham College NG1 operates from the Adams Building on Stoney Street and
              the Highfields Campus, with practical training spaces, student canteens and
              common rooms across multiple buildings. South-facing glazed areas in the
              college&apos;s teaching spaces are among the most reported overheating zones in
              the Nottingham FE sector.
            </p>
            <p>
              Nottingham&apos;s secondary school estate is large and heavily academised —
              the city has a significant proportion of academy schools, with several large
              multi-academy trusts managing secondary schools across Nottingham and
              Nottinghamshire under a single estates function. Many schools built during
              the 1990s and 2000s have large-span corridor glazing, glazed fire doors and
              glass-walled sports halls where Part M manifestation is a building regulations
              requirement. We assess compliance at survey and report on the full scope before
              any commitment to a Nottingham school programme.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 40 miles north of Nottingham
              via the M1 — a straightforward daily reach with no additional mobilisation
              premium on Nottingham commissions. We hold existing relationships with FM
              contractors and estates management companies operating across the Nottingham
              and East Midlands education estate.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Nottingham schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Nottingham classrooms, lecture theatres and library
                spaces by 40–79% depending on specification. Keeps south-facing rooms usable
                during spring and summer terms without blinds that block the view or darken
                the space. Certain specifications also reduce heat loss through existing Nottingham
                school glazing in winter — lowering energy bills without window replacement.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices, staff interview
                rooms and ground-floor windows adjacent to Nottingham school playgrounds or
                public footpaths. Frosted film provides full privacy from outside while keeping
                spaces light — indistinguishable from sandblasted glass at normal viewing distance.
                Half-height privacy film is commonly used in Nottingham school offices where
                corridor visibility matters.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels in Nottingham
                school corridors, entrance areas and sports halls where large glass panels could
                be mistaken for open space. Applied as a dot or stripe band at adult and child
                eye-height bands — 850–1000mm and 1400–1600mm from finished floor level. We
                assess compliance requirements at survey and provide a full scope report before
                committing to any Nottingham school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Nottingham NG7</h3>
              <p className="mt-2 text-sm text-muted">Main campus west of the city centre — lecture rooms, seminar spaces, library buildings, student accommodation glazing and sports centre. Significant south-facing glazed teaching stock from both 1960s–70s era and recent curtain-wall construction presenting solar control and manifestation scope.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Nottingham Trent University NG1</h3>
              <p className="mt-2 text-sm text-muted">City Campus in Nottingham city centre, Clifton Campus NG11 and Brackenhurst Campus NG25 — teaching blocks, student social spaces, library glazing and student accommodation. South-facing classroom overheating is a documented issue on multiple Trent teaching elevations.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Nottingham College NG1</h3>
              <p className="mt-2 text-sm text-muted">Adams Building on Stoney Street and Highfields Campus — vocational training spaces, student common rooms, catering facilities and glazed teaching areas across one of the largest FE colleges in the East Midlands.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Nottingham secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All Nottingham maintained schools, academies and multi-academy trust buildings across the city and Nottinghamshire county — corridor glazing, sports hall manifestation, classroom solar control film and pastoral office frosted privacy film.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Nottingham education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Nottingham school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Nottingham school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Nottingham school
              safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Nottingham FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Nottingham schools and universities.
              We attend under your company name, carry your paperwork, and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Nottingham school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Nottingham and Nottinghamshire programmes.</strong>{" "}
              For Nottingham multi-academy trusts or FM contractors managing multiple school
              buildings across Nottinghamshire, we can programme rolling window film installation
              across all sites with a consistent film specification. One summer programme
              addresses the full portfolio — same film, same standard, same documentation at
              every building.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham school window film — common questions
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
            Related services for Nottingham schools
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
            <Link href="/window-film/solar-control-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Nottingham commercial and office buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Nottingham schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Nottingham schools and universities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Nottingham school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Nottingham schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
