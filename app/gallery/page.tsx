import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrap Before & After Gallery | South Yorkshire Projects",
  description:
    "Kitchen wrapping before & after gallery — Sheffield, Doncaster, Barnsley, Rotherham, Leeds and South Yorkshire. Vinyl wrap projects and portfolio.",
  alternates: { canonical: "https://www.wrpx.co.uk/gallery/" },
};

const CITIES = siteConfig.areas;

const galleryItems = [
  // Featured at top — grey kitchen wrap project (Rotherham)
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-01.png", alt: "Grey kitchen wrap in Rotherham — full kitchen view with wrapped cabinet doors", caption: "Grey kitchen wrap, Rotherham", projectLine: "Full kitchen vinyl wrap, matte grey finish, Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-07.png", alt: "Grey kitchen wrap project Rotherham — wide view of wrapped cabinets and worktops", caption: "Wide kitchen view, Rotherham", projectLine: "Completed grey kitchen wrap" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-10.png", alt: "Grey wrapped kitchen in Rotherham — full fitted kitchen angle", caption: "Completed kitchen angle, Rotherham", projectLine: "Finished kitchen wrapping project, Rotherham" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-03.png", alt: "Grey wrapped kitchen cabinets in Rotherham — upper cabinet close-up", caption: "Upper cabinet detail, Rotherham", projectLine: "Upper units wrapped in grey vinyl" },
  { src: "/images/gallery/IMG_8145.webp", alt: "Light grey matt vinyl kitchen wrap, Sheffield — after", caption: "Light grey matt finish, Sheffield", projectLine: "Matt grey vinyl, South Yorkshire, full kitchen, 2 days" },
  { src: "/images/gallery/kitchen-cabinet-wrap-south-yorkshire.jpg", alt: "Kitchen cabinet vinyl wrap South Yorkshire — after", caption: "Cabinet wrap, South Yorkshire", projectLine: "Cabinet doors and frames, 1–2 days" },
  { src: "/images/gallery/wrapped-kitchen-doors-worktop-south-yorkshire.jpg", alt: "Wrapped kitchen doors and worktop, South Yorkshire — after", caption: "Doors and worktop, full wrap", projectLine: "Doors + worktop wrap, marble-effect worktop, 2 days" },
  { src: "/images/gallery/feature-vinyl-kitchen-door-wrapping-costs.jpeg", alt: "Vinyl kitchen door wrapping South Yorkshire — after", caption: "Door wrap project", projectLine: "Door wrap, branded film, South Yorkshire" },
  { src: "/images/gallery/kitchen-wrap-before-after-south-yorkshire.jpg", alt: "Kitchen wrap before and after South Yorkshire", caption: "Before and after", projectLine: "Full kitchen transformation, South Yorkshire" },
  { src: "/images/gallery/kitchen-wrap-full-kitchen-south-yorkshire.jpg", alt: "Wrapped kitchen South Yorkshire — after", caption: "Full kitchen wrap", projectLine: "Full kitchen wrap, multiple doors, 2–3 days" },
  { src: "/images/gallery/IMG-20230204-WA0011.webp", alt: "Kitchen vinyl wrap project South Yorkshire — after", caption: "Vinyl wrap, South Yorkshire", projectLine: "Vinyl wrap project, South Yorkshire" },
  { src: "/images/gallery/Kitchen_Wrapping_Vinyl_Inspiration_700x.progressive.webp", alt: "Kitchen wrapping vinyl inspiration — finishes and colours South Yorkshire", caption: "Vinyl wrap inspiration", projectLine: "Finishes and colour options" },
  // New portfolio images (vinyl, sign & glass work)
  { src: "/images/gallery/IMG_6109.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl wrap project", projectLine: "Professional vinyl application" },
  { src: "/images/gallery/IMG_6110.png", alt: "Vinyl and sign wrapping South Yorkshire", caption: "Sign wrap project", projectLine: "Commercial vinyl work" },
  { src: "/images/gallery/IMG_6111.png", alt: "Vinyl wrap finish South Yorkshire", caption: "Vinyl wrap", projectLine: "Quality finish" },
  { src: "/images/gallery/IMG_6112.png", alt: "Vinyl wrap project — South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_6127.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional installation" },
  { src: "/images/gallery/IMG_6128.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Vinyl signage" },
  { src: "/images/gallery/IMG_6129.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation" },
  { src: "/images/gallery/IMG_6137.png", alt: "Vinyl and sign work South Yorkshire", caption: "Sign work", projectLine: "Professional wrap" },
  { src: "/images/gallery/IMG_6138.png", alt: "Vinyl wrap South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_7106.png", alt: "Glass partition vinyl film South Yorkshire", caption: "Glass partition film", projectLine: "Frosted decorative film" },
  { src: "/images/gallery/IMG_7107.png", alt: "Decorative glass film South Yorkshire", caption: "Glass film project", projectLine: "Privacy / decorative film" },
  { src: "/images/gallery/IMG_7108.png", alt: "Window film installation South Yorkshire", caption: "Window film", projectLine: "Professional application" },
  { src: "/images/gallery/IMG_7109.png", alt: "Vinyl glass film South Yorkshire", caption: "Glass film", projectLine: "Decorative wrap" },
  { src: "/images/gallery/IMG_7177.png", alt: "Hexagonal privacy film on glass South Yorkshire", caption: "Hexagonal privacy film", projectLine: "Window film installation" },
  { src: "/images/gallery/IMG_7178.png", alt: "Decorative window film South Yorkshire", caption: "Window film project", projectLine: "Privacy film" },
  { src: "/images/gallery/IMG_7186.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Sign / vinyl work" },
  { src: "/images/gallery/IMG_7187.png", alt: "Vinyl wrap installation South Yorkshire", caption: "Vinyl installation", projectLine: "Professional wrap" },
  { src: "/images/gallery/IMG_7195.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Commercial vinyl" },
  { src: "/images/gallery/IMG_7196.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_7197.png", alt: "Commercial vinyl and sign work South Yorkshire", caption: "Commercial project", projectLine: "Vinyl wrap" },
  { src: "/images/gallery/IMG_8265.png", alt: "Promotional vinyl wrap South Yorkshire", caption: "Promotional wrap", projectLine: "Large-format vinyl" },
  { src: "/images/gallery/IMG_8266.png", alt: "Vinyl signage South Yorkshire", caption: "Signage project", projectLine: "Sign wrap" },
  { src: "/images/gallery/IMG_8267.png", alt: "Vinyl wrap and sign work South Yorkshire", caption: "Sign wrap", projectLine: "Commercial installation" },
  { src: "/images/gallery/IMG_8397.png", alt: "Retail vinyl display South Yorkshire", caption: "Retail display", projectLine: "Vinyl wrap" },
  { src: "/images/gallery/IMG_8399.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Professional vinyl" },
  { src: "/images/gallery/IMG_8401.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_8403.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Professional installation" },
  { src: "/images/gallery/IMG_8406.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation" },
  { src: "/images/gallery/IMG_8416.png", alt: "Decorative vinyl film South Yorkshire", caption: "Decorative film", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_8418.png", alt: "Glass partition film South Yorkshire", caption: "Partition film", projectLine: "Frosted / decorative" },
  { src: "/images/gallery/IMG_8419.png", alt: "Vinyl wrap South Yorkshire", caption: "Wrap project", projectLine: "Professional vinyl" },
  { src: "/images/gallery/IMG_8422.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Sign and vinyl work" },
  { src: "/images/gallery/IMG_8600.png", alt: "Vinyl signage installation South Yorkshire", caption: "Signage installation", projectLine: "Vinyl wrap" },
  { src: "/images/gallery/IMG_8603.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Professional application" },
  { src: "/images/gallery/IMG_8610.png", alt: "Large-format vinyl wrap South Yorkshire", caption: "Large-format wrap", projectLine: "Commercial vinyl" },
  { src: "/images/gallery/IMG_8615.png", alt: "Office glass film South Yorkshire", caption: "Office glass film", projectLine: "Frosted / decorative partition" },
  { src: "/images/gallery/IMG_8705.png", alt: "Vinyl wrap project South Yorkshire", caption: "Vinyl project", projectLine: "Professional wrap" },
  { src: "/images/gallery/IMG_8717.png", alt: "Promotional vinyl South Yorkshire", caption: "Promotional vinyl", projectLine: "Sign wrap" },
  { src: "/images/gallery/IMG_8718.png", alt: "Vinyl wrap installation South Yorkshire", caption: "Installation", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_8719.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional installation" },
  { src: "/images/gallery/IMG_8720.png", alt: "Vinyl sign wrap South Yorkshire", caption: "Sign wrap", projectLine: "Vinyl signage" },
  { src: "/images/gallery/IMG_8767.png", alt: "Vinyl wrap project South Yorkshire", caption: "Wrap project", projectLine: "Vinyl application" },
  { src: "/images/gallery/IMG_8771.png", alt: "Decorative vinyl film South Yorkshire", caption: "Decorative film", projectLine: "Professional wrap" },
  { src: "/images/gallery/IMG_8776.png", alt: "Vinyl wrap South Yorkshire", caption: "Vinyl project", projectLine: "Wrap installation" },
  { src: "/images/gallery/IMG_8778.png", alt: "Commercial vinyl wrap South Yorkshire", caption: "Commercial wrap", projectLine: "Professional vinyl" },
  // Mirror window film — Rotherham
  { src: "/images/gallery/mirror-window-film-rotherham-1.png", alt: "Mirror window film Rotherham — reflective gym window interior", caption: "Mirror window film, Rotherham", projectLine: "One-way mirror film, commercial gym, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-2.png", alt: "Mirror window film Rotherham — reflective storefront with street reflection", caption: "Mirror film storefront, Rotherham", projectLine: "Reflective window film, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-3.png", alt: "Mirror window film Rotherham — commercial window reflection", caption: "Mirror window film installation, Rotherham", projectLine: "One-way mirror film, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-4.png", alt: "Mirror window film Rotherham — gym interior reflective glass", caption: "Mirror film gym, Rotherham", projectLine: "Privacy mirror film, commercial, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-5.png", alt: "Mirror window film Rotherham — reflective gym window street view", caption: "Mirror film, Rotherham", projectLine: "One-way mirror film installation, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-6.png", alt: "Mirror window film Rotherham — reflective commercial window exterior", caption: "Mirror window film, Rotherham", projectLine: "Reflective privacy film, Rotherham" },
  { src: "/images/gallery/mirror-window-film-rotherham-7.png", alt: "Mirror window film Rotherham — gym window with hexagonal lights reflection", caption: "Mirror film commercial, Rotherham", projectLine: "Mirror window film, Rotherham" },
  // Primark Manchester — totem pole directional signage wrap
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-1.png", alt: "Primark Manchester totem pole wrap — directional signage vinyl", caption: "Totem pole wrap, Primark Manchester", projectLine: "Directional totem pole signage, Primark Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-2.png", alt: "Primark Manchester store totem pole directional wrap — retail wayfinding", caption: "Totem pole signage, Primark Manchester", projectLine: "Vinyl wrap totem poles, customer directions, Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-3.png", alt: "Primark Manchester totem pole vinyl wrap — floor directions", caption: "Totem pole wrap, Primark Manchester", projectLine: "Commercial totem pole wrap, Manchester" },
  { src: "/images/gallery/primark-manchester-totem-pole-wrap-4.png", alt: "Primark Manchester directional totem pole — wrapped signage", caption: "Directional totem pole, Primark Manchester", projectLine: "Retail wayfinding wrap, Primark Manchester" },
  // Grey kitchen wrap project — Rotherham
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-02.png", alt: "Grey kitchen wrap Rotherham — close-up of wrapped cabinet doors and worktop edge", caption: "Worktop and cabinet detail, Rotherham", projectLine: "Detail finish, wrapped doors and worktop edge" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-04.png", alt: "Grey kitchen cabinet wrap Rotherham — drawer and handle close-up", caption: "Drawer detail, Rotherham", projectLine: "Close-up finish quality on wrapped drawer fronts" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-05.png", alt: "Grey kitchen wrap Rotherham — wrapped cabinet doors with handle detail", caption: "Cabinet door detail, Rotherham", projectLine: "Grey vinyl wrap detail around hardware" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-06.png", alt: "Grey kitchen wrapping in Rotherham — side angle of wrapped base units", caption: "Side angle finish, Rotherham", projectLine: "Wrapped base units and drawer fronts" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-08.png", alt: "Rotherham grey kitchen wrap — long worktop and cabinet run detail", caption: "Long run detail, Rotherham", projectLine: "Worktop and cabinet line finish" },
  { src: "/images/gallery/kitchen-wrap-grey-rotherham-09.png", alt: "Grey kitchen vinyl wrap Rotherham — lower cabinets and drawers close-up", caption: "Lower cabinet detail, Rotherham", projectLine: "Lower cabinet and drawer wrap detail" },
  // White wood-effect worktop wrap — Chesterfield
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-01.png", alt: "White wood-effect worktop wrap in Chesterfield — full counter run view", caption: "Worktop wrap, Chesterfield", projectLine: "White wood-effect vinyl worktop wrap, Chesterfield" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-02.png", alt: "White wood-effect wrapped kitchen worktop Chesterfield — close-up texture detail", caption: "Texture detail, Chesterfield", projectLine: "Close-up of white wood-effect vinyl finish" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-03.png", alt: "Worktop wrapping Chesterfield — white wood-effect worktop edge and surface detail", caption: "Surface detail, Chesterfield", projectLine: "Worktop edge and surface finish" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-04.png", alt: "Chesterfield worktop wrap project — white wood-effect vinyl close-up", caption: "Close-up finish, Chesterfield", projectLine: "White wood-effect wrap close-up" },
  { src: "/images/gallery/worktop-wrap-white-wood-effect-chesterfield-05.png", alt: "Kitchen worktop wrap in Chesterfield — completed white wood-effect installation", caption: "Completed worktop view, Chesterfield", projectLine: "Finished white wood-effect worktop wrap" },
  // Butcher block-style worktop wrap — Barnsley
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-01.png", alt: "Butcher block style kitchen worktop wrap in Barnsley — completed corner view", caption: "Butcher block worktop wrap, Barnsley", projectLine: "Wood-effect butcher block style vinyl worktop wrap" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-02.png", alt: "Barnsley kitchen wrap project — butcher block style worktop and sage cabinet view", caption: "Wide kitchen view, Barnsley", projectLine: "Worktop and cabinet wrap finish in Barnsley" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-03.png", alt: "Kitchen worktop wrapping Barnsley — butcher block style around hob and splashback", caption: "Hob area detail, Barnsley", projectLine: "Butcher block style worktop detail around cooking zone" },
  { src: "/images/gallery/worktop-wrap-butcher-block-barnsley-04.png", alt: "Barnsley butcher block style worktop wrap — sink area and long run finish", caption: "Sink and long run detail, Barnsley", projectLine: "Wood-effect worktop wrap detail at sink run" },
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
            {galleryItems.map((item, i) => (
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
