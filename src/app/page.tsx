import Link from "next/link";
import { products, company } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-pink-hero">
        <div className="site-container py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <SectionEyebrow>Trusted Pharmaceutical Excellence</SectionEyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.0] tracking-tight mb-6">
              Dedicated to{" "}
              <span className="text-lavender">Better</span>{" "}
              Living
            </h1>
            <p className="text-body text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
              {company.name} delivers WHO-GMP and ISO-certified pharmaceutical
              and nutraceutical products — engineered for efficacy, manufactured
              with integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-ink font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Explore Products
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Panel ─── */}
      <section className="bg-sage">
        <div className="site-container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow>Why Trudanaz</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-5">
                Expertise You Can Trust
              </h2>
              <p className="text-ink/80 text-lg leading-relaxed mb-6">
                Backed by WHO-GMP certified manufacturing facilities and rigorous quality
                control, every Trudanaz product meets the highest standards of safety and
                efficacy. From pharmaceuticals to nutraceuticals, we bring you formulations
                you can rely on.
              </p>
              <Link
                href="/about"
                className="text-ink font-bold hover:underline underline-offset-4"
              >
                Learn more about us →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { value: "7+", label: "Products" },
                { value: "2", label: "Manufacturing Partners" },
                { value: "WHO-GMP", label: "Certified" },
                { value: "ISO", label: "9001:2015" },
                { value: "FSSAI", label: "Compliant" },
                { value: "HACCP", label: "Certified" },
              ].map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="bg-white/30 backdrop-blur-sm rounded-[var(--radius-card)] p-5 text-center"
                >
                  <p className="text-2xl font-extrabold text-ink">{stat.value}</p>
                  <p className="text-sm text-ink/70 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="bg-cream-alt">
        <div className="site-container py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionEyebrow>Our Products</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
                Pharmaceutical &amp; Nutraceutical Range
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex text-sm font-bold text-ink hover:text-lavender transition-colors"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-ink font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trust Pillars ─── */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="text-center mb-12">
            <SectionEyebrow>Quality Assurance</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Built on Trust &amp; Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lavender" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "WHO-GMP Certified",
                desc: "Manufacturing facilities meet World Health Organization Good Manufacturing Practice standards.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage-dark" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "ISO 9001:2015",
                desc: "Quality management systems certified to international standards for consistent product quality.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                ),
                title: "FSSAI Compliant",
                desc: "Nutraceutical products licensed and compliant with Food Safety and Standards Authority of India.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-whatsapp" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h8" />
                    <path d="M8 14h4" />
                  </svg>
                ),
                title: "WhatsApp-First Support",
                desc: "Direct, instant communication for all product enquiries — no forms, no waiting.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-[var(--radius-card)] p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{pillar.icon}</div>
                <h3 className="text-base font-extrabold text-ink mb-2">{pillar.title}</h3>
                <p className="text-sm text-body leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-primary">
        <div className="site-container py-14 md:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-ink/80 text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re a distributor, retailer, or healthcare professional — get
            in touch to discuss our product range and availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Chat on WhatsApp"
              size="lg"
              className="bg-ink hover:bg-ink/90 text-white"
            />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-cream text-ink font-bold px-8 py-4 rounded-full transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
