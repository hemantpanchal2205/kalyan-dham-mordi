import type { Metadata, Viewport } from "next";
import { Yatra_One, Mukta } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";
import { getHinduTempleSchema, getWebSiteSchema } from "@/lib/schema";

const display = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#800A0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kalyan Dham Mordi | Official Website | श्री काली कल्याणगढ़ धाम मोरडी",
    template: "%s | Kalyan Dham Mordi",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Shri Kali Kalyan Dham Mandir Trust",
      url: siteConfig.url,
    },
  ],
  creator: "Shri Kali Kalyan Dham Mandir Trust",
  publisher: "Shri Kali Kalyan Dham Mandir Trust",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kalyan Dham Mordi | Official Website | श्री काली कल्याणगढ़ धाम मोरडी",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Kalyan Dham Mordi",
    locale: "hi_IN",
    alternateLocale: ["en_US", "gu_IN"],
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kalyan Dham Mordi Temple Premises - Shri Kali Kalyan Dham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalyan Dham Mordi | Official Website",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/images/kalyan-dham-logo.png" },
      { url: "/images/kalyan-dham-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/kalyan-dham-logo.png", sizes: "180x180" }],
    shortcut: ["/images/kalyan-dham-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const templeSchema = getHinduTempleSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="hi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(templeSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} font-body`}>
        <LanguageProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
