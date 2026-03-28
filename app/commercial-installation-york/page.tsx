import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer York | WRPX",
  description:
    "Window graphics, wall wraps, floor graphics and retail signage installation in York. Covering Coppergate, Monks Cross, Vangarde and York city centre.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-york/",
  },
};

export default function CommercialInstallationYorkPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in York
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            York&apos;s retail and commercial estate is distinctive — a historic city centre with one of the
            UK&apos;s highest densities of branded retail units, operating alongside modern retail destinations
            at Monks Cross and Vangarde. WRPX covers York and North Yorkshire for retail graphics and signage installation,
            with specific experience working in environments that require careful handling of heritage
            surfaces, restricted access windows and centre-management compliance.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For brands, agencies and local businesses commissioning window graphics, wall murals or commercial
            graphics installations in York, WRPX provides the material expertise and preparation discipline that
            listed and high-footfall environments demand.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>York city centre, Coppergate, Monks Cross, Vangarde retail park</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Heritage surface experience — sympathetic installation in listed and conservation environments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>North Yorkshire coverage: Harrogate, Selby, Scarborough, Malton, Pickering</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_6110_Original-73f86c26-9b7d-4dc6-b556-a3430aa7a4e5.png"
                alt="Frosted and patterned window film suitable for York heritage and office environments."
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
            Get a Commercial Quote for York
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Get a York commercial quote: <strong>07398 395417</strong> ·{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a York commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

