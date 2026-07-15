import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Healthcare Graphics Installation — NHS & Hospital Vinyl for Sign Companies & Contractors | WRPX",
  description:
    "Subcontract healthcare graphics installation for NHS trusts, private hospitals and healthcare fit-out contractors. WRPX installs patient environment vinyls, ward graphics, infection-control zone markings and large-format wall graphics — white-label, to spec, in live clinical environments.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/healthcare-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Healthcare graphics installation — NHS and hospital vinyl for sign companies and fit-out contractors",
  "Subcontract healthcare graphics installation across South Yorkshire and the East Midlands. WRPX installs patient environment vinyls, ward graphics, infection-control zone markings and feature wall vinyls in NHS trusts, private hospitals and healthcare environments — white-label, photographic sign-off, live clinical environment experience."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Healthcare Graphics Installation", item: "https://www.wrpx.co.uk/healthcare-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of healthcare vinyl graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install patient environment vinyls (ward colour schemes, feature wall graphics, patient room artwork), infection-control zone floor and wall markings, corridor graphics and zoning vinyls, room identification vinyls, fire door graphics, and large-format branded wall vinyls in reception and public areas. We are installation-only — you supply the printed or cut material, we install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install in live NHS hospitals and wards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — healthcare installation frequently takes place in live or partially live clinical environments. We work to restricted-area closures, co-ordinate access with your facilities or estates contact in advance, operate quietly and with minimal disruption, and follow infection-control protocols on site.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand on NHS trust contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork and hand back to your site manager. The NHS trust or estates team sees your company throughout. We provide photographic documentation at completion under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "Which healthcare environments do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS acute trusts, GP surgery refurbishments, private hospitals and clinics, mental health facilities, care homes, hospices and any healthcare fit-out or refurbishment programme requiring vinyl installation. We cover South Yorkshire, West Yorkshire and the East Midlands — Sheffield, Leeds, Doncaster, Nottingham, Derby and surrounding areas.",
      },
    },
  ],
};

export default function HealthcareGraphicsInstallationPage() {
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
            Healthcare &amp; NHS · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Healthcare Graphics Installation — NHS &amp; Hospital Vinyl
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, healthcare fit-out contractors and NHS supply-chain partners</strong>{" "}
            delivering patient environment graphics, ward vinyls, infection-control zone markings
            and feature wall graphics in clinical settings. We install on a subcontract basis — in
            live environments, under your brand, with photographic sign-off.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Live clinical environment experience</strong>{" "}
                — restricted access, quiet working, infection-control protocol compliance
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — NHS trust sees your company, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                Photo documentation at each stage — surface prep, installation, completion sign-off
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — substrate assessment, not just fitting
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a healthcare graphics project
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

      {/* Why Healthcare is Different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why healthcare installation is different from standard commercial work
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Vinyl installation in NHS trusts and private healthcare settings demands a different
              approach from standard commercial work. Access windows are narrow — often restricted
              to early mornings or weekend sessions to minimise clinical disruption. Infection-control
              protocols must be followed from the moment you arrive on site. Noise, dust and odour
              are managed differently when patients are present in adjacent wards. Substrate
              conditions vary significantly — healthcare walls are frequently painted with
              antimicrobial emulsions that need specific adhesive compatibility, and existing
              vinyls on curved or textured surfaces need proper preparation before new graphics go on.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX has experience installing in live and partially live clinical environments.
              We co-ordinate access with your estates or facilities contact in advance, confirm
              site-specific infection-control requirements, and work within the time and access
              constraints the trust sets — not the other way around.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You design, print and supply the material. We assess
              the substrate, install to spec and hand back a full photographic completion record.
              The NHS trust or client organisation sees your company throughout.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Healthcare graphic types we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Patient environment &amp; ward vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Feature wall vinyls for patient bays, ward colour-coding schemes, calming nature
                imagery for dementia and mental health environments, and room identification vinyls.
                Applied to painted walls, glass partitions and plywood bay surrounds — substrate
                assessed before installation and surface conditions fed back to your team before
                work starts.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Infection-control zone markings</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Floor and wall zone demarcation vinyls — clean/dirty zone boundaries, restricted
                area floor arrows and colour-coded corridor zoning. Anti-slip film where floor
                vinyls are specified in clinical areas. Applied to the substrate spec your infection-
                control team or designer specifies.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Corridor &amp; department graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format wall vinyls in hospital corridors, atria and department entrances.
                Brand consistency across multiple departments or sites. Graphics on curved walls,
                rough plaster and textured surfaces handled correctly — not forced onto an unsuitable
                substrate without flagging it first.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Reception &amp; public area branding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                NHS trust branding, private hospital brand vinyls and large-format reception wall
                graphics. Window graphics and frosted film on glass partitions in waiting areas and
                main entrances. Installed to the same standard as any commercial commission —
                substrate prep, clean edges, no bubbles.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding vinyl support</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Vinyl elements of a broader wayfinding system — floor direction arrows, room and
                bay number vinyls, lift lobby graphics and colour-coded zone vinyls that support
                a wider signage scheme. We install the vinyl component; the signage company or
                fit-out contractor manages the total scope.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site NHS programme rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large NHS trusts and private healthcare groups with multiple sites across South
                Yorkshire and the East Midlands. One installation partner, consistent standards
                at every site, consolidated photo documentation across the whole programme.
                Sheffield, Doncaster, Leeds, Nottingham and Derby all covered under one arrangement.
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

      {/* Who this is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Who this service is for
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              This is a B2B subcontract service. The right buyer is a business that wins NHS or
              healthcare graphic supply contracts, then needs an experienced vinyl installer to
              handle the installation component on site.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies and signage contractors</strong>{" "}
                  — you design and manufacture the graphics system; WRPX installs the vinyl elements
                  under your brand on NHS trust sites.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Healthcare fit-out and refurbishment contractors</strong>{" "}
                  — vinyl installation as a subcontract package within a larger ward or department
                  refurbishment programme.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Print management firms and NHS supply-chain partners</strong>{" "}
                  — you supply the printed material through a framework agreement; WRPX handles
                  installation at each trust or site.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Graphic design and brand agencies</strong>{" "}
                  — delivering a patient environment or NHS brand refresh project; WRPX installs
                  the final output white-label, feeding back photo completion records to your team.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground">
              Healthcare graphics coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install healthcare graphics on a subcontract basis across South Yorkshire, West
              Yorkshire and the East Midlands — covering NHS trusts and private healthcare sites in
              Sheffield, Rotherham, Doncaster, Barnsley, Leeds, Wakefield, Huddersfield, Nottingham,
              Derby and surrounding areas.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield Teaching Hospitals · Rotherham NHS · Doncaster &amp; Bassetlaw NHS
                · Leeds Teaching Hospitals · Nottingham University Hospitals · University Hospitals
                Derby &amp; Burton
              </strong>{" "}
              and the private healthcare sector across the same geography.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial installation overview
              </Link>
              <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                Wayfinding graphics installation
              </Link>
              <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
                Multi-site rollout installation
              </Link>
              <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
                Sign company installation partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — healthcare vinyl graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of healthcare vinyl graphics do you install?",
                a: "Patient environment vinyls (ward colour schemes, feature wall graphics, patient room artwork), infection-control zone floor and wall markings, corridor graphics and zoning vinyls, room identification vinyls, fire door graphics, and large-format branded wall vinyls in reception and public areas. We are installation-only — you supply the material, we install to spec.",
              },
              {
                q: "Do you install in live NHS hospitals and wards?",
                a: "Yes — we work to restricted-area closures, co-ordinate access with your estates or facilities contact in advance, operate with minimal disruption and follow infection-control protocols on site. Healthcare installation in live environments is a specific skill set we have experience with.",
              },
              {
                q: "Can you work under our brand on NHS trust contracts?",
                a: "Yes — white-label by default. We attend under your instructions, carry your paperwork and hand back to your site manager. The NHS trust or estates team sees your company throughout. We provide photographic documentation at completion under your agreed sign-off format.",
              },
              {
                q: "How do you handle antimicrobial-painted walls common in NHS environments?",
                a: "We assess substrate compatibility before committing to installation. Antimicrobial paints and eggshell surfaces can cause adhesion issues with certain vinyl products. We flag any substrate concerns to your team before work starts — we do not force material onto an unsuitable surface and hand it back hoping it holds.",
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
              Healthcare graphics installation — let&apos;s discuss your project
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the trust or site, the scope, access constraints and your timeline.
              We&apos;ll confirm availability and give you a clear installation quote for
              the vinyl element of your programme.
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
