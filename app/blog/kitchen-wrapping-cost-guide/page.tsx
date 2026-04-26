import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Cost Guide — What to Expect | South Yorkshire",
  description:
    "Kitchen wrapping cost guide — per door, full kitchen, worktops. What affects the price and how to get a fixed quote. South Yorkshire.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/kitchen-wrapping-cost-guide/" },
};

export default function BlogCostGuidePage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
            {" · "}
            <Link href="/kitchen-wrapping-cost/" className="hover:text-accent">Cost guide</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Cost Guide — What to Expect in South Yorkshire
          </h1>
          <p className="mt-2 text-muted">
            How much does kitchen wrapping cost? This guide covers typical ranges, what affects the price, and how to get a fixed quote with no surprises.
          </p>
          <p className="mt-2 text-xs text-muted">Updated February 2026</p>
          <div className="mt-8 relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
              alt="Kitchen cabinet wrap South Yorkshire"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Why cost varies</h2>
            <p>
              Kitchen wrapping cost depends on the size of your kitchen (number of doors and drawer fronts), the finish you choose, whether you include worktops and splashbacks, and the condition of your existing surfaces. More doors mean more film and labour. Premium finishes (e.g. certain woodgrains or marble effects) can sit at the higher end. We don&apos;t charge extra for awkward shapes or in-situ frame wrapping — it&apos;s all part of the job. If surfaces need heavy prep — grease, damage or previous paint — we factor that in at the survey so you get one clear price.
            </p>

            <h2>Typical price ranges</h2>
            <p>
              Indicative &quot;from&quot; figures in South Yorkshire: a single door or drawer front from around £45; a full kitchen (10–12 doors, frames, plinths) from around £850; worktop only from around £250; full kitchen plus worktops from around £1,100. These are guides. Your quote will be fixed after a free survey — no obligation, no hidden extras for prep, removal and refit of doors, or in-situ wrapping.
            </p>

            <h2>What&apos;s included in the price</h2>
            <p>
              A proper quote includes: premium film (branded where specified) for colour retention and durability; full surface preparation (cleaning, degreasing, light sanding where needed); labour (doors removed and wrapped in our workshop, frames and carcass wrapped in-situ); reinstallation and hardware refitted; and a final walkround with you. You also get a {siteConfig.guaranteeYears}-year guarantee on materials and workmanship, named on the job. If a quote seems too low, check what&apos;s excluded — cheap film and skipped prep lead to peeling and early rework.
            </p>

            <h2>How we quote</h2>
            <p>
              We book a free survey at your property. We assess every door, frame and surface, discuss finishes and any quirks, and give you a fixed price. There are no hidden extras. We don&apos;t pressure you — you get the number and can decide in your own time. For a quick reference table and more detail, see our dedicated{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost page
              </Link>
              .
            </p>

            <h2>Is it worth it?</h2>
            <p>
              For dated but sound kitchens, wrapping is usually 70–80% cheaper than a like-for-like replacement and takes 1–3 days with no rip-out. It won&apos;t change the layout or the carcasses. If your units are damaged or you want a full redesign, replacement may be better — we&apos;ll say so at the survey. For more on that decision, read our post on{" "}
              <Link href="/blog/kitchen-wrapping-vs-new-kitchen/" className="text-accent hover:underline">
                kitchen wrapping vs new kitchen
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
