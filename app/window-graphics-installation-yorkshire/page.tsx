import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Window Graphics Installation Yorkshire — Subcontract & Trade | WRPX",
  description:
    "Subcontract window graphics installation across Yorkshire for sign companies, print houses and marketing agencies. WRPX installs what you supply — white-label, documented, M1/M62 corridor coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-graphics-installation-yorkshire/",
  },
};

const serviceSchema = getServiceSchema(
  "Window graphics installation Yorkshire — subcontract and trade installation partner",
  "Professional subcontract window graphics installation for sign companies, print houses and marketing agencies across Yorkshire and the M1/M62 corridor. White-label available. WRPX installs what you supply."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of window graphics do you install on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-colour digitally printed window graphics, cut vinyl lettering and branding, frosted film, manifestation bands, one-way vision (perforated) film, promotional campaign graphics and branded window wraps. We are installation-only — you supply the material, we prepare the glass and install.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Yorkshire window graphics jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions. Your client sees your brand, not WRPX. We can use unbranded vehicles and reference your company on site documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What Yorkshire cities do you cover for window graphics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield, Leeds, Doncaster, Barnsley, Rotherham, Huddersfield, Bradford, Wakefield, Nottingham and the wider M1 and M62 corridor. For multi-site Yorkshire programmes, we can cover multiple cities under a single subcontract arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "How do you document each window graphics installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photo pack per site — surface condition before prep, during application and completed sign-off. For multi-site campaigns, consolidated records across every location. Documentation is provided to your sign-off standard.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle window graphics on multi-site retail rollouts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is a typical job for us. We cover Yorkshire-wide programmes where the same window graphics are being installed across several locations on a coordinated schedule. Consistent installation quality and documentation across every site.",
      },
    },
  ],
};

export default function WindowGraphicsInstallationYorkshirePage() {
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
            Window Graphics · Yorkshire &amp; M1/M62 Corridor
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Window Graphics Installation Yorkshire — Subcontract &amp; Trade
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides subcontract window graphics installation across Yorkshire and the M1/M62 corridor
            for{" "}
            <strong className="text-foreground">
              sign companies, large-format print houses and marketing agencies
            </strong>
            . You supply the graphics — we prepare the glass, install to spec and deliver photographic
            sign-off. White-label by default.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Full Yorkshire coverage</strong> — Sheffield, Leeds, Doncaster, Barnsley, Rotherham, Huddersfield, Bradford, Wakefield
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Installation-only — you supply printed or cut material, we install</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo sign-off per site — before, during, completed</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn-primary inline-block">
              Discuss a window graphics job
            </Link>
            <Link
              href="/sign-company-installation-partner/"
              className="inline-block rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent/10"
            >
              Sign company partner overview
            </Link>
          </div>
        </div>
      </section>

      {/* Types of window graphics */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Window graphics we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Full-colour printed window graphics",
                body: "Digitally printed full-colour window vinyls — brand graphics, promotional campaigns, product imagery. Applied to the inside or outside of glass to spec.",
              },
              {
                heading: "Cut vinyl lettering &amp; branding",
                body: "Precision-cut vinyl lettering, logos and brand elements for shop fronts, office glazing and commercial windows. Clean, professional finish.",
              },
              {
                heading: "Frosted film &amp; manifestation",
                body: "Frosted window film, privacy film and glass manifestation bands. Office environments, commercial glazing and building regulations compliance.",
              },
              {
                heading: "One-way vision / perforated film",
                body: "Perforated vinyl for full-coverage window graphics that preserve outward visibility. Vehicle rear windows, large retail glazing and promotional builds.",
              },
              {
                heading: "Promotional campaign graphics",
                body: "Time-limited promotional window vinyls — seasonal campaigns, new openings, brand launches. Applied and, where required, removed at end of campaign.",
              },
              {
                heading: "Multi-site rollout window graphics",
                body: "The same window graphics installed consistently across multiple Yorkshire locations. One subcontract crew, same application standard, consolidated documentation.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="card-float bg-background p-6">
                <h3
                  className="font-semibold text-foreground"
                  dangerouslySetInnerHTML={{ __html: heading }}
                />
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WRPX for window graphics */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why sign companies and print houses use WRPX for Yorkshire window graphics
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Window graphics look simple — preparation is where the difference lies. Contaminated
              glass, incorrect surface temperature, film applied with trapped moisture or air: these
              are the reasons window graphics fail within weeks. WRPX installers are application
              specialists, not generalist fitters. Surface prep is part of every job, not an afterthought.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print firms, the key issue is predictability. You need an installer
              who turns up when confirmed, installs to the standard your client expects, and reports
              back with photos that cover you professionally. That is the standard we operate to on every
              Yorkshire job — single site or multi-site rollout.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              {[
                "Pre-installation surface assessment on every job — contamination, temperature and film compatibility checked before we start",
                "Photographic documentation: before prep, during installation, completed sign-off",
                "White-label as standard — unbranded vehicles and site documentation referencing your company",
                "Full Yorkshire coverage: Sheffield, Leeds, Doncaster, Barnsley, Rotherham, Huddersfield, Bradford, Wakefield",
                "Multi-site scheduling: consistent crew and standards across every location in a programme",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who books WRPX for Yorkshire window graphics subcontract work
          </h2>
          <div className="space-y-6">
            {[
              {
                heading: "Sign companies",
                body: "You win the client, we handle the window graphics install in Yorkshire. You supply the material and the brief — we attend under your brand, install, and send you a photo pack.",
              },
              {
                heading: "Large-format print houses",
                body: "You print the window graphics, we install them. No need to maintain your own field installation team in Yorkshire — WRPX provides reliable regional coverage on a per-job or ongoing arrangement.",
              },
              {
                heading: "Marketing agencies",
                body: "Campaign window graphics, seasonal promotions, brand rollouts and pop-up builds. White-label throughout — your client's project, our installation, your sign-off documentation.",
              },
              {
                heading: "Print management companies",
                body: "You manage the print specification and procurement. We provide a dependable Yorkshire installation resource you can allocate without maintaining in-house crews.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="card-float bg-background p-6">
                <h3 className="font-semibold text-foreground">{heading}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            Yorkshire window graphics coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Based in South Yorkshire, WRPX covers window graphics installation across the following
            cities and areas:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { city: "Sheffield", href: "/subcontract-vinyl-installer-sheffield/" },
              { city: "Leeds", href: "/subcontract-vinyl-installer-leeds/" },
              { city: "Doncaster", href: "/subcontract-vinyl-installer-doncaster/" },
              { city: "Barnsley", href: "/subcontract-vinyl-installer-barnsley/" },
              { city: "Rotherham", href: "/subcontract-vinyl-installer-rotherham/" },
              { city: "Huddersfield", href: "/subcontract-vinyl-installer-huddersfield/" },
              { city: "Nottingham (M1 corridor)", href: "/subcontract-vinyl-installer-nottingham/" },
              { city: "Yorkshire-wide coverage", href: "/subcontract-vinyl-installation-yorkshire/" },
            ].map(({ city, href }) => (
              <Link
                key={city}
                href={href}
                className="card-float bg-background p-4 text-sm font-medium text-accent hover:underline"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">
            FAQ — window graphics subcontract installation
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: "What types of window graphics do you install?",
                a: "Full-colour printed window vinyls, cut vinyl, frosted film, manifestation, one-way vision film and promotional campaign graphics. Single site or multi-site rollout.",
              },
              {
                q: "Do you remove existing window graphics before installing new ones?",
                a: "Yes, where required. Surface preparation including removal of old film, adhesive residue and cleaning is part of the pre-installation process.",
              },
              {
                q: "Do you work white-label for Yorkshire sign companies?",
                a: "Yes — white-label is our default for trade and subcontract work. Unbranded vans, your documentation, your client's project.",
              },
              {
                q: "Can you install window graphics on the same day as delivery?",
                a: "For planned jobs, we schedule installation to align with material delivery. Where material arrives early on a confirmed booking, we can work the same day subject to access and conditions. Same-day emergency calls are possible for existing trade clients.",
              },
              {
                q: "What is your coverage for multi-site Yorkshire window graphics rollouts?",
                a: "We cover all major Yorkshire cities — Sheffield, Leeds, Doncaster, Barnsley, Rotherham, Huddersfield, Bradford, Wakefield, Nottingham — under a single subcontract arrangement. One crew, consistent standards, consolidated photo records.",
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
              Yorkshire window graphics subcontract — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the job spec, location and your install window. We&apos;ll confirm coverage and
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
