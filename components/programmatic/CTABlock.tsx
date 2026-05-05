import Link from "next/link";
import { programmaticBusinessContact } from "@/lib/programmatic-pages";

type CTABlockProps = {
  cityName: string;
  serviceName: string;
};

export default function CTABlock({ cityName, serviceName }: CTABlockProps) {
  return (
    <section className="bg-foreground px-4 py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
          Get Started
        </p>
        <h2 className="text-3xl font-bold text-background md:text-4xl">
          Ready for {serviceName} in {cityName}?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-background/80">
          Free quotes. No obligation. We cover {cityName} and surrounding areas.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-md bg-background px-8 py-4 text-sm font-bold text-foreground transition-opacity hover:opacity-90"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${programmaticBusinessContact.phoneE164}`}
            className="inline-flex items-center rounded-md border border-background/30 px-8 py-4 text-sm font-bold text-background transition-colors hover:border-background"
          >
            Call {programmaticBusinessContact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
