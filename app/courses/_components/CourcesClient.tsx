"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

type Course = {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  href: string;
  isService?: boolean;
};

const courses: Course[] = [
  {
    title: "Special Group Class – JLPT / NAT N5",
    badge: "Small group • More guidance",
    description:
      "A small-batch N5 class designed for students who want closer attention, interaction, and a steady exam-focused learning pace.",
    highlights: [
      "Small group learning (more attention)",
      "Speaking & practice focused sessions",
      "JLPT / NAT aligned N5 syllabus",
    ],
    href: "/courses/special-group-n5",
  },
  {
    title: "Online Class – JLPT / NAT N5",
    badge: "Online via Zoom • Flexible",
    description:
      "Structured online N5 classes via Zoom, ideal for beginners who prefer learning from home with consistent guidance.",
    highlights: ["Live Zoom classes", "Structured N5 roadmap", "Weekly practice & feedback"],
    href: "/courses/online-n5",
  },

  // ✅ NEW COURSES
  {
    title: "Group Class – G.C.E. Ordinary Level",
    badge: "School candidates • Foundation focus",
    description:
      "Beginner-friendly Japanese foundation for students preparing alongside G.C.E. Ordinary Level studies.",
    highlights: ["Japanese language basics", "Structured learning approach", "Ideal for early-stage learners"],
    href: "/courses/olevel",
  },
  {
    title: "Group Class – G.C.E. Advanced Level",
    badge: "Focused learners • Progression track",
    description:
      "Structured Japanese learning support for students balancing Advanced Level studies with language development.",
    highlights: ["Progressive Japanese lessons", "Speaking & comprehension practice", "Designed for consistent progress"],
    href: "/courses/alevel",
  },

  {
    title: "Visa Guidance",
    badge: "Support service",
    description:
      "Guidance and support for visa-related documentation, interviews, and preparation for your next step.",
    highlights: ["Document guidance support", "Interview & speaking preparation", "Step-by-step consultation"],
    href: "/visa-guidance",
    isService: true,
  },
];

export default function CoursesClient() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* PAGE HEADER */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Courses & Services
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Choose the learning option that fits your goal — JLPT / NAT N5, G.C.E. O/L & A/L group classes,
              or supportive Visa Guidance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["JLPT / NAT aligned", "Online via Zoom", "Limited seats", "Beginner-friendly"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-text-muted"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="btn-primary">
                Register / Inquire
              </Link>
              <Link href="/contact" className="btn-outline">
                WhatsApp / Call
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* COURSES GRID */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, i) => (
          <Reveal key={course.title} delayMs={i * 90}>
            <div className="card p-7 transition hover:-translate-y-0.5 hover:shadow-md md:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
                  {course.badge}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-semibold text-text-primary">{course.title}</h2>

              <p className="mt-3 text-sm leading-relaxed text-text-muted">{course.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-text-primary">
                {course.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={course.href}
                  className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    course.isService
                      ? "bg-brand text-white hover:bg-brand-hover"
                      : "border border-border-light bg-bg-white text-text-primary hover:bg-bg-soft"
                  }`}
                >
                  {course.isService ? "Contact / Details" : "View details"}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* HELP SECTION */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-soft p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary">
                Not sure which option is right for you?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                If you’re new to Japanese, start with an N5 class.
                <br />
                Prefer closer attention? Choose the Special Group class.
                <br />
                Need flexibility? Go with the Online class.
                <br />
                Studying for school? Choose the O/L or A/L group classes.
                <br />
                Need support for the next step? Visa Guidance is for you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href="/contact"
                className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-center text-sm font-semibold text-text-primary hover:bg-bg-soft"
              >
                WhatsApp / Call
              </Link>
              <Link href="/register" className="btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
