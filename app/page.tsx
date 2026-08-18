
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "हमारे बारे में",
    desc: "मंदिर का इतिहास, स्थापना और आध्यात्मिक परंपरा जानें।",
    href: "/about",
    icon: "🛕",
  },
  {
    title: "गैलरी",
    desc: "उत्सवों, श्रृंगार और मंदिर परिसर की झलकियाँ देखें।",
    href: "/gallery",
    icon: "📸",
  },
  {
    title: "आगामी उत्सव",
    desc: "पर्व, विशेष पूजा और सामुदायिक आयोजनों की सूची।",
    href: "/events",
    icon: "🪔",
  },
];

const aartiTimes = [
  { name: "प्रातः आरती", time: "8:00 AM" },
  { name: "प्रातः दर्शन", time: "7:45 AM" },
  { name: "संध्य आरती", time: "7:30 PM" },
  { name: "संध्या दर्शन ", time: "7:00 PM" },
  // { name: "शयन आरती", time: "९:०० PM" },
];

const homeGalleryImages = [
  { id: 1, src: "/images/image-27.jpeg", alt: "कल्याण धाम मोरडी - चित्र 1" },
  { id: 2, src: "/images/image-36.jpeg", alt: "कल्याण धाम मोरडी - चित्र 2" },
  { id: 3, src: "/images/image-28.jpeg", alt: "कल्याण धाम मोरडी - चित्र 3" },
  { id: 4, src: "/images/image-29.jpeg", alt: "कल्याण धाम मोरडी - चित्र 4" },
  { id: 5, src: "/images/image-30.jpeg", alt: "कल्याण धाम मोरडी - चित्र 5" },
  { id: 6, src: "/images/image-10.jpeg", alt: "कल्याण धाम मोरडी - चित्र 6" },
  { id: 7, src: "/images/image-17.jpeg", alt: "कल्याण धाम मोरडी - चित्र 7" },
  { id: 8, src: "/images/image-37.jpeg", alt: "कल्याण धाम मोरडी - चित्र 8" },
  { id: 9, src: "/images/image-16.jpeg", alt: "कल्याण धाम मोरडी - चित्र 9" },
  { id: 10, src: "/images/image-12.jpeg", alt: "कल्याण धाम मोरडी - चित्र 10" },
];

export default function Home() {
  return (
    <>
      {/* Hero — the thesis: temple at first light, the day's rhythm of aarti */}
      <section className="relative overflow-hidden bg-diya-glow bg-maroon-dark">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-rise">
            <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-4">
              सनातन परंपरा • शांति • भक्ति
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight">
              जय श्री कल्याण  <br className="hidden sm:block" /> मंदिर में आपका स्वागत है
            </h1>
            <p className="mt-6 text-sandal/85 text-base sm:text-lg max-w-xl">
              यह मंदिर श्रद्धा और सेवा का केंद्र है, जहाँ प्रतिदिन आरती, भजन और
              सामुदायिक उत्सवों के माध्यम से भक्तों को भगवान के दर्शन का सौभाग्य प्राप्त होता है।
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="rounded-full bg-marigold px-7 py-3 font-semibold text-maroon-dark hover:bg-marigold-light transition-colors"
              >
                उत्सव कैलेंडर देखें
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-sandal/40 px-7 py-3 font-semibold text-ivory hover:bg-ivory/10 transition-colors"
              >
                मंदिर के बारे में
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[26rem] rounded-2xl overflow-hidden border border-marigold/30 shadow-2xl shadow-black/40">
            <Image
              src="/images/image-41.jpg"
              alt="कल्याण धाम मोरडी मंदिर दृश्य"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      {/* Today's aarti schedule — the recurring rhythm, so a real sequence with order that matters */}
      <section className="bg-ivory py-16" id="aarti">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              दैनिक आरती
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
              आज का दर्शन समय
            </h2>
          </div>
          <ol className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {aartiTimes.map((a, i) => (
              <li
                key={a.name}
                className="rounded-xl bg-sandal/60 border border-gold/30 px-4 py-6 text-center"
              >
                <span className="block text-xs text-maroon/60 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block font-display text-lg text-maroon">
                  {a.name}
                </span>
                <span className="block mt-1 text-ink/70 text-sm">{a.time}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured Upcoming Event Banner */}
      <section className="bg-gradient-to-b from-ivory via-sandal/30 to-sandal/50 py-16 sm:py-20 border-t border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
              विशेष पावन आयोजन
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
              आगामी भव्य उत्सव
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-maroon-dark text-ivory border-2 border-gold/40 shadow-2xl">
            {/* Background Diya Glow and Overlay */}
            <div className="absolute inset-0 bg-diya-glow opacity-60 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
              {/* Left Column: Event Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-marigold/20 border border-marigold/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-marigold">
                  <span>🪔</span> विशेष वार्षिकोत्सव • 20 अगस्त
                </div>

                <h3 className="font-display text-2xl sm:text-4xl text-ivory leading-snug">
                  भव्य जन्मोत्सव <br />
                  <span className="text-marigold">श्री कल्लाजी राठौड़ महाराज</span>
                </h3>

                <p className="text-sandal/85 text-sm sm:text-base leading-relaxed">
                  कल्याण धाम मोरडी में बाबाजी हुकुम श्री कल्लाजी राठौड़ महाराज का पावन जन्मोत्सव अत्यंत हर्षोल्लास व वैदिक रीति-रिवाजों के साथ मनाया जा रहा है।
                </p>

                {/* Event Schedule Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                    <span className="block text-xs text-marigold font-semibold">प्रातः 10:00 बजे</span>
                    <span className="font-display text-sm sm:text-base text-ivory">🔥 यज्ञ एवं हवन</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                    <span className="block text-xs text-marigold font-semibold">दोपहर 12:00 बजे</span>
                    <span className="font-display text-sm sm:text-base text-ivory">📖 भजन व सुंदरकाण्ड</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                    <span className="block text-xs text-marigold font-semibold">दोपहर 1:00 बजे</span>
                    <span className="font-display text-sm sm:text-base text-ivory">🪔 दिव्य महाआरती</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                    <span className="block text-xs text-marigold font-semibold">दोपहर 2:00 बजे</span>
                    <span className="font-display text-sm sm:text-base text-ivory">🍲 महाप्रसादी</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/events"
                    className="rounded-full bg-marigold px-7 py-3 text-sm sm:text-base font-semibold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg hover:scale-105"
                  >
                    उत्सव विवरण देखें →
                  </Link>
                  <a
                    href="tel:+917850918258"
                    className="rounded-full border border-gold/40 px-6 py-3 text-sm sm:text-base font-semibold text-ivory hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <span>📞</span> संपर्क करें
                  </a>
                </div>
              </div>

              {/* Right Column: Featured Image Banner */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[26rem] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-xl">
                <Image
                  src="/images/image-14.jpeg"
                  alt="श्री कल्लाजी महाराज जन्मोत्सव"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <span className="font-display text-sm sm:text-base text-ivory drop-shadow-md">
                    कल्याण धाम मोरडी • दीपोत्सव एवं उत्सव
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sandal/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              जानिए
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
              मंदिर से जुड़ें
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group rounded-2xl bg-ivory border border-gold/30 p-8 hover:border-marigold hover:shadow-lg hover:shadow-maroon/5 transition-all"
              >
                <span className="text-3xl">{h.icon}</span>
                <h3 className="font-display text-xl text-maroon mt-4 group-hover:text-marigold-dark transition-colors">
                  {h.title}
                </h3>
                <p className="text-ink/70 text-sm mt-2 leading-relaxed">
                  {h.desc}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-maroon group-hover:translate-x-1 transition-transform">
                  और देखें →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 10 Photos Gallery Showcase Section */}
      <section className="bg-ivory py-16 sm:py-20 border-t border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
              पावन दर्शन एवं झलकियाँ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
              मंदिर फोटो गैलरी
            </h2>
            <p className="mt-3 text-ink/75 max-w-xl mx-auto text-sm sm:text-base">
              कल्याण धाम मोरडी के पावन प्रांगण, दैनिक आरती और दिव्य उत्सवों की कुछ मनमोहक झलकियाँ।
            </p>
          </div>

          {/* 10 Photos Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {homeGalleryImages.map((img) => (
              <Link
                key={img.id}
                href="/gallery"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-gold/30 bg-maroon-dark/5 shadow-md hover:shadow-2xl hover:border-marigold transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  loading="lazy"
                />
                {/* Subtle Gradient Hover Overlay with Scale */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-3">
                  <span className="text-xs font-semibold text-ivory flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-marigold text-maroon-dark text-[11px] shadow">🔍</span>
                    <span>बड़ा देखें</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Golden View All Gallery Button */}
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 text-base font-bold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg hover:shadow-marigold/30 hover:scale-105"
            >
              <span>📸 संपूर्ण गैलरी देखें (41 छायाचित्र)</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Shloka strip — quiet devotional close */}
      <section className="bg-maroon py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-xl sm:text-2xl text-marigold leading-relaxed">
            "जहाँ वीरता का सम्मान होता है, वहाँ कल्लाजी का स्मरण होता है।"
          </p>
          <p className="mt-3 text-sandal/70 text-sm">
            — वीर कल्लाजी —
          </p>
        </div>
      </section>
      {/* Google Map & Location Section */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              स्थान व दिशा-निर्देश
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
              मंदिर कैसे पहुँचें
            </h2>
            <p className="mt-3 text-ink/70 text-sm sm:text-base max-w-xl mx-auto">
              श्री काली कल्याणगढ़ धाम मोरडी़, गढ़ी परतापुर, जिला बांसवाड़ा (राजस्थान)
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Address & Contact Info Card */}
            <div className="rounded-2xl bg-sandal/50 border border-gold/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl text-maroon mb-2 flex items-center gap-2">
                    <span className="text-2xl">📍</span> मंदिर का पता
                  </h3>
                  <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
                    श्री कल्याण धाम, ग्राम मोरडी,<br />
                    तहसील गढ़ी, परतापुर,<br />
                    जिला बांसवाड़ा, राजस्थान - 327022
                  </p>
                </div>

                <div className="border-t border-gold/30 pt-4">
                  <h3 className="font-display text-lg text-maroon mb-2 flex items-center gap-2">
                    <span className="text-xl">📞</span> संपर्क सूत्र
                  </h3>
                  <a
                    href="tel:+917850918258"
                    className="inline-block text-maroon-dark font-semibold text-base hover:text-marigold-dark transition-colors"
                  >
                    +91 78509 18258
                  </a>
                </div>

                <div className="border-t border-gold/30 pt-4">
                  <h3 className="font-display text-lg text-maroon mb-2 flex items-center gap-2">
                    <span className="text-xl">⏰</span> दर्शन समय
                  </h3>
                  <p className="text-ink/75 text-sm">
                    प्रातः ५:०० बजे से रात्रि ९:०० बजे तक<br />
                    <span className="text-xs text-maroon/80 font-medium">* रविवार को विशेष भाव सेवा</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://maps.app.goo.gl/qroE5jhHjdE4xSFq8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 font-semibold text-ivory hover:bg-maroon-light transition-colors text-sm shadow-md"
                >
                  <span>गूगल मैप पर मार्ग देखें</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Google Map iframe */}
            <div className="lg:col-span-2 relative min-h-[380px] rounded-2xl overflow-hidden border border-gold/40 shadow-lg bg-sandal/20">
              <iframe
                title="कल्याण धाम मोरडी गूगल मैप"
                src="https://maps.google.com/maps?q=23.591319,74.162613&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
