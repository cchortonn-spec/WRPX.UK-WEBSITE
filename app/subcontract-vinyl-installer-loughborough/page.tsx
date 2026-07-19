import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Loughborough — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Loughborough and Charnwood for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M1 corridor between Leicester and Nottingham.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-loughborough/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Loughborough — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Loughborough and Charnwood. White-label available. WRPX installs what you supply — M1 corridor between Leicester and Nottingham, South Yorkshire base."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Loughborough", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-loughborough/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Loughborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loughborough is approximately 65–75 minutes from our South Yorkshire base via the M1, sitting between Nottingham and Leicester on the corridor. We cover Loughborough town centre, Shelthorpe and Southfields industrial estates, the A512 and A60 commercial corridors, Loughborough University campus, and Charnwood business parks as part of scheduled East Midlands M1 corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Loughborough jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Loughborough client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Loughborough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition and event graphics, office and corporate interior graphics, and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Loughborough alongside Nottingham and Leicester in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Loughborough sits between Nottingham and Leicester on the M1 corridor, making it a natural addition to any East Midlands programme. If your brief includes Nottingham, Leicester and Loughborough — or adds Derby, Mansfield or Lincoln — we cover the full corridor under a single subcontract arrangement with consolidated documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install graphics at Loughborough University?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Loughborough University is one of the largest university campuses in the UK and generates ongoing wayfinding, environmental graphics, faculty branding, sports facility graphics and estates refresh work. Fit-out contractors, sign companies and agencies managing university graphics programmes can subcontract the installation element to WRPX under the same white-label arrangement used for commercial and retail work.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerLoughboroughPage() {
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
            Subcontract · Loughborough &amp; Charnwood
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Loughborough &amp; Charnwood
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Loughborough, Shepshed, Coalville and the wider Charnwood area.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            university campus vinyls and wayfinding systems — on your instructions, under your
            brand, with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1 East Midlands corridor</strong>{" "}
                — Loughborough sits between Nottingham and Leicester; covered as part of scheduled corridor runs
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label available — your client, your brand, our installation</span>
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
                professional vinyl application — material knowledge, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Loughborough subcontract job
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

      {/* Why Loughborough */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Loughborough — the M1 anchor between Nottingham and Leicester
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Loughborough occupies a strategically useful position on the M1 East Midlands corridor
              — approximately 15 miles north of Leicester and 15 miles south of Nottingham. For sign
              companies and print management firms running installation programmes across the East
              Midlands, it sits exactly where a gap would otherwise open between the two larger cities.
              Rather than treating Loughborough as a separate trip that inflates job costs and complicates
              logistics, WRPX covers it as part of the same corridor run as Nottingham and Leicester.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography of Loughborough covers several distinct areas: the town centre
              retail core, the Shelthorpe and Southfields industrial estates which host a significant
              concentration of manufacturing, distribution and technical businesses, the A512 corridor
              linking the M1 junction to the town, and the A6 / A60 commercial strips running north
              towards Nottingham. The town is also home to a large out-of-town retail and trade park
              cluster, and a substantial base of engineering, technology and sports science businesses
              connected to the university ecosystem.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Loughborough University is one of the largest university campuses in the UK by physical
              footprint, and one of the most commercially active in terms of facilities and estates
              investment. The athletics, sports science, engineering and design facilities generate
              ongoing graphics programmes — faculty identity, wayfinding, sports venue branding,
              laboratory and research space vinyls, and accommodation block graphics that refresh on
              a cycle. Sign companies, fit-out contractors and agencies managing graphics programmes
              on the university estate can subcontract the installation element to WRPX under the
              same white-label arrangement used for commercial and retail work.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Loughborough client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Loughborough
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls
                and branded window installs across Loughborough town centre, retail parks, the A512
                corridor and Charnwood commercial frontages. Clean application, straight cuts,
                edge-to-edge finish every time.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Shop fronts &amp; fascia vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrands on Loughborough shop fronts,
                fascias and external retail surfaces. Town centre retail, out-of-town parks and
                commercial strips — consistent installation standard across every location,
                whether it is a single site or a multi-location programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial,
                office and university interiors across Loughborough and Charnwood. Substrate assessed
                before installation — painted plaster, MDF, block, glazed partitions, timber — any
                issues flagged before material is committed.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">University campus graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, faculty identity vinyls, sports facility branding, environmental
                graphics and accommodation refresh programmes across Loughborough University campus.
                We work around the academic calendar and access constraints characteristic of
                large campus estates — term-time scheduling, contractor permits and building-specific
                access arrangements all managed as standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; wayfinding vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor vinyls, anti-slip film, directional and wayfinding floor graphics
                for Loughborough retail, office, industrial and university environments. Laminated
                and rated for the appropriate traffic level. Substrate compatibility assessed —
                the right film for the surface type and footfall load.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">East Midlands multi-site rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Loughborough as part of a wider East Midlands programme — combining with Nottingham,
                Leicester, Derby or Lincoln in a single co-ordinated installation run. One crew,
                consistent standards and consolidated records across the whole programme.
                The Sheffield to Leicester corridor, with Loughborough in the middle, covered
                under one subcontract.
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
              Who uses WRPX as a Loughborough installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Loughborough clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand on site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format material to Charnwood and Loughborough clients, needing a trusted trade installer for the site work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing commercial, retail and university fit-outs in Loughborough who need a vinyl installation specialist slotted in at the right programme stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies and brand consultancies running East Midlands campaigns — Loughborough alongside Nottingham and Leicester under a single subcontract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>University estates teams and their supply-chain contractors managing ongoing graphics programmes at Loughborough University — wayfinding, faculty ID, sports facilities</span>
              </li>
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
              Loughborough, Charnwood &amp; East Midlands coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Loughborough is reached via the M1 as part of scheduled East Midlands corridor runs.
              We cover Loughborough town centre, Shelthorpe and Southfields industrial estates,
              Loughborough University campus, the A512 and A6 commercial corridors, and
              Charnwood business parks and retail locations. Where programmes justify it, we
              combine Loughborough with Leicester, Nottingham, Derby or further M1 corridor
              sites in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Loughborough · Shepshed · Coalville · Hathern · Barrow upon Soar · Leicester · Nottingham · Derby
              </strong>{" "}
              and the wider Charnwood and East Midlands M1 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-leicester/" className="text-accent hover:underline">
                Leicester subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-derby/" className="text-accent hover:underline">
                Derby subcontract
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
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
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Loughborough
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Loughborough?",
                a: "Loughborough is approximately 65–75 minutes from our South Yorkshire base via the M1. We cover Loughborough town centre, Shelthorpe and Southfields industrial estates, Loughborough University campus and surrounding Charnwood commercial areas as part of scheduled East Midlands corridor runs.",
              },
              {
                q: "Do you work under our brand with Loughborough clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Loughborough client sees your brand throughout. Photographic sign-off provided at completion.",
              },
              {
                q: "Can you handle Loughborough alongside Nottingham and Leicester in the same programme?",
                a: "Yes — Loughborough sits between Nottingham and Leicester on the M1 East Midlands corridor and is a natural addition to any multi-city East Midlands programme. We cover the full corridor under one subcontract arrangement with consolidated documentation.",
              },
              {
                q: "Do you install graphics at Loughborough University?",
                a: "Yes — Loughborough University generates ongoing graphics work across its estate, including faculty identity, wayfinding, sports facility graphics and environmental branding. We work around the academic calendar and the contractor access procedures common on large university estates.",
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
      <section className="border-t border-border px-4 pb-20 pt-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Subcontract installation in Loughborough — let&apos;s talk
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
              <Link href="/subcontract-vinyl-installer-leicester/" className="text-accent hover:underline">
                Leicester subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
