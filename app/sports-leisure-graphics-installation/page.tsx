import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sports & Leisure Graphics Installation — Gyms, Stadiums & Leisure Centres | WRPX",
  description:
    "Subcontract vinyl graphics installation for fit-out contractors, sign companies and brand managers working in gyms, sports centres, stadiums and leisure venues. WRPX installs under your brand — weekend access, anti-slip floors, white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/sports-leisure-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Sports and leisure graphics installation — gyms, stadiums, sports centres and leisure venues",
  "Subcontract vinyl graphics installation for fit-out contractors, sign companies and brand managers delivering graphics programmes in gyms, sports centres, leisure parks and stadium environments across South Yorkshire and the East Midlands. Anti-slip floors, changing room graphics, pitch-side branding, white-label, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Sports & Leisure Graphics Installation", item: "https://www.wrpx.co.uk/sports-leisure-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of sports and leisure vinyl graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install gym branding wall vinyls, motivational murals, sports hall floor graphics, anti-slip film for wet changing areas and poolside, pitch-side and perimeter board graphics, changing room and locker room vinyls, reception and lobby branding, wayfinding floor and wall graphics, and multi-site gym chain rollouts. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work at weekends or out of hours at sports venues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — weekend and out-of-hours access is standard for sports and leisure installation work. Gyms, sports centres and leisure venues cannot close during peak trading hours, so installation is typically scheduled for early mornings, late evenings or weekend closure slots. We co-ordinate with your site contact to schedule around the facility's operational pattern.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install anti-slip floor vinyls in wet areas such as changing rooms and poolside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — anti-slip floor film rated for wet environments is part of our scope. Changing rooms, shower areas, poolside and wet leisure zones require anti-slip specification to meet health and safety compliance. We assess the floor substrate, select the appropriate anti-slip film and install to comply with the required slip-resistance rating. We flag substrate issues before installation if the surface condition makes compliance difficult to guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand on sports facility fit-out and refurbishment contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your project manager. The gym operator, leisure trust or facility owner sees your company throughout. Photographic documentation provided at completion under your agreed sign-off format.",
      },
    },
  ],
};

export default function SportsLeisureGraphicsInstallationPage() {
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
            Sports &amp; Leisure · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Sports &amp; Leisure Graphics Installation — Gyms, Stadiums &amp; Leisure Centres
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">fit-out contractors, sign companies and brand managers</strong>{" "}
            delivering graphics programmes in gyms, sports centres, leisure parks, stadiums and health
            club environments. We install branded wall vinyls, motivational murals, sports hall floor
            graphics, anti-slip changing room film and multi-site chain rollouts — weekend access,
            anti-slip compliant, white-label, photographic sign-off on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Anti-slip floor film</strong>{" "}
                — wet changing rooms, poolside and wet leisure zones installed to slip-resistance spec
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Weekend and out-of-hours access — standard for trading leisure facilities</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — facility operator sees your company, not ours</span>
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
              Discuss a sports graphics project
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

      {/* Why sports & leisure is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why sports and leisure installation requires a specialist approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Sports and leisure environments create installation challenges that catch out generalist
              contractors. The substrate range alone — rubber-crumb gym flooring, polished sports hall
              timber, wet-room PVC sheet, commercial pool surround, powder-coated metal lockers, painted
              breeze block, high-gloss changing room panels — requires a different preparation approach
              for each surface. A vinyl that adheres perfectly to a dry plasterboard gym wall will fail
              on a damp-affected changing room wall inside a year. Knowing the difference, and selecting
              the right adhesion system for each substrate, is the work that separates an installation
              that lasts from one that requires revisiting.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Access is also more constrained in this sector than most. A gym that trades from 5am to
              11pm seven days a week has a narrow window for installation work that does not disrupt
              members. Leisure centres with swimming pools, sports halls and multi-function spaces run
              overlapping activity programmes across the full week. Installation needs to slot around
              these patterns — which means early mornings, late evenings and facility closure slots,
              not standard working hours. We work to the facility&apos;s schedule, not to our own.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Anti-slip compliance is non-negotiable in wet zones. Changing rooms, poolside and wet
              leisure areas require anti-slip floor film rated to the appropriate slip-resistance
              classification. We assess the floor substrate, select the correct specification and
              install to meet the required rating. Where the floor condition makes it impossible to
              guarantee compliance, we flag the issue before committing to the install — not after.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You design, print and supply the material. We assess the
              substrate, install to spec and hand back a full photographic completion record. The gym
              operator or leisure trust sees your company throughout.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Sports and leisure graphic types we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Gym branding &amp; motivational wall vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format brand walls, motivational quote vinyls, zone identity graphics and gym
                environment murals for free-weight areas, functional training zones, cardio decks and
                reception areas. Applied to painted plaster, stud partition board, block and composite
                surfaces. Surface conditions assessed and reported before installation starts.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Sports hall &amp; gym floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Court marking overlays, branded zone dividers, directional floor graphics and
                promotional floor vinyls for sports halls, gym floors and multi-use activity spaces.
                Laminated and rated for the high-footfall and equipment contact characteristic of
                gym and sports hall environments. Substrate compatibility assessed — rubber, timber
                and resin floors each require a different approach.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/floor-vinyl-installation-yorkshire/" className="text-accent hover:underline">
                  Floor vinyl installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Anti-slip film for changing rooms &amp; wet areas</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Anti-slip floor film rated for wet environments — changing rooms, shower areas, poolside
                and wet leisure zones. Installed to the appropriate slip-resistance classification.
                Substrate assessment is critical in wet areas: damp-affected floors, existing non-porous
                coatings and uneven pool surround surfaces all affect adhesion. We assess before
                committing to the install and flag issues to your team in advance.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; glazed partition film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded window vinyls, frosted privacy film, one-way vision film and manifestation for
                gym frontages, sports centre glazed partitions, leisure reception glass and internal
                studio glazing. Installed clean with edge-to-edge finish — no bubbles, no peeling edges,
                no obstruction to natural light where partial coverage is specified.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Changing room &amp; locker room vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded vinyls, zone identity graphics and decorative film applied to changing room
                walls, locker fascias and cubicle panels. High-humidity environments create specific
                substrate requirements — standard wall vinyls installed without moisture-resistant
                primers will fail in changing room conditions. We specify and apply appropriately
                for the environment.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-site gym &amp; leisure chain rollouts</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Gym groups, leisure trusts and health club operators rolling out a new brand or refurbished
                design across multiple sites. One installation partner, consistent specification across
                every facility, consolidated photo documentation across the whole programme. South
                Yorkshire, West Yorkshire and East Midlands sites all covered under a single subcontract
                arrangement.
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
              This is a B2B subcontract service. The right buyer is a business that wins sports or
              leisure graphics supply or fit-out contracts and needs an experienced vinyl installer to
              handle the installation component on site.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Fit-out and refurbishment contractors</strong>{" "}
                  — vinyl graphics as a subcontract package within a wider gym, sports centre or leisure
                  venue fit-out or refurbishment. We slot in at the right stage of your programme, work
                  around other trades and clear site on schedule.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies and signage contractors</strong>{" "}
                  — you design and manufacture the graphics; WRPX installs the vinyl elements at the
                  facility under your brand, working to your timeline and sign-off process.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Print management and large-format print houses</strong>{" "}
                  — you supply the printed material through a framework or brand rollout agreement;
                  WRPX handles installation at each site across the gym or leisure estate.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Brand and interior design agencies</strong>{" "}
                  — delivering a gym or sports brand environment project; WRPX installs the vinyl
                  elements white-label, feeding back photo completion records to your team before
                  the operator sign-off walkthrough.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">
              Sports &amp; leisure graphics coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install sports and leisure graphics on a subcontract basis across South Yorkshire,
              West Yorkshire and the East Midlands — covering gyms, sports centres, leisure parks and
              stadium environments in Sheffield, Rotherham, Doncaster, Barnsley, Leeds, Wakefield,
              Huddersfield, Nottingham, Derby, Leicester and surrounding areas.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Doncaster · Rotherham · Barnsley · Nottingham · Derby · Leicester · Hull
              </strong>{" "}
              and the wider South Yorkshire, West Yorkshire and East Midlands sports and leisure estate.
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
              <Link href="/retail-fitout-graphics-installation/" className="text-accent hover:underline">
                Retail fit-out graphics installation
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
            FAQ — sports &amp; leisure vinyl graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of sports and leisure vinyl graphics do you install?",
                a: "Gym branding wall vinyls, motivational murals, sports hall floor graphics, anti-slip floor film for wet changing areas and poolside, window graphics and privacy film for studios and receptions, changing room and locker vinyls, wayfinding graphics, and multi-site gym chain rollouts. We are installation-only — you supply the material, we install to spec.",
              },
              {
                q: "Can you work at weekends or out of hours at gyms and leisure centres?",
                a: "Yes — weekend and out-of-hours access is standard for sports and leisure work. Gyms and leisure centres trade long hours across seven days, so installation is typically scheduled for early mornings, late evenings or closure windows. We co-ordinate with your site contact and work to the facility's operational pattern.",
              },
              {
                q: "Do you install anti-slip floor film in wet changing rooms and poolside areas?",
                a: "Yes — anti-slip floor film for wet environments is part of our scope. We select the appropriate specification for the slip-resistance classification required and assess the floor substrate in advance. Where the floor condition creates a compliance risk, we flag it before committing to the install.",
              },
              {
                q: "Can you work under our brand on sports facility fit-out and refurbishment contracts?",
                a: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your project manager. The gym operator, leisure trust or sports club sees your company throughout. Photographic documentation provided at completion.",
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
              Sports &amp; leisure graphics installation — let&apos;s discuss your project
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the facility, the scope, your access windows and your handover date.
              We&apos;ll confirm availability and give you a clear installation quote for the
              vinyl element of your programme.
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
