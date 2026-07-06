import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Leeds — Installation Partner for Sign & Print Companies | WRPX",
  description:
    "WRPX provides subcontract vinyl installation across Leeds for sign companies, print houses and marketing agencies. Install-only, white-label available. South Yorkshire-based crew covering the full Yorkshire corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Leeds — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and marketing agencies across Leeds and West Yorkshire. WRPX installs what you supply — white-label, documented, consistent."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where are you based relative to Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WRPX is based in South Yorkshire — approximately 30 minutes from Leeds city centre on the M1/M62. We cover Leeds, West Yorkshire and the wider Yorkshire corridor regularly and have established subcontract partner relationships in the region.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand with Leeds clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. Your Leeds client sees your brand, your paperwork on site. WRPX operates quietly as your installation partner. Unbranded or re-branded vehicles available on request.",
      },
    },
    {
      "@type": "Question",
      name: "What installation services do you cover across Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts and fascia vinyls, vehicle wraps, multi-site rollout programmes. Installation-only: you supply the printed or cut material, we handle surface preparation and application.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle large Leeds rollout programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide a photo pack per site (before, during, completed) and maintain consolidated records for the full programme. For multi-site Leeds-area campaigns, we coordinate scheduling to match your client's programme window.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover other West Yorkshire towns beyond Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wakefield, Bradford, Huddersfield and the wider West Yorkshire area are all within regular operating range. Multi-site programmes across West Yorkshire and South Yorkshire can be coordinated from a single point of contact.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerLeedsPage() {
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
            Subcontract · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Leeds &amp; West Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and marketing agencies</strong>{" "}
            with work across Leeds and West Yorkshire. We install what you supply — window graphics, wall wraps,
            vehicle wraps, shop fronts, floor graphics — under your brand, to the standard your client
            expects.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your Leeds client
                sees your brand, not ours
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>South Yorkshire base — 30 minutes from Leeds on the M1/M62</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per site — before, during, completed sign-off</span>
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
              Discuss a Leeds subcontract job
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

      {/* Why Leeds sign companies use WRPX */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why Leeds sign companies use WRPX for subcontract installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Leeds has one of the busiest sign and print industries in the North — and a consistent
              challenge: winning programmes that run across Yorkshire and the Midlands at the same
              time your own crew is committed to something else. That&apos;s the gap WRPX fills.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We&apos;re not a shopfitter with a squeegee. Our{" "}
              {siteConfig.yearsInBusiness}+ years is specifically in vinyl application — the material
              knowledge, surface preparation discipline and quality control that means your client
              gets a finish worth defending. Window graphics that sit flat. Vehicle wraps with no
              lifting edges. Wall graphics with clean seams and proper substrate assessment before
              anything goes on.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For print management companies with Leeds-area clients, we offer a reliable regional
              installer you can send without sending your own crew up the M1. You produce the
              graphics, we install them. Photo sign-off, consolidated records, clean handover.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Leeds &amp; West Yorkshire
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, perforated one-way vision film, promotional
                campaign vinyls, branded window installs. Retail, office, showroom and commercial
                frontages across Leeds city centre, suburbs and surrounding towns.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls, large-format wall graphics and interior brand
                environments. Substrate assessed before installation — we flag issues rather than
                install over them and let them fail.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor graphics, anti-slip floor film, wayfinding systems and branded
                floor wraps. Applied to the right specification for the environment — retail,
                hospitality, commercial.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, full rebrands, promotional graphics on shop fronts and fascias across
                Leeds high streets, retail parks and commercial estates. Consistent finish rule for
                multi-site brand rollouts.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap installation — vans, cars, HGVs and trailers. Fleet
                programmes across West Yorkshire welcome. Same preparation standard, photographic
                sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site rollout programmes</h3>
              <p className="mt-3 text-muted leading-relaxed text-sm">
                Seasonal campaigns, brand refreshes and new openings across multiple Leeds-area
                sites. One subcontract crew, consistent installation standards, consolidated
                photographic records for your client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How white-label works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How white-label subcontract works with Leeds clients
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              You retain the client relationship — WRPX attends under your instructions. Your
              paperwork, your brand on comms where agreed. Your Leeds client&apos;s experience
              is managed by you; we deliver the physical installation to the standard you need
              without introducing a third-party name into the relationship.
            </p>
            <p>
              We provide photographic documentation per site — before, during and completed —
              and a written sign-off. On multi-site West Yorkshire programmes, we maintain
              consolidated records across every location so you have a clean audit trail.
            </p>
            <p>
              NDAs and programme-specific confidentiality requirements are discussed upfront.
              We work quietly for sign companies and print management firms across the region —
              including existing partner relationships that run on exactly this basis.
            </p>
          </div>
        </div>
      </section>

      {/* Why WRPX over a generalist */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why use WRPX over a generalist Leeds installer?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sign companies subcontracting in Leeds often end up with a generalist fitter who can
              &quot;do vinyl.&quot; The problems come back to you — bubbles, lifted edges, poor
              seam placement, no surface prep, nothing documented. Then you&apos;re managing
              snagging calls on work that should have been clean.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">{siteConfig.yearsInBusiness}+ years</strong>{" "}
                  of professional vinyl application — not an add-on to a shopfitting business
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  Experience with{" "}
                  <strong className="text-foreground">3M, Avery Dennison, CoverStyl and Hexis</strong>{" "}
                  — we know how materials behave, not just how to peel and stick
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Surface preparation is the job</strong> —
                  installs that last the life of the campaign
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Photo documentation</strong> — you have
                  timestamped evidence if a client queries the finish after the fact
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  Eligible installs carry a named{" "}
                  <strong className="text-foreground">
                    {siteConfig.guaranteeYears}-year guarantee
                  </strong>{" "}
                  on material defects, colour stability and adhesion
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Leeds &amp; wider Yorkshire coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in <strong className="text-foreground">South Yorkshire</strong>, WRPX regularly
              covers subcontract installation across Leeds, West Yorkshire and the full{" "}
              <strong className="text-foreground">M1/M62 Yorkshire corridor</strong>:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Leeds · Wakefield · Bradford · Huddersfield · Sheffield · Rotherham · Barnsley ·
                Doncaster · Chesterfield · Nottingham
              </strong>{" "}
              and surrounding areas along the M1 and M62.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds commercial installation
              </Link>
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                Doncaster
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
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
            FAQ — subcontract installation across Leeds
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Where are you based relative to Leeds?",
                a: "South Yorkshire — about 30 minutes from Leeds on the M1/M62. We're on the road in Leeds regularly and have established subcontract partners in West Yorkshire.",
              },
              {
                q: "Can you work under our brand with our Leeds clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your client's experience is managed by you.",
              },
              {
                q: "What do you install?",
                a: "Window graphics, wall wraps, floor graphics, shop fronts, fascia vinyls, vehicle wraps and multi-site rollout programmes. Installation-only: you supply the material, we install it.",
              },
              {
                q: "Can you handle overflow Leeds work as well as ongoing programmes?",
                a: "Both. Some sign companies call us when their crew is committed elsewhere. Others run all their Leeds-area and Yorkshire corridor work through us on an ongoing basis.",
              },
              {
                q: "Do you cover Wakefield, Bradford and Huddersfield too?",
                a: "Yes — all are within regular operating range. Multi-site programmes across West and South Yorkshire can be coordinated from a single WRPX point of contact.",
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
              Ready to discuss a Leeds subcontract installation?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the programme, the sites and your timeline. We&apos;ll confirm fit and give
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
                Sign company partner detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
