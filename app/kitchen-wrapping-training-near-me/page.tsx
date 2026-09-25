import type { Metadata } from "next";
import Link from "next/link";
import { trainingProgram } from "@/lib/training-program";
import { PricingCallout } from "@/components/training/PricingCallout";
import { TrainingRelatedLinks } from "@/components/training/TrainingRelatedLinks";
import { TrainingHubCta } from "@/components/training/TrainingHubCta";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Training Near Me | UK Live-Job Training — WRPX",
  description:
    "Looking for kitchen wrapping training near you? WRPX runs 5-day live kitchen wrap installs in South Yorkshire — reachable from most UK cities within 2–3 hours. Not a classroom course: real job training, full business setup included. £1,699 all-in. Find your nearest start point.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/kitchen-wrapping-training-near-me/",
  },
  openGraph: {
    title: "Kitchen Wrapping Training Near Me | UK Live-Job Training — WRPX",
    description:
      "WRPX kitchen wrapping training in South Yorkshire — reachable from across the UK. Real kitchen install, full business setup. Find out how far you are and what to expect.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-training-near-me/",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping training near me — WRPX UK live-job training programme",
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
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "5-day kitchen wrapping training on a real live install with WRPX — based in South Yorkshire, accessible from most UK cities within 2–3 hours. Includes prep, primers, sealants, application, measure and price coaching, branding help, website + live domain, 12 months local SEO and ongoing phone/WhatsApp support. £1,699 all-in.",
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
      name: "Near Me",
      item: "https://www.wrpx.co.uk/kitchen-wrapping-training-near-me/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does WRPX kitchen wrapping training take place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Training takes place on live WRPX kitchen wrapping installs in South Yorkshire — the Sheffield, Rotherham, Doncaster and Barnsley area. This is where our customer base is and where we carry out real kitchen wrapping jobs every week. You join Connor and the team on an actual client kitchen, not a training mock-up. There is no second site, no remote training option and no classroom — it is always a live job in South Yorkshire.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX training from the Midlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From the East Midlands — Nottingham, Derby, Leicester, Loughborough — training in South Yorkshire is typically 1 hour to 1 hour 20 minutes via the M1. From Birmingham, the journey via the M6 to M1 or via the A38/M1 north is approximately 1 hour 30 minutes to 1 hour 45 minutes in clear traffic. Coventry is similar at around 1 hour 40 minutes via the M6 north and M1. The Midlands is an easy daily commute to South Yorkshire, and many trainees from the Midlands choose to drive up and back each day rather than stay over.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX training from the North West?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manchester is approximately 45 minutes to 1 hour from South Yorkshire via the M67/M1 or the M62 east. Preston and Blackburn are around 1 hour 15 to 1 hour 30 minutes via the M61/M62. Liverpool is approximately 1 hour 30 minutes via the M62. Bolton, Bury and Rochdale are typically under 1 hour. Trainees from the North West generally drive up and back daily — the distance is short enough that staying over is not necessary for most. Bolton and Manchester trainees in particular often describe the run as an easy commute.",
      },
    },
    {
      "@type": "Question",
      name: "How far is WRPX training from Yorkshire and the North East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leeds is approximately 30 minutes from South Yorkshire via the M1. Bradford is around 35 minutes, Huddersfield is under 20 minutes, and Halifax is around 30 minutes. York is typically 40 minutes via the A64 or M18. Hull is approximately 1 hour 15 minutes via the M18 east. From the North East — Newcastle, Sunderland, Middlesbrough, Darlington — the A1(M) south into South Yorkshire takes 1 hour 30 to 2 hours depending on starting point. Trainees from Leeds and West Yorkshire routinely drive down each day with no difficulty.",
      },
    },
    {
      "@type": "Question",
      name: "Can I travel to WRPX training by train?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sheffield station is well connected. Direct trains from London St Pancras to Sheffield take approximately 2 hours 5 minutes on East Midlands Railway. From Leeds to Sheffield is around 50 minutes. From Manchester Piccadilly to Sheffield is approximately 50 to 60 minutes on Northern or TransPennine Express. From Nottingham to Sheffield via the Robin Hood Line is around 1 hour. Birmingham New Street to Sheffield via the Cross-Country route is typically 1 hour 15 to 1 hour 30 minutes. If you are travelling from further afield and staying in Sheffield for the training week, the city centre has strong budget hotel options typically from £50 to £70 per night midweek.",
      },
    },
    {
      "@type": "Question",
      name: "Is there anywhere to stay near the WRPX training base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sheffield city centre has a wide range of accommodation from budget hotels to serviced apartments. Most trainees who are staying for a full week find that midweek rooms in Sheffield cost £50 to £70 per night — a relatively modest overhead on top of the training investment. Travelodge, Premier Inn and ibis have central Sheffield properties within walking distance or a short taxi ride of major transport links. For trainees driving from further afield — London, Bristol, Liverpool, Newcastle — staying in Sheffield for the 5-day training week removes all daily commute pressure and is generally the recommended approach.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find out if I can reach WRPX training from where I live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Connor on WhatsApp or call — give him your nearest city or postcode and he will tell you the honest travel time and whether daily driving or staying over in Sheffield makes more sense. We have had trainees travel from as far as London, Bristol, Belfast (by flight) and Edinburgh — the programme works at any distance as long as you are committed to being on site each day. If you are within 2 to 3 hours by road or rail, daily travel is practical. Beyond that, staying in Sheffield for the week is the cleaner option.",
      },
    },
  ],
};

const faqItems = faqSchema.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

const locationLinks = [
  { href: "/kitchen-wrapping-training-sheffield/", city: "Sheffield", time: "On site — South Yorkshire" },
  { href: "/kitchen-wrapping-training-leeds/", city: "Leeds", time: "~30 min via M1" },
  { href: "/kitchen-wrapping-training-manchester/", city: "Manchester", time: "~50 min via M67/M1" },
  { href: "/kitchen-wrapping-training-birmingham/", city: "Birmingham", time: "~1hr 40 min via M6/M1" },
  { href: "/kitchen-wrapping-training-nottingham/", city: "Nottingham", time: "~50 min via M1" },
  { href: "/kitchen-wrapping-training-coventry/", city: "Coventry", time: "~1hr 40 min via M6/M1" },
  { href: "/kitchen-wrapping-training-bradford/", city: "Bradford", time: "~35 min via M62" },
  { href: "/kitchen-wrapping-training-derby/", city: "Derby", time: "~40 min via M1" },
  { href: "/kitchen-wrapping-training-leicester/", city: "Leicester", time: "~1hr 20 min via M1" },
  { href: "/kitchen-wrapping-training-wolverhampton/", city: "Wolverhampton", time: "~1hr 30 min via M6/M1" },
  { href: "/kitchen-wrapping-training-london/", city: "London", time: "~2hr 30 min via M1 or 2hr by train" },
];

export default function KitchenWrappingTrainingNearMePage() {
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
            <span className="text-foreground">Near Me</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Kitchen Wrapping Training · UK Live-Job
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Kitchen wrapping training near me — UK
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            WRPX kitchen wrapping training takes place on real live installs in South
            Yorkshire. From most UK cities, that is 30 minutes to 2 hours 30 minutes
            by road — and 2 hours 5 minutes by direct train from London St Pancras.
            Not a classroom. A real client kitchen, real conditions, five days that
            prepare you to go straight into work. {trainingProgram.priceDisplay} all-in,
            full business setup included.
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

      {/* Where training happens */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Where does kitchen wrapping training happen?
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              WRPX training happens on live kitchen wrapping installs in South Yorkshire
              — the Sheffield, Rotherham, Doncaster and Barnsley zone. This is where
              Connor and the WRPX team carry out real kitchen wrap jobs every week. You
              join that team on a real client kitchen and work through the full job from
              day one — prep, primers, sealants, cutting, application, finishing — under
              genuine working conditions.
            </p>
            <p>
              There is no classroom component, no training bay and no mock kitchen. The
              preparation you get from five days on a live install is not replicable in
              a controlled environment — the adhesion issues on aged laminate, the primer
              work on bare MDF edges, the cutting around existing appliances and cornices,
              the finishing in awkward corners — those are exactly the problems you will
              face on your first solo job. South Yorkshire is where WRPX works, so that
              is where training happens.
            </p>
            <p>
              South Yorkshire sits in the middle of England with the M1 running through
              it north to south and the M62 running east to west. Most of the UK&apos;s
              major population centres are within a two-hour drive — and several of the
              largest are under one hour. If you are asking &ldquo;is there kitchen wrapping
              training near me?&rdquo; — the honest answer for most of England is: South
              Yorkshire is closer than you think.
            </p>
          </div>
        </div>
      </section>

      {/* Travel times by region */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            How far is WRPX from you?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Yorkshire &amp; Humber</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">Leeds:</strong> ~30 min via M1</li>
                <li><strong className="text-foreground">Bradford:</strong> ~35 min via M62</li>
                <li><strong className="text-foreground">Huddersfield:</strong> ~20 min via M1</li>
                <li><strong className="text-foreground">Halifax:</strong> ~30 min via M62</li>
                <li><strong className="text-foreground">York:</strong> ~40 min via A64</li>
                <li><strong className="text-foreground">Hull:</strong> ~1hr 15 min via M18</li>
              </ul>
              <Link href="/kitchen-wrapping-training-leeds/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Leeds training details →
              </Link>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">North West</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">Manchester:</strong> ~50 min via M67/M1</li>
                <li><strong className="text-foreground">Bolton:</strong> ~50 min via M61/M62</li>
                <li><strong className="text-foreground">Wigan:</strong> ~55 min via M62</li>
                <li><strong className="text-foreground">Preston:</strong> ~1hr 20 min via M61/M62</li>
                <li><strong className="text-foreground">Liverpool:</strong> ~1hr 30 min via M62</li>
                <li><strong className="text-foreground">Blackpool:</strong> ~1hr 30 min via M55/M62</li>
              </ul>
              <Link href="/kitchen-wrapping-training-manchester/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Manchester training details →
              </Link>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">East Midlands</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">Nottingham:</strong> ~50 min via M1</li>
                <li><strong className="text-foreground">Derby:</strong> ~40 min via M1</li>
                <li><strong className="text-foreground">Leicester:</strong> ~1hr 20 min via M1</li>
                <li><strong className="text-foreground">Loughborough:</strong> ~1hr 15 min via M1</li>
                <li><strong className="text-foreground">Lincoln:</strong> ~1hr via A57</li>
                <li><strong className="text-foreground">Northampton:</strong> ~1hr 30 min via M1</li>
              </ul>
              <Link href="/kitchen-wrapping-training-nottingham/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Nottingham training details →
              </Link>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">West Midlands</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">Birmingham:</strong> ~1hr 40 min via M6/M1</li>
                <li><strong className="text-foreground">Wolverhampton:</strong> ~1hr 30 min via M6/M1</li>
                <li><strong className="text-foreground">Coventry:</strong> ~1hr 40 min via M6/M1</li>
                <li><strong className="text-foreground">Walsall:</strong> ~1hr 35 min via M6/M1</li>
                <li><strong className="text-foreground">Stoke-on-Trent:</strong> ~1hr via A50/M1</li>
                <li><strong className="text-foreground">Shrewsbury:</strong> ~2hr via M54/M6/M1</li>
              </ul>
              <Link href="/kitchen-wrapping-training-birmingham/" className="mt-5 inline-block text-sm text-accent hover:underline">
                Birmingham training details →
              </Link>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">North East</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">Newcastle:</strong> ~2hr via A1(M)</li>
                <li><strong className="text-foreground">Sunderland:</strong> ~2hr via A1(M)</li>
                <li><strong className="text-foreground">Middlesbrough:</strong> ~1hr 30 min via A19</li>
                <li><strong className="text-foreground">Darlington:</strong> ~1hr 15 min via A1(M)</li>
                <li><strong className="text-foreground">Durham:</strong> ~1hr 40 min via A1(M)</li>
                <li><strong className="text-foreground">Hartlepool:</strong> ~1hr 30 min via A19</li>
              </ul>
              <p className="mt-5 text-sm text-accent">North East trainees typically stay in Sheffield for the week</p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">South &amp; London</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong className="text-foreground">London:</strong> ~2hr 30 min via M1 or 2hr 5min by train</li>
                <li><strong className="text-foreground">Milton Keynes:</strong> ~1hr 20 min via M1</li>
                <li><strong className="text-foreground">Luton:</strong> ~1hr 30 min via M1</li>
                <li><strong className="text-foreground">Oxford:</strong> ~2hr via M40/M1</li>
                <li><strong className="text-foreground">Bristol:</strong> ~2hr 30 min via M5/M6/M1</li>
              </ul>
              <Link href="/kitchen-wrapping-training-london/" className="mt-5 inline-block text-sm text-accent hover:underline">
                London training details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* By city — nearest training page links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Training information by nearest city
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            If your nearest major city is listed below, click through to the relevant
            page — each one covers travel times from your area, what to expect from
            the training week, and the market opportunity for kitchen wrapping in
            your location.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locationLinks.map(({ href, city, time }) => (
              <Link
                key={href}
                href={href}
                className="card-float p-5 hover:border-accent/60 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{city}</h3>
                <p className="mt-1 text-sm text-muted">{time}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily commute vs stay over */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Daily commute or stay in Sheffield for the week?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-float p-7">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Drive up and back daily</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Practical if you are within approximately 90 minutes — Yorkshire,
                Lancashire, the East Midlands, North East. A long day, but many
                trainees from Leeds, Manchester, Nottingham and Derby make this
                work comfortably. You avoid accommodation cost and sleep in your
                own bed.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                North East trainees (Newcastle, Sunderland) can do it daily but
                it&apos;s a commitment — 2 hours each way plus a full day on a
                kitchen install. Worth considering a hybrid: drive Mon and Fri,
                stay Tue–Thu.
              </p>
            </div>
            <div className="card-float p-7">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Stay in Sheffield for the week</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Recommended if you are more than 90 minutes away — London, Bristol,
                Liverpool, Newcastle. Sheffield city centre has good budget
                accommodation from £50 to £70 per night midweek. Travelodge,
                Premier Inn and ibis all have central Sheffield locations.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Staying for the week lets you arrive fresh each morning, focus
                fully on the training, and use evenings to review what you have
                learned. Most trainees who stay report it as the better experience —
                and Sheffield is a good city to spend a week in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-semibold text-foreground md:text-3xl">
            What the {trainingProgram.priceDisplay} includes — wherever you travel from
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">5 days on a live kitchen install</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Real client kitchen in South Yorkshire. Real problems, real conditions,
                from day one — no mock-ups, no staged failures.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Prep, primers and tools</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The products and methods WRPX uses every day — what to buy, where
                to get it, and how to apply it so jobs last.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Measure and price coaching</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                How to survey a kitchen, price it confidently, and quote without
                guessing — anchored to the real job you helped complete.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Brand and logo direction</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A professional identity for your kitchen wrapping business in your
                home city — so you look established from day one.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Website + live domain</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Done-for-you site targeting your local area — not a template, a
                working site ready to rank and take enquiries.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">12 months local SEO</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Targeting your city, your postcodes, your search terms — so
                enquiries come in while you build your reputation.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Trade supplier introductions</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We introduce you to the suppliers we use and help you open a
                trade account from day one — no retail pricing.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">Ongoing support line</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Phone and WhatsApp access to Connor after training — stuck on
                a substrate or tricky job? Message us.
              </p>
            </div>
            <div className="card-float p-6">
              <h3 className="text-base font-semibold text-foreground">WRPX Certificate of Completion</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Issued on successful completion (if approved). Confirms live
                architectural vinyl training — not an official accreditation
                or industry licence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <PricingCallout />
        </div>
      </section>

      {/* Who it is for */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Who travels for WRPX training — and why
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Kitchen wrapping training is scarce in the UK. Most training options are
              classroom-based — mock kitchens, theoretical sessions, a certificate at
              the end — and they do not prepare you for a real job on a real client
              kitchen. WRPX is one of the few training options that puts you on a live
              install from day one.
            </p>
            <p>
              People travel for WRPX training because the offering is different:
              five days on an actual job, full business setup included, and a support
              line after. That is not available everywhere — it is available in South
              Yorkshire, from a team that wraps kitchens for a living. If you want
              that preparation, you come to where the work happens.
            </p>
            <p>
              We have trained people from across the UK — Yorkshire and Lancashire,
              the Midlands, London, the South West and the North East. Where you are
              based does not determine whether you are suited to kitchen wrapping
              training. Your willingness to travel, commit to five full days, and
              come ready to work does.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping training near me — common questions
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

      {/* Related links */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <TrainingRelatedLinks currentHref="/kitchen-wrapping-training-near-me/" />
        </div>
      </section>

      {/* Hub CTA */}
      <section className="bg-card px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          <TrainingHubCta />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to find out if WRPX training is reachable from you?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Message Connor on WhatsApp with your location — he will give you
              an honest answer on travel time and whether staying in Sheffield
              makes more sense than driving daily. Places open around live
              installs — if you are ready, the next step is a quick conversation.
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
              <Link href="/contact/" className="btn-secondary">
                Send an enquiry instead
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted/70">
              {trainingProgram.earnings.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
