import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Window Graphics South Yorkshire | WRPX",
  description:
    "Commercial window graphics installation across South Yorkshire for retail, office and hospitality sites. Frosted, full colour and campaign graphics.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/window-graphics/" },
};

export default function CommercialWindowGraphicsPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Commercial Window Graphics
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            We install commercial window graphics for retail, offices and
            hospitality sites across South Yorkshire and surrounding regions.
            Services include frosted privacy film, full colour promotional
            graphics, one-way vision and seasonal campaign installs.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Every install follows a preparation-first process so the finish stays
            clean, aligned and durable in high visibility areas.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Typical commercial window graphics projects
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Storefront campaign graphics and temporary promotions</li>
              <li>Permanent branded windows for high street sites</li>
              <li>Frosted meeting room and office privacy panels</li>
              <li>Wayfinding and directional window messaging</li>
              <li>Multi-site graphic swaps for agencies and print partners</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-muted">
            Need a full commercial package?{" "}
            <Link href="/commercial-installation/" className="text-accent hover:underline">
              Return to commercial installation
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
