import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { locationPageData } from "@/lib/location-pages";

const data = locationPageData.Barnsley;

export const metadata: Metadata = {
  title: "Kitchen Wrapping Barnsley | Local Specialist, Free Quote",
  description:
    "Kitchen wrapping in Barnsley — Hoyland, Wombwell, Cudworth, Royston and across S70–S75. Doors and worktops in 1–3 days. Free quote.",
  alternates: { canonical: "https://www.wrpx.co.uk/kitchen-wrapping-barnsley/" },
};

export default function KitchenWrappingBarnsleyPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Barnsley — Local Specialist
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Barnsley and the surrounding districts — Hoyland, Wombwell, Cudworth, Royston, Penistone and beyond — are on our regular South Yorkshire run. No long-distance call-out, no franchise middleman. You get a direct quote, trade-level prep and a {siteConfig.guaranteeYears}-year guarantee. If your cabinets are suitable for wrapping, we&apos;ll say so; if not, we&apos;ll tell you that too.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Many Barnsley customers choose wrapping when the kitchen layout still
            works but the style feels dated. Wrapping keeps downtime short and
            usually avoids plumbing, electrical and builder costs linked to a
            full replacement. We focus on giving you a durable finish and a clean
            final detail around edges, handles and corners.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Why local matters
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;re in the Barnsley area often. Same person from survey to finish — no subcontractors. Quick to book a survey and straight-talking advice: we&apos;ll tell you if wrapping is right for your kitchen and give you a fixed quote, no sales pitch. You get a named guarantee and a direct contact if you need a follow-up.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Local understanding helps with product choice too. Homes in Hoyland
            and Wombwell often have open-plan layouts with lots of daylight, so
            sheen level and colour balance matter. We bring samples and check
            them in your own lighting before you commit.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Finishes available in Barnsley
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Matt, gloss, woodgrain (oak, walnut), marble, concrete and stone effect. We&apos;ll bring samples to the survey so you can choose in your own light.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Services available in Barnsley
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Full kitchen wrap — doors, frames, panels, worktops</li>
            <li>Worktop wrapping — marble, stone, wood-effect</li>
            <li>Furniture and wardrobe wrap</li>
          </ul>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            What you can expect from the install
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
            <li>Clear start date and realistic timescale</li>
            <li>Careful preparation before any film is applied</li>
            <li>Consistent finish across doors, trims and panels</li>
            <li>Final walk-through with aftercare guidance</li>
          </ul>
          <p className="mt-4 text-muted">
            <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
              Kitchen wrapping cost guide
            </Link> — typical prices and what&apos;s included.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Recent work in Barnsley
          </h2>
          <div className="mt-6 relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/gallery/wrapped-kitchen-doors-worktop-south-yorkshire.jpg"
              alt="Kitchen wrapping transformation in Barnsley"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            Example in S75: shaker doors wrapped to a lighter modern tone with
            matching trims and updated handles. The result lifted the whole room
            without needing new cabinetry.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Testimonial from a Barnsley customer
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="italic text-card-foreground">
              We were quoted a fortune for a new kitchen. WRPX wrapped our doors
              and worktops instead — half the cost and it looks like new. Connor
              was professional and left everything spotless. Very happy.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Mike P., Barnsley
            </p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">
            We avoid one-size-fits-all promises. Every quote is based on
            condition, profile shape, and the number of removable parts, so you
            know exactly what you are paying for.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-semibold text-foreground">
            Coverage — Barnsley and surrounding postcodes
          </h2>
          <p className="mt-4 text-muted">
            We cover Barnsley and the surrounding area. Postcode prefixes include {data.postcodes}. If you&apos;re just outside, get in touch — we may still cover you.
          </p>
          <p className="mt-4 text-muted">
            {data.priceLine}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-foreground">
            Barnsley areas we cover most often
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We regularly visit Hoyland, Wombwell, Cudworth, Royston, Penistone
            and surrounding villages. Send your postcode and we will confirm
            timescales for survey and installation.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Link href="/contact/" className="btn-primary inline-block">
            Book a Free Barnsley Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
