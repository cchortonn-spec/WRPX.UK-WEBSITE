import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Huddersfield — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Huddersfield and West Yorkshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, M62 corridor coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-huddersfield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Huddersfield — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Huddersfield, West Yorkshire and the M62 corridor. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Huddersfield", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-huddersfield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to Huddersfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire and covers Huddersfield as part of our West Yorkshire operating area. Huddersfield is typically around 30 minutes from our base. We cover Huddersfield town centre, Brighouse, Mirfield, Dewsbury and the surrounding commercial and retail zones regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Huddersfield jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Huddersfield client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Huddersfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Huddersfield as part of a wider Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Huddersfield fits naturally into a West Yorkshire programme covering Leeds, Bradford and Wakefield, or a cross-Pennine programme using the M62. If your job spans multiple Yorkshire cities, we can handle the full Yorkshire portion as a single subcontract crew.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerHuddersfieldPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Subcontract · Huddersfield &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Huddersfield &amp; West Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Huddersfield and West Yorkshire. We install window graphics, wall
            wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under your brand,
            with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M62 corridor coverage</strong> — Huddersfield, Brighouse, Dewsbury, Mirfield and the M62 commercial belt
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo sign-off per site — before, during and completed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Installation-only — you supply, we install</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn-primary inline-block">
              Discuss a Huddersfield job
            </Link>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="inline-block rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/10"
            >
              Yorkshire subcontract hub
            </Link>
          </div>
        </div>
      </section>

      {/* Why Huddersfield */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              West Yorkshire coverage — Huddersfield on the M62 corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Huddersfield sits on the M62 between Leeds and Manchester — a natural staging point for
              programmes running across West Yorkshire and the Pennine commercial belt. The town centre,
              Brighouse retail and industrial estates, Mirfield, and the Dewsbury commercial corridor all
              generate consistent demand for sign and graphics installation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print houses managing Yorkshire-wide programmes, having one
              subcontract installer who covers Huddersfield, Leeds, Sheffield, and the M62 corridor under
              the same arrangement — same standards, same documentation format, same white-label terms —
              removes a coordination overhead on multi-site jobs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to
              apply. We prepare the surface, install to spec and deliver a signed-off photo pack. Your
              client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Huddersfield
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Huddersfield retail, commercial frontages and office environments —
                single site or multi-site programme.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Huddersfield. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Huddersfield shop fronts,
                fascias and external surfaces. Consistent finish whether it&apos;s one store
                or a multi-site rollout across West Yorkshire.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers.
                West Yorkshire-based fleet programmes welcome. Photographic sign-off per vehicle.
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
                Applied to spec for the environment — retail, hospitality, industrial.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Yorkshire rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Huddersfield as part of a broader Yorkshire programme — Leeds, Bradford, Sheffield,
                Huddersfield in one coordinated campaign. One crew, consistent standards,
                consolidated records.
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

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Who books us for Huddersfield subcontract work
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                {
                  heading: "Sign companies",
                  body: "You win the client in West Yorkshire, we handle the install. You send us the material, the address and your sign-off requirements — we do the rest under your brand.",
                },
                {
                  heading: "Large-format print houses",
                  body: "You produce the graphics, we install them. No need to maintain your own installation crews in West Yorkshire — WRPX covers the region on a per-job or ongoing arrangement.",
                },
                {
                  heading: "Marketing agencies",
                  body: "Campaign graphics, brand rollouts, pop-up builds and retail installs. White-label as standard — your client never knows WRPX was on site.",
                },
                {
                  heading: "Print management companies",
                  body: "You manage the print buying and logistics. We provide a reliable Yorkshire installation resource you can book per job without maintaining in-house crews.",
                },
              ].map(({ heading, body }) => (
                <li key={heading} className="flex gap-3">
                  <span className="mt-0.5 text-accent">✓</span>
                  <div>
                    <strong className="text-foreground">{heading}</strong>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;Your client sees your brand. We attend under your instructions, install what you supply
              and send you a photo pack when we&apos;re done.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Huddersfield &amp; West Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Huddersfield is part of our West Yorkshire operating area. We also cover:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Leeds · Sheffield · Barnsley · Doncaster · Rotherham · Bradford · Wakefield ·
                Nottingham
              </strong>{" "}
              and the wider M62 and M1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/commercial-installation-huddersfield/" className="text-accent hover:underline">
                Huddersfield commercial installation
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Huddersfield
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to Huddersfield?",
                a: "Huddersfield is roughly 30 minutes from our South Yorkshire base. We cover the town centre, Brighouse, Mirfield, Dewsbury and the surrounding commercial and retail zones as part of our regular West Yorkshire schedule.",
              },
              {
                q: "Do you work under our brand with Huddersfield clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your client sees your brand.",
              },
              {
                q: "Can you cover the M62 corridor from Huddersfield toward Manchester?",
                a: "Yes. The M62 corridor is part of our operating area. We can cover Huddersfield jobs as a standalone or as part of a wider West Yorkshire or cross-Pennine programme.",
              },
              {
                q: "How do you document Huddersfield installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site Yorkshire programmes, consolidated records across all locations.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-float bg-card p-6">
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
              Subcontract installation in Huddersfield — let&apos;s talk
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
