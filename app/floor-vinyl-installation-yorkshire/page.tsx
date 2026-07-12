import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Floor Vinyl Installation Yorkshire — B2B Subcontract Partner for Sign & Print Companies | WRPX",
  description:
    "Yorkshire-wide floor vinyl installation on a subcontract basis for sign companies, print management firms and agencies. Promotional floor graphics, anti-slip film, wayfinding vinyls — WRPX installs what you supply.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/floor-vinyl-installation-yorkshire/",
  },
};

const serviceSchema = getServiceSchema(
  "Floor vinyl installation Yorkshire — subcontract partner for sign and print companies",
  "Yorkshire-wide subcontract floor vinyl and floor graphics installation for sign companies, print management firms and agencies. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you install floor vinyl on subcontract across multiple Yorkshire locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site floor vinyl programmes across Yorkshire are a core part of what we do. We cover Sheffield, Leeds, Bradford, Huddersfield, Doncaster, Rotherham, Barnsley, Wakefield, York and surrounding areas under a single subcontract arrangement, with consistent standards and documentation across all sites.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for floor vinyl installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend with unbranded or re-branded vehicles. Your client sees your company throughout the installation process. We provide photo documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What surfaces can you install floor vinyl to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install to smooth concrete, sealed screed, vinyl composite tile (VCT), ceramic tile, hardwood and most commercial flooring substrates. Textured or uneven floors are assessed before installation — we advise on suitability and flag any adhesion or safety concerns before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply the print or just install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Installation-only. You supply the printed, laminated and cut floor vinyl — specified to the environment (anti-slip rated where required). We handle surface preparation, positioning, installation and photographic sign-off. Your print quality stays under your control.",
      },
    },
  ],
};

export default function FloorVinylInstallationYorkshirePage() {
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
            Subcontract · Floor Vinyl Installation · Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Floor Vinyl Installation Yorkshire — Subcontract Partner
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides subcontract floor vinyl installation across Yorkshire for{" "}
            <strong className="text-foreground">sign companies, print management firms and agencies</strong>{" "}
            managing retail campaigns, brand rollouts and commercial graphics programmes. We install
            promotional floor graphics, anti-slip film, wayfinding vinyls and branded floor wraps —
            on your instructions, under your brand, with documented sign-off at every site.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Yorkshire-wide coverage</strong> — Sheffield, Leeds,
                Bradford, Huddersfield, Doncaster, Rotherham, Barnsley, Wakefield, York and beyond
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Surface assessment before every job — suitability and anti-slip compliance flagged in advance</span>
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
                vinyl application experience — substrate knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a floor vinyl subcontract job
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

      {/* Why floor vinyl subcontract */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why sign companies outsource floor vinyl installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Floor vinyl installation is where many sign companies draw the line on in-house
              capability. Unlike window graphics, a floor install means getting down to substrate
              level — assessing whether the floor is smooth enough, clean enough and structurally
              suitable before you commit material. Get it wrong and a promotional floor graphic
              lifts within a fortnight, a wayfinding strip peels at the edges, or — more
              seriously — an anti-slip vinyl fails compliance in a public space.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX handles that installation risk across Yorkshire. We assess each floor before
              committing to an installation plan — checking surface flatness, sealing condition,
              contamination and material compatibility. If a substrate presents risks, we flag
              them before installation, not after a warranty dispute. Your client gets a clean
              result. You get a photo pack from start to sign-off.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For multi-site retail campaigns — the same floor graphic across ten Yorkshire stores —
              we coordinate across all sites under a single programme. One crew, consistent
              installation standard, consolidated records. Your print management client or agency
              gets a single signed-off record for the full campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Types of floor vinyl jobs */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Floor vinyl projects we handle on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Retail promotional floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal campaign graphics, product launch floor vinyls and brand floor wraps in
                retail environments. Exact positioning to plan, clean edges, consistent finish
                across multi-site Yorkshire rollouts.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; directional floor vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional arrows, zone markers, queue-management vinyls and wayfinding systems
                for retail, hospitality, healthcare and corporate environments. Anti-slip rated
                materials specified where foot traffic demands it.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Anti-slip floor film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                R-rated anti-slip film for entrance areas, wet zones, steps and ramps in commercial
                environments across Yorkshire. Material specification and installation compliant
                with Slip Resistance Group (SRG) guidelines. Surface suitability assessed before
                installation — we don&apos;t install to substrates that would compromise compliance.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Branded floor wraps &amp; feature floors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-floor brand wraps, logo installations and feature floor graphics for retail,
                hospitality and office environments. Large-format floor panels positioned to seam
                plan — seams kept out of primary sight-lines wherever the substrate allows.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Industrial &amp; warehouse floor marking</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Floor safety markings, pedestrian lane indicators, bay markers and hazard vinyls for
                warehouse, manufacturing and industrial environments across Yorkshire. Heavy-duty
                materials specified for forklift and foot traffic environments.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Yorkshire floor rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The same floor graphic programme across multiple Yorkshire sites — five stores, ten
                branches, twenty locations. We coordinate the full programme: scheduling, substrate
                assessment, installation sequencing and consolidated documentation per site.
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

      {/* Process */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              How the subcontract floor vinyl process works
            </h2>
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  1
                </span>
                <div>
                  <strong className="text-foreground">Brief and material supply</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    You send us the installation brief — site, floor area, positioning intent and
                    your supplied materials. Printed, laminated, cut and rolled — anti-slip rated
                    where required. We don&apos;t supply print.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  2
                </span>
                <div>
                  <strong className="text-foreground">Surface assessment</strong>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    We assess the floor before committing to installation — flatness, sealing
                    condition, contamination and substrate compatibility with your specified material.
                    Any issues are flagged before we start, not after a failed install.
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
                    Surface cleaned and prepared. Material positioned to brief — seams managed to
                    minimise visibility in customer-facing areas. Edges sealed where the material
                    specification requires it.
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
              Yorkshire coverage for floor vinyl installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover floor vinyl installation across South Yorkshire, West Yorkshire and the M1
              corridor south to Nottingham. Regular operating cities include:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Bradford · Huddersfield · Doncaster · Rotherham · Barnsley ·
                Wakefield · York · Chesterfield · Nottingham
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
              <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                Wall wrap installation Yorkshire
              </Link>
              <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                Window graphics installation Yorkshire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — floor vinyl installation on subcontract
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Can you install floor vinyl on subcontract across multiple Yorkshire locations?",
                a: "Yes — multi-site floor vinyl programmes across Yorkshire are core to what we do. We cover South Yorkshire, West Yorkshire and the M1 corridor under a single arrangement, with consistent standards and documentation across all sites.",
              },
              {
                q: "Do you work white-label for floor vinyl installations?",
                a: "Yes — white-label by default. Unbranded or re-branded vehicles, your paperwork on site. Your client sees your company throughout.",
              },
              {
                q: "What surfaces can you install floor vinyl to?",
                a: "Smooth concrete, sealed screed, vinyl composite tile, ceramic tile and hardwood are the most common. We assess the surface before starting and flag adhesion or compliance risks in advance — we don't install where the finish or safety standard can't be guaranteed.",
              },
              {
                q: "Do you supply the print or just install?",
                a: "Installation-only. You supply the printed, laminated and cut floor vinyl — anti-slip rated where required. We handle surface preparation, positioning, installation and sign-off. Your print specification stays under your control.",
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

      {/* Related services */}
      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground">
            Other installation services — subcontract Yorkshire
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/wall-wrap-installation-yorkshire/" className="card-float bg-background p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground">Wall wrap installation</p>
              <p className="mt-1 text-sm text-muted">Branded murals, feature walls and large-format wall graphics</p>
            </Link>
            <Link href="/window-graphics-installation-yorkshire/" className="card-float bg-background p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground">Window graphics installation</p>
              <p className="mt-1 text-sm text-muted">Window vinyls, frosted film and campaign graphics</p>
            </Link>
            <Link href="/shop-front-graphics-installation/" className="card-float bg-background p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground">Shop front graphics installation</p>
              <p className="mt-1 text-sm text-muted">Fascia vinyls, external signage and brand graphics</p>
            </Link>
            <Link href="/vehicle-wrap-installation/" className="card-float bg-background p-5 hover:border-accent/40 transition-colors">
              <p className="font-medium text-foreground">Vehicle wrap installation</p>
              <p className="mt-1 text-sm text-muted">Full and partial vehicle wraps for print and sign companies</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Floor vinyl installation Yorkshire — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the floor area and your supplied material spec. We&apos;ll confirm
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
