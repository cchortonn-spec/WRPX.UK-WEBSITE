import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Kitchen Wrapping FAQ | Common Questions Answered",
  description:
    "How long does it last? Can my doors be wrapped? What's included? Answers to the most common kitchen wrapping questions from a South Yorkshire specialist.",
  alternates: { canonical: "https://wrpx.co.uk/faq/" },
};

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <div>
      <FaqSchema />
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping FAQ
          </h1>
          <p className="mt-4 text-muted">
            Common questions answered. See also our{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>
            {" "}and our{" "}
            <Link href="/blog/" className="text-accent hover:underline">
              blog
            </Link>
            {" "}(cost guide, vs new kitchen, vs painting, care tips). Can&apos;t find what you need?{" "}
            <Link href="/contact/" className="text-accent hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-4">
          {faqItems.map(({ q, a }) => (
            <details
              key={q}
              className="card-float group overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {q}
              </summary>
              <div className="border-t border-border px-6 py-4 text-muted">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="card-float inline-block border-accent/30 p-8">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
