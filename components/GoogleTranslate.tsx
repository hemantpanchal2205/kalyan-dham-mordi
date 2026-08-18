"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "hi",
            includedLanguages: "hi,en,gu",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
