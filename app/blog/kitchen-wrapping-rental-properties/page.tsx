import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Wrapping for Rental Properties & Landlords | WRPX",
  description:
    "Why landlords and letting agents in South Yorkshire choose vinyl kitchen wrapping to refresh rental kitchens between tenancies — cost, time, and why it makes financial sense.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/kitchen-wrapping-rental-properties/" },
};

export default function KitchenWrappingRentalPropertiesPage() {
  return (
    <article className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Landlord Guide · 2026
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Kitchen Wrapping for Rental Properties — A Landlord&apos;s Guide
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Dated kitchens reduce rental value and tenant appeal. A new kitchen is expensive, takes
            weeks and often isn&apos;t necessary if the carcasses are solid. Kitchen wrapping is the
            option most South Yorkshire landlords don&apos;t know about — until they see the results.
          </p>
        </header>

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              The rental property kitchen problem
            </h2>
            <p className="mt-4">
              Rental kitchens age hard. Tenants change, use patterns vary, and kitchen finishes
              that looked reasonable in 2015 now look a decade out of date. Prospective tenants
              notice — and dated kitchens often translate to either lower rent acceptance or
              longer voids.
            </p>
            <p className="mt-4">
              The options most landlords consider:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li><strong>Replace the kitchen</strong> — £4,000–£12,000+, 2–4 weeks, loss of rental income during works</li>
              <li><strong>New doors only</strong> — £1,500–£3,000 for door supply and fitting, lead times for ordering</li>
              <li><strong>Paint the doors</strong> — £600–£1,500, slow drying, not durable in high-use environments</li>
              <li><strong>Kitchen wrapping</strong> — £850–£1,500 for a full kitchen, 1–3 days, kitchen functional throughout</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Why wrapping works specifically for rental properties
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Speed",
                  body: "1–3 days between tenancies. You don't need to extend a void to accommodate weeks of building work.",
                },
                {
                  title: "Cost",
                  body: "Typically 70–80% less than a new kitchen. Better return on investment for a property you're managing at yield.",
                },
                {
                  title: "Durability",
                  body: "Commercial-grade vinyl holds up well in rental environments. We back it with a 5-year guarantee — which outlasts most tenancy cycles.",
                },
                {
                  title: "Tenant appeal",
                  body: "A freshly wrapped kitchen photographs better, shows better and reduces void risk. Grey matt, white gloss or wood-effect finishes all read as modern and well-maintained.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What landlords typically invest
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 text-left font-semibold text-foreground">Kitchen scope</th>
                    <th className="py-2 text-left font-semibold text-foreground">Typical cost (South Yorkshire)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Doors and drawer fronts only (10–12)</td>
                    <td className="py-3">£550 – £800</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Full kitchen incl. plinths and carcass faces</td>
                    <td className="py-3">£850 – £1,200</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Full kitchen + worktops</td>
                    <td className="py-3">£1,100 – £1,800</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">New kitchen (equivalent scope)</td>
                    <td className="py-3">£5,000 – £12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm">
              Typical wrapping ROI in terms of rental increase: even a £50/month uplift in rent
              from a refreshed kitchen recovers a £1,200 wrap investment in 24 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What finish to choose for a rental kitchen
            </h2>
            <p className="mt-4">
              For rental properties, we generally recommend:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>White gloss or white matt</strong> — neutral, photographs well, appeals to
                the widest range of tenants. Easy to match if a door needs replacing later.
              </li>
              <li>
                <strong>Light grey soft-touch matt</strong> — modern, durable, doesn&apos;t show
                everyday marks as obviously as white gloss.
              </li>
              <li>
                <strong>Light oak woodgrain</strong> — warm, contemporary, pairs with any worktop
                and hardware, reads as quality.
              </li>
            </ul>
            <p className="mt-4">
              We&apos;d advise against very dark or bold finishes (black, deep green, bright blue) for
              rental properties — they reduce buyer/tenant pool and may not suit the next occupant.
              Neutral and contemporary is the right call for maximum appeal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Managing multiple properties
            </h2>
            <p className="mt-4">
              We work with a number of South Yorkshire landlords and letting agents who schedule
              wrapping jobs between tenancies. If you have multiple properties to refresh, we can
              plan and quote all of them in one survey visit, and schedule works to fit your
              void windows.
            </p>
            <p className="mt-4">
              We&apos;re happy to work directly with tenants in situ if there&apos;s a specific need — the
              process is clean and low-disruption enough that the kitchen stays in use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What to expect from the process
            </h2>
            <ol className="mt-4 list-inside list-decimal space-y-3">
              <li>
                <strong>Free survey</strong> — we visit the property, assess the kitchen, confirm
                suitability and give you a fixed quote. No cost, no obligation.
              </li>
              <li>
                <strong>Book the job</strong> — we schedule around your tenancy changeover window.
                We&apos;re used to working to tight turnaround times.
              </li>
              <li>
                <strong>1–3 day installation</strong> — kitchen stays functional. No structural work.
                Clean, professional, no mess left behind.
              </li>
              <li>
                <strong>Sign-off and guarantee</strong> — we do a full walkround with you (or your
                agent). 5-year guarantee issued on every job.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Landlord kitchen wrapping — areas we cover
            </h2>
            <p className="mt-4">
              We carry out landlord and rental kitchen wraps across South Yorkshire and the wider
              North, including:
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {[
                { city: "Sheffield", href: "/kitchen-wrapping-sheffield/" },
                { city: "Doncaster", href: "/kitchen-wrapping-doncaster/" },
                { city: "Leeds", href: "/kitchen-wrapping-leeds/" },
                { city: "Barnsley", href: "/kitchen-wrapping-barnsley/" },
                { city: "Rotherham", href: "/kitchen-wrapping-rotherham/" },
                { city: "Huddersfield", href: "/kitchen-wrapping-huddersfield/" },
                { city: "Chesterfield", href: "/kitchen-wrapping-chesterfield/" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded border border-border p-2 text-center text-accent hover:border-accent hover:underline"
                >
                  {item.city}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Get a quote for your rental property
            </h2>
            <p className="mt-4">
              Tell us the property location and approximate kitchen size and we&apos;ll arrange a free
              survey. Fixed quote, no obligation, 5-year guarantee on the work.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block text-center">
                Get a Free Quote
              </Link>
              <Link href="/kitchen-wrapping/" className="inline-block rounded-lg border border-border px-5 py-3 text-center text-sm text-foreground hover:border-accent">
                See the full kitchen wrapping service
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
