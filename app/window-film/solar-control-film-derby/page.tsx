import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar Control Window Film Derby | Heat Reduction & Glare Control | WRPX",
  description:
    "Solar control window film installed across Derby for offices, hotels, schools and retail. Reduces heat and glare through existing glazing without replacing windows. WRPX covers Derby city centre DE1, Pride Park DE24, Intu Derby, Mickleover, Spondon and all Derbyshire postcodes on the M1 corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/solar-control-film-derby/",
  },
};

const serviceSchema = getServiceSchema(
  "Solar control window film Derby — heat reduction and glare control",
  "Solar control and heat-reduction window film installed across Derby and Derbyshire. Reduces heat gain and glare through existing commercial glazing — offices, hotels, retail, schools, student accommodation and healthcare. Derby city centre DE1, Pride Park DE24, Intu Derby, Mickleover DE3, Spondon DE21, Alvaston DE24 and across Derbyshire. On the Sheffield–Nottingham M1 corridor."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Solar Control Film", item: "https://www.wrpx.co.uk/window-film/solar-control-film/" },
    { "@type": "ListItem", position: 4, name: "Derby", item: "https://www.wrpx.co.uk/window-film/solar-control-film-derby/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install solar control film in Derby offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install solar control film across Derby and Derbyshire. Derby city centre DE1, Pride Park DE24 office and business park zone, Derwent Business Park, Friar Gate Studios, Mickleover DE3, Spondon DE21 and across Derbyshire. Derby sits on the M1 corridor between our South Yorkshire base and Nottingham — approximately 45 minutes from Sheffield. Free survey across Derbyshire, fixed price agreed before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How much heat does solar film reduce in a Derby office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quality solar control film (TSER rating of 40–60%) can reduce solar heat entering through the glazing by 40–60%. For Derby&apos;s south-facing Pride Park offices and west-facing city centre premises, this translates to meaningfully cooler internal temperatures through summer months. The film also retains heat in winter by reducing radiant heat loss through glass — useful for Derby&apos;s older commercial building stock.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar control film be installed without closing the Derby office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Solar control film installation is low disruption by nature — no wet trades, no noise, no mess. A standard office floor plate can typically be completed in a single day. For occupied Derby offices, we work floor by floor or zone by zone without requiring a full building closure.",
      },
    },
    {
      "@type": "Question",
      name: "Does solar control film work on Derby&apos;s older commercial buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — film applies to the interior surface of existing glazing, regardless of age. Derby has a significant stock of 1970s–1990s commercial buildings with single or early double-glazed units. Solar control film is particularly cost-effective in this building stock because the alternative — window replacement — is a major capital spend. Film delivers most of the thermal performance improvement at a fraction of the replacement cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover the full Derby and Derbyshire area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we cover Derby city centre, Pride Park DE24, all DE postcodes and across Derbyshire. We also cover the M1 corridor between Sheffield and Derby — Chesterfield, Clay Cross, Alfreton and Ripley — as part of the same regional coverage. Combined Derbyshire and South Yorkshire programmes can typically be scheduled without separate mobilisation costs.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install solar control film in Derby offices?",
    a: "Yes — we install solar control film across Derby and Derbyshire. Derby city centre DE1, Pride Park DE24 office and business park zone, Derwent Business Park, Friar Gate Studios, Mickleover DE3, Spondon DE21 and across Derbyshire. Derby sits on the M1 corridor between our South Yorkshire base and Nottingham — approximately 45 minutes from Sheffield. Free survey across Derbyshire, fixed price agreed before any commitment.",
  },
  {
    q: "How much heat does solar film reduce in a Derby office?",
    a: "A quality solar control film (TSER rating of 40–60%) can reduce solar heat entering through the glazing by 40–60%. For Derby's south-facing Pride Park offices and west-facing city centre premises, this translates to meaningfully cooler internal temperatures through summer months. The film also retains heat in winter by reducing radiant heat loss through glass — useful for Derby's older commercial building stock.",
  },
  {
    q: "Can solar control film be installed without closing the Derby office?",
    a: "Yes. Solar control film installation is low disruption by nature — no wet trades, no noise, no mess. A standard office floor plate can typically be completed in a single day. For occupied Derby offices, we work floor by floor or zone by zone without requiring a full building closure.",
  },
  {
    q: "Does solar control film work on Derby's older commercial buildings?",
    a: "Yes — film applies to the interior surface of existing glazing, regardless of age. Derby has a significant stock of 1970s–1990s commercial buildings with single or early double-glazed units. Solar control film is particularly cost-effective in this building stock because the alternative — window replacement — is a major capital spend. Film delivers most of the thermal performance improvement at a fraction of the replacement cost.",
  },
  {
    q: "Do you cover the full Derby and Derbyshire area?",
    a: "Yes — we cover Derby city centre, Pride Park DE24, all DE postcodes and across Derbyshire. We also cover the M1 corridor between Sheffield and Derby — Chesterfield, Clay Cross, Alfreton and Ripley — as part of the same regional coverage. Combined Derbyshire and South Yorkshire programmes can typically be scheduled without separate mobilisation costs.",
  },
];

export default function SolarControlFilmDerbyPage() {
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
            <Link href="/window-film/solar-control-film/" className="text-accent hover:underline">Solar Control Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Derby</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Derby &amp; Derbyshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Solar control window film in Derby
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs solar control and heat-reduction window film across Derby and
            Derbyshire. Fitted to the interior face of existing glazing — offices, hotels,
            retail, schools and healthcare buildings. Reduces heat gain in summer, reduces
            heat loss in winter, cuts glare without replacing windows. Derby city centre DE1,
            Pride Park DE24, Intu Derby and across Derbyshire on the M1 corridor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Request a Derby Survey →
            </Link>
            <Link href="/window-film/solar-control-film/" className="btn-secondary">
              Solar Control Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Derby context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film in Derby — where it&apos;s needed most
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby&apos;s commercial building stock generates solar film demand across two
              distinct building types. Pride Park DE24 — the city&apos;s main business park
              zone immediately east of the city centre — was developed largely through
              the 1990s and early 2000s. Office buildings of this era are characterised
              by large glazed facades with high solar gain: floor-to-ceiling glazing
              on south and west elevations that delivers excellent natural light at
              the cost of serious summer overheating. Solar control film is one of the
              most cost-effective interventions for this building profile.
            </p>
            <p>
              Derby city centre DE1 includes both pre-war and mid-century office buildings
              alongside more recent developments. Friar Gate FS and the converted warehouse
              office sector around the Cathedral Quarter have a different glazing profile —
              smaller, older windows — but solar gain is still a factor on south-facing
              elevations. Film applied to older single or double-glazed units also provides
              UV rejection and some additional thermal performance in winter.
            </p>
            <p>
              Derby&apos;s retail and leisure sector — Intu Derby in the city centre, Kingsway
              Retail Park DE22 and Meteor Centre DE75 — generates demand from shop units
              and food and beverage operators with prominent glazed frontages requiring
              solar control or decorative manifestation film.
            </p>
            <p>
              Schools and universities across Derby and Derbyshire increasingly specify
              solar control film in classrooms and learning spaces — particularly in
              buildings dating from the 2000s with south-facing glazed facades. The
              University of Derby main campus DE22 and the city&apos;s academy schools have
              seen growing demand for solar film as a CAPEX-light alternative to air
              conditioning installation.
            </p>
          </div>
        </div>
      </section>

      {/* Film options */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film options for Derby buildings
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Neutral solar control</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Low-reflectance neutral tint film for Derby offices and retail where
                the internal and external appearance of the glazing should not change
                significantly. Reduces solar heat by 30–45% while maintaining natural
                light transmission.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">High-performance solar film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                TSER ratings up to 75% for the most problematic Derby south and west-facing
                glazed facades. Pride Park DE24 offices with serious summer overheating
                typically require a higher-performance specification to achieve a meaningful
                working temperature reduction.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Dual-action thermal film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces solar heat in summer and limits radiant heat loss through glass in
                winter. Particularly valuable for Derby&apos;s older commercial building stock
                where glazing performance is poor in both directions.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Anti-glare film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reduces screen glare and visual discomfort in Derby offices with east or
                west-facing screens and monitors. Particularly relevant for open-plan
                Pride Park offices where afternoon sun creates persistent glare problems
                that blinds alone cannot resolve.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar film for schools</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Solar control and anti-glare film specified for Derby school and university
                classroom environments. Reduces overheating in south-facing classrooms
                without requiring air conditioning installation — a material saving
                for Derbyshire academy and maintained school budgets.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Solar film for retail</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Heat reduction and UV protection for Derby retail premises — protecting
                merchandise from UV fading, reducing cooling loads and maintaining
                comfortable browsing conditions in south-facing Intu Derby and
                Kingsway Retail Park units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M1 corridor context */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Derby on the M1 corridor — Sheffield to Nottingham
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Derby sits at the southern end of the M1 corridor between our South Yorkshire
              base and Nottingham. Sheffield is approximately 45 minutes north via the M1.
              Nottingham is approximately 25 minutes east via the A52. This corridor is
              our active operating region — we run Derby visits alongside Nottingham
              programmes and South Yorkshire work without separate mobilisation costs
              for each location.
            </p>
            <p>
              For commercial occupiers, FM contractors or fit-out teams managing sites
              across multiple Midlands and Yorkshire locations, this coverage means Derby
              solar film installation can be included in the same programme as Sheffield,
              Nottingham or Chesterfield sites — scheduled on adjacent days without
              additional travel costs.
            </p>
            <p>
              The Chesterfield S40–S45 corridor immediately north of Derby — including
              Alfreton, Ripley and Clay Cross — is also within our regular coverage
              area. Buildings across this zone with similar glazing profiles to Derby&apos;s
              commercial stock are included in the same survey visit as Derby city
              centre enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Solar control film Derby — common questions
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
            Related services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/solar-control-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film — full overview</h3>
              <p className="mt-2 text-sm text-muted">Solar and heat-reduction window film across all sectors — offices, hotels, schools, healthcare and retail.</p>
            </Link>
            <Link href="/window-film/solar-control-film-nottingham/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Nottingham</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction window film across Nottingham — offices, hotels and retail.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Solar control and heat-reduction window film across Sheffield and South Yorkshire.</p>
            </Link>
            <Link href="/window-film/office-solar-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Office solar film</h3>
              <p className="mt-2 text-sm text-muted">Solar control film specification for commercial offices — heat reduction, glare control and thermal performance.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Overheating offices or glazing problems in Derby?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We survey Derby and Derbyshire commercial premises and specify solar control
              film for the glazing profile and orientation of your building. Fixed price,
              low disruption, installed in a single day across most Derby office floor plates.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Request a Derby Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
