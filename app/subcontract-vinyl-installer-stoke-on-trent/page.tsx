import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Stoke-on-Trent — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Stoke-on-Trent and North Staffordshire for sign companies, print houses and fit-out contractors. WRPX installs what you supply — white-label, photographic sign-off, M6 corridor between Yorkshire and Birmingham.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-stoke-on-trent/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Stoke-on-Trent — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Stoke-on-Trent and North Staffordshire. White-label available. WRPX installs what you supply — M6 corridor between South Yorkshire and Birmingham, covering the ST postcode zone."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Stoke-on-Trent", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-stoke-on-trent/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stoke-on-Trent is approximately 75–90 minutes from our South Yorkshire base via the M1 and M6. We cover Stoke city centre, Hanley town centre, Burslem and the Potteries commercial areas, Festival Park retail and leisure, Tunstall, Longton, Fenton, Newcastle-under-Lyme and the wider ST postcode commercial and industrial zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work under our brand on Stoke-on-Trent jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend in unbranded or re-branded vehicles under your instructions. Your Stoke client sees your company throughout. We provide full photographic documentation under your agreed sign-off format at job completion.",
      },
    },
    {
      "@type": "Question",
      name: "What vinyl graphics do you install on subcontract in Stoke-on-Trent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition and event graphics, office and corporate interior graphics, retail and industrial unit graphics. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover Stoke-on-Trent alongside Manchester, Birmingham and Sheffield in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Stoke-on-Trent sits on the M6 between Birmingham and Manchester, and is also accessible from Sheffield via the M1 and A50. It connects naturally to Derby, Nottingham, Birmingham and Manchester for multi-city Midlands and North West programmes. We can cover the full corridor from South Yorkshire through Stoke to Birmingham under one subcontract arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install graphics at Stoke's Festival Park and major retail destinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Festival Park is Stoke's main out-of-town retail and leisure destination and generates regular demand for brand graphics, promotional vinyls and retail fit-out signage. We also cover Hanley city centre, the Potteries Shopping Centre, Tunstall retail, Newcastle-under-Lyme town centre and the major industrial and logistics estates in the ST postcode zone.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerStokePage() {
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
            Subcontract · Stoke-on-Trent &amp; North Staffordshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Stoke-on-Trent &amp; North Staffordshire
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Stoke-on-Trent, Newcastle-under-Lyme and North Staffordshire.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics and
            wayfinding systems — on your instructions, under your brand, with full photographic
            documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6 corridor — Sheffield to Birmingham</strong>{" "}
                — Stoke covered midway between our South Yorkshire base and Birmingham, making it a natural stop on extended corridor runs
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
              Discuss a Stoke-on-Trent subcontract job
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

      {/* Why Stoke */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Stoke-on-Trent — the M6 midpoint between Yorkshire and the West Midlands
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Stoke-on-Trent sits on the M6 roughly midway between our South Yorkshire base and
              Birmingham — a location that makes it a practical stop on extended West Midlands
              corridor runs rather than a separate destination requiring dedicated trip planning.
              From Sheffield, Stoke is approximately 75–90 minutes via the M1 and M6. From
              Stoke, Birmingham is another 45 minutes south. For sign companies and print management
              firms running programmes that touch Sheffield, Derby, Stoke and Birmingham, WRPX
              can cover all four cities in a single co-ordinated run — reducing the overhead of
              managing multiple regional installers.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The commercial geography of Stoke is more varied than its industrial heritage might
              suggest. The six towns that make up the city — Hanley, Burslem, Tunstall, Longton,
              Fenton and Stoke town itself — each have active commercial and retail cores. Hanley
              is the primary city centre, home to the Potteries Shopping Centre and a dense
              concentration of high street and independent retail. Festival Park to the south of
              Hanley is the main out-of-town retail and leisure destination, with a significant
              commercial and office floor space alongside the retail. The A500 and A50 corridors
              carry extensive logistics, industrial and trade premises that generate ongoing demand
              for fleet graphics, industrial signage and commercial vinyls.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Newcastle-under-Lyme to the west of Stoke adds a distinct commercial and university
              town market — Keele University is one of the UK&apos;s older campus universities and
              generates ongoing estates graphics demand including wayfinding, faculty identity and
              student accommodation graphics. The wider North Staffordshire ST postcode zone extends
              into Leek, Stafford and the surrounding market town belt, adding further commercial
              and retail premises to the coverage area.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Stoke client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Stoke-on-Trent
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; vinyl signage</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls
                and branded window installs across Hanley city centre, Potteries Shopping Centre
                frontages, Festival Park, Newcastle-under-Lyme town centre and surrounding
                North Staffordshire commercial premises. Clean application, straight cuts,
                edge-to-edge finish on every job.
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
                Brand vinyls, promotional graphics and full rebrands on Stoke shop fronts,
                fascias and external retail surfaces. Hanley, Tunstall, Longton, Burslem and
                Festival Park — consistent installation standard whether it is a single site
                refresh or a multi-location Staffordshire brand programme.
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
                office and industrial interiors across Stoke-on-Trent and North Staffordshire.
                Substrate assessed before installation — painted plaster, MDF, block, glazed
                partitions, concrete and industrial wall cladding all handled.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet &amp; vehicle wrap installation</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet livery, vehicle wrap and partial wrap installation for Stoke-on-Trent and
                North Staffordshire businesses — logistics, trade and commercial vehicle fleets
                with a strong base in the A500 industrial corridor. We install wraps to the vinyl
                manufacturer&apos;s specification, with photo documentation per vehicle and
                consistent finish across multi-vehicle fleets.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">University campus graphics — Keele</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, faculty identity vinyls, student accommodation graphics,
                sports facility branding and environmental graphics for Keele University campus.
                Campus estates with active contractor access procedures — contractor induction,
                building permits and zone-specific access all managed as standard. Academic
                calendar scheduling accommodated.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-city Midlands &amp; North West rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Stoke-on-Trent as part of a wider Midlands and North West programme — combining
                with Derby, Birmingham, Manchester or Sheffield in a single co-ordinated
                installation run. One crew, consistent standards and consolidated records across
                the full corridor. A natural midpoint stop that eliminates the need for a
                separate installer in the ST postcode zone.
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
              Who uses WRPX as a Stoke-on-Trent installation partner
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Sign companies with Stoke and North Staffordshire clients who need a reliable subcontract installer — they handle design and manufacture, WRPX installs under their brand on site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Print management firms supplying large-format material to ST postcode clients, needing a trusted trade installer for the site work without managing it directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Fit-out contractors managing commercial and retail fit-outs across Stoke who need a vinyl installation specialist slotted into the fit-out programme at the right stage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Marketing agencies running multi-city programmes — Stoke alongside Derby, Birmingham, Manchester or Sheffield under a single subcontract rather than separate regional installers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Logistics and industrial businesses in the A500 corridor needing fleet graphics and industrial unit branding — an active commercial base in the ST postcode zone</span>
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
              Stoke-on-Trent, North Staffordshire &amp; M6 corridor coverage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Stoke-on-Trent is reached via the M1 and M6 as a midway point on extended West
              Midlands corridor runs. We cover Hanley city centre, Potteries Shopping Centre,
              Festival Park, Burslem, Tunstall, Longton, Fenton, Stoke town, Newcastle-under-Lyme,
              Keele University, the A500 industrial corridor and the wider North Staffordshire ST
              postcode zone. Where programmes justify it, we combine Stoke with Derby, Birmingham,
              Sheffield or further north into Yorkshire in the same run.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Stoke-on-Trent · Newcastle-under-Lyme · Keele · Derby · Birmingham · Sheffield
              </strong>{" "}
              and the wider North Staffordshire and M6 corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/subcontract-vinyl-installer-birmingham/" className="text-accent hover:underline">
                Birmingham subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-wolverhampton/" className="text-accent hover:underline">
                Wolverhampton &amp; Black Country subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-derby/" className="text-accent hover:underline">
                Derby subcontract
              </Link>
              <Link href="/subcontract-vinyl-installer-sheffield/" className="text-accent hover:underline">
                Sheffield subcontract
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
            FAQ — subcontract installation in Stoke-on-Trent
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "How far is WRPX from Stoke-on-Trent?",
                a: "Stoke-on-Trent is approximately 75–90 minutes from our South Yorkshire base via the M1 and M6. We cover Hanley city centre, Festival Park, Potteries Shopping Centre, Burslem, Tunstall, Longton, Newcastle-under-Lyme, Keele University campus and the A500 industrial and logistics corridor as part of extended West Midlands corridor runs.",
              },
              {
                q: "Do you work under our brand with Stoke clients?",
                a: "Yes — white-label by default. Unbranded vans, your paperwork on site. Your Stoke client sees your brand throughout. Photographic sign-off provided at completion.",
              },
              {
                q: "Can you handle Stoke alongside Birmingham and Sheffield in the same programme?",
                a: "Yes — Stoke sits on the M6 between our South Yorkshire base and Birmingham, making it a natural midpoint on extended corridor runs. We cover Sheffield, Stoke, Birmingham and connecting cities under one subcontract arrangement without the need for a separate regional installer in the ST postcode zone.",
              },
              {
                q: "Do you cover Keele University and other North Staffordshire education sites?",
                a: "Yes — Keele University campus generates ongoing estates graphics demand including wayfinding systems, faculty identity vinyls, student accommodation graphics and sports facility branding. We manage campus contractor access procedures, induction requirements and academic calendar scheduling as standard.",
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
              Subcontract installation in Stoke-on-Trent — let&apos;s talk
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
              <Link href="/subcontract-vinyl-installer-birmingham/" className="text-accent hover:underline">
                Birmingham subcontract page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
