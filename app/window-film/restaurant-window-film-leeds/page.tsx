import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Leeds | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Leeds — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Leeds city centre LS1, Call Lane, Greek Street, Headrow, Briggate, Chapel Allerton LS7, Roundhay LS8 and all Leeds restaurant postcodes. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Leeds — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Leeds. Frosted privacy film for street-facing glazing in Leeds city centre LS1, Call Lane, Greek Street, the Headrow, solar control film for south and west-facing dining areas, decorative window vinyl for branding and manifestation for glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Leeds restaurant and hospitality postcodes."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Leeds restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out in Leeds restaurants and bars. The city-centre LS1 core — Call Lane, Greek Street, Vicar Lane, the Headrow and Briggate — has a high density of bars and restaurants with street-facing glazing where frosted privacy film is a standard specification. Half-height frosted on street-facing windows gives seated diners privacy from passing pedestrians while maintaining light in the upper glazing. For Merrion Quarter and the emerging South Bank LS10 venues, full-height or decorative frosted film is increasingly common. We survey, specify and install — overnight or on your closed day.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Leeds restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Leeds restaurants and bars — particularly those on Greek Street, Great George Street LS1 and venues in Chapel Allerton LS7 with west-facing glazing — overheat through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable without blinds or external shading that blocks views. For conservatory-style dining extensions in the north Leeds suburbs — Roundhay LS8, Moortown LS17, Alwoodley LS17 — solar control film is often the single most cost-effective improvement available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Leeds. Interior window film applications typically take 30–60 minutes per window. A Leeds city-centre restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready to trade the following morning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Call Lane, Chapel Allerton, Headingley and the wider Leeds area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Leeds postcodes for restaurant and bar window film. Leeds city centre LS1 (Call Lane, Greek Street, Vicar Lane, Headrow, Briggate, Merrion Street), the Calls LS2 (riverside bar quarter), Chapel Allerton LS7 (Stainbeck Lane, Harrogate Road restaurant strip), Headingley LS6 (Otley Road student and restaurant quarter), Roundhay LS8, Horsforth LS18, Ilkley and Otley LS21/LS29 — we cover the full Leeds city region.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Leeds restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Leeds restaurant windows as part of a frosted or clear vinyl application. We can combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings, rebrands, seasonal promotions and permanent window branding across all Leeds hospitality districts.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmLeedsPage() {
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
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leeds Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Leeds. City-centre LS1, Call Lane, Greek Street, Chapel Allerton LS7,
            Headingley LS6 and beyond — work carried out overnight or on closed
            days with no trading disruption. South Yorkshire base: Leeds is a
            30-minute drive up the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds&apos; restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds has one of the strongest and fastest-growing restaurant and bar
              scenes in the North of England. The city-centre LS1 core — Call Lane,
              Greek Street, Vicar Lane, the Headrow and Briggate — has been transformed
              over the past decade into a dense hospitality district with a very high
              concentration of independent restaurants, cocktail bars, casual dining and
              late-night venues. The majority of these venues have substantial
              street-facing glazing, and window film demand — frosted privacy, solar
              control, branding vinyl, glass manifestation — is consistently high
              across the city-centre postcode.
            </p>
            <p>
              The Calls LS2, running along the River Aire, is Leeds&apos; original
              riverside dining quarter — a mix of converted mill buildings, waterside
              bars and established restaurants in a distinctive riverside setting.
              The converted mill and warehouse buildings in this area frequently have
              large, industrial-scale glazing panels. Full-height frosted film, solar
              control for south-facing riverside elevations, and decorative window vinyl
              for branding are all regular specifications in this district.
            </p>
            <p>
              Chapel Allerton LS7 — on the Harrogate Road and Stainbeck Lane strips
              — is Leeds&apos; most active suburban restaurant and bar district,
              a compact and consistently busy dining neighbourhood with a diverse mix
              of independents. The predominantly Victorian and Edwardian shopfront
              buildings here have standard window proportions, and frosted privacy film
              for street-facing dining rooms and solar control for west-facing premises
              are the most common specifications.
            </p>
            <p>
              Headingley LS6, along Otley Road, is the student and young-professional
              restaurant quarter — a high-density hospitality strip with significant
              year-round and term-time trade. Smaller shopfront units with high pedestrian
              footfall make frosted privacy film and glass manifestation (for full-height
              glazed shopfronts that require safety compliance) the most common film
              applications here. WRPX covers all Leeds zones efficiently from our
              South Yorkshire base — Leeds is a straight M1 run of under 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Leeds restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Leeds city-centre LS1 restaurants and bars —
                particularly on Call Lane, Greek Street and Vicar Lane where pedestrian
                footfall is consistently high. For The Calls LS2 riverside venues with
                large-format glazing, full-height or patterned frosted film creates
                atmosphere while addressing privacy at table level.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — city-centre LS1 street-facing windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — The Calls riverside and mill conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas or private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-leeds/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Leeds →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Leeds restaurants and bars — Greek Street LS1,
                Chapel Allerton LS7 west-facing premises, and north Leeds dining rooms
                in Roundhay LS8 and Moortown LS17 — overheat through spring and summer.
                Solar control film reduces solar heat gain by 40–79%, keeping the dining
                room comfortable without blinds that block views or external shading that
                changes the building&apos;s appearance.
              </p>
              <Link href="/window-film/solar-control-film-leeds/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Leeds →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Leeds restaurants
                adding branding or seasonal promotion to street-facing glazing. Suitable
                for new venue openings, rebrands and rolling promotional campaigns. For
                multi-site groups with Leeds locations, we deliver consistent
                specification across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed panels
                that could be mistaken for an open doorway or solid wall. In Leeds
                restaurants and bars, this applies most commonly to full-height glazed
                shopfronts on Headingley LS6 and full-glazed entrance doors across
                the city-centre LS1 core. Applied as a dot band, stripe or as part
                of a decorative branding design that satisfies compliance while adding
                character to the façade.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Leeds city centre LS1</h3>
              <p className="mt-2 text-sm text-muted">Call Lane, Greek Street, Vicar Lane, the Headrow, Briggate and Merrion Street — the densest restaurant and bar zone in Leeds. High pedestrian footfall makes frosted privacy film the most common specification, alongside glass manifestation for full-height shopfront glazing and branding vinyl for new venue openings.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">The Calls and Waterfront LS2</h3>
              <p className="mt-2 text-sm text-muted">Leeds&apos; original riverside dining quarter — converted mill buildings and waterside bars with large-format industrial glazing. Full-height frosted film and solar control for south-facing riverside elevations are the most frequent specifications in this district.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Chapel Allerton LS7</h3>
              <p className="mt-2 text-sm text-muted">Leeds&apos; busiest suburban dining neighbourhood on Harrogate Road and Stainbeck Lane. Victorian and Edwardian shopfronts with standard window proportions — frosted privacy film for street-level dining and solar control for west-facing premises are the most common applications in this zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Headingley and Hyde Park LS6</h3>
              <p className="mt-2 text-sm text-muted">The Otley Road restaurant and bar strip serving the student and young-professional market. High-density hospitality in smaller shopfront units — frosted privacy film and glass manifestation for full-height glazed shopfronts are the most common requirements in this zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Roundhay, Moortown and north Leeds LS8/LS17</h3>
              <p className="mt-2 text-sm text-muted">North Leeds suburban dining — independent restaurants and neighbourhood bistros in Roundhay LS8 and Moortown LS17. South-facing conservatory dining extensions and west-facing glazing are common here, making solar control film a regular specification alongside frosted privacy for ground-floor dining rooms.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Horsforth, Guiseley and outer west Leeds LS18/LS20</h3>
              <p className="mt-2 text-sm text-muted">Outer west Leeds dining market — Horsforth LS18 town centre, Guiseley LS20 and the wider A65 corridor. Mix of independent restaurants and pub dining rooms — frosted privacy for street-facing dining, solar control for south-facing extensions and branding vinyl for shopfront updates.</p>
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
              Window film installation in a Leeds restaurant is low-disruption by
              nature. Exterior applications can be done from outside the premises during
              trading hours with no interior access required. Interior applications —
              frosted film applied to the interior surface of street-facing windows —
              take 30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Leeds city-centre restaurants.</strong>{" "}
              Most LS1 venues close between midnight and 9am — a window that is more
              than sufficient for most installation programmes. We arrive after last
              orders and leave before breakfast service, with every window clean and
              the premises ready to trade.
            </p>
            <p>
              <strong className="text-foreground">Chapel Allerton and Headingley.</strong>{" "}
              These areas typically have Monday or Tuesday closed days — we schedule
              installation for those days when possible, giving a full day without
              time pressure. For urgent installations, overnight access works as well
              as in the city centre.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Leeds groups.</strong>{" "}
              If you operate multiple Leeds venues, we deliver consistent film
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
            Leeds restaurant window film — common questions
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
            Related services for Leeds restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Leeds offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Leeds commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Leeds</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leeds restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Leeds restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Leeds restaurants and bars quickly — a straight M1 run from
              South Yorkshire. Tell us the venue and what you need and we&apos;ll
              advise on specification and plan around your trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Leeds Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
