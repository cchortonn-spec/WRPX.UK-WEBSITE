import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Graphics Installer South Yorkshire | WRPX",
  description:
    "Window graphics and vinyl signage installation for retail, offices and hospitality across South Yorkshire. Frosted film, full colour and campaign graphics.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/window-graphics/" },
};

export default function CommercialWindowGraphicsPage() {
  const faqItems = [
    {
      q: "What types of window graphics do you install?",
      a: "We install frosted privacy vinyl, full-colour campaign graphics, one-way vision/perforated film, opening-hours panels, branding strips and temporary promotional window graphics.",
    },
    {
      q: "Do you install for single stores and multi-site rollouts?",
      a: "Yes. We install one-off retail and office jobs, and we also support multi-site campaigns for agencies, print houses and brands with consistent install standards.",
    },
    {
      q: "Which materials do you use for window graphics?",
      a: "We typically specify commercial-grade films from 3M and Avery Dennison based on glass type, expected lifespan, exposure and removal requirements.",
    },
    {
      q: "How do you prepare glass before applying graphics?",
      a: "We clean and degrease the glass, remove residue, check edges and seals, and only install once the surface is dry and contaminant-free. Proper prep is key to avoiding lift and silvering.",
    },
    {
      q: "Can you install outside trading hours?",
      a: "Yes. We regularly schedule installs early morning, evening or before open, so retail and hospitality teams can stay operational.",
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
            Window Graphics &amp; Vinyl Signage Installation
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            We install window graphics and retail vinyl signage for retail, offices and
            hospitality sites across South Yorkshire and surrounding regions.
            Services include frosted privacy film, full colour promotional
            graphics, one-way vision and seasonal campaign installs.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Every install follows a preparation-first process so the finish stays
            clean, aligned and durable in high visibility areas.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Typical commercial window graphics projects
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Storefront campaign graphics and temporary promotions</li>
              <li>Permanent branded windows for high street sites</li>
              <li>Frosted meeting room and office privacy panels</li>
              <li>Wayfinding and directional window messaging</li>
              <li>Multi-site graphic swaps for agencies and print partners</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              What we install
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install a full range of commercial window graphics for brands, agencies and direct
              businesses across South Yorkshire. Typical installs include frosted privacy film for office
              glazing, full-colour campaign graphics for retail windows, perforated one-way vision for
              street-facing frontage and seasonal promotional vinyl swaps for launch periods.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We also handle practical vinyl elements that improve customer journey and compliance:
              opening-hours panels, safety manifestation bands, directional messaging and branded entrance
              graphics. For each project we align artwork intent, viewing distance, internal lighting and
              installation method so the final finish reads cleanly from pavement level and at close range.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If your campaign includes multiple zones, we can phase installation so critical storefront
              graphics go live first, followed by interior glazing and secondary messaging. That approach
              protects launch timing without forcing unnecessary overnight disruption.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Who this service is for
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Retail: campaign windows, promo bursts, seasonal swaps, opening offers and full brand refreshes.
              Office: privacy film, meeting-room frosting, logo strips and wayfinding across glazed partitions.
              Hospitality: bars, restaurants and leisure spaces using window vinyl for privacy, mood zoning and
              event campaigns.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We work directly with site owners, and we also support white-label delivery for agencies and print
              companies. If you already have artwork and print supply in place, we can provide installation-only.
              If you need help with technical fit decisions, we can advise before production so material choice
              and install method are right first time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Materials and preparation standards
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We specify commercial films from 3M and Avery Dennison based on lifespan, finish requirement and
              removal plan. Campaign graphics often need clean removal windows; branded permanent graphics need
              long-term edge stability and colour hold. Material is chosen to suit the brief, not guesswork.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Glass preparation is non-negotiable. We remove grease and contamination, check for legacy adhesive
              residue and verify surface condition before any panel goes down. This reduces micro-bubbling and
              premature edge lift and gives a cleaner visual finish, especially around mullions and door edges.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              On high-traffic storefronts we plan install sequencing to keep entrances usable while maintaining
              alignment quality. The goal is simple: a finish that looks right on launch day and still looks right
              through the campaign lifecycle.
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
            Need a full commercial package?{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              Return to commercial installation
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
