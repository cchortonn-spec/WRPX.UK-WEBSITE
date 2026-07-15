import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wayfinding Graphics Installation — Subcontract Vinyl for Signage Companies & Fit-Out Contractors | WRPX",
  description:
    "Wayfinding vinyl graphics installation on a subcontract basis across South Yorkshire and the East Midlands. WRPX installs directional vinyls, floor arrows, room identification graphics and wayfinding systems for sign companies, fit-out firms and facilities managers — white-label, to spec.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/wayfinding-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Wayfinding graphics installation — subcontract vinyl for signage companies and fit-out contractors",
  "Subcontract wayfinding vinyl graphics installation across South Yorkshire and the East Midlands. WRPX installs directional vinyls, floor wayfinding, room identification graphics and large-format wayfinding systems for sign companies and fit-out contractors — white-label, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Wayfinding Graphics Installation", item: "https://www.wrpx.co.uk/wayfinding-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of wayfinding graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install vinyl-based wayfinding including floor directional arrows and zones, wall-mounted room identification vinyls, corridor route vinyls, stairwell graphics, large-format directional vinyls on columns and screens, and window graphics used as wayfinding elements. We install what you supply — we are not a design or print company.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work in live environments like hospitals or business parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — wayfinding installation frequently happens in live environments: hospitals operating on reduced-area closures, business parks with active tenants, schools during term time. We work quietly, minimise disruption and coordinate access with your facilities or site contact before arriving.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on wayfinding projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. The building manager or facilities contact sees your company on site. We provide photo documentation in your agreed format for sign-off.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle phased wayfinding installations across a large building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — phased installations across multiple floors, wings or building zones are standard for wayfinding projects. We work to your phasing plan, accommodate access windows and document each phase independently so sign-off can happen progressively rather than all at once.",
      },
    },
  ],
};

export default function WayfindingGraphicsInstallationPage() {
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
            Subcontract Installation · Wayfinding
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Wayfinding Graphics Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX installs vinyl-based wayfinding graphics on a subcontract basis for{" "}
            <strong className="text-foreground">sign companies, fit-out contractors and facilities management firms</strong>{" "}
            across South Yorkshire and the East Midlands. Floor directional vinyls,
            room identification graphics, corridor vinyls, stairwell graphics and large-format
            directional systems — installed to spec, white-label, with photographic sign-off per zone.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Wayfinding-specific installation knowledge</strong>{" "}
                — positioning accuracy, sequencing and legibility standards understood
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Works in live environments — hospitals, business parks, schools, retail</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label — your client, your brand, our installation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Photo documentation per zone or phase — suitable for formal project sign-off</span>
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
              Discuss a wayfinding project
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

      {/* Context section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why wayfinding installation is a specialist trade job
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wayfinding vinyl is not the same as promotional graphics. The materials need to go
              in the right place — not approximately the right place. Floor arrows need to be
              square to the corridor. Room numbers need to be level and consistent across every
              door. Zone vinyls need to match the colour system exactly. When wayfinding is installed
              badly, the whole scheme reads as cheap regardless of how good the design is.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Most sign companies design and supply wayfinding systems but don&apos;t carry the
              installation labour in-house — particularly for large-scale projects across hospitals,
              healthcare facilities, business parks, university campuses or multi-floor commercial
              buildings. WRPX provides that installation trade resource on a subcontract basis:
              you supply the material to the site, we install it to your specification and
              return a zone-by-zone photo record.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We work in live environments as standard. Hospitals don&apos;t close for graphics
              installation. We coordinate access windows with your facilities or site contact
              in advance, minimise corridor disruption and don&apos;t require constant
              supervision on site.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Wayfinding vinyl we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional arrows, floor zone colour systems, pedestrian route vinyls and floor
                wayfinding maps. Applied to sealed commercial flooring — anti-slip specification
                where required. Substrate assessed before installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Room identification &amp; door vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Room number vinyls, department identification, door graphics and entrance
                identification across multi-room, multi-floor environments. Consistent positioning
                and level across every door — not guesswork from room to room.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Corridor &amp; wall route graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall-mounted directional vinyls, colour zone banding, department graphics and
                large-format corridor vinyls. Applied to plasterboard, block render, painted
                brick and commercial wall surfaces. Surface assessed — unsuitable substrates
                flagged before installation.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stairwell &amp; lift graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Floor level identification, stairwell zone graphics, lift lobby vinyls and
                emergency route graphics. Multi-floor installation managed in a single visit
                where access allows.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window &amp; glass wayfinding elements</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted or branded vinyl applied to glass partitions, windows and glazed screens
                as part of a wayfinding or zoning scheme. Applied flush, bubble-free and
                matched to system colour spec.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation →
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Large-scale &amp; multi-phase wayfinding schemes</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hospital wayfinding overhauls, university campus signage, business park
                navigation systems and multi-building commercial estates. Phased installation
                with zone-by-zone sign-off and consolidated photo documentation.
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

      {/* Environments */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Environments we work in
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Wayfinding installation is rarely a single closed environment with a blank-canvas
            handover. We are used to working in buildings that remain open and operational
            during installation — and we organise our work around that reality.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: "Hospitals & healthcare facilities", detail: "Zone-at-a-time access, infection control awareness, minimal disruption to patient areas" },
              { label: "Business parks & office complexes", detail: "Tenant-occupied buildings, out-of-hours or weekend access managed with facilities" },
              { label: "University campuses", detail: "Multi-building, multi-floor schemes across term time and vacation windows" },
              { label: "Retail & leisure centres", detail: "Live retail environments, wayfinding updates around trading hours" },
              { label: "Warehouses & logistics hubs", detail: "Floor zone markings, aisle identification and safety wayfinding in warehouse environments" },
              { label: "New-build commercial fit-outs", detail: "Wayfinding installed as part of the broader fit-out programme alongside other trades" },
            ].map(({ label, detail }) => (
              <div key={label} className="card-float bg-card p-5">
                <p className="font-semibold text-foreground text-sm">{label}</p>
                <p className="mt-2 text-xs text-muted leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Wayfinding installation coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover wayfinding graphics installation across South Yorkshire (Sheffield,
              Doncaster, Rotherham, Barnsley, Chesterfield), West Yorkshire (Leeds, Wakefield,
              Bradford, Huddersfield), North Yorkshire (York, Harrogate) and the East Midlands
              (Nottingham, Derby, Mansfield, Lincoln). Multi-phase projects across these regions
              handled under a single subcontract arrangement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                Yorkshire subcontract hub
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company partners
              </Link>
              <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                Retail fit-out graphics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — wayfinding graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What wayfinding graphics do you install?",
                a: "Floor directional vinyls, room identification vinyls, corridor zone graphics, wall-mounted directional vinyls, stairwell floor level graphics, lift lobby vinyls, glass partition vinyls and large-format directional systems. We install what you supply — we are not a design or print company.",
              },
              {
                q: "Do you work in live environments like hospitals?",
                a: "Yes — live environment installation is standard for us. We coordinate access windows with your facilities or site contact in advance, minimise disruption to operational areas and work zone by zone so sign-off can progress through the building rather than waiting for the whole scheme to complete.",
              },
              {
                q: "Do you work white-label on wayfinding projects?",
                a: "Yes — white-label by default. The building manager sees your company on site. We provide zone-by-zone photo documentation in your agreed sign-off format.",
              },
              {
                q: "Can you handle a phased wayfinding installation?",
                a: "Yes. We work to your phasing plan — floor by floor, wing by wing or building by building. Each phase documented independently so sign-off can happen progressively.",
              },
              {
                q: "What surfaces do you apply wayfinding vinyl to?",
                a: "Commercial flooring (smooth concrete, VCT, ceramic tile), plasterboard, painted brick, render, glass partitions and painted MDF. We assess each surface before applying and flag unsuitable substrates — rather than apply over a surface that will cause adhesion failure.",
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
              Wayfinding graphics installation — let&apos;s talk
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the building, the scope and the programme. We&apos;ll confirm availability
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
