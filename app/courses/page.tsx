import type { Metadata } from "next";
import CoursesClient from "./_components/CourcesClient";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore ANAMI courses: Special Group N5 and Online N5 (Zoom) plus G.C.E. O/L & A/L group classes. Exam-focused JLPT / NAT structure with speaking practice.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
