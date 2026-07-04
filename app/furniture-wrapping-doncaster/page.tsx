import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Doncaster | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Doncaster — vinyl wrap for wardrobes, bedroom units and bathroom furniture. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-doncaster/" },
};

export default function FurnitureWrappingDoncasterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can be wrapped in Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes (fitted and freestanding), bathroom vanity units and storage, home office furniture, utility room cabinets and other smooth-surface fitted or freestanding pieces. We assess at the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get my furniture wrapped the same time as my Doncaster kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely — combining furniture and kitchen wrapping in one visit is the most efficient approach. We schedule everything together at the survey so you get one fixed price and one installation visit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all of Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — DN1 through DN12 and surrounding areas including Armthorpe, Bessacarr, Bawtry, Conisbrough, Mexborough, Sprotbrough, Tickhill, Warmsworth and Thorne.",
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
            areaServed: "Doncaster",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Doncaster</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Doncaster — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We wrap bedroom wardrobes, bathroom vanity units, home office furniture and fitted storage
            throughout Doncaster. DN1–DN12 and all surrounding areas, including Armthorpe, Bessacarr,
            Bawtry, Conisbrough and Thorne.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Same process as our Doncaster kitchen wrapping: free survey, fixed price,{" "}
            {siteConfig.guaranteeYears}-year written guarantee. No obligation, no pressure.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on materials and workmanship — written on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Doncaster</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom fitted wardrobes and freestanding wardrobes</li>
            <li>Bathroom vanity units and storage cabinets</li>
            <li>Home office and study furniture</li>
            <li>Utility room and laundry storage</li>
            <li>Living room fitted storage units</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Doncaster housing — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Doncaster has a broad mix of housing: older terraces in the town centre areas with
            dated fitted furniture, 1980s–2000s estates in Armthorpe and Bessacarr with standard
            flat-panel wardrobes, and newer developments across the district. Flat-panel MDF and
            melamine wardrobes are the most common — they&apos;re ideal for vinyl wrapping.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We often combine furniture wrapping with kitchen wrapping on the same Doncaster visit —
            it&apos;s the most efficient approach if you want to transform multiple rooms at once.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently asked questions — Doncaster</h2>
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
            <h2 className="text-lg font-semibold text-foreground">Also in Doncaster</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-doncaster/" className="text-accent hover:underline">
                  Kitchen Wrapping Doncaster
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-doncaster/" className="text-accent hover:underline">
                  Window Film Doncaster
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Doncaster
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Doncaster furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
