import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Chesterfield | WRPX",
  description:
    "Retail graphics and signage installation in Chesterfield — window graphics, wall wraps, floor graphics and shop fronts. WRPX covers Vicar Lane, Ravenside Retail Park and the wider Derbyshire corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-chesterfield/",
  },
};

export default function CommercialInstallationChesterfieldPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Chesterfield
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Sitting on the A61 corridor between Sheffield and Derby, Chesterfield is a natural extension of
            WRPX&apos;s South Yorkshire operation. We cover Vicar Lane Shopping Centre, Ravenside Retail Park,
            Dunston Road retail parks and commercial premises across the Chesterfield borough as part of our
            regular installation programme.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Chesterfield also sits at the top of the East Midlands retail corridor — for multi-site programmes
            spanning Sheffield, Chesterfield, Mansfield, Alfreton and Nottingham, WRPX provides consistent
            coverage from a single team with no handoffs between contractors.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Vicar Lane, Ravenside, Dunston Road and Chesterfield town centre covered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  Gateway to East Midlands — Mansfield, Alfreton, Derby, Nottingham accessible as part of one
                  programme
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Window graphics, wall wraps, shop front vinyls, commercial interior applications</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_8771_Original-c8a3083a-1dff-43a0-8e61-6274315d523f.png"
                alt="Branded tech POS island similar to Chesterfield and East Midlands installs."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Get a Commercial Quote for Chesterfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Call 07398 395417 or complete the enquiry form for your Chesterfield project.
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Chesterfield commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

