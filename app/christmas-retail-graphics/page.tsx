import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Retail Graphics Installer | Shopping Centre & Multi-Site Rollout | WRPX",
  description:
    "Christmas retail graphics installation across Yorkshire and the East Midlands — shopping centres, retail parks, high street brands and multi-site rollouts. Window vinyl, counter graphics, feature walls and seasonal in-store vinyls. Subcontract installation for print companies, agencies and retail brands. Book now — Christmas slots are filling.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/christmas-retail-graphics/",
  },
};

const serviceSchema = getServiceSchema(
  "Christmas retail graphics installation — shopping centres, retail parks and multi-site rollouts",
  "Christmas and seasonal retail graphics installation across Yorkshire and the East Midlands. Window vinyl, counter graphics, in-store seasonal vinyls, feature wall panels, shopping centre display vinyl and multi-site Christmas rollout installation for retail brands, print companies and agencies. Overnight shopping centre installation available — Meadowhall, Trinity Leeds and South Yorkshire retail parks."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Christmas Window Graphics", item: "https://www.wrpx.co.uk/christmas-window-graphics/" },
    { "@type": "ListItem", position: 3, name: "Christmas Retail Graphics", item: "https://www.wrpx.co.uk/christmas-retail-graphics/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should we book Christmas retail graphics installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "August is the right time to book for a November install — and it is now August. Retail Christmas campaigns typically go live in the first two weeks of November. Print lead times run 4–6 weeks from artwork sign-off, and installer schedules in October and November fill from September onwards. For multi-site retail programmes across 10 or more locations, book now — slots across Yorkshire and the East Midlands are filling.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install overnight at Meadowhall and other shopping centres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight shopping centre installation is standard for retail Christmas programmes. Meadowhall requires overnight working permits and security coordination for all contractor activity. We work within these constraints as part of our standard service: permit applications, security briefing, overnight installation and no-trace departure before opening. We can also work at Trinity Leeds, Crystal Peaks and all South Yorkshire and West Yorkshire retail parks.",
      },
    },
    {
      "@type": "Question",
      name: "What Christmas retail graphics do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Printed window graphics and cut vinyl for shopfronts, in-store seasonal feature wall vinyls, counter and point-of-sale Christmas graphics, gondola end-panel vinyls, display plinth wraps, shopping centre hoarding and barrier graphics, temporary frosted and decorative window film, and removal and replacement of previous season graphics. We install all vinyl-based retail graphics — you supply the printed or cut material, we assess and install.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle a multi-site Christmas rollout across Yorkshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site consistency is a specific strength. We work to your brief, provide consistent installation standard at each site, and document each location photographically with before, during and completed shots. Yorkshire and the East Midlands are our core region — Sheffield, Leeds, Doncaster, Rotherham, Barnsley, Bradford, Harrogate, York, Nottingham and across the M1 corridor. For print companies and agencies managing the Christmas campaign, we work white-label: your brand on site, your documentation format.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove Christmas retail graphics after the season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — removal is a standard part of most Christmas retail graphic programmes. We schedule removal visits in January, typically the first or second week of the new year, aligned to your retail client&apos;s brand calendar. Removal is clean with no adhesive residue on glass or panel surfaces. For shopping centre tenants, we coordinate with centre management for overnight removal access to match installation procedures.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "When should we book Christmas retail graphics installation?",
    a: "August is the right time to book for a November install — and it is now August. Retail Christmas campaigns typically go live in the first two weeks of November. Print lead times run 4–6 weeks from artwork sign-off, and installer schedules in October and November fill from September onwards. For multi-site retail programmes across 10 or more locations, book now — slots across Yorkshire and the East Midlands are filling.",
  },
  {
    q: "Can you install overnight at Meadowhall and other shopping centres?",
    a: "Yes — overnight shopping centre installation is standard for retail Christmas programmes. Meadowhall requires overnight working permits and security coordination for all contractor activity. We work within these constraints as part of our standard service: permit applications, security briefing, overnight installation and no-trace departure before opening. We can also work at Trinity Leeds, Crystal Peaks and all South Yorkshire and West Yorkshire retail parks.",
  },
  {
    q: "What Christmas retail graphics do you install?",
    a: "Printed window graphics and cut vinyl for shopfronts, in-store seasonal feature wall vinyls, counter and point-of-sale Christmas graphics, gondola end-panel vinyls, display plinth wraps, shopping centre hoarding and barrier graphics, temporary frosted and decorative window film, and removal and replacement of previous season graphics. We install all vinyl-based retail graphics — you supply the printed or cut material, we assess and install.",
  },
  {
    q: "Can you handle a multi-site Christmas rollout across Yorkshire?",
    a: "Yes — multi-site consistency is a specific strength. We work to your brief, provide consistent installation standard at each site, and document each location photographically with before, during and completed shots. Yorkshire and the East Midlands are our core region — Sheffield, Leeds, Doncaster, Rotherham, Barnsley, Bradford, Harrogate, York, Nottingham and across the M1 corridor. For print companies and agencies managing the Christmas campaign, we work white-label: your brand on site, your documentation format.",
  },
  {
    q: "Do you remove Christmas retail graphics after the season?",
    a: "Yes — removal is a standard part of most Christmas retail graphic programmes. We schedule removal visits in January, typically the first or second week of the new year, aligned to your retail client's brand calendar. Removal is clean with no adhesive residue on glass or panel surfaces. For shopping centre tenants, we coordinate with centre management for overnight removal access to match installation procedures.",
  },
];

export default function ChristmasRetailGraphicsPage() {
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

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/christmas-window-graphics/" className="text-accent hover:underline">Christmas Window Graphics</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Christmas Retail Graphics</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Seasonal Installation · Retail Christmas Campaigns
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Christmas retail graphics installation
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs Christmas and seasonal retail graphics across Yorkshire and the East
            Midlands — shopping centres, retail parks and high street brands. Window vinyl,
            in-store seasonal graphics, counter graphics, gondola end-panels and multi-site
            rollout installation. Overnight shopping centre access available — Meadowhall,
            Trinity Leeds, Crystal Peaks and all major South Yorkshire and West Yorkshire retail.
          </p>
          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 px-5 py-4">
            <p className="text-sm font-medium text-accent">
              It&apos;s August — Christmas slots are filling now. Retail campaigns go live in November.
              Book your installation programme before October schedules close.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book Christmas Retail Installation →
            </Link>
            <Link href="/christmas-window-graphics/" className="btn-secondary">
              Christmas Graphics Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why book retail Christmas installation now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Retail Christmas campaigns operate on a fixed deadline: the store needs to be
              dressed by early November. The production and installation chain works backwards
              from that date — artwork sign-off in September, print production in October,
              installation in the last two weeks of October or the first week of November.
              At the end of August, the window for comfortable planning is still open; by
              October it is effectively closed for most multi-site programmes.
            </p>
            <p>
              For print companies and agencies managing Christmas campaigns on behalf of
              retail brands, installer availability in October and November is the binding
              constraint. Qualified installation teams in Yorkshire and the East Midlands
              with overnight shopping centre access are booked from September onwards.
              The retailers who experience Christmas installation problems every year are
              the ones who started that conversation in October rather than August.
            </p>
            <p>
              For multi-site retail rollouts — the same campaign across 10, 20 or 50 stores —
              the installer programme needs to be planned and scheduled before print goes
              to production. Site-by-site access logistics, shopping centre permit
              lead times and sequencing across the estate all need to be resolved in advance.
              This planning cannot be compressed into the last three weeks before install.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What we install for retail Christmas campaigns
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window graphics and cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut vinyl Christmas window graphics for shopfronts across
                Sheffield, Leeds, Doncaster, Bradford and all Yorkshire retail. Snow-scene
                prints, branded Christmas messaging, frosted festive border film and
                temporary decorative window vinyl — all installed and removed to your schedule.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">In-store seasonal wall graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal wall graphics and feature vinyls installed inside retail stores —
                Christmas brand imagery, product campaigns, seasonal colour changes on
                feature walls. Applied and removed without damaging the underlying surface.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Counter and POS Christmas graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Counter fascia Christmas vinyls, point-of-sale desk wraps, till station
                seasonal graphics. Applied overnight, consistent across all sites in
                the rollout, removed in January without adhesive residue.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Gondola end-panel and display vinyls</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Seasonal end-panel graphics on retail gondolas — Christmas product
                campaigns, branded seasonal messaging, temporary decorative vinyl on
                display plinths and risers. Applied to your supplied material.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shopping centre display graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Hoarding and barrier graphics, food court and mall graphics, tenant-facing
                display panel vinyl. We work to shopping centre management schedules and
                coordinate permits for overnight installation in Meadowhall, Trinity Leeds
                and across South and West Yorkshire shopping destinations.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Removal and de-rig</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Post-Christmas removal of all seasonal graphics, overnight to match
                installation logistics. Clean removal with no adhesive residue on
                glass or panel surfaces. January removal slots bookable alongside
                the installation programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site rollout */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site Christmas retail rollouts
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              For print companies and agencies managing Christmas campaigns across multiple
              retail sites, the installer is the critical dependency. Consistent film
              specification, consistent installation standard and consistent documentation
              across every store is what determines whether the rollout succeeds. The stores
              that look different from each other or have quality inconsistencies are usually
              the ones where multiple local installers were used without a single standard.
            </p>
            <p>
              We provide a single-installer solution for Christmas retail rollouts across
              Yorkshire and the East Midlands. Same crew, same technique, same sign-off
              process at every store. Sheffield, Leeds, Doncaster, Barnsley, Rotherham,
              Bradford, York, Harrogate, Wakefield, Nottingham and across the M1 corridor
              — all covered on the same programme without separate mobilisation costs
              for each city.
            </p>
            <p>
              We work white-label as standard. The retail brand and shopping centre
              management see your company throughout. Photographic sign-off in your
              format is provided at each site on the day of installation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Christmas retail graphics — common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card-float group overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <div className="border-t border-border px-6 py-4 text-muted">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-2 text-sm text-muted">Full overview of Christmas window graphics installation — retail, hotels, restaurants and commercial.</p>
            </Link>
            <Link href="/christmas-subcontract-installer/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas subcontract installer</h3>
              <p className="mt-2 text-sm text-muted">Subcontract Christmas installation for print companies and agencies — white-label, multi-site.</p>
            </Link>
            <Link href="/architectural-wrap-retail/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Year-round retail interior wrapping — counters, fixtures and branded surfaces.</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Consistent installation across multi-site retail and commercial rollout programmes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Christmas retail installation — book now
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the programme — number of sites, locations, graphics scope and target
              install date. We&apos;ll confirm availability, walk through the access logistics
              and give you a fixed price across the Yorkshire and East Midlands estate.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book Christmas Retail Installation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
