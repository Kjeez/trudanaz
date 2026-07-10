import type { Metadata } from "next";
import Image from "next/image";
import { company, manufacturers } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our mission, values, manufacturing partners, and commitment to pharmaceutical excellence.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="site-container py-20 md:py-28 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">About Us</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink mb-6 tracking-tight">
                {company.name}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-body text-xl leading-relaxed mb-6 font-light">
                {company.name} is a dynamic Indian pharmaceutical and nutraceutical company
                headquartered in Mumbai. We are committed to making high-quality healthcare
                products accessible to practitioners and patients across India.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-body/80 text-lg leading-relaxed max-w-3xl mx-auto">
                Our product range spans critical therapeutic areas — from hepatology and
                gastroenterology to nutritional supplementation — all manufactured at
                WHO-GMP and ISO-certified facilities under strict quality control protocols.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="bg-slate-50">
        <div className="site-container py-20 md:py-28">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_40px_rgba(0,212,255,0.08)] transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-ink mb-4 tracking-tight">Our Mission</h2>
              <p className="text-body text-lg leading-relaxed font-light">
                To deliver affordable, world-class pharmaceutical and nutraceutical
                formulations that improve patient outcomes. We bridge the gap between
                cutting-edge science and everyday healthcare by partnering with certified
                manufacturers and maintaining the highest standards of regulatory
                compliance.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-pink-hero rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-all">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" aria-hidden="true">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  To become a nationally recognised name in pharmaceutical and nutraceutical
                  distribution — known for product integrity, regulatory compliance, and
                  unwavering commitment to the health and wellbeing of every patient we serve.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="bg-white border-y border-slate-100">
        <div className="site-container py-20 md:py-28">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              Manufacturing Partners
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              We collaborate with state-of-the-art facilities to ensure uncompromised quality.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {manufacturers.map((mfr) => (
              <StaggerItem
                key={mfr.name}
                className="bg-slate-50 rounded-[32px] p-8 md:p-10 border border-slate-200/60 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-2xl font-black text-ink mb-6 tracking-tight">{mfr.name}</h3>
                <div className="space-y-5 text-[15px]">
                  <div>
                    <span className="font-bold text-primary uppercase tracking-widest text-xs mb-1 block">Address</span>
                    <p className="text-body">{mfr.address}</p>
                  </div>
                  <div>
                    <span className="font-bold text-primary uppercase tracking-widest text-xs mb-1 block">Certifications</span>
                    <p className="text-body">{mfr.certs}</p>
                  </div>
                  <div>
                    <span className="font-bold text-primary uppercase tracking-widest text-xs mb-1 block">License</span>
                    <p className="text-body">{mfr.license}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="font-bold text-ink uppercase tracking-widest text-xs mb-2 block">Products Manufactured</span>
                    <p className="text-body font-medium">{mfr.makes}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="site-container py-20 md:py-28">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              Our Leadership
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Meet the experienced professionals guiding {company.name}.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <StaggerItem className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center hover:shadow-[0_8px_40px_rgba(0,212,255,0.08)] transition-all">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/team/dr-sakirul-islam.jpeg"
                  alt="Dr Sakirul Islam"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-1">Dr Sakirul Islam</h3>
              <p className="text-primary font-medium text-[15px]">Director</p>
            </StaggerItem>

            <StaggerItem className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center hover:shadow-[0_8px_40px_rgba(0,212,255,0.08)] transition-all">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/team/gitanjali-baruah.jpeg"
                  alt="Gitanjali Baruah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-1">Gitanjali Baruah</h3>
              <p className="text-primary font-medium text-[15px]">Director</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Company Details */}
      <section className="bg-white">
        <SlideUp className="site-container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-ink mb-10 tracking-tight">
              Registration Details
            </h2>

            <div className="bg-white rounded-[32px] p-8 md:p-10 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-4">
              <InfoRow label="Registered Name" value={company.name} />
              <InfoRow label="Address" value={company.address} />
              <InfoRow label="GSTIN" value={company.gstin} />
              <InfoRow label="CIN" value={company.cin} />
              <InfoRow label="Email" value={company.email} />
              <InfoRow label="Phone" value={company.phone} />
            </div>

            <div className="mt-12 flex justify-center">
              <WhatsAppButton message="Hi, I'd like to know more about Trudanaz Pharmaceuticals." />
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4 border-b border-slate-100 last:border-0 last:pb-0">
      <dt className="text-xs font-bold uppercase tracking-widest text-muted w-48 shrink-0 pt-1">
        {label}
      </dt>
      <dd className="text-body text-[15px] font-medium">{value}</dd>
    </div>
  );
}
