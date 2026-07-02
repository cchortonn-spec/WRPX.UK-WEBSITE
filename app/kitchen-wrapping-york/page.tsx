import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping York | 5-Year Guarantee | Free Survey | WRPX",
  description:
    "WRPX wraps kitchens across York — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-york/" },
};

export default function KitchenWrappingYorkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in York?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most York kitchen wraps take 1–3 days. A standard 10–12 door kitchen including worktops is usually two full days. We confirm the schedule when we provide your fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "How much does kitchen wrapping cost in York?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most York kitchen wraps fall between £850 and £1,500 depending on door count, finish and whether worktops are included. We provide a fixed price after a free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Is kitchen wrapping suitable for period properties in York?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — York has a lot of Georgian and Victorian housing where the kitchen carcasses are sound but the finish is dated. Wrapping is ideal in these cases. We assess suitability at the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover the whole York area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — YO1 through to YO32 and surrounding areas including Bishopthorpe, Copmanthorpe, Skelton, Acomb, Tang Hall, Haxby, Huntington, Strensall and surrounding villages.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: ["York", "YO1-YO32"],
    geo: { "@type": "GeoCoordinates", latitude: 53.9590, longitude: -1.0815 },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping York — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            York is a city we cover regularly — from the Georgian townhouses in the centre
            to the large suburban estates in Haxby, Huntington and Strensall, right out to
            the villages in the YO30 and YO32 postcodes. The housing stock is varied, which
            means every kitchen survey is done on its own terms: we assess the surface, the
            door profile, the substrate, and give you an honest answer about whether
            wrapping is the right option.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For most York homeowners, vinyl wrapping is the most cost-effective way to
            transform a kitchen that works structurally but looks dated. 70–80% less than a
            replacement, 1–3 days on site, no rip-out. We give a fixed price after a free
            survey — no obligation.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              5-year guarantee on materials and workmanship. Named on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            York kitchens — what we find
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            York&apos;s historic housing stock presents some of the most interesting
            wrap projects we do. Georgian and Victorian properties in Gillygate, the
            Groves, Tang Hall and Fishergate often have fitted kitchens where the layout
            and carcasses are excellent but the finish has aged. These respond very well
            to wrapping — the structure is sound, the surfaces are stable, and the result
            looks completely transformed.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            The newer estates in Skelton, Clifton Moor and Rawcliffe tend to have
            kitchens from the 1990s and 2000s where the cream or pine finish has dated.
            Wrapping these in anthracite grey matt, stone effect or pale oak gives a
            contemporary result without changing a kitchen that functions well.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We use 3M, CoverStyl, Avery Dennison and Hexis films. Surface prep is the
            same on every job: thorough cleaning, degreasing, abrasion where required,
            and correct priming for the substrate. That&apos;s where a wrap succeeds or fails.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in York
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes and fitted storage</li>
            <li>Bathroom vanity units and cabinets</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in York
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect, stone
            effect and solid colours. We bring physical film samples to every York survey so
            you can see the finish in your own kitchen light. Popular current choices: soft
            grey matt, warm white gloss, and Calacatta marble worktop vinyl.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a York project works
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess surfaces, measure and give you an honest suitability report. No obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing. The price doesn&apos;t change unless the scope changes.</li>
            <li><strong>Installation</strong> — 1–3 days. Doors removed and wrapped; frames and carcass faces done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, everything checked with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What York kitchen wrapping typically costs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most York kitchen wraps fall between <strong>£850 and £1,500</strong>. Worktop-only
            wraps start from around £250. Fixed price after the free survey — not a rough guide
            that shifts. See our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            for a full breakdown.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen wrapping in York
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in York?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most York kitchens take 1–3 days. We confirm the schedule when we provide the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is kitchen wrapping suitable for period properties in York?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — York&apos;s Georgian and Victorian housing often has solid kitchen structures
                with dated finishes. Wrapping is ideal in these cases. We assess suitability at the
                free survey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover the whole York area?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — YO1 to YO32 and surrounding areas including Haxby, Huntington, Strensall,
                Skelton, Acomb, Bishopthorpe and surrounding villages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap kitchen worktops in York?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. Worktop wrapping is a popular standalone or combined service. We use
                heat-resistant vinyl in marble, stone and wood-effect finishes. Starts from around £250.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            York postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            YO1, YO10, YO19, YO23, YO24, YO26, YO30, YO31, YO32 and surrounding areas.
            Not sure if we cover you?{" "}
            <Link href="/contact/" className="text-accent hover:underline">
              Send us your postcode
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Looking for commercial vinyl installation in York?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              We also cover window graphics, wall wraps and floor graphics for retail,
              agencies and brands in York.
            </p>
            <p className="mt-3">
              <Link href="/commercial-installation-york/" className="text-accent hover:underline">
                See our commercial installation in York
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your York kitchen?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts. 5-year
            guarantee on every job.
          </p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Kitchen Quote
          </Link>
          <p className="text-muted">
            Or call <strong>07398 395417</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
