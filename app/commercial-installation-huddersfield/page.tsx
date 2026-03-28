import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Huddersfield | WRPX",
  description:
    "Window graphics, wall wraps, floor graphics and retail signage installation in Huddersfield. WRPX covers Kingsgate Centre, HD1 and the wider Kirklees commercial area.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-huddersfield/",
  },
};

export default function CommercialInstallationHuddersfieldPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Huddersfield
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Huddersfield sits at the heart of the M62 corridor between Leeds and Manchester — one of the most
            commercially dense retail belts in the UK. WRPX covers Huddersfield and the wider Kirklees area as
            part of our regular West Yorkshire operation, with the Kingsgate Shopping Centre, the town&apos;s
            retail parks and local commercial premises all within our standard operating territory.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For agencies and brands running campaigns across the Leeds–Manchester M62 corridor, Huddersfield is
            almost always on the programme. WRPX&apos;s presence in the region means no inflated travel costs
            and no unfamiliar teams — the same people, the same standard.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Kingsgate Centre, Huddersfield town centre, local retail parks and commercial estates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>M62 corridor coverage: Leeds · Bradford · Halifax · Dewsbury · Mirfield · Brighouse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>White-label installation for agencies and print companies</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_8406_Original-b25523af-db9d-459f-9939-3f4d1fdebe56.png"
                alt="Large fashion campaign wall wrap similar to Huddersfield and M62 corridor installs."
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
            Get a Commercial Quote for Huddersfield
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Contact: <strong>07398 395417</strong> ·{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Huddersfield commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

