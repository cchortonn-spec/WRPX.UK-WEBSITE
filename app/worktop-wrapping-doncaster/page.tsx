import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Worktop Wrapping Doncaster | Marble, Stone & Wood Vinyl | WRPX",
  description:
    "Worktop wrapping Doncaster — transform your countertops with heat-resistant vinyl. Marble, stone, wood-effect finishes. From £250. Free survey, 5-year guarantee.",
  alternates: { canonical: "https://www.wrpx.co.uk/worktop-wrapping-doncaster/" },
};

export default function WorktopWrappingDoncasterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does worktop wrapping cost in Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worktop wrapping in Doncaster starts from around £250 for a straight run. L-shaped and U-shaped kitchens typically range from £350 to £600. All prices are fixed after the free survey.",
        },
      },
      {
        "@type": "Question",
        name: "Is worktop vinyl waterproof and heat resistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use commercial-grade worktop vinyl designed for kitchen environments. The film is resistant to normal heat, steam and spills. Use a trivet for very hot pans — same as standard laminate advice.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap worktops with sink cutouts in Doncaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sink and hob cutouts, upstands and side returns are wrapped as part of the standard job. No plumbing disconnection required.",
        },
      },
      {
        "@type": "Question",
        name: "How long does worktop wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard Doncaster kitchen worktop wrap takes half a day to a full working day. Your kitchen remains accessible throughout — no need to move out.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover Doncaster and surrounding areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WRPX covers Doncaster and surrounding areas including Armthorpe, Bessacarr, Balby, Edlington, Rossington, Scawthorpe, Wheatley Hills and the wider DN postcode area.",
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Worktop Wrapping Doncaster — New Countertop Look Without Replacement
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Dated or damaged worktops don&apos;t need to be replaced. We wrap your existing countertops
            in premium heat-resistant vinyl — marble, stone, wood-effect or solid colour — in a
            single visit. No disconnecting the sink, no structural work, no days of disruption.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Doncaster homes range from Victorian terraces in Hyde Park and Balby to modern estates
            in Bessacarr and Armthorpe — and worktop wrapping works across all of them. We bring
            samples to the survey so you choose the right finish in your own kitchen light.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">Popular finishes in Doncaster</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li><strong>White Calacatta marble</strong> — clean, bright, popular in kitchen refreshes</li>
            <li><strong>Dark concrete and slate</strong> — bold modern look, suits contemporary cabinetry</li>
            <li><strong>Light oak wood grain</strong> — warm tone that pairs well with dark cabinets</li>
            <li><strong>Matt black or anthracite</strong> — statement finish, increasingly requested</li>
          </ul>
          <figure className="card-float mt-8 overflow-hidden">
            <div className="relative aspect-[3/4] sm:aspect-[4/3]">
              <Image
                src="/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-worktop-detail-01.jpeg"
                alt="White marble high-gloss worktop wrap Doncaster — Calacatta-style vinyl finish close-up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <figcaption className="border-t border-border bg-card p-4 text-sm text-muted">
              <span className="font-medium text-foreground">White marble worktop wrap, Doncaster</span>
              <span className="mt-1 block">
                High-gloss Calacatta-style vinyl — one of the most requested finishes locally.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Worktop wrapping costs — Doncaster
          </h2>
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
                  <td className="py-3 pr-4">Upstands and splashback panel</td>
                  <td className="py-3">add from £80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            Fixed price confirmed after your free survey. See our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            for a full breakdown.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — Doncaster
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">How much does worktop wrapping cost in Doncaster?</h3>
              <p className="mt-2 text-muted">From £250 for a straight run. Fixed quote given after the free survey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Is the vinyl heat and waterproof?</h3>
              <p className="mt-2 text-muted">Yes. Commercial-grade worktop vinyl handles normal kitchen heat, steam and spills. Use a trivet for very hot pans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Can you wrap around my sink?</h3>
              <p className="mt-2 text-muted">Yes. Sink and hob cutouts are wrapped and sealed as standard. No plumbing disconnection needed.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you cover Doncaster and nearby towns?</h3>
              <p className="mt-2 text-muted">Yes — Armthorpe, Bessacarr, Balby, Edlington, Rossington, Scawthorpe, Wheatley Hills and the wider DN postcode area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Also looking for kitchen door wrapping in Doncaster?</h2>
            <p className="mt-3 text-muted">
              Combine worktop and door wrapping for a full kitchen transformation in one visit.
            </p>
            <Link href="/kitchen-wrapping-doncaster/" className="mt-3 inline-block text-sm text-accent hover:underline">
              Kitchen wrapping Doncaster →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card-float p-6">
            <h2 className="text-lg font-semibold text-foreground">Worktop wrapping in other areas</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {[
                { city: "Sheffield", href: "/worktop-wrapping-sheffield/" },
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
            Ready to transform your Doncaster worktops?
          </h2>
          <p className="text-muted">Free survey. Fixed price. {siteConfig.guaranteeYears}-year guarantee.</p>
          <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
            Get a Free Quote
          </Link>
          <p className="text-muted">Or call <strong>{siteConfig.phone}</strong></p>
        </div>
      </section>
    </div>
  );
}
