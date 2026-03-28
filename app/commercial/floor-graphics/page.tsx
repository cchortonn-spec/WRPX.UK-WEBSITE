import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Floor Graphics Installer South Yorkshire | WRPX",
  description:
    "Promotional floor graphics and anti-slip floor film installation across South Yorkshire for retail campaigns, wayfinding and in-store messaging.",
  alternates: { canonical: "https://www.wrpx.co.uk/commercial/floor-graphics/" },
};

export default function CommercialFloorGraphicsPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Commercial Floor Graphics
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            We install commercial floor graphics for retail spaces, events and
            public-facing interiors. Typical installs include anti-slip
            promotional graphics, directional systems and campaign-led floor
            graphics.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Floor graphics need correct film specification and clean preparation
            to perform in high-footfall environments. We plan installs around
            your opening times to reduce disruption.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Floor graphics use cases
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-2 text-muted">
              <li>Directional paths and wayfinding systems</li>
              <li>Seasonal promotions and campaign support</li>
              <li>Queue management and in-store messaging</li>
              <li>Event and pop-up environment branding</li>
              <li>Multi-site brand-consistent floor graphics rollouts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-muted">
            For full-service delivery including window and wall graphics, see{" "}
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
