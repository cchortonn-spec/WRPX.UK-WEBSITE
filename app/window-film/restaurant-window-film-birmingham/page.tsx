import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Birmingham | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Birmingham — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Digbeth B5, Jewellery Quarter B1, Broad Street B1, Brindleyplace B1, Moseley B13, Harborne B17, Edgbaston B15 and all Birmingham restaurant districts. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-birmingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Birmingham — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Birmingham. Frosted privacy film for street-facing glazing in Digbeth B5, Jewellery Quarter B1, Broad Street B1 and Brindleyplace B1, solar control film for south and west-facing dining areas, decorative window vinyl for branding and glass manifestation for large glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Birmingham restaurant and hospitality districts."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Birmingham", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-birmingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Birmingham restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out for Birmingham restaurants and bars. Digbeth B5 — Birmingham's arts and independent hospitality quarter — features a high concentration of Victorian and Edwardian brick warehouses and industrial buildings converted into bars, restaurants and event venues. These buildings typically have large-format multi-pane glazing where half-height or full-height frosted film is frequently specified to provide seated diner privacy from busy street-level pedestrian traffic. In the Jewellery Quarter B1, independent restaurants occupying former workshops and showrooms often have large street-facing windows where frosted film is the standard privacy solution. On Broad Street B1, higher-footfall and street-frontage-heavy venues use half-height frosted or etched-effect film to create a level of enclosure without sacrificing daytime natural light.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Birmingham restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Birmingham restaurants — particularly venues in Brindleyplace B1 with west-facing canalside glazing, Broad Street bars with direct afternoon sun exposure, and Moseley B13 and Harborne B17 shopfront restaurants facing south — can overheat significantly through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable without blinds that block views or external shading structures that alter the character of listed or period buildings. In Digbeth B5, where many venues occupy original Victorian industrial units with large multi-pane glazing that performs poorly thermally, solar control film is often the most practical thermal management solution available without expensive glazing replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Birmingham. Interior window film applications typically take 30–60 minutes per window. A Digbeth or Jewellery Quarter restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready for the following morning's service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Digbeth, Jewellery Quarter, Broad Street, Moseley and the wider Birmingham area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Birmingham postcode districts for restaurant and bar window film. Digbeth B5, Jewellery Quarter B1, Broad Street B1 and B16, Brindleyplace B1, Birmingham city centre B1 and B2, Five Ways B15 (Edgbaston), Moseley B13, King's Heath B14, Harborne B17, Balsall Heath B12, Stirchley B30, and the wider West Midlands restaurant market. From our South Yorkshire base, Birmingham is approximately 1 hour 30 minutes via the M1 south to the M42 and A38(M). For larger Birmingham programmes, we plan full-day visits covering multiple venues.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Birmingham restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Birmingham restaurant windows as part of a frosted or clear vinyl application. We combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Birmingham hospitality districts — Digbeth, Jewellery Quarter, Broad Street, Brindleyplace, Moseley Village and Harborne High Street.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmBirminghamPage() {
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
            <span className="text-foreground">Birmingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Birmingham Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Birmingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Birmingham. Digbeth B5, Jewellery Quarter B1, Broad Street, Brindleyplace,
            Moseley and beyond — work carried out overnight or on closed days with
            no trading disruption. South Yorkshire base: Birmingham is approximately
            1 hour 30 minutes south on the M1 and M42.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Birmingham Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Birmingham restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Birmingham has the largest and most diverse restaurant scene of any English
              city outside London — driven by a genuinely multicultural food culture, a
              significant student population across Aston B4, University of Birmingham
              B15 and Birmingham City University B4, and a growing city-centre residential
              and visitor economy. Digbeth B5 has emerged as Birmingham&apos;s leading
              independent hospitality and arts quarter — the former industrial east end of
              the city centre, built around Victorian brick warehouse and canal-side
              industrial buildings on Digbeth High Street, Floodgate Street and the
              surrounding streets. Venues here characteristically feature large-format
              multi-pane and floor-to-ceiling glazing, original industrial fenestration,
              and converted loading bay openings — window film demand in this district is
              high, with frosted privacy film and decorative window vinyl the most common
              specifications.
            </p>
            <p>
              The Jewellery Quarter B1 — Birmingham&apos;s most distinctive historic
              commercial district, built around the former gem and metalwork trade —
              has seen rapid growth as an independent restaurant and bar destination.
              Former workshops, showrooms and counting houses along Vyse Street,
              Warstone Lane, Frederick Street and the surrounding grid have been converted
              into some of Birmingham&apos;s most talked-about restaurants. The
              characteristically large street-facing windows of Victorian Jewellery Quarter
              buildings make frosted film, etched-effect vinyl and glass manifestation
              consistently high-demand specifications in this area.
            </p>
            <p>
              Broad Street B1 and B16 is Birmingham&apos;s main commercial bar and
              entertainment corridor — a high-footfall strip of large-format bar and
              restaurant venues with significant street-facing glazing. Brindleyplace B1 —
              the canalside commercial and leisure development immediately west of the
              city centre — has a growing cluster of restaurant units with canal-facing
              glazing. West-facing canalside venues in Brindleyplace receive strong
              afternoon sun exposure through spring and summer, making solar control film
              a priority specification in this location.
            </p>
            <p>
              Beyond the city centre, Moseley B13 and Moseley Village — along Alcester
              Road and the surrounding streets — represent Birmingham&apos;s most active
              independent restaurant and café district. Harborne B17 High Street, King&apos;s
              Heath B14 and Stirchley B30 add further suburban hospitality volume. Five Ways
              B15 and Edgbaston B15 serve the upmarket dining and corporate lunch market.
              WRPX covers all Birmingham and West Midlands postcode districts for restaurant
              and bar window film installation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Birmingham restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Digbeth and Jewellery Quarter restaurants —
                particularly in venues on busy pedestrian streets where seated diners
                are directly visible from the pavement. For Digbeth warehouse conversions
                with large multi-pane or original industrial glazing, full-height frosted
                or patterned film maintains the industrial aesthetic while providing
                dining privacy. On Broad Street, high-traffic venues use half-height
                frosted or etched-effect designs to create enclosure without losing
                the open street presence.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — Digbeth and Jewellery Quarter street-facing dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Digbeth warehouse glazing and industrial conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas and private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-birmingham/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Birmingham →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                West-facing Brindleyplace and Broad Street restaurants receive strong
                afternoon and evening sun exposure through spring and summer. South-facing
                Moseley Village and Harborne High Street restaurants — with typically
                large shopfront glazing onto busy pavement dining strips — overheat
                significantly through warm months. Solar control film reduces solar heat
                gain by 40–79%, keeping the dining area comfortable without blinds that
                obstruct views or external shading that changes the character of a
                period or listed building.
              </p>
              <Link href="/window-film/solar-control-film-birmingham/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Birmingham →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Birmingham
                restaurants adding branding or seasonal promotion to street-facing
                glazing. Suitable for new venue openings in Digbeth or the Jewellery
                Quarter, rebrands, and rolling promotional campaigns. For multi-site
                groups with Birmingham locations, we deliver consistent specification
                across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed
                panels that could be mistaken for an open doorway or solid wall. In
                Birmingham restaurants and bars, this applies most commonly to
                full-height glazed shopfronts in Digbeth, Jewellery Quarter and
                Broad Street, and to full-glazed entrance doors across the city-centre
                B1–B5 core. Applied as a dot band, stripe or as part of a decorative
                branding design that satisfies compliance while enhancing the venue&apos;s
                street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Birmingham restaurant zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Birmingham restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Digbeth B5</h3>
              <p className="mt-2 text-sm text-muted">Birmingham&apos;s arts and independent hospitality quarter — Victorian brick warehouses and industrial buildings on Digbeth High Street, Floodgate Street and Bradford Street converted into bars, restaurants and event venues. Large-format original industrial glazing throughout. Frosted privacy film, decorative window vinyl and glass manifestation are the most common specifications in this district.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Jewellery Quarter B1</h3>
              <p className="mt-2 text-sm text-muted">Birmingham&apos;s most distinctive historic commercial district — former workshops and showrooms on Vyse Street, Warstone Lane and Frederick Street converted to some of the city&apos;s most-regarded independent restaurants and bars. Characteristically large street-facing Victorian windows throughout. Frosted film, etched-effect vinyl and manifestation are consistently high-demand in the Jewellery Quarter restaurant market.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Broad Street and Brindleyplace B1</h3>
              <p className="mt-2 text-sm text-muted">Birmingham&apos;s main commercial entertainment and restaurant corridor — large-format bar and restaurant units with significant street-facing glazing on Broad Street, and a growing canalside restaurant cluster at Brindleyplace B1. West-facing Brindleyplace venues receive strong afternoon sun through spring and summer — solar control film is a priority specification here. Glass manifestation for full-height shopfronts is also common throughout Broad Street.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Moseley Village and King&apos;s Heath B13/B14</h3>
              <p className="mt-2 text-sm text-muted">Birmingham&apos;s most active independent restaurant strip — Alcester Road and the Moseley Village high street cluster. Victorian and Edwardian shopfronts with standard glazing proportions. Frosted privacy film for ground-floor dining rooms, solar control for south-facing shopfronts, and branding vinyl for new venue openings. King&apos;s Heath B14 High Street adds further suburban restaurant volume immediately south of Moseley.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Harborne, Edgbaston and Five Ways B17/B15</h3>
              <p className="mt-2 text-sm text-muted">Harborne B17 High Street is Birmingham&apos;s premium suburban independent restaurant district — well-maintained Victorian shopfronts, strong lunchtime and evening trade, and consistent window film demand from long-established restaurants and new openings. Edgbaston B15 and Five Ways B15 serve the upmarket dining and corporate lunch market. Solar control film for south-facing glazing and frosted film for private dining rooms are common across these districts.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Stirchley, Balsall Heath and wider Birmingham B30/B12</h3>
              <p className="mt-2 text-sm text-muted">Stirchley B30 Pershore Road, Balsall Heath B12 and the wider Birmingham inner-suburban restaurant market. WRPX covers all Birmingham postcode districts for restaurant and bar window film — from Sutton Coldfield B72 and Solihull B90 to Erdington B24 and Northfield B31, as well as the West Midlands wider market including Wolverhampton WV, Walsall WS and Sandwell B64–B70.</p>
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
              Window film installation in a Birmingham restaurant is low-disruption by
              nature. Exterior applications can be done from outside during trading
              hours with no interior access required. Interior applications — frosted
              film applied to the interior surface of street-facing windows — take
              30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Digbeth and Jewellery Quarter restaurants.</strong>{" "}
              Many Digbeth venues close between midnight and 10am — an overnight window
              that is more than sufficient for most installation programmes. Jewellery
              Quarter restaurants often take a Monday or Tuesday closed day — we schedule
              installation for those days when possible. We arrive after last orders
              and leave before the morning prep team arrives, with every window clean
              and the premises ready.
            </p>
            <p>
              <strong className="text-foreground">Broad Street and Brindleyplace venues.</strong>{" "}
              These venues often have Monday or Tuesday closed days — we schedule
              installation for those days where available, giving a full day without
              time pressure. For urgent installations, overnight access is effective
              across the city-centre B1 zone.
            </p>
            <p>
              <strong className="text-foreground">Moseley, Harborne and suburban restaurants.</strong>{" "}
              Suburban Birmingham restaurant strips typically have more predictable
              closed-day schedules. We survey the premises in advance and agree an
              installation window that avoids any impact on trading.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Birmingham groups.</strong>{" "}
              If you operate multiple Birmingham venues, we deliver consistent film
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
            Birmingham restaurant window film — common questions
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
            Related services for Birmingham restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Birmingham offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Birmingham commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Birmingham restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Birmingham restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Birmingham restaurants — approximately 1 hour 30 minutes
              from South Yorkshire on the M1 and M42. Tell us the venue and what
              you need and we&apos;ll advise on specification and plan around your
              trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Birmingham Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
