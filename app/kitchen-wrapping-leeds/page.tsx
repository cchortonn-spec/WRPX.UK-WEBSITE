import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Leeds | Local Specialist, Free Quote",
  description:
    "Professional kitchen wrapping in Leeds. Doors, worktops and frames wrapped in 1–3 days. Genuine local service, not a national franchise. Free quote.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-leeds/" },
};

export default function KitchenWrappingLeedsPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Leeds — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds is on our South Yorkshire and surrounding areas patch. We
            cover the city and nearby postcodes. Same offer as everywhere:
            free survey, honest advice, trade-level prep and a named{" "}
            {siteConfig.guaranteeYears}-year guarantee. If your kitchen is
            suitable for wrapping, we&apos;ll give you a fixed quote and a
            clear process.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Leeds is on our South Yorkshire and surrounding areas patch. You get the same local service as in Sheffield or Doncaster: same team, same guarantee, no national franchise markup. We respond quickly and book surveys at times that suit you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Services available in Leeds
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <p className="mt-4 text-muted">
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              Kitchen wrapping cost guide
            </Link> — typical prices and what&apos;s included.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Recent work in Leeds
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/e2.jpg"
              alt="Kitchen wrap Leeds — recent project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Leeds postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Leeds and the surrounding area. Postcode prefixes include
            LS1–LS29 and nearby. Send us your postcode to confirm we cover you.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Leeds Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
