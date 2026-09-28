import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Bristol | Live Job Training — WRPX",
  description:
    "Kitchen wrapping training accessible from Bristol. WRPX runs 5-day live kitchen installs in South Yorkshire — approximately 2 hours via the M4 east and M1 north. Not a classroom course: real install training on an actual client kitchen. Leave with branding, a website, 12 months SEO and ongoing support. £1,699 all-in.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-bristol/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Bristol | WRPX Live Job Training",
    description:
      "Bristol kitchen wrapping training on real live installs with WRPX. Full business setup included — branding, website, 12 months SEO and trade support. Approximately 2 hours from Bristol via the M4 east.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-bristol/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training Bristol — WRPX live-job training programme",
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
    { "@type": "City", name: "Bristol" },
    { "@type": "City", name: "Bath" },
    { "@type": "State", name: "South West England" },
  ],
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — accessible from Bristol via the M4 east to the M1 north. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Bristol",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-bristol/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WRPX kitchen wrapping training available to people based in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Training takes place on live WRPX kitchen wrapping installs in South Yorkshire, approximately 2 hours from Bristol via the M4 east to the M1 north. The M4 runs east from Bristol through Bath, Chippenham, Swindon, Reading and London before joining the M25 and M1 approach at Luton. Taking the M4 to junction 15 (Swindon) then the A419 and A417 north to the M5 at Gloucester, then the M50 east and A46 to the M1 via Nottingham is an alternative route that avoids London. From the M1 at Sheffield or Rotherham, the South Yorkshire corridor is reached in under 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the drive from Bristol to the WRPX training base take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 2 hours to 2 hours 30 minutes from Bristol city centre in off-peak conditions. The fastest route is M4 east from junction 19 (Bristol) to junction 15 (Swindon east), then the A419 north to Cirencester, A417 to Gloucester, M5 north to junction 11A, then M42 east, M6 north, M1 north to Sheffield. Some Bristol trainees prefer the direct M4 east to M25 to M1 north approach — this is slightly longer but avoids the Swindon/Gloucester leg and is a simpler drive. An early morning 6am departure from Bristol reaches South Yorkshire by around 8:15am, well ahead of any site start. Trainees from South Bristol BS3/BS4, Clifton BS8, Redland BS6, Fishponds BS16 or Brislington BS4 are all within easy reach of the M32 or M4 junction 19 approach.",
      },
    },
    {
      "@type": "Question",
      name: "Is this classroom training or hands-on training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hands-on from day one. You join Connor and the WRPX team on a real kitchen install in a real client kitchen — typically in Sheffield or South Yorkshire. There is no classroom, no training bay, no mock kitchens. Five days on a live job is what prepares you for actual work. The problems you encounter — adhesion on aged laminate, primer on bare MDF edges, cutting around appliances, finishing awkward angles — are the problems you will face on your first solo job in Bristol. No workshop setting can replicate that preparation, which is why WRPX structures training this way.",
      },
    },
    {
      "@type": "Question",
      name: "Is kitchen wrapping a viable business in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bristol is an excellent market for kitchen wrapping. The city has a large and varied housing stock — Victorian and Edwardian terraces dominate Clifton BS8, Redland BS6, Bedminster BS3, Southville BS3, Easton BS5, St Werburghs BS2 and Fishponds BS16, while Bishopston BS7, Henleaze BS9 and Westbury-on-Trym BS9 have inter-war and post-war semi-detached housing. Bristol also has significant owner-occupier rates across these areas — people who choose selective renovation over moving. The city has a strong renovation culture, a high proportion of social media–savvy homeowners researching alternatives to replacement kitchens, and limited kitchen wrapping competition in online search. Trainees returning to Bristol after WRPX training are entering a large, undersupplied market. Bath BA1/BA2, Weston-super-Mare BS22/BS23, Clevedon BS21, Portishead BS20 and the wider South West extend the accessible working radius significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of the 5 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You leave with the wrap skill, branding help (name and logo direction), trade supplier introductions and account setup support, a done-for-you website with live domain, 12 months of local SEO updates targeting your Bristol areas and postcodes, an ongoing phone and WhatsApp support line, and a WRPX Certificate of Completion (if approved). The package is built so you leave with a real business ready to take enquiries — not just a technique.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a place from Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call. Places open around live WRPX kitchen installs — so availability depends on the install schedule. If you are based in Bristol or the wider South West and want to start a kitchen wrapping business, get in touch and we will let you know the next available intake. We do not hold long waitlists — when a place is available and you are ready, we move quickly.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

export default function KitchenWrappingTrainingBristolPage() {
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
            <span className="text-foreground">Bristol</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · Bristol &amp; South West
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training — Bristol
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX runs kitchen wrapping training on real live installs in South Yorkshire
            — approximately 2 hours from Bristol via the M4 east and M1 north. Five days
            on an actual client kitchen with Connor&apos;s team: prep, application, pricing
            and finishing under real conditions. Leave with the skill, a brand, a website,
            12 months of SEO targeting your Bristol areas, and a support line.{" "}
            {trainingProgram.priceDisplay} all-in.
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

      {/* Travel from Bristol */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Getting to training from Bristol
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Training takes place on live WRPX kitchen wrapping installs in Sheffield
              and South Yorkshire. From Bristol, the most straightforward route is the
              M4 east from junction 19 to the M25, then north on the M1 to Sheffield.
              This is the simplest motorway route — familiar to anyone who has driven from
              Bristol to the north of England before.
            </p>
            <p>
              A faster alternative for some Bristol trainees is the M4 east to junction
              15 (Swindon east), then the A419 north toward Cirencester and the A417
              through the Cotswolds to Gloucester, M5 north to junction 11A and then the
              M42 east, M6 north, and M1 north to Sheffield. This route avoids the
              M25 entirely — on a weekday morning this can be noticeably quicker if the
              M25 is congested, though it adds complexity. Most Bristol trainees find the
              direct M4/M25/M1 route easier to navigate.
            </p>
            <p>
              From the M1, junction 31 (Rotherham) or junction 33/34 (Sheffield) puts
              you in the South Yorkshire corridor. A 6am departure from Bristol BS1 reaches
              Sheffield before 8:15am — comfortably ahead of a morning site start. Trainees
              in South Bristol BS3/BS4, Horfield BS7 or Kingswood BS15 are within 15 minutes
              of the M4/M32 junction and can adjust their departure time accordingly.
            </p>
            <p>
              By train, Bristol Temple Meads has direct services to Sheffield via Birmingham
              New Street — journey times are approximately 2 hours 45 minutes to 3 hours
              depending on the service. For trainees who prefer not to drive the M4 and M1
              five mornings in a row, staying over for part or all of the training week in
              Sheffield is a practical option. Budget accommodation near Sheffield city
              centre is plentiful and the total cost remains well within the all-in price.
            </p>
          </div>
        </div>
      </section>

      {/* Bristol market opportunity */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping in Bristol — the market
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Bristol is one of the strongest residential renovation markets in England.
              The city has a dense stock of Victorian and Edwardian terraced housing
              across inner areas — Clifton BS8, Redland BS6, Cotham BS6, Bedminster BS3,
              Southville BS3, Windmill Hill BS3, Easton BS5, St Werburghs BS2 and
              Bishopston BS7 all have streets of period terrace properties with galley
              or semi-open-plan kitchens that were fitted with laminate-door units at
              various points from the 1980s through to the 2000s.
            </p>
            <p>
              These kitchens are structurally sound but visually dated — exactly the
              stock that kitchen wrapping transforms. The original carcasses are often
              well-built Howdens or equivalent trade kitchens; the doors are the problem.
              Wrapping replaces the appearance without touching the structure, at a
              fraction of the cost of a new kitchen installation.
            </p>
            <p>
              Bristol&apos;s housing culture accelerates demand further. The city has
              a high proportion of owner-occupiers in inner areas who are renovation-aware
              and actively researching cost-effective alternatives to full kitchen
              replacement. Social media renovation content — Instagram, TikTok, YouTube —
              has driven significant awareness of kitchen wrapping among Bristol homeowners
              in the 28 to 45 demographic who own their terrace and want to refresh it
              without the disruption and cost of a full kitchen fit-out.
            </p>
            <p>
              The wider South West market extends the accessible territory significantly.
              Bath BA1 and BA2 — a high-income city with dense period housing — is 12
              miles from Bristol city centre. Weston-super-Mare BS22/BS23, Clevedon BS21,
              Portishead BS20, Nailsea BS48, Keynsham BS31 and the North Somerset coast
              all sit within a 30 to 45-minute drive. A Bristol-based wrapper can cover
              a substantial regional market.
            </p>
            <p>
              In online search, Bristol kitchen wrapping is an underserved category.
              Most operators listed for the area are aggregator listings without genuine
              local web presence or local SEO targeting Bristol postcodes. A trained
              wrapper with a site optimised for BS postcodes, Bristol suburb names and
              local intent terms is entering an undersupplied market.
            </p>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} Bristol training includes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                5 days on a live kitchen install
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire — approximately 2 hours from
                Bristol via the M4 and M1. Real problems, real conditions, from day one.
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
                How to survey a Bristol kitchen, price it for your skill level and quote
                confidently — so you&apos;re not guessing every job.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Brand name and logo direction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional brand identity so you look like a real business from
                the first enquiry call you take in Bristol.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                Done-for-you website + live domain
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A branded site ready to take enquiries — targeting Bristol postcodes
                so homeowners in BS1 through BS16 and beyond can find you.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">
                12 months of local SEO
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ongoing SEO updates targeting your Bristol areas so you rank in the
                markets that matter to your business — not just generic terms.
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
              in Clifton, Bedminster or Redland. Not a lack of technique — a lack of
              exposure to real conditions.
            </p>
            <p>
              WRPX training is structured differently. You join a live kitchen install
              from day one, working alongside Connor on a real client kitchen. The
              problems you solve during training are the problems you will face on your
              first job in Bristol. When you leave after 5 days, you have seen the full
              range of what a real kitchen install involves — and you have the solutions,
              not just the technique.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Bristol training — common questions
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
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-bristol/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to start from Bristol?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Bristol is two hours from WRPX training via the M4 and M1. Message Connor
              on WhatsApp to find out what&apos;s available — places fill around live
              install dates, so the sooner you get in touch the better.
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
