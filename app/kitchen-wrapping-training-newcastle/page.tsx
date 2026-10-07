import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Newcastle | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Newcastle upon Tyne. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 1 hour 30 minutes via the A1(M). Real install training on an actual client kitchen, not a classroom. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-newcastle/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Newcastle | WRPX Live Job Training",
    description:
      "Newcastle kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 1 hour 30 minutes from Newcastle via the A1(M) south.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-newcastle/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Newcastle — WRPX live-job training programme",
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
    { "@type": "City", name: "Newcastle upon Tyne" },
    { "@type": "City", name: "Gateshead" },
    { "@type": "City", name: "Sunderland" },
    { "@type": "City", name: "Durham" },
    { "@type": "State", name: "Tyne and Wear" },
    { "@type": "State", name: "County Durham" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Newcastle and the wider North East via the A1(M) south. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Newcastle",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-newcastle/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 1 hour 30 minutes from Newcastle upon Tyne via the A1(M) south. The A1(M) runs directly from Gateshead — the main access road south from the North East — through County Durham, past Darlington and onto the A1/M18 interchange near Doncaster, then into the Sheffield and Rotherham area. The route is straightforward: one primary road, no complex motorway changes, and a well-lit, well-maintained dual carriageway through County Durham and North Yorkshire. Newcastle is further than our Midlands training locations but entirely practical for a 5-day commitment where the journey is made once each morning.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the drive from Newcastle to WRPX training take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 1 hour 30 to 1 hour 45 minutes from Newcastle city centre in off-peak conditions, depending on the South Yorkshire destination. The A1(M) from Gateshead to the A1/M18 interchange near Doncaster is the core of the route — from there it is a short run west to Sheffield or Rotherham on the M18 and M1. A 5:30am departure from Newcastle NE1 reaches South Yorkshire comfortably before 7:30am. Trainees from Gateshead NE8/NE9/NE10, Sunderland SR1–SR6, Washington NE37/NE38, County Durham DH1, Chester-le-Street DH3 and Darlington DL1 all have similar or shorter A1(M) access and can reach training in under 1 hour 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work. The problems you encounter — adhesion on aged laminate, primer on bare MDF edges, cutting around appliances, finishing difficult inside corners — are the problems you will face on your first solo job in Newcastle or Gateshead. No workshop setting replicates that exposure, which is why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Newcastle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newcastle and the wider Tyne and Wear area are a strong market for kitchen wrapping. The North East has a large proportion of older semi-detached and terraced housing — the NE postcodes across Byker NE6, Walker NE6, Fenham NE4, Elswick NE4, Scotswood NE15, Lemington NE15, Denton NE5, Kenton NE3 and the wider west and east Newcastle corridors contain housing stock with kitchens fitted in the 1980s and 1990s that are structurally sound but heavily dated. Suburban Newcastle — Gosforth NE3, Jesmond NE2, Heaton NE6, Longbenton NE12, Benton NE12, Wallsend NE28, North Shields NE29 — has a layer of owner-occupied properties where improving existing kitchens without a full replacement is a clear market. Gateshead NE8/NE9 and Team Valley NE11, plus the broader Sunderland SR postcode area, extend the territory substantially. In search terms, Newcastle kitchen wrapping and Tyne and Wear kitchen wrapping are both significantly underserved online — no well-ranked local operator is currently targeting these terms.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Newcastle area NE postcodes and Tyne and Wear locations, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries in the North East — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stay over in Sheffield for the training week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — staying over in Sheffield for some or all of the training week is an option many North East trainees consider. Sheffield has good-value accommodation close to the city centre, and the total cost of a few nights in a budget hotel is well within the all-in training price. For trainees who would rather not drive the A1(M) five mornings in a row, staying over Tuesday and Wednesday (when most training days are mid-week) while driving down Monday morning and home Thursday evening is a practical arrangement. WRPX is happy to advise on the schedule once your training dates are confirmed.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingNewcastlePage() {
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
            <span className="text-foreground">Newcastle</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Newcastle &amp; North East England
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Newcastle
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 1 hour 30 minutes from Newcastle via the A1(M) south. Five days
            on an actual client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under real conditions. Leave with the skill, a brand, a website,
            12 months of SEO targeting your Newcastle and Tyne and Wear areas, and a support
            line. {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Newcastle */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Newcastle
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Newcastle, the route is the A1(M) south — the
              main artery connecting the North East to the rest of England. Join at
              Gateshead, drive south through Chester-le-Street, Durham, Darlington and
              North Yorkshire, and connect onto the M18 or A1 south towards Rotherham
              and Sheffield. There are no complex junction sequences and no unfamiliar
              roads — just the A1(M) to South Yorkshire.
            </p>
            <p>
              The A1(M) from Gateshead to the Sheffield area is a well-maintained,
              well-lit dual carriageway the full length of the route. The stretch
              through County Durham — past Chester-le-Street DH3, Durham DH1 and
              Darlington DL1 — is the longest section, and in early-morning off-peak
              conditions it is clear and consistent.
            </p>
            <p>
              A 5:30am departure from Newcastle NE1 or Gateshead NE8 arrives in
              Sheffield or Rotherham before 7:30am in normal conditions — ahead of
              any morning site start. Trainees from County Durham, Sunderland or
              Washington who sit closer to the A1(M) can depart a little later.
            </p>
            <p>
              For trainees who would rather not drive the A1(M) five mornings in a row,
              staying over in Sheffield for mid-week nights is a practical option. Budget
              accommodation in Sheffield city centre is plentiful, and the total cost of
              two or three nights is well within the all-in training price. NEMS and
              National Express coaches also run the Newcastle–Sheffield route for trainees
              who prefer not to drive at all.
            </p>
          </div>
        </div>
      </section>

      {/* North East market */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Newcastle — the North East market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              The North East has a large and largely untapped market for kitchen wrapping.
              Newcastle upon Tyne and the wider Tyne and Wear conurbation contain a high
              proportion of semi-detached and terraced housing built in the post-war period
              and through the 1960s and 1970s. Properties in areas like Byker NE6, Walker
              NE6, Fenham NE4, Elswick NE4, Scotswood NE15, Lemington NE15, Denton Burn
              NE5 and Kenton NE3 hold fitted kitchens installed in the 1980s and 1990s
              that are structurally sound — but door fronts and drawer faces are dated,
              and full kitchen replacement is expensive.
            </p>
            <p>
              More affluent suburban Newcastle adds a different buyer: Gosforth NE3,
              Jesmond NE2, Heaton NE6, Longbenton NE12, Benton NE12, Wallsend NE28 and
              North Shields NE29 all have owner-occupied properties where homeowners are
              selectively improving interiors. Kitchen wrapping sits perfectly in this
              market — a premium result without the cost and disruption of full kitchen
              replacement.
            </p>
            <p>
              Gateshead NE8, NE9 and NE10, plus Sunderland SR1 through SR6, Washington
              NE37/NE38, South Shields NE33 and the wider County Durham DH postcode area
              — Houghton-le-Spring, Chester-le-Street, Stanley, Consett and Spennymoor —
              all extend the territory that a Newcastle-based kitchen wrapper can
              comfortably cover.
            </p>
            <p>
              In online search, the North East is currently the weakest-covered region
              for kitchen wrapping in the UK. There is no established local operator
              ranking consistently for &ldquo;kitchen wrapping Newcastle&rdquo; or
              &ldquo;kitchen wrapping Tyne and Wear&rdquo; — the search market is open.
              A trained wrapper with a well-optimised website and the right geographic
              coverage will find it significantly easier to rank here than in southern
              England cities where the market is more established.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Newcastle training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 1 hour 30 minutes
                from Newcastle via the A1(M). Real problems, real conditions, from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Prep, primers, sealants and tools
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products used every day — what to buy, where to get it, how to apply
                it so the job lasts and doesn&apos;t come back.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Measure and price coaching
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a Newcastle kitchen, price it for your skill level and quote
                confidently — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take in Newcastle or Gateshead.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Newcastle NE postcodes
                and Tyne and Wear locations so homeowners can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Newcastle and North East areas —
                so you rank in the markets that matter to your business.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Trade supplier introductions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The film brands, adhesion primers and tools that work — trade account
                introductions so you&apos;re buying at the right price from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Ongoing phone and WhatsApp support
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Call or message Connor when a job goes awkward. Not a generic help desk
                — direct line to the person who trained you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                WRPX Certificate of Completion
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on approval at the end of training — a WRPX completion document,
                not a government-accredited qualification.
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
              Most kitchen wrapping training is delivered in a workshop or training bay
              on practice panels. You learn the basic motion of applying vinyl — but
              you never encounter the actual problems that arise on a real kitchen in a
              real house. Aged laminate that has lifted at the edge and needs primer
              before film. A drawer front that was once repainted and has poor adhesion.
              A cornice above the doors that limits the angle of approach. An existing
              appliance that cannot be moved.
            </p>
            <p>
              These are the problems that stop new wrappers cold on their first solo job
              in Gosforth, Jesmond or Sunderland. Not a lack of technique — a lack of
              exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install
              from day one, working alongside Connor on a real client kitchen. The
              problems you solve during training are the problems you will face on your
              first job in Newcastle or the North East. When you leave after 5 days, you
              have seen the full range of what a real kitchen install involves — and you
              have the solutions, not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* Why North East now */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why the North East — and why now
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping as a trade has gained significant ground in central and
              southern England over the last few years — competition in cities like
              London, Birmingham and Manchester is growing as more people enter the
              market. The North East is a different story. The market is genuinely
              early-stage: few operators, limited online competition, and a large
              housing stock with exactly the kind of dated fitted kitchens that
              kitchen wrapping is built to refresh.
            </p>
            <p>
              The Tyne and Wear conurbation — Newcastle, Gateshead, Sunderland,
              South Shields, North Shields — has a combined population of over 1
              million people. County Durham adds a further 500,000. These are not
              small markets. And right now, the first well-trained, well-positioned
              kitchen wrapper in the North East has a significant first-mover
              advantage in search, in referral, and in building a client base before
              competition arrives.
            </p>
            <p>
              That window does not stay open indefinitely. Tradespeople in the North
              East are beginning to discover kitchen wrapping as a trade. The time
              to get trained, get ranked and get established is before the market
              matures — not after.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Newcastle training — common questions
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
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-newcastle/" />
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
              Ready to start from Newcastle?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Newcastle is just over an hour from WRPX training via the A1(M) south.
              Message Connor on WhatsApp to find out what&apos;s available — places fill
              around live install dates, so the sooner you get in touch the better.
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
