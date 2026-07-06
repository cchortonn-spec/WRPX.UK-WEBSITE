import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bedroom Wardrobe Wrapping | Vinyl Wrap Wardrobes South Yorkshire | WRPX",
  description:
    "Bedroom wardrobe and fitted furniture wrapping South Yorkshire. Transform wardrobes, fitted units and bedroom storage with premium vinyl wrap. 5-year guarantee. Free survey.",
  alternates: { canonical: "https://www.wrpx.co.uk/bedroom-wardrobe-wrapping/" },
};

export default function BedroomWardrobeWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Bedroom Wardrobe Wrapping",
    "Professional vinyl wrapping for bedroom wardrobes, fitted furniture and storage units in South Yorkshire."
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you wrap fitted wardrobes with vinyl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — fitted wardrobes with flat or simple shaker-style door fronts are ideal for vinyl wrapping. Doors are removed, wrapped on both faces and edges, and rehung. The result looks like new furniture.",
        },
      },
      {
        "@type": "Question",
        name: "How much does wardrobe vinyl wrapping cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wardrobe door wrapping is priced similarly to kitchen doors — from around £45 per door depending on size and finish. A full set of fitted wardrobe doors typically costs between £250 and £600. We provide a fixed price after a free survey.",
        },
      },
      {
        "@type": "Question",
        name: "How long does wardrobe vinyl wrap last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With premium vinyl and correct preparation, bedroom wardrobe wraps last 7–10+ years in normal use. We back every job with a 5-year guarantee on materials and workmanship.",
        },
      },
      {
        "@type": "Question",
        name: "What finishes can you get on a bedroom wardrobe wrap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All the same finishes as kitchen wrapping — matt, gloss, woodgrain (oak, walnut, pine, driftwood), marble effect, concrete, stone and solid colours. We bring samples to every survey so you can choose in your own bedroom lighting.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap IKEA PAX wardrobes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — PAX and similar flat-faced wardrobe fronts are commonly wrapped. The panel doors are particularly well-suited to vinyl wrapping. We assess condition and suitability at the free survey.",
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
            Bedroom Wardrobe Wrapping — South Yorkshire Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Bedroom wardrobes and fitted furniture are some of the most commonly wrapped pieces
            outside the kitchen. Whether you have a set of fitted sliding-door wardrobes that
            need a fresh finish, IKEA PAX or similar flat-panel wardrobes that are structurally
            sound but visually dated, or a full wall of fitted bedroom storage that needs
            refreshing — vinyl wrapping is a fast, affordable and durable solution.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX wraps bedroom wardrobes, fitted bedroom furniture and storage units across
            South Yorkshire. Same process as kitchen wrapping: free survey, honest assessment,
            fixed quote. {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              From £45 per door · 5-year guarantee · Free survey · Can bundle with kitchen wrap
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What bedroom furniture we wrap
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Fitted floor-to-ceiling wardrobe fronts</li>
              <li>Freestanding wardrobe doors and drawer fronts</li>
              <li>IKEA PAX, Bespoke built-in and other flat-panel wardrobe systems</li>
              <li>Chest of drawers and bedside cabinet fronts</li>
              <li>Fitted bedroom storage alcoves</li>
              <li>Dressing table fronts and panels</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We can wrap the doors only, or include carcass faces and side panels if you
              want a fully seamless finish. We assess what&apos;s suitable at the free survey
              and advise on the best approach for your particular furniture.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Wardrobe wrapping vs replacing wardrobes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Replacing fitted wardrobes is expensive and disruptive. A new set of fitted
              wardrobes from a specialist supplier typically costs £3,000–£10,000+ including
              installation. Even budget flat-pack alternatives cost significantly more than
              wrapping once you factor in time and fitting.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Vinyl wrapping achieves the same visual transformation — new colour, new finish,
              new look — at a fraction of the cost and in a day or two. The furniture stays
              in position; we remove the doors, wrap them, rehang.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes for bedroom wardrobes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Popular finish choices for bedroom furniture:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-muted">
              <li>Soft white or grey matt — minimal, timeless, works with most bedroom styles</li>
              <li>Warm oak woodgrain — natural, popular in contemporary bedroom interiors</li>
              <li>Walnut effect — rich, warm tone for darker bedroom colour palettes</li>
              <li>Gloss white or cream — classic, reflective, particularly good in smaller bedrooms</li>
              <li>Concrete or stone effect — modern, textured, works in industrial-style rooms</li>
              <li>Solid colour satin or matt — hundreds of shades to coordinate with your decor</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We bring physical film samples to every bedroom survey. Your bedroom lighting
              is different from a showroom or a screen — seeing the finish in the actual space
              makes a real difference to your decision.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Can you wrap IKEA PAX and similar wardrobes?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Yes — IKEA PAX, Pax Hasvik, Pax Grimo and similar flat-faced panel doors are
              commonly wrapped. The smooth, flat surface takes vinyl film cleanly and the result
              looks premium. We assess every door for condition at the survey; most PAX doors
              wrap without issue.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Frame and carcass wrapping is also possible for PAX units, transforming the
              whole appearance rather than just the door fronts.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Bundle with kitchen or bathroom wrapping
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We regularly combine bedroom wardrobe wrapping with a kitchen wrap, bathroom cabinet
              wrap or other furniture in a single visit. This is more efficient and often more
              cost-effective. If you have multiple rooms to refresh, mention it when you enquire
              and we&apos;ll scope the whole job at the free survey.
            </p>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                  Kitchen wrapping
                </Link>{" "}
                — full kitchen transformation in 1–3 days
              </li>
              <li>
                <Link href="/bathroom-cabinet-wrapping/" className="text-accent hover:underline">
                  Bathroom cabinet wrapping
                </Link>{" "}
                — vanity units and bathroom furniture refreshed
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
                <h3 className="font-semibold text-foreground">Can you wrap fitted wardrobes with vinyl?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — flat or simple shaker-style wardrobe door fronts are ideal for vinyl wrapping.
                  We remove the doors, wrap them properly and rehang. The result looks like new furniture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How much does wardrobe vinyl wrapping cost?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  From £45 per door. A full set of fitted wardrobe doors typically costs £250–£600.
                  Fixed price after the free survey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How long does wardrobe vinyl wrap last?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  7–10+ years with premium vinyl and correct preparation. We back every job with a{" "}
                  {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Can you wrap IKEA PAX wardrobes?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — PAX and similar flat-panel doors wrap very well. We assess condition at the
                  survey; most PAX wardrobe doors are suitable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Do you cover South Yorkshire for wardrobe wrapping?</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  Yes — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield,
                  Wakefield, York, Bradford and surrounding areas.
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
