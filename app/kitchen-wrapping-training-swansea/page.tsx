import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Swansea | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Swansea and West Wales. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 3 hours via the M4 east. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training specifically targeting Swansea and SA postcodes.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-swansea/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Swansea | WRPX Live Job Training",
    description:
      "Swansea kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Swansea via the M4 east to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-swansea/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Swansea — WRPX live-job training programme",
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
    { "@type": "City", name: "Swansea" },
    { "@type": "City", name: "Neath" },
    { "@type": "City", name: "Port Talbot" },
    { "@type": "City", name: "Llanelli" },
    { "@type": "State", name: "West Wales" },
    { "@type": "State", name: "Wales" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Swansea and West Wales via the M4 east to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Swansea",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-swansea/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Swansea, the standard route is east on the M4 from junction 47 at Penllergaer, running through Port Talbot, Bridgend, and Cardiff before crossing the Severn into England near Chepstow via the Prince of Wales Bridge. From there, continue east on the M4 towards Bristol, then north on the M5 to the M42 and M1 northbound to Sheffield. Swansea SA1 to Sheffield S1 is approximately 200 miles and takes around 3 hours to 3 hours 30 minutes in off-peak conditions. Most Swansea-based trainees find it practical to stay over in Sheffield for the training week rather than commuting daily.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Swansea from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swansea to Sheffield is approximately 195 to 210 miles depending on the exact starting point and South Yorkshire training address. The standard route is M4 east from Swansea junction 47 (Penllergaer) running east through Neath SA10, Port Talbot SA12, Bridgend CF31, and Cardiff before crossing the Severn at the Prince of Wales Bridge (M4 Severn Crossing). From the Severn, continue east on the M4 towards Bristol and then north on the M5 to the M42 east and M1 north to Sheffield. Trainees in Gorseinon SA4, Morriston SA6, Llansamlet SA7 or the Swansea Valley SA8 area can join the M4 at multiple junctions. The drive from Swansea city centre SA1 to South Yorkshire is typically 3 to 3 hours 30 minutes in normal traffic conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swansea and the wider West Wales area represent a strong and largely untapped market for kitchen wrapping. Swansea is Wales&apos; second city with a population of around 300,000 within the city boundary. The wider West Wales catchment — Neath SA10, Port Talbot SA12, Llanelli SA14/SA15, Gorseinon SA4, the Swansea Valley SA8 and SA9, and the Gower SA3 coastal strip — extends the accessible market for a well-positioned wrapper to well over 500,000 people. Swansea&apos;s housing stock is varied and well-suited to kitchen wrapping: Victorian and Edwardian terraces in Uplands SA2, Brynmill SA2 and Sandfields SA1, 1960s to 1980s council estates in Morriston SA6, Townhill SA1, Portmead SA5, Clase SA6 and Penlan SA5, and modern marina and waterfront apartments in the SA1 dock regeneration area. Across all these housing types, fitted kitchens from the 1990s and 2000s are strong candidates for wrapping. The search market for kitchen wrapping in Swansea is currently wide open with no established, well-ranked local operator.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job prepares you for the actual conditions you will face in Swansea. The problems encountered during training — adhesion on aged melamine, primers on bare MDF edges, cutting around integrated appliances, finishing inside corner joins — are the exact problems you will encounter on real Swansea kitchen jobs. No workshop setting replicates that level of practical exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Swansea and West Wales postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Swansea — not just a technique and a piece of paper.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I stay in Sheffield during the training week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield city centre has a strong range of accommodation from budget hotels to short-stay serviced apartments. The S1, S2 and S3 postcodes are well-supplied with affordable options. Premier Inn, Travelodge and Ibis all have Sheffield city-centre properties. A typical working week of accommodation at a budget Sheffield hotel runs to around £200 to £350 depending on the time of year — well within the overall training investment. WRPX will confirm the training address when your dates are confirmed and can advise on the best accommodation options based on the live install location that week. Most Swansea trainees travel up on Sunday and return on Friday.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingSwanseaPage() {
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
            <span className="text-foreground">Swansea</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Swansea &amp; West Wales
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Swansea
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Swansea via the M4 east. Five days on a real client kitchen
            with Connor&apos;s team: prep, application, pricing and finishing under live
            conditions. Leave with the skill, a brand, a website, 12 months of SEO
            targeting your Swansea and West Wales areas, and an ongoing support line.{" "}
            {trainingProgram.priceDisplay} all-in. The first kitchen wrapping training
            programme specifically targeting Swansea and SA postcodes.
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

      {/* Travel from Swansea */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Swansea
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Swansea, the standard route is east on the M4
              from junction 47 at Penllergaer — the main motorway access point for
              Swansea city and the surrounding SA postcode area. The M4 runs east
              through Neath SA10 and Port Talbot SA12, then through Bridgend CF31 and
              Cardiff before crossing the Severn into England near Chepstow via the
              Prince of Wales Bridge.
            </p>
            <p>
              From the Severn Bridge, continue east on the M4 towards Bristol, then
              north on the M5 at junction 20. The M5 north connects to the M42 east
              near Bromsgrove, which feeds into the M1 north towards Sheffield.
              Alternatively, continuing east on the M4 past Bristol to the A419 north
              connects to the same M5 corridor. Swansea SA1 to Sheffield S1 is
              approximately 200 miles and takes around 3 to 3 hours 30 minutes in
              off-peak conditions, or slightly longer during morning and evening peaks.
            </p>
            <p>
              For a 5-day training programme, most Swansea-based trainees find it
              practical to stay over in Sheffield for the working week. Budget hotels
              in Sheffield city centre S1 are plentiful — a working week of
              accommodation runs to around £200 to £350, well within the overall
              training cost. Travelling up on Sunday evening and returning on Friday
              afternoon keeps the training week clean and avoids daily fatigue from
              a 3-hour commute each way.
            </p>
            <p>
              Trainees from Gorseinon SA4, Morriston SA6, Llansamlet SA7, Neath SA10
              or Llanelli SA14/SA15 can join the M4 east at multiple junctions across
              the West Glamorgan and Carmarthenshire catchment. WRPX will confirm the
              training address when your dates are booked — locations are typically in
              Sheffield S, Rotherham S60 or the wider South Yorkshire area.
            </p>
          </div>
        </div>
      </section>

      {/* Swansea market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Swansea — the West Wales opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Swansea is Wales&apos; second city, with a population of around 300,000
              within the city boundary. The wider West Wales catchment — Neath SA10,
              Port Talbot SA12, Llanelli SA14/SA15, Gorseinon SA4, Pontardawe SA8,
              Ystradgynlais SA9 and the Gower Peninsula SA3 — extends the accessible
              market for a well-positioned kitchen wrapper to well over 500,000
              households.
            </p>
            <p>
              Swansea&apos;s housing stock covers a wide range of types and eras.
              Victorian and Edwardian terraces in Uplands SA2, Brynmill SA2 and
              Sandfields SA1 carry fitted kitchens installed from the 1980s through
              to the 2000s — now at the age where owners are weighing up whether to
              refit or refresh. The interwar and 1950s suburban belt stretches across
              Sketty SA2, Killay SA2 and West Cross SA3, with similar kitchen profiles.
            </p>
            <p>
              The 1960s to 1980s council estate stock across Morriston SA6, Townhill
              SA1, Portmead SA5, Clase SA6, Penlan SA5 and Blaenymaes SA5 represents
              substantial volume — a mix of still-social-rented and Right to Buy
              private ownership where fitted kitchens are well into their second or
              third decade. The SA1 dock regeneration area brings modern waterfront
              apartments alongside older terracing close to Swansea Bay, adding
              further diversity to the local kitchen wrapping market.
            </p>
            <p>
              Beyond Swansea city, the Neath SA10 and Port Talbot SA12 valleys have
              substantial 1960s to 1980s housing stock in private ownership following
              Right to Buy — a market almost identical in kitchen wrapping potential to
              the South Wales Valleys corridor east of Cardiff. A kitchen wrapper
              operating from a Swansea base with a properly ranked website targeting SA
              postcodes has access to a market that currently has no established,
              well-ranked local operator.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Swansea training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — accessible from Swansea
                via the M4 east. Real problems, real conditions, from day one.
                Not a workshop with practice panels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how
                to apply it so the job lasts and doesn&apos;t come back to haunt you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Swansea kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take across West Wales.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Swansea SA
                postcodes and West Wales locations so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting Swansea and the wider West Wales
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
                Call or message Connor when a job goes awkward. Direct line to
                the person who trained you, wherever you are in Wales.
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
              These are the conditions you face on a real Swansea kitchen — in a
              Victorian terrace in Uplands SA2, a 1970s semi in Sketty SA2, or a
              1980s council house in Morriston SA6. No workshop version of those
              problems prepares you for the actual job.
            </p>
            <p>
              WRPX training is different. You are on a live install from day one —
              a real client kitchen with Connor&apos;s team. The problems you encounter
              during the 5 days are the problems you will face on your first solo
              Swansea job. When you leave after a week, you have seen the full range
              of what real kitchen wrapping involves — and you have the answers, not
              just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* Why Swansea now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Swansea — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping as a trade has grown steadily in England — in London,
              the Midlands and the North, the market is becoming established and the
              number of trained operators is increasing. Wales is at an earlier stage
              than England across the board, and Swansea specifically has no
              established, well-ranked local kitchen wrapper with a credible online
              presence targeting SA postcodes.
            </p>
            <p>
              Swansea is a growing city — the Bay Campus development at SA1 has
              brought Swansea University&apos;s science and engineering departments to
              the waterfront, attracting investment and development across the
              eastern edge of the city. That growth adds demand from new residents
              to an already large housing stock of Victorian terraces, interwar semis
              and 1960s&ndash;80s estates where kitchen wrapping has strong commercial
              potential.
            </p>
            <p>
              Swansea homeowners looking to refresh a fitted kitchen without the
              cost and disruption of a full refit are an active and growing market.
              The search market for kitchen wrapping in Swansea is genuinely open.
              Get in trained, get ranked, and take that position before competition
              arrives. Tradespeople across Wales are beginning to discover kitchen
              wrapping as a viable trade — the right time to start is before they do.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Swansea training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-swansea/" />
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
              Ready to build a kitchen wrapping business in Swansea?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to ask about the next available intake.
              Training places open around live install dates — get in touch early
              and we&apos;ll confirm the next window. Swansea trainees typically
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
