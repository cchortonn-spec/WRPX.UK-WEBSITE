import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frosted Window Film Coventry | Privacy Film, Glass Manifestation & Decorative Film | WRPX",
  description:
    "Frosted window film installed across Coventry for offices, meeting rooms, glass partitions, shopfronts and homes. Privacy film, etched-effect film, glass manifestation and decorative film — WRPX covers CV1 city centre, Coventry University, West Orchards, Warwick Road, Arena Park CV6 and all Coventry postcodes. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/window-film/frosted-film-coventry/",
  },
};

const serviceSchema = getServiceSchema(
  "Frosted window film Coventry — privacy film, glass manifestation and decorative film",
  "Frosted and privacy window film installed across Coventry and Warwickshire. Office glass partitions, meeting room manifestation, shopfront privacy film, residential bathroom and bedroom windows. Etched-effect decorative film, plain frosted privacy film, Part M glass manifestation compliance, one-way privacy film. CV1 city centre, Coventry University campus, West Orchards, Warwick Road, Arena Park CV6, Belgrade Plaza and across Warwickshire."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Window Film", item: "https://www.wrpx.co.uk/window-film/" },
    { "@type": "ListItem", position: 3, name: "Frosted Window Film", item: "https://www.wrpx.co.uk/window-film/frosted-window-film/" },
    { "@type": "ListItem", position: 4, name: "Coventry", item: "https://www.wrpx.co.uk/window-film/frosted-film-coventry/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install frosted window film in Coventry offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we install frosted and privacy film across Coventry offices, meeting rooms, glass partitions and boardrooms. CV1 city centre offices, Coventry University campus buildings, the Arena Business Park CV6, Belgrade Plaza offices, Warwick Road professional services, Westwood Business Park CV4 and all business parks on the A45, A46 and M6 corridors around Coventry. Free survey across the CV postcode zone.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between frosted film and glass manifestation in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frosted film covers the full pane or a large portion of it to create privacy — the glass becomes translucent rather than transparent. Glass manifestation is a safety requirement under Building Regulations Part M: a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. WRPX installs both across Coventry, and can combine them — patterned or etched-effect manifestation that also provides privacy.",
      },
    },
    {
      "@type": "Question",
      name: "Can frosted film be cut to a design or logo in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — frosted film can be cut to virtually any shape, pattern or design using a plotter cutter. Common Coventry applications include company logo cut-outs in glass partitions in CV1 city centre offices, geometric patterns for Coventry University office glazing, branded privacy bands on meeting room glass in Arena Business Park CV6 and custom designs on retail shopfronts. Send us the design in vector format and we will quote for cut-and-apply.",
      },
    },
    {
      "@type": "Question",
      name: "How long does frosted film last on Coventry office glass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality frosted film from 3M or Avery Dennison applied to internal glass has a typical lifespan of 7–10 years in an office environment with normal cleaning. External applications have a shorter lifespan due to UV and weather exposure — typically 5–7 years. We specify the right product for internal versus external use at survey.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do frosted film on residential windows in Coventry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — residential frosted film is a common application across Coventry and Warwickshire. Bathroom windows, front-door sidelights, ground-floor bedroom windows and kitchen windows facing a neighbouring property or public footpath are the most common residential uses. We cover all Coventry postcodes CV1–CV6 and the wider Warwickshire area for residential frosted film jobs.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Do you install frosted window film in Coventry offices?",
    a: "Yes — we install frosted and privacy film across Coventry offices, meeting rooms, glass partitions and boardrooms. CV1 city centre offices, Coventry University campus buildings, the Arena Business Park CV6, Belgrade Plaza offices, Warwick Road professional services, Westwood Business Park CV4 and all business parks on the A45, A46 and M6 corridors around Coventry. Free survey across the CV postcode zone.",
  },
  {
    q: "What is the difference between frosted film and glass manifestation in Coventry?",
    a: "Frosted film covers the full pane or a large portion of it to create privacy — the glass becomes translucent rather than transparent. Glass manifestation is a safety requirement under Building Regulations Part M: a band or repeated marks at 850mm and 1500mm heights on large glass panels to make the glass visible and prevent collision. WRPX installs both across Coventry, and can combine them — patterned or etched-effect manifestation that also provides privacy.",
  },
  {
    q: "Can frosted film be cut to a design or logo in Coventry?",
    a: "Yes — frosted film can be cut to virtually any shape, pattern or design using a plotter cutter. Common Coventry applications include company logo cut-outs in glass partitions in CV1 city centre offices, geometric patterns for Coventry University office glazing, branded privacy bands on meeting room glass in Arena Business Park CV6 and custom designs on retail shopfronts. Send us the design in vector format and we will quote for cut-and-apply.",
  },
  {
    q: "How long does frosted film last on Coventry office glass?",
    a: "Quality frosted film from 3M or Avery Dennison applied to internal glass has a typical lifespan of 7–10 years in an office environment with normal cleaning. External applications have a shorter lifespan due to UV and weather exposure — typically 5–7 years. We specify the right product for internal versus external use at survey.",
  },
  {
    q: "Can you do frosted film on residential windows in Coventry?",
    a: "Yes — residential frosted film is a common application across Coventry and Warwickshire. Bathroom windows, front-door sidelights, ground-floor bedroom windows and kitchen windows facing a neighbouring property or public footpath are the most common residential uses. We cover all Coventry postcodes CV1–CV6 and the wider Warwickshire area for residential frosted film jobs.",
  },
];

export default function FrostedFilmCoventryPage() {
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
            <span className="text-foreground">Coventry</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Window Film · Frosted &amp; Privacy · Coventry
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Frosted window film in Coventry
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX installs frosted and privacy film across Coventry offices, meeting rooms,
            glass partitions, shopfronts and homes. Plain frosted film, etched-effect
            decorative film, Part M glass manifestation and one-way privacy film — all
            installed to a clean, professional finish with a free survey and fixed price.
            We cover all CV postcodes and wider Warwickshire.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-primary">
              Book a Free Coventry Survey →
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
            Frosted and privacy film types we install in Coventry
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Plain frosted privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Translucent white or grey frosted film that diffuses the view through the glass
                while still allowing light transmission. The most common application for Coventry
                office meeting rooms, open-plan glass partitions and residential bathroom windows
                across CV1–CV6.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Etched-effect decorative film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Patterned frosted film that replicates the appearance of acid-etched or sandblasted
                glass — without the permanent alteration or cost. Popular in Coventry city centre
                offices, Coventry University campus buildings and West Orchards retail units where
                aesthetics matter alongside privacy.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Glass manifestation (Part M)</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Building Regulations Part M requires large glass areas — glass doors, full-height
                glazed panels and frameless glass partitions — to be marked at 850mm and 1500mm
                heights to prevent collision. WRPX installs compliant manifestation across
                Coventry offices, universities and commercial buildings.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Cut-to-shape frosted designs</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Frosted film cut to a specific pattern, logo, shape or word. Common Coventry
                applications include company logo cut-outs in CV1 glass partitions, branded
                window frosting on West Orchards commercial frontages, and custom privacy
                zones on Arena Business Park CV6 meeting room glass.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">One-way privacy film</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Reflective privacy film that allows people inside to see out while preventing
                the view in from outside during daylight hours. Popular for Coventry ground-floor
                offices, shopfronts and commercial premises on public-facing elevations. The
                one-way effect reverses at night when the interior is lit.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Window vinyl graphics and branding</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Cut or printed vinyl applied to glass for decorative, branding or privacy
                purposes — frosted-effect vinyl, opaque coloured vinyl, and full-colour digitally
                printed window graphics. Often specified together with film on the same Coventry
                installation. We install all types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coventry applications */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted film applications across Coventry
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Coventry offices and commercial premises.</strong>{" "}
              Glass meeting rooms, boardrooms, open-plan partitions and internal glass screens in
              CV1 city centre offices, Arena Business Park CV6, Westwood Business Park CV4,
              Belgrade Plaza and business parks on the A45, A46 and M6 corridors. Part M
              manifestation for new fit-outs and refurbishments. We work in occupied Coventry
              offices with minimal disruption.
            </p>
            <p>
              <strong className="text-foreground">Coventry University.</strong> Coventry University
              — one of the city&apos;s largest institutions with a substantial CV1 campus including
              the Engineering and Computing Building, Technology Park and the Hub — generates
              regular demand for office privacy film, glass manifestation on corridor glazing
              and decorative film on communal area glass screens. We cover all Coventry University
              campus buildings and the wider university estate.
            </p>
            <p>
              <strong className="text-foreground">Coventry shopfronts and retail.</strong>{" "}
              Privacy film on lower sections of shopfront windows, decorative etched-effect film
              on café and restaurant windows in the city centre, frosted film for changing room
              areas in retail units. West Orchards Shopping Centre CV1, the Upper Precinct, the
              Lower Precinct, Warwick Road commercial strip and Arena Park CV6 are all regular
              applications.
            </p>
            <p>
              <strong className="text-foreground">Coventry hotels and hospitality.</strong>{" "}
              Frosted film on hotel bathroom windows, bedroom windows facing busy streets or
              neighbouring properties, spa and leisure area glazing at CV1 and CV2 hotels.
              Glass manifestation in hotel corridor glazing and function room glass screens.
              We work in occupied Coventry hotels with overnight access where needed.
            </p>
            <p>
              <strong className="text-foreground">Residential Coventry.</strong> Bathroom windows,
              ground-floor bedroom windows, front-door sidelights, shower screens, kitchen
              windows and any glazing where privacy is needed without losing light. Free survey
              across CV1–CV6 and the wider Warwickshire area. Most residential Coventry frosted
              film jobs complete within a day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Frosted film Coventry — common questions
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
            Related window film services in Coventry
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/window-film/frosted-window-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted window film — full overview</h3>
              <p className="mt-2 text-sm text-muted">National service page covering frosted, privacy and etched-effect film across all applications.</p>
            </Link>
            <Link href="/window-film/frosted-office-film/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Frosted office film</h3>
              <p className="mt-2 text-sm text-muted">Privacy film and glass manifestation for Coventry office glass partitions, meeting rooms and boardrooms.</p>
            </Link>
            <Link href="/architectural-wrap-retail-coventry/" className="card-float p-5 hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">Retail interior wrapping Coventry</h3>
              <p className="mt-2 text-sm text-muted">Vinyl wrapping for Coventry retail counters, shop-front panels and fixtures.</p>
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
              Need frosted film in Coventry?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Free survey across Coventry and Warwickshire. We assess the glass, specify
              the right film for your application and give you a fixed price. Commercial and
              residential — most Coventry frosted film jobs complete within a day.
            </p>
            <Link href="/contact/" className="btn-primary mt-8 inline-block">
              Book a Free Coventry Survey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
