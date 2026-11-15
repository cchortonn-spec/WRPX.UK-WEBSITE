import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Cost UK | Honest Price Guide",
  description:
    "Kitchen wrapping cost in the UK. Doors from £45, a full kitchen from £1,099, worktops from £380. Supply and fit, with a fixed quote after a free survey.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-cost/" },
  openGraph: {
    title: "Kitchen Wrapping Cost UK | Honest Price Guide",
    description:
      "Kitchen wrapping cost in the UK. Doors from £45, a full kitchen from £1,099, worktops from £380. Supply and fit, with a fixed quote after a free survey.",
    url: "https://www.wrpx.co.uk/kitchen-wrapping-cost/",
    type: "website",
  },
};

const QUOTE_HREF = "/kitchen-wrapping-quote/";

const startingPrices = [
  {
    name: "Door wrapping",
    amount: "£45",
    unit: "per door",
    features: [
      "One door or a full set",
      "Matt, gloss, woodgrain or marble",
      "Doors wrapped in our workshop",
    ],
  },
  {
    name: "Full kitchen",
    amount: "£1,099",
    unit: "about 10–12 doors, frames and plinths",
    features: [
      "Doors, drawers, carcass faces and end panels",
      "Plinths, cornice and pelmet",
      "Usually 1–3 days, no rip-out",
    ],
    featured: true,
  },
  {
    name: "Worktops only",
    amount: "£380",
    unit: "worktop wrap",
    features: [
      "Marble, stone or wood-effect",
      "Heat- and scratch-resistant finishes",
      "Supply and fit on the existing top",
    ],
  },
] as const;

const priceRows = [
  ["Door", "From £45 per door"],
  ["Full kitchen (about 10–12 doors, frames and plinths)", "From £1,099"],
  [
    "Complete kitchen on the quote form (doors, drawers, panels, plinths, trims, worktops and upstands)",
    "From £1,099",
  ],
  ["Worktops", "From £380"],
  ["Drawer front, priced on its own", null],
  ["End panel, wrapped on its own", null],
  ["Splashback", null],
  ["Extra preparation or repairs", null],
] as const;

const examples = [
  {
    title: "A few doors only",
    body: "If the carcasses and worktops are fine and you only want some doors refreshed, each door starts from £45. We do not multiply that figure into a package price here, because size, style and finish are confirmed on the survey.",
  },
  {
    title: "A typical full kitchen",
    body: "A kitchen of about 10 to 12 doors, with frames and plinths, starts from £1,099. That is the published starting price for this size of job. Doors, drawers, carcass faces and end panels are part of that full-kitchen scope.",
  },
  {
    title: "Worktops only",
    body: "Worktop wrapping starts from £380. People choose this when the doors are already the right colour and the top is dated, stained or the wrong finish. The top stays in place.",
  },
  {
    title: "Doors and worktops together",
    body: "The quote form has a complete kitchen option — doors, drawers, panels, plinths, trims, worktops and upstands — from £1,099. That is the starting price on the form. A larger kitchen is not automatically the same figure. The survey turns it into one fixed price.",
  },
] as const;

const comparisons = [
  {
    name: "Kitchen wrap",
    best: true,
    rows: [
      ["Cost", "From £1,099. Usually 70–80% less than a new kitchen."],
      ["Time", "1–3 days"],
      ["Disruption", "No rip-out. The kitchen stays in place."],
      ["Finish", "Matt, gloss, woodgrain, stone and marble effects"],
      ["Guarantee", `${siteConfig.guaranteeYears}-year guarantee on materials and workmanship`],
    ],
  },
  {
    name: "New kitchen",
    rows: [
      ["Cost", "Typically £5,000–£15,000"],
      ["Time", "Weeks, including design and lead times"],
      ["Disruption", "Full rip-out, often with other trades"],
      ["Finish", "New units and a new layout, if you want one"],
      ["Guarantee", "Depends on the fitter"],
    ],
  },
  {
    name: "Paint spraying",
    rows: [
      ["Cost", "Often more than wrapping"],
      ["Time", "Several days, plus curing before normal use"],
      ["Disruption", "Sanding, masking and paint fumes"],
      ["Finish", "Usually a solid colour. It can chip, and touch-ups are hard to match."],
      ["Guarantee", "Depends on the sprayer"],
    ],
  },
] as const;

const faqs = [
  {
    q: "How much does it cost to wrap a kitchen in the UK?",
    a: "A full kitchen of about 10 to 12 doors, including frames and plinths, starts from £1,099. Doors start from £45 each. Worktops start from £380. The quote form’s complete kitchen option, which covers doors, drawers, panels, plinths, trims, worktops and upstands, also starts from £1,099. Your own job is one fixed price after a free survey. The price is for supply and fit.",
  },
  {
    q: "How much does kitchen wrapping cost per door?",
    a: "Doors start from £45 each. Size, door style and finish can move the fixed price. A full kitchen of about 10 to 12 doors starts from £1,099, which is the published starting point when the whole run is wrapped rather than one or two doors.",
  },
  {
    q: "How much does a vinyl kitchen worktop cost to wrap?",
    a: "Worktop wrapping starts from £380. Splashbacks are quoted separately. You get one fixed price for the worktop after a free survey, and the existing top stays in place.",
  },
  {
    q: "Is kitchen wrapping cheaper than a new kitchen?",
    a: "Usually, yes. A new kitchen typically costs £5,000 to £15,000. Wrapping is usually 70 to 80 percent less, because the units stay and only the visible surfaces change. Wrapping does not give you a new layout.",
  },
  {
    q: "Is kitchen wrapping cheaper than painting?",
    a: "Professional paint spraying is often more than wrapping, once preparation, curing time and how the finish wears are taken into account. Wrapping is supply and fit of branded architectural film, with a 5-year guarantee on materials and workmanship. A typical spraying price has not been published on this site.",
  },
  {
    q: "What is included in a kitchen wrapping price?",
    a: "Supply and fit of the film, cleaning and the usual preparation, doors wrapped in the workshop, frames and carcass faces wrapped in the kitchen, doors rehung and hardware refitted, and a 5-year guarantee. If a surface needs repair, that is agreed in the fixed quote before any work starts.",
  },
  {
    q: "Do you supply and fit kitchen wraps across the UK?",
    a: "Yes. WRPX is based in South Yorkshire and supplies and fits kitchen wraps across the UK, including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
  },
  {
    q: "How long does a kitchen wrap take?",
    a: "Most kitchens take 1 to 3 days. There is no rip-out. Doors are wrapped in the workshop and frames are wrapped in place, so the kitchen stays where it is.",
  },
] as const;

const placeholders = [
  "Drawer front, when it is priced on its own rather than inside a full kitchen.",
  "End panel, when it is wrapped on its own rather than as part of a full kitchen.",
  "Splashback. The quote form says splashbacks are quoted separately, and there is no published starting price.",
  "The price difference between Cover Styl, LX Hausys, 3M DI-NOC and BENIF. The site only publishes a cheap-film versus premium-film gap of £100–£200 on a typical kitchen.",
  "Extra preparation or repairs, such as chips, old paint or heavy grease, beyond the preparation already included.",
  "A worked example for a kitchen larger than about 10 to 12 doors.",
  "A typical price for professional kitchen paint spraying. The site only says spraying is often more than wrapping.",
] as const;

const towns = [
  ["Sheffield", "/kitchen-wrapping-sheffield/"],
  ["Leeds", "/kitchen-wrapping-leeds/"],
  ["Doncaster", "/kitchen-wrapping-doncaster/"],
  ["Rotherham", "/kitchen-wrapping-rotherham/"],
  ["Barnsley", "/kitchen-wrapping-barnsley/"],
  ["Huddersfield", "/kitchen-wrapping-huddersfield/"],
  ["Chesterfield", "/kitchen-wrapping-chesterfield/"],
  ["Wakefield", "/kitchen-wrapping-wakefield/"],
  ["York", "/kitchen-wrapping-york/"],
  ["Bradford", "/kitchen-wrapping-bradford/"],
  ["Nottingham", "/kitchen-wrapping-nottingham/"],
  ["Manchester", "/kitchen-wrapping-manchester/"],
] as const;

function PriceToConfirm() {
  return (
    <strong className="inline-block rounded border border-dashed border-accent px-2 py-0.5 text-sm font-semibold not-italic text-accent">
      Price to confirm
    </strong>
  );
}

function QuoteActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Link href={QUOTE_HREF} className="btn-primary inline-block text-center">
        Get a fixed quote
      </Link>
      <WhatsAppButton className="justify-center" />
      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="btn-secondary inline-block text-center"
      >
        Call {siteConfig.phone}
      </a>
    </div>
  );
}

export default function KitchenWrappingCostPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-sm text-muted">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            {" · "}
            <Link href="/kitchen-wrapping/" className="hover:text-accent">
              Kitchen wrapping
            </Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How much does kitchen wrapping cost in the UK?
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            A full kitchen of about 10 to 12 doors starts from £1,099. Doors
            start from £45. Worktops start from £380. WRPX supplies and fits
            the wrap. We are based in South Yorkshire and cover the whole UK.
            The figure for your kitchen is fixed after a free survey.
          </p>
          <QuoteActions />
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="starting-prices">
        <div className="container mx-auto max-w-5xl">
          <h2 id="starting-prices" className="text-2xl font-semibold text-foreground md:text-3xl">
            Starting prices
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            These are the starting prices published on the kitchen wrapping
            service and the quote form. They are “from” prices for supply and
            fit, not a quote for your kitchen. A free survey confirms one fixed
            price. There is no obligation.
          </p>
          <div className="kw-price-grid">
            {startingPrices.map((price) => (
              <div
                key={price.name}
                className={`kw-price-card${"featured" in price && price.featured ? " kw-price-card-featured" : ""}`}
              >
                {"featured" in price && price.featured ? (
                  <span className="kw-price-badge">Most popular</span>
                ) : null}
                <p className="kw-price-name">{price.name}</p>
                <p className="kw-price-amount">
                  <span className="kw-price-from">from</span> {price.amount}
                </p>
                <p className="kw-price-unit">{price.unit}</p>
                <ul className="kw-price-features">
                  {price.features.map((feature) => (
                    <li key={feature}>
                      <span className="kw-check" aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={QUOTE_HREF} className="kw-btn-primary kw-btn-block">
                  Get a fixed quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-muted leading-relaxed">
            On the quote form, a complete kitchen wrap — doors, drawers,
            panels, plinths, trims, worktops and upstands — also starts from
            £1,099. That is the starting price for that option. It is not a
            promise that every kitchen with worktops costs £1,099. A bigger
            door count, a different finish or repairs are priced on the survey.
          </p>
        </div>
      </section>

      <section className="home-section-alt px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg"
              alt="Navy wood-effect kitchen wrap with a white marble worktop in Doncaster"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            A full kitchen wrap in Doncaster. The starting prices above are a
            guide. A kitchen like this is priced properly at the free survey.
          </p>
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="what-changes-the-price">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div>
            <h2 id="what-changes-the-price" className="text-2xl font-semibold text-foreground md:text-3xl">
              What changes the price
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Two kitchens with the same number of doors can still come out at
              different fixed prices. These are the things that move it. Where
              this site does not yet publish a figure, it is marked{" "}
              <PriceToConfirm /> and the survey fills it in.
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">Doors and drawers</h3>
            <p className="mt-4 text-muted leading-relaxed">
              The door count is the main driver. More doors means more film and
              more time. Door size and style matter too. Shaker, J-pull and
              flat slab doors are all wrapped, and a shaped profile takes more
              care than a flat one. Doors start from £45 each.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Drawer fronts are counted on the survey and are included when you
              book a full kitchen. A starting price for a drawer front on its
              own has not been published. <PriceToConfirm />
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">End panels</h3>
            <p className="mt-4 text-muted leading-relaxed">
              End panels, carcass faces, plinths, cornice and pelmet are part
              of a full kitchen, which starts from £1,099 for about 10 to 12
              doors. They are the parts people notice once the doors look new,
              so they are included in that scope rather than left as bare
              chipboard.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              If you only want an end panel wrapped, there is no published
              starting price for that on its own. <PriceToConfirm />
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">Worktops and splashbacks</h3>
            <p className="mt-4 text-muted leading-relaxed">
              Worktop wrapping starts from £380. The length of the run, corners,
              and the sink and hob cut-outs are what the survey measures. The
              top is wrapped in place. There is a separate{" "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">
                worktop wrapping
              </Link>{" "}
              page and a{" "}
              <Link href="/blog/worktop-wrapping-cost/" className="text-accent hover:underline">
                worktop wrapping cost guide
              </Link>
              .
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Upstands are included in the quote form’s complete kitchen
              option. Splashbacks are quoted separately, and a splashback
              starting price has not been published. <PriceToConfirm />
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">
              The film: Cover Styl, LX Hausys, 3M DI-NOC and others
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              The film is a real part of the price. Architectural vinyl is not
              all the same. Ranges people compare include Cover Styl, LX Hausys
              and 3M DI-NOC. On a WRPX job we supply and fit branded film. The
              sample books on the quote page are{" "}
              <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
                3M DI-NOC, BENIF and Cover Styl
              </Link>
              . We bring physical samples to the survey so you can choose in
              your own light.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              A published note on this site puts the material-cost gap between
              a cheap film and a premium film at £100–£200 on a typical
              kitchen. That is the difference in the film, not the full job
              price. A price difference between Cover Styl, LX Hausys, 3M
              DI-NOC and BENIF has not been published. <PriceToConfirm />
            </p>
          </div>

          <div className="card-float p-8">
            <h3 className="text-xl font-semibold text-foreground">Preparation and repairs</h3>
            <p className="mt-4 text-muted leading-relaxed">
              Usual preparation is included: cleaning, degreasing and light
              sanding where it is needed. That work is why a wrap stays put.
              Awkward shapes and wrapping the frames in place are part of the
              job, not an extra.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Heavy grease, old paint, chips or damage can need more than that
              usual preparation. If a door is warped, the veneer is loose, or
              the paint is flaking, wrapping may not be the right choice and we
              will say so. Where a repair is sensible, it is included in the
              fixed quote before work starts. A published price for that extra
              preparation has not been set. <PriceToConfirm />
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Item</th>
                  <th className="py-3 font-semibold text-foreground">Published starting price</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {priceRows.map(([item, price]) => (
                  <tr key={item} className="border-b border-border">
                    <td className="py-3 pr-4">{item}</td>
                    <td className="py-3">{price ?? <PriceToConfirm />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="home-section-alt px-4 py-16" aria-labelledby="included">
        <div className="container mx-auto max-w-3xl">
          <h2 id="included" className="text-2xl font-semibold text-foreground md:text-3xl">
            What the price includes
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A WRPX kitchen wrap is supply and fit. The quote is for the film
            and the work to put it on, not for a roll of vinyl on its own.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-muted">
            <li>Branded architectural film, chosen with you at the survey</li>
            <li>Cleaning, degreasing and the usual surface preparation</li>
            <li>Doors removed and wrapped in the workshop</li>
            <li>Frames and carcass faces wrapped in the kitchen</li>
            <li>Doors rehung, hardware refitted, and a walkround with you</li>
            <li>
              A {siteConfig.guaranteeYears}-year guarantee on materials and workmanship, named on the job
            </li>
          </ul>
          <p className="mt-6 text-muted leading-relaxed">
            The process is the same wherever the kitchen is: free survey, then
            a fixed price, then the install. Most jobs take 1 to 3 days. You
            can read the{" "}
            <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
              kitchen wrapping service
            </Link>{" "}
            or go straight to the{" "}
            <Link href={QUOTE_HREF} className="text-accent hover:underline">
              kitchen wrapping quote form
            </Link>
            .
          </p>
          <QuoteActions />
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="compare-options">
        <div className="container mx-auto max-w-5xl">
          <h2 id="compare-options" className="text-2xl font-semibold text-foreground md:text-3xl">
            Wrap, replace or paint
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            Wrapping suits a kitchen that is dated but still sound, when you
            want a new look and you are happy with the layout. Replacement
            suits units that are falling apart, or a job that needs a new
            layout. Paint can refresh a solid colour, and it is a different
            product from a filmed woodgrain or stone effect.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {comparisons.map((option) => (
              <div
                key={option.name}
                className={`card-float p-6 ${"best" in option && option.best ? "border-accent/40" : ""}`}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {option.name}
                  {"best" in option && option.best ? (
                    <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-accent">
                      Best value
                    </span>
                  ) : null}
                </h3>
                <dl className="mt-4 space-y-3">
                  {option.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-muted leading-relaxed">
            A typical price for professional paint spraying has not been
            published. <PriceToConfirm /> Longer comparisons are on the blog:{" "}
            <Link href="/blog/kitchen-wrapping-vs-new-kitchen/" className="text-accent hover:underline">
              kitchen wrapping vs a new kitchen
            </Link>
            ,{" "}
            <Link href="/blog/kitchen-wrapping-vs-painting/" className="text-accent hover:underline">
              wrapping vs painting
            </Link>{" "}
            and{" "}
            <Link href="/blog/kitchen-wrapping-vs-kitchen-spraying/" className="text-accent hover:underline">
              wrapping vs spraying
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="home-section-alt px-4 py-16" aria-labelledby="example-jobs">
        <div className="container mx-auto max-w-3xl">
          <h2 id="example-jobs" className="text-2xl font-semibold text-foreground md:text-3xl">
            Typical jobs
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            These are examples of the kind of work the starting prices cover.
            They are not invoices from past jobs. Your fixed price comes from
            the survey.
          </p>
          <div className="mt-8 space-y-4">
            {examples.map((example) => (
              <div key={example.title} className="card-float p-6">
                <h3 className="font-semibold text-foreground">{example.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{example.body}</p>
              </div>
            ))}
            <div className="card-float border border-dashed border-accent/50 p-6">
              <h3 className="font-semibold text-foreground">A larger kitchen</h3>
              <p className="mt-2 text-muted leading-relaxed">
                A kitchen with more than about 10 to 12 doors, or a long run of
                worktop on top of a full wrap, does not have a published worked
                example yet. <PriceToConfirm /> The survey counts every door,
                drawer and metre of worktop and gives you one fixed price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="other-providers">
        <div className="container mx-auto max-w-3xl">
          <h2 id="other-providers" className="text-2xl font-semibold text-foreground md:text-3xl">
            How this compares with other kitchen wrapping companies
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Kitchen wrapping prices online are hard to compare, because the
            quotes often leave different things out. A lower headline figure
            can be film only, or doors only, with frames, preparation and
            worktops added later. When you line up quotes, check the same list
            for each company.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-muted">
            <li>Is the film named? Architectural film and a cheap film are not the same product.</li>
            <li>Is preparation included, or added once someone is in the kitchen?</li>
            <li>Are the frames, end panels and plinths in the price, or only the doors?</li>
            <li>Is it supply and fit, or are you being sold film to fit yourself?</li>
            <li>Is the price fixed after a survey, or a range that can move on the day?</li>
            <li>Is there a written guarantee, and what does it cover?</li>
          </ul>
          <p className="mt-6 text-muted leading-relaxed">
            WRPX supplies and fits branded film. Usual preparation is included.
            Frames are wrapped in place, not left unfinished. The price is
            fixed after a free survey, with a {siteConfig.guaranteeYears}-year
            guarantee on materials and workmanship. If wrapping is the wrong
            job, we say so at the survey.
          </p>
          <QuoteActions />
        </div>
      </section>

      <section className="home-section-alt px-4 py-16" aria-labelledby="cost-faqs">
        <div className="container mx-auto max-w-3xl">
          <h2 id="cost-faqs" className="text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen wrapping cost questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faqs.map((item) => ({ q: item.q, a: item.a }))} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="prices-to-confirm">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border border-dashed border-accent/60 p-8">
            <h2 id="prices-to-confirm" className="text-xl font-semibold text-foreground">
              Prices to confirm
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              These items do not have a published starting price yet. Each one
              is marked <PriceToConfirm /> above. They are included in the
              fixed quote after the free survey. They are listed here so the
              missing figures are obvious.
            </p>
            <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
              {placeholders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Kitchen wrapping near you</h2>
          <p className="mt-4 text-muted leading-relaxed">
            The prices on this page are the UK starting prices. Local pages
            cover the same supply-and-fit service in each town.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {towns.map(([label, href]) => (
              <Link key={href} href={href} className="text-accent hover:underline">
                {label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-muted leading-relaxed">
            Related services:{" "}
            <Link href="/kitchen-door-wrapping/" className="text-accent hover:underline">
              kitchen door wrapping
            </Link>
            ,{" "}
            <Link href="/worktop-wrapping/" className="text-accent hover:underline">
              worktop wrapping
            </Link>{" "}
            and{" "}
            <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
              full kitchen wrapping
            </Link>
            .
          </p>
          <div className="mt-10 card-float p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground">Get a fixed price for your kitchen</h2>
            <p className="mt-3 text-muted">
              Use the quote form, WhatsApp or the phone. A free survey, then one
              fixed price for supply and fit.
            </p>
            <div className="flex flex-col items-center">
              <QuoteActions />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
