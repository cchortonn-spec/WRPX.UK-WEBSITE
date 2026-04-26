import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const sampleBooks = [
  {
    brand: "3M DI-NOC",
    logo: "/images/brands/3m.png",
    href: "/docs/vinyl-sample-books/3m-dinoc-kitchen-wrap-finishes-sample-book.pdf",
    bestFor: "Premium texture depth, woodgrain detail, and stone-effect kitchen wraps.",
  },
  {
    brand: "BENIF",
    logo: "/images/brands/avery-dennison.png",
    href: "/docs/vinyl-sample-books/benif-kitchen-vinyl-finishes-sample-book-2025.pdf",
    bestFor: "Modern matt and clean contemporary kitchen makeover finishes.",
  },
  {
    brand: "Cover Styl",
    logo: "/images/brands/coverstyl.png",
    href: "/docs/vinyl-sample-books/cover-styl-architectural-vinyl-pattern-book.pdf",
    bestFor: "Bold pattern-led looks for feature kitchens and statement interiors.",
  },
] as const;

const finishSamples = [
  {
    src: "/images/vinyl-finish-samples/kitchen-wrap-finish-sample-book-neutral-tones.png",
    alt: "Kitchen wrap sample book showing neutral architectural vinyl finish tones",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-vinyl-sample-book-colour-texture-range.png",
    alt: "Kitchen vinyl sample book pages with colour and texture finish choices",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-wrap-sample-book-light-finishes-range.png",
    alt: "Light kitchen wrap finish samples for modern cabinet makeovers",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-vinyl-neutral-finish-swatches.png",
    alt: "Neutral vinyl finish swatches for kitchen doors and drawer fronts",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-wrap-dark-and-green-vinyl-finish-samples.png",
    alt: "Dark and green kitchen wrap vinyl finish sample options",
  },
  {
    src: "/images/vinyl-finish-samples/kitchen-vinyl-finish-samples-green-essentials-range.png",
    alt: "Green tone architectural vinyl finish samples for kitchen refresh projects",
  },
] as const;

const faqItems = [
  {
    q: "How do I choose the right kitchen wrap finish?",
    a: "Start with the look you want in your own lighting. Use the sample books to compare matt, woodgrain, stone and patterned finishes, then shortlist your favourites before survey.",
  },
  {
    q: "Can I view the vinyl sample books before requesting a quote?",
    a: "Yes. You can open each sample book online from this page and download the PDF versions for quick comparison.",
  },
  {
    q: "Do these finishes work for doors, drawers and worktops?",
    a: "Most of the finishes shown can be specified across kitchen doors, drawer fronts, visible panels and suitable worktops, subject to condition checks at survey.",
  },
  {
    q: "Do you bring physical samples to my kitchen survey?",
    a: "Yes. Once you enquire, we bring relevant physical finish samples so you can choose with confidence at home.",
  },
] as const;

export const metadata: Metadata = {
  title: "Architectural Vinyl Finishes | Kitchen Wrap Sample Books | WRPX",
  description:
    "Explore architectural vinyl finishes for kitchen wrapping. View sample books, compare textures and colours, and choose the best kitchen finish before your quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/architectural-vinyl-finishes/" },
};

export default function ArchitecturalVinylFinishesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const sampleBookSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sampleBooks.map((book, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: `${book.brand} kitchen vinyl finishes sample book`,
      url: `https://www.wrpx.co.uk${book.href}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sampleBookSchema) }}
      />

      <section className="border-b border-border bg-card py-14 md:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Architectural Vinyl Finishes
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            See The Finish For Your Kitchen
          </h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Browse premium kitchen wrap finishes, textures and colours before you book.
            Compare trusted vinyl sample books side by side so your final finish choice
            is clear before installation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kitchen-wrapping-quote/" className="btn-primary">
              Kitchen Quote
            </Link>
            <Link href="/contact/" className="btn-secondary">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted finish systems from established vinyl manufacturers
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {[
              { src: "/images/brands/3m.png", alt: "3M vinyl brand logo", w: "w-32" },
              { src: "/images/brands/coverstyl.png", alt: "Cover Styl vinyl brand logo", w: "w-40" },
              { src: "/images/brands/avery-dennison.png", alt: "Avery Dennison vinyl brand logo", w: "w-32" },
              { src: "/images/brands/hexis.png", alt: "Hexis vinyl brand logo", w: "w-28" },
            ].map((brand) => (
              <div key={brand.alt} className={`relative h-16 ${brand.w} overflow-hidden md:h-20`}>
                <Image src={brand.src} alt={brand.alt} fill className="object-contain" sizes="180px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Kitchen Vinyl Sample Books
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            Open each sample book in a new tab to review finish styles, then download for
            reference while planning your kitchen makeover.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sampleBooks.map((book) => (
              <article key={book.brand} className="card-float flex h-full flex-col p-6">
                <div className="relative h-14 w-36 overflow-hidden">
                  <Image
                    src={book.logo}
                    alt={`${book.brand} logo`}
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{book.brand}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{book.bestFor}</p>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    View Sample Book
                  </a>
                  <a href={book.href} download className="btn-secondary text-center">
                    Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Popular Kitchen Finish Styles
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            Real pages from sample books so you can compare kitchen finish textures,
            tones and visual depth before final selection.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {finishSamples.map((sample) => (
              <div key={sample.src} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Choosing finishes with confidence
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              If you are choosing between woodgrain, matt, stone or patterned architectural
              vinyl, this page gives you a fast shortlist route. Once you have a preferred
              look, request a{" "}
              <Link href="/kitchen-wrapping-quote/" className="text-accent hover:underline">
                kitchen wrapping quote
              </Link>{" "}
              and we will confirm suitability at survey.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="container mx-auto max-w-5xl">
          <div className="card-float p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Architectural vinyl finishes FAQs
            </h2>
            <ul className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready To Lock In Your Finish?
            </h2>
            <p className="mt-4 text-muted">
              Send your kitchen details and photos for a fast, fixed-price quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/kitchen-wrapping-quote/" className="btn-primary">
                Kitchen Quote
              </Link>
              <Link href="/contact/" className="btn-secondary">
                General Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
