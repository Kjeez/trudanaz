"use client";

import { useState } from "react";
import { products, company, whatsappLink } from "@/data/products";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const product = formData.get("product") as string;
    const message = formData.get("message") as string;

    // Build WhatsApp message
    const waMsg = [
      `Hi, I'm ${name}.`,
      product && product !== "" ? `I'm interested in: ${product}.` : "",
      message ? `Message: ${message}` : "",
      phone ? `Phone: ${phone}` : "",
      email ? `Email: ${email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Open WhatsApp
    window.open(whatsappLink(waMsg), "_blank");

    // Also trigger mailto
    const subject = encodeURIComponent(
      `Enquiry from ${name}${product ? ` about ${product}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct Interest: ${product}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:${company.email}?subject=${subject}&body=${body}`,
      "_self"
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-whatsapp/10 rounded-[var(--radius-panel)] p-10 text-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-whatsapp mx-auto mb-4" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <h3 className="text-xl font-extrabold text-ink mb-2">Message Sent!</h3>
        <p className="text-body mb-4">
          Your enquiry has been forwarded to WhatsApp and email. We&apos;ll get back to
          you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-bold text-ink underline underline-offset-4 hover:text-lavender transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-ink mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white border border-cream-alt rounded-[var(--radius-card)] px-4 py-3 text-ink text-sm focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-ink mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white border border-cream-alt rounded-[var(--radius-card)] px-4 py-3 text-ink text-sm focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-ink mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white border border-cream-alt rounded-[var(--radius-card)] px-4 py-3 text-ink text-sm focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-bold text-ink mb-1.5">
            Product Interest
          </label>
          <select
            id="product"
            name="product"
            className="w-full bg-white border border-cream-alt rounded-[var(--radius-card)] px-4 py-3 text-ink text-sm focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-colors"
          >
            <option value="">Select a product (optional)</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-ink mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-cream-alt rounded-[var(--radius-card)] px-4 py-3 text-ink text-sm focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-colors resize-y"
          placeholder="Tell us what you need..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-ink font-bold px-8 py-3.5 rounded-full transition-colors text-sm"
      >
        Send Enquiry
      </button>

      <p className="text-xs text-muted">
        * Your message will be sent to both WhatsApp and email simultaneously.
      </p>
    </form>
  );
}
