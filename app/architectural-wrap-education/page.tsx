import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities | Architectural Film | WRPX",
  description:
    "Architectural vinyl wrapping for schools, colleges and universities across South Yorkshire and the East Midlands — kitchen surfaces, doors, furniture and wall panels. DBS-aware scheduling, void-period programmes, white-label for FM contractors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools, colleges and universities",
  "Architectural vinyl wrapping for educational buildings across South Yorkshire and the East Midlands. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces. DBS-checked installers, term-time or holiday scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your installers DBS checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We hold current enhanced DBS certificates. Most school and university programmes are scheduled during holiday periods or out-of-hours specifically to avoid working in an occupied pupil or student environment — but where term-time access is required, our team is fully checked and compliant.",
      },
    },
    {
      "@type": "Question",
      name: "What school and university surfaces can be vinyl wrapped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "School and university kitchens, canteen and servery counters, corridor doors and panels, common room and library furniture, staff room kitchen units, reception desks and admin area joinery, student accommodation kitchen doors and communal furniture. Heavily textured, soft or curved surfaces are not suitable for film.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work during school holidays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is often the preferred approach. Summer, Easter and half-term breaks give clear, uninterrupted access across the building. We programme work to the academic calendar and confirm the schedule with your estates or FM team before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work to education procurement frameworks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have experience working with FM contractors and estates teams who operate under public sector procurement frameworks. We can provide relevant documentation, method statements, and risk assessments as required. Contact us to discuss your specific procurement route.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover multi-site school or academy trust programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Academy trusts and multi-site further education colleges are a specific strength — we can programme rolling refurbishment across multiple sites in a consistent specification, sequenced to your estates maintenance calendar. Contact us to discuss multi-site scope.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Are your installers DBS checked?",
    a: "Yes. We hold current enhanced DBS certificates. Most school and university programmes are scheduled during holiday periods or out-of-hours specifically to avoid working in an occupied pupil or student environment — but where term-time access is required, our team is fully checked and compliant.",
  },
  {
    q: "What school and university surfaces can be vinyl wrapped?",
    a: "School and university kitchens, canteen and servery counters, corridor doors and panels, common room and library furniture, staff room kitchen units, reception desks and admin area joinery, student accommodation kitchen doors and communal furniture. Heavily textured, soft or curved surfaces are not suitable for film.",
  },
  {
    q: "Can you work during school holidays?",
    a: "Yes — and this is often the preferred approach. Summer, Easter and half-term breaks give clear, uninterrupted access across the building. We programme work to the academic calendar and confirm the schedule with your estates or FM team before mobilisation.",
  },
  {
    q: "Can you work to education procurement frameworks?",
    a: "We have experience working with FM contractors and estates teams who operate under public sector procurement frameworks. We can provide relevant documentation, method statements, and risk assessments as required. Contact us to discuss your specific procurement route.",
  },
  {
    q: "Do you cover multi-site school or academy trust programmes?",
    a: "Yes. Academy trusts and multi-site further education colleges are a specific strength — we can programme rolling refurbishment across multiple sites in a consistent specification, sequenced to your estates maintenance calendar. Contact us to discuss multi-site scope.",
  },
];

export default function ArchitecturalWrapEducationPage() {
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
            <span className="text-foreground">Vinyl Wrapping for Schools and Universities</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vinyl wrapping for schools, colleges and universities
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Educational buildings take hard daily use. Canteen counters, corridor doors, kitchen units and common room furniture show wear far faster than domestic equivalents — and replacement budgets rarely stretch to full fit-outs. Architectural vinyl wrapping gives estates teams and FM contractors a cost-effective, quick-turnaround route to surfaces that look right again. We work across South Yorkshire and the East Midlands, and we schedule around the academic calendar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Education Survey →
            </Link>
            <Link href="/architectural-vinyl-film/" className="btn-secondary">
              Architectural Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in schools, colleges and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen units and canteen counters</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit doors, drawer fronts and servery counter fascias are some of the highest-contact surfaces in a school. Wrapping in commercial-grade film refreshes the surface without replacing the fitted kitchen — typically done during the summer break.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor and classroom doors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Corridor doors in schools and colleges accumulate scuffs, paint chips and dated finishes quickly. Wrapping door faces and frames is a cost-efficient way to bring a whole corridor up to a consistent, clean finish in a single programme.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Common rooms and libraries</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Built-in furniture panels, shelving unit fascias, fixed seating surrounds and lounge furniture in common rooms and libraries can be wrapped to update a tired interior without full refurbishment.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin desks</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The school or college reception is the first point of contact for visitors. Wrapping a dated reception desk fascia in a clean, fresh finish improves the first impression for parents, inspectors and prospective students at minimal cost.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                University-owned student accommodation — halls, flats, en-suite clusters — shares many of the same requirements as purpose-built student accommodation: kitchen doors, communal furniture, communal kitchen and bathroom panels. See our dedicated student accommodation page for the full picture.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Science and food tech benches</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Lab and food technology bench fascias and plinths can be wrapped to update the look of a dated room without the disruption of new bench installation. We assess chemical resistance requirements for science areas and specify film accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Scheduled around the academic calendar
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Most school and college wrapping programmes run during the summer break — a 6-week window that gives clear, uninterrupted access across the building without disrupting teaching or pupil movement.
            </p>
            <p>
              <strong className="text-foreground">Summer programmes.</strong> The majority of school wrapping work happens in July and August. If you are planning for September, the summer break is the right time — and advance planning before Easter is recommended for larger programmes.
            </p>
            <p>
              <strong className="text-foreground">Easter and half-term.</strong> Shorter programmes — a single kitchen, a few classrooms, a reception area — can be done over Easter or half-term. We confirm scope and access before committing to a holiday-window programme.
            </p>
            <p>
              <strong className="text-foreground">Multi-site academy trusts.</strong> If you manage a trust with multiple schools, we can programme rolling refurbishment across sites — sequenced to the maintenance calendar and delivered to a consistent film specification across every building. This is a specific strength: consistent quality, consistent scheduling, one installer relationship across the whole trust.
            </p>
            <p>
              <strong className="text-foreground">DBS-checked team.</strong> All our installers hold current enhanced DBS certificates. Where term-time access is unavoidable, we operate fully within safeguarding requirements and can provide documentation to your estates or safeguarding lead.
            </p>
          </div>
        </div>
      </section>

      {/* FM and procurement */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working with FM contractors and estates teams
          </h2>
          <p className="text-muted leading-relaxed">
            We work white-label for FM contractors and estates management companies delivering refurbishment programmes across educational clients. We attend under your company&apos;s instructions, carry your paperwork, and report to your project manager — the school or trust sees your team throughout.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            We are experienced with the documentation requirements of public sector and education clients: method statements, COSHH sheets, risk assessments, photographic handover records. If your procurement route requires specific documentation, tell us and we will provide it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss an Education Programme →
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
            School and university wrapping — common questions
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

      {/* City pages */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Education wrapping by city
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/architectural-wrap-education-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Wrapping for Sheffield schools, Sheffield Hallam University, University of Sheffield and South Yorkshire academies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services for education
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Student accommodation wrapping</h3>
              <p className="mt-2 text-sm text-muted">Kitchen and communal furniture wrapping for PBSA and university-owned student accommodation.</p>
            </Link>
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">School window film</h3>
              <p className="mt-2 text-sm text-muted">Frosted safety manifestation and solar control film for schools, colleges and universities.</p>
            </Link>
            <Link href="/education-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Education graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics installation for school and university interior and wayfinding projects.</p>
            </Link>
            <Link href="/architectural-vinyl-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural vinyl film overview</h3>
              <p className="mt-2 text-sm text-muted">Full overview of architectural film services for commercial and public-sector buildings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a school or university wrapping programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Summer programmes book early. We cover South Yorkshire, the East Midlands and West Yorkshire — get in touch now to scope and schedule your programme for the next holiday window.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request an Education Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
