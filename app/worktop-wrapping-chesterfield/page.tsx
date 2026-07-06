import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Chesterfield | Vinyl Countertop Transformation | WRPX",
  description:
    "Worktop wrapping Chesterfield — marble, stone and wood-effect vinyl applied to existing countertops. From £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-chesterfield/" },
};

export default function WorktopWrappingChesterfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Chesterfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Chesterfield starts from around £250 for a straight run. L-shape kitchens range from £350 and U-shape from £450. Fixed price given after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Chesterfield and North Derbyshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Chesterfield and surrounding areas including Dronfield, Staveley, Brimington, Hasland, Eckington, Clay Cross, Bolsover and the wider S40–S45 postcode area.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the job take in Chesterfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard Chesterfield kitchen worktop wrap takes half a day to a full working day. Your kitchen stays functional throughout.",
        },
      },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Worktop Wrapping Chesterfield — Transform Your Countertops
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield and North Derbyshire homeowners choose worktop wrapping when their kitchen
            layout is solid but the surface needs updating. We apply commercial-grade vinyl directly
            to your existing worktops — marble, stone, wood grain or solid colour — in a single
            visit from £250.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee. Fixed price after free survey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Costs — Chesterfield</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-muted">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Worktop type</th>
                  <th className="py-2 text-left font-semibold text-foreground">Typical cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Straight run (2–3m)</td>
                  <td className="py-3">from £250</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">L-shape</td>
                  <td className="py-3">from £350</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">U-shape / large kitchen</td>
                  <td className="py-3">from £450</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">FAQs — Chesterfield worktop wrapping</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground">Cost in Chesterfield?</h3>
              <p className="mt-2 text-muted">From £250 for a straight run. Fixed quote after free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Chesterfield?</h3>
              <p className="mt-2 text-muted">Yes — Dronfield, Staveley, Brimington, Hasland, Eckington, Clay Cross, Bolsover and wider S40–S45 area.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How long does it take?</h3>
              <p className="mt-2 text-muted">Half a day to a full day. Kitchen stays functional throughout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Worktop wrapping nearby</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {[
                { city: "Sheffield", href: "/worktop-wrapping-sheffield/" },
                { city: "Doncaster", href: "/worktop-wrapping-doncaster/" },
                { city: "Rotherham", href: "/worktop-wrapping-rotherham/" },
                { city: "Leeds", href: "/worktop-wrapping-leeds/" },
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Huddersfield", href: "/worktop-wrapping-huddersfield/" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-accent hover:underline">{item.city}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Transform your Chesterfield worktops</h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
