import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Manchester | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Manchester for offices, hotels, student accommodation and retail. Reduces heat and glare through existing glazing without replacing windows. WRPX covers Spinningfields M3, NOMA M4, Northern Quarter, Ancoats, MediaCityUK Salford and all Greater Manchester postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Manchester — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Manchester and Greater Manchester. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, student accommodation, schools and healthcare. Spinningfields M3, NOMA M4, Northern Quarter M4, Ancoats, Piccadilly M1, MediaCityUK Salford M50 and across Greater Manchester."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/window-film/solar-control-film-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Manchester offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Manchester and Greater Manchester offices. Spinningfields M3, NOMA M4, Northern Quarter M4, Piccadilly M1, Ancoats, Castlefield M3, MediaCityUK Salford M50, and out-of-town business parks on the M60 orbital. Manchester is approximately 1 hour from our South Yorkshire base via the M1 and M60. Free survey and fixed price across Greater Manchester.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Manchester office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film (TSER rating of 40–60%) can reduce solar heat entering through the glazing by 40–60%. For Manchester&apos;s south and west-facing offices — Spinningfields and the Salford Quays MediaCityUK zone are notable for afternoon west-facing overheating — this translates to meaningfully cooler internal temperatures. The exact reduction depends on the glass spec, orientation and film selected.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film reduce heating costs in Manchester buildings in winter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a low-emissivity solar control film also reduces heat loss through the glazing in winter. The same film that keeps summer heat out helps retain warmth in winter. This dual-season benefit is a relevant consideration for Manchester FM managers and building owners looking to reduce overall energy expenditure across the full year.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar film be fitted without evacuating the Manchester office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Manchester offices with no fumes, no dust and no building works. Most Manchester office solar film installations complete without any interruption to normal operations. We confirm scheduling and access with facilities management in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover MediaCityUK Salford for solar control film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — MediaCityUK in Salford M50 is a specific zone we cover for solar control film. The media and tech office cluster at Salford Quays has significant west-facing glazing that generates afternoon overheating, particularly in the summer months. We cover all MediaCityUK buildings and can combine with other Greater Manchester sites on the same visit.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Manchester offices?",
    a: "Yes — we install solar control film across Manchester and Greater Manchester offices. Spinningfields M3, NOMA M4, Northern Quarter M4, Piccadilly M1, Ancoats, Castlefield M3, MediaCityUK Salford M50, and out-of-town business parks on the M60 orbital. Manchester is approximately 1 hour from our South Yorkshire base via the M1 and M60. Free survey and fixed price across Greater Manchester.",
  },
  {
    q: "How much heat does solar film reduce in a Manchester office?",
    a: "A quality solar control film (TSER rating of 40–60%) can reduce solar heat entering through the glazing by 40–60%. For Manchester's south and west-facing offices — Spinningfields and the Salford Quays MediaCityUK zone are notable for afternoon west-facing overheating — this translates to meaningfully cooler internal temperatures. The exact reduction depends on the glass spec, orientation and film selected.",
  },
  {
    q: "Does solar film reduce heating costs in Manchester buildings in winter?",
    a: "Yes — a low-emissivity solar control film also reduces heat loss through the glazing in winter. The same film that keeps summer heat out helps retain warmth in winter. This dual-season benefit is a relevant consideration for Manchester FM managers and building owners looking to reduce overall energy expenditure across the full year.",
  },
  {
    q: "Can solar film be fitted without evacuating the Manchester office?",
    a: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Manchester offices with no fumes, no dust and no building works. Most Manchester office solar film installations complete without any interruption to normal operations. We confirm scheduling and access with facilities management in advance.",
  },
  {
    q: "Do you cover MediaCityUK Salford for solar control film?",
    a: "Yes — MediaCityUK in Salford M50 is a specific zone we cover for solar control film. The media and tech office cluster at Salford Quays has significant west-facing glazing that generates afternoon overheating, particularly in the summer months. We cover all MediaCityUK buildings and can combine with other Greater Manchester sites on the same visit.",
  },
];

export default function SolarControlFilmManchesterPage() {
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
            <Link href="/window-film/solar-control-film/" className="text-accent hover:underline">Solar Control Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Manchester
            and Greater Manchester — offices, hotels, student accommodation and retail.
            Reduces heat gain and glare through existing glazing without window replacement.
            We cover Spinningfields, NOMA, Northern Quarter, Ancoats, Piccadilly,
            MediaCityUK Salford and all Greater Manchester postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film in Manchester — the problem and the fix
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester&apos;s commercial office market includes a significant proportion of
              south and west-facing glazed buildings — particularly the Spinningfields M3
              financial district, where several large glazed office towers face west into
              the afternoon sun. West-facing glazed facades in Manchester overheat during
              spring and summer, increasing air-conditioning load and reducing occupant
              comfort across the afternoon trading day. Solar control film is the most
              efficient retrofit for these buildings without replacing the glazing.
            </p>
            <p>
              NOMA M4 and the Northern Quarter (M4) present a different mix: a combination
              of new-build Grade A office development and converted Victorian warehouse
              buildings. The new-build stock sometimes has Low-E glazing with partial solar
              control already built in but faces issues at specific orientations during peak
              summer. The warehouse conversions — particularly in the Northern Quarter —
              frequently have large single-glazed or early double-glazed windows where
              both summer overheating and winter heat loss are significant problems
              addressable with a dual-season ceramic solar film.
            </p>
            <p>
              MediaCityUK in Salford M50 — with its concentration of BBC, ITV, dock10 and
              tech industry tenants — has significant west-facing glazing that generates
              afternoon overheating in the summer half of the year. The Quays area is
              exposed and the west-facing glazed facades in several MediaCityUK buildings
              are a consistent source of occupant comfort complaints that solar control
              film addresses cost-effectively.
            </p>
            <p>
              Manchester&apos;s student accommodation market — serving the University of Manchester
              (M13–M15), Manchester Metropolitan University (M15) and the Salford University
              campus — includes a substantial stock of PBSA blocks and purpose-built halls
              where south-facing bedrooms overheat during the summer months. Solar control
              film is the most practical TM59-risk retrofit for these buildings on a budget
              that works at PBSA scale.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film types we install across Manchester
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Neutral solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-reflectivity film that reduces solar heat gain without changing the
                external appearance of the glazing. The most common specification for
                Manchester city centre offices and commercial buildings where facade
                aesthetics are a client consideration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reflective solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Higher-performance reflective film for south and west-facing glazing in
                Manchester offices with severe overheating — Spinningfields west-facing
                towers and the Salford Quays MediaCityUK zone. Greater heat rejection
                at the cost of a more visible reflective external finish.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dual-season low-emissivity film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ceramic or spectrally selective film that reduces solar heat in summer
                while reducing heat loss in winter. Most relevant for Manchester&apos;s Northern
                Quarter warehouse conversions with large older glazed areas where a
                year-round energy saving is the target.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare-reduction film for south-facing Manchester office workstations
                where direct or reflected sunlight causes screen glare and occupant
                discomfort. Can be combined with solar control properties or specified
                for glare reduction alone.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Combined solar and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirrored or tinted film providing solar heat rejection alongside
                daytime privacy — for ground-floor Manchester offices and retail premises
                where both heat control and external visibility are concerns.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">UV-blocking solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Film specified primarily for UV rejection — protecting Manchester office
                furniture, flooring and retail merchandise from UV-induced fading.
                Most solar control films block 99% of UV as standard; specifying for
                UV alone is most common in retail and hospitality settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Manchester
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Manchester offices — Spinningfields, NOMA, city centre.</strong> Glazed commercial offices in Spinningfields M3, NOMA M4, the Northern Quarter, Piccadilly, Ancoats and all M1–M4 postcode zones. Free survey and next-week installation capacity across Manchester city centre. MediaCityUK Salford M50 covered on the same programme.
            </p>
            <p>
              <strong className="text-foreground">Manchester hotels.</strong> Hotel bedroom solar control film — south and west-facing rooms overheating during summer, reducing guest comfort and air-conditioning efficiency. Frosted or tinted film for en-suite privacy alongside solar performance. Manchester city centre M1–M4 and out-of-town hotel stock on the M60 orbital and A56 corridors.
            </p>
            <p>
              <strong className="text-foreground">Student accommodation.</strong> University of Manchester (M13–M15), Manchester Metropolitan University (M15) and University of Salford PBSA and halls stock. South-facing bedrooms overheating — solar control film is the most cost-effective retrofit. We schedule during vacation and summer void periods to minimise resident disruption.
            </p>
            <p>
              <strong className="text-foreground">Manchester retail.</strong> Solar control film for the Arndale, Trafford Centre and all Manchester retail — UV protection for merchandise, glare reduction for staff and customers, heat control for south and west-facing shopfronts in summer.
            </p>
            <p>
              <strong className="text-foreground">Manchester schools and colleges.</strong> Solar control film for south-facing classroom glazing across Manchester and Greater Manchester — Manchester City Academy, secondary and grammar school stock, and the FE college campus estate. Scheduled during holidays and half-terms to avoid teaching disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Route and access */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Working in Manchester — route and access
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester is approximately 1 hour from our South Yorkshire base via the M1
              north to junction 35a, then the M18/M62 west to the M60 Manchester orbital.
              For Spinningfields M3 and city centre offices, the M602 or A57(M) approaches
              are most direct. For MediaCityUK Salford M50, the A57 Regent Road approach
              from the M60 at junction 12 is standard — MediaCityUK has dedicated loading
              facilities for commercial contractors.
            </p>
            <p>
              Manchester city centre loading is managed. Time-restricted loading windows
              apply on most main streets. For offices in Spinningfields and NOMA, basement
              loading or service bays are typically available. We confirm access logistics
              before every Manchester job. For most office solar film installations, we
              work during normal business hours — no disruption to building operations.
            </p>
            <p>
              We can combine Manchester with Leeds, Sheffield or Warrington on multi-city
              North West programmes — useful for FM companies managing window film contracts
              across multiple Greater Manchester and Yorkshire buildings simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Manchester — common questions
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
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National page covering all solar control film types, specifications and applications.</p>
            </Link>
            <Link href="/window-film/frosted-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Frosted privacy film and decorative window film across Manchester offices, restaurants and retail.</p>
            </Link>
            <Link href="/architectural-wrap-offices-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office architectural wrap Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester office surfaces — kitchen units, reception desks, joinery.</p>
            </Link>
            <Link href="/window-film/student-accommodation-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for student accommodation</h3>
              <p className="mt-2 text-sm text-muted">Solar control and privacy film for PBSA, university halls and student accommodation blocks.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating Manchester building?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Manchester and Greater Manchester. We assess the glazing,
              specify the right film for your application and give you a fixed price.
              Commercial and residential — most Manchester solar film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
