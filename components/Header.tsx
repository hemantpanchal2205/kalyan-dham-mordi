"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "gu", name: "ગુજરાતી", flag: "🏛️" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("home"), icon: "🛕" },
    { href: "/about", label: t("about"), icon: "📖" },
    { href: "/gallery", label: t("gallery"), icon: "📸" },
    { href: "/events", label: t("events"), icon: "🪔" },
  ];

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Top strip — darshan timing & contact */}
      <div className="bg-maroon-dark text-sandal text-xs sm:text-sm">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-between gap-3">
          <p className="truncate">{t("darshanTimeTop")}</p>
          <a
            href="tel:+917850918258"
            className="hover:text-marigold transition-colors flex items-center gap-1 font-medium shrink-0"
          >
            <span>📞</span> +91 78509 18258
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur border-b border-gold/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-[10px]">
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Shri Kali Kalyan Dham Mordi Home">
            <img
              src="/images/kalyan-dham-logo.png"
              alt="Shri Kali Kalyan Dham Mordi Official Temple Logo"
              width={200}
              height={75}
              className="h-[55px] sm:h-[75px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            <nav className="flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-ink/80 hover:text-maroon transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-marigold after:transition-all hover:after:w-full text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language Dropdown Select */}
            <div className="relative inline-flex items-center">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none cursor-pointer rounded-full border border-gold/50 bg-sandal/40 hover:bg-sandal/70 py-1.5 pl-3 pr-7 text-xs font-bold text-maroon shadow-sm focus:outline-none focus:ring-2 focus:ring-marigold transition-all"
                aria-label="भाषा चुनें / Select Language"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-ivory text-ink py-1">
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 text-[9px] text-maroon font-bold">
                ▼
              </span>
            </div>

            {/* Aarti Button */}
            <Link
              href="#aarti"
              className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory hover:bg-maroon-light transition-colors shadow-sm whitespace-nowrap"
            >
              {t("seeAarti")}
            </Link>
          </div>

          {/* Mobile Right Controls: Language Dropdown + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Dropdown Select */}
            <div className="relative inline-flex items-center">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none cursor-pointer rounded-lg border border-gold/50 bg-sandal/40 py-1.5 pl-2.5 pr-6 text-xs font-bold text-maroon shadow-sm focus:outline-none"
                aria-label="भाषा चुनें / Select Language"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-ivory text-ink">
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 text-[8px] text-maroon font-bold">
                ▼
              </span>
            </div>

            <button
              aria-label="मेन्यू खोलें"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-gold/40 bg-sandal/30 text-maroon text-xl hover:bg-sandal/60 transition-colors"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
      <div className="spire-divider" aria-hidden="true" />

      {/* Smooth Mobile Drawer Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      />

      {/* Smooth Off-Canvas Drawer (Slide Left/Right with Scrollable Content) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[290px] sm:w-[320px] max-h-screen h-full bg-ivory shadow-2xl border-l border-gold/40 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-label="मोबाइल नेविगेशन मेन्यू"
      >
        {/* Drawer Sticky Top Header */}
        <div className="shrink-0 flex items-center justify-between p-4 border-b border-gold/30 bg-ivory/95">
          <img
            src="/images/kalyan-dham-logo.png"
            alt="Shri Kali Kalyan Dham Mordi Official Temple Logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="grid h-8 w-8 place-items-center rounded-full bg-maroon/10 hover:bg-maroon hover:text-ivory text-maroon text-base transition-colors border border-gold/30"
            aria-label="मेन्यू बंद करें"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Middle Content */}
        <div className="flex-1 overflow-y-auto p-5 overscroll-contain space-y-5">
          {/* Language Dropdown Select Inside Mobile Menu */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-maroon/70 mb-2">
              {t("chooseLanguage")}
            </p>
            <div className="relative inline-flex items-center w-full">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="w-full appearance-none cursor-pointer rounded-xl border border-gold/40 bg-sandal/40 py-2.5 pl-3.5 pr-8 text-xs font-bold text-maroon shadow-sm focus:outline-none"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-ivory text-ink">
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 text-[10px] text-maroon font-bold">
                ▼
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 pt-2 border-t border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-ink/85 hover:text-maroon hover:bg-sandal/50 transition-colors text-base"
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}

            <div className="pt-3 border-t border-gold/30">
              <Link
                href="#aarti"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-ivory hover:bg-maroon-light transition-colors shadow-md"
              >
                <span>🪔 {t("seeAarti")}</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Drawer Bottom Info (Shrink-0) */}
        <div className="shrink-0 border-t border-gold/30 p-4 text-xs text-ink/70 space-y-2 bg-sandal/25">
          <p className="font-semibold text-maroon flex items-center gap-1.5">
            <span>⏰</span> {t("darshanTimeTop")}
          </p>
          <a
            href="tel:+917850918258"
            className="block text-maroon-dark font-medium hover:underline flex items-center gap-1.5"
          >
            <span>📞</span> +91 78509 18258
          </a>
        </div>
      </aside>
    </>
  );
}
