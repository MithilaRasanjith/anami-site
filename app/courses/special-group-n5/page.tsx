import type { Metadata } from "next";
import SpecialGroupN5Client from "./_components/SpecialGroupN5Client";

export const metadata: Metadata = {
  title: "Special Group Class – N5",
  description:
    "Small-group JLPT / NAT N5 class with more guidance, speaking practice, and a structured roadmap for beginners.",
  alternates: { canonical: "/courses/special-group-n5" },
};

export default function SpecialGroupN5Page() {
  return <SpecialGroupN5Client />;
}
