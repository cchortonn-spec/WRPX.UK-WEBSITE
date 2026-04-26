import type { Metadata } from "next";
import Link from "next/link";
 

export const metadata: Metadata = {
  title: "Kitchen Wrapping Huddersfield | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Huddersfield — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-huddersfield/" },
};

export default function KitchenWrappingHuddersfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does kitchen wrapping take in Huddersfield?", acceptedAnswer: { "@type": "Answer", text: "Most jobs are 1-3 days depending on kitchen size. We confirm the schedule when we give you the fixed quote." } },
      { "@type": "Question", name: "Can you wrap a stone-built period property kitchen in Huddersfield?", acceptedAnswer: { "@type": "Answer", text: "Yes - the property type doesn't affect the wrap process. What matters is the condition of the doors and carcasses, which we assess at the free survey." } },
      { "@type": "Question", name: "Is there a travel charge for Huddersfield?", acceptedAnswer: { "@type": "Answer", text: "No. Travel is included in the fixed quote." } },
      { "@type": "Question", name: "Do you cover Holmfirth and the Holme Valley?", acceptedAnswer: { "@type": "Answer", text: "Yes - we cover Holmfirth, Meltham, Honley, Skelmanthorpe and surrounding HD9 and HD7 areas." } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: ["Huddersfield", "HD1-HD9"],
    geo: { "@type": "GeoCoordinates", latitude: 53.6458, longitude: -1.785 },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Huddersfield — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Huddersfield and the surrounding HD postcodes regularly - Lindley, Marsh, Birkby,
            Almondbury, Honley, Holmfirth and across the district. Huddersfield has a strong proportion
            of older stone-built and Victorian-era properties, many with kitchens that have been through
            multiple generations of updating.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            The assessment is always the same: free survey, honest suitability report, fixed quote before we start.
            If wrapping is right, we&apos;ll tell you why. If it isn&apos;t, we&apos;ll tell you that too.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">5-year guarantee on materials and workmanship. Named on every job.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Huddersfield kitchens — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Stone-built terraces in Lindley and Marsh often have compact kitchens with older door profiles
            that wrap well when surface condition is right. Victorian semis in Almondbury and Moldgreen
            tend to have larger kitchens with varied cabinet histories.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Outer areas like Holmfirth, Meltham and Skelmanthorpe have more detached and semi-detached
            housing from the 1970s onwards, often with well-maintained carcasses and doors that are simply dated.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Huddersfield</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes and fitted furniture</li>
            <li>Bathroom vanity units</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Finishes available in Huddersfield</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete and stone effect.
            Physical samples at every survey.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Huddersfield project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — assess and suitability report.</li>
            <li><strong>Fixed quote</strong> — in writing before any work starts.</li>
            <li><strong>Installation</strong> — 1-3 days, kitchen stays functional.</li>
            <li><strong>Walkround and sign-off</strong> — full check with you.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Huddersfield kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Huddersfield jobs fall between <strong>£900 and £1,500</strong>. Travel to HD postcodes is included.
            Worktop-only wraps from around £250. See the{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">kitchen wrapping cost guide</Link>.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">From a Huddersfield customer</h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              From quote to finish was straightforward. The kitchen looks like a different room - we went
              for a matt grey finish and it&apos;s exactly what we wanted. Would use again.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">— David H., Huddersfield (Lindley)</p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — kitchen wrapping in Huddersfield</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Huddersfield?</h3>
              <p className="mt-2 text-muted leading-relaxed">Most jobs are 1-3 days depending on kitchen size.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap a stone-built period property kitchen in Huddersfield?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes - property type doesn&apos;t affect the wrap process.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is there a travel charge for Huddersfield?</h3>
              <p className="mt-2 text-muted leading-relaxed">No. Travel is included in the fixed quote.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Holmfirth and the Holme Valley?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes - we cover Holmfirth, Meltham, Honley and surrounding HD9/HD7 areas.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I see examples before I commit?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes - view recent completed jobs in our{" "}
                <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Huddersfield postcode coverage</h2>
          <p className="mt-4 text-muted leading-relaxed">
            HD1, HD2, HD3, HD4, HD5, HD7, HD8, HD9 and surrounding areas including Lindley, Marsh,
            Birkby, Almondbury, Honley, Holmfirth, Meltham and Skelmanthorpe.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Ready to transform your Huddersfield kitchen?</h2>
          <p className="text-muted leading-relaxed">Free survey, no obligation. Fixed quote before work starts. 5-year guarantee on every job.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Kitchen Quote
          </Link>
          <p className="text-muted">Or call <strong>07398 395417</strong></p>
        </div>
      </section>
    </div>
  );
}
