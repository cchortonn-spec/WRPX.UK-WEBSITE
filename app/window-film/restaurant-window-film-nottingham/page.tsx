import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Nottingham | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Nottingham — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Nottingham city centre NG1, Lace Market, Hockley, Sneinton Market, West Bridgford NG2, Beeston NG9 and all Nottingham restaurant postcodes. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Nottingham — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Nottingham. Frosted privacy film for street-facing glazing in Nottingham city centre NG1, Lace Market, Hockley and Sneinton Market, solar control film for south and west-facing dining areas, decorative window vinyl for branding and manifestation for glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Nottingham restaurant and hospitality postcodes."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Nottingham restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out in Nottingham restaurants and bars. The Lace Market NG1 and Hockley NG1 districts — dense with independent restaurants, bars and cafés in converted lace and textile buildings — have a high proportion of large-format and full-height glazing where frosted privacy film is a standard specification. Half-height frosted on street-facing windows gives seated diners privacy from passing pedestrians while maintaining light in the upper glazing. For the Sneinton Market area and Broadway district, full-height or patterned frosted film is increasingly common as new venues fit out glazed shopfront units.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Nottingham restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Nottingham restaurants — particularly venues on the south side of the Lace Market, west-facing Hockley premises and restaurants in West Bridgford NG2 with south-facing glazing — overheat through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable without blinds or external shading that blocks views. For conservatory-style dining extensions in Beeston NG9, West Bridgford NG2 and the wider Nottinghamshire suburbs, solar control film is often the single most cost-effective thermal improvement available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Nottingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Nottingham. Interior window film applications typically take 30–60 minutes per window. A Nottingham city-centre restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready to trade the following morning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Lace Market, Hockley, West Bridgford and the wider Nottingham area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Nottingham postcodes for restaurant and bar window film. Nottingham city centre NG1 (Lace Market, Hockley, Old Market Square, Bridlesmith Gate, Pelham Street), Sneinton Market NG2, West Bridgford NG2 (Melton Road restaurant strip), Beeston NG9 (Chilwell Road and High Road restaurant cluster), Mapperley NG3, Arnold NG5, Carlton NG4 — we cover the full Nottingham city region and the wider Nottinghamshire market.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Nottingham restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Nottingham restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Nottingham hospitality districts including the Lace Market, Hockley and West Bridgford.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Nottingham Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Nottingham. City-centre NG1, the Lace Market, Hockley, West Bridgford
            NG2, Beeston NG9 and beyond — work carried out overnight or on closed
            days with no trading disruption. South Yorkshire base: Nottingham is a
            55-minute drive up the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham has one of the most diverse and rapidly growing independent
              restaurant and bar scenes in the East Midlands. The Lace Market NG1 —
              Nottingham&apos;s most distinctive hospitality district, built around
              converted Victorian lace warehouses — has seen a significant wave of
              restaurant and bar openings over the past decade. These buildings
              characteristically feature large warehouse windows, industrial-scale
              glazing panels and full-height shopfront glazing: window film demand
              in this district is consistently high, and the specification tends
              toward quality film products to match the building character.
            </p>
            <p>
              Hockley NG1, immediately to the north of the Lace Market, is
              Nottingham&apos;s most active independent hospitality neighbourhood —
              a dense cluster of bars, cafés, restaurants and creative businesses
              on Broad Street, Goose Gate and Carlton Street. The predominantly
              Victorian and Edwardian shopfronts here have standard window proportions;
              frosted privacy film for street-facing dining rooms and glass manifestation
              for full-height shopfront glazing are the most common film applications
              across the Hockley district.
            </p>
            <p>
              The Old Market Square NG1 and the emerging Sneinton Market area NG2 —
              including the Sneinton Market Creative Quarter — have seen significant
              new venue activity in recent years. New-build and converted units in
              these areas frequently feature large-format glazed frontages, and frosted
              film, decorative branding vinyl and solar control are standard specifications
              for venues fitting out these spaces.
            </p>
            <p>
              Beyond the city centre, the West Bridgford NG2 restaurant strip along
              Melton Road and Bridgford Road is one of Nottingham&apos;s most commercially
              active suburban dining districts — a high-density row of independent
              restaurants, bars and cafés serving one of Nottingham&apos;s most affluent
              residential postcodes. South-facing and west-facing glazing in this district
              generates consistent demand for solar control film, and frosted privacy
              film is common on ground-floor dining rooms facing busy pavements.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Nottingham restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Nottingham city-centre NG1 restaurants and bars —
                particularly in the Lace Market where large warehouse windows face
                directly onto pedestrianised or busy streets. For Hockley venues on
                Broad Street, Goose Gate and Carlton Street, frosted film addresses
                privacy at table level while retaining the character of the shopfront
                glazing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — city-centre NG1 street-facing windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Lace Market warehouse glazing and conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas or private rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-nottingham/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Nottingham →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Nottingham restaurants — particularly those in
                West Bridgford NG2 with glazing facing the afternoon sun, and Lace
                Market venues with large south-facing warehouse windows — overheat
                through spring and summer. Solar control film reduces solar heat gain
                by 40–79%, keeping the dining area comfortable without blinds that
                block views or external shading that alters the building&apos;s
                appearance.
              </p>
              <Link href="/window-film/solar-control-film-nottingham/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Nottingham →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Nottingham
                restaurants adding branding or seasonal promotion to street-facing
                glazing. Suitable for new venue openings, rebrands and rolling
                promotional campaigns. For multi-site groups with Nottingham
                locations, we deliver consistent specification across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed panels
                that could be mistaken for an open doorway or solid wall. In Nottingham
                restaurants and bars, this applies most commonly to full-height glazed
                shopfronts in the Lace Market and Hockley, and to full-glazed entrance
                doors across the city-centre NG1 core. Applied as a dot band, stripe or
                as part of a decorative branding design that satisfies compliance while
                enhancing the venue&apos;s street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nottingham zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Lace Market NG1</h3>
              <p className="mt-2 text-sm text-muted">Nottingham&apos;s most distinctive hospitality district — converted Victorian lace warehouses with large-format and full-height industrial glazing. High demand for frosted privacy film, solar control on south-facing warehouse windows, and glass manifestation on full-glazed shopfronts. Premium venue fit-out standards throughout.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Hockley NG1</h3>
              <p className="mt-2 text-sm text-muted">Nottingham&apos;s most active independent hospitality neighbourhood — Broad Street, Goose Gate, Carlton Street. Victorian and Edwardian shopfronts with standard glazing proportions. Frosted privacy film for street-level dining, glass manifestation for full-height shopfronts and branding vinyl for new venue openings are the most common applications.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sneinton Market and Creative Quarter NG2</h3>
              <p className="mt-2 text-sm text-muted">Nottingham&apos;s emerging independent hospitality quarter — a mix of new-build units and converted spaces with large-format glazed frontages. Frosted film, decorative branding vinyl and solar control are standard specifications for venues fitting out these spaces.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">West Bridgford NG2</h3>
              <p className="mt-2 text-sm text-muted">Nottingham&apos;s most affluent suburban dining district — the Melton Road and Bridgford Road restaurant strips. South-facing and west-facing glazing on a dense row of independent restaurants generates consistent solar control film demand. Frosted privacy film for ground-floor dining rooms is also common throughout this postcode.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Beeston and Chilwell NG9</h3>
              <p className="mt-2 text-sm text-muted">The Chilwell Road and High Road restaurant cluster in Beeston serves the University of Nottingham student and local residential market. Mix of independent restaurants, cafés and casual dining — frosted privacy film and branding vinyl for shopfront-facing premises, solar control for south-facing dining rooms.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Arnold, Carlton and north Nottingham NG5/NG4</h3>
              <p className="mt-2 text-sm text-muted">North and east Nottingham suburban dining — independent restaurants, pub dining rooms and neighbourhood bistros in Arnold NG5 and Carlton NG4. Frosted privacy for street-facing dining and solar control for south-facing extensions are common specifications in these zones. WRPX covers all Nottingham postcodes efficiently from our South Yorkshire base.</p>
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
              Window film installation in a Nottingham restaurant is low-disruption by
              nature. Exterior applications can be done from outside the premises during
              trading hours with no interior access required. Interior applications —
              frosted film applied to the interior surface of street-facing windows —
              take 30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Lace Market and Hockley restaurants.</strong>{" "}
              Most NG1 venues close between midnight and 9am — a window that is more
              than sufficient for most installation programmes. We arrive after last
              orders and leave before breakfast service, with every window clean and
              the premises ready to trade.
            </p>
            <p>
              <strong className="text-foreground">West Bridgford and suburban restaurants.</strong>{" "}
              These areas typically have Monday or Tuesday closed days — we schedule
              installation for those days when possible, giving a full day without
              time pressure. For urgent installations, overnight access works as well
              as in the city centre.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Nottingham groups.</strong>{" "}
              If you operate multiple Nottingham venues, we deliver consistent film
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
            Nottingham restaurant window film — common questions
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
            Related services for Nottingham restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Nottingham offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Nottingham commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Nottingham restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Nottingham restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Nottingham restaurants and bars quickly — a straight M1 run from
              South Yorkshire. Tell us the venue and what you need and we&apos;ll advise
              on specification and plan around your trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Nottingham Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
