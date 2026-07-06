import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Rotherham — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Rotherham and South Yorkshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-rotherham/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Rotherham — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Rotherham and South Yorkshire. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to Rotherham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire — Rotherham is within our core operating area, typically under 20 minutes. We cover Rotherham town centre, Parkgate Retail Park, Manvers, Templeborough and surrounding commercial and retail estates regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand in Rotherham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Rotherham client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Rotherham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do you provide after Rotherham installs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A photo pack per site: before preparation, during installation and completed sign-off. For multi-site South Yorkshire programmes, consolidated records across all locations.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerRotherhamPage() {
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
            Subcontract · Rotherham &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Rotherham &amp; South Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Rotherham and South Yorkshire. We install window graphics, wall
            wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under your brand,
            with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Rotherham is core territory</strong> — we&apos;re
                on site across South Yorkshire every week
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
              Discuss a Rotherham subcontract job
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

      {/* Why Rotherham */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Local coverage with no compromise on quality
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Rotherham sits at the centre of the South Yorkshire commercial and retail corridor —
              Parkgate Retail Park, Manvers industrial estate, Templeborough commercial zone, and
              the town centre retail mix. WRPX crews are in this area regularly, which means less
              dead travel time and more reliable scheduling for your Rotherham jobs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print houses managing South Yorkshire-wide programmes, we
              offer the simplest possible arrangement: you supply the graphics, we attend each
              Rotherham site, prepare surfaces properly and install to a finish standard you can
              stand behind. Photo pack delivered per site.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Rotherham as part of broader Yorkshire and Midlands corridor programmes —
              so if your campaign also covers Sheffield, Barnsley, Doncaster and Leeds, you have
              one subcontract crew for the whole South Yorkshire portion.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Rotherham
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Rotherham retail, commercial frontages and office environments —
                single site or multi-site programme.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Rotherham. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Rotherham shop fronts,
                fascias and external surfaces. Consistent finish rule whether it&apos;s one store
                or a multi-site rollout across South Yorkshire.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers.
                South Yorkshire-based fleet programmes welcome. Photographic sign-off per vehicle.
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
              <h3 className="font-semibold text-foreground">Multi-site South Yorkshire rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Rotherham as part of a broader South Yorkshire programme — Sheffield, Barnsley,
                Doncaster, Rotherham in one coordinated campaign. One crew, consistent standards,
                consolidated records.
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
              Rotherham &amp; South Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Rotherham is part of our core South Yorkshire operating patch. We also cover:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Barnsley · Doncaster · Leeds · Huddersfield · Chesterfield ·
                Nottingham
              </strong>{" "}
              and the wider M1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-rotherham/" className="text-accent hover:underline">
                Rotherham commercial installation
              </Link>
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                Barnsley
              </Link>
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                Doncaster
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
            FAQ — subcontract installation in Rotherham
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to Rotherham?",
                a: "Rotherham is core South Yorkshire territory for us — under 20 minutes from our base. We're on sites across Parkgate, Manvers, Templeborough and Rotherham town centre regularly.",
              },
              {
                q: "Do you work under our brand with Rotherham clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your client sees your brand.",
              },
              {
                q: "Can you handle the Rotherham element of a wider South Yorkshire programme?",
                a: "Yes. We cover Sheffield, Barnsley, Doncaster and Rotherham as part of the same South Yorkshire programme — one subcontract crew for the full corridor.",
              },
              {
                q: "How do you document Rotherham installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site South Yorkshire programmes, consolidated records across all locations.",
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
              Subcontract installation in Rotherham — let&apos;s talk
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
