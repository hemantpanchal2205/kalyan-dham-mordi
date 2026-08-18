"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-maroon-dark text-sandal relative">
        <div className="spire-divider" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-marigold/20 text-marigold text-lg">
                ॐ
              </span>
              <span className="font-display text-lg text-ivory">
                {t("mandirName")}
              </span>
            </div>
            <p className="text-sm text-sandal/80 leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-marigold mb-3">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-marigold transition-colors">{t("home")}</Link></li>
              <li><Link href="/about" className="hover:text-marigold transition-colors">{t("about")}</Link></li>
              <li><Link href="/gallery" className="hover:text-marigold transition-colors">{t("gallery")}</Link></li>
              <li><Link href="/events" className="hover:text-marigold transition-colors">{t("events")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-marigold mb-3">{t("darshanAartiTiming")}</h3>
            <ul className="space-y-2 text-sm text-sandal/90">
              <li>{t("aartiPratahAarti")} 8:00 AM</li>
              <li>{t("aartiPratahDarshan")} 7:45 AM</li>
              <li>{t("aartiSandhyaAarti")} 7:30 PM</li>
              <li>{t("aartiSandhyaDarshan")} 7:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-marigold mb-3">{t("btnContact")}</h3>
            <ul className="space-y-2 text-sm text-sandal/90">
              <li>
                {t("addressText1")}<br />
                {t("addressText2")}<br />
                {t("addressText3")}
              </li>
              <li>
                <Link href="tel:+917850918258" className="hover:text-marigold transition-colors font-medium">
                  +91 78509 18258
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sandal/15">
          <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sandal/60 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {t("copyright")}
            </p>
            <p className="text-sandal/75">
              Designed & Developed by{" "}
              <Link
                href="https://wa.me/919772757660?text=Hello%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marigold font-semibold tracking-wide hover:underline"
              >
                Harshit Panchal
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Icons for WhatsApp and Instagram */}
      <div className="fixed right-[30px] bottom-[100px] z-50 flex flex-col gap-3 items-center">
        {/* Instagram Floating Button */}
        <Link
          href="https://www.instagram.com/shreekalyandham_mordi_partapur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram पर जुड़ें"
          className="group relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/40"
        >
          <svg
            className="h-6 w-6 fill-current transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-14 scale-0 rounded-lg bg-black/85 px-2.5 py-1 text-xs font-medium text-white transition-all group-hover:scale-100 whitespace-nowrap shadow-lg">
            Instagram
          </span>
        </Link>

        {/* WhatsApp Floating Button */}
        <Link
          href="https://wa.me/917850918258?text=Jai%20Shri%20Kalyan%20%7C%20%E0%A4%9C%E0%A4%AF%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp पर संपर्क करें"
          className="group relative grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/40"
        >
          <svg
            className="h-6 w-6 fill-current transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-14 scale-0 rounded-lg bg-black/85 px-2.5 py-1 text-xs font-medium text-white transition-all group-hover:scale-100 whitespace-nowrap shadow-lg">
            WhatsApp
          </span>
        </Link>
      </div>
    </>
  );
}
