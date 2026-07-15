import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Doncaster — Trade Installation Partner | WRPX",
  description:
    "WRPX provides subcontract vinyl installation across Doncaster and South Yorkshire. Sign companies, print firms and agencies use us as a white-label installation partner — you supply the graphics, we install them.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-doncaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installation — Doncaster and South Yorkshire",
  "Specialist subcontract and white-label vinyl installation for sign companies, print management firms, marketing agencies and commercial clients in Doncaster and South Yorkshire. WRPX installs window graphics, wall wraps, vehicle wraps and retail graphics under your brand."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Doncaster", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-doncaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you cover Doncaster for subcontract installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Doncaster is within our core operating area as a South Yorkshire-based installer. Sign companies and print firms in and around Doncaster use WRPX for overflow capacity and ongoing installation programmes.",
      },
    },
    {
      "@type": "Question",
      name: "What do you install in Doncaster on a subcontract basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop fronts and fascia vinyls, vehicle wraps and fleet livery, POS graphics and multi-site retail programmes. Installation-only: you supply the printed or cut material, we install it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label in Doncaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. White-label operation is our default for trade and partner clients. Unbranded vans, your paperwork on site — your Doncaster end clients don't need to know WRPX is involved.",
      },
    },
    {
      "@type": "Question",
      name: "Is Doncaster a good base for regional rollout programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Doncaster sits at the intersection of the A1(M) and M18, giving excellent access to Sheffield, Rotherham, Barnsley, Leeds and the wider Yorkshire and Humber corridor. Multi-site programmes covering the Doncaster area alongside Sheffield or Leeds are a natural fit for WRPX's operating area.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerDoncasterPage() {
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
            Subcontract · Trade partners · Doncaster
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Doncaster &amp; South Yorkshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX provides specialist vinyl installation as a subcontract and{" "}
            <strong className="text-foreground">white-label partner</strong> for sign companies,
            print firms and commercial clients across Doncaster and South Yorkshire. You supply the
            graphics, we install them to a standard your client relationship depends on — under your
            brand, with photographic documentation throughout.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Doncaster covered as standard</strong> — South
                Yorkshire base, no extra travel factor
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">White-label by default</strong> — your Doncaster
                clients don&apos;t need to know WRPX is involved
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                {siteConfig.yearsInBusiness}+ years of professional vinyl application —
                surface-prep led, not a generalist trade
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                A1(M) / M18 access — Doncaster sits at the centre of Yorkshire and Humber
                corridor
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Talk to us about Doncaster subcontract work
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

      {/* Doncaster context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Doncaster — a natural hub for regional installation programmes
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Doncaster&apos;s position at the A1(M) / M18 junction makes it a logical pivot point
              for South Yorkshire and Yorkshire &amp; Humber installation programmes. Sign companies
              and print management firms supplying graphics to Doncaster retail parks, industrial
              estates and commercial units often need an installation partner who can turn around
              jobs in the city and move across the region — Sheffield, Rotherham, Barnsley, Leeds
              — within the same programme.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX provides that regional flexibility from a South Yorkshire base. Doncaster isn&apos;t
              a distant outlier — it&apos;s part of our core operating patch. You brief once, we
              cover the geography.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For Doncaster sign companies and print firms specifically: if your own crew is
              committed elsewhere while a client campaign needs installing across the town, WRPX is
              available as overflow capacity on short notice. Several Doncaster and South Yorkshire
              trade relationships run on this model.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Doncaster subcontract installation — what we cover
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window graphics &amp; vinyl signage
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full-colour window graphics, frosted vinyl, one-way vision film and promotional
                vinyls for Doncaster retail and commercial units. From the town centre to Doncaster
                Lakeside, Frenchgate and commercial parks on the A1(M) corridor.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  Window graphics detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Wall wraps &amp; large-format graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Branded murals, feature wall vinyls and large-format wall graphics in Doncaster
                offices, retail units and hospitality venues. Surface prep assessed and included —
                problems flagged before vinyl goes on.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  Wall wraps detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor graphics installation</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Promotional floor graphics, wayfinding and branded floor wraps in Doncaster retail
                and commercial environments. Correct specification for the environment — flagged
                before install if the substrate isn&apos;t right.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  Floor graphics detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Shop fronts &amp; POS graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyls and rebrand wraps on Doncaster shop fronts, fascias and external
                signage. POS and in-store graphics installed to planogram. Counter wraps, display
                unit wraps and commercial interior applications.
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Vehicle wraps &amp; fleet livery
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Full and partial vehicle wrap installation for Doncaster-based fleets and van livery
                programmes. We install the wrap you supply — photographic sign-off per vehicle.
                Doncaster to Sheffield fleet programmes covered as a single engagement.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail →
                </Link>
              </p>
            </div>

            <div className="card-float bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-site programmes from Doncaster
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                A1(M) / M18 access makes Doncaster an excellent anchor for multi-site programmes
                across Yorkshire and Lincolnshire — reaching Sheffield, Rotherham, Barnsley, Leeds
                and Hull within single coordinated rollout. Consistent preparation and photo
                reporting across every site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White-label model */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            White-label subcontract — how it works in Doncaster
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              You retain the client relationship. WRPX attends under your instructions — your
              paperwork, your company branding on-site comms where agreed. Your Doncaster clients
              don&apos;t need to know WRPX is involved.
            </p>
            <p>
              After each site we provide a photo pack: before prep, during installation and
              completed sign-off. On programmes running across Doncaster and multiple other South
              Yorkshire locations, consolidated records are maintained — timestamped evidence for
              your files and any snagging queries that come back later.
            </p>
            <p>
              NDAs and programme-specific confidentiality requirements are discussed upfront. Several
              Doncaster and South Yorkshire trade relationships run on this model — quietly, reliably,
              on an ongoing basis.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage links */}
      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground">Coverage from Doncaster</h2>
          <p className="mt-3 text-muted">
            WRPX covers Doncaster and the wider South Yorkshire region for subcontract vinyl
            installation:
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/commercial-installation-doncaster/"
              className="text-accent hover:underline"
            >
              Commercial installation Doncaster
            </Link>
            <Link
              href="/subcontract-vinyl-installer-sheffield/"
              className="text-accent hover:underline"
            >
              Subcontract installer Sheffield
            </Link>
            <Link
              href="/commercial-installation-rotherham/"
              className="text-accent hover:underline"
            >
              Commercial installation Rotherham
            </Link>
            <Link
              href="/commercial-installation-barnsley/"
              className="text-accent hover:underline"
            >
              Commercial installation Barnsley
            </Link>
            <Link
              href="/sheffield-nottingham-corridor-installation/"
              className="text-accent hover:underline"
            >
              Sheffield–Nottingham corridor
            </Link>
            <Link
              href="/subcontract-vinyl-installation-yorkshire/"
              className="text-accent hover:underline"
            >
              Yorkshire subcontract hub
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">
            FAQ — Doncaster subcontract installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Do you cover Doncaster for subcontract installation?",
                a: "Yes. Doncaster is within our core operating area as a South Yorkshire-based installer. Sign companies and print firms in and around Doncaster use WRPX for overflow capacity and ongoing programmes.",
              },
              {
                q: "What do you install in Doncaster?",
                a: "Window graphics, wall wraps, floor graphics, shop fronts, vehicle wraps and fleet livery, POS graphics and multi-site retail programmes. You supply, we install.",
              },
              {
                q: "Do you work white-label in Doncaster?",
                a: "Yes. White-label is our default. Unbranded vans, your paperwork on site — your Doncaster clients don't need to know WRPX is involved.",
              },
              {
                q: "Can you cover regional rollouts from Doncaster?",
                a: "Yes. Doncaster's A1(M)/M18 position gives excellent access to Sheffield, Rotherham, Barnsley, Leeds and Hull within a single coordinated programme.",
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
              Doncaster subcontract installation enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us your Doncaster programme — what&apos;s installing, where, when. We&apos;ll
              confirm fit and give you a straight installation quote.
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
              <Link
                href="/subcontract-vinyl-installation-yorkshire/"
                className="text-accent hover:underline text-sm"
              >
                Yorkshire subcontract hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
