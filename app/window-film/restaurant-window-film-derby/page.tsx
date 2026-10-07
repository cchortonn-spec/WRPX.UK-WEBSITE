import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Derby | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Derby — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining areas, decorative window vinyl and glass manifestation. Cathedral Quarter DE1, Friar Gate DE1, Pride Park DE24, Normanton Road DE23, Sadler Gate DE1 and across Derbyshire. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Derby — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Derby and Derbyshire. Frosted privacy film for Cathedral Quarter DE1 and Sadler Gate DE1 street-facing dining, solar control film for south and west-facing dining rooms, decorative window vinyl for branding and glass manifestation for large glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Derby restaurant and hospitality districts."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Window Film for Restaurants",
      item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/",
    },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Derby restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out for Derby restaurants and bars. Derby's Cathedral Quarter DE1 — the independent restaurant district built around the historic city centre streets of Sadler Gate, Friar Gate and St Peter's Street — has a high concentration of Victorian and Georgian shopfronts with large sash windows and multi-pane glazing. These buildings are well suited to half-height frosted film for street-level privacy. Friar Gate DE1 — Derby's most prominent Georgian residential and now mixed-use street — features original Georgian sash windows on converted buildings where etched-effect and frosted film complements the period character without intrusive external alterations. On Iron Gate DE1 and Sadler Gate DE1, the main pedestrianised city-centre dining strips, higher footfall and prominent street-level windows make frosted privacy film a consistent specification across independent restaurants and bars.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Derby restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Derby restaurants — particularly venues in the Cathedral Quarter DE1 with afternoon sun exposure, Normanton Road DE23 restaurants with south-facing shopfronts, and Pride Park DE24 corporate dining outlets with large-format modern glazing — can overheat significantly through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable without blinds that obscure views or external shading that conflicts with period building character. Derby's Victorian and Georgian restaurant stock — with single-glazed or slim-profile double-glazed original windows — performs poorly thermally in warm weather, making solar control film a practical priority for any south or west-facing restaurant in the city centre or inner suburbs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Derby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Derby and Derbyshire. Interior window film applications typically take 30–60 minutes per window. A Cathedral Quarter restaurant with 4–6 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready for the following morning's service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the Cathedral Quarter, Friar Gate, Pride Park and the wider Derby area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Derby postcode districts for restaurant and bar window film. Cathedral Quarter DE1 (Sadler Gate, Iron Gate, Friar Gate, St Peter's Street), Pride Park DE24, Normanton Road DE23, Kedleston Road DE22, Uttoxeter Road DE3, Mickleover DE3, Spondon DE21, Alvaston DE24, and the wider Derbyshire market including Burton upon Trent DE14, Belper DE56, Ilkeston DE7 and Long Eaton NG10. From our South Yorkshire base, Derby is approximately 45 minutes south on the M1 and A38.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Derby restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Derby restaurant windows as part of a frosted or clear vinyl application. We combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings in the Cathedral Quarter, rebrands, and seasonal promotional campaigns across Derby and Derbyshire — Cathedral Quarter DE1, Sadler Gate, Friar Gate, and suburban Normanton Road and Kedleston Road restaurant strips.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmDerbyPage() {
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
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Derby Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Derby. Cathedral Quarter DE1, Sadler Gate, Friar Gate, Pride Park DE24
            and across Derbyshire — work carried out overnight or on closed days with
            no trading disruption. South Yorkshire base: Derby is approximately
            45 minutes north on the M1 and A38.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby city centre DE1 has a well-established independent restaurant and
              bar scene concentrated in the Cathedral Quarter — the medieval street grid
              running from the Cathedral DE1 south to St Peter&apos;s Street DE1, taking
              in Sadler Gate, Iron Gate, Friar Gate and the surrounding lanes. This
              district features a high density of Georgian and Victorian commercial
              buildings adapted for restaurant use, with original sash windows and
              multi-pane shopfront glazing throughout. These buildings are well suited
              to frosted privacy film, etched-effect decorative vinyl and glass
              manifestation — window film that works with the period character of the
              building rather than against it.
            </p>
            <p>
              Sadler Gate DE1 — Derby&apos;s primary pedestrianised independent dining
              street — is lined with Victorian shopfronts with large street-facing
              windows. The concentration of seated restaurants and bars on this
              street, combined with significant pedestrian footfall, makes frosted
              half-height privacy film one of the most consistent specifications in
              the Derby restaurant market. Iron Gate DE1 and the Cathedral Quarter
              lanes off it share the same Victorian shopfront character and generate
              similar window film requirements.
            </p>
            <p>
              Friar Gate DE1 — Derby&apos;s long Georgian residential and professional
              street, running north-west from the city centre — has seen significant
              restaurant and bar conversion, particularly in the early sections closest
              to the ring road. Original Georgian sash windows on converted properties
              are a consistent feature here; frosted film and etched-effect vinyl are
              frequently specified to provide dining privacy without altering the
              external appearance of listed or locally listed buildings.
            </p>
            <p>
              Beyond the city centre, Normanton Road DE23 — Derby&apos;s most diverse
              and active suburban restaurant strip — runs south through Normanton with
              a high concentration of South Asian, Middle Eastern and Caribbean
              restaurants on standard Victorian commercial shopfronts. Kedleston Road
              DE22 and Uttoxeter Road DE3 serve the western suburbs and the
              university area. Pride Park DE24 and the A52 corridor carry the
              corporate dining market — modern glazed units with large-format
              glass where solar control film is a priority specification.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Derby restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Cathedral Quarter and Sadler Gate restaurants — where
                seated diners on ground-floor tables are directly visible from busy
                pedestrianised streets. For Friar Gate and the Cathedral Quarter lanes,
                full-height frosted or patterned film on smaller sash windows maintains
                the Georgian or Victorian character while providing dining privacy.
                On Iron Gate DE1, higher-footfall venues use half-height frosted or
                etched-effect designs to create enclosure without losing street presence.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — Sadler Gate and Iron Gate street-facing dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Etched-effect and patterned film — Friar Gate Georgian period buildings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas and private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-derby/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Derby →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Derby restaurants — Normanton Road DE23 restaurants
                with south-facing shopfronts, Pride Park DE24 corporate dining with
                large-format modern glazing, and Cathedral Quarter venues with afternoon
                sun exposure through single-glazed or slim-profile windows — can overheat
                significantly through spring and summer. Solar control film reduces solar
                heat gain by 40–79%, keeping the dining area comfortable without blinds
                that block views or external shading that conflicts with period building
                character.
              </p>
              <Link href="/window-film/solar-control-film-derby/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Derby →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Derby restaurants
                adding branding or seasonal promotion to street-facing glazing. Suitable
                for new venue openings in the Cathedral Quarter, Sadler Gate rebrands,
                and rolling promotional campaigns across Normanton Road and the
                Derby suburban restaurant market.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed panels
                that could be mistaken for an open doorway or solid wall. In Derby
                restaurants and bars, this applies most commonly to full-height glazed
                shopfronts in the Cathedral Quarter and Pride Park modern units,
                and to full-glazed entrance doors across the city-centre core. Applied
                as a dot band, stripe or as part of a decorative branding design that
                satisfies compliance while enhancing the venue&apos;s street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Derby restaurant zones */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby restaurant and bar zones we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Cathedral Quarter DE1 — Sadler Gate and Iron Gate</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s primary independent restaurant and bar district — pedestrianised Victorian streets with consistent ground-floor restaurant use and high footfall. Frosted privacy film, etched-effect window vinyl and glass manifestation are the most common specifications on these streets, where seated diners at street level need enclosure from pedestrian traffic.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Friar Gate DE1</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s most prominent Georgian street — converted professional and residential buildings now housing restaurants, bars and cafes with original period sash windows. Etched-effect and patterned frosted film is frequently specified here to maintain the Georgian character of period buildings. Listed building considerations can apply — we advise on film types suitable for heritage settings.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Normanton Road DE23</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s most diverse suburban restaurant strip — South Asian, Middle Eastern, Caribbean and international restaurants on Victorian commercial shopfronts running south through Normanton. South-facing glazing generates solar control film demand through spring and summer. High-footfall sections around Normanton Park have consistent frosted film specifications from independent restaurants seeking street-level dining privacy.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Pride Park DE24 and A52 Corridor</h3>
              <p className="mt-2 text-sm text-muted">Derby&apos;s main corporate and business park dining market — modern glazed units around Pride Park stadium, Wyvern retail and the A52 business park strip. Large-format modern glazing with significant solar gain is a consistent issue in these units: solar control film is the primary specification across Pride Park restaurants and cafes. Glass manifestation for full-height glazed shopfronts is also common.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Kedleston Road DE22 and western suburbs</h3>
              <p className="mt-2 text-sm text-muted">University of Derby adjacent restaurant and cafe market — Kedleston Road DE22 and the western suburb strip serving Markeaton, Mackworth DE22 and Mickleover DE3. Victorian and inter-war shopfronts with standard glazing. Frosted privacy film and decorative branding vinyl for student-facing cafes, bars and restaurants in this zone.</p>
            </div>
            <div className="card-float p-5">
              <h3 className="font-semibold text-foreground">Wider Derbyshire</h3>
              <p className="mt-2 text-sm text-muted">WRPX covers all Derbyshire postcode districts for restaurant window film — Belper DE56, Ripley DE5, Ilkeston DE7, Long Eaton NG10, Swadlincote DE11 and Burton upon Trent DE14. For larger Derbyshire multi-site programmes, we plan visits covering multiple venues on a single run from South Yorkshire approximately 45 minutes north on the M1 and A38.</p>
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
              Window film installation in a Derby restaurant is low-disruption by
              nature. Exterior applications can be done from outside during trading
              hours with no interior access required. Interior applications — frosted
              film applied to the interior surface of street-facing windows — take
              30–60 minutes per window and are best done overnight, early morning
              or on your closed day.
            </p>
            <p>
              <strong className="text-foreground">Cathedral Quarter and Sadler Gate restaurants.</strong>{" "}
              Many Cathedral Quarter venues close by midnight — an overnight window
              that is more than sufficient for most installation programmes. Sadler Gate
              restaurants often take a Monday or Tuesday closed day — we schedule
              installation for those days when possible. We arrive after last orders
              and leave before the morning prep team arrives, with every window clean
              and the premises ready.
            </p>
            <p>
              <strong className="text-foreground">Normanton Road and suburban restaurants.</strong>{" "}
              Suburban Derby restaurant strips typically have more predictable
              closed-day schedules. We survey the premises in advance and agree
              an installation window that avoids any impact on trading.
            </p>
            <p>
              <strong className="text-foreground">Pride Park and A52 corporate dining.</strong>{" "}
              Corporate-adjacent restaurant and cafe units in Pride Park and the A52
              corridor often have lower evening footfall and Monday closures. Most
              Pride Park installations can be scheduled for early morning before the
              lunch service without any trading disruption.
            </p>
            <p>
              <strong className="text-foreground">Multi-site Derby groups.</strong>{" "}
              If you operate multiple Derby venues, we deliver consistent film
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
            Derby restaurant window film — common questions
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
            Related services for Derby restaurants and bars
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">All restaurant and bar window film applications, film types and installation process — national coverage.</p>
            </Link>
            <Link href="/window-film/frosted-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Derby</h3>
              <p className="mt-2 text-sm text-muted">Frosted and etched-effect privacy film across Derby offices, commercial premises and residential properties.</p>
            </Link>
            <Link href="/window-film/solar-control-film-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Derby</h3>
              <p className="mt-2 text-sm text-muted">Heat and glare reduction across Derby commercial and residential properties.</p>
            </Link>
            <Link href="/architectural-wrap-restaurants-derby/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Restaurant interior wrapping Derby</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Derby restaurant interiors — counter fascias, bar fronts, booth panels and furniture.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Planning window film for your Derby restaurant or bar?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby restaurants — approximately 45 minutes from South
              Yorkshire on the M1 and A38. Tell us the venue and what you need and
              we&apos;ll advise on specification and plan around your trading hours.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby Restaurant Window Film Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
