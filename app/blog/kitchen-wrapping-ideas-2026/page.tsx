import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Ideas for 2026 | South Yorkshire",
  description:
    "Kitchen wrapping ideas for 2026 — colours, finishes and trends. What South Yorkshire homeowners are choosing. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/kitchen-wrapping-ideas-2026/" },
};

export default function BlogIdeas2026Page() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Ideas for 2026
          </h1>
          <p className="mt-2 text-muted">
            Trends and ideas for refreshing your kitchen with vinyl wrap in 2026 — colours, finishes and what South Yorkshire homeowners are choosing.
          </p>
          <div className="mt-8 relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg"
              alt="Kitchen wrapping project South Yorkshire"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Still popular in 2026</h2>
            <p>
              Grey matt kitchen wrap remains one of the most requested looks — it&apos;s modern, hides fingerprints and works in most spaces. White and off-white matt are close behind. Woodgrain (oak, walnut, light oak) is still strong for a warm, natural look without the cost of new wooden doors. Marble-effect wrap on doors and worktops continues to appeal for a premium look at a fraction of the price of real stone.
            </p>

            <h2>Finishes that suit open-plan living</h2>
            <p>
              Many kitchens in 2026 are open to living or dining areas. Matt and soft-touch finishes tend to feel less clinical and fit well with mixed-use spaces. Gloss can bounce light and make a smaller kitchen feel bigger — still a solid choice. We bring samples to the free survey so you can see how finishes look in your own light and next to your existing tiles or worktops.
            </p>

            <h2>Cost and timing</h2>
            <p>
              Kitchen wrapping typically costs 70–80% less than a like-for-like replacement and takes 1–3 days. If you&apos;re planning a refresh in 2026, a wrap can give you a new look without the mess and cost of a full rip-out. For typical price ranges see our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>
              . We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield — free survey, fixed quote, {siteConfig.guaranteeYears}-year guarantee.
            </p>
          </div>

          <BlogAuthor />
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
