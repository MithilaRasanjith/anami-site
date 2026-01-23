import Link from "next/link";

const teachers = [
  {
    name: "Ms. Kasuni Puwakowita",
    role: "Online Class — JLPT / NAT N5",
    tags: ["Zoom classes", "Beginner-friendly", "Exam-focused"],
    bio:
      "Structured online lessons with clear weekly targets, speaking practice, and supportive feedback — designed for steady progress.",
    highlights: [
      "Friday & Saturday (18:00 – 20:00)",
      "5-month structured plan",
      "Speaking + confidence practice",
    ],
    cta: { label: "View Online Class", href: "/courses/online-n5?course=online-n5" },
  },
  {
    name: "Ms. Sewwandi Ekanayaka",
    role: "Special Group Class — JLPT / NAT N5",
    tags: ["In-person", "Small group", "Weekly practice"],
    bio:
      "Focused group learning with consistent practice and guidance. Ideal if you prefer a classroom environment and weekly accountability.",
    highlights: [
      "Every Sunday (08:30 – 13:00)",
      "Gampaha (Udugampola)",
      "Limited to 20 students",
    ],
    cta: { label: "View Special Group Class", href: "/courses/special-group-n5?course=special-group-n5" },
  },
];

const founder = {
  name: "Mr. Sujeewa Wijayanayake",
  role: "Founder — Guidance & Interview Support",
  bio:
    "Guidance for ANAMI students: interview practice, Jikoshokai practice, and visa document support. Guidance only — not an agency.",
  bullets: [
    "Student visa guidance for Japan",
    "Document preparation support",
    "Interview + Jikoshokai practice",
    "University / language school advice",
    "Application process explanation",
  ],
  note: "Available for ANAMI students only • Online support via WhatsApp / Call",
};

export default function TeachersPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
            Teachers
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Friendly, structured teaching — focused on real progress.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Meet the team behind ANAMI. Our teaching style is simple: structured lessons, consistent practice,
            and supportive feedback — so students can improve with confidence.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses" className="btn-primary">
              View Courses
            </Link>
            <Link href="/register" className="btn-outline">
              Register / Inquire
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHERS GRID */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-text-primary">Teachers</h2>
          <p className="mt-2 text-sm text-text-muted">
            You can choose a learning mode (special group or online) and get clear guidance for the next steps.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {teachers.map((t) => (
            <div key={t.name} className="card p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-text-primary">{t.name}</div>
                  <div className="mt-1 text-sm text-text-muted">{t.role}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.tags.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-text-muted">{t.bio}</p>

              <div className="mt-6 grid gap-2">
                {t.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-2xl border border-border-light bg-bg-soft px-4 py-3 text-sm text-text-primary"
                  >
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={t.cta.href} className="btn-primary">
                  {t.cta.label}
                </Link>
                <Link href="/register" className="btn-outline">
                  Register / Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER / GUIDANCE */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Guidance & Support</h2>
            <p className="mt-2 text-sm text-text-muted">
              For ANAMI students who want help with the next steps — interview practice, Jikoshokai practice,
              and visa documents.
            </p>

            <div className="mt-6 rounded-3xl border border-border-light bg-bg-soft p-6">
              <div className="text-lg font-semibold text-text-primary">{founder.name}</div>
              <div className="mt-1 text-sm text-text-muted">{founder.role}</div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">{founder.bio}</p>

              <div className="mt-5 grid gap-2">
                {founder.bullets.map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm text-text-primary"
                  >
                    ✔ {b}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-text-muted">{founder.note}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border-light bg-bg-soft p-8">
            <div className="text-sm font-semibold text-text-primary">Need help choosing?</div>
            <p className="mt-2 text-sm text-text-muted">
              Send a quick message and we’ll recommend the best option based on your level and goals.
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
              Note: Guidance is included for ANAMI students. ANAMI is not an agency.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Start your Japanese journey</h2>
            <p className="mt-2 text-sm text-text-muted">
              Choose a course, register, and we’ll guide you with the next steps.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link href="/courses" className="btn-outline">
              View Courses
            </Link>
            <Link href="/register" className="btn-primary">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
