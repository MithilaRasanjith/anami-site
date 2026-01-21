import Link from "next/link";

export default function VisaGuidancePage() {
  return (
    <div className="space-y-20">
      {/* HEADER */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
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
              A supportive guidance service for ANAMI students planning to study in
              Japan — focused on interview practice, Jikoshokai preparation, and
              visa document understanding.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-brand px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-hover"
              >
                WhatsApp for Details
              </Link>
            </div>

            <div className="mt-4 text-sm text-text-muted">
              Online guidance via WhatsApp / Call • Included for ANAMI students
            </div>
          </div>

          {/* RIGHT – INFO CARD */}
          <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Guidance Information
            </h3>

            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Provided by</dt>
                <dd className="font-semibold text-text-primary">
                  Mr. Sujeewa Wijayanayake
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Role</dt>
                <dd className="font-semibold text-text-primary">
                  Founder – ANAMI Japanese Language School
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Mode</dt>
                <dd className="font-semibold text-text-primary">
                  Online (WhatsApp / Call)
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Eligibility</dt>
                <dd className="font-semibold text-text-primary">
                  ANAMI students only
                </dd>
              </div>

              <div className="flex justify-between">
                <dt className="text-text-muted">Fee</dt>
                <dd className="font-semibold text-text-primary">
                  Included for ANAMI students
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold text-text-primary">
            What this guidance includes
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-text-primary">
            {[
              "Interview practice for Japan student visa",
              "Jikoshokai (self-introduction) practice",
              "Understanding visa-related documents",
              "Document preparation guidance",
              "University / language school advice",
              "Application process explanation",
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
            Who this service is for
          </h2>

          <ul className="mt-6 space-y-3 text-sm text-text-primary">
            {[
              "ANAMI students planning to study in Japan",
              "Students preparing for visa interviews",
              "Learners who need confidence in Jikoshokai",
              "Students who want clarity on documents & process",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="rounded-3xl border border-border-light bg-bg-soft p-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          How the guidance works
        </h2>

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

      {/* IMPORTANT NOTE */}
      <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
        <h2 className="text-xl font-semibold text-text-primary">
          Important note
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          This service provides guidance and practice support only. ANAMI Japanese
          Language School is not a visa agency and does not guarantee visa approval.
          Final decisions are made by the relevant authorities.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-border-light bg-bg-soft p-10">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              Need guidance for your next step?
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              This service is included for ANAMI students. Contact us to learn more.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <Link
              href="/contact"
              className="rounded-2xl bg-brand px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-hover"
            >
              WhatsApp for Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
