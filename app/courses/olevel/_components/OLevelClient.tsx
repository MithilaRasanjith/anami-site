"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function OLevelClient() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HEADER */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                Physical Group Class • G.C.E. O/L • Limited to 20 students
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
                Group Class – G.C.E. Ordinary Level
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-muted">
                A beginner-friendly Japanese group class for school candidates — designed to build strong
                fundamentals with a clear structure and steady progress.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/register?course=olevel" className="btn-primary">
                  Register Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-bg-soft"
                >
                  WhatsApp / Call
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                <span>• Physical class</span>
                <span>• Beginner-friendly</span>
                <span>• Limited seats</span>
              </div>
            </div>

            {/* RIGHT – COURSE INFO */}
            <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
              <h3 className="text-lg font-semibold text-text-primary">Course Information</h3>

              <dl className="mt-4 space-y-4 text-sm">
                {[
                  { k: "Teacher", v: "Ms. Sewwandi Ekanayaka" },
                  { k: "Schedule", v: "Every Sunday • 13.00 – 15.00" },
                  { k: "Monthly Fee", v: "LKR 2,000" },
                  { k: "Location", v: "Gampaha – Udugampola" },
                  { k: "Class Type", v: "Physical" },
                  { k: "Seats", v: "Limited to 20 students" },
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

      {/* CONTENT */}
      <section className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="card p-8 transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary">What you’ll focus on</h2>
            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "Japanese basics (reading/writing foundation)",
                "Simple vocabulary & everyday phrases",
                "Speaking practice for confidence",
                "Weekly guidance to keep progress steady",
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
            <h2 className="text-2xl font-semibold text-text-primary">Who this class is for</h2>
            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "School students preparing alongside O/L studies",
                "Beginners who want physical classroom learning",
                "Students who prefer a guided group environment",
                "Learners who want steady weekly progress",
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

      {/* FORMAT */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-text-primary">Class format</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Physical class", desc: "In-person group learning in a calm environment." },
              { title: "Small group", desc: "Limited to 20 students for better attention." },
              { title: "Consistent progress", desc: "Weekly structure to improve step-by-step." },
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

      {/* FINAL CTA */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">Ready to join the O/L class?</h2>
              <p className="mt-2 text-sm text-text-muted">
                Seats are limited to 20 students. Register early to secure your spot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href="/contact" className="btn-outline">
                WhatsApp / Call
              </Link>
              <Link href="/register?course=olevel" className="btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
