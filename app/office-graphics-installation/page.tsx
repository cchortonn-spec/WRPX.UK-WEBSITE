import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Office & Corporate Graphics Installation — Workplace Vinyl for Fit-Out Contractors | WRPX",
  description:
    "Subcontract vinyl graphics installation for fit-out contractors, interior designers and brand agencies working in offices, corporate HQs and co-working spaces. WRPX installs under your brand — glass partitions, feature walls, wayfinding, white-label, photographic sign-off.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/office-graphics-installation/",
  },
};

const serviceSchema = getServiceSchema(
  "Office and corporate graphics installation — workplace vinyl for fit-out contractors and brand agencies",
  "Subcontract vinyl graphics installation for fit-out contractors, interior designers and brand agencies delivering graphics programmes in offices, corporate headquarters, co-working spaces and commercial interiors across South Yorkshire and the East Midlands. Glass partition manifestation, feature wall vinyls, wayfinding, branded meeting rooms, white-label, photographic sign-off."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Office & Corporate Graphics Installation", item: "https://www.wrpx.co.uk/office-graphics-installation/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of office and corporate vinyl graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install glass partition manifestation and frosted privacy film, reception feature wall vinyls, branded meeting room and board room graphics, motivational and values wall vinyls, wayfinding floor and wall systems, window graphics and solar control film, floor graphics and branded carpet tile overlays, and acoustic panel vinyls. We are installation-only — you supply the printed or cut material, we assess the surface and install to spec.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install office graphics out of hours to avoid business disruption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — out-of-hours and weekend installation is standard practice for occupied office environments. Most commercial tenants cannot afford to have an installation crew working during core business hours, particularly in open-plan environments where noise, fumes and movement disrupt hundreds of people. We schedule installation for evenings, early mornings or weekend slots, working with your site contact and the building management team to arrange access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install vinyl on glass partitions in offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — glass partition manifestation is one of the most common office graphics installs. Building regulations require manifestation on glazed partitions below a certain height to prevent collision. We install frosted bands, full manifestation film, branded frosted vinyl and decorative window film on internal glass partitions to the correct specification. We also install privacy film and printed graphics on external glazing and meeting room glass.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work under our brand on office fit-out and workplace refurbishment contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your instructions, carry your paperwork on site and report back to your project manager. The office occupier or property management company sees your company throughout. Photographic documentation provided at completion under your agreed sign-off format.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install vinyl on acoustic panels and fabric surfaces in offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Printed vinyl can be applied to acoustic panels in controlled circumstances, but the substrate must be assessed first — fabric-faced and open-cell foam acoustic panels have very different adhesion characteristics from hard-faced composite panels. We assess the acoustic panel construction before committing to the install and advise on the appropriate adhesion method or whether a direct-print or frame solution would perform better for the specific panel type.",
      },
    },
  ],
};

export default function OfficeGraphicsInstallationPage() {
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
            Office &amp; Corporate · Subcontract Installation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Office &amp; Corporate Graphics Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">fit-out contractors, interior designers and brand agencies</strong>{" "}
            delivering graphics programmes in offices, corporate headquarters, co-working spaces and
            commercial interiors. We install glass partition manifestation, reception feature walls,
            meeting room branded vinyls, wayfinding systems and workplace motivational graphics —
            out of hours, white-label, photographic sign-off on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">Out-of-hours installation as standard</strong>{" "}
                — evenings, early mornings and weekends to avoid disrupting the occupied office
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Glass partition manifestation to building regulation specification</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>White-label by default — occupier sees your company, not ours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">
                  {siteConfig.yearsInBusiness}+ years
                </strong>{" "}
                professional vinyl application — substrate assessment before installation, not after
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss an office graphics project
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

      {/* Why office is different */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Why office and corporate installation requires a different approach
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Office environments look straightforward on paper — dry, temperature-controlled,
              predictable access — but they create installation challenges that catch out contractors
              who approach them like retail work. The substrate range in a typical fit-out includes
              glass partitions, powder-coated aluminium framing, MDF wall panels, painted plasterboard,
              raised access floor tiles, concrete feature walls, acoustic panel systems and timber
              cladding. Each of these surfaces has different preparation requirements, different
              adhesion characteristics and different failure modes if the wrong adhesive system
              or technique is used.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The bigger practical constraint is access. An occupied office with 200 employees
              cannot accommodate a vinyl installation crew during working hours. Open-plan
              environments amplify every noise, odour and interruption — squeegees on glass
              partitions, the smell of application fluid, a step ladder in the middle of a
              work aisle. Installation in occupied commercial space almost always needs to happen
              outside core business hours: early mornings before the office opens, evenings after
              the last staff member leaves, or weekend slots during a planned office closure.
              We schedule around the occupier&apos;s operational pattern and co-ordinate access
              with building management as a standard part of the job.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Building regulations require manifestation on glazed internal partitions below a
              specified height to prevent collision with glass. This is not optional — it is a
              statutory requirement under Part M of the Building Regulations, and it affects
              almost every modern open-plan office with glass-walled meeting rooms and partitioned
              breakout spaces. We install manifestation film to the correct specification, advising
              on the coverage pattern where the designer&apos;s brief and the regulatory requirement
              need to be reconciled.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You design, print and supply the material. We assess the
              substrate, install to spec and hand back a full photographic completion record.
              The office occupier or building owner sees your company throughout.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Office and corporate graphic types we install on subcontract
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Glass partition manifestation &amp; film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted manifestation bands, full frosted privacy film, branded printed vinyl and
                decorative film on internal glass partitions, meeting room glazing, boardroom glass
                and office frontage windows. Installed to Building Regulations Part M specification.
                We also install solar control and anti-glare film on external glazing where the
                brief requires it.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window and glass installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Reception &amp; lobby feature wall vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format brand walls, printed murals and feature wall vinyls for reception areas,
                lift lobbies, stairwells and entrance halls. The reception wall is the first impression
                a visitor gets of the business — it needs to be applied without bubbles, seams or
                misalignment. Substrate assessed in advance: painted plaster, skim-coated block,
                raw concrete and cladding panels each require a different preparation approach.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Meeting room &amp; boardroom branded vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded graphics, values and mission statements, city or campus photography, team
                identity vinyls and decorative film applied to meeting room and boardroom walls,
                glass panels and interior surfaces. Often installed as part of a full-floor fit-out
                programme where consistency across every meeting room is part of the brief.
                Tight corners, curved walls and premium surface substrates managed as standard.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Workplace values &amp; motivational wall graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Company values, mission statements, team culture graphics and motivational typographic
                vinyls applied to open-plan office walls, breakout space feature walls and collaborative
                zone walls. Applied around existing fixtures — cable trunking, light switches, power
                sockets — cleanly and without visible junction at interruptions. Substrate condition
                assessed and reported before the print is committed.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; floor graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls, desk numbering, zone identity graphics and wayfinding
                wall systems for multi-floor office buildings, business parks and co-working
                environments. Floor graphics rated for carpet tile and hard floor substrates.
                Installed to the appropriate anti-slip specification where the floor graphic
                is in a public circulation area.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Co-working &amp; serviced office graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing brand refresh and tenant identity graphics for co-working operators and
                serviced office providers. As tenants change and spaces are rebranded, the vinyl
                installation element needs a reliable partner who understands the short lead times
                and out-of-hours access requirements of managed workspace environments. One
                subcontract relationship, consistent quality across multiple sites.
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
              This is a B2B subcontract service. The right buyer is a business that designs, supplies
              or manages office graphics programmes and needs an experienced vinyl installer to handle
              the installation element on site.
            </p>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Fit-out and interior refurbishment contractors</strong>{" "}
                  — vinyl graphics as a subcontract package within a wider office fit-out or workplace
                  refurbishment. We slot in at the right stage of your programme, work around other
                  trades and clear site before the occupier moves in.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Sign companies and large-format print houses</strong>{" "}
                  — you design and manufacture the office graphics; WRPX installs the vinyl elements
                  at the site under your brand, working to your timeline and sign-off process.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Brand and workplace design agencies</strong>{" "}
                  — delivering an employer brand environment or workplace identity project; WRPX
                  installs the vinyl elements white-label, feeding back photo completion records
                  to your team before the client walkthrough.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">→</span>
                <div>
                  <strong className="text-foreground">Property and facilities management companies</strong>{" "}
                  — managing ongoing graphics maintenance, tenant rebrands and refresh programmes
                  across a commercial property portfolio; WRPX provides a consistent installation
                  resource on call rather than sourcing a new contractor for every job.
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
              Office graphics installation coverage area
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install office and corporate vinyl graphics on a subcontract basis across South
              Yorkshire, West Yorkshire and the East Midlands — covering commercial offices, business
              parks, co-working spaces and corporate headquarters in Sheffield, Leeds, Doncaster,
              Rotherham, Barnsley, Wakefield, Nottingham, Derby, Leicester and surrounding areas.
            </p>
            <p className="mt-4 text-muted">
              <strong className="text-foreground">
                Sheffield · Leeds · Doncaster · Rotherham · Barnsley · Nottingham · Derby · Leicester · Loughborough
              </strong>{" "}
              and the wider South Yorkshire, West Yorkshire and East Midlands commercial office estate.
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
              <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                Wall wrap installation
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
            FAQ — office &amp; corporate vinyl graphics installation
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "What types of office and corporate vinyl graphics do you install?",
                a: "Glass partition manifestation and frosted privacy film, reception and lobby feature wall vinyls, meeting room and boardroom branded graphics, company values and motivational wall vinyls, wayfinding floor and wall systems, window and solar control film, floor graphics and branded carpet tile overlays. We are installation-only — you supply the material, we install to spec.",
              },
              {
                q: "Can you install office graphics out of hours without disrupting the business?",
                a: "Yes — out-of-hours and weekend installation is standard practice for occupied office environments. We schedule for evenings, early mornings or weekend slots and co-ordinate access with building management. Most office graphics programmes can be fully installed without any disruption to the working day.",
              },
              {
                q: "Do you install glass partition manifestation to building regulation specification?",
                a: "Yes — Part M of the Building Regulations requires manifestation on glazed internal partitions below a specified height. We install frosted bands, full frosted film, branded printed vinyl and decorative film on internal glass partitions to the correct specification. We advise where the designer brief and the regulatory requirement need to be reconciled.",
              },
              {
                q: "Can you work under our brand on office fit-out and workplace refurbishment contracts?",
                a: "Yes — white-label by default. We attend under your instructions, carry your paperwork and report back to your project manager. The office occupier or property manager sees your company throughout. Photographic documentation provided at completion under your agreed sign-off format.",
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
              Office &amp; corporate graphics installation — let&apos;s discuss your project
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the site, the scope, your access windows and your handover date.
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
