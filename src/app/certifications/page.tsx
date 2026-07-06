import type { Metadata } from "next";
import { manufacturers, company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";

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
    color: "bg-lavender/15 text-lavender border-lavender/30",
  },
  {
    name: "ISO 9001:2015",
    fullName: "International Organization for Standardization",
    description:
      "Quality Management System certification confirming that consistent, high-quality products are delivered through documented processes and continuous improvement.",
    color: "bg-sage/15 text-sage-dark border-sage/30",
  },
  {
    name: "FSMS",
    fullName: "Food Safety Management System",
    description:
      "Our nutraceutical manufacturing partner maintains FSMS certification, ensuring food-grade production environments for all supplement products.",
    color: "bg-primary/15 text-ink border-primary/30",
  },
  {
    name: "GMP",
    fullName: "Good Manufacturing Practice",
    description:
      "Both pharmaceutical and nutraceutical facilities adhere to GMP standards, ensuring every batch is manufactured under controlled conditions with rigorous quality checks.",
    color: "bg-pink-hero text-ink border-pink-hero",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis and Critical Control Points",
    description:
      "A systematic approach to food safety in our nutraceutical production, identifying and controlling biological, chemical, and physical hazards.",
    color: "bg-sage/15 text-sage-dark border-sage/30",
  },
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "All nutraceutical products are manufactured under valid FSSAI licensing, compliant with Indian food safety regulations and labelling requirements.",
    color: "bg-lavender/15 text-lavender border-lavender/30",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-alt">
        <div className="site-container py-16 md:py-24">
          <div className="max-w-3xl">
            <SectionEyebrow>Quality & Compliance</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-6">
              Certifications &amp; Compliance
            </h1>
            <p className="text-body text-lg leading-relaxed">
              At {company.name}, regulatory compliance isn&apos;t just a requirement — it&apos;s a
              cornerstone of our business. Every product we market is manufactured at
              certified facilities under strict quality protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`rounded-[var(--radius-card)] border p-6 ${cert.color}`}
              >
                <div className="text-2xl font-extrabold mb-1">{cert.name}</div>
                <p className="text-xs font-medium opacity-70 mb-4">{cert.fullName}</p>
                <p className="text-sm leading-relaxed opacity-90">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License numbers */}
      <section className="bg-sage/20">
        <div className="site-container py-16 md:py-20">
          <div className="text-center mb-12">
            <SectionEyebrow>License & Registration</SectionEyebrow>
            <h2 className="text-3xl font-extrabold text-ink">
              Drug &amp; Food Licences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {manufacturers.map((mfr) => (
              <div
                key={mfr.name}
                className="bg-white rounded-[var(--radius-panel)] p-8"
              >
                <h3 className="text-lg font-extrabold text-ink mb-4">
                  {mfr.name}
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-muted uppercase tracking-wider text-xs">
                      License Number
                    </dt>
                    <dd className="text-body mt-1 font-mono text-sm">
                      {mfr.license}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-muted uppercase tracking-wider text-xs">
                      Certifications
                    </dt>
                    <dd className="text-body mt-1">{mfr.certs}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-muted uppercase tracking-wider text-xs">
                      Facility Address
                    </dt>
                    <dd className="text-body mt-1">{mfr.address}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-muted uppercase tracking-wider text-xs">
                      Products Manufactured
                    </dt>
                    <dd className="text-body mt-1">{mfr.makes}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GST details */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <SectionEyebrow>Company Registration</SectionEyebrow>
            <h2 className="text-3xl font-extrabold text-ink mb-8">
              GST &amp; Registration Details
            </h2>
            <div className="bg-white rounded-[var(--radius-panel)] p-8 text-left">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-cream-alt">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted w-32 shrink-0">
                    Company
                  </dt>
                  <dd className="text-body text-sm font-medium">{company.name}</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-cream-alt">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted w-32 shrink-0">
                    GSTIN
                  </dt>
                  <dd className="text-body text-sm font-mono">{company.gstin}</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3 border-b border-cream-alt">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted w-32 shrink-0">
                    CIN
                  </dt>
                  <dd className="text-body text-sm font-mono">{company.cin}</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted w-32 shrink-0">
                    Address
                  </dt>
                  <dd className="text-body text-sm">{company.address}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
