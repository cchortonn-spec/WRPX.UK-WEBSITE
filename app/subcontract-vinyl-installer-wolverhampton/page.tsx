import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Wolverhampton — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Wolverhampton, the Black Country and the West Midlands for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M6/M5 corridor from South Yorkshire into Wolverhampton.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wolverhampton/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Wolverhampton — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Wolverhampton, the Black Country and the West Midlands. White-label available. WRPX installs what you supply — M6 and M5 corridor from South Yorkshire, covering Wolverhampton city centre, Walsall, Dudley, West Bromwich, Stourbridge, Kidderminster and the wider WV and DY postcode commercial zones."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Wolverhampton", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-wolverhampton/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wolverhampton is approximately 90–110 minutes from our South Yorkshire base via the M1 and M6. We cover Wolverhampton city centre, the Mander Centre and Wulfrun Centre retail areas, the i54 South Staffordshire business park, Walsall, Dudley, West Bromwich, Oldbury, Stourbridge, Kingswinford and the wider Black Country WV and DY postcode commercial zone. Where programmes combine Wolverhampton with Birmingham, Coventry, or points further north, we run them as a single extended corridor trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Wolverhampton installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We attend in unbranded or re-branded vehicles under your instructions. Your Wolverhampton or Black Country client sees your company throughout the installation. We provide full photographic documentation under your agreed sign-off format at job completion — before, during installation, and completed sign-off images.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl graphics do you install on subcontract in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition graphics, office interior graphics, retail and hospitality graphics, and multi-site rollout programmes across Wolverhampton and the Black Country. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Wolverhampton alongside Birmingham and Coventry in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Wolverhampton and the Black Country sits 15–20 minutes west of Birmingham on the M6/M5 junction. It combines naturally with Birmingham city centre, Coventry, Leicester and Nottingham for multi-city Midlands programmes. If your brief covers Wolverhampton, Birmingham, the East Midlands and further north into South Yorkshire, WRPX can cover the full West Midlands to Yorkshire corridor under one subcontract arrangement with consolidated documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Black Country industrial and commercial belt on subcontract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Black Country comprises one of the UK's densest concentrations of commercial and industrial premises outside London. We cover Walsall, Dudley, West Bromwich, Oldbury, Smethwick, Stourbridge, Kingswinford, Tipton and Brierley Hill. This includes the Black Country Route (A41) commercial corridor, Merry Hill and Brierley Hill retail, the i54 South Staffordshire business park and the Wolverhampton Science and Technology Park. Brand rollouts, corporate fit-outs and retail programmes across these locations handled under one subcontract.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerWolverhamptonPage() {
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
            Subcontract · Wolverhampton &amp; Black Country
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Wolverhampton &amp; Black Country
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Wolverhampton, Walsall, Dudley, the Black Country and the wider West Midlands.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics, retail
            graphics and wayfinding systems — on your instructions, under your brand, with full photographic
            documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6/M5 West Midlands corridor</strong>{" "}
                — Wolverhampton covered as part of extended corridor runs connecting to Birmingham, Coventry and the East Midlands
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
              Discuss a Wolverhampton subcontract job
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

      {/* Why Wolverhampton */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Wolverhampton &amp; the Black Country — the M6/M5 hub at the western edge of the Midlands
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wolverhampton is a city of just under 270,000 people and the commercial capital of the Black Country — a dense
              industrial and commercial belt that includes Walsall, Dudley, West Bromwich, Oldbury, Smethwick, Stourbridge and
              Brierley Hill. The Black Country alone accounts for over 9,000 businesses operating across manufacturing,
              logistics, automotive supply chain, retail and professional services — a geography that generates continuous
              demand for brand graphics, retail signage, fleet livery, office interior graphics and wayfinding systems.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Wolverhampton sits at the junction of the M6 and M54 — directly connected to Birmingham via the M6/M5 (15–20
              minutes), and accessible from our South Yorkshire base via the M1 and M6 in 90–110 minutes. This makes it
              a natural extension of the same corridor that takes in Stoke-on-Trent, Birmingham and Coventry from South
              Yorkshire — meaning WRPX can cover a programme spanning the full West Midlands and M6 corridor under one
              subcontract arrangement rather than sourcing separate installers for Wolverhampton and Birmingham separately.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography is substantial and varied. Wolverhampton city centre contains the Mander Centre and
              Wulfrun Centre retail zones, the Wolverhampton Science and Technology Park, a significant commercial office
              district, and a cluster of major employer headquarters. The i54 South Staffordshire business park — home to
              Jaguar Land Rover advanced manufacturing and a concentration of aerospace, defence and automotive supply chain
              businesses — is 10 minutes north of Wolverhampton city centre on the M54. Merry Hill and Brierley Hill to the
              south of Dudley is one of the UK&apos;s largest out-of-town retail destinations. Each of these represents
              a distinct category of installation demand — corporate office graphics at i54, retail brand programmes at
              Merry Hill, and city centre retail and hospitality graphics within Wolverhampton itself.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready to
              apply. We prepare the surface, install to spec and deliver a signed-off photo pack. Your
              Wolverhampton or Black Country client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Wolverhampton &amp; the Black Country
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls and branded window
                installs across Wolverhampton city centre retail frontages, the Mander Centre, Wulfrun Centre, Walsall
                town centre, Dudley, Brierley Hill and Merry Hill retail. Clean application, straight cuts, edge-to-edge
                finish — consistent whether it is one unit or a 40-site Black Country brand rollout.
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
                Brand vinyls, promotional graphics and full rebrands on Wolverhampton and Black Country shop fronts,
                fascias and external retail surfaces. Wolverhampton city centre, the Mander Centre concourse, Walsall,
                Dudley town centre, Stourbridge Glass Quarter, Merry Hill and the wider Black Country commercial
                strips — consistent installation standard whether it is a single site or a multi-location programme.
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
                Branded murals, feature wall vinyls and large-format wall graphics for commercial, office and hospitality
                interiors across Wolverhampton and the Black Country. Substrate assessed before installation — painted
                plaster, MDF, block, glazed partitions, render, concrete — any issues flagged before material is committed.
                i54 business park, corporate offices, hospitality venues and retail interiors all covered.
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
                Directional floor vinyls, branded floor graphics, anti-slip rated floor films and promotional floor
                campaigns across Wolverhampton retail, the Black Country manufacturing and logistics sector, and commercial
                premises throughout the WV and DY postcode zone. All floor vinyls are applied to spec and confirmed
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
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for vehicles across
                Wolverhampton and the Black Country — automotive and logistics-heavy region where fleet identity
                is a frequent brief. i54 businesses, logistics operators on the M54, Black Country manufacturing
                firms and national brand fleets serviced through your print or sign company under one subcontract.
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
                Wayfinding systems, department identity graphics, office interior wall art, reception vinyls and
                corporate campus graphics across Wolverhampton business parks, the i54 science and technology
                campus, Black Country commercial premises and the wider West Midlands WV postcode zone. Installed to
                the same consistent standard across every site in a multi-location programme.
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

      {/* The M6/M5 Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            The M6/M5 corridor — covering Wolverhampton as part of a wider West Midlands programme
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Wolverhampton is rarely a standalone brief for sign companies running multi-location brand programmes. It sits
            at the M6/M54 junction — 15–20 minutes from Birmingham via the M6, 30–40 minutes from Coventry via the
            M6/A45 via Birmingham, and 90–110 minutes from our South Yorkshire base. The practical effect is that
            Wolverhampton and the Black Country can be covered on the same corridor run as Birmingham, Stoke-on-Trent,
            Coventry and points northward through the East Midlands into Yorkshire.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For a sign company running a West Midlands retail brand rollout that touches Wolverhampton, West Brom,
            Birmingham and Coventry, WRPX can deliver the full programme under one subcontract — same installer, same
            installation standard, same documentation format, single point of contact. No co-ordinating three different
            local installers across four cities.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { city: "Birmingham", slug: "subcontract-vinyl-installer-birmingham", detail: "15–20 min via M6/M5" },
              { city: "Telford & Shrewsbury", slug: "subcontract-vinyl-installer-telford", detail: "20–25 min via M54 west" },
              { city: "Stoke-on-Trent", slug: "subcontract-vinyl-installer-stoke-on-trent", detail: "45 min via M6 north" },
              { city: "Coventry", slug: "subcontract-vinyl-installer-coventry", detail: "35 min via M6/A45" },
              { city: "Leicester", slug: "subcontract-vinyl-installer-leicester", detail: "60 min via M69/M1" },
              { city: "Sheffield", slug: "subcontract-vinyl-installer-sheffield", detail: "Home base · 90 min via M6/M1" },
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
            Every Wolverhampton and Black Country subcontract job follows the same straightforward process. You brief us
            on the installation — site address, substrate, material spec, access requirements, any site-specific
            constraints. We carry out a pre-installation surface assessment where needed, confirm any substrate issues
            before material is committed, carry out the installation to your spec, and deliver a photo pack in your
            agreed format. Your client receives a completed installation without ever knowing WRPX was involved.
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
                For larger or more complex installs, we carry out a pre-installation substrate assessment and flag any
                issues before material is produced. Nothing is discovered on install day.
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
            Common questions about subcontract installation in Wolverhampton
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">How far is WRPX from Wolverhampton?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wolverhampton is approximately 90–110 minutes from our South Yorkshire base via the M1 and M6.
                We cover Wolverhampton city centre, Walsall, Dudley, West Bromwich, Oldbury, Stourbridge, Kingswinford,
                the i54 South Staffordshire business park, Merry Hill and the wider Black Country WV and DY postcode
                commercial zone. Where programmes combine Wolverhampton with Birmingham, Coventry or points further
                north, we run them as a single extended corridor trip.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Do you work white-label on Wolverhampton jobs?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Yes — white-label is standard. We attend in unbranded or re-branded vehicles under your instructions.
                Your Wolverhampton or Black Country client sees your company throughout. We provide full photographic
                documentation under your agreed sign-off format at completion.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Can you cover the i54 business park and Merry Hill on subcontract?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Yes. The i54 South Staffordshire science and technology park — home to JLR, Moog, Eurofins and a
                range of advanced manufacturing and aerospace businesses — is 10 minutes north of Wolverhampton on the
                M54. Merry Hill and Brierley Hill, one of the UK&apos;s largest out-of-town retail destinations, is 8
                miles south-east. Both are within our standard Wolverhampton coverage area. Corporate office graphics,
                manufacturing facility wayfinding, retail brand graphics and multi-site programmes across these
                locations handled under one subcontract.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">What is the typical lead time for a Wolverhampton install?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We aim to confirm installation dates within 2–3 working days of a brief being received and agreed.
                For planned programmes — retail brand rollouts, office fit-out projects, fleet livery batches —
                we schedule well in advance around your programme timeline. Reactive jobs (replacements, urgent
                installs) are accommodated where diary allows, typically with 48–72 hours&apos; notice. Call or
                email us with the brief and we will confirm availability quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Subcontract installation across Wolverhampton &amp; the Black Country
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sign company, print management firm or fit-out contractor with installation work in Wolverhampton, Walsall,
            Dudley, West Bromwich or the wider Black Country? Send us the brief — we will confirm availability and
            talk through the job.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Send us your Wolverhampton brief
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
            to discuss a Wolverhampton or Black Country subcontract job directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted">
            <Link href="/subcontract-vinyl-installer-birmingham/" className="hover:text-accent hover:underline">
              Birmingham subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-telford/" className="hover:text-accent hover:underline">
              Telford &amp; Shrewsbury subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="hover:text-accent hover:underline">
              Stoke-on-Trent subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-coventry/" className="hover:text-accent hover:underline">
              Coventry subcontract
            </Link>
            <span>·</span>
            <Link href="/subcontract-vinyl-installer-manchester/" className="hover:text-accent hover:underline">
              Manchester subcontract
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
