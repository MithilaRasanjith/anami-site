import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Student progress and success stories from ANAMI Japanese Language School. Real results through structured learning and practice.",
  alternates: { canonical: "/success-stories" },
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-text-primary">News ANAMI</h1>
      <p className="text-text-muted">
        Coming soon.
      </p>
    </div>
  );
}
