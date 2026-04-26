import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
 

export const metadata: Metadata = {
  title: "Kitchen Wrapping Chesterfield | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Chesterfield — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-chesterfield/" },
};

export default function KitchenWrappingChesterfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does kitchen wrapping take in Chesterfield?", acceptedAnswer: { "@type": "Answer", text: "Most jobs are 1-3 days. We confirm the exact schedule when we provide the fixed quote." } },
      { "@type": "Question", name: "Do you cover Dronfield and the villages south of Chesterfield?", acceptedAnswer: { "@type": "Answer", text: "Yes - Dronfield, Unstone, Eckington and surrounding S18 and S21 areas are all within our operating range." } },
      { "@type": "Question", name: "Can you wrap shaker-style doors?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shaker profiles require careful film application at the detail edges, but this is standard for us. We assess the profile at the survey and confirm suitability." } },
      { "@type": "Question", name: "Is the 5-year guarantee the same in Chesterfield as elsewhere?", acceptedAnswer: { "@type": "Answer", text: "Yes. Same guarantee, same terms, named in writing on every job regardless of location." } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: ["Chesterfield", "S40-S45"],
    geo: { "@type": "GeoCoordinates", latitude: 53.235, longitude: -1.4216 },
  };

  const chesterfieldWorktopImages = [
    { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-01.png", alt: "White wood-effect worktop wrap in Chesterfield, full kitchen worktop run" },
    { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-02.png", alt: "Chesterfield worktop wrapping close-up, white wood-effect vinyl texture" },
    { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-03.png", alt: "White wood-effect kitchen worktop wrap Chesterfield, edge and surface detail" },
    { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-04.png", alt: "Worktop wrap Chesterfield, white wood-effect vinyl close-up finish" },
    { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-05.png", alt: "Completed Chesterfield kitchen worktop wrap in white wood-effect vinyl" },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Chesterfield — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield is at the southern edge of our operating area and we cover the whole
            S40-S45 postcode range - from Brimington and Staveley through to Dronfield, Clay Cross and Tupton.
            We&apos;re familiar with the housing across the area: ex-colliery village stock in the east,
            period terraces in the town centre, and newer estates in the outer suburbs.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If your kitchen carcasses are in good condition and you want a significant visual
            upgrade without the cost and disruption of a full replacement, vinyl wrapping is worth a quote.
            Free survey, fixed price, 5-year guarantee on every job.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">5-year guarantee on materials and workmanship. Named on every job.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Chesterfield kitchens — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield has a strong mix of late-Victorian and Edwardian housing, with kitchens that vary considerably
            depending on when they were last updated. We also cover former mining village housing with sound carcasses
            and dated finishes.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Dronfield and rural areas between Chesterfield and Sheffield tend to have larger kitchens and better original
            specification, but finishes that have dated significantly. A wrap on a well-maintained shaker or slab door
            kitchen here is often one of the most satisfying upgrades.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Chesterfield
          </h2>
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
          <h2 className="text-xl font-semibold text-foreground">Finishes available in Chesterfield</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete and stone effect.
            Physical samples to every survey.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Chesterfield project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — honest assessment and accurate measurements.</li>
            <li><strong>Fixed quote</strong> — in writing before work starts.</li>
            <li><strong>Installation</strong> — 1-3 days, kitchen stays functional throughout.</li>
            <li><strong>Walkround and sign-off</strong> — checked with you before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Chesterfield kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Chesterfield jobs fall between <strong>£850 and £1,400</strong>. Travel included in quote.
            Worktop-only wraps from around £250. See the{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">kitchen wrapping cost guide</Link>.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            See recent completed jobs in our{" "}
            <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">From a Chesterfield customer</h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              Had our doors and worktops wrapped last year. Connor was on time, left the place tidy,
              and the result has lasted really well. Honest advice and a fair price.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">— Rachel F., Chesterfield (Dronfield)</p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Chesterfield worktop wrap photos
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            White wood-effect worktop wrapping completed in Chesterfield. These are
            real on-site photos showing the texture and finish quality of the vinyl.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chesterfieldWorktopImages.map((image, index) => (
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

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — kitchen wrapping in Chesterfield</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Chesterfield?</h3>
              <p className="mt-2 text-muted leading-relaxed">Most jobs are 1-3 days. We confirm the schedule with the fixed quote.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Dronfield and villages south of Chesterfield?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes - Dronfield, Unstone, Eckington and surrounding S18/S21 areas are within range.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap shaker-style doors?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes. Shaker profiles need careful detail-edge application, which is standard for us.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is the 5-year guarantee the same in Chesterfield as elsewhere?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes. Same guarantee and terms, named in writing on every job.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Chesterfield postcode coverage</h2>
          <p className="mt-4 text-muted leading-relaxed">
            S40, S41, S42, S43, S44, S45 and surrounding areas including Brimington, Staveley,
            Clay Cross, Tupton, Dronfield and surrounding S18 and S21 postcodes.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Ready to transform your Chesterfield kitchen?</h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts. 5-year guarantee on every job.
          </p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Kitchen Quote
          </Link>
          <p className="text-muted">Or call <strong>07398 395417</strong></p>
        </div>
      </section>
    </div>
  );
}
