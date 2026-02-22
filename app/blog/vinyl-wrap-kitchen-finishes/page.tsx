import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vinyl Wrap Kitchen Finishes — Ideas and Options | South Yorkshire",
  description:
    "Matt, gloss, woodgrain, marble and more. A guide to kitchen wrap finishes and how to choose. South Yorkshire specialist.",
  alternates: { canonical: "https://wrpx.co.uk/blog/vinyl-wrap-kitchen-finishes/" },
};

export default function BlogFinishesPage() {
  return (
    <div>
      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Vinyl Wrap Kitchen Finishes — Ideas and Options
          </h1>
          <p className="mt-2 text-muted">
            From matt and gloss to woodgrain and marble, here&apos;s a guide to kitchen wrap finishes and how to choose the right one.
          </p>

          <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-li:text-muted prose-headings:text-foreground">
            <h2>Matt and gloss</h2>
            <p>
              Matt finishes are popular for a modern, low-sheen look — they hide fingerprints and minor marks well. Gloss gives a high-shine, reflective finish that can make a kitchen feel brighter and more spacious. Both are durable and easy to clean. Grey matt kitchen wrap is one of the most requested looks in South Yorkshire; white and off-white matt are also common.
            </p>

            <h2>Woodgrain</h2>
            <p>
              Oak, walnut, light and dark wood effects give the look of real timber without the cost of new wooden doors. The texture and grain are printed on the film, so you get a consistent finish. Woodgrain works well for a traditional or warm, natural look and pairs nicely with wrapped worktops in a matching or contrasting wood effect.
            </p>

            <h2>Marble, stone and concrete</h2>
            <p>
              Marble-effect wrap (white, grey, veined) is a cost-effective way to get a stone look on doors and worktops. Stone and concrete effects suit industrial or contemporary styles. These finishes are heat- and scratch-resistant on worktops and are designed for kitchen use. We bring samples to the survey so you can see them in your own light.
            </p>

            <h2>How to choose</h2>
            <p>
              Think about the style you want (modern matt, classic wood, statement marble), how much natural light you have (gloss can bounce light; matt can feel softer), and whether you want doors and worktops to match or contrast. At the free survey we&apos;ll show you samples and help you narrow it down. For typical costs by job size, see our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost page
              </Link>
              .
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
