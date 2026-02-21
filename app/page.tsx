import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { nav } from "@/lib/nav";
import { testimonials } from "@/lib/testimonials";

const galleryImages = [
  { src: "/images/gallery/IMG_8145.webp", alt: "Vinyl wrapped kitchen South Yorkshire — after" },
  { src: "/images/gallery/81OfA32zNwL.jpg", alt: "Kitchen cabinet wrap South Yorkshire — after" },
  { src: "/images/gallery/Y923a9kw8pCgp9gZUeYFaH.jpg", alt: "Wrapped kitchen doors and worktop — after" },
  { src: "/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg", alt: "Vinyl kitchen wrap project — after" },
  { src: "/images/gallery/312337366_139426672169451_7140905813060754894_n-683x1024.jpg", alt: "Kitchen wrap before and after South Yorkshire" },
  { src: "/images/gallery/e2.jpg", alt: "Wrapped kitchen — after" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — full-width cover image with overlay */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Kitchen wrapping South Yorkshire — transformed kitchen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Kitchen Wrapping Specialists — South Yorkshire
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/90">
            Transform your kitchen in 1–3 days. A fraction of the cost of a new kitchen.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact/" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/gallery/" className="btn-secondary border-white/30 text-white hover:border-accent hover:bg-white/10">
              See Our Work →
            </Link>
          </div>
          <p className="mt-10 text-sm text-white/70">
            Sheffield · Doncaster · Barnsley · Rotherham · Leeds · Huddersfield · Chesterfield
          </p>
        </div>
      </section>

      {/* What we do — single floating card */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What we do
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              We wrap full kitchens — doors, drawer fronts, carcass faces, worktops and splashbacks — in premium vinyl. We also wrap bedroom and bathroom furniture and office units. If a wrap isn&apos;t the right option for your project, we&apos;ll say so. Honest advice, trade-level prep, and a {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Why wrap — 3 floating cards */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Why wrap instead of replace
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card-float p-8 text-center">
              <p className="text-2xl font-bold text-accent">Cost saving</p>
              <p className="mt-3 text-muted">
                Typically 70–80% less than a new kitchen.
              </p>
            </div>
            <div className="card-float p-8 text-center">
              <p className="text-2xl font-bold text-accent">Install time</p>
              <p className="mt-3 text-muted">1–3 days. No rip-out.</p>
            </div>
            <div className="card-float p-8 text-center">
              <p className="text-2xl font-bold text-accent">Life expectancy</p>
              <p className="mt-3 text-muted">
                {siteConfig.guaranteeYears}+ years with correct care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After — real images in floating cards */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Before & After
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="card-float overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/gallery/" className="btn-primary inline-block">
              View full gallery →
            </Link>
          </p>
        </div>
      </section>

      {/* Process — 4 floating cards */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Our process in 4 steps
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { num: 1, title: "Survey", body: "Free survey. We assess doors, frames and surfaces and give you an honest report on suitability." },
              { num: 2, title: "Surface preparation", body: "Cleaning, degreasing, light sanding where needed. This is where quality is won or lost." },
              { num: 3, title: "Wrapping", body: "Doors removed and wrapped in our workshop; frames and carcass wrapped in-situ." },
              { num: 4, title: "Reinstallation & inspection", body: "Doors rehung, hardware refitted, full walkround with you." },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 p-6 md:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's covered — one card */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="card-float p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-foreground">
              What&apos;s covered
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Doors", "Drawer fronts", "Carcass faces", "Side panels", "Plinths", "Cornice / pelmet", "Worktops", "Splashbacks / tiles"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted">
                  <span className="text-accent">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Guarantee — bold card */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="card-float border-accent/30 p-10 text-center">
            <p className="text-4xl font-bold text-accent md:text-5xl">
              {siteConfig.guaranteeYears}-year guarantee
            </p>
            <p className="mt-3 text-muted">
              Materials and workmanship. Named on every job.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials — 3 floating cards */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
            What customers say
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card-float p-6 md:p-8">
                <p className="text-accent">★★★★★</p>
                <p className="mt-4 italic text-card-foreground">
                  {t.quote}
                </p>
                <p className="mt-3 text-sm text-muted">— {t.name}, {t.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities — link cards */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground md:text-3xl">
            Cities we serve
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {nav.locations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-float px-6 py-5 text-center text-foreground transition hover:border-accent hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — large bordered section */}
      <section className="px-4 py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border-2 border-accent/40 p-12 text-center md:p-16">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to transform your kitchen?
            </h2>
            <p className="mt-4 text-muted">
              Years in the vinyl and sign wrapping industry. Free survey, no obligation.
            </p>
            <Link href="/contact/" className="btn-primary mt-10 inline-block">
              Book Your Free Survey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
