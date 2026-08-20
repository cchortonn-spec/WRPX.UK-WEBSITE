import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Window Film for Student Accommodation — Privacy Film & Solar Control | WRPX",
  description:
    "Window film installation for student accommodation blocks — frosted privacy film for ground-floor and overlooked rooms, solar control film for overheating south-facing blocks, DDA manifestation for glazed common areas. South Yorkshire and East Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/student-accommodation-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What window film is most used in student accommodation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common applications are frosted or one-way mirror film for ground-floor bedroom windows and en-suite bathroom windows where overlooking is a problem, and solar control film for south and west-facing rooms that overheat in summer. DDA-compliant glass manifestation on glazed corridor doors and screens is also frequently required to meet Building Regulations Part M.",
      },
    },
    {
      "@type": "Question",
      name: "Can window film be installed while students are in residence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Communal areas, corridors and common room glazing can be done during normal hours. Bedroom and en-suite installations are typically scheduled room by room during student absence — during summer refurbishment, reading weeks or short breaks. A typical bedroom or en-suite window takes 20–40 minutes. We co-ordinate the access schedule with your accommodation or facilities team.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar control film help with student block overheating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — solar control film is one of the most cost-effective ways to address overheating in south and west-facing student rooms without replacing glazing. It reduces solar heat gain by 40–79% and cuts glare significantly. In winter it also provides a degree of insulation. It does not block the view and does not require planning permission in most cases.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do a full accommodation block in one programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — summer and inter-semester refurbishment programmes are the most efficient time to run a full-block window film installation. We can schedule systematically through floors and rooms and complete a block programme during a summer turnaround. We provide a full photographic completion record at the end of the programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work for student accommodation developers and operators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work for PBSA developers, university estate management teams, student accommodation operators and their FM contractors. White-label available for fit-out contractors and FM firms working on student accommodation programmes. We are based in South Yorkshire and cover Yorkshire, the East Midlands, the North West and further afield for larger programmes.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "What window film is most used in student accommodation?",
    a: "The most common applications are frosted or one-way mirror film for ground-floor bedroom windows and en-suite bathroom windows where overlooking is a problem, and solar control film for south and west-facing rooms that overheat in summer. DDA-compliant glass manifestation on glazed corridor doors and screens is also frequently required to meet Building Regulations Part M.",
  },
  {
    q: "Can window film be installed while students are in residence?",
    a: "Yes. Communal areas, corridors and common room glazing can be done during normal hours. Bedroom and en-suite installations are typically scheduled room by room during student absence — during summer refurbishment, reading weeks or short breaks. A typical bedroom or en-suite window takes 20–40 minutes. We co-ordinate the access schedule with your accommodation or facilities team.",
  },
  {
    q: "Does solar control film help with student block overheating?",
    a: "Yes — solar control film is one of the most cost-effective ways to address overheating in south and west-facing student rooms without replacing glazing. It reduces solar heat gain by 40–79% and cuts glare significantly. In winter it also provides a degree of insulation. It does not block the view and does not require planning permission in most cases.",
  },
  {
    q: "Can you do a full accommodation block in one programme?",
    a: "Yes — summer and inter-semester refurbishment programmes are the most efficient time to run a full-block window film installation. We can schedule systematically through floors and rooms and complete a block programme during a summer turnaround. We provide a full photographic completion record at the end of the programme.",
  },
  {
    q: "Do you work for student accommodation developers and operators?",
    a: "Yes — we work for PBSA developers, university estate management teams, student accommodation operators and their FM contractors. White-label available for fit-out contractors and FM firms working on student accommodation programmes. We are based in South Yorkshire and cover Yorkshire, the East Midlands, the North West and further afield for larger programmes.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Student Accommodation", item: "https://www.wrpx.co.uk/window-film/student-accommodation-window-film/" },
  ],
};

export default function StudentAccommodationWindowFilmPage() {
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
            <span className="text-foreground">Window Film for Student Accommodation</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for student accommodation — privacy film, solar control and DDA manifestation for PBSA blocks
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Student accommodation blocks have specific window film requirements: privacy in ground-floor and overlooked bedrooms, solar heat control in south-facing rooms, and DDA-compliant glass manifestation in glazed communal corridors. WRPX installs all three across purpose-built student accommodation (PBSA) in South Yorkshire and the East Midlands, with summer-programme and room-by-room scheduling to work around occupancy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Three applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications in student accommodation
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Privacy film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Ground-floor bedroom windows, en-suite bathroom glazing and overlooked rooms in
                densely-developed PBSA sites are a persistent privacy problem. Frosted film
                and one-way mirror film provide complete privacy from outside while maintaining
                natural light inside. Unlike curtains or blinds, film is always in place and
                requires no action from the student.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Ground-floor bedroom windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>En-suite bathroom and shower room glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Overlooked rooms in courtyard layouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Lower floors of high-density blocks</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-window-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Frosted &amp; privacy film details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                South and west-facing student rooms overheat significantly in summer — a
                recurring complaint in PBSA developments and a documented issue in modern
                lightweight construction. Solar control film reduces solar heat gain by 40–79%
                and cuts glare without blocking views or requiring planning permission. In
                winter, it also reduces heat loss through glazing — improving year-round
                comfort and energy efficiency.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>South and west-facing bedrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Top-floor rooms (highest solar gain)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Glazed communal lounges and study areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Glazed stair cores and corridor glazing</span>
                </li>
              </ul>
              <Link href="/window-film/solar-control-film/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>

            <div className="card-float p-7">
              <h3 className="text-lg font-semibold text-foreground">DDA manifestation</h3>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Glazed corridor doors, full-height glazed screens and sidelights in communal
                areas require contrasting manifestation under Building Regulations Part M —
                mandatory in student accommodation. We install manifestation film to BS 8300
                specification. Custom designs are available for branded or architectural
                manifestation where the building specification calls for it.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Glazed corridor doors and fire doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Full-height glazed screens in common areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Communal kitchen and lounge glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>Remedial compliance work during refurbishment</span>
                </li>
              </ul>
              <Link href="/window-film/glass-manifestation/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summer programme + access */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Summer refurbishment programmes — the right time to do it
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Student accommodation has a natural annual access window: the summer turnaround
              between the end of the academic year and the start of the next intake. A full-block
              window film programme — privacy film on all ground-floor rooms, solar control film
              on all south-facing rooms, manifestation on all communal corridor glazing — can
              be completed during this window with minimal disruption to occupancy.
            </p>
            <p>
              <strong className="text-foreground">Systematic room scheduling.</strong> We work
              floor by floor or wing by wing through the block, completing rooms in sequence as
              they are vacated. A standard bedroom window or en-suite takes 20–40 minutes. Two
              installers can typically complete 15–20 rooms per day depending on site layout
              and access logistics.
            </p>
            <p>
              <strong className="text-foreground">In-year reactive work.</strong> For specific
              rooms or areas that need attention during the academic year, we can schedule
              installations around room access windows — reading weeks, short breaks, or
              rooms temporarily vacated during maintenance. We co-ordinate access with your
              accommodation or estates team.
            </p>
            <p>
              <strong className="text-foreground">White-label for FM and fit-out contractors.</strong>{" "}
              We work as a subcontract installation partner for accommodation operators, university
              estates teams, FM contractors and fit-out firms. We attend under your instructions,
              carry your paperwork and provide full photographic completion records.
            </p>
          </div>
        </div>
      </section>

      {/* Related — architectural wrap link */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-7">
            <h2 className="text-xl font-semibold text-foreground">
              Also in student accommodation: interior vinyl wrapping
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Alongside window film, WRPX wraps interior surfaces in student accommodation —
              bedroom furniture, communal kitchen surfaces, study desks, fitted units and
              door panels. Vinyl wrapping refreshes tired surfaces at a fraction of replacement
              cost and can be completed during summer turnaround alongside a window film programme.
            </p>
            <Link href="/architectural-wrap-student-accommodation/" className="mt-5 inline-block text-accent hover:underline">
              See architectural vinyl wrapping for student accommodation →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Student accommodation window film questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related services */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted &amp; privacy window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for bedrooms, bathrooms and overlooked glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for south-facing rooms and communal areas.</p>
            </Link>
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools &amp; universities</h3>
              <p className="mt-2 text-sm text-muted">Classroom privacy film, solar control, manifestation for educational buildings.</p>
            </Link>
            <Link href="/architectural-wrap-student-accommodation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Interior vinyl wrapping for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Bedroom furniture, kitchen surfaces and fitted units.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning a student accommodation window film programme?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and install window film across PBSA developments in South Yorkshire and
              the East Midlands. Summer turnaround programmes and room-by-room scheduling available.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
