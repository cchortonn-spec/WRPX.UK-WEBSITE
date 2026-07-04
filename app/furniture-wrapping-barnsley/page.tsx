import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Barnsley | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Barnsley — wardrobes, bedroom units and bathroom furniture vinyl wrapped. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-barnsley/" },
};

export default function FurnitureWrappingBarnsleyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can you vinyl wrap in Barnsley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes and fitted units, bathroom vanity units and storage cabinets, home office furniture and utility room storage. Flat-panel MDF and melamine surfaces are ideal — very common in Barnsley's newer housing stock.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Penistone, Wombwell and Hoyland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover all S70–S75 postcodes including Penistone, Dodworth, Mapplewell, Royston, Darton, Wombwell, Hoyland, Cudworth and all surrounding villages. Travel is included in the fixed quote.",
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
            areaServed: "Barnsley",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Barnsley</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Barnsley — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Barnsley is a regular stop for us — we cover S70 through S75 and all surrounding
            villages. We wrap bedroom wardrobes, bathroom vanity units and fitted furniture
            throughout the borough: Penistone, Dodworth, Wombwell, Hoyland, Mapplewell,
            Royston, Cudworth and beyond.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Free survey, fixed quote, {siteConfig.guaranteeYears}-year written guarantee.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee — same as every kitchen job we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Barnsley</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom wardrobes — fitted and freestanding</li>
            <li>Bathroom vanity units and storage</li>
            <li>Home office furniture</li>
            <li>Utility room cabinets</li>
            <li>Living room fitted storage</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Barnsley housing — furniture we typically find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Much of Barnsley&apos;s housing stock — particularly the 1990s and 2000s estates in
            Mapplewell, Royston and Darton — has flat-panel MDF fitted wardrobes from when
            properties were built. These are structurally sound but often outdated in colour or
            finish. They&apos;re excellent substrates for vinyl wrapping.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Older terraces in the town centre and mining villages often have traditional built-in
            furniture with painted or veneer surfaces — these need assessment but are often
            wrappable with proper preparation.
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
            <h2 className="text-lg font-semibold text-foreground">Also in Barnsley</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-barnsley/" className="text-accent hover:underline">
                  Kitchen Wrapping Barnsley
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-barnsley/" className="text-accent hover:underline">
                  Window Film Barnsley
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Barnsley
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Barnsley furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
