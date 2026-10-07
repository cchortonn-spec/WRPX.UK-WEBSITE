import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Window Film Leicester | Frosted Privacy, Solar Control & Manifestation | WRPX",
  description:
    "Restaurant and bar window film across Leicester — frosted privacy film for street-facing glazing, solar control film for south and west-facing dining rooms, decorative window vinyl and glass manifestation. Belgrave Road LE4, Cultural Quarter LE1, Narborough Road LE3, Granby Street LE1, Clarendon Park LE2 and all Leicester restaurant districts. Overnight and out-of-hours installation.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/restaurant-window-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Restaurant window film Leicester — frosted privacy film, solar control and glass manifestation",
  "Window film installation for restaurants, bars and cafés across Leicester. Frosted privacy film for street-facing glazing on Belgrave Road LE4 and the Cultural Quarter LE1, solar control film for south and west-facing dining areas, decorative window vinyl for branding and glass manifestation for large glazed panels. Overnight and out-of-hours installation — no trading disruption. Covering all Leicester restaurant and hospitality districts including Narborough Road LE3, Granby Street LE1 and Clarendon Park LE2."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Window Film for Restaurants", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/restaurant-window-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Leicester restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most common installations we carry out for Leicester restaurants and bars. Belgrave Road LE4 — Leicester's famous Golden Mile, home to the UK's most concentrated stretch of South Asian restaurants, sweet shops and cafés — features a high density of traditional shopfront buildings with large street-facing windows. Half-height frosted film is a standard specification on this strip, providing seated diner privacy from busy pavement traffic without reducing natural light. In the Cultural Quarter LE1, around St George's Street and Rutland Street, converted Victorian industrial and commercial buildings housing bars and restaurants frequently specify full-height or patterned frosted film on original large-format windows. On Narborough Road LE3 — frequently cited as one of the UK's most diverse streets — independent restaurants, cafés and takeaways with traditional shopfront glazing regularly need frosted or etched-effect film to manage privacy and branding on a busy high street.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control film in Leicester restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South and west-facing Leicester restaurants — particularly venues on Granby Street LE1 and the Highcross LE1 restaurant zone with south-facing glazing, Clarendon Park LE2 shopfront restaurants on Queens Road, and Belgrave Road LE4 venues facing west or south — can overheat significantly through spring and summer. Solar control film reduces solar heat gain by 40–79%, keeping the dining area comfortable without blinds that block street views or external shading structures that alter the character of traditional period shopfront buildings. For listed buildings in the Cultural Quarter or conservation-area properties on Granby Street, solar control film is frequently the only practical thermal management solution available without expensive glazing replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work overnight or outside trading hours in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — overnight and early-morning installation is available across Leicester. Interior window film applications typically take 30–60 minutes per window. A Belgrave Road or Cultural Quarter restaurant with 6–8 street-facing windows can usually be completed in a single overnight session or on a Monday closed day. We co-ordinate with your front-of-house team to minimise any disruption and leave the premises clean and ready for the following morning's service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Belgrave Road, the Cultural Quarter, Narborough Road and the wider Leicester area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Leicester postcode districts for restaurant and bar window film. Belgrave Road LE4 and Belgrave Gate LE1, Cultural Quarter LE1 (St George's Street, Rutland Street, Granby Street), Narborough Road LE3, Clarendon Park LE2 (Queens Road), Highcross LE1, Leicester city centre LE1 and LE2, Hinckley Road LE3, Evington Road LE5, Stoneygate LE2, Oadby LE2, Birstall LE4 and the wider Leicestershire market. From our South Yorkshire base, Leicester is approximately 60 minutes south via the M1.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add branding or logo graphics to Leicester restaurant windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Printed or cut-vinyl branding, logos, menus and decorative window graphics can be applied to Leicester restaurant windows as part of a frosted or clear vinyl application. We combine frosted privacy film with logo cut-outs or apply printed vinyl window graphics separately. Suitable for new venue openings on Belgrave Road or in the Cultural Quarter, rebrands, seasonal promotions and permanent window branding across all Leicester hospitality districts — from Narborough Road LE3 independent restaurants to Granby Street LE1 city-centre venues.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RestaurantWindowFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Leicester Restaurants &amp; Bars
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Restaurant window film — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted privacy film, solar control film, decorative window
            vinyl and glass manifestation for restaurants, bars and cafés across
            Leicester. Belgrave Road LE4, Cultural Quarter LE1, Narborough Road LE3,
            Granby Street and beyond — work carried out overnight or on closed days with
            no trading disruption. South Yorkshire base: Leicester is approximately
            60 minutes north on the M1.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Restaurant Survey →
            </Link>
            <Link href="/window-film/restaurant-window-film/" className="btn-secondary">
              Restaurant Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester restaurant market context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester&apos;s restaurant and bar market — where window film is needed
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester has one of the most distinctive and diverse restaurant landscapes
              of any English city — built around a genuinely multicultural food scene,
              a large student population across the University of Leicester LE1 and
              De Montfort University LE1, and a city-centre hospitality economy that
              has expanded significantly over the last decade. Belgrave Road LE4 — the
              Golden Mile — is the city&apos;s defining food destination: the UK&apos;s most
              celebrated concentration of South Asian restaurants, sweet shops and vegetarian
              cafés stretching from Belgrave Gate north through Belgrave to the outer
              suburbs. Shopfront buildings on this strip are characteristically traditional
              — wide single-storey shopfronts with large plate-glass windows — where
              privacy film is frequently specified to manage street-facing diner visibility
              on an exceptionally busy pedestrian corridor.
            </p>
            <p>
              The Cultural Quarter LE1 — centred on St George&apos;s Street, Rutland Street,
              Granby Street and the surrounding blocks — is Leicester&apos;s independent arts,
              bar and restaurant district. Converted Victorian industrial buildings, former
              warehouses and period commercial properties housing cocktail bars, independent
              restaurants and creative venue spaces have large-format original windows
              where frosted film, etched-effect vinyl and decorative window graphics are
              consistently in demand. The Curve Theatre, Attenborough Arts Centre and
              the surrounding café and bar cluster drive consistent footfall through
              this district.
            </p>
            <p>
              Narborough Road LE3 — frequently cited in research as one of the UK&apos;s
              most ethnically diverse streets — carries a dense strip of independent
              restaurants, cafés, takeaways and grocery outlets in traditional shopfront
              units from Hinckley Road to the city centre. Privacy and branding window
              film installations are consistent across this strip. Clarendon Park LE2 on
              Queens Road is Leicester&apos;s premier independent dining and café destination
              outside the city centre — Victorian parade shopfronts with active pavement
              trade and strong demand for frosted film on dining-room windows.
            </p>
            <p>
              Beyond the named districts, Stoneygate LE2, Evington Road LE5 and Hinckley
              Road LE3 all carry active restaurant strips. The city-centre Highcross LE1
              restaurant zone and surrounding Granby Street LE1 independent restaurants
              add further volume. WRPX covers all Leicester and Leicestershire postcode
              districts for restaurant and bar window film installation.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film applications for Leicester restaurants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Frosted and privacy film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Half-height frosted film on street-facing windows is the standard
                specification for Belgrave Road and Narborough Road restaurants —
                particularly in venues on busy pedestrian streets where seated diners
                are directly visible from the pavement. For Cultural Quarter bars and
                restaurants in converted Victorian buildings with large original windows,
                full-height or patterned frosted film maintains the period aesthetic while
                providing dining privacy. On Clarendon Park LE2 and Granby Street LE1,
                independent restaurants use half-height frosted or etched-effect designs
                to create enclosure without losing the open street presence.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Half-height frosted — Belgrave Road and Narborough Road street-facing dining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Full-height frosted — Cultural Quarter converted buildings with original glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>Internal glazed partitions between dining areas and private dining rooms</span>
                </li>
              </ul>
              <Link href="/window-film/frosted-film-leicester/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Frosted window film Leicester →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Solar control film</h3>
              <p className="mt-4 text-muted leading-relaxed">
                South and west-facing Leicester restaurants — particularly venues on
                Granby Street LE1 and Belgrave Road LE4 facing south or west, and
                Clarendon Park LE2 Queens Road restaurants with direct afternoon sun
                exposure — can overheat significantly through spring and summer. Solar
                control film reduces solar heat gain by 40–79%, keeping dining areas
                comfortable without blinds that obstruct street views or shading
                structures that alter the character of period shopfronts. For Cultural
                Quarter listed or conservation-area buildings, solar control film is
                frequently the only practical thermal management solution without
                expensive glazing replacement.
              </p>
              <Link href="/window-film/solar-control-film-leicester/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Solar control film Leicester →
              </Link>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Decorative window vinyl and branding</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Cut-vinyl logos, frosted film with logo cut-outs, printed decorative
                window graphics and etched-effect patterned film for Leicester restaurants
                adding branding or seasonal promotion to street-facing glazing. Suitable
                for new venue openings on Belgrave Road or in the Cultural Quarter,
                rebrands, and rolling promotional campaigns. For restaurant groups with
                multiple Leicester locations, we deliver consistent specification
                across all sites.
              </p>
            </div>
            <div className="card-float p-8">
              <h3 className="text-xl font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-4 text-muted leading-relaxed">
                Building regulations require safety manifestation on large glazed panels
                that could be mistaken for an open doorway or solid wall. In Leicester
                restaurants and bars, this applies most commonly to full-height glazed
                shopfronts in the Cultural Quarter LE1 and Granby Street, and to
                full-glazed entrance doors across the city-centre LE1 core. Applied as a
                dot band, stripe or as part of a decorative branding design that satisfies
                compliance while enhancing the venue&apos;s street presence.
              </p>
              <Link href="/window-film/glass-manifestation/" className="mt-6 inline-block text-sm text-accent hover:underline">
                Glass manifestation details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation logistics */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester restaurant installation — how it works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">No disruption to service</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Window film is applied to the interior surface. Most restaurant window
                installations complete in 30–60 minutes per window. A Belgrave Road
                or Cultural Quarter venue can typically be done overnight or on a Monday
                closed session.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Overnight and out-of-hours</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We work to your Leicester restaurant&apos;s schedule — overnight after last
                service, early morning before opening, or on a closed day. Co-ordinated
                with your front-of-house team to leave premises clean and ready before
                the following morning&apos;s service.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Survey and quote</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We survey your Leicester restaurant windows — measuring glazed areas,
                assessing substrate and confirming the film type and coverage —
                before issuing a clear, fixed-price quote. No obligation to proceed
                after survey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester restaurant window film — common questions
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

      {/* Related links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-semibold text-foreground">
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/window-film/restaurant-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Restaurant Window Film</p>
              <p className="mt-1 text-sm text-muted">National overview — all restaurant film types</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Frosted Film Leicester</p>
              <p className="mt-1 text-sm text-muted">Privacy and frosted window film across LE postcodes</p>
            </Link>
            <Link href="/window-film/solar-control-film-leicester/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Solar Control Film Leicester</p>
              <p className="mt-1 text-sm text-muted">Heat reduction for south and west-facing glazing</p>
            </Link>
            <Link href="/window-film/hotel-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Hotel Window Film</p>
              <p className="mt-1 text-sm text-muted">Privacy, solar and decorative film for hotels</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Frosted Window Film</p>
              <p className="mt-1 text-sm text-muted">Full frosted and privacy film product range</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/50 transition-colors">
              <p className="font-medium text-foreground">Glass Manifestation</p>
              <p className="mt-1 text-sm text-muted">Compliance and decorative manifestation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Leicester restaurant or bar — ready for a survey?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Tell us about your Leicester venue — glazing type, which windows you need
            filming, and whether you need privacy, solar control, branding or all three.
            We&apos;ll arrange a survey and come back with a clear, fixed-price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Survey →
            </Link>
            <Link href="/window-film/" className="btn-secondary">
              Window Film Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
