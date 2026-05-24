// app/news/page.tsx
import { Metadata } from "next";
import NewsClient from "./_components/NewsClient";
import { newsItems } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News | ANAMI Japanese Language School",
  description:
    "Latest updates, announcements, and events from ANAMI Japanese Language School.",
};

export default function NewsPage() {
  return <NewsClient items={newsItems} />;
}