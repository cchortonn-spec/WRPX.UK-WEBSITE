import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping vs Painting — Which Is Better? | South Yorkshire",
  description:
    "Compare vinyl wrapping and painting for kitchen cabinets. Durability, finish and cost for South Yorkshire homeowners.",
  alternates: { canonical: "https://wrpx.co.uk/blog/kitchen-wrapping-vs-painting/" },
};

export default function BlogVsPaintingPage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping vs Painting — Which Is Better?
          </h1>
          <p className="mt-2 text-muted">
            Both can refresh a tired kitchen. Here&apos;s how vinyl wrapping and painting compare on durability, finish and cost.
          </p>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Durability</h2>
            <p>
              Vinyl wrap is a film applied to the surface; it doesn&apos;t chip like paint and is more resistant to scratches and impact. With correct care, a wrapped kitchen typically lasts {siteConfig.guaranteeYears}+ years. Paint can chip, especially on edges and handles, and may need touching up or repainting sooner. For high-use kitchens, wrap usually holds up better.
            </p>

            <h2>Finish and look</h2>
            <p>
              Wrap offers woodgrain, marble, stone and concrete effects that are hard to achieve with paint. You get a consistent, even finish without brush marks. Paint gives a solid colour and can look great, but textured or realistic effects are limited. If you want a wood or stone look without replacing the doors, wrap is the option.
            </p>

            <h2>Cost</h2>
            <p>
              Painting can be cheaper upfront if you do it yourself, but DIY paint jobs often don&apos;t last as long or look as good as a professional wrap. A professional wrap includes prep, film and labour — you get a fixed quote and a guarantee. For a like-for-like professional job, wrapping and painting can be in a similar ballpark; wrap tends to last longer so cost per year can favour wrap. See our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                cost guide
              </Link>{" "}
              for typical wrap prices.
            </p>

            <h2>When painting might make sense</h2>
            <p>
              If you want a quick, low-cost refresh and are happy with a solid colour and possible touch-ups later, painting can work. If you want durability, wood or stone effects, and a guarantee, wrapping is the better choice. We&apos;re happy to advise at the free survey which option suits your kitchen.
            </p>
          </div>

          <p className="mt-12">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a free quote
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
