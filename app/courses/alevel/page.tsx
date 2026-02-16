import type { Metadata } from "next";
import ALevelClient from "./_components/ALevelClient";

export const metadata: Metadata = {
  title: "Group Class – G.C.E. Advanced Level",
  description:
    "Physical Japanese group class for G.C.E. Advanced Level students. Structured lessons with consistent practice and guidance.",
  alternates: { canonical: "/courses/alevel" },
};

export default function ALevelPage() {
  return <ALevelClient />;
}
