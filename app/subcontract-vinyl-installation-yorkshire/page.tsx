import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installation Yorkshire — Trade & Partner Installers | WRPX",
  description:
    "WRPX is Yorkshire's specialist subcontract vinyl installer for sign companies, print houses, marketing agencies and fleet operators. White-label, documented, reliable across South Yorkshire and the M1 corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installation — Yorkshire and South Yorkshire",
  "Specialist subcontract and white-label vinyl installation for sign companies, print management firms, large-format printers, marketing agencies and fleet operators across Yorkshire and the M1 corridor. WRPX installs the graphics you supply, under your brand."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of company use WRPX as a subcontract installer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign companies, large-format print houses, print management firms, marketing agencies, vehicle fleet operators and retail brands needing regional installation capacity in Yorkshire. We work as a white-label or named subcontractor — whichever works for your programme.",
      },
    },
    {
      "@type": "Question",
      name: "What does WRPX install on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts, fascia vinyls, POS graphics, vehicle wraps and fleet livery. We are installation-only: you supply the printed or cut material, we install it to a professional standard.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Yorkshire do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "South Yorkshire is our primary operating area — Sheffield, Doncaster, Barnsley, Rotherham. We also cover Leeds, Huddersfield, Wakefield, Chesterfield, Nottingham and the full M1 corridor. Wider Yorkshire and UK coverage for large programmes is agreed on a project basis.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand with no mention of WRPX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. White-label operation is our default mode for trade and partner clients. Unbranded vans, your paperwork on site, no WRPX branding visible to your end client unless you want it. We understand this is standard practice for sign companies and print firms.",
      },
    },
    {
      "@type": "Question",
      name: "How do you document installs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photo pack per site — before prep, during installation and completed sign-off. Multi-site programmes get consolidated records across every location, so you have timestamped evidence for your client files and any snagging queries.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle overflow capacity at short notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some partners call WRPX when their own installation crew is committed elsewhere. Others run all Yorkshire and Midlands corridor work through us on an ongoing basis. Both models work — contact us to discuss your pattern.",
      },
    },
  ],
};

export default function SubcontractVinylInstallationYorkshirePage() {
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
            Subcontract · White-label · Trade partners · Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installation — Yorkshire &amp; the M1 Corridor
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installer operating as a{" "}
            <strong className="text-foreground">subcontract installation partner</strong> for trade
            and commercial clients across Yorkshire and the South Yorkshire–Nottingham corridor. Sign
            companies, print houses, marketing agencies and fleet operators use us to install what
            they supply — reliably, documented, under their brand.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — no WRPX
                branding visible to your end client unless you want it
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years of professional vinyl application
                </strong>{" "}
                — surface-prep led, not just turning up with a squeegee
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo reporting per site, consolidated records for multi-site programmes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                South Yorkshire base —{" "}
                <strong className="text-foreground">Sheffield to Nottingham M1 corridor</strong>{" "}
                is our primary patch
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Overflow capacity and ongoing programme relationships — both welcome</span>
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

      {/* Who uses WRPX */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Who uses WRPX as a subcontract installer
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Four main types of trade partner work with WRPX on a subcontract or white-label basis:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Sign companies &amp; print houses
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                When a programme spans South Yorkshire and your own crew is committed elsewhere, you
                need an installer who already understands materials and surface preparation — not a
                generalist who can technically apply vinyl. WRPX works as your regional installation
                partner: you supply the graphics, we install to your standard.
              </p>
              <p className="mt-3 text-sm">
                <Link
                  href="/sign-company-installation-partner/"
                  className="text-accent hover:underline"
                >
                  Sign company partner detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Marketing agencies &amp; brand managers
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Campaign rollouts, seasonal window schemes, retail refresh programmes and brand
                relaunch activations require an installation partner who reports back clearly and
                shows up consistently. WRPX installs under your brand, delivers a photo pack after
                each site, and operates invisibly to your end client.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Fleet operators &amp; vehicle livery programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Vehicle wrap installation for commercial fleets, van livery changes and partial
                rebrands across Yorkshire. We install the wrap you supply — same preparation
                standard, same photographic sign-off per vehicle. Overflow fleet capacity or an
                ongoing Yorkshire-region installation relationship.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Retail brands &amp; multi-site programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Multi-site rollouts — seasonal campaigns, new-store openings, brand refresh waves —
                need a regional installer who can coordinate across locations, maintain consistent
                preparation standards and consolidate reporting. WRPX handles Yorkshire and
                Midlands corridor sites within regional programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            What we install on a subcontract basis
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Window graphics & vinyl signage",
                link: "/commercial/window-graphics/",
                linkText: "Window graphics detail",
              },
              {
                title: "Wall wraps & large-format graphics",
                link: "/commercial/wall-wraps/",
                linkText: "Wall wraps detail",
              },
              {
                title: "Floor graphics & anti-slip film",
                link: "/commercial/floor-graphics/",
                linkText: "Floor graphics detail",
              },
              { title: "Shop fronts, fascias & POS graphics", link: null, linkText: null },
              {
                title: "Vehicle wraps & fleet livery",
                link: "/vehicle-wrap-installation/",
                linkText: "Vehicle wrap detail",
              },
              { title: "Multi-site rollout programmes", link: null, linkText: null },
            ].map(({ title, link, linkText }) => (
              <div key={title} className="card-float bg-background p-6">
                <h3 className="font-semibold text-foreground">{title}</h3>
                {link && linkText && (
                  <p className="mt-2 text-sm">
                    <Link href={link} className="text-accent hover:underline">
                      {linkText} →
                    </Link>
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted leading-relaxed">
            Installation-only: you supply the printed or cut material, we install it. Surface
            assessment and preparation is included — we flag any substrate issues before vinyl goes
            on, not after. All installs are photodocumented.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How the subcontract relationship works
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card-float bg-background p-6 md:p-8">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Brief and quote</h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    Tell us the programme — what needs installing, where, when and to what standard.
                    We confirm scope, coverage and a straight installation quote. No vague day rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-float bg-background p-6 md:p-8">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    You supply, we install
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    Printed or cut materials are delivered to site or collected from your premises.
                    WRPX attends under your branding — unbranded or referencing your company, as
                    agreed. Surface is assessed and prepped before anything goes on.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-float bg-background p-6 md:p-8">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Documented sign-off</h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    Photo pack delivered after each site: before prep, during installation, completed
                    sign-off. Multi-site programmes get consolidated records — timestamped evidence
                    across every location, your files, no chasing required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why WRPX */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why use WRPX over a generalist installer
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The standard risk when subcontracting installation to a generalist: technically
              capable of applying vinyl, but no understanding of surface assessment, material
              behaviour or why prep determines longevity. Snagging calls reach your client, not just
              WRPX.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">
                    {siteConfig.yearsInBusiness}+ years of professional vinyl application
                  </strong>{" "}
                  — not a new service added to a shopfitting offering
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  Works with{" "}
                  <strong className="text-foreground">
                    3M, Avery Dennison, CoverStyl and Hexis
                  </strong>{" "}
                  — understands material behaviour, not just &quot;applying vinyl&quot; as a task
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Surface preparation is the job</strong> —
                  installs that last the campaign life, not just launch day
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">White-label by default</strong> — your
                  client&apos;s experience is managed by you, not us
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Photo documentation</strong> per site —
                  you have evidence if a client queries the install after the fact
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
            <h2 className="text-xl font-semibold text-foreground">Coverage — Yorkshire &amp; M1 Corridor</h2>
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
              <Link
                href="/subcontract-vinyl-installer-sheffield/"
                className="text-accent hover:underline"
              >
                Subcontract installer — Sheffield
              </Link>
              <Link
                href="/subcontract-vinyl-installer-doncaster/"
                className="text-accent hover:underline"
              >
                Subcontract installer — Doncaster
              </Link>
              <Link
                href="/subcontract-vinyl-installer-leeds/"
                className="text-accent hover:underline"
              >
                Subcontract installer — Leeds
              </Link>
              <Link
                href="/subcontract-vinyl-installer-york/"
                className="text-accent hover:underline"
              >
                Subcontract installer — York
              </Link>
              <Link
                href="/sheffield-nottingham-corridor-installation/"
                className="text-accent hover:underline"
              >
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner types — internal links */}
      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Dedicated partner pages</h2>
          <p className="mt-3 text-muted">
            If you are a specific type of trade partner, these pages go deeper on how WRPX works
            with your sector:
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/sign-company-installation-partner/"
              className="card-float bg-background px-5 py-3 text-foreground hover:text-accent transition-colors"
            >
              Sign companies &amp; print houses
            </Link>
            <Link
              href="/white-label-graphics-installation/"
              className="card-float bg-background px-5 py-3 text-foreground hover:text-accent transition-colors"
            >
              White-label installation
            </Link>
            <Link
              href="/vehicle-wrap-installation/"
              className="card-float bg-background px-5 py-3 text-foreground hover:text-accent transition-colors"
            >
              Vehicle wrap subcontract
            </Link>
            <Link
              href="/commercial-installation/"
              className="card-float bg-background px-5 py-3 text-foreground hover:text-accent transition-colors"
            >
              Commercial installation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">FAQ — subcontract installers</h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of company use WRPX as a subcontract installer?",
                a: "Sign companies, large-format print houses, print management firms, marketing agencies, vehicle fleet operators and retail brands needing regional installation capacity in Yorkshire. We work as a white-label or named subcontractor — whichever works for your programme.",
              },
              {
                q: "Can you work under our brand with no mention of WRPX?",
                a: "Yes. White-label operation is our default for trade and partner clients. Unbranded vans, your paperwork on site. Your end client's experience is managed by you.",
              },
              {
                q: "Which areas of Yorkshire do you cover?",
                a: "South Yorkshire is our primary operating area — Sheffield, Doncaster, Barnsley, Rotherham. We also cover Leeds, Huddersfield, Wakefield, Chesterfield, Nottingham and the full M1 corridor.",
              },
              {
                q: "How do you document installs?",
                a: "Photo pack per site — before prep, during install and completed sign-off. Multi-site programmes get consolidated records across every location.",
              },
              {
                q: "Can you handle overflow at short notice?",
                a: "Yes — overflow and ongoing programme relationships are both welcome. Contact us to discuss your pattern.",
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
      <section className="px-4 pb-20 pt-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Start a subcontract installation conversation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your programme, your coverage area and your timeline. We&apos;ll confirm
              whether we&apos;re the right fit and give you a straight quote for installation.
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
              <Link
                href="/commercial-installation/"
                className="text-accent hover:underline text-sm"
              >
                Commercial installation hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
