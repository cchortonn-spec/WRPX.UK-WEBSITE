import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

type InternalLinksProps = {
  section1Title: string;
  section1Links: LinkItem[];
  section2Title: string;
  section2Links: LinkItem[];
};

export default function InternalLinks({
  section1Title,
  section1Links,
  section2Title,
  section2Links,
}: InternalLinksProps) {
  return (
    <section className="border-b border-border bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
          Explore More
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 border-b border-border pb-2 font-semibold text-foreground">
              {section1Title}
            </p>
            <ul className="space-y-2">
              {section1Links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 border-b border-border pb-2 font-semibold text-foreground">
              {section2Title}
            </p>
            <ul className="space-y-2">
              {section2Links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
