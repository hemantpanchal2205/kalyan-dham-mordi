"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("val1Title"),
      desc: t("val1Desc"),
    },
    {
      title: t("val2Title"),
      desc: t("val2Desc"),
    },
    {
      title: t("val3Title"),
      desc: t("val3Desc"),
    },
  ];

  return (
    <>
      <section className="bg-maroon-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn direction="up">
            <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-3 font-semibold">
              {t("aboutIntroTag")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-ivory">
              {t("aboutIntroTitle")}
            </h1>
          </FadeIn>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="up" className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-lg order-2 lg:order-1">
            <Image
              src="/images/image-3.jpeg"
              alt="मंदिर का मुख्य द्वार"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn direction="up" delay={150} className="order-1 lg:order-2">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              {t("aboutHistoryTag")}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2 mb-5">
              {t("aboutHistoryTitle")}
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              {t("aboutHistoryP1")}
            </p>
            <p className="text-ink/75 leading-relaxed">
              {t("aboutHistoryP2")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Veer Kallaji Rathore Lore & History */}
      <section className="bg-sandal/30 py-16 sm:py-20 border-t border-b border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
                {t("loreTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
                {t("loreTitle")}
              </h2>
              <p className="mt-3 text-ink/75 max-w-2xl mx-auto text-base sm:text-lg">
                {t("loreSubtitle")}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. जन्म और परिवार */}
            <FadeIn direction="up" delay={50}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">🛕</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint1Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint1Desc")}
                </p>
              </div>
            </FadeIn>

            {/* 2. विवाह और त्याग */}
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">💍</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint2Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint2Desc")}
                </p>
              </div>
            </FadeIn>

            {/* 3. चित्तौड़ की लड़ाई */}
            <FadeIn direction="up" delay={150}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">⚔️</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint3Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint3Desc")}
                </p>
              </div>
            </FadeIn>

            {/* 4. “चार हाथों वाले” कल्लाजी */}
            <FadeIn direction="up" delay={200}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">🛡️</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint4Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint4Desc")}
                </p>
              </div>
            </FadeIn>

            {/* 5. वीरगति */}
            <FadeIn direction="up" delay={250}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">🚩</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint5Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint5Desc")}
                </p>
              </div>
            </FadeIn>

            {/* 6. लोकदेवता के रूप में पूजा */}
            <FadeIn direction="up" delay={300}>
              <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="text-3xl mb-3 block">🪔</span>
                <h3 className="font-display text-xl text-maroon mb-2.5">
                  {t("lorePoint6Title")}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {t("lorePoint6Desc")}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 7. उनकी गाथा का संदेश */}
          <FadeIn direction="up" delay={200}>
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-maroon-dark to-maroon text-ivory p-8 sm:p-10 border border-gold/40 text-center shadow-xl">
              <span className="text-marigold text-sm uppercase tracking-widest font-semibold block mb-2">
                {t("lorePoint7Tag")}
              </span>
              <p className="font-display text-2xl sm:text-3xl text-marigold leading-relaxed max-w-3xl mx-auto">
                {t("lorePoint7Quote")}
              </p>
              <p className="text-sandal/80 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                {t("lorePoint7Desc")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-sandal/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
                {t("valuesTag")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
                {t("valuesTitle")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} direction="up" delay={i * 120}>
                <div className="rounded-2xl bg-ivory border border-gold/30 p-8 text-center h-full">
                  <h3 className="font-display text-xl text-maroon mb-3">
                    {v.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-4">
              {t("trustTitle")}
            </h2>
            <p className="text-sandal/80 leading-relaxed max-w-2xl mx-auto">
              {t("trustDesc")}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
