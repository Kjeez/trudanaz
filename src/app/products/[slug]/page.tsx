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
    title: `${product.name} — ${product.tagline}`,
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
  const isNutraceutical = product.category === "Nutraceutical";

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

        {/* Top: image + core info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
          {/* Product image */}
          <div className="bg-white rounded-3xl p-6 md:p-10 flex items-center justify-center min-h-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            {hasImage ? (
              <Image
                src={product.image}
                alt={`${product.name} — ${product.tagline}`}
                width={700}
                height={520}
                className="object-contain max-h-[420px] w-auto hover:scale-[1.02] transition-transform duration-300"
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

          {/* Core details */}
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

            {/* Key specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white rounded-2xl p-4 border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Dosage Form</p>
                <p className="text-ink text-sm font-semibold leading-snug">{product.dosageForm}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Pack Size</p>
                <p className="text-ink text-sm font-semibold leading-snug">{product.packSize}</p>
              </div>
              {product.licenseNo && (
                <div className="bg-white rounded-2xl p-4 border border-slate-100 col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">License No.</p>
                  <p className="text-ink text-sm font-semibold leading-snug">{product.licenseNo}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
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

        {/* Detail sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Composition */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
            <SectionTitle icon="🧪" title="Composition" />
            <p className="text-ink text-[15px] font-medium leading-relaxed">{product.composition}</p>

            {product.colour && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Colour: </span>
                <span className="text-ink text-sm font-medium">{product.colour}</span>
              </div>
            )}
          </div>

          {/* Storage & Dosage */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
              <SectionTitle icon="🌡️" title="Storage" />
              <p className="text-ink text-sm font-medium leading-relaxed">{product.storage}</p>
            </div>
            {product.dosage && (
              <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
                <SectionTitle icon="💊" title="Dosage" />
                <p className="text-ink text-sm font-medium leading-relaxed">{product.dosage}</p>
              </div>
            )}
          </div>

          {/* Nutritional info for nutraceuticals */}
          {isNutraceutical && product.nutritionalInfo && (
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
              <SectionTitle icon="📊" title="Nutritional Information (Approximate Values)" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="text-left text-[11px] uppercase tracking-widest text-muted font-bold py-2 pr-4">Nutrient</th>
                      <th className="text-right text-[11px] uppercase tracking-widest text-muted font-bold py-2">Per Serving</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.nutritionalInfo.split(" | ").map((row) => {
                      const [label, val] = row.split(": ");
                      return (
                        <tr key={label} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                          <td className="py-2 pr-4 text-ink font-medium">{label}</td>
                          <td className="py-2 text-right text-body font-medium">{val ?? ""}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Ingredients for nutraceuticals */}
          {isNutraceutical && product.ingredients && (
            <div className={`bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 ${product.nutritionalInfo ? "" : "lg:col-span-2"}`}>
              <SectionTitle icon="🌿" title="Ingredients" />
              <p className="text-ink text-sm font-medium leading-relaxed">{product.ingredients}</p>
            </div>
          )}

          {/* Manufactured By + Marketed By */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
            <SectionTitle icon="🏭" title="Manufactured By" />
            <p className="text-ink text-[15px] font-medium leading-relaxed mb-6">{product.manufacturedBy}</p>
            <div className="pt-5 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-2">Marketed By</p>
              <p className="text-ink text-sm font-medium leading-relaxed">{product.marketedBy}</p>
            </div>
          </div>

          {/* Caution notice */}
          {product.caution && (
            <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500 shrink-0" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <p className="text-sm font-black text-ink uppercase tracking-wide">Important Notice</p>
              </div>
              <p className="text-sm text-body font-medium leading-relaxed">
                {product.caution}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-lg" aria-hidden="true">{icon}</span>
      <h2 className="text-xs font-black uppercase tracking-widest text-primary">{title}</h2>
    </div>
  );
}
