import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shop Front Graphics Installation — Subcontract Fascia & Vinyl Signage | WRPX",
  description:
    "Shop front and fascia vinyl installation across South Yorkshire and the M1 corridor. WRPX installs what you supply — for sign companies, print houses and agencies. White-label, photo sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/shop-front-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Shop front graphics installation — fascia and vinyl signage installation partner",
  "Professional shop front and fascia vinyl installation for sign companies, print management firms and marketing agencies across South Yorkshire. White-label available. Installation-only service — you supply, WRPX installs."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install shop front graphics you haven't produced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — WRPX is installation-only for trade clients. You supply the printed or cut vinyl material; we prepare the surface and install to your specification. This is specifically designed for sign companies, print houses and agencies who produce the graphics and need a reliable subcontract installer to fit them.",
      },
    },
    {
      "@type": "Question",
      name: "What types of shop front and fascia graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install brand vinyls on ACM fascias, composite board and painted fascia boards; full and partial shop front window graphics; promotional campaign wraps on external glazing; rebrand overlays; vinyl lettering and logo installs; and multi-site retail rollouts where the same graphics are applied across a number of locations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand name on the site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is the default for trade clients. We attend with unbranded vehicles and use your job sheet and documentation. Your client sees your company name throughout — WRPX is invisible.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle high-level or complex fascia installs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We assess access requirements as part of the pre-installation survey. For installations above 3 metres, we arrange appropriate access equipment. Any substrate issues (rust, damaged capping, paint condition) are flagged before installation — we don't apply over a surface that will compromise the finished result.",
      },
    },
  ],
};

export default function ShopFrontGraphicsInstallationPage() {
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
            B2B Installation · Shop Fronts &amp; Fascias
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Shop Front Graphics Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist installation partner for{" "}
            <strong className="text-foreground">sign companies, print houses and marketing agencies</strong>{" "}
            across South Yorkshire and the M1 corridor. We install shop front vinyls, fascia graphics,
            window wraps and rebrand programmes — installation-only, under your brand, with full photographic
            sign-off.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Installation-only</strong> — you supply the
                printed material, we prepare the surface and install
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your client sees your brand, not WRPX</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per site — before prep, during and completed sign-off</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">South Yorkshire and M1 corridor coverage</strong>{" "}
                — Sheffield, Doncaster, Leeds, Barnsley, Rotherham, Nottingham and beyond
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a shop front installation job
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

      {/* What types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What we install on shop fronts and fascias
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Shop front vinyl installation covers a wide range of substrates and application types.
              WRPX installs all of the following for sign companies and trade clients:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Fascia board vinyls",
                  body: "Brand colour vinyls, cut-vinyl lettering and logo applications on painted fascia boards, ACM panels and composite capping. Clean edges, no lifting corners — installed to last.",
                },
                {
                  title: "Shop front window graphics",
                  body: "Full-colour digitally printed window graphics on retail glazing. Perforated film for one-way vision. Frosted and manifestation film. Single site or multi-site programme.",
                },
                {
                  title: "Rebrand overlays",
                  body: "When a retail estate changes brand or identity, new vinyls go over the existing fascia or window graphics — removing old material, preparing the substrate and applying new branding to spec.",
                },
                {
                  title: "Promotional campaign wraps",
                  body: "Seasonal and campaign graphics applied to shop front glazing, external panels and temporary installations. Time-critical scheduling understood — we work to your campaign launch date.",
                },
                {
                  title: "Vinyl lettering & logo installs",
                  body: "Cut vinyl, contour-cut logos and individual letter installs on fascias, doors and glazing. Applied using alignment jigs or wet application where required for larger runs.",
                },
                {
                  title: "Multi-site retail rollouts",
                  body: "The same shop front graphics programme applied across multiple locations in Yorkshire — same standards, consolidated documentation, single point of contact for the full Yorkshire estate.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="card-float bg-background p-5">
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade buyer framing */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Built for sign companies, print firms and agencies
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6 text-center">
              <div className="text-3xl font-bold text-accent">{siteConfig.yearsInBusiness}+</div>
              <p className="mt-2 font-semibold text-foreground">Years applying vinyl</p>
              <p className="mt-2 text-sm text-muted">
                Surface preparation, material specification and application technique — not just fitting.
              </p>
            </div>
            <div className="card-float bg-background p-6 text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <p className="mt-2 font-semibold text-foreground">White-label capable</p>
              <p className="mt-2 text-sm text-muted">
                Your client never knows we were involved. Unbranded vehicles, your documentation.
              </p>
            </div>
            <div className="card-float bg-background p-6 text-center">
              <div className="text-3xl font-bold text-accent">Every job</div>
              <p className="mt-2 font-semibold text-foreground">Photo-documented</p>
              <p className="mt-2 text-sm text-muted">
                Before prep, during install and completed sign-off image pack sent back to you.
              </p>
            </div>
          </div>
          <div className="mt-10 card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Why sign companies use WRPX for shop front installation
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              Most sign companies have the design and print capability in-house — but installation,
              especially across a regional estate, requires local crew availability, surface expertise and
              the kind of reliability that keeps your end client relationship intact.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX works as a silent installation partner. You win the client, manage the brief and supply
              the printed material. We turn up, install to spec, photograph the result and report back to
              you. Your client sees a seamless service — they never know the installation was subcontracted.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies covering Yorkshire and the M1 corridor, the alternative is either employing
              installation staff (overhead you don&apos;t want) or using a one-person-band fitter with no
              documentation or backup. WRPX sits in between — a professional, accountable installation
              partner who understands your commercial relationship with the client.
            </p>
          </div>
        </div>
      </section>

      {/* Surface prep section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Surface preparation — the part most installers skip
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Shop front vinyl installations fail for one reason almost every time: poor surface preparation.
              Existing vinyl not fully removed, substrate contamination, paint condition not assessed,
              application in unsuitable temperatures.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX does the prep properly. Existing material is removed cleanly. Surfaces are degreased and
              checked for adhesion. Substrate condition is reported before installation begins — if there&apos;s
              a problem with the fascia that will compromise the result, we tell you rather than paper over it.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              That&apos;s the difference that comes from {siteConfig.yearsInBusiness}+ years of precision vinyl
              application. The same process we apply to a kitchen worktop — arguably a harder surface to get
              right — applies to a shop fascia. Prep first. Application second. Sign-off last.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Coverage — South Yorkshire and M1 corridor
          </h2>
          <p className="text-muted leading-relaxed">
            Shop front installation coverage includes:{" "}
            <strong className="text-foreground">
              Sheffield · Rotherham · Doncaster · Barnsley · Leeds · Wakefield · Huddersfield ·
              Chesterfield · Nottingham
            </strong>{" "}
            and the wider M1/M62 corridor. Multi-site rollouts across this region handled as a single
            coordinated programme.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
              Yorkshire-wide subcontract hub
            </Link>
            <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
              Sign company installation partner
            </Link>
            <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
              Multi-site rollout installation
            </Link>
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              Commercial installation overview
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — shop front graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you install graphics you haven't produced?",
                a: "Yes — WRPX is installation-only for trade clients. You supply the printed or cut vinyl material; we prepare the surface and install to your specification. Specifically designed for sign companies, print houses and agencies who produce the graphics and need a reliable subcontract installer to fit them.",
              },
              {
                q: "Can you work under our brand name?",
                a: "Yes — white-label is the default for trade clients. Unbranded vehicles, your job sheet and documentation. Your client sees your company name throughout.",
              },
              {
                q: "What types of fascia do you work with?",
                a: "Painted fascia boards, ACM (aluminium composite) panels, timber fascias, composite capping and glazed shopfronts. We assess the substrate as part of the pre-installation process and flag any condition issues before applying material.",
              },
              {
                q: "How do you document installs?",
                a: "Photo pack per site — before surface prep, during installation and completed sign-off. Sent back to you to forward to your client or retain for your project records.",
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
              Shop front installation partner — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site location, substrate type and your timeline. We&apos;ll confirm availability
              and give you a straight installation-only quote.
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
