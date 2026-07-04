import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Rotherham | Wardrobe & Bedroom Vinyl Wrap | WRPX",
  description:
    "Furniture wrapping Rotherham — wardrobes, bedroom units and bathroom furniture vinyl wrapped. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-rotherham/" },
};

export default function FurnitureWrappingRotherhamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can you vinyl wrap in Rotherham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes and fitted units, bathroom vanity units, home office furniture and utility room storage. We cover all smooth-surface MDF, melamine and painted furniture. Assessment at free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Maltby, Wickersley and surrounding Rotherham areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — S60–S66 in full, including Maltby, Wickersley, Rawmarsh, Swinton, Wath upon Dearne, Thurcroft, Dinnington, Wales and all surrounding villages. Travel is included in the fixed quote.",
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
            areaServed: "Rotherham",
          }),
        }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Rotherham</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Rotherham — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re in Rotherham regularly — S60 through S66, covering Maltby, Wickersley,
            Rawmarsh, Swinton, Wath upon Dearne and all surrounding areas. We wrap bedroom
            wardrobes, bathroom vanity units, home office furniture and fitted storage throughout
            the borough.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Free survey, fixed quote, {siteConfig.guaranteeYears}-year written guarantee.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on all materials and workmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Rotherham</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom wardrobes — fitted and freestanding</li>
            <li>Bathroom vanity units, cabinets and storage</li>
            <li>Home office and study furniture</li>
            <li>Utility room and boot room storage</li>
            <li>Hallway fitted cupboards and storage</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Why Rotherham clients choose furniture wrapping</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Rotherham has a wide mix of housing — from older terraces in the town centre to
            newer estates in Wickersley and Bramley. A common request we get is from homeowners
            who have had their kitchen wrapped and now want their bedroom or bathroom furniture
            to coordinate. We can match existing kitchen wrap colours exactly.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Buy-to-let landlords in Rotherham are also a growing part of our client base —
            furniture wrapping refreshes tired fitted wardrobes between tenancies at a fraction
            of the cost of replacement.
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
            <h2 className="text-lg font-semibold text-foreground">Also in Rotherham</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-rotherham/" className="text-accent hover:underline">
                  Kitchen Wrapping Rotherham
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-rotherham/" className="text-accent hover:underline">
                  Window Film Rotherham
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-rotherham/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Rotherham
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Rotherham furniture?
          </h2>
          <p className="text-muted">Free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
