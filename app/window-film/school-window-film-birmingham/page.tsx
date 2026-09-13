import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Birmingham | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Birmingham and the West Midlands — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Birmingham B15, Aston University B4, Birmingham City University B4 and all Birmingham secondary schools, academies and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Birmingham — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Birmingham and the West Midlands. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Birmingham B15, Aston University B4, Birmingham City University B4, Coventry University CV1 and all Birmingham secondary schools, academies and multi-academy trusts across the West Midlands. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/school-window-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Birmingham school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating south-facing classrooms are the most common Birmingham school window film enquiry we handle. University of Birmingham B15 lecture rooms and seminar blocks, Aston University B4 teaching spaces and Birmingham secondary school classrooms all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without HVAC upgrade or window replacement. Birmingham is within our regular coverage zone via the M1 and M6.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in Birmingham schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where pupils move at speed. This applies across all Birmingham schools and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools and university buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Birmingham school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Birmingham school programmes. Birmingham schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Birmingham and West Midlands schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Birmingham school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Birmingham school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple West Midlands schools on the same MAT programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Birmingham multi-academy trusts and FM contractors managing school portfolios across the West Midlands. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. Birmingham has one of the largest MAT sectors in England — one summer programme can address the full West Midlands portfolio efficiently.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Birmingham school classrooms?",
    a: "Yes — overheating south-facing classrooms are the most common Birmingham school window film enquiry we handle. University of Birmingham B15 lecture rooms and seminar blocks, Aston University B4 teaching spaces and Birmingham secondary school classrooms all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without HVAC upgrade or window replacement. Birmingham is within our regular coverage zone via the M1 and M6.",
  },
  {
    q: "Is glass manifestation required in Birmingham schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where pupils move at speed. This applies across all Birmingham schools and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Schools and university buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
  },
  {
    q: "Can you install Birmingham school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Birmingham school programmes. Birmingham schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Birmingham and West Midlands schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Birmingham school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Birmingham school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
  },
  {
    q: "Can you work across multiple West Midlands schools on the same MAT programme?",
    a: "Yes — and this is a particular strength for Birmingham multi-academy trusts and FM contractors managing school portfolios across the West Midlands. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. Birmingham has one of the largest MAT sectors in England — one summer programme can address the full West Midlands portfolio efficiently.",
  },
];

export default function SchoolWindowFilmBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Birmingham Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Birmingham schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Birmingham and the West Midlands.
            University of Birmingham B15, Aston University B4, Birmingham City University B4
            and all West Midlands secondary schools, academies and MATs — DBS-checked
            team, holiday-period scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham is the UK&apos;s second largest city and home to one of the largest
              concentrations of higher education outside London. The University of Birmingham
              B15 — a Russell Group institution with over 38,000 students — occupies a large
              Edgbaston campus with Victorian redbrick buildings, 1960s concrete academic
              blocks and modern curtain-wall teaching facilities. South-facing elevations across
              the campus are consistently among the most-reported overheating zones in the
              Midlands university sector during spring and summer terms.
            </p>
            <p>
              Aston University B4, positioned at the eastern edge of the city centre, is a
              leading technical university with a compact purpose-built campus and a highly
              active estates procurement programme. Birmingham City University operates
              across multiple sites — its City Centre Campus on Millennium Point B4 and
              Bournville Campus B30 — with a broad mix of teaching spaces and vocational
              facilities from multiple construction eras. Newman University B32 in Bartley
              Green serves a smaller student population but maintains a significant school
              and education supply specialism.
            </p>
            <p>
              Birmingham&apos;s secondary school estate is one of the largest in England. The
              city has an exceptionally high proportion of academy schools, with some of the
              largest multi-academy trusts in the country managing dozens of secondary schools
              across Birmingham and the wider West Midlands conurbation. For FM contractors
              managing estate programmes across a Birmingham MAT, the scale and geographic
              spread of the school portfolio makes consistent window film specification and
              co-ordinated holiday scheduling particularly valuable.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 80 miles north of Birmingham
              via the M1 and M6 — a 90-minute drive that sits comfortably within a viable
              day visit range. We hold existing relationships with FM contractors and fit-out
              companies delivering maintenance programmes across the Birmingham and West
              Midlands education estate.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Birmingham schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Birmingham classrooms, lecture theatres and library
                spaces by 40–79% depending on specification. Keeps south-facing rooms usable
                during spring and summer terms without blinds that block the view or darken
                the space. Certain low-emissivity specifications also reduce winter heat loss
                through existing Birmingham school glazing — reducing heating costs without
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
                rooms and ground-floor windows adjacent to Birmingham school playgrounds or
                public footpaths. Frosted film provides full privacy from outside while keeping
                spaces light. Half-height privacy film is frequently specified in Birmingham
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
                Birmingham school corridors, entrance areas and sports halls where large
                glass panels could be mistaken for open space. Applied as a dot or stripe
                band at 850–1000mm and 1400–1600mm from finished floor level. We assess
                compliance requirements at survey and provide a full scope report before
                committing to any Birmingham school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Birmingham schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Birmingham B15</h3>
              <p className="mt-2 text-sm text-muted">Edgbaston campus south of the city centre — lecture rooms, seminar spaces, library buildings, student accommodation glazing and sports facilities. Victorian Gothic and mid-century academic buildings plus modern curtain-wall teaching stock with significant south-facing solar control and manifestation scope.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Aston University B4</h3>
              <p className="mt-2 text-sm text-muted">Compact purpose-built campus at the east edge of the city centre — teaching blocks, engineering and science facilities, student social areas and library buildings. Active estates procurement programme with consistent demand for solar control and compliance window film.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Birmingham City University B4 &amp; B30</h3>
              <p className="mt-2 text-sm text-muted">City Centre Campus at Millennium Point and Bournville Campus — large mixed-era teaching buildings, vocational training spaces and student social facilities. Multiple construction eras with varied glazing stock and active facilities management across both campuses.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Birmingham secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All secondary schools, academies and multi-academy trust buildings across Birmingham and the wider West Midlands conurbation. Manifestation, solar control and frosted privacy across the full estate — one of the largest urban school portfolios in England.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Birmingham education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Birmingham school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Birmingham school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Birmingham school
              safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Birmingham FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Birmingham schools and universities.
              We attend under your company name, carry your paperwork and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Birmingham school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site West Midlands MAT programmes.</strong>{" "}
              For MATs or FM contractors managing multiple school buildings across Birmingham
              and the wider West Midlands, we can programme rolling window film installation
              across all sites with a consistent film specification. One summer programme
              addresses the full portfolio — same film, same standard, same documentation
              at every building.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham school window film — common questions
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
            Related services for Birmingham schools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education window film applications, film types and process.</p>
            </Link>
            <Link href="/window-film/school-window-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for Manchester schools</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted film and manifestation for Manchester schools, universities and Greater Manchester MATs.</p>
            </Link>
            <Link href="/window-film/solar-control-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Birmingham commercial, office and educational buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Birmingham schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Birmingham schools and universities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Birmingham school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Birmingham schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Birmingham School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
