import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Rotherham | WRPX",
  description:
    "Window graphics, wall wraps, floor graphics and retail signage installation in Rotherham. WRPX covers Parkgate, Cortonwood, Rotherham town centre and the wider South Yorkshire corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-rotherham/",
  },
};

export default function CommercialInstallationRotherhamPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Rotherham
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Rotherham is one of WRPX&apos;s most regular operating areas — directly adjacent to Sheffield, with
            a strong commercial retail presence anchored by Parkgate Shopping Park (one of the largest open
            retail parks in the UK), Cortonwood Retail Park and Rotherham town centre&apos;s Drummond Street
            retail zone.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For brands and agencies with Rotherham locations on their estate, or for local businesses looking
            for a professional commercial graphics installer without the travel costs of a Sheffield or
            Leeds-based team, WRPX is your closest and most cost-effective option.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Window graphics, wall wraps, floor graphics — Rotherham and all surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>
                  Parkgate, Cortonwood, Rotherham town centre and all local commercial estates covered
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>White-label services for agencies and print companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Same-day or next-day survey visits across Rotherham and South Yorkshire</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_8615_Original-31d6e701-ed1d-48a9-a9d6-c2e940967861.png"
                alt="Large food retail window graphics similar to Parkgate and Cortonwood installs."
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
            Get a Commercial Quote for Rotherham
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Call <strong>07398 395417</strong> or email{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>{" "}
            for your Rotherham commercial quote.
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Rotherham commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

