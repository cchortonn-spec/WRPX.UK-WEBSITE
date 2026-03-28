import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retail Graphics & Signage Installer Doncaster | WRPX",
  description:
    "Retail graphics and signage installation in Doncaster — window graphics, wall wraps, floor graphics, shop fronts and POS. WRPX covers Rotherham, Barnsley, Sheffield and South Yorkshire. 7+ years professional application.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-doncaster/",
  },
};

export default function CommercialInstallationDoncasterPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Retail Graphics &amp; Vinyl Signage in Doncaster
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            WRPX covers Doncaster and the surrounding South Yorkshire area as part of our regular commercial
            installation operation. From the Frenchgate Centre and Lakeside Village to the Wheatley Hall Road
            retail parks and commercial premises across the Doncaster borough, our crews are on the road in DN
            postcode territory every week.
          </p>
          <p className="mt-4 text-sm italic text-muted">
            &quot;Searching for a retail graphics installer near Doncaster? Our crews cover Doncaster, Rotherham,
            Barnsley and all areas across South Yorkshire every week of the year.&quot;
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">What We Install in Doncaster</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Window graphics, wall wraps, floor graphics, shop front vinyls, POS display graphics, commercial
              interior wrapping and multi-site rollout installation. The full WRPX commercial service, delivered
              across Doncaster and the surrounding area with no additional mobilisation costs.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">The South Yorkshire Retail Landscape</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Doncaster sits at the intersection of the M18, M180 and A1(M) — a natural logistics hub for
              installation programmes covering South Yorkshire, East Yorkshire and North Lincolnshire
              simultaneously. The Frenchgate Centre anchors Doncaster&apos;s town centre retail, complemented by
              major retail park provision along Wheatley Hall Road and the Lakeside Village outlet destination.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              WRPX covers Doncaster and the surrounding area as part of its regular South Yorkshire operation —
              with rapid mobilisation across the M18 and A630 corridor for both planned programmes and urgent
              single-site visits.
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Who We Work With Commercially in Doncaster
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              {[
                "Marketing agencies running retail campaigns who need a reliable installation partner",
                "Print management companies looking for a trusted Yorkshire installation partner",
                "Large-format print houses offering a print-and-install service to clients",
                "Signage companies subcontracting specialist vinyl application",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-muted">
              &quot;We work on a white-label basis for agencies and print companies across Yorkshire. Your
              client sees your name — WRPX handles the application.&quot;
            </p>
          </div>

          <div className="card-float p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Retail park window graphics in Doncaster
            </h2>
            <div className="mt-4 relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/commercial/IMG_6661_Original-3023fb2d-7373-407e-97a6-adf8a83cd434.png"
                alt="Installation team applying large format vinyl graphics to retail park glazing."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">Areas Covered from Doncaster</h2>
          <p className="mt-4 text-muted">
            Rotherham · Barnsley · Sheffield · Thorne · Mexborough · Conisbrough · Bawtry · Scunthorpe · Worksop
            · Retford
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Get a Commercial Quote for Doncaster
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Call 07398 395417 or email{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>{" "}
            with your Doncaster project details.
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Doncaster commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

