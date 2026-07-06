import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Rotherham | Vinyl Countertop Specialist | WRPX",
  description:
    "Worktop wrapping Rotherham — heat-resistant vinyl in marble, stone and wood-effect. Transform countertops in one day from £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-rotherham/" },
};

export default function WorktopWrappingRotherhamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Rotherham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Rotherham starts from around £250 for a straight run, rising to £350–£600 for L-shape or U-shape kitchens. Fixed price confirmed after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Will the vinyl last in a busy Rotherham kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use commercial-grade worktop vinyl designed for kitchen environments — heat resistant to normal cooking temperatures, moisture proof, and easy to clean. Backed by a 5-year guarantee.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Rotherham and surrounding areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Rotherham town and surrounding areas including Wickersley, Maltby, Rawmarsh, Swinton, Wath upon Dearne, Dinnington, Brinsworth and the wider S60–S66 postcode area.",
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
            Worktop Wrapping Rotherham — Transform Your Kitchen Countertops
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Rotherham homeowners choose worktop wrapping to update dated laminate countertops without
            the cost or disruption of full replacement. We apply commercial-grade heat-resistant
            vinyl to your existing worktops — marble, stone, wood-effect or solid colour — in
            one visit with no plumbing work required.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee. Free survey, fixed quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Popular finishes — Rotherham</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>White and grey marble effect — light, modern feel</li>
            <li>Dark slate and concrete — bold contrast with light cabinets</li>
            <li>Light and dark oak wood grain — warm, natural finish</li>
            <li>Matt black / anthracite — contemporary, pairs well with any colour door</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Worktop wrapping costs in Rotherham</h2>
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
                  <td className="py-3 pr-4">L-shape (4–5m)</td>
                  <td className="py-3">from £350</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">U-shape or large kitchen</td>
                  <td className="py-3">from £450</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">Full cost breakdown →</Link>
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">FAQs — Rotherham worktop wrapping</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground">How much does it cost in Rotherham?</h3>
              <p className="mt-2 text-muted">From £250. Fixed quote after free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is it heat resistant?</h3>
              <p className="mt-2 text-muted">Yes — commercial-grade vinyl rated for kitchen temperatures. {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Rotherham?</h3>
              <p className="mt-2 text-muted">Yes — Wickersley, Maltby, Rawmarsh, Swinton, Wath upon Dearne, Dinnington, Brinsworth and the wider S60–S66 area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Also need kitchen door wrapping in Rotherham?</h2>
            <p className="mt-2 text-muted">Combine worktop and door wrapping for a full transformation in one visit.</p>
            <Link href="/kitchen-wrapping-rotherham/" className="mt-2 inline-block text-sm text-accent hover:underline">Kitchen wrapping Rotherham →</Link>
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
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Leeds", href: "/worktop-wrapping-leeds/" },
                { city: "Chesterfield", href: "/worktop-wrapping-chesterfield/" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-accent hover:underline">{item.city}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Transform your Rotherham worktops</h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
