"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ReelsSlider from "@/components/ReelsSlider";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();

  const aartiTimes = [
    { name: t("aartiPratahAarti"), time: "8:00 AM" },
    { name: t("aartiPratahDarshan"), time: "7:45 AM" },
    { name: t("aartiSandhyaAarti"), time: "7:30 PM" },
    { name: t("aartiSandhyaDarshan"), time: "7:00 PM" },
  ];

  const highlights = [
    {
      title: t("highlight1Title"),
      desc: t("highlight1Desc"),
      href: "/about",
      icon: "🛕",
    },
    {
      title: t("highlight2Title"),
      desc: t("highlight2Desc"),
      href: "/gallery",
      icon: "📸",
    },
    {
      title: t("highlight3Title"),
      desc: t("highlight3Desc"),
      href: "/events",
      icon: "🪔",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-diya-glow bg-maroon-dark">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="up" duration={500}>
            <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-4 font-semibold">
              {t("heroTag")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight">
              {t("heroTitle1")} <br className="hidden sm:block" /> {t("heroTitle2")}
            </h1>
            <p className="mt-6 text-sandal/85 text-base sm:text-lg max-w-xl leading-relaxed">
              {t("heroDesc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="rounded-full bg-marigold px-7 py-3 font-semibold text-maroon-dark hover:bg-marigold-light transition-colors"
              >
                {t("btnEventCalendar")}
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-sandal/40 px-7 py-3 font-semibold text-ivory hover:bg-ivory/10 transition-colors"
              >
                {t("btnAboutMandir")}
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200} duration={500}>
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
          </FadeIn>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      {/* Today's aarti schedule */}
      <section className="bg-ivory py-16" id="aarti">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
                {t("aartiTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
                {t("aartiTitle")}
              </h2>
            </div>
          </FadeIn>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aartiTimes.map((a, i) => (
              <FadeIn key={a.name} direction="up" delay={i * 100}>
                <li className="rounded-xl bg-sandal/60 border border-gold/30 px-4 py-6 text-center shadow-sm hover:shadow-md transition-shadow list-none">
                  <span className="block text-xs text-maroon/60 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-display text-lg text-maroon">
                    {a.name}
                  </span>
                  <span className="block mt-1 text-ink/70 text-sm font-medium">{a.time}</span>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured Upcoming Event Banner */}
      <section className="bg-gradient-to-b from-ivory via-sandal/30 to-sandal/50 py-16 sm:py-20 border-t border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
                {t("eventBannerTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
                {t("eventBannerTitle")}
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-maroon-dark text-ivory border-2 border-gold/40 shadow-2xl">
              {/* Background Diya Glow and Overlay */}
              <div className="absolute inset-0 bg-diya-glow opacity-60 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
                {/* Left Column: Event Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-marigold/20 border border-marigold/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-marigold">
                    <span>🪔</span> {t("eventBannerBadge")}
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl text-ivory leading-snug">
                    {t("eventBannerHeading1")} <br />
                    <span className="text-marigold">{t("eventBannerHeading2")}</span>
                  </h3>

                  <p className="text-sandal/85 text-sm sm:text-base leading-relaxed">
                    {t("eventBannerDesc")}
                  </p>

                  {/* Event Schedule Pills */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                      <span className="block text-xs text-marigold font-semibold">{t("pill1Time")}</span>
                      <span className="font-display text-sm sm:text-base text-ivory">{t("pill1Title")}</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                      <span className="block text-xs text-marigold font-semibold">{t("pill2Time")}</span>
                      <span className="font-display text-sm sm:text-base text-ivory">{t("pill2Title")}</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                      <span className="block text-xs text-marigold font-semibold">{t("pill3Time")}</span>
                      <span className="font-display text-sm sm:text-base text-ivory">{t("pill3Title")}</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-gold/25 p-3 sm:p-4">
                      <span className="block text-xs text-marigold font-semibold">{t("pill4Time")}</span>
                      <span className="font-display text-sm sm:text-base text-ivory">{t("pill4Title")}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href="/events"
                      className="rounded-full bg-marigold px-7 py-3 text-sm sm:text-base font-semibold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg hover:scale-105"
                    >
                      {t("btnEventDetails")}
                    </Link>
                    <a
                      href="tel:+917850918258"
                      className="rounded-full border border-gold/40 px-6 py-3 text-sm sm:text-base font-semibold text-ivory hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <span>📞</span> {t("btnContact")}
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
                      {t("bannerImageLabel")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-sandal/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
                {t("highlightsTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
                {t("highlightsTitle")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <FadeIn key={h.href} direction="up" delay={idx * 120}>
                <Link
                  href={h.href}
                  className="group block rounded-2xl bg-ivory border border-gold/30 p-8 hover:border-marigold hover:shadow-lg hover:shadow-maroon/5 transition-all h-full"
                >
                  <span className="text-3xl">{h.icon}</span>
                  <h3 className="font-display text-xl text-maroon mt-4 group-hover:text-marigold-dark transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-ink/70 text-sm mt-2 leading-relaxed">
                    {h.desc}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-maroon group-hover:translate-x-1 transition-transform">
                    {t("seeMore")}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Photos Gallery Showcase Section */}
      <section className="bg-ivory py-16 sm:py-20 border-t border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
                {t("galleryShowcaseTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
                {t("galleryShowcaseTitle")}
              </h2>
              <p className="mt-3 text-ink/75 max-w-xl mx-auto text-sm sm:text-base">
                {t("galleryShowcaseDesc")}
              </p>
            </div>
          </FadeIn>

          {/* 10 Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {homeGalleryImages.map((img, idx) => (
              <FadeIn key={img.id} direction="up" delay={(idx % 5) * 80}>
                <Link
                  href="/gallery"
                  className="group relative aspect-square block overflow-hidden rounded-2xl border border-gold/30 bg-maroon-dark/5 shadow-md hover:shadow-2xl hover:border-marigold transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
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
                      <span>{t("zoomView")}</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Golden View All Gallery Button */}
          <FadeIn direction="up" delay={200}>
            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 text-base font-bold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg hover:shadow-marigold/30 hover:scale-105"
              >
                <span>{t("btnViewFullGallery")}</span>
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Reels Slider */}
      <ReelsSlider />

      {/* Shloka strip — quiet devotional close */}
      <section className="bg-maroon py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn direction="up">
            <p className="font-display text-xl sm:text-2xl text-marigold leading-relaxed">
              {t("shlokaText")}
            </p>
            <p className="mt-3 text-sandal/70 text-sm">
              {t("shlokaAuthor")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Google Map & Location Section */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
                {t("locationTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
                {t("locationTitle")}
              </h2>
              <p className="mt-3 text-ink/70 text-sm sm:text-base max-w-xl mx-auto">
                {t("locationSubtitle")}
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Address & Contact Info Card */}
            <FadeIn direction="up" delay={100} className="h-full">
              <div className="rounded-2xl bg-sandal/50 border border-gold/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-maroon mb-2 flex items-center gap-2">
                      <span className="text-2xl">📍</span> {t("addressTitle")}
                    </h3>
                    <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
                      {t("addressText1")}<br />
                      {t("addressText2")}<br />
                      {t("addressText3")}
                    </p>
                  </div>

                  <div className="border-t border-gold/30 pt-4">
                    <h3 className="font-display text-lg text-maroon mb-2 flex items-center gap-2">
                      <span className="text-xl">📞</span> {t("contactTitle")}
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
                      <span className="text-xl">⏰</span> {t("timingTitle")}
                    </h3>
                    <p className="text-ink/75 text-sm">
                      {t("timingText1")}<br />
                      <span className="text-xs text-maroon/80 font-medium">{t("timingText2")}</span>
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
                    <span>{t("btnViewMap")}</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Google Map iframe */}
            <FadeIn direction="up" delay={200} className="lg:col-span-2 h-full">
              <div className="relative min-h-[380px] h-full rounded-2xl overflow-hidden border border-gold/40 shadow-lg bg-sandal/20">
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
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
