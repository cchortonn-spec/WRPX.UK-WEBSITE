import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { nav } from "@/lib/nav";
import { useImmersiveHero } from "@/lib/hero-config";
import { HomeHero } from "@/components/HomeHero";
import { BeforeAfterShowcase } from "@/components/BeforeAfterShowcase";
import { VideoReels } from "@/components/VideoReels";
import { HeroTrustBar } from "@/components/HeroTrustBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WrpxTrustPanel } from "@/components/WrpxTrustPanel";
import { GoogleReviewsBar } from "@/components/GoogleReviewsBar";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Sheffield & South Yorkshire | Vinyl Wrap Specialist | WRPX",
  description:
    "WRPX — kitchen wrapping specialist covering Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield & Chesterfield. Doors, worktops, islands, splashbacks, furniture. 7+ years, 5-year guarantee. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/",
  },
  openGraph: {
    title: "Kitchen Wrapping Sheffield & South Yorkshire | WRPX",
    description:
      "Kitchen wrapping specialist — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield & Chesterfield. Doors, worktops, islands, splashbacks. 5-year guarantee. Free survey.",
    url: "https://www.wrpx.co.uk/",
    type: "website",
    images: [
      {
        url: "https://www.wrpx.co.uk/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg",
        width: 1200,
        height: 1600,
        alt: "Navy wood-effect kitchen wrap with white marble worktop — Doncaster, WRPX",
      },
    ],
  },
};

const galleryImages = [
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-after-01.jpeg", alt: "Navy wood-effect kitchen wrap Doncaster with white marble high-gloss worktop" },
  { src: "/images/Kitchen-navy-marble-doncaster/navy-marble-kitchen-wrap-doncaster-worktop-detail-01.jpeg", alt: "White marble high-gloss worktop wrap close-up — Doncaster kitchen" },
  { src: "/images/home/kitchen-home-new-02.png", alt: "Wrapped kitchen with light wall units and tiled splashback" },
  { src: "/images/home/kitchen-home-new-04.png", alt: "Kitchen worktop and cabinet doors after vinyl wrapping" },
  { src: "/images/home/kitchen-home-new-01.png", alt: "Modern grey kitchen wrap finish in South Yorkshire" },
  { src: "/images/home/kitchen-home-new-05.png", alt: "Close-up of wrapped kitchen cabinets and stone-style counters" },
];

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HeroTrustBar />
      <VideoReels />
      {useImmersiveHero ? <BeforeAfterShowcase /> : null}
      <WrpxTrustPanel variant="featured" />

      {/* What we do + services cluster */}
      <section className="reveal px-4 py-14">
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="card-float p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What we do
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              We wrap full kitchens — doors, drawer fronts, carcass faces, worktops and splashbacks — in premium vinyl. We also wrap bedroom and bathroom furniture and office units. If a wrap isn&apos;t the right option for your project, we&apos;ll say so. Honest advice, trade-level prep, and a {siteConfig.guaranteeYears}-year guarantee on materials and workmanship.
            </p>
          </div>

          <div className="card-float p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Commercial graphics &amp; retail signage
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Alongside homes, WRPX installs retail graphics and signage — window graphics, wall wraps,
              floor graphics, shop fronts and POS displays for brands, agencies, print houses and local businesses
              across South Yorkshire and the wider North.
            </p>
            <p className="mt-4 text-muted">
              <Link href="/commercial-installation/" className="link-subtle">
                See our commercial graphics &amp; installation service
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Window film — privacy, frosted and solar
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We install privacy film, frosted window film, one-way mirror film, solar control film and glass manifestation for homes and businesses across South Yorkshire. Same preparation standards and premium materials.
            </p>
            <p className="mt-4 text-muted">
              <Link href="/window-film/" className="link-subtle">
                See our window film service
              </Link>
              .
            </p>
          </div>

          <div className="card-float p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Specialist kitchen wrapping services
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond full kitchen wraps — we also cover kitchen islands, splashbacks and appliances,
              so every surface can be transformed in one visit.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Link
                href="/kitchen-island-wrapping/"
                className="rounded-lg border border-border p-4 hover:border-white/30 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">Kitchen Island Wrapping</p>
                <p className="mt-1 text-xs text-muted">
                  Marble, stone, bold colour or woodgrain — transform your island in a day.
                </p>
              </Link>
              <Link
                href="/splashback-wrapping/"
                className="rounded-lg border border-border p-4 hover:border-white/30 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">Splashback Wrapping</p>
                <p className="mt-1 text-xs text-muted">
                  Wrap over existing tiles or glass — no retiling, no mess.
                </p>
              </Link>
              <Link
                href="/appliance-wrapping/"
                className="rounded-lg border border-border p-4 hover:border-white/30 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">Appliance Wrapping</p>
                <p className="mt-1 text-xs text-muted">
                  Match your fridge, dishwasher and cooker hood to your wrapped kitchen.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted brands */}
      <section className="home-section-alt reveal py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-center text-sm font-medium text-foreground">
            We use premium vinyl from trusted brands
          </p>
          <p className="mt-3 text-center text-sm text-muted">
            Compare textures, tones and patterns in our{" "}
            <Link href="/architectural-vinyl-finishes/" className="link-subtle">
              architectural vinyl finish sample books
            </Link>
            {" "}or see full{" "}
            <Link href="/architectural-vinyl-film/" className="link-subtle">
              architectural vinyl film installation details
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="relative h-14 w-32 overflow-hidden md:h-20 md:w-44">
              <Image
                src="/images/brands/3m.png"
                alt="3M"
                fill
                className="object-contain object-center"
                sizes="176px"
              />
            </div>
            <div className="relative h-14 w-36 overflow-hidden md:h-20 md:w-52">
              <Image
                src="/images/brands/coverstyl.png"
                alt="CoverStyl"
                fill
                className="object-contain object-center"
                sizes="208px"
              />
            </div>
            <div className="relative h-14 w-32 overflow-hidden md:h-20 md:w-44">
              <Image
                src="/images/brands/avery-dennison.png"
                alt="Avery Dennison"
                fill
                className="object-contain object-center"
                sizes="176px"
              />
            </div>
            <div className="relative h-14 w-28 overflow-hidden md:h-20 md:w-40">
              <Image
                src="/images/brands/hexis.png"
                alt="Hexis"
                fill
                className="object-contain object-center"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why wrap */}
      <section className="reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Why wrap instead of replace
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="card-float p-7 text-center">
              <p className="text-2xl font-bold text-foreground">Cost saving</p>
              <p className="mt-3 text-muted">
                Typically 70–80% less than a new kitchen.
              </p>
            </div>
            <div className="card-float p-7 text-center">
              <p className="text-2xl font-bold text-foreground">Install time</p>
              <p className="mt-3 text-muted">1–3 days. No rip-out.</p>
            </div>
            <div className="card-float p-7 text-center">
              <p className="text-2xl font-bold text-foreground">Life expectancy</p>
              <p className="mt-3 text-muted">
                {siteConfig.guaranteeYears}+ years with correct care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="home-section-alt reveal px-4 py-14">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Before & After
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-8 text-center">
            <Link href="/gallery/" className="btn-primary inline-block">
              View full gallery →
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Our process in 4 steps
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { num: 1, title: "Survey", body: "Free survey. We assess doors, frames and surfaces and give you an honest report on suitability." },
              { num: 2, title: "Surface preparation", body: "Cleaning, degreasing, light sanding where needed. This is where quality is won or lost." },
              { num: 3, title: "Wrapping", body: "Doors removed and wrapped in our workshop; frames and carcass wrapped in-situ." },
              { num: 4, title: "Reinstallation & inspection", body: "Doors rehung, hardware refitted, full walkround with you." },
            ].map((step) => (
              <div key={step.num} className="card-float flex gap-4 p-6 md:p-7">
                <span className="step-badge">{step.num}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered + guarantee */}
      <section className="home-section-alt reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl grid gap-5 md:grid-cols-2">
          <div className="card-float p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground">
              What&apos;s covered
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Doors", "Drawer fronts", "Carcass faces", "Side panels", "Plinths", "Cornice / pelmet", "Worktops", "Splashbacks / tiles"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted">
                  <span className="accent-tick" aria-hidden="true">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-float flex flex-col items-center justify-center p-7 md:p-9 text-center">
            <p className="text-4xl font-bold text-foreground md:text-5xl">
              {siteConfig.guaranteeYears}-year guarantee
            </p>
            <p className="mt-3 text-muted">
              Materials and workmanship.{" "}
              <span className="text-accent">Named on every job.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <GoogleReviewsBar />

      {/* Cities */}
      <section className="home-section-alt reveal px-4 py-14">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading mb-8 text-2xl font-semibold text-foreground md:text-3xl">
            Cities we serve
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {nav.locations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-float px-5 py-4 text-center text-foreground transition hover:border-white/30"
              >
                {item.label}
              </Link>
            ))}
            {[
              { label: "Wakefield", href: "/kitchen-wrapping-wakefield/" },
              { label: "York", href: "/kitchen-wrapping-york/" },
              { label: "Bradford", href: "/kitchen-wrapping-bradford/" },
              { label: "Nottingham", href: "/kitchen-wrapping-nottingham/" },
              { label: "Manchester", href: "/kitchen-wrapping-manchester/" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-float px-5 py-4 text-center text-foreground transition hover:border-white/30"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta-glow reveal px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float border border-white/10 p-10 text-center md:p-14">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to transform your kitchen?
            </h2>
            <p className="mt-4 text-muted">
              {siteConfig.yearsInBusiness}+ years in the vinyl and sign wrapping industry. Free survey, no obligation.{" "}
              <Link href="/kitchen-wrapping-cost/" className="link-subtle">
                See our kitchen wrapping cost guide
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <WhatsAppButton className="w-full justify-center sm:w-auto" />
              <Link href="/contact/" className="btn-accent-text w-full text-center sm:w-auto">
                Book Your Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
