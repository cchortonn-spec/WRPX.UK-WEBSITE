import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Cardiff | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Cardiff. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 2 hours 30 minutes via the M4 east and M1 north. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting Cardiff and South Wales.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-cardiff/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Cardiff | WRPX Live Job Training",
    description:
      "Cardiff kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Cardiff via the M4 east to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-cardiff/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Cardiff — WRPX live-job training programme",
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
    { "@type": "City", name: "Cardiff" },
    { "@type": "City", name: "Newport" },
    { "@type": "City", name: "Barry" },
    { "@type": "City", name: "Penarth" },
    { "@type": "City", name: "Bridgend" },
    { "@type": "State", name: "South Wales" },
    { "@type": "State", name: "Wales" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Cardiff and South Wales via the M4 east to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Cardiff",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-cardiff/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Cardiff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Cardiff, the most practical route is east on the M4 from Cardiff Gate or Cardiff West, crossing the Severn into England near Bristol, then north on the M5 and east on the M42 or north on the M1 to South Yorkshire. Cardiff CF10 to Sheffield S1 is approximately 175 miles and takes around 2 hours 30 minutes to 3 hours in off-peak conditions. Many Cardiff trainees find it practical to drive up on a Sunday evening and return on Friday afternoon, staying in Sheffield for the working week — budget accommodation in Sheffield S1 is plentiful and affordable.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Cardiff from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cardiff to Sheffield is approximately 170 to 185 miles depending on the specific route and South Yorkshire training address. The standard route is the M4 east from Cardiff to the Severn Bridge crossing near Chepstow, then north on the M50 to the M5, east on the M42 to the M1, and north on the M1 to Sheffield. Alternatively, the M4 east to the M48 (old Severn crossing) and north via the A449 to the M5 is similar in distance. From Newport NP and the eastern valleys — Caerphilly CF83, Pontypridd CF37 — the M4 east junction is straightforward. Trainees from Cardiff city centre CF10, Roath CF24, Canton CF5 or Pontcanna CF11 can join the M4 within 20 minutes of the city centre.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Cardiff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cardiff and South Wales represent a strong market for kitchen wrapping. Cardiff has a population of around 365,000 within the city boundary — the largest city in Wales and one of the fastest-growing capitals in the UK. The wider Cardiff capital region extends to Newport NP, Barry CF63, Penarth CF64, Pontypridd CF37, Caerphilly CF83 and Bridgend CF31, bringing the accessible catchment for a well-positioned kitchen wrapper to well over 700,000 people. Cardiff&apos;s housing stock is varied — Victorian and Edwardian terraces in Roath CF24, Canton CF5 and Pontcanna CF11, 1960s to 1980s suburban estates across Rhiwbina CF14, Llanishen CF14 and Llandaff CF5, and newer builds across the Cardiff Bay CF10 and Butetown CF10 areas. Across all these housing types, fitted kitchens from the 1990s and 2000s are prime candidates for wrapping. The kitchen wrapping search market in Cardiff is currently wide open — no established local operator dominates the CF postcode area, and South Wales has even less competition than England.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in Cardiff. The problems encountered during training — adhesion on aged melamine, primers on bare MDF edges, cutting around integrated appliances, finishing inside corner joins — are the exact problems that appear on real Cardiff kitchen jobs. No classroom setting replicates that level of practical exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Cardiff and South Wales postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Cardiff — not just a technique and a piece of paper.",
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

export default function KitchenWrappingTrainingCardiffPage() {
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
            <span className="text-foreground">Cardiff</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Cardiff &amp; South Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Cardiff
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Cardiff via the M4 east. Five days on a real client
            kitchen with Connor&apos;s team: prep, application, pricing and finishing
            under live conditions. Leave with the skill, a brand, a website, 12 months
            of SEO targeting your Cardiff and South Wales areas, and an ongoing support
            line. {trainingProgram.priceDisplay} all-in. The first kitchen wrapping
            training programme specifically targeting Cardiff.
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

      {/* Travel from Cardiff */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Cardiff
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Cardiff, the most direct route is the M4 east
              from Cardiff Gate (junction 30) or Cardiff West (junction 33), running
              east through Newport, crossing the Severn into England near Chepstow via
              the Prince of Wales Bridge (M4 Severn Crossing), then north-east through
              the Gloucestershire and the Midlands to South Yorkshire.
            </p>
            <p>
              From the Severn Bridge crossing, continue east on the M4 to junction 15
              (Swindon west) and north on the A419/M5 towards the Midlands, or take
              the M4 to junction 11 and north via the A417 — both routes connecting to
              the M5 and then the M42/M40 corridor into the M1 northbound. From the
              M1, it is straightforward north to Sheffield. Cardiff CF10 to Sheffield
              S1 is approximately 175 miles and takes around 2 hours 30 minutes in
              off-peak conditions, or slightly longer during morning peak.
            </p>
            <p>
              For a 5-day training programme, the practical approach from Cardiff is
              to stay over in Sheffield for the working week. Budget hotels in Sheffield
              city centre S1 are plentiful — a working week of accommodation at a
              budget Sheffield hotel runs to around £200 to £350, well within the
              overall training cost. Travelling up on Sunday evening and returning on
              Friday afternoon keeps the training week clean and avoids daily fatigue.
            </p>
            <p>
              Trainees from Newport NP, Caerphilly CF83, Barry CF63, Penarth CF64 or
              Bridgend CF31 can join the M4 east at multiple Cardiff-area junctions.
              WRPX will confirm the training address when your dates are booked —
              locations are typically in Sheffield S, Rotherham S60 or the wider South
              Yorkshire area.
            </p>
          </div>
        </div>
      </section>

      {/* Cardiff market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Cardiff — the South Wales opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Cardiff is the capital and largest city of Wales, with a population of
              around 365,000 within the city boundary. The wider South Wales catchment
              — Newport NP, Barry CF63, Penarth CF64, Pontypridd CF37, Caerphilly CF83,
              Bridgend CF31, Merthyr Tydfil CF47, Aberdare CF44 and the Valleys corridor
              north of Cardiff — extends the accessible market for a well-positioned
              kitchen wrapper to well over 800,000 households.
            </p>
            <p>
              Cardiff&apos;s housing stock spans a wide range. Victorian and Edwardian
              terraces in Roath CF24, Splott CF24, Canton CF5 and Pontcanna CF11 carry
              fitted kitchens installed from the 1980s through to the 2000s — now at
              the age where owners are weighing up whether to refit or refresh.
              Rhiwbina CF14, Llanishen CF14, Heath CF14 and Cyncoed CF23 represent
              the interwar and 1950s suburban belt with similar kitchen profiles.
              1960s, 1970s and 1980s estates spread across Llandaff North CF14,
              Ely CF5, Fairwater CF5, Pentwyn CF23 and Llanrumney CF3 — substantial
              volumes of owner-occupied and social housing with fitted kitchens well
              into their second or third decade.
            </p>
            <p>
              Beyond Cardiff, the South Wales Valleys corridor — Caerphilly CF83,
              Pontypridd CF37, Rhondda CF40/CF42, Aberdare CF44 and Merthyr CF47 —
              has an enormous stock of 1960s to 1980s local authority housing now in
              private ownership following Right to Buy, with fitted kitchens that
              are candidates for wrapping in large numbers. A kitchen wrapper operating
              from a Cardiff base with a properly ranked website targeting CF postcodes
              has access to a market that currently has no established, well-ranked
              local operator serving it.
            </p>
            <p>
              The critical gap is supply-side: there is currently no dominant,
              well-positioned kitchen wrapper ranking for Cardiff CF searches or South
              Wales kitchen wrapping queries. A trained wrapper who enters the Cardiff
              market with a WRPX-built website and 12 months of local SEO already
              running has a first-mover advantage that will not be available once the
              market matures.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Cardiff training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — accessible from Cardiff
                via the M4 east. Real problems, real conditions, from day one.
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
                How to survey a Cardiff kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take across South Wales.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Cardiff CF
                postcodes and South Wales locations so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting Cardiff and the wider South Wales
                area — so you rank in the markets that matter to your new business.
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
                person who trained you, wherever you are in Wales.
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
              These are the conditions you face on a real Cardiff kitchen — in a
              Victorian terrace in Roath CF24, a 1970s semi in Llanishen CF14, or
              a modern conversion flat in Cardiff Bay CF10. No workshop version of
              those problems prepares you for the actual job.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team. The problems you encounter
              during the 5 days are the problems you will face on your first solo
              Cardiff job. When you leave after a week, you have seen the full range
              of what real kitchen wrapping involves — and you have the answers, not
              just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cardiff now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Cardiff — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping as a trade has grown steadily in England — in London,
              the Midlands and the North, the market is becoming established and the
              number of trained operators is increasing. Wales is at an earlier stage.
              Cardiff is the largest urban market in Wales, but the city has no
              established, well-ranked local kitchen wrapper with a credible online
              presence targeting local homeowners.
            </p>
            <p>
              Cardiff is a growing city — one of the fastest-growing capitals in
              Europe by population, with significant new residential development
              across the Bay CF10, Pontprennau CF23 and northern suburbs. That growth
              adds volume to an already large housing stock of Victorian terraces,
              interwar semis and 1960s–80s estates where kitchen wrapping has strong
              demand. Cardiff homeowners looking to refresh a kitchen without the cost
              and disruption of a full refit are an active and growing market.
            </p>
            <p>
              The search market for kitchen wrapping in Cardiff is genuinely open.
              Get in trained, get ranked, and take that position before competition
              emerges. Tradespeople across Wales are beginning to discover kitchen
              wrapping as a viable trade — the right time to start is before they do.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cardiff training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-cardiff/" />
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
              Ready to build a kitchen wrapping business in Cardiff?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. Cardiff trainees typically
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
