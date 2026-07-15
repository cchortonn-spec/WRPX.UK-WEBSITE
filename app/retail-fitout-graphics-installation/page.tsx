import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Retail Fit-Out Graphics Installation — Subcontract Vinyl for Shop Fitters & Retail Designers | WRPX",
  description:
    "Retail fit-out graphics installation on a subcontract basis across South Yorkshire and the East Midlands. WRPX works alongside shop fitters and retail design firms — vinyl graphics, window films, floor vinyls and wall wraps installed to spec, white-label.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/retail-fitout-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail fit-out graphics installation — subcontract vinyl for shop fitters and retail designers",
  "Subcontract retail fit-out graphics installation across South Yorkshire and the East Midlands. WRPX works alongside shop fitters and retail design firms — window graphics, wall wraps, floor vinyls and vinyl signage installed white-label to spec and on programme."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Retail Fit-Out Graphics Installation", item: "https://www.wrpx.co.uk/retail-fitout-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work alongside shop fitters on retail fit-out projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — working alongside other trades on a retail fit-out site is standard for us. We coordinate with your site manager, operate within programme timelines and know when to hold off until a surface is ready rather than rushing an install that would need redoing. We bring our own tools and materials and don&apos;t require site babysitting.",
      },
    },
    {
      "@type": "Question",
      name: "What retail graphics do you install on fit-out projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics (frosted, printed, branded), wall wraps and large-format wall graphics, floor vinyls (promotional and anti-slip), vinyl fascia and shop front graphics, wayfinding vinyls, and vinyl applied to joinery surfaces and display units. We install what you supply — we are not a print or design company.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on retail fit-out sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your project identity. The retail client and end brand see your company on site, not WRPX. We provide photo documentation in the format you need for programme sign-off.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle multi-site retail rollouts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site retail rollouts are a core part of our work. Same installer, same standards, consolidated documentation across all sites. We cover South Yorkshire, West Yorkshire, the East Midlands and the M1 corridor, making us a practical single-supplier option for multi-site retail programmes in this region.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle programme timelines on retail fit-out projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work to your programme, not ours. You tell us the site address, the installation scope and the date — we confirm availability and show up. For multi-site programmes we schedule in advance and flag any timing conflicts early so you&apos;re not finding out on the morning. We don&apos;t double-book and we don&apos;t go quiet.",
      },
    },
  ],
};

export default function RetailFitoutGraphicsInstallationPage() {
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
            Subcontract Installation · Retail Fit-Out
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail Fit-Out Graphics Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX works alongside{" "}
            <strong className="text-foreground">shop fitters, retail design firms and brand rollout managers</strong>{" "}
            as a subcontract vinyl installation partner. We install window graphics, wall wraps,
            floor vinyls, fascia vinyls and wayfinding — to spec, on programme, white-label.
            You manage the client and the project; we handle the vinyl installation without your
            client needing to know we exist.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Works alongside other trades</strong>{" "}
                — site-aware, programme-conscious, no hand-holding required
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — your brand on site, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo pack per installation — before, during and completed sign-off</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Multi-site retail rollouts covered across South Yorkshire, West Yorkshire and the East Midlands
              </span>
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
              Discuss a retail fit-out project
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

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who uses WRPX for retail fit-out graphics
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most shop fitters and retail design firms are not in the business of applying vinyl.
              They manage the joinery, fixtures, lighting and flooring — and they need a reliable
              trade installer to handle the graphic elements that tie the whole brand scheme together.
              That&apos;s where WRPX comes in.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We work as a subcontract installation trade — the same way an electrical or AV
              subcontractor would — slotting into the programme at the right point, working cleanly
              alongside other trades and signing off finished sections with photography your client
              can use. The relationship is practical and quiet: you brief us, we deliver, your
              client sees a seamless project.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground text-sm">Shop fitters</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Managing retail fit-out programmes who need vinyl and graphics installed to
                  their programme timeline without adding it to their own scope.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground text-sm">Retail design agencies</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Specifying graphics and vinyl as part of a brand environment design — and
                  needing a trade installer who executes to that spec without reinventing it.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground text-sm">Brand rollout managers</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Running multi-site retail rebrands or new store openings across South Yorkshire
                  and the East Midlands who need consistent installation standards across all sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on retail fit-out projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; frosted film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand window vinyls, frosted manifestation film, promotional graphics and full
                window treatments. Applied after glazing is in — clean lines, no lifting edges,
                finished to spec rather than approximation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; brand graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall vinyls, branded murals and large-format wall graphics applied to
                plasterboard, render, glass and wood panel surfaces. Surface assessed before
                installation — we flag substrate problems rather than install over them and
                leave your client with a failure in month two.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand floor graphics, promotional floor vinyls, anti-slip film and wayfinding
                floor graphics. Applied to sealed screed, vinyl composite tile, ceramic tile
                and commercial hard flooring. Substrate assessed — textured or insufficiently
                prepared floors flagged before we start.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyl on shop fronts, fascias, external cladding and entrance features.
                Consistent finish across all stores in a rollout — whether it&apos;s one new
                opening or a full rebrand across multiple locations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vinyl on joinery &amp; display units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl film applied to bespoke joinery, display fixtures, shelving units and
                feature panels as part of a retail fit-out scheme. We apply to freshly
                painted or lacquered surfaces once dry — coordinate timing with us and
                your joiner.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site retail rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Same installer, same standards, consolidated documentation across every site.
                We cover South Yorkshire, West Yorkshire, the East Midlands and the M1 corridor
                — making a single-supplier arrangement practical for regional and national
                retail brands.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                  Multi-site rollout installation →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How we work on retail fit-out sites
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We are not a managed service — we are a trade subcontractor. That means we expect to
            receive a brief (scope, site address, date, access instructions) and show up with the
            right tools and materials for the job. We do not need site inductions explained to us
            from scratch and we do not create problems for the main contractor by working out of
            sequence or ignoring programme dependencies.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">Before installation</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">→</span><span>You send us the scope, site address and installation date</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>We confirm availability and quote installation only — no print markup</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>You supply material packaged and labelled per-site ready for install</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>Any surface condition queries resolved before we travel</span></li>
              </ul>
            </div>
            <div className="card-float bg-card p-6">
              <h3 className="font-semibold text-foreground">On site</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">→</span><span>Surface prep — clean, degrease, assess before applying</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>Installation to your supplied artwork spec</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>Works alongside other trades without disrupting programme</span></li>
                <li className="flex gap-2"><span className="text-accent">→</span><span>Photo pack — before, during, completed — in your sign-off format</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Retail fit-out coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover retail fit-out graphics installation across South Yorkshire (Sheffield,
              Doncaster, Rotherham, Barnsley), West Yorkshire (Leeds, Wakefield, Bradford,
              Huddersfield), North Yorkshire (York, Harrogate) and the East Midlands (Nottingham,
              Derby, Mansfield, Lincoln). Multi-site programmes across this area handled under
              a single subcontract arrangement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire subcontract hub
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
              <Link href="/print-company-installation-partner/" className="text-accent hover:underline">
                Print company partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — retail fit-out graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you work alongside shop fitters on site?",
                a: "Yes — retail fit-out site work alongside other trades is standard for us. We coordinate with your site manager, respect programme sequencing and operate without requiring hand-holding. We bring our own tools and materials.",
              },
              {
                q: "What graphics do you install on retail fit-outs?",
                a: "Window graphics, frosted film, wall wraps, brand murals, floor vinyls, shop front and fascia vinyls, vinyl on joinery and display units, and wayfinding graphics. We install what you supply — we are not a print or design company.",
              },
              {
                q: "Do you work white-label on retail fit-out projects?",
                a: "Yes — white-label by default. Your brand on site, your paperwork with the client. We provide photo documentation in the format you need for programme sign-off.",
              },
              {
                q: "Can you handle a multi-site retail rollout?",
                a: "Yes. Same installer, same standards, consolidated documentation across all sites. We cover South Yorkshire, West Yorkshire and the East Midlands — practical for regional retail programmes from one supplier.",
              },
              {
                q: "What surfaces can you apply vinyl to on a fit-out?",
                a: "Plasterboard, render (smooth and lightly textured), glass, PVC, painted MDF, laminate and most commercial flooring substrates. We assess each surface before applying and flag unsuitable substrates rather than install over them.",
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
      <section className="px-4 pb-20 pt-8">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Retail fit-out graphics — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the scope and the programme date. We&apos;ll confirm availability
              and give you a straight installation quote with no print markup.
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
