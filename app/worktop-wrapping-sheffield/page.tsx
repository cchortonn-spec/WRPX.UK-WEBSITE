import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Sheffield | Marble, Stone & Wood Effect Vinyl | WRPX",
  description:
    "Worktop wrapping Sheffield — transform countertops with heat-resistant marble, stone and wood-effect vinyl. From £250. WRPX specialist, 5-year guarantee, free survey.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-sheffield/" },
};

export default function WorktopWrappingSheffieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Sheffield typically starts from around £250 for a standard run. A larger U-shaped kitchen worktop including upstands can range from £400–£600. We give a fixed price after the free survey — no surprises on the day.",
        },
      },
      {
        "@type": "Question",
        name: "Is wrapped worktop heat resistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use commercial-grade worktop vinyl rated for kitchen temperatures. Always use a trivet for very hot pans, but the film is designed for normal kitchen heat exposure including steam and splashes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap a worktop with a sink or hob cutout?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We wrap worktops with sink and hob cutouts as standard. The film is trimmed and sealed to the cutout edge. Upstands and side returns are included in the quote.",
        },
      },
      {
        "@type": "Question",
        name: "How long does worktop wrapping take in Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard kitchen worktop is usually done within half a day to a full day. Your kitchen stays functional — no need to disconnect the sink or move appliances.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover the whole of Sheffield for worktop wrapping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we cover all Sheffield postcodes, S1 through S36. Regular enquiries come from Ecclesall, Nether Edge, Crookes, Hillsborough, Woodseats, Mosborough, Waverley and across the city.",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3811,
      longitude: -1.4701,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Worktop Wrapping Sheffield — Transform Your Countertops Without Replacing Them
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Your worktop is the hardest-working surface in your kitchen. Chips, stains and a dated
            finish are easy to fix without the cost of replacement. We apply premium heat-resistant
            vinyl directly to your existing countertops — marble, stone, wood effect or solid colour
            — and your kitchen is back in use the same day.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Replacing worktops in Sheffield typically costs £600–£1,500 for laminate and upwards of
            £2,000 for stone. Wrapping achieves the same transformation for a fraction of that, with
            no disconnecting the sink, no messy removal, and no waiting weeks for templating.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on materials and workmanship. Named on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available — Sheffield worktop wrapping
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We use commercial-grade worktop vinyl in a range of designs. Popular choices in Sheffield:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>
              <strong>Marble effect</strong> — Calacatta white, Nero Marquina black, Grey
              Statuario. Clean, modern, popular in older Sheffield homes being updated.
            </li>
            <li>
              <strong>Stone and concrete</strong> — Slate grey, industrial concrete, dark stone.
              Popular in contemporary open-plan kitchens.
            </li>
            <li>
              <strong>Wood grain</strong> — Light oak, walnut, dark wood. Warm look without the
              maintenance of real wood.
            </li>
            <li>
              <strong>Solid colours</strong> — Matt or gloss black, white, anthracite. Pairs well
              with any cabinet finish.
            </li>
          </ul>
          <p className="mt-4 text-muted">
            We bring physical samples to the survey so you choose in your own kitchen lighting, not
            on a screen.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap — and what we can&apos;t
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            <strong>Suitable for wrapping:</strong> Laminate worktops, solid wood (properly prepared),
            flat MDF-based surfaces, post-formed edges. Sink cutouts, hob cutouts and upstands are
            wrapped as standard.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            <strong>Not suitable:</strong> Warped or delaminating laminate, surfaces with major
            structural damage, heavily uneven joints. We check suitability at the free survey and
            give you an honest answer before taking any payment.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Sheffield worktop wrapping — typical costs
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-muted">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Worktop type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Typical Sheffield cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Straight run (2–3m)</td>
                  <td className="py-3">from £250</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">L-shape (4–5m inc. corner)</td>
                  <td className="py-3">from £350</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">U-shape / island</td>
                  <td className="py-3">from £450</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">With upstands and splashback panel</td>
                  <td className="py-3">add from £80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            Fixed price given after the free survey. No additional charges mid-job.
            See our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              full kitchen wrapping cost guide
            </Link>{" "}
            for a broader breakdown.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            The process — Sheffield worktop wrap
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li>
              <strong>Free survey</strong> — we assess your worktop condition, measure accurately and
              confirm suitability. No obligation.
            </li>
            <li>
              <strong>Fixed quote</strong> — confirmed in writing before any work starts. The price
              doesn&apos;t change.
            </li>
            <li>
              <strong>Surface preparation</strong> — cleaning, degreasing and light sanding where
              needed. This is what makes the difference between a wrap that lasts and one that
              doesn&apos;t.
            </li>
            <li>
              <strong>Film application</strong> — applied in sections, joints trimmed and sealed,
              cutouts completed. No need to remove the sink or appliances.
            </li>
            <li>
              <strong>Inspection</strong> — we check every edge and seam before we leave.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Combine with a full kitchen wrap
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most of our Sheffield worktop wrapping jobs run alongside kitchen door wrapping. If
            you&apos;re updating your worktops, wrapping the doors at the same time keeps labour
            costs down — one visit, one fixed price, complete transformation. See our{" "}
            <Link href="/kitchen-wrapping-sheffield/" className="text-accent hover:underline">
              Sheffield kitchen wrapping page
            </Link>{" "}
            for full details.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — worktop wrapping Sheffield
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How much does worktop wrapping cost in Sheffield?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Worktop wrapping in Sheffield starts from around £250 for a standard straight run.
                L-shaped and U-shaped kitchens range from £350–£600. We give a fixed price after the
                free survey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is wrapped worktop heat resistant?</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. We use commercial-grade worktop vinyl rated for normal kitchen temperatures. Use
                a trivet for very hot pans — same as you would with laminate. The film handles normal
                heat, steam and spills without issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you wrap a worktop with a sink or hob cutout?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes. Sink and hob cutouts are wrapped and sealed as standard. No need to disconnect
                plumbing or move the hob.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                How long does worktop wrapping take in Sheffield?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Usually half a day to a full day depending on worktop size. Your kitchen is functional
                throughout — no need to move out or eat takeaway for a week.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover all of Sheffield?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes — S1 through S36 and surrounding areas including Ecclesall, Nether Edge, Crookes,
                Hillsborough, Woodseats, Mosborough, Waverley, Handsworth and across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Worktop wrapping in other areas</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {[
                { city: "Doncaster", href: "/worktop-wrapping-doncaster/" },
                { city: "Leeds", href: "/worktop-wrapping-leeds/" },
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Rotherham", href: "/worktop-wrapping-rotherham/" },
                { city: "Huddersfield", href: "/worktop-wrapping-huddersfield/" },
                { city: "Chesterfield", href: "/worktop-wrapping-chesterfield/" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-accent hover:underline">
                  {item.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Sheffield worktops?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts.{" "}
            {siteConfig.guaranteeYears}-year guarantee on every job.
          </p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Get a Free Quote
          </Link>
          <p className="text-muted">
            Or call <strong>{siteConfig.phone}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
