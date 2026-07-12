import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wall Wrap Installation Yorkshire — B2B Subcontract Partner for Sign & Print Companies | WRPX",
  description:
    "Yorkshire-wide wall wrap installation on a subcontract basis for sign companies, print management firms and agencies. Branded murals, feature walls, large-format vinyls — WRPX installs what you supply.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/wall-wrap-installation-yorkshire/",
  },
};

const serviceSchema = getServiceSchema(
  "Wall wrap installation Yorkshire — subcontract partner for sign and print companies",
  "Yorkshire-wide subcontract wall wrap and large-format vinyl installation for sign companies, print management firms and agencies. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you install wall wraps on subcontract across multiple Yorkshire locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site wall wrap programmes across Yorkshire are a core part of what we do. We cover Sheffield, Leeds, Bradford, Huddersfield, Doncaster, Rotherham, Barnsley, Wakefield and surrounding areas under a single subcontract arrangement, with consistent standards and documentation across all sites.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for wall wrap jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend with unbranded or re-branded vehicles. Your client sees your company throughout the installation process. We provide photo documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What substrates can you install wall wraps to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install to painted plasterboard, MDF, timber, glass, metal panels and most commercial substrate types. We assess the surface before installing and flag any adhesion risks — we do not install to substrates where finish quality cannot be guaranteed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply the print or just install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Installation-only. You supply the printed, cut and laminated material. We handle surface preparation, seam planning, installation and photographic sign-off. This keeps the workflow clean — your print quality stays under your control.",
      },
    },
  ],
};

export default function WallWrapInstallationYorkshirePage() {
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
            Subcontract · Wall Wrap Installation · Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Wall Wrap Installation Yorkshire — Subcontract Partner
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides subcontract wall wrap installation across Yorkshire for{" "}
            <strong className="text-foreground">sign companies, print management firms and agencies</strong>{" "}
            managing brand campaigns, retail rollouts and interior graphics programmes. We install
            branded murals, feature walls, large-format vinyls and campaign graphics — on your
            instructions, under your brand, with documented sign-off at every site.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Yorkshire-wide coverage</strong> — Sheffield, Leeds,
                Bradford, Huddersfield, Doncaster, Rotherham, Barnsley, Wakefield and beyond
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Surface assessment before every job — no installs onto unsuitable substrates</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per site — before prep, during installation, completed sign-off</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                vinyl application experience — panel planning and seam management included
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a wall wrap subcontract job
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

      {/* Why wall wrap subcontract */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why sign companies outsource wall wrap installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wall wraps are one of the more technically demanding installation types — large-format
              panels require careful seam planning, surface preparation that goes beyond wiping down
              a window, and an installer with experience reading how different substrates behave
              under heat and tension. Many sign companies produce the print in-house but outsource
              the installation to a specialist who can guarantee the finished result regardless of
              what the wall throws at them.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX handles that installation role across Yorkshire. We assess each wall before
              committing to an installation plan — checking paint bond, surface texture, moisture
              and seam sight-lines. If a wall isn&apos;t ready, we tell you before we start, not
              after you&apos;ve had a failed install to deal with. Your client sees a finished
              result. We send you photographic documentation from start to sign-off.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For multi-site brand rollouts — the same wall graphic across ten Yorkshire locations —
              we coordinate across all sites under a single programme. One crew, consistent finish,
              consolidated records. Your agency or print management client gets a single signed-off
              record for the full campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Types of wall wrap jobs */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Wall wrap projects we handle on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Retail brand murals &amp; campaign graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal campaign graphics, brand murals and promotional wall wraps in retail
                environments. We install to the brief — exact panel placement, seam management,
                consistent positioning across multi-site rollouts.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Office &amp; reception feature walls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand feature walls, company values graphics, reception statements and directional
                messaging for office, co-working and corporate environments across Yorkshire.
                Minimal disruption to working operations during installation.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hospitality &amp; leisure interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height wall wraps, feature panels and branded interiors for restaurants, bars,
                hotels and leisure facilities. Substrate assessment critical in these environments
                — we check adhesion before every install.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Industrial &amp; warehouse wall graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Safety graphics, directional wayfinding, brand vinyls and compliance messaging for
                warehouse, manufacturing and industrial environments. Materials specified to
                environment — temperature resistance and adhesive type matched to substrate.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Yorkshire brand rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The same wall graphic across multiple Yorkshire sites — five stores, ten branches,
                twenty locations. We coordinate the full programme: scheduling, site prep assessment,
                installation sequencing and consolidated documentation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Removal &amp; re-installation (rebrands)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand refresh programmes — removing existing wall vinyls cleanly without substrate
                damage, surface preparation and new install in one visit where scheduling allows.
                Yorkshire-wide rebrand programmes coordinated as a single subcontract job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              How the subcontract wall wrap process works
            </h2>
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  1
                </span>
                <div>
                  <strong className="text-foreground">Brief and material supply</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    You send us the installation brief — site, wall dimensions, panel layout intent
                    and your supplied materials. Printed, laminated and rolled — ready for
                    installation. We don&apos;t supply print.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  2
                </span>
                <div>
                  <strong className="text-foreground">Site assessment</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    We assess the wall before committing to installation — surface condition, paint
                    bond, moisture, texture and seam sight-lines. Any surface issues are flagged to
                    you before we start, not after a failed install.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  3
                </span>
                <div>
                  <strong className="text-foreground">Installation</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Panel layout planned against sight-lines and the brief. Seams managed to
                    minimise visibility in customer-facing areas. Surface prepared and material
                    applied using appropriate technique for the substrate.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  4
                </span>
                <div>
                  <strong className="text-foreground">Photographic sign-off</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    Before-prep, during-installation and completed photos provided per site. For
                    multi-site Yorkshire programmes, consolidated documentation across all locations
                    in your agreed format.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Yorkshire coverage for wall wrap installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover wall wrap installation across South Yorkshire, West Yorkshire and the M1
              corridor south to Nottingham. Regular operating cities include:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Bradford · Huddersfield · Doncaster · Rotherham · Barnsley ·
                Wakefield · Chesterfield · Nottingham
              </strong>
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
              <Link href="/print-company-installation-partner/" className="text-accent hover:underline">
                Print company partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — wall wrap installation on subcontract
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Can you install wall wraps on subcontract across multiple Yorkshire locations?",
                a: "Yes — multi-site wall wrap programmes are core to what we do. We cover South Yorkshire, West Yorkshire and the M1 corridor under a single arrangement, with consistent standards and documentation across all sites.",
              },
              {
                q: "Do you work white-label for wall wrap installations?",
                a: "Yes — white-label by default. Unbranded or re-branded vehicles, your paperwork on site. Your client sees your company throughout.",
              },
              {
                q: "What substrates can you install wall wraps to?",
                a: "Painted plasterboard, MDF, timber, glass and metal panels are the most common. We assess the surface before starting and flag adhesion risks in advance — we don't install to substrates where the finish can't be guaranteed.",
              },
              {
                q: "Do you supply the print or just install?",
                a: "Installation-only. You supply the printed, laminated material. We handle surface preparation, panel layout, seam management and sign-off. Keeps your print quality under your control.",
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
      <section className="px-4 pb-20 pt-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wall wrap installation Yorkshire — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the wall and your supplied material spec. We&apos;ll confirm
              availability, assess any substrate concerns and give you a straight installation quote.
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
