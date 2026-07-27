import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Blackpool — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Blackpool and the Fylde Coast for sign companies, print houses and fit-out contractors. WRPX covers Blackpool Tower, the Pleasure Beach, Winter Gardens, the Promenade retail strip and the full FY postcode — white-label, photographic sign-off, M55 from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-blackpool/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Blackpool — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Blackpool and the Fylde Coast. White-label available. WRPX covers Blackpool Tower, the Golden Mile, Winter Gardens, Pleasure Beach, Blackpool Business Park and the FY postcode zone — M55 direct from the M6 and South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Blackpool", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-blackpool/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Blackpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blackpool is approximately 100–110 minutes from our South Yorkshire base via the M1 and M6 north, then the M55 west to Blackpool. The M6 connects from the M1 at junction 21A through Preston (PR postcode) to the M55 junction, with the M55 running directly into Blackpool&apos;s town centre. For programmes combining Blackpool with Preston (20 minutes east via M55/M6) or Lancaster (45 minutes north via M6), we run them as corridor trips.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Blackpool installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles and carry out every Blackpool installation under your brand. Your Fylde Coast client sees your company at every stage. Full photographic documentation — before, during and completed sign-off images — delivered in your agreed format on the day of completion.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover in Blackpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, entertainment venue graphics and hospitality fit-outs. Installation-only — you supply the printed or cut material, we install to spec. We cover the full FY postcode zone: Blackpool town centre, the Golden Mile, North Pier, Central Pier, Pleasure Beach, Bloomfield Road, Blackpool Business Park, Fleetwood (FY7) and the wider Fylde Coast.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Blackpool with Preston and Lancaster in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the M55 and M6 make Blackpool, Preston and Lancaster a natural corridor trip. Preston is 20 minutes east via M55/M6, Lancaster 45 minutes north via M6. A sign company briefing a Lancashire-wide programme covering Blackpool, Preston and Lancaster can run the whole brief under one WRPX subcontract — same installer, same documentation standard, one invoice. No separate Fylde Coast, Central Lancashire and North Lancashire subcontractors required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover seasonal Blackpool work — illuminations, summer campaigns, event graphics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Blackpool&apos;s hospitality and entertainment economy is heavily seasonal, and sign companies and fit-out contractors working on the Promenade, Pleasure Beach, Winter Gardens and the wider Golden Mile regularly need seasonal installation work turned around quickly. We carry out Blackpool installs year-round, including pre-season fit-outs, illuminations-season refreshes and post-season strip-and-replace programmes.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerBlackpoolPage() {
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
            Subcontract · Blackpool &amp; the Fylde Coast
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Blackpool
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Blackpool, the Fylde Coast and the wider FY postcode zone.
            We install window graphics, wall wraps, vehicle wraps, shop fronts, floor graphics,
            hospitality graphics and wayfinding systems — on your instructions, under your brand,
            with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M55 direct from M6</strong>{" "}
                — Blackpool covered as part of corridor runs with Preston, Lancaster and South Yorkshire
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
                professional vinyl application — hospitality, retail and entertainment environments covered
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn-primary inline-block text-center">
              Discuss a Blackpool subcontract job
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

      {/* Why Blackpool */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Blackpool — the UK&apos;s largest seaside resort and what it means for installation
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Blackpool has the most concentrated entertainment and hospitality commercial economy
              of any UK coastal town — and that concentration generates a volume and variety of
              vinyl installation work that is genuinely different from an inland commercial town of
              the same size. The Promenade runs three miles of hotels, bars, amusement arcades,
              restaurants, shops and entertainment venues, with high seasonal turnover and regular
              refresh cycles generating repeat window graphics, hospitality fit-out and retail display
              briefs from the same operators year after year.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The Pleasure Beach theme park at the south end, Winter Gardens conference and
              entertainment complex in the town centre, and Blackpool Tower&apos;s retail and entertainment
              zones all generate specialist fit-out installation work: branded environments, wayfinding
              systems, feature wall graphics, floor vinyl and high-specification entertainment venue
              graphics. These are not small-format installs — they are the kind of programme-scale
              brief where a sign company or fit-out contractor needs a reliable subcontract partner
              who can turn up, install correctly and get out without creating a disruption.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Blackpool&apos;s commercial geography extends beyond the Promenade. Blackpool Business Park
              (off junction 4 of the M55) hosts a range of commercial and professional services
              occupiers. The FY1–FY8 postcode range covers the full Fylde Coast from Fleetwood in
              the north to Lytham St Annes in the south — a significant coastal commercial belt that
              is regularly overlooked by installation partners based further east.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Blackpool client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Blackpool &amp; the Fylde Coast
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Promenade retail &amp; hospitality</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, promotional vinyls, frosted film, one-way vision and
                hospitality fit-out graphics along the full length of the Golden Mile — from North
                Pier to the Pleasure Beach. High-turnover hospitality environments where seasonal
                campaigns mean repeat installation work: spring, summer and pre-illuminations
                window refresh cycles from the same operators. Coastal environment surface
                preparation (salt, moisture, historic substrates) managed correctly.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Winter Gardens &amp; entertainment venues</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, event graphics, branded environments, wall wraps and interior
                vinyl installations across the Winter Gardens conference centre, Blackpool Opera
                House, Empress Ballroom and the wider venue complex. Large-scale entertainment and
                conference environments generating programme-scale subcontract briefs — consistent
                standard across multiple spaces, scheduled around venue programming.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wayfinding-graphics-installation/" className="text-accent hover:underline">
                  Wayfinding graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Pleasure Beach &amp; attraction fit-outs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Branded environments, floor graphics, feature wall wraps, wayfinding and
                directional vinyl for theme park, visitor attraction and entertainment venue
                fit-outs. Pleasure Beach generates regular interior and exterior graphics work —
                ride theming elements, café and retail unit refreshes, wayfinding systems and
                seasonal promotional installs. High-footfall environments, fast turnaround.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/hospitality-graphics-installation/" className="text-accent hover:underline">
                  Hospitality graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Hotel &amp; accommodation graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Interior wall wraps, reception graphics, wayfinding vinyl and room-number vinyls
                across Blackpool&apos;s extensive hotel and B&B belt. National hotel chains and
                independent operators both generate fit-out and refurbishment briefs — large
                programmes where consistency across multiple floors or multiple properties on
                the same street is the key brief. Pre-opening fit-outs, seasonal refreshes and
                rebrand rollouts all covered under a single subcontract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Blackpool Business Park &amp; commercial</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Office interior graphics, corporate branding, window film, fleet livery and
                branded environments across Blackpool Business Park (off M55 junction 4) and
                the wider FY commercial belt. Professional services, retail, public sector and
                commercial occupiers generating a stream of corporate graphics and fleet briefs
                distinct from the hospitality economy on the Promenade.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/office-graphics-installation/" className="text-accent hover:underline">
                  Office graphics installation
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lytham St Annes &amp; Fylde Coast</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Shop front graphics, window vinyls, office interior graphics and retail display
                installations across Lytham St Annes (FY8), Cleveleys (FY5) and Fleetwood (FY7).
                Lytham&apos;s affluent retail and professional services zone generates high-quality
                graphics briefs; Fleetwood&apos;s commercial and maritime industrial areas generate
                fleet and commercial signage briefs. The full Fylde Coast covered in one subcontract.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
                  Shop front graphics installation
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M55/M6 corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Blackpool in the Lancashire corridor — M55, Preston and South Yorkshire
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The M55 motorway runs 12 miles from junction 32 of the M6 directly into Blackpool&apos;s
              town centre — the only UK motorway built specifically to serve a single resort town.
              From WRPX&apos;s South Yorkshire base, the route is M1 north to Leeds, M62 or A1 west
              and north, then M6 north through Lancashire to the M55 junction. Preston, already
              covered on WRPX&apos;s route map, sits 20 minutes east at the M55/M6 junction. This
              makes Blackpool a natural extension of a Preston or Lancashire programme — not a
              separate logistics challenge.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              For a sign company running a Lancashire programme covering Preston and Blackpool —
              two significant but geographically distinct commercial centres — the WRPX subcontract
              covers both as one trip. A wider North West programme that includes Blackpool, Preston,
              Lancaster (45 minutes north via M6) and Manchester (via the M6/M61 south from Preston)
              can run as a single week of corridor work under one subcontract relationship, one
              documentation standard and one invoice per site.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Blackpool&apos;s seasonal economy creates predictable demand cycles that benefit from an
              established subcontract relationship rather than sourcing a new installer each season.
              Sign companies and fit-out contractors who win repeat Blackpool hospitality or retail
              clients benefit from a subcontract partner who already knows the key venues, understands
              the access constraints and can hit the pre-season fit-out window without a lengthy
              briefing cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones across Blackpool &amp; the Fylde Coast
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">The Golden Mile</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                The Promenade from North Pier to South Pier — the primary hospitality, entertainment
                and retail strip. Hotels, bars, amusement arcades, restaurants and tourist shops with
                high seasonal refresh cycles. FY1 postcode. UK&apos;s highest concentration of hospitality
                vinyl installation briefs per square mile.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Winter Gardens</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Grade II* listed conference and entertainment venue — Opera House, Empress Ballroom,
                Arena and multiple function suites. Major wayfinding, event branding and interior
                graphics brief generator for the entertainment and conference sector. Church Street,
                FY1 postcode.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Pleasure Beach</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                UK&apos;s most-visited free-admission attraction — theme park, hotels, restaurants and
                retail. South Promenade, FY4 postcode. Entertainment venue graphics, floor vinyl,
                wayfinding systems and seasonal campaign installs. Pre-season fit-outs scheduled
                around operating calendar.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Blackpool Business Park</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Off M55 junction 4 — commercial and professional services hub away from the tourist
                economy. Office branding, corporate graphics, fleet livery and window film. FY4
                postcode. The commercial geography of Blackpool that most install partners don&apos;t
                know about because they only think of the Promenade.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Lytham St Annes</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Affluent coastal town south of Blackpool — independent retail, professional
                services, hospitality and residential-adjacent commercial. FY8 postcode.
                High-quality graphics briefs distinct from the volume-commercial Blackpool
                Promenade economy. The Open Championship golf tourism adds hospitality demand.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Fleetwood &amp; Cleveleys</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Fleetwood (FY7) — commercial, industrial and maritime heritage town north of
                Blackpool. Cleveleys (FY5) — coastal suburban commercial strip. Fleet livery,
                commercial signage and retail window graphics. Both covered as part of the
                Blackpool/Fylde Coast zone on the same trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Blackpool subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Blackpool installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address (FY postcode), material spec, installation
                type, surface condition notes and any access constraints specific to the venue.
                Blackpool&apos;s coastal environment means some substrates have salt and moisture
                exposure affecting surface prep — flag any known condition issues and we confirm
                feasibility and prep requirements before you commit material. Entertainment venues
                often have specific access windows between shows or before opening — noted in the
                brief, not negotiated on the day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Blackpool site in unbranded vehicles and carry out the work under
                your instructions. Your client&apos;s experience — whether it&apos;s a hotel operator on the
                Promenade or a retailer in Lytham St Annes — is with your company throughout.
                WRPX is invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Blackpool installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered same day or next morning —
                ready to forward to your Fylde Coast client or add to your own project documentation.
                Especially useful for seasonal programmes where you need a clean visual record of
                each refresh cycle.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Blackpool with Preston, Lancaster and Yorkshire</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Blackpool brief sits alongside jobs in Preston (20 minutes), Lancaster
                (45 minutes) or further south, we combine them in a single corridor trip. One invoice,
                one documentation pack per site, one consistent installation standard across the
                Lancashire programme. No separate Fylde Coast and Central Lancashire subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Blackpool subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Blackpool?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Blackpool is approximately 100–110 minutes from our South Yorkshire base via the
                M1 and M6 north, then the M55 direct to Blackpool. For corridor programmes
                combining Blackpool with Preston or Lancaster, we run them as a single Lancashire
                trip rather than separate visits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work around Blackpool&apos;s seasonal access windows?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — entertainment venues, hotels and hospitality operators on the Promenade
                have specific access windows, especially pre-season (February–April) and in
                gaps around the illuminations season (September–November). We schedule Blackpool
                installations within the access windows your client specifies. Flag the window
                in the brief and we confirm dates that work — no surprises on site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover Lytham St Annes and Fleetwood as well as Blackpool?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — the full FY postcode zone is covered as part of a Blackpool trip. Lytham
                St Annes (FY8), Cleveleys (FY5), Fleetwood (FY7) and the wider Fylde Coast
                are covered without requiring separate visits. A Fylde Coast programme covering
                Lytham, Blackpool and Fleetwood runs as a single installation day.
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
            <Link href="/subcontract-vinyl-installer-lancaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Lancaster
            </Link>
            <Link href="/subcontract-vinyl-installer-manchester/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Manchester
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-liverpool/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Liverpool
            </Link>
            <Link href="/subcontract-vinyl-installer-sheffield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Sheffield
            </Link>
            <Link href="/subcontract-vinyl-installer-leeds/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Leeds
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
            Ready to subcontract your Blackpool installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Blackpool or Fylde Coast brief — installation type, site address,
            material spec, date requirements and any access constraints. We confirm quickly and can
            combine Blackpool with Preston or Lancaster when there are multiple sites across the
            Lancashire corridor.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Blackpool
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
