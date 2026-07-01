import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WrpxTrustPanel } from "@/components/WrpxTrustPanel";

export const metadata: Metadata = {
  title: "Free Kitchen Wrap Quote | South Yorkshire & Surrounding Areas",
  description:
    "Free kitchen wrapping quote — no obligation. Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield. Get in touch.",
  alternates: { canonical: "https://www.wrpx.co.uk/contact/" },
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Free Kitchen Wrap Quote
          </h1>
          <p className="mt-4 text-muted">
            Fill in the form below, call us on{" "}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="text-accent hover:underline"
            >
              {siteConfig.phone}
            </a>
            , or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
            . We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds,
            Huddersfield and Chesterfield.
          </p>
          <div className="mt-6">
            <WhatsAppButton className="w-full justify-center sm:w-auto" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
            <div className="card-float p-6 md:p-8">
              <p className="mb-6 text-sm text-muted">
                {siteConfig.yearsInBusiness}+ years in the vinyl and sign wrapping industry ·{" "}
                {siteConfig.guaranteeYears}-year guarantee · No obligation
              </p>
              <QuoteForm />
            </div>
            <WrpxTrustPanel variant="aside" />
          </div>
        </div>
      </section>
    </div>
  );
}
