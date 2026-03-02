"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductSlide = {
  src: string;
  alt: string;
  title: string;
};

type ProductShowcaseProps = {
  slides: ProductSlide[];
  intervalMs?: number;
  className?: string;
};

export function ProductShowcase({
  slides,
  intervalMs = 6000,
  className = "",
}: ProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [slides.length, intervalMs]);

  const activeSlide = slides[activeIndex];

  return (
    <aside
      className={`w-full max-w-xl justify-self-center overflow-hidden rounded-[1.9rem] border border-[#c9a76a]/35 bg-[linear-gradient(165deg,rgba(18,23,28,0.86)_0%,rgba(24,32,36,0.74)_100%)] p-3 shadow-[0_24px_62px_-24px_rgba(0,0,0,0.88)] backdrop-blur-md lg:justify-self-end ${className}`}
    >
      <div className="flex items-center justify-between px-1">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c9a76a]">
          Products We Use
        </p>
        <span className="text-[0.68rem] text-[#f4e7d0]/80">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-3 overflow-hidden rounded-[1.45rem] border border-[#c9a76a]/26 aspect-[3/2]">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 500px"
            className={`object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181b]/88 via-[#14181b]/25 to-transparent" />
        <p className="absolute bottom-3 left-3 rounded-full border border-[#c9a76a]/35 bg-[#14181b]/78 px-3 py-1.5 text-xs font-medium text-[#f4e7d0] backdrop-blur-sm">
          {activeSlide.title}
        </p>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {slides.map((slide, index) => (
          <span
            key={slide.title}
            aria-hidden
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? "w-6 bg-[#c9a76a]" : "w-2 bg-[#f4e7d0]/45"
            }`}
          />
        ))}
      </div>
    </aside>
  );
}
