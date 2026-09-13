import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Graphics Installation: A Guide for Sign Companies | WRPX",
  description:
    "How sign companies should approach subcontracting window graphics installation — material prep, site logistics, white-label working and what to look for in a trade installation partner.",
  alternates: {
    canonical:
      "https://www.wrpx.co.uk/blog/window-graphics-installation-guide-for-sign-companies/",
  },
};

export default function WindowGraphicsInstallationGuideForSignCompaniesPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          B2B · Installation Guides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Window Graphics Installation: A Guide for Sign Companies
        </h1>
        <p className="mt-4 text-muted">
          <time dateTime="2026-07-08">8 July 2026</time> · 8 min read
        </p>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Window graphics are one of the most common subcontract installation jobs for sign companies —
          and one of the most avoidable sources of complaints, callbacks and client relationship damage.
          This guide covers what sign companies need to know before subcontracting window graphics
          installation: material handling, site preparation, white-label working and how to choose an
          installer who doesn&apos;t let you down.
        </p>
      </header>

      <section className="prose-custom space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Why window graphics installation is harder than it looks
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A large-format window graphic looks simple: printed vinyl, clean glass, done. In practice,
            the list of things that can go wrong is long — and almost all of them are installers&apos;
            problems, not production problems.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Existing graphics not fully removed. Surface contamination from cleaning products, silicone or
            signage fixings. Application in direct sunlight on a hot day (adhesive activates before
            positioning is confirmed). Bubbles caused by inadequate squeegee technique. Edges lifting within
            weeks because the glass edge was never cleaned. Incorrect overlap on mullions leading to a visible
            seam that wasn&apos;t in the artwork.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            None of these are production problems — the print came off fine. But your client sees a failed
            install and blames your company. When you&apos;ve subcontracted the installation, you&apos;re
            still the one managing the callback.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Choosing the right installation partner and briefing them properly removes most of these risks.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            What to include in your installation brief
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A complete installation brief for window graphics should include:
          </p>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">1.</span>
              <div>
                <strong className="text-foreground">Site address and access details</strong> — when the site
                is accessible, any out-of-hours requirements, parking and loading access, and whether there
                are centre management or landlord contact requirements
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">2.</span>
              <div>
                <strong className="text-foreground">Substrate description</strong> — glass type (toughened,
                float, anti-graffiti coated), whether existing graphics are present and what they are,
                any previous adhesive residue
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">3.</span>
              <div>
                <strong className="text-foreground">Graphic specification</strong> — material type, dimensions,
                application method (wet or dry), any overlap or seam instructions where panels join, and
                orientation notes if the graphic has no obvious top/bottom
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">4.</span>
              <div>
                <strong className="text-foreground">Application environment</strong> — whether the glazing
                faces direct sun at the time of installation (affects adhesive open time), internal or
                external application, and any temperature or weather restrictions
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">5.</span>
              <div>
                <strong className="text-foreground">Sign-off requirements</strong> — whether you want photo
                documentation, what format (per panel or per location), and whether the installer should
                contact you before leaving site or send the pack after
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">6.</span>
              <div>
                <strong className="text-foreground">White-label instructions</strong> — whether you need
                unbranded vehicles, what name should appear on any site documentation, and whether the
                installer should communicate with the end client directly or through you only
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Material handling — what your installer needs from you
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            The most common material-handling problem in window graphics installation is the print arriving
            on site in a condition the installer can&apos;t work with. This is almost always avoidable.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            <strong className="text-foreground">Rolling vs. flat.</strong> Large window graphics should be
            rolled face-out on a core — never folded, never rolled too tightly. If a graphic arrives
            creased, it goes on creased. There&apos;s no field fix for a fold crease in a large-format print.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            <strong className="text-foreground">Application tape.</strong> If the graphic includes cut vinyl
            or has already been weeded, confirm whether application tape is included and whether the installer
            needs to apply it or whether it&apos;s pre-taped. Don&apos;t assume.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            <strong className="text-foreground">Liner condition.</strong> If the backing liner has been
            folded or heavily rolled on a small core, the adhesive layer can deform. Pre-flight the material
            before it leaves your production facility, not on site.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            <strong className="text-foreground">Delivery direct to installer.</strong> For large jobs,
            coordinate direct delivery of material to the installation crew rather than relying on the
            installer to collect. Reduces handling touchpoints and the risk of damage in transit.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Surface preparation — the installer&apos;s responsibility
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Good window graphics installation starts with the glass, not the graphic. A proper installation
            process includes:
          </p>
          <ul className="mt-4 space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>Removal of any existing graphics, including all adhesive residue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                Glass degreased with IPA (isopropyl alcohol) — not water or glass cleaner, which leaves
                residue that compromises adhesion
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                Edge sealing checked — if the graphic runs to the edge of the pane, the edge application
                method needs to be confirmed and followed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                Anti-graffiti or low-energy surface coatings identified — some coated glasses require primer
                for long-term adhesion; skipping this step leads to early lifting
              </span>
            </li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            A good installer will flag substrate issues before applying material. If your subcontract
            installer is going straight to installation without a surface assessment, that&apos;s a red flag.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Multi-site window graphics programmes
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Multi-site window graphics are where the choice of installation partner really matters. For a
            national retail client with 20 Yorkshire locations, the installation quality needs to be the
            same at store 20 as it was at store 1. That requires:
          </p>
          <ul className="mt-4 space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>Consistent crew — not different subcontractors at different sites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                Standardised documentation — photo packs in the same format for every location, making it
                easy for you to review and forward to your client
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                Regional coverage without a premium — using a local Yorkshire installer for Yorkshire sites
                instead of national contractors with day-rate travel cost added
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent">✓</span>
              <span>
                A snagging process — what happens when one install has an issue and needs to be corrected
                before the client sees it
              </span>
            </li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            For multi-site Yorkshire window graphics programmes, WRPX operates as a single consistent crew
            across all South Yorkshire and West Yorkshire locations — same standards, same documentation,
            consolidated reporting.
          </p>
          <p className="mt-4">
            <Link href="/multi-site-rollout-installation/" className="text-accent hover:underline">
              Multi-site rollout installation →
            </Link>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            What to ask a subcontract window graphics installer before booking
          </h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">1.</span>
              <span>
                <strong className="text-foreground">How do you prep the surface before application?</strong>{" "}
                — If the answer doesn&apos;t include IPA cleaning and residue removal, find someone else.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">2.</span>
              <span>
                <strong className="text-foreground">What documentation do you provide?</strong>{" "}
                — You want a photo pack per site: before, during and completed. Non-negotiable for any
                client-facing job.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">3.</span>
              <span>
                <strong className="text-foreground">Can you work white-label?</strong>{" "}
                — Unbranded vehicles, your documentation, no direct client contact without your approval.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">4.</span>
              <span>
                <strong className="text-foreground">What do you do if there&apos;s a substrate problem?</strong>{" "}
                — They should flag it to you before applying, not apply and hope.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-accent font-bold">5.</span>
              <span>
                <strong className="text-foreground">Do you have experience with anti-graffiti coated glass?</strong>{" "}
                — Low-energy surfaces require different preparation. If they&apos;ve never encountered this,
                it&apos;s a risk on premium retail installs.
              </span>
            </li>
          </ul>
        </div>

        <div className="card-float border border-accent/40 p-6">
          <h2 className="text-lg font-semibold text-foreground">
            WRPX — window graphics installation for sign companies in Yorkshire
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            WRPX is an installation-only partner for sign companies, print houses and marketing agencies
            with window graphics jobs across South Yorkshire and the M1 corridor. We prepare surfaces
            correctly, install to spec and deliver photo sign-off packs as standard — white-label by default.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href="/sign-company-installation-partner/" className="text-accent hover:underline">
              Sign company installation partner
            </Link>
            <Link href="/shop-front-graphics-installation/" className="text-accent hover:underline">
              Shop front graphics installation
            </Link>
            <Link href="/subcontract-vinyl-installation-yorkshire/" className="text-accent hover:underline">
              Yorkshire subcontract hub
            </Link>
            <Link href="/contact/" className="btn-primary inline-block text-sm">
              Discuss a job
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">Related reading</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>
              <Link href="/blog/why-sign-companies-use-subcontract-installers/" className="text-accent hover:underline">
                Why sign companies use subcontract installers — and how to choose one
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-brief-an-installation-subcontractor/" className="text-accent hover:underline">
                How to brief an installation subcontractor
              </Link>
            </li>
            <li>
              <Link href="/blog/subcontract-installation-checklist-for-sign-companies/" className="text-accent hover:underline">
                Subcontract installation checklist for sign companies
              </Link>
            </li>
            <li>
              <Link href="/blog/multi-site-rollout-planning-guide-for-agencies/" className="text-accent hover:underline">
                Multi-site rollout planning guide for agencies
              </Link>
            </li>
            <li>
              <Link href="/window-film/frosted-window-film/" className="text-accent hover:underline">
                Frosted &amp; privacy window film service
              </Link>
            </li>
            <li>
              <Link href="/window-film/glass-manifestation/" className="text-accent hover:underline">
                Glass manifestation (DDA / Building Regs)
              </Link>
            </li>
            <li>
              <Link href="/window-film/commercial-window-film/" className="text-accent hover:underline">
                Commercial window film services
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
