import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Worktop Wrapping Cost Guide 2026 — What to Expect | WRPX",
  description:
    "How much does worktop wrapping cost in 2026? A detailed breakdown of prices per metre, by kitchen size, and what affects the final quote. South Yorkshire guide.",
  alternates: { canonical: "https://www.wrpx.co.uk/blog/worktop-wrapping-cost/" },
};

export default function WorktopWrappingCostPage() {
  return (
    <article className="px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Cost Guide · 2026
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Worktop Wrapping Cost Guide 2026 — What to Expect
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Worktop wrapping is one of the most cost-effective ways to transform a kitchen surface.
            This guide covers what you should expect to pay in 2026, what affects the price, and
            how to get a fixed quote that doesn&apos;t change on the day.
          </p>
        </header>

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Worktop wrapping cost — quick summary
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 text-left font-semibold text-foreground">Kitchen type</th>
                    <th className="py-2 pr-4 text-left font-semibold text-foreground">Typical cost (2026)</th>
                    <th className="py-2 text-left font-semibold text-foreground">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Small (straight run, 2–3m)</td>
                    <td className="py-3 pr-4">£250 – £350</td>
                    <td className="py-3">Half day</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Medium (L-shape, 4–5m)</td>
                    <td className="py-3 pr-4">£350 – £500</td>
                    <td className="py-3">Full day</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Large (U-shape, island, 6m+)</td>
                    <td className="py-3 pr-4">£450 – £700</td>
                    <td className="py-3">1–2 days</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Upstands and splashback panels (add-on)</td>
                    <td className="py-3 pr-4">from £80</td>
                    <td className="py-3">Included in visit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">
              These are guide ranges for South Yorkshire. Your fixed price comes after a free survey —
              the final number doesn&apos;t change once it&apos;s confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What you get for your money
            </h2>
            <p className="mt-4">
              A professional worktop wrap includes: surface preparation (cleaning, degreasing and
              light sanding), film application, trimming to all edges and cutouts, sealing at joints
              and upstand intersections, and a full inspection before sign-off. It does not include
              removing appliances, disconnecting plumbing, or making structural changes — those
              aren&apos;t needed.
            </p>
            <p className="mt-4">
              The vinyl used for worktops is specifically rated for kitchen environments: heat
              resistant (up to 60–70°C surface temperature), moisture tolerant, and hardwearing for
              everyday use. We use branded commercial films, not cheap DIY alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              What affects the price?
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-3">
              <li>
                <strong>Total surface area</strong> — a 2m straight run costs less than a 6m
                U-shaped kitchen. The more metres, the higher the material and labour cost.
              </li>
              <li>
                <strong>Number of cutouts</strong> — sink and hob cutouts take more time and skill
                to wrap neatly. A kitchen with an under-mount sink and induction hob has more
                complex edges than a freestanding cooker setup.
              </li>
              <li>
                <strong>Film choice</strong> — standard vinyl and premium branded film (3M,
                CoverStyl) vary in cost. We&apos;ll tell you the difference at the survey.
              </li>
              <li>
                <strong>Upstands and splashbacks</strong> — if you&apos;re wrapping the upstand strip
                behind the hob, or a full splashback panel, that adds to the scope.
              </li>
              <li>
                <strong>Worktop condition</strong> — good flat laminate wraps cleanly. Delaminating,
                warped or heavily damaged surfaces may need additional prep or may not be suitable
                at all. We tell you at the survey.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Worktop wrapping vs. replacement — the real cost difference
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 text-left font-semibold text-foreground">Option</th>
                    <th className="py-2 pr-4 text-left font-semibold text-foreground">Typical cost (medium kitchen)</th>
                    <th className="py-2 text-left font-semibold text-foreground">Disruption</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Vinyl wrap (laminate worktop)</td>
                    <td className="py-3 pr-4">£350 – £500</td>
                    <td className="py-3">None — kitchen in use</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Replace laminate worktop</td>
                    <td className="py-3 pr-4">£600 – £1,200 + fitting</td>
                    <td className="py-3">Sink disconnection, 2–4 days</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Replace quartz / stone worktop</td>
                    <td className="py-3 pr-4">£1,500 – £3,000+</td>
                    <td className="py-3">Templating, 1–2 week lead time</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              The typical saving is 70–80% vs. laminate replacement, and even more vs. stone or
              quartz. The aesthetic result — particularly with marble and stone-effect vinyl — is
              comparable at a fraction of the cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              How does pricing work — fixed vs. hourly?
            </h2>
            <p className="mt-4">
              We price worktop wrapping jobs by fixed quote after a free survey, not by the hour.
              That means the price you&apos;re given is the price you pay — it doesn&apos;t change unless
              you change the scope.
            </p>
            <p className="mt-4">
              Some installers price by the hour, which creates uncertainty. If prep takes longer,
              the bill goes up. We don&apos;t work that way. Free survey, fixed number, confirmed in
              writing before we start.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Should I also wrap the kitchen doors at the same time?
            </h2>
            <p className="mt-4">
              If you&apos;re updating your worktops, it usually makes sense to do the doors at the same
              visit. One call-out, one set of prep, one fixed total. The combined cost of doors plus
              worktops is lower than two separate jobs, and the transformation is complete rather
              than partial.
            </p>
            <p className="mt-4">
              A typical complete kitchen wrap (doors, drawer fronts, plinths and worktops) in South
              Yorkshire falls between £850 and £1,500. That&apos;s still 70–80% less than a new kitchen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Worktop wrapping in South Yorkshire — where we cover
            </h2>
            <p className="mt-4">
              We cover Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield and Chesterfield
              for worktop wrapping. Each city page has local pricing details and FAQs:
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm">
              {[
                { city: "Sheffield", href: "/worktop-wrapping-sheffield/" },
                { city: "Doncaster", href: "/worktop-wrapping-doncaster/" },
                { city: "Leeds", href: "/worktop-wrapping-leeds/" },
                { city: "Barnsley", href: "/worktop-wrapping-barnsley/" },
                { city: "Rotherham", href: "/worktop-wrapping-rotherham/" },
                { city: "Huddersfield", href: "/worktop-wrapping-huddersfield/" },
                { city: "Chesterfield", href: "/worktop-wrapping-chesterfield/" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-accent hover:underline">
                    Worktop wrapping {item.city}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Get a fixed price for your worktops
            </h2>
            <p className="mt-4">
              The best way to get an accurate price is a free survey. We visit, assess your worktop
              condition, measure accurately and confirm suitability. You get a fixed written quote
              before we do any work.
            </p>
            <div className="mt-6 text-center">
              <Link href="/kitchen-wrapping-quote/" className="btn-primary inline-block">
                Book Your Free Survey
              </Link>
            </div>
            <p className="mt-4 text-center text-sm">
              Or see the{" "}
              <Link href="/worktop-wrapping/" className="text-accent hover:underline">
                full worktop wrapping service page
              </Link>{" "}
              and{" "}
              <Link href="/kitchen-wrapping-cost/" className="text-accent hover:underline">
                complete kitchen cost guide
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
