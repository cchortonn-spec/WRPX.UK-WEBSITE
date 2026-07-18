import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Leicester — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Leicester and Leicestershire for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, East Midlands M1 corridor coverage.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Leicester — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies and print management firms across Leicester, Loughborough and Leicestershire. White-label available. WRPX installs what you supply — East Midlands M1 corridor coverage from South Yorkshire base."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Leicester", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leicester is approximately 75–85 minutes from our South Yorkshire base via the M1. We cover Leicester city centre, the Highcross shopping centre, Fosse Park retail park, Narborough Road, the St George's and Belgrave Road commercial corridors, and Leicestershire industrial and business park sites as part of scheduled East Midlands M1 corridor runs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Leicester jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Leicester client sees your company throughout. We provide photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition and event graphics, and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Leicester alongside Nottingham and Derby in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Leicester, Nottingham and Derby all sit within the East Midlands M1 corridor and can be covered in a combined run. If your programme includes multiple East Midlands cities — Leicester, Nottingham, Derby, Loughborough, Hinckley — we handle them under a single subcontract arrangement with consolidated documentation, removing the overhead of co-ordinating separate local installers.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerLeicesterPage() {
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
            Subcontract · Leicester &amp; Leicestershire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Leicester &amp; Leicestershire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Leicester, Loughborough and Leicestershire. We install
            window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics and wayfinding
            vinyls — on your instructions, under your brand, with full photographic documentation.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">East Midlands M1 corridor coverage</strong>{" "}
                — Leicester reached via the M1 as part of scheduled East Midlands corridor runs
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
              Discuss a Leicester subcontract job
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

      {/* Why Leicester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leicester — the East Midlands M1 corridor extended south
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Leicester is the largest city in the East Midlands outside Nottingham, and a significant
              commercial market for sign companies and print management firms operating across the M1
              corridor. The city&apos;s commercial geography spans Highcross shopping centre and the
              city centre retail core, major out-of-town retail at Fosse Park, a substantial manufacturing
              and distribution base along the A563 orbital and M69 corridors, and a strong independent
              and specialist retail scene along Narborough Road, Belgrave Road and the Aylestone Road
              commercial strip.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For sign companies and print houses that regularly serve the Sheffield to Nottingham
              corridor, Leicester represents a natural M1 extension southward. Rather than sourcing a
              separate local installer for Leicester work — with the overhead of another briefing
              relationship and a different quality baseline — WRPX covers Leicester under the same
              subcontract arrangement as your Nottingham, Derby or Sheffield sites.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Leicester also has a substantial university presence — De Montfort University and the
              University of Leicester both run significant estates with ongoing wayfinding, environmental
              graphics and brand refresh programmes. Fit-out contractors and agencies managing graphics
              programmes in higher education often need a subcontract installer who understands access
              constraints, term-time scheduling and the substrate variety common in older university
              buildings. We cover this as part of our broader education sector capability.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Leicester client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Leicester
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional campaign
                vinyls and branded window installs across Leicester city centre, Highcross, Fosse Park,
                Narborough Road and Leicestershire commercial frontages. Clean application, straight
                cuts, edge-to-edge finish.
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
                Brand vinyls, promotional graphics and full rebrands on Leicester shop fronts,
                fascias and external retail surfaces. City centre retail, out-of-town parks and
                independent commercial strips — consistent installation standard across every
                location in the programme.
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
                retail and office interiors across Leicester and Leicestershire. Substrate assessed
                before installation — painted plaster, MDF, block, timber — any issues flagged,
                not papered over.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps &amp; fleet livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wrap and livery installation for vans, cars and fleet vehicles
                operating across Leicester and the East Midlands. Photographic sign-off per vehicle.
                Fleet programmes handled as a single subcontract with consolidated records across
                the whole estate.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; wayfinding vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Promotional floor vinyls, anti-slip film, directional and wayfinding floor graphics
                for Leicester retail, office, healthcare and higher-education environments. Laminated
                and rated for the appropriate traffic level. Anti-slip specification available for
                wet areas and public spaces.
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
                Leicester as part of a wider East Midlands programme — combining Leicester with
                Nottingham, Derby, Loughborough or Hinckley in a single co-ordinated installation
                run. One crew, consistent standards and consolidated records across the whole
                programme. The Sheffield to Leicester corridor covered under one subcontract.
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
              Who uses WRPX as a Leicester installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Leicester clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format printed material to Leicestershire clients and needing a trusted trade installer for the site work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fleet operators and logistics businesses in Leicester&apos;s distribution and manufacturing base needing vehicle livery installed on a subcontract basis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing commercial and retail fit-outs in Leicester who need a vinyl installation specialist slotted in at the right programme stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies running multi-site campaigns across the East Midlands — Leicester often sits alongside Nottingham and Derby in the same brief</span>
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
              Leicester, Loughborough &amp; East Midlands coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Leicester is reached via the M1 as part of scheduled East Midlands corridor runs.
              We cover Leicester city centre, Highcross shopping centre, Fosse Park, Narborough Road,
              the Belgrave Road and St George&apos;s commercial corridors, and Leicestershire business
              parks and industrial estates. Where programmes justify it, we also combine Leicester
              with Nottingham, Derby, Loughborough or further M1 corridor sites in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Leicester · Loughborough · Hinckley · Coalville · Melton Mowbray · Market Harborough · Nottingham · Derby
              </strong>{" "}
              and the wider M1 East Midlands corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
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
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — subcontract installation in Leicester
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Leicester?",
                a: "Leicester is approximately 75–85 minutes from our South Yorkshire base via the M1. We cover Leicester city centre, Highcross, Fosse Park, Narborough Road and surrounding Leicestershire commercial and industrial areas as part of scheduled East Midlands corridor runs.",
              },
              {
                q: "Do you work under our brand with Leicester clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Leicester client sees your brand throughout. Photographic sign-off provided at completion.",
              },
              {
                q: "Can you handle Leicester alongside Nottingham and Derby in the same programme?",
                a: "Yes — Leicester, Nottingham and Derby all sit on the M1 East Midlands corridor and can be covered in a combined run. If your programme spans multiple East Midlands cities, we handle them under one subcontract arrangement with consolidated documentation.",
              },
              {
                q: "Do you cover Loughborough and surrounding Leicestershire areas as well?",
                a: "Yes — Loughborough, Hinckley, Coalville, Melton Mowbray and Market Harborough are all within the Leicester coverage area. Loughborough in particular is a regular addition to East Midlands runs given its position between Leicester and Nottingham on the M1 corridor.",
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
              Subcontract installation in Leicester — let&apos;s talk
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
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
