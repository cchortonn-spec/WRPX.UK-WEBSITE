import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Wakefield — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Wakefield and West Yorkshire for sign companies, print houses and agencies. WRPX installs what you supply — white-label, photographic sign-off, reliable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wakefield/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Wakefield — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Wakefield and West Yorkshire. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Wakefield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire — Wakefield is typically under 40 minutes from base via the M1. We cover Wakefield city centre, the Trinity Walk shopping centre, the Calder Park industrial estate and surrounding commercial districts regularly as part of our West Yorkshire programme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Wakefield jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions with unbranded or re-branded vehicles. Your Wakefield client sees your brand, not WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "What graphics do you install on subcontract across Wakefield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we prepare surfaces and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle Wakefield as part of a wider Yorkshire programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wakefield connects our South Yorkshire operating zone to the wider West Yorkshire market. If your programme covers Wakefield, Leeds, Sheffield and the M1 corridor, we can handle the full Yorkshire portion as a single subcontract crew.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerWakefieldPage() {
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
            Subcontract · Wakefield &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Wakefield &amp; West Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with installation work across Wakefield and West Yorkshire. We install window graphics, wall
            wraps, vehicle wraps, shop fronts and floor graphics — on your instructions, under your brand,
            with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1 corridor coverage</strong> — Sheffield to Leeds
                to Wakefield in one programme
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
              Discuss a Wakefield subcontract job
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

      {/* Why Wakefield */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wakefield — bridging South Yorkshire and West Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wakefield sits at the point where the South Yorkshire commercial corridor meets the West
              Yorkshire market — with the Trinity Walk shopping centre, the Calder Park business estate and
              the Westgate retail zone generating a steady flow of commercial graphics and signage installation
              work. It&apos;s also a transit point for the M1 and M62, which means sign companies and print
              firms managing multi-site programmes across Yorkshire frequently need coverage here.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX covers Wakefield as part of the M1 corridor programme — the same crew that handles
              Sheffield, Barnsley and Leeds can extend north to cover Wakefield without a separate mobilisation.
              For sign companies and print management firms with clients across this corridor, that means one
              subcontract arrangement, one set of documentation standards and one point of contact for the full
              Yorkshire portion of any multi-site rollout.
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
            What we install on subcontract across Wakefield
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, promotional campaign vinyls and branded
                window installs. Wakefield retail units, commercial frontages and office environments —
                single site or multi-site programme across West Yorkshire.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial
                and retail interiors across Wakefield. Surface assessed before installation — we
                flag substrate issues rather than paper over them.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Wakefield shop fronts,
                fascias and external surfaces. Consistent finish whether it&apos;s one store
                or a multi-site rollout across Yorkshire.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation detail
                </Link>
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
                Wakefield as part of a broader Yorkshire programme — Sheffield, Barnsley,
                Leeds and Wakefield in one coordinated campaign. One crew, consistent standards,
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
              Who uses WRPX as a Wakefield installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {[
                "Sign companies with Wakefield clients who need a reliable subcontract installer — no production overhead, just clean installation",
                "Print management firms supplying large-format printed material to West Yorkshire clients and needing a trusted trade installer",
                "Marketing agencies running retail campaigns across the M1 corridor — Wakefield often sits in the programme alongside Sheffield and Leeds",
                "Large-format print houses offering print-and-install to clients but subcontracting the installation element",
                "Property and facilities managers with commercial estates in the WF postcode zone",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;Your client sees your brand. WRPX installs to your spec, under your name. You get the
              photo pack — they get the finished job.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Wakefield, West Yorkshire &amp; M1 corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wakefield is part of our extended Yorkshire operating zone. We also cover:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Leeds · Sheffield · Barnsley · Rotherham · Doncaster · Huddersfield · Chesterfield ·
                Nottingham
              </strong>{" "}
              and the wider M1 and M62 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire-wide subcontract hub
              </Link>
              <Link href="/subcontract-vinyl-installer-leeds/" className="text-accent hover:underline">
                Leeds subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-sheffield/" className="text-accent hover:underline">
                Sheffield subcontract
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Wakefield
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Wakefield?",
                a: "Wakefield is typically under 40 minutes from our South Yorkshire base via the M1. We cover Wakefield city centre, Trinity Walk, Calder Park and surrounding commercial estates regularly as part of our West Yorkshire programme.",
              },
              {
                q: "Do you work under our brand with Wakefield clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your client sees your brand.",
              },
              {
                q: "Can you handle Wakefield as part of a wider Yorkshire programme?",
                a: "Yes. We cover Sheffield, Barnsley, Leeds and Wakefield as part of the same Yorkshire programme — one subcontract crew for the full M1 and M62 corridor.",
              },
              {
                q: "How do you document Wakefield installs?",
                a: "Photo pack per site — before prep, during installation and completed sign-off. For multi-site Yorkshire programmes, consolidated records across all locations.",
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
              Subcontract installation in Wakefield — let&apos;s talk
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
