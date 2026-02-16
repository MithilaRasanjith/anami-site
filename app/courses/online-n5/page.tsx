import type { Metadata } from "next";
import OnlineN5Client from "./_components/OnlineN5Client";

export const metadata: Metadata = {
  title: "Online Class – N5",
  description:
    "Online JLPT / NAT N5 classes via Zoom. Structured lessons, weekly practice, and feedback — join from anywhere.",
  alternates: { canonical: "/courses/online-n5" },
};

export default function OnlineN5Page() {
  return <OnlineN5Client />;
}
