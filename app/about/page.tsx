// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./_components/AboutClient";

const SITE_NAME = "ANAMI Japanese Language School";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "ANAMI Japanese Language School helps beginners learn Japanese with a structured JLPT/NAT N5 pathway, speaking practice, and supportive guidance.",
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description:
      "Structured JLPT/NAT N5 learning, speaking practice, and supportive guidance for beginners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${SITE_NAME}`,
    description:
      "Structured JLPT/NAT N5 learning, speaking practice, and supportive guidance for beginners.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    description:
      "Japanese language school focused on JLPT/NAT N5 with structured lessons, speaking practice, and supportive guidance.",
    url: "https://YOUR_DOMAIN_HERE.com/about", // TODO: replace with your real domain
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
