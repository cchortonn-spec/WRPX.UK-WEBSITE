import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Birmingham | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Birmingham for offices, hotels, retail, universities and commercial premises. Reduces heat and glare through existing glazing without replacing windows. WRPX covers Colmore Row B3, Brindleyplace B1, Jewellery Quarter, Solihull and all Birmingham postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Birmingham — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Birmingham and the West Midlands. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, universities. Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, the Mailbox B1, Snow Hill B4, Solihull B90, Aston B6 and all Birmingham and West Midlands business parks on the M6, M42 and M5 corridors."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/solar-control-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Birmingham offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Birmingham offices and commercial buildings. Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, the Mailbox B1, Broad Street B1, Snow Hill B4, Solihull B90 business parks and all business parks on the M6, M42 and M5 corridors around Birmingham. Free survey and fixed price across the B postcode zone.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Birmingham office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film with a TSER rating of 40–60% can reduce solar heat entering through glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Birmingham city centre and out-of-town business park offices. The exact reduction depends on the existing glass specification, orientation and the film selected.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar control film work on Birmingham office buildings with modern curtain wall glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the glass specification. Modern double or triple-glazed sealed units can sometimes have restrictions on applying film — particularly reflective or heavily tinted films — due to potential thermal stress fracture of the sealed unit. We assess the glass specification at survey and advise on compatible film options. There are high-performance, low-reflectivity films designed specifically for use on double-glazed units.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar control film be combined with frosted privacy film in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — combination films are available that provide both solar heat rejection and a degree of privacy. For Birmingham meeting rooms and glass partitions on south or west-facing elevations, a combined solar-privacy film is often the most practical specification. We advise on the best product for each application at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film at Birmingham hotels and hospitality venues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — hotel bedroom windows, restaurant glazing, function room windows and lobby glazing are all common applications for solar control film in Birmingham. We work in occupied Birmingham hotels with overnight or out-of-hours access where required. Many Birmingham city centre and Broad Street hotels have south or west-facing bedroom elevations that benefit significantly from solar film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Birmingham offices?",
    a: "Yes — we install solar control film across Birmingham offices and commercial buildings. Colmore Row B3, Brindleyplace B1, Jewellery Quarter B1, the Mailbox B1, Broad Street B1, Snow Hill B4, Solihull B90 business parks and all business parks on the M6, M42 and M5 corridors around Birmingham. Free survey and fixed price across the B postcode zone.",
  },
  {
    q: "How much heat does solar film reduce in a Birmingham office?",
    a: "A quality solar control film with a TSER rating of 40–60% can reduce solar heat entering through glazing by 40–60%. This translates into meaningfully cooler internal temperatures on south and west-facing elevations — the most commonly overheating orientations in Birmingham city centre and out-of-town business park offices. The exact reduction depends on the existing glass specification, orientation and the film selected.",
  },
  {
    q: "Does solar control film work on Birmingham office buildings with modern curtain wall glazing?",
    a: "It depends on the glass specification. Modern double or triple-glazed sealed units can sometimes have restrictions on applying film — particularly reflective or heavily tinted films — due to potential thermal stress fracture of the sealed unit. We assess the glass specification at survey and advise on compatible film options. There are high-performance, low-reflectivity films designed specifically for use on double-glazed units.",
  },
  {
    q: "Can solar control film be combined with frosted privacy film in Birmingham?",
    a: "Yes — combination films are available that provide both solar heat rejection and a degree of privacy. For Birmingham meeting rooms and glass partitions on south or west-facing elevations, a combined solar-privacy film is often the most practical specification. We advise on the best product for each application at survey.",
  },
  {
    q: "Can you install solar control film at Birmingham hotels and hospitality venues?",
    a: "Yes — hotel bedroom windows, restaurant glazing, function room windows and lobby glazing are all common applications for solar control film in Birmingham. We work in occupied Birmingham hotels with overnight or out-of-hours access where required. Many Birmingham city centre and Broad Street hotels have south or west-facing bedroom elevations that benefit significantly from solar film.",
  },
];

export default function SolarControlFilmBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control &amp; Heat Reduction · Birmingham
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Birmingham
            offices, hotels, retail and commercial premises. Applied to existing glazing
            without replacement — reduces solar heat gain, cuts glare, improves working
            comfort and protects furnishings and stock from UV fading. Free survey across
            all B postcodes and the wider West Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Birmingham Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why Birmingham needs solar film */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s commercial glazing and the overheating problem
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham&apos;s commercial building stock spans several distinct glazing eras. The
              Colmore Row B3 and Snow Hill B4 financial district contains a mixture of 1970s
              and 1980s commercial buildings with large single-glazed curtain wall elevations,
              alongside 1990s and 2000s refurbishments with improved but not optimised thermal
              performance. On south and west-facing elevations, these buildings produce severe
              internal overheating from May through September — a problem that solar control
              film addresses more cost-effectively than any alternative short of glazing
              replacement.
            </p>
            <p>
              Brindleyplace B1 and the Mailbox B1 — Birmingham&apos;s premium commercial and mixed-use
              developments — feature extensive glass facades as a design feature. These buildings
              perform well in winter but generate significant solar gain in summer across their
              south and west elevations. Occupier complaints about glare at workstations and
              overheating in south-facing meeting rooms are common in summer, and solar film
              applied to the affected elevations is a practical and cost-effective solution.
            </p>
            <p>
              Birmingham&apos;s out-of-town business parks — the Solihull B90 corridor along the
              M42, and the M5 and M6 junction parks to the north and south-west of the city
              — typically feature low-rise office buildings with large glazed frontages. In
              these buildings, a single south-west-facing wall of floor-to-ceiling glass can
              make entire floors unusable during peak afternoon sunshine. Solar film resolves
              this without structural change or loss of natural light.
            </p>
          </div>
        </div>
      </section>

      {/* What solar film does */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What solar control film does in Birmingham commercial buildings
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Heat reduction</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                High-performance solar film with a Total Solar Energy Rejection (TSER) value
                of 40–65% blocks a significant proportion of solar heat before it enters the
                building. For a south-facing Birmingham office floor with unfilmed glazing,
                the internal temperature difference is measurable and meaningful.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Glare reduction</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar film reduces visible light transmission (VLT) to a level that makes
                screen-facing workstations usable on west and south-facing Birmingham
                elevations. Productivity impact from glare is reduced without closing
                blinds and losing daylight entirely.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">UV protection</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Quality solar films block 99% of UV radiation — the primary cause of
                fading in carpets, furniture, artwork and stock. Important for Birmingham
                offices with expensive fit-outs, retail with colour-sensitive stock and
                hospitality venues with bespoke interior design.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Winter heat retention</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-emissivity solar films reduce heat loss through glass in winter as well
                as blocking solar gain in summer. For Birmingham buildings with large single-
                or double-glazed curtain walls, this means lower heating costs during the
                colder months alongside summer cooling benefits.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">No replacement required</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Applied to the existing glass surface without replacement or structural change.
                A typical Birmingham office floor of solar film installs in one or two days
                with minimal disruption to occupiers — no scaffolding, no major access
                arrangements, no building regulations sign-off.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Aesthetic options</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar films range from near-neutral (minimal visible change to the glass
                appearance) to bronze-tone, silver-reflective and grey tint options.
                We specify aesthetically appropriate films for Birmingham&apos;s premium
                Brindleyplace and Mailbox locations as well as practical working
                environments in out-of-town business parks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Birmingham sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar film applications across Birmingham sectors
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Birmingham offices.</strong> Colmore Row B3,
              Snow Hill B4, Brindleyplace B1, the Mailbox B1, Broad Street B1, Jewellery Quarter B1,
              Solihull B90 M42 corridor and all Birmingham and West Midlands business park
              locations. We survey the affected elevations, specify the right film for the
              glazing type and installation environment, and install with minimal disruption
              to occupiers.
            </p>
            <p>
              <strong className="text-foreground">Birmingham hotels.</strong> City centre
              hotels on Broad Street B1, Colmore Row B3 and the Bullring B5 area have a mix
              of room elevations — south and west-facing rooms consistently generate
              overheating complaints in summer. Solar film applied to bedroom windows,
              restaurant glazing and function room windows resolves this without
              air-conditioning upgrades. We work in occupied Birmingham hotels overnight
              or during low-occupancy windows.
            </p>
            <p>
              <strong className="text-foreground">Universities of Birmingham.</strong> The
              University of Birmingham B15 and Aston University B4 have large building
              estates with mixed glazing specifications. Solar film is a practical solution
              for overheating lecture theatres, library reading rooms and office accommodation
              on exposed elevations — compliant with FM framework procurement and
              specifiable within standard maintenance programmes.
            </p>
            <p>
              <strong className="text-foreground">Birmingham retail.</strong> Bullring and
              Grand Central B5, the Mailbox B1, retail parks on the A38 and M42 corridors,
              and independent retail on the High Street and in the Jewellery Quarter. Solar
              film reduces UV fading of stock and displays, cuts glare for staff on
              south-facing shopfronts and reduces air-conditioning load in glazed units.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Birmingham — common questions
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
            Related window film services in Birmingham
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering solar control and heat-reduction film across all sectors and applications.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office solar film</h3>
              <p className="mt-2 text-sm text-muted">Heat reduction and glare control for Birmingham office buildings — workstation comfort and energy performance.</p>
            </Link>
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Privacy film, etched-effect film and Part M manifestation for Birmingham offices, retail and commercial premises.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hotel window film</h3>
              <p className="mt-2 text-sm text-muted">Solar control, frosted and decorative window film for hotel bedrooms, restaurants, function rooms and lobbies.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating offices or commercial premises in Birmingham?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Birmingham and the West Midlands. We assess the glazing,
              identify the problematic elevations and specify the right film for each surface.
              Most Birmingham commercial solar film programmes complete within one to two days
              per floor.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Birmingham Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
