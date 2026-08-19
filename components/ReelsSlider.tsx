"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export interface ReelItem {
  id: string | number;
  url: string; // Instagram Reel URL or embed URL (e.g. https://www.instagram.com/reel/XXXXX/)
  embedUrl?: string; // Optional direct embed URL
  thumbnail: string; // Cover image from /images/
}

// Extract valid Instagram embed URL from any link
export function getInstagramEmbedUrl(url: string, embedUrl?: string): string {
  if (embedUrl) return embedUrl;
  if (url.includes("/embed")) return url;

  // Match /reel/CODE or /p/CODE or /tv/CODE
  const match = url.match(/\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed/captioned/`;
  }

  // If generic profile URL or custom URL, provide a clean embed or fallback
  return url;
}

// Clean Instagram Reels list - Just url & thumbnail:
export const sampleReels: ReelItem[] = [
  {
    id: 1,
    url: "https://www.instagram.com/shreekalyandham_mordi_partapur?igsh=MXMxazYzbWM4djBpbA==",
    thumbnail: "/images/image-27.jpeg",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DZK6vDChxsM/?igsh=MWp0ZDc3bHlwazV0bA==",
    thumbnail: "/images/image-36.jpeg",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DZIMd6LhCT_/?igsh=aHZqbGFuYTU3YnV5",
    thumbnail: "/images/image-14.jpeg",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DZFrAeFBiXY/?igsh=MWNzcmhkYW13djQ2bg==",
    thumbnail: "/images/image-28.jpeg",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DWk7DDWjB8j/?igsh=MXUycGQ0d243MGNscQ==",
    thumbnail: "/images/image-10.jpeg",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DV-ckf7AVUe/?igsh=MTVocXp6Ymdtdmtycg==",
    thumbnail: "/images/image-17.jpeg",
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/DTuLiNagRgC/?igsh=MTJxNnNtM2RuOHZoZg==",
    thumbnail: "/images/image-30.jpeg",
  },
  {
    id: 8,
    url: "https://www.instagram.com/reel/DLUy2NOpb32/?igsh=bWF0dmFrZXVpZWIw",
    thumbnail: "/images/image-41.jpg",
  },
];

interface ReelsSliderProps {
  reels?: ReelItem[];
}

export default function ReelsSlider({ reels = sampleReels }: ReelsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [inlinePlayingId, setInlinePlayingId] = useState<string | number | null>(null);
  const { language } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Keyboard navigation for reel player modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeReelIndex === null) return;
      if (e.key === "Escape") setActiveReelIndex(null);
      if (e.key === "ArrowRight") {
        setActiveReelIndex((prev) => (prev !== null ? (prev + 1) % reels.length : null));
      }
      if (e.key === "ArrowLeft") {
        setActiveReelIndex((prev) => (prev !== null ? (prev - 1 + reels.length) % reels.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReelIndex, reels.length]);

  // Prevent background scroll when player is open
  useEffect(() => {
    if (activeReelIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeReelIndex]);

  const activeReel = activeReelIndex !== null ? reels[activeReelIndex] : null;

  const getReelsTag = () => {
    if (language === "en") return "Instagram Reels";
    if (language === "gu") return "ઇન્સ્ટાગ્રામ રીલ્સ";
    return "इंस्टाग्राम रील्स";
  };

  const getReelsTitle = () => {
    if (language === "en") return "Sacred Reels from Kalyan Dham";
    if (language === "gu") return "કલ્યાણ ધામ મોરડીની પાવન રીલ્સ";
    return "कल्याण धाम मोरडी की पावन रील्स";
  };

  const getReelsSubtitle = () => {
    if (language === "en")
      return "Click any reel to play video instantly or watch on our official Instagram channel.";
    if (language === "gu")
      return "કોઈપણ રીલ પર ક્લિક કરીને વિડિયો તરત જ ચલાવો અથવા ઓફિશિયલ ઇન્સ્ટાગ્રામ પર જુઓ.";
    return "किसी भी रील पर क्लिक करके वीडियो तुरंत यहीं चलाएं या हमारे ऑफिशियल इंस्टाग्राम पेज पर देखें।";
  };

  const getFollowBtnText = () => {
    if (language === "en") return "Follow on Instagram";
    if (language === "gu") return "ઇન્સ્ટાગ્રામ પર ફોલો કરો";
    return "इंस्टाग्राम पर फॉलो करें";
  };

  return (
    <section className="bg-gradient-to-b from-sandal/30 via-ivory to-sandal/30 py-16 sm:py-20 border-t border-b border-gold/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header Strip - Without FadeIn */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ee2a7b]/15 to-[#6228d7]/15 border border-[#ee2a7b]/30 text-xs sm:text-sm font-bold text-maroon mb-3">
              <span className="h-2 w-2 rounded-full bg-[#ee2a7b] animate-ping" />
              <span className="text-[#ee2a7b]">📸</span> {getReelsTag()}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon">
              {getReelsTitle()}
            </h2>
            <p className="mt-2 text-ink/75 max-w-2xl text-sm sm:text-base leading-relaxed">
              {getReelsSubtitle()}
            </p>
          </div>

          {/* Controls: Follow Instagram + Prev/Next Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="https://www.instagram.com/shreekalyandham_mordi_partapur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{getFollowBtnText()}</span>
            </Link>

            {/* Slider Arrows */}
            <button
              onClick={() => scroll("left")}
              aria-label="पिछली रील"
              className="grid h-10 w-10 place-items-center rounded-full bg-ivory border border-gold/40 text-maroon hover:bg-maroon hover:text-ivory transition-colors shadow-sm"
            >
              ❮
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="अगली रील"
              className="grid h-10 w-10 place-items-center rounded-full bg-ivory border border-gold/40 text-maroon hover:bg-maroon hover:text-ivory transition-colors shadow-sm"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Reels Horizontal Scroll Container - Without FadeIn on cards */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory overscroll-x-contain"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reels.map((reel, index) => {
            const isInlinePlaying = inlinePlayingId === reel.id;
            const embedSrc = getInstagramEmbedUrl(reel.url, reel.embedUrl);
            const hasDirectEmbed = reel.url.includes("/reel/") || reel.url.includes("/p/");

            return (
              <div
                key={reel.id}
                className="snap-start shrink-0 w-[220px] sm:w-[250px] md:w-[270px]"
              >
                <div
                  onClick={() => {
                    if (hasDirectEmbed) {
                      setInlinePlayingId(reel.id);
                    }
                    setActiveReelIndex(index);
                  }}
                  className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-maroon-dark/10 border-2 border-gold/40 hover:border-[#ee2a7b] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                >
                  {isInlinePlaying && hasDirectEmbed ? (
                    <iframe
                      src={embedSrc}
                      className="w-full h-full border-0"
                      allowFullScreen
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    <>
                      {/* Thumbnail Image */}
                      <Image
                        src={reel.thumbnail}
                        alt="Kalyan Dham Mordi Instagram devotional reel video thumbnail"
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="270px"
                      />

                      {/* Subtle Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Center Play Button Icon with Pulse */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-white/25 backdrop-blur-md border-2 border-white/80 text-white text-2xl shadow-xl group-hover:scale-125 group-hover:bg-[#ee2a7b] group-hover:border-white transition-all duration-300">
                          <span className="ml-1">▶</span>
                        </div>
                      </div>

                      {/* Bottom Instagram Reel Icon */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm">
                          📸
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-8 text-center">
          <Link
            href="https://www.instagram.com/shreekalyandham_mordi_partapur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-sandal/40 px-6 py-2.5 text-xs sm:text-sm font-bold text-maroon hover:bg-maroon hover:text-ivory transition-all shadow-sm"
          >
            <span>📸 @shreekalyandham_mordi_partapur पर सभी रील्स देखें</span>
            <span>→</span>
          </Link>
        </div>

      </div>

      {/* Full-Featured Dedicated Reels Lightbox Video Player Modal */}
      {activeReel && activeReelIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Reel Player"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
          onClick={() => setActiveReelIndex(null)}
        >
          {/* Top Bar Close Control */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
            <div className="bg-maroon-dark/85 backdrop-blur border border-gold/40 px-4 py-1.5 rounded-full text-xs font-semibold text-marigold pointer-events-auto shadow-lg">
              रील {activeReelIndex + 1} / {reels.length}
            </div>

            <button
              onClick={() => setActiveReelIndex(null)}
              className="grid h-10 w-10 place-items-center rounded-full bg-maroon-dark/85 hover:bg-[#ee2a7b] border border-gold/40 text-white text-lg transition-colors pointer-events-auto shadow-lg"
              title="बंद करें (Esc)"
            >
              ✕
            </button>
          </div>

          {/* Previous Reel Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveReelIndex((prev) => (prev !== null ? (prev - 1 + reels.length) % reels.length : null));
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-maroon-dark/85 hover:bg-maroon border border-gold/50 text-marigold text-xl transition-transform hover:scale-110 shadow-2xl"
            title="पिछली रील (Left Arrow)"
          >
            ❮
          </button>

          {/* Next Reel Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveReelIndex((prev) => (prev !== null ? (prev + 1) % reels.length : null));
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-maroon-dark/85 hover:bg-maroon border border-gold/50 text-marigold text-xl transition-transform hover:scale-110 shadow-2xl"
            title="अगली रील (Right Arrow)"
          >
            ❯
          </button>

          {/* Modal Content Player Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm max-h-[88vh] h-[80vh] rounded-3xl bg-maroon-dark text-ivory border-2 border-gold/50 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Live Reel Player / Embed */}
            <div className="relative flex-1 w-full bg-black/60 overflow-hidden">
              {activeReel.url.includes("/reel/") || activeReel.url.includes("/p/") ? (
                <iframe
                  src={getInstagramEmbedUrl(activeReel.url, activeReel.embedUrl)}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <Image
                    src={activeReel.thumbnail}
                    alt="Kalyan Dham Mordi Instagram video cover"
                    fill
                    priority
                    className="object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-black/60 to-transparent flex flex-col items-center justify-center p-6 space-y-4 z-10">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-3xl shadow-2xl animate-pulse">
                      ▶
                    </div>
                    <a
                      href={activeReel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-6 py-3 text-sm font-bold text-white shadow-xl hover:scale-105 transition-all"
                    >
                      <span>📸 Instagram पर देखें</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Details Strip */}
            <div className="p-4 bg-maroon-dark/95 border-t border-gold/30 shrink-0 flex items-center justify-between gap-3">
              <p className="text-xs text-marigold font-semibold truncate">
                @shreekalyandham_mordi_partapur
              </p>

              <a
                href={activeReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-4 py-1.5 text-xs font-bold text-marigold border border-gold/40 transition-colors"
              >
                <span>Instagram पर खोलें</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
