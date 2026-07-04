import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Marketing Agency Installation Partner — Vinyl Installer for Agencies Yorkshire | WRPX",
  description:
    "Vinyl installation partner for marketing agencies commissioning graphics campaigns across Yorkshire. White-label, photo-documented, preparation-led. WRPX installs under your agency brand — your client never knows we're involved.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/marketing-agency-installation-partner/",
  },
};

const serviceSchema = getServiceSchema(
  "Marketing agency installation partner — vinyl installer for agencies Yorkshire",
  "Installation-only partner for marketing agencies commissioning vinyl graphics campaigns for clients across South Yorkshire and the North. White-label installation: WRPX installs under your agency brand, photo-documented, preparation-led."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the end client know WRPX is involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — not unless you want them to. We operate white-label by default. Our vans and on-site comms reference your agency. Your client's experience is managed entirely by you.",
      },
    },
    {
      "@type": "Question",
      name: "What types of graphics campaigns do you install for agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts, vehicle wraps, POS graphics and large-format vinyl campaigns. If your agency has designed and produced it, WRPX installs it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle tight campaign timelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with advance notice. Brief us on your campaign schedule early so we can hold capacity. For multi-site campaign launches, we coordinate installation across locations to hit the same go-live date.",
      },
    },
    {
      "@type": "Question",
      name: "What reporting do you provide after installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photo pack per site — pre-install condition, installation in progress and completed sign-off. On multi-site campaigns, consolidated records across every location. You have timestamped evidence of the full install for your agency and client files.",
      },
    },
    {
      "@type": "Question",
      name: "What's your coverage area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "South Yorkshire base — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Nottingham and the M1 corridor. Wider coverage for large programmes discussed on a project basis.",
      },
    },
  ],
};

export default function MarketingAgencyInstallationPartnerPage() {
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
            Trade partner · Marketing agencies
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Installation Partner for Marketing Agencies — Yorkshire &amp; the North
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Your agency designs the campaign. Your client expects it installed on time and to a finish
            that reflects the brand. WRPX is the{" "}
            <strong className="text-foreground">installation-only partner</strong> that makes that
            happen across South Yorkshire and Yorkshire — under your agency brand, with full photo
            documentation, and without your end client ever knowing we were involved.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your agency is
                the face of the project to the client
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Campaign-ready</strong> — we coordinate to hit
                launch dates, not just installation slots
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site — the evidence your agency and your client need</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                South Yorkshire base — covers the{" "}
                <strong className="text-foreground">Sheffield to Nottingham corridor</strong> and
                across Yorkshire
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Talk to us about agency installation
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

      {/* What agencies need */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What marketing agencies need from an installation partner
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Marketing agencies commissioning graphics campaigns — window takeovers, retail activations,
              vehicle livery, store launches — have specific requirements from an installer that go beyond
              &quot;turn up and apply vinyl.&quot;
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              You need an installer who understands the campaign is time-critical, that the finish
              reflects your agency&apos;s standard, and that documentation matters — for your client
              reports, for sign-off, and for the evidence trail if anything is ever questioned.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX operates with the same accountability standard whether it&apos;s a single shopfront
              or a 20-site retail campaign. We understand that as a subcontract installer, our work
              represents your agency. That context shapes how we brief, install and report — not just
              the technical standard.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign types */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Campaign types we install for agencies
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Retail activation graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Window takeovers, promotional floor graphics, POS vinyl installs and shop front wraps
                for campaign launches and seasonal activations. Coordinated installation across multiple
                retail locations to a single go-live date.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Vehicle livery &amp; fleet branding
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Vehicle wrap installation for client fleet branding campaigns — vans, cars, HGVs. You
                supply or source the printed wrap. We install it to a finish that carries the brand your
                agency has designed. White-label throughout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Office &amp; workspace branding
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Wall wraps, window graphics, branded wall vinyls and large-format feature walls for
                workplace branding projects. New fit-outs, rebrand programmes and culture campaigns —
                installed to a professional standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-site brand rollouts
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Coordinated installation across multiple retail, commercial or hospitality sites — new
                brand launches, franchise rollouts, seasonal campaign switches. Consolidated documentation
                per location so your agency and your client have a complete record.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window graphics &amp; frosted vinyl
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full-colour window graphics, frosted and manifestation vinyl, one-way vision film and
                promotional campaign windows. Retail units, offices, showrooms — single site or campaign
                series.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Event &amp; temporary campaign graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Short-term promotional graphics, event venue dressing and temporary campaign installs.
                Applied to a standard your client expects. Removal after the campaign period if required,
                without surface damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What white-label means in practice */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            What white-label installation means in practice
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              When we install for your agency, your client sees your agency. WRPX is not mentioned,
              not present on vans, not referenced in on-site communication unless you want us to be.
              We operate as an extension of your delivery team, not as a visible third party.
            </p>
            <p>
              NDAs and programme-specific confidentiality requirements are discussed upfront. If your
              agency has an existing client NDA that covers subcontractors, we work within it. Several
              ongoing agency relationships run on exactly this basis.
            </p>
            <p>
              After every install, you receive a photo pack for your records and your client
              deliverables — timestamped documentation of pre-install conditions, the installation in
              progress, and the completed finish. This is standard, not optional.
            </p>
          </div>
        </div>
      </section>

      {/* Why agencies choose WRPX */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why agencies use WRPX
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">{siteConfig.yearsInBusiness}+ years</strong>{" "}
                  of professional vinyl application — material knowledge and surface preparation
                  discipline built before commercial work
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  We work with{" "}
                  <strong className="text-foreground">
                    3M, Avery Dennison, CoverStyl and Hexis
                  </strong>{" "}
                  — we understand the materials your campaigns are produced in
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Campaign-date accountability</strong> — we
                  understand that a graphics launch is tied to a broader campaign schedule. Installation
                  delay is not an option on activation day
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Agency-grade reporting</strong> — photo
                  documentation formatted for client reports, not just internal records
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
            <h2 className="text-xl font-semibold text-foreground">Coverage</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in <strong className="text-foreground">South Yorkshire</strong>, WRPX installs for
              agencies across:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield ·
                Chesterfield · Nottingham · Derby
              </strong>{" "}
              and surrounding locations along the M1 corridor.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For agencies with campaigns that span multiple UK regions, coverage outside South Yorkshire
              and Yorkshire is discussed on a programme basis.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds
              </Link>
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                Doncaster
              </Link>
              <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
                Nottingham
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — agency installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Does our client know WRPX is involved?",
                a: "No — not unless you want them to. We operate white-label by default. Vans, on-site communication and paperwork reference your agency. Your client's experience is managed by you.",
              },
              {
                q: "What graphics campaigns do you install?",
                a: "Window takeovers, wall wraps, floor graphics, vehicle livery, POS graphics, shop fronts and retail activations. If your agency has designed and produced it, WRPX installs it.",
              },
              {
                q: "Can you hit a campaign launch date?",
                a: "Yes — with sufficient lead time. Brief us early so we can hold capacity for your activation date. Multi-site campaigns are coordinated to hit the same go-live across all locations.",
              },
              {
                q: "What reporting do you provide?",
                a: "Photo pack per site — pre-install surface condition, installation in progress, completed sign-off. Multi-site campaigns get consolidated records per location.",
              },
              {
                q: "Can you work under NDA?",
                a: "Yes. If your agency has an NDA covering subcontractors, we work within it. Confidentiality requirements are discussed upfront before any programme begins.",
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

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Related B2B services</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>
              <Link href="/print-company-installation-partner/" className="text-accent hover:underline">
                Print company installation partner
              </Link>{" "}
              — installation for large-format print houses and print management companies
            </li>
            <li>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>{" "}
              — subcontract install for sign manufacturers across South Yorkshire
            </li>
            <li>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>{" "}
              — coordinated installation across multiple locations for brand campaigns
            </li>
            <li>
              <Link href="/white-label-graphics-installation/" className="text-accent hover:underline">
                White-label graphics installation
              </Link>{" "}
              — full overview of WRPX white-label trade services
            </li>
            <li>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation hub
              </Link>{" "}
              — full overview of WRPX commercial and trade services
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 pt-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Start an agency installation conversation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the campaign — type of graphics, installation locations, launch date and
              any white-label requirements. We&apos;ll confirm whether we&apos;re the right fit and quote
              installation costs.
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
                Full commercial service overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
