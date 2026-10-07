import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Glasgow | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Glasgow. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 3 hours 30 minutes via the M74 and M6 south. Train on a real client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in. First kitchen wrapping training option specifically targeting Scotland.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-glasgow/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Glasgow | WRPX Live Job Training",
    description:
      "Glasgow kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Accessible from Glasgow via the M74 and M6 south to South Yorkshire.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-glasgow/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Glasgow — WRPX live-job training programme",
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
    { "@type": "City", name: "Glasgow" },
    { "@type": "City", name: "Paisley" },
    { "@type": "City", name: "East Kilbride" },
    { "@type": "City", name: "Hamilton" },
    { "@type": "City", name: "Motherwell" },
    { "@type": "State", name: "Greater Glasgow" },
    { "@type": "State", name: "Lanarkshire" },
    { "@type": "State", name: "Scotland" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Glasgow and the wider Central Belt via the M74 and M6 south to South Yorkshire. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Glasgow",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-glasgow/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire. From Glasgow, the route south is the M74, which connects directly to the M6 at Gretna/Carlisle, then south via the M6 to the M1, and from there into Sheffield and the South Yorkshire area. The total journey is approximately 230 miles and takes around 3 hours 30 minutes to 4 hours in off-peak conditions. WRPX training is a 5-day commitment — the practical approach for Glasgow trainees is to stay over in Sheffield for the working week rather than commuting daily. Good-value accommodation is readily available in Sheffield city centre, and a week of training accommodation is comfortably within the all-in training price.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Glasgow from WRPX kitchen wrapping training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glasgow to Sheffield is approximately 220 to 230 miles depending on the route and the exact training address in South Yorkshire. The M74 south from Glasgow crosses the Scottish border near Gretna Green, connects to the M6 south at Carlisle, and runs via Penrith, Shap summit, Tebay and Kendal before crossing into Lancashire. From Lancaster, continuing on the M6 south through Preston, Wigan and Warrington to the M1/M62 interchange, then M1 south into Sheffield — the full journey from Glasgow city centre G1 is approximately 3 hours 30 minutes in off-peak conditions. At that distance, the sensible approach for a 5-day training programme is to base yourself in Sheffield for the week and travel home on Friday evening.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glasgow and the wider Central Belt of Scotland represent a strong market for kitchen wrapping. Glasgow itself has a population of around 620,000 — the third largest city in the UK — and greater Glasgow extends to over 1.8 million across the Clyde Valley, including Paisley PA1/PA2, Rutherglen G73, East Kilbride G74/G75, Hamilton ML3, Motherwell ML1 and the wider Lanarkshire ML and North Lanarkshire postcodes. Glasgow's housing stock is characterised by a mix of tenement flats (many with fitted kitchens dating from the 1970s to 1990s refits), interwar semis, post-war council housing and newer suburban development across south Glasgow G41/G43/G44/G45, the West End G11/G12/G13, and the north and east of the city G21/G22/G31/G32/G33. Across all these housing types, there is large-scale demand for kitchen updating at a fraction of full replacement cost. Scotland as a whole is notably underserved by trained kitchen wrappers with a proper online presence — entering the Glasgow market with training, a website and local SEO in place ahead of growing competition is a genuine first-mover position.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work in Glasgow. The problems you encounter during training — adhesion on aged melamine, primer on bare MDF edges, cutting around appliances, finishing inside corners — are the problems you will face on your first solo job back in Glasgow. No workshop setting replicates that level of exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Glasgow and Central Belt postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in Glasgow — not just a technique and a certificate.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I stay in Sheffield during the training week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield city centre has a wide range of accommodation from budget hotels to short-stay serviced apartments. Areas close to the city centre — S1, S2 and S3 postcodes — are well supplied with affordable hotels within easy reach of most South Yorkshire training locations. Premier Inn, Travelodge and Ibis all have Sheffield city-centre and Sheffield Arena options. A typical week of accommodation at a budget hotel runs to £200 to £350 depending on the time of year — well within the overall training investment. WRPX will confirm the training location when your dates are booked, and can advise on the best area to stay based on where the live install is running that week.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingGlasgowPage() {
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
            <span className="text-foreground">Glasgow</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Glasgow &amp; Central Belt Scotland
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Glasgow
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — accessible from Glasgow via the M74 and M6 south. Five days on a real
            client kitchen with Connor&apos;s team: prep, application, pricing and
            finishing under live conditions. Leave with the skill, a brand, a website,
            12 months of SEO targeting your Glasgow and Central Belt areas, and an
            ongoing support line. {trainingProgram.priceDisplay} all-in. The first
            kitchen wrapping training programme specifically targeting Scotland.
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

      {/* Travel from Glasgow */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Glasgow
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Glasgow, the route south is straightforward:
              the M74 from the city connects to the A74(M) and then the M6 at
              Carlisle, running south through Cumbria, Lancashire and then onto the
              M1 south into South Yorkshire. There are no complex route changes —
              just the M74, M6 and M1.
            </p>
            <p>
              Glasgow city centre G1 to Sheffield S1 is approximately 230 miles.
              In off-peak conditions — leaving Glasgow before 6am or after 9am to
              avoid the M74 and M6 peaks — the drive takes around 3 hours 30 minutes
              to 4 hours. Glasgow trainees on the south side of the city (G41, G42,
              G43, G44, G45, G52, G53) are on the M74 inside 10 minutes. East
              Kilbride G74/G75, Rutherglen G73 and Hamilton ML3 are all M74-adjacent.
              Paisley PA1/PA2 and Renfrew PA4 join the M8 east and onto the M74
              at Cambuslang.
            </p>
            <p>
              For a 5-day training programme, the sensible approach from Glasgow is
              to stay over in Sheffield for the working week. Budget hotels and
              serviced apartments in Sheffield city centre S1 are plentiful and
              affordable — a working week of accommodation comfortably sits within
              the all-in training price. Making the drive once on Sunday evening and
              once on Friday afternoon, rather than commuting daily, keeps training
              focus where it belongs.
            </p>
            <p>
              WRPX will confirm the training address when your dates are booked —
              South Yorkshire locations are typically in Sheffield S, Rotherham S or
              the wider South Yorkshire area. We can advise on the best Sheffield
              accommodation options based on the specific training site.
            </p>
          </div>
        </div>
      </section>

      {/* Glasgow market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Glasgow — the Scotland opportunity
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Glasgow is the UK&apos;s third largest city with around 620,000 people
              in the city itself. Greater Glasgow — stretching across the Clyde Valley
              to include Paisley, East Kilbride, Hamilton, Motherwell and Clydebank
              — has a population of over 1.8 million. Scotland as a whole has 5.5 million
              people, almost all of whom live in central or southern Scotland within
              a reasonable distance of Glasgow.
            </p>
            <p>
              Glasgow&apos;s housing stock is particularly suited to kitchen wrapping
              demand. Victorian and Edwardian tenement flats in the West End G11/G12,
              Partick G11, Hyndland G12, Dennistoun G31 and the southside G41/G42/G43
              contain fitted kitchens that were typically installed or refitted between
              the 1970s and the 1990s. The door fronts and drawer faces on these
              kitchens are structurally sound but aesthetically dated — and with
              tenement flat layouts offering limited space for full kitchen
              replacement, wrapping is a natural fit.
            </p>
            <p>
              Suburban Glasgow adds a different buyer profile. Owner-occupied semis
              and detached properties in Bearsden G61, Milngavie G62, Newton Mearns
              G77, Clarkston G76, Giffnock G46 and Bishopbriggs G64 have homeowners
              actively improving interiors, where kitchen wrapping sits alongside
              other renovation choices as a high-value lower-disruption option.
            </p>
            <p>
              Critically, Scotland is currently the least competitive region in the
              UK for kitchen wrapping search. There is no established, well-ranked
              local kitchen wrapper with a proper web presence targeting Glasgow,
              Edinburgh or the Central Belt. A trained wrapper who enters the market
              with a WRPX-built website and 12 months of local SEO already underway
              has a clear first-mover advantage that will be harder to achieve once
              competition increases.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Glasgow training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — accessible from Glasgow
                via the M74 and M6 south. Real problems, real conditions, from day
                one. Not a workshop with practice panels.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how to
                apply it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Glasgow kitchen, price it for your skill level
                and quote with confidence — so you&apos;re not guessing on every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business
                from the first enquiry call you take in Glasgow or the Central Belt.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Glasgow G postcodes
                and Central Belt locations so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Glasgow and Scotland areas —
                so you rank in the markets that matter to your business from
                the day you get home.
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
                Call or message Connor when a job goes awkward. Not a generic
                help desk — direct line to the person who trained you, wherever
                you are in Scotland.
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
              Most kitchen wrapping training is delivered in a workshop or training
              bay on practice panels. You learn the basic motion of applying vinyl
              — but you never encounter the actual problems that arise on a real
              kitchen in a real house. Aged laminate that has lifted at the edge.
              A melamine door that has been resprayed and has unpredictable adhesion.
              A cornice that limits the angle of approach. An integrated appliance
              that cannot be removed.
            </p>
            <p>
              These are the problems that stop new wrappers cold on their first solo
              job in Partick, Bearsden or East Kilbride. Not a lack of technique
              — a lack of exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install
              from day one, working alongside Connor on a real client kitchen. The
              problems you solve during training are the problems you will face on
              your first job back in Glasgow. When you leave after 5 days, you have
              seen the full range of what a real kitchen install involves — and you
              have the solutions, not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* Why Scotland now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why Scotland — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping has established itself strongly in England over the
              last several years — in London, Birmingham and Manchester the market
              is maturing and competition among trained operators is growing.
              Scotland is at a much earlier stage. The search market for kitchen
              wrapping in Glasgow and Edinburgh is genuinely open: no established
              local operator ranking consistently, limited existing competition, and
              a large housing stock with exactly the profile kitchen wrapping serves
              best.
            </p>
            <p>
              Glasgow alone has enough housing volume — across its G postcodes and
              the surrounding Central Belt — to sustain multiple full-time kitchen
              wrappers. Right now there is not one well-positioned operator with
              a proper website and local SEO specifically targeting Glasgow kitchen
              wrapping. The first person in with the right skill, the right online
              presence and the right support network takes a position that is very
              difficult for later entrants to displace.
            </p>
            <p>
              That window will not stay open indefinitely. Tradespeople in Scotland
              are beginning to discover kitchen wrapping as a viable trade. The time
              to train, launch and get ranked is before the market builds — not
              after. If you are based in Glasgow or anywhere in central Scotland
              and are seriously considering this as a business, the opportunity is
              as clear as it is right now.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Glasgow training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-glasgow/" />
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
              Ready to build a kitchen wrapping business in Glasgow?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp to find out what&apos;s available. Training
              places open around live install dates — get in touch early and we&apos;ll
              confirm the next intake window. Glasgow trainees typically stay over in
              Sheffield for the week.
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
