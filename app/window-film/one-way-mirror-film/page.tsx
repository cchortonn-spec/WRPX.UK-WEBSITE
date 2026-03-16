import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "One-Way Mirror Film Sheffield & South Yorkshire | Reflective Window Film | WRPX",
  description:
    "One-way mirror film professionally installed across Sheffield and South Yorkshire. Daytime privacy with full interior view. Honest advice included. Free survey from WRPX.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/one-way-mirror-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does one-way mirror film work at night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for privacy. At night, with interior lights on and darkness outside, the film reverses — people outside can see in. If you need all-hours privacy, frosted film is the correct product.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see clearly through one-way mirror film from inside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in daylight. The interior view is clear or very slightly tinted depending on the film spec. In bright sunshine you'll see your surroundings clearly.",
      },
    },
    {
      "@type": "Question",
      name: "How reflective does the exterior look?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Like a tinted mirror — similar to the glass on a modern office building or an architect-designed home. The level of reflectance varies by film and we can show you samples before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Is it suitable for residential use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It's a popular solution for ground-floor front rooms and home offices. We install it in homes across Sheffield and South Yorkshire regularly.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Does one-way mirror film work at night?",
    a: "Not for privacy. At night, with interior lights on and darkness outside, the film reverses — people outside can see in. If you need all-hours privacy, frosted film is the correct product.",
  },
  {
    q: "Can I see clearly through one-way mirror film from inside?",
    a: "Yes, in daylight. The interior view is clear or very slightly tinted depending on the film spec. In bright sunshine you'll see your surroundings clearly.",
  },
  {
    q: "How reflective does the exterior look?",
    a: "Like a tinted mirror — similar to the glass on a modern office building or an architect-designed home. The level of reflectance varies by film and we can show you samples before you commit.",
  },
  {
    q: "Is it suitable for residential use?",
    a: "Yes. It's a popular solution for ground-floor front rooms and home offices. We install it in homes across Sheffield and South Yorkshire regularly.",
  },
];

export default function OneWayMirrorFilmPage() {
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
            <span className="text-foreground">One-Way Mirror Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[35vh] min-h-[240px] w-full overflow-hidden">
        <Image
          src="/images/window-film/one-way-1.png"
          alt="One-way mirror film — reflective window"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            One-way mirror window film — professional installation across South Yorkshire
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            One-way mirror film (sometimes called reflective privacy film) gives the exterior of your glass a mirrored appearance while keeping the interior view clear. It&apos;s a popular solution for street-facing homes, offices and shopfronts where you want to see out without people seeing in — in daylight.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            The &quot;in daylight&quot; part matters. We explain it fully below.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            How one-way mirror film works
          </h2>
          <div className="card-float space-y-4 p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              The film has a reflective metallic coating on the outside. In normal daylight, the outside is brighter than the inside — so from the street, people see a mirror reflection. From inside, you look through clear (or lightly tinted) glass.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">At night, the effect reverses.</strong> Once it&apos;s darker outside and your interior lights are on, the brighter side is now indoors. The film becomes transparent from outside, and you see your own reflection from in.
            </p>
            <p className="text-muted leading-relaxed">
              This is not a product flaw. It&apos;s physics. Every one-way mirror product works this way. Any supplier who tells you otherwise is wrong.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">If you need all-hours privacy</strong> — a frosted film is what you need. We install both. We&apos;ll help you choose at the survey.
            </p>
          </div>
        </div>
      </section>

      {/* What it's good for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            When one-way mirror film is the right choice
          </h2>
          <ul className="list-inside list-disc space-y-2 text-muted">
            <li>Street-facing living rooms and home offices where you work or relax in daylight</li>
            <li>Office frontages and commercial glazing where you want to control external visibility during business hours</li>
            <li>Shopfronts — control what&apos;s visible from the pavement during trading hours</li>
            <li>South-facing windows — the reflective coating also reduces solar gain, so there&apos;s a dual benefit</li>
            <li>Conservatories where daytime glare and privacy are the issue</li>
          </ul>
        </div>
      </section>

      {/* Materials and spec */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            What we install
          </h2>
          <p className="text-muted leading-relaxed">
            WRPX uses reflective films from 3M and Avery Dennison — the same premium range we use across all our commercial vinyl work. We specify the right reflectance level for your glass orientation and the light conditions of your property. A heavily mirrored film on a shaded north-facing window will underperform. We assess this at survey and give you an honest recommendation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            One-way mirror film — quick answers
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <p className="text-muted leading-relaxed">
              Unsure whether mirror film or frosted film is right for your situation? We&apos;ll tell you honestly at the free survey.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Your Free Survey →
            </Link>
            <p className="mt-6 text-sm text-muted">
              Related:{" "}
              <Link href="/window-film/privacy-window-film/" className="text-accent hover:underline">Privacy window film →</Link>
              {" · "}
              <Link href="/window-film/frosted-window-film/" className="text-accent hover:underline">Frosted window film →</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
