import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Window Film | Frosted, Decorative & Solar Film for Shops | WRPX",
  description:
    "Window film for retail units across South Yorkshire and the East Midlands — frosted privacy film, branded decorative vinyl, solar-control glazing film and window manifestation for shop fronts, fitting rooms and glazed retail interiors.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film — frosted, decorative and solar-control for shop fronts",
  "Window film installation for retail premises across South Yorkshire and the East Midlands. Frosted privacy film for fitting rooms and staff areas, branded decorative film for shop-front glazing, solar-control film to reduce glare and overheating in south-facing units, and glass manifestation to meet DDA requirements."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you install window film in a trading retail unit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most retail window film installations can be done during trading hours without disruption — applying film to shop-front glazing is quiet work. For fitting room or internal glazing, we schedule to avoid peak trading periods. Overnight installation is available for shopping centre units with centre management coordination.",
      },
    },
    {
      "@type": "Question",
      name: "What retail window film applications do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop-front frosted or decorative film, fitting room privacy film, staff area and office glazing film within the retail unit, solar-control film for south-facing or overheating units, DDA-compliant glass manifestation for full-height glazed fronts, and seasonal promotional film for short-term campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our brand or logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film can incorporate cut logos, text, patterns or full printed designs. This is popular for shop-front glazing and internal partition glass. We advise on the best approach — cut vinyl, printed film or standard frosted — based on your specification and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work across multiple retail sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Multi-site retail programmes are a core part of what we do. We provide consistent film specification across every location, coordinate with each site&apos;s opening hours and centre management requirements, and deliver photo documentation per site. We work white-label for fit-out contractors and brand managers.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can you install window film in a trading retail unit?",
    a: "Yes. Most retail window film installations can be done during trading hours without disruption — applying film to shop-front glazing is quiet work. For fitting room or internal glazing, we schedule to avoid peak trading periods. Overnight installation is available for shopping centre units with centre management coordination.",
  },
  {
    q: "What retail window film applications do you cover?",
    a: "Shop-front frosted or decorative film, fitting room privacy film, staff area and office glazing film within the retail unit, solar-control film for south-facing or overheating units, DDA-compliant glass manifestation for full-height glazed fronts, and seasonal promotional film for short-term campaigns.",
  },
  {
    q: "Can the film include our brand or logo?",
    a: "Yes. Frosted and decorative film can incorporate cut logos, text, patterns or full printed designs. This is popular for shop-front glazing and internal partition glass. We advise on the best approach — cut vinyl, printed film or standard frosted — based on your specification and budget.",
  },
  {
    q: "Can you work across multiple retail sites?",
    a: "Yes. Multi-site retail programmes are a core part of what we do. We provide consistent film specification across every location, coordinate with each site's opening hours and centre management requirements, and deliver photo documentation per site. We work white-label for fit-out contractors and brand managers.",
  },
];

export default function RetailWindowFilmPage() {
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
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Retail Window Film</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Retail window film — frosted privacy, branded decorative film and solar control for shops
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Retail glazing does more than let light in. Shop-front film creates privacy, brand identity and comfort — frosted fitting rooms, branded glass panels, solar-control film for south-facing units that overheat in summer, and compliant glass manifestation for full-height glazed fronts. We install across South Yorkshire and the East Midlands without disrupting trading.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Retail Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film applications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Fitting room privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms with glazed doors or side panels need complete privacy. Frosted film applied to the interior glass face provides full day-and-night privacy while still transmitting natural light — no curtains, no blinds, no maintenance.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Shop-front decorative and branded film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Etched-effect frosted panels, full-width decorative film bands, cut-vinyl brand lettering and logo film for shop-front glazing. Adds brand presence and distinguishes the glazed frontage without printing costs or planning complications for most standard shopfronts.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar-control film for overheating units</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                South-facing retail units in shopping centres and on high streets overheat badly in summer. Solar-control film cuts solar gain significantly — cooler for customers and staff, less load on air conditioning, and protects merchandise from UV fade. We advise on the right film for your glass type at survey.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Glass manifestation — DDA compliance</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Full-height glazed shop fronts and internal glass panels require manifestation markings to meet health and safety requirements. We install frosted manifestation strips or branded manifestation designs that are compliant and consistent with the store aesthetic.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Staff area and back-office glazing</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Glazed partitions and office windows within retail units often need privacy film to screen stock rooms, staff areas and cash offices from customer view. Frosted or one-way mirror film provides the required screening without blocking light.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Seasonal and promotional window film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Decorative vinyl and semi-permanent film for seasonal campaigns — Christmas frosted panels, promotional window dressing and temporary branded glazing treatments. We install and remove cleanly, leaving no adhesive residue on the glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-site */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Multi-site retail window film programmes
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Window film installation for a single retail site is straightforward. Delivering a consistent specification across 10, 20 or 50 retail locations is a different kind of job — and it requires a different kind of installer.
            </p>
            <p>
              <strong className="text-foreground">Consistent specification across every site.</strong> We use the same film from the same specification batch across multi-site programmes. The frosted finish in Sheffield looks identical to the same installation in Nottingham. There is no batch variation between sites.
            </p>
            <p>
              <strong className="text-foreground">Shopping centre coordination included.</strong> We handle out-of-hours access requests, centre management sign-off, RAMS documentation and waste removal as part of the programme — not as extras for you to manage.
            </p>
            <p>
              <strong className="text-foreground">White-label for fit-out contractors and brand managers.</strong> We integrate into your programme, attend branded or unbranded as required, and provide consolidated photo documentation per site at handover. Your client sees a clean programme. We operate in the background.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Retail window film — common questions
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
            <Link href="/architectural-wrap-retail/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, gondola ends, display plinths and branded fixture surfaces wrapped in architectural film.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Full privacy frosted film — day and night. No blinds or curtains required.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Cut solar gain on south-facing glazing. Cooler interiors, less glare, UV protection for merchandise.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-2 text-sm text-muted">DDA-compliant manifestation for full-height and low-level glazed panels. Frosted stripes and branded designs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Retail window film — single site or multi-site programme
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey and scope retail window film programmes across South Yorkshire and the East Midlands. Tell us what you need — fitting room privacy, shop-front branding, solar control or DDA manifestation — and we&apos;ll advise on specification and scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Retail Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
