import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities Derby | Solar Control, Frosted & Manifestation | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across Derby and Derbyshire — solar control film for overheating classrooms, frosted privacy film and Part M safety manifestation. University of Derby DE1, Derby College Wilmorton and Broomfield campuses, and all Derbyshire secondary schools and MATs. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Window film for schools and universities Derby — solar control, frosted and manifestation",
  "Professional window film installation for educational buildings across Derby and Derbyshire. Solar control film for overheating south-facing classrooms and glazed teaching spaces, frosted privacy film for toilets, changing rooms and pastoral offices, Part M safety manifestation on glazed doors and corridors. University of Derby DE1, Derby College Wilmorton DE21 and Broomfield DE22, and all Derbyshire secondary schools, academies and MATs. DBS-checked installers, holiday-period scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/school-window-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Derby school classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overheating classrooms are a common Derby school window film enquiry. University of Derby DE1 teaching blocks on the Kedleston Road and Markeaton Street campuses, Derby College at its Wilmorton DE21 and Broomfield DE22 sites, and secondary schools across Derby city and the Derbyshire county boroughs all experience solar heat gain during spring and summer terms. South-facing classroom glazing on 1960s and 1970s school buildings — a significant portion of Derby&apos;s school estate — is particularly exposed. Solar control film reduces heat gain by 40–79% depending on specification, keeping classrooms workable without air conditioning installation or window replacement. Derby is approximately 35 minutes from our South Yorkshire base via the M1 junction 25.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in Derby schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where glass could be mistaken for a solid wall or open doorway — in high-traffic corridors, sports halls and entrance areas where pupils move at speed. This applies to all Derby schools and university buildings regardless of build era. We assess the compliance requirement at survey and apply manifestation at the correct height bands: a dot or stripe band at 850–1000mm and 1400–1600mm from finished floor level. Derby secondary schools with 1970s and 1980s sports hall blocks and large-span corridor glazing are most frequently exposed to compliance gaps, as are University of Derby buildings with open-plan teaching floors and full-height glazed atria.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film in Derby schools during the summer holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the preferred approach for larger Derby school programmes. Derbyshire schools typically provide six weeks of summer access, allowing full-school coverage across manifestation, solar control and frosted privacy in a single programme. Easter and half-term breaks suit targeted single-area work where the compliance or comfort issue is urgent. We programme to the Derbyshire schools academic calendar and confirm the access schedule with your estates or site team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Derby school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates across the installation team. Most Derby school window film programmes run during holiday periods to avoid working in an occupied school environment. Where term-time access is required for urgent manifestation compliance work, we operate fully within safeguarding requirements and provide documentation to your designated safeguarding lead on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple Derbyshire schools on the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is particularly valuable for Derbyshire multi-academy trusts and FM contractors managing school portfolios across the city and county. Key Derbyshire MATs include the Bemrose School Trust, Archway Learning Trust, White Peak Academy Trust, the Pathfinder Schools Partnership and several Academies Enterprise Trust schools. We programme rolling window film installation across all MAT sites with a consistent film specification, same application standard and same sign-off documentation at every Derby and Derbyshire building. The M1 and A38 give efficient access from South Yorkshire to schools across the whole Derby and Derbyshire catchment.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function SchoolWindowFilmDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Derby Schools &amp; Universities
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window film for Derby schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control film, frosted privacy film and Part M safety
            manifestation for educational buildings across Derby and Derbyshire.
            University of Derby DE1, Derby College Wilmorton and Broomfield campuses,
            and all Derbyshire secondary schools, academies and MATs — DBS-checked
            team, holiday-period scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby School Survey →
            </Link>
            <Link href="/window-film/school-window-film/" className="btn-secondary">
              School Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby education context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby&apos;s education estate — the window film challenges
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby has a significant further and higher education sector alongside
              one of the most industrially shaped secondary school estates in the East
              Midlands. The University of Derby DE1 operates across two main campuses —
              Kedleston Road and Markeaton Street — with a mix of converted Victorian
              buildings, purpose-built 1960s and 1970s teaching blocks, and modern
              glazed facilities. The University of Derby has grown substantially over
              the past decade, with newer campus buildings featuring the heavily
              glazed south-facing elevations common to post-2000 educational construction
              — building types that generate significant solar heat gain in classrooms
              and seminar rooms through spring and summer terms.
            </p>
            <p>
              Derby College operates large further education campuses at Wilmorton DE21,
              east of the city centre, and Broomfield DE22, north of the city. Both
              campuses carry substantial 1960s and 1970s teaching block stock alongside
              newer builds — a building generation well known for south-facing glazed
              teaching rooms with limited shading and significant overheating exposure.
              The college&apos;s technical and vocational training facilities at Wilmorton
              serve Derby&apos;s engineering, manufacturing and logistics sector workforce,
              creating a consistent year-round occupation pattern that makes overheating
              a particularly acute problem in non-air-conditioned rooms.
            </p>
            <p>
              Derby&apos;s secondary school estate reflects the city&apos;s industrial
              heritage. Schools across the central DE1, Normanton DE23, Chaddesden DE21,
              Alvaston DE24 and Mickleover DE3 zones include a large proportion of
              1960s and 1970s builds with large single-glazed or early double-glazed
              south-facing classroom windows and sports hall blocks with full-height
              glazing requiring manifestation compliance work.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 35 minutes north of Derby
              city centre via the M1 to junction 25 and the A52 into Derby. Derby is a
              regular part of our East Midlands day programme — there is no mobilisation
              cost premium that makes single-school or single-building commissions
              unviable. The A38 and A52 give direct access to schools across all Derby
              city postcodes and the wider Derbyshire county boundary.
            </p>
          </div>
        </div>
      </section>

      {/* Three film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film Derby schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Reduces solar heat gain in Derby classrooms, lecture theatres and
                workshop spaces by 40–79% depending on specification. Keeps south
                and west-facing rooms usable during spring and summer terms without
                external blinds that darken the space or window replacement that
                disrupts the teaching programme. Certain low-emissivity specifications
                also reduce winter heat loss through older Derby school glazing,
                lowering heating costs alongside summer comfort improvement.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices and
                counselling rooms across Derby schools and university buildings.
                Ground-floor windows adjacent to Derby school playgrounds, public
                footpaths and car parks. Frosted film provides full privacy from
                outside while keeping rooms naturally lit. Half-height film is
                commonly specified in Derby school reception offices where corridor
                visibility is retained.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Part M manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels
                in Derby school corridors, entrance areas and sports halls where large
                glass panels could be mistaken for open space. Applied as a dot or
                stripe band at 850–1000mm and 1400–1600mm from finished floor level.
                We assess compliance at survey and provide a full scope report before
                committing to any Derby school programme.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Derby schools and universities covered */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby schools and universities we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">University of Derby DE1</h3>
              <p className="mt-2 text-sm text-muted">Kedleston Road and Markeaton Street campuses — lecture theatres, seminar rooms, studio spaces, sports facilities and student accommodation. Mix of Victorian, 1960s–1970s and modern glazed buildings. South and west-facing teaching elevations across both campuses generate significant solar heat gain in spring and summer terms.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Derby College — Wilmorton &amp; Broomfield</h3>
              <p className="mt-2 text-sm text-muted">Wilmorton DE21 — engineering, construction and technical training; large 1960s and 1970s teaching block stock. Broomfield DE22 — business, health and creative arts; mixed build era with consistent overheating and manifestation challenges. Both campuses have continuous year-round occupation creating persistent classroom comfort issues.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Derby secondary schools</h3>
              <p className="mt-2 text-sm text-muted">All secondary schools across Derby city — DE1 central, DE21 Chaddesden, DE22 Mickleover, DE23 Normanton, DE24 Alvaston, DE3 Mackworth. Large proportion of 1960s and 1970s builds with south-facing classroom glazing and sports hall blocks requiring manifestation. Derby Grammar School and St Benedicts Catholic School city-centre secondary sites also covered.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Derbyshire MATs and county schools</h3>
              <p className="mt-2 text-sm text-muted">Multi-academy trusts across Derbyshire including Bemrose Trust, Archway Learning Trust, White Peak Academy Trust and Pathfinder Schools Partnership — schools across Belper, Ashbourne, Buxton, Matlock, Alfreton and Ripley within the M1/A38 daily reach from South Yorkshire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How we work across Derby education
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Holiday-period scheduling.</strong>{" "}
              Summer holidays are the primary working window for Derby school window film
              programmes. Six weeks of access allows full-school coverage across all film
              types — manifestation, solar control and frosted privacy — in a single
              co-ordinated programme. Easter and half-term breaks suit targeted single-area
              work where the compliance or comfort issue is urgent.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked and safeguarding compliant.</strong>{" "}
              All WRPX installation team members hold current enhanced DBS certificates. Most
              Derby school window film programmes run outside term time, but where term-time
              access is required for urgent manifestation compliance work, we operate fully
              within safeguarding requirements and provide certificates to your Derby school
              designated safeguarding lead on request.
            </p>
            <p>
              <strong className="text-foreground">White-label for Derby FM contractors.</strong>{" "}
              We work white-label for FM contractors and maintenance companies delivering
              compliance and refurbishment programmes across Derby schools and universities.
              We attend under your company name, carry your paperwork and report to your
              project manager. Photographic sign-off at completion — before and after images
              for every Derby school window treated.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Derbyshire MAT programmes.</strong>{" "}
              For MATs or FM contractors managing multiple school buildings across Derbyshire,
              we programme rolling window film installation across all sites with a consistent
              film specification. One summer programme addresses the full portfolio — same film,
              same standard, same documentation at every building. The M1 and A38 give efficient
              access to schools across the whole Derby and Derbyshire catchment from a single
              base day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby school window film — common questions
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
            Related services for Derby schools
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
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat reduction window film for Derby commercial and office buildings.</p>
            </Link>
            <Link href="/architectural-wrap-education-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for Derby schools</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for Derby schools and the University of Derby.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a Derby school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes need early planning — we survey Derby schools and
              university buildings and provide a fixed-price scope co-ordinated to your
              academic calendar. Tell us the areas and we&apos;ll come and look.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
