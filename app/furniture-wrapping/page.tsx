import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Furniture & Bedroom Wrapping South Yorkshire | Vinyl Wrap Specialist",
  description:
    "Wardrobes, bedroom units, bathroom vanity units and office furniture wrapped in premium vinyl. South Yorkshire. Free quote, fast turnaround.",
  alternates: { canonical: "https://wrpx.co.uk/furniture-wrapping/" },
};

export default function FurnitureWrappingPage() {
  const serviceSchema = getServiceSchema(
    "Furniture & Bedroom Wrapping",
    "Wardrobes, bedroom units, bathroom vanity units and office furniture wrapped in premium vinyl. South Yorkshire."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/gallery/IMG_8145.webp"
          alt="Furniture and bedroom wrapping South Yorkshire"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            Furniture & Bedroom Wrapping South Yorkshire
          </h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <p className="text-muted leading-relaxed">
              Wardrobes, bedroom units, bathroom vanity units and office
              furniture wrapped in premium vinyl. Same process as kitchen
              wrapping: survey, prep, wrap, {siteConfig.guaranteeYears}-year
              guarantee. We can bundle kitchen, worktops and furniture in one
              visit.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What we wrap
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Bedroom wardrobes and units, bathroom vanity units, office
              furniture, and other fitted or freestanding units. Same rule as
              kitchens: we assess suitability at the free survey and will tell
              you if wrapping isn&apos;t the right option.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
