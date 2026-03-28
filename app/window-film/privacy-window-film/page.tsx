import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Privacy Window Film Installer South Yorkshire | One-Way Mirror | WRPX",
  description:
    "Privacy window film and one-way mirrored film for homes, offices and shopfronts across South Yorkshire. Daytime privacy with clear interior view. Honest advice on what works. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/privacy-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does privacy film completely stop people seeing in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During daylight hours, yes — reflective film is very effective. At night, when indoor lights are on and it's dark outside, the effect reverses. If all-hours privacy is the requirement, frosted film is the answer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have privacy film on a window that faces north?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mirror film relies on the exterior being brighter than the interior. On a north-facing window with less direct light, the effect can be less pronounced. We assess orientation at survey and recommend accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Will it look like a mirror from inside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. From the interior in normal daylight conditions, the glass looks like slightly tinted but clear glass. The mirrored effect is predominantly on the outside.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Does privacy film completely stop people seeing in?",
    a: "During daylight hours, yes — reflective film is very effective. At night, when indoor lights are on and it's dark outside, the effect reverses. If all-hours privacy is the requirement, frosted film is the answer.",
  },
  {
    q: "Can I have privacy film on a window that faces north?",
    a: "Mirror film relies on the exterior being brighter than the interior. On a north-facing window with less direct light, the effect can be less pronounced. We assess orientation at survey and recommend accordingly.",
  },
  {
    q: "Will it look like a mirror from inside?",
    a: "No. From the interior in normal daylight conditions, the glass looks like slightly tinted but clear glass. The mirrored effect is predominantly on the outside.",
  },
  {
    q: "Can I get privacy film that's also decorative?",
    a: "Yes — frosted films come in patterns, gradients and branded designs. For a reflective finish combined with decoration, we can discuss your options at survey.",
  },
  {
    q: "Does privacy film affect mobile signal or Wi-Fi?",
    a: "Standard residential films don't. Some high-performance metallic commercial films can marginally affect signal — we'll flag this if relevant to your specification.",
  },
];

const situationRows = [
  { situation: "Bathroom window — privacy all the time", film: "Frosted film" },
  { situation: "Street-facing living room — daytime privacy", film: "Mirror/reflective film" },
  { situation: "Office — meeting room privacy", film: "Frosted film (bands or full)" },
  { situation: "Shopfront — daytime display / stop people looking in", film: "Reflective or tinted film" },
  { situation: "Ground floor bedroom — neighbours can see in", film: "Frosted film (lower half)" },
  { situation: "Conservatory — too much glare and heat", film: "Solar/tinted film" },
  { situation: "All-day privacy AND keeping a view out", film: "No single film does both — we'll advise" },
];

export default function PrivacyWindowFilmPage() {
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
            <span className="text-foreground">Privacy Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/window-film/privacy-2.png"
          alt="Privacy window film — reflective exterior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Privacy window film for South Yorkshire — stop people seeing in without losing your view out
          </h1>
        </div>
      </section>

      {/* Callout: daytime privacy only */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float border-2 border-accent/50 bg-accent/5 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground">
              One-way mirror film: daytime privacy only. Read this before choosing.
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Mirror film only works when it&apos;s brighter outside than inside. At night with lights on, the effect reverses — people can see in. If you need 24/7 privacy, <Link href="#honest-guide" className="text-accent hover:underline">see the honest explanation below</Link> or choose <Link href="/window-film/frosted-window-film/" className="text-accent hover:underline">frosted film</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted leading-relaxed">
            Most privacy film searches end up here: <em>I want to see out but I don&apos;t want people seeing in.</em> One-way mirror film does that — but only during daylight. Before you choose, it&apos;s worth understanding exactly how it works.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX supplies and installs privacy and reflective window films for homes, offices and commercial premises across South Yorkshire. We&apos;ll recommend the right product for your situation and we&apos;ll be honest when the expectation doesn&apos;t match what&apos;s achievable.
          </p>
        </div>
      </section>

      {/* Honest guide — id for callout link */}
      <section id="honest-guide" className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            How one-way mirror film really works — and the one thing most suppliers don&apos;t tell you
          </h2>
          <div className="card-float space-y-4 p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              One-way mirror film (also called reflective film or privacy film) works by exploiting a difference in light levels. The exterior surface has a mirrored finish that reflects the outside world. The interior surface lets you see through clearly.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">The crucial part:</strong> it only works when it&apos;s brighter outside than inside.
            </p>
            <p className="text-muted leading-relaxed">
              During daytime: it works perfectly. From the street, passers-by see a reflection. From inside, you see through normally.
            </p>
            <p className="text-muted leading-relaxed">
              At night: it reverses. When your interior lights are on and it&apos;s dark outside, people on the street can see in and you see a reflection of your own room. This is physics — not a manufacturing flaw — and no supplier can change it.
            </p>
            <p className="font-medium text-foreground">What this means in practice:</p>
            <ul className="list-inside list-disc space-y-2 text-muted">
              <li>If you want daytime privacy for a street-facing living room, home office, or shopfront — one-way mirror film is the right product.</li>
              <li>If you want privacy at night without closing blinds — frosted film is what you need. It works in both directions regardless of light conditions.</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              This is the honest version of the conversation. Most people appreciate it before they commit.
            </p>
          </div>
        </div>
      </section>

      {/* Which film is right — table */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Privacy film options — choosing the right one
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 font-semibold text-foreground">Situation</th>
                  <th className="pb-3 font-semibold text-foreground">Right film</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {situationRows.map((row) => (
                  <tr key={row.situation} className="border-b border-border">
                    <td className="py-3 pr-4">{row.situation}</td>
                    <td className="py-3">{row.film}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Where privacy film gets installed
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Street-facing homes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ground-floor windows in terraced and semi-detached homes in areas like Sheffield city fringe, Doncaster&apos;s main residential streets, or newer housing estates with close neighbours. Mirror film on a living room or kitchen window means you can sit in daylight without curtains without giving your neighbours a view of your room.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Offices and commercial premises</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Open-plan offices with street-facing windows. Meeting rooms with glass frontages. Reception areas in professional services where discretion matters. We install privacy film regularly in commercial buildings across Sheffield and Rotherham.
              </p>
            </div>
            <div className="card-float p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Shopfronts and retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A reflective film on a retail or hospitality frontage controls what&apos;s visible from the street. Useful for consultation rooms, staff areas, or managing the visibility of back-of-house space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our materials */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            What we use
          </h2>
          <p className="text-muted leading-relaxed">
            We install reflective and privacy films from the 3M, Avery Dennison and Hexis commercial ranges — not budget peel-and-stick products. The difference in longevity, clarity and edge finish is significant. We specify the right reflectance level for your orientation and environment — a south-facing window needs a different film to a north-facing one.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Privacy film questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Not sure which film is right for your windows?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the situation and we&apos;ll tell you the honest answer. Free survey, no obligation, across South Yorkshire.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Your Free Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
