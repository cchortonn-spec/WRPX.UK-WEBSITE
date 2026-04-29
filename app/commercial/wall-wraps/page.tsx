import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wall Wrap Installer & Retail Graphics South Yorkshire | WRPX",
  description:
    "Wall wrap and large-format retail graphics installation across South Yorkshire. Branded murals, feature walls and campaign graphics — professional signage fitters.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/wall-wraps/" },
};

export default function CommercialWallWrapsPage() {
  const faqItems = [
    {
      q: "What kinds of wall wraps do you install?",
      a: "We install branded feature walls, campaign murals, reception graphics, directional wall messaging and full-height large-format vinyl wraps for retail, office and hospitality environments.",
    },
    {
      q: "Can you install wall wraps on all surfaces?",
      a: "Most commercial substrates are suitable, but we inspect paint condition, porosity and texture first. We only install where adhesion and finish quality can be achieved reliably.",
    },
    {
      q: "How do you control seams on large-format graphics?",
      a: "We plan panel layout around sight lines, use measured overlap strategy where required, and install in sequence to keep seam visibility low in customer-facing areas.",
    },
    {
      q: "Which materials do you use for wall wraps?",
      a: "We specify commercial films from 3M, Avery Dennison, Cover Styl and Hexis depending on wall type, lifespan target and finish requirement.",
    },
    {
      q: "Do you support multi-site wall graphics rollout?",
      a: "Yes. We support staged rollouts for agencies and brands with consistent install standards and clear sign-off reporting across each location.",
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
            Wall Wraps &amp; Large-Format Retail Graphics
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            WRPX installs wall wraps and vinyl graphics for branded interiors, feature
            walls and campaign-led retail environments. We work with direct businesses,
            agencies and print suppliers across South Yorkshire and the North.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Surface prep and material choice are critical on wall graphics. We
            assess substrate condition first, then install with seam control and
            finish quality suited to customer-facing spaces.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Common wall wrap applications
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Retail feature walls and campaign displays</li>
              <li>Office branding and reception area wraps</li>
              <li>Hospitality murals and venue refreshes</li>
              <li>Wayfinding and directional interior graphics</li>
              <li>Short-term and long-term promotional installations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Retail vs office vs hospitality applications
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Retail wall wraps are typically campaign-led and must read clearly at distance while handling
              high footfall and repeat cleaning. We install feature walls, promo zones and directional panels
              that support launch windows and in-store messaging.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Office wall graphics focus on brand consistency, reception finish quality and practical wayfinding.
              These projects often include meeting-room corridors, statement brand walls and zoning graphics
              across multiple departments.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Hospitality wraps combine visual impact with durability requirements in busy public spaces. We plan
              around opening times and access constraints so install quality stays high without unnecessary service
              interruption.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Seam control and substrate preparation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Large-format wall graphics live or die on planning. We pre-check wall condition, previous paint
              quality, texture level and temperature before install. Seam positions are planned around key viewing
              angles and architectural features to reduce visual disruption.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If a wall is powdery, unstable or damaged, we flag it before install rather than forcing a poor
              result. This protects both finish quality and campaign lifespan. Where suitable, we complete the
              prep sequence and install to a clean, consistent finish standard.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This is especially important for premium interiors where a wrap must look intentional, not like a
              temporary poster panel.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Materials and rollout capability
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We specify 3M, Avery Dennison, Cover Styl and Hexis films according to wall type, required durability
              and visual finish. Not every film performs the same on every substrate, so we match spec to brief.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For multi-site programmes, we coordinate installation in phases and keep method consistent from site
              to site. This helps brands maintain visual continuity across regions without one location looking
              noticeably different from another.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If you need installation-only under agency management, we can work white-label while following your
              schedule and sign-off process.
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
            Explore the parent service page for full capabilities:{" "}
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
