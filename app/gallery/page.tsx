import type { Metadata } from "next";
import Link from "next/link";
import { VideoReels } from "@/components/VideoReels";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { portfolioPhotos } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Our Work | Kitchen, Furniture & Window Film Portfolio South Yorkshire | WRPX",
  description:
    "WRPX portfolio — kitchen wraps, wardrobes, furniture, bath panels, frosted and solar window film and commercial installs across Sheffield, Rotherham, Barnsley, Doncaster and Chesterfield.",
  alternates: { canonical: "https://www.wrpx.co.uk/gallery/" },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "WRPX project portfolio",
  url: "https://www.wrpx.co.uk/gallery/",
  image: portfolioPhotos.slice(0, 30).map((photo) => ({
    "@type": "ImageObject",
    contentUrl: `https://www.wrpx.co.uk${photo.src}`,
    caption: photo.alt,
  })),
};

export default function GalleryPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Our Work — Kitchens, Furniture &amp; Window Film
          </h1>
          <p className="mt-4 text-muted">
            Real WRPX projects across Sheffield, Rotherham, Barnsley, Doncaster, Chesterfield and beyond:
            kitchen wraps, wardrobes, matching furniture sets, bath panels, frosted and solar window film,
            and commercial installs. Pick a category below to filter.{" "}
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              See our cost guide
            </Link>{" "}
            for typical prices.
          </p>
        </div>
      </section>

      <VideoReels />

      <PortfolioGallery photos={portfolioPhotos} />

      <p className="px-4 pb-16 text-center">
        <Link href="/contact/" className="btn-primary inline-block">
          Like what you see? Get a free quote.
        </Link>
      </p>
    </div>
  );
}
