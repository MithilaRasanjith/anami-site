import type { Metadata } from "next";
import OLevelClient from "./_components/OLevelClient";

export const metadata: Metadata = {
  title: "Group Class – G.C.E. Ordinary Level",
  description:
    "Physical Japanese group class for G.C.E. Ordinary Level students. Beginner-friendly structure with consistent practice and guidance.",
  alternates: { canonical: "/courses/olevel" },
};

export default function OLevelPage() {
  return <OLevelClient />;
}
