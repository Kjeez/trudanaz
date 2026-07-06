import Link from "next/link";
import Image from "next/image";
import { products, company } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import AutoCarousel from "@/components/AutoCarousel";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const trustMarks = ["WHO-GMP", "ISO 9001:2015", "FSSAI", "HACCP"];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const showcaseProducts = products.filter((p) => p.image).slice(0, 4);

  return (
    <>
      <FloatingContactButtons />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-pink-hero text-white">
        {/* Decorative backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full bg-lavender/20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.1]"
        />

        <div className="site-container relative py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Copy */}
            <StaggerContainer className="max-w-xl">
              <StaggerItem>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Trusted Pharmaceutical Excellence</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                  Dedicated to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lavender">Better</span>{" "}
                  Living
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
                  {company.name} delivers WHO-GMP and ISO-certified pharmaceutical
                  and nutraceutical products — engineered for efficacy, manufactured
                  with integrity.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-wrap gap-4 mb-9">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-ink font-bold px-8 py-4 rounded-full transition-colors text-[15px] shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                  >
                    Explore Products
                  </Link>
                  <WhatsAppButton />
                </div>
              </StaggerItem>

              {/* Trust strip */}
              <StaggerItem>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
                  {trustMarks.map((mark) => (
                    <span
                      key={mark}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 uppercase tracking-wide"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary shrink-0" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {mark}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Visual showcase */}
            <FadeIn delay={0.3} className="relative mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-5 px-4 relative z-10">
                {showcaseProducts.map((product, i) => (
                  <div
                    key={product.slug}
                    className={`rounded-[var(--radius-card)] bg-white/5 backdrop-blur-md border border-white/10 p-4 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] ${
                      i % 2 === 0 ? "translate-y-4 -rotate-2" : "-translate-y-2 rotate-2"
                    }`}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="180px"
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-6 -right-2 rotate-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 shadow-2xl z-20">
                <p className="text-xl font-black text-white leading-none">WHO-GMP</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-primary mt-1">
                  Certified Facilities
                </p>
              </div>
              <div className="absolute -bottom-6 -left-6 -rotate-2 rounded-2xl bg-gradient-to-br from-primary to-lavender px-6 py-4 shadow-[0_0_30px_rgba(0,212,255,0.4)] z-20">
                <p className="text-xl font-black text-ink leading-none">7+</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-ink/80 mt-1">
                  Trusted Products
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Expertise Panel ─── */}
      <section className="bg-sage">
        <div className="site-container py-16 md:py-20">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <StaggerItem>
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
            </StaggerItem>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { value: "7+", label: "Products" },
                { value: "2", label: "Manufacturing Partners" },
                { value: "WHO-GMP", label: "Certified" },
                { value: "ISO", label: "9001:2015" },
                { value: "FSSAI", label: "Compliant" },
                { value: "HACCP", label: "Certified" },
              ].map((stat) => (
                <StaggerItem
                  key={`${stat.value}-${stat.label}`}
                  className="bg-white/30 backdrop-blur-sm rounded-[var(--radius-card)] p-5 text-center"
                >
                  <p className="text-2xl font-extrabold text-ink">{stat.value}</p>
                  <p className="text-sm text-ink/70 font-medium mt-1">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Featured Products (Auto Carousel) ─── */}
      <section className="bg-cream-alt overflow-hidden">
        <div className="site-container py-16 md:py-20 pb-0">
          <FadeIn className="flex items-end justify-between mb-10">
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
          </FadeIn>
        </div>
        
        <FadeIn delay={0.2}>
          <AutoCarousel />
        </FadeIn>

        <div className="site-container pb-16 md:pb-20">
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
          <FadeIn className="text-center mb-12">
            <SectionEyebrow>Quality Assurance</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Built on Trust &amp; Compliance
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <StaggerItem
                key={pillar.title}
                className="bg-white rounded-[var(--radius-card)] p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{pillar.icon}</div>
                <h3 className="text-base font-extrabold text-ink mb-2">{pillar.title}</h3>
                <p className="text-sm text-body leading-relaxed">{pillar.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-primary">
        <SlideUp className="site-container py-14 md:py-20 text-center">
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
              href="#contact-form"
              className="inline-flex items-center justify-center bg-white hover:bg-cream text-ink font-bold px-8 py-4 rounded-full transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </SlideUp>
      </section>

      {/* ─── Contact Form ─── */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <SlideUp className="lg:col-span-3">
              <SectionEyebrow>Get In Touch</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
                Send Us a Message
              </h2>
              <p className="text-body text-lg leading-relaxed mb-8 max-w-lg">
                Questions about a product, bulk orders, or a distribution
                partnership? Fill in the form and we&apos;ll get back to you on
                WhatsApp or email — whichever is faster for you.
              </p>
              <ContactForm />
            </SlideUp>

            {/* Direct contact info */}
            <StaggerContainer className="lg:col-span-2">
              <StaggerItem>
                <h2 className="text-2xl font-extrabold text-ink mb-6">
                  Direct Contact
                </h2>
              </StaggerItem>
              <div className="space-y-5">
                <StaggerItem className="bg-whatsapp/10 rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-whatsapp" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp (Fastest)
                  </h3>
                  <WhatsAppButton size="sm" />
                </StaggerItem>

                <StaggerItem className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">Phone</h3>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-body hover:text-ink transition-colors"
                  >
                    {company.phone}
                  </a>
                </StaggerItem>

                <StaggerItem className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">Email</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-body hover:text-ink transition-colors"
                  >
                    {company.email}
                  </a>
                </StaggerItem>

                <StaggerItem className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">
                    Registered Office
                  </h3>
                  <address className="text-body text-sm not-italic leading-relaxed">
                    {company.address}
                  </address>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
