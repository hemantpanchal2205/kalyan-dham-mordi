import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { siteConfig } from "@/lib/siteConfig";
import { getAboutPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Kalyan Dham Mordi | History, Lore & Significance | हमारे बारे में",
  description:
    "Explore the 50-60 year history of Shri Kali Kalyan Dham Mordi in Garhi Partapur, Banswara. Discover the four-armed folk deity Veer Kallaji Rathore, Gadipati Kunal Ji Sharma, Sunday Bhav Seva, and temple values.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kalyan Dham Mordi | History & Veer Kallaji Lore",
    description:
      "History and significance of Shri Kali Kalyan Dham Mordi, Rajasthan — Veer Kallaji Rathore lore, Sunday Bhav Seva, and sacred temple values.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: `${siteConfig.url}/images/image-3.jpeg`,
        width: 1200,
        height: 630,
        alt: "Shri Kali Kalyan Dham Mordi Main Entrance Gate",
      },
    ],
  },
};

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AboutClient />
    </>
  );
}
