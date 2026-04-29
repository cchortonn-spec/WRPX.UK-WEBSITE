import type { Metadata } from "next";
import Link from "next/link";
 

export const metadata: Metadata = {
  title: "Kitchen Wrapping Leeds | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Leeds — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-leeds/" },
};

export default function KitchenWrappingLeedsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do you charge extra to travel to Leeds?", acceptedAnswer: { "@type": "Answer", text: "No. Travel is included in the quote. You get the same fixed-price process as any South Yorkshire job." } },
      { "@type": "Question", name: "Can you wrap mixed-cabinet kitchens where doors aren't all the same type?", acceptedAnswer: { "@type": "Answer", text: "Yes, though it requires careful assessment. Mixed cabinet types sometimes have different substrates that need different prep approaches. We identify this at the survey and spec accordingly." } },
      { "@type": "Question", name: "Is vinyl wrapping suitable for a rental property in Leeds?", acceptedAnswer: { "@type": "Answer", text: "Yes - we can recommend films that are robust, easy to clean, and appropriate for tenant use. A worktop-only wrap is also a very cost-effective upgrade for rental kitchens." } },
      { "@type": "Question", name: "Do you cover the whole of Leeds?", acceptedAnswer: { "@type": "Answer", text: "We cover most LS postcodes including the city, inner suburbs, and outer Leeds as far as Wetherby, Garforth, Morley and Pudsey." } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: ["Leeds", "LS1-LS28"],
    geo: { "@type": "GeoCoordinates", latitude: 53.8008, longitude: -1.5491 },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Leeds — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Leeds and the surrounding areas from our South Yorkshire base - typically 30-45 minutes from most LS postcodes.
            Leeds has a wide mix of property types, and we&apos;re familiar with most of them: back-to-back terraces in Armley and Beeston,
            large Edwardian semis in Chapel Allerton and Roundhay, post-war estates in Seacroft and Halton, and modern city-fringe apartments.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Each kitchen gets an individual assessment. If the structure is sound, vinyl wrapping gives you a significant visual
            upgrade at typically 70-80% less than a full replacement. We&apos;ll tell you at the survey whether wrapping is right.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">5-year guarantee on materials and workmanship. Named on every job.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Leeds kitchens — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds has a higher proportion of older housing than many comparable cities, which means we see a lot of traditional
            timber and foil-wrapped cabinet doors in varying conditions. Victorian and Edwardian properties often have kitchens
            that have been through multiple updates, sometimes with mixed cabinet types.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Newer housing in outer Leeds tends to have developer-spec kitchens from the 1990s and 2000s that are structurally
            solid but dated in finish. These are typically straightforward wrap jobs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Leeds
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom wardrobes and fitted storage</li>
            <li>Bathroom vanity units and home office units</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Leeds
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete and stone effect. Physical samples at every survey.
          </p>
          <p className="mt-4 text-muted">
            Popular choices in Leeds currently: linen grey soft-touch matt, natural oak effect, and Calacatta marble worktop film.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Leeds project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — assess and honest suitability report.</li>
            <li><strong>Fixed quote</strong> — in writing before any work starts.</li>
            <li><strong>Installation</strong> — 1-3 days, no rip-out, kitchen functional.</li>
            <li><strong>Walkround and sign-off</strong> — full check before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Leeds kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Leeds kitchen wraps fall between <strong>£900 and £1,600</strong> depending on door count, finish and worktops.
            Travel to LS postcodes is included in the quote. Worktop-only wraps from around £250. See the{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">kitchen wrapping cost guide</Link>.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            See completed jobs in our{" "}
            <Link href="/gallery/" className="text-accent hover:underline">gallery</Link>.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            From a Leeds customer
          </h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              Needed a quick refresh without the hassle of a new kitchen. Connor gave us a straight quote,
              no mess, and the wrap still looks spot on. Really glad we went with WRPX.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">— Emma R., Leeds (Roundhay)</p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — kitchen wrapping in Leeds</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">Do you charge extra to travel to Leeds?</h3>
              <p className="mt-2 text-muted leading-relaxed">No. Travel is included in the quote.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Leeds?</h3>
              <p className="mt-2 text-muted leading-relaxed">Most jobs are 1-3 days.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap mixed-cabinet kitchens?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes, with careful assessment and substrate-specific prep.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover the whole of Leeds?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                We cover most LS postcodes - including city, inner suburbs, and outer Leeds.
                If you&apos;re on the boundary,{" "}
                <Link href="/contact/" className="text-accent hover:underline">send your postcode</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is vinyl wrapping suitable for a rental property in Leeds?</h3>
              <p className="mt-2 text-muted leading-relaxed">Yes - robust easy-clean film options are available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Leeds postcode coverage</h2>
          <p className="mt-4 text-muted leading-relaxed">
            LS1 through to LS28 and surrounding areas including Headingley, Chapel Allerton,
            Roundhay, Armley, Beeston, Morley, Garforth, Wetherby, Pudsey, Seacroft and Halton.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Looking for commercial vinyl installation in Leeds?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              We also cover window graphics, wall wraps and floor graphics for retail,
              agencies and brands.
            </p>
            <p className="mt-3">
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                See our commercial installation in Leeds
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Ready to transform your Leeds kitchen?</h2>
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
