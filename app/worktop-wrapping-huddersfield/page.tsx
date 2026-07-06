import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Huddersfield | Vinyl Countertop Specialist | WRPX",
  description:
    "Worktop wrapping Huddersfield — transform countertops in a day with heat-resistant vinyl. Marble, stone, wood-effect from £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-huddersfield/" },
};

export default function WorktopWrappingHuddersfieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Huddersfield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Huddersfield starts from around £250 for a straight run, rising to £350–£600 for L-shape or U-shape kitchens. Fixed price confirmed after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Huddersfield and surrounding areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Huddersfield and surrounding areas including Mirfield, Dewsbury, Brighouse, Holmfirth, Slaithwaite, Marsden, Meltham and the wider HD postcode area.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap worktops with existing sink or hob cutouts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We wrap all cutouts and seal the edges as standard. No plumbing disconnection required.",
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
            Worktop Wrapping Huddersfield — New Countertop Look Without the Cost
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Huddersfield homeowners choose worktop wrapping to modernise their kitchen without the
            expense of a new worktop. We wrap your existing countertops in premium heat-resistant
            vinyl — marble, stone, wood-effect or solid colour — completed in a single day
            from £250.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee. Fixed quote after free survey. No hidden costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Costs — Huddersfield worktop wrapping</h2>
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
          <h2 className="text-xl font-semibold text-foreground">FAQs — Huddersfield</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground">Cost in Huddersfield?</h3>
              <p className="mt-2 text-muted">From £250. Fixed price after free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Huddersfield and nearby?</h3>
              <p className="mt-2 text-muted">Yes — Mirfield, Dewsbury, Brighouse, Holmfirth, Slaithwaite, Marsden, Meltham and wider HD postcodes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you work around my sink and hob?</h3>
              <p className="mt-2 text-muted">Yes — cutouts and upstands wrapped as standard. No plumbing needed.</p>
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
                { city: "Leeds", href: "/worktop-wrapping-leeds/" },
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Rotherham", href: "/worktop-wrapping-rotherham/" },
                { city: "Doncaster", href: "/worktop-wrapping-doncaster/" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-accent hover:underline">{item.city}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Transform your Huddersfield worktops</h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
