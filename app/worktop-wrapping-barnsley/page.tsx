import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Barnsley | Vinyl Countertop Transformation | WRPX",
  description:
    "Worktop wrapping Barnsley — transform your countertops in a single day with premium vinyl. Marble, stone, wood-effect. From £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-barnsley/" },
};

export default function WorktopWrappingBarnsleyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Barnsley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Barnsley starts from around £250 for a straight run. Larger kitchens with L-shaped or U-shaped worktops range from £350 to £600. We give a fixed quote after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Is vinyl worktop wrapping durable for everyday kitchen use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use commercial-grade heat-resistant vinyl rated for kitchen environments. It handles normal heat, moisture and daily cleaning. Use a trivet for very hot pans as standard practice.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap worktops with sink and hob cutouts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We wrap around sink and hob cutouts as standard, sealing all edges. Upstands and side returns are included. No plumbing work required.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Barnsley and surrounding villages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Barnsley town and surrounding areas including Wombwell, Hoyland, Penistone, Dodworth, Darfield, Cudworth, Monk Bretton and the wider S70–S75 postcode area.",
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
            Worktop Wrapping Barnsley — Premium Vinyl Countertop Transformation
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Give your Barnsley kitchen a fresh look without the cost and disruption of replacing
            worktops. We apply heat-resistant vinyl directly to your existing countertops —
            marble effect, stone, wood grain or solid colour — completed in a single day, no
            plumbing disconnection required.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on materials and workmanship. Fixed price — no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Why wrap your Barnsley worktops?</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="card-float p-5">
              <p className="font-semibold text-foreground">Cost</p>
              <p className="mt-2 text-sm text-muted">
                Typically 70–80% less than replacing worktops outright.
              </p>
            </div>
            <div className="card-float p-5">
              <p className="font-semibold text-foreground">Time</p>
              <p className="mt-2 text-sm text-muted">
                Half a day to one day. Kitchen stays functional.
              </p>
            </div>
            <div className="card-float p-5">
              <p className="font-semibold text-foreground">Result</p>
              <p className="mt-2 text-sm text-muted">
                Marble, stone, wood or solid colour — {siteConfig.guaranteeYears}-year guaranteed finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Costs — Barnsley worktop wrapping</h2>
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
                  <td className="py-3 pr-4">U-shape / island kitchen</td>
                  <td className="py-3">from £450</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">FAQs — worktop wrapping Barnsley</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground">How much does it cost in Barnsley?</h3>
              <p className="mt-2 text-muted">From £250. Fixed quote after free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is it durable?</h3>
              <p className="mt-2 text-muted">Yes — commercial-grade vinyl with {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Barnsley and villages?</h3>
              <p className="mt-2 text-muted">Yes — Wombwell, Hoyland, Penistone, Dodworth, Darfield, Cudworth, Monk Bretton and the wider S70–S75 area.</p>
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
                { city: "Huddersfield", href: "/worktop-wrapping-huddersfield/" },
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
          <h2 className="text-2xl font-semibold text-foreground">Transform your Barnsley worktops</h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
