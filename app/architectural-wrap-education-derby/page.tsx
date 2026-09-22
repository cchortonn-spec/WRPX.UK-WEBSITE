import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vinyl Wrapping for Schools & Universities Derby | Kitchen, Door & Surface Wrap | WRPX",
  description:
    "Vinyl wrapping for schools, colleges and universities in Derby — kitchen surfaces, canteen counters, corridor doors, furniture and wall panels. WRPX covers University of Derby DE1, Derby College, secondary schools, academies and multi-academy trusts across Derby and Derbyshire. DBS-checked, holiday-period scheduling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/architectural-wrap-education-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Vinyl wrapping for schools and universities Derby — kitchen, door and surface wrap",
  "Architectural vinyl wrapping for educational buildings across Derby and Derbyshire. School kitchens and canteen counters, corridor doors and panels, library and common room furniture, student accommodation surfaces, reception desks and admin joinery. University of Derby DE1, Derby College and all secondary schools, academies and multi-academy trusts across Derby and Derbyshire. DBS-checked installers, holiday-period and out-of-hours scheduling, white-label for FM contractors and estates teams."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Architectural Vinyl Film", item: "https://www.wrpx.co.uk/architectural-vinyl-film/" },
    { "@type": "ListItem", position: 3, name: "Vinyl Wrapping for Schools and Universities", item: "https://www.wrpx.co.uk/architectural-wrap-education/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/architectural-wrap-education-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you wrap school kitchens and canteen counters in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — school kitchen and canteen counter wrapping is one of our most active education sector applications across Derby and Derbyshire. Kitchen unit door faces, drawer fronts, servery counter fascias and canteen furniture can be wrapped during summer, Easter or half-term holidays to minimise disruption. University of Derby campus catering facilities and Derby College sites are all within our regular coverage zone. Derby is approximately 45 minutes from our South Yorkshire base via the A38 and M1, making it straightforward to plan and mobilise holiday-period education programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Are your installers DBS checked for Derby school work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we hold current enhanced DBS certificates. The majority of Derby school and university wrapping programmes are scheduled during holiday periods or out-of-hours to avoid working in an occupied pupil environment — but where term-time access is required for specific areas, our full team is DBS checked and compliant with standard safeguarding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you schedule Derby school work around the academic calendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is our standard approach across Derby and Derbyshire. Summer holidays provide the longest uninterrupted access window and are the preferred scheduling period for larger Derby school refurbishment programmes. Easter and half-term breaks suit smaller-scope work or where the school cannot wait for summer. We confirm the access schedule with your Derby school or university estates team before any mobilisation. For multi-site Derby MAT programmes, we plan the season across all sites simultaneously to maximise the holiday window.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Derby academy trusts and multi-site school programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Derby and Derbyshire have a substantial multi-academy trust sector with secondary schools across the city and county — programmes requiring consistent specification across multiple sites on a structured estates schedule are specifically what we are set up to deliver. We can programme rolling refurbishment across all Derby MAT sites in a single season with a consistent finish standard and the same documentation format at every school.",
      },
    },
    {
      "@type": "Question",
      name: "What Derby university and college buildings and surfaces do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "University of Derby DE1 Kedleston Road and Markeaton Street campuses — canteen counters and kitchen surfaces, student union and social areas, library and common room furniture, student accommodation kitchen units, corridor door faces, reception and admin area joinery, staff room kitchen units. Derby College at Wilmorton DE21 and Broomfield DE22 — catering facilities, corridor doors and general joinery surfaces. Surface assessment before any commitment — not all university and college surfaces are suitable for film.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function ArchitecturalWrapEducationDerbyPage() {
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
            <Link href="/architectural-wrap-education/" className="text-accent hover:underline">Wrapping for Schools &amp; Universities</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Architectural Vinyl Wrapping · Schools &amp; Universities Derby
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Vinyl wrapping for schools and universities — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX wraps school kitchens, canteen counters, corridor doors, furniture and
            wall panels for schools, colleges and universities across Derby and Derbyshire.
            University of Derby DE1, Derby College and all secondary schools, academies
            and multi-academy trusts. DBS-checked installers, holiday-period scheduling,
            and white-label delivery for FM contractors and estates teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Get a Derby Schools Quote →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>

      {/* What we wrap */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we wrap in Derby schools and universities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">School kitchen surfaces</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Kitchen unit door faces, drawer fronts and base panels in staff
                kitchens, prep areas and servery rooms — wrapped during summer or
                half-term to avoid disruption to the school day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Canteen counter fascias</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Servery counter fascias, end panels and cashier counters in Derby school
                dining halls and university canteens — a fast, high-impact refresh
                without the disruption or cost of a full fit-out.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Corridor doors and panels</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Door faces, door frames and corridor wall panels — often the highest-wear
                surfaces in a Derby school. Wrapped to refresh tired laminate or
                painted MDF without replacement.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Library and common room furniture</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shelving unit doors, desk panels, table edge banding and storage joinery
                in library, sixth-form common room and learning resource centre spaces
                across Derby and Derbyshire schools.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and admin areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception desk fascias, admin office joinery and headteacher suite
                cabinetry — surfaces that carry the school&apos;s public face and benefit
                from a clean, consistent update.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Student accommodation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                University of Derby student accommodation kitchen units, bathroom
                panels and bedroom furniture — wrapped between tenancy periods for
                cost-effective block-by-block refresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Derby education context */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby&apos;s school and university estate
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby is home to the University of Derby — a growing modern university
              with campuses at Kedleston Road DE22 and Markeaton Street DE1, covering
              business, law, health sciences, arts and engineering. The university estate
              carries a wide range of catering, residential and teaching surfaces where
              vinyl wrapping is well-suited as a refurbishment approach — campus catering
              counters, student accommodation kitchen units, library and social space
              furniture, and corridor joinery across all faculty buildings.
            </p>
            <p>
              Derby College operates two main campuses at Wilmorton DE21 and Broomfield
              DE22. Both campuses have substantial canteen and catering facilities where
              vinyl wrapping provides a cost-effective alternative to replacement
              during holiday periods. The college&apos;s further education student population
              means summer holiday windows are long and relatively unconstrained for
              estates work.
            </p>
            <p>
              Across the wider city and county, Derby and Derbyshire have a significant
              secondary school estate including standalone academies and schools within
              multi-academy trusts. Many of these schools carry canteen counters,
              corridor door faces and kitchen surfaces originally fitted in the 1990s
              and 2000s — now at the age where vinyl wrapping delivers a clean,
              cost-effective update that avoids the disruption and cost of a full
              refurbishment. From our South Yorkshire base, Derby is approximately
              45 minutes via the A38 and M1, making it a practical day-run for a
              wrapping programme without overnight stays.
            </p>
            <p>
              We hold current enhanced DBS certificates and carry public liability
              insurance appropriate for education premises. All work is scheduled around
              academic calendars to minimise disruption — typically summer holidays for
              larger programmes, Easter and half-term for smaller-scope work. White-label
              delivery is available for FM contractors, estates consultants and building
              management companies carrying Derby school or university contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Why vinyl wrapping for schools */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why schools and universities choose vinyl wrapping
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fraction of replacement cost</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Replacing a school canteen counter or a block of corridor doors is
                expensive and disruptive. Vinyl wrapping the existing surfaces delivers
                a comparable visual result at a significantly lower cost — and completes
                during a holiday window without major works.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Holiday-period completion</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                WRPX schedules Derby school work to complete within summer, Easter or
                half-term breaks. No disruption to teaching, no contractor presence
                during term time, no scaffolding or site hoardings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">DBS-checked team</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full team holds current enhanced DBS certificates. Where term-time
                access is required — for specific areas that cannot wait for a holiday
                window — we are fully compliant with safeguarding requirements.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Consistent finish across sites</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For Derby MAT programmes with multiple schools, we deliver the same
                specification and finish standard at every site — the same film,
                same application method, same documentation. No variation across sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby school and university wrapping — common questions
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

      {/* Related links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-semibold text-foreground">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/architectural-wrap-education/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Education Wrapping Overview</p>
              <p className="mt-1 text-sm text-muted">National overview — all school and university services</p>
            </Link>
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">School Window Film</p>
              <p className="mt-1 text-sm text-muted">Privacy, solar and decorative film for schools</p>
            </Link>
            <Link href="/architectural-wrap-offices-derby/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Architectural Wrap Derby Offices</p>
              <p className="mt-1 text-sm text-muted">Commercial and office interior wrapping in Derby</p>
            </Link>
            <Link href="/architectural-wrap-education-sheffield/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">School Wrapping Sheffield</p>
              <p className="mt-1 text-sm text-muted">University of Sheffield, Hallam and South Yorkshire schools</p>
            </Link>
            <Link href="/architectural-wrap-education-nottingham/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">School Wrapping Nottingham</p>
              <p className="mt-1 text-sm text-muted">Nottingham Trent, UoN and Nottinghamshire schools</p>
            </Link>
            <Link href="/subcontract-vinyl-installer-derby/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Subcontract Installer Derby</p>
              <p className="mt-1 text-sm text-muted">White-label vinyl installation for sign companies in Derby</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Derby school or university — ready to discuss a programme?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Whether it&apos;s a single school canteen, a university block refresh or a
            multi-site MAT programme across Derby and Derbyshire — get in touch and
            we&apos;ll discuss the scope, timings and what vinyl wrapping can deliver for
            your estate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Get in Touch →
            </Link>
            <Link href="/architectural-wrap-education/" className="btn-secondary">
              Education Wrapping Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
