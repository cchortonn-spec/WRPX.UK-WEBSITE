import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Door Wrapping | Vinyl Wrap Kitchen Doors | South Yorkshire | WRPX",
  description:
    "Kitchen door wrapping South Yorkshire — individual or full sets of kitchen doors wrapped in premium vinyl. From £45 per door. 5-year guarantee. Free survey, fixed quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-door-wrapping/" },
};

export default function KitchenDoorWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Door Wrapping",
    "Professional kitchen door vinyl wrapping in South Yorkshire. Individual doors or full sets wrapped in premium 3M and CoverStyl vinyl from £45 per door."
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does kitchen door wrapping cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kitchen door wrapping starts from around £45 per door depending on size and finish. A standard full kitchen of 10–12 doors typically falls between £450 and £700 for doors only. We provide a fixed price after a free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Can I just wrap some kitchen doors rather than all of them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we can wrap individual doors or a partial set. The main consideration is matching the finish across all doors so the result looks deliberate rather than mismatched. We'll advise at survey.",
        },
      },
      {
        "@type": "Question",
        name: "How long does kitchen door wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full set of 10–12 kitchen doors can usually be wrapped in one day. Smaller sets take less time. Doors are removed, wrapped and rehung — your kitchen stays usable.",
        },
      },
      {
        "@type": "Question",
        name: "What finishes are available for kitchen door wrapping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Matt, gloss, woodgrain (oak, walnut, light oak), marble effect, stone effect, concrete effect and solid colours in hundreds of shades. We bring physical samples to every survey.",
        },
      },
      {
        "@type": "Question",
        name: "Does vinyl wrapping work on all types of kitchen doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most door types are suitable — flat slab, shaker-style, simple routed profiles. Highly ornate or curved doors with deep profiles are assessed at survey. We'll tell you if a door isn't suitable before any money changes hands.",
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Door Wrapping — South Yorkshire Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Kitchen door wrapping is one of the most cost-effective ways to transform the look
            of your kitchen without touching the carcasses, layout or worktops. A new finish
            on your doors — whether that&apos;s a contemporary anthracite grey matt, a warm
            woodgrain, or a high-gloss white — changes the entire character of the room.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX wraps individual kitchen doors and full sets across South Yorkshire.
            From £45 per door. {siteConfig.guaranteeYears}-year guarantee on materials and
            workmanship. Free survey, fixed quote before any work starts.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              From £45 per door · 5-year guarantee · Free survey
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What is kitchen door wrapping?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Kitchen door wrapping means applying a premium vinyl film to the surface of your
              existing doors — front, back and edges. The film is heat-bonded and trimmed for
              a factory finish. Done properly, with correct surface preparation, it&apos;s
              indistinguishable from a new door and will last for years.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The process for each door: removed from its hinges, cleaned and degreased,
              lightly abraded, the film applied and heat-set, then trimmed and rehung. We take
              the doors to our workspace or wrap them in-situ depending on the door profile
              and job requirements.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen door wrapping vs replacing doors
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Replacing kitchen doors costs considerably more than wrapping — new replacement
              doors range from £60 to £250+ per door before fitting. Wrapped doors using
              premium vinyl achieve the same visual result at a fraction of the cost, often
              with a better match to your existing carcass dimensions (important in older
              or non-standard kitchens where sourcing exact replacements is difficult).
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Wrapping is also the greener option — the existing door goes nowhere.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Which doors can be wrapped?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most kitchen doors are suitable for vinyl wrapping:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Flat slab doors (melamine, painted MDF, vinyl-wrapped MDF)</li>
              <li>Simple shaker-style doors with flat or shallow routed profile</li>
              <li>Solid wood doors with stable, flat surfaces</li>
              <li>Drawer fronts (same material and process as doors)</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              Doors we don&apos;t wrap: highly ornate carved profiles, deep-routed raised panels,
              glass-fronted doors, doors with existing damage that wrapping would trap rather
              than fix. We assess every door at the survey and tell you straight.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes available
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We use films from 3M, CoverStyl, Avery Dennison and Hexis — hundreds of
              finishes across:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-muted">
              <li>Matt — soft-touch, contemporary, forgiving on fingerprints</li>
              <li>Gloss — high-shine, brightens smaller kitchens</li>
              <li>Woodgrain — oak, light oak, walnut, pine, driftwood</li>
              <li>Marble effect — Calacatta, grey veined, white marble</li>
              <li>Stone and concrete effect — warm tones and industrial greys</li>
              <li>Solid colours — hundreds of shades in matt or gloss</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We bring physical film samples to every survey. See your chosen finish in your
              own kitchen light before you commit. See more in our{" "}
              <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
                architectural vinyl finishes sample guide
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen door wrapping cost
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Door wrapping is priced per door based on size, finish and complexity:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Standard door: from £45</li>
              <li>Drawer front: from £25</li>
              <li>Full kitchen (10–12 doors + drawers): typically £450–£700</li>
              <li>Worktops can be added to the same visit (from £250)</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We give a fixed price after the free survey — not a rough guide that changes
              once we&apos;re on site. See our full{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Can I get just some doors wrapped?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Yes — we can wrap individual doors or a partial set. The main consideration is
              finish matching: if you&apos;re wrapping some doors to match existing ones, the vinyl
              needs to be a very close match or we need to re-wrap the full set for consistency.
              We&apos;ll advise honestly at survey on whether a partial wrap makes visual sense
              for your kitchen.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Some clients wrap a single damaged door to match the rest. Others do a feature
              door in a contrasting finish — upper units in white gloss, lower units in a
              woodgrain, for example. All doable.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">How much does kitchen door wrapping cost?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  From £45 per door. A full kitchen of 10–12 doors typically falls between £450 and
                  £700. Fixed price after a free survey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How long does it take to wrap kitchen doors?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  A full set of 10–12 doors is typically wrapped in one day. Smaller sets take less.
                  Your kitchen stays accessible throughout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How long does kitchen door wrap last?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  With correct prep and premium film, 7–10+ years in normal residential use. We back
                  every job with a {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Do you cover South Yorkshire for door wrapping?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield,
                  Wakefield, York, Bradford and surrounding areas. Book a free survey to confirm your postcode.
                </p>
              </div>
            </div>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Related services
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                  Full kitchen wrapping
                </Link>{" "}
                — doors, frames, carcasses and worktops in one visit
              </li>
              <li>
                <Link href="/worktop-wrapping/" className="text-accent hover:underline">
                  Worktop wrapping
                </Link>{" "}
                — transform your countertops in marble, stone or wood-effect vinyl
              </li>
              <li>
                <Link href="/furniture-wrapping/" className="text-accent hover:underline">
                  Furniture wrapping
                </Link>{" "}
                — wardrobes, bedroom and bathroom units in the same visit
              </li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
              Get a Free Door Wrapping Quote
            </Link>
            <p className="mt-4 text-muted text-sm">Or call 07398 395417</p>
          </div>
        </div>
      </section>
    </div>
  );
}
