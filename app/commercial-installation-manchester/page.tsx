import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Manchester | WRPX",
  description:
    "Retail graphics and signage installation in Manchester — window graphics, wall wraps, floor graphics, shop fronts and POS. WRPX covers Salford, Stockport, Bolton and Greater Manchester. 7+ years professional application.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-manchester/",
  },
};

export default function CommercialInstallationManchesterPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Manchester
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX delivers retail graphics and signage installation across Greater Manchester and the North West as part of
            our regular Northern England operation. From the Manchester Arndale and Trafford Centre to
            Spinningfields, Salford Quays and the wider Greater Manchester retail and commercial network, we
            provide consistent, high-quality installation for brands, agencies and print companies with
            Manchester-area sites on their estate.
          </p>
          <p className="mt-4 text-sm italic text-muted">
            &quot;Searching for a retail graphics installer near Manchester? Our crews cover Manchester, Salford,
            Stockport and across Greater Manchester regularly.&quot;
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">What We Install in Manchester</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Window graphics, wall wraps, floor graphics, shop front vinyls, POS display graphics, commercial
              interior wrapping and multi-site rollout installation. The full WRPX commercial service, delivered
              across Greater Manchester with the same South Yorkshire preparation standards.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">The Greater Manchester Retail Landscape</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Manchester is one of the UK&apos;s highest-density retail environments — the Arndale Centre,
              Trafford Centre and the rapidly expanding city-centre retail and leisure district collectively
              represent some of the busiest retail real estate in the country. For brands running campaigns
              across the North, Manchester is always on the schedule.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From our South Yorkshire base we cover Greater Manchester and the M60 orbital corridor regularly —
              both for standalone commercial projects and as part of multi-site programmes running across
              Yorkshire, the North West and the East Midlands simultaneously.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Trafford Centre &amp; North West campaigns
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/commercial/IMG_8705_Original-b3953c00-6261-4f12-8585-686ef887d10d.png"
                  alt="Large entrance banner being installed at a Manchester shopping centre."
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/commercial/IMG_6128_Original-cf61ab9e-dc6a-4c8a-8d88-383674928661.png"
                  alt="Corner view of a large food retail window graphic installed around a store entrance."
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">Areas Covered from Manchester</h2>
          <p className="mt-4 text-muted">
            Salford · Stockport · Bolton · Oldham · Rochdale · Bury · Altrincham · Sale · Stretford · Wigan
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Get a Commercial Quote for Manchester
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Call 07398 395417 or email{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>{" "}
            with your Manchester or North West project details.
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Manchester commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

