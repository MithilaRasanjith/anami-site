import type { Metadata } from "next";
import VisaGuidanceClient from "./_components/VisaGuidanceClient";

export const metadata: Metadata = {
  title: "Visa Guidance",
  description:
    "Guidance for ANAMI students: interview preparation, Jikoshokai practice, and document support. Guidance only — not an agency.",
  alternates: { canonical: "/visa-guidance" },
};

export default function VisaGuidancePage() {
  return <VisaGuidanceClient />;
}
