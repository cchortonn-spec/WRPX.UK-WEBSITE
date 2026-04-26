import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "Kitchen Wrapping vs New Kitchen — Is It Worth It? | South Yorkshire",
  description:
    "Kitchen wrapping vs new kitchen — cost, time and durability compared. When to wrap and when to replace. South Yorkshire specialist.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/kitchen-wrapping-vs-new-kitchen/" },
};

export default function BlogVsNewKitchenPage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping vs New Kitchen — Is It Worth It?
          </h1>
          <p className="mt-2 text-muted">
            Should you wrap your existing kitchen or replace it? We compare cost, time, durability and when each option makes sense.
          </p>
          <p className="mt-2 text-xs text-muted">Updated February 2026</p>
          <div className="mt-8 relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/IMG_8145.webp"
              alt="Wrapped kitchen South Yorkshire"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Cost comparison</h2>
            <p>
              A full kitchen wrap is typically 70–80% less than a like-for-like new kitchen. You keep the same layout, units and worktops — only the visible surfaces change. A new kitchen means new carcasses, worktops, often plumbing and electrical changes, and a much longer install. If your cabinets are structurally sound and you mainly want a new look, wrapping is usually the better value.
            </p>

            <h2>Time and disruption</h2>
            <p>
              Wrapping takes 1–3 days depending on kitchen size. No rip-out, no weeks without a working kitchen. Doors are removed and wrapped in our workshop; frames and carcass are wrapped in-situ. A new kitchen can take weeks and often means living around builders and dust. For a quick refresh with minimal disruption, wrapping wins.
            </p>

            <h2>Durability and life expectancy</h2>
            <p>
              A professionally wrapped kitchen can last {siteConfig.guaranteeYears}+ years with correct care. We use branded films and trade-level prep so adhesion and colour hold. It won&apos;t change the underlying structure — so if your doors are already worn or you want to change the layout, replacement may still be the right call. We&apos;ll tell you honestly at the survey if we think wrapping isn&apos;t the best option.
            </p>

            <h2>When to replace instead</h2>
            <p>
              Replace if: units are damaged, warped or falling apart; you want a new layout or more storage; you&apos;re doing a full renovation anyway. Wrap if: the kitchen is dated but sound, you want a new look without the cost and mess of replacement, and you&apos;re happy with the current layout. For typical wrap costs, see our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>
              .
            </p>
          </div>

          <BlogAuthor />
          <p className="mt-12">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
              Kitchen Quote
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
