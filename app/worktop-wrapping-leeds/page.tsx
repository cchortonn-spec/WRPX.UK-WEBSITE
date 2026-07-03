import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Leeds | Marble, Stone & Wood Vinyl Countertops | WRPX",
  description:
    "Worktop wrapping Leeds — transform your countertops in one day. Heat-resistant marble, stone and wood-effect vinyl from £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-leeds/" },
};

export default function WorktopWrappingLeedsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Leeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Leeds starts from around £250 for a straight run. L-shaped and U-shaped kitchens range from £350–£600. All prices are fixed after the free survey — no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "How does worktop wrapping compare to replacing worktops in Leeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Replacing laminate worktops in Leeds typically costs £600–£1,200 plus fitting. Wrapping achieves the same visual transformation at 70–80% less cost, in a fraction of the time, without disconnecting the sink.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Leeds and surrounding areas for worktop wrapping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Leeds and surrounding areas including Headingley, Morley, Pudsey, Horsforth, Wetherby, Garforth, Roundhay, Chapel Allerton and the wider LS postcode area.",
        },
      },
      {
        "@type": "Question",
        name: "Is worktop wrapping permanent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is long-lasting — we back it with a 5-year guarantee. The vinyl is designed to stay in place for years. If you ever want to change the finish, it can be professionally removed and replaced.",
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
            Worktop Wrapping Leeds — New Countertop Look, No Replacement Needed
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds kitchens — from Victorian terraces in Hyde Park to modern apartments in Granary
            Wharf — all benefit from the same thing: a fresh worktop look at a fraction of
            replacement cost. We wrap your existing countertops in premium heat-resistant vinyl,
            in one visit, with no plumbing disruption.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            New laminate worktops in Leeds cost £600–£1,200 before fitting. Stone or quartz starts
            at £2,000 and takes weeks. Wrapping delivers a comparable result from £250, same day.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee. Fixed quote after free survey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Leeds worktop wrapping — finishes</h2>
          <p className="mt-4 text-muted">Popular choices from Leeds clients:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
            <li><strong>Calacatta white marble</strong> — timeless, brightens any kitchen</li>
            <li><strong>Grey Statuario marble</strong> — modern, pairs with anthracite doors</li>
            <li><strong>Dark concrete / industrial slate</strong> — popular in converted properties and modern flats</li>
            <li><strong>Natural oak or walnut grain</strong> — warm, works with any cabinet colour</li>
            <li><strong>Matt black / dark anthracite</strong> — high-contrast statement look</li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            We bring samples to every survey — choose in your own kitchen light.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Worktop wrapping costs — Leeds</h2>
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
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">U-shape / large kitchen</td>
                  <td className="py-3">from £450</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Upstands / splashback panels</td>
                  <td className="py-3">add from £80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            All prices fixed after free survey.{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">Full cost guide →</Link>
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">FAQs — worktop wrapping Leeds</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-foreground">How much in Leeds?</h3>
              <p className="mt-2 text-muted">From £250. Fixed quote after free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How does it compare to replacing worktops?</h3>
              <p className="mt-2 text-muted">Replacement laminate costs £600–£1,200+ in Leeds. Wrapping achieves the same look at 70–80% less, same day.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is it permanent?</h3>
              <p className="mt-2 text-muted">Long-lasting with a {siteConfig.guaranteeYears}-year guarantee. Can be professionally removed and replaced if you want to update the finish later.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover all of Leeds?</h3>
              <p className="mt-2 text-muted">Yes — Headingley, Morley, Pudsey, Horsforth, Wetherby, Garforth, Roundhay, Chapel Allerton and wider LS postcodes.</p>
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
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Rotherham", href: "/worktop-wrapping-rotherham/" },
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
          <h2 className="text-2xl font-semibold text-foreground">Transform your Leeds worktops</h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">Get a Free Quote</Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
