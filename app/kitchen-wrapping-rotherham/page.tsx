import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Rotherham | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Rotherham — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-rotherham/" },
};

export default function KitchenWrappingRotherhamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you wrap foil-wrapped doors that are already peeling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, but carefully. Peeling foil wrap needs to be fully removed and the substrate properly prepared before new vinyl goes down. We assess at the survey - if the underlying door material isn't suitable, we'll tell you.",
        },
      },
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Rotherham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most jobs take 1-3 days. We confirm the schedule when we provide the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all of Rotherham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - S60 through S66 and surrounding postcodes including Wickersley, Maltby, Bramley, Rawmarsh, Swinton and Wath-upon-Dearne.",
        },
      },
      {
        "@type": "Question",
        name: "Is a 5-year guarantee standard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every WRPX job comes with a 5-year guarantee on materials and workmanship, named in writing. It covers adhesion failure, colour change and material defects.",
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
    areaServed: ["Rotherham", "S60-S66"],
    geo: { "@type": "GeoCoordinates", latitude: 53.4326, longitude: -1.3635 },
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
            Kitchen Wrapping Rotherham — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Rotherham sits right in the middle of our operating area - we&apos;re out
            there regularly, and the variety of housing reflects it. From period
            terraces in Rawmarsh and Wath-upon-Dearne to newer builds in Wickersley
            and Bramley, we see a wide range of kitchen types and cabinet conditions.
            Each one gets the same treatment: a proper free survey, an honest
            assessment, and a fixed price before we start.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your kitchen looks tired but the structure is solid, vinyl wrapping is
            almost certainly worth a quote. The visual change is immediate and
            significant - and at typically 70-80% less than a new kitchen, most
            Rotherham homeowners are surprised by how far the budget stretches.
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
            Rotherham kitchens — what we see
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A significant proportion of Rotherham&apos;s housing stock is post-war and
            early-private-build, with kitchens that have been updated once or twice
            over the years. We regularly find perfectly sound carcasses underneath
            tired laminate finishes or peeling foil wrap - both of which respond very
            well to a proper vinyl installation when the surfaces are correctly prepared.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Wickersley, Maltby and Bramley have more modern housing where kitchens
            are often mid-range quality with standard slab or shaker doors. These are
            some of our cleanest wrapping jobs. Older properties in Rawmarsh, Swinton
            and Wath often have more variation - different door materials, older
            carcass types - and that&apos;s where our prep experience matters.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We specify the right film for the substrate. 3M, CoverStyl, Avery Dennison
            and Hexis have different performance profiles for different surfaces and
            environments. We don&apos;t use a single film for everything.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Rotherham
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled surfaces</li>
            <li>Bedroom wardrobes and fitted storage</li>
            <li>Bathroom vanity units</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Rotherham
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut, light oak), marble, concrete and
            stone effect. Samples come to your survey so you can choose in your own light.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Rotherham project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we assess, measure and give you an honest suitability report.</li>
            <li><strong>Fixed quote</strong> — in writing, before work starts.</li>
            <li><strong>Installation</strong> — 1-3 days. Kitchen stays functional throughout.</li>
            <li><strong>Walkround and sign-off</strong> — full check with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Rotherham kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Rotherham kitchen wraps fall between <strong>£850 and £1,400</strong>.
            Worktop-only wraps start from around £250. Fixed price after free survey -
            see the{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            From a Rotherham customer
          </h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              Really pleased with the result. Connor explained everything
              clearly and the kitchen still looks great a year on. No peeling,
              no fading. Definitely worth getting a quote.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">
              — Lisa K., Rotherham (Wickersley)
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen wrapping in Rotherham
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap foil-wrapped doors that are already peeling?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Sometimes, but carefully. Peeling foil wrap needs to be fully removed
                and the substrate properly prepared before new vinyl goes down. We&apos;ll
                assess at the survey - if the underlying door material isn&apos;t suitable,
                we&apos;ll tell you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Rotherham?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most jobs take 1-3 days. We confirm the schedule when we provide
                the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover all of Rotherham?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes - S60, S61, S62, S63, S64, S65, S66 and surrounding postcodes.
                We regularly cover Wickersley, Maltby, Bramley, Rawmarsh, Swinton,
                Wath-upon-Dearne, Kimberworth and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is a 5-year guarantee standard?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. Every WRPX job comes with a 5-year guarantee on materials and
                workmanship, named in writing on every job. It covers adhesion failure,
                colour change and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I see examples before I commit?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. You can browse our{" "}
                <Link href="/gallery/" className="text-accent hover:underline">
                  gallery
                </Link>{" "}
                for recent completed jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Rotherham postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            S60, S61, S62, S63, S64, S65, S66 and surrounding areas.{" "}
            <Link href="/contact/" className="text-accent hover:underline">
              Send your postcode
            </Link>{" "}
            if you&apos;re unsure.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Rotherham kitchen?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts. 5-year
            guarantee on every job.
          </p>
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Rotherham Survey →
          </Link>
          <p className="text-muted">
            Or call <strong>07398 395417</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
