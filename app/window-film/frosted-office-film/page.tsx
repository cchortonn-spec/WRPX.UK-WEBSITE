import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frosted Office Window Film | Privacy Film & Glass Manifestation for Offices | WRPX",
  description:
    "Frosted window film for office glazing across South Yorkshire and the East Midlands — meeting room privacy film, partition glass frosting, open-plan privacy screening, DDA-compliant glass manifestation and decorative office film. Professional installer, free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/frosted-office-film/",
  },
};

const serviceSchema = getServiceSchema(
  "Frosted office window film — privacy, manifestation and decorative film for commercial glazing",
  "Frosted and privacy window film for office environments across South Yorkshire and the East Midlands. Meeting room and boardroom privacy film, open-plan partition screening, etched-effect branded designs, DDA-compliant glass manifestation and solar-control film for south-facing glazing. Installed outside office hours to avoid business disruption."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Frosted Office Window Film", item: "https://www.wrpx.co.uk/window-film/frosted-office-film/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does frosted film on office glass affect natural light?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted film transmits natural light while eliminating direct visibility. The amount of light transmitted depends on the opacity of the film chosen — we offer a range from lightly frosted to near-opaque. We advise on the right balance between privacy and light transmission at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can frosted office film include logos or company branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Etched-effect frosted film can incorporate cut-out logos, text, geometric patterns or full branded designs. This is popular on reception glazing, meeting room glass and internal office partitions. We advise on cut vinyl vs printed film based on your design and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done outside office hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is how we prefer to work for occupied offices. Most office window film installations are completed outside working hours, in the evening or on a weekend, so there is no disruption to the working day. For multi-floor programmes we schedule by floor or area across successive evenings.",
      },
    },
    {
      "@type": "Question",
      name: "What is glass manifestation and is it a legal requirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation refers to markings applied to glazed panels at eye level to make full-height or low-level glass visible to people moving through the space. It is required under the Equality Act 2010 and building regulations for glazed doors and full-height panels. We install compliant frosted manifestation strips or branded manifestation designs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install window film across multiple office locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Multi-site office programmes are straightforward for us. We provide a consistent film specification across every floor or location, work within the building&apos;s access and contractor procedures, and provide photo documentation per floor or area at handover. White-label for fit-out contractors available.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Does frosted film on office glass affect natural light?",
    a: "Frosted film transmits natural light while eliminating direct visibility. The amount of light transmitted depends on the opacity of the film chosen — we offer a range from lightly frosted to near-opaque. We advise on the right balance between privacy and light transmission at survey.",
  },
  {
    q: "Can frosted office film include logos or company branding?",
    a: "Yes. Etched-effect frosted film can incorporate cut-out logos, text, geometric patterns or full branded designs. This is popular on reception glazing, meeting room glass and internal office partitions. We advise on cut vinyl vs printed film based on your design and budget.",
  },
  {
    q: "Can installation be done outside office hours?",
    a: "Yes — and this is how we prefer to work for occupied offices. Most office window film installations are completed outside working hours, in the evening or on a weekend, so there is no disruption to the working day. For multi-floor programmes we schedule by floor or area across successive evenings.",
  },
  {
    q: "What is glass manifestation and is it a legal requirement?",
    a: "Glass manifestation refers to markings applied to glazed panels at eye level to make full-height or low-level glass visible to people moving through the space. It is required under the Equality Act 2010 and building regulations for glazed doors and full-height panels. We install compliant frosted manifestation strips or branded manifestation designs.",
  },
  {
    q: "Can you install window film across multiple office locations?",
    a: "Yes. Multi-site office programmes are straightforward for us. We provide a consistent film specification across every floor or location, work within the building's access and contractor procedures, and provide photo documentation per floor or area at handover. White-label for fit-out contractors available.",
  },
];

export default function FrostedOfficeFilmPage() {
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
            <span className="text-foreground">Frosted Office Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frosted office window film — privacy, manifestation and branded glazing for commercial interiors
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Meeting rooms that lack privacy. Glass partitions that expose working areas. Full-height glazing without any manifestation. Open-plan offices are built around glass, and glass in an office environment creates privacy and compliance issues that film resolves quickly and permanently. We install frosted office film across South Yorkshire and the East Midlands, typically outside working hours so there is no disruption to the business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request an Office Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Office window film applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Meeting room and boardroom privacy</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glazed meeting rooms and boardrooms allow clients and visitors to see inside during sensitive conversations. Frosted film on the lower section of the glass — or full-height where required — creates complete privacy while maintaining the open-plan appearance from the outside.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Open-plan partition screening</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glass partitions between teams or departments are common in modern offices. Applying frosted or etched-effect film to the lower 1.2–1.5m of the partition screens seated workers from direct line of sight — a simple privacy measure that does not require replacing the glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Branded etched-effect glass</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reception glazing, boardroom glass and internal partitions with frosted company logos, geometric patterns or brand motifs. Etched-effect vinyl creates a premium, permanent-looking branded finish without actual glass etching. Can be removed and updated when branding changes.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">DDA glass manifestation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height glazed panels, glass doors and low-level glazing in offices require manifestation markings at 850–1000mm and 1400–1600mm above floor level to meet Equality Act and building regulation requirements. We install compliant frosted strips or branded manifestation designs.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar-control film for glazed offices</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                South-facing offices with large glazed areas overheat badly in summer. Solar-control film reduces solar gain and glare on screens without noticeably reducing visible light — particularly effective on floor-to-ceiling glazing and atrium glazing in modern office buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">One-way mirror film for sensitive areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One-way mirror film provides daytime privacy for street-facing offices, ground floor windows and internal areas where privacy is needed from one direction only. We advise on the realistic performance — daytime privacy from outside with clear visibility from inside — and when frosted film is a more reliable solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-of-hours */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Installed outside working hours. No disruption to your team.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Office window film installations in occupied buildings work best outside working hours. We schedule evening, weekend and early-morning slots so the office experiences no disruption. For most single-floor or single-area installations, the work is completed overnight and the office is ready for business the following morning.
            </p>
            <p>
              <strong className="text-foreground">Multi-floor and multi-location programmes.</strong> For a larger office estate — multiple floors, multiple buildings or a portfolio of managed offices — we phase the work across successive evenings and provide floor-by-floor or area-by-area photo documentation so facilities management can track completion.
            </p>
            <p>
              <strong className="text-foreground">Fit-out contractor integration.</strong> We integrate into office fit-out programmes as a subcontract installer. We work within your programme schedule, follow your site induction process and RAMS requirements, and operate white-label — your client sees a clean installation, not an additional subcontractor in their space.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted office film — common questions
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
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for south-facing offices and large glazed areas. Cooler offices without replacing glazing.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-2 text-sm text-muted">DDA-compliant manifestation for glazed offices. Frosted strips and branded manifestation designs.</p>
            </Link>
            <Link href="/architectural-wrap-offices/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Reception desks, breakout kitchen surfaces and meeting room wall panels wrapped in architectural film.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Full privacy frosted film overview — day and night, residential and commercial.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Office window film — single site or multi-location programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope office window film installations across South Yorkshire and the East Midlands. Meeting room privacy, manifestation compliance, solar control or branded etched-effect glass — we advise on specification and install outside working hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request an Office Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
