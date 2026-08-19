import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { siteConfig } from "@/lib/siteConfig";
import { getJanmotsavEventSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kalyan Dham Mordi | Official Website | श्री काली कल्याणगढ़ धाम मोरडी",
  description:
    "Official website of Shri Kali Kalyan Dham Mordi (श्री काली कल्याणगढ़ धाम मोरडी), Banswara, Rajasthan. Aarti timings, darshan schedule, history & gallery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kalyan Dham Mordi | Official Website | श्री काली कल्याणगढ़ धाम मोरडी",
    description:
      "Official website of Shri Kali Kalyan Dham Mordi — Aarti timings, darshan schedule, Veer Kallaji Rathore history, and 41 sacred photos.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Shri Kali Kalyan Dham Mordi Temple Premises",
      },
    ],
  },
};

export default function HomePage() {
  const eventSchema = getJanmotsavEventSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <HomeClient />
    </>
  );
}
