import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Leeds | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Leeds — vinyl wrap for wardrobes, bedroom units, bathroom vanities and office furniture. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-leeds/" },
};

export default function FurnitureWrappingLeedsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can be vinyl wrapped in Leeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes (built-in and freestanding), bathroom vanity units and mirrored cabinets, home office furniture, kitchen islands and fitted storage. Smooth MDF, melamine and painted surfaces are all suitable substrates.",
        },
      },
      {
        "@type": "Question",
        name: "How much does furniture wrapping cost in Leeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From around £45 per door depending on size and finish. A full bedroom wardrobe (6 doors) typically falls between £350 and £600. Fixed price confirmed after a free survey — no hidden costs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover South Leeds, North Leeds and the suburbs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover all of Leeds including Headingley, Chapel Allerton, Roundhay, Moortown, Horsforth, Pudsey, Morley, Beeston, Cross Gates, Garforth, Wetherby and surrounding areas.",
        },
      },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "WRPX",
            url: "https://www.wrpx.co.uk",
            telephone: siteConfig.phoneE164,
            areaServed: "Leeds",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Leeds</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Leeds — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Professional furniture wrapping for Leeds homeowners — bedroom wardrobes, bathroom
            vanity units, home office furniture and fitted storage wrapped in premium architectural
            vinyl. We cover all of Leeds from Headingley and Roundhay in the north to Morley and
            Beeston in the south.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Free survey, fixed quote, {siteConfig.guaranteeYears}-year written guarantee.
            Same quality and process as our Leeds kitchen wrapping.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year written guarantee on every job. Named on the paperwork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Leeds</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom fitted wardrobes and walk-in wardrobe storage</li>
            <li>Freestanding wardrobes and chest of drawers fronts</li>
            <li>Bathroom vanity units, mirrored cabinets and storage towers</li>
            <li>Home office desks and fitted office furniture</li>
            <li>Utility and boot room storage cabinets</li>
            <li>Living room and hallway fitted storage units</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Leeds housing and furniture</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds has a significant stock of Victorian and Edwardian terraces in areas like
            Headingley, Hyde Park and Chapel Allerton with older fitted furniture that often
            needs refreshing. Newer developments across Horsforth, Roundhay and Pudsey typically
            feature flat-panel MDF fitted wardrobes — ideal substrates for vinyl wrapping.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds city centre apartments and converted properties often have modern fitted furniture
            where owners want a colour update without the cost and disruption of replacement.
            Vinyl wrapping is ideal for this — we can match or contrast with existing kitchen units.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — Leeds furniture wrapping</h2>
          <div className="mt-4 space-y-6">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="mt-2 text-muted leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Also in Leeds</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-leeds/" className="text-accent hover:underline">
                  Kitchen Wrapping Leeds
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-leeds/" className="text-accent hover:underline">
                  Window Film Leeds
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Leeds
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Leeds furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
