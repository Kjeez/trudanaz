import type { Metadata } from "next";
import { company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions governing the use of the ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <section className="bg-cream">
      <div className="site-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted text-sm mb-10">Last updated: July 2026</p>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing and using this website, you accept and agree to be bound by
                these Terms &amp; Conditions. If you do not agree to these terms, please
                do not use our website.
              </p>
            </Section>

            <Section title="2. About This Website">
              <p>
                This website is owned and operated by {company.name}. It serves as a
                marketing and informational platform for our pharmaceutical and
                nutraceutical products. This website does not facilitate the sale, purchase,
                or delivery of any products — it is not an e-commerce platform.
              </p>
            </Section>

            <Section title="3. Product Information">
              <p>
                All product information displayed on this website, including composition,
                dosage form, manufacturer details, and licence numbers, is sourced from the
                official product labels and packaging. We strive to keep this information
                accurate and current, but the actual product label shall be considered the
                definitive source.
              </p>
            </Section>

            <Section title="4. Enquiries Only">
              <p>
                This website facilitates product enquiries only. No transactions,
                purchases, or orders can be placed through this website. All enquiries
                are handled via WhatsApp and email communication.
              </p>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos, images,
                product information, and design — is the intellectual property of{" "}
                {company.name} or its licensors and is protected by applicable intellectual
                property laws. You may not reproduce, distribute, or create derivative
                works from this content without our prior written consent.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                {company.name} shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of, or inability
                to use, this website. This includes, but is not limited to, damages for
                loss of profits, data, or other intangible losses.
              </p>
            </Section>

            <Section title="7. Privacy">
              <p>
                Your use of this website is also governed by our{" "}
                <a href="/privacy-policy" className="text-lavender hover:underline">
                  Privacy Policy
                </a>
                . Please review it to understand how we collect and use your information.
              </p>
            </Section>

            <Section title="8. Governing Law">
              <p>
                These Terms &amp; Conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes arising from these terms
                shall be subject to the exclusive jurisdiction of the courts in Mumbai,
                Maharashtra.
              </p>
            </Section>

            <Section title="9. Changes to These Terms">
              <p>
                We reserve the right to modify these Terms &amp; Conditions at any time.
                Changes will be effective immediately upon posting on this page. Your
                continued use of the website constitutes acceptance of the modified terms.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                If you have any questions about these Terms &amp; Conditions, please
                contact us at:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-lavender hover:underline"
                >
                  {company.email}
                </a>
              </p>
              <p>
                {company.name}
                <br />
                {company.address}
              </p>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-ink mb-3">{title}</h2>
      <div className="text-body text-[15px] leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
