import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Telford & Shrewsbury — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Telford, Shrewsbury and the Shropshire TF postcode zone for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M54 corridor from Wolverhampton into Telford and Shrewsbury.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-telford/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Telford & Shrewsbury — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Telford, Shrewsbury and the Shropshire TF postcode zone. White-label available. WRPX installs what you supply — M54 corridor from Wolverhampton, covering Stafford Park, Hortonwood Industrial Estate, Halesfield, Shrewsbury town centre, Telford Shopping Centre, the wider TF and SY postcode commercial zones."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Telford & Shrewsbury", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-telford/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Telford and Shrewsbury?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Telford is approximately 2–2.5 hours from our South Yorkshire base via the M1 and M6/M54. Shrewsbury is 15–20 minutes further west from Telford on the A5/M54. We cover the full TF postcode zone — Telford town centre, Stafford Park, Hortonwood Industrial Estate, Halesfield, Hadley Park, Wellington, Ironbridge and the wider Shropshire commercial belt. Where programmes combine Telford with Wolverhampton, Birmingham or points further north into Yorkshire, we run them as a single extended corridor trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Telford and Shrewsbury installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We attend in unbranded or re-branded vehicles under your instructions. Your Telford or Shrewsbury client sees your company throughout the installation. We provide full photographic documentation under your agreed sign-off format at job completion — before, during installation, and completed sign-off images.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl graphics do you install on subcontract in Telford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition graphics, office interior graphics, retail and hospitality graphics, and multi-site rollout programmes across Telford, Shrewsbury and the wider Shropshire TF and SY postcode zones. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Telford alongside Wolverhampton and Birmingham in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Telford sits 20–25 minutes west of Wolverhampton via the M54, making it a natural addition to any West Midlands programme. A sign company with a brand rollout covering Telford, Wolverhampton, Birmingham and Coventry can run the full programme under one WRPX subcontract — same installer, same installation standard, same documentation format, single point of contact. No co-ordinating three different local Shropshire and West Midlands installers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Telford's industrial estates and business parks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Telford's commercial geography is built around a network of purpose-built industrial and business estates. Stafford Park is one of the UK's largest business parks, home to major manufacturing, distribution and professional services businesses. Hortonwood Industrial Estate and Halesfield are substantial manufacturing and logistics zones. Hadley Park and the Telford Enterprise Zone contain further commercial premises. We cover brand rollouts, fleet livery, wayfinding, retail graphics and corporate fit-out installations across all of these locations under one subcontract.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerTelfordPage() {
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
            Subcontract · Telford &amp; Shrewsbury
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Telford &amp; Shrewsbury
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Telford, Shrewsbury and the wider Shropshire TF and SY postcode zones.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics, retail
            graphics and wayfinding systems — on your instructions, under your brand, with full photographic
            documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M54 corridor from Wolverhampton</strong>{" "}
                — Telford and Shrewsbury covered as part of extended West Midlands corridor runs connecting to Birmingham and South Yorkshire
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
              Discuss a Telford subcontract job
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

      {/* Why Telford */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Telford &amp; Shrewsbury — the M54 corridor at the western edge of the Midlands
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Telford is a purpose-built new town of around 175,000 people in Shropshire, created in the
              1960s and 1970s to accommodate overspill from the West Midlands conurbation. Unlike most towns
              of similar population, Telford&apos;s commercial geography is defined by a network of large,
              purpose-built industrial and business estates rather than a traditional town-centre commercial core.
              Stafford Park — one of the UK&apos;s largest business parks — sits east of the town centre and
              houses a concentration of manufacturing, distribution, professional services and public sector
              tenants. Hortonwood and Halesfield industrial estates to the north and south cover a further
              substantial footprint of light and heavy manufacturing, logistics and trade premises.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Shrewsbury, 15 kilometres west of Telford, is the county town of Shropshire and a different
              commercial character entirely — a traditional market town with a historic town centre, a
              substantial NHS hospital estate, Shropshire County Council headquarters, retail and hospitality
              in the town centre, and a ring of commercial and retail parks on the edge of the town. The SY
              postcode zone surrounding Shrewsbury covers a dispersed rural and market-town commercial geography
              across Shropshire that generates periodic graphics and signage demand from retail chains, regional
              businesses and public sector bodies.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Telford sits at junction 7 of the M54 — 20–25 minutes west of Wolverhampton, and accessible
              from our South Yorkshire base via the M1 and M6/M54 in approximately 2–2.5 hours. This makes
              Telford a natural western extension of the same corridor that runs from Sheffield through
              Stoke-on-Trent, Birmingham, Wolverhampton and into Shropshire — meaning a sign company running a
              West Midlands brand programme can add Telford and Shrewsbury without sourcing a separate Shropshire
              installer.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to apply.
              We prepare the surface, install to spec and deliver a signed-off photo pack. Your Telford or
              Shrewsbury client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Telford &amp; Shrewsbury
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls and branded
                window installs across Telford town centre retail frontages, the Telford Shopping Centre,
                Shrewsbury town centre, the Belmont and Pride Hill shopping areas, and commercial premises
                throughout the TF and SY postcode zone. Clean application, straight cuts, consistent finish —
                whether it is one unit or a multi-site Shropshire brand rollout.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Industrial estate &amp; business park graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Brand vinyls, wayfinding, corporate identity graphics and fleet livery across Telford&apos;s
                business park and industrial estate portfolio — Stafford Park, Hortonwood Industrial Estate,
                Halesfield, Hadley Park, Tweedale and the Telford Enterprise Zone. Manufacturing, logistics
                and distribution businesses across these estates generate regular demand for brand graphics,
                vehicle fleet livery, building signage and internal wayfinding vinyls.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial-installation/" className="text-accent hover:underline">
                  Commercial installation overview
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; large-format graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics for commercial, office and
                hospitality interiors across Telford and Shrewsbury. Substrate assessed before installation —
                painted plaster, MDF, block, glazed partitions, render, concrete — any issues flagged before
                material is committed. Business parks, hotel chains, corporate offices and retail interiors
                across the TF postcode all covered.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; anti-slip vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls, branded floor graphics, anti-slip rated floor films and promotional
                floor campaigns across Telford retail, the Shropshire NHS estate, manufacturing and logistics
                premises throughout the TF postcode zone. All floor vinyls applied to spec and confirmed
                compliant before sign-off.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Vehicle wraps &amp; fleet livery</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for vehicles
                across Telford and Shropshire — a manufacturing and logistics region where fleet identity
                is a frequent and substantial brief. Stafford Park businesses, logistics operators on the M54,
                and national brand fleets serviced through your print or sign company under one subcontract
                arrangement covering the TF zone.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; corporate interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics, office interior wall art, reception vinyls
                and corporate campus graphics across Telford business parks, Shrewsbury civic and NHS premises,
                and commercial estates across the wider Shropshire TF and SY postcode zone. Installed to the
                same consistent standard across every site in a multi-location programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The M54 Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            The M54 corridor — covering Telford as part of a wider West Midlands programme
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Telford is rarely a standalone brief for sign companies running multi-location brand programmes.
            It sits at the western end of the M54 — 20–25 minutes from Wolverhampton, 40–50 minutes from
            Birmingham, and 2–2.5 hours from our South Yorkshire base. For a sign company whose brief
            already includes Wolverhampton and Birmingham, adding Telford and Shrewsbury does not require
            sourcing a separate Shropshire installer. WRPX can cover the full M54 corridor from Sheffield
            into Shropshire under one subcontract.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For a brand rollout covering retail or commercial premises across the West Midlands and Shropshire
            — Telford Shopping Centre, Shrewsbury retail, Wolverhampton city centre, Birmingham — WRPX delivers
            the full programme under one subcontract. Same installer, same installation standard, same
            documentation format, single point of contact.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { city: "Wolverhampton", slug: "subcontract-vinyl-installer-wolverhampton", detail: "20–25 min via M54 east" },
              { city: "Birmingham", slug: "subcontract-vinyl-installer-birmingham", detail: "40–50 min via M54/M6" },
              { city: "Stoke-on-Trent", slug: "subcontract-vinyl-installer-stoke-on-trent", detail: "65 min via M6 north" },
              { city: "Coventry", slug: "subcontract-vinyl-installer-coventry", detail: "55 min via M6" },
              { city: "Leicester", slug: "subcontract-vinyl-installer-leicester", detail: "80 min via M6/M1" },
              { city: "Sheffield", slug: "subcontract-vinyl-installer-sheffield", detail: "Home base · 2.5 hrs via M6/M1" },
            ].map(({ city, slug, detail }) => (
              <Link
                key={city}
                href={`/${slug}/`}
                className="card-float block bg-background p-5 hover:border-accent transition-colors"
              >
                <p className="font-semibold text-foreground">{city}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            How subcontract installation works with WRPX
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every Telford and Shrewsbury subcontract job follows the same straightforward process. You brief us
            on the installation — site address, substrate, material spec, access requirements, any site-specific
            constraints. We carry out a pre-installation surface assessment where needed, confirm any substrate
            issues before material is committed, carry out the installation to your spec, and deliver a photo
            pack in your agreed format. Your client receives a completed installation without ever knowing
            WRPX was involved.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-float bg-background p-6">
              <p className="text-lg font-semibold text-accent">01</p>
              <h3 className="mt-2 font-semibold text-foreground">You brief us</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Site address, substrate type, material and spec, access details, any restrictions. We ask the right
                questions upfront so there are no surprises on site.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <p className="text-lg font-semibold text-accent">02</p>
              <h3 className="mt-2 font-semibold text-foreground">We assess and confirm</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                For larger or more complex installs, we carry out a pre-installation substrate assessment and flag
                any issues before material is produced. Nothing is discovered on install day.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <p className="text-lg font-semibold text-accent">03</p>
              <h3 className="mt-2 font-semibold text-foreground">We install</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                On site under your brand. We apply the material to spec, keep your client informed through your
                agreed channel, and manage any on-site variables without escalating to you unnecessarily.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <p className="text-lg font-semibold text-accent">04</p>
              <h3 className="mt-2 font-semibold text-foreground">You receive sign-off</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Full photo pack — before, during and completed sign-off — in your preferred format. Suitable for
                client handover, job record or quality documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Common questions about subcontract installation in Telford &amp; Shrewsbury
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">How far is WRPX from Telford and Shrewsbury?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Telford is approximately 2–2.5 hours from our South Yorkshire base via the M1 and M6/M54.
                Shrewsbury is 15–20 minutes further west. We cover the full TF postcode zone — Telford town
                centre, Stafford Park, Hortonwood, Halesfield, Hadley Park, Wellington, Ironbridge and the
                wider Shropshire commercial belt. Where programmes combine Telford with Wolverhampton, Birmingham
                or points further north, we run them as a single extended corridor trip.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Do you cover Stafford Park and Telford&apos;s industrial estates on subcontract?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Yes — Stafford Park is one of the UK&apos;s largest business parks and sits at the core of our
                Telford coverage. Hortonwood Industrial Estate and Halesfield to the north and south cover a
                further substantial manufacturing and logistics footprint. Hadley Park and the Telford Enterprise
                Zone add further commercial premises. Brand rollouts, fleet livery, wayfinding, corporate office
                graphics and retail programmes across these estates handled under one subcontract.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Can you cover Telford alongside Wolverhampton and Birmingham in the same programme?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Yes — Telford sits 20–25 minutes west of Wolverhampton via the M54, making it a natural addition
                to any West Midlands programme. A sign company with a brand rollout covering Telford,
                Wolverhampton, Birmingham and Coventry can run the full programme under one WRPX subcontract.
                No co-ordinating separate Shropshire and West Midlands installers.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">What is the typical lead time for a Telford install?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We aim to confirm installation dates within 2–3 working days of a brief being received and agreed.
                For planned programmes — retail brand rollouts, office fit-out projects, fleet livery batches —
                we schedule in advance around your programme timeline. Reactive jobs are accommodated where diary
                allows, typically with 48–72 hours&apos; notice. Call or email us with the brief and we will
                confirm availability quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Subcontract installation across Telford &amp; Shrewsbury
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sign company, print management firm or fit-out contractor with installation work in Telford,
            Shrewsbury, Stafford Park or the wider Shropshire TF and SY postcode zone? Send us the brief —
            we will confirm availability and talk through the job.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Send us your Telford brief
            </Link>
            <Link href="/commercial-installation/" className="btn-ghost inline-block text-center">
              Commercial installation overview
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Or call{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="text-accent hover:underline">
              {siteConfig.phone}
            </a>{" "}
            to discuss a Telford or Shrewsbury subcontract job directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted">
            <Link href="/subcontract-vinyl-installer-wolverhampton/" className="hover:text-accent hover:underline">
              Wolverhampton subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="hover:text-accent hover:underline">
              Birmingham subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="hover:text-accent hover:underline">
              Stoke-on-Trent subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="hover:text-accent hover:underline">
              Yorkshire hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
