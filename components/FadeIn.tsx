"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: "up" | "down" | "none";
  distance?: number; // Distance in pixels to move
  duration?: number; // Duration in milliseconds
  threshold?: number;
  once?: boolean; // If false (default), animates every time you scroll in/out
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 32,
  duration = 700,
  threshold = 0.1,
  once = false,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!once) {
            if (timeoutId) clearTimeout(timeoutId);
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translateY(0px)";
    if (direction === "up") return `translateY(${distance}px)`;
    if (direction === "down") return `translateY(-${distance}px)`;
    return "none";
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
