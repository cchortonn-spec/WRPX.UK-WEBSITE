import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Film for Restaurants & Bars | Frosted & Decorative Film | WRPX",
  description:
    "Window film installation for restaurants, bars and cafés across South Yorkshire and the East Midlands — frosted privacy film for street-facing glazing, decorative window vinyl, solar control film and glass manifestation. Overnight installation, no trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you install window film without closing the restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Window film installation is a clean, low-disruption process. Exterior glazing can typically be done from outside during trading hours with no impact on the interior. Interior applications — frosted film on internal partitions, solar control film on inside-glazing surfaces — are done overnight or early morning to avoid working in a trading environment.",
      },
    },
    {
      "@type": "Question",
      name: "What types of window film do restaurants commonly use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common applications are: frosted or etched-effect privacy film for street-facing glazing (creating a comfortable dining environment without full visibility from the pavement), decorative cut vinyl or printed film for branding and logos on windows, solar control film for south or west-facing glazing that overheats in summer, and safety manifestation on full-height glass panels where required.",
      },
    },
    {
      "@type": "Question",
      name: "Can frosted film be applied to just part of the window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Half-height frosted film — opaque on the lower portion and clear above — is a very common approach for restaurant street-facing windows. It provides privacy for seated diners while keeping the upper portion clear to allow natural light and a sense of openness. The dividing line can be positioned to suit your specific window and seating configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative graphics can be applied to restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl graphics separately. Contact us with your artwork or brief.",
      },
    },
    {
      "@type": "Question",
      name: "How long does restaurant window film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality window film from 3M or Avery Dennison on restaurant glazing typically lasts 7–12 years. External applications on exposed south or west-facing glazing may have a slightly shorter service life due to UV exposure. We advise on the right film specification for each application at survey.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Can you install window film without closing the restaurant?",
    a: "Yes. Window film installation is a clean, low-disruption process. Exterior glazing can typically be done from outside during trading hours with no impact on the interior. Interior applications — frosted film on internal partitions, solar control film on inside-glazing surfaces — are done overnight or early morning to avoid working in a trading environment.",
  },
  {
    q: "What types of window film do restaurants commonly use?",
    a: "The most common applications are: frosted or etched-effect privacy film for street-facing glazing (creating a comfortable dining environment without full visibility from the pavement), decorative cut vinyl or printed film for branding and logos on windows, solar control film for south or west-facing glazing that overheats in summer, and safety manifestation on full-height glass panels where required.",
  },
  {
    q: "Can frosted film be applied to just part of the window?",
    a: "Yes. Half-height frosted film — opaque on the lower portion and clear above — is a very common approach for restaurant street-facing windows. It provides privacy for seated diners while keeping the upper portion clear to allow natural light and a sense of openness. The dividing line can be positioned to suit your specific window and seating configuration.",
  },
  {
    q: "Can you add branding or logo graphics to window film?",
    a: "Yes. Printed or cut-vinyl branding, logos, menus and decorative graphics can be applied to restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl graphics separately. Contact us with your artwork or brief.",
  },
  {
    q: "How long does restaurant window film last?",
    a: "Quality window film from 3M or Avery Dennison on restaurant glazing typically lasts 7–12 years. External applications on exposed south or west-facing glazing may have a slightly shorter service life due to UV exposure. We advise on the right film specification for each application at survey.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants and Bars", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
  ],
};

export default function RestaurantWindowFilmPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/window-film/" className="text-accent hover:underline">Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Window Film for Restaurants and Bars</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Window film for restaurants and bars — frosted privacy, decorative film and solar control
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Restaurant and bar glazing does several jobs at once: it draws people in, creates atmosphere, provides privacy for diners, and — if badly managed — turns a south-facing dining room into a greenhouse in summer. Window film addresses all of these. We install frosted privacy film, decorative window vinyl, solar control film and safety manifestation for restaurants, bars, cafés and hospitality venues across South Yorkshire and the East Midlands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Restaurant Window Film Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Four types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            The window film applications restaurants and bars use
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film for street-facing glazing</h3>
              <p className="mt-4 text-muted leading-relaxed">
                The most common restaurant window film application. Frosted or etched-effect film on the lower portion of street-facing windows gives seated diners privacy without making the restaurant feel closed or dark. The upper section stays clear — light comes in, the view from inside stays pleasant, but diners are not on display to passing pedestrians.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Quality frosted film from 3M or Avery Dennison is indistinguishable from sandblasted or etched glass to a normal observer — a finish that works for any type of venue from a neighbourhood café to a fine dining restaurant.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted on street-facing windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted for ground-floor private dining rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glass partitions between dining areas</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-window-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative and branding window vinyl</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative window graphics and etched-effect patterned film all add character and branding to restaurant glazing. The window becomes part of the interior design rather than just a structural gap.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                For multi-site restaurant groups, we deliver consistent window graphics application across all sites — same specification, same quality, same handover process at every venue.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Frosted film with logo or pattern cut-outs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Printed or cut-vinyl window graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Decorative etched-effect patterned film</span>
                </li>
              </ul>
              <Link href="/window-graphics-installation-yorkshire/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Window graphics installation →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film for overheating dining areas</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing restaurant glazing in summer creates uncomfortable dining conditions and overworked cooling systems. Solar control film reduces solar heat gain by 40–79% — keeping the dining room at a comfortable temperature without blocking the view or relying on blinds that darken the space.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                For conservatory-style dining rooms and glazed extensions, solar control film is often the most cost-effective single improvement available — faster and cheaper than HVAC upgrades, and non-destructive to listed or managed buildings.
              </p>
              <Link href="/window-film/solar-control-film/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film details →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Safety manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require manifestation on large glazed panels that could be mistaken for a solid wall or open doorway. In restaurants, this applies most commonly to full-height glazed entrance doors, full-width window installations and glazed internal partitions between areas.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Manifestation can be applied as a simple dot band or stripe — or incorporated into a branding and decorative window design, satisfying the compliance requirement while adding visual interest.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* No-closure installation */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            No trading disruption. Overnight or early-morning installation.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Window film installation in a restaurant is significantly less disruptive than most work. External applications can be done from outside without any interior disruption. Interior applications — frosted film on inside-facing glass — take 30–60 minutes per window and can be done overnight, early morning, or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Exterior glazing.</strong> Most frosted and solar control film is applied to the interior surface of the glass. Where external application is specified, we work from outside with no access to the trading interior — suitable for daytime installation on occupied premises.
            </p>
            <p>
              <strong className="text-foreground">Multi-site restaurant groups.</strong> If you operate multiple sites, we deliver a consistent application across all of them — same film specification, same process, same documentation format at each venue. We can schedule across sites on your closed days or overnight.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Restaurant window film — common questions
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
            Related services for restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/architectural-wrap-restaurants/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior vinyl wrapping</h3>
              <p className="mt-2 text-sm text-muted">Counter fascias, bar fronts, booth panels and furniture wrapping for restaurant refurbishments.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film for street-facing glazing, partitions and private dining areas.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction for south-facing dining rooms and glazed extensions.</p>
            </Link>
            <Link href="/hospitality-graphics-installation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Hospitality graphics installation</h3>
              <p className="mt-2 text-sm text-muted">Subcontract vinyl graphics for restaurant and bar fit-out contractors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey restaurant and bar window film across South Yorkshire and the East Midlands. Tell us the venue and what you need — we&apos;ll advise on specification and overnight scheduling.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
