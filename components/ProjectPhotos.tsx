import Image from "next/image";
import Link from "next/link";
import type { PortfolioPhoto } from "@/lib/portfolio";

/** A small grid of real project photos for service and location pages. */
export function ProjectPhotos({
  title,
  intro,
  photos,
}: {
  title: string;
  intro?: string;
  photos: PortfolioPhoto[];
}) {
  return (
    <div className="card-float p-8">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.src} className="overflow-hidden rounded-lg border border-border">
            <div className="relative aspect-[4/5]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
              />
            </div>
            <figcaption className="border-t border-border bg-card px-3 py-2 text-xs text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">
        <Link href="/gallery/" className="text-accent hover:underline">
          See more of our work in the portfolio
        </Link>
        .
      </p>
    </div>
  );
}
