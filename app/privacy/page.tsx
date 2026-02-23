import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "WRPX privacy policy — how we use your data when you contact us or book a kitchen wrapping job. We do not sell or share your data.",
  alternates: { canonical: "https://www.wrpx.co.uk/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              We respect your privacy. WRPX does not sell or share your personal data with third parties for marketing.
            </p>
            <p>
              When you contact us (via the form, phone or email), we use your details only to respond to your enquiry and, if you go ahead, to deliver and guarantee your kitchen wrapping job. We keep contact and job records only as long as needed for that purpose and for our legal obligations.
            </p>
            <p>
              We do not use cookies for tracking or advertising. Our site may use essential cookies for basic operation only.
            </p>
            <p>
              For a full privacy policy or to ask about your data, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
