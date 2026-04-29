import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Doncaster | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Doncaster — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-doncaster/" },
};

export default function KitchenWrappingDoncasterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most jobs take 1-3 days. A 10-12 door kitchen including worktops is usually two full days. We confirm the schedule at the survey stage.",
        },
      },
      {
        "@type": "Question",
        name: "Is vinyl wrapping worth it for an older Doncaster kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually yes, if the carcasses are sound. A lot of Doncaster housing stock has solid cabinet structures under dated finishes - wrapping gives you a completely new look without replacing what still works.",
        },
      },
      {
        "@type": "Question",
        name: "Will the wrap peel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not with proper prep. We degrease, abrade and prime before any film goes down. Our 5-year guarantee covers adhesion failure and material defects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all of Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - DN1 through to DN12 and surrounding areas including Bessacarr, Cantley, Armthorpe, Edlington, Mexborough, Conisbrough, Bawtry, Tickhill, Rossington and Thorne.",
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
    areaServed: ["Doncaster", "DN1-DN12"],
    geo: { "@type": "GeoCoordinates", latitude: 53.5228, longitude: -1.1285 },
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
            Kitchen Wrapping Doncaster — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Doncaster is one of our busiest areas. We cover the whole DN postcode - from
            Bessacarr and Cantley through to Armthorpe, Mexborough and Conisbrough -
            and we&apos;re familiar with the housing stock across the area. Whether it&apos;s a
            1970s semi in Intake, a newer build in Edlington, or a larger detached in
            Bawtry, the assessment process is the same: we look at surface condition,
            door profile and cabinet structure, and we tell you straight whether wrapping
            is the right option.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            If the carcasses are sound and you want a full visual upgrade without the
            cost and disruption of a new kitchen, vinyl wrapping is usually the right
            call. Most Doncaster kitchen wraps are done in 1-3 days. No skip, no dust,
            no rip-out. Your kitchen stays usable throughout.
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
            Doncaster kitchens — what we&apos;ve found
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Doncaster has a lot of ex-council and early private-build housing from
            the 1970s and 80s, and the kitchens in those properties are often
            structurally solid but visually tired. Flat slab doors, melamine carcasses,
            laminate worktops - all perfectly wrappable if the surfaces are in good
            condition.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We also see a fair number of larger 1990s and 2000s properties in the
            Bessacarr, Cantley and Tickhill areas where kitchens are good quality but
            the finish has dated. Woodgrain and cream have given way to anthracite
            grey and stone effect - wrapping gives you the current look without
            changing a kitchen that otherwise works perfectly.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Surface prep is the same regardless of property age: thorough degreasing,
            abrasion where the film spec requires it, and the right primer for the
            substrate. We use 3M, CoverStyl, Avery Dennison and Hexis films -
            specified to the door material and finish you&apos;re choosing.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Doncaster
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, drawer fronts, carcass faces, end panels, plinths, cornice</li>
            <li>Worktops — marble, stone and wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom furniture, wardrobes and fitted storage</li>
            <li>Bathroom vanity units and furniture</li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            If anything isn&apos;t suitable - warped doors, lifting veneer, badly
            damaged edges - we&apos;ll tell you at the survey before any money changes
            hands.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Doncaster
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete effect,
            stone effect and solid colours. We bring physical samples to every survey -
            see the finish in your own lighting, not on a screen.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Currently popular in Doncaster: soft-touch dark grey matt, pale oak
            effect, and white gloss for kitchens with good natural light. Send us
            a photo of a finish you&apos;ve seen elsewhere and we&apos;ll find the closest
            match.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Doncaster project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li><strong>Free survey</strong> — we come out, assess and measure. Honest report on suitability. No obligation.</li>
            <li><strong>Fixed quote</strong> — confirmed in writing. The price doesn&apos;t change.</li>
            <li><strong>Installation</strong> — 1-3 days. Doors off, wrapped, rehung. Frames done in-situ.</li>
            <li><strong>Walkround and sign-off</strong> — hardware back on, everything checked before we leave.</li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Doncaster kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Doncaster kitchen wraps fall between <strong>£850 and £1,400</strong>.
            Worktop-only wraps start from around £250. We give a fixed price after
            the free survey - not a rough guide that expands on site. See our{" "}
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
            From a Doncaster customer
          </h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              Connor came out, gave us a clear quote and no hard sell. Had the doors
              and worktops wrapped - you can&apos;t tell it&apos;s not new. Professional job,
              turned up when they said. Would recommend.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">
              — James T., Doncaster (Bessacarr)
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen wrapping in Doncaster
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How long does kitchen wrapping take in Doncaster?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most jobs take 1-3 days. A 10-12 door kitchen including worktops is
                usually two full days. We confirm the schedule at the survey stage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is vinyl wrapping worth it for an older Doncaster kitchen?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Usually yes, if the carcasses are sound. A lot of Doncaster housing
                stock has solid cabinet structures under dated finishes - wrapping gives
                you a completely new look without replacing what still works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the wrap peel?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper prep. We degrease, abrade and prime before any film
                goes down. Our 5-year guarantee covers adhesion failure and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover all of Doncaster?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes - DN1 through to DN12 and surrounding areas. We cover central
                Doncaster, Bessacarr, Cantley, Armthorpe, Edlington, Mexborough,
                Conisbrough, Bawtry, Tickhill, Rossington, Thorne and surrounding villages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I see examples before I commit?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. We bring physical film samples to every survey. You can also
                browse the{" "}
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
            Doncaster postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            DN1, DN2, DN3, DN4, DN5, DN6, DN7, DN8, DN9, DN10, DN11, DN12 and
            surrounding areas. Not sure if we cover you?{" "}
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
              Looking for commercial vinyl installation in Doncaster?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              We also cover window graphics, wall wraps and floor graphics for retail,
              agencies and brands.
            </p>
            <p className="mt-3">
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                See our commercial installation in Doncaster
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Doncaster kitchen?
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
