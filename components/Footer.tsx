"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-maroon-dark text-sandal">
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
  );
}
