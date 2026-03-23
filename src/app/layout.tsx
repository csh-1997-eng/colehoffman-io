/**
 * Copyright (c) 2026 Cole Hoffman
 * Licensed under MIT License - see LICENSE file for details
 *
 * Component: layout.tsx
 * Purpose: Root layout with fonts, metadata, and OG tags
 */

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cole Hoffman | Applied AI Engineer",
  description:
    "I build production AI systems that change how decisions get made. Forward-deployed, founding engineer, applied AI roles.",
  metadataBase: new URL("https://colehoffman.io"),
  alternates: {
    canonical: "https://colehoffman.io",
  },
  openGraph: {
    title: "Cole Hoffman | Applied AI Engineer",
    description:
      "I build production AI systems that change how decisions get made. Forward-deployed, founding engineer, applied AI roles.",
    url: "https://colehoffman.io",
    siteName: "Cole Hoffman",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cole Hoffman | Applied AI Engineer",
    description:
      "I build production AI systems that change how decisions get made. Forward-deployed, founding engineer, applied AI roles.",
    creator: "@lordcolton_exe",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
