import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Frosted Window Film South Yorkshire | Bathrooms, Offices & Doors | WRPX",
  description:
    "Professional frosted window film installation across South Yorkshire. Privacy day and night — no curtains needed. Bathrooms, front windows, office glass and internal partitions. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/frosted-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you see through frosted window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can see light and vague shapes but no detail. You cannot identify faces or see clearly through it. Privacy is effective from both sides.",
      },
    },
    {
      "@type": "Question",
      name: "Does frosted film look cheap compared to etched glass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A properly installed quality film from 3M or Avery Dennison is indistinguishable from etched glass to a normal observer.",
      },
    },
    {
      "@type": "Question",
      name: "Can frosted film be applied to just part of a window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Partial coverage is common — frosting the lower half while leaving the top clear is a popular option for street-facing rooms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does frosted window film installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 30 to 45 minutes for a standard bathroom window.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can you see through frosted window film at all?",
    a: "You can see light and vague shapes, but no detail — the same as looking through obscure bathroom glass. You cannot identify faces, read text, or see clearly through it. Privacy is effective.",
  },
  {
    q: "Does frosted film look cheap compared to etched glass?",
    a: "A properly installed film using a quality product from 3M or Avery Dennison is indistinguishable from etched glass to a normal observer. The difference shows if you look very closely at the edge — which most people never do.",
  },
  {
    q: "Can I get frosted film on just part of my window?",
    a: "Yes. Partial coverage is a popular option — frosting the lower half of a window while leaving the top half clear is very common, particularly for street-facing rooms. We can cut to any line or shape.",
  },
  {
    q: "How long does it take to install frosted film on a bathroom window?",
    a: "Usually 30–45 minutes. We clean the glass, apply the film, trim the edges, and it's done. The film needs a few hours to fully cure before you touch it, but it's usable immediately.",
  },
  {
    q: "Will frost film work on a textured or rough glass surface?",
    a: "Textured glass creates adhesion challenges. We assess this at survey stage — some textured surfaces work well, others don't hold film reliably. We'll tell you honestly before you commit.",
  },
  {
    q: "Is frosted film suitable for wet rooms?",
    a: "Yes — quality frosted films from 3M and Avery Dennison are designed for use in bathrooms and humid environments. Correct installation at the edges is important for longevity in wet areas, which is why professional fitting matters.",
  },
];

const whereCards = [
  {
    title: "Bathroom windows",
    body: "The most common application. If your bathroom window is clear or has insufficient obscuring, frosted film is the cleanest solution — quicker than fitting obscure glass and indistinguishable from it once applied.",
  },
  {
    title: "Front door glass panels",
    body: "Sidelights, fanlights and vision panels in front doors. Full privacy from the street without affecting the look of the door.",
  },
  {
    title: "Office glass partitions",
    body: "Open-plan offices with glass walls need privacy for meetings without losing the sense of space. Frosted film — full coverage or as a mid-height band — is the standard solution.",
  },
  {
    title: "Internal glass doors",
    body: "Bedroom, bathroom or living room doors with glazed panels. Frosted film gives privacy without replacing the door.",
  },
  {
    title: "Conservatories",
    body: "Applied to the lower section of conservatory glass to reduce visibility from neighbouring gardens. Often combined with solar control film on roof panels.",
  },
  {
    title: "Shopfronts and retail windows",
    body: "Lower-section frosting on retail frontages for changing rooms, back-of-house sections, or a sleek frosted band as a design element.",
  },
];

export default function FrostedWindowFilmPage() {
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
            <span className="text-foreground">Frosted Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
          alt="Frosted window film — clean edge finish"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Frosted window film — full privacy, any window, across South Yorkshire
          </h1>
        </div>
      </section>

      {/* Intro — two column */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                If you want a window that nobody can see through — in daylight, at night, from any angle — frosted film is the answer. It gives you the appearance of etched or sandblasted glass at a fraction of the cost, without replacing the glazing or waiting weeks for obscure glass to be fitted.
              </p>
              <p className="text-muted leading-relaxed">
                WRPX installs frosted window film in bathrooms, offices, front-facing windows, internal glass doors and partitions across Sheffield, Doncaster, Barnsley, Rotherham, Leeds and the wider South Yorkshire area. One visit. Clean edges. Five-year guarantee.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg"
                alt="Before and after — frosted window film"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What frosted film does */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            What frosted window film does — and what it doesn&apos;t
          </h2>
          <p className="text-muted leading-relaxed">
            Frosted film scatters light as it passes through the glass. The result looks like etched or sandblasted glass — a soft, diffused, milky finish that blocks a clear view from either side.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            A few things worth knowing before you commit:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li><strong className="text-foreground">Privacy is complete in both directions</strong> — from the outside and the inside. Unlike one-way mirror film, frosted film gives privacy in both directions regardless of light conditions.</li>
            <li><strong className="text-foreground">Light still comes through</strong> — frosted film doesn&apos;t block light the way a curtain does. Rooms stay bright. You just lose the clear view.</li>
            <li><strong className="text-foreground">It&apos;s permanent in normal use</strong> — not a temporary static-cling sheet. Proper film, properly installed, lasts 7–10 years.</li>
            <li><strong className="text-foreground">It can be partial</strong> — you can frost the bottom half of a window, leaving the top clear. Common for street-facing ground-floor rooms where you want sky and light but not a view in from the pavement.</li>
          </ul>
        </div>
      </section>

      {/* Where we install */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Where we install frosted window film
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whereCards.map((card) => (
              <div key={card.title} className="card-float p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frosted film vs obscure glass — comparison table */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted window film vs replacing the glass — honest comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4 font-semibold text-foreground"></th>
                  <th className="pb-3 pr-4 font-semibold text-foreground">Frosted window film</th>
                  <th className="pb-3 font-semibold text-foreground">Obscure/frosted glass replacement</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Cost (typical bathroom window)</td>
                  <td className="py-3 pr-4">£80–£180 fitted</td>
                  <td className="py-3">£200–£500+ including fitting</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Installation time</td>
                  <td className="py-3 pr-4">30–45 minutes</td>
                  <td className="py-3">Half to full day (glazier)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Disruption</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3">Glass removal, potential frame work</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Reversible</td>
                  <td className="py-3 pr-4">Yes — film can be removed</td>
                  <td className="py-3">No</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Result</td>
                  <td className="py-3 pr-4">Identical appearance</td>
                  <td className="py-3">Identical appearance</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">Lifespan</td>
                  <td className="py-3 pr-4">7–10 years</td>
                  <td className="py-3">Permanent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted leading-relaxed">
            For most homeowners the choice is straightforward — film is faster, cheaper and the result is the same. The main reason to choose replacement glass is if you&apos;re replacing the entire unit anyway.
          </p>
        </div>
      </section>

      {/* Design options */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
            Plain, patterned or branded — frosted film design options
          </h2>
          <p className="text-muted leading-relaxed">
            Standard frosted film gives a uniform milky finish. We also supply:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li><strong className="text-foreground">Etched-effect films</strong> — detailed geometric or textured patterns that replicate the look of decorative sandblasted glass</li>
            <li><strong className="text-foreground">Partial coverage</strong> — frosted bottom half, clear top half, or a frosted band at eye level</li>
            <li><strong className="text-foreground">Cut logos and text</strong> — frosted film cut to your brand mark or company name; particularly popular for office reception glass and shopfronts</li>
            <li><strong className="text-foreground">Gradient fade</strong> — clear at top, increasingly frosted toward the bottom</li>
          </ul>
          <p className="mt-6 text-muted leading-relaxed">
            Bring us a reference image if you have something specific in mind. We&apos;ll advise on what&apos;s achievable and at what cost.
          </p>
        </div>
      </section>

      {/* Our process */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What to expect from a WRPX frosted film installation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Survey</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We visit, look at the glass, discuss your requirements, and recommend the right film and coverage. We measure accurately — no surprises on the day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Preparation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every surface is thoroughly cleaned and degreased before application. This is the step that determines whether your film lasts years or months. We don&apos;t cut corners on it.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Application</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Film applied by hand to a precise, bubble-free finish. Edges trimmed clean. Corners done neatly.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Sign-off</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We inspect with you before we leave. Any adjustments made on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted window film — questions we get asked
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Get a free frosted film survey
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Chesterfield and across South Yorkshire. Call 07398 395417 or request a survey online — usually within the week.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Your Free Survey →
            </Link>
            <p className="mt-6 text-sm text-muted">
              Related services:{" "}
              <Link href="/window-film/privacy-window-film/" className="text-accent hover:underline">Privacy window film →</Link>
              {" · "}
              <Link href="/window-film/one-way-mirror-film/" className="text-accent hover:underline">One-way mirror film →</Link>
              {" · "}
              <Link href="/window-film/residential-window-film/" className="text-accent hover:underline">Residential window film →</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
