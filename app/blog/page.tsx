import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Kitchen Wrapping Tips & Guides — South Yorkshire",
  description:
    "Guides on kitchen wrapping cost, vs new kitchen, vs painting, care tips and finish options. South Yorkshire specialist.",
  alternates: { canonical: "https://wrpx.co.uk/blog/" },
};

export default function BlogPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Blog — Kitchen Wrapping Tips & Guides
          </h1>
          <p className="mt-4 text-muted">
            Cost guides, comparisons and care tips from a South Yorkshire kitchen wrapping specialist.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card-float p-6">
              <time dateTime={post.date} className="text-sm text-muted">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                <Link href={`/blog/${post.slug}/`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted">{post.description}</p>
              <p className="mt-3">
                <Link href={`/blog/${post.slug}/`} className="text-accent hover:underline">
                  Read more →
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
