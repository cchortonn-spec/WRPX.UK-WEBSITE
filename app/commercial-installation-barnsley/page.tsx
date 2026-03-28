import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Barnsley | WRPX",
  description:
    "Window graphics, wall wraps, floor graphics and retail signage installation in Barnsley. WRPX covers Alhambra Shopping Centre, Metrodome and all Barnsley commercial premises.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-barnsley/",
  },
};

export default function CommercialInstallationBarnsleyPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Barnsley
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Barnsley&apos;s commercial retail offering — the Alhambra Shopping Centre, the Metrodome leisure
            complex and the retail parks along the A628 corridor — represents a regularly refreshed environment
            for brands and agencies commissioning installation work across South Yorkshire. WRPX covers
            Barnsley as part of our core South Yorkshire territory, with no additional travel costs and fast
            mobilisation from our Sheffield base.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For local businesses in Barnsley — cafés, salons, offices, showrooms and retail units — looking for
            a professional graphics installation service for window graphics, wall murals or shop front vinyls,
            WRPX brings the same material quality and preparation standards we apply to every commercial job.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Alhambra Shopping Centre, Metrodome and all Barnsley commercial areas covered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Window graphics, wall wraps, floor graphics, shop front vinyls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Local to South Yorkshire — no inflated travel costs</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_8615_Original-31d6e701-ed1d-48a9-a9d6-c2e940967861.png"
                alt="Barnsley retail frontage style food photography graphics applied in vinyl."
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
            Get a Commercial Quote for Barnsley
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            <strong>Call: 07398 395417</strong> ·{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Barnsley commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

