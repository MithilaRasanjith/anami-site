import Link from "next/link";

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

export default function AboutPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
            About ANAMI Japanese Language School
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            A calm, structured path to learn Japanese — and move forward with confidence.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-muted">
            ANAMI Japanese Language School helps students learn Japanese the right way: structured lessons,
            consistent practice, and supportive guidance. Whether you join a Special Group class or learn online,
            our goal is the same — steady progress and real confidence.
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

      {/* QUICK FACTS */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-xl font-semibold text-text-primary">What we do</h2>
          <p className="mt-2 text-sm text-text-muted">
            We focus on beginner-friendly Japanese learning and practical support for the next steps.
          </p>

          <div className="mt-6 grid gap-3">
            {quickFacts.map((f) => (
              <div
                key={f.k}
                className="flex items-center justify-between rounded-2xl border border-border-light bg-bg-soft px-4 py-4"
              >
                <div className="text-sm font-semibold text-text-primary">{f.k}</div>
                <div className="text-sm text-text-muted">{f.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border-light bg-bg-soft p-8 shadow-md">
          <h2 className="text-xl font-semibold text-text-primary">Our approach</h2>
          <p className="mt-2 text-sm text-text-muted">
            The goal is not only passing exams — it’s becoming confident step by step.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              "Clear weekly structure (what to learn + what to practice)",
              "Speaking practice to reduce fear and improve fluency",
              "Mock exams + feedback to stay on track",
              "Friendly guidance so students feel supported",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-border-light bg-bg-white p-4 text-sm text-text-primary"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-text-primary">Why students choose ANAMI</h2>
          <p className="mt-2 text-sm text-text-muted">
            Simple, modern teaching — focused on progress and confidence.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card p-7">
              <div className="text-sm font-semibold text-text-primary">{v.title}</div>
              <div className="mt-2 text-sm text-text-muted">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER / GUIDANCE */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">Guidance for ANAMI students</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              ANAMI students receive guidance on interview preparation, Jikoshokai practice, and visa document support.
              This guidance is provided by the founder of ANAMI JLS, <span className="font-semibold text-text-primary">
              Mr. Sujeewa Wijayanayake</span>.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-text-primary">
              {[
                "✔ Student visa guidance for Japan",
                "✔ Document preparation support",
                "✔ Interview preparation",
                "✔ University / language school advice",
                "✔ Application process explanation",
              ].map((x) => (
                <div key={x} className="rounded-2xl border border-border-light bg-bg-soft px-4 py-3">
                  {x}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-text-muted">
              Note: Guidance only — ANAMI is not an agency. Available for ANAMI students only.
            </p>
          </div>

          <div className="rounded-3xl border border-border-light bg-bg-soft p-8">
            <div className="text-sm font-semibold text-text-primary">Need details?</div>
            <p className="mt-2 text-sm text-text-muted">
              Tap below and send a quick message. We’ll reply with the best option for you.
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
    </div>
  );
}
