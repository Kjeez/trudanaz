import type { Metadata } from "next";
import { company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${company.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream">
      <div className="site-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: July 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8">
            <Section title="1. Introduction">
              <p>
                {company.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting and
                respecting your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your personal information when you visit our website or
                communicate with us.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Contact information:</strong> Name, email address, phone number,
                  and any other details you voluntarily provide through our contact form or
                  WhatsApp enquiries.
                </li>
                <li>
                  <strong>Usage data:</strong> Information about how you use our website,
                  including pages visited, time spent, and browser information, collected
                  through analytics tools.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your device to
                  improve your browsing experience.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information collected to:</p>
              <ul>
                <li>Respond to your product enquiries and communication.</li>
                <li>Provide information about our products and services.</li>
                <li>Improve our website and user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </Section>

            <Section title="4. Data Sharing">
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information with trusted service providers who assist us
                in operating our website or conducting our business, provided they agree to
                keep this information confidential.
              </p>
            </Section>

            <Section title="5. Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect
                your personal data against unauthorised access, alteration, disclosure, or
                destruction.
              </p>
            </Section>

            <Section title="6. Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your personal data.</li>
                <li>Withdraw consent for data processing at any time.</li>
              </ul>
            </Section>

            <Section title="7. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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
      <div className="text-body text-[15px] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-body">
        {children}
      </div>
    </div>
  );
}
