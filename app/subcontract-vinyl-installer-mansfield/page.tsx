import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Mansfield — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Mansfield and Nottinghamshire for sign companies, print management firms and agencies. WRPX installs what you supply — white-label, full photo documentation, M1 corridor coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-mansfield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Mansfield — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Mansfield and Nottinghamshire. White-label available. WRPX installs window graphics, wall wraps, shop fronts, floor graphics and vehicle wraps."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.wrpx.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Subcontract Vinyl Installation — Yorkshire",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Subcontract Vinyl Installer — Mansfield",
      item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-mansfield/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is Mansfield from your South Yorkshire base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mansfield is approximately 35–40 minutes from our South Yorkshire base via the M1 (J29 A617). It sits directly between Sheffield and Nottingham on the M1 corridor and is covered on our regular M1 south runs alongside Chesterfield and Nottingham.",
      },
    },
    {
      "@type": "Question",
      name: "Will you work under our brand for Mansfield site visits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is our default. We attend Mansfield sites with unbranded vehicles and carry your paperwork. Your Mansfield client sees your brand throughout. Photo packs are returned to you in your format after installation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you carry out in Mansfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install to your specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can Mansfield be included in a wider M1 corridor programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mansfield sits mid-corridor between Sheffield and Nottingham. If your programme covers multiple M1 cities — Chesterfield, Mansfield, Nottingham, Derby — we can handle the complete corridor under one subcontract arrangement. One briefing, consistent standards, consolidated site records.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerMansfieldPage() {
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
            Subcontract · Mansfield &amp; Nottinghamshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Mansfield &amp; Nottinghamshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Mansfield and Nottinghamshire. We install window graphics,
            wall wraps, shop fronts, floor graphics and vehicle wraps — on your instructions, under
            your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Mansfield is mid-point on our M1 corridor</strong>{" "}
                — 35–40 min from Sheffield via M1 J29, covered alongside Chesterfield and Nottingham
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — before, during and completed sign-off</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — surface prep and material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Mansfield subcontract job
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

      {/* Mansfield on the M1 corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Mansfield — the mid-point of the Sheffield–Nottingham corridor
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Mansfield sits directly between Sheffield and Nottingham on the M1 corridor, accessed
              from Junction 29 via the A617. The town&apos;s commercial base — the Mansfield retail park,
              Asda Supercentre junction, Berry Hill industrial estate and Oakham Business Park — generates
              regular demand for window graphics, shop front vinyls and branded interior installations.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Mansfield&apos;s sign and print trade has historically been served by companies that provide
              full design-through-installation services. For those companies, WRPX is the install-only
              partner they can call when an installation job falls outside their direct crew capacity
              — when they need overflow, when the geography doesn&apos;t justify sending their own team,
              or when the client relationship makes white-label working the right approach.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated, ready to
              apply. We assess the surface, install to specification and return the signed-off photo
              pack. Your Mansfield client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Mansfield
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; promotional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted manifestation film, promotional campaign vinyls
                and branded window installs. Mansfield retail park, town centre retail and Berry Hill
                industrial units covered.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors. Surface assessed before any installation — we flag substrate
                problems before unrolling the material.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Mansfield shop fronts and
                fascias. Whether a single Mansfield location or part of a wider Nottinghamshire
                rollout — consistent finish across all sites.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor graphics, anti-slip film, wayfinding vinyls and branded floor
                installs for Mansfield retail, commercial and hospitality environments. Substrate
                assessment included as standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars and HGVs in and around
                Mansfield. Photographic sign-off per vehicle. Fleet programmes from Nottinghamshire
                and the M1 corridor welcome.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Nottinghamshire rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Mansfield as part of a wider Nottinghamshire or M1 corridor programme — Chesterfield,
                Mansfield, Nottingham, Derby in one coordinated campaign. One installer, consistent
                standards and consolidated records across all sites.
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

      {/* Trade partner section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Trade partners we work with in Mansfield and Nottinghamshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Nottinghamshire has an active sign and print trade. Companies like Judson Signs
              (Mansfield), City Signs (Ollerton) and others in the region design, print and install
              their own work — but every sign company reaches a point where they need an overflow
              install partner, a white-label resource for sensitive client relationships, or a
              reliable crew for geographic coverage they don&apos;t cover directly.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX is that partner. We do not compete with sign companies — we&apos;re not a design
              or print house. We install what you supply, return clean paperwork and step back. Your
              client relationship remains yours.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm text-muted">
              <div>
                <p className="font-medium text-foreground">Sign &amp; print companies</p>
                <p className="mt-1">Mansfield and Nottinghamshire install overflow and subcontract programmes</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Print management firms</p>
                <p className="mt-1">Large-format print houses who supply material and need a reliable M1 corridor installation partner</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Marketing agencies</p>
                <p className="mt-1">Agencies running Nottinghamshire retail or venue campaigns who need white-label installation support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Mansfield &amp; Nottinghamshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover Mansfield, Kirkby-in-Ashfield, Sutton-in-Ashfield, Hucknall and surrounding
              Nottinghamshire locations as part of our M1 south operating corridor. Accessible via
              M1 J29 (A617 west) or A60 / A617 from Chesterfield. Worksop and Retford (north
              Nottinghamshire) covered when jobs fall on a scheduled north Nottinghamshire run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Mansfield · Nottingham · Chesterfield · Sheffield · Derby
              </strong>{" "}
              — covered as one M1 corridor programme where relevant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-chesterfield/" className="text-accent hover:underline">
                Chesterfield subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-derby/" className="text-accent hover:underline">
                Derby subcontract
              </Link>
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Mansfield
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is Mansfield from your base?",
                a: "Mansfield is approximately 35–40 minutes from our South Yorkshire base via the M1 (J29 exit, A617). It falls mid-corridor between Chesterfield and Nottingham — accessible on our regular M1 south runs without additional travel charges to Mansfield town centre and main industrial estates.",
              },
              {
                q: "Do you work white-label in Mansfield?",
                a: "Yes — white-label by default. We attend Mansfield sites with unbranded vehicles, carrying your paperwork. Your Mansfield client sees your brand throughout. Photo documentation is returned to you in your format after installation.",
              },
              {
                q: "Can Mansfield be part of an M1 corridor programme?",
                a: "Yes. Mansfield sits between Chesterfield and Nottingham on the M1 corridor. If your programme covers both, we can handle the full corridor — Chesterfield, Mansfield and Nottingham — under one subcontract arrangement. One briefing, consistent standards, consolidated records.",
              },
              {
                q: "What documentation comes after a Mansfield install?",
                a: "Photo pack per site: surface prep, during installation and completed sign-off. For multi-site programmes, consolidated records across all Nottinghamshire (and wider M1) locations in your agreed format.",
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
              Subcontract installation in Mansfield — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job, the site and your timeline. We&apos;ll confirm availability and give
              you a straight installation quote.
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
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partner page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
