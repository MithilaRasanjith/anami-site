// app/news/_components/FeaturedNewsCard.tsx
import Link from "next/link";
import type { NewsItem } from "@/lib/news-data";

type Props = {
  item: NewsItem;
};

export default function FeaturedNewsCard({ item }: Props) {
  return (
    <article className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1">
            Featured
          </span>
          <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1">
            {item.category}
          </span>
          <span>{item.date}</span>
          {item.location && <span>• {item.location}</span>}
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary">
          {item.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-text-muted">
          {item.excerpt}
        </p>

        <div className="mt-6">
          <Link href={`/news/${item.slug}`} className="btn-primary">
            Read Full Update
          </Link>
        </div>
      </div>
    </article>
  );
}