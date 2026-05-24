// app/news/_components/NewsCard.tsx
import Link from "next/link";
import type { NewsItem } from "@/lib/news-data";

type Props = {
  item: NewsItem;
};

export default function NewsCard({ item }: Props) {
  return (
    <article className="card p-7 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
        <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1">
          {item.category}
        </span>
        <span>{item.date}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-text-primary">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {item.excerpt}
      </p>

      <div className="mt-6">
        <Link href={`/news/${item.slug}`} className="btn-outline">
          Read More
        </Link>
      </div>
    </article>
  );
}