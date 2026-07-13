import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { company } from "@/data/products";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trudanaz.com"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Trudanaz Pharmaceuticals Pvt. Ltd. — A trusted Indian pharmaceutical and nutraceutical company offering WHO-GMP and ISO-certified products. Dedicated to better living.",
  keywords: [
    "Trudanaz",
    "pharmaceuticals",
    "nutraceuticals",
    "WHO-GMP",
    "ISO 9001:2015",
    "FSSAI",
    "Indian pharma",
    "health supplements",
    "Livdanaz",
    "Trupraz",
    "Trudanfer",
    "Trudavit",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Trusted Indian pharmaceutical and nutraceutical company. WHO-GMP and ISO-certified products.",
    images: [{ url: "/logo.png", width: 1080, height: 540 }],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description:
      "Trusted Indian pharmaceutical and nutraceutical company. WHO-GMP and ISO-certified products.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NXLVHKPJ');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              description: company.tagline,
              url: "https://trudanaz.com",
              logo: "https://trudanaz.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "A321, Suite no. 874, Master Mind 4, Royal Palms",
                addressLocality: "Goregaon East, Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400065",
                addressCountry: "IN",
              },
              telephone: company.phone,
              email: company.email,
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXLVHKPJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
