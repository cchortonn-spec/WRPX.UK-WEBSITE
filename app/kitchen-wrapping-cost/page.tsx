import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kitchen Wrapping Cost South Yorkshire | Honest Pricing Guide",
  description:
    "How much does kitchen wrapping cost in South Yorkshire? Real pricing from a local specialist — per door, full kitchen, worktops. Free quote, no obligation.",
  alternates: { canonical: "https://wrpx.co.uk/kitchen-wrapping-cost/" },
};

export default function KitchenWrappingCostPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Kitchen Wrapping Cost — What to Expect in South Yorkshire
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Kitchen wrapping typically costs a fraction of a new kitchen. Below is a guide to what affects the price and typical ranges. We give a fixed quote after a free survey — no obligation, no hidden extras.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl space-y-12">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What affects the price
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The main factors are the number of doors and drawer fronts, the type of finish you choose (matt, gloss, woodgrain, marble, etc.), whether you include worktops and splashbacks, and the condition of your existing surfaces. More doors mean more film and labour; textured or premium finishes can sit at the higher end. We don&apos;t charge extra for awkward shapes or in-situ frame wrapping — it&apos;s all part of the job.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Condition matters: doors that need minimal prep are straightforward. If there&apos;s heavy grease, damage or previous paint that needs careful prep, we&apos;ll factor that in at the survey so you get one clear price.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Typical price ranges
            </h2>
            <p className="mt-2 text-sm text-muted">
              Indicative &quot;from&quot; prices. A free survey gives you a fixed quote for your kitchen.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[320px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 font-semibold text-foreground">Job type</th>
                    <th className="pb-3 font-semibold text-foreground">Typical range</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3">Single door or drawer front</td>
                    <td className="py-3">From £45</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">Full kitchen (10–12 doors, frames, plinths)</td>
                    <td className="py-3">From £850</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">Worktop only (standard run)</td>
                    <td className="py-3">From £250</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">Full kitchen + worktops</td>
                    <td className="py-3">From £1,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              How we quote
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We book a free survey at your property. We assess every door, frame and surface, discuss finishes and any quirks, and give you a fixed price. There are no hidden extras for prep, removal and refit of doors, or in-situ wrapping. If your job is larger or smaller than the ranges above, the quote will reflect that. We don&apos;t pressure you — you get the number and can decide in your own time.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              What&apos;s included
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              <li>Premium film (branded where specified) for colour retention and durability</li>
              <li>Full surface preparation: cleaning, degreasing, light sanding where needed</li>
              <li>Labour: doors removed and wrapped in our workshop; frames and carcass wrapped in-situ</li>
              <li>Reinstallation, hardware refitted, final walkround with you</li>
              <li>{siteConfig.guaranteeYears}-year guarantee on materials and workmanship, named on the job</li>
            </ul>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Why cheaper quotes can cost more
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The lowest quote isn&apos;t always the best value. Cheap film can fade, peel or scratch quickly. Skipping proper prep leads to bubbles and lifting. We use trade-level materials and prep so the wrap lasts {siteConfig.guaranteeYears}+ years with normal care. Paying a bit more upfront for quality film and proper installation usually saves you from early rework or replacement.
            </p>
          </div>

          <p className="text-center text-muted">
            For a longer read, see our{" "}
            <Link href="/blog/kitchen-wrapping-cost-guide/" className="text-accent hover:underline">
              kitchen wrapping cost guide
            </Link>{" "}
            and{" "}
            <Link href="/blog/kitchen-wrapping-vs-new-kitchen/" className="text-accent hover:underline">
              kitchen wrapping vs new kitchen
            </Link>{" "}
            on the blog.
          </p>
          <div className="text-center pt-4">
            <Link href="/contact/" className="btn-primary inline-block">
              Get a fixed quote for your kitchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
