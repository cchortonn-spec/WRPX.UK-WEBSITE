import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training York | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from York and North Yorkshire. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 45 minutes to 2 hours via the A64 and A1(M). Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting York and YO postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-york/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training York | WRPX Live Job Training",
    description:
      "York kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from York via the A64 and A1(M) to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-york/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training York — WRPX live-job training programme",
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
    { "@type": "City", name: "York" },
    { "@type": "City", name: "Selby" },
    { "@type": "City", name: "Harrogate" },
    { "@type": "City", name: "Malton" },
    { "@type": "State", name: "North Yorkshire" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from York and North Yorkshire via the A64 and A1(M) to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "York",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-york/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From York city centre, the standard route is south on the A64 dual carriageway from the Hopgrove roundabout on the eastern edge of York, running through Tadcaster and connecting to the A1(M) southbound at Bramham. The A1(M) south continues to junction 47, where the M1 picks up towards Sheffield. York YO1 to Sheffield S1 is approximately 55 to 60 miles and typically takes 1 hour 30 minutes to 2 hours depending on traffic conditions on the A64 and A1(M). Most York-based trainees are able to commute daily to the South Yorkshire training site without needing overnight accommodation.",
      },
    },
    {
      "@type": "Question",
      name: "How far is York from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "York to Sheffield is approximately 55 to 65 miles depending on the exact starting postcode in York and the South Yorkshire training address. The standard route is A64 south from York past Tadcaster and then the A1(M) south to junction 36 or junction 33 for Sheffield. Trainees in Clifton YO30, Rawcliffe YO30 or Skelton YO30 on York&apos;s north-western edge pick up the A19 south, connecting to the A59 west and the A1(M) south at Wetherby. Trainees in Acomb YO24 or Dringhouses YO24 typically take the A1036 south to the A64 bypass or join the A1(M) directly at Colton. The drive from York city centre YO1 to South Yorkshire is typically 1 hour 30 minutes to 2 hours in off-peak conditions, making York one of the more accessible training catchments for WRPX.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "York is a strong market for kitchen wrapping. The city has a large and diverse housing stock spanning Victorian and Edwardian terraces in the Leeman Road YO26 and Groves YO31 areas, interwar semis across Acomb YO24 and Tang Hall YO31, 1950s and 1960s council and ex-council stock in Foxwood YO24, Chapelfields YO24 and Rawcliffe YO30, and more recent private developments across the southern and northern outskirts. Fitted kitchens from the 1980s, 1990s and early 2000s are well represented across all of these property types — prime candidates for wrapping rather than replacement. The wider North Yorkshire catchment from a York base extends to Selby YO8, Tadcaster LS24, Malton YO17, Helmsley YO62, Pocklington YO42 and Driffield YO25 — all within 30 to 45 minutes of York city centre. York currently has no well-ranked local kitchen wrapper with a credible online presence targeting YO postcodes.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire, easily reachable from York via the A64 and A1(M). There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in York. The challenges that come up during training — adhesion on aged laminate, primers on bare MDF edges, corners on Victorian terrace kitchen doors — are exactly the problems you will encounter on real York kitchen jobs.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your York and North Yorkshire postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in York — not just a technique and a piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "Are there two universities in York that could help drive kitchen wrapping demand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — York has two universities. University of York, located in the Heslington YO10 campus on the south-eastern edge of the city, has approximately 20,000 students. York St John University, based on Lord Mayor&apos;s Walk YO31 just outside the city walls, has approximately 7,000 students. A significant proportion of students in York live in private rented houses in the Fishergate YO10, Fulford YO10, Heslington YO10, Heworth YO31 and the Groves YO31 areas — HMO and terraced properties from the Victorian era where kitchen wrapping has strong demand from landlords looking to refresh between tenancies. Beyond student landlord demand, York&apos;s strong tourism economy and relatively high disposable incomes mean private homeowners also represent a well-funded target market.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingYorkPage() {
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
            <span className="text-foreground">York</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · York &amp; North Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — York
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from York via the A64 and A1(M) in under two hours. Five days
            on a real client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under live conditions. Leave with the skill, a brand, a
            website, 12 months of SEO targeting your York and North Yorkshire areas, and
            an ongoing support line. {trainingProgram.priceDisplay} all-in. The first
            kitchen wrapping training programme specifically targeting York and YO
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

      {/* Travel from York */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from York
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From York city centre, the standard route south is
              the A64 dual carriageway from the Hopgrove roundabout on the eastern edge
              of the city. The A64 runs south-west through Tadcaster LS24, passing the
              Boston Spa and Wetherby area, and connects to the A1(M) southbound at
              Bramham junction near Wetherby LS22.
            </p>
            <p>
              From the A1(M) south, continue to junction 47 at Garforth to pick up the
              M1 southbound, or take the A1(M) directly to junction 36 at Rotherham and
              follow the M1 west to Sheffield. The total distance from York city centre
              YO1 to Sheffield S1 is approximately 55 to 65 miles, with a typical drive
              time of 1 hour 30 minutes to 2 hours in off-peak conditions.
            </p>
            <p>
              York is within comfortable daily commuting distance of South Yorkshire
              — unlike trainees from further afield who typically stay overnight in
              Sheffield, most York-based trainees can drive to and from the training
              site each day. A 6:30am departure from York should arrive in Sheffield
              comfortably ahead of an 8:00am site start.
            </p>
            <p>
              Trainees from Harrogate HG1, Knaresborough HG5 or Wetherby LS22 can
              join the A1(M) southbound directly. Those from Selby YO8 or Goole DN14
              can access via the M62 west to Sheffield or the A1(M) south at
              Barkston Ash. WRPX will confirm the exact training address when your
              dates are booked.
            </p>
          </div>
        </div>
      </section>

      {/* York market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in York — the opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              York is a mid-sized city with a population of around 210,000 and a housing
              stock heavily weighted towards Victorian and Edwardian terraces in the inner
              city and interwar and postwar stock spreading outward to the modern
              suburbs. In the Groves YO31, Fishergate YO10, Leeman Road YO26 and
              Holgate YO24 areas, late-Victorian and Edwardian terrace kitchens are a
              primary market — small, fitted and often with units from the 1990s and
              early 2000s that are past due for refresh.
            </p>
            <p>
              The wider North Yorkshire catchment from a York base is substantial.
              Selby YO8 and the Selby district add a large swathe of 1960s to 1980s
              housing. Malton YO17 and the Ryedale market-town corridor represent a
              rural affluent market with older stone and brick properties. Harrogate HG1
              — one of the most affluent towns in the UK — is 20 miles north-west of
              York and has a particularly strong market for premium kitchen refreshes
              where wrapping offers an alternative to full replacement.
            </p>
            <p>
              The university population — around 27,000 students between the University
              of York and York St John University — generates strong landlord demand for
              kitchen refreshes between tenancies in the HMO terrace belt around
              Fishergate YO10, Fulford YO10 and Heworth YO31. Landlords in these areas
              run tight turnarounds and need a fast, cost-effective refresh solution.
              Kitchen wrapping is well-placed to serve that need, and there is currently
              no well-ranked local operator in York specifically targeting this market.
            </p>
            <p>
              York also benefits from a high proportion of tourists and visitors
              year-round, which supports a hospitality and short-let accommodation
              sector that regularly refreshes interiors. The combination of student
              rental, private residential and short-let demand makes York an unusually
              diverse kitchen wrapping market relative to its size.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} York training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — under two hours from York via
                A64 and A1(M). Real problems, real conditions, from day one.
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
                How to survey a York kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business
                from the first enquiry call across York and North Yorkshire.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting York YO
                postcodes and the North Yorkshire towns so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting York and the wider North Yorkshire
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
              training bay session. Aged laminate on a 1990s York terrace kitchen that
              lifts at the door edge. Bare MDF at a cut corner where the primer coat
              needs three passes. A deep internal cabinet return that limits the angle
              of the squeegee.
            </p>
            <p>
              These are the conditions you will face on a real York kitchen job — in a
              Groves terrace YO31, an Acomb semi YO24 or a Fulford rental YO10. No
              workshop version of those problems prepares you adequately.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team in South Yorkshire. The
              challenges you encounter during the 5 days are the same challenges
              you will face on your first solo York job. When you leave after the
              week, you have seen the full range of what real kitchen wrapping
              involves, not a curated selection of practice scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Why York now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why York — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping is growing as a trade across the UK — but the growth in
              established operators is concentrated in the large urban centres, Leeds,
              Sheffield, Manchester and Birmingham. The market in York specifically is
              early-stage: demand from homeowners and landlords is present, but the
              supply of trained, online-visible local operators is thin.
            </p>
            <p>
              York&apos;s combination of affluent residential areas, a large and active
              student rental sector, and a tourism-driven short-let and hospitality
              market creates an unusually broad demand base for kitchen wrapping for a
              city of its size. Getting trained, getting ranked and taking the position
              before competitors arrive is worth doing now — the gap in the York market
              is still wide enough that a well-positioned new entrant can lead it.
            </p>
            <p>
              The North Yorkshire countryside around York — Selby, Malton, Harrogate,
              Tadcaster, Picklington and the market towns — adds further volume for a
              mobile operator based in or near York. Many of these areas have high
              proportions of older private housing stock with the kind of fitted kitchens
              most suited to wrapping. First-mover advantage in a rural market lasts a
              long time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            York training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-york/" />
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
              Ready to build a kitchen wrapping business in York?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. York trainees can commute daily
              to South Yorkshire or stay over in Sheffield for the week.
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
