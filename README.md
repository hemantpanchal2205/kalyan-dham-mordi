# श्री राधा कृष्ण मंदिर — Website

Next.js 14 (App Router) + Tailwind CSS से बनी मंदिर की वेबसाइट।

## Pages
- `/` — Home (हीरो, आरती समय, quick links)
- `/about` — About Us (इतिहास, मूल्य, ट्रस्ट)
- `/gallery` — Gallery (image grid)
- `/events` — Events (उत्सव timeline)
- `components/Header.tsx`, `components/Footer.tsx`

## चलाने के लिए (Setup)

```bash
npm install
npm run dev
```

फिर ब्राउज़र में खोलें: http://localhost:3000

Production build के लिए:

```bash
npm run build
npm run start
```

## बदलाव कैसे करें
- मंदिर का नाम, पता, फ़ोन नंबर, timings: `components/Header.tsx` और `components/Footer.tsx` में बदलें।
- Colors: `tailwind.config.ts` में `maroon`, `marigold`, `gold`, `ivory` values बदलें।
- Gallery images: `app/gallery/page.tsx` में `gallery` array — अपनी खुद की फ़ोटो `public/` फ़ोल्डर में डालकर उनका path (`/photo.jpg`) दें।
- Events: `app/events/page.tsx` में `events` array।

अभी images Unsplash से demo के तौर पर load हो रही हैं — production में अपने मंदिर की असली फ़ोटो लगाना बेहतर रहेगा।
