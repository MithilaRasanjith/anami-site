"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function VisaGuidanceClient() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HEADER */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                ANAMI Students Only • Guidance Service
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
                Visa Guidance & Interview Practice
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-muted">
                A supportive guidance service for ANAMI students planning to study in Japan — focused on
                interview practice, Jikoshokai preparation, and visa document understanding.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  WhatsApp for Details
                </Link>
              </div>

              <div className="mt-4 text-sm text-text-muted">
                Online guidance via WhatsApp / Call • Included for ANAMI students
              </div>
            </div>

            {/* RIGHT – INFO CARD */}
            <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
              <h3 className="text-lg font-semibold text-text-primary">Guidance Information</h3>

              <dl className="mt-4 space-y-4 text-sm">
                {[
                  { k: "Provided by", v: "Mr. Sujeewa Wijayanayake" },
                  { k: "Role", v: "Founder – ANAMI Japanese Language School" },
                  { k: "Mode", v: "Online (WhatsApp / Call)" },
                  { k: "Eligibility", v: "ANAMI students only" },
                  { k: "Fee", v: "Included for ANAMI students" },
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

      {/* WHAT WE HELP WITH */}
      <section className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="card p-8 transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary">What this guidance includes</h2>

            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "Interview practice for Japan student visa",
                "Jikoshokai (self-introduction) practice",
                "Understanding visa-related documents",
                "Document preparation guidance",
                "University / language school advice",
                "Application process explanation",
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
            <h2 className="text-2xl font-semibold text-text-primary">Who this service is for</h2>

            <ul className="mt-6 space-y-3 text-sm text-text-primary">
              {[
                "ANAMI students planning to study in Japan",
                "Students preparing for visa interviews",
                "Learners who need confidence in Jikoshokai",
                "Students who want clarity on documents & process",
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

      {/* HOW IT WORKS */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-text-primary">How the guidance works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "One-to-one guidance",
                desc: "Personal guidance sessions based on your situation.",
              },
              {
                title: "Practice focused",
                desc: "Interview and Jikoshokai practice with feedback.",
              },
              {
                title: "Supportive approach",
                desc: "Clear explanations without pressure or promises.",
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

      {/* IMPORTANT NOTE */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 shadow-md md:p-10">
          <h2 className="text-xl font-semibold text-text-primary">Important note</h2>

          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            This service provides guidance and practice support only. ANAMI Japanese Language School is not
            a visa agency and does not guarantee visa approval. Final decisions are made by the relevant
            authorities.
          </p>
        </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">Need guidance for your next step?</h2>
              <p className="mt-2 text-sm text-text-muted">
                This service is included for ANAMI students. Contact us to learn more.
              </p>
            </div>

            <div className="flex sm:justify-end">
              <Link href="/contact" className="btn-primary">
                WhatsApp for Details
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
