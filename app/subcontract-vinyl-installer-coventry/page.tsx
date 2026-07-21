import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Coventry — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Coventry and Warwickshire for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M1/M6 corridor into the West Midlands.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Coventry — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Coventry and Warwickshire. White-label available. WRPX installs what you supply — M1/M6 West Midlands corridor, South Yorkshire base."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Coventry", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coventry is approximately 90–105 minutes from our South Yorkshire base via the M1 and M6 or M45, depending on traffic. We cover Coventry city centre, the Coventry ring road commercial zone, Binley and Rowley retail parks, Coventry University campus, Warwick University campus, the A45 corridor east towards Coventry Airport, and the wider CV postcode commercial and industrial areas. Where programmes combine Coventry with Leicester or Loughborough, it sits naturally at the southern end of the M1/A46 corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand for Coventry jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Coventry client sees your company throughout. We provide full photographic documentation under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition and event graphics, office and corporate interior graphics, university campus graphics, healthcare and NHS estate vinyls, and multi-site rollout programmes. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Coventry alongside Leicester and Loughborough in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Coventry sits at the southern end of the M1/A46 corridor, connecting naturally to Leicester and Loughborough for multi-city East Midlands programmes. If your brief covers Coventry, Leicester, Loughborough and Nottingham, or extends further north into South Yorkshire, we can cover the full corridor under one subcontract arrangement with consolidated documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install graphics at Coventry and Warwick universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — both Coventry University and the University of Warwick generate significant ongoing estates graphics programmes: faculty identity, wayfinding, student accommodation graphics, sports facility branding and environmental vinyls. Fit-out contractors, sign companies and agencies managing university graphics programmes can subcontract the installation element to WRPX under the same white-label arrangement used for commercial and retail work.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerCoventryPage() {
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
            Subcontract · Coventry &amp; Warwickshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Coventry &amp; Warwickshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Coventry, Kenilworth, Rugby, Leamington Spa and the wider
            Warwickshire area. We install window graphics, wall wraps, vehicle wraps, shop fronts,
            floor graphics, university campus vinyls and wayfinding systems — on your instructions,
            under your brand, with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M1/M6 West Midlands corridor</strong>{" "}
                — Coventry covered as part of extended corridor runs connecting to Leicester and the East Midlands
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
              Discuss a Coventry subcontract job
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

      {/* Why Coventry */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Coventry — the M6/M1 gateway between the Midlands and Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Coventry sits at the junction of two major motorway corridors — the M6 running
              north-south through the West Midlands, and the M45/A45 connecting east to Leicester
              and the M1. For sign companies and print management firms running installation
              programmes that span the Midlands and the North, Coventry marks the southern end
              of the M1 corridor that runs through Leicester, Loughborough, Nottingham and
              Sheffield. Rather than treating it as a separate trip requiring a different installer,
              WRPX covers Coventry as the natural extension of the East Midlands and Yorkshire
              corridor.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography of Coventry is substantial and varied. The city centre ring
              road zone hosts a dense concentration of retail, office and hospitality premises.
              The Binley and Rowley retail parks to the east of the city and the Torrington Avenue
              and Westwood Business Parks are significant commercial clusters. The A45 corridor
              east towards Coventry Airport and east Warwickshire carries a long strip of trade,
              industrial and logistics premises. To the south, the Kenilworth and Leamington Spa
              corridor adds a significant office and professional services market, including
              major automotive sector tenants connected to Jaguar Land Rover&apos;s historic
              Midlands base and the wider West Midlands automotive supply chain.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Coventry University is one of the largest universities in the UK by student numbers
              and has invested substantially in its city-centre campus buildings, generating ongoing
              estates graphics programmes — faculty identity, wayfinding, student accommodation
              graphics and research facility branding. The University of Warwick, on the A45
              corridor south-west of Coventry, has a large residential campus with similar ongoing
              graphics needs: sports facilities, conference centre, arts centre and extensive
              faculty and departmental identity work.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Coventry client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Coventry
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls
                and branded window installs across Coventry city centre, ring road commercial
                frontages, retail parks and the wider Warwickshire commercial corridor.
                Clean application, straight cuts, edge-to-edge finish every time.
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
                Brand vinyls, promotional graphics and full rebrands on Coventry shop fronts,
                fascias and external retail surfaces. City centre, retail parks and commercial
                strips — consistent installation standard across every location, whether it is
                a single site or a multi-location Midlands brand programme.
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
                office and university interiors across Coventry and Warwickshire. Substrate assessed
                before installation — painted plaster, MDF, block, glazed partitions, concrete —
                any issues flagged before material is committed.
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
                Wayfinding systems, faculty identity vinyls, sports facility branding,
                environmental graphics and accommodation graphics for Coventry University city
                campus and the University of Warwick at Gibbet Hill. Large campus estates with
                active contractor access procedures — academic calendar scheduling, building
                permits and zone-specific access all managed as standard.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet &amp; vehicle wrap installation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet livery, vehicle wrap and partial wrap installation for Coventry and
                Warwickshire businesses — automotive sector, logistics, trade and commercial
                vehicle fleets. Coventry&apos;s automotive heritage means a strong commercial
                vehicle fleet base in the area. We install wraps to the vinyl manufacturer&apos;s
                specification, with photo documentation per vehicle.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site Midlands rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Coventry as part of a wider Midlands and North programme — combining with Leicester,
                Loughborough, Nottingham, Derby or further north into Yorkshire in a single
                co-ordinated installation run. One crew, consistent standards and consolidated
                records across the full corridor. From South Yorkshire to Coventry under one
                subcontract.
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
              Who uses WRPX as a Coventry installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Coventry and Warwickshire clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand on site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format material to CV postcode clients, needing a trusted trade installer for the site work without managing it directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing commercial, retail and university fit-outs in Coventry who need a vinyl installation specialist slotted in at the right programme stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies and brand consultancies running Midlands campaigns — Coventry alongside Leicester, Nottingham and beyond under a single subcontract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Automotive sector businesses and their supply chain contractors running fleet graphics, office and facility graphics programmes across Coventry and Warwickshire</span>
              </li>
            </ul>
            <p className="mt-6 text-sm italic text-muted">
              &quot;Your client sees your brand. WRPX installs to your spec, under your name. You get
              the photo pack — they get the finished job.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Coventry, Warwickshire &amp; West Midlands corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Coventry is reached via the M1 and M45/M6 as part of extended East Midlands and
              West Midlands corridor runs. We cover Coventry city centre and ring road commercial
              zone, Binley and Rowley retail parks, Westwood and Torrington Avenue Business Parks,
              the A45 Coventry Airport corridor, Kenilworth, Leamington Spa, Rugby and surrounding
              Warwickshire commercial areas. Where programmes justify it, we combine Coventry with
              Leicester, Loughborough, Nottingham or further north into South Yorkshire in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Coventry · Kenilworth · Leamington Spa · Rugby · Warwick · Leicester · Loughborough · Nottingham
              </strong>{" "}
              and the wider Warwickshire, East Midlands and M1/M6 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-leicester/" className="text-accent hover:underline">
                Leicester subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-loughborough/" className="text-accent hover:underline">
                Loughborough subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-nottingham/" className="text-accent hover:underline">
                Nottingham subcontract
              </Link>
              <Link href="/sheffield-nottingham-corridor-installation/" className="text-accent hover:underline">
                Sheffield–Nottingham corridor
              </Link>
              <Link href="/subcontract-vinyl-installer-birmingham/" className="text-accent hover:underline">
                Birmingham subcontract
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
            FAQ — subcontract installation in Coventry
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Coventry?",
                a: "Coventry is approximately 90–105 minutes from our South Yorkshire base via the M1 and M45/M6. We cover Coventry city centre, ring road commercial frontages, retail parks, the A45 and Kenilworth corridors, Coventry University campus and the University of Warwick as part of extended Midlands corridor runs.",
              },
              {
                q: "Do you work under our brand with Coventry clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Coventry client sees your brand throughout. Photographic sign-off provided at completion.",
              },
              {
                q: "Can you handle Coventry alongside Leicester and Nottingham in the same programme?",
                a: "Yes — Coventry sits at the southern end of the M1/A46 East Midlands corridor and connects naturally to Leicester, Loughborough, Nottingham and beyond. We cover the full corridor from South Yorkshire to Coventry under one subcontract arrangement with consolidated documentation.",
              },
              {
                q: "Do you install graphics at Coventry University and the University of Warwick?",
                a: "Yes — both universities generate ongoing graphics programmes across their estates, including faculty identity, wayfinding, student accommodation graphics and sports facility branding. We work around academic calendar access constraints and the contractor permit procedures common on large university campuses.",
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
              Subcontract installation in Coventry — let&apos;s talk
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
