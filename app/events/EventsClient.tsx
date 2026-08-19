"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsClient() {
  const { t } = useLanguage();

  const eventHighlights = [
    t("h1"),
    t("h2"),
    t("h3"),
    t("h4"),
    t("h5"),
    t("h6"),
    t("h7"),
    t("h8"),
  ];

  const schedule = [
    { time: t("pill1Time"), title: t("pill1Title"), desc: t("pill1Title") },
    { time: t("pill2Time"), title: t("pill2Title"), desc: t("pill2Title") },
    { time: t("pill3Time"), title: t("pill3Title"), desc: t("pill3Title") },
    { time: t("pill4Time"), title: t("pill4Title"), desc: t("pill4Title") },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-diya-glow bg-maroon-dark py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <FadeIn direction="up">
            <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-3 font-semibold">
              {t("eventsHeroTag")}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory">
              <span className="block text-marigold text-xl sm:text-2xl mb-2 font-normal">
                {t("mandirName")} • {t("events")}
              </span>
              {t("eventsHeroTitle")}
            </h1>
            <p className="mt-4 text-sandal/85 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t("eventsHeroDesc")}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-marigold px-6 py-2.5 text-sm sm:text-base font-bold text-maroon-dark shadow-lg">
              <span>{t("eventsHeroBadge")}</span>
            </div>
          </FadeIn>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      {/* Main Content Section */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* 1. Introduction Card */}
          <FadeIn direction="up">
            <div className="rounded-3xl bg-white border border-gold/40 p-8 sm:p-12 shadow-sm">
              <h2 className="font-display text-2xl sm:text-3xl text-maroon mb-5 flex items-center gap-3">
                <span className="text-3xl">🪔</span> {t("eventsIntroTitle")}
              </h2>
              <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
                {t("eventsIntroDesc")}
              </p>
            </div>
          </FadeIn>

          {/* 2. Schedule Grid */}
          <FadeIn direction="up" delay={100}>
            <div className="rounded-3xl bg-sandal/40 border border-gold/40 p-8 sm:p-10">
              <div className="text-center mb-8">
                <p className="text-marigold-dark font-semibold text-xs sm:text-sm uppercase tracking-widest">
                  {t("eventsScheduleTag")}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-maroon mt-1">
                  {t("eventsScheduleTitle")}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {schedule.map((s, idx) => (
                  <div key={idx} className="rounded-2xl bg-ivory border border-gold/30 p-5 text-center shadow-sm hover:border-marigold transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-marigold/20 text-maroon-dark text-xs font-bold mb-2">
                      {s.time}
                    </span>
                    <h4 className="font-display text-lg text-maroon mb-1">
                      {s.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 3. Significance & Inspiration */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="up" delay={100} className="h-full">
              <div className="rounded-3xl bg-white border border-gold/40 p-8 shadow-sm h-full">
                <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
                  <span>✨</span> {t("eventsSignificanceTitle")}
                </h3>
                <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
                  {t("eventsSignificanceP1")}
                </p>
                <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
                  {t("eventsSignificanceP2")}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={150} className="h-full">
              <div className="rounded-3xl bg-white border border-gold/40 p-8 shadow-sm h-full">
                <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
                  <span>🛡️</span> {t("eventsInspirationTitle")}
                </h3>
                <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
                  {t("eventsInspirationP1")}
                </p>
                <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
                  {t("eventsInspirationP2")}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 4. Major Event Highlights */}
          <FadeIn direction="up" delay={100}>
            <div className="rounded-3xl bg-ivory border-2 border-gold/40 p-8 sm:p-10 shadow-md">
              <h3 className="font-display text-2xl sm:text-3xl text-maroon mb-6 text-center">
                {t("eventsMajorTitle")}
              </h3>
              <p className="text-ink/75 text-center text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                {t("eventsMajorDesc")}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {eventHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-sandal/30 border border-gold/30">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-maroon text-marigold text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-ink/85 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-center text-xs sm:text-sm text-ink/65 mt-6 italic">
                {t("eventsMajorFooterNote")}
              </p>
            </div>
          </FadeIn>

          {/* 5. Devotion & Tradition */}
          <FadeIn direction="up" delay={100}>
            <div className="rounded-3xl bg-white border border-gold/40 p-8 sm:p-10 shadow-sm">
              <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
                <span>🛕</span> {t("eventsFaithTitle")}
              </h3>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
                {t("eventsFaithP1")}
              </p>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
                {t("eventsFaithP2")}
              </p>
            </div>
          </FadeIn>

          {/* 6. Pledge & Devotional Close */}
          <FadeIn direction="up" delay={150}>
            <div className="rounded-3xl bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark text-ivory p-8 sm:p-12 text-center border-2 border-gold/50 shadow-2xl space-y-5">
              <span className="inline-block text-marigold uppercase tracking-widest text-xs sm:text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full border border-gold/30">
                {t("eventsPledgeTag")}
              </span>
              <p className="text-sandal/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                {t("eventsPledgeDesc")}
              </p>
              <div className="pt-4 border-t border-gold/30 space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-marigold">
                  {t("eventsChant1")}
                </h3>
                <p className="font-display text-xl sm:text-2xl text-ivory/90">
                  {t("eventsChant2")}
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Booking & Contact Section */}
      <section className="bg-maroon py-14">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-3">
              {t("eventsBookingTitle")}
            </h2>
            <p className="text-sandal/80 mb-6 text-sm sm:text-base">
              {t("eventsBookingDesc")}
            </p>
            <a
              href="tel:+917850918258"
              className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 font-bold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg text-base"
            >
              <span>📞</span> +91 78509 18258
            </a>

            {/* Strategic Cross-Page Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-gold/30">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-gold/40 px-5 py-2.5 font-medium text-ivory hover:bg-white/20 transition-all text-sm"
              >
                <span>📸 {t("gallery")}</span>
                <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-gold/40 px-5 py-2.5 font-medium text-ivory hover:bg-white/20 transition-all text-sm"
              >
                <span>📖 {t("about")}</span>
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
