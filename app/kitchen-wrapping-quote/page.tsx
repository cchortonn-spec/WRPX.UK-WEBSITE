import type { Metadata } from "next";
import Link from "next/link";
import { getServiceSchema } from "@/lib/schema";
import { KitchenWrappingQuoteWizard } from "@/components/KitchenWrappingQuoteWizard";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Quote South Yorkshire | WRPX",
  description:
    "Kitchen wrapping quote South Yorkshire. Get a kitchen makeover without replacement, free survey and fixed price from WRPX. Sheffield, Doncaster, Barnsley, Rotherham.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-quote/" },
};

export default function KitchenWrappingQuotePage() {
  const serviceSchema = getServiceSchema(
    "Kitchen Wrapping Quote",
    "Request a kitchen wrapping quote in South Yorkshire for cabinet doors, drawer fronts, panels and worktops."
  );
  const faqItems = [
    {
      q: "How much does kitchen wrapping cost in South Yorkshire?",
      a: "Most quotes depend on door count, drawer count, surface condition and finish choice. Typical full kitchens start from around £850, with final fixed pricing confirmed after survey.",
    },
    {
      q: "Is kitchen wrapping cheaper than fitting a new kitchen?",
      a: "Yes. Kitchen wrapping is usually significantly cheaper than full replacement because your existing units stay in place and only visible surfaces are transformed.",
    },
    {
      q: "How long does a kitchen wrap makeover take?",
      a: "Most projects take around 1 to 3 days depending on kitchen size and scope.",
    },
    {
      q: "Do you quote for kitchen wrapping near me?",
      a: "We cover South Yorkshire and nearby areas including Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield.",
    },
  ] as const;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Kitchen Wrapping Quote - South Yorkshire
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get Your Kitchen Wrapping Quote
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Complete the step-by-step form below for a fast kitchen wrapping quote.
            It takes around 2 minutes and helps us price your job accurately first
            time.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="container mx-auto max-w-5xl">
          <KitchenWrappingQuoteWizard />
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 md:pb-20">
        <div className="container mx-auto max-w-5xl space-y-6">
          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen wrapping quote for doors, drawers and worktops
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              We quote for complete kitchen wraps, cabinet-only wraps and worktop
              wraps. If you are comparing kitchen wrapping vs new kitchen costs, this
              form gives you a clear fixed-price route without pressure.
            </p>
          </article>

          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">Areas we cover</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We provide kitchen wrapping quotes across South Yorkshire including
              Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and
              Chesterfield.
            </p>
            <p className="mt-3 text-sm text-muted">
              For service details, see our{" "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                kitchen wrapping page
              </Link>{" "}
              and{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>
              . You can also preview finish options on our{" "}
              <Link href="/architectural-vinyl-finishes/" className="text-accent hover:underline">
                architectural vinyl finishes page
              </Link>
              .
            </p>
          </article>

          <article className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Kitchen wrapping quote FAQs
            </h2>
            <ul className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
