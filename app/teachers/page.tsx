import type { Metadata } from "next";
import TeachersClient from "./_components/TeachersClient";

export const metadata: Metadata = {
  title: "Teachers",
  description:
    "Meet ANAMI teachers — friendly, structured, and focused on real improvement for JLPT / NAT N5 beginners.",
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  return <TeachersClient />;
}
