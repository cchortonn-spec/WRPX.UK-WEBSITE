import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Coventry | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Coventry for offices, hotels, retail, student accommodation and universities. Reduces heat and glare through existing glazing without replacing windows. WRPX covers CV1 city centre, Coventry University, University of Warwick, Arena Business Park CV6 and all CV postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Coventry — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Coventry and Warwickshire. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, student accommodation, universities. CV1 city centre offices, Coventry University campus, University of Warwick CV4, Arena Business Park CV6, Westwood Business Park CV4, Belgrade Plaza and business parks on the A45, A46 and M6 corridors."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/solar-control-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Coventry offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Coventry offices and commercial buildings. CV1 city centre offices, Belgrade Plaza, Arena Business Park CV6, Westwood Business Park CV4, Warwick Road professional services, the A45, A46 and M6 business park corridors and all CV postcodes. Free survey and fixed price across the Coventry zone.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Coventry office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film with a TSER rating of 40–60% can reduce solar heat entering through glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Coventry city centre and business park offices. The exact reduction depends on the existing glass specification, orientation and the film selected.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install solar film at Coventry University or University of Warwick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — both Coventry University (CV1 city centre campus) and the University of Warwick (CV4 Canley campus) are within our Coventry coverage area. Coventry University has a dense CV1 campus with modern glazed buildings that generate significant solar overheating in south and west-facing teaching spaces. University of Warwick CV4 has a mix of mid-century campus buildings and newer glazed faculty buildings. We work with university estates teams and FM contractors at both campuses, scheduling during vacations where possible.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film work in both summer and winter for Coventry buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a dual-season low-emissivity solar control film reduces solar heat gain in summer while also reducing heat loss through the glass in winter. The same film that keeps summer heat out helps retain warmth in winter, making it a year-round energy performance upgrade. This dual benefit is particularly relevant for Coventry's significant stock of 1960s through 1980s office buildings with large single-glazed or early double-glazed areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar control film be fitted without closing the Coventry building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Coventry offices, hotels and retail premises with no fumes, no dust and no building works. Most Coventry solar film installations complete without any interruption to normal building operations.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Coventry offices?",
    a: "Yes — we install solar control film across Coventry offices and commercial buildings. CV1 city centre offices, Belgrade Plaza, Arena Business Park CV6, Westwood Business Park CV4, Warwick Road professional services, the A45, A46 and M6 business park corridors and all CV postcodes. Free survey and fixed price across the Coventry zone.",
  },
  {
    q: "How much heat does solar film reduce in a Coventry office?",
    a: "A quality solar control film with a TSER rating of 40–60% can reduce solar heat entering through glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Coventry city centre and business park offices. The exact reduction depends on the existing glass specification, orientation and the film selected.",
  },
  {
    q: "Do you install solar film at Coventry University or University of Warwick?",
    a: "Yes — both Coventry University (CV1 city centre campus) and the University of Warwick (CV4 Canley campus) are within our Coventry coverage area. Coventry University has a dense CV1 campus with modern glazed buildings that generate significant solar overheating in south and west-facing teaching spaces. University of Warwick CV4 has a mix of mid-century campus buildings and newer glazed faculty buildings. We work with university estates teams and FM contractors at both campuses, scheduling during vacations where possible.",
  },
  {
    q: "Does solar film work in both summer and winter for Coventry buildings?",
    a: "Yes — a dual-season low-emissivity solar control film reduces solar heat gain in summer while also reducing heat loss through the glass in winter. The same film that keeps summer heat out helps retain warmth in winter, making it a year-round energy performance upgrade. This dual benefit is particularly relevant for Coventry's significant stock of 1960s through 1980s office buildings with large single-glazed or early double-glazed areas.",
  },
  {
    q: "Can solar control film be fitted without closing the Coventry building?",
    a: "Yes — window film installation is dry and non-disruptive. A single pane takes 15–30 minutes. We work in occupied Coventry offices, hotels and retail premises with no fumes, no dust and no building works. Most Coventry solar film installations complete without any interruption to normal building operations.",
  },
];

export default function SolarControlFilmCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Coventry
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Coventry
            offices, universities, hotels and retail. Reduces heat gain and glare through
            existing glazing without replacement — a cost-effective upgrade for overheating
            Coventry buildings. We cover all CV postcodes and the wider Warwickshire area.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Coventry Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why Coventry */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film in Coventry — the problem and the fix
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Coventry&apos;s commercial building stock spans a wide range of eras. The city
              centre CV1 contains a mix of post-war reconstruction buildings from the 1950s
              and 1960s, 1970s office blocks with large single-glazed or early double-glazed
              facades, and newer Grade A office developments and retail units around
              West Orchards and the ring road. All three generations of glazing present
              solar overheating issues on south and west-facing elevations during the
              spring and summer months.
            </p>
            <p>
              Coventry University&apos;s CV1 city centre campus — one of the UK&apos;s most
              concentrated urban university estates — has undergone rapid expansion over
              the past decade. Modern glazed teaching and faculty buildings on Priory Street,
              Gosford Street and Jordan Well generate significant solar heat gain in
              south-facing lecture theatres, design studios and open-plan student spaces.
              FM contractors and university estates teams working on the Coventry University
              estate typically schedule solar film installation during summer vacation.
            </p>
            <p>
              The University of Warwick&apos;s campus at Canley CV4, 3 miles south-west of the
              city centre, is a large out-of-town campus with a mix of 1960s to 1980s
              faculty buildings and newer additions. The campus has significant quantities
              of south-facing student accommodation, lecture theatres and research buildings
              where solar control film provides the most cost-effective overheating remedy.
            </p>
            <p>
              Business parks on the Coventry ring road and out-of-town corridors — Arena
              Business Park CV6, Westwood Business Park CV4, Middlemarch Business Park CV3
              and the A45 and A46 commercial corridors — contain modern open-plan office
              buildings where south and west-facing elevations overheat significantly.
              These buildings are the primary commercial target for solar film specification
              in the Coventry market.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film types we install across Coventry
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Neutral solar control film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-reflectivity film that reduces solar heat gain significantly without
                changing the external appearance of the glazing. The most common specification
                for Coventry city centre offices and commercial buildings where facade
                aesthetics are a client consideration.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reflective solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Higher-performance reflective film for south and west-facing glazing in
                Coventry offices with severe overheating. Delivers greater heat rejection
                than neutral film — best suited to commercial office and university
                applications on the A45 and M6 corridors around Coventry.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dual-season low-emissivity film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ceramic or spectrally selective film that reduces solar heat gain in summer
                while also reducing heat loss through the glass in winter. Particularly
                relevant for Coventry&apos;s older office and campus buildings with large
                single-glazed or early double-glazed areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare-reduction film for south-facing Coventry office workstations where
                direct or reflected sunlight causes screen glare and occupant discomfort.
                Can be combined with solar control properties or specified for glare
                reduction only.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Combined solar and privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirrored or tinted film that provides solar heat rejection alongside
                daytime privacy for ground-floor Coventry offices and retail premises on
                busy streets such as Warwick Road, Upper Precinct and Ring Road St Patricks.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">UV-blocking solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Film specified for UV rejection — protecting Coventry office furniture,
                flooring and retail merchandise from UV-induced fading. Most solar control
                films block 99% of UV as standard; specifying for UV alone is most common
                in Coventry retail and West Orchards settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coventry sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Coventry
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Coventry offices — CV1 city centre and business parks.</strong>{" "}
              Belgrade Plaza, Warwick Row, Priory Street, Arena Business Park CV6, Westwood
              Business Park CV4, Middlemarch Business Park CV3 and the A45, A46 and M6
              corridor commercial parks. South and west-facing open-plan office floors.
              Free survey and next-week installation capacity across the CV zone.
            </p>
            <p>
              <strong className="text-foreground">Coventry University.</strong> A large CV1
              city centre campus with modern glazed teaching, faculty and student accommodation
              buildings generating significant south-facing overheating. We work with
              Coventry University estates teams and FM contractors, scheduling during
              summer vacation to minimise disruption to teaching and student life.
            </p>
            <p>
              <strong className="text-foreground">University of Warwick.</strong> A large
              out-of-town campus at Canley CV4 with a mix of 1960s to 2020s buildings.
              South-facing student accommodation blocks, lecture theatres and research
              buildings are the primary solar film applications. FM contractors and
              university estates teams are the principal point of contact.
            </p>
            <p>
              <strong className="text-foreground">Coventry hotels.</strong> Hotel bedroom
              solar control film — south-facing rooms overheating in summer, reducing
              guest comfort and air-conditioning efficiency. Coventry city centre hotels
              and out-of-town hotel estates on the M6, M69 and M45 corridors.
            </p>
            <p>
              <strong className="text-foreground">Coventry retail.</strong> Solar control
              film for shopfronts and display areas in West Orchards CV1, Upper Precinct,
              Lower Precinct, Arena Park CV6 and across Coventry retail. UV protection
              for merchandise, glare reduction for staff and customers, heat control
              in summer months.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Coventry — common questions
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
            Related window film services in Coventry
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National page covering all solar control film types, specifications and applications.</p>
            </Link>
            <Link href="/window-film/frosted-film-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Coventry</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, glass manifestation and etched-effect film for Coventry offices, retail and homes.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar film for offices</h3>
              <p className="mt-2 text-sm text-muted">Solar control film for commercial office buildings — glazed facades, meeting rooms, open plan.</p>
            </Link>
            <Link href="/window-film/school-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for schools and universities</h3>
              <p className="mt-2 text-sm text-muted">Solar control and privacy film for education sector buildings — lecture theatres, classrooms and student accommodation.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating Coventry building?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Coventry and Warwickshire. We assess the glazing,
              specify the right film for your application and give you a fixed price.
              Commercial and residential — most Coventry solar film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Coventry Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
