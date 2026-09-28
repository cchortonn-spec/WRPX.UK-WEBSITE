import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Retail Window Film Nottingham | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Nottingham — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for south-facing shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Victoria Centre, intu Broadmarsh area, Lace Market, Bridlesmith Gate, King Street and all Nottingham retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-nottingham/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Nottingham — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Nottingham. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Nottingham NG1 city centre, Victoria Centre, Lace Market, Bridlesmith Gate, Clumber Street, King Street, Broadmarsh area, Hockley and all Nottingham retail areas. Installation available during trading hours or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Nottingham", item: "https://www.wrpx.co.uk/window-film/retail-window-film-nottingham/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Nottingham retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail window film application we carry out in Nottingham. Typical applications are fitting room and changing area glazing (full-height frosted for complete privacy, or lower-panel frosted with clear above), staff area partitions and back-office glazing within retail units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare. Nottingham city-centre retail — Clumber Street NG1, Bridlesmith Gate NG1, King Street NG1 and the Lace Market NG1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value without significant cost. Victoria Centre units frequently require frosted film for internal partitions, trial rooms and staff areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Victoria Centre or other Nottingham retail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Victoria Centre Nottingham — anchored by John Lewis, with over 100 retail units across a covered two-level mall and glazed atrium sections — has solar gain in south-facing and atrium-adjacent units, particularly during summer months. Solar-control film applied to the interior face of the glass reduces solar heat gain by 40 to 79%, keeping retail floor temperatures comfortable and reducing reliance on air conditioning. Clumber Street and Bridlesmith Gate street-level units with full-height glazed frontages facing south or south-west also benefit from solar-control film during afternoon trading periods. We work to centre management guidelines and can schedule installation outside trading hours where required for Victoria Centre units.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Nottingham retail outside the city centre — Arnold, West Bridgford, Beeston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Nottingham retail postcodes, not just the city-centre NG1 core. Arnold NG5 town centre retail, West Bridgford NG2 (strong independent retail and food service strip along Bridgford Road and Central Avenue), Beeston NG9 (high street and retail near University of Nottingham campus), Hucknall NG15 town centre, Bulwell NG6, Carlton NG4 and Long Eaton NG10 are all within our standard Nottingham service area. Retail Park clusters at Riverside Retail Park NG2 and Castle Marina Retail Park NG7 are also within regular coverage. WRPX is based in South Yorkshire, approximately 35 to 45 minutes from Nottingham city centre via the M1 south — Nottingham is one of our closest service markets.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Nottingham retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Nottingham retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Clumber Street and Bridlesmith Gate shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Nottingham retailers — units across city centre, out-of-town retail parks and district high streets — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Nottingham retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Nottingham retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Victoria Centre, Lace Market independent retailers, Clumber Street nationals and all stand-alone city-centre and high-street units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Nottingham retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Nottingham are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Nottingham city-centre units on Clumber Street, Bridlesmith Gate and King Street where centre or council access management may require specific scheduling, and for Victoria Centre units where centre management requires out-of-hours installation, early-morning and overnight slots are available. A typical Nottingham retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmNottinghamPage() {
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
            <span className="text-foreground">Nottingham</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Nottingham &amp; Nottinghamshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film Nottingham
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Nottingham and
            Nottinghamshire. Frosted privacy film for fitting rooms, changing areas and
            staff glazing. Solar-control film for glazed frontages and atrium units.
            DDA-compliant glass manifestation for full-height shop fronts and internal
            glazed panels. Branded and decorative film for signage and display. WRPX
            covers Victoria Centre, Lace Market, Bridlesmith Gate, King Street, Clumber
            Street and all Nottingham retail postcodes — installation available during or
            outside trading hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Nottingham Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Nottingham retail landscape */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham retail — the glazing landscape
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Nottingham is the major retail destination for the East Midlands, drawing
              shoppers from a wide catchment across Nottinghamshire, Derbyshire and
              Leicestershire. The city-centre retail core is anchored by the Victoria Centre
              — a covered two-level shopping mall with over 100 retail units and a glazed
              atrium structure that creates internal solar gain in south-facing units during
              summer trading. Victoria Centre is anchored by John Lewis and has significant
              glazed frontage requirements for manifestation, frosted film and solar-control
              applications.
            </p>
            <p>
              Clumber Street NG1 is the city&apos;s main pedestrianised retail street —
              large-format glazed frontages on major national brands, running south from
              the Victoria Centre toward the Old Market Square. Bridlesmith Gate NG1,
              which branches east from Clumber Street, is Nottingham&apos;s premium
              independent and designer retail strip — boutiques, jewellers and independents
              with full-height glazed frontages that are prime candidates for frosted film,
              solar-control and branded vinyl applications.
            </p>
            <p>
              The Lace Market NG1 — east of the city centre — is Nottingham&apos;s
              creative and independent retail quarter, with a mix of clothing boutiques,
              homewares retailers, cafés and design-led shops occupying converted Victorian
              lace factory buildings. Many Lace Market units have large original windows
              where frosted film, decorative vinyl and DDA manifestation are common
              requirements. The Broadmarsh area NG1 south of the city centre has seen
              significant redevelopment, with new glazed retail and leisure frontages
              coming online.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 35 to 45 minutes from
              Nottingham city centre via the M1 south. Nottingham is one of the closest
              service markets to our base — early survey visits and same-day installation
              are consistently achievable without the overhead of a more distant contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Nottingham retail
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
                Reduces solar heat gain by 40 to 79% on south and west-facing Nottingham
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
                Printed or cut decorative vinyl for Nottingham retail shop fronts — logos,
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
                inside maintained, privacy from outside. Suitable for Nottingham retail
                back offices and staff areas facing onto public areas.
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
            Nottingham retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              We cover all Nottingham retail postcodes for window film installation —
              city centre, out-of-town retail parks and suburban high streets alike.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">NG1 Nottingham city centre:</strong> Clumber Street, Bridlesmith Gate,
                King Street, Old Market Square, Lace Market and all city-centre retail
                units — Victoria Centre installations available in-hours or out-of-hours
                to centre management requirements.
              </li>
              <li>
                <strong className="text-foreground">NG2 Riverside &amp; West Bridgford:</strong> Riverside Retail Park,
                Trent Bridge retail strip and West Bridgford Bridgford Road independent
                retail and food service units.
              </li>
              <li>
                <strong className="text-foreground">NG7 Castle Marina Retail Park:</strong> Out-of-town retail park west
                of Nottingham city centre — standard retail window film applications
                across all major retail units.
              </li>
              <li>
                <strong className="text-foreground">NG5 Arnold:</strong> Arnold town centre retail strip and nearby
                retail park — frosted film, manifestation and solar-control across
                all unit types.
              </li>
              <li>
                <strong className="text-foreground">NG9 Beeston:</strong> High street retail adjacent to University of
                Nottingham campus — independent shops, food service and larger national
                units all within coverage.
              </li>
              <li>
                <strong className="text-foreground">NG15 Hucknall &amp; NG6 Bulwell:</strong> District centre retail
                north of Nottingham — standard frosted film, manifestation and
                decorative vinyl applications.
              </li>
              <li>
                <strong className="text-foreground">NG10 Long Eaton &amp; NG4 Carlton:</strong> East and south
                Nottinghamshire district retail centres — all standard retail window
                film applications within regular coverage.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Nottingham retail window film — common questions
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
            <Link href="/window-film/retail-window-film-leeds/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Leeds</h3>
              <p className="mt-2 text-sm text-muted">Window film for Leeds retail — Trinity Leeds, Victoria Gate, White Rose, Briggate and all Leeds retail postcodes.</p>
            </Link>
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film</h3>
              <p className="mt-2 text-sm text-muted">Full frosted and privacy film service — residential and commercial applications across the UK.</p>
            </Link>
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control window film</h3>
              <p className="mt-2 text-sm text-muted">Heat-rejection film for south and west-facing glazed retail frontages — keeps trading floor temperatures comfortable.</p>
            </Link>
            <Link href="/window-film/frosted-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film across Nottingham — offices, commercial premises and residential properties.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Nottingham retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the premises, the glazing and what you need — we&apos;ll quote for
              frosted film, solar-control film, manifestation or branded vinyl. WRPX is
              approximately 35 to 45 minutes from Nottingham via the M1 — one of our
              closest service markets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Nottingham Quote →
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
