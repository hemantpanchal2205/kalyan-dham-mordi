"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import FadeIn from "@/components/FadeIn";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = Array.from({ length: 41 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    src: id === 41 ? "/images/image-41.jpg" : `/images/image-${id}.jpeg`,
    alt: `कल्याण धाम मोरडी - चित्र ${id}`,
  };
});

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null
      );
    }
  }, [activeImageIndex]);

  const showPrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) =>
        prev !== null
          ? (prev - 1 + galleryImages.length) % galleryImages.length
          : null
      );
    }
  }, [activeImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, showNext, showPrev]);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex]);

  const currentImage =
    activeImageIndex !== null ? galleryImages[activeImageIndex] : null;

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-diya-glow bg-maroon-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-3 font-semibold">
            कल्याण धाम मोरडी • पावन झलकियाँ
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory">
            चित्र दीर्घा (गैलरी)
          </h1>
          <p className="mt-4 text-sandal/85 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            कल्याण धाम मोरडी के पावन प्रांगण, दैनिक दर्शन और उत्सवों की सभी {galleryImages.length} मनमोहक झलकियाँ।
          </p>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      {/* Gallery Grid */}
      <section className="bg-ivory py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 border-b border-gold/30 pb-4">
            <p className="text-maroon font-medium text-sm sm:text-base">
              कुल चित्र:{" "}
              <span className="font-bold text-marigold-dark">
                {galleryImages.length}
              </span>
            </p>
            <p className="text-xs text-ink/60 hidden sm:block">
              * किसी भी चित्र पर क्लिक करके बड़े आकार में देखें
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {galleryImages.map((img, index) => (
              <FadeIn key={img.id} direction="up" delay={(index % 4) * 60}>
                <figure
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl border border-gold/30 bg-maroon-dark/5 shadow-sm hover:shadow-xl hover:border-marigold transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentImage && activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="चित्र दर्शक"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 transition-all duration-300"
          onClick={closeLightbox}
        >
          {/* Controls Bar Top */}
          <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 flex items-center justify-between z-20 text-ivory pointer-events-none">
            <div className="bg-maroon-dark/80 backdrop-blur border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-marigold pointer-events-auto">
              चित्र {activeImageIndex + 1} / {galleryImages.length}
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <a
                href={currentImage.src}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="grid h-10 w-10 place-items-center rounded-full bg-maroon-dark/80 hover:bg-maroon border border-gold/40 text-ivory text-sm transition-colors"
                title="मूल चित्र देखें"
              >
                ↗
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="grid h-10 w-10 place-items-center rounded-full bg-maroon-dark/80 hover:bg-maroon border border-gold/40 text-ivory text-lg transition-colors"
                title="बंद करें (Esc)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full bg-maroon-dark/80 hover:bg-maroon border border-gold/50 text-marigold text-xl sm:text-2xl transition-transform hover:scale-110 shadow-xl"
            title="पिछला चित्र (Left Arrow)"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full bg-maroon-dark/80 hover:bg-maroon border border-gold/50 text-marigold text-xl sm:text-2xl transition-transform hover:scale-110 shadow-xl"
            title="अगला चित्र (Right Arrow)"
          >
            ❯
          </button>

          {/* Main Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] sm:h-[80vh] flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-black/40">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 95vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
