import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Barnsley — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Barnsley and South Yorkshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-barnsley/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Barnsley — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Barnsley and South Yorkshire. White-label available. WRPX installs what you supply."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Barnsley", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-barnsley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close are you to Barnsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire — Barnsley is part of our core operating patch, typically under 25 minutes from base. We cover Barnsley town centre, the Dearne Valley commercial corridor, Penistone, Wombwell and surrounding retail and industrial estates regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Barnsley jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Barnsley client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Barnsley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle Barnsley as part of a wider South Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Barnsley is part of our South Yorkshire operating zone. If your programme also covers Sheffield, Rotherham, Doncaster and Leeds, we can handle the full South Yorkshire portion as a single subcontract crew.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBarnsleyPage() {
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
            Subcontract · Barnsley &amp; South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Barnsley &amp; South Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Barnsley and South Yorkshire. We install window graphics, wall
            wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under your brand,
            with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Barnsley is core South Yorkshire territory</strong> — we&apos;re
                on site across the region every week
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
              Discuss a Barnsley subcontract job
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

      {/* Why Barnsley */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              South Yorkshire coverage — Barnsley included
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Barnsley sits at the northern end of the South Yorkshire commercial corridor — the Dearne Valley,
              the town centre retail mix and Penistone&apos;s industrial and commercial units all generate
              regular demand for sign and graphics installation. WRPX crews pass through Barnsley as part of
              our normal South Yorkshire schedule, which means reliable turnaround with no premium for location.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print houses managing South Yorkshire-wide programmes, having one
              subcontract installer who covers Barnsley, Sheffield, Rotherham and Doncaster under the same
              arrangement — same standards, same documentation format, same white-label terms — removes
              a coordination headache on multi-site jobs.
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
            What we install on subcontract across Barnsley
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Barnsley retail, commercial frontages and office environments —
                single site or multi-site programme.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Barnsley. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Barnsley shop fronts,
                fascias and external surfaces. Consistent finish whether it&apos;s one store
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
                Barnsley as part of a broader South Yorkshire programme — Sheffield, Rotherham,
                Doncaster, Barnsley in one coordinated campaign. One crew, consistent standards,
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

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Barnsley &amp; South Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Barnsley is part of our core South Yorkshire operating patch. We also cover:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Doncaster · Leeds · Huddersfield · Chesterfield ·
                Nottingham
              </strong>{" "}
              and the wider M1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                Barnsley commercial installation
              </Link>
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
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
            FAQ — subcontract installation in Barnsley
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How close are you to Barnsley?",
                a: "Barnsley is core South Yorkshire territory for us — under 25 minutes from base. We cover the town centre, Dearne Valley commercial corridor, Penistone, Wombwell and surrounding retail and industrial parks regularly.",
              },
              {
                q: "Do you work under our brand with Barnsley clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your client sees your brand.",
              },
              {
                q: "Can you handle the Barnsley element of a wider South Yorkshire programme?",
                a: "Yes. We cover Sheffield, Rotherham, Doncaster and Barnsley as part of the same South Yorkshire programme — one subcontract crew for the full corridor.",
              },
              {
                q: "How do you document Barnsley installs?",
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
              Subcontract installation in Barnsley — let&apos;s talk
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
