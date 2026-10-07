import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Retail Window Film Leicester | Frosted, Solar Control & Manifestation for Shops | WRPX",
  description:
    "Retail window film across Leicester — frosted privacy film for fitting rooms and staff areas, solar-control glazing film for glazed shop fronts, branded decorative vinyl and DDA-compliant glass manifestation. Highcross, Haymarket, Fosse Park, Beaumont Shopping Centre, Meridian Leisure Park and all Leicester LE retail postcodes. Trading-hours installation available.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/retail-window-film-leicester/",
  },
};

const serviceSchema = getServiceSchema(
  "Retail window film Leicester — frosted, solar control and glass manifestation for shops",
  "Window film installation for retail premises across Leicester and Leicestershire. Frosted privacy film for fitting rooms, changing areas and staff glazing, solar-control film for glazed shop fronts and retail units, branded decorative film and DDA-compliant glass manifestation. Highcross LE1, Haymarket LE1, Clock Tower LE1, Gallowtree Gate LE1, Fosse Park LE3, Beaumont Shopping Centre LE4, Meridian Leisure Park LE19, Everards Meadows LE19 and all Leicester retail postcodes. Installation available during or outside trading hours."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Retail Window Film", item: "https://www.wrpx.co.uk/window-film/retail-window-film/" },
    { "@type": "ListItem", position: 4, name: "Leicester", item: "https://www.wrpx.co.uk/window-film/retail-window-film-leicester/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film for Leicester retail units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted and privacy window film is a consistent retail application across Leicester. Typical uses are fitting room and changing area glazing in clothing retailers (full-height frosted for complete privacy or lower-panel frosted with clear above), staff area partitions and back-office glazing within units, and street-facing glazed frontages where a frosted band improves the display arrangement or reduces glare on merchandise. Leicester city-centre retail — Gallowtree Gate LE1, Granby Street LE1, Clock Tower LE1 and the lanes around the Haymarket LE1 — has a high proportion of glazed frontages where frosted or decorative vinyl film adds commercial value. Highcross units frequently require frosted film for internal partitions, trial rooms and staff areas adjacent to the main floor.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install solar control window film at Highcross or Haymarket Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Highcross LE1 — Leicester's principal covered shopping centre with over 120 retailers — has significant glazed atrium sections and individual unit frontages that face south and west. Solar-control film applied to glazed surfaces reduces solar heat gain by 40 to 79%, keeping retail floor temperatures manageable during busy trading periods and reducing dependence on air conditioning. The Haymarket Shopping Centre LE1 and the Haymarket Theatre-adjacent retail units have glazed frontages on the north-facing High Street side and internal atrium glazing. We work to Highcross and Haymarket management guidelines and confirm access arrangements with centre management before mobilisation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Leicester retail outside the city centre — Fosse Park, Beaumont, Meridian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover all Leicester and Leicestershire retail postcodes, not just the city-centre LE1 core. Fosse Park LE3 — one of the largest out-of-town retail parks in the East Midlands with over 60 retailers — is a regular service location for retail window film. Beaumont Shopping Centre LE4 in Beaumont Leys (north Leicester) and the associated Beaumont retail park carry a mix of national multiple retailers with glazed frontages requiring film for solar control, frosted film for fitting rooms and DDA manifestation. Meridian Leisure Park LE19 at Narborough Road South and Everards Meadows LE19 extend the retail geography south of the city. The Oadby LE2, Wigston LE18, Hinckley LE10 and Loughborough LE11 areas are all within our standard Leicester service radius. WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from Leicester via the M1 south — Leicester is a well-established service market.",
      },
    },
    {
      "@type": "Question",
      name: "Can the film include our branding or logo on Leicester retail glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Frosted and decorative film for Leicester retail units can incorporate cut logos, text, patterns or full printed designs. This is popular for Gallowtree Gate and Granby Street shop-front glazing where a frosted band with a cut logo maintains brand presence while providing lower-window privacy or reducing direct solar glare on merchandise. For multi-site Leicester retailers — units across the city centre, Highcross, Fosse Park and district high streets across Leicestershire — we can specify and supply a consistent design across all locations. We advise on the best approach (cut vinyl, printed frosted film or standard frosted product) based on your specification, substrate and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is DDA-compliant glass manifestation and do Leicester retail units need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glass manifestation is required under Building Regulations Approved Document M (and the Equality Act 2010 in commercial premises) for full-height glazed panels and doors that are not otherwise visually apparent. The requirement is two horizontal bands of manifestation — typically at 850–1000mm and 1400–1600mm above floor level — to alert people with visual impairments that a glazed surface is present. Leicester retail units with full-height glazed shop fronts, internal glass partitions or glazed internal doors are likely to require manifestation. This applies to units in Highcross, Haymarket, Fosse Park, Beaumont and across all stand-alone city-centre and high-street Leicester units. We install frosted vinyl manifestation strips, etched-effect bands, dot pattern manifestation and branded manifestation options — all to the correct specification for Building Regulations compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can installation be done while the Leicester retail unit is trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most retail window film installations in Leicester are carried out during trading hours. Interior film application is quiet, clean work that causes no disruption to customers or floor staff. For Leicester city-centre units in Highcross where centre management requires out-of-hours installation, and for Haymarket units where certain centre-specific access rules apply, early-morning and overnight slots are available. A typical Leicester retail unit shop front — 4 to 10 panes of glass — can be fully filmed in 2 to 5 hours depending on the glazing area. We co-ordinate directly with your store or centre management team to fit around peak trading periods and any centre-specific access restrictions.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function RetailWindowFilmLeicesterPage() {
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
            <span className="text-foreground">Leicester</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Retail Window Film · Leicester &amp; Leicestershire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail window film — Leicester
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Window film installation for retail premises across Leicester and Leicestershire.
            Frosted privacy film for fitting rooms and staff areas, solar-control film for
            glazed shop fronts, branded decorative vinyl and DDA-compliant glass
            manifestation. Highcross, Haymarket, Fosse Park, Beaumont Shopping Centre,
            Meridian Leisure Park and all Leicester LE postcodes. Trading-hours installation
            available. Approximately 1 hour 15 minutes from our South Yorkshire base via
            the M1 south.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Leicester Quote →
            </Link>
            <Link href="/window-film/retail-window-film/" className="btn-secondary">
              Retail Window Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leicester retail context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester retail — window film applications
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Leicester is one of the most significant retail cities in the East Midlands,
              with a city-centre retail core anchored by two major covered centres and
              surrounded by substantial out-of-town retail capacity. The Highcross
              shopping centre LE1 — with over 120 retailers across two levels — is
              the main city-centre shopping destination, sitting alongside the Haymarket
              Shopping Centre LE1 and the established pedestrianised retail streets
              of Gallowtree Gate LE1, Granby Street LE1 and the Clock Tower area.
            </p>
            <p>
              Beyond the city centre, the retail geography extends substantially.
              Fosse Park LE3 on the western edge of the city is one of the largest
              out-of-town retail parks in the East Midlands — with a mix of national
              multiples and a significant glazed retail frontage across most units.
              Beaumont Shopping Centre LE4 in the north of the city serves a large
              residential catchment, and Meridian Leisure Park LE19 and Everards
              Meadows LE19 at Narborough Road South add leisure-retail capacity to
              the south and west. Oadby LE2, Wigston LE18 and the wider Leicestershire
              high streets — including Hinckley LE10 and Loughborough LE11 — extend
              the service footprint further.
            </p>
            <p>
              Window film applications across this retail landscape follow the same
              three main categories seen at every major retail destination: frosted
              and privacy film for fitting rooms, staff areas and internal partitions;
              solar-control film for south- and west-facing glazed shop fronts; and
              DDA-compliant glass manifestation for full-height glazed frontages and
              internal glazed panels.
            </p>
            <p>
              WRPX is based in South Yorkshire, approximately 1 hour 15 minutes from
              Leicester via the M1 south. Leicester is one of our established service
              markets — we carry out regular retail window film work across the
              Leicestershire and East Midlands area.
            </p>
          </div>
        </div>
      </section>

      {/* Film types */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Window film types for Leicester retail
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Frosted privacy film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fitting rooms, changing areas, staff glazing and internal partitions.
                Full-height or partial-height application — the most common retail
                window film request we receive across Leicester.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Solar-control film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat gain by 40 to 79% on glazed shop fronts and
                atrium sections. Effective for south-facing Highcross units and
                west-facing Fosse Park retail frontages.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Glass manifestation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                DDA-compliant manifestation bands for full-height glazed shop
                fronts, internal glass partitions and glazed doors across
                Leicester retail. Frosted strips, etched-effect, dot pattern
                or branded options.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Branded decorative vinyl
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut logos, text, patterns or full printed designs on frosted
                or clear vinyl. Consistent branding across multi-site Leicester
                and Leicestershire retail locations from a single specification.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Anti-graffiti film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Sacrificial film protecting glazing from surface etching —
                relevant for ground-floor Leicester city-centre retail fronts
                on high-footfall pedestrianised streets such as Gallowtree
                Gate and Granby Street.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                One-way mirror film
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective daytime privacy film for staff areas, security
                glazing and back-office windows — maintains outward visibility
                from inside while blocking inward visibility from the retail floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major locations */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester retail locations we cover
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Highcross LE1</strong> — full
              coverage across both levels of Highcross, including the glazed atrium
              sections and all individual unit frontages. Solar-control, frosted,
              manifestation and branded film for any unit. We work to Highcross
              management guidelines and confirm access arrangements directly with
              centre management before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Haymarket Shopping Centre LE1
              and city-centre high street</strong> — the Haymarket centre and the
              pedestrianised core of Leicester city centre — Gallowtree Gate,
              Granby Street, Clock Tower, Hotel Street and Belvoir Street LE1 —
              are well-established service locations. We are familiar with city-centre
              access requirements and the standard glazing types on Leicester high
              street units.
            </p>
            <p>
              <strong className="text-foreground">Fosse Park LE3</strong> — one
              of the largest out-of-town retail parks in the East Midlands, with
              60+ retailers on the A563 western ring road. Full coverage for all
              Fosse Park units — frosted, solar control, manifestation and branded
              film. We work to Fosse Park management guidelines and confirm access
              before mobilisation.
            </p>
            <p>
              <strong className="text-foreground">Leicester out-of-town and
              district retail</strong> — Beaumont Shopping Centre LE4 (Beaumont
              Leys), Meridian Leisure Park LE19, Everards Meadows LE19, Rushey
              Mead LE4, Oadby LE2, Wigston LE18, Hinckley LE10, Coalville LE67,
              Loughborough LE11 and all district high streets across the wider
              Leicestershire LE postcode area.
            </p>
            <p>
              For multi-site retailers with units spread across Leicester city
              centre, Highcross, Fosse Park and district high streets, we
              co-ordinate a rolling installation schedule across all locations
              — consistent film specification and installation standard at
              every site.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Leicester retail window film — common questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Related window film services for Leicester
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/retail-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National retail window film service page — frosted, solar control, manifestation and branding for shops nationwide.</p>
            </Link>
            <Link href="/window-film/retail-window-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Nottingham retail — intu Victoria Centre, Cornerhouse and city-centre units.</p>
            </Link>
            <Link href="/window-film/retail-window-film-birmingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail window film Birmingham</h3>
              <p className="mt-2 text-sm text-muted">Window film for Birmingham retail — Bullring, Grand Central, Mailbox and West Midlands units.</p>
            </Link>
            <Link href="/window-film/frosted-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Frosted and privacy film for Leicester commercial and residential glazing.</p>
            </Link>
            <Link href="/window-film/solar-control-film-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Leicester</h3>
              <p className="mt-2 text-sm text-muted">Solar-control glazing film for Leicester commercial buildings — heat reduction and glare control.</p>
            </Link>
            <Link href="/architectural-wrap-retail-leicester/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Architectural wrap for retail Leicester</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Leicester retail interiors — shopfit surfaces, counters, display units and fixtures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Leicester retail window film enquiry
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us the retail location, the glazing type and what you need — frosted,
              solar control, manifestation or branded film. We&apos;ll quote and schedule
              around your trading hours. WRPX is approximately 1 hour 15 minutes from
              Leicester via the M1 south.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Request a Leicester Quote →
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
