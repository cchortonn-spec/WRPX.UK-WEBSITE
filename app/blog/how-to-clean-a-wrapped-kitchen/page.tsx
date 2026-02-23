import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "How to Clean a Wrapped Kitchen — Care Guide | South Yorkshire",
  description:
    "How to clean a wrapped kitchen — what to use, what to avoid, and how to protect your guarantee. Care guide from South Yorkshire.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/how-to-clean-a-wrapped-kitchen/" },
};

export default function BlogCleanGuidePage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            How to Clean a Wrapped Kitchen — Care Guide
          </h1>
          <p className="mt-2 text-muted">
            Keep your wrapped kitchen looking new with simple, daily care. Here&apos;s what to use and what to avoid so your guarantee stays valid.
          </p>
          <p className="mt-2 text-xs text-muted">Updated February 2026</p>
          <div className="mt-8 relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg"
              alt="Wrapped kitchen South Yorkshire"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Daily cleaning</h2>
            <p>
              Wipe wrapped surfaces with a damp cloth and a mild detergent. Normal daily use is fine — splashes, grease and fingerprints wipe off easily. Avoid abrasive pads and scouring powders; they can scratch the film and dull the finish. For stubborn grease, use a soft cloth and a bit more elbow grease rather than harsh chemicals.
            </p>

            <h2>What to avoid</h2>
            <p>
              Don&apos;t use strong solvents, bleach or ammonia-based cleaners on the wrap — they can affect the film and colour. Avoid placing very hot pans directly on wrapped worktops; use trivets. Abrasive sponges and sharp objects can scratch. Following these guidelines helps your wrap last {siteConfig.guaranteeYears}+ years and keeps the guarantee valid.
            </p>

            <h2>Worktops</h2>
            <p>
              Worktop wrap is heat- and scratch-resistant, but it&apos;s still best to use chopping boards and trivets. Wipe spills promptly. Same rules: mild detergent, soft cloth, no abrasives or strong chemicals.
            </p>

            <h2>If something goes wrong</h2>
            <p>
              Our guarantee covers material defects, colour fade and adhesion failure when the wrap is used and cleaned as advised. If you notice lifting, peeling or colour change, get in touch — we&apos;ll advise and, where it&apos;s a defect, we&apos;ll put it right. Damage from improper cleaning or misuse can void the guarantee, so stick to the simple care above.
            </p>
          </div>

          <BlogAuthor />
          <p className="mt-12">
            <Link href="/contact/" className="btn-primary inline-block">
              Questions? Get in touch
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
