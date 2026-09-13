import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Leeds | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Leeds and West Yorkshire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Leeds LS2, Leeds Beckett LS6, Leeds College of Building and all Leeds secondary schools covered. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Leeds — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Leeds and West Yorkshire. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Leeds LS2, Leeds Beckett University LS6, Leeds College of Building LS2, and all Leeds secondary schools, academies and MATs across West Yorkshire. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/school-window-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leeds school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating classrooms are the most common Leeds school window film enquiry we receive. South-facing classrooms at Leeds secondary schools, University of Leeds lecture rooms and Leeds Beckett teaching spaces routinely overheat during summer and spring terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the expense of HVAC upgrade or the disruption of window replacement. The University of Leeds, Leeds Beckett and Leeds College of Building are all within our regular Leeds coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation a legal requirement in Leeds schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas where pupils move at speed. This requirement applies across all Leeds schools and university buildings. We assess the specific compliance requirement at survey and apply manifestation to the correct height bands, typically a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Leeds schools with large-span corridor glazing and glass-walled sports halls are particularly exposed to this requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Leeds school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Leeds school window film programmes. Six weeks of uninterrupted summer access allows full-school coverage, including all classrooms, corridor glazing and toilets, in a single programme. Easter and half-term breaks suit targeted single-area work — solar control film in a specific classroom block, or manifestation on a recently installed glazed screen. We programme to the Leeds schools academic calendar and confirm with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Leeds school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Leeds school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required (for example, urgent manifestation compliance work), we operate fully within safeguarding requirements and provide documentation to your Leeds school safeguarding lead.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Leeds schools on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Leeds multi-academy trusts and FM contractors managing a portfolio of Leeds school buildings. We can programme rolling window film installation across multiple Leeds and West Yorkshire sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Leeds or West Yorkshire MAT.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Leeds school classrooms?",
    a: "Yes — overheating classrooms are the most common Leeds school window film enquiry we receive. South-facing classrooms at Leeds secondary schools, University of Leeds lecture rooms and Leeds Beckett teaching spaces routinely overheat during summer and spring terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the expense of HVAC upgrade or the disruption of window replacement. The University of Leeds, Leeds Beckett and Leeds College of Building are all within our regular Leeds coverage zone.",
  },
  {
    q: "Is glass manifestation a legal requirement in Leeds schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas where pupils move at speed. This requirement applies across all Leeds schools and university buildings. We assess the specific compliance requirement at survey and apply manifestation to the correct height bands, typically a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Leeds schools with large-span corridor glazing and glass-walled sports halls are particularly exposed to this requirement.",
  },
  {
    q: "Can you install Leeds school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Leeds school window film programmes. Six weeks of uninterrupted summer access allows full-school coverage, including all classrooms, corridor glazing and toilets, in a single programme. Easter and half-term breaks suit targeted single-area work — solar control film in a specific classroom block, or manifestation on a recently installed glazed screen. We programme to the Leeds schools academic calendar and confirm with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Leeds school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Leeds school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required (for example, urgent manifestation compliance work), we operate fully within safeguarding requirements and provide documentation to your Leeds school safeguarding lead.",
  },
  {
    q: "Can you work across multiple Leeds schools on the same programme?",
    a: "Yes — and this is a particular strength for Leeds multi-academy trusts and FM contractors managing a portfolio of Leeds school buildings. We can programme rolling window film installation across multiple Leeds and West Yorkshire sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Leeds or West Yorkshire MAT.",
  },
];

export default function SchoolWindowFilmLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leeds Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Leeds schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Leeds and West Yorkshire.
            University of Leeds, Leeds Beckett, Leeds College of Building and all Leeds
            secondary schools and academies — DBS-checked team, holiday-period scheduling,
            white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds has one of the largest education building stocks in England outside London.
              The University of Leeds LS2 — a Russell Group institution with over 38,000 students —
              spans an extensive campus west of the city centre, with a mix of 1960s and 1970s
              teaching blocks, modern glazed research buildings and substantial student
              accommodation. Many of the older University of Leeds buildings have large
              single-glazed classroom panels that both overheat in summer and lose significant
              heat in winter.
            </p>
            <p>
              Leeds Beckett University LS6, with its City Campus near the city centre and
              Headingley Campus to the north, includes post-2000 construction with extensive
              curtain wall glazing on south-facing teaching elevations. South-facing classrooms
              in these buildings are among the most consistently overheated in West Yorkshire
              during spring and summer terms — solar control film is the practical, low-disruption
              solution that estates teams increasingly specify.
            </p>
            <p>
              Leeds secondary schools and the broader West Yorkshire school estate have significant
              manifestation compliance requirements. Many schools built during the 1990s and 2000s
              feature large-span corridor glazing, glazed fire doors and glass-walled sports halls
              where Part M manifestation is a building regulations requirement. We assess compliance
              at survey and report on the full scope before any commitment to a Leeds school programme.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Leeds schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Leeds classrooms, lecture theatres and library
                spaces by 40–79% depending on specification. Keeps south-facing rooms usable
                during spring and summer terms without blinds that block the view or darken
                the space. Certain specifications also reduce heat loss through existing Leeds
                school and university glazing in winter — useful given West Yorkshire&apos;s
                exposure on higher ground north and west of the city.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices, staff interview
                rooms and ground-floor windows adjacent to Leeds school playgrounds or public
                footpaths. Frosted film provides full privacy from outside while keeping spaces
                light — indistinguishable from sandblasted glass at normal viewing distance.
                Half-height privacy film is commonly used in Leeds school offices where
                corridor visibility matters.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels in Leeds
                school corridors, entrance areas and sports halls where large glass panels could
                be mistaken for open space. Applied as a dot or stripe band at adult and child
                eye-height bands — 850–1000mm and 1400–1600mm from finished floor level. We
                assess compliance requirements at survey and provide a full scope report before
                committing to any Leeds school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Leeds LS2</h3>
              <p className="mt-2 text-sm text-muted">Campus catering counters, student accommodation glazing, library and seminar room windows, glazed corridor panels and sports centre across the western campus zone — substantial scope for solar control and manifestation.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds Beckett University LS6</h3>
              <p className="mt-2 text-sm text-muted">City Campus and Headingley Campus — curtain-wall glazed teaching blocks and student social spaces with south-facing classroom overheating. Carnegie Campus LS6 sports facilities with glass-panel sports halls.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds College of Building LS2</h3>
              <p className="mt-2 text-sm text-muted">North Street campus practical training spaces, glazed workshop areas and student common rooms across one of the UK&apos;s leading specialist construction colleges.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All Leeds maintained schools, academies and multi-academy trust buildings — corridor glazing, sports hall manifestation, classroom solar control film and pastoral office frosted privacy film across West Yorkshire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Leeds education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Leeds school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Leeds school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Leeds school
              safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Leeds FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Leeds schools and universities.
              We attend under your company name, carry your paperwork, and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Leeds school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Leeds and West Yorkshire programmes.</strong>{" "}
              For Leeds multi-academy trusts or FM contractors managing multiple school buildings
              across West Yorkshire, we can programme rolling window film installation across all
              sites with a consistent film specification. One summer programme addresses the full
              portfolio — same film, same standard, same documentation at every building.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds school window film — common questions
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
            Related services for Leeds schools
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
            <Link href="/window-film/solar-control-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Leeds commercial and office buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Leeds schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Leeds schools and universities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Leeds school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Leeds schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leeds School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
