import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Sheffield | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Sheffield — frosted privacy film for street-facing glazing, solar control film for south-facing dining areas, decorative window vinyl and glass manifestation. Sheffield city centre S1, Kelham Island S3, Ecclesall Road S11, Hillsborough S6 and all Sheffield restaurant postcodes. Overnight installation, no trading disruption.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Sheffield — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Sheffield. Frosted privacy film for street-facing glazing in Sheffield city centre S1, Kelham Island S3 and Ecclesall Road S11, solar control film for south and west-facing dining areas, decorative window vinyl for branding and manifestation for glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Sheffield restaurant and hospitality postcodes."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Sheffield restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out in Sheffield restaurants and bars. Half-height frosted film on street-facing windows is the standard specification for city-centre S1 venues on Devonshire Street, Division Street and West Street, giving seated diners privacy from passing pedestrians while maintaining natural light in the upper portion of the window. For Kelham Island S3 restaurants and bars with industrial-style floor-to-ceiling glazing, full-height or two-thirds frosted film is common. We survey, specify and install — overnight or on your closed day.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Sheffield restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Sheffield restaurants are particularly prone to overheating through the summer months — Ecclesall Road S11, Sharrow Vale Road S11 and west-facing city-centre venues often see dining room temperatures that are uncomfortable without external shading. Solar control film reduces solar heat gain by 40–79%, keeping the dining area at a comfortable temperature without blocking views or using blinds that darken the space. For conservatory-style dining extensions and glazed kitchen passes, solar control film is often the most cost-effective single improvement available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Sheffield. Interior window film applications typically take 30–60 minutes per window. A Sheffield city-centre restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready to trade the following morning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Kelham Island, Ecclesall Road and the wider Sheffield area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Sheffield postcodes for restaurant and bar window film. Sheffield city centre S1 (Division Street, West Street, Devonshire Street, Leopold Street), Kelham Island S3 (Alma Street, Kelham Island area), Ecclesall Road S11 (the full length from Hunters Bar to Millhouses), Sharrow Vale Road S11, Hillsborough S6, Attercliffe S9, Abbeydale Road S7 and beyond. WRPX is based in South Yorkshire — Sheffield is our home market.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Sheffield restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Sheffield restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Sheffield hospitality areas.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install frosted window film for Sheffield restaurants?",
    a: "Yes — frosted and privacy window film is one of the most common installations we carry out in Sheffield restaurants and bars. Half-height frosted film on street-facing windows is the standard specification for city-centre S1 venues on Devonshire Street, Division Street and West Street, giving seated diners privacy from passing pedestrians while maintaining natural light in the upper portion of the window. For Kelham Island S3 restaurants and bars with industrial-style floor-to-ceiling glazing, full-height or two-thirds frosted film is common. We survey, specify and install — overnight or on your closed day.",
  },
  {
    q: "Can you install solar control film in Sheffield restaurants?",
    a: "Yes. South and west-facing Sheffield restaurants are particularly prone to overheating through the summer months — Ecclesall Road S11, Sharrow Vale Road S11 and west-facing city-centre venues often see dining room temperatures that are uncomfortable without external shading. Solar control film reduces solar heat gain by 40–79%, keeping the dining area at a comfortable temperature without blocking views or using blinds that darken the space. For conservatory-style dining extensions and glazed kitchen passes, solar control film is often the most cost-effective single improvement available.",
  },
  {
    q: "Do you work overnight or outside trading hours in Sheffield?",
    a: "Yes — overnight and early-morning installation is available across Sheffield. Interior window film applications typically take 30–60 minutes per window. A Sheffield city-centre restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready to trade the following morning.",
  },
  {
    q: "Do you cover Kelham Island, Ecclesall Road and the wider Sheffield area?",
    a: "Yes — we cover all Sheffield postcodes for restaurant and bar window film. Sheffield city centre S1 (Division Street, West Street, Devonshire Street, Leopold Street), Kelham Island S3 (Alma Street, Kelham Island area), Ecclesall Road S11 (the full length from Hunters Bar to Millhouses), Sharrow Vale Road S11, Hillsborough S6, Attercliffe S9, Abbeydale Road S7 and beyond. WRPX is based in South Yorkshire — Sheffield is our home market.",
  },
  {
    q: "Can you add branding or logo graphics to Sheffield restaurant windows?",
    a: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Sheffield restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Sheffield hospitality areas.",
  },
];

export default function RestaurantWindowFilmSheffieldPage() {
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
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Sheffield Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Sheffield. Sheffield city centre S1, Kelham Island S3, Ecclesall Road S11,
            Sharrow Vale Road S11 and beyond — work carried out overnight or on closed
            days with no trading disruption. Based in South Yorkshire: Sheffield is
            our home market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Sheffield Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Sheffield restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Sheffield has one of the most active independent hospitality scenes in
              the North of England — a large and diverse restaurant and bar market
              spread across distinct neighbourhoods, each with different glazing
              challenges and window film requirements. The city-centre S1 core has
              undergone significant regeneration over the past decade, with Devonshire
              Street, Division Street and West Street now dense with restaurants,
              cocktail bars and independent eateries with substantial street-facing
              glazing.
            </p>
            <p>
              Kelham Island S3 has emerged as Sheffield&apos;s highest-profile hospitality
              district — a former industrial area now dominated by independent
              restaurants, craft bars, breweries and food venues. The converted factory
              and warehouse buildings in this area typically have large, floor-to-ceiling
              industrial glazing. This creates both a character asset and a practical
              challenge: diners want atmosphere and privacy, and full-height glazing
              without treatment often delivers neither. Frosted film — full-height,
              two-thirds, or with decorative patterns — is one of the most common
              specifications we install in the Kelham Island area.
            </p>
            <p>
              Ecclesall Road S11, running south-west through Hunters Bar and Millhouses,
              is one of the longest and most diverse restaurant and bar strips in the
              region. The mix of terraced Victorian buildings, converted retail units and
              purpose-built restaurants on this road presents varied window film
              requirements: frosted privacy for street-level dining, solar control for
              south-facing rooms that overheat in summer, and glass manifestation for
              full-height glazed shopfronts. Sharrow Vale Road S11 and London Road S2
              extend the same pattern further into inner Sheffield.
            </p>
            <p>
              WRPX is based in South Yorkshire — Sheffield is not a zone we &ldquo;cover&rdquo;;
              it is our home market. We survey Sheffield restaurants and bars promptly,
              install at low or no mobilisation cost, and are available overnight or
              early morning on the days that suit your trading schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Sheffield restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Sheffield city-centre S1 restaurants — seated diners
                get privacy from pedestrians, natural light continues to come in from the
                clear upper portion, and the dining environment improves significantly.
                For Kelham Island S3 venues with large industrial glazing, full-height
                or patterned frosted film creates atmosphere while addressing privacy.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — city-centre street-facing windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Kelham Island and industrial glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas or bars</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-sheffield/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Sheffield →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Sheffield restaurants and bars overheat through
                spring and summer — Ecclesall Road S11 and west-facing city-centre venues
                are the most common cases. Solar control film reduces solar heat gain by
                40–79%, keeping the dining room comfortable without external shading that
                blocks the view. For glazed dining extensions and large-window bistros,
                this is often the most cost-effective single intervention available.
              </p>
              <Link href="/window-film/solar-control-film-sheffield/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Sheffield →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Sheffield
                restaurants adding branding or seasonal promotion to their street-facing
                glazing. Suitable for new venue openings, rebrands and rolling promotional
                campaigns. For multi-site groups with Sheffield sites, we deliver
                consistent specification across all locations.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed panels
                that could be mistaken for an open doorway or solid wall. In Sheffield
                restaurants, this applies most commonly to full-height glazed entrance
                doors, wide window installations and internal glazed screens. Applied as
                a dot band, stripe or as part of a decorative branding design that
                satisfies the compliance requirement while adding character.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Sheffield restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Sheffield city centre S1</h3>
              <p className="mt-2 text-sm text-muted">Division Street, Devonshire Street, West Street, Leopold Square, Fargate and the city-centre core. High density of restaurants, bars and cafés with street-facing glazing — frosted privacy film, branding vinyl and glass manifestation are the primary applications in this zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Kelham Island S3</h3>
              <p className="mt-2 text-sm text-muted">Sheffield&apos;s premier independent hospitality district. Converted industrial buildings with large floor-to-ceiling glazing — the most common requirement here is full-height or two-thirds frosted film, patterned or plain, to give atmosphere and privacy without blocking the distinctive industrial character of these spaces.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Ecclesall Road S11</h3>
              <p className="mt-2 text-sm text-muted">One of the longest restaurant and bar strips in Sheffield, running from Hunters Bar to Millhouses. Mixed south and west-facing exposure means solar control film is a frequent specification alongside frosted privacy for street-level dining. A regular zone for WRPX restaurant window film work.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Abbeydale Road S7 and London Road S2</h3>
              <p className="mt-2 text-sm text-muted">Inner Sheffield restaurant corridors with a dense independent dining scene. Predominantly Victorian and Edwardian retail conversions with standard sash or casement windows — frosted privacy film for ground-floor dining and branding vinyl for shopfront windows are the most common applications in these areas.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Hillsborough S6 and north Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Hillsborough town centre, Hillsborough Corner and the north Sheffield hospitality market. Similar window film requirements to the inner-city corridors — frosted privacy, branding vinyl and solar control for west-facing premises. WRPX covers north Sheffield as part of the same South Yorkshire day programme.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Attercliffe and east Sheffield S9</h3>
              <p className="mt-2 text-sm text-muted">The emerging Attercliffe entertainment zone and east Sheffield hospitality market. Newer venues in converted industrial and commercial buildings alongside established local restaurants — glazing requirements vary widely, and we survey and specify on a per-venue basis.</p>
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
              Window film installation in a Sheffield restaurant is low-disruption by
              nature. Exterior applications can be done from outside the premises during
              trading hours with no interior access required. Interior applications —
              frosted film applied to the interior surface of street-facing windows —
              take 30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Sheffield city-centre restaurants.</strong>{" "}
              Most S1 venues close between midnight and 9am — a window (no pun
              intended) that is more than enough for most installation programmes. We
              arrive after last orders and leave before breakfast service, with every
              window clean and the premises ready to trade.
            </p>
            <p>
              <strong className="text-foreground">Kelham Island and Ecclesall Road.</strong>{" "}
              These areas typically have Monday or Tuesday closed days — we schedule
              installation for those days when possible, giving a full day without
              time pressure. For urgent installations, overnight access works as well
              as in the city centre.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Sheffield groups.</strong>{" "}
              If you operate multiple Sheffield venues, we deliver consistent film
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
            Sheffield restaurant window film — common questions
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
            Related services for Sheffield restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Sheffield offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Sheffield commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Sheffield restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Sheffield restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Sheffield restaurants and bars promptly — Sheffield is our home
              market. Tell us the venue and what you need and we&apos;ll come and look,
              advise on specification and plan around your trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Sheffield Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
