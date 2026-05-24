// app/news/_components/NewsClient.tsx
"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { NewsItem } from "@/lib/news-data";
import FeaturedNewsCard from "./FeaturedNewsCard";
import NewsCard from "./NewsCard";

type Props = {
  items: NewsItem[];
};

export default function NewsClient({ items }: Props) {
  const featured = items.find((item) => item.featured);
  const regularItems = items.filter((item) => !item.featured);

  return (
    <div className="space-y-16 pb-20 md:space-y-20 md:pb-0">
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                ANAMI News
              </span>
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                Events & Updates
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              News, announcements, and school updates.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Stay updated with the latest events, announcements, and important
              moments from ANAMI Japanese Language School.
            </p>
          </div>
        </section>
      </Reveal>

      {featured && (
        <section className="space-y-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-text-primary">
                Featured update
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Highlights from the latest important event at ANAMI.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <FeaturedNewsCard item={featured} />
          </Reveal>
        </section>
      )}

      <section className="space-y-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-text-primary">
              Latest news
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Recent updates from ANAMI Japanese Language School.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {regularItems.map((item) => (
            <Reveal key={item.slug}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                Want to join ANAMI?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Get in touch to learn more about our courses, schedules, and
                student guidance.
              </p>
            </div>

            <div className="rounded-3xl border border-border-light bg-bg-soft p-7 md:p-8">
              <div className="text-sm font-semibold text-text-primary">
                Need details?
              </div>
              <p className="mt-2 text-sm text-text-muted">
                Contact us and we’ll help you choose the best option.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="btn-primary">
                  Register / Inquire
                </Link>
                <Link href="/contact" className="btn-outline">
                  WhatsApp / Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}