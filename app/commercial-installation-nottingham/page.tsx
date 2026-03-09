import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial & Retail Vinyl Installation Nottingham | WRPX",
  description:
    "Retail and commercial vinyl installation in Nottingham. Window graphics, wall wraps, floor vinyls. WRPX covers Nottingham city centre, Victoria Centre, retail parks and the M1 corridor.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/commercial-installation-nottingham/",
  },
};

export default function CommercialInstallationNottinghamPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Commercial &amp; Retail Vinyl Installation in Nottingham
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Nottingham marks the southern edge of WRPX&apos;s primary operating territory — accessible directly
            via the M1 from our South Yorkshire base. We cover Nottingham city centre, the Victoria Centre, the
            Broadmarsh catchment and the major retail and commercial parks on the city&apos;s periphery as part
            of multi-site programmes running across the M1 corridor.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            For brands and agencies managing installation programmes that span Yorkshire and the East Midlands,
            WRPX provides seamless coverage from Sheffield to Nottingham with one team, one contact and no
            quality drop as the programme moves south.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <div className="card-float p-8">
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>Victoria Centre, Broadmarsh area, Nottingham city centre retail and commercial estates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>M1 corridor: Sheffield · Chesterfield · Alfreton · Mansfield · Nottingham in a single programme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">✓</span>
                <span>East Midlands extension: Derby, Leicester, Lincoln available on enquiry</span>
              </li>
            </ul>
          </div>
          <div className="card-float mt-8 overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/commercial/IMG_8778_Original-0eae16a7-84f7-4a45-97a2-69c7967fb0bd.png"
                alt="Branded tech fixture wrap suitable for Nottingham and wider M1 corridor retail."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Get a Commercial Quote for Nottingham
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Nottingham enquiries: <strong>07398 395417</strong> ·{" "}
            <a href="mailto:wrpx.uk@gmail.com" className="text-accent hover:underline">
              wrpx.uk@gmail.com
            </a>
          </p>
          <Link href="/contact/" className="btn-primary mt-6 inline-block">
            Request a Nottingham commercial quote
          </Link>
        </div>
      </section>
    </div>
  );
}

