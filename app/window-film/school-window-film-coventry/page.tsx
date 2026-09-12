import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Coventry | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Coventry and Warwickshire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Warwick CV4, Coventry University CV1 and all Coventry secondary schools, academies and Warwickshire MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Coventry — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Coventry and Warwickshire. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Warwick CV4, Coventry University CV1, Coventry College CV1 and all Coventry secondary schools, academies and Warwickshire multi-academy trusts. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/school-window-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Coventry school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating south-facing classrooms are a consistent Coventry school window film enquiry. University of Warwick CV4 lecture theatres and seminar rooms on the Gibbet Hill and central campus, Coventry University CV1 teaching blocks and Coventry secondary school classrooms all experience significant solar heat gain in spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping classrooms workable without blinds that block the view or HVAC upgrades. Coventry is accessible from South Yorkshire via the M1 and M6.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in Coventry schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas. This applies across all Coventry schools and university buildings regardless of construction era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Coventry school buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Coventry school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Coventry school programmes. Coventry schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Coventry and Warwickshire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Coventry school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Coventry school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Warwickshire schools on the same MAT programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Coventry and Warwickshire multi-academy trusts and FM contractors managing school portfolios across the region. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. A single summer programme can address the full Coventry and Warwickshire portfolio efficiently.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Coventry school classrooms?",
    a: "Yes — overheating south-facing classrooms are a consistent Coventry school window film enquiry. University of Warwick CV4 lecture theatres and seminar rooms on the Gibbet Hill and central campus, Coventry University CV1 teaching blocks and Coventry secondary school classrooms all experience significant solar heat gain in spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping classrooms workable without blinds that block the view or HVAC upgrades. Coventry is accessible from South Yorkshire via the M1 and M6.",
  },
  {
    q: "Is glass manifestation required in Coventry schools?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas. This applies across all Coventry schools and university buildings regardless of construction era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Coventry school buildings from the 1970s to 2000s with large-span corridor glazing are most commonly exposed.",
  },
  {
    q: "Can you install Coventry school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Coventry school programmes. Coventry schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work. We programme to the Coventry and Warwickshire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Coventry school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Coventry school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
  },
  {
    q: "Can you work across multiple Warwickshire schools on the same MAT programme?",
    a: "Yes — and this is a particular strength for Coventry and Warwickshire multi-academy trusts and FM contractors managing school portfolios across the region. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. A single summer programme can address the full Coventry and Warwickshire portfolio efficiently.",
  },
];

export default function SchoolWindowFilmCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Coventry Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Coventry schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Coventry and Warwickshire.
            University of Warwick CV4, Coventry University CV1 and all Coventry secondary
            schools, academies and Warwickshire MATs — DBS-checked team, holiday-period
            scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Coventry education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry is home to two major universities with contrasting campuses and
              very different window film profiles. The University of Warwick CV4 occupies
              a large out-of-town campus on the Gibbet Hill and Westwood sites south-west
              of the city — a mix of 1960s and 1970s slab-form academic buildings, modern
              curtain-wall teaching facilities and a substantial student accommodation estate.
              South-facing lecture theatres, seminar rooms and library buildings on the
              Warwick campus are among the most consistently overheating glazed teaching
              spaces in the Midlands university sector during spring and summer terms.
            </p>
            <p>
              Coventry University CV1 operates from a compact city-centre campus around
              the Priory Street and Much Park Street area — a dense mixed-era estate with
              teaching blocks, student social areas, engineering and science facilities
              and a significant proportion of large-glazed modern buildings. The city-centre
              location means solar heat gain is compounded by urban heat island effects
              in south and west-facing rooms during the main exam and assessment period.
            </p>
            <p>
              Coventry&apos;s secondary school estate covers a city with above-average school-age
              population density and a significant proportion of buildings from the 1970s to
              1990s with large-span corridor glazing, glazed sports hall elevations and
              east-west orientated classroom blocks. Warwickshire beyond the city boundary
              has an active multi-academy trust sector with estates programmes regularly
              covering schools across both the urban area and the surrounding county.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 90 miles north of Coventry
              via the M1 and M6 — approximately 90 minutes, comfortably within a viable
              day visit range. We hold existing relationships with FM contractors and
              fit-out companies delivering programmes across the West Midlands and
              Warwickshire education estate.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Coventry schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Coventry and Warwick classrooms, lecture theatres
                and library spaces by 40–79% depending on specification. Keeps south-facing
                rooms usable during spring and summer terms without blinds that block the
                view or darken the space. Low-emissivity specifications also reduce winter
                heat loss through existing glazing — reducing heating costs without
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
                rooms and ground-floor windows adjacent to Coventry school playgrounds or
                public footpaths. Frosted film provides full privacy from outside while keeping
                spaces light. Half-height privacy film is frequently specified in school offices
                where corridor visibility to the reception desk is maintained.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels in
                Coventry school corridors, entrance areas and sports halls where large glass
                panels could be mistaken for open space. Applied as a dot or stripe band at
                850–1000mm and 1400–1600mm from finished floor level. We assess compliance
                requirements at survey and provide a full scope report before committing to
                any Coventry school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coventry schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Warwick CV4</h3>
              <p className="mt-2 text-sm text-muted">Gibbet Hill and Westwood campus south-west of Coventry — lecture theatres, seminar rooms, library buildings, Arts Centre glazing, student accommodation and sports facilities. Large 1960s–70s academic blocks and modern curtain-wall teaching facilities with significant south-facing solar control and compliance scope.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Coventry University CV1</h3>
              <p className="mt-2 text-sm text-muted">City-centre campus around Priory Street and Much Park Street — teaching blocks, engineering and design studios, student social areas and the Hub student building. Mixed-era estate with active estates procurement and consistent demand for solar control and privacy film.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Coventry College CV1</h3>
              <p className="mt-2 text-sm text-muted">Further education provision across the city with large teaching spaces, vocational training facilities and multiple campus buildings. Active facilities management and regular window film demand across solar control and compliance applications.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Coventry secondary schools and Warwickshire MATs</h3>
              <p className="mt-2 text-sm text-muted">All secondary schools, academies and multi-academy trust buildings across Coventry and the wider Warwickshire county. Manifestation, solar control and frosted privacy across the full estate — co-ordinated to the academic calendar for minimal disruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Coventry education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Coventry school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Coventry school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your safeguarding
              lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Coventry FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Coventry schools and universities.
              We attend under your company name, carry your paperwork and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Warwickshire MAT programmes.</strong>{" "}
              For MATs or FM contractors managing multiple school buildings across Coventry
              and Warwickshire, we can programme rolling window film installation across all
              sites with a consistent film specification. One summer programme addresses the
              full portfolio — same film, same standard, same documentation at every building.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Coventry school window film — common questions
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
            Related services for Coventry schools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education window film applications, film types and process.</p>
            </Link>
            <Link href="/window-film/school-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for Birmingham schools</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted film and manifestation for Birmingham schools, universities and West Midlands MATs.</p>
            </Link>
            <Link href="/window-film/solar-control-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Coventry commercial, office and educational buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Coventry schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Coventry schools and universities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Coventry school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Coventry schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Coventry School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
