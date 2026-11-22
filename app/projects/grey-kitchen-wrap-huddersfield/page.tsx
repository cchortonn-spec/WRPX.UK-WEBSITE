import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { photosByName } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site-config";

const PAGE_PATH = "/projects/grey-kitchen-wrap-huddersfield/";
const PAGE_URL = `${siteConfig.domain}${PAGE_PATH}`;
const TITLE = "Grey Kitchen Wrap in Huddersfield | WRPX";
const DESCRIPTION =
  "Kitchen wrapping in Huddersfield: cabinet doors, drawer fronts and end panels in a smooth grey. Supply and fit by WRPX, without replacing the kitchen.";

const hero = photosByName("kitchen-wrap-grey-huddersfield-01")[0];

const kitchenPhotos = photosByName(
  "kitchen-wrap-grey-huddersfield-01",
  "kitchen-wrap-grey-huddersfield-02",
  "kitchen-wrap-grey-huddersfield-03",
  "kitchen-wrap-grey-huddersfield-04",
  "kitchen-wrap-grey-huddersfield-05",
  "kitchen-wrap-grey-huddersfield-06",
  "kitchen-wrap-grey-huddersfield-07",
  "kitchen-wrap-grey-huddersfield-08",
  "kitchen-wrap-grey-huddersfield-09",
  "kitchen-wrap-grey-huddersfield-10",
  "kitchen-wrap-grey-huddersfield-11",
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
      name: "Grey kitchen wrap in Huddersfield",
      item: PAGE_URL,
    },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Grey kitchen wrap in Huddersfield",
  headline: "Grey kitchen wrap in Huddersfield",
  url: PAGE_URL,
  creator: {
    "@type": "Organization",
    name: "WRPX",
    url: `${siteConfig.domain}/`,
  },
  description: DESCRIPTION,
  locationCreated: {
    "@type": "Place",
    name: "Huddersfield",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Huddersfield",
      addressCountry: "GB",
    },
  },
  image: kitchenPhotos.map((photo) => `${siteConfig.domain}${photo.src}`),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen wrapping",
  serviceType: "Kitchen wrapping",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "WRPX",
    url: `${siteConfig.domain}/`,
  },
  areaServed: [{ "@type": "City", name: "Huddersfield" }],
  description:
    "Supply and fit wrapping for kitchen cabinet doors, drawer fronts and end panels.",
};

export default function GreyKitchenWrapHuddersfieldPage() {
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
                Grey kitchen wrap
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Grey Kitchen Wrap in Huddersfield
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Two kitchens in Huddersfield. Cabinet doors, drawer fronts and end
            panels wrapped in a smooth grey finish. Supply and fit by WRPX.
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
            <h2 className="text-2xl font-semibold text-foreground">
              A new finish, same kitchen
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Kitchen door wrapping refreshes the doors and drawer fronts
              without replacing the kitchen. The units stay, and the finish is
              new.
            </p>
            <p className="mt-4 text-muted">
              <Link
                href="/kitchen-wrapping-huddersfield/"
                className="text-accent hover:underline"
              >
                Kitchen wrapping in Huddersfield
              </Link>
              {" · "}
              <Link href="/kitchen-wrapping/" className="text-accent hover:underline">
                Kitchen wrapping
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">The kitchens</h2>
          <p className="mt-4 text-muted leading-relaxed">
            One long view down the finished run, then a second kitchen with
            frosted glass wall cabinets and pendant lights.
          </p>
        </div>
      </section>
      <PortfolioGallery photos={kitchenPhotos} />

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              Like this finish?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Tell us about the doors and the finish you want.
            </p>
            <Link href="/kitchen-wrapping-quote/" className="btn-primary mt-6 inline-block">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
