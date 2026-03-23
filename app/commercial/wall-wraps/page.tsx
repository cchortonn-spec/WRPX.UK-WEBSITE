import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Wall Wraps South Yorkshire | WRPX",
  description:
    "Commercial wall wraps for retail and office interiors across South Yorkshire. Branded murals, feature walls and campaign graphics installed professionally.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/wall-wraps/" },
};

export default function CommercialWallWrapsPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Commercial Wall Wraps
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            WRPX installs commercial wall wraps for branded interiors, feature
            walls and campaign-led environments. We work with direct businesses,
            agencies and print suppliers across South Yorkshire and the North.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Surface prep and material choice are critical on wall graphics. We
            assess substrate condition first, then install with seam control and
            finish quality suited to customer-facing spaces.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Common wall wrap applications
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Retail feature walls and campaign displays</li>
              <li>Office branding and reception area wraps</li>
              <li>Hospitality murals and venue refreshes</li>
              <li>Wayfinding and directional interior graphics</li>
              <li>Short-term and long-term promotional installations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-muted">
            Explore the parent service page for full capabilities:{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              commercial installation
            </Link>
            .
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Commercial Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
