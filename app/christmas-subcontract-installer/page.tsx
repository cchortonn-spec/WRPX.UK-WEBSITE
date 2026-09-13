import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Graphics Subcontract Installer | Seasonal Vinyl Installation | WRPX",
  description:
    "Subcontract Christmas graphics installation for print companies, agencies and retail contractors across South Yorkshire and the East Midlands. Window graphics, vinyl lettering, hoarding graphics, seasonal vinyl — multi-site rollout, reliable delivery, November deadlines met.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/christmas-subcontract-installer/",
  },
};

const serviceSchema = getServiceSchema(
  "Christmas graphics subcontract installation for print and agency companies",
  "White-label subcontract installation of Christmas and seasonal graphics across South Yorkshire and the East Midlands. Retail Christmas window graphics, festive vinyl, seasonal hoarding graphics, shopping centre and hotel seasonal schemes. Multi-site rollout, consistent quality across sites, reliable November delivery. Installation partner for print companies, marketing agencies and retail contractors."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Multi-Site Rollout Installation", item: "https://www.wrpx.co.uk/multi-site-rollout-installation/" },
    { "@type": "ListItem", position: 3, name: "Christmas Graphics Subcontract Installer", item: "https://www.wrpx.co.uk/christmas-subcontract-installer/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you handle multi-site Christmas rollouts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site is a specific strength. We cover South Yorkshire, the East Midlands, West Yorkshire and beyond. For a retail group with multiple sites across the region, we plan and execute the rollout schedule, report back to you on each site completion, and maintain consistent quality across every location. You manage the client relationship; we manage the installation.",
      },
    },
    {
      "@type": "Question",
      name: "What Christmas graphics can you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Printed Christmas window graphics, cut-vinyl Christmas lettering and shapes, frosted seasonal window film, perforated window vinyl, shopping centre and retail park hoarding graphics, hotel and restaurant seasonal window and interior graphics, temporary promotional vinyl, floor graphics, and wall graphics for festive installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is your lead time for booking Christmas subcontract work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For November installation, August and September are the right time to confirm. Most print companies and agencies finalise their Christmas installation roster by September — earlier if it is a multi-site programme that needs phased scheduling. We are available to discuss scope and rates now.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work white-label for print companies and agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. We attend under your company name, carry your paperwork and wear your company identity where required. The end client sees your company throughout. We provide photographic installation records at each site for your records.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply the graphics or just install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are an installation-only subcontractor — we do not print. You supply the graphics; we install them to specification. This is the standard model for print companies and agencies who have their own production but need reliable installation capacity over the Christmas period.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can you handle multi-site Christmas rollouts?",
    a: "Yes — multi-site is a specific strength. We cover South Yorkshire, the East Midlands, West Yorkshire and beyond. For a retail group with multiple sites across the region, we plan and execute the rollout schedule, report back to you on each site completion, and maintain consistent quality across every location. You manage the client relationship; we manage the installation.",
  },
  {
    q: "What Christmas graphics can you install?",
    a: "Printed Christmas window graphics, cut-vinyl Christmas lettering and shapes, frosted seasonal window film, perforated window vinyl, shopping centre and retail park hoarding graphics, hotel and restaurant seasonal window and interior graphics, temporary promotional vinyl, floor graphics, and wall graphics for festive installations.",
  },
  {
    q: "What is your lead time for booking Christmas subcontract work?",
    a: "For November installation, August and September are the right time to confirm. Most print companies and agencies finalise their Christmas installation roster by September — earlier if it is a multi-site programme that needs phased scheduling. We are available to discuss scope and rates now.",
  },
  {
    q: "Do you work white-label for print companies and agencies?",
    a: "Yes — white-label by default. We attend under your company name, carry your paperwork and wear your company identity where required. The end client sees your company throughout. We provide photographic installation records at each site for your records.",
  },
  {
    q: "Do you supply the graphics or just install?",
    a: "We are an installation-only subcontractor — we do not print. You supply the graphics; we install them to specification. This is the standard model for print companies and agencies who have their own production but need reliable installation capacity over the Christmas period.",
  },
];

export default function ChristmasSubcontractInstallerPage() {
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
            <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">Multi-Site Rollout Installation</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Christmas Graphics Subcontract Installer</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            August — book your November slots now
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Christmas graphics subcontract installation — for print companies, agencies and retail contractors
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            If you produce Christmas graphics — window vinyl, retail seasonal campaigns, hotel festive schemes, shopping centre graphics — and you need installation capacity in South Yorkshire and the East Midlands, this is who you call. WRPX is an installation-only subcontractor: you manage the client, you supply the graphics, we install to spec and report back. White-label, reliable, and available to discuss your November schedule now.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Discuss Christmas Capacity →
            </Link>
            <Link href="/multi-site-rollout-installation/" className="btn-secondary">
              Multi-Site Rollout Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Why book now */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why print companies and agencies book installation in August
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Christmas installation windows are short. Most retail and hospitality Christmas graphics go up between late October and mid-November — a 3–4 week window across which every print company, agency and contractor with seasonal work is trying to schedule their installer. The ones who leave it to October are the ones who can&apos;t get their jobs done in time.
            </p>
            <p>
              <strong className="text-foreground">Lead time is real.</strong> A multi-site retail rollout across 10–15 locations needs advance scheduling — site access permissions, day/time constraints per location, material delivery coordination, and sequencing that puts the right installer in the right place on the right day. That planning cannot be done in three weeks.
            </p>
            <p>
              <strong className="text-foreground">Capacity books out.</strong> Installation teams with a track record of reliable Christmas delivery are busy. If you are finalising which installer to use for your Christmas work, the window to confirm is now — not when artwork is ready.
            </p>
            <p>
              <strong className="text-foreground">We are available to discuss scope and rates now.</strong> We do not need your artwork to confirm that we can cover your locations and meet your install window. Contact us with the broad scope — number of sites, locations, approximate install dates — and we will tell you straight whether we can cover it.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Christmas and seasonal graphics we install
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Retail Christmas window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed and cut-vinyl Christmas window graphics for retail units — high-street shops, retail parks, shopping centres. Single sites and multi-site rollouts across the region. Consistent quality and finish at every location.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hotel and hospitality seasonal graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas window vinyl, seasonal lobby graphics, festive frosted window film and interior promotional vinyl for hotels, restaurants and bars. White-label installation — the hotel sees your company throughout.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shopping centre Christmas campaigns</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Large-format seasonal graphics for shopping centre common areas, unit windows and feature installations. We have experience working within the access and contractor-management requirements of managed retail environments.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Seasonal hoarding graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas graphics on temporary hoarding — construction hoardings, event hoardings and retail park development hoardings that are dressed for the festive season. We install flat vinyl graphics on hoarding panels across the region.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Temporary promotional vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Short-term seasonal vinyl for floor graphics, wall graphics, display panels, poster frames and promotional fixtures. Applied cleanly for a set period and removed without damage at the end of the campaign.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Perforated window vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Perforated window vinyl for full-window Christmas graphics that let light through from inside while presenting a full printed image from the street. Particularly effective for retail unit windows and restaurant frontages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            How Christmas subcontract installation works with WRPX
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
              <div>
                <h3 className="font-semibold text-foreground">Scope confirmation — now</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Contact us with the broad scope: number of sites, locations, approximate install window (October/November), and the type of graphics. We confirm coverage and availability — no artwork needed at this stage.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
              <div>
                <h3 className="font-semibold text-foreground">Schedule and access planning — September/October</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Once artwork and print timelines are confirmed, we finalise the installation schedule site by site — agreeing access requirements, sequencing multi-site work, and confirming material delivery coordination.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
              <div>
                <h3 className="font-semibold text-foreground">White-label installation — October/November</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  We attend each site under your company name, carry your paperwork, install to spec, and photograph each completion. The end client sees your company throughout.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
              <div>
                <h3 className="font-semibold text-foreground">Photographic reporting — per site</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Completion photographs are sent to you after each site installation — per the format you need for your client records or project management system. Any site-level issues are flagged immediately.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">5</span>
              <div>
                <h3 className="font-semibold text-foreground">Removal — January</h3>
                <p className="mt-1 text-muted leading-relaxed">
                  Temporary seasonal graphics need to come down cleanly in January. We offer post-Christmas removal as part of the package — scheduled in advance so your clients are not left chasing removal in the New Year.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with over Christmas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Print companies</h3>
              <p className="text-sm text-muted leading-relaxed">You produce the graphics; we install them. Standard white-label model — your client, your branding, your paperwork. We provide the installation capacity you cannot scale to internally over Christmas.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Marketing and design agencies</h3>
              <p className="text-sm text-muted leading-relaxed">Agencies delivering client Christmas campaigns who need a reliable installation partner in the region. We attend under your brief, report back to your account team, and maintain the quality your client expects.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Retail contractors and fit-out companies</h3>
              <p className="text-sm text-muted leading-relaxed">Fit-out and retail contractors delivering seasonal dressing programmes for retail clients. We provide vinyl and window graphics installation as part of a wider fit-out or dressing scope — installation-only, to your specification.</p>
            </div>
            <div className="card-float p-6">
              <h3 className="font-semibold text-foreground mb-2">Signage companies</h3>
              <p className="text-sm text-muted leading-relaxed">Sign companies with Christmas work in South Yorkshire and the East Midlands who need a local installation partner. White-label, reliable, with the quality you can put your name on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Christmas subcontract installation — common questions
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
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/christmas-hotel-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas hotel graphics</h3>
              <p className="mt-2 text-sm text-muted">White-label seasonal installation for hotels — window vinyl, lobby graphics and function room vinyl.</p>
            </Link>
            <Link href="/christmas-university-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas university graphics</h3>
              <p className="mt-2 text-sm text-muted">Campus Christmas graphics for students&apos; unions, student accommodation and university venues.</p>
            </Link>
            <Link href="/christmas-window-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas window graphics</h3>
              <p className="mt-2 text-sm text-muted">Christmas graphics installation for retailers and hospitality venues — direct enquiries welcome.</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Year-round multi-site vinyl installation for print companies, agencies and sign companies.</p>
            </Link>
            <Link href="/print-company-installation-partner/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Print company installation partner</h3>
              <p className="mt-2 text-sm text-muted">White-label subcontract installation for large-format print houses — all year round.</p>
            </Link>
            <Link href="/window-graphics-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window graphics installation Yorkshire</h3>
              <p className="mt-2 text-sm text-muted">Window graphics installation across Yorkshire and the Midlands for trade and direct clients.</p>
            </Link>
            <Link href="/blog/christmas-graphics-installation-guide-for-print-companies/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas planning guide for print companies</h3>
              <p className="mt-2 text-sm text-muted">Why August is the time to confirm your Christmas installation capacity — not October.</p>
            </Link>
            <Link href="/blog/christmas-window-graphics-for-shopping-centres/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas graphics for shopping centres</h3>
              <p className="mt-2 text-sm text-muted">Multi-unit, overnight access, hoarding graphics — planning a shopping centre Christmas programme.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need installation capacity for Christmas?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              November slots fill early. If you have Christmas graphics work in South Yorkshire or the East Midlands and need a reliable white-label installer, contact us now to confirm coverage and availability.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Discuss Christmas Capacity →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
