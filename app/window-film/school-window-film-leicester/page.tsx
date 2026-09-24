import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Leicester | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Leicester and Leicestershire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Leicester LE1, De Montfort University LE1/LE2, Leicester College, Gateway College LE5 and all Leicestershire secondary schools and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Leicester — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Leicester and Leicestershire. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Leicester LE1, De Montfort University LE1/LE2, Leicester College City Campus, Gateway College LE5 and all Leicestershire secondary schools, academies and MATs. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/school-window-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leicester school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating classrooms and university teaching spaces are among the most common Leicester window film enquiries we handle. University of Leicester LE1 lecture theatres, seminar rooms and library buildings on the University Road campus, De Montfort University LE1/LE2 teaching blocks at the Hugh Aston Building, Vijay Patel Building and Bede Island, and Leicestershire secondary school classrooms across the city and county all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without air conditioning installation or window replacement. Leicester is within our regular daily coverage zone via the M1 south from South Yorkshire to junction 21.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in Leicester schools and universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where students move at speed. This applies across all Leicester schools, colleges and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Leicester university buildings from the 1960s to 1990s with large-span corridor glazing and open-plan teaching blocks are most commonly exposed, as are secondary school sports hall and physical education facility entrances across Leicestershire.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install Leicester school window film during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Leicester school programmes. Leicestershire schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work where the compliance or comfort issue is urgent. We programme to the Leicestershire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Leicester school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Leicester school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Leicestershire schools on the same MAT programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is a particular strength for Leicestershire multi-academy trusts managing school portfolios across the city and county. Major Leicestershire MATs include Discovery Schools Academy Trust, Avanti Schools Trust (with Avanti Court Primary School in Leicester), STAR Academy Trust, Lionheart Academies Trust and Diocese of Leicester Academies Trust — each managing multiple secondary and primary academies across Leicester, Loughborough, Hinckley, Market Harborough and surrounding Leicestershire districts. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. One summer programme addresses the full Leicestershire MAT portfolio.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Leicester school classrooms?",
    a: "Yes — overheating classrooms and university teaching spaces are among the most common Leicester window film enquiries we handle. University of Leicester LE1 lecture theatres, seminar rooms and library buildings on the University Road campus, De Montfort University LE1/LE2 teaching blocks at the Hugh Aston Building, Vijay Patel Building and Bede Island, and Leicestershire secondary school classrooms across the city and county all experience significant solar heat gain during spring and summer terms. Solar control film reduces heat gain by 40–79% depending on specification — keeping rooms workable without air conditioning installation or window replacement. Leicester is within our regular daily coverage zone via the M1 south from South Yorkshire to junction 21.",
  },
  {
    q: "Is glass manifestation required in Leicester schools and universities?",
    a: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — particularly in high-traffic corridors, sports halls and entrance areas where students move at speed. This applies across all Leicester schools, colleges and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Leicester university buildings from the 1960s to 1990s with large-span corridor glazing and open-plan teaching blocks are most commonly exposed, as are secondary school sports hall and physical education facility entrances across Leicestershire.",
  },
  {
    q: "Can you install Leicester school window film during the summer holidays?",
    a: "Yes — and this is the preferred approach for larger Leicester school programmes. Leicestershire schools typically provide six weeks of uninterrupted summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work where the compliance or comfort issue is urgent. We programme to the Leicestershire schools academic calendar and confirm the access schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked for Leicester school work?",
    a: "Yes — we hold current enhanced DBS certificates across the installation team. Most Leicester school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your safeguarding lead on request.",
  },
  {
    q: "Can you work across multiple Leicestershire schools on the same MAT programme?",
    a: "Yes — and this is a particular strength for Leicestershire multi-academy trusts managing school portfolios across the city and county. Major Leicestershire MATs include Discovery Schools Academy Trust, Avanti Schools Trust (with Avanti Court Primary School in Leicester), STAR Academy Trust, Lionheart Academies Trust and Diocese of Leicester Academies Trust — each managing multiple secondary and primary academies across Leicester, Loughborough, Hinckley, Market Harborough and surrounding Leicestershire districts. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same documentation format at every building. One summer programme addresses the full Leicestershire MAT portfolio.",
  },
];

export default function SchoolWindowFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leicester Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Leicester schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Leicester and Leicestershire.
            University of Leicester LE1, De Montfort University LE1/LE2, Leicester College,
            Gateway College LE5 and all Leicestershire secondary schools, academies and
            MATs — DBS-checked team, holiday-period scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is home to two major universities and a significant further
              education sector, alongside one of the most diverse and dense secondary
              school estates in the East Midlands. The University of Leicester LE1,
              a Russell Group institution with over 20,000 students, occupies a
              compact campus on University Road south of the city centre — a mix of
              Victorian and Edwardian buildings, mid-century teaching blocks and modern
              glazed research facilities. The south-facing teaching elevations across
              the campus, particularly in the Ken Edwards Building, the Charles Wilson
              Building and the library complex, generate significant overheating during
              summer terms.
            </p>
            <p>
              De Montfort University LE1/LE2 operates from its Bede Island campus on
              the River Soar — a large estate combining the iconic Hugh Aston Building,
              the Vijay Patel Building creative arts complex, the Edith Murphy House
              nursing and healthcare facilities, and the Queen&apos;s Building engineering
              block. DMU&apos;s campus is a mix of heavily glazed modern structures built
              from the 1990s through the 2010s — a building generation with significant
              solar heat gain through south and west-facing facades. The estates team
              actively procures window film for overheating zones and compliance work
              across the campus.
            </p>
            <p>
              Leicester College (City Campus LE2, St Margaret&apos;s Campus LE1 and
              Freemen&apos;s Park Campus LE2) and Gateway College LE5 serve substantial
              further education populations across Leicester, with large teaching
              blocks from the 1960s through to recent builds that present typical
              overheating and manifestation compliance challenges. Leicestershire&apos;s
              secondary school estate is extensive and diverse, with schools across
              Leicester city and the county boroughs of Hinckley, Loughborough,
              Market Harborough, Melton Mowbray and Coalville — all served by the
              M1 south corridor.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 50 miles north of
              Leicester city centre via the M1 to junction 21 — a straightforward
              daily reach with no additional mobilisation premium on Leicester
              commissions. The A46 orbital around Leicester gives direct access to
              school and university sites across all Leicester city postcodes and
              the county boroughs from a single base day.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Leicester schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Leicester classrooms, lecture theatres and
                library spaces by 40–79% depending on specification. Keeps south and
                west-facing rooms usable during spring and summer terms without blinds
                that block the view or darken the space. Certain low-emissivity
                specifications also reduce winter heat loss through existing Leicester
                school and university glazing — lowering heating costs without window
                replacement.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices, staff
                interview rooms and ground-floor windows adjacent to Leicester school
                playgrounds or public pathways. Frosted film provides full privacy
                from outside while keeping spaces light. Half-height privacy film is
                frequently specified in Leicester school and university offices where
                corridor visibility to the reception desk is maintained.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels
                in Leicester school corridors, entrance areas and sports halls where
                large glass panels could be mistaken for open space. Applied as a dot
                or stripe band at 850–1000mm and 1400–1600mm from finished floor level.
                We assess compliance requirements at survey and provide a full scope
                report before committing to any Leicester school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leicester schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Leicester LE1</h3>
              <p className="mt-2 text-sm text-muted">University Road campus south of the city centre — lecture theatres, seminar rooms, library buildings, research facilities and student accommodation. Mix of Victorian, mid-century and modern glazed buildings with south-facing solar heat gain on the Ken Edwards and Charles Wilson teaching elevations.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">De Montfort University LE1/LE2</h3>
              <p className="mt-2 text-sm text-muted">Bede Island campus — Hugh Aston Building, Vijay Patel Building, Edith Murphy House and Queen&apos;s Building. Heavily glazed 1990s–2010s teaching blocks with significant south and west-facing overheating exposure. Active estates procurement team commissioning window film and compliance work.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leicester College &amp; Gateway College</h3>
              <p className="mt-2 text-sm text-muted">Leicester College City Campus LE2, St Margaret&apos;s Campus LE1 and Freemen&apos;s Park Campus LE2 — large FE estate with 1960s–2010s teaching stock. Gateway College LE5 on the eastern edge of Leicester serving diverse student populations across the city.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leicestershire secondary schools and MATs</h3>
              <p className="mt-2 text-sm text-muted">All secondary schools, academies and multi-academy trust buildings across Leicester city and the county — Discovery Schools, Avanti, STAR, Lionheart and Diocese of Leicester Academies Trust portfolios, plus schools across Hinckley, Loughborough, Market Harborough, Melton Mowbray and Coalville.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Leicester education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Leicester school window film
              programmes. Six weeks of uninterrupted access allows full-school coverage across
              all film types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Leicester school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Leicester school
              safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Leicester FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Leicester schools and universities.
              We attend under your company name, carry your paperwork and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Leicester school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Leicestershire MAT programmes.</strong>{" "}
              For MATs or FM contractors managing multiple school buildings across Leicestershire,
              we can programme rolling window film installation across all sites with a consistent
              film specification. One summer programme addresses the full portfolio — same film,
              same standard, same documentation at every building. The M1 and A46 give efficient
              access to schools across the whole Leicestershire county boundary from a single
              base day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester school window film — common questions
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
            Related services for Leicester schools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all education window film applications, film types and process.</p>
            </Link>
            <Link href="/window-film/school-window-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for Nottingham schools</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted film and manifestation for Nottingham schools, Nottingham Trent and University of Nottingham.</p>
            </Link>
            <Link href="/window-film/solar-control-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Leicester commercial and office buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Leicester schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Leicester schools, De Montfort University and University of Leicester.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Leicester school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Leicester schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leicester School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
