import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Sheffield | Office Heat & Glare Reduction | WRPX",
  description:
    "Solar control window film installed across Sheffield for offices, commercial buildings and homes. Reduce heat, cut glare and block UV without replacing glazing. WRPX is Sheffield-based — free survey, competitive commercial pricing.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Sheffield — heat and glare reduction for offices and commercial buildings",
  "Solar control window film installed across Sheffield and South Yorkshire for offices, commercial buildings, schools and homes. Reduces solar heat gain, cuts screen glare and blocks UV in south-facing and west-facing glazing. Sheffield city centre, St Paul's Quarter, Kelham Island, Sheffield Parkway corridor and the wider South Yorkshire commercial market."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/solar-control-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Sheffield city centre offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are Sheffield-based and work across S1 city centre offices, St Paul's Quarter, Kelham Island and the wider South Yorkshire office market. We know Sheffield city centre access and loading constraints and plan installation sessions around them. Free survey across Sheffield.",
      },
    },
    {
      "@type": "Question",
      name: "How much does solar control film reduce heat in a Sheffield office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the film specification and glazing type, but a quality solar film typically reduces the solar heat entering through the glass by 40–79%. In a south-facing Sheffield office, this is the difference between a room that requires blinds pulled and air conditioning running from April to October, and a room that remains comfortable without either.",
      },
    },
    {
      "@type": "Question",
      name: "Will solar film darken the Sheffield office noticeably?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not significantly with the right film specification. Modern high-performance solar films are engineered to maximise heat rejection while maintaining high visible light transmission. The room stays bright — you get the heat reduction without the tinted-window effect. We specify film by your VLT requirement at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work in an occupied Sheffield office when applying solar film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — window film application is a low-disruption process. For larger Sheffield offices with many windows, we can work floor by floor or zone by zone. For smaller jobs, we usually complete within one or two days without needing the floor vacated. We confirm the access plan with your FM team in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film work on Sheffield's older commercial glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes — solar film is compatible with most glass types including single-glazed, double-glazed and laminated glass. We assess at survey. Some older double-glazed units have manufacturer restrictions on film application; where this applies, we flag it before installation.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Sheffield city centre offices?",
    a: "Yes — we are Sheffield-based and work across S1 city centre offices, St Paul's Quarter, Kelham Island and the wider South Yorkshire office market. We know Sheffield city centre access and loading constraints and plan installation sessions around them. Free survey across Sheffield.",
  },
  {
    q: "How much does solar control film reduce heat in a Sheffield office?",
    a: "It depends on the film specification and glazing type, but a quality solar film typically reduces the solar heat entering through the glass by 40–79%. In a south-facing Sheffield office, this is the difference between a room that requires blinds pulled and air conditioning running from April to October, and a room that remains comfortable without either.",
  },
  {
    q: "Will solar film darken the Sheffield office noticeably?",
    a: "Not significantly with the right film specification. Modern high-performance solar films are engineered to maximise heat rejection while maintaining high visible light transmission. The room stays bright — you get the heat reduction without the tinted-window effect. We specify film by your VLT requirement at survey.",
  },
  {
    q: "Can you work in an occupied Sheffield office when applying solar film?",
    a: "Yes — window film application is a low-disruption process. For larger Sheffield offices with many windows, we can work floor by floor or zone by zone. For smaller jobs, we usually complete within one or two days without needing the floor vacated. We confirm the access plan with your FM team in advance.",
  },
  {
    q: "Does solar film work on Sheffield's older commercial glazing?",
    a: "Generally yes — solar film is compatible with most glass types including single-glazed, double-glazed and laminated glass. We assess at survey. Some older double-glazed units have manufacturer restrictions on film application; where this applies, we flag it before installation.",
  },
];

export default function SolarControlFilmSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Solar Control · Sheffield
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Sheffield has a significant stock of south-facing and west-facing commercial glazing —
            offices in St Paul&apos;s Quarter, glass-fronted buildings on Arundel Gate and Sheaf Square,
            Kelham Island studios with large industrial windows, and suburban homes with south-facing
            extensions and conservatories. WRPX installs solar control film across Sheffield to
            reduce heat, cut screen glare and block UV — without replacing the glazing and without
            significantly darkening the space.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Sheffield Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield glazing and solar control — the local context
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield&apos;s commercial buildings span several distinct eras of construction, each
              with different glazing characteristics. The St Paul&apos;s Quarter office buildings — some
              of the city&apos;s most prominent commercial addresses — include glazed facades that generate
              significant heat gain on south and west elevations. During July and August, south-facing
              offices in this zone can become genuinely uncomfortable, with staff productivity
              affected by afternoon sun from mid-April through to October.
            </p>
            <p>
              Kelham Island&apos;s converted mill buildings have large original window openings — often
              single or early double glazing with high solar transmittance. The creative and tech
              businesses that occupy these spaces frequently raise overheating as a practical problem,
              particularly in upper-floor studios and the south-facing bays that make the buildings
              distinctive. Solar film on these windows delivers immediate, measurable temperature
              improvement.
            </p>
            <p>
              Across Sheffield&apos;s residential areas — from the Victorian terraces in S10 and S11 to
              the newer builds in S20 and the Dore and Totley suburbs — south-facing extensions,
              kitchen extensions and conservatories are the most common residential solar film
              application. Sheffield conservatories in particular can become unusable from May to
              September without some form of solar control — film is the most cost-effective
              intervention available.
            </p>
          </div>
        </div>
      </section>

      {/* What it solves */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What solar control film solves in Sheffield buildings
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Overheating offices</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                South and west-facing Sheffield offices lose productive working hours in summer
                afternoon sun. Solar film reduces the solar heat entering through the glass by
                40–79% — making the room comfortable without pulling blinds or running air
                conditioning at full capacity all afternoon.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Screen glare year-round</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glare on monitors is not a summer-only problem in Sheffield — low winter sun on
                south and west elevations creates glare from October through to March. Solar film
                cuts glare significantly while maintaining acceptable light levels. The room stays
                usable without blinds drawn for most of the day.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">UV damage and fading</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                UV radiation fades hardwood floors, carpet, upholstery, retail stock and office
                furniture over time. Quality solar film from 3M and Avery Dennison blocks up to
                99% of UV while remaining optically clear — protecting the interior investment
                without changing how the space looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where we install solar film across Sheffield
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sheffield city centre offices (S1–S3).</strong> St Paul&apos;s Quarter, Arundel Gate, Sheaf Square, the Wicker, West Bar and the wider S1 commercial core. We know the building access logistics for this zone and schedule around city centre loading constraints.
            </p>
            <p>
              <strong className="text-foreground">Kelham Island and Neepsend (S3–S6).</strong> Converted mill buildings with large industrial windows, purpose-built creative studios, co-working spaces and tech offices. Often single or early double glazing — a particularly strong case for solar control film.
            </p>
            <p>
              <strong className="text-foreground">Sheffield business parks.</strong> Parkway Business Park (J33 M1 corridor), Sheffield Business Park, Atlas Business Complex and Shepcote Lane — large-footprint office and industrial occupiers, often with significant floor areas of south-facing glazing. We work with FM teams and building managers on planned maintenance schedules.
            </p>
            <p>
              <strong className="text-foreground">Sheffield schools and universities.</strong> Sheffield Hallam campus buildings, University of Sheffield facilities, Sheffield secondary schools and colleges. Education buildings often have large glazed areas and suffer summer term overheating acutely. We work within term-time and holiday access windows.
            </p>
            <p>
              <strong className="text-foreground">Residential Sheffield.</strong> Conservatories, kitchen extensions, orangeries and south-facing bedroom windows across all Sheffield postcode areas — S1 to S20, city centre to the suburbs. Free survey, usually within the week. Most residential Sheffield solar film jobs complete in half a day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Sheffield — common questions
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
            Related window film services in Sheffield
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
              <p className="mt-2 text-sm text-muted">Privacy and frosted film for Sheffield office glass partitions, meeting rooms and boardrooms.</p>
            </Link>
            <Link href="/window-film/window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">All window film in Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Full range of window film types installed across Sheffield — frosted, privacy, solar, manifestation.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Sheffield overheating problem? Let&apos;s fix it.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Sheffield. We assess the glazing, specify the right film for your
              application, and give you a fixed price. Most Sheffield solar film jobs complete
              within one to two days.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Sheffield Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
