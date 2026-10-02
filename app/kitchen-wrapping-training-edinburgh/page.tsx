import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Edinburgh | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Edinburgh. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 4 hours via the A1(M) south. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting Edinburgh and the Lothians.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-edinburgh/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Edinburgh | WRPX Live Job Training",
    description:
      "Edinburgh kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Edinburgh via the A1(M) south to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-edinburgh/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Edinburgh — WRPX live-job training programme",
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
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Leith" },
    { "@type": "City", name: "Musselburgh" },
    { "@type": "City", name: "Livingston" },
    { "@type": "City", name: "Dunfermline" },
    { "@type": "State", name: "Lothian" },
    { "@type": "State", name: "Scotland" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Edinburgh and the wider Lothians via the A1(M) south to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Edinburgh",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-edinburgh/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Edinburgh, the most direct route south is the A1(M) — leaving the city via the A1 through East Lothian, crossing into England near Berwick-upon-Tweed, then south via the A1(M) through Northumberland and County Durham, connecting to the M1 into South Yorkshire. Edinburgh city centre EH1 to Sheffield S1 is approximately 300 miles and takes around 4 hours in off-peak conditions. The sensible approach for Edinburgh trainees is to stay over in Sheffield for the working week and travel home on Friday evening — accommodation in Sheffield is affordable and sits well within the all-in training cost.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Edinburgh from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edinburgh to Sheffield is approximately 295 to 310 miles depending on the route and the exact South Yorkshire training address. From Edinburgh city centre, the A1 east runs through Musselburgh EH21, Tranent EH33 and Dunbar EH42 before crossing the border near Berwick-upon-Tweed. The A1(M) then runs south through Alnwick, Morpeth and Newcastle before continuing through County Durham and into Yorkshire. From the A1(M) interchange near Doncaster, it is a short distance into Sheffield on the M18/A630. Total journey time from Edinburgh in off-peak conditions is approximately 4 hours. Trainees from West Lothian EH48/EH54 or Fife can join the A1(M) further south via the M8 east and Forth Road Bridge route.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Edinburgh and the wider Lothians region represent an excellent market for kitchen wrapping. Edinburgh has a population of around 550,000 within the city, with greater Edinburgh — including Musselburgh EH21, Dalkeith EH22, Bonnyrigg EH19, Penicuik EH26, Livingston EH54, Broxburn EH52 and Bathgate EH48 — extending to well over 800,000. The city&apos;s housing stock spans Georgian and Victorian terraces and tenement flats in the New Town EH2/EH3 and Marchmont EH9/EH10 areas, interwar semis in Corstorphine EH12, Morningside EH10 and Liberton EH16, and large 1960s to 1980s suburban estates in the south and east. Across all these housing types, fitted kitchens installed from the 1990s onwards are now prime candidates for wrapping. Edinburgh&apos;s kitchen wrapping search market is currently wide open — no established local operator dominates the Edinburgh EH postcodes, and the Lothians have even less competition.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in Edinburgh. The problems encountered during training — adhesion on aged melamine, primers on bare MDF edges, cutting around integrated appliances, finishing inside corner joins — are the exact problems that appear on real Edinburgh kitchen jobs. No classroom setting replicates that level of practical exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Edinburgh and Lothians postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Edinburgh — not just a technique and a piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I stay in Sheffield during the training week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield city centre has a strong range of accommodation from budget hotels to short-stay serviced apartments. The S1, S2 and S3 postcodes are well-supplied with affordable options. Premier Inn, Travelodge and Ibis all have Sheffield city-centre properties. A typical working week of accommodation at a budget Sheffield hotel runs to around £200 to £350 depending on the time of year — well within the overall training investment. WRPX will confirm the training address when your dates are confirmed and can advise on the best accommodation options based on the live install location that week.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingEdinburghPage() {
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
            <span className="text-foreground">Edinburgh</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Edinburgh &amp; the Lothians
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Edinburgh
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Edinburgh via the A1(M) south. Five days on a real client
            kitchen with Connor&apos;s team: prep, application, pricing and finishing
            under live conditions. Leave with the skill, a brand, a website, 12 months
            of SEO targeting your Edinburgh and Lothians areas, and an ongoing support
            line. {trainingProgram.priceDisplay} all-in. The first kitchen wrapping
            training programme specifically targeting Edinburgh.
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

      {/* Travel from Edinburgh */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Edinburgh
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Edinburgh, the most direct route south is the
              A1 east from the city, running through Musselburgh EH21, Haddington EH41
              and Dunbar EH42 before crossing the border into Northumberland near
              Berwick-upon-Tweed. The A1(M) then runs south through Northumberland,
              County Durham and the Tees Valley before connecting to the M18 and A630
              into South Yorkshire and Sheffield.
            </p>
            <p>
              Edinburgh city centre EH1 to Sheffield S1 is approximately 300 miles.
              In off-peak conditions — leaving Edinburgh before 7am or after 9am —
              the drive takes around 4 hours. Trainees from West Edinburgh EH12 or
              EH14, from Livingston EH54, Broxburn EH52 or Bathgate EH48 can join the
              A1(M) south via the M8 east and the Forth Road Bridge crossing into Fife
              and south via the A92/A1. Musselburgh EH21 and Tranent EH33 are on the
              A1 east with no city-centre routing needed.
            </p>
            <p>
              For a 5-day training programme, the practical approach from Edinburgh is
              to stay over in Sheffield for the working week. Budget hotels in Sheffield
              city centre S1 are plentiful and affordable — a working week&apos;s
              accommodation sits comfortably within the all-in training cost. Travelling
              south on Sunday evening and returning on Friday afternoon keeps the training
              week clean and avoids the daily fatigue of a 4-hour commute.
            </p>
            <p>
              WRPX will confirm the training address when your dates are booked —
              locations are typically in Sheffield S, Rotherham S or the wider South
              Yorkshire area. We can advise on Sheffield accommodation options suited
              to the specific training site for that intake.
            </p>
          </div>
        </div>
      </section>

      {/* Edinburgh market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Edinburgh — the Lothians opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Edinburgh has a population of around 550,000 within the city boundary.
              The wider Lothian region — East Lothian, West Lothian and Midlothian —
              adds a further 400,000 people across towns like Musselburgh EH21,
              Dalkeith EH22, Livingston EH54, Linlithgow EH49, Haddington EH41,
              North Berwick EH39 and Penicuik EH26. Combined with commuter towns
              in Fife — Dunfermline KY11, Kirkcaldy KY1, Glenrothes KY6 — the
              greater Edinburgh catchment for a kitchen wrapper with a proper website
              and SEO is well over one million households.
            </p>
            <p>
              Edinburgh&apos;s housing stock is varied and well-suited to kitchen wrapping.
              The New Town EH2/EH3/EH4 has a high density of Georgian and Victorian
              tenement conversions and tenemented flats — properties with fitted kitchens
              that were installed or updated between the 1980s and the 2000s and are now
              visually dated despite being structurally sound. Marchmont EH9, Bruntsfield
              EH10, Morningside EH10 and Newington EH9 add Victorian and Edwardian
              tenement stock in the south of the city with a younger owner-occupier
              and private renter demographic actively renovating.
            </p>
            <p>
              Suburban Edinburgh extends the opportunity further. Corstorphine EH12,
              Clermiston EH4, Fairmilehead EH10, Liberton EH16, Gilmerton EH17 and
              Portobello EH15 all have substantial owner-occupied interwar, post-war
              and 1970s/80s housing with fitted kitchens well into their third decade.
              These are the households making cost-versus-replacement decisions right
              now — and kitchen wrapping consistently wins on price and disruption.
            </p>
            <p>
              The critical gap in Edinburgh is supply-side: there is currently no
              well-positioned, well-ranked local kitchen wrapper with a professional
              web presence targeting Edinburgh EH postcodes. The search market for
              kitchen wrapping in Edinburgh is largely untapped. A trained wrapper
              who enters the Edinburgh market with a WRPX-built website and 12 months
              of local SEO already underway has a clear first-mover position that
              will not be available once the market develops.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Edinburgh training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — accessible from Edinburgh
                via the A1(M) south. Real problems, real conditions, from day one.
                Not a workshop with practice panels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how to
                apply it so the job lasts and doesn&apos;t come back to haunt you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey an Edinburgh kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take across the Lothians.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Edinburgh EH
                postcodes and Lothians locations so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting Edinburgh and the wider Lothians —
                so you rank in the markets that matter to your new business.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, primers and tools that work in real conditions —
                trade account introductions so you&apos;re buying right from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Direct line to the
                person who trained you, wherever you are in Scotland.
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
              Most kitchen wrapping training is delivered in a workshop setting on
              practice panels. The basic application motion is straightforward to
              learn — but the problems that stop new wrappers cold on their first
              real job never appear in a training bay. Aged laminate lifting at the
              edge of a door. A melamine surface that has been previously painted and
              has unpredictable adhesion. A cornice that limits tool angle. A deep
              corner return behind a built-in appliance.
            </p>
            <p>
              These are the conditions you face on a real Edinburgh kitchen — in a
              New Town tenement flat in EH2, a 1970s semi in Corstorphine EH12, or
              a modern refurb in Marchmont EH9. No workshop version of those problems
              prepares you for the actual job.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team. The problems you encounter
              during the 5 days are the problems you will face on your first solo
              Edinburgh job. When you leave after a week, you have seen the full range
              of what real kitchen wrapping involves — and you have the answers, not
              just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* Why Edinburgh now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Edinburgh — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping as a trade has grown steadily in England — in London,
              the Midlands and the North, the market is becoming established and the
              number of trained operators is increasing. Scotland is at an earlier
              stage. Edinburgh and Glasgow represent the two largest urban markets in
              Scotland, but neither city has an established, well-ranked local kitchen
              wrapper with a credible online presence targeting local homeowners.
            </p>
            <p>
              Edinburgh is a high-value property city with strong renovation culture —
              the city has one of the highest house prices in Scotland, and owner-
              occupiers in EH postcodes are accustomed to investing in their properties.
              Kitchen wrapping, positioned correctly and ranked for local search, is
              a compelling offer in this market: a high-quality result at a fraction
              of full kitchen replacement cost, with no disruption.
            </p>
            <p>
              The search market for kitchen wrapping in Edinburgh is genuinely open.
              Get in trained, get ranked, and take that position before competition
              emerges — because it will. Tradespeople across Scotland are beginning to
              discover kitchen wrapping as a viable trade. The right time to start is
              before they do.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Edinburgh training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-edinburgh/" />
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
              Ready to build a kitchen wrapping business in Edinburgh?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. Edinburgh trainees typically
              stay over in Sheffield for the working week.
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
