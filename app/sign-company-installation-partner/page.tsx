import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sign Company Installation Partner — Subcontract Vinyl Installer Yorkshire | WRPX",
  description:
    "Subcontract vinyl installation for sign companies, print management firms and large-format printers across South Yorkshire. WRPX installs graphics you supply — white-label, documented, accountable.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/sign-company-installation-partner/",
  },
};

const serviceSchema = getServiceSchema(
  "Sign company installation partner — subcontract vinyl installation",
  "Subcontract vinyl and graphics installation for sign companies, print houses and large-format printers across South Yorkshire and the North. White-label installation: WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work under our brand, or does the end client know WRPX is involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work under your brand. Our vans, paperwork and on-site comms can be unbranded or reference your company. Your end client doesn't need to know WRPX is involved unless you want them to.",
      },
    },
    {
      "@type": "Question",
      name: "What types of graphics do you install on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts, fascia vinyls, POS graphics and vehicle wraps. We are installation-only: you supply the printed or cut material, we install it.",
      },
    },
    {
      "@type": "Question",
      name: "What coverage area do you operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based in South Yorkshire, we regularly cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Nottingham and the M1 corridor. Wider UK coverage for large programmes is discussed on a project basis.",
      },
    },
    {
      "@type": "Question",
      name: "How do you report back after each installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide a photo pack for each site: before prep, during installation and completed sign-off. On multi-site programmes, we maintain consolidated records across every location.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle overflow capacity — or just established relationships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Some sign companies call us for one-off overflow jobs when their own crew is stretched. Others run ongoing programmes through WRPX for the South Yorkshire and Midlands corridor. Either works.",
      },
    },
  ],
};

export default function SignCompanyInstallationPartnerPage() {
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
            Subcontract · Trade partners
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Sign Company Installation Partner — South Yorkshire &amp; the North
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installer working as a{" "}
            <strong className="text-foreground">subcontract installation partner</strong> for sign
            companies, print management firms and large-format printers across Yorkshire and the North.
            We install what you supply — window graphics, wall wraps, vehicle wraps, shop fronts, floor
            graphics — under your brand and to a standard your reputation depends on.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your client never
                needs to know WRPX is involved
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Preparation-led installs — not just turning up with a squeegee</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site, consolidated records for rollout programmes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Based in <strong className="text-foreground">South Yorkshire</strong> — Sheffield to
                Nottingham corridor is our primary operating patch
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Talk to us about subcontract work
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

      {/* The gap this fills */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              The gap WRPX fills for sign companies
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most sign companies have their own installation capacity — until they don&apos;t. When a
              programme lands that runs across South Yorkshire and the Midlands at the same time your
              crew is committed elsewhere, you need a subcontract installer who already understands
              materials and preparation. Not a labourer who can follow instructions, but someone who
              will look at a surface, assess it, and know what preparation is needed before any vinyl
              goes on.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX&apos;s background is {siteConfig.yearsInBusiness}+ years of professional vinyl
              application — the same surface preparation discipline, the same material knowledge,
              applied to your commercial and retail graphics work. We understand why wraps fail
              (skipped prep, wrong specification, wrong tool for the surface temperature). And we
              don&apos;t cut those corners.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For print management companies and large-format printers, we offer something slightly
              different: a reliable South Yorkshire installer you can call for the region without
              needing to send a team from your main base. You produce the graphics, we install them.
              Clean handover. Documented. Under your brand if you need it that way.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on a subcontract basis
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window graphics &amp; vinyl signage
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Frosted vinyl, full-colour window graphics, one-way vision film, promotional campaign
                vinyls and branded window installs. Retail units, offices, showrooms and commercial
                frontages — single site or multi-site programme. Clean cuts, precise application.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics service detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Wall wraps &amp; large-format graphic installation
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Large-format wall graphics, branded murals, feature wall vinyls and decorative commercial
                wall wraps. Surface preparation included. We assess the substrate before any material
                goes on and flag any issues that would compromise the install.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps service detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor graphics installation</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Promotional floor graphics, anti-slip floor film, wayfinding systems and branded floor
                wraps. Applied to the right specification for the environment — retail, hospitality or
                commercial. We flag if the substrate isn&apos;t suitable before the install, not after.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  Floor graphics service detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Shop fronts, fascias &amp; POS
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrand wraps on shop fronts, fascias and
                external surfaces. POS and in-store graphics installed to planogram. Counter wraps,
                display unit wraps and bespoke commercial interior applications also within scope.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Vehicle wraps</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full and partial vehicle wrap installation for vans, cars, HGVs and trailers. Fleet
                programmes welcome. We install the wrap you or your client supplies — same preparation
                standard, same photographic sign-off per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-site rollout programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Coordinated installation across multiple retail or commercial sites — seasonal
                campaigns, brand refreshes, new openings. One team, consistent preparation and finish
                rules, same photo reporting across every location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How white-label subcontract works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How the white-label subcontract relationship works
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              You retain the client relationship. WRPX attends under your instructions — your paperwork,
              your brand on comms where agreed. Your end client doesn&apos;t need to know we&apos;re
              involved. We understand this is the standard operating model for sign companies
              subcontracting installation capacity, and we work within it without question.
            </p>
            <p>
              We provide photographic documentation per site and a clear written sign-off. On multi-site
              programmes, we maintain consolidated records for your files — so if a snagging question
              comes back to you weeks later, you have timestamped evidence of what the site looked like
              before, during and after install.
            </p>
            <p>
              NDAs and programme-specific confidentiality requirements are discussed upfront. We&apos;re
              used to operating quietly behind sign companies and print management firms across the region.
              Several ongoing partner relationships run on exactly this basis.
            </p>
          </div>
        </div>
      </section>

      {/* Why WRPX over a generalist installer */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why use WRPX over a generalist installer?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sign companies subcontracting installation often end up with generalist shopfitters or
              handymen who technically &quot;can apply vinyl.&quot; The results are predictable — bubbles,
              lifting edges, poor seam placement, no prep, no documentation. Then you&apos;re fielding
              snagging calls from your client that shouldn&apos;t exist.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">{siteConfig.yearsInBusiness}+ years</strong> of
                  professional vinyl application — not a new addition to a shopfitting service
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  We work with <strong className="text-foreground">3M, Avery Dennison, CoverStyl and Hexis</strong> —
                  we understand material behaviour, not just &quot;apply vinyl&quot; as a task
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Surface preparation is the job</strong> — installs
                  that last the life of the campaign, not just the launch day
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  Eligible installs can carry a named{" "}
                  <strong className="text-foreground">
                    {siteConfig.guaranteeYears}-year guarantee
                  </strong>{" "}
                  on material defects, colour stability and adhesion
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Photo documentation</strong> — you have evidence
                  if a client queries the install after the fact
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
              Based in <strong className="text-foreground">South Yorkshire</strong>, WRPX covers
              subcontract installation across the{" "}
              <strong className="text-foreground">Yorkshire and Midlands corridor</strong>:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield ·
                Chesterfield · Nottingham · Derby · Lincoln
              </strong>{" "}
              and surrounding towns and retail parks along the M1.
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
              <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                Barnsley
              </Link>
              <Link href="/commercial-installation-rotherham/" className="text-accent hover:underline">
                Rotherham
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
            Partner FAQ — sign companies &amp; print firms
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Does our end client know WRPX is involved?",
                a: "Not unless you want them to. We work under your brand — unbranded vans, your paperwork on site. Your client's experience is managed by you.",
              },
              {
                q: "What do you install?",
                a: "Window graphics, wall wraps, floor graphics, shop fronts, fascia vinyls, POS graphics and vehicle wraps. Installation-only: you supply the material, we install it.",
              },
              {
                q: "What's your coverage area?",
                a: "South Yorkshire-based — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Nottingham and the M1 corridor. Wider coverage on large programmes discussed case-by-case.",
              },
              {
                q: "How do you document the installation?",
                a: "Photo pack per site — before prep, during install and completed. Multi-site programmes get consolidated records across all locations.",
              },
              {
                q: "Can you handle overflow as well as ongoing programmes?",
                a: "Yes — both. Some partners call for one-off capacity when their crew is committed elsewhere. Others run all their South Yorkshire and Midlands corridor work through us on an ongoing basis.",
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
              Start a subcontract installation conversation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your programme, your coverage area and your timeline. We&apos;ll confirm whether
              we&apos;re the right fit and give you a straight quote for installation.
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
              <Link href="/white-label-graphics-installation/" className="text-accent hover:underline">
                White-label installation detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
