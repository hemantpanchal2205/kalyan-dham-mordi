import type { Metadata } from "next";
import EventsClient from "./EventsClient";
import { siteConfig } from "@/lib/siteConfig";
import { getJanmotsavEventSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kalyan Dham Mordi Events | Shri Kallaji Rathore Janmotsav | वार्षिकोत्सव",
  description:
    "Annual Shri Kallaji Rathore Janmotsav at Kalyan Dham Mordi (20 August). Check pooja schedule, aarti, bhajans, shobhayatra, and maha prasadi bhandara.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Kalyan Dham Mordi Events | Shri Kallaji Rathore Janmotsav",
    description:
      "Auspicious annual Janmotsav celebration of Shri Kallaji Rathore at Kalyan Dham Mordi — 20 August schedule, pooja, aarti, bhajans, and maha prasadi bhandara.",
    url: `${siteConfig.url}/events`,
    images: [
      {
        url: `${siteConfig.url}/images/image-14.jpeg`,
        width: 1200,
        height: 630,
        alt: "Shri Kallaji Rathore Janmotsav Celebration at Kalyan Dham Mordi",
      },
    ],
  },
};

export default function EventsPage() {
  const eventSchema = getJanmotsavEventSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events & Janmotsav", url: "/events" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <EventsClient />
    </>
  );
}
