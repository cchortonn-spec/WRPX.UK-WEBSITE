import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Solar Control Window Film for Offices | Heat & Glare Reduction | WRPX",
  description:
    "Solar control window film for commercial offices across South Yorkshire and the East Midlands. Reduce heat, screen glare and block UV through existing glazing — no glazing replacement needed. Free commercial survey from WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/office-solar-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much will solar film reduce temperature in our office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a south or west-facing glazed office, a quality solar control film typically reduces peak solar heat gain through the glass by 40–79% depending on film specification and glazing type. The practical result is a room that stays usable in afternoon sun without air conditioning running constantly. We give you a realistic expectation for your specific space and orientation at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Will solar film darken the office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With the right specification, no. We select films that maximise heat and glare rejection while maintaining high visible light transmission. In most commercial applications, staff cannot tell the difference in ambient light levels after installation. If you need a visible tint for privacy as well as solar control, we can specify a dual-function film.",
      },
    },
    {
      "@type": "Question",
      name: "Is solar film cheaper than replacing the glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Significantly. Window film is applied to the interior surface of existing glass — there is no structural work and no glazing replacement. For most commercial office applications, film is a fraction of the cost of replacing windows with solar-control glazing, and delivers comparable performance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install without disrupting office operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A standard office window panel takes 20–40 minutes to film. We can work floor by floor, scheduling around your office layout. For open-plan floors, we can work section by section. Out-of-hours installation is available where preferred.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar film work on double glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — film is applied to the interior surface of the inner pane of a double-glazed unit. It works on most standard commercial double glazing. Some specialist low-E or self-cleaning coated glass has different requirements, which we assess at survey.",
      },
    },
    {
      "@type": "Question",
      name: "How long does commercial solar window film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality commercial solar control film typically lasts 10–15 years on interior-applied office glazing. Performance does not degrade materially over the service life. We use specification-grade film from 3M and Avery Dennison, not consumer-grade product.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "How much will solar film reduce temperature in our office?",
    a: "In a south or west-facing glazed office, a quality solar control film typically reduces peak solar heat gain through the glass by 40–79% depending on film specification and glazing type. The practical result is a room that stays usable in afternoon sun without air conditioning running constantly. We give you a realistic expectation for your specific space and orientation at survey.",
  },
  {
    q: "Will solar film darken the office?",
    a: "With the right specification, no. We select films that maximise heat and glare rejection while maintaining high visible light transmission. In most commercial applications, staff cannot tell the difference in ambient light levels after installation. If you need a visible tint for privacy as well as solar control, we can specify a dual-function film.",
  },
  {
    q: "Is solar film cheaper than replacing the glazing?",
    a: "Significantly. Window film is applied to the interior surface of existing glass — there is no structural work and no glazing replacement. For most commercial office applications, film is a fraction of the cost of replacing windows with solar-control glazing, and delivers comparable performance.",
  },
  {
    q: "Can you install without disrupting office operations?",
    a: "Yes. A standard office window panel takes 20–40 minutes to film. We can work floor by floor, scheduling around your office layout. For open-plan floors, we can work section by section. Out-of-hours installation is available where preferred.",
  },
  {
    q: "Does solar film work on double glazing?",
    a: "Yes — film is applied to the interior surface of the inner pane of a double-glazed unit. It works on most standard commercial double glazing. Some specialist low-E or self-cleaning coated glass has different requirements, which we assess at survey.",
  },
  {
    q: "How long does commercial solar window film last?",
    a: "Quality commercial solar control film typically lasts 10–15 years on interior-applied office glazing. Performance does not degrade materially over the service life. We use specification-grade film from 3M and Avery Dennison, not consumer-grade product.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film for Offices", item: "https://www.wrpx.co.uk/window-film/office-solar-film/" },
  ],
};

export default function OfficeSolarFilmPage() {
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
            <span className="text-foreground">Solar Control Film for Offices</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Solar control window film for offices — heat and glare through existing glazing
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Afternoon sun through south and west-facing office glazing creates two problems: overheating that makes areas unusable, and screen glare that cuts productivity. Solar control window film is applied to the interior surface of your existing glass and addresses both — reducing solar heat gain and cutting glare — without replacing the glazing, installing blinds, or structural work. WRPX installs commercial-grade solar control film across South Yorkshire and the East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Commercial Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* The problem in offices */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            The problem with glazed offices in summer
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Modern commercial offices increasingly feature large glazed areas — floor-to-ceiling windows, glazed partitions, atria and corner units. This glazing creates bright, attractive workspaces in winter and spring, but from April to October on south and west aspects, it becomes a serious problem.
            </p>
            <p>
              <strong className="text-foreground">Heat.</strong> Solar heat gain through unprotected glazing can raise the temperature of a south-facing office floor by 8–15°C above ambient on a clear summer afternoon. Air conditioning struggles to keep pace; energy costs rise and comfort drops.
            </p>
            <p>
              <strong className="text-foreground">Screen glare.</strong> Afternoon sun at monitor height makes entire desk areas unusable without shutting blinds — which eliminates the benefit of the glazing entirely. Screen glare is consistently one of the most reported productivity issues in glazed commercial buildings.
            </p>
            <p>
              <strong className="text-foreground">UV damage.</strong> UV radiation through unprotected glass fades carpets, flooring, upholstered furniture and printed branding over months and years. Quality solar control film blocks up to 99% of UV transmission while remaining optically clear.
            </p>
          </div>
        </div>
      </section>

      {/* What film does */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What solar control film does to commercial glazing
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Rejects solar heat</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A quality commercial solar film reduces the solar energy transmitted through your glass by 40–79%. In a south-facing office, this is the difference between a comfortable working temperature and having to close that area of the building.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Eliminates screen glare</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar film cuts the visible light transmission selectively — reducing the harsh glare that washes out monitors — without making the room dark. Staff can face windows with screens on. Blinds stay open.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Blocks UV</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Up to 99% UV blockage protects flooring, carpets, upholstered furniture and any printed graphics from fading. No change in visible light levels — UV is blocked separately from visible light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Commercial office applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Open-plan office floors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                South and west-facing floors with floor-to-ceiling glazing — the most common and highest-impact application. We work floor by floor, section by section, to minimise disruption.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting rooms</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glazed meeting rooms with presentation screens often have a direct conflict between natural light and screen visibility. Solar film resolves this without blackout blinds.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Reception and entrance glazing</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large entrance glazing and reception atria overheat quickly and are difficult to cool. Solar film is often the most practical intervention without structural work.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Business park and managed office buildings</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We work directly with building managers, facilities teams and fit-out contractors on South Yorkshire and East Midlands business parks — typically during a tenancy change or planned maintenance window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Office solar film questions
          </h2>
          <FaqAccordion items={faqItems} />
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
              <h3 className="font-semibold text-foreground">Solar control film overview</h3>
              <p className="mt-2 text-sm text-muted">Solar control film for conservatories, homes and all commercial applications.</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window film for hotels</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and solar control for hotel guest rooms and glazed communal areas.</p>
            </Link>
            <Link href="/window-film/commercial-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Commercial window film</h3>
              <p className="mt-2 text-sm text-muted">Full commercial window film service overview — privacy, solar, manifestation and decorative.</p>
            </Link>
            <Link href="/office-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Vinyl graphics installation for offices — wall graphics, manifestation, wayfinding and branding.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating office? We can fix it without replacing the glazing.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across South Yorkshire and the East Midlands. We assess the glazing, specify the right film, and give you a realistic picture of the outcome.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Commercial Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
