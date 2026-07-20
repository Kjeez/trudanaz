"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface RelatedProductsCarouselProps {
  products: Product[];
  /** Auto-advance interval in ms. */
  interval?: number;
}

export default function RelatedProductsCarousel({
  products,
  interval = 3500,
}: RelatedProductsCarouselProps) {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items-per-view, based on the carousel's own width (not
  // window.innerWidth, which can be inflated by page-level overflow).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const compute = (w: number) =>
      setItemsPerView(w < 500 ? 1 : w < 800 ? 2 : 3);
    compute(el.clientWidth);
    const ro = new ResizeObserver((entries) =>
      compute(entries[0].contentRect.width)
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  // Keep index in range when viewport (and thus maxIndex) changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Auto-advance, paused on hover/focus or when reduced motion is preferred.
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, interval);
    return () => clearInterval(id);
  }, [paused, maxIndex, interval]);

  const pageCount = maxIndex + 1;

  const go = (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const trackRef = useRef<HTMLDivElement>(null);

  if (products.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="More products"
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.slug}
              className="shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous products"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white border border-slate-200 text-ink rounded-full shadow-md hover:text-lavender hover:border-lavender transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next products"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white border border-slate-200 text-ink rounded-full shadow-md hover:text-lavender hover:border-lavender transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </>
      )}

      {/* Dots */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-lavender" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
