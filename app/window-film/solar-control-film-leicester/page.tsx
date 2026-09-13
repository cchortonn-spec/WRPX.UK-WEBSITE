import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Leicester | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Leicester for offices, hotels, retail and student accommodation. Reduces heat and glare through existing glazing without replacing windows. WRPX covers LE1 city centre, De Montfort University, University of Leicester, Highcross, Fosse Park and all LE postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Leicester — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Leicester and Leicestershire. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, student accommodation, schools and healthcare. LE1 city centre offices, De Montfort University LE1/LE2, University of Leicester LE1, Highcross Shopping Centre, Fosse Park LE3, Business parks along the A563 and M1 J21 corridor."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/solar-control-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leicester offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Leicester and Leicestershire offices. LE1 city centre buildings, St George's Business Park, Grove Park LE19, Meridian Business Park LE19, the A563 ring road commercial corridor, De Montfort University campus LE1/LE2 and all business parks on the M1 J21 and A46 corridors around Leicester. Free survey and fixed price across the LE postcode zone.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Leicester office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film (TSER rating of 40–60%) can reduce the solar heat entering through the glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Leicester city centre and business park offices. The exact reduction depends on the existing glass spec, orientation and the film selected.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film reduce heating costs in winter in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a low-emissivity solar control film also reduces heat loss through glazing in winter, meaning the same film that keeps summer heat out also helps retain warmth in winter. This dual-season benefit is particularly relevant for Leicester&apos;s significant stock of 1970s and 1980s office buildings with large single-glazed areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar control film be fitted without emptying the Leicester office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Leicester offices with no fumes, no dust and no building works. Most window film installations complete without any interruption to normal office operations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install solar film at De Montfort University or University of Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — both university campuses are within our Leicester coverage area. De Montfort University spans LE1 and LE2 with a mix of modern glazed buildings and older campus stock. University of Leicester occupies the south of LE1 around University Road. We work with university estates teams and FM contractors on both campuses, scheduling installations to minimise disruption to teaching and student life.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Leicester offices?",
    a: "Yes — we install solar control film across Leicester and Leicestershire offices. LE1 city centre buildings, St George's Business Park, Grove Park LE19, Meridian Business Park LE19, the A563 ring road commercial corridor, De Montfort University campus LE1/LE2 and all business parks on the M1 J21 and A46 corridors around Leicester. Free survey and fixed price across the LE postcode zone.",
  },
  {
    q: "How much heat does solar film reduce in a Leicester office?",
    a: "A quality solar control film (TSER rating of 40–60%) can reduce the solar heat entering through the glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Leicester city centre and business park offices. The exact reduction depends on the existing glass spec, orientation and the film selected.",
  },
  {
    q: "Does solar film reduce heating costs in winter in Leicester?",
    a: "Yes — a low-emissivity solar control film also reduces heat loss through glazing in winter, meaning the same film that keeps summer heat out also helps retain warmth in winter. This dual-season benefit is particularly relevant for Leicester's significant stock of 1970s and 1980s office buildings with large single-glazed areas.",
  },
  {
    q: "Can solar control film be fitted without emptying the Leicester office?",
    a: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Leicester offices with no fumes, no dust and no building works. Most window film installations complete without any interruption to normal office operations.",
  },
  {
    q: "Do you install solar film at De Montfort University or University of Leicester?",
    a: "Yes — both university campuses are within our Leicester coverage area. De Montfort University spans LE1 and LE2 with a mix of modern glazed buildings and older campus stock. University of Leicester occupies the south of LE1 around University Road. We work with university estates teams and FM contractors on both campuses, scheduling installations to minimise disruption to teaching and student life.",
  },
];

export default function SolarControlFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Leicester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Leicester offices,
            hotels, retail and student accommodation. Reduces heat gain and glare through existing
            glazing without replacement — a cost-effective upgrade for overheating Leicester
            buildings. We cover the full LE postcode zone and wider East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why Leicester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film in Leicester — the problem and the fix
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester&apos;s office market includes a significant proportion of buildings from
              the 1970s through 2000s with large glazed facades and south or west-facing
              elevations that overheat during spring and summer. The newer Grade A developments
              in LE1 city centre, particularly along Vaughan Way and Welford Road, feature
              modern curtain wall systems where solar control film provides the most
              cost-effective performance upgrade.
            </p>
            <p>
              De Montfort University — spread across LE1 and LE2 between the city centre
              and Braunstone Gate — has a mix of modern glazed faculty buildings and
              older campus stock. South-facing lecture theatres and open-plan studio spaces
              overheat markedly in summer. FM contractors and university estates teams
              working on DMU&apos;s estate typically schedule solar film installation during
              summer vacation to avoid disrupting teaching.
            </p>
            <p>
              University of Leicester&apos;s campus occupies the south-east of LE1 along University
              Road and Lancaster Road. The campus contains a high concentration of student
              accommodation blocks where south-facing bedrooms overheat during warmer months.
              Solar control film is the most practical retrofit solution for university
              estates teams managing TM59 compliance across occupied student accommodation.
            </p>
            <p>
              Leicester&apos;s student accommodation market beyond the two universities — PBSA
              developments in LE1, LE2 and along the outer ring road — experiences the same
              south-facing bedroom overheating that drives solar film specification elsewhere.
              PBSA developers and FM contractors operating in Leicester increasingly specify
              solar control film as part of summer maintenance programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film types we install across Leicester
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Neutral solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-reflectivity film that reduces solar heat gain significantly without changing
                the external appearance of the glazing. The most common specification for Leicester
                city centre offices and commercial buildings where facade aesthetics are a client
                consideration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reflective solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Higher-performance reflective film for south and west-facing glazing in Leicester
                offices with severe overheating. Delivers greater heat rejection than neutral film
                at the cost of a more visible reflective external appearance — best suited to
                commercial rather than residential applications.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dual-season low-emissivity film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ceramic or spectrally selective film that reduces solar heat gain in summer while
                also reducing heat loss through the glass in winter. Particularly relevant for
                Leicester&apos;s older office and campus buildings with large single-glazed or
                early double-glazed areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare-reduction film for south-facing Leicester office workstations where direct
                or reflected sunlight causes screen glare and occupant discomfort. Can be combined
                with solar control properties or specified for glare reduction only.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Combined solar and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirrored or tinted film that provides solar heat rejection alongside
                daytime privacy for ground-floor Leicester offices and retail premises on busy
                streets such as Gallowtree Gate, Granby Street and Braunstone Gate.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">UV-blocking solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Film specified primarily for UV rejection — protecting Leicester office furniture,
                flooring and merchandise from UV-induced fading. Most solar control films block
                99% of UV as standard; specifying for UV alone is most common in Leicester
                retail and Highcross concession settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leicester sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Leicester
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Leicester offices — LE1 and city centre.</strong> South and west-facing glazed offices in LE1, Vaughan Way, Welford Road, Colton Square, professional services along New Walk, city-centre co-working and Grade A office stock. Free survey and next-week installation capacity across LE1.
            </p>
            <p>
              <strong className="text-foreground">Business parks — A563 and M1 J21 corridor.</strong> Grove Park LE19, Meridian Business Park LE19, Optimus Point LE3, Glenfield Park LE3, and business parks across the A563 outer ring road corridor. Large open-plan floors in these modern office buildings commonly experience south and west-facing overheating.
            </p>
            <p>
              <strong className="text-foreground">De Montfort University and University of Leicester.</strong> Faculty buildings, lecture theatres, studio spaces and student accommodation across both Leicester university campuses. We work with university estates teams and FM contractors, scheduling during vacations to minimise disruption to teaching and student life.
            </p>
            <p>
              <strong className="text-foreground">Leicester hotels.</strong> Hotel bedroom solar control film — south-facing rooms overheating during summer, reducing guest comfort and air-conditioning efficiency. Leicester city centre hotels and out-of-town hotel estates on the M1 J21 and A6 corridors.
            </p>
            <p>
              <strong className="text-foreground">Leicester retail.</strong> Retail solar control film for shopfronts and display areas in Highcross, the Lanes, Gallowtree Gate, Fosse Park and across Leicester retail. UV protection for merchandise, glare reduction for staff and customers, heat control in summer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Leicester — common questions
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
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National page covering all solar control film types, specifications and applications.</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and etched-effect film for Leicester offices and retail.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar film for offices</h3>
              <p className="mt-2 text-sm text-muted">Solar control film for commercial office buildings — glazed facades, meeting rooms, open plan.</p>
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
              Overheating Leicester building?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Leicester and the East Midlands. We assess the glazing,
              specify the right film for your application and give you a fixed price.
              Commercial and residential — most Leicester solar film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leicester Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
