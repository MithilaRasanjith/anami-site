"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type CourseOption = {
  label: string;
  value: string;
};

const courseOptions: CourseOption[] = [
  { label: "Special Group Class – JLPT / NAT N5", value: "Special Group Class – N5" },
  { label: "Online Class – JLPT / NAT N5", value: "Online Class – N5" },
  { label: "Group Class – G.C.E. Ordinary Level", value: "Group Class – O/L" },
  { label: "Group Class – G.C.E. Advanced Level", value: "Group Class – A/L" },
  { label: "Not sure yet (help me choose)", value: "Not sure yet" },
];

const courseParamToValue: Record<string, string> = {
  "special-group-n5": "Special Group Class – N5",
  "online-n5": "Online Class – N5",
  "olevel": "Group Class – O/L",
  "alevel": "Group Class – A/L",
  "not-sure": "Not sure yet",
};

function normalizePhone(input: string) {
  return input.replace(/[^\d]/g, "");
}

function buildWhatsAppLink(message: string, phoneE164?: string) {
  const encoded = encodeURIComponent(message);
  if (!phoneE164) return `https://wa.me/?text=${encoded}`;
  return `https://wa.me/${phoneE164}?text=${encoded}`;
}

export default function RegisterClient() {
  // Optional: put your WhatsApp business number in E.164 format (no +)
  // Example (Sri Lanka): "818039445160"
  const WHATSAPP_NUMBER = "94718657036";

  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(courseOptions[0].value);
  const [contactPref, setContactPref] = useState<"WhatsApp" | "Call">("WhatsApp");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(null);

  useEffect(() => {
    const courseParam = (searchParams.get("course") || "").trim();
    const mapped = courseParamToValue[courseParam];
    if (mapped) setCourse(mapped);
  }, [searchParams.get("course")]);

  const phoneDigits = useMemo(() => normalizePhone(phone), [phone]);

  const waMessage = useMemo(() => {
    const lines = [
      "Hello ANAMI Japanese Language School 👋",
      "",
      "I want to register / inquire about:",
      `• Course: ${course}`,
      `• Name: ${name || "-"}`,
      `• Phone: ${phoneDigits || "-"}`,
      `• Preferred contact: ${contactPref}`,
      message?.trim() ? `• Message: ${message.trim()}` : "",
      "",
      "Please share the next steps. Thank you!",
    ].filter(Boolean);
    return lines.join("\n");
  }, [course, name, phoneDigits, contactPref, message]);

  const canSubmit = name.trim().length >= 2 && phoneDigits.length >= 9;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    let savedOk = false;

    try {
      await addDoc(collection(db, "registrations"), {
        name: name.trim(),
        phone: phoneDigits,
        course,
        contactPref,
        message: message.trim() || "",
        source: "website",
        createdAt: serverTimestamp(),
      });
      savedOk = true;
      setStatus({ type: "success", text: "Saved ✓ Opening WhatsApp…" });
    } catch (err) {
      console.error("Failed to save registration:", err);
      setStatus({
        type: "error",
        text: "Couldn’t save to database, but WhatsApp will open. Please send the message.",
      });
    }

    setTimeout(() => {
      const link = buildWhatsAppLink(waMessage, WHATSAPP_NUMBER || undefined);
      window.open(link, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);

      if (savedOk) {
        setTimeout(() => setStatus(null), 2500);
      }
    }, 600);
  }

  return (
    <div className="space-y-14">
      {/* HEADER */}
      <Reveal>
        <section className="rounded-3xl border border-border-light bg-bg-white p-10 shadow-md">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-border-light bg-bg-soft px-3 py-1 text-xs text-text-muted">
              Registration / Inquiry
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Register for ANAMI
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Fill this form and send your details via WhatsApp. We’ll guide you with the next steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-text-muted">
                Special Group N5
              </span>
              <span className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-text-muted">
                Online N5
              </span>
              <span className="rounded-full border border-border-light bg-bg-soft px-3 py-1 text-text-muted">
                Visa Guidance (ANAMI students)
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FORM */}
      <Reveal>
        <section className="grid gap-8 md:grid-cols-5">
          {/* LEFT: FORM CARD */}
          <div className="card p-8 md:col-span-3">
            <h2 className="text-xl font-semibold text-text-primary">Your details</h2>
            <p className="mt-1 text-sm text-text-muted">
              We’ll use these details to contact you and confirm the schedule and fees.
            </p>

            {/* STATUS BANNER (NEW) */}
            {status && (
              <div className="mt-4 rounded-2xl border border-border-light bg-bg-soft px-4 py-3 text-sm text-text-primary">
                <span className="font-semibold">
                  {status.type === "success" ? "Success: " : "Notice: "}
                </span>
                {status.text}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-text-primary">Full name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eg: Mithila Rasanjith"
                    className="mt-2 w-full rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
                  />
                  <p className="mt-1 text-xs text-text-muted">Use your real name for registration.</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-text-primary">Phone number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Eg: 07X XXX XXXX"
                    inputMode="tel"
                    className="mt-2 w-full rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
                  />
                  <p className="mt-1 text-xs text-text-muted">Numbers only is fine.</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-text-primary">Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
                >
                  {courseOptions.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-text-muted">
                  Tip: If you came from a course page, this may already be selected.
                </p>
              </div>

              <div>
                <label className="text-sm font-semibold text-text-primary">Preferred contact</label>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setContactPref("WhatsApp")}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                      contactPref === "WhatsApp"
                        ? "bg-text-primary text-white"
                        : "border border-border-light bg-bg-white text-text-primary hover:bg-bg-soft"
                    }`}
                  >
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactPref("Call")}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                      contactPref === "Call"
                        ? "bg-text-primary text-white"
                        : "border border-border-light bg-bg-white text-text-primary hover:bg-bg-soft"
                    }`}
                  >
                    Call
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-text-primary">Message (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Eg: I’m a complete beginner. Please confirm next intake details."
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-border-light bg-bg-white px-4 py-3 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-muted">
                  By sending, you agree to share your details with ANAMI for registration purposes.
                </p>

                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${
                    !canSubmit || isSubmitting
                      ? "cursor-not-allowed bg-border-light text-text-muted"
                      : "bg-brand text-white hover:bg-brand-hover"
                  }`}
                >
                  {isSubmitting ? "Saving…" : "Send via WhatsApp"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: PREVIEW / HELP */}
          <div className="space-y-4 md:col-span-2">
            <div className="card p-6">
              <div className="text-sm font-semibold text-text-primary">What happens next?</div>
              <ul className="mt-3 space-y-2 text-sm text-text-primary">
                {[
                  "Your message opens in WhatsApp with details filled.",
                  "Send it to ANAMI and we’ll confirm the next steps.",
                  "We can guide you to the best option if you're unsure.",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border-light bg-bg-soft p-6">
              <div className="text-sm font-semibold text-text-primary">Preview</div>
              <p className="mt-2 text-xs text-text-muted">
                This is the WhatsApp message that will be generated.
              </p>
              <pre className="mt-3 whitespace-pre-wrap rounded-2xl border border-border-light bg-bg-white p-4 text-xs text-text-primary">
                {waMessage}
              </pre>

              <div className="mt-4 flex gap-2">
                <Link
                  href="/courses"
                  className="rounded-2xl border border-border-light bg-bg-white px-4 py-2 text-sm font-semibold text-text-primary hover:bg-bg-soft"
                >
                  View Courses
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}