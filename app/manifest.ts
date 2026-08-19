import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shri Kali Kalyan Dham Mordi | श्री काली कल्याणगढ़ धाम मोरडी",
    short_name: "Kalyan Dham Mordi",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#380608",
    theme_color: "#800A0E",
    icons: [
      {
        src: "/images/kalyan-dham-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/kalyan-dham-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
