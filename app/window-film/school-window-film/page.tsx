import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Film for Schools & Universities | Safety, Frosted & Solar | WRPX",
  description:
    "Professional window film installation for schools, colleges and universities across South Yorkshire and the East Midlands — safety manifestation, frosted privacy film and solar control film. DBS-checked installers, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/school-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film does a school or university need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are three main applications: safety manifestation (required by building regulations on any large glass panel that could be mistaken for an open door or wall — typically a band of dots or a line at adult and child eye height), frosted privacy film for toilets, changing rooms and ground-floor windows, and solar control film for south-facing classrooms, libraries and glazed common areas that overheat in summer.",
      },
    },
    {
      "@type": "Question",
      name: "Is glass manifestation required in schools by law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building regulations require manifestation on glazed doors and panels where the glass could be mistaken for a solid wall or an open doorway — typically where glass is near floor level or forms a full-width panel. Schools are particularly exposed to this requirement given high foot traffic and children running in corridors. We assess compliance requirements at survey and provide manifestation to the correct height bands.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work during school holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the standard approach. Summer, Easter and half-term breaks give uninterrupted access across the building without disrupting lessons or pupil movement. We programme work to the academic calendar and confirm the schedule with your estates team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All installers hold current enhanced DBS certificates. Most school window film programmes run during holiday periods to avoid working in an occupied school environment, but where term-time access is required, we operate fully within safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work for FM contractors and estates companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your company name, carry your documentation, and report to your project manager. The school, college or university sees your company throughout. Photographic sign-off at completion.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What window film does a school or university need?",
    a: "There are three main applications: safety manifestation (required by building regulations on any large glass panel that could be mistaken for an open door or wall — typically a band of dots or a line at adult and child eye height), frosted privacy film for toilets, changing rooms and ground-floor windows, and solar control film for south-facing classrooms, libraries and glazed common areas that overheat in summer.",
  },
  {
    q: "Is glass manifestation required in schools by law?",
    a: "Building regulations require manifestation on glazed doors and panels where the glass could be mistaken for a solid wall or an open doorway — typically where glass is near floor level or forms a full-width panel. Schools are particularly exposed to this requirement given high foot traffic and children running in corridors. We assess compliance requirements at survey and provide manifestation to the correct height bands.",
  },
  {
    q: "Can you work during school holidays?",
    a: "Yes — and this is the standard approach. Summer, Easter and half-term breaks give uninterrupted access across the building without disrupting lessons or pupil movement. We programme work to the academic calendar and confirm the schedule with your estates team before mobilisation.",
  },
  {
    q: "Are your installers DBS checked?",
    a: "Yes. All installers hold current enhanced DBS certificates. Most school window film programmes run during holiday periods to avoid working in an occupied school environment, but where term-time access is required, we operate fully within safeguarding requirements.",
  },
  {
    q: "Can you work for FM contractors and estates companies?",
    a: "Yes — white-label by default. We attend under your company name, carry your documentation, and report to your project manager. The school, college or university sees your company throughout. Photographic sign-off at completion.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Schools and Universities", item: "https://www.wrpx.co.uk/window-film/school-window-film/" },
  ],
};

export default function SchoolWindowFilmPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film for Schools and Universities</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for schools, colleges and universities — manifestation, frosted privacy and solar control
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Educational buildings have three distinct window film requirements: safety manifestation on large glazed panels (a building regulations requirement), frosted privacy film for toilets, changing rooms and ground-floor windows, and solar control film for classrooms and glazed areas that overheat in summer. WRPX installs all three across South Yorkshire and the East Midlands — DBS-checked team, holiday-period scheduling, white-label for FM contractors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a School Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Three types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The three types of window film schools need
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Safety manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on glazed doors and panels that could be mistaken for a solid wall or open doorway. In schools, this matters most on large glass panels in corridors, fire doors, sports hall glazing and entrance atria where pupils move at speed.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Manifestation is applied as a band of dots, stripes or logos at the required height bands — typically 850–1000mm and 1400–1600mm from finished floor level. We assess compliance requirements at survey and apply to both adult and child eye-height bands where required.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Toilet blocks, changing rooms, medical rooms, pastoral offices and ground-floor windows adjacent to play areas or public footpaths all need privacy glazing. Frosted and etched-effect film provides full privacy from the outside while keeping spaces light — and it is indistinguishable from sandblasted glass at normal viewing distance.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height privacy film — opaque on the lower portion and clear above — is commonly used in school offices and staff rooms where natural light matters but privacy is needed from corridor movement.
              </p>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South-facing classrooms, libraries, sixth-form common rooms and glazed atria overheat badly in spring and summer terms. Solar control film reduces solar heat gain by 40–79% — keeping the room usable for learning without blinds that block the view and darken the space.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                In winter, certain solar control film specifications also reduce heat loss through existing single or double glazing — keeping classrooms warmer and reducing heating costs without replacing windows.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Scheduled around the school and academic calendar
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Most school window film programmes run during holiday periods — the summer break for larger programmes, Easter or half-term for targeted single-area work. This avoids any disruption to teaching and removes the need to work around pupils in corridors.
            </p>
            <p>
              <strong className="text-foreground">Summer programmes.</strong> A full-school manifestation or solar control programme is best planned for July–August. The building is accessible, unoccupied, and there is sufficient time to complete all areas cleanly. Contact us before Easter to scope and schedule summer work.
            </p>
            <p>
              <strong className="text-foreground">Multi-site academy trusts and colleges.</strong> We can programme rolling window film installation across multiple sites in a consistent specification — same film, same application standard, same documentation at every building. This is particularly useful for academy trusts where manifestation compliance needs to be addressed across a portfolio of buildings.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked team.</strong> All installers hold current enhanced DBS certificates. Where term-time access is required — for urgent compliance work or a single-room application — we operate fully within safeguarding requirements and provide documentation to your safeguarding lead.
            </p>
          </div>
        </div>
      </section>

      {/* FM and white-label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working with FM contractors and estates teams
          </h2>
          <p className="text-muted leading-relaxed">
            We install white-label for FM contractors and facilities management companies delivering maintenance and compliance programmes across education clients. We attend under your company name, carry your documentation, and report to your project manager — the school, college or trust sees your team throughout.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            We provide method statements, COSHH sheets, risk assessments and photographic handover documentation as standard. If your procurement route requires specific additional documentation, tell us before the programme starts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss a School Window Film Programme →
            </Link>
            <Link href="/education-framework-vinyl-installation/" className="btn-secondary">
              Education Framework Procurement
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            School window film — common questions
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
            Related services for schools and universities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Vinyl wrapping for schools and universities</h3>
              <p className="mt-2 text-sm text-muted">Kitchen surfaces, corridor doors and furniture wrapping for educational buildings.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-2 text-sm text-muted">Safety manifestation for glazed doors and panels — building regulations compliance.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for toilets, changing rooms, medical rooms and ground-floor windows.</p>
            </Link>
            <Link href="/education-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Education graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract graphics installation for school and university interior projects.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for a school or university?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover South Yorkshire, the East Midlands and West Yorkshire. Summer programmes need early planning — get in touch now to scope and schedule your holiday-window installation.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a School Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
