import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Manchester | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Manchester — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Northern Quarter M4, Ancoats M4, Deansgate M3, Spinningfields M3, Didsbury M20 and all Manchester restaurant districts. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-manchester/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Manchester — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Manchester. Frosted privacy film for street-facing glazing in the Northern Quarter M4, Ancoats M4, Deansgate M3, Spinningfields M3 and Didsbury M20, solar control film for south and west-facing dining areas, decorative window vinyl for branding and manifestation for large glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Manchester restaurant and hospitality districts."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Manchester", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-manchester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Manchester restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out in Manchester restaurants and bars. The Northern Quarter M4 — Manchester's most distinctive independent hospitality district, built around Victorian warehouse and textile buildings — has a high proportion of large-format and full-height glazing where frosted privacy film is frequently specified. Half-height frosted on street-facing windows provides seated diner privacy from passing pedestrians while maintaining natural light in the upper glazing. In Ancoats M4, the former industrial grain warehouses converted into restaurant and bar venues feature unusually large iron-framed windows — full-height and half-height frosted film are both common specifications in this district.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Manchester restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Manchester restaurants — particularly Spinningfields M3 venues with west-facing glazing facing the afternoon sun, Deansgate restaurants with large glazed street frontages, and venues with rooftop terraces or glazed dining extensions — can overheat through spring and summer even in the north of England. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable for longer periods without blinds that obstruct views or external shading that alters the building's character. For converted industrial venues in Ancoats and the Northern Quarter with original large-format warehouse glazing, solar control film is often the most practical thermal solution available without structural glazing replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Manchester. Interior window film applications typically take 30–60 minutes per window. A Northern Quarter or Deansgate restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready for the following morning's service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Northern Quarter, Ancoats, Deansgate and the wider Manchester area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Manchester postcode districts for restaurant and bar window film. Northern Quarter M4, Ancoats M4, Deansgate M3 and M15, Spinningfields M3, Manchester city centre M1 and M2, Salford Quays M50, Didsbury M20, Chorlton M21, West Didsbury M20, Fallowfield M14, Withington M20 and the wider Greater Manchester suburban restaurant market. From our South Yorkshire base, Manchester is approximately 60 minutes via the M1 north to junction 29, then the M67 and M60 west.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Manchester restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Manchester restaurant windows as part of a frosted or clear vinyl application. We combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Manchester hospitality districts including the Northern Quarter, Ancoats, Deansgate and Didsbury Village.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmManchesterPage() {
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
            <Link href="/window-film/restaurant-window-film/" className="text-accent hover:underline">Window Film for Restaurants</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Manchester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Manchester Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Manchester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Manchester. Northern Quarter M4, Ancoats, Deansgate, Spinningfields,
            Didsbury and beyond — work carried out overnight or on closed days with
            no trading disruption. South Yorkshire base: Manchester is approximately
            60 minutes west on the M1 and M67.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Manchester Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Manchester restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Manchester has one of the largest and most rapidly evolving independent
              restaurant and bar scenes outside London. The Northern Quarter M4 is
              Manchester&apos;s most established independent hospitality district —
              a dense cluster of bars, cafés, restaurants and music venues built around
              Victorian brick warehouse and former textile buildings on Thomas Street,
              Tib Street, Oldham Street and the surrounding grid. These buildings
              characteristically feature large multi-pane sash windows, full-height
              warehouse glazing and industrial-scale shopfronts: window film demand
              in this district is consistently high, with frosted privacy film and
              glass manifestation the most common specifications.
            </p>
            <p>
              Ancoats M4 — the former cotton-spinning district immediately east of
              the city centre — has emerged as Manchester&apos;s most talked-about
              new dining district. Converted grain warehouses, former spinning mills
              and new-build residential-mixed developments along Blossom Street,
              Murray Street and Cutting Room Square have attracted some of the
              city&apos;s best-regarded restaurants. The original warehouse glazing
              in Ancoats — typically iron-framed, large-format, multi-pane — is
              distinctive but thermally poor: solar control film and frosted privacy
              film are both commonly specified in venues occupying original warehouse
              units.
            </p>
            <p>
              Deansgate M3 and the Deansgate Locks area are Manchester&apos;s
              most commercially dense bar and restaurant corridor — a mix of large-format
              bar units, national restaurant chains and independent venues with significant
              street-facing glazing. West-facing Deansgate venues receive strong
              afternoon sun exposure through spring and summer, making solar control
              film a particularly valuable specification here. Spinningfields M3 —
              Manchester&apos;s financial and professional district — has a growing
              high-quality restaurant cluster serving the lunchtime and after-work
              market, with large glazed frontages common across the newer development
              units.
            </p>
            <p>
              Beyond the city centre, Didsbury M20 and Didsbury Village M20 — along
              Wilmslow Road and the surrounding streets — represent Manchester&apos;s
              most active suburban independent restaurant and café district. Chorlton
              M21, Withington M20 and Fallowfield M14 add substantial further
              suburban hospitality volume. Salford Quays M50, with its media and
              corporate occupiers, has a growing restaurants-for-business market.
              WRPX covers all Greater Manchester postcode districts for restaurant
              and bar window film installation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Manchester restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Northern Quarter and Deansgate restaurants —
                particularly in venues on busy pedestrian streets like Thomas Street
                and Tib Street where seated diners are directly visible from
                the pavement. For Ancoats warehouse conversions with large multi-pane
                original glazing, full-height frosted or patterned film maintains
                the industrial aesthetic while providing dining privacy.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — Northern Quarter and Deansgate street-facing dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Ancoats warehouse glazing and industrial conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas and private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-manchester/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Manchester →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                West-facing Deansgate and Spinningfields restaurants receive strong
                afternoon and evening sun exposure through spring and summer. South
                and west-facing Didsbury Village and Chorlton restaurants — with
                typically large shopfront glazing onto busy pavement dining strips —
                overheat significantly through warm months. Solar control film reduces
                solar heat gain by 40–79%, keeping the dining area comfortable without
                blinds that obstruct views or external shading that alters the
                venue&apos;s street character.
              </p>
              <Link href="/window-film/solar-control-film-manchester/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Manchester →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Manchester
                restaurants adding branding or seasonal promotion to street-facing
                glazing. Suitable for new venue openings, rebrands and rolling
                promotional campaigns. For multi-site groups with Manchester locations,
                we deliver consistent specification across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed
                panels that could be mistaken for an open doorway or solid wall. In
                Manchester restaurants and bars, this applies most commonly to
                full-height glazed shopfronts in the Northern Quarter and Deansgate,
                and to full-glazed entrance doors across the city-centre M1–M4 core.
                Applied as a dot band, stripe or as part of a decorative branding
                design that satisfies compliance while enhancing the venue&apos;s
                street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester restaurant zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Northern Quarter M4</h3>
              <p className="mt-2 text-sm text-muted">Manchester&apos;s most established independent hospitality district — Victorian brick warehouses and textile buildings on Thomas Street, Tib Street and Oldham Street. Large multi-pane sash windows and full-height warehouse glazing throughout. Frosted privacy film, glass manifestation and branding vinyl are the most common specifications across this district.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Ancoats M4</h3>
              <p className="mt-2 text-sm text-muted">Manchester&apos;s fastest-growing dining district — former cotton mills and grain warehouses on Blossom Street, Murray Street and Cutting Room Square converted to some of the city&apos;s best restaurants. Distinctive iron-framed warehouse glazing throughout. Solar control and frosted film are both commonly specified in Ancoats restaurant units.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Deansgate and Castlefield M3</h3>
              <p className="mt-2 text-sm text-muted">Manchester&apos;s commercial bar and restaurant corridor — large-format bar units, national restaurant chains and independent venues with significant west-facing street-frontage glazing. Strong afternoon sun exposure through spring and summer makes solar control film a priority specification here. Glass manifestation for full-height shopfronts is also common throughout the Deansgate strip.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Spinningfields M3</h3>
              <p className="mt-2 text-sm text-muted">Manchester&apos;s financial and professional district restaurant cluster — large glazed frontages in newer development units serving the lunch and after-work market. Frosted film for private dining rooms, solar control for south-facing glazing, glass manifestation for full-height entrance glazing and branding vinyl for corporate-area venues are all common here.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Didsbury Village and Chorlton M20/M21</h3>
              <p className="mt-2 text-sm text-muted">Manchester&apos;s most active suburban restaurant strips — Wilmslow Road and Burton Road independent dining clusters. Typical Victorian and Edwardian shopfronts with standard glazing proportions. Frosted privacy film for ground-floor dining rooms, solar control for south-facing shopfronts, and branding vinyl for new venue openings throughout these south Manchester dining districts.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Salford Quays, Fallowfield and wider Greater Manchester M50/M14</h3>
              <p className="mt-2 text-sm text-muted">Salford Quays M50 media district restaurants, Fallowfield M14 student-area cafés and restaurant strips, and the wider Greater Manchester suburban hospitality market. WRPX covers all Greater Manchester postcode districts for restaurant and bar window film — from Stockport SK to Bolton BL, Bury BL to Trafford WA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* No-closure installation */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Overnight and out-of-hours installation — no trading disruption
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Window film installation in a Manchester restaurant is low-disruption by
              nature. Exterior applications can be done from outside during trading
              hours with no interior access required. Interior applications — frosted
              film applied to the interior surface of street-facing windows — take
              30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Northern Quarter and Ancoats restaurants.</strong>{" "}
              Most Northern Quarter venues close between midnight and 10am — a window
              that is more than sufficient for most installation programmes. We arrive
              after last orders and leave before the morning prep team arrives, with
              every window clean and the premises ready.
            </p>
            <p>
              <strong className="text-foreground">Deansgate and Spinningfields restaurants.</strong>{" "}
              These venues often have Monday or Tuesday closed days — we schedule
              installation for those days when possible, giving a full day without
              time pressure. For urgent installations, overnight access is equally
              effective across the city-centre M3 zone.
            </p>
            <p>
              <strong className="text-foreground">Didsbury, Chorlton and suburban restaurants.</strong>{" "}
              Suburban Manchester restaurant strips typically have more predictable
              closed-day schedules. We survey the premises in advance and agree
              an installation window that avoids any impact on trading.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Manchester groups.</strong>{" "}
              If you operate multiple Manchester venues, we deliver consistent film
              specification across all sites on the same programme — same film,
              same installation standard, same documentation at each venue.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Manchester restaurant window film — common questions
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
            Related services for Manchester restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Manchester offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Manchester</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Manchester commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-manchester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Manchester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Manchester restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Manchester restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Manchester restaurants quickly — approximately 60 minutes
              from South Yorkshire on the M1 and M67. Tell us the venue and what
              you need and we&apos;ll advise on specification and plan around your
              trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Manchester Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
