import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Chesterfield | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Chesterfield — wardrobes, bedroom units and bathroom furniture vinyl wrapped. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-chesterfield/" },
};

export default function FurnitureWrappingChesterfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can you vinyl wrap in Chesterfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes, bathroom vanity units, home office furniture and fitted storage throughout S40–S45. Any smooth-surface MDF, melamine or painted furniture can be assessed for wrapping.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Staveley, Hasland and Brimington?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover all Chesterfield postcodes S40–S45 including Staveley, Whittington, Hasland, Brimington, Inkersall, Old Whittington and all surrounding villages.",
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
            areaServed: "Chesterfield",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Chesterfield</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Chesterfield — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We cover Chesterfield and all surrounding S40–S45 postcodes — Staveley, Whittington,
            Hasland, Brimington, Inkersall and beyond. Our furniture wrapping service transforms
            bedroom wardrobes, bathroom vanity units and fitted furniture in premium architectural
            vinyl.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Free survey, fixed quote, {siteConfig.guaranteeYears}-year written guarantee.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee — written on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Chesterfield</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom wardrobes (fitted and freestanding)</li>
            <li>Bathroom vanity units and storage</li>
            <li>Home office and study furniture</li>
            <li>Utility room cabinets</li>
            <li>Hallway and landing fitted storage</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Chesterfield housing</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield has a mixture of Victorian terraces in the town centre, 1960s–80s
            council-era housing in areas like Loundsley Green and Hasland, and newer private
            developments around Brimington and Inkersall. All these housing types have fitted
            furniture that responds well to vinyl wrapping.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield is also close to several Peak District villages — we cover Eckington,
            Killamarsh, Dronfield and North Derbyshire within our normal service area.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions</h2>
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
            <h2 className="text-lg font-semibold text-foreground">Also in Chesterfield</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-chesterfield/" className="text-accent hover:underline">
                  Kitchen Wrapping Chesterfield
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-chesterfield/" className="text-accent hover:underline">
                  Window Film Chesterfield
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-chesterfield/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Chesterfield
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Chesterfield furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
