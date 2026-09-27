import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Window Film Leeds | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Leeds — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for south-facing shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Trinity Leeds, Victoria Gate, Merrion Centre, White Rose, The Headrow, Briggate and all Leeds retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-leeds/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Leeds — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Leeds. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Leeds LS1 city centre, Trinity Leeds, Victoria Gate, Merrion Centre, White Rose Shopping Centre LS11, Briggate, Vicar Lane and all Leeds retail areas. Installation available during trading hours or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leeds", item: "https://www.wrpx.co.uk/window-film/retail-window-film-leeds/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Leeds retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is one of the most consistent retail window film applications we carry out in Leeds. Typical applications are fitting room and changing area glazing (full-height frosted for complete privacy, or lower-panel frosted with clear above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare. Leeds city-centre retail — Briggate LS1, The Headrow, Vicar Lane, Commercial Street — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value without significant cost. Trinity Leeds and Victoria Gate units frequently require frosted film for internal partitions, trial rooms and staff areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Trinity Leeds or Victoria Gate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Trinity Leeds and Victoria Gate both have significant glazed facades and atrium sections where retail units can experience solar gain on sunny days, particularly units with west-facing or south-facing frontages during the afternoon. Solar-control film applied to the interior face of the glass reduces solar heat gain by 40 to 79%, keeping retail floor temperatures comfortable and reducing reliance on air conditioning. This is relevant for units in the open atrium zones of Trinity Leeds and for Victoria Gate&apos;s upper-level gallery retail units where overhead glazing concentrates heat. We work to centre management guidelines for both sites and can schedule installation outside centre trading hours where required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leeds retail outside the city centre — Headingley, Morley, Crossgates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Leeds retail postcodes, not just the city-centre LS1 core. White Rose Shopping Centre LS11 in Churwell/Morley — with over 60 retail units and a large glazed atrium — is within our standard Leeds coverage and we work to White Rose centre management scheduling requirements. Merrion Centre LS2 is a short drive from the city centre core. Headingley LS6 independent retail strip, Crossgates LS15 retail park, Otley Road LS17 and Harrogate Road LS17 retail clusters, Roundhay LS8, Morley LS27 and Pudsey LS28 are all within our standard Leeds service area. WRPX is based in South Yorkshire — approximately 45 minutes from Leeds via the M1/A1M — so Leeds is a natural service market for us.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Leeds retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Leeds retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Leeds retailers — units across city centre, out-of-town retail parks and high streets — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Leeds retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Leeds retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Trinity Leeds, Victoria Gate, Merrion Centre and stand-alone city-centre and high-street units alike. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Leeds retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Leeds are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Leeds city-centre units on Briggate, The Headrow and Vicar Lane where centre or council access management may require specific scheduling, and for Trinity Leeds and Victoria Gate units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Leeds retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmLeedsPage() {
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
            <Link href="/window-film/retail-window-film/" className="text-accent hover:underline">Retail Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Leeds</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Leeds &amp; West Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film Leeds
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Leeds and West Yorkshire.
            Frosted privacy film for fitting rooms, changing areas and staff glazing.
            Solar-control film for glazed frontages and atrium units. DDA-compliant glass
            manifestation for full-height shop fronts and internal glazed panels. Branded
            and decorative film for signage and display. WRPX covers Trinity Leeds,
            Victoria Gate, Merrion Centre, White Rose, Briggate and all Leeds retail
            postcodes — installation available during or outside trading hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leeds Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leeds retail landscape */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds retail — the glazing landscape
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leeds is the largest retail centre in England outside London, with a city
              centre anchored by Trinity Leeds, Victoria Gate and the traditional Briggate
              high street. Trinity Leeds opened in 2013 with 1.3 million square feet of
              retail — over 120 shops, restaurants and leisure units across a glazed
              atrium that creates internal solar gain in east and west-facing units during
              summer months. Victoria Gate, which opened in 2016 with John Lewis as
              anchor, is a covered arcade with glazed roof sections and a premium retail
              offer. Both centres have significant glazed frontage requirements for
              manifestation, frosted film and solar-control applications.
            </p>
            <p>
              The traditional Briggate LS1 high street and The Headrow run north–south
              through the city centre, with large-format glazed frontages on major
              national brands. Commercial Street, Bond Street, Albion Street and Vicar
              Lane form the city-centre retail grid — all within the LS1 postcode, all
              with high glazing-to-frontage ratios that create consistent demand for
              solar-control film, frosted film and manifestation.
            </p>
            <p>
              Merrion Centre LS2, a short walk north of the city centre, has its own
              retail and leisure estate with covered glazed sections. White Rose Shopping
              Centre LS11 in Churwell — with over 60 retail units, a large atrium and
              major anchor tenants including Marks &amp; Spencer, Next and Primark — is
              a significant out-of-town retail destination with substantial glazed
              frontage across the centre.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 45 minutes from Leeds city
              centre via the M1 north or A1(M) north. Leeds is well within our standard
              service area — we can attend for survey visits and installation without
              the mobilisation overhead of a more distant contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Leeds retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted &amp; privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                For fitting rooms, changing areas, staff areas, back-office glazing and
                display partitions. Full-height or banded frosting — with or without
                cut logo or branding.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on south and west-facing Leeds
                retail glazing. Keeps trading floor temperatures comfortable without
                relying solely on air conditioning.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop fronts
                and internal glass doors — frosted strips, etched-effect or branded
                manifestation to Building Regulations specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded &amp; decorative film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Printed or cut decorative vinyl for Leeds retail shop fronts — logos,
                taglines, seasonal promotions, window display graphics or frosted bands
                with cut-out branding.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective exterior appearance in daylight conditions — visibility from
                inside maintained, privacy from outside. Suitable for Leeds retail back
                offices and staff areas facing onto public areas.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-glare film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Diffuse-glare film for glazed areas directly in line with checkout
                screens, POS terminals or staff monitors — reduces screen washout on
                bright days without blocking natural light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We cover all Leeds retail postcodes for window film installation — city
              centre, out-of-town retail parks and suburban high streets alike.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">LS1 Leeds city centre:</strong> Briggate, The Headrow, Vicar Lane,
                Commercial Street, Bond Street, Albion Street and all city-centre
                retail units — Trinity Leeds and Victoria Gate installations available
                in-hours or out-of-hours to centre management requirements.
              </li>
              <li>
                <strong className="text-foreground">LS2 Merrion Centre:</strong> Covered shopping centre north of the
                city-centre core — frosted film, manifestation and solar-control
                applications across the retail and leisure estate.
              </li>
              <li>
                <strong className="text-foreground">LS11 White Rose Shopping Centre:</strong> Out-of-town covered
                retail centre in Churwell/Morley with over 60 units — atrium glazing,
                shop-front manifestation and solar-control film.
              </li>
              <li>
                <strong className="text-foreground">LS6 Headingley:</strong> Independent retail strip along Otley Road —
                boutiques, cafés-with-retail frontage and specialist shops where frosted
                privacy film and branded window vinyl are common requirements.
              </li>
              <li>
                <strong className="text-foreground">LS15 Crossgates &amp; Seacroft:</strong> Retail park and district
                centre east of Leeds — standard retail window film applications across
                all unit types.
              </li>
              <li>
                <strong className="text-foreground">LS17 Moortown &amp; Harrogate Road:</strong> North Leeds suburban
                retail — independent shops, salons and food-service units requiring
                frosted film, manifestation and decorative applications.
              </li>
              <li>
                <strong className="text-foreground">LS27 Morley &amp; LS28 Pudsey:</strong> Town centre retail and
                smaller retail parks in the south and west Leeds catchment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leeds retail window film — common questions
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
            Related window film services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page covering all applications, film types and installation process.</p>
            </Link>
            <Link href="/window-film/retail-window-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Window film for Sheffield retail — Meadowhall, Fargate, the Moor and all Sheffield retail postcodes.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Full frosted and privacy film service — residential and commercial applications across the UK.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control window film</h3>
              <p className="mt-2 text-sm text-muted">Heat-rejection film for south and west-facing glazed retail frontages — keeps trading floor temperatures comfortable.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-2 text-sm text-muted">DDA-compliant glass manifestation for full-height glazed shop fronts and internal glass panels.</p>
            </Link>
            <Link href="/window-film/frosted-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film across Leeds — offices, commercial premises and residential properties.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leeds retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the premises, the glazing and what you need — we&apos;ll quote
              for frosted film, solar-control film, manifestation or branded vinyl.
              WRPX is approximately 45 minutes from Leeds via the M1 or A1(M), so there
              is no significant mobilisation overhead on Leeds work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leeds Quote →
              </Link>
              <Link href="/window-film/retail-window-film/" className="btn-secondary">
                Retail Window Film Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
