import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Nottingham | 5-Year Guarantee | Free Survey | WRPX",
  description:
    "WRPX wraps kitchens across Nottingham — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-nottingham/" },
};

export default function KitchenWrappingNottinghamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Nottingham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Nottingham kitchen wraps take 1–3 days. A standard 10–12 door kitchen including worktops is usually two full days. We confirm the schedule when we provide the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "How much does kitchen wrapping cost in Nottingham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Nottingham kitchen wraps fall between £850 and £1,500 depending on door count, finish and whether worktops are included. We provide a fixed price after a free survey — no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Nottingham for kitchen wrapping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover NG1 through to NG16 and the wider Nottinghamshire area including West Bridgford, Arnold, Carlton, Beeston, Hucknall, Kirkby-in-Ashfield and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "Will the wrap peel or lift in a Nottingham kitchen?",
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
    areaServed: ["Nottingham", "NG1-NG16"],
    geo: { "@type": "GeoCoordinates", latitude: 52.9548, longitude: -1.1581 },
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
            Kitchen Wrapping Nottingham — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX covers Nottingham and the wider Nottinghamshire area for kitchen
            wrapping. From the Victorian terraces of The Meadows and St Ann&apos;s to
            larger detached properties in West Bridgford and Wollaton, we wrap kitchens
            of all types — doors, worktops, carcass faces, plinths and splashbacks.
            Each kitchen is assessed individually at a free survey; we&apos;ll tell you
            straight whether wrapping makes sense for your property.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Vinyl wrapping is typically 70–80% less than a full kitchen replacement,
            completed in 1–3 days with no skip, no rip-out and minimal disruption.
            Your kitchen stays accessible throughout. We provide a fixed price after
            the free survey — the price doesn&apos;t change unless the scope changes.
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
            Nottingham kitchens — what we find
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Nottingham has a diverse housing mix. The city centre and inner suburbs have
            a significant number of Victorian terraces and Edwardian semis where kitchen
            carcasses are solid but the finish is dated — exactly the scenario where
            wrapping delivers the most value. The 1960s–80s estates in Bilborough, Bulwell
            and Bestwood often have flat-slab kitchen doors that wrap cleanly and
            efficiently.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Newer private developments in Arnold, Carlton, Beeston and Gedling tend to
            have kitchen layouts that work well but finishes that have aged. A contemporary
            anthracite grey or warm oak wrap transforms the look without touching a
            kitchen that&apos;s structurally sound.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We use 3M, CoverStyl, Avery Dennison and Hexis films throughout. Surface prep —
            cleaning, degreasing and abrasion — is done on every job before any film touches
            the surface. That&apos;s what separates a wrap that lasts from one that doesn&apos;t.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Nottingham
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
            Finishes available in Nottingham
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect, stone
            effect and solid colours. We bring physical samples to every Nottingham survey.
            Currently popular: soft-touch anthracite grey, pale stone effect, and white gloss
            for lighter kitchens.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Nottingham project works
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess surfaces, measure and report on suitability. No obligation.</li>
            <li><strong>Fixed quote</strong> — in writing, before work starts. Price doesn&apos;t change unless scope changes.</li>
            <li><strong>Installation</strong> — 1–3 days. Doors removed and wrapped; frames and carcasses done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, full check with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Nottingham kitchen wrapping typically costs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Nottingham kitchen wraps fall between <strong>£850 and £1,500</strong>.
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
            Frequently asked questions — kitchen wrapping in Nottingham
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Nottingham?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Nottingham kitchens take 1–3 days. We confirm the schedule when we provide the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Nottingham and surrounding areas?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — NG1 to NG16 and surrounding Nottinghamshire areas. West Bridgford, Arnold,
                Carlton, Beeston, Hucknall, Kirkby-in-Ashfield and more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the vinyl wrap peel or lift?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper preparation. Our 5-year guarantee covers adhesion failure and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I see finished examples before I commit?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. We bring physical film samples to every survey. Browse our{" "}
                <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>{" "}
                for completed projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Nottingham postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            NG1, NG2, NG3, NG4, NG5, NG6, NG7, NG8, NG9, NG10, NG11, NG12, NG14, NG15,
            NG16 and surrounding areas. Not sure if we cover you?{" "}
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
              Looking for commercial vinyl installation in Nottingham?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              We also cover window graphics, wall wraps and floor graphics for retail,
              agencies and brands in Nottingham.
            </p>
            <p className="mt-3">
              <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
                See our commercial installation in Nottingham
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Nottingham kitchen?
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
