import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { photosByName } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

const PAGE_PATH = "/projects/reverse-vending-machine-wraps-doncaster/";
const PAGE_URL = `${siteConfig.domain}${PAGE_PATH}`;
const TITLE = "Reverse Vending Machine Wraps Doncaster | WRPX";
const DESCRIPTION =
  "Four reverse vending machines in Doncaster, transformed with full-coverage printed vinyl. Commercial machine and equipment wrapping by WRPX, across the UK.";

const hero = photosByName("reverse-vending-machine-wrap-doncaster-05")[0];

const machinePhotos = photosByName(
  "reverse-vending-machine-wrap-doncaster-01",
  "reverse-vending-machine-wrap-doncaster-02",
  "reverse-vending-machine-wrap-doncaster-03",
  "reverse-vending-machine-wrap-doncaster-04",
  "reverse-vending-machine-wrap-doncaster-05",
  "reverse-vending-machine-wrap-doncaster-06",
  "reverse-vending-machine-wrap-doncaster-07",
  "reverse-vending-machine-wrap-doncaster-08",
  "reverse-vending-machine-wrap-doncaster-09",
  "reverse-vending-machine-wrap-doncaster-10",
  "reverse-vending-machine-wrap-doncaster-11",
  "reverse-vending-machine-wrap-doncaster-12",
).map((photo) => ({ ...photo, href: undefined }));

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: hero.src,
        width: 1500,
        height: 2000,
        alt: hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [hero.src],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.domain}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: `${siteConfig.domain}/gallery/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Reverse vending machine wraps, Doncaster",
      item: PAGE_URL,
    },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Reverse vending machine wraps, Doncaster",
  headline: "Reverse vending machine wraps, Doncaster",
  url: PAGE_URL,
  creator: {
    "@type": "Organization",
    name: "WRPX",
    url: `${siteConfig.domain}/`,
  },
  description: DESCRIPTION,
  locationCreated: {
    "@type": "Place",
    name: "Doncaster",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doncaster",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
  },
  image: machinePhotos.map((photo) => `${siteConfig.domain}${photo.src}`),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vinyl wrapping for machines and equipment",
  serviceType: "Vinyl wrapping",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "WRPX",
    url: `${siteConfig.domain}/`,
  },
  areaServed: [
    { "@type": "City", name: "Doncaster" },
    { "@type": "AdministrativeArea", name: "South Yorkshire" },
  ],
  description:
    "Wrapping for vending machines, kiosks, retail units and other equipment.",
};

export default function ReverseVendingMachineWrapsDoncasterPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/gallery/" className="hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                Reverse vending machine wraps
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Reverse vending machine wraps, Doncaster
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Four reverse vending machines in Doncaster, wrapped by WRPX.
            Full-coverage printed vinyl in a premium cast film, finished neatly
            around the doors, flaps and sensors.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <figure className="card-float overflow-hidden">
            <div className="relative mx-auto aspect-[3/4] max-w-xl">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>
            <figcaption className="border-t border-border bg-card p-4 text-sm text-muted">
              <span className="font-medium text-foreground">{hero.caption}</span>
              {hero.projectLine && (
                <span className="mt-1 block">{hero.projectLine}</span>
              )}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">The finish</h2>
            <p className="mt-4 text-muted leading-relaxed">
              The film is Oracal 3551. It follows the shape of each machine,
              including the corners, so the graphics read as one surface.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">The machines</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Red, green and yellow. Straight on, from the side, and all four
            together.
          </p>
        </div>
      </section>
      <PortfolioGallery photos={machinePhotos} />

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Kiosks, units and equipment
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The same approach suits kiosks, retail units and other equipment.
            </p>
            <p className="mt-4 text-muted">
              <Link href="/commercial-installation/" className="text-accent hover:underline">
                Commercial graphics and vinyl installation
              </Link>
              {" · "}
              <Link
                href="/commercial-installation-doncaster/"
                className="text-accent hover:underline"
              >
                Commercial installation in Doncaster
              </Link>
            </p>
          </div>

          <div className="card-float p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Planning machine or equipment graphics?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the machines and the finish you want.
            </p>
            <Link href="/contact/" className="btn-primary mt-6 inline-block">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
