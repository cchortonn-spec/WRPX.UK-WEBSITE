import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { getLocalBusinessSchema } from "@/lib/schema";

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
  title: "Kitchen Wrapping South Yorkshire | Local Specialist",
  description:
    "Kitchen wrapping South Yorkshire — Sheffield, Doncaster, Barnsley, Rotherham, Leeds, Huddersfield, Chesterfield. Transform in 1–3 days. Free quote.",
  alternates: {
    canonical: "https://www.wrpx.co.uk/",
  },
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Prefer PNG icons (updated logo); .ico as fallback for older browsers */}
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Search Console: add your property at https://www.wrpx.co.uk, choose HTML tag, copy the content value and paste below */}
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
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
      </body>
    </html>
  );
}
