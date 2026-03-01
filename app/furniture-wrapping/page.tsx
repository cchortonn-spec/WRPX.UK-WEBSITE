import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getServiceSchema } from "@/lib/schema";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Furniture & Bedroom Wrapping South Yorkshire | Vinyl Wrap Specialist",
  description:
    "Furniture wrapping South Yorkshire — wardrobes, bedroom and bathroom units, office furniture. Premium vinyl. Free quote, 1–3 day turnaround.",
  alternates: { canonical: "https://www.wrpx.co.uk/furniture-wrapping/" },
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
              Bedroom wardrobes and fitted units, bathroom vanity units and
              cabinets, office furniture (desks, storage, reception), and other
              fitted or freestanding units. Solid wood, melamine, vinyl-wrapped
              MDF and painted surfaces are all suitable. Same rule as kitchens:
              we assess suitability at the free survey and will tell you if
              wrapping isn&apos;t the right option — we won&apos;t quote for
              damaged or warped doors.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Pricing and what&apos;s included
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Furniture wrapping is typically priced per door or per unit,
              similar to kitchen doors — from around £45 per door depending on
              size and finish. We give a fixed quote after a free survey so you
              know the cost upfront. The price includes surface preparation,
              film, labour and our {siteConfig.guaranteeYears}-year guarantee.
              For a full breakdown of how we price wrapping, see our{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                kitchen wrapping cost guide
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Finishes — matt, gloss, woodgrain and more
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Same finish options as our kitchen and worktop wrapping: matt,
              gloss, woodgrain (oak, walnut, light oak), marble, concrete and
              stone effect. We use branded films (3M, CoverStyl and others) for
              colour retention and durability. We bring samples to the survey so
              you can choose in your own light and match or contrast with
              existing kitchen or bedroom decor.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Before & after
            </h2>
            <div className="mt-4 relative aspect-[4/3] max-w-md overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg"
                alt="Vinyl wrap project South Yorkshire — cabinet and furniture wrap"
                fill
                className="object-cover"
                sizes="448px"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              Same quality and process for furniture as for kitchens.{" "}
              <Link href="/gallery/" className="text-accent hover:underline">View our gallery</Link> for more projects.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-4 space-y-4">
              {faqItems.filter((item) => item.q.includes("bedrooms") || item.q.includes("installation take")).map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-1 text-sm text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              <Link href="/faq/" className="text-accent hover:underline">More questions? See our full FAQ</Link>.
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
