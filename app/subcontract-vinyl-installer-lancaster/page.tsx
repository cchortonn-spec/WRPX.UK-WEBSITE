import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Lancaster — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Lancaster and north Lancashire for sign companies, print houses and fit-out contractors. WRPX covers Lancaster University, Lancaster city centre, the LA postcode zone and the M6 north corridor — white-label, photographic sign-off, direct from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-lancaster/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Lancaster — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Lancaster and north Lancashire. White-label available. WRPX covers Lancaster University, Lancaster city centre, Morecambe, the LA postcode zone and the M6 north corridor — extending Preston and Lancashire coverage northward under one subcontract."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Lancaster", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-lancaster/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lancaster is approximately 2 hours from our South Yorkshire base via the M1 and M6 north, or around 35 minutes north of Preston via the M6. Junction 34 of the M6 provides direct access to Lancaster city centre and the university. For programmes combining Lancaster with Preston, Manchester or Yorkshire cities, we plan them as single corridor runs — South Yorkshire to Lancaster is a straight M1/M6 motorway route with no significant complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Lancaster installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out the Lancaster installation under your brand throughout. Your Lancaster or north Lancashire client sees your company at every stage. Full photographic documentation — before, during and completed sign-off — delivered in your agreed format on completion.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Lancaster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, office interior graphics, retail and hospitality graphics, education and NHS graphics. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover the full LA postcode zone including Lancaster city centre, the university campus, Morecambe, Carnforth, Bay Gateway retail and the surrounding north Lancashire commercial belt.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Lancaster University?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Lancaster University is a large campus university ranked consistently in the UK&apos;s top 15, with extensive estate across its Bailrigg site south of the city. The campus generates regular wayfinding graphics, department identity vinyls, promotional wall graphics, directional floor films and branded environments. DBS protocols followed. We are familiar with university access induction requirements and term-time scheduling constraints. LA1 campus postcode.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Lancaster with Preston and Manchester in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Lancaster is 35 minutes north of Preston via the M6, and Preston is 30 minutes north of Manchester. A sign company running a North West brand rollout covering Manchester, Preston and Lancaster can cover the entire M6 north corridor under one WRPX subcontract. Same installer, same documentation standard, single point of contact from Greater Manchester to north Lancashire — no separate Lancashire and South Cumbria installers required.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerLancasterPage() {
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
            Subcontract · Lancaster &amp; North Lancashire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Lancaster
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Lancaster, north Lancashire and the wider LA postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            education and NHS graphics, and wayfinding systems — on your instructions, under your
            brand, with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6 north corridor</strong>{" "}
                — Lancaster covered as part of the full M6 corridor from South Yorkshire through Manchester and Preston to north Lancashire
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
              Discuss a Lancaster subcontract job
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

      {/* Why Lancaster */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster — north Lancashire&apos;s cathedral city and university hub on the M6
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Lancaster is north Lancashire&apos;s principal city and the northernmost significant
              commercial centre on the M6 before the motorway continues into Cumbria at Carnforth
              and Kendal. Junction 34 provides direct access to Lancaster city centre and Lancaster
              University&apos;s campus at Bailrigg; junction 33 serves South Lakeland and the A6
              north. Lancaster has a population of around 52,000 in the city, with a wider district
              of roughly 140,000 including Morecambe, Carnforth and the surrounding coastal towns.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              What makes Lancaster commercially significant for a sign company or print management
              firm is the concentration of institutional clients — Lancaster University (consistently
              ranked top 15 in the UK with around 14,000 students and a large modern campus estate),
              Lancaster Royal Infirmary (part of the Lancashire Teaching Hospitals NHS Foundation
              Trust), and Lancaster City Council civic offices. These three institutions together
              generate consistent demand for wayfinding graphics, department identity, promotional
              vinyls, wall wraps and branded environments that requires a installer experienced with
              education, healthcare and public sector access requirements.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Lancaster city centre commercial geography centres on St Nicholas Arcades shopping
              centre, the Market Gate shopping centre, Penny Street and the surrounding independent
              retail and hospitality strip that characterises the city&apos;s character. Morecambe,
              8 miles west on the Bay Gateway (A589), adds a seasonal and tourism-led commercial
              geography with consistent hospitality and leisure brand graphics demand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Lancaster client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Lancaster &amp; north Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancaster University campus graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity vinyls, faculty branding, promotional wall
                graphics, floor directional films and branded environments across Lancaster
                University&apos;s Bailrigg campus. One of the UK&apos;s most compact and complete campus
                universities — a large estate with consistent graphics demand term-on-term. DBS
                protocols and campus access induction followed. LA1 4YW campus postcode.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/education-graphics-installation/" className="text-accent hover:underline">
                  Education graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; retail frontages</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision, promotional vinyls and
                branded window installs across St Nicholas Arcades, Market Gate, Penny Street, King
                Street and the independent retail belt through Lancaster city centre. Consistent
                finish from a single Lancaster unit to a north Lancashire chain programme combining
                Lancaster and Morecambe locations.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">NHS &amp; healthcare graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics and estates graphics across
                Lancaster Royal Infirmary, Morecambe Bay hospitals and the wider Lancashire and
                South Cumbria NHS Foundation Trust estate. IPC-compliant installation protocols,
                out-of-hours access available, security-checked team. NHS wayfinding to infection
                prevention and control standards on clinical sites.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/nhs-procurement-vinyl-installation/" className="text-accent hover:underline">
                  NHS procurement vinyl installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wall wraps &amp; interior graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded murals, feature wall vinyls, reception graphics and large-format wall
                graphics for commercial offices, hospitality venues, Lancaster University and
                the city&apos;s growing co-working sector. Substrate assessed before installation —
                historic building fabric, painted plaster, MDF, block, glazed partitions —
                any issues flagged before material is committed to avoid on-site surprises.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleet livery &amp; vehicle graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for
                vehicles across Lancaster and north Lancashire — local authority fleet, NHS Trust
                fleet, commercial and trade vehicle fleets and logistics operators in the M6
                corridor commercial belt north of Preston. LA/CA postcode zones covered.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Morecambe &amp; hospitality graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window graphics, promotional campaigns, floor vinyls and brand fit-out for
                hospitality, leisure and tourism operators across Morecambe&apos;s seafront and
                commercial strip. Eden Project Morecambe and the associated commercial development
                generating new graphics demand alongside established hotel, restaurant and leisure
                operators. Bay Gateway route from Lancaster to Morecambe — 15 minutes.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M6 North Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Lancaster at the top of the M6 north corridor — South Yorkshire to Cumbria
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Lancaster is 35 minutes north of Preston on the M6, and Preston is 30 minutes north
              of Manchester. From our South Yorkshire base, Lancaster is reached via the M1 to M6
              north — a single motorway corridor with no complexity. For programmes that combine
              Lancaster with Preston and Manchester, we plan and execute the entire North West M6
              corridor run under one subcontract relationship.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              A sign company running a UK-wide retail refresh or brand rollout that touches
              Lancaster, Preston and Manchester — three geographically distinct commercial centres
              that might individually require three separate installer conversations — can run the
              full programme under one WRPX subcontract. Same installer, same documentation
              standard, same photographic sign-off format at every site. One invoice. No managing
              separate North West subcontractors for the Lancashire and Greater Manchester portions
              of the same programme.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              North of Lancaster, the M6 continues to Carnforth, Kendal and the Lake District
              (Cumbria CA postcode). For programmes that extend into South Cumbria, we can discuss
              coverage on a per-project basis — geography is not the constraint, it is whether the
              programme scale makes the travel sensible.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Lancaster &amp; north Lancashire
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancaster city centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                St Nicholas Arcades, Market Gate, Penny Street, King Street, Church Street and the
                historic Lancaster Castle quarter. Mix of national retail, independent operators,
                hospitality and civic commercial. LA1 postcode. Lancaster City Council offices
                generate public sector graphics demand.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancaster University</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Bailrigg campus — approximately 200 acres of mixed academic, residential and
                commercial estate. Colleges, faculty buildings, student union, conference facilities
                and the InfoLab21 digital innovation centre. Regular wayfinding, faculty identity
                and promotional graphics demand. LA1 4YW.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lancaster Royal Infirmary</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Lancashire and South Cumbria NHS Foundation Trust acute site at Lancaster. Major
                hospital campus generating wayfinding, department identity and IPC-compliant
                graphics programmes. Out-of-hours installation available. Ashton Road, LA1 4RP.
                Morecambe Bay hospitals (Furness General, Westmorland General) also covered.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Morecambe seafront &amp; commercial</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Morecambe&apos;s seafront commercial strip, the Arndale Centre, Marine Road and the
                growing Eden Project Morecambe development. Hospitality, tourism and leisure
                operators generating window graphics, branded environments and promotional
                campaigns. LA3/LA4 postcode. Bay Gateway from Lancaster — 15 minutes.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Carnforth &amp; Bay Gateway</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Carnforth commercial zone north of Lancaster — industrial premises, trade
                businesses and commercial operators generating fleet livery, shop front and
                brand graphics briefs. LA5/LA6 postcode. Bay Gateway (A683/A6) connects
                Lancaster to the M6 and the wider Lancaster commercial belt efficiently.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Junction 34 business belt</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                White Lund Industrial Estate, Lansil Industrial Estate and the commercial
                development around the M6 junction 34 zone south of Lancaster city. Manufacturing,
                trade and logistics operators with fleet and brand graphics demand. LA1/LA3
                postcode. Direct M6 access makes this the most practical industrial zone
                for initial site visit and installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Lancaster subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Lancaster installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address, material spec, installation type, surface
                condition notes and any access constraints. Lancaster University and NHS sites
                often have specific induction requirements and term-time or clinical constraints —
                flag these early and we confirm feasibility before you commit material. No surprises
                on the day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Lancaster site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions. Your
                client&apos;s experience is with your company throughout — we are invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Lancaster installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered to you same day or next
                morning in whatever format you need — ready to forward to your client or add to
                your own project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Lancaster with Preston and Manchester</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Lancaster programme sits alongside jobs in Preston, Manchester or Yorkshire
                cities, we plan them as a single M6 north corridor trip. One invoice, one
                documentation pack per site, one consistent installation standard across the whole
                programme. No separate North West subcontractors to manage between Lancashire
                and Greater Manchester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Lancaster subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Lancaster?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Lancaster is approximately 2 hours from our South Yorkshire base via the M1 and M6
                north, or 35 minutes north of Preston. Junction 34 of the M6 gives direct access
                to Lancaster city centre and the university campus. For programmes combining
                Lancaster with Preston, Manchester and Yorkshire, we plan the full M6 corridor
                in a single trip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Morecambe as well as Lancaster?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — Morecambe is 15 minutes from Lancaster city centre via the Bay Gateway.
                Morecambe&apos;s hospitality, tourism and leisure commercial strip is covered as part
                of the Lancaster zone. The emerging Eden Project Morecambe development is generating
                new commercial graphics demand alongside the established Morecambe seafront and
                Arndale Centre commercial estate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Lancaster and north Lancashire jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard. We arrive in unbranded vehicles and carry out the
                Lancaster installation under your brand throughout. Your north Lancashire client
                never knows WRPX was involved. Full photographic documentation delivered in your
                agreed format on the day of completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor city links */}
      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Also covering across the corridor
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
            </Link>
            <Link href="/subcontract-vinyl-installer-bradford/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Bradford
            </Link>
            <Link href="/subcontract-vinyl-installer-huddersfield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Huddersfield
            </Link>
            <Link href="/subcontract-vinyl-installer-york/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              York
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-blackpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Blackpool
            </Link>
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-kendal/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Kendal &amp; South Cumbria
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            View all coverage:{" "}
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
              Yorkshire subcontract hub
            </Link>{" "}
            ·{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              Commercial installation overview
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Ready to subcontract your Lancaster installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Lancaster or north Lancashire brief — installation type, site
            address, material spec and date requirements. We confirm quickly and can often turn
            around Lancaster dates within a few days for straightforward installs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Lancaster
            </Link>
            <Link href="/white-label-graphics-installation/" className="btn-secondary inline-block">
              White-label trade partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
