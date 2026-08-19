/**
 * Production Site Configuration for Kalyan Dham Mordi
 * Contains accurate, verified details from the temple project.
 */

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://kalyan-dham-mordi.vercel.app");

export const siteConfig = {
  name: "Kalyan Dham Mordi",
  nameHindi: "श्री काली कल्याणगढ़ धाम मोरडी",
  nameGujarati: "શ્રી કલ્યાણ ધામ મોરડી",
  tagline: "Sanatan Tradition • Peace • Devotion | सनातन परंपरा • शांति • भक्ति",
  description:
    "Official website of Shri Kali Kalyan Dham Mordi (श्री काली कल्याणगढ़ धाम मोरडी), Banswara, Rajasthan. Aarti timings, darshan schedule, history & gallery.",
  descriptionHindi:
    "श्री काली कल्याणगढ़ धाम मोरडी़ की आधिकारिक वेबसाइट — दर्शन समय, दैनिक आरती, वीर कल्लाजी राठौड़ इतिहास और 41 पावन तस्वीरों की गैलरी।",
  url: productionUrl,
  ogImage: "/images/image-41.jpg",
  logo: "/images/kalyan-dham-logo.png",
  phone: "+917850918258",
  phoneDisplay: "+91 78509 18258",
  address: {
    street: "Shri Kalyan Dham, Village Mordi, Tehsil Garhi, Partapur",
    streetHindi: "श्री कल्याण धाम, ग्राम मोरडी, तहसील गढ़ी, परतापुर",
    locality: "Garhi Partapur",
    city: "Banswara",
    state: "Rajasthan",
    postalCode: "327022",
    country: "IN",
    countryName: "India",
  },
  geo: {
    latitude: 23.591319,
    longitude: 74.162613,
  },
  mapsUrl: "https://maps.app.goo.gl/qroE5jhHjdE4xSFq8",
  instagramUrl:
    "https://www.instagram.com/shreekalyandham_mordi_partapur",
  whatsappUrl:
    "https://wa.me/917850918258?text=Jai%20Shri%20Kalyan%20%7C%20%E0%A4%9C%E0%A4%AF%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3",
  timings: {
    openingTime: "05:00",
    closingTime: "21:00",
    display: "5:00 AM – 9:00 PM",
    aarti: [
      { name: "Pratah Darshan (प्रातः दर्शन)", time: "7:45 AM" },
      { name: "Pratah Aarti (प्रातः आरती)", time: "8:00 AM" },
      { name: "Sandhya Darshan (संध्या दर्शन)", time: "7:00 PM" },
      { name: "Sandhya Aarti (संध्या आरती)", time: "7:30 PM" },
    ],
    specialDay: "Sunday Bhav Seva (रविवार विशेष भाव सेवा)",
  },
  keywords: [
    "Kalyan Dham Mordi",
    "Kalyan Dham",
    "Kalyan Dham Mordi Mandir",
    "Kalyan Dham Mordi Temple",
    "Kalyan Dham Mordi Rajasthan",
    "Kalyan Dham Mordi events",
    "Kalyan Dham Mordi gallery",
    "Shri Kali Kalyan Dham Mordi",
    "Kallaji Rathore Mandir Mordi",
    "Veer Kallaji Bavji Mordi",
    "Garhi Partapur Mandir Banswara",
    "Mordi Banswara Temple",
    "श्री काली कल्याणगढ़ धाम मोरडी",
    "कल्याण धाम मोरडी",
    "वीर कल्लाजी राठौड़ मंदिर मोरडी",
    "कल्याण धाम मोरडी आरती समय",
    "कल्याण धाम मोरडी गैलरी",
    "कल्याण धाम मोरडी उत्सव",
  ],
};
