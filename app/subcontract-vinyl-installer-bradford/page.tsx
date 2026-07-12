import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Bradford — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Bradford and West Yorkshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-bradford/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Bradford — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Bradford and West Yorkshire. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to Bradford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bradford is within our West Yorkshire operating area — approximately 30 minutes from our South Yorkshire base via the M606 and M62 interchange. We cover The Broadway Bradford, Forster Square Retail Park, Thornton Road and Bradford city centre commercial estates as part of our regular West Yorkshire schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Bradford jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Bradford client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Bradford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle Bradford as part of a wider West Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Bradford sits between Leeds and Huddersfield on our West Yorkshire circuit. If your programme covers Bradford, Leeds and Huddersfield, we can handle the full West Yorkshire portion under a single subcontract arrangement — consistent standards, one crew, no inter-city coordination overhead.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBradfordPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Bradford &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Bradford &amp; West Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Bradford and West Yorkshire. We install window graphics,
            wall wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under
            your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Bradford is part of our West Yorkshire circuit</strong>{" "}
                — alongside Leeds and Huddersfield
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Bradford subcontract job
            </Link>
            <p className="text-sm text-muted">
              Call{" "}
              <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Bradford */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              West Yorkshire coverage — Bradford, Leeds, Huddersfield as one programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Bradford is one of West Yorkshire&apos;s largest commercial cities — The Broadway shopping
              centre, Forster Square Retail Park, Thornton Road and Manningham Lane all generate
              regular demand for graphics installation. For sign companies and print management firms
              working across West Yorkshire, having one installer who covers Bradford, Leeds and
              Huddersfield under the same arrangement removes the coordination headache that comes
              with briefing separate local teams for each city.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Bradford sits on the M606 spur off the M62, 12 miles from Leeds and 15 from
              Huddersfield — all three cities fall naturally on the same circuit. We cover Bradford
              city centre, the Canal Road industrial corridor, Shipley and surrounding commercial
              estates as part of our regular West Yorkshire operation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Bradford
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Bradford city centre, The Broadway, Forster Square and Canal Road
                commercial units all covered.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Bradford. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Bradford shop fronts,
                fascias and external surfaces. Consistent finish across all locations — whether
                it&apos;s one Bradford site or a West Yorkshire-wide rollout.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers.
                Bradford and West Yorkshire-based fleet programmes welcome. Photographic sign-off
                per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor graphics, anti-slip film, wayfinding and branded floor wraps.
                Applied to spec for retail, hospitality and commercial environments — same
                standards for Bradford as for any Yorkshire location.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site West Yorkshire rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Bradford as part of a wider West Yorkshire programme — Leeds, Bradford, Huddersfield
                in one coordinated campaign. One crew, consistent standards, consolidated records
                across all sites.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Bradford &amp; West Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Bradford is part of our West Yorkshire operating area. We cover Bradford city centre,
              The Broadway, Forster Square, Canal Road, Shipley and the surrounding commercial
              and industrial estates. From Bradford we also regularly work into Keighley, Bingley,
              Saltaire and Ilkley.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Leeds · Bradford · Huddersfield · Sheffield · Doncaster · Wakefield
              </strong>{" "}
              and the wider Yorkshire region.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Bradford
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to Bradford?",
                a: "Bradford is within our West Yorkshire area — approximately 30 minutes from our South Yorkshire base. We cover the city centre, The Broadway, Forster Square Retail Park, Canal Road and surrounding commercial estates regularly.",
              },
              {
                q: "Do you work under our brand with Bradford clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Bradford client sees your brand.",
              },
              {
                q: "Can you handle Bradford as part of a wider West Yorkshire programme?",
                a: "Yes. Bradford, Leeds and Huddersfield sit naturally on the same circuit. We can cover all three as part of one subcontract arrangement — no need to brief separate installers for each West Yorkshire city.",
              },
              {
                q: "How do you document Bradford installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site West Yorkshire programmes, consolidated records across all Bradford, Leeds and Huddersfield locations.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-background p-6">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Subcontract installation in Bradford — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, the site and your timeline. We&apos;ll confirm availability and
              give you a straight installation quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: {siteConfig.phone}</strong> ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact/" className="btn-primary inline-block">
                Contact WRPX
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
