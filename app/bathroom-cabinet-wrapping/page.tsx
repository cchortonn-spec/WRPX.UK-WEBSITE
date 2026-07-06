import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bathroom Cabinet Wrapping | Vinyl Wrap Bathroom Units | South Yorkshire | WRPX",
  description:
    "Bathroom cabinet and vanity unit wrapping South Yorkshire. Transform bathroom cupboards, sink units and storage in premium waterproof vinyl. 5-year guarantee. Free survey.",
  alternates: { canonical: "https://www.wrpx.co.uk/bathroom-cabinet-wrapping/" },
};

export default function BathroomCabinetWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Bathroom Cabinet Wrapping",
    "Professional vinyl wrapping for bathroom cabinets, vanity units and fitted bathroom furniture in South Yorkshire."
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is vinyl wrapping suitable for bathroom cabinets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use moisture-resistant vinyl films specifically rated for wet environments. Bathroom cabinet wrapping is one of our most common requests. The key is thorough surface preparation and the right film specification for the humidity level.",
        },
      },
      {
        "@type": "Question",
        name: "How much does bathroom cabinet wrapping cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bathroom cabinet wrapping is priced per door or per unit, similar to kitchen doors — from around £45 per door. A full vanity unit set typically costs between £200 and £500 depending on the number of doors and whether the carcass is included.",
        },
      },
      {
        "@type": "Question",
        name: "How long does bathroom cabinet vinyl wrap last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With proper prep and moisture-rated vinyl, bathroom cabinet wraps last 5–8 years in normal use. We specify the right film for wet environments and back every job with a 5-year guarantee.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap bathroom furniture the same day as a kitchen wrap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we can bundle kitchen, bathroom and bedroom furniture into a single visit to save time and cost. This is a common and efficient way to refresh multiple rooms in one job.",
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
            Bathroom Cabinet Wrapping — South Yorkshire Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Bathroom cabinets and vanity units get a hard life — steam, moisture, cleaning
            products and daily use all take their toll on finishes. If your bathroom units are
            structurally sound but look dated or tired, vinyl wrapping is the most cost-effective
            way to transform them without a full bathroom refit.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX wraps bathroom cabinets, vanity sink units, fitted bathroom furniture and
            storage units across South Yorkshire using moisture-resistant vinyl films specified
            for wet environments. {siteConfig.guaranteeYears}-year guarantee. Free survey, fixed quote.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              Moisture-resistant vinyl · 5-year guarantee · Free survey
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What we wrap in bathrooms
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Vanity unit doors and drawer fronts under sinks</li>
              <li>Fitted bathroom storage cupboards and cabinets</li>
              <li>Full bathroom furniture suites (doors, carcass faces, plinths)</li>
              <li>Bathroom mirror cabinet fronts</li>
              <li>Airing cupboard doors</li>
              <li>Over-bath panels and side panels</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We assess every surface at the free survey. If a surface isn&apos;t suitable —
              warped door, badly damaged edges, materials that won&apos;t hold adhesive in a
              wet environment — we&apos;ll tell you before we quote.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Films for wet environments
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Not all vinyl films are suitable for bathrooms. The combination of steam,
              condensation and cleaning products requires moisture-resistant film with strong
              edge-sealing. We use branded films from 3M, CoverStyl and Avery Dennison that
              are specifically rated for wet environments. We seal all edges and cut-outs
              properly on every bathroom job. That&apos;s why our work lasts and why we back
              it with a {siteConfig.guaranteeYears}-year guarantee.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes for bathroom cabinets
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Popular bathroom finishes include:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-muted">
              <li>Gloss white — timeless, brightens small bathrooms</li>
              <li>Matt grey or charcoal — contemporary, forgiving on marks</li>
              <li>Concrete effect — popular for modern and industrial bathroom styles</li>
              <li>Marble effect — Calacatta, Statuario or grey-veined marble looks</li>
              <li>Woodgrain — light oak or walnut for warm, natural bathroom tones</li>
              <li>Solid colours — hundreds of shades in matt or gloss</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We bring physical samples to every survey. See your chosen finish in your actual
              bathroom light before you commit.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Bathroom cabinet wrapping vs replacing bathroom furniture
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              New fitted bathroom furniture costs significantly more than wrapping. Off-the-shelf
              vanity units start from £200–£500 for basic versions; fitted bathroom furniture
              from a specialist supplier typically runs to £1,500–£5,000+ including installation.
              Wrapping achieves the same new-look finish at a fraction of the cost, often in a
              single working day.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              It also avoids the disruption of a full bathroom refit — no plumber required,
              no tile damage, no days without a working bathroom.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Bundle with kitchen or bedroom wrapping
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We can combine bathroom cabinet wrapping with a kitchen wrap, worktop wrap or
              bedroom wardrobe wrap in a single visit. This is more efficient and often more
              cost-effective than separate visits. If you&apos;re refreshing multiple rooms, mention
              it when you enquire and we&apos;ll scope the whole job at the free survey.
            </p>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                  Kitchen wrapping
                </Link>{" "}
                — full kitchen transformation in 1–3 days
              </li>
              <li>
                <Link href="/bedroom-wardrobe-wrapping/" className="text-accent hover:underline">
                  Bedroom wardrobe wrapping
                </Link>{" "}
                — wardrobes and fitted bedroom furniture refreshed
              </li>
              <li>
                <Link href="/furniture-wrapping/" className="text-accent hover:underline">
                  Furniture wrapping
                </Link>{" "}
                — office units, fitted storage and more
              </li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Is vinyl wrapping suitable for bathroom cabinets?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — we use moisture-resistant vinyl specifically rated for wet environments,
                  with proper edge sealing. Our {siteConfig.guaranteeYears}-year guarantee covers
                  adhesion in normal use including bathroom conditions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How much does bathroom cabinet wrapping cost?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  From £45 per door. A vanity unit set typically costs £200–£500. Fixed price
                  after the free survey — no obligation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How long does bathroom cabinet vinyl wrap last?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  With the right film and proper preparation, 5–8+ years in normal bathroom conditions.
                  We back every job with a {siteConfig.guaranteeYears}-year guarantee.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Do you cover South Yorkshire for bathroom wrapping?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield
                  and surrounding areas.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
            <p className="mt-4 text-muted text-sm">Or call 07398 395417</p>
          </div>
        </div>
      </section>
    </div>
  );
}
