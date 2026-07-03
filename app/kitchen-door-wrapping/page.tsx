import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Door Wrapping South Yorkshire | From £45 Per Door | WRPX",
  description:
    "Kitchen door wrapping South Yorkshire — individual doors or full sets in any colour or finish. Matt, gloss, woodgrain, marble. From £45 per door. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-door-wrapping/" },
};

export default function KitchenDoorWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Door Wrapping",
    "Professional kitchen door vinyl wrapping service covering individual doors and full kitchens. Matt, gloss, woodgrain and stone finishes. South Yorkshire."
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
          text: "Kitchen door wrapping starts from around £45 per door. A full kitchen (10–12 standard doors) typically falls between £550 and £900 depending on door size, profile complexity and finish. Drawer fronts are usually £20–£35 each. We give a fixed price after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap any colour or finish on kitchen doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our vinyl range covers hundreds of finishes including soft-touch matt, gloss, satin, woodgrain (oak, walnut, light oak, ash), marble effect, concrete, stone, and solid colours. If you have a specific look in mind, send us a photo and we'll source the closest match.",
        },
      },
      {
        "@type": "Question",
        name: "How long does kitchen door wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Individual doors take a few hours. A full kitchen (10–14 doors) is usually completed in one day. Larger kitchens with complex profiles may take two days. Your kitchen stays functional throughout — we work systematically.",
        },
      },
      {
        "@type": "Question",
        name: "Can I wrap just one or two doors rather than the whole kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We wrap individual doors and drawer fronts. Some clients wrap a single damaged door to match existing units, others do a feature door or island in a contrasting finish. There's no minimum order.",
        },
      },
      {
        "@type": "Question",
        name: "How long do wrapped kitchen doors last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With correct preparation and commercial-grade vinyl, wrapped kitchen doors last 7–10+ years. We back every job with a 5-year guarantee on material defects, colour stability and adhesion.",
        },
      },
      {
        "@type": "Question",
        name: "What door materials can you wrap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We wrap solid wood doors, MDF, melamine-faced chipboard, vinyl-wrapped MDF and smooth-painted doors. We don't wrap heavily textured, heavily routed or badly damaged doors. We check suitability at the free survey and tell you straight.",
        },
      },
      {
        "@type": "Question",
        name: "Will the vinyl peel or bubble?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not with proper preparation. We degrease, abrade and prime surfaces before any film is applied. Surface preparation is where a wrap succeeds or fails — we don't cut corners on it. Our 5-year guarantee covers adhesion failure.",
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
            Kitchen Door Wrapping — Any Colour, Any Finish, From £45 Per Door
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Kitchen door wrapping is the most targeted way to refresh your kitchen. If your carcasses
            are solid but the doors look dated, you wrap the doors — not the whole kitchen. Individual
            doors, drawer fronts, end panels and plinths. Any colour. Any finish. One to three days.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            New kitchen doors from suppliers typically cost £80–£200 per door, require measuring,
            ordering, waiting and refitting. Wrapping costs from £45 per door, done on-site, finished
            same day. No layout change, no new hinges, no waiting weeks for delivery.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on material defects, colour stability and adhesion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap — door by door</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li><strong>Cabinet doors</strong> — all standard sizes and profiles</li>
            <li><strong>Drawer fronts</strong> — single, double and triple drawers</li>
            <li><strong>End panels</strong> — side panels that face into the room</li>
            <li><strong>Plinths and kickboards</strong></li>
            <li><strong>Cornice and pelmet</strong></li>
            <li><strong>Island doors and panels</strong> — both sides if required</li>
            <li><strong>Integrated appliance doors</strong> — fridge, dishwasher, bin fronts</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Finishes — kitchen door wrapping</h2>
          <p className="mt-4 text-muted">Popular finishes from our South Yorkshire clients:</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Soft-touch anthracite grey matt", note: "Most requested in 2025–26. Works with stone-effect worktops." },
              { label: "Gloss white", note: "Classic, brightens smaller kitchens, easy to clean." },
              { label: "Light oak woodgrain", note: "Warm, natural look. Pairs well with any worktop colour." },
              { label: "Sage green matt", note: "Trending. Pairs with brass hardware and marble worktops." },
              { label: "Calacatta marble-effect panel", note: "Feature island or breakfast bar panels." },
              { label: "Dark walnut woodgrain", note: "Bold, warm finish for statement kitchens." },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border p-4">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted">
            We bring physical vinyl samples to every survey. Hundreds more finishes available.
            See our{" "}
            <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
              architectural vinyl finishes guide
            </Link>{" "}
            for the full range.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Kitchen door wrapping — pricing guide
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-muted">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Item</th>
                  <th className="py-2 text-left font-semibold text-foreground">Typical price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Single standard cabinet door</td>
                  <td className="py-3">from £45</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Drawer front (standard)</td>
                  <td className="py-3">from £20</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">End panel / side panel</td>
                  <td className="py-3">from £55</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Full kitchen (10–12 doors, drawers, plinths)</td>
                  <td className="py-3">from £550</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Larger kitchen (14–18 doors + drawers)</td>
                  <td className="py-3">from £750</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            Fixed price confirmed after the free survey. See our full{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            for a detailed breakdown including worktops.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            The process — kitchen door wrapping
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-3 text-muted">
            <li>
              <strong>Free survey</strong> — we visit your kitchen, assess door condition and
              material, measure accurately and give you an honest suitability report. No obligation.
            </li>
            <li>
              <strong>Fixed quote</strong> — confirmed in writing per door / per kitchen. The price
              doesn&apos;t change unless the scope changes.
            </li>
            <li>
              <strong>Door removal and surface prep</strong> — doors removed from hinges, cleaned,
              degreased and lightly abraded. Prep is what makes the difference.
            </li>
            <li>
              <strong>Wrapping</strong> — film applied by hand in sections, edges folded, all
              profiles covered. Most doors are wrapped in our workshop or on-site depending
              on complexity.
            </li>
            <li>
              <strong>Reinstallation and inspection</strong> — doors rehung, hardware refitted,
              full walkround with you to check every door and seam.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen door wrapping
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How much does kitchen door wrapping cost?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                From £45 per door. A full kitchen (10–12 doors) typically falls between £550 and £900.
                Fixed price after the free survey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you match any colour I want?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                We can usually match or closely replicate any colour in matt, satin or gloss. Send
                us a photo or paint code and we&apos;ll find the closest equivalent in our vinyl range.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can I just do one damaged door?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. There&apos;s no minimum. Some clients wrap a single damaged or faded door to match
                the rest of the kitchen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How long do wrapped doors last?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                7–10+ years with correct preparation. We back every job with a {siteConfig.guaranteeYears}-year
                guarantee on material defects, colour and adhesion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Will the wrap peel or bubble?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not with proper prep. We degrease, abrade and prime before any film goes down — this
                is the step that determines whether a wrap lasts 5 years or 5 months. Our guarantee
                covers adhesion failure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">What door materials work best?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Solid wood, MDF, melamine and smooth-painted doors all wrap well. Very heavily textured
                doors or profiles with deep grooves aren&apos;t always suitable — we check at the survey
                and tell you straight before any money changes hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Kitchen door wrapping by city
          </h2>
          <p className="mt-4 text-muted">
            We cover South Yorkshire and the wider North. See your local page for area-specific
            pricing and FAQs.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 text-sm">
            {siteConfig.areas.map((city) => (
              <Link
                key={city}
                href={`/kitchen-wrapping-${city.toLowerCase()}/`}
                className="rounded-lg border border-border p-3 text-center text-foreground transition hover:border-accent hover:text-accent"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Also considering a full kitchen wrap?
            </h2>
            <p className="mt-3 text-muted">
              Adding worktops to your door wrap keeps labour costs low — one visit, complete
              transformation. See our full{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                kitchen wrapping service
              </Link>{" "}
              page for everything included.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to wrap your kitchen doors?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey. Fixed quote before work starts. {siteConfig.guaranteeYears}-year guarantee on every job.
          </p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Get a Free Quote
          </Link>
          <p className="text-muted">
            Or call <strong>{siteConfig.phone}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
