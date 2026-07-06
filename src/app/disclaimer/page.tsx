import type { Metadata } from "next";
import { company } from "@/data/products";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Medical and pharmaceutical disclaimer for ${company.name}. Important information about product use and accuracy of content.`,
};

export default function DisclaimerPage() {
  return (
    <section className="bg-cream">
      <div className="site-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
            Disclaimer
          </h1>
          <p className="text-muted text-sm mb-10">Last updated: July 2026</p>

          <div className="space-y-8">
            <Section title="Medical Disclaimer">
              <p>
                The information provided on this website is for general informational and
                educational purposes only. It is not intended as, and should not be
                construed as, medical advice, diagnosis, or treatment. Always seek the
                advice of a qualified healthcare provider or Registered Medical
                Practitioner before starting, changing, or stopping any medication or
                treatment.
              </p>
              <p>
                {company.name} does not recommend self-medication or self-diagnosis. The
                pharmaceutical products listed on this website are available only on
                prescription by a Registered Medical Practitioner, unless otherwise stated.
              </p>
            </Section>

            <Section title="Product Information Accuracy">
              <p>
                We make every effort to ensure that product information displayed on this
                website — including composition, dosage form, pack size, and manufacturer
                details — is accurate and up-to-date. However, product labels and
                packaging should be considered the authoritative source for all product
                information.
              </p>
              <p>
                In case of any discrepancy between the information on this website and
                the actual product packaging, the information on the product packaging
                shall prevail.
              </p>
            </Section>

            <Section title="Nutraceutical Products">
              <p>
                Nutraceutical products listed on this website are not intended to diagnose,
                treat, cure, or prevent any disease. They are categorised as food
                supplements and are not for medicinal use. These products are manufactured
                under FSSAI licensing and are not regulated as drugs.
              </p>
            </Section>

            <Section title="No Liability">
              <p>
                {company.name} shall not be held liable for any loss, damage, or adverse
                health effect arising from the use or misuse of any product listed on this
                website, or from reliance on the information provided herein. Use of all
                products is at the user&apos;s own risk and discretion.
              </p>
            </Section>

            <Section title="External Links">
              <p>
                This website may contain links to external websites. We have no control
                over the content of these sites and accept no responsibility for them or
                for any loss or damage that may arise from your use of them.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have any questions about this disclaimer, please contact us at:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-lavender hover:underline"
                >
                  {company.email}
                </a>
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
