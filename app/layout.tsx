import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { getLocalBusinessSchema } from "@/lib/schema";
import { testimonials } from "@/lib/testimonials";

const GA_MEASUREMENT_ID = "G-4D32FG8MK0";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wrpx.co.uk"),
  title: "Kitchen & Commercial Vinyl Installation | South Yorkshire | WRPX",
  description:
    "WRPX installs kitchen wraps, commercial window graphics, wall wraps and floor graphics across South Yorkshire. 7+ years experience. 5-year guarantee. Free survey.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/",
  },
  openGraph: {
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const reviewSchema = testimonials.map((item) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: item.name,
    },
    reviewBody: item.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "WRPX",
    },
  }));
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WRPX",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviewSchema,
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Console: add your property at https://www.wrpx.co.uk, choose HTML tag, copy the content value and paste below */}
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {/* Google tag (gtag.js) — loads after page is interactive so GA4 receives data */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyCtaBar />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
