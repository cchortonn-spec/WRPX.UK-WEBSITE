import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Window Graphics Installer | Seasonal Vinyl Installation | WRPX",
  description:
    "Christmas window graphics installation across Yorkshire and the East Midlands — retail, shopping centres, hotels, restaurants and commercial premises. Seasonal subcontract vinyl installation for print companies, agencies and retail chains. Book now for the Christmas season.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/christmas-window-graphics/",
  },
};

const serviceSchema = getServiceSchema(
  "Christmas window graphics installation — seasonal vinyl for retail, hotels and commercial premises",
  "Christmas and seasonal vinyl graphics installation across Yorkshire and the East Midlands. Window vinyl, frosted festive film, printed window graphics, temporary hoarding vinyl and multi-site Christmas rollouts for retail, hotel, restaurant and commercial clients. Subcontract installation for print companies and agencies."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Graphics", item: "https://www.wrpx.co.uk/window-graphics-installation-yorkshire/" },
    { "@type": "ListItem", position: 3, name: "Christmas Window Graphics", item: "https://www.wrpx.co.uk/christmas-window-graphics/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should we book Christmas window graphics installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "August and September is the right time to book for a November or early December install. Retail Christmas campaigns typically go up in the first two weeks of November. Lead times for print can be 4–6 weeks, and installer schedules in October and November fill quickly. If you have a multi-site programme, earlier is better.",
      },
    },
    {
      "@type": "Question",
      name: "What types of Christmas window vinyl do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Printed window graphics, cut vinyl (frosted, white, gold, silver), perforated vinyl for window coverage, frosted festive privacy film, and temporary vinyl manifestation for safety compliance. We also install window graphics on hoarding panels for temporary Christmas hoarding around construction sites or event spaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle a multi-site Christmas rollout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — multi-site consistency is a core part of what we do. We work to a brief, document each site photographically, and report back to the project manager with completion status per site. Yorkshire and the East Midlands are our primary region; we can discuss national rollout capacity for the right programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install as a subcontractor for our print or sign company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — white-label by default. If you supply the printed or cut material, we provide the installation. We attend under your instructions, carry your paperwork, and report back to your account manager or project lead. The end client sees your company.",
      },
    },
    {
      "@type": "Question",
      name: "Do you remove the graphics after Christmas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — removal is a standard part of most Christmas window graphic programmes. We schedule removal visits in January, typically the first or second week back after New Year. Removal is clean with no adhesive residue on the glass.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "When should we book Christmas window graphics installation?",
    a: "August and September is the right time to book for a November or early December install. Retail Christmas campaigns typically go up in the first two weeks of November. Lead times for print can be 4–6 weeks, and installer schedules in October and November fill quickly. If you have a multi-site programme, earlier is better.",
  },
  {
    q: "What types of Christmas window vinyl do you install?",
    a: "Printed window graphics, cut vinyl (frosted, white, gold, silver), perforated vinyl for window coverage, frosted festive privacy film, and temporary vinyl manifestation for safety compliance. We also install window graphics on hoarding panels for temporary Christmas hoarding around construction sites or event spaces.",
  },
  {
    q: "Can you handle a multi-site Christmas rollout?",
    a: "Yes — multi-site consistency is a core part of what we do. We work to a brief, document each site photographically, and report back to the project manager with completion status per site. Yorkshire and the East Midlands are our primary region; we can discuss national rollout capacity for the right programme.",
  },
  {
    q: "Can you install as a subcontractor for our print or sign company?",
    a: "Yes — white-label by default. If you supply the printed or cut material, we provide the installation. We attend under your instructions, carry your paperwork, and report back to your account manager or project lead. The end client sees your company.",
  },
  {
    q: "Do you remove the graphics after Christmas?",
    a: "Yes — removal is a standard part of most Christmas window graphic programmes. We schedule removal visits in January, typically the first or second week back after New Year. Removal is clean with no adhesive residue on the glass.",
  },
];

export default function ChristmasWindowGraphicsPage() {
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
            <Link href="/window-graphics-installation-yorkshire/" className="text-accent hover:underline">Window Graphics</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Christmas Window Graphics</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
            Book now — November schedules fill in October
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Christmas window graphics installation — retail, hotels and commercial premises
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Christmas window graphics are a time-critical installation. Retailers, shopping centres, hotels and restaurants need them up before December — and the print lead time, access logistics and installer availability all need to be booked well in advance. WRPX installs Christmas and seasonal window vinyl across Yorkshire and the East Midlands, working directly for end clients and as a subcontract installer for print companies, sign companies and marketing agencies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book Your Christmas Install →
            </Link>
            <Link href="/multi-site-rollout-installation/" className="btn-secondary">
              Multi-site Rollout Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Why book now */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why August and September is the right time to book
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Most retail and commercial Christmas window graphics go up in the first two weeks of November. That means print artwork needs to be finalised by early October, print production runs 4–6 weeks, and installation scheduling needs to be confirmed by mid-October at the latest.
            </p>
            <p>
              For a single shop, leaving it to October is fine. For a multi-site programme — five or more locations across a city or region — October is too late to guarantee dates. Installer schedules at specialist vinyl companies fill through October for November slots.
            </p>
            <p>
              If you are a print company, sign company or marketing agency with a client who needs Christmas window graphics installed across multiple sites, the conversation needs to happen now — August or September — to secure the installation capacity on the dates your client needs.
            </p>
          </div>
        </div>
      </section>

      {/* What we install */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Christmas vinyl installation — what we cover
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Printed window graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Digitally printed window graphics — full-window panels, individual panels, branded Christmas designs, snowflake or festive pattern vinyl. You supply the print; we install to spec.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Cut vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut frosted, white, gold or silver vinyl — snowflakes, lettering, festive motifs, brand logos. Applied directly to the glass. Clean, sharp finish. Removed without residue in January.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Perforated window vinyl</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Perforated see-through vinyl for larger retail windows — full-window coverage with visibility from inside. Common for shopping centre and retail chain Christmas campaigns.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Frosted festive film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Privacy or decorative frosted film with a Christmas or winter theme — used in hotel lobbies, restaurant windows and boutique retail. Temporary installation, clean removal.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hoarding and temporary panel graphics</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Christmas graphics on temporary hoarding panels around vacant units, construction hoardings or event spaces. Full-panel coverage to a consistent specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Post-Christmas removal</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Removal visits scheduled for January — first or second week. Clean removal with no adhesive residue. Multi-site programmes removed to a confirmed schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who we work with for Christmas installations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Print and sign companies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                If you print the material and need a reliable subcontract installer to handle the site work across Yorkshire and the Midlands, we work white-label under your instructions. You manage the client; we handle the installation and report back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Marketing agencies</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Agencies running Christmas campaigns for retail or hospitality clients often need installation resource they don&apos;t hold in-house. We integrate with your project delivery — attending to brief, documenting each site, and reporting status back to your account team.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Retailers and shopping centres</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Direct retail clients — single stores, shopping centre management and retail chains across South Yorkshire and the East Midlands. We advise on vinyl type, installation timing and removal planning.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Hotels and restaurants</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Festive window treatments for hotel lobbies, restaurant frontages and bar windows. We work around your opening times and can install early morning or overnight where needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Christmas window graphics — common questions
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
            <Link href="/christmas-hotel-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas hotel graphics</h3>
              <p className="mt-2 text-sm text-muted">Seasonal window vinyl, lobby graphics and festive wall vinyl for hotels and hospitality venues.</p>
            </Link>
            <Link href="/christmas-university-graphics/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Christmas university graphics</h3>
              <p className="mt-2 text-sm text-muted">Campus window graphics, student union seasonal vinyl and university Christmas programmes.</p>
            </Link>
            <Link href="/multi-site-rollout-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Multi-site rollout installation</h3>
              <p className="mt-2 text-sm text-muted">Consistent installation across multiple locations — retail, hospitality and commercial.</p>
            </Link>
            <Link href="/window-graphics-installation-yorkshire/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Window graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Year-round window vinyl and graphics installation across Yorkshire.</p>
            </Link>
            <Link href="/print-company-installation-partner/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Print company installation partner</h3>
              <p className="mt-2 text-sm text-muted">White-label installation for large-format print houses — you print, we install.</p>
            </Link>
            <Link href="/marketing-agency-installation-partner/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Marketing agency installation partner</h3>
              <p className="mt-2 text-sm text-muted">Installation resource for agencies delivering branded campaign graphics.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Christmas installation slots are filling now
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              If you need Christmas window graphics installed across one or multiple sites in Yorkshire or the East Midlands, get in touch now. We confirm your dates and brief before October.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Book Your Christmas Install →
              </Link>
              <Link href="/sign-company-installation-partner/" className="btn-secondary">
                Are you a sign or print company? →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
