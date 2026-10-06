import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Hull | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Hull and East Yorkshire. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 30 minutes via the M62 and A63. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting Hull and HU postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-hull/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Hull | WRPX Live Job Training",
    description:
      "Hull kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Hull via the M62 and A63 to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-hull/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Hull — WRPX live-job training programme",
  provider: {
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Hull" },
    { "@type": "City", name: "Beverley" },
    { "@type": "City", name: "Bridlington" },
    { "@type": "City", name: "Driffield" },
    { "@type": "State", name: "East Yorkshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Hull and East Yorkshire via the M62 and A63 to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
  offers: {
    "@type": "Offer",
    price: "1699",
    priceCurrency: "GBP",
    description: "Complete kitchen wrapping training and business launch package",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wrpx.co.uk/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kitchen Wrapping Training",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hull",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-hull/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Hull city centre, the standard route west is the A63 dual carriageway from the Myton Bridge area of Hull, which connects directly to the M62 motorway at Hessle junction 38. The M62 west runs through Howden, Goole DN14 and Selby before continuing into West Yorkshire and South Yorkshire. From the M62, trainees join the M18 southbound and then the M1 south towards Sheffield. Hull HU1 to Sheffield S1 is approximately 70 to 75 miles and typically takes 1 hour 15 minutes to 1 hour 45 minutes depending on traffic. Most Hull-based trainees are able to commute daily to the South Yorkshire training site without needing overnight accommodation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Hull from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hull to Sheffield is approximately 70 to 80 miles depending on the exact starting postcode in Hull and the South Yorkshire training address. The standard route is the A63 west from Hull city centre, joining the M62 at Hessle, then west on the M62 to the M18 south and M1 south towards Sheffield. Trainees in Anlaby HU10 or Cottingham HU16 join the M62 at junction 38 directly. Trainees in north Hull HU6, Bransholme HU7 or Kingswood HU7 pick up the A1079 west towards the M62 at Brough HU15, or take the A164 south to Hessle and the A63 westbound. The drive from Hull city centre HU1 to South Yorkshire is typically 1 hour 15 to 1 hour 45 minutes in off-peak conditions, making Hull a very manageable daily commute for WRPX training.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Hull?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hull is a strong, underserved market for kitchen wrapping. The city has a large housing stock spanning interwar and post-war council estates in the east — Bransholme HU7, Sutton Park HU7, Longhill HU8, Bilton Grange HU9, Orchard Park HU6 — plus older terraced housing in the inner west and north: Hessle Road HU3, Beverley Road HU5, Newland Avenue HU5 and Cottingham Road HU6. Fitted kitchens from the 1980s, 1990s and early 2000s are extremely well represented across these property types — precisely the age of cabinet where wrapping outperforms replacement on cost. The wider East Yorkshire catchment from a Hull base extends to Beverley HU17, Driffield YO25, Bridlington YO15, Withernsea HU19 and the Holderness coast — all within 30 to 45 minutes. Hull currently has no well-ranked local kitchen wrapper with a credible online presence specifically targeting HU postcodes.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire, reachable from Hull via the A63 and M62 in under two hours. There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in Hull. The challenges that come up during training — adhesion on aged laminate from an ex-council Bransholme kitchen, primers on bare MDF edges, deep internal cabinet returns — are exactly the problems you will encounter on real Hull kitchen jobs.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Hull and East Yorkshire postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Hull — not just a technique and a piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "What does the University of Hull mean for kitchen wrapping demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University of Hull, based on Cottingham Road HU6, has approximately 15,000 students. A significant portion of students in Hull live in private rented HMO houses in the Newland Avenue HU5, Cottingham Road HU6, Beverley Road HU5 and Princes Avenue HU5 areas — Victorian and Edwardian terraces where landlords regularly refresh kitchens between tenancies. Kitchen wrapping is an ideal solution for landlords running tight turnarounds on HMO properties: faster than replacement, significantly cheaper, and visually effective. A Hull-based kitchen wrapper with local SEO targeting the HU5 and HU6 landlord market is well-placed to capture consistent repeat business from this sector.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingHullPage() {
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
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/kitchen-wrapping-training/"
              className="text-accent hover:underline"
            >
              Kitchen Wrapping Training
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Hull</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Hull &amp; East Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Hull
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Hull via the A63 and M62 in under two hours. Five days
            on a real client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under live conditions. Leave with the skill, a brand, a
            website, 12 months of SEO targeting your Hull and East Yorkshire areas, and
            an ongoing support line. {trainingProgram.priceDisplay} all-in. The first
            kitchen wrapping training programme specifically targeting Hull and HU
            postcodes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/447467922560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply on WhatsApp →
            </Link>
            <Link href="/kitchen-wrapping-training/" className="btn-secondary">
              Full Training Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Travel from Hull */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Hull
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Hull city centre, the standard route west is
              the A63 dual carriageway from the Myton Bridge interchange in the HU1/HU3
              area of the city. The A63 runs west through Hessle, crossing beneath the
              Humber Bridge approach roads, and joins the M62 motorway westbound at
              junction 38 near Hessle.
            </p>
            <p>
              The M62 west passes through Howden, Goole DN14 and the Selby
              area before continuing into West Yorkshire at the Ferrybridge junction.
              From Ferrybridge, trainees can continue west on the M62 to the M1
              southbound at Lofthouse junction 42, or take the M18 south from the
              Goole-area junction to the M1 south at Maltby. Either route delivers
              to Sheffield in under 30 minutes once on the M1. Hull HU1 to
              Sheffield S1 is approximately 70 to 80 miles, with a typical drive time
              of 1 hour 15 minutes to 1 hour 45 minutes in off-peak conditions.
            </p>
            <p>
              Hull is one of the closer East Yorkshire locations to South Yorkshire
              — trainees from HU1 to HU9 are typically able to commute to and from
              the South Yorkshire training site each day. A 6:00am departure from Hull
              reaches Sheffield comfortably for an 8:00am site start.
            </p>
            <p>
              Trainees from Cottingham HU16 or Beverley HU17 pick up the A164 south
              to Hessle and the A63 westbound. Those from Anlaby HU10 or Hessle HU13
              join the M62 at junction 38 directly. WRPX will confirm the exact
              training address when your dates are booked.
            </p>
          </div>
        </div>
      </section>

      {/* Hull market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Hull — the opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hull is a city of approximately 260,000 people with a housing stock
              heavily weighted towards post-war council-built estates and interwar
              and Victorian terraces in the inner west. The eastern estates —
              Bransholme HU7, Sutton Park HU7, Longhill HU8 and Bilton Grange HU9
              — are characterised by 1960s and 1970s housing with large numbers of
              fitted kitchens installed in the 1990s and early 2000s that are now
              ideally aged for wrapping. These properties represent a volume market
              for a local kitchen wrapper focused on cost-effective refreshes.
            </p>
            <p>
              The inner west — Hessle Road HU3, Anlaby Road HU3, Beverley Road HU5,
              Newland Avenue HU5 and Princes Avenue HU5 — has a dense stock of
              Victorian and Edwardian terraced housing. This area contains a high
              proportion of student HMO properties and private rented housing where
              landlords refresh kitchens between tenancies. Kitchen wrapping offers
              a significantly cheaper and faster alternative to kitchen replacement
              for this type of busy rental market.
            </p>
            <p>
              The wider East Yorkshire catchment from a Hull base is substantial.
              Beverley HU17, a prosperous market town 8 miles north of Hull, has
              a high proportion of owner-occupied Victorian and Georgian properties
              where homeowners choose kitchen wrapping as a premium refresh option.
              Driffield YO25, Bridlington YO15 and Hornsea HU18 add further rural
              and coastal residential volume. Withernsea HU19 and the Holderness
              villages complete the eastern catchment.
            </p>
            <p>
              Hull currently has no well-ranked local kitchen wrapper with a credible
              online presence targeting HU postcodes. The combination of a large
              city with an ageing housing stock, strong student and private rental
              demand, and a wide rural East Yorkshire catchment makes Hull a
              first-mover opportunity for a trained, SEO-visible local operator.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Hull training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — under two hours from Hull via
                A63 and M62. Real problems, real conditions, from day one.
                Not a workshop with practice panels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how
                to apply it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Hull kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business
                from the first enquiry call across Hull and East Yorkshire.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Hull HU
                postcodes and the East Yorkshire towns so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting Hull and the wider East Yorkshire
                area — so you rank in the markets where the work is.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, primers and tools that work on real jobs —
                trade account introductions so you&apos;re buying at the right price.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Direct line to
                the person who trained you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on approval — a WRPX completion document confirming you
                trained on a real architectural vinyl installation, not a
                government-accredited qualification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-card px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <PricingCallout />
        </div>
      </section>

      {/* Not a classroom */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why a live job — not a classroom
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Most kitchen wrapping training puts you in a workshop on practice panels.
              The basic application technique is quick to demonstrate — but the problems
              that stop new wrappers cold on their first real job are never part of a
              training bay session. Aged laminate on a 1990s Bransholme estate kitchen
              that lifts at the door edge. Bare MDF at a cut corner where the primer coat
              needs three passes. A deep internal cabinet return on a Victorian Hessle Road
              terrace that limits the squeegee angle.
            </p>
            <p>
              These are the conditions you will face on a real Hull kitchen job. No
              workshop version of those problems prepares you adequately.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team in South Yorkshire. The
              challenges you encounter during the 5 days are the same challenges
              you will face on your first solo Hull job. When you leave after the
              week, you have seen the full range of what real kitchen wrapping
              involves, not a curated selection of practice scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hull now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Hull — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping is growing as a trade across the UK — but the growth in
              established operators is concentrated in the large urban centres to the
              west: Sheffield, Leeds, Manchester and Birmingham. The market in Hull
              specifically is at an early stage. Demand from homeowners and landlords
              is present, but the supply of trained, online-visible local operators
              is essentially non-existent.
            </p>
            <p>
              Hull&apos;s large post-war housing estates generate consistent volume demand
              for affordable kitchen refreshes. The active student rental sector in
              the Newland Avenue and Beverley Road corridors creates repeat landlord
              business between tenancies. And the affluent market towns of Beverley
              and the Wolds provide a premium residential tier for a mobile operator
              prepared to cover the East Yorkshire catchment.
            </p>
            <p>
              The gap in the Hull market is wider than almost any comparable English
              city. Getting trained, getting ranked and taking the position now —
              before competition arrives from Leeds or Sheffield operators expanding
              east — is worth doing this year, not next year. Hull&apos;s isolation
              from the main wrapping trade centres means first-mover advantage
              in HU postcodes is unusually durable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Hull training — common questions
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

      {/* Related training locations */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-hull/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to build a kitchen wrapping business in Hull?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. Hull trainees can commute daily
              to South Yorkshire via the A63 and M62 in under two hours.
            </p>
            <p className="mt-3 text-xs text-muted/60">
              {trainingProgram.earnings.disclaimer}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/447467922560"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply on WhatsApp →
              </Link>
              <Link href="/kitchen-wrapping-training/" className="btn-secondary">
                Full Training Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
