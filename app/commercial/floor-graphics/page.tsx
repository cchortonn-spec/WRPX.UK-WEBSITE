import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Floor Graphics Installer South Yorkshire | WRPX",
  description:
    "Promotional floor graphics and anti-slip floor film installation across South Yorkshire for retail campaigns, wayfinding and in-store messaging.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/floor-graphics/" },
};

export default function CommercialFloorGraphicsPage() {
  const faqItems = [
    {
      q: "Do you install campaign floor graphics and permanent floor graphics?",
      a: "Yes. We install short-term campaign graphics and longer-term floor branding systems, with film specification based on expected traffic and service life.",
    },
    {
      q: "Are your floor graphics anti-slip?",
      a: "We use anti-slip rated commercial floor media appropriate for retail and public-facing environments, matched to the floor type and operational requirement.",
    },
    {
      q: "Which floor surfaces can be wrapped?",
      a: "Most smooth, stable commercial floors are suitable. We assess tile, vinyl, sealed concrete and other hard surfaces before installation and advise if prep is needed.",
    },
    {
      q: "Can installs be done without disrupting opening hours?",
      a: "In most cases, yes. We schedule around trading windows and phase installs to maintain safe access while graphics are applied and finished.",
    },
    {
      q: "Do you handle multi-site floor graphics rollouts?",
      a: "Yes. We support multi-site programmes for brands and agencies with consistent standards and site-by-site sign-off reporting.",
    },
  ] as const;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Commercial Floor Graphics
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            We install commercial floor graphics for retail spaces, events and
            public-facing interiors. Typical installs include anti-slip
            promotional graphics, directional systems and campaign-led floor
            graphics.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Floor graphics need correct film specification and clean preparation
            to perform in high-footfall environments. We plan installs around
            your opening times to reduce disruption.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Floor graphics use cases
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Directional paths and wayfinding systems</li>
              <li>Seasonal promotions and campaign support</li>
              <li>Queue management and in-store messaging</li>
              <li>Event and pop-up environment branding</li>
              <li>Multi-site brand-consistent floor graphics rollouts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Campaign graphics vs permanent graphics
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Campaign floor graphics are designed for promotional windows, seasonal messaging and short-term
              activations. They still need strong adhesion and a clean finish, but are specified to remove
              cleanly at campaign end.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Permanent or long-life floor graphics are used for wayfinding systems, branded pathways and
              repeated customer flow guidance. For these installs we match media, adhesive and protection system
              to traffic load and cleaning regime.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Choosing the right category at the start avoids common failures like early edge wear, difficult
              removal or safety concerns in high-footfall zones.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Anti-slip rating and safety-first installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Floor graphics in retail and public interiors must be safe as well as visually effective. We specify
              anti-slip commercial media suitable for the operating environment and install to clean edge standards
              to reduce trip risk.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We also plan placement around door swing, queue points and high-turn zones so graphics remain legible
              and durable under daily use. For complex spaces, we phase installation so access routes remain open.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Surface prep for different floor types
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The same media does not perform equally on every substrate. We assess tile, sealed concrete, vinyl
              and other hard commercial surfaces before install. Preparation includes contamination removal and
              dryness checks so adhesion starts correctly.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Where a floor is unsuitable, we flag that before installation rather than forcing a short-lived
              result. This protects campaign performance and reduces rework cost.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Typical sectors include retail, hospitality, events and brand pop-ups where directional flow and
              in-store messaging need to be visible, durable and safe.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-6 space-y-5">
              {faqItems.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-muted">
            For full-service delivery including window and wall graphics, see{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              commercial installation
            </Link>
            .
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Commercial Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
