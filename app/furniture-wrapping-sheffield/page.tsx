import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Furniture Wrapping Sheffield | Wardrobes, Bedrooms & Bathrooms | WRPX",
  description:
    "Furniture wrapping Sheffield — vinyl wrap for wardrobes, bedroom units, bathroom vanities and office furniture. Free survey, fixed quote. 5-year guarantee. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping-sheffield/" },
};

export default function FurnitureWrappingSheffieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What furniture can be vinyl wrapped in Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bedroom wardrobes and fitted units, bathroom vanity units and cabinets, office and study furniture, utility room storage and freestanding furniture with suitable surfaces. We assess suitability at the free survey — smooth MDF, melamine and painted surfaces wrap best.",
        },
      },
      {
        "@type": "Question",
        name: "How long does furniture wrapping take in Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 1–2 days for a full bedroom wardrobe or bathroom unit set. Single pieces can be done in a few hours. We confirm the timeline when we give you the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match my wrapped furniture to my wrapped kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We keep job records including material codes, so matching your bedroom or bathroom furniture to your kitchen wrap is straightforward. We can also use complementary finishes if you prefer coordination over identical matching.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover all of Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. S1 through to S36 — Hillsborough, Walkley, Crookes, Ecclesall, Nether Edge, Woodseats, Mosborough, Handsworth, Totley, Dore, Fulwood, Stannington, Chapeltown and all surrounding areas.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: siteConfig.phoneE164,
    areaServed: "Sheffield",
    geo: { "@type": "GeoCoordinates", latitude: 53.3811, longitude: -1.4701 },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>{" · "}
            <Link href="/furniture-wrapping/" className="hover:text-accent">Furniture Wrapping</Link>{" · "}
            <span>Sheffield</span>
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Furniture Wrapping Sheffield — Wardrobes, Bedrooms & Bathrooms
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Sheffield is our home base — we cover every postcode from S1 to S36. Whether
            you&apos;re in a Victorian terrace in Walkley, a semi in Ecclesall or a new build
            in Waverley, we wrap bedroom wardrobes, fitted furniture, bathroom vanity units
            and office pieces in premium architectural vinyl.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Same quality and process as our kitchen wrapping: free survey, fixed price,{" "}
            {siteConfig.guaranteeYears}-year written guarantee.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on all materials and workmanship. Named on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">What we wrap in Sheffield</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Bedroom fitted wardrobes and sliding door wardrobes</li>
            <li>Freestanding wardrobes and bedroom storage</li>
            <li>Bathroom vanity units, medicine cabinets and storage</li>
            <li>Home office desks, shelving and storage units</li>
            <li>Utility room cabinets and laundry storage</li>
            <li>Living room fitted units and entertainment furniture</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Sheffield housing — what we find</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sheffield&apos;s diverse housing stock ranges from Edwardian terraces in Walkley and
            Crookes with built-in alcove wardrobes, to 1970s semis in Gleadless and Woodhouse
            with melamine fitted wardrobes, through to modern developments in Waverley and
            Mosborough with flat-panel MDF units.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Flat-panel MDF and melamine furniture are the best substrates for vinyl — they&apos;re
            structurally sound and respond exceptionally well to wrapping. Older timber or
            veneer pieces need assessment but can often be wrapped if surfaces are properly prepared.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Finishes available</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut, grey wood), marble, concrete and
            stone effect. Perfect for coordinating or contrasting bedroom furniture with your
            kitchen wrap. We bring samples to the survey.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Pricing</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Furniture wrapping is priced per door or per unit, similar to kitchen doors —
            from around <strong>£45 per door</strong> depending on size and finish. Fixed
            price after free survey. Bundling furniture with a kitchen wrap often makes the
            job more efficient and cost-effective.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Sheffield areas covered</h2>
          <p className="mt-4 text-muted leading-relaxed">
            All Sheffield postcodes S1–S36, including: Hillsborough, Walkley, Crookes, Broomhill,
            Ecclesall, Nether Edge, Woodseats, Gleadless, Handsworth, Mosborough, Waverley, Manor,
            Firth Park, Parson Cross, Stannington, Fulwood, Totley, Dore, Dronfield, Chapeltown
            and all surrounding areas.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — furniture wrapping in Sheffield
          </h2>
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
            <h2 className="text-lg font-semibold text-foreground">Also in Sheffield</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/kitchen-wrapping-sheffield/" className="text-accent hover:underline">
                  Kitchen Wrapping Sheffield
                </Link>
              </li>
              <li>
                <Link href="/window-film/window-film-sheffield/" className="text-accent hover:underline">
                  Window Film Sheffield
                </Link>
              </li>
              <li>
                <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                  Commercial Vinyl Installation Sheffield
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Sheffield furniture?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts.{" "}
            {siteConfig.guaranteeYears}-year guarantee on every job.
          </p>
          <Link href="/contact/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
