import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { BlogAuthor } from "@/components/BlogAuthor";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Near Me — How to Find the Right Installer | WRPX",
  description:
    "Looking for kitchen wrapping near you in South Yorkshire? Here's how to find a reliable local installer, what questions to ask, and what to avoid.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/kitchen-wrapping-near-me-guide/" },
};

export default function KitchenWrappingNearMeGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kitchen Wrapping Near Me — How to Find the Right Installer",
    description: "How to find a reliable local kitchen wrapping installer, what questions to ask, and red flags to watch for.",
    author: { "@type": "Organization", name: "WRPX" },
    publisher: { "@type": "Organization", name: "WRPX", url: "https://www.wrpx.co.uk" },
    datePublished: "2026-07-01",
    mainEntityOfPage: "https://www.wrpx.co.uk/blog/kitchen-wrapping-near-me-guide/",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="hover:text-accent">Blog</Link>
            {" · "}
            <Link href="/kitchen-wrapping/" className="hover:text-accent">Kitchen Wrapping</Link>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Near Me — How to Find the Right Installer
          </h1>
          <p className="mt-2 text-muted leading-relaxed">
            &ldquo;Kitchen wrapping near me&rdquo; gets a lot of searches — here&apos;s how to sort the good
            from the not-so-good, and what to ask before you commit.
          </p>
          <p className="mt-2 text-xs text-muted">Published July 2026</p>

          <BlogAuthor />

          <div className="mt-10 space-y-8">
            <div className="card-float p-8">
              <h2 className="text-xl font-semibold text-foreground">Why &ldquo;kitchen wrapping near me&rdquo; matters</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Kitchen wrapping is one of those services where the quality of the result varies
                enormously from one installer to another. The film cost is similar across the
                industry. The difference is in surface preparation, application technique and
                whether the installer will give you an honest answer about whether wrapping is
                actually right for your specific kitchen.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                A local installer who knows the area and has a real track record of completed jobs
                is worth finding — even if a national company ranks higher in Google results. Local
                reputation matters in a trade where word-of-mouth still counts.
              </p>
            </div>

            <div className="card-float p-8">
              <h2 className="text-xl font-semibold text-foreground">What to look for in a kitchen wrapping company</h2>

              <h3 className="mt-6 font-semibold text-foreground">1. Genuine local presence</h3>
              <p className="mt-2 text-muted leading-relaxed">
                A company that actually operates in your area — not a lead generation site that
                passes your enquiry to a third-party installer you&apos;ve never heard of. Check whether
                they have a real address or base of operations, local reviews mentioning specific
                areas and neighbourhoods you recognise, and whether you can speak to someone who
                knows your area.
              </p>

              <h3 className="mt-6 font-semibold text-foreground">2. Clear process and real photos</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Any credible kitchen wrapping company should have real photos of completed work —
                not stock images or manufacturer renders. Ask to see examples from nearby areas
                or similar kitchen types to yours. A company unwilling or unable to show real work
                is a red flag.
              </p>

              <h3 className="mt-6 font-semibold text-foreground">3. A clear prep process</h3>
              <p className="mt-2 text-muted leading-relaxed">
                The most common cause of kitchen wrap failure is inadequate surface preparation.
                Ask specifically: what do you do before the film goes down? A confident answer about
                cleaning, degreasing, abrasion and priming — with an explanation of why each step
                matters — is a good sign. Vague answers are not.
              </p>

              <h3 className="mt-6 font-semibold text-foreground">4. Guarantee in writing</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Any professional kitchen wrapping company should offer a written workmanship guarantee.
                Our guarantee is {siteConfig.guaranteeYears} years on materials and workmanship, named
                on every job. A 1-year guarantee from a company that doesn&apos;t expect callbacks is worth
                considerably less than a 5-year guarantee from one that does proper prep.
              </p>

              <h3 className="mt-6 font-semibold text-foreground">5. Honest suitability assessment</h3>
              <p className="mt-2 text-muted leading-relaxed">
                A good kitchen wrapping company will tell you if your kitchen isn&apos;t suitable for
                wrapping — warped doors, badly damaged surfaces, materials that won&apos;t hold the film.
                If every enquiry turns into a booked job with no caveats, that&apos;s a sign the installer
                isn&apos;t being honest about what&apos;s achievable.
              </p>
            </div>

            <div className="card-float p-8">
              <h2 className="text-xl font-semibold text-foreground">Questions to ask before you book</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
                <li>What vinyl brands do you use? (3M, Avery Dennison, CoverStyl and Hexis are the main credible brands)</li>
                <li>Can you describe your surface preparation process step by step?</li>
                <li>What&apos;s your workmanship guarantee and what does it cover?</li>
                <li>Can I see photos of comparable completed jobs in my area?</li>
                <li>Is there anything about my kitchen that might mean wrapping isn&apos;t suitable?</li>
                <li>Is the quote fixed? Will the price change after you&apos;ve started?</li>
              </ul>
            </div>

            <div className="card-float p-8">
              <h2 className="text-xl font-semibold text-foreground">Red flags to watch out for</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
                <li>Very low prices with no explanation of the film brand or prep process</li>
                <li>No written quote or only a verbal estimate that &ldquo;might change&rdquo;</li>
                <li>Pressure to book same day without a proper survey</li>
                <li>No real photos of completed work, only renders or stock imagery</li>
                <li>No workmanship guarantee or only a very short one (3–6 months)</li>
                <li>Reviews that all sound similar or use the same phrases</li>
              </ul>
            </div>

            <div className="card-float p-8">
              <h2 className="text-xl font-semibold text-foreground">Kitchen wrapping near me — South Yorkshire areas we cover</h2>
              <p className="mt-4 text-muted leading-relaxed">
                WRPX covers South Yorkshire and surrounding areas for kitchen wrapping. Specific location
                pages with local pricing and area-specific information:
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {[
                  { label: "Sheffield", href: "/kitchen-wrapping-sheffield/" },
                  { label: "Doncaster", href: "/kitchen-wrapping-doncaster/" },
                  { label: "Barnsley", href: "/kitchen-wrapping-barnsley/" },
                  { label: "Rotherham", href: "/kitchen-wrapping-rotherham/" },
                  { label: "Leeds", href: "/kitchen-wrapping-leeds/" },
                  { label: "Huddersfield", href: "/kitchen-wrapping-huddersfield/" },
                  { label: "Chesterfield", href: "/kitchen-wrapping-chesterfield/" },
                  { label: "Wakefield", href: "/kitchen-wrapping-wakefield/" },
                  { label: "York", href: "/kitchen-wrapping-york/" },
                  { label: "Bradford", href: "/kitchen-wrapping-bradford/" },
                  { label: "Nottingham", href: "/kitchen-wrapping-nottingham/" },
                  { label: "Manchester", href: "/kitchen-wrapping-manchester/" },
                ].map((loc) => (
                  <Link key={loc.href} href={loc.href} className="text-accent hover:underline">
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="card-float p-8 border-2 border-accent/30">
              <h2 className="text-xl font-semibold text-foreground">Book your free survey</h2>
              <p className="mt-4 text-muted leading-relaxed">
                WRPX — {siteConfig.yearsInBusiness}+ years in the vinyl and wrapping industry. Real
                photos of real work. Free survey with honest suitability assessment. Fixed quote before
                work starts. {siteConfig.guaranteeYears}-year guarantee on every job.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
                  Kitchen Quote
                </Link>
                <Link href="/contact/" className="text-accent hover:underline self-center">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
