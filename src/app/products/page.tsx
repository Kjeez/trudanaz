import type { Metadata } from "next";
import { products, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import ProductFilter from "./ProductFilter";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Trudanaz Pharmaceuticals' complete range of WHO-GMP certified pharmaceutical and FSSAI-compliant nutraceutical products.",
};

export default function ProductsPage() {
  return (
    <section className="bg-cream">
      <div className="site-container py-16 md:py-20">
        <div className="text-center mb-12">
          <SectionEyebrow>Product Range</SectionEyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-4">
            Our Products
          </h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Pharmaceutical and nutraceutical formulations, manufactured at WHO-GMP
            and ISO-certified facilities. Every product meets the highest standards of
            quality and compliance.
          </p>
        </div>

        <ProductFilter products={products} categories={CATEGORIES} />
      </div>
    </section>
  );
}
