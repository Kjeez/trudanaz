"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function AutoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Duplicate items for continuous effect
  const carouselItems = [...products, ...products, ...products];

  return (
    <div className="relative w-full py-12 bg-white border-y border-slate-100 group overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      {/* Controls */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-md border border-slate-200 text-primary rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_4px_30px_rgba(0,212,255,0.4)] hover:border-transparent"
        aria-label="Scroll left"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button 
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-md border border-slate-200 text-primary rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_4px_30px_rgba(0,212,255,0.4)] hover:border-transparent"
        aria-label="Scroll right"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Auto Scroll animation classes were removed; rely on native scroll + buttons for better UX as requested */}
      <div 
        ref={scrollRef}
        className="flex w-full overflow-x-auto gap-8 px-8 snap-x snap-mandatory pb-6 pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .flex::-webkit-scrollbar { display: none; }
        `}} />
        {carouselItems.map((product, idx) => (
          <Link
            key={`${product.slug}-${idx}`}
            href={`/products/${product.slug}`}
            className="group relative flex-shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,212,255,0.15)] transition-all duration-500 border border-slate-100 hover:border-primary/40 hover:-translate-y-2 flex flex-col items-center gap-6"
          >
            <div className="relative w-full aspect-square bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-primary/5 transition-colors duration-500">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100">
                  <span className="text-muted text-sm font-bold uppercase tracking-wider">Image Coming Soon</span>
                </div>
              )}
            </div>
            <div className="text-center w-full">
              <h3 className="font-extrabold text-ink text-xl tracking-tight">{product.name}</h3>
              <div className="mt-3 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 group-hover:bg-primary/10 transition-colors duration-300">
                <p className="text-[11px] text-body group-hover:text-primary font-bold uppercase tracking-widest">
                  {product.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
