import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Huddersfield | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Huddersfield — wardrobes, bedroom units and bathroom furniture vinyl wrapped. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-huddersfield/" },
};

export default function FurnitureWrappingHuddersfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can you vinyl wrap in Huddersfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes, bathroom vanity units, home office furniture and other fitted or freestanding furniture across HD1–HD9. Smooth MDF, melamine and painted surfaces wrap best — we assess at the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Almondbury, Mirfield and Holmfirth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover HD1–HD9 including Almondbury, Mirfield, Holmfirth, Kirkburton, Meltham, Marsden, Slaithwaite and all surrounding Huddersfield areas. Travel is included in the fixed quote.",
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
            areaServed: "Huddersfield",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Huddersfield</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Huddersfield — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Professional furniture wrapping throughout Huddersfield and the surrounding HD
            postcodes — Almondbury, Mirfield, Holmfirth, Kirkburton, Meltham, Marsden and
            Slaithwaite. We wrap bedroom wardrobes, bathroom vanity units and fitted storage
            in premium architectural vinyl.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Free survey, fixed quote, {siteConfig.guaranteeYears}-year written guarantee.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Huddersfield</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom fitted wardrobes and freestanding wardrobes</li>
            <li>Bathroom vanity units and storage cabinets</li>
            <li>Home office furniture and storage</li>
            <li>Utility room and boot room cabinets</li>
            <li>Living room fitted storage units</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Huddersfield housing</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Huddersfield has a distinctive housing stock — stone-built Victorian and Edwardian
            terraces across Almondbury and Moldgreen, interwar semi-detached in Kirkburton and
            Berry Brow, and newer developments in Mirfield and the valley towns. We find all
            types of fitted furniture across these properties, from original built-in bedroom
            units to modern flat-pack wardrobes.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            The Holme and Colne valleys bring us out to some beautiful properties — we cover
            Holmfirth, Meltham and Slaithwaite regularly.
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
            <h2 className="text-lg font-semibold text-foreground">Also in Huddersfield</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-huddersfield/" className="text-accent hover:underline">
                  Kitchen Wrapping Huddersfield
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-huddersfield/" className="text-accent hover:underline">
                  Window Film Huddersfield
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-huddersfield/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Huddersfield
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Huddersfield furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
