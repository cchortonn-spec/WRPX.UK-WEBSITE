import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Print Company Installation Partner — Large-Format Print Installer Yorkshire | WRPX",
  description:
    "Installation partner for large-format print houses across Yorkshire. You print, WRPX installs — window graphics, wall wraps, floor vinyls, vehicle wraps. White-label, photo-documented, South Yorkshire base.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/print-company-installation-partner/",
  },
};

const serviceSchema = getServiceSchema(
  "Print company installation partner — large-format print installer Yorkshire",
  "Installation-only partner for large-format print houses and print management companies across Yorkshire and the North. You produce the graphics — WRPX installs them. White-label, photo-documented, preparation-led."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you print or produce graphics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — WRPX is installation-only. You handle print production. We handle surface preparation and installation of the finished graphics you supply.",
      },
    },
    {
      "@type": "Question",
      name: "What print formats and substrates do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install cast and calendered vinyl, self-adhesive films, window film, floor graphics, wall wraps and vehicle wrap panels across a wide range of substrates including glass, walls, floors, fascias and vehicles.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand — not WRPX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate white-label by default. Our vans and on-site communication can be unbranded or reference your print company. Your end client does not need to know WRPX is involved.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover multi-site installation programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate installation across multiple sites — seasonal campaigns, brand rollouts, new location openings. Consolidated photo records per site, consistent preparation and finish standard across the programme.",
      },
    },
    {
      "@type": "Question",
      name: "What's your coverage area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based in South Yorkshire — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Nottingham and the M1 corridor. Wider coverage for large programmes discussed on a project basis.",
      },
    },
    {
      "@type": "Question",
      name: "How do you document installations for our records?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photo pack per installation — pre-install surface condition, mid-install progress and completed sign-off. On multi-site programmes, consolidated records cover every location in the batch.",
      },
    },
  ],
};

export default function PrintCompanyInstallationPartnerPage() {
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
            Trade partner · Print houses &amp; print management
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Installation Partner for Print Companies — Yorkshire &amp; the North
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installer working as an{" "}
            <strong className="text-foreground">installation-only partner</strong> for large-format
            print houses and print management companies across Yorkshire. You produce the graphics —
            window vinyls, wall wraps, floor graphics, vehicle wrap panels — and{" "}
            <strong className="text-foreground">WRPX installs them</strong>. White-label, preparation-led,
            and fully documented so your client never questions the finish.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Installation-only</strong> — you retain print
                production and the client relationship
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your brand in
                front of the end client, always
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per site — before, during and after</span>
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
              Talk to us about print installation
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

      {/* The problem this solves */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What print companies need from an installation partner
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Large-format print houses win contracts that span multiple sites and multiple material
              types. The print side is straightforward — but getting a qualified installer on the ground
              in South Yorkshire or across Yorkshire at the right time, to a standard that reflects well
              on your business, is a different challenge.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The risk with using generalist contractors for installation is real. A poorly prepared
              surface, a misapplied seam or a bubble that appears two weeks after handover becomes your
              problem — not the installer&apos;s. For print companies whose reputation is their product,
              that&apos;s not an acceptable outcome.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX brings {siteConfig.yearsInBusiness}+ years of precision vinyl application to
              installation work for print companies. We understand how different substrates behave, which
              preparation is required for each surface type, and how to apply large-format print without
              compromising the finish you&apos;ve spent time and cost producing.
            </p>
          </div>
        </div>
      </section>

      {/* What we install for print companies */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install for print companies
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Window graphics &amp; vinyl</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full-colour window graphics, frosted and etched vinyl, promotional campaign films and
                one-way vision. Single-site installs and multi-site seasonal campaigns. Precise cuts,
                no bubbles, clean edges — the standard your print work deserves.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Wall wraps &amp; large-format
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Large-format wall vinyls, branded feature walls, commercial murals and interior
                graphics. Surface preparation assessed per substrate — painted plasterboard, tiled
                walls, MDF and commercial finishes are all within scope.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor graphics installation</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Retail floor vinyls, anti-slip graphics, promotional floor wraps and wayfinding
                systems. Substrate suitability confirmed before installation. We flag any surface
                conditions that would compromise adhesion before a panel goes down.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  Floor graphics detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Vehicle wrap installation
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Vehicle wrap panels installed on vans, cars, HGVs and trailers. You produce the
                printed wrap — we handle surface preparation, application and photographic sign-off per
                vehicle. Fleet programmes and single-vehicle installs both within scope.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Shop fronts &amp; fascia vinyls
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyl installs on shop fronts, fascias, hoardings and external surfaces.
                Rebrand campaigns, seasonal overlays and new opening installs across retail, hospitality
                and commercial units.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-site rollout programmes
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Coordinated installation across multiple locations — brand refreshes, seasonal campaigns,
                new openings. Consistent preparation standard, same finish rules and consolidated photo
                records across every site.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout detail
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why WRPX over a generalist */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why WRPX over a generalist installer?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              For a print company, the installer is the last mile of your product. A generalist who
              can &quot;apply vinyl&quot; will get graphics on the wall — but you won&apos;t know whether the
              surface was properly prepared, whether the correct application technique was used, or
              whether the spec you printed to was respected on site. When the finish fails, your client
              calls you.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">{siteConfig.yearsInBusiness}+ years</strong>{" "}
                  of professional vinyl application — surface preparation and material behaviour, not
                  just &quot;apply and trim&quot;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  We work with{" "}
                  <strong className="text-foreground">
                    3M, Avery Dennison, CoverStyl and Hexis
                  </strong>{" "}
                  — we understand the materials you&apos;re printing to, not just the task of applying
                  them
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Surface preparation is the job</strong> — we
                  assess and treat every substrate before a panel goes on
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">Photographic documentation</strong> every
                  install — pre, during and post. You have evidence of surface condition and install
                  quality if a client questions anything after handover
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 shrink-0 text-accent">✓</span>
                <span>
                  <strong className="text-foreground">White-label by default</strong> — your print
                  company is the face of the project to the end client
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How the relationship works */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How a print company installation partnership works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 1,
                title: "You brief us on the job",
                body: "Send us the substrate type, surface dimensions, material specification (film type, finish), install location and timeline. We confirm suitability and flag any surface conditions worth noting before install.",
              },
              {
                num: 2,
                title: "Graphics delivered to us",
                body: "Printed panels, cut vinyl or film rolls delivered to us or to site. We inspect materials on arrival and confirm they match the brief before installation begins.",
              },
              {
                num: 3,
                title: "Surface preparation",
                body: "Every surface is assessed, cleaned, degreased and treated as required before any material is applied. For complex substrates, primer or bonding agent is used where needed.",
              },
              {
                num: 4,
                title: "Installation",
                body: "Graphics applied using the correct technique for the material type — wet application for large-format prints, dry application for cast vinyl, heat forming for vehicle panels. Seams and edges finished to a standard your client will notice.",
              },
              {
                num: 5,
                title: "Photo sign-off",
                body: "Pre-install surface condition, installation in progress and completed sign-off. Any pre-existing damage to the substrate is noted before we begin.",
              },
              {
                num: 6,
                title: "Reporting back to you",
                body: "Photo pack delivered to you post-install. On multi-site programmes, consolidated records per site so you have a complete installation history for the programme.",
              },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 bg-background p-6 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
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
              print companies across:
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Rotherham · Barnsley · Doncaster · Leeds · Huddersfield · Wakefield ·
                Chesterfield · Nottingham · Derby · Lincoln
              </strong>{" "}
              and surrounding areas along the M1 corridor.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For print companies with multi-site programmes that extend further into the North or East
              Midlands, wider coverage is discussed on a programme basis.
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
            FAQ — print company installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you print or produce graphics?",
                a: "No — WRPX is installation-only. You handle print production. We handle surface preparation and installation of the finished graphics you supply.",
              },
              {
                q: "What print substrates and formats do you install?",
                a: "Cast and calendered vinyl, self-adhesive films, window film, floor graphics, wall wraps and vehicle wrap panels. We work across glass, painted walls, MDF, fascias and vehicles.",
              },
              {
                q: "Can you work white-label — under our print company brand?",
                a: "Yes. White-label is our default operating mode. Our vans and on-site communication can be unbranded or reference your company. Your client does not need to know WRPX is involved.",
              },
              {
                q: "How do you document installs?",
                a: "Photo pack per site — pre-install surface condition, installation in progress and completed sign-off. Multi-site programmes get consolidated records across all locations.",
              },
              {
                q: "Can you handle multi-site print installation campaigns?",
                a: "Yes. We coordinate installation across multiple retail, commercial or venue sites for seasonal campaigns, brand rollouts and new openings. One point of contact, consistent standard across the programme.",
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
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>{" "}
              — subcontract install for sign manufacturers and sign companies
            </li>
            <li>
              <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                Vehicle wrap installation
              </Link>{" "}
              — install-only vehicle wrap subcontract for print companies and fleet managers
            </li>
            <li>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>{" "}
              — coordinated installation across multiple retail or commercial sites
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
              Start a print installation conversation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the programme — substrate type, print format, coverage area and timeline.
              We&apos;ll confirm suitability and give you a straight installation quote.
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
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
