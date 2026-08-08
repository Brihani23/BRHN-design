import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BRHN — Casa de diseño integral",
    template: "%s | BRHN",
  },

  description:
    "BRHN conecta diseño de producto, espacios, productos digitales, identidad y estrategia para convertir ideas en soluciones reales.",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://brhn-design.vercel.app"
  ),

  openGraph: {
    title: "BRHN — Casa de diseño integral",
    description:
      "Diseñamos lo que una idea necesita para existir.",
    type: "website",
    locale: "es_MX",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brhn-design.vercel.app",
    siteName: "BRHN",
  },

  twitter: {
    card: "summary_large_image",
    title: "BRHN — Casa de diseño integral",
    description:
      "Diseñamos lo que una idea necesita para existir.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}