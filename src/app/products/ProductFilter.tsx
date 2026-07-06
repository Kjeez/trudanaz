"use client";

import { useState } from "react";
import { Product, ProductCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductFilterProps {
  products: Product[];
  categories: ProductCategory[];
}

export default function ProductFilter({ products, categories }: ProductFilterProps) {
  const [active, setActive] = useState<"All" | ProductCategory>("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-ink text-cream"
                : "bg-cream-alt text-body hover:bg-ink/10"
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-60">
              ({cat === "All" ? products.length : products.filter((p) => p.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-12">No products found in this category.</p>
      )}
    </>
  );
}
