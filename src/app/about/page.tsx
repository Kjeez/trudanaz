import type { Metadata } from "next";
import { company, manufacturers } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our mission, values, manufacturing partners, and commitment to pharmaceutical excellence.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-alt">
        <div className="site-container py-16 md:py-24">
          <div className="max-w-3xl">
            <SectionEyebrow>About Us</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-6">
              {company.name}
            </h1>
            <p className="text-body text-lg leading-relaxed mb-4">
              {company.name} is a dynamic Indian pharmaceutical and nutraceutical company
              headquartered in Mumbai. We are committed to making high-quality healthcare
              products accessible to practitioners and patients across India.
            </p>
            <p className="text-body leading-relaxed">
              Our product range spans critical therapeutic areas — from hepatology and
              gastroenterology to nutritional supplementation — all manufactured at
              WHO-GMP and ISO-certified facilities under strict quality control protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[var(--radius-panel)] p-8 md:p-10">
              <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lavender" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-ink mb-3">Our Mission</h2>
              <p className="text-body leading-relaxed">
                To deliver affordable, world-class pharmaceutical and nutraceutical
                formulations that improve patient outcomes. We bridge the gap between
                cutting-edge science and everyday healthcare by partnering with certified
                manufacturers and maintaining the highest standards of regulatory
                compliance.
              </p>
            </div>

            <div className="bg-white rounded-[var(--radius-panel)] p-8 md:p-10">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage-dark" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-ink mb-3">Our Vision</h2>
              <p className="text-body leading-relaxed">
                To become a nationally recognised name in pharmaceutical and nutraceutical
                distribution — known for product integrity, regulatory compliance, and
                unwavering commitment to the health and wellbeing of every patient we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="bg-sage/30">
        <div className="site-container py-16 md:py-20">
          <div className="text-center mb-12">
            <SectionEyebrow>Manufacturing Excellence</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Our Manufacturing Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturers.map((mfr) => (
              <div
                key={mfr.name}
                className="bg-white rounded-[var(--radius-panel)] p-8"
              >
                <h3 className="text-xl font-extrabold text-ink mb-3">{mfr.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-xs">Address</span>
                    <p className="text-body mt-1">{mfr.address}</p>
                  </div>
                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-xs">Certifications</span>
                    <p className="text-body mt-1">{mfr.certs}</p>
                  </div>
                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-xs">License</span>
                    <p className="text-body mt-1">{mfr.license}</p>
                  </div>
                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-xs">Products</span>
                    <p className="text-body mt-1">{mfr.makes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <SectionEyebrow>Registration Details</SectionEyebrow>
            <h2 className="text-3xl font-extrabold text-ink mb-8">
              Company Information
            </h2>

            <div className="bg-white rounded-[var(--radius-panel)] p-8 text-left space-y-4">
              <InfoRow label="Registered Name" value={company.name} />
              <InfoRow label="Address" value={company.address} />
              <InfoRow label="GSTIN" value={company.gstin} />
              <InfoRow label="CIN" value={company.cin} />
              <InfoRow label="Email" value={company.email} />
              <InfoRow label="Phone" value={company.phone} />
            </div>

            <div className="mt-10">
              <WhatsAppButton message="Hi, I'd like to know more about Trudanaz Pharmaceuticals." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-cream-alt last:border-0">
      <dt className="text-xs font-bold uppercase tracking-wider text-muted w-40 shrink-0">
        {label}
      </dt>
      <dd className="text-body text-sm">{value}</dd>
    </div>
  );
}
