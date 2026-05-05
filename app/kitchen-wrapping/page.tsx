import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Service South Yorkshire | Doors, Frames & Worktops",
  description:
    "Kitchen wrapping South Yorkshire — doors, worktops, frames in 1–3 days. From £850 full kitchen. Free survey, fixed quote. Sheffield, Leeds, Doncaster & more.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping/" },
};

export default function KitchenWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping",
    "Full kitchen vinyl wrapping service covering doors, worktops, frames and panels."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
          alt="Kitchen wrapping service South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Kitchen Wrapping — Full Kitchen Transformation
          </h1>
        </div>
      </section>

      <section className="border-b border-border bg-card px-4 py-8">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-xl border-2 border-accent/40 bg-background p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              5-year guarantee
            </p>
            <p className="mt-2 text-muted leading-relaxed">
              Every eligible kitchen wrapping job includes a named{" "}
              {siteConfig.guaranteeYears}-year guarantee on material defects,
              colour stability and adhesion when maintained as advised.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What&apos;s included in a full kitchen wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Every surface: doors, drawer fronts, carcass faces, end panels,
              plinths, cornice and pelmet. We use branded films such as 3M and
              CoverStyl for colour retention and durability. Finishes include
              matt, gloss, woodgrain, marble, concrete and stone effect — so you
              can match the look you want (e.g. grey matt kitchen wrap, oak effect,
              white marble). Film is applied with trade-level surface preparation
              so adhesion and finish last.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Worktop wrapping
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Worktops can be wrapped in marble, stone or wood-effect vinyl.
              Heat-resistant and scratch-resistant finishes. A fraction of the
              cost of replacing worktops.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What we can wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We wrap solid wood, melamine, vinyl-wrapped MDF and painted cabinets. Kitchen islands, larders and tall units — doors, end panels and plinths — are all in scope. We won&apos;t wrap badly damaged or warped doors, surfaces with loose veneer or flaking paint, or materials that don&apos;t hold adhesive properly. If wrapping isn&apos;t the right option we&apos;ll say so at the free survey so you don&apos;t waste money.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Pricing — typical ranges
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              From around £45 per door; from around £850 for a full kitchen (10–12 doors, frames, plinths); from around £250 for worktop only. Your quote is fixed after a free survey — no obligation. See our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>{" "}
              for a full breakdown and price table.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes — matt, gloss, woodgrain, marble and more
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We use branded films (3M, CoverStyl and others) for colour retention and durability. Finishes include matt, gloss, woodgrain (oak, walnut, light oak), marble, concrete and stone effect. We bring samples to the survey so you can choose in your own light. For more ideas see our{" "}
              <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
                architectural vinyl finishes sample books
              </Link>{" "}
              and our{" "}
              <Link href="/blog/vinyl-wrap-kitchen-finishes/" className="text-accent hover:underline">
                vinyl wrap kitchen finishes guide
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Before & after
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg"
                  alt="Kitchen wrap before and after — South Yorkshire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/gallery/IMG_8145.webp"
                  alt="Kitchen after vinyl wrap — South Yorkshire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              <Link href="/gallery/" className="text-accent hover:underline">View full gallery</Link> for more of our work.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Wrap vs new kitchen vs painting
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wrapping gives you a new look at 70–80% less than a replacement, in 1–3 days with no rip-out. It won&apos;t change the layout or carcasses. Painting is cheaper upfront but less durable and harder to keep clean. For a full comparison see our guides:
            </p>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <Link href="/blog/kitchen-wrapping-vs-new-kitchen/" className="text-accent hover:underline">
                  Kitchen wrapping vs new kitchen
                </Link>
              </li>
              <li>
                <Link href="/blog/kitchen-wrapping-vs-painting/" className="text-accent hover:underline">
                  Kitchen wrapping vs painting
                </Link>
              </li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-4 space-y-4">
              {faqItems.slice(0, 5).map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-1 text-sm text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              <Link href="/faq/" className="text-accent hover:underline">More questions? See our full FAQ</Link>.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Time & disruption
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              1–3 days depending on kitchen size. No rip-out. Your kitchen stays
              functional during the install.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Life expectancy
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {siteConfig.guaranteeYears}+ years with normal use. Films are
              scratch, impact and heat resistant. We specify the exact guarantee
              on every job.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">Guarantee</h2>
            <p className="mt-4 text-muted leading-relaxed">
              {siteConfig.guaranteeYears}-year guarantee on material defects,
              colour and adhesion. Named on the work. What voids it: customer
              damage, improper cleaning or modifications.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              We cover
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Browse city pages for kitchen vinyl wrapping. Each page includes local pricing ranges,
              FAQs and service details.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/locations/sheffield/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Sheffield
              </Link>
              <Link href="/locations/leeds/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Leeds
              </Link>
              <Link href="/locations/doncaster/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Doncaster
              </Link>
              <Link href="/locations/rotherham/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Rotherham
              </Link>
              <Link href="/locations/barnsley/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Barnsley
              </Link>
              <Link href="/locations/huddersfield/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Huddersfield
              </Link>
              <Link href="/locations/chesterfield/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Chesterfield
              </Link>
              <Link href="/locations/nottingham/kitchen-vinyl-wrapping" className="text-accent hover:underline">
                Nottingham
              </Link>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
              Kitchen Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
