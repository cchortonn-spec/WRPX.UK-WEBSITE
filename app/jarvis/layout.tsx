import type { Metadata } from "next";
import { JarvisLayoutClient } from "./layout-client";

export const metadata: Metadata = {
  title: "Jarvis",
  robots: {
    index: false,
    follow: false,
  },
};

export default function JarvisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <JarvisLayoutClient>{children}</JarvisLayoutClient>;
}
