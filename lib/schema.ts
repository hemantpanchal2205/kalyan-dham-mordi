import { siteConfig } from "./siteConfig";

/**
 * Helper to build production-grade Schema.org JSON-LD objects
 * using accurate information present in the Kalyan Dham Mordi website.
 */

export function getHinduTempleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HinduTemple", "Place", "LocalBusiness"],
    "@id": `${siteConfig.url}/#hindu-temple`,
    name: "Shri Kali Kalyan Dham Mordi",
    alternateName: [
      "श्री काली कल्याणगढ़ धाम मोरडी",
      "Kalyan Dham Mordi",
      "Kalyan Dham",
      "Kalyan Dham Mordi Mandir",
      "Kalyan Dham Mordi Temple",
      "Kalyan Dham Mordi Rajasthan",
      "Kallaji Rathore Mandir Mordi",
      "Veer Kallaji Bavji Dham Mordi",
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: [
      `${siteConfig.url}/images/image-41.jpg`,
      `${siteConfig.url}/images/image-3.jpeg`,
      `${siteConfig.url}/images/image-14.jpeg`,
      `${siteConfig.url}/images/image-27.jpeg`,
    ],
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.timings.openingTime,
        closes: siteConfig.timings.closingTime,
      },
    ],
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.mapsUrl,
    ],
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    priceRange: "Free",
    publicAccess: true,
    isAccessibleForFree: true,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: "Kalyan Dham Mordi",
    alternateName: "श्री काली कल्याणगढ़ धाम मोरडी",
    description: siteConfig.description,
    inLanguage: ["hi", "en", "gu"],
    publisher: {
      "@id": `${siteConfig.url}/#hindu-temple`,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getJanmotsavEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteConfig.url}/events#janmotsav`,
    name: "Shri Kallaji Rathore Janmotsav (श्री कल्लाजी राठौड़ जन्मोत्सव)",
    alternateName: "Kalyan Dham Mordi Annual Janmotsav Event",
    description:
      "Auspicious annual birth festival of Shri Kallaji Rathore Maharaj at Shri Kali Kalyan Dham Mordi featuring special pooja, aarti, dhwaja hoisting, bhajans, shobhayatra, and maha prasadi bhandara.",
    startDate: "2026-08-20T10:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Shri Kali Kalyan Dham Mordi",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
    },
    image: [
      `${siteConfig.url}/images/image-14.jpeg`,
      `${siteConfig.url}/images/image-41.jpg`,
    ],
    organizer: {
      "@type": "Organization",
      name: "Shri Kali Kalyan Dham Mandir Trust",
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    isAccessibleForFree: true,
    inLanguage: ["hi", "en", "gu"],
  };
}

export function getGallerySchema(
  images: { id: number; src: string; alt: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${siteConfig.url}/gallery#image-gallery`,
    name: "Kalyan Dham Mordi Sacred Photo Gallery",
    alternateName: "श्री कल्याण धाम मोरडी चित्र दीर्घा (41 Photos)",
    description:
      "Complete photo gallery with 41 high-resolution images of Shri Kali Kalyan Dham Mordi temple premises, daily darshan, aarti rituals, and festive celebrations.",
    url: `${siteConfig.url}/gallery`,
    about: {
      "@id": `${siteConfig.url}/#hindu-temple`,
    },
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${siteConfig.url}${img.src}`,
      caption: img.alt,
      name: `Kalyan Dham Mordi Photo ${img.id}`,
    })),
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about#about-page`,
    name: "About Kalyan Dham Mordi | History, Lore & Significance",
    alternateName: "श्री कल्याण धाम मोरडी का इतिहास व वीर गाथा",
    description:
      "Historical lore and significance of Shri Kali Kalyan Dham Mordi, built 50 to 60 years ago in Garhi Partapur, Banswara. Learn about Veer Kallaji Rathore (the four-armed deity), Gadipati Kunal Ji Sharma, and temple values.",
    url: `${siteConfig.url}/about`,
    mainEntity: {
      "@id": `${siteConfig.url}/#hindu-temple`,
    },
  };
}
