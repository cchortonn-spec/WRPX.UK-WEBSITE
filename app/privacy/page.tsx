import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for WRPX kitchen wrapping.",
  alternates: { canonical: "https://wrpx.co.uk/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted">
            {/* TODO: add full privacy policy copy */}
            This page is a placeholder. Add your full privacy policy content
            here.
          </p>
        </div>
      </section>
    </div>
  );
}
