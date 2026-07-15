import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageTransition } from "@/components/layout/page-transition";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { ScrollToTop } from "@/components/site/scroll-to-top";

import "./globals.css";

export const metadata: Metadata = {
  title: "EVORIX | Annual Interschool Fest",
  description:
    "EVORIX is a premium interschool fest experience for competitions, culture, innovation, sportsmanship, and student leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950"
        >
          Skip to content
        </a>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
