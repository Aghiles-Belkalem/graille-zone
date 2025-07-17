import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graille Zone | Street Food à Cestas",
  description:
    "Graille Zone - Le meilleur de la street food à Cestas : burgers, tacos et sandwiches faits maison, frais et gourmands.",
  metadataBase: new URL("https://graille-zone.vercel.app"), // ✅ Vercel domain pour l’instant
  openGraph: {
    title: "Graille Zone | Street Food à Cestas",
    description:
      "Burgers, tacos et sandwiches faits maison, préparés avec passion à Cestas.",
    url: "https://graille-zone.vercel.app",
    siteName: "Graille Zone",
    images: [
      {
        url: "/images/gallery/logo graille zone.jpg",
        width: 800,
        height: 600,
        alt: "Logo Graille Zone",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#f3df00",
  robots: "index, follow",
  keywords: [
    "Graille Zone",
    "Street food Cestas",
    "Burgers maison",
    "Tacos faits maison",
    "Sandwichs frais",
    "Fast food Cestas",
  ],
  authors: [{ name: "Graille Zone" }],
  creator: "Graille Zone",
  publisher: "Graille Zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="modal-root" />
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

