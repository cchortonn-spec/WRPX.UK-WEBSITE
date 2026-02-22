import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Worktop Wrapping South Yorkshire | Stone, Marble & Wood Effect",
  description:
    "Wrap your worktops in marble, stone or wood-effect vinyl for a fraction of replacement cost. Heat and scratch resistant. South Yorkshire specialist.",
  alternates: { canonical: "https://wrpx.co.uk/worktop-wrapping/" },
};

export default function WorktopWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Worktop Wrapping",
    "Worktop vinyl wrapping in marble, stone or wood-effect. Heat and scratch resistant. South Yorkshire."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/Y923a9kw8pCgp9gZUeYFaH.jpg"
          alt="Worktop wrapping South Yorkshire — transformed countertops"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Worktop Wrapping South Yorkshire — Transform Your Countertops
          </h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What is worktop wrapping?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Worktop wrapping means applying a durable vinyl film to your existing countertops. No rip-out, no new units, no plumber. We wrap laminate, solid wood and most flat, sound surfaces. The film is heat-resistant and scratch-resistant, so it stands up to normal kitchen use. You get a new look — marble, stone, wood or solid colour — at a fraction of the cost of replacing worktops.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why wrap instead of replace?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Replacing worktops means removal, disposal, new templating and fitting — and often new sink or hob cutouts. It&apos;s costly and disruptive. Wrapping is done in-situ: we prep the surface, apply the film, trim and seal. No plumbing, no structural change. If your worktops are flat and stable but dated or the wrong colour, wrapping is usually the most cost-effective way to transform them.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes available
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We use worktop-grade vinyl in a range of finishes: marble (white, grey, veined), stone and concrete looks, wood effect (oak, walnut, light and dark), and solid colours. All are designed for worktop use — heat and scratch resistant — and we use branded film where specified so colour and texture last.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-muted">
              <li>Marble and stone effect</li>
              <li>Wood grain (oak, walnut, light and dark)</li>
              <li>Concrete and industrial looks</li>
              <li>Solid colours (matt and gloss)</li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What we wrap — and what we don&apos;t
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We wrap laminate, solid wood and most flat worktops that are structurally sound. Joints and cutouts (sink, hob) are handled in-situ — we wrap up to the cutout and seal the edge. We don&apos;t wrap badly damaged, warped or delaminating surfaces, or materials that won&apos;t hold adhesive. At the free survey we&apos;ll tell you straight if your worktop is suitable.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              The process
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We work in your kitchen. Surfaces are cleaned, degreased and lightly prepped. Film is applied in sections; joints are trimmed and sealed. Sink and hob cutouts are wrapped to the edge. No need to remove the worktop. We can do worktops on their own or as part of a full kitchen wrap — doors, frames and worktops in one job. Same {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Areas we cover
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We cover South Yorkshire and surrounding areas: Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield. Get in touch with your postcode for a free survey and fixed quote.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a free worktop wrap quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
