import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Barnsley | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Barnsley — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-barnsley/" },
};

export default function KitchenWrappingBarnsleyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Barnsley?",
        acceptedAnswer: { "@type": "Answer", text: "Most jobs are 1-3 days. We confirm the schedule when we give you the fixed quote." },
      },
      {
        "@type": "Question",
        name: "Can you wrap developer-spec kitchens from new builds?",
        acceptedAnswer: { "@type": "Answer", text: "Yes - flat-panel MDF doors common in Barnsley new builds are excellent substrates for vinyl. They wrap cleanly and hold well with correct prep." },
      },
      {
        "@type": "Question",
        name: "What's included in the 5-year guarantee?",
        acceptedAnswer: { "@type": "Answer", text: "Adhesion failure, colour change and material defects are all covered. We name the guarantee in writing on every job. What voids it: physical damage, improper cleaning or unauthorised modifications." },
      },
      {
        "@type": "Question",
        name: "Do you cover rural areas around Barnsley?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. We cover Penistone, Dodworth, Mapplewell, Royston, Darton, Wombwell, Hoyland, Cudworth, Goldthorpe and surrounding villages." },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: ["Barnsley", "S70-S75"],
    geo: { "@type": "GeoCoordinates", latitude: 53.5526, longitude: -1.4797 },
  };

  const barnsleyWorktopImages = [
    { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-01.png", alt: "Butcher block style kitchen worktop wrap in Barnsley, completed corner layout" },
    { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-02.png", alt: "Barnsley kitchen wrapping project with butcher block style worktop and sage units" },
    { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-03.png", alt: "Kitchen worktop wrap Barnsley, butcher block style around hob and splashback" },
    { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-04.png", alt: "Butcher block style worktop wrapping in Barnsley, sink run and cabinet finish" },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Barnsley — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Barnsley is a short run from our base and we&apos;re there regularly - covering Penistone and Dodworth in the west
            through to Wombwell, Hoyland and Cudworth in the east. The housing stock is varied: ex-mining villages with solid
            but dated interiors, newer estate builds from the 90s and 2000s, and some genuinely characterful older properties
            in the town itself and surrounding villages.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your kitchen structure is sound, vinyl wrapping is a straightforward upgrade. We&apos;ll assess it at a free survey,
            tell you honestly if it&apos;s suitable, and give you a fixed price before we do anything.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">5-year guarantee on materials and workmanship. Named on every job.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Barnsley kitchens — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Much of Barnsley&apos;s older housing has kitchens that were last updated in the late 90s or early 2000s - often solid
            oak-effect or cream laminate doors that are structurally fine but visually well behind the times. These respond
            very well to wrapping when the surfaces are properly prepared.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Newer builds in areas like Mapplewell, Royston and Darton tend to have standard developer kitchens - flat-panel MDF
            doors in white or cream that are ideal substrates for vinyl. A wrap on these is often a cleaner job than on older door types.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We bring the same preparation discipline regardless of property type: clean, degrease, abrade, prime where needed.
            That&apos;s non-negotiable whether the job is a £900 Barnsley terrace kitchen or a £1,500 large detached.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Barnsley</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths</li>
            <li>Worktops — marble, stone, wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes and fitted furniture</li>
            <li>Bathroom vanity units</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Finishes available in Barnsley</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete and stone effect. Physical samples come to every survey.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">How a Barnsley project runs</h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — honest assessment, accurate measurements, no obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing before work starts.</li>
            <li><strong>Installation</strong> — 1-3 days, kitchen stays usable throughout.</li>
            <li><strong>Walkround and sign-off</strong> — checked with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What Barnsley kitchens typically cost</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Barnsley jobs fall between <strong>£850 and £1,400</strong>. Worktop-only wraps from around £250. Fixed price
            after survey. See the{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">kitchen wrapping cost guide</Link>{" "}
            for a full breakdown.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            You can also browse recent jobs in our{" "}
            <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">From a Barnsley customer</h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              We were quoted a fortune for a new kitchen. WRPX wrapped our doors and worktops instead - half the cost and it looks like new.
              Connor was professional and left everything spotless. Very happy.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">— Mike P., Barnsley (Hoyland)</p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Barnsley butcher block worktop wrap photos
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Real photos from a Barnsley kitchen where we wrapped the worktops in a
            butcher block style wood-effect vinyl finish.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {barnsleyWorktopImages.map((image, index) => (
              <figure key={image.src} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — kitchen wrapping in Barnsley</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Barnsley?</h3>
              <p className="mt-2 text-muted leading-relaxed">Most jobs are 1-3 days. We confirm the schedule when we give you the fixed quote.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap developer-spec kitchens from new builds?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes - flat-panel MDF doors common in Barnsley new builds are excellent substrates for vinyl.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">What&apos;s included in the 5-year guarantee?</h3>
              <p className="mt-2 text-muted leading-relaxed">Adhesion failure, colour change and material defects are all covered, named in writing on every job.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover rural areas around Barnsley?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes. We cover Penistone, Dodworth, Mapplewell, Royston, Darton, Wombwell, Hoyland, Cudworth and surrounding villages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Barnsley postcode coverage</h2>
          <p className="mt-4 text-muted leading-relaxed">S70, S71, S72, S73, S74, S75 and surrounding areas.</p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Ready to transform your Barnsley kitchen?</h2>
          <p className="text-muted leading-relaxed">Free survey, no obligation. Fixed quote before work starts. 5-year guarantee on every job.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Kitchen Quote</Link>
          <p className="text-muted">Or call <strong>07398 395417</strong></p>
        </div>
      </section>
    </div>
  );
}
