import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Glass Manifestation South Yorkshire | DDA Compliance & Branded Manifestation | WRPX",
  description:
    "Glass manifestation professionally installed across South Yorkshire. DDA and Health & Safety compliant manifestation for offices, schools and commercial buildings. Branded and plain options.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/glass-manifestation/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is glass manifestation legally required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, under the Equality Act 2010 and Health & Safety at Work Act. Full-height and low-level glazing in commercial buildings must be marked to be apparent to users, including those with visual impairments. Specific guidance is in BS 8300.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as compliant manifestation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manifestation must contrast visually with the surroundings and appear at two height bands: 850–1000mm and 1400–1600mm above floor level. It must span the full width of the glazed panel.",
      },
    },
    {
      "@type": "Question",
      name: "Can we use our company logo as the manifestation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — provided it meets the specification for contrast and the required heights. We can work with your brand assets to create compliant branded manifestation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you install glass manifestation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a standard commercial office with a few panels, usually within a week. We survey first to count panels and heights, then come back to install.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Is glass manifestation legally required?",
    a: "Yes, under the Equality Act 2010 and Health & Safety at Work Act. Full-height and low-level glazing in commercial buildings must be marked to be apparent to users, including those with visual impairments. Specific guidance is in BS 8300.",
  },
  {
    q: "What counts as compliant manifestation?",
    a: "Manifestation must contrast visually with the surroundings and appear at two height bands: 850–1000mm and 1400–1600mm above floor level. It must span the full width of the glazed panel.",
  },
  {
    q: "Can we use our company logo as the manifestation?",
    a: "Yes — provided it meets the specification for contrast and the required heights. We can work with your brand assets to create compliant branded manifestation.",
  },
  {
    q: "How quickly can you install it?",
    a: "For a standard commercial office with a few panels, usually within a week. We survey first to count panels and heights, then come back to install.",
  },
];

const options = [
  {
    title: "Standard compliance manifestation",
    body: "A frosted band or a row of dots/circles at the two required heights. Meets the standard. Simple and clean.",
  },
  {
    title: "Branded manifestation",
    body: "Your company logo, a pattern in your brand colours, or a custom frosted design that fulfils the compliance requirement while looking intentional and professional. Popular with architects, interior designers and businesses who don't want the standard \"stuck-on dots\" look.",
  },
  {
    title: "Frosted manifestation with logo or text",
    body: "We can cut logos, company names or directional text into manifestation film. Particularly effective on glass office partitions, internal glass doors and reception glazing.",
  },
  {
    title: "Decorative manifestation",
    body: "For design-led spaces, we can apply manifestation as a feature — a repeating geometric pattern, a gradient fade, an abstract form — that reads as a design choice, not a compliance fix.",
  },
];

const whoNeeds = [
  "Office buildings with glass partitions and internal doors",
  "Schools and education facilities",
  "Healthcare premises — GP surgeries, hospitals, dental practices",
  "Retail — particularly changing room areas and staff partitions",
  "Hotels, hospitality and leisure venues",
  "New commercial builds and refurbishments",
];

export default function GlassManifestationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">
              Window Film
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Glass Manifestation</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/window-film/frosted-2.png"
          alt="Glass manifestation — DDA compliant"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Glass manifestation across South Yorkshire — compliance, branding and safety for commercial glazing
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            If you have full-height glazed panels, glass doors or low-level glazing in your commercial premises, manifestation isn&apos;t optional — it&apos;s a legal requirement under Health & Safety legislation and the Equality Act. WRPX installs glass manifestation film for offices, schools, healthcare buildings, and commercial interiors across South Yorkshire, to both standard compliance and branded specifications.
          </p>
        </div>
      </section>

      {/* What is glass manifestation */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            What glass manifestation is and why it&apos;s required
          </h2>
          <p className="text-muted leading-relaxed">
            Glass manifestation means marking glazed surfaces to make them visible to people — particularly those with visual impairments — who might not realise a surface is glass. Current guidance (BS 8300 and the Equality Act 2010) requires manifestation at two heights: 850–1000mm and 1400–1600mm from the floor, across the full width of the panel.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Without it, your building could be in breach of the Equality Act. If someone walks into an unmarked glass panel and sustains injury, unmarked glazing significantly increases your liability.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            It&apos;s one of those compliance requirements that often gets left until a building audit or an insurance review flags it. We deal with this quickly — usually in a single visit.
          </p>
        </div>
      </section>

      {/* Manifestation options */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What manifestation looks like — plain to branded
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {options.map((item) => (
              <div key={item.title} className="card-float p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            Buildings that typically require manifestation
          </h2>
          <ul className="list-inside list-disc space-y-2 text-muted">
            {whoNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-muted leading-relaxed">
            If you&apos;ve just had a glazed partition installed or you&apos;re refurbishing office space and haven&apos;t addressed manifestation, we can survey and install usually within a week.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manifestation — quick answers
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Glazing to sort for compliance? Get a survey booked.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover South Yorkshire — offices, schools, healthcare premises, commercial spaces. One survey, clear quote, fast installation.
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
