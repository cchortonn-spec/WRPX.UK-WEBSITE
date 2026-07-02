import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Wakefield | 5-Year Guarantee | Free Survey | WRPX",
  description:
    "WRPX wraps kitchens across Wakefield — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-wakefield/" },
};

export default function KitchenWrappingWakefieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Wakefield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Wakefield kitchen wraps take 1-3 days. A standard 10-12 door kitchen including worktops is usually two full days. We confirm the schedule when we provide the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "How much does kitchen wrapping cost in Wakefield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Wakefield kitchen wraps fall between £850 and £1,500 depending on door count, finish and whether worktops are included. We provide a fixed price after a free survey — no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "Will the vinyl wrap peel or lift in Wakefield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not with proper preparation. We degrease, abrade and prime all surfaces before any film is applied. Our 5-year guarantee covers adhesion failure and material defects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover the whole of Wakefield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — WF1 to WF10 and surrounding areas including Horbury, Ossett, Castleford, Pontefract, Normanton, Featherstone, Knottingley, Ackworth and surrounding villages.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap a kitchen that has been painted in Wakefield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, yes. Painted surfaces need careful assessment — the condition, adhesion and paint type all affect whether vinyl will hold. We assess at the free survey and give a straight answer.",
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
    areaServed: ["Wakefield", "WF1-WF10"],
    geo: { "@type": "GeoCoordinates", latitude: 53.6833, longitude: -1.4977 },
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
            Kitchen Wrapping Wakefield — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Wakefield sits at the heart of West Yorkshire, and we cover the whole WF postcode
            for kitchen wrapping — from the city centre out to Horbury, Ossett, Castleford,
            Pontefract and beyond. Wakefield has a broad mix of housing stock: Victorian and
            Edwardian terraces near the city, 1960s–80s estates across the district, and
            newer builds in the outer areas. Each kitchen is assessed on its own merits.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your carcasses are structurally sound but the finish looks outdated, vinyl
            wrapping is typically the most cost-effective way to transform your kitchen.
            70–80% less than a replacement, 1–3 days to complete, your kitchen stays
            accessible throughout. We give a fixed price after a free survey — no obligation.
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
            Wakefield kitchens — what we find
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Wakefield&apos;s housing mix means we see a wide variety of kitchen types.
            Ex-council estates in Lupset and Flanshaw often have solid cabinet structures
            with flat slab or simple shaker doors — ideal candidates for wrapping. The
            Victorian stock in Agbrigg and Eastmoor sometimes has older fitted kitchens
            where the carcasses are still in excellent condition despite the dated finish.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Newer private estates in Horbury Bridge, Crofton and Walton tend to have
            modern kitchen layouts where customers want a finish update without changing
            what works. Anthracite grey wrap on light oak carcasses, or a stone-effect
            worktop to replace laminate — these are common requests across the Wakefield area.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Surface prep is consistent regardless of property type. We clean, degrease and
            abrade before any film goes down. We use 3M, CoverStyl, Avery Dennison and
            Hexis films, specified to the door material and your chosen finish.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Wakefield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes and fitted storage</li>
            <li>Bathroom vanity units and cabinets</li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            If anything isn&apos;t suitable — warped doors, lifting veneer, poor surface
            adhesion — we identify it at the survey. No surprises mid-job.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Wakefield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect, stone
            effect and solid colours. We bring physical film samples to every survey so you
            can see the finish in your own kitchen light. Popular current choices in Wakefield:
            soft-touch grey matt, warm light oak effect and Calacatta marble worktop vinyl.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Wakefield project works
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess surfaces, measure and give you an honest suitability report. No obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing. The price doesn&apos;t change unless the scope changes.</li>
            <li><strong>Installation</strong> — 1–3 days. Doors removed and wrapped; frames, plinths and carcass faces done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, everything checked with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Wakefield kitchen wrapping typically costs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Wakefield kitchen wraps fall between <strong>£850 and £1,500</strong> depending
            on door count, finish and whether worktops are included. Worktop-only wraps start from
            around £250. We give a fixed price after the free survey — not a ballpark that shifts
            once we&apos;re on site. See our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            for a full breakdown.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            From a Wakefield customer
          </h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              We were quoted a fortune for a new kitchen. WRPX wrapped our doors and
              worktops instead — half the cost and it looks like new. Connor was
              professional and left everything spotless. Very happy.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">
              — Rachel B., Wakefield (Horbury)
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen wrapping in Wakefield
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Wakefield?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Wakefield kitchens take 1–3 days. A standard 10–12 door kitchen including
                worktops is usually two full days. We confirm the installation schedule when we
                provide the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How much does kitchen wrapping cost in Wakefield?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Wakefield kitchen wraps fall between £850 and £1,500. Worktop-only wraps
                start from around £250. All prices are fixed after the free survey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the vinyl wrap peel or lift?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper preparation. We degrease, abrade and prime all surfaces before
                any film is applied. Our 5-year guarantee covers adhesion failure and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover the whole of Wakefield?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — WF1 to WF10 and surrounding areas including Horbury, Ossett, Castleford,
                Pontefract, Normanton, Featherstone, Knottingley, Ackworth and surrounding villages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I see finished examples before I commit?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. We bring physical film samples to every survey. You can also browse our{" "}
                <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>{" "}
                for completed kitchen wrap projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Wakefield postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            WF1, WF2, WF3, WF4, WF5, WF6, WF7, WF8, WF9, WF10 and surrounding areas.
            Not sure if we cover you?{" "}
            <Link href="/contact/" className="text-accent hover:underline">
              Send us your postcode
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Wakefield kitchen?
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
