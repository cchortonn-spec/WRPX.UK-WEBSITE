import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frosted Window Film Sheffield | Privacy Film, Glass Manifestation & Decorative Film | WRPX",
  description:
    "Frosted window film installed across Sheffield for offices, meeting rooms, glass partitions, shopfronts and homes. Privacy film, etched-effect film, glass manifestation and decorative film — WRPX is Sheffield-based, free survey, commercial and residential applications.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/frosted-film-sheffield/",
  },
};

const serviceSchema = getServiceSchema(
  "Frosted window film Sheffield — privacy film, glass manifestation and decorative film",
  "Frosted and privacy window film installed across Sheffield and South Yorkshire. Office glass partitions, meeting room manifestation, shopfront privacy film, residential bathroom and bedroom windows. Etched-effect decorative film, plain frosted privacy film, Part M glass manifestation compliance, one-way privacy film. Sheffield city centre S1–S3, Kelham Island, St Paul's Quarter and across South Yorkshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Frosted Window Film", item: "https://www.wrpx.co.uk/window-film/frosted-window-film/" },
    { "@type": "ListItem", position: 4, name: "Sheffield", item: "https://www.wrpx.co.uk/window-film/frosted-film-sheffield/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film in Sheffield offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are Sheffield-based and install frosted and privacy film across Sheffield offices, meeting rooms, glass partitions and boardrooms. St Paul's Quarter, Kelham Island, the Digital Campus, city centre S1 and all business parks on the Sheffield Parkway and M1 corridors. Free survey across Sheffield.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between frosted film and glass manifestation in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted film covers the full pane or a large portion of it to create privacy — the glass becomes translucent rather than transparent. Glass manifestation is a safety requirement under Building Regulations Part M: a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent people walking into it. WRPX installs both, and can combine them — patterned or etched-effect manifestation that also provides privacy.",
      },
    },
    {
      "@type": "Question",
      name: "Can frosted film be cut to a design or pattern in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted film can be cut to virtually any shape, pattern or design using a plotter cutter. Common applications include company logo cut-outs in office partitions, geometric patterns for decorative windows, and custom privacy bands or zones on meeting room glass. Send us the design in vector format and we will quote for cut-and-apply.",
      },
    },
    {
      "@type": "Question",
      name: "How long does frosted film last on Sheffield office glass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality frosted film from 3M or Avery Dennison applied to internal glass has a typical lifespan of 7–10 years in an office environment with normal cleaning. External applications have a shorter lifespan due to UV and weather exposure — typically 5–7 years. We specify the right product for internal versus external use at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do frosted film on residential windows in Sheffield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — residential frosted film is a common application across Sheffield. Bathroom windows, front-door sidelights, ground-floor bedroom windows and kitchen windows facing a neighbouring property or public footpath are the most common residential uses. We cover all Sheffield postcodes S1–S20 for residential frosted film.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install frosted window film in Sheffield offices?",
    a: "Yes — we are Sheffield-based and install frosted and privacy film across Sheffield offices, meeting rooms, glass partitions and boardrooms. St Paul's Quarter, Kelham Island, the Digital Campus, city centre S1 and all business parks on the Sheffield Parkway and M1 corridors. Free survey across Sheffield.",
  },
  {
    q: "What is the difference between frosted film and glass manifestation in Sheffield?",
    a: "Frosted film covers the full pane or a large portion of it to create privacy — the glass becomes translucent rather than transparent. Glass manifestation is a safety requirement under Building Regulations Part M: a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent people walking into it. WRPX installs both, and can combine them — patterned or etched-effect manifestation that also provides privacy.",
  },
  {
    q: "Can frosted film be cut to a design or pattern in Sheffield?",
    a: "Yes — frosted film can be cut to virtually any shape, pattern or design using a plotter cutter. Common applications include company logo cut-outs in office partitions, geometric patterns for decorative windows, and custom privacy bands or zones on meeting room glass. Send us the design in vector format and we will quote for cut-and-apply.",
  },
  {
    q: "How long does frosted film last on Sheffield office glass?",
    a: "Quality frosted film from 3M or Avery Dennison applied to internal glass has a typical lifespan of 7–10 years in an office environment with normal cleaning. External applications have a shorter lifespan due to UV and weather exposure — typically 5–7 years. We specify the right product for internal versus external use at survey.",
  },
  {
    q: "Can you do frosted film on residential windows in Sheffield?",
    a: "Yes — residential frosted film is a common application across Sheffield. Bathroom windows, front-door sidelights, ground-floor bedroom windows and kitchen windows facing a neighbouring property or public footpath are the most common residential uses. We cover all Sheffield postcodes S1–S20 for residential frosted film.",
  },
];

export default function FrostedFilmSheffieldPage() {
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
            <Link href="/window-film/frosted-window-film/" className="text-accent hover:underline">Frosted Window Film</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Sheffield</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Frosted &amp; Privacy · Sheffield
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Frosted window film in Sheffield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX is Sheffield-based and installs frosted and privacy film across Sheffield offices,
            meeting rooms, glass partitions, shopfronts and homes. Plain frosted film, etched-effect
            decorative film, Part M glass manifestation and one-way privacy film — all installed
            to a clean, professional finish with a free survey and fixed price.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Sheffield Survey →
            </Link>
            <Link href="/window-film/frosted-window-film/" className="btn-secondary">
              Frosted Film Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Product types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted and privacy film types we install in Sheffield
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Plain frosted privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Translucent white or grey frosted film that diffuses the view through the glass
                while still allowing light transmission. The most common application for Sheffield
                office meeting rooms, open-plan glass partitions and residential bathroom windows.
                Available in a range of opacity levels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Etched-effect decorative film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Patterned frosted film that replicates the appearance of acid-etched or sandblasted
                glass — without the permanent alteration or the cost. Geometric patterns, floral
                designs, horizontal or vertical band finishes. Popular in Sheffield retail, hospitality
                and office environments where aesthetics matter alongside privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Glass manifestation (Part M)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations Part M requires large glass areas — glass doors, full-height
                glazed panels and frameless glass partitions — to be marked at 850mm and 1500mm
                heights to prevent collision. WRPX installs compliant manifestation across Sheffield
                offices, hotels and commercial buildings, in both plain and patterned styles.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Cut-to-shape frosted designs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film cut to a specific pattern, logo, shape or word using a plotter
                cutter. Common in Sheffield offices where company logo cut-outs in glass
                partitions or branded window frosting on shopfronts are needed. Send us
                artwork in vector format for a quote.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">One-way privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film that allows people inside to see out while preventing
                the view in from outside during daylight hours. Popular for Sheffield ground-floor
                offices, shopfronts and commercial premises on public-facing elevations. Note:
                the one-way effect reverses at night when the interior is lit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window vinyl graphics and branding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut or printed vinyl applied to glass for decorative, branding or privacy purposes
                — including frosted-effect vinyl, opaque coloured vinyl, and full-colour digitally
                printed window graphics. A different product from film but often specified together.
                We install all types across Sheffield.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield applications */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted film applications across Sheffield
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Sheffield offices and commercial premises.</strong> Glass meeting rooms, boardrooms, open-plan partitions and internal glass screens in Sheffield city centre, St Paul&apos;s Quarter, Kelham Island, Sheaf Square, the Wicker and all Sheffield business parks. Part M manifestation for new fit-outs and refurbishments. We work in occupied offices with minimal disruption.
            </p>
            <p>
              <strong className="text-foreground">Sheffield shopfronts and retail.</strong> Privacy film on lower sections of shopfront windows, decorative etched-effect film on café and restaurant windows, frosted film for changing room areas in retail units. We cover the Meadowhall Shopping Centre area, Ecclesall Road, Fargate, division Street and Sheffield&apos;s neighbourhood retail centres.
            </p>
            <p>
              <strong className="text-foreground">Sheffield hotels and hospitality.</strong> Frosted film on hotel bathroom windows, bedroom windows facing a neighbouring property or busy street, spa and leisure area glazing. Glass manifestation in hotel corridor glazing and function room glass screens. We work in occupied Sheffield hotels with overnight access where needed.
            </p>
            <p>
              <strong className="text-foreground">Sheffield schools and public buildings.</strong> Part M manifestation on school glazing as part of building compliance programmes, privacy film on staff office glazing, decorative film on communal area windows. We cover all Sheffield schools, academies and public buildings across the S postcode zone.
            </p>
            <p>
              <strong className="text-foreground">Residential Sheffield.</strong> Bathroom windows, ground-floor bedroom windows, front-door sidelights, shower screens, kitchen windows and any glazing where privacy is needed without losing light. Free survey across S1–S20. Most residential Sheffield frosted film jobs complete in half a day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted film Sheffield — common questions
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
            Related window film services in Sheffield
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering frosted, privacy and etched-effect film across all applications.</p>
            </Link>
            <Link href="/window-film/frosted-office-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted office film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for office glass partitions, meeting rooms and boardrooms.</p>
            </Link>
            <Link href="/window-film/solar-control-film-sheffield/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Solar control film Sheffield</h3>
              <p className="mt-2 text-sm text-muted">Heat reduction and glare control film for Sheffield&apos;s south-facing offices and commercial buildings.</p>
            </Link>
            <Link href="/window-film/glass-manifestation/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Glass manifestation</h3>
              <p className="mt-2 text-sm text-muted">Part M compliance manifestation for glass doors, full-height glazed panels and glass partitions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Need frosted film in Sheffield?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Sheffield and South Yorkshire. We assess the glass, specify
              the right film for your application and give you a fixed price. Commercial and
              residential — most Sheffield frosted film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Sheffield Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
