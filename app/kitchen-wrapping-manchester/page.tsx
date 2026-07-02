import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Manchester | 5-Year Guarantee | Free Survey | WRPX",
  description:
    "WRPX wraps kitchens across Manchester — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-manchester/" },
};

export default function KitchenWrappingManchesterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Manchester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Manchester kitchen wraps take 1–3 days. A standard 10–12 door kitchen including worktops is usually two full days. We confirm the schedule when we provide the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "How much does kitchen wrapping cost in Manchester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Manchester kitchen wraps fall between £850 and £1,600 depending on door count, finish and whether worktops are included. We provide a fixed price after a free survey — no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Manchester and surrounding areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover central Manchester and the wider Greater Manchester area including Salford, Trafford, Stockport, Didsbury, Chorlton, Withington and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "Is vinyl wrapping worth it for a Manchester kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if the carcasses are in good condition. Vinyl wrapping is typically 70–80% less than a replacement kitchen. We assess suitability honestly at the free survey — if wrapping isn't right, we'll tell you.",
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
    areaServed: ["Manchester", "Greater Manchester"],
    geo: { "@type": "GeoCoordinates", latitude: 53.4808, longitude: -2.2426 },
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
            Kitchen Wrapping Manchester — Specialist Installer, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX covers Manchester and the wider Greater Manchester area for kitchen wrapping.
            Manchester has one of the most varied housing stocks of any UK city — Victorian
            terraces in Levenshulme and Rusholme, converted mill buildings in Ancoats and the
            Northern Quarter, large Edwardian semis in Didsbury and Chorlton, and modern
            developments across Salford, Trafford and Stockport. Every kitchen is assessed
            individually at a free survey.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Vinyl wrapping delivers a complete kitchen transformation at 70–80% less than a
            replacement — in 1–3 days with no rip-out and no skip on the drive. We give a
            fixed price after the free survey; the price doesn&apos;t change unless the scope does.
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
            Manchester kitchens — what we find
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Manchester&apos;s inner-city housing often has original Victorian kitchen layouts
            where the structural cabinets are solid but the finish has aged considerably.
            Flat-slab and Shaker-style doors in melamine or painted MDF are common — both
            respond well to vinyl wrapping with the right surface preparation.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            In Chorlton, West Didsbury and Withington, we see larger Edwardian properties
            where kitchens have been extended or refitted in the 1990s and early 2000s.
            The layouts and carcasses are good; the finishes have dated. Wrapping these in
            stone grey, warm white or a contemporary woodgrain can transform the whole
            kitchen in a working day or two.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Salford, Trafford and Stockport bring a mix of 1960s–80s housing and newer
            private developments — all covered. Surface prep is the same regardless of
            property type: cleaning, degreasing, abrasion where required.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Manchester
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes, fitted storage and home office furniture</li>
            <li>Bathroom vanity units and cabinets</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Manchester
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect, stone
            effect and solid colours. We bring physical samples to every Manchester survey.
            Popular choices: anthracite grey soft-touch, warm oak effect, and Calacatta marble
            worktop vinyl for a contemporary Manchester kitchen look.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Manchester project works
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess surfaces, measure and give an honest suitability report. No obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing before work starts. Price doesn&apos;t change.</li>
            <li><strong>Installation</strong> — 1–3 days. Doors removed and wrapped; frames and carcasses done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, everything checked with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Manchester kitchen wrapping typically costs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Manchester kitchen wraps fall between <strong>£850 and £1,600</strong> depending
            on door count, finish and whether worktops are included. Worktop-only wraps start from
            around £250. See our{" "}
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
            Frequently asked questions — kitchen wrapping in Manchester
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Manchester?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Manchester kitchens take 1–3 days. We confirm the installation schedule when we provide the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Greater Manchester?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — central Manchester and the wider Greater Manchester area including Salford,
                Trafford, Stockport, Didsbury, Chorlton, Withington, Rusholme and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is vinyl wrapping worth it for a Manchester kitchen?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes, if the carcasses are in good condition. We assess honestly at the free survey — if
                wrapping isn&apos;t right for your kitchen, we&apos;ll say so before you spend a penny.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the vinyl wrap peel or lift?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper preparation. Our 5-year guarantee covers adhesion failure and material defects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Looking for commercial vinyl installation in Manchester?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              We also cover window graphics, wall wraps and floor graphics for retail,
              agencies and brands across Greater Manchester.
            </p>
            <p className="mt-3">
              <Link href="/commercial-installation-manchester/" className="text-accent hover:underline">
                See our commercial installation in Manchester
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Manchester kitchen?
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
