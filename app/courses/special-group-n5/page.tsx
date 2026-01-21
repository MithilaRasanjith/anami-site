import Link from "next/link";

export default function SpecialGroupN5Page() {
  return (
    <div className="space-y-20">
      {/* HEADER */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
              Small Group • JLPT / NAT N5 • Limited to 20 students
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Special Group Class – JLPT / NAT N5
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              A small-group Japanese language class designed for beginners who want
              closer guidance, structured lessons, and consistent exam-focused progress.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/register?course=special-group-n5" className="btn-primary">
                Register Now
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-sm font-semibold text-text-primary hover:bg-bg-soft"
              >
                WhatsApp / Call
              </Link>
            </div>
          </div>

          {/* RIGHT – COURSE INFO */}
          <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Course Information
            </h3>

            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Teacher</dt>
                <dd className="font-semibold text-text-primary">
                  Ms. Sewwandi Ekanayaka
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Schedule</dt>
                <dd className="font-semibold text-text-primary">
                  Every Sunday • 08.30 – 13.00
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Monthly Fee</dt>
                <dd className="font-semibold text-text-primary">
                  LKR 5,000
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Location</dt>
                <dd className="font-semibold text-text-primary">
                  Gampaha – Udugampola
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Class Type</dt>
                <dd className="font-semibold text-text-primary">
                  Physical (Special Group)
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Seats</dt>
                <dd className="font-semibold text-text-primary">
                    Limited to 20 students
                </dd>
                </div>
            </dl>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold text-text-primary">
            What you’ll learn
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-text-primary">
            {[
              "Hiragana & Katakana reading and writing",
              "Basic Japanese sentence structures (N5 level)",
              "Essential vocabulary for daily conversations",
              "Listening practice for JLPT / NAT exams",
              "Basic speaking & self-introduction (Jikoshokai)",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-semibold text-text-primary">
            Who this class is for
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-text-primary">
            {[
              "Complete beginners with no Japanese knowledge",
              "Students who prefer face-to-face learning",
              "Learners who need closer teacher guidance",
              "Students preparing for JLPT / NAT N5",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLASS FORMAT */}
      <section className="rounded-3xl border border-border-light bg-bg-soft p-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Class format & approach
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Small Group",
              desc: "Limited number of students for better attention and interaction.",
            },
            {
              title: "Exam Focused",
              desc: "Lessons aligned with JLPT / NAT N5 exam patterns.",
            },
            {
              title: "Practice Oriented",
              desc: "Regular speaking, listening, and revision sessions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border-light bg-bg-white p-6"
            >
              <div className="font-semibold text-text-primary">
                {item.title}
              </div>
              <div className="mt-1 text-sm text-text-muted">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-text-primary">
          Frequently asked questions
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do I need any prior Japanese knowledge?",
              a: "No. This class is designed for complete beginners.",
            },
            {
              q: "Is this class suitable for JLPT / NAT exams?",
              a: "Yes. The syllabus is aligned with JLPT / NAT N5.",
            },
            {
              q: "Is the fee paid monthly?",
              a: "Yes. The fee is LKR 5,000 per month.",
            },
            {
              q: "Is this an online class?",
              a: "No. This is a physical special group class conducted in Gampaha – Udugampola.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-border-light bg-bg-white p-6"
            >
              <div className="font-semibold text-text-primary">{item.q}</div>
              <div className="mt-1 text-sm text-text-muted">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              Ready to join the Special Group N5 class?
            </h2>
            <p className="mt-2 text-sm text-text-muted">
                Limited to 20 students only. Contact us or register early to secure your spot.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/contact"
              className="rounded-2xl border border-border-light bg-bg-white px-6 py-3 text-center text-sm font-semibold text-text-primary hover:bg-bg-soft"
            >
              WhatsApp / Call
            </Link>
            <Link href="/register?course=special-group-n5" className="btn-primary">
              Register Now
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
