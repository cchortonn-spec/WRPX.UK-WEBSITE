import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Sheffield | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Sheffield and South Yorkshire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Sheffield S10, Sheffield Hallam S1, Sheffield College and all Sheffield secondary schools covered. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Sheffield — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Sheffield and South Yorkshire. Solar control film for south-facing classrooms and overheating glazed spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Sheffield S10, Sheffield Hallam University S1, Sheffield College, and all Sheffield secondary schools, academies and MATs. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/school-window-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Sheffield school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating classrooms are the most common Sheffield school window film enquiry we receive. South-facing classrooms at Sheffield secondary schools, university lecture rooms and FE college study spaces routinely overheat during summer and spring terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the expense of HVAC upgrade or the disruption of window replacement. University of Sheffield, Sheffield Hallam and Sheffield College buildings are all in our regular coverage zone.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation a legal requirement in Sheffield schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas where pupils move at speed. This requirement applies across all Sheffield schools and university buildings. We assess the specific compliance requirement at survey and apply manifestation to the correct height bands, typically a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Sheffield schools with large-span corridor glazing and glass-walled sports halls are particularly exposed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Sheffield school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Sheffield school window film programmes. Six weeks of uninterrupted summer access allows full-school coverage, including all classrooms, corridor glazing and toilets, in a single programme. Easter and half-term breaks suit targeted single-area work — solar control film in a specific classroom block, or manifestation on a recently installed glazed screen. We programme to the Sheffield schools academic calendar and confirm with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Sheffield school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Sheffield school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required (for example, urgent manifestation compliance), we operate fully within safeguarding requirements and provide documentation to your Sheffield school safeguarding lead.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Sheffield schools on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Sheffield multi-academy trusts and FM contractors managing a portfolio of Sheffield school buildings. We can programme rolling window film installation across multiple Sheffield sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Sheffield MAT.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Sheffield school classrooms?",
    a: "Yes — overheating classrooms are the most common Sheffield school window film enquiry we receive. South-facing classrooms at Sheffield secondary schools, university lecture rooms and FE college study spaces routinely overheat during summer and spring terms. Solar control film reduces solar heat gain by 40–79% depending on specification — keeping rooms usable without the expense of HVAC upgrade or the disruption of window replacement. University of Sheffield, Sheffield Hallam and Sheffield College buildings are all in our regular coverage zone.",
  },
  {
    q: "Is glass manifestation a legal requirement in Sheffield schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridor areas where pupils move at speed. This requirement applies across all Sheffield schools and university buildings. We assess the specific compliance requirement at survey and apply manifestation to the correct height bands, typically a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Sheffield schools with large-span corridor glazing and glass-walled sports halls are particularly exposed.",
  },
  {
    q: "Can you install Sheffield school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Sheffield school window film programmes. Six weeks of uninterrupted summer access allows full-school coverage, including all classrooms, corridor glazing and toilets, in a single programme. Easter and half-term breaks suit targeted single-area work — solar control film in a specific classroom block, or manifestation on a recently installed glazed screen. We programme to the Sheffield schools academic calendar and confirm with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Sheffield school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Sheffield school window film programmes run during holiday periods to avoid working in an occupied school environment — but where term-time access is required (for example, urgent manifestation compliance), we operate fully within safeguarding requirements and provide documentation to your Sheffield school safeguarding lead.",
  },
  {
    q: "Can you work across multiple Sheffield schools on the same programme?",
    a: "Yes — and this is a particular strength for Sheffield multi-academy trusts and FM contractors managing a portfolio of Sheffield school buildings. We can programme rolling window film installation across multiple Sheffield sites with a consistent film specification, same application standard and the same documentation format at every building. One summer programme can address all sites in a Sheffield MAT.",
  },
];

export default function SchoolWindowFilmSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Sheffield Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Sheffield schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Sheffield and South Yorkshire.
            University of Sheffield, Sheffield Hallam, Sheffield College and all Sheffield
            secondary schools and academies — DBS-checked team, holiday-period scheduling,
            white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has one of the most varied education building stocks of any English city.
              The two universities — University of Sheffield S10 and Sheffield Hallam S1 — include
              buildings from the 1960s and 1970s with large single-glazed panels and more recent
              developments with extensive curtain wall glazing systems. Sheffield College at its
              City and Hillsborough campuses includes significant post-2000 construction with
              floor-to-ceiling classroom glazing.
            </p>
            <p>
              South-facing and south-west-facing classrooms across Sheffield secondary schools
              and universities are consistently the most problematic. The city sits in a valley
              basin and during summer terms, glazed south-facing rooms — even in well-insulated
              modern buildings — can reach temperatures that make learning impractical. Solar
              control film is the lowest-disruption, lowest-cost intervention available.
            </p>
            <p>
              Sheffield schools also have significant manifestation compliance requirements.
              Many Sheffield secondary schools built in the 1990s and 2000s feature large-span
              corridor glazing, glazed fire doors and glass-walled sports halls where Part M
              manifestation is a building regulations requirement. We assess compliance at survey
              and report on the full scope before any commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Sheffield schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Sheffield classrooms, lecture theatres and library
                spaces by 40–79% depending on specification. Keeps south-facing rooms usable
                during spring and summer terms without blinds that block the view or darken
                the space. Certain specifications also reduce heat loss through existing
                Sheffield school glazing in winter — a meaningful benefit given Sheffield&apos;s
                exposure on higher ground.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices, staff interview
                rooms and ground-floor windows adjacent to Sheffield school playgrounds or public
                footpaths. Frosted film provides full privacy from outside while keeping spaces
                light — indistinguishable from sandblasted glass at normal viewing distance.
                Half-height privacy film — opaque below, clear above — is commonly used in
                Sheffield school offices where corridor visibility is a concern.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels in Sheffield
                school corridors, entrance areas and sports halls where large glass panels could
                be mistaken for open space. Applied as a dot or stripe band at adult and child
                eye-height bands — 850–1000mm and 1400–1600mm from finished floor level. We
                assess compliance requirements at survey and provide a full scope report before
                committing to any Sheffield school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Sheffield S10</h3>
              <p className="mt-2 text-sm text-muted">Campus catering counters, student accommodation, library glazing, seminar rooms and corridor panels across the western campus zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield Hallam University S1</h3>
              <p className="mt-2 text-sm text-muted">City Campus buildings on Howard Street and Arundel Street — glazed teaching blocks, the Adsetts Centre and Owen Building all with significant south-facing glazing.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield College</h3>
              <p className="mt-2 text-sm text-muted">City Campus S1 and Hillsborough Campus S6 — catering training kitchens, glazed classroom blocks and common room areas across both Sheffield College sites.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All Sheffield maintained schools, academies and multi-academy trust buildings — corridor glazing, sports hall manifestation, classroom solar control and pastoral office frosted film.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Sheffield education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Sheffield school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Sheffield school window film programmes run outside term time, but where
              term-time access is required for urgent manifestation compliance work, we operate
              fully within safeguarding requirements and provide certificates to your Sheffield
              school safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Sheffield FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Sheffield schools and universities.
              We attend under your company name, carry your paperwork, and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Sheffield school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Sheffield programmes.</strong>{" "}
              For Sheffield multi-academy trusts or FM contractors managing multiple Sheffield
              school buildings, we can programme rolling window film installation across all
              sites with a consistent film specification. One summer programme addresses the
              full Sheffield MAT portfolio — same film, same standard, same documentation
              at every Sheffield school building.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield school window film — common questions
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
            Related services for Sheffield schools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education window film applications, film types and process.</p>
            </Link>
            <Link href="/architectural-wrap-education-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Sheffield schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Sheffield schools and universities.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Sheffield commercial and office buildings.</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Privacy frosted and etched-effect window film across Sheffield commercial and public buildings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Sheffield school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Sheffield schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Sheffield School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
