import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { siteConfig } from "@/lib/siteConfig";
import { getGallerySchema, getBreadcrumbSchema } from "@/lib/schema";
import { galleryImages } from "@/lib/galleryData";

export const metadata: Metadata = {
  title: "Kalyan Dham Mordi Gallery | 41 Sacred Photos & Moments | चित्र दीर्घा",
  description:
    "Explore the complete photo gallery of Shri Kali Kalyan Dham Mordi (41 high-resolution pictures). View sacred darshan, temple premises, sanctum sanctorum, aarti, and festive gatherings.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Kalyan Dham Mordi Gallery | 41 Photos & Moments",
    description:
      "41 sacred glimpses of Kalyan Dham Mordi temple premises, daily darshan, aarti rituals, and festive celebrations.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: `${siteConfig.url}/images/image-27.jpeg`,
        width: 1200,
        height: 630,
        alt: "Shri Kali Kalyan Dham Mordi Temple Photo Gallery",
      },
    ],
  },
};

export default function GalleryPage() {
  const gallerySchema = getGallerySchema(galleryImages);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <GalleryClient />
    </>
  );
}
