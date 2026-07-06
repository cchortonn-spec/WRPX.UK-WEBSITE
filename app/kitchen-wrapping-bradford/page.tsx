import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Bradford | 5-Year Guarantee | Free Survey | WRPX",
  description:
    "WRPX wraps kitchens across Bradford — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-bradford/" },
};

export default function KitchenWrappingBradfordPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Bradford?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Bradford kitchen wraps take 1–3 days. A standard 10–12 door kitchen including worktops is usually two full days. We confirm the schedule when we provide the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "How much does kitchen wrapping cost in Bradford?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Bradford kitchen wraps fall between £850 and £1,500 depending on door count, finish and whether worktops are included. We provide a fixed price after a free survey — no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover the whole Bradford area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — BD1 to BD20 and surrounding areas including Shipley, Bingley, Keighley, Ilkley, Baildon, Saltaire, Manningham, Allerton and surrounding villages.",
        },
      },
      {
        "@type": "Question",
        name: "Will the vinyl wrap peel or lift in Bradford?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not with proper preparation. We clean, degrease and abrade all surfaces before any film is applied. Our 5-year guarantee covers adhesion failure and material defects.",
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
    areaServed: ["Bradford", "BD1-BD20"],
    geo: { "@type": "GeoCoordinates", latitude: 53.7960, longitude: -1.7594 },
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
            Kitchen Wrapping Bradford — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Bradford is one of West Yorkshire&apos;s largest cities, and we cover the full BD
            postcode area for kitchen wrapping — from the city centre and Manningham to the
            Wharfedale villages, Shipley, Saltaire, Keighley and Bingley. Bradford&apos;s housing
            stock is diverse: Victorian and Edwardian terraces in the inner suburbs, 1960s–80s
            estates across the district, and newer developments on the outer edges. Each kitchen
            gets a proper assessment before we quote.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your kitchen carcasses are structurally sound but the finish looks dated, vinyl
            wrapping gives you a completely transformed kitchen at 70–80% less than a replacement.
            1–3 days on site, no rip-out, kitchen stays usable throughout. Fixed price after a
            free survey — no obligation.
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
            Bradford kitchens — what we find
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Bradford has a high proportion of Victorian and Edwardian terraced housing, especially
            in the inner suburbs. These properties often have fitted kitchens where the cabinet
            structure is excellent — solid wood or melamine carcasses that could last another
            20 years — but the door finish and worktops have dated significantly. These are ideal
            candidates for wrapping.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Across the Wharfedale end of the Bradford district — Ilkley, Burley in Wharfedale,
            Ben Rhydding — properties tend to be larger, and kitchen projects often involve
            more door counts and occasional island wrapping. Popular finish choices in these
            areas: heritage shades, stone effect and natural wood grain.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We use 3M, CoverStyl, Avery Dennison and Hexis films. Surface preparation — thorough
            cleaning, degreasing, abrasion where required — is done consistently on every job.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Bradford
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes, fitted storage and office furniture</li>
            <li>Bathroom vanity units and cabinets</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Bradford
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect, stone
            effect and solid colours. We bring physical samples to every Bradford survey.
            Popular current choices: soft grey matt, pale oak woodgrain, and Calacatta marble
            worktop vinyl.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Bradford project works
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess surfaces, measure and give an honest suitability report. No obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing before work starts. Price doesn&apos;t change.</li>
            <li><strong>Installation</strong> — 1–3 days. Doors off, wrapped, rehung. Frames done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, everything checked with you.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Bradford kitchen wrapping typically costs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Bradford kitchen wraps fall between <strong>£850 and £1,500</strong>.
            Worktop-only wraps start from around £250. See our{" "}
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
            Frequently asked questions — kitchen wrapping in Bradford
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Bradford?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Bradford kitchens take 1–3 days. We confirm the schedule when we provide the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover the whole Bradford area?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — BD1 to BD20 and surrounding areas including Shipley, Bingley, Keighley,
                Ilkley, Baildon, Saltaire, Manningham and surrounding villages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the vinyl wrap peel or lift?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper preparation. Our 5-year guarantee covers adhesion failure and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you also wrap kitchen worktops in Bradford?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — worktop wrapping is available in Bradford as a standalone service or combined
                with a full kitchen wrap. Heat-resistant vinyl in marble, stone and wood-effect finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Bradford postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            BD1, BD2, BD3, BD4, BD5, BD6, BD7, BD8, BD9, BD10, BD12, BD13, BD14,
            BD15, BD16, BD17, BD18, BD19, BD20 and surrounding areas. Not sure if we cover you?{" "}
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
            Ready to transform your Bradford kitchen?
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
