"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function OnlineN5Client() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HEADER */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                Online via Zoom • JLPT / NAT N5 • First 2 Days FREE
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
                Online Class – JLPT / NAT N5
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-muted">
                A structured online Japanese language course for beginners, designed to build strong N5
                fundamentals through live Zoom classes, practice, and consistent guidance.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/register?course=online-n5" className="btn-primary">
                  Register Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-bg-soft"
                >
                  WhatsApp / Call
                </Link>
              </div>

              <div className="mt-4 text-sm text-text-muted">
                Attend from anywhere • Live Zoom sessions • Beginner friendly
              </div>
            </div>

            {/* RIGHT – COURSE INFO */}
            <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
              <h3 className="text-lg font-semibold text-text-primary">Course Information</h3>

              <dl className="mt-4 space-y-4 text-sm">
                {[
                  { k: "Teacher", v: "Ms. Kasuni Puwakowita" },
                  { k: "Schedule", v: "Friday & Saturday • 18.00 – 20.00" },
                  { k: "Duration", v: "5 Months" },
                  { k: "Mode", v: "Online (Zoom)" },
                  { k: "Course Fee", v: "LKR 10,000 (Full course)" },
                  { k: "Trial", v: "First 2 days FREE" },
                ].map((row, i) => (
                  <Reveal key={row.k} delayMs={i * 70}>
                    <div className="flex items-start justify-between gap-6">
                      <dt className="text-text-muted">{row.k}</dt>
                      <dd className="font-semibold text-text-primary">{row.v}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </Reveal>

      {/* WHAT YOU WILL LEARN */}
      <section className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="card p-8 transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary">What you’ll learn</h2>

            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "Hiragana & Katakana reading and writing",
                "Core N5 grammar patterns and sentence structures",
                "Essential vocabulary for daily communication",
                "Listening practice aligned with JLPT / NAT exams",
                "Basic speaking & self-introduction (Jikoshokai)",
              ].map((item, i) => (
                <Reveal key={item} delayMs={i * 60}>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="card p-8 transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary">Who this course is for</h2>

            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "Complete beginners with no Japanese knowledge",
                "Students who prefer online learning from home",
                "Working students with limited travel time",
                "Learners preparing for JLPT / NAT N5 exams",
              ].map((item, i) => (
                <Reveal key={item} delayMs={i * 60}>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* CLASS FORMAT */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-text-primary">How the online class works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Live Zoom Classes",
                desc: "Real-time interaction with the teacher during scheduled sessions.",
              },
              {
                title: "Structured Progress",
                desc: "Lessons planned across 5 months for steady improvement.",
              },
              {
                title: "Practice & Feedback",
                desc: "Regular speaking, listening, and revision activities.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delayMs={i * 90}>
                <div className="rounded-2xl border border-border-light bg-bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
                  <div className="font-semibold text-text-primary">{item.title}</div>
                  <div className="mt-1 text-sm text-text-muted">{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* WHY TRY THE FREE DAYS */}
      <section className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="card p-8 transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary">Why try the first 2 days free?</h2>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              The first two sessions are completely free so you can experience the teaching style, class
              structure, and comfort level before committing to the full course.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "Understand the teaching approach",
                "See if the pace suits you",
                "Interact with the teacher live",
                "Decide confidently before payment",
              ].map((item, i) => (
                <Reveal key={item} delayMs={i * 60}>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="rounded-3xl border border-border-light bg-bg-soft p-8 shadow-md">
            <h3 className="text-lg font-semibold text-text-primary">Course highlights</h3>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                { k: "Duration", v: "5 months" },
                { k: "Schedule", v: "Fri & Sat evenings" },
                { k: "Mode", v: "Live Zoom" },
                { k: "Fee", v: "LKR 10,000 (full course)" },
              ].map((i, idx) => (
                <Reveal key={i.k} delayMs={idx * 80}>
                  <div className="rounded-2xl border border-border-light bg-bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                    <div className="text-sm font-semibold text-text-primary">{i.k}</div>
                    <div className="text-sm text-text-muted">{i.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <Reveal>
          <h2 className="text-2xl font-semibold text-text-primary">Frequently asked questions</h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do I need any prior Japanese knowledge?",
              a: "No. This course starts from the basics and is suitable for complete beginners.",
            },
            {
              q: "Are the first two days really free?",
              a: "Yes. You can attend the first two sessions for free before deciding.",
            },
            {
              q: "Is this course suitable for JLPT / NAT exams?",
              a: "Yes. The syllabus is aligned with JLPT / NAT N5 requirements.",
            },
            {
              q: "How are the classes conducted?",
              a: "Classes are conducted live via Zoom on Friday and Saturday evenings.",
            },
          ].map((item, i) => (
            <Reveal key={item.q} delayMs={i * 80}>
              <div className="rounded-2xl border border-border-light bg-bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
                <div className="font-semibold text-text-primary">{item.q}</div>
                <div className="mt-1 text-sm text-text-muted">{item.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 shadow-md md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                Ready to start learning Japanese online?
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Join the free first two sessions and continue with the full N5 course if it suits you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-center text-sm font-semibold text-text-primary transition hover:bg-bg-soft"
              >
                WhatsApp / Call
              </Link>
              <Link href="/register?course=online-n5" className="btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
