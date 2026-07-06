"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function AutoCarousel() {
  // Duplicate products to create a seamless infinite scroll effect
  const carouselItems = [...products, ...products];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-cream-alt/50 border-y border-cream-alt">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-alt/50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-alt/50 to-transparent z-10" />
      
      <div className="flex w-max animate-carousel-scroll gap-6 px-6 hover:[animation-play-state:paused]">
        {carouselItems.map((product, idx) => (
          <Link
            key={`${product.slug}-${idx}`}
            href={`/products/${product.slug}`}
            className="group relative flex-shrink-0 w-64 md:w-72 bg-white rounded-[var(--radius-card)] p-4 shadow-sm hover:shadow-md transition-shadow border border-ink/5 flex flex-col items-center gap-4"
          >
            <div className="relative w-full aspect-square bg-product-bed rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-extrabold text-ink text-lg">{product.name}</h3>
              <p className="text-sm text-lavender font-bold mt-1 uppercase tracking-wide">
                {product.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
