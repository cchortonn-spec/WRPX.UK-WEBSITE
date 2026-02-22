import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrap Before & After Gallery | South Yorkshire Projects",
  description:
    "Real kitchen wrapping projects across Sheffield, Doncaster, Barnsley, Rotherham and Leeds. See the difference a wrap makes before you commit.",
  alternates: { canonical: "https://wrpx.co.uk/gallery/" },
};

const CITIES = siteConfig.areas;

const galleryItems = [
  { src: "/images/gallery/IMG_8145.webp", alt: "Light grey matt vinyl kitchen wrap, Sheffield — after", caption: "Light grey matt finish, Sheffield", projectLine: "Matt grey vinyl, South Yorkshire, full kitchen, 2 days" },
  { src: "/images/gallery/81OfA32zNwL.jpg", alt: "Kitchen cabinet vinyl wrap South Yorkshire — after", caption: "Cabinet wrap, South Yorkshire", projectLine: "Cabinet doors and frames, 1–2 days" },
  { src: "/images/gallery/Y923a9kw8pCgp9gZUeYFaH.jpg", alt: "Wrapped kitchen doors and worktop, South Yorkshire — after", caption: "Doors and worktop, full wrap", projectLine: "Doors + worktop wrap, marble-effect worktop, 2 days" },
  { src: "/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg", alt: "Vinyl kitchen door wrapping South Yorkshire — after", caption: "Door wrap project", projectLine: "Door wrap, branded film, South Yorkshire" },
  { src: "/images/gallery/312337366_139426672169451_7140905813060754894_n-683x1024.jpg", alt: "Kitchen wrap before and after South Yorkshire", caption: "Before and after", projectLine: "Full kitchen transformation, South Yorkshire" },
  { src: "/images/gallery/e2.jpg", alt: "Wrapped kitchen South Yorkshire — after", caption: "Full kitchen wrap", projectLine: "Full kitchen wrap, multiple doors, 2–3 days" },
  { src: "/images/gallery/IMG-20230204-WA0011.webp", alt: "Kitchen vinyl wrap project South Yorkshire — after", caption: "Vinyl wrap, South Yorkshire", projectLine: "Vinyl wrap project, South Yorkshire" },
  { src: "/images/gallery/Kitchen_Wrapping_Vinyl_Inspiration_700x.progressive.webp", alt: "Kitchen wrapping vinyl inspiration — finishes and colours South Yorkshire", caption: "Vinyl wrap inspiration", projectLine: "Finishes and colour options" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrap Gallery — Before & After Projects
          </h1>
          <p className="mt-4 text-muted">
            Real kitchen wrapping projects across Sheffield, Doncaster, Barnsley, Rotherham, Leeds and beyond. Every image has descriptive alt text and a short project line.{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              See our cost guide
            </Link>{" "}
            for typical prices.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-6">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">Filter:</span>
            {CITIES.map((city) => (
              <button
                key={city}
                type="button"
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-card-foreground transition hover:border-accent hover:text-accent"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, i) => (
              <figure key={i} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-border bg-card p-4 text-sm text-muted">
                  <span className="font-medium text-foreground">{item.caption}</span>
                  {item.projectLine && (
                    <span className="mt-1 block text-muted">{item.projectLine}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Like what you see? Get a free quote.
            </Link>
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(6).map((item, i) => (
              <figure key={i} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-border bg-card p-4 text-sm text-muted">
                  <span className="font-medium text-foreground">{item.caption}</span>
                  {item.projectLine && (
                    <span className="mt-1 block text-muted">{item.projectLine}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-center">
            <Link href="/contact/" className="btn-primary inline-block">
              Like what you see? Get a free quote.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
