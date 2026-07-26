import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subcontract Vinyl Installer Manchester — Sign & Print Company Installation Partner | WRPX",
  description:
    "Subcontract vinyl installation across Greater Manchester for sign companies, print houses and fit-out contractors. WRPX covers Trafford Park, MediaCityUK, city centre, and the full M60/M62 corridor — white-label, photographic sign-off, M6 direct from South Yorkshire.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/subcontract-vinyl-installer-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Subcontract vinyl installer Manchester — sign company and print house installation partner",
  "Professional subcontract vinyl installation for sign companies, print management firms and fit-out contractors across Greater Manchester. White-label available. WRPX covers Trafford Park, MediaCityUK, Spinningfields, Manchester Arndale, Trafford Centre, Stockport, Salford, and the full M60/M62 postcode zone — M6 direct from South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Commercial Installation", item: "https://www.wrpx.co.uk/commercial-installation/" },
    { "@type": "ListItem", position: 3, name: "Yorkshire Subcontract Hub", item: "https://www.wrpx.co.uk/subcontract-vinyl-installation-yorkshire/" },
    { "@type": "ListItem", position: 4, name: "Subcontract Installer Manchester", item: "https://www.wrpx.co.uk/subcontract-vinyl-installer-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is WRPX from Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester is approximately 75–90 minutes from our South Yorkshire base via the M1 and M62, or via the M1 and M6 depending on the destination within Greater Manchester. Trafford Park and Salford Quays are accessible via the M63/M60 ring; central Manchester via the M6 and A57(M) or A34. For programmes combining Manchester with Leeds, Sheffield or other Yorkshire cities, we run them as a single trans-Pennine corridor trip — one day, one installer, no co-ordinating multiple regional companies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label on Manchester installations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label is standard. We arrive in unbranded vehicles under your instructions. Your Manchester client sees your company throughout. We deliver full photographic documentation under your agreed sign-off format — before, during and completed sign-off — for every Manchester installation regardless of size.",
      },
    },
    {
      "@type": "Question",
      name: "What types of vinyl installation do you cover across Greater Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window graphics, frosted and decorative film, wall wraps, floor graphics, shop front and fascia vinyls, vehicle wraps and fleet livery, wayfinding vinyls, exhibition graphics, office and corporate interior graphics, retail and hospitality graphics, multi-site rollout programmes. Installation-only — you supply the printed or cut material, we assess the surface and install to spec. We cover all M60 boroughs: Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan.",
      },
    },
    {
      "@type": "Question",
      name: "Can you combine Manchester with Yorkshire cities in the same programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of WRPX&apos;s practical advantages. A sign company running a national retail rollout or brand refresh that includes Manchester, Leeds, Sheffield, Doncaster and Bradford can run the full trans-Pennine programme under one subcontract. We cover both sides of the Pennines — no separate Yorkshire and Greater Manchester installers, no inconsistent installation standards between cities, no managing two separate relationships and two sets of documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Trafford Park and MediaCityUK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — both are core Manchester installation zones. Trafford Park is one of Europe&apos;s largest industrial estates and generates a high volume of fleet livery, brand graphics, wayfinding and commercial signage installation briefs from its 1,000-plus businesses. MediaCityUK and Salford Quays is a high-value commercial and media district where creative agencies, broadcasters and tech companies commission premium interior graphics, wall wraps, wayfinding systems and branded environments on a regular basis.",
      },
    },
  ],
};

export default function SubcontractVinylInstallerManchesterPage() {
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
            Subcontract · Greater Manchester
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Subcontract Vinyl Installer — Manchester
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            WRPX is a specialist vinyl installation partner for{" "}
            <strong className="text-foreground">sign companies, print management firms and fit-out contractors</strong>{" "}
            with installation work across Greater Manchester, Salford, Trafford, Stockport and the
            wider M60 ring. We install window graphics, wall wraps, vehicle wraps, shop fronts, floor
            graphics, retail graphics and wayfinding systems — on your instructions, under your brand,
            with full photographic documentation on every install.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>
                <strong className="text-foreground">M6/M62 trans-Pennine corridor</strong>{" "}
                — Manchester covered as part of Yorkshire-to-North-West corridor runs from Sheffield and Leeds
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
              Discuss a Manchester subcontract job
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

      {/* Why Manchester */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Manchester — the UK&apos;s second commercial city and the North West hub
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Greater Manchester is the largest conurbation outside London, with a population of
              around 2.8 million across ten metropolitan boroughs: Manchester, Salford, Trafford,
              Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. Unlike many regional
              cities, Manchester&apos;s commercial geography is genuinely diverse — a dense city-centre
              financial and media district in Spinningfields and the Northern Quarter sits alongside
              one of Europe&apos;s largest industrial estates at Trafford Park, a major out-of-town
              retail destination at the Trafford Centre, a thriving creative and tech cluster at
              MediaCityUK and Salford Quays, and a ring of substantial commercial and retail parks
              across the M60 boroughs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This commercial diversity means Manchester generates consistent and varied demand for
              vinyl graphics installation across every category: retail and hospitality graphics,
              corporate office fit-out, fleet livery from the logistics and distribution sector
              concentrated in Trafford Park and the M60 orbital zone, media and creative brand
              installations at Salford Quays, wayfinding programmes across NHS and education estates,
              multi-site retail rollouts through Manchester Arndale, the Trafford Centre and the
              surrounding retail parks, and exhibition graphics from event companies using Manchester&apos;s
              conference and exhibition venues.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Manchester sits at the intersection of the M6 (north-south to Preston, Lancaster,
              Birmingham and beyond), the M62 (trans-Pennine east to Leeds and Hull), the M60 ring
              road connecting all ten boroughs, and the M56 south-west to Liverpool and Chester.
              From our South Yorkshire base, Manchester is 75–90 minutes via the M1 and M62 or the
              M1 and M6. This puts Manchester within the same corridor as Sheffield, Leeds, Bradford
              and Huddersfield — a trans-Pennine loop that a sign company running a UK-wide retail
              refresh or brand rollout can cover under one subcontract.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We are installation-only. You supply the material — printed, cut, laminated and ready
              to apply. We prepare the surface, install to spec and deliver a signed-off photo pack.
              Your Manchester client never knows we were there.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What we install on subcontract across Greater Manchester
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Window graphics &amp; retail frontages</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-colour window graphics, frosted film, one-way vision film, promotional vinyls and
                branded window installs across Manchester Arndale, Trafford Centre, Market Street, King
                Street, Piccadilly, the Northern Quarter, Spinningfields and out-of-town retail parks
                across the M60 zone. Consistent finish across multi-unit retail rollouts — whether it
                is one Manchester store or a full North West chain programme.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">
                  Window graphics installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Trafford Park fleet &amp; industrial graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fleet livery, brand graphics, building signage, wayfinding and corporate identity
                installations for businesses across Trafford Park — one of Europe&apos;s largest industrial
                estates with over 1,000 companies in manufacturing, logistics, distribution and professional
                services. Full vehicle wraps, partial livery, building vinyls and internal graphics all
                covered under one subcontract. The M60/A57(M) access makes Trafford Park straightforward
                for same-day trans-Pennine runs.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/fleet-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Fleet wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MediaCityUK &amp; Salford Quays interiors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wall wraps, reception graphics, office interior installations, branded environments and
                wayfinding systems for media, broadcast, tech and creative businesses at MediaCityUK
                and Salford Quays. BBC, ITV Studios, dock10, Peel Ports, and the surrounding commercial
                and co-working properties generate consistent demand for premium interior vinyl graphics.
                Substrate assessed before any material is committed — concrete, glazed partition, timber
                and composite cladding all handled.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/wall-wrap-installation-yorkshire/" className="text-accent hover:underline">
                  Wall wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Floor graphics &amp; directional vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Directional floor vinyls, branded floor campaigns, anti-slip rated floor films and
                promotional floor graphics across Manchester retail, NHS and education estates, logistics
                and commercial premises. Manchester University Hospitals NHS Trust, Manchester Metropolitan
                University, the University of Manchester and Greater Manchester&apos;s substantial FE estate
                all generate floor graphics demand. Applied to spec, confirmed compliant at sign-off.
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
                Full and partial vehicle wraps, fleet livery programmes and cut vinyl signage for
                vehicles across Greater Manchester — a major logistics and distribution hub where
                fleet identity briefs are frequent and substantial. Trafford Park logistics operators,
                M60 zone distribution companies, and national brand fleets serviced through your print
                or sign company under one subcontract arrangement covering the full M and OL postcode zones.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/vehicle-wrap-installation/" className="text-accent hover:underline">
                  Vehicle wrap installation detail
                </Link>
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Wayfinding &amp; corporate fit-out</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wayfinding systems, department identity graphics, office interior wall art, reception
                vinyls and corporate campus graphics across Manchester city centre, Spinningfields,
                Manchester Science Park, and corporate estate across the M60 boroughs. Installed to
                a consistent standard across every site in a multi-location programme — Manchester
                corporate estate alongside Leeds, Sheffield and other Yorkshire cities under one
                subcontract relationship.
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

      {/* Trans-Pennine Corridor */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Manchester in the trans-Pennine corridor — Yorkshire to the North West
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most sign companies and print management firms operating nationally have Yorkshire covered
              and the North West covered — but not always by the same installer. That matters when a
              retail brand, a corporate occupier or a hospitality group runs a programme that spans both
              sides of the Pennines. Two installers means two sets of documentation formats, two sign-off
              standards, two briefing conversations, and a co-ordination overhead every time a Manchester
              and Leeds job land in the same week.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX covers both. Sheffield, Leeds, Bradford, Huddersfield and Wakefield are all within
              30–45 minutes of our base. Manchester is 75–90 minutes via the M62 or M6. A programme
              covering Leeds, Manchester, Salford, Trafford and Stockport runs as a single trans-Pennine
              trip — same installer, same documentation standard, same photographic sign-off pack, single
              point of contact. A national retail chain with 3 Manchester stores and 4 Yorkshire stores
              can have every installation briefed, installed and signed off under one subcontract relationship.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              The M62 runs from Hull through Leeds, across the Pennines and into Manchester, connecting
              WRPX&apos;s operating area directly to the Greater Manchester commercial belt. From Sheffield,
              the M1 north to M62 west takes under 90 minutes to central Manchester. The M6 south from
              Manchester also connects directly to our West Midlands subcontract coverage — Birmingham,
              Wolverhampton, Coventry and Stoke-on-Trent — making Manchester the northern anchor point
              of a corridor that now runs from South Yorkshire to the West Midlands to the North West
              under one subcontract relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Key commercial zones */}
      <section className="border-y border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Key commercial zones we cover across Greater Manchester
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Manchester city centre</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Spinningfields, Northern Quarter, Piccadilly, Deansgate, NOMA, Ancoats. Financial
                services, legal, media, hospitality, retail and co-working. Regular demand for
                interior graphics, reception fit-out, office branding and window vinyls across
                M1–M4 postcode zones.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Trafford Park</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                1,000+ businesses in manufacturing, logistics and distribution. Fleet livery,
                building signage, internal graphics and wayfinding all frequent briefs. M17
                postcode. One of Europe&apos;s largest industrial estates — accessible via M60/M63
                without city-centre congestion.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">MediaCityUK / Salford Quays</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                BBC North, ITV Studios, dock10, Peel Ports, The Landing tech hub and growing
                creative cluster. High-value interior graphics and wayfinding briefs from
                media, broadcast and creative agency tenants. M50/M5 postcode zone.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Trafford Centre &amp; Salford</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                One of the UK&apos;s largest shopping centres plus substantial surrounding retail
                and leisure commercial development. Retail fit-out, promotional window campaigns,
                floor graphics and fascia vinyls. M60/J10 adjacent — straightforward logistics
                from M6 or M62 approaches.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Stockport &amp; south M60</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stockport Interchange, Cheadle Royal Business Park, Airport City, Manchester
                Airport Enterprise Zone. SK postcode zone. Financial services, professional
                services and logistics. Regular brand graphics, fleet livery and interior
                fit-out demand from the Cheadle Royal and Airport City corporate clusters.
              </p>
            </div>
            <div className="card-float bg-background p-6">
              <h3 className="font-semibold text-foreground">Bolton, Bury &amp; north M60</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Bolton town centre, Middlebrook Retail Park (one of the North West&apos;s largest
                retail parks), Bury Market and Bury Business Park, Rochdale and Oldham commercial
                zones. BL/OL postcode zones. Retail, hospitality and commercial brand graphics
                across the north M60 arc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            What a Manchester subcontract job looks like with WRPX
          </h2>
          <div className="space-y-4">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Brief us on the Manchester installation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Send us the job brief — site address, material spec, installation type, surface condition
                notes and any access constraints. We confirm feasibility, flag any questions about the
                Manchester site before you commit material, and agree a date that fits your programme
                schedule. No surprises on the day.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">We arrive on-site white-label</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We arrive at your Manchester site in unbranded vehicles, introduce ourselves to your
                client as the installation team, and carry out the work under your instructions. Your
                client&apos;s experience is with your company throughout — we are invisible behind your brand.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Photo documentation delivered on completion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Every Manchester installation is documented with before, during-installation and
                completed sign-off photographs. Photo packs delivered to you same day or next morning
                in whatever format you need — ready to forward to your client or add to your own
                project documentation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground">Combine Manchester with Yorkshire in one run</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If your Manchester programme sits alongside jobs in Leeds, Bradford, Sheffield or
                Huddersfield, we combine them in one trans-Pennine trip. You get a single invoice,
                one documentation pack per site, and one consistent installation standard across the
                whole programme. No separate Yorkshire and North West subcontractor to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester subcontract installation — frequently asked questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How far is WRPX from Manchester?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Manchester is approximately 75–90 minutes from our South Yorkshire base via the M1
                and M62 (trans-Pennine), or via the M1 and M6 depending on the destination within
                Greater Manchester. Trafford Park and Salford Quays are accessible via the M60 ring;
                central Manchester via the M6 and A57(M) or A34. For programmes combining Manchester
                with Leeds, Sheffield or other Yorkshire cities, we run them as a single trans-Pennine
                corridor trip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover the full Greater Manchester area?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — all ten Greater Manchester metropolitan boroughs: Manchester, Salford, Trafford,
                Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. M, OL, SK, BL, WN, WA
                postcode zones covered. Commercial premises, retail parks, industrial estates, NHS
                and education estates, hospitality venues and office campuses throughout.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you work white-label on Manchester jobs?
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Yes — white-label is standard practice. We arrive in unbranded vehicles and carry out
                the Manchester installation under your brand throughout. Your client never knows WRPX
                was involved unless you choose to tell them. Full photographic documentation delivered
                under your agreed sign-off format at completion.
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
            <Link href="/subcontract-vinyl-installer-wakefield/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Wakefield
            </Link>
            <Link href="/subcontract-vinyl-installer-doncaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Doncaster
            </Link>
            <Link href="/subcontract-vinyl-installer-nottingham/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Nottingham
            </Link>
            <Link href="/subcontract-vinyl-installer-birmingham/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Birmingham
            </Link>
            <Link href="/subcontract-vinyl-installer-stoke-on-trent/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Stoke-on-Trent
            </Link>
            <Link href="/subcontract-vinyl-installer-preston/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Preston
            </Link>
            <Link href="/subcontract-vinyl-installer-warrington/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Warrington
            </Link>
            <Link href="/subcontract-vinyl-installer-lancaster/" className="card-float px-4 py-2 text-sm text-accent hover:underline">
              Lancaster
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
            Ready to subcontract your Manchester installation?
          </h2>
          <p className="mt-4 text-muted">
            Contact WRPX with your Manchester brief — installation type, site address, material
            spec and date requirements. We confirm quickly and can often turn around Manchester
            dates within a few days for straightforward installs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Get in touch about Manchester
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
