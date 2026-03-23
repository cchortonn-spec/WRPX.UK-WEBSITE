import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Sheffield | 5-Year Guarantee | Free Survey",
  description:
    "WRPX wraps kitchens across Sheffield — doors, drawer fronts, worktops and frames in premium 3M and CoverStyl vinyl. 5-year guarantee. Free survey, fixed quote. Call 07398 395417.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-sheffield/" },
};

export default function KitchenWrappingSheffieldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does kitchen wrapping take in Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Sheffield kitchens take 1-3 days. A standard 10-12 door kitchen including worktops is usually two full days. We confirm the installation schedule when we give you the fixed quote.",
        },
      },
      {
        "@type": "Question",
        name: "Will the wrap peel or lift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not if the prep is done properly. We degrease, abrade and prime where needed before any film goes down. Our 5-year guarantee covers adhesion failure and material defects.",
        },
      },
      {
        "@type": "Question",
        name: "Can you wrap a kitchen that's been painted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, yes. Painted doors need careful assessment - the condition of the paint, how well it's adhered, and whether it's oil or water-based all affect whether vinyl will hold. We'll assess at the survey and give you a straight answer.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to move out while you're working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your kitchen stays accessible throughout. We work systematically, so there's always somewhere to make a brew.",
        },
      },
      {
        "@type": "Question",
        name: "Do you cover the whole of Sheffield?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - S1 through to S36 and surrounding areas. Regular enquiries come from Hillsborough, Walkley, Crookes, Ecclesall, Nether Edge, Woodseats, Mosborough, Meadowhead, Handsworth, Waverley and across the city. If you're on the Sheffield boundary, send your postcode and we'll confirm.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    url: "https://www.wrpx.co.uk",
    telephone: "+447398395417",
    areaServed: "Sheffield",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3811,
      longitude: -1.4701,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Sheffield — Local Specialist, 5-Year Guarantee
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Sheffield is at the heart of our patch. We&apos;ve wrapped kitchens in
            Nether Edge Edwardians, S12 family semis, Kelham Island conversions
            and everything between - and each one is assessed on its own.
            We&apos;ll tell you straight at the survey whether wrapping makes sense
            for your kitchen, and if it doesn&apos;t, we&apos;ll say so before you spend
            a penny.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Most Sheffield clients come to us because their cabinet carcasses
            are solid but the finish looks dated. If the structure is sound,
            vinyl wrapping gives you the biggest visual change for the budget -
            typically at 70-80% less than a full kitchen replacement. One to
            three days. No rip-out. Your kitchen stays functional throughout.
          </p>
          <div className="mt-6 rounded-lg border-l-4 border-accent bg-background p-4">
            <p className="font-semibold text-foreground">
              5-year guarantee on materials and workmanship. Named on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Sheffield kitchens — what we&apos;ve learned
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Sheffield properties vary more than most cities. A 1930s semi in
            Woodseats has different door profiles from a new-build in Waverley.
            A Victorian terrace in Crookes has different humidity patterns from
            a modern flat in the city centre. A kitchen that&apos;s had multiple
            owners often has mixed cabinet types under the same carcass.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            That variation matters because vinyl prep is where a wrap succeeds
            or fails. Surface condition, door material, finish type and edge
            profile all affect how the film behaves. We assess all of it at the
            free survey - not to find reasons to turn the job down, but to make
            sure the spec is right before we start.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We use branded films from 3M, CoverStyl, Avery Dennison and Hexis.
            We don&apos;t cut corners on prep - cleaning, degreasing and light
            abrasion before any film goes down. That&apos;s why our work lasts and
            why we back it with a 5-year guarantee.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What we wrap in Sheffield
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>
              Full kitchen wrap - doors, drawer fronts, carcass faces, end
              panels, plinths, cornice
            </li>
            <li>Worktops - marble, stone, wood-effect heat-resistant vinyl</li>
            <li>Splashbacks and tiled areas</li>
            <li>Bedroom furniture, wardrobes, bathroom vanity units</li>
            <li>Home office units and fitted storage</li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            If a surface isn&apos;t suitable - warped doors, heavily damaged edges,
            loose veneer - we&apos;ll identify it at the survey. No surprises
            mid-job.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes — what&apos;s available in Sheffield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, light oak, walnut), marble, concrete
            effect, stone effect and solid colours. We bring physical samples to
            every survey so you can see the finish in your own kitchen light,
            not on a screen.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Popular choices for Sheffield kitchens right now: soft-touch
            anthracite grey matt, warm light oak effect, and Calacatta marble
            worktop vinyl. If you&apos;ve seen a finish somewhere and aren&apos;t sure
            of the name, send us a photo - we&apos;ll match it or find the closest
            equivalent.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            How a Sheffield project runs
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-muted">
            <li>
              <strong>Free survey</strong> - we come out, assess surfaces,
              measure accurately and give you an honest suitability report. No
              obligation.
            </li>
            <li>
              <strong>Fixed quote</strong> - confirmed in writing before any
              work starts. The price doesn&apos;t change unless the scope changes.
            </li>
            <li>
              <strong>Installation</strong> - doors removed and wrapped off-site
              or in-situ depending on profile. Frames, carcasses and panels
              wrapped in place. 1-3 days depending on kitchen size.
            </li>
            <li>
              <strong>Walkround and sign-off</strong> - hardware refitted,
              everything checked with you before we leave.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            What Sheffield kitchens typically cost
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most Sheffield kitchen wraps fall between <strong>£850 and £1,500</strong>{" "}
            depending on door count, finish and whether worktops are included.
            Worktop-only wraps start from around £250.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We give a fixed price after the free survey - not a ballpark that
            shifts once we&apos;re on site. For a full breakdown of what affects
            the price, see our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            From a Sheffield customer
          </h2>
          <blockquote className="mt-6 rounded-lg border border-border bg-card p-6 italic text-card-foreground">
            <p>
              Our kitchen looked dated and we didn&apos;t want the cost of a full
              replacement. Connor helped us choose the right finish and was
              straight with us from the start - no hard sell at all. WRPX
              transformed it in two days and the result is brilliant. It still
              looks great over a year on.
            </p>
            <p className="mt-4 text-sm not-italic text-muted-foreground">
              — Sarah M., Sheffield (Nether Edge)
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Frequently asked questions — kitchen wrapping in Sheffield
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">
                How long does kitchen wrapping take in Sheffield?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Most Sheffield kitchens take 1-3 days. A standard 10-12 door
                kitchen including worktops is usually two full days. We confirm
                the installation schedule when we give you the fixed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Will the wrap peel or lift?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Not if the prep is done properly. We degrease, abrade and prime
                where needed before any film goes down - this is the step most
                cheap installs skip. Our 5-year guarantee covers adhesion failure
                and material defects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Can you wrap a kitchen that&apos;s been painted?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Sometimes, yes. Painted doors need careful assessment - the
                condition of the paint, how well it&apos;s adhered, and whether
                it&apos;s oil or water-based all affect whether vinyl will hold.
                We&apos;ll assess at the survey and give you a straight answer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do I need to move out while you&apos;re working?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                No. Your kitchen stays accessible throughout. We work
                systematically, so there&apos;s always somewhere to make a brew.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you cover the whole of Sheffield?
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                Yes - S1 through to S36 and surrounding areas. Regular enquiries
                come from Hillsborough, Walkley, Crookes, Ecclesall, Nether
                Edge, Woodseats, Mosborough, Meadowhead, Handsworth, Waverley
                and across the city. If you&apos;re on the Sheffield boundary, send
                your postcode and we&apos;ll confirm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Sheffield postcode coverage
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S17, S18,
            S20, S21, S25, S26, S35, S36 and surrounding areas. Not sure if we
            cover you?{" "}
            <Link href="/contact/" className="text-accent hover:underline">
              Get in touch
            </Link>{" "}
            with your postcode.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to transform your Sheffield kitchen?
          </h2>
          <p className="text-muted leading-relaxed">
            Free survey, no obligation. Fixed quote before work starts. 5-year
            guarantee on every job.
          </p>
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Sheffield Survey →
          </Link>
          <p className="text-muted">
            Or call <strong>07398 395417</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
