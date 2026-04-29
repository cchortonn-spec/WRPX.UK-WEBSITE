import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial Graphics & Vinyl Signage Installer South Yorkshire | WRPX",
  description:
    "Retail graphics and signage installation across South Yorkshire and the North — window graphics, wall wraps, floor graphics, shop fronts, POS and multi-site rollouts.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation/",
  },
};

export default function CommercialInstallationPage() {
  const serviceSchema = getServiceSchema(
    "Commercial Graphics & Vinyl Signage Installation",
    "Professional retail graphics and signage installation — window graphics, wall wraps, floor graphics, shop fronts, POS and multi-site rollout across South Yorkshire and the North of England."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Commercial Graphics &amp; Vinyl Signage Installer — South Yorkshire &amp; the North
          </h1>
          <p className="mt-6 text-lg text-muted">
            Window graphics, wall wraps, floor graphics, shop fronts, POS display installation and
            multi-site rollout programmes for brands, agencies, print houses and signage companies.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary">
              Talk to us about a commercial project
            </Link>
            <p className="text-sm text-muted">
              Call 07398 395417 or email{" "}
              <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
                wrpx.uk@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-xl border-2 border-accent/40 bg-background p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              5-year guarantee
            </p>
            <p className="mt-2 text-muted leading-relaxed">
              Eligible commercial graphics installations include a named{" "}
              {siteConfig.guaranteeYears}-year guarantee on material defects,
              colour stability and adhesion when correctly maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="card-float p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              WRPX is a South Yorkshire-based specialist in professional vinyl application. We&apos;ve spent
              7+ years developing the skills, material knowledge and preparation discipline that separates a
              vinyl installation that looks right for five years from one that starts lifting in five months.
              That expertise now extends fully into commercial and retail environments — and it shows in the
              results.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We deliver window graphics, wall wraps, floor graphics, shop fronts, POS display
              installation and coordinated multi-site rollout programmes for brands, agencies, print houses
              and signage companies across South Yorkshire, Yorkshire, Greater Manchester and the wider North
              of England.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If you need a commercial installer who actually understands vinyl — the materials, the surfaces,
              the preparation — rather than someone who simply turns up with a squeegee, you&apos;re in the
              right place.
            </p>
            <p className="mt-4 text-sm italic text-muted">
              &quot;Our background is precision vinyl application — the same skills, the same materials, the
              same preparation standards we bring to every kitchen we transform, applied to your retail
              estate.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Project examples */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Recent commercial graphics installations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/commercial/IMG_8615_Original-31d6e701-ed1d-48a9-a9d6-c2e940967861.png",
                alt: "Full window graphics and shopfront campaign vinyls on a food store.",
              },
              {
                src: "/images/commercial/IMG_8406_Original-b25523af-db9d-459f-9939-3f4d1fdebe56.png",
                alt: "Large promotional wall wrap inside a shopping centre.",
              },
              {
                src: "/images/commercial/IMG_8719_Original-93f33c8b-f6d6-498b-9a52-2f13d628a0a1.png",
                alt: "Branded retail POS island wrapped in vinyl graphics.",
              },
            ].map((img) => (
              <div key={img.src} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Commercial &amp; Retail Installation Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Window Graphics &amp; Vinyl Signage
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Frosted vinyl, full-colour window graphics, one-way vision / perforated film, promotional
                campaign vinyls and branded window installations. Fitted to retail units, showrooms, offices,
                hospitality venues and commercial frontages — across a single site or a coordinated programme
                of locations. Clean cuts, precise application and a finish that reflects your brand rather
                than undermining it.
              </p>
              <p className="mt-4">
                <Link href="/commercial/window-graphics/" className="text-accent hover:underline">
                  View window graphics service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Wall Wraps &amp; Mural Installation
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Large-format wall graphics, branded murals, feature wall vinyls and decorative commercial
                wall wraps. Using premium 3M, Avery Dennison, CoverStyl and Hexis commercial vinyl —
                materials engineered for high-footfall retail and commercial environments — with the surface
                preparation to back it up. Bubbles, lifting edges and visible seams are the result of skipped
                prep and cheap material. We don&apos;t do either.
              </p>
              <p className="mt-4">
                <Link href="/commercial/wall-wraps/" className="text-accent hover:underline">
                  View wall wraps service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">Floor Graphics</h3>
              <p className="mt-3 text-muted leading-relaxed">
                Promotional floor graphics, branded floor wraps, wayfinding graphics and directional systems.
                Applied using anti-slip, heavy-duty commercial floor film rated for the traffic levels of
                your environment. Properly prepared surfaces. Properly specified materials. Installations that
                actually last.
              </p>
              <p className="mt-4">
                <Link href="/commercial/floor-graphics/" className="text-accent hover:underline">
                  View floor graphics service
                </Link>
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Shop Front &amp; Fascia Vinyls
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Brand vinyls, promotional graphics and full rebrand wraps applied directly to existing shop
                fronts, fascia boards and external surfaces. A fast, cost-effective way to refresh a store&apos;s
                external appearance — often completed in a single visit, without scaffolding and without the
                cost of traditional sign replacement.
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                POS &amp; In-Store Display Graphics
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Point-of-sale and point-of-purchase vinyl graphics: gondola end panels, shelf POS, feature
                bay branding, counter wraps and branded display unit applications. Installed to planogram and
                brand specification. Stores are left clean, compliant and ready to trade.
              </p>
            </div>

            <div className="card-float p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Commercial Interior Wrapping
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Counter wraps, reception desk vinyls, fixture and furniture wrapping, wall panel vinyls and
                bespoke commercial interior applications. WRPX&apos;s core specialisation in precision furniture
                and surface wrapping means we handle the detail work that other installers avoid — tight
                corners, curved surfaces and layered graphics — properly.
              </p>
            </div>

            <div className="card-float p-8 md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">
                Multi-Site Rollout Installation
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                Coordinated vinyl installation across multiple retail or commercial locations. Seasonal
                campaigns, brand refreshes, new site openings — delivered to a shared programme with
                consistent results at every location. One contact throughout. The same standard from
                Sheffield to Nottingham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRPX difference */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              The WRPX Difference: Vinyl Expertise, Not Just Installation Capacity
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A lot of companies offer retail installation. Fewer can demonstrate genuine expertise in vinyl
              as a material — how it behaves on different surfaces, which specification suits which
              environment, what surface preparation is actually required to achieve long-term adhesion in a
              high-footfall commercial space.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX has 7+ years of professional vinyl application across some of the most demanding surfaces
              in the domestic market — worktops, curved furniture, tiled splashbacks. That level of material
              knowledge and preparation discipline translates directly into superior commercial results. We
              specify the right vinyl for your environment from our range of 3M, Avery Dennison, CoverStyl
              and Hexis commercial films. We prepare surfaces properly before a single piece of vinyl is
              applied. And we apply it to a standard that doesn&apos;t need revisiting.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For agencies and print companies working on behalf of retail clients, that means fewer snagging
              calls. For direct retail clients, it means installations that look right for the life of the
              campaign — not just the launch day.
            </p>
          </div>
        </div>
      </section>

      {/* White-label */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">White-Label Commercial Installation</h2>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX works as a white-label installation partner for marketing agencies and signage businesses
              across the region. We fit <strong className="text-foreground">graphics supplied by you or your supplier</strong>{" "}
              — installation only; we do not print. We deliver under your brand while you maintain full visibility
              of progress through our reporting process.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Window graphics, wall wraps, floor graphics and shop front applications are WRPX&apos;s core competency,
              not a peripheral service — and we are retail graphics installers, not flooring contractors.
            </p>
            <p className="mt-4">
              <Link href="/white-label-graphics-installation/" className="text-accent hover:underline font-medium">
                Dedicated white-label page for trade partners
              </Link>
              {" — "}who we work with, coverage, process and FAQ.
            </p>
            <p className="mt-4 text-sm italic text-muted">
              &quot;We quietly deliver for agencies and sign companies across the region. Your name on the
              project. Our prep, our application, our finish quality.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            How We Work
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 1,
                title: "Commercial Survey",
                body:
                  "We visit your site — or your client's site — before any material is specified or ordered. We assess surfaces, measure accurately, identify preparation requirements and flag access considerations.",
              },
              {
                num: 2,
                title: "Material Specification",
                body:
                  "We specify the right vinyl for your application from 3M, Avery Dennison, CoverStyl and Hexis based on surface type, environment, lifespan and finish requirements.",
              },
              {
                num: 3,
                title: "Surface Preparation",
                body:
                  "Cleaning, degreasing and surface treatment appropriate to the substrate and environment. This step determines whether your installation lasts two years or ten.",
              },
              {
                num: 4,
                title: "Professional Application",
                body:
                  "Vinyl applied by experienced hands to a commercial finish standard. For multi-site programmes, the same installer pairs work each location for consistency.",
              },
              {
                num: 5,
                title: "Reporting & Sign-Off",
                body:
                  "Photographic documentation of every installation. Walkround sign-off on single sites; timestamped photo reporting and consolidated records on multi-site programmes.",
              },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 p-6 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with / sectors */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">Who We Work With</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {[
                "Marketing agencies running retail and commercial campaigns across multi-site client estates",
                "Print management companies needing a trusted Yorkshire installation partner",
                "Large-format print houses offering print-and-install to retail clients",
                "Signage companies subcontracting specialist vinyl application work",
                "National and regional retailers managing store refresh or rebrand programmes",
                "Hospitality and leisure businesses updating estate branding",
                "Direct commercial clients: offices, showrooms, medical and professional premises",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">Sectors</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {[
                "Retail — supermarkets, convenience, fashion, health & beauty, telecoms, electrical",
                "Hospitality — bars, restaurants, hotels, coffee shops, gyms and leisure",
                "Automotive — dealerships, garages, vehicle wrap and detailing studios",
                "Professional services — offices, financial, medical, dental",
                "Construction — site hoarding graphics, safety signage, project branding",
                "Events — exhibition stands, pop-up retail, temporary branded environments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-xl font-semibold text-foreground">Areas We Cover</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Based in South Yorkshire, WRPX covers retail and commercial installation across the Northern
              England corridor:
            </p>
            <p className="mt-4 text-muted">
              <strong>
                Sheffield · Rotherham · Barnsley · Doncaster · Chesterfield · Leeds · Huddersfield · Wakefield
                · Bradford · York · Harrogate · Manchester · Nottingham · Derby · Lincoln
              </strong>
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <Link href="/commercial-installation-sheffield/" className="text-accent hover:underline">
                Sheffield commercial installation
              </Link>
              <Link href="/commercial-installation-leeds/" className="text-accent hover:underline">
                Leeds commercial installation
              </Link>
              <Link href="/commercial-installation-doncaster/" className="text-accent hover:underline">
                Doncaster commercial installation
              </Link>
              <Link href="/commercial-installation-rotherham/" className="text-accent hover:underline">
                Rotherham commercial installation
              </Link>
              <Link href="/commercial-installation-barnsley/" className="text-accent hover:underline">
                Barnsley commercial installation
              </Link>
              <Link href="/commercial-installation-huddersfield/" className="text-accent hover:underline">
                Huddersfield commercial installation
              </Link>
              <Link href="/commercial-installation-york/" className="text-accent hover:underline">
                York commercial installation
              </Link>
              <Link href="/commercial-installation-nottingham/" className="text-accent hover:underline">
                Nottingham commercial installation
              </Link>
            </div>
            <p className="mt-4 text-muted leading-relaxed">
              And all towns, retail parks and commercial districts in between. For larger multi-site
              programmes, national coverage is available — discussed on a project basis.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We also supply and install privacy film, frosted film and window graphics — see our{" "}
              <Link href="/window-film/" className="text-accent hover:underline">
                window film service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Commercial enquiries — brands, agencies, print houses and direct businesses
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Whether you&apos;re a brand, agency, print house or direct business looking for a professional
              commercial graphics installer in South Yorkshire and the North, talk to WRPX. We&apos;ll discuss
              your project, your surfaces and your timescales and give you a straight quote.
            </p>
            <p className="mt-4 text-muted">
              <strong>Call: 07398 395417</strong> ·{" "}
              <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
                wrpx.uk@gmail.com
              </a>
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a commercial quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

