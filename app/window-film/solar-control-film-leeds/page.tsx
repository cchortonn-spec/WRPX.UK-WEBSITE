import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Leeds | Office Heat & Glare Reduction | WRPX",
  description:
    "Solar control window film installed across Leeds for offices, commercial buildings and homes. Reduce heat, cut glare and block UV without replacing glazing. WRPX covers Wellington Place, Granary Wharf, South Bank, Holbeck, Thorpe Park and the wider West Yorkshire market — free survey, competitive commercial pricing.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Leeds — heat and glare reduction for offices and commercial buildings",
  "Solar control window film installed across Leeds and West Yorkshire for offices, commercial buildings, schools and homes. Reduces solar heat gain, cuts screen glare and blocks UV in south-facing and west-facing glazing. Wellington Place, Granary Wharf, South Bank, Holbeck Urban Village, Thorpe Park, White Rose and the wider West Yorkshire commercial market."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/solar-control-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Leeds city centre offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Leeds LS1 and LS2 city centre offices, Wellington Place, Granary Wharf, Holbeck Urban Village, the South Bank regeneration zone and the wider West Yorkshire office market. Free survey across Leeds and West Yorkshire.",
      },
    },
    {
      "@type": "Question",
      name: "How much does solar control film reduce heat in a Leeds office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the film specification and glazing type, but a quality solar film typically reduces solar heat entering through the glass by 40–79%. In a south or west-facing Leeds office, this is the difference between a room that requires air conditioning running from April to October, and a room that remains comfortable throughout the working day without it.",
      },
    },
    {
      "@type": "Question",
      name: "Will solar film darken the Leeds office noticeably?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not significantly with the right film specification. Modern high-performance solar films maximise heat rejection while maintaining high visible light transmission. The room stays bright — you get the heat reduction without the tinted-window effect. We specify film by your VLT requirement at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work in an occupied Leeds office when applying solar film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film application is a low-disruption process. For larger Leeds offices with many windows, we can work floor by floor or zone by zone. For smaller jobs, we usually complete within one or two days without needing the floor vacated. We confirm the access plan with your FM team in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film work on Leeds office buildings with older glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes — solar film is compatible with most glass types including single-glazed, double-glazed and laminated glass. We assess at survey. Some older double-glazed units have manufacturer restrictions on film application; where this applies, we flag it before installation. Leeds has significant office stock from the 1980s–2000s where older glazing is the norm.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Leeds city centre offices?",
    a: "Yes — we cover Leeds LS1 and LS2 city centre offices, Wellington Place, Granary Wharf, Holbeck Urban Village, the South Bank regeneration zone and the wider West Yorkshire office market. Free survey across Leeds and West Yorkshire.",
  },
  {
    q: "How much does solar control film reduce heat in a Leeds office?",
    a: "It depends on the film specification and glazing type, but a quality solar film typically reduces solar heat entering through the glass by 40–79%. In a south or west-facing Leeds office, this is the difference between a room that requires air conditioning running from April to October, and a room that remains comfortable throughout the working day without it.",
  },
  {
    q: "Will solar film darken the Leeds office noticeably?",
    a: "Not significantly with the right film specification. Modern high-performance solar films maximise heat rejection while maintaining high visible light transmission. The room stays bright — you get the heat reduction without the tinted-window effect. We specify film by your VLT requirement at survey.",
  },
  {
    q: "Can you work in an occupied Leeds office when applying solar film?",
    a: "Yes — window film application is a low-disruption process. For larger Leeds offices with many windows, we can work floor by floor or zone by zone. For smaller jobs, we usually complete within one or two days without needing the floor vacated. We confirm the access plan with your FM team in advance.",
  },
  {
    q: "Does solar film work on Leeds office buildings with older glazing?",
    a: "Generally yes — solar film is compatible with most glass types including single-glazed, double-glazed and laminated glass. We assess at survey. Some older double-glazed units have manufacturer restrictions on film application; where this applies, we flag it before installation. Leeds has significant office stock from the 1980s–2000s where older glazing is the norm.",
  },
];

export default function SolarControlFilmLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Leeds
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Leeds has a large stock of south and west-facing commercial glazing — Wellington Place
            tower facades, glass-fronted offices on the South Bank, converted mill windows in
            Holbeck Urban Village, and suburban homes with south-facing kitchen extensions and
            conservatories. WRPX installs solar control film across Leeds to reduce heat, cut screen
            glare and block UV — without replacing the glazing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Leeds Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds glazing and solar control — the local context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds&apos; commercial office stock spans a wide age range. Wellington Place — the
              city&apos;s prime Grade A office address — includes modern glazed tower and podium
              buildings with large south and west elevations exposed to significant solar heat
              gain during the working year. The afternoon sun load on west-facing floors in
              these buildings during summer makes them uncomfortable without either air
              conditioning at full capacity or blinds drawn — solar film resolves both
              problems simultaneously.
            </p>
            <p>
              Holbeck Urban Village and the converted mill buildings of Leeds&apos; South Bank have
              distinctive large window openings — original industrial frames with single or early
              double glazing that transmit heat efficiently. Creative, tech and design businesses
              occupying these spaces frequently raise overheating as a practical problem, particularly
              in upper-floor south-facing studios. Solar film on these windows delivers immediate
              temperature improvement measurable across the working day.
            </p>
            <p>
              Granary Wharf, Clarence Dock and the waterfront office cluster have modern glass
              facades at river level — often floor-to-ceiling glazing on southern and western
              elevations. Afternoon overheating in these offices is a known issue, and solar
              film is the most cost-effective intervention that preserves the view and the
              contemporary aesthetic.
            </p>
            <p>
              Across Leeds&apos; residential areas — from the Victorian terraces of LS6 Headingley
              to the newer builds in LS15, LS17 and the Wetherby corridor — south-facing
              extensions, kitchen glazing, orangeries and conservatories are the most common
              residential solar film application. A Leeds conservatory with south or south-west
              exposure can become unusable from April to September without some form of solar
              control. Film is the fastest and most cost-effective fix available.
            </p>
          </div>
        </div>
      </section>

      {/* What it solves */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What solar control film solves in Leeds buildings
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Overheating offices</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                South and west-facing Leeds offices — particularly those in modern glazed
                buildings and converted mill spaces — can become genuinely unproductive
                in summer. Solar film reduces heat entering through the glass by 40–79%,
                making the room comfortable without air conditioning running at full load
                all afternoon.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Screen glare year-round</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare is not a summer-only issue in Leeds. Low winter sun on south-facing
                LS1 and LS2 offices creates screen glare from October through to March.
                Solar film cuts glare significantly while maintaining acceptable light levels.
                The room stays usable without blinds drawn for most of the working day.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">UV damage and fading</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                UV radiation fades hardwood floors, carpet, upholstery, retail stock and office
                furniture over time. Quality solar film from 3M and Avery Dennison blocks up
                to 99% of UV while remaining optically clear — protecting the interior
                investment without changing the appearance of the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Leeds
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Leeds city centre offices (LS1–LS2).</strong> Wellington Place, The Headrow, Park Row, Infirmary Street, Granary Wharf, Clarence Dock and the Whitehall Road commercial corridor. We know Leeds city centre loading and access constraints for all the main office locations.
            </p>
            <p>
              <strong className="text-foreground">Holbeck Urban Village and South Bank (LS11).</strong> Converted mill buildings with large industrial window openings, purpose-built creative and tech offices, co-working spaces and studio units. Often single or early double glazing — a strong case for solar film where building aesthetics prevent external shading.
            </p>
            <p>
              <strong className="text-foreground">Leeds out-of-town business parks.</strong> Thorpe Park (A64), White Rose (M62/M1), Capitol Park, Parkside and the M621 corridor — large-footprint corporate and professional services occupiers, often with significant areas of south and west-facing glazing. We work with FM teams on planned maintenance schedules.
            </p>
            <p>
              <strong className="text-foreground">Leeds schools and universities.</strong> University of Leeds and Leeds Beckett campus buildings, Leeds secondary schools and colleges across the LS postcode area. Education buildings with large south-facing glazed classrooms suffer summer term overheating acutely. We work within term-time and school holiday access windows.
            </p>
            <p>
              <strong className="text-foreground">Residential Leeds.</strong> Conservatories, kitchen extensions, orangeries and south-facing bedroom and living room windows across all Leeds postcodes — LS1 to LS29. Free survey, usually within the week. Most residential Leeds solar film jobs complete in a half day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Leeds — common questions
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
            Related window film services in Leeds
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering all solar control film applications, specifications and pricing guide.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office solar film</h3>
              <p className="mt-2 text-sm text-muted">Solar control film for commercial offices — specification guide and sector-specific advice.</p>
            </Link>
            <Link href="/window-film/frosted-office-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted office film</h3>
              <p className="mt-2 text-sm text-muted">Privacy and frosted film for Leeds office glass partitions, meeting rooms and boardrooms.</p>
            </Link>
            <Link href="/window-film/window-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">All window film in Leeds</h3>
              <p className="mt-2 text-sm text-muted">Full range of window film types installed across Leeds — frosted, privacy, solar, manifestation.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leeds overheating problem? Let&apos;s fix it.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Leeds and West Yorkshire. We assess the glazing, specify the
              right film for your application, and give you a fixed price. Most Leeds solar film
              jobs complete within one to two days.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Leeds Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
