// app/about/_components/AboutClient.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const values = [
  {
    title: "Structured learning",
    desc: "Step-by-step lessons aligned to JLPT / NAT — ideal for beginners.",
  },
  {
    title: "Real practice",
    desc: "Speaking + interview practice to build confidence and fluency.",
  },
  {
    title: "Supportive guidance",
    desc: "Clear guidance on visa documents and next steps for ANAMI students.",
  },
  {
    title: "Friendly environment",
    desc: "A calm, encouraging space where you can improve without fear.",
  },
];

const quickFacts = [
  { k: "Focus", v: "JLPT / NAT N5 + Visa Guidance" },
  { k: "Learning modes", v: "Special Group / Online (Zoom)" },
  { k: "Support", v: "Interview + Jikoshokai practice" },
  { k: "Guidance", v: "ANAMI students only (not an agency)" },
];

export default function AboutClient() {
  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-light bg-bg-white/90 backdrop-blur md:hidden">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex gap-2">
            <Link href="/contact" className="btn-outline w-full justify-center">
              WhatsApp
            </Link>
            <Link href="/register" className="btn-primary w-full justify-center">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* rhythm */}
      <div className="space-y-16 pb-20 md:space-y-20 md:pb-0">
        {/* HERO (simplified) */}
        <Reveal>
          <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                  JP About ANAMI
                </span>
                <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                  JLPT / NAT N5
                </span>
                <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                  Speaking + Jikoshokai
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
                A structured path to learn Japanese with confidence.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-text-muted">
                ANAMI Japanese Language School is built for beginners who want
                clear structure, consistent practice, and real speaking
                confidence — aligned to JLPT / NAT N5.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/courses" className="btn-outline">
                  View Courses
                </Link>
                <Link href="/contact" className="btn-primary">
                  WhatsApp / Contact
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                <span>• JLPT / NAT N5 focus</span>
                <span>• Online via Zoom</span>
                <span>• Beginner-friendly</span>
                <span>• Speaking + Guidance</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* QUICK FACTS (simplified) */}
        <section className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card p-7 transition hover:-translate-y-0.5 hover:shadow-md md:p-8">
              <h2 className="text-xl font-semibold text-text-primary">
                What we do
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                We focus on beginner-friendly Japanese learning with a
                structured N5 pathway, speaking practice, and supportive
                guidance for ANAMI students.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/courses" className="btn-primary">
                  View Courses
                </Link>
                <Link href="/teachers" className="btn-outline">
                  Meet Teachers
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-border-light bg-bg-soft p-7 shadow-md md:p-8">
              <h2 className="text-xl font-semibold text-text-primary">
                Quick facts
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Clear and simple — so you understand ANAMI fast.
              </p>

              <div className="mt-6 divide-y divide-border-light rounded-2xl border border-border-light bg-bg-white">
                {quickFacts.map((f) => (
                  <div
                    key={f.k}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="text-sm font-semibold text-text-primary">
                      {f.k}
                    </div>
                    <div className="text-sm text-text-muted">{f.v}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-text-muted">
                Note: Guidance is support for ANAMI students only — ANAMI is not
                an agency.
              </p>
            </div>
          </Reveal>
        </section>

        {/* VALUES */}
        <section className="space-y-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-text-primary">
                Why students choose ANAMI
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Simple, modern teaching — focused on progress and confidence.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="card p-7 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-sm font-semibold text-text-primary">
                    {v.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-text-muted">
                    {v.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FOUNDER / GUIDANCE */}
        <Reveal>
          <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">
                  Guidance for ANAMI students
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  ANAMI students receive guidance on interview preparation,
                  Jikoshokai practice, and visa document support. This guidance
                  is provided by the founder of ANAMI JLS,{" "}
                  <span className="font-semibold text-text-primary">
                    Mr. Sujeewa Wijayanayake
                  </span>
                  .
                </p>

                <div className="mt-5 grid gap-2 text-sm text-text-primary">
                  {[
                    "✔ Student visa guidance for Japan",
                    "✔ Document preparation support",
                    "✔ Interview preparation",
                    "✔ University / language school advice",
                    "✔ Application process explanation",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-border-light bg-bg-soft px-4 py-3 transition hover:bg-bg-white"
                    >
                      {x}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-text-muted">
                  Note: Guidance only — ANAMI is not an agency. Available for
                  ANAMI students only.
                </p>
              </div>

              <div className="rounded-3xl border border-border-light bg-bg-soft p-7 md:p-8">
                <div className="text-sm font-semibold text-text-primary">
                  Need details?
                </div>
                <p className="mt-2 text-sm text-text-muted">
                  Tap below and send a quick message. We’ll reply with the best
                  option for you.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/register" className="btn-primary">
                    Register / Inquire
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    WhatsApp for Details
                  </Link>
                </div>

                <div className="mt-4 text-xs text-text-muted">
                  Online support via WhatsApp / Call.
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
