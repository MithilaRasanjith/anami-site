import Link from "next/link";

const trustItems = [
  { title: "Exam-focused syllabus", desc: "JLPT / NAT aligned lessons + practice" },
  { title: "Speaking & interview prep", desc: "Jikoshokai + confidence training" },
  { title: "Online via Zoom", desc: "Join from anywhere with structured classes" },
  { title: "Visa guidance", desc: "Supportive guidance for your process" },
];

const courses = [
  {
    title: "Special Group Class – JLPT / NAT N5",
    meta: "Small group • More guidance",
    points: [
      "Small-batch learning (more attention)",
      "Speaking + practice focused",
      "Exam-oriented N5 roadmap",
    ],
    href: "/courses/special-group-n5",
    isService: false,
  },
  {
    title: "Online Class – JLPT / NAT N5",
    meta: "Online via Zoom • Flexible learning",
    points: ["Live Zoom classes", "Structured N5 syllabus", "Weekly practice + feedback"],
    href: "/courses/online-n5",
    isService: false,
  },
  {
    title: "Visa Guidance",
    meta: "Support service",
    points: ["Document guidance support", "Interview & speaking prep", "Step-by-step consultation"],
    href: "/visa-guidance",
    isService: true,
  },
];

const testimonials = [
  {
    name: "Student A",
    role: "N5 Intake",
    quote:
      "The syllabus was super clear and the weekly practice made the exam feel easy. Speaking sessions helped a lot.",
  },
  {
    name: "Student B",
    role: "Online N5",
    quote:
      "The teachers are friendly, but strict in a good way. I improved my listening faster than expected.",
  },
  {
    name: "Student C",
    role: "Visa Guidance",
    quote:
      "The guidance was clear and supportive. The interview practice helped me feel confident and prepared.",
  },
];

const teachers = [
  { name: "Kasuni Sensei", focus: "JLPT/NAT N5 + Speaking", href: "/teachers" },
  { name: "Sujeewa Sensei", focus: "Interview + Guidance", href: "/teachers" },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-md md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
              🇯🇵 N5 Classes • Special Group / Online • Visa Guidance
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Learn Japanese the structured way — pass JLPT / NAT N5 with confidence.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Choose the learning style that fits you — Special Group N5, Online N5, plus supportive
              Visa Guidance.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="btn-primary">
                Register for N5
              </Link>
              <Link href="/courses" className="btn-outline">
                View Options
              </Link>
            </div>

            <div className="mt-4 text-sm text-text-muted">
              Online via Zoom • Speaking &amp; Jikoshokai practice • Visa guidance
            </div>
          </div>

          {/* HERO VISUAL (placeholder) */}
          <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
            <div className="aspect-[4/3] w-full rounded-2xl border border-border-light bg-bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-text-primary">Offerings</div>
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
                  Current
                </span>
              </div>

              <p className="mt-2 text-sm text-text-muted">
                Add a class photo/video later (Zoom class, classroom, students).
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-border-light bg-bg-white p-4">
                  <div className="font-semibold text-text-primary">Special Group</div>
                  <div className="text-text-muted">More attention</div>
                </div>
                <div className="rounded-2xl border border-border-light bg-bg-white p-4">
                  <div className="font-semibold text-text-primary">Online Class</div>
                  <div className="text-text-muted">Zoom learning</div>
                </div>
                <div className="rounded-2xl border border-border-light bg-bg-white p-4">
                  <div className="font-semibold text-text-primary">Exam Focus</div>
                  <div className="text-text-muted">JLPT / NAT N5</div>
                </div>
                <div className="rounded-2xl border border-border-light bg-bg-white p-4">
                  <div className="font-semibold text-text-primary">Visa Guidance</div>
                  <div className="text-text-muted">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="grid gap-3 md:grid-cols-4">
        {trustItems.map((t) => (
          <div key={t.title} className="card p-5">
            <div className="text-sm font-semibold text-text-primary">{t.title}</div>
            <div className="mt-1 text-sm text-text-muted">{t.desc}</div>
          </div>
        ))}
      </section>

      {/* COURSES */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Courses & Services</h2>
            <p className="mt-1 text-sm text-text-muted">
              Choose the option that fits you — Special Group N5, Online N5, or Visa Guidance.
            </p>
          </div>
          <Link href="/courses" className="text-sm font-semibold text-brand hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="text-sm font-semibold text-text-primary">{c.title}</div>
              <div className="mt-1 text-sm text-text-muted">{c.meta}</div>

              <ul className="mt-4 space-y-2 text-sm text-text-primary">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={c.href}
                className={`mt-5 inline-flex rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  c.isService
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-border-light bg-bg-white text-text-primary hover:bg-bg-soft"
                }`}
              >
                {c.isService ? "Contact / Details" : "Course details"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ANAMI */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold text-text-primary">Why ANAMI</h2>
          <p className="mt-2 text-sm text-text-muted">
            Built for consistent progress: structured lessons, practice, speaking, and supportive guidance.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              "Step-by-step lessons aligned to JLPT/NAT (N5)",
              "Weekly practice + feedback to stay on track",
              "Speaking practice (Jikoshokai + confidence)",
              "Supportive guidance (including visa guidance)",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-border-light bg-bg-soft p-4 text-sm text-text-primary"
              >
                {x}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border-light bg-bg-soft p-8 shadow-md">
          <h3 className="text-lg font-semibold text-text-primary">What you’ll get</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { k: "Special Group", v: "More attention & interaction" },
              { k: "Online Class", v: "Live Zoom learning" },
              { k: "Exam strategy", v: "Time + scoring tips" },
              { k: "Visa guidance", v: "Support when needed" },
            ].map((i) => (
              <div key={i.k} className="rounded-2xl border border-border-light bg-bg-white p-4">
                <div className="text-sm font-semibold text-text-primary">{i.k}</div>
                <div className="text-sm text-text-muted">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-text-primary">Student feedback</h2>
          <p className="mt-1 text-sm text-text-muted">
            Replace these with real student testimonials when you have them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6">
              <p className="text-sm text-text-primary">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-text-primary">{t.name}</div>
              <div className="text-xs text-text-muted">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHERS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Teachers</h2>
            <p className="mt-1 text-sm text-text-muted">
              Friendly, structured, and focused on real improvement.
            </p>
          </div>
          <Link href="/teachers" className="text-sm font-semibold text-brand hover:underline">
            Meet all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {teachers.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="text-sm font-semibold text-text-primary">{t.name}</div>
              <div className="mt-1 text-sm text-text-muted">{t.focus}</div>
              <Link
                href={t.href}
                className="mt-4 inline-flex rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                View profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              Not sure which option fits you?
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Message us and we’ll guide you to the best option (Special Group / Online / Visa Guidance).
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/contact"
              className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-center text-sm font-semibold text-text-primary hover:bg-bg-soft"
            >
              WhatsApp / Call
            </Link>
            <Link href="/courses" className="btn-primary">
              View Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
