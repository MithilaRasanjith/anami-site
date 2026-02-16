import type { Metadata } from "next";
import HomeClient from "./_components/HomeClient";

export const metadata: Metadata = {
  title: "Learn Japanese with confidence",
  description:
    "Beginner-friendly Japanese classes aligned to JLPT / NAT N5. Special Group & Online (Zoom) classes with speaking practice and supportive guidance.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
