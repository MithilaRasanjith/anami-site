// app/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./_components/ContactClient";

const SITE_NAME = "ANAMI Japanese Language School";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description:
    "Contact ANAMI Japanese Language School via WhatsApp, call, or email. Ask about JLPT/NAT N5 courses, schedules, fees, or student guidance.",
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Contact ANAMI via WhatsApp (fastest), call, or email. Ask about N5 courses, schedules, fees, or guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${SITE_NAME}`,
    description:
      "Contact ANAMI via WhatsApp (fastest), call, or email. Ask about N5 courses, schedules, fees, or guidance.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: "https://www.anamijls.com/contact", 
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+81 80 3944 5160",
        email: "info@anamijls.com",
        availableLanguage: ["English", "Sinhala", "Japanese"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
