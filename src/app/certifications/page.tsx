import type { Metadata } from "next";
import { manufacturers, company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Trudanaz Pharmaceuticals' certifications, drug licences, FSSAI compliance, and manufacturing facility accreditations.",
};

const certifications = [
  {
    name: "WHO-GMP",
    fullName: "World Health Organization — Good Manufacturing Practice",
    description:
      "Our pharmaceutical manufacturing partner, Bajaj Formulations, holds WHO-GMP certification ensuring global-standard production processes, facility hygiene, and product quality control.",
    color: "bg-white border-primary/20 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)] text-ink",
    iconColor: "bg-primary/10 text-primary",
  },
  {
    name: "ISO 9001:2015",
    fullName: "International Organization for Standardization",
    description:
      "Quality Management System certification confirming that consistent, high-quality products are delivered through documented processes and continuous improvement.",
    color: "bg-white border-lavender/20 hover:border-lavender/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.1)] text-ink",
    iconColor: "bg-lavender/10 text-lavender",
  },
  {
    name: "FSMS",
    fullName: "Food Safety Management System",
    description:
      "Our nutraceutical manufacturing partner maintains FSMS certification, ensuring food-grade production environments for all supplement products.",
    color: "bg-white border-primary/20 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)] text-ink",
    iconColor: "bg-primary/10 text-primary",
  },
  {
    name: "GMP",
    fullName: "Good Manufacturing Practice",
    description:
      "Both pharmaceutical and nutraceutical facilities adhere to GMP standards, ensuring every batch is manufactured under controlled conditions with rigorous quality checks.",
    color: "bg-pink-hero text-white border-pink-hero shadow-[0_4px_20px_rgba(10,37,64,0.15)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.25)]",
    iconColor: "bg-white/10 text-white",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis and Critical Control Points",
    description:
      "A systematic approach to food safety in our nutraceutical production, identifying and controlling biological, chemical, and physical hazards.",
    color: "bg-white border-lavender/20 hover:border-lavender/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.1)] text-ink",
    iconColor: "bg-lavender/10 text-lavender",
  },
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "All nutraceutical products are manufactured under valid FSSAI licensing, compliant with Indian food safety regulations and labelling requirements.",
    color: "bg-white border-primary/20 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)] text-ink",
    iconColor: "bg-primary/10 text-primary",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="site-container py-20 md:py-28 relative z-10">
          <StaggerContainer className="max-w-3xl">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Quality & Compliance</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink mb-6 tracking-tight">
                Certifications &amp; Compliance
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-body text-xl leading-relaxed font-light">
                At {company.name}, regulatory compliance isn&apos;t just a requirement — it&apos;s a
                cornerstone of our business. Every product we market is manufactured at
                certified facilities under strict quality protocols.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="site-container py-20 md:py-28">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <StaggerItem
                key={cert.name}
                className={`rounded-3xl border p-8 transition-all duration-300 group hover:-translate-y-1 ${cert.color}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 font-black text-lg group-hover:scale-110 transition-transform ${cert.iconColor}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div className="text-2xl font-black mb-2 tracking-tight">{cert.name}</div>
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-5 ${cert.color.includes('bg-pink-hero') ? 'text-white/70' : 'text-muted'}`}>{cert.fullName}</p>
                <p className={`text-[15px] leading-relaxed font-medium ${cert.color.includes('bg-pink-hero') ? 'text-white/90' : 'text-body'}`}>
                  {cert.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* License numbers */}
      <section className="bg-white border-y border-slate-100">
        <div className="site-container py-20 md:py-28">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
              Drug &amp; Food Licences
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {manufacturers.map((mfr) => (
              <StaggerItem
                key={mfr.name}
                className="bg-slate-50 rounded-[32px] p-8 md:p-10 border border-slate-200/60 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-black text-ink mb-6 tracking-tight">
                  {mfr.name}
                </h3>
                <dl className="space-y-5 text-[15px]">
                  <div>
                    <dt className="font-bold text-primary uppercase tracking-widest text-xs mb-1">
                      License Number
                    </dt>
                    <dd className="text-body font-mono font-medium">
                      {mfr.license}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-primary uppercase tracking-widest text-xs mb-1">
                      Certifications
                    </dt>
                    <dd className="text-body font-medium">{mfr.certs}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-primary uppercase tracking-widest text-xs mb-1">
                      Facility Address
                    </dt>
                    <dd className="text-body">{mfr.address}</dd>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <dt className="font-bold text-ink uppercase tracking-widest text-xs mb-2">
                      Products Manufactured
                    </dt>
                    <dd className="text-body font-medium">{mfr.makes}</dd>
                  </div>
                </dl>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GST details */}
      <section className="bg-slate-50">
        <SlideUp className="site-container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-ink mb-10 tracking-tight">
              Company Registration
            </h2>
            <div className="bg-white rounded-[32px] p-8 md:p-10 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4 border-b border-slate-100">
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted w-32 shrink-0 pt-1">
                    Company
                  </dt>
                  <dd className="text-body text-[15px] font-medium">{company.name}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4 border-b border-slate-100">
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted w-32 shrink-0 pt-1">
                    GSTIN
                  </dt>
                  <dd className="text-primary text-[15px] font-mono font-bold tracking-wide">{company.gstin}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4 border-b border-slate-100">
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted w-32 shrink-0 pt-1">
                    CIN
                  </dt>
                  <dd className="text-primary text-[15px] font-mono font-bold tracking-wide">{company.cin}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted w-32 shrink-0 pt-1">
                    Address
                  </dt>
                  <dd className="text-body text-[15px] leading-relaxed">{company.address}</dd>
                </div>
              </dl>
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
