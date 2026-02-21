import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Process & Guarantee | How We Work",
  description:
    "Surface prep, off-site door wrapping, in-situ frame work, post-install inspection. See exactly how we work and what our guarantee covers.",
  alternates: { canonical: "https://wrpx.co.uk/our-process/" },
};

export default function OurProcessPage() {
  const steps = [
    { title: "Step 1: Free survey", body: "We assess your doors, frames and surfaces. You get an honest report on suitability. If wrapping isn\u2019t the right option, we\u2019ll say so." },
    { title: "Step 2: Surface preparation", body: "Cleaning, degreasing, light sanding where needed. This is where quality is won or lost. We don\u2019t skip it." },
    { title: "Step 3: Wrapping", body: "Doors are removed and wrapped in our workshop for precision. Frames and carcass are wrapped in-situ. We use branded films (e.g. 3M, CoverStyl) for colour and durability." },
    { title: "Step 4: Reinstallation & inspection", body: "Doors rehung, hardware refitted. Full walkround with you before we leave." },
  ];

  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            How We Work — Our Wrapping Process
          </h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-xl font-semibold text-foreground">
            Step-by-step process
          </h2>
          {steps.map((step, i) => (
            <div key={i} className="card-float p-6 md:p-8">
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-6">
          <div className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Our guarantee
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Adhesion failure — covered for {siteConfig.guaranteeYears} years</li>
              <li>Colour fade — covered for {siteConfig.guaranteeYears} years</li>
              <li>Material defects — covered for {siteConfig.guaranteeYears} years</li>
            </ul>
            <p className="mt-4 text-muted">
              What voids it: customer damage, improper cleaning (e.g. abrasive
              products), or modifications to the wrapped surfaces.
            </p>
          </div>

          <div className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Films we use
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We use branded films such as 3M and CoverStyl. Branded film holds
              colour, resists scratches and heat, and has consistent adhesion.
              Cheap alternatives can fade, peel or look patchy — we don&apos;t
              use them.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
