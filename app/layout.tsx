import type { Metadata } from "next";
import { Yatra_One, Mukta } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const display = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "श्री काली कल्याणगढ़ धाम मोरडी़ | Shri Kali Kalyan Dham Mordi",
  description:
    "श्री काली कल्याणगढ़ धाम मोरडी़ की आधिकारिक वेबसाइट — दर्शन समय, आरती, उत्सव और मंदिर की गैलरी।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className={`${display.variable} ${body.variable} font-body`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
