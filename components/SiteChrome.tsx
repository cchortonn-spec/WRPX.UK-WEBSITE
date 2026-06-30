"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isJarvis = pathname?.startsWith("/jarvis");

  if (isJarvis) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pb-4 lg:pb-0">{children}</main>
      <Footer />
      <StickyCtaBar />
      <WhatsAppFloat />
    </>
  );
}
