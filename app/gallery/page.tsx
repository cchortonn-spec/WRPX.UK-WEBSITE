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
  // Built-in wardrobes — Chesterfield (after photos first)
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-01.jpeg", alt: "Built-in wardrobe Chesterfield — white floor-to-ceiling fitted wardrobe after", caption: "Built-in wardrobe, Chesterfield", projectLine: "White fitted wardrobe, floor-to-ceiling, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-02.jpeg", alt: "Built-in dressing table Chesterfield — white top with teal base after", caption: "Dressing table, Chesterfield", projectLine: "Custom built-in dressing table with drawers, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-03.jpeg", alt: "Built-in wardrobe Chesterfield — fitted wardrobe with bedside drawers after", caption: "Wardrobe and bedside unit, Chesterfield", projectLine: "Integrated wardrobe and bedside drawers, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-04.jpeg", alt: "Built-in wardrobe Chesterfield — full bedroom storage wall after", caption: "Bedroom storage wall, Chesterfield", projectLine: "Full wall fitted wardrobe installation, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-05.jpeg", alt: "Built-in wardrobe Chesterfield — white wardrobe with bedside unit after", caption: "Wardrobe with bedside unit, Chesterfield", projectLine: "Floor-to-ceiling wardrobe with integrated bedside, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-06.jpeg", alt: "Built-in wardrobe Chesterfield — fitted wardrobe door detail after", caption: "Wardrobe door detail, Chesterfield", projectLine: "Flush-panel wardrobe doors with knob handles, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-07.jpeg", alt: "Built-in wardrobe Chesterfield — completed fitted bedroom furniture after", caption: "Fitted bedroom furniture, Chesterfield", projectLine: "Custom built-in wardrobe and storage, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-08.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe interior and finish after", caption: "Wardrobe finish, Chesterfield", projectLine: "Professional fitted wardrobe finish, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-09.jpeg", alt: "Built-in wardrobe Chesterfield — full height wardrobe installation after", caption: "Full height wardrobe, Chesterfield", projectLine: "Ceiling-to-floor built-in wardrobe, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-10.jpeg", alt: "Built-in wardrobe Chesterfield — bedroom fitted storage after", caption: "Bedroom fitted storage, Chesterfield", projectLine: "Bespoke bedroom storage solution, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-11.jpeg", alt: "Built-in wardrobe Chesterfield — custom wardrobe and drawers after", caption: "Custom wardrobe, Chesterfield", projectLine: "Bespoke fitted wardrobe with drawer units, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-after-12.jpeg", alt: "Built-in wardrobe Chesterfield — completed bedroom makeover after", caption: "Bedroom makeover, Chesterfield", projectLine: "Full bedroom fitted furniture project, Chesterfield" },
  // Built-in wardrobes — Chesterfield (before and in-progress)
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-01.jpeg", alt: "Built-in wardrobe Chesterfield — blue painted wardrobe before", caption: "Before — blue wardrobe, Chesterfield", projectLine: "Original blue painted wardrobe before transformation" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-02.jpeg", alt: "Built-in wardrobe Chesterfield — existing bedroom furniture before", caption: "Before — bedroom furniture, Chesterfield", projectLine: "Original bedroom storage before new installation" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-before-03.jpeg", alt: "Built-in wardrobe Chesterfield — old wardrobe unit before", caption: "Before — old wardrobe, Chesterfield", projectLine: "Existing wardrobe before bespoke replacement" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-01.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe installation in progress", caption: "During — installation, Chesterfield", projectLine: "Wardrobe unit being fitted on site, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-02.jpeg", alt: "Built-in wardrobe Chesterfield — drawer unit assembly in progress", caption: "During — drawer unit, Chesterfield", projectLine: "Custom drawer unit being assembled, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-03.jpeg", alt: "Built-in wardrobe Chesterfield — fitted furniture work in progress", caption: "During — fitting work, Chesterfield", projectLine: "On-site fitting and assembly, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-04.jpeg", alt: "Built-in wardrobe Chesterfield — wardrobe panels being installed", caption: "During — panel install, Chesterfield", projectLine: "Wardrobe panels and carcass installation, Chesterfield" },
  { src: "/images/Built-in-wardrobes-Chesterfield/built-in-wardrobe-chesterfield-in-progress-05.jpeg", alt: "Built-in wardrobe Chesterfield — bedroom furniture installation in progress", caption: "During — bedroom install, Chesterfield", projectLine: "Full bedroom furniture installation underway, Chesterfield" },
  // Marble worktop wrap — Pontefract
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-01.jpeg", alt: "Marble worktop wrap Pontefract — full kitchen with marble-effect worktop after", caption: "Marble worktop wrap, Pontefract", projectLine: "White marble-effect vinyl worktop and splashback, Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-02.jpeg", alt: "Marble worktop wrap Pontefract — hob area with marble splashback after", caption: "Hob and splashback, Pontefract", projectLine: "Marble-effect worktop wrap around hob and splashback, Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-03.jpeg", alt: "Marble worktop wrap Pontefract — worktop and herringbone tile detail after", caption: "Worktop detail, Pontefract", projectLine: "Marble vinyl worktop with herringbone tile backsplash, Pontefract" },
  { src: "/images/Marble-worktop-potefract/marble-effect-worktop-wrap-pontefract-04.jpeg", alt: "Marble worktop wrap Pontefract — sink run with marble worktop after", caption: "Sink run, Pontefract", projectLine: "Marble-effect worktop wrap at sink area, Pontefract" },
  // Black kitchen wrap — Sheffield
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-before-01.jpeg", alt: "Black kitchen wrap Sheffield — cream kitchen before transformation", caption: "Before — cream kitchen, Sheffield", projectLine: "Original cream kitchen before black vinyl wrap, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-01.jpeg", alt: "Black kitchen wrap Sheffield — full matte black kitchen after", caption: "Black kitchen wrap, Sheffield", projectLine: "Full kitchen vinyl wrap, matte black finish, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-02.jpeg", alt: "Black kitchen wrap Sheffield — black cabinets with marble worktop after", caption: "Black cabinets and worktop, Sheffield", projectLine: "Matte black wrap with marble-effect worktop, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-03.jpeg", alt: "Black kitchen wrap Sheffield — wide kitchen view after", caption: "Wide kitchen view, Sheffield", projectLine: "Completed black kitchen wrap project, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-04.jpeg", alt: "Black kitchen wrap Sheffield — cabinet and appliance detail after", caption: "Cabinet detail, Sheffield", projectLine: "Black vinyl wrap on doors, drawers and frames, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-05.jpeg", alt: "Black kitchen wrap Sheffield — lower cabinet and hob area after", caption: "Hob area, Sheffield", projectLine: "Black wrap finish around cooking zone, Sheffield" },
  { src: "/images/Kitchen-wrap-sheffield-black/black-kitchen-wrap-sheffield-after-06.jpeg", alt: "Black kitchen wrap Sheffield — completed kitchen transformation after", caption: "Kitchen transformation, Sheffield", projectLine: "Full before and after kitchen wrap, Sheffield" },
  // Kitchen wrap — Titanic Spa, Huddersfield
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-01.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — commercial kitchen during installation", caption: "Kitchen wrap, Titanic Spa", projectLine: "Commercial grey kitchen wrap, Titanic Spa, Huddersfield" },
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-02.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — grey kitchen cabinets during fit", caption: "During — cabinet fit, Huddersfield", projectLine: "Grey kitchen wrap installation in progress, Huddersfield" },
  { src: "/images/Kitchen-titanic-spa-huddersfield/kitchen-wrap-titanic-spa-huddersfield-03.jpeg", alt: "Kitchen wrap Titanic Spa Huddersfield — modern grey kitchen after", caption: "Grey kitchen wrap, Huddersfield", projectLine: "Completed commercial kitchen wrap, Titanic Spa, Huddersfield" },
  // Existing gallery — grey kitchen wrap project (Rotherham)
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
