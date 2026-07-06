import type { Metadata } from "next";
import { company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name}. Reach us via WhatsApp, email, or phone for product enquiries, partnerships, and more.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-alt">
        <div className="site-container py-16 md:py-24">
          <div className="max-w-3xl">
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink mb-6">
              Contact Us
            </h1>
            <p className="text-body text-lg leading-relaxed">
              Whether you&apos;re a distributor, retailer, or healthcare professional —
              we&apos;d love to hear from you. Reach out via WhatsApp for the fastest
              response, or use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-cream">
        <div className="site-container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-ink mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-ink mb-6">
                Direct Contact
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="bg-whatsapp/10 rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-whatsapp" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp (Fastest)
                  </h3>
                  <WhatsAppButton size="sm" />
                </div>

                {/* Phone */}
                <div className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">Phone</h3>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-body hover:text-ink transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">Email</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-body hover:text-ink transition-colors"
                  >
                    {company.email}
                  </a>
                </div>

                {/* Address */}
                <div className="bg-white rounded-[var(--radius-card)] p-5">
                  <h3 className="text-sm font-bold text-ink mb-2">
                    Registered Office
                  </h3>
                  <address className="text-body text-sm not-italic leading-relaxed">
                    {company.address}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
