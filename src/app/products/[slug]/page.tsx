import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, whatsappLink } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: `${product.tagline} — ${product.composition}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const hasImage = product.image && product.image.length > 0;

  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="site-container py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-muted font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink font-bold">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product image */}
          <div className="bg-white rounded-3xl p-6 md:p-10 flex items-center justify-center min-h-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            {hasImage ? (
              <Image
                src={product.image}
                alt={`${product.name} — ${product.tagline}`}
                width={600}
                height={450}
                className="object-contain max-h-[400px] w-auto hover:scale-[1.02] transition-transform duration-300"
                priority
              />
            ) : (
              <div className="text-center text-muted">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 opacity-30 text-primary" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <p className="text-sm font-medium">Product image coming soon</p>
              </div>
            )}
          </div>

          {/* Product details */}
          <div>
            {/* Category badge */}
            <span
              className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${
                product.category === "Pharmaceutical"
                  ? "bg-primary/10 text-primary"
                  : "bg-lavender/10 text-lavender"
              }`}
            >
              {product.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-black text-ink mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-body text-lg mb-8 font-medium">{product.tagline}</p>

            {/* Details table */}
            <div className="space-y-5 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100">
              <DetailRow label="Composition" value={product.composition} />
              <DetailRow label="Dosage Form" value={product.dosageForm} />
              <DetailRow label="Pack Size" value={product.packSize} />
              <DetailRow
                label="Manufactured By"
                value={product.manufacturedBy}
              />
              {product.licenseNo && (
                <DetailRow label="License No." value={product.licenseNo} />
              )}
            </div>

            {/* Caution notice */}
            {product.caution && (
              <div className="mt-6 bg-pink-hero/10 border border-pink-hero/20 rounded-2xl p-6">
                <p className="text-sm font-bold text-ink mb-2 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                  Important Notice
                </p>
                <p className="text-sm text-body font-medium leading-relaxed">
                  {product.caution}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppButton
                message={`Hi, I'd like to enquire about ${product.name} (${product.dosageForm}).`}
                size="lg"
              />
              <Link
                href="/products"
                className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-primary hover:text-primary text-ink font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-sm"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
      <dt className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
        {label}
      </dt>
      <dd className="text-ink text-[15px] font-medium leading-relaxed">{value}</dd>
    </div>
  );
}
